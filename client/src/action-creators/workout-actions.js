import * as workoutApis from "../api/workout-api";

function workoutAPISuccess(responseData) {
  return {
    type: "WORKOUT_API_SUCCESS",
    state: responseData,
  };
}

function getWorkoutLogAPISucess(responseData) {
  return {
    type: "WORKOUT_LOG_API_SUCESS",
    state: responseData,
  }
}

function updateWorkoutLogSuccess(responseData) {
  return {
    type: "UPDATE_WORKOUT_LOG_API_SUCCESS",
    state: responseData,
  }
}

export function getWorkoutList(level) {
  return async (dispatch) => {
    try {
      console.log(level);
      const response = await workoutApis.getWorkoutListApi(level);
      dispatch(workoutAPISuccess(response.data));
    } catch (err) {
      throw err;
    }
  };
}

export function getWorkoutLog() {
  return async (dispatch) => {
    try {
      const response = await workoutApis.getWorkoutLogApi();
      dispatch(getWorkoutLogAPISucess(response.data));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export function updateWorkoutLog(updatedWorkoutLog) {
  return async (dispatch) => {
    try {
      const response = await workoutApis.updateWorkoutLogApi(updatedWorkoutLog);
      return dispatch(updateWorkoutLogSuccess(response.data));
    }
    catch (err) {
      console.log(err);
    }
  }
}