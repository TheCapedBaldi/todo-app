import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { withReactRouter } from "src/utility/withReactRouter";
import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    const tree = withReactRouter(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
