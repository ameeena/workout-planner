import React, { useState } from "react";
import { Typography, Button, Grid, Box, TextField } from "@material-ui/core";

const AddWorkoutLog = ({ handleClick, logRequirements }) => {

    const [reps, updateReps] = useState([])

    const handleChange = (event) => {
        let workoutValue = event.target.value;
        let workoutName = event.target.name;
        let repValue = {};
        repValue[workoutName] = workoutValue;
        updateReps(Object.assign({}, reps, repValue));
    };

    let workoutInputElem = logRequirements.workoutList.map((elem) => (
        <Grid container spacing={3} key={elem._id}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
                <Typography gutterBottom variant="subtitle1" component="label">{elem.name}</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField name={elem._id} onChange={handleChange} type="number"></TextField>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    ))
    // iterate over workoutDetails and construct a form
    return (
        <Box align="center">
            <Typography style={{ margin: "20px" }} align="center" variant="h3" component="h3">Workout Logger</Typography>
            {workoutInputElem}
            <Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={() => handleClick(reps, logRequirements.date, logRequirements.scheduleId)}>Update Log</Button>
        </Box >
    )
}
export default AddWorkoutLog;