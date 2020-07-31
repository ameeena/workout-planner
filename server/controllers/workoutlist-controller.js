// this will add, remove,  generate a list of workouts from the workput collection - based on the level 
const db = require("../config/config-mongo");
const workoutDb = db();
const workoutCollection = "workout";
const levels = ["easy", "medium", "hard"];

const ABS = "abs";
const SHOULDER = "shoulder";
const CARDIO = "cardio";
const LEGS = "legs";

exports.getWorkoutsBasedOnLevel = async (req, res) => {
    try {
        let difficultyLevel = req.params.level;
        let mongoResult = await workoutDb.collection(workoutCollection).aggregate([
            {
                $facet: {
                    q1: [
                        {
                            $match: { difficulty: levels[difficultyLevel], type: CARDIO }
                        },
                        {
                            $sample: { size: 2 }
                        }],
                    q2: [
                        {
                            $match: { difficulty: levels[difficultyLevel], type: SHOULDER }
                        },
                        {
                            $sample: { size: 3 }
                        },
                    ],
                    q3: [
                        {
                            $match: { difficulty: levels[difficultyLevel], type: LEGS }
                        },
                        {
                            $sample: { size: 2 }
                        }
                    ],
                    q4: [
                        {
                            $match: { difficulty: levels[difficultyLevel], type: ABS }
                        },
                        {
                            $sample: { size: 2 }
                        },
                    ]
                }
            }


        ]).toArray();
        let finalResult = [];
        for (let result of mongoResult) {
            finalResult = [...result.q1, ...result.q2, ...result.q3, ...result.q4];
        }

        let shuffledArray = shuffle(finalResult);
        return res.status(200).json(shuffledArray);
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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

