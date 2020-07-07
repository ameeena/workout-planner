// This will be responsible for having all the logs of my workout
const db = require("../config/config-mongo");
var ObjectID = require('mongodb').ObjectID;
const workoutDb = db();
const workoutLoggerCollection = "workout-logger";
const workoutCollection = "workout";

exports.addWorkoutLogs = async (req, res) => {

    try {
        let loggerDetails = req.body.workoutLogDetails;

        await workoutDb.collection(workoutLoggerCollection).createIndex({ scheduleId: 1 });
        await workoutDb.collection(workoutLoggerCollection).createIndex({ workoutId: 1 });

        for (var workoutId in loggerDetails.reps) {
            let eachWorkoutLog = {
                date: loggerDetails.date,
                reps: loggerDetails.reps[workoutId],
                scheduleId: loggerDetails.scheduleId,
                workoutId: workoutId
            }
            console.log(eachWorkoutLog);
            await workoutDb.collection(workoutLoggerCollection).insertOne(eachWorkoutLog);
        }
        return res.status(200).json(true);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

// get all the workouts -  maybe based on schedule id
exports.getWorkoutLogs = async (req, res) => {
    try {
        let scheduleId = req.params.scheduleId;
        let result = await workoutDb.collection(workoutLoggerCollection).find({ scheduleId: scheduleId }).toArray();
        let workoutIds = result.map((elem) => ObjectID(elem.workoutId));
        let workoutNames = await workoutDb.collection(workoutCollection).find({ _id: { $in: workoutIds } }).toArray();
        console.log(workoutNames);
        for (const eachWorkout of result) {
            eachWorkout["workoutName"] = workoutNames.find(elem => elem._id == eachWorkout.workoutId).name;
        }
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}
