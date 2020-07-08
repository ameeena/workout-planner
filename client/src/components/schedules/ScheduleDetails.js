// This will again connect to the react
import React from "react";
import { useHistory } from "react-router-dom";


const ScheduleDetails = ({ scheduleDetails }) => {

    const history = useHistory();

    const scheduleBasedWorkoutsList = scheduleDetails.workoutList.map((elem) => (
        <li key={elem._id}>{elem.name}</li>
    ))

    const handleClick = () => {
        history.push("/workoutlog", {
            LogReq: {
                workoutList: scheduleDetails.workoutList,
                date: scheduleDetails.date,
                scheduleId: scheduleDetails._id
            }
        })
    }

    return (
        <div>
            <div>Name : {scheduleDetails.name}</div>
            <div>Date : {scheduleDetails.date}</div>
            <label>List of workouts : </label>
            <div>{scheduleBasedWorkoutsList}</div>
            <button onClick={handleClick}> Add Log</button>
        </div>
    );
}
export default ScheduleDetails;
