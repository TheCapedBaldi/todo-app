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

  describe("Redux", () => {
    it("should return initial state of userAction", () => {
      const { userActions } = reducers(undefined, {});
      expect(userActions).toEqual({});
    });

    it("should add todo to todos reducer", () => {
      const { todos } = reducers(
        { todos: {}, userActions: { isRecording: true } },
        {
          type: "TODO_ADD",
          payload: {
            id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
            name: "1",
            description: "1",
            date: "Sat Apr 25 2020 16:26:23 GMT+0100 (British Summer Time)",
          },
        }
      );
      expect(todos).toEqual({
        "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b": {
          id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
          name: "1",
          description: "1",
          date: "Sat Apr 25 2020 16:26:23 GMT+0100 (British Summer Time)",
        },
      });
    });

    it("should add the create action to actions stack", () => {
      const { userActions } = reducers(
        {
          todos: {
            "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b": {
              id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
              name: "1",
              description: "1",
              date: "Sat Apr 25 2020 16:26:23 GMT+0100 (British Summer Time)",
            },
          },
          userActions: { isRecording: true },
        },
        {
          type: "ACTION_ADD_CREATE",
          payload: {
            id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
            action: "ADD",
          },
        }
      );
      expect(userActions).toEqual({
        isRecording: true,
        actions: [
          { id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b", action: "ADD" },
        ],
      });
    });
  });
});
