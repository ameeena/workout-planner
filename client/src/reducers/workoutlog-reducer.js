
import initialState from "./initial-state";

const workoutLogReducer = (state = initialState.workoutLogs, action) => {
    switch (action.type) {
        case "ADD_WORKOUT_LOG_API_SUCESS":
            return action.state;
        case "WORKOUT_LOG_API_SUCESS":
            return action.state;
        default: return state;
    }
}
export default workoutLogReducer;   