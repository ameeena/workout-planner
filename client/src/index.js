import React from "react";
import ReactDOM from "react-dom";

import Root from "./Root";
import store from "./stores/configure-store.js";

// Load the Root Element here
const rootElem = document.getElementById("root");

ReactDOM.render(
  <Root store={store} />,
  rootElem
);





