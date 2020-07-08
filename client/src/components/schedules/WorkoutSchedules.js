// This component will contain List of all the schedules
// This component will also contain means to goto schedule Details
import * as scheduleActionCreators from "../../action-creators/schedule-actions";

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import ScheduleList from "./ScheduleList";
import ScheduleDetails from "./ScheduleDetails";

const WorkoutSchedules = ({ schedules, getSchedules, getScheduleById, scheduleDetailsById }) => {

    const history = useHistory();
    useEffect(() => {
        getSchedules();
    }, []);

    const handleClick = (scheduleId) => {
        getScheduleById(scheduleId);
        history.push(`${url}/${scheduleId}`);
    }
    let { url, path } = useRouteMatch();
    let switchElem = (
        <Switch>
            <Route exact path={path}>
                {schedules.length > 0 &&
                    <ScheduleList handleClick={(scheduleId) => handleClick(scheduleId)} schedules={schedules} />}
            </Route>
            <Route path={`${path}/:scheduleId`}>
                {scheduleDetailsById !== undefined && scheduleDetailsById.workoutList !== undefined && <ScheduleDetails scheduleDetails={scheduleDetailsById} />}
            </Route>
        </Switch>
    )
    return (
        <div>
            {switchElem}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        schedules: state.schedules,
        scheduleDetailsById: state.scheduleDetails,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSchedules: (level) =>
            dispatch(scheduleActionCreators.getSchedules(level)),
        getScheduleById: (scheduleId) =>
            dispatch(scheduleActionCreators.getScheduleById(scheduleId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSchedules);