import { generateSalt, hashPassword } from "../auth/authentication.service.js";
import { saveUser } from "../user/user.repository.js";
class User {
  _id = undefined;
  username = undefined;
  hash = undefined;
  email = undefined;
  enabled = undefined;
  creationDate = undefined;
  gameIds = [];

  constructor(email, username, password) {
    if (!email) return this;
    const salt = generateSalt();
    this.email = email;
    this.username = username;
    this.hash = salt + hashPassword(password, salt);
    this.enabled = true;
    this.creationDate = new Date();
    return this;
  }

  fromJSON(json) {
    if (!json) return null;
    this._id = json._id;
    this.username = json.username;
    this.hash = json.hash;
    this.email = json.email;
    this.enabled = json.enabled;
    this.creationDate = json.creationDate;
    if (json.passwordResetToken)
      this.passwordResetToken = json.passwordResetToken;
    if (json.passwordResetTokenExpiration)
      this.passwordResetTokenExpiration = json.passwordResetTokenExpiration;
    return this;
  }

  async save() {
    return saveUser(this);
  }

  getSalt() {
    return this.hash.substring(0, 32);
  }

  getHash() {
    return this.hash.substring(32);
  }
}

export default User;