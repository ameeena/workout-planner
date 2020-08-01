import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import WorkoutSchedules from "./components/schedules/WorkoutSchedules";
import ScheduleGenerator from "./components/workout-generator/ScheduleGenerator";
import WorkoutLog from "./components/workout-log/WorkoutLog";

import Grid from "@material-ui/core/Grid";

// Contains all the routing bit here 
const WorkoutApp = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Switch>
          <Route exact path="/" component={ScheduleGenerator} />
          <Route path="/generateWorkout" component={ScheduleGenerator} />
          <Route path="/schedule" component={WorkoutSchedules} />
          <Route path="/workoutlog" component={WorkoutLog} />
          {/* render={(props) => <AddWorkoutLog {...props}  */}
        </Switch>
      </Grid>
      <Grid item xs={12}>
        {/* <Footer /> */}
      </Grid>
    </Grid>
  )
};

export default WorkoutApp;
