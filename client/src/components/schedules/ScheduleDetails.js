// This will again connect to the react
import React from "react";
import { useHistory } from "react-router-dom";
import { List, ListItem, ListItemText, Button, Divider, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        padding: 0
    }
}));
const ScheduleDetails = ({ scheduleDetails }) => {
    const history = useHistory();
    const classes = useStyles();
    const scheduleBasedWorkoutsList = scheduleDetails.workoutList.map((elem) => (
        <List key={elem._id} className={classes.root}>
            <ListItem classes={{ root: classes.item }} key={elem._id}><ListItemText primary={elem.name}> </ListItemText></ListItem>
            <Divider light component="li" />
        </List>
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
        <div align="center">
            <Typography align="center" variant="h3" component="h3">Schedule Details</Typography>
            <Typography variant="subtitle1" gutterBottom>Name : {scheduleDetails.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>Date : {scheduleDetails.date}</Typography>
            {scheduleBasedWorkoutsList}
            <Button variant="contained" color="primary" onClick={handleClick}>Add Log</Button>
        </div>
    );
}
export default ScheduleDetails;
