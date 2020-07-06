const workoutlistController = require("../controllers/workoutlist-controller");

module.exports = function (app) {
    app.get("/api/workoutlist/", workoutlistController.getAllWorkouts);
    app.post("/api/workoutlist/", workoutlistController.addWorkouts);
    app.get("/api/workoutlist/:level", workoutlistController.getWorkoutsBasedOnLevel);
}