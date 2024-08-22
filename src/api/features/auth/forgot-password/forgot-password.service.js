import logger from "../../../config/winston.config.js";
import { ValidationError } from "../../../errors/ValidationError.js";
import { EMAIL_REGEX } from "../../../shared/constants.js";
import { resetPasswordEmail } from "../../email/index.js";
import { userRepository } from "../../user/index.js";
import { authService } from "../index.js";

/**
 * Processes the request to send a password reset link via email. Most errors default to a success to hide output to users.
 * 
 * @param {string} email The email address that potentially belongs to a user account.
 * @returns {Promise<object | ValidationError>} A promise that resolves to an object with a success message or a ValidationError.
 */
const forgotPassword = async (email) => {
  const successResponse = {
    statusCode: 200,
    message:
      "If the email matches an account, a password reset link will be sent with next steps.",
  };

  if (!EMAIL_REGEX.test(email)) {
    return new ValidationError(
      "The email address is not a valid email format."
    );
  }

  const dbUser = await userRepository.findBy("email", email);
  if (!dbUser) {
    logger.debug("Trying to reset password for invalid email address", {
      email: email,
    });
    return successResponse;
  }

  const token = authService.generateSalt(32);

  dbUser.passwordResetToken = token;
  dbUser.passwordResetTokenExpiration = new Date(Date.now() + 1000 * 60 * 60);

  const saveUserResult = await dbUser.save();
  if (!saveUserResult) {
    logger.error("Failed to save user with reset token", {
      email: email,
      token: token,
      dbUser: dbUser,
    });
    return successResponse;
  }

  const sendEmailResponse = await resetPasswordEmail.send(dbUser, token);
  if (!sendEmailResponse) {
    logger.error("Failed to send password reset email", {
      email: email,
      token: token,
      dbUser: dbUser,
    });
    return successResponse;
  }

  return successResponse;
};

export default {
  forgotPassword,
};
