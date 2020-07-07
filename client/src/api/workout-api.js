import axios from "axios";
let url = "http://localhost:5800/api/workoutlist";

export function getWorkoutListApi(level) {
  return axios.get(`${url}/${level}`).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
}


