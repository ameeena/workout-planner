// This component will contain navigation bar
import React from "react";
import { NavLink } from "react-router-dom"
import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#2b5799"
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <MenuItem component={NavLink} to="/" exact>Home</MenuItem>
                <MenuItem component={NavLink} to="/generateWorkout">Generator</MenuItem>
                <MenuItem component={NavLink} to="/schedule">Schedules</MenuItem>
                <MenuItem component={NavLink} to="/workoutlog">Workout Logs</MenuItem>
            </Toolbar>
        </AppBar>
    )
}

export default Header;