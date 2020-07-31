import React from "react";
import PropTypes from "prop-types"
import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from "@material-ui/core";

const ScheduleList = ({ schedules, handleClick }) => {

    const scheduleList = schedules.map((schedule) => (
        <Grid item xs={4} key={schedule._id}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {schedule.name}
                    </Typography>
                    <Typography gutterBottom variant="body2">{schedule.name}</Typography>
                    <Typography gutterBottom variant="body2">{schedule.date}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={() => handleClick(schedule._id)}> Details </Button>
                </CardActions>
            </Card>
        </Grid>
    ))

    return (
        <Box>
            <Typography align="center" variant="h3" component="h3">Schedules List</Typography>
            <Grid container spacing={3}> {scheduleList}</Grid>
        </Box>
    )
}

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default ScheduleList;