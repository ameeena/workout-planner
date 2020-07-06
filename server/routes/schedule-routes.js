// get the controller
const scheduleController = require("../controllers/schedule-controller");
module.exports = function (app) {
    app.post("/api/schedule", scheduleController.addSchedule);
    app.get("/api/schedule", scheduleController.getScheduleList);
    app.get("/api/schedule/:id", scheduleController.getScheduleById);
}