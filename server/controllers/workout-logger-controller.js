// This will be responsible for having all the logs of my workout
const db = require("../config/config-mongo");
const workoutDb = db();
const workoutLoggerCollection = "workout-logger";

exports.updateLogger = async (req, res) => {
    // get schedule ID, get Workout ID and update log details.
    // that will include reps etc.
    try {
        let loggerDetails = req.body;
        let result = await workoutDb.collection(workoutLoggerCollection).createIndexes([{ scheduleId: loggerDetails.scheduleId, workoutId: loggerDetails.workoutId }]);
        console.log(result);
        let resultFinal = await workoutDb.collection(workoutLoggerCollection).insertOne(loggerDetails);
        console.log(resultFinal);
        return res.status(200).json(resultFinal);

    } catch (error) {
        return res.status(500).json(error);
    }
}
