const workoutLoggerController = require("../controllers/workout-logger-controller");

module.exports = function (app) {
    app.get("/api/workoutlog", workoutLoggerController.getWorkoutLogs)
    app.post("/api/workoutlog/", workoutLoggerController.addWorkoutLogs);
    app.get("/api/workoutlog/:scheduleId", workoutLoggerController.getWorkoutLogsById);
}

