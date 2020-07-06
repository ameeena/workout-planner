import initialState from "./initial-state";

const scheduleReducer = (state = initialState.schedules, action) => {
    switch (action.type) {
        case "ADD_WORKOUT_SCHEDULE_SUCCESS":
            return action.state;
        case "GET_SCHEDULES_SUCCESS":
            return action.state;
        default: return state;
    }
}
export default scheduleReducer;