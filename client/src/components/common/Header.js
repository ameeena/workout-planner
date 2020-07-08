// This component will contain navigation bar
import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <ul>
                <li>Dashboard</li>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/generateWorkout">Generator</Link></li>
                <li><Link to="/schedule">Schedules</Link></li>
                <li><Link to="/workoutlog">Work out Logs</Link></li>
            </ul>
        </div>)
}

export default Header;