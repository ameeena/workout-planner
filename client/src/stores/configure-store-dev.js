// get root reducer

import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Add support for redux tools

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
