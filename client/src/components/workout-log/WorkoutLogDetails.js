import React from "react";


const WorkoutLogDetails = ({ workoutLogs }) => {
    let index = 0;
    let workoutLog = workoutLogs.map(elem => (
        <div key={elem._id}>
            <div>{elem.workoutName}</div>
            <div>
                <div><strong> Date  =======  Reps</strong> </div>
                {elem.data.map((result) => (
                    <div key={index++}>
                        <span>{result.date} <strong> ======= </strong></span>
                        <span>{result.reps}</span>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    ))
    return (<div>{workoutLog}</div>)
}

export default WorkoutLogDetails;
