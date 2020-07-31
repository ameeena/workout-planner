import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import * as workoutLogActionCreators from "../../action-creators/workout-log-actions";
import AddWorkoutLog from "./AddWorkoutLog";
import WorkoutLogDetails from "./WorkoutLogDetails";

const WorkoutLog = ({ addWorkoutLog, getWorkoutLogs, workoutLogs }) => {

    const history = useHistory();
    let logRequirements = history.location.state;

    useEffect(() => {
        getWorkoutLogs();
    }, [logRequirements]);

    const handleAddWorkoutLogClick = (reps, date, scheduleId) => {
        let loggerDetails = {
            reps: reps,
            date: date,
            scheduleId: scheduleId
        }
        addWorkoutLog(loggerDetails);
    }

    return (
        <div>
            <div>
                {logRequirements !== undefined ? <AddWorkoutLog handleClick={handleAddWorkoutLogClick} logRequirements={logRequirements.LogReq} />
                    : workoutLogs !== undefined && <WorkoutLogDetails workoutLogs={workoutLogs} />}
            </div>

        </div>
    );
}

function mapStateToProps(state) {
    return {
        workoutLogs: state.workoutLogs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWorkoutLogs: () => dispatch(workoutLogActionCreators.getWorkoutLog()),
        addWorkoutLog: (workoutLogDetails) => dispatch(workoutLogActionCreators.addWorkoutLog(workoutLogDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutLog);
