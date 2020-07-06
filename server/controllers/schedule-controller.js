// This controller will be responsible for performing generation of schedules etc.

// collection name
const db = require("../config/config-mongo");
const { ObjectId } = require("mongodb");
const workoutDb = db();
const workoutCollection = "workout";
const scheduleCollection = "schedule";
var ObjectID = require('mongodb').ObjectID;


exports.addSchedule = async (req, res) => {
    // generate a schedule
    // Workout collection has a list of workout details 
    // schedule for the day will contain -- date and list of workout ids 
    let scheduleForTheDay = req.body.scheduleDetails;
    try {
        let result = await workoutDb.collection(scheduleCollection).insertOne(scheduleForTheDay);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.getScheduleById = async (req, res) => {
    try {
        let schedulerId = req.params.id;
        let schedule = await workoutDb.collection(scheduleCollection).findOne({ _id: ObjectId(schedulerId) });
        let listOfIds = schedule.workoutList.map(elem => ObjectId(elem));
        let workoutList = await workoutDb.collection(workoutCollection).find({ _id: { $in: listOfIds } }).toArray();
        let result = Object.assign({}, { name: schedule.name, date: schedule.date, workoutList: workoutList });
        res.status(200).json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getScheduleList = async (req, res) => {
    try {
        let result = await workoutDb.collection(scheduleCollection).find({}).toArray();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}