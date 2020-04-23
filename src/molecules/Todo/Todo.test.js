import React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";

import Todo from "./Todo";

describe("<Todo />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      shallow(
        <Todo
          id={"jhghja-asd--8757asdjha"}
          name={"Test headline"}
          describe={"Test description"}
          date={new Date().toString()}
        />
      ).get(0)
    );
  });

  it("should render Todo", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
