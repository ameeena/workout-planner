import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import * as workoutLogActionCreators from "../../action-creators/workout-log-actions";

const AddWorkoutLog = ({ addWorkoutLog }) => {

    const [reps, updateReps] = useState([])

    const history = useHistory();
    let logRequirements = history.location.state.LogReq;

    const handleChange = (event) => {
        let workoutValue = event.target.value;
        let workoutName = event.target.name;
        let repValue = {};
        repValue[workoutName] = workoutValue;
        updateReps(Object.assign({}, reps, repValue));
    };

    const handleClick = () => {
        // Update to the DB 
        // This will contain --> workout ID, schedule ID, date and reps
        let loggerDetails = {
            reps: reps,
            date: logRequirements.date,
            scheduleId: logRequirements.scheduleId
        }
        console.log(loggerDetails);
        addWorkoutLog(loggerDetails);
    }

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
            <button onClick={handleClick}>Update !!</button>
        </div>
    )
}


// connect to redux to add the workout Details
function mapDispatchToProps(dispatch) {
    return {
        addWorkoutLog: (workoutLogDetails) => dispatch(workoutLogActionCreators.addWorkoutLog(workoutLogDetails))
    }
}

function mapStateToProps(state) {
    return {
        state: state.workoutLogs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutLog);