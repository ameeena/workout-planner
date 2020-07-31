// This will again connect to the react
import React from "react";
import { useHistory } from "react-router-dom";
import { List, ListSubheader, ListItem, ListItemText, Button, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
const ScheduleDetails = ({ scheduleDetails }) => {

    const history = useHistory();
    const classes = useStyles();
    const scheduleBasedWorkoutsList = scheduleDetails.workoutList.map((elem) => (
        // <li key={elem._id}>{elem.name}</li>
        <ListItem align="center" key={elem._id}><ListItemText> : {elem.name}</ListItemText></ListItem>

    ))

    const handleClick = () => {
        history.push("/workoutlog", {
            LogReq: {
                workoutList: scheduleDetails.workoutList,
                date: scheduleDetails.date,
                scheduleId: scheduleDetails._id
            }
        })
    }

    return (
        // <div>
        //     <div>Name : {scheduleDetails.name}</div>
        //     <div>Date : {scheduleDetails.date}</div>
        //     <label>List of workouts : </label>
        //     <div>{scheduleBasedWorkoutsList}</div>
        //     <button onClick={handleClick}> Add Log</button>
        // </div>
        <List className={classes.root}>
            <ListSubheader component="div">Name : {scheduleDetails.name}</ListSubheader>
            <ListSubheader component="div">Date : {scheduleDetails.date}</ListSubheader>
            {scheduleBasedWorkoutsList}
            <Button variant="contained" color="primary" onClick={handleClick}>Add Log</Button>
        </List>
    );
}
export default ScheduleDetails;
