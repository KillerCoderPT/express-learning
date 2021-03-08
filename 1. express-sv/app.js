const config = require("config");
// export DEBUG=app:* OR DEBUG=app:* npm run start:dev
// const debug = require("debug")("app:debug");
const helmet = require("helmet");
const morgan = require("morgan");

const { courses, debug } = require("./routes/courses");
const homepage = require("./routes/homepage");
const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const auth = require("./middleware/auth");

app.set("view engine", "pug");
app.set("views", "./views");

// Configuration
debug("Application Name: " + config.get("name"));
debug("Mail Server: " + config.get("mail.host"));
// console.log("Mail Password: " + config.get("mail.password")); // Terminal: $  export app_password=1234

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static("public"));

app.use(helmet()); // Secure headers
if (app.get("env") === "development") {
  debug("Morgan enabled...");
  app.use(morgan("tiny")); // Requests logger
}

app.use(logger);
app.use(auth);

app.use("/", homepage);
app.use("/api/courses", courses);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
