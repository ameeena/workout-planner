// this will add, remove,  generate a list of workouts from the workput collection - based on the level 
const db = require("../config/config-mongo");
const workoutDb = db();
const workoutCollection = "workout";
const levels = ["easy", "medium", "hard"];
exports.getWorkoutsBasedOnLevel = async (req, res) => {
    try {
        let difficultyLevel = req.params.level;

        // get random generated value from the Workout list workoutCollection
        let result = await workoutDb.collection(workoutCollection).aggregate([
            {
                $match: { difficulty: levels[difficultyLevel] }
            }, {
                $sample: {
                    size: 9,
                }
            }
        ]).toArray();
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.addWorkouts = async (req, res) => {
    try {
        let workoutList = req.body;
        // workoutlist should contain  - workout name, id, description, difficulty, type
        let result = await workoutDb.collection(workoutCollection).insertMany(workoutList);
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.getAllWorkouts = async (req, res) => {
    try {
        let result = await workoutDb.collection(workoutCollection).find({}).toArray();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(err);
    }
}


