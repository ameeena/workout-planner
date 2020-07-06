const workoutController = require("../controllers/workout-controller");

module.exports = function (app) {
  app.get("/api/workout/:level", workoutController.getWorkoutOnLevel);
  app.post("/api/workout/", workoutController.addAcceptedWorkoutToDb);
  app.get("/api/workoutlog/:name", workoutController.getWorkOutBasedOnNames);
  app.get("/api/workoutlog/", workoutController.getWorkoutLog);
  app.post("/api/workoutlog/", workoutController.updateWorkoutLogs);
};
