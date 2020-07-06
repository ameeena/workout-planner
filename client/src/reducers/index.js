import { combineReducers } from "redux";
import workoutReducer from "./workout-reducer";
import workoutLogReducer from "./workoutlog-reducer";
import scheduleReducer from "./schedule-reducer";
import scheduleDetailsReducer from "./schedule-details-reducer";

// export default combineReducers({
//   workoutReducer,
// });

const rootReducer = combineReducers({
  workouts: workoutReducer,
  workoutLogs: workoutLogReducer,
  schedules: scheduleReducer,
  scheduleDetails: scheduleDetailsReducer,
});

export default rootReducer;
