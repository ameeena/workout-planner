// Do all the file operations here

const fs = require("fs");
const path = require("path");
const constants = require("../constants");
const util = require("util");
const levelEnum = require("../models/level-model");
var ObjectID = require('mongodb').ObjectID;



// require db details
const db = require("../config/config-mongo");
const workoutDb = db();

const readFile = util.promisify(fs.readFile);
var fileContents = "";

// Read json file at the beginning once
readJsonFile()
  .then(() => {
    console.log("File contents read successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

exports.getWorkoutOnLevel = (req, res) => {
  // get the body of the req, check the type and return appropriately
  try {
    let level = req.params.level;
    let result = getWorkoutBasedOnLevel(level);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.addAcceptedWorkoutToDb = async (req, res) => {
  try {
    let workoutDetails = req.body.workoutDetails;
    const result = await workoutDb.collection("workouts").insertOne(workoutDetails);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    res.status(200).json("Added to DB");
  }
  catch (err) {
    res.status(500).json(err);
  }

  // {
  //   workoutDetails: {
  //     workoutList: [
  //       'inchworm',
  //       'crunches',
  //       'sit-ups',
  //       'prisoner squat',
  //       'lateral shoot throughs',
  //       'chops',
  //       'star jumps',
  //       'jump squats',
  //       'high-knees'
  //     ],
  //     isLogged: false,
  //     date: 1593874008169
  //   }
  // }
}

exports.getWorkoutLog = async (req, res) => {
  // await workoutDb.collection("workouts").find({}).toArray((err, result) => {
  //   res.status(200).json(result);
  // });
  try {
    let result = await workoutDb.collection("workouts").find({}).toArray();
    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

exports.updateWorkoutLogs = async (req, res) => {
  try {
    console.log(req.body);
    let workoutLogDetails = req.body.workoutLogDetails;
    let arrayOfWorkoutLog = [];
    for (let key in workoutLogDetails.workouts) {
      // construct the object key
      let objectCreation = {
        name: key,
        reps: workoutLogDetails.workouts[key],
        date: workoutLogDetails.date
      };
      arrayOfWorkoutLog.push(objectCreation);
    }
    let workoutDocId = workoutLogDetails.workoutId;
    let result = await workoutDb.collection("workout-log").insertMany(arrayOfWorkoutLog);
    // pick the id from the params and set isLogged as true
    let updatedWorkoutLog = await workoutDb.collection("workouts").updateOne({ _id: ObjectID(workoutDocId) }, { $set: { isLogged: true } });
    console.log(updatedWorkoutLog);
    res.status(200).json(updatedWorkoutLog);
  }
  catch (err) {
    res.status(500).send(err);
  }
}

exports.getWorkOutBasedOnNames = async (req, res) => {
  try {
    let workoutName = req.params.name;
    console.log(workoutName);
    let result = await workoutDb.collection("workout-log").find({ name: workoutName }).toArray();
    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).send(err);
  }
}

//#region  Private Fields
async function readJsonFile() {
  fileContents = await readFile(
    path.join(process.mainModule.path, constants.WORKOUTPATH),
    "utf8"
  );
}

function getWorkoutBasedOnLevel(level) {
  // TODO: Remove this and make it cleaner
  if (level == levelEnum.easy) {
    level = "easy";
  } else if (level == levelEnum.medium) {
    level = "medium";
  } else if (level == levelEnum.hard) {
    level = "hard";
  }
  let data = JSON.parse(fileContents);
  let levelBasedWorkout = data[level];
  let categoryList = Object.keys(levelBasedWorkout);
  let workoutList = [];
  // TODO : Remove duplicates
  for (let i = 0; i < constants.TOTALNUMBER; i++) {
    let currentCategory = Math.floor(Math.random() * categoryList.length);
    let categorySpecific = levelBasedWorkout[categoryList[currentCategory]];
    let currentRandomWO =
      categorySpecific[Math.floor(Math.random() * categorySpecific.length)];

    // check for duplicates
    workoutList.indexOf(currentRandomWO) == -1
      ? workoutList.push(currentRandomWO)
      : (i = i - 1);
  }
  console.log(workoutList);
  return workoutList;
}

function getChallengeWorkouts() {
  // Get list of workouts for eachday with reps.
  // create challenges based on no. of days
  // Like a month - challenge , week - challenge etc.
}
//#endregion
