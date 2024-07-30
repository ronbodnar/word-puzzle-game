import path from "node:path";
import express from "express";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import session from "express-session";
import cookieSession from "cookie-session";
import { router as routes } from "../routes/index.js";
import { __dirname } from "../constants.js";
import logger from "./winston.config.js";

export const app = express();

// Set up the cookie session middleware.
app.use(
  cookieSession({
    name: process.env.COOKIE_NAME,
    secret: process.env.COOKIE_SECRET,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Set up the session middleware.
app.use(session({
  resave: false, // don't save unmodified sessions
  saveUninitialized: false, // don't create empty sessions
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
}));
 
// Limit requests to 1 per second.
app.use(
  rateLimit({
    windowMs: 1000,
    limit: 1,
    skip: (req, res) => !req.url.startsWith('/word') || !req.url.startsWith('/game') || !req.url.startsWith('/session')
  })
);

// Parse application/json content
app.use(bodyParser.json());

// Load the static assets from the assets folder
app.use(express.static(path.join(__dirname, "..", "public")));

// Assign routes starting with the root path
app.use("/", routes);

app.use("*", function (req, res) {
  logger.info(`Request received at: ${req.url}`);
});

export default app;