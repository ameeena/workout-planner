import React from "react"
import { BrowserRouter as Router, } from 'react-router-dom'
import { Provider } from "react-redux";
import PropTypes from "prop-types"

import WorkoutApp from "./WorkoutApp";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <WorkoutApp />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;