// connects to redux and generates to workout

import React from "react";
import * as workoutActionCreators from "../../action-creators/workout-actions";
import * as scheduleActionCreators from "../../action-creators/schedule-actions";

import { connect } from "react-redux";

import Workouts from "./Workouts";

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
    }
    getWorkoutList(level) {
        this.props.getWorkoutList(level);
    }
    addWorkoutSchedule() {
        //get Object keys for all the workouts 
        let dateValues = new Date();
        let scheduleDetails = {
            name: `schedule_${dateValues.toDateString()}`,
            workoutList: this.props.workouts.map(elem => elem._id),
            date: dateValues.toDateString()
        };
        this.props.addWorkoutSchedule(scheduleDetails);
    }
    render() {
        return (
            <div>
                <div>Generate Workout Schedule </div>
                <div>
                    <button onClick={() => this.getWorkoutList(this.levelEnum.easy)}>
                        Easy
                    </button>
                    <button onClick={() => this.getWorkoutList(this.levelEnum.medium)}>
                        Intermediate
                    </button>
                    <button onClick={() => this.getWorkoutList(this.levelEnum.difficult)}>
                        Difficult
                    </button>
                </div>
                <Workouts workouts={this.props.workouts} />
                {this.props.workouts.length > 0 && <button onClick={() => this.addWorkoutSchedule()}>Add Workout in Scheduler</button>}
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