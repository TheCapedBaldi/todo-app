import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { v4 as uuidv4 } from "uuid";

import Create from "./Create";

describe("<Create />", () => {
  let wrapper;

  const setState = jest.fn();
  const onSubmitSpy = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");

  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = mount(shallow(<Create onSubmit={onSubmitSpy} />).get(0));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Create", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("Name input", () => {
    it("should capture name correctly onChange", () => {
      const name = wrapper.find("#name").at(0);
      name.instance().value = "Test";
      name.simulate("change");
      expect(setState).toHaveBeenCalledWith("Test");
    });
  });

  describe("Description input", () => {
    it("should capture description correctly onChange", () => {
      const description = wrapper.find("#description").at(0);
      description.instance().value = "Lorem ipsum";
      description.simulate("change");
      expect(setState).toHaveBeenCalledWith("Lorem ipsum");
    });
  });

  describe("Form submit", () => {
    it("should submit form successfully", () => {
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    });
  });
});
