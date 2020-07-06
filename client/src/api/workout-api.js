import axios from "axios";
let url = "http://localhost:5800/api/workoutlist";

export function getWorkoutListApi(level) {
  return axios.get(`${url}/${level}`).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
}


export function getWorkoutLogApi() {
  return axios.get("http://localhost:5800/api/workoutlog").then((response) => {
    return response;
  }).catch((err) => { console.log(err) });
}

export function updateWorkoutLogApi(updatedWorkoutLog) {
  return axios.post("http://localhost:5800/api/workoutlog", { workoutLogDetails: updatedWorkoutLog }).then((response) => {
    return response;
  }).catch((err) => { console.log(err) });
}