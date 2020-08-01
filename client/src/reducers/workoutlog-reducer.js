
import initialState from "./initial-state";

const workoutLogReducer = (state = initialState.workoutLogs, action) => {
    switch (action.type) {
        case "ADD_WORKOUT_LOG_API_SUCESS":
            let newArray = [];
            for (let repId in action.state.reps) {
                let workout = state.find((workout) => workout._id === repId);
                let newDataItem = [];
                if (workout !== undefined) {
                    newDataItem = [...workout.data, { date: action.state.date, reps: action.state.reps[repId] }];
                } else {
                    newDataItem = [{ date: action.state.date, reps: action.state.reps[repId] }];
                }
                let newValue = Object.assign({}, { _id: repId, data: newDataItem, workoutName: workout.workoutName });
                newArray.push(newValue);
            }
            // remove all the values from the state ==> get a new array and that inside this?
            let newState = state.map((oldStateElem) => newArray.find((newRepElem) => newRepElem._id === oldStateElem._id) || oldStateElem);
            return newState;
        case "WORKOUT_LOG_API_SUCESS":
            return action.state;
        default: return state;
    }
}
export default workoutLogReducer;   