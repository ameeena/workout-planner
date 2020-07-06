const workoutLoggerController = require("../controllers/workout-logger-controller");

module.exports = function (app) {
    app.post("/api/workoutlogger/", workoutLoggerController.updateLogger);
}

