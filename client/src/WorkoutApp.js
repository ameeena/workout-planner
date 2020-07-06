import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import WorkoutSchedules from "./components/schedules/WorkoutSchedules";
import ScheduleGenerator from "./components/workout-generator/ScheduleGenerator";
import AddWorkoutLog from "./components/workout-log/AddWorkoutLog";

// Contains all the routing bit here 
const WorkoutApp = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ScheduleGenerator} />
        <Route path="/generateWorkout" component={ScheduleGenerator} />
        <Route path="/schedule" component={WorkoutSchedules} />
        <Route path="/workoutlog" component={AddWorkoutLog} />
        {/* render={(props) => <AddWorkoutLog {...props}  */}
      </Switch>
    </div>
  )
};

export default WorkoutApp;
