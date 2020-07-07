const workoutLoggerController = require("../controllers/workout-logger-controller");

module.exports = function (app) {
    app.post("/api/workoutlog/", workoutLoggerController.addWorkoutLogs);
    app.get("/api/workoutlog/:scheduleId", workoutLoggerController.getWorkoutLogs);
}

