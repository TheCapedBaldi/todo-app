import React from "react";
import renderer from "react-test-renderer";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { ReduxProvider } from "src/utility/withReduxProvider";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";

describe("App", () => {
  it("renders correctly", () => {
    const tree = mount(
      <ReduxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    );
    expect(tree.html()).toMatchSnapshot();
  });
});
