import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Create from "./Create";

describe("Create Todo Form", () => {
  it("should render correctly", () => {
    const comp = shallow(<Create />);
    expect(comp.getElements()).toMatchSnapshot();
  });
});
