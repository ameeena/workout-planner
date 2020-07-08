import React from "react";
import PropTypes from "prop-types"

const ScheduleList = ({ schedules, handleClick }) => {

    const scheduleList = schedules.map((schedule) => (
        <div key={schedule._id}>
            <div>{schedule._id}</div>
            <div> {schedule.name}</div>
            <div> {schedule.date}</div>
            <button onClick={() => handleClick(schedule._id)}> Get Details </button>
            <hr />
        </div>
    ))

    return (
        <div>
            <h2>Schedule List</h2>
            <div>{scheduleList}</div>
        </div>
    )
}

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default ScheduleList;