
// This component will contain list of all the workouts that are scheduled with its details

import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardContent, Typography, Grid } from "@material-ui/core";

const Workouts = ({ workouts }) => {
    const workoutElem = workouts.map((eachWorkout) => (
        // <div key={eachWorkout._id}>
        //     <div>{eachWorkout.name}</div>
        //     <div>{eachWorkout.description}</div>
        //     <div>{eachWorkout.type}</div>
        //     <div>{eachWorkout.difficulty}</div>
        //     <hr />
        // </div>
        <Grid xs={4} item key={eachWorkout._id}>
            <Card variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {eachWorkout.name}
                    </Typography>
                    <Typography gutterBottom variant="body2">Type : {eachWorkout.type}</Typography>
                    <Typography gutterBottom variant="body2">Level : {eachWorkout.difficulty}</Typography>
                </CardContent>
                {/* <CardActions></CardActions> */}
            </Card>
        </Grid>
    ))

    return (<Grid container spacing={3}>{workoutElem}</Grid>)
}

Workouts.propTypes = {
    workouts: PropTypes.array.isRequired
}

export default Workouts;