
import * as scheduleApis from "../api/schedules-api";

// action creator for adding the workout (contains a type and data (this data is used for updating the state))
function addWorkoutScheduleAPISucess(responseData) {
    return {
        type: "ADD_WORKOUT_SCHEDULE_SUCCESS",
        state: responseData
    };
}
function getSchedulesAPISuccess(responseData) {
    return {
        type: "GET_SCHEDULES_SUCCESS",
        state: responseData
    }
}

function getScheduleByIdAPISuccess(responseData) {
    return {
        type: "GET_SCHEDULE_ID_SUCCESS",
        state: responseData
    }
}

//#region  API and Action creator connecting methods
// Methods that call action creators with API results
export function addWorkoutSchedule(scheduleDetails) {
    return async (dispatch) => {
        try {
            // call the api with await
            let response = await scheduleApis.addWorkoutScheduleApi(scheduleDetails);
            //once response is obtained dispatch to the reducer
            dispatch(addWorkoutScheduleAPISucess(response.data));
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function getSchedules() {
    return async (dispatch) => {
        try {
            let response = await scheduleApis.getSchedulesApi();
            return dispatch(getSchedulesAPISuccess(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export function getScheduleById(scheduleId) {
    return async (dispatch) => {
        try {
            let response = await scheduleApis.getSchedulesByIdApi(scheduleId);
            return dispatch(getScheduleByIdAPISuccess(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}
//#endregion