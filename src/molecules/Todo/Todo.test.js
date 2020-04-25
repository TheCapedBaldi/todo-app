import React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";
import { renderHook } from "@testing-library/react-hooks";
import { create } from "react-test-renderer";

import { ReduxProvider } from "../../utility/withReduxProvider";
import reducers from "../../Store/reducer";
import configureStore from "../../Store";
import Todo from "./Todo";

describe("<Todo />", () => {
  const store = configureStore;

  let wrapper;

  beforeEach(() => {
    wrapper = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;
  });

  it("should render Todo", () => {
    const tree = create(
      <ReduxProvider>
        <Todo />
      </ReduxProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return initial state of userAction", () => {
    const { userActions } = reducers(undefined, {});
    expect(userActions).toEqual({});
  });
});
