// connects to redux and generates to workout

import React from "react";
import * as workoutActionCreators from "../../action-creators/workout-actions";
import * as scheduleActionCreators from "../../action-creators/schedule-actions";
import { connect } from "react-redux";

import Workouts from "./Workouts";
import { Typography, Button, TextField, Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


class ScheduleGenerator extends React.Component {

    constructor(props) {
        super(props);
        // TODO : add level enums in its own constant file
        this.levelEnum = {
            easy: 0,
            medium: 1,
            difficult: 2,
        };
        this.getWorkoutList = this.getWorkoutList.bind(this);
        this.addWorkoutSchedule = this.addWorkoutSchedule.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            name: "",
            saving: false,
            open: false
        };
    }
    getWorkoutList(level) {
        this.props.getWorkoutList(level);
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleClose() {
        this.setState({ open: false })
    }
    addWorkoutSchedule() {
        //get Object keys for all the workouts
        this.setState({
            saving: true
        });
        let dateValues = new Date();
        let scheduleDetails = {
            name: this.state.name !== "" ? this.state.name : `schedule_${dateValues.toDateString()}`,
            workoutList: this.props.workouts.map(elem => elem._id),
            date: dateValues.toDateString()
        };
        this.props.addWorkoutSchedule(scheduleDetails).then(() => {
            this.setState({ open: true });
            this.props.history.push("/schedule");
        });
    }

    render() {
        return (
            <div>
                <Snackbar open={this.state.open} onClose={this.handleClose} autoHideDuration={3000} >
                    <Alert onClose={this.handleClose} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Typography align="center" variant="h3" component="h3">Workout Schedule Generator</Typography>
                <div className="container" align="center">
                    <Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={() => this.getWorkoutList(this.levelEnum.easy)}>Easy</Button>

                    <Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={() => this.getWorkoutList(this.levelEnum.medium)}>Intermediate</Button>

                    <Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={() => this.getWorkoutList(this.levelEnum.difficult)}>Difficult</Button>
                </div>
                <Workouts workouts={this.props.workouts} />
                {this.props.workouts.length > 0 &&
                    <div className="container" align="center">
                        <TextField name="" onChange={this.handleChange} type="text" label="Schedule Name"></TextField>
                        <Button style={{ margin: "20px" }} variant="contained" color="primary" onClick={() => this.addWorkoutSchedule()}>Add Workout in Scheduler</Button>
                    </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        workouts: state.workouts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getWorkoutList: (level) =>
            dispatch(workoutActionCreators.getWorkoutList(level)),
        addWorkoutSchedule: (scheduleDetails) =>
            dispatch(scheduleActionCreators.addWorkoutSchedule(scheduleDetails)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleGenerator);