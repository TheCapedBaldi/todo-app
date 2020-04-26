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
        <Todo id="7b2a3db5-af85-42a5-9440-fa4dc6c7e12b" />
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
          {
            id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
            action: "ADD",
            data: {},
          },
        ],
      });
    });

    it("should edit todo", () => {
      const { todos } = reducers(
        {
          todos: {
            "ff1e494c-e8be-4049-a9dd-606c3d7197de": {
              id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
              name: "Test Todo",
              description: "Test Todo description",
              date: "Sun Apr 26 2020 16:56:52 GMT+0100 (British Summer Time)",
            },
          },
          userActions: {
            isRecording: true,
            actions: [
              {
                id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
                data: {},
                action: "ADD",
              },
            ],
          },
        },
        {
          type: "TODO_EDIT",
          payload: {
            id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
            data: {
              id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
              name: "Test Todo updated",
              description: "Test Todo description",
              date: "Sun Apr 26 2020 16:57:07 GMT+0100 (British Summer Time)",
            },
          },
        }
      );
      expect(todos).toEqual({
        "ff1e494c-e8be-4049-a9dd-606c3d7197de": {
          id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
          name: "Test Todo updated",
          description: "Test Todo description",
          date: "Sun Apr 26 2020 16:57:07 GMT+0100 (British Summer Time)",
        },
      });
    });

    it("should register edit action to our stack", () => {
      const { userActions } = reducers(
        {
          todos: {
            "ff1e494c-e8be-4049-a9dd-606c3d7197de": {
              id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
              name: "Test Todo updated",
              description: "Test Todo description",
              date: "Sun Apr 26 2020 16:57:07 GMT+0100 (British Summer Time)",
            },
          },
          userActions: {
            isRecording: true,
            actions: [
              {
                id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
                data: {},
                action: "ADD",
              },
            ],
          },
        },
        {
          type: "ACTION_ADD_UPDATE",
          payload: {
            id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
            data: {
              id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
              name: "Test Todo updated",
              description: "Test Todo description",
              date: "Sun Apr 26 2020 16:57:07 GMT+0100 (British Summer Time)",
            },
            action: "EDIT",
          },
        }
      );
      expect(userActions).toEqual({
        isRecording: true,
        actions: [
          {
            id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
            data: {},
            action: "ADD",
          },
          {
            id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
            data: {
              id: "ff1e494c-e8be-4049-a9dd-606c3d7197de",
              name: "Test Todo updated",
              description: "Test Todo description",
              date: "Sun Apr 26 2020 16:57:07 GMT+0100 (British Summer Time)",
            },
            action: "EDIT",
          },
        ],
      });
    });
  });
});
