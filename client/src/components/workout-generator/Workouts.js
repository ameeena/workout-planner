
// This component will contain list of all the workouts that are scheduled with its details

import React from "react";
import PropTypes from "prop-types";

const Workouts = ({ workouts }) => {
    const workoutElem = workouts.map((eachWorkout) => (
        <div key={eachWorkout._id}>
            <div>{eachWorkout.name}</div>
            <div>{eachWorkout.description}</div>
            <div>{eachWorkout.type}</div>
            <div>{eachWorkout.difficulty}</div>
            <hr />
        </div>))

    return (<div>{workoutElem}</div>)
}

Workouts.propTypes = {
    workouts: PropTypes.array.isRequired
}

export default Workouts;