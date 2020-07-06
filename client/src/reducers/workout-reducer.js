import initialState from "./initial-state";

const workoutReducer = (state = initialState.workouts, action) => {
  switch (action.type) {
    case "WORKOUT_API_SUCCESS":
      console.log(action.state)
      return action.state;
    case "ADD_WORKOUT_ACCEPTED_SUCCESS":
    // check what is the returned .. ??
    default:
      return state;
  }
};

export default workoutReducer;
