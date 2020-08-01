import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import * as workoutLogActionCreators from "../../action-creators/workout-log-actions";
import AddWorkoutLog from "./AddWorkoutLog";
import WorkoutLogDetails from "./WorkoutLogDetails";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


const WorkoutLog = ({ addWorkoutLog, getWorkoutLogs, workoutLogs }) => {

    const history = useHistory();
    let logRequirements = history.location.state;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        getWorkoutLogs();
    }, []);

    const handleAddWorkoutLogClick = (reps, date, scheduleId) => {
        let loggerDetails = {
            reps: reps,
            date: date,
            scheduleId: scheduleId
        }
        addWorkoutLog(loggerDetails).then(() => {
            setOpen(true);
            history.push("/workoutlog");
        });
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Log added successfully!!
                    </Alert>
                </Snackbar>
                {(logRequirements !== undefined && logRequirements !== null) ? <AddWorkoutLog handleClick={handleAddWorkoutLogClick} logRequirements={logRequirements.LogReq} />
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
