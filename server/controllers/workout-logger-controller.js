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
            await workoutDb.collection(workoutLoggerCollection).insertOne(eachWorkoutLog);
        }
        return res.status(200).json(true);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

// get all the workouts -  maybe based on schedule id
exports.getWorkoutLogsById = async (req, res) => {
    try {
        let scheduleId = req.params.scheduleId;
        let result = await workoutDb.collection(workoutLoggerCollection).find({ scheduleId: scheduleId }).toArray();
        let workoutIds = result.map((elem) => ObjectID(elem.workoutId));
        let workoutNames = await workoutDb.collection(workoutCollection).find({ _id: { $in: workoutIds } }).toArray();
        for (const eachWorkout of result) {
            eachWorkout["workoutName"] = workoutNames.find(elem => elem._id == eachWorkout.workoutId).name;
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getWorkoutLogs = async (req, res) => {
    try {
        // get A list of all workouts and group by workout Id and send
        let result = await workoutDb.collection(workoutLoggerCollection).aggregate([{ $group: { _id: "$workoutId", data: { $push: { date: "$date", reps: "$reps", repId: "$_id" } } } }]).toArray();
        let workoutIds = result.map((elem) => ObjectID(elem._id));
        let workoutNames = await workoutDb.collection(workoutCollection).find({ _id: { $in: workoutIds } }).toArray();
        for (const eachWorkout of result) {
            eachWorkout["workoutName"] = workoutNames.find(elem => elem._id == eachWorkout._id).name;
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json(error);
    }
}

