// This component will contain List of all the schedules
// This component will also contain means to goto schedule Details
import * as scheduleActionCreators from "../../action-creators/schedule-actions";

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import ScheduleList from "./ScheduleList";
import ScheduleDetails from "./ScheduleDetails";

//TODO : First load of schedule details is empty .. need to figure out something

const WorkoutSchedules = ({ schedules, getSchedules, getScheduleById, scheduleDetailsById }) => {

    const history = useHistory();
    useEffect(() => {
        getSchedules();
    }, [])

    let { url, path } = useRouteMatch();

    let switchElem = (
        <Switch>
            <Route exact path={path}>
                {schedules.length > 0 &&
                    <ScheduleList handleClick={(scheduleId) => {
                        getScheduleById(scheduleId);
                        history.push(`${url}/${scheduleId}`, { scheduleDetails: scheduleDetailsById })
                    }} schedules={schedules} />}
            </Route>
            <Route path={`${path}/:scheduleId`}>
                <ScheduleDetails />
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