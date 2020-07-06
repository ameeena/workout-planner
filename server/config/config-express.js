// Configure all the middlewears here
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = function () {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
  });

  // require("../routes/workout-routes.js")(app);
  require("../routes/workoutlist-routes.js")(app);
  require("../routes/schedule-routes.js")(app);
  require("../routes/workoutlogger-routes")(app);
  return app;
};
