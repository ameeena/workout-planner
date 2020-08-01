import * as workoutlogApis from "../api/workoutlog-api";

function getWorkoutLogAPISucess(responseData) {
    return {
        type: "WORKOUT_LOG_API_SUCESS",
        state: responseData,
    }
}

function addWorkoutLogSuccess(responseData) {
    return {
        type: "ADD_WORKOUT_LOG_API_SUCESS",
        state: responseData,
    }
}

export function getWorkoutLog() {
    return async (dispatch) => {
        try {
            const response = await workoutlogApis.getWorkoutLogApi();
            dispatch(getWorkoutLogAPISucess(response.data));
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function addWorkoutLog(workoutLogDetails) {
    return async (dispatch) => {
        try {
            await workoutlogApis.addWorkoutLogApi(workoutLogDetails);
            return dispatch(addWorkoutLogSuccess(workoutLogDetails));
        }
        catch (err) {
            console.log(err);
        }
    }
}