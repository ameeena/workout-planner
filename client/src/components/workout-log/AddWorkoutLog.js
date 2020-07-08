import React, { useState } from "react";

const AddWorkoutLog = ({ addWorkoutLog, handleClick, logRequirements }) => {

    const [reps, updateReps] = useState([])

    const handleChange = (event) => {
        let workoutValue = event.target.value;
        let workoutName = event.target.name;
        let repValue = {};
        repValue[workoutName] = workoutValue;
        updateReps(Object.assign({}, reps, repValue));
    };

    let workoutInputElem = logRequirements.workoutList.map((elem) => (
        <div key={elem._id}>
            <label>{elem.name}</label>
            <input name={elem._id} onChange={handleChange} type="number" />
        </div>
    ))
    // iterate over workoutDetails and construct a form
    return (
        <div>
            <div>{workoutInputElem}</div>
            <button onClick={() => handleClick(reps, logRequirements.date, logRequirements.scheduleId)}>Update !!</button>
        </div>
    )
}
export default AddWorkoutLog;