import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./Store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// if in development environment, allow hot reload for debugging purposes
if (process.env.NODE_ENV === "development") {
  module.hot.accept();
}
