import axios from "axios";
let url = "http://localhost:5800/api/workoutlog/";

export function getWorkoutLogApi() {
    return axios.get(url).then((response) => {
        return response;
    }).catch((err) => { console.log(err) });
}

export function addWorkoutLogApi(workoutLogDetails) {
    return axios.post(url, { workoutLogDetails: workoutLogDetails }).then((response) => {
        return response;
    }).catch((err) => { console.log(err) });
}