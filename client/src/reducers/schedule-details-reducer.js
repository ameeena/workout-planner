import intialState from "./initial-state";

const scheduleDetailsReducer = (state = intialState.scheduleDetails, action) => {
    switch (action.type) {
        case "GET_SCHEDULE_ID_SUCCESS":
            return action.state;
        default:
            return state;
    }
}

export default scheduleDetailsReducer;