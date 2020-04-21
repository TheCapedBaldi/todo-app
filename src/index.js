import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.getElementById("root"));

// if in development environment, allow hot reload for debugging purposes
if (process.env.NODE_ENV === "development") {
  module.hot.accept();
}
