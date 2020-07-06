import axios from "axios";
let url = "http://localhost:5800/api/schedule";

export function addWorkoutScheduleApi(scheduleDetails) {
    return axios.post(url, {
        scheduleDetails: scheduleDetails
    }).then((response) => {
        return response;
    }).catch(err => console.log(err));
}

export function getSchedulesApi() {
    return axios.get(url).then((response) => {
        return response;
    }).catch(err => console.log(err));
}

export function getSchedulesByIdApi(scheduleId) {
    return axios.get(`${url}/${scheduleId}`).then((response) => {
        return response;
    }).catch(err => console.log(err));
}