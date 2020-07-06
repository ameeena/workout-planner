// required modules
const { MongoClient } = require("mongodb");
// mongo DB config details
const mongoConfigDetails = {
    dbName: "workoutDB",
    connectionString: "mongodb://localhost:27017"
}
// TODO: move it to a more constant place
const collectionNames = {
    "WORKOUT_DETAILS": "workout",
    "SCHEDULES": "schedule",
    "WORKOUT_LOGGER": "workout-logger"
};
module.exports = () => {
    const client = new MongoClient(mongoConfigDetails.connectionString, { useUnifiedTopology: true });
    client.connect();
    // connect client to db
    const db = client.db(mongoConfigDetails.dbName);

    // create collection from the collection list
    db.createCollection(collectionNames.WORKOUT_DETAILS);
    db.createCollection(collectionNames.SCHEDULES);
    db.createCollection(collectionNames.WORKOUT_DETAILS);

    return db;
}