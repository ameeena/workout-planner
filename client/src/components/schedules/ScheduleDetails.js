// This will again connect to the react
import React from "react";
import { useHistory } from "react-router-dom";


const ScheduleDetails = () => {

    const history = useHistory();
    const scheduleDetails = history.location.state.scheduleDetails;

    let scheduleBasedWorkoutsList = <div></div>
    if (scheduleDetails.workoutList != undefined) {
        scheduleBasedWorkoutsList = scheduleDetails.workoutList.map((elem) => (
            <li key={elem._id}>{elem.name}</li>
        ))
    }

    return (
        <div>
            <div>Name : {scheduleDetails.name}</div>
            <div>Date : {scheduleDetails.date}</div>
            <label>List of workouts : </label>
            <div>{scheduleBasedWorkoutsList}</div>
            <button onClick={() => history.push("/workoutlog", {
                LogReq: {
                    workoutList: scheduleDetails.workoutList,
                    date: scheduleDetails.date,
                    scheduleId: scheduleDetails._id

                }
            })}> Add Log</button>
        </div>
    );
}

export default ScheduleDetails;
