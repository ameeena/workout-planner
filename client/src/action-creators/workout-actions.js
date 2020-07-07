import * as workoutApis from "../api/workout-api";

function workoutAPISuccess(responseData) {
  return {
    type: "WORKOUT_API_SUCCESS",
    state: responseData,
  };
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

