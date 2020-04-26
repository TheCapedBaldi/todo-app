import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { create } from "react-test-renderer";
import "jest-styled-components";

import reducers from "src/Store/reducer";
import { ReduxProvider } from "src/utility/withReduxProvider";
import { useTodos } from "src/hooks/useTodos";
import Todos from "./Todos";

describe("<Todos />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;
  });

  it("should render Todos", () => {
    const tree = create(
      <ReduxProvider>
        <Todos />
      </ReduxProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should use play", () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    expect(result.current.play).toBe(false);
  });

  it("should update play", () => {
    const { result } = renderHook(() => useTodos(), { wrapper });

    act(() => {
      result.current.togglePlay();
    });

    expect(result.current.play).toBe(true);
  });

  describe("Redux", () => {
    it("should return initial state of redux", () => {
      const state = reducers(undefined, {});
      expect(state).toEqual({ todos: {}, userActions: {} });
    });

    it("should initially not be recording on app mount", () => {
      const { userActions } = reducers(
        { todos: {}, userActions: {} },
        { type: "ACTION_STOP_RECORDING", payload: false }
      );

      expect(userActions).toEqual({ isRecording: false });
    });

    it("should start recording when clicking on play button", () => {
      const { userActions } = reducers(
        { todos: {}, userActions: {} },
        { type: "ACTION_START_RECORDING", payload: true }
      );

      expect(userActions).toEqual({ isRecording: true });
    });

    it("should delete todo when clicking delete", () => {
      const { todos } = reducers(
        {
          todos: {
            "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b": {
              id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
              name: "1",
              description: "1",
              date: "Sat Apr 25 2020 16:26:23 GMT+0100 (British Summer Time)",
            },
          },
          userActions: {
            isRecording: false,
            actions: [
              { id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b", action: "ADD" },
            ],
          },
        },
        { type: "TODO_DELETE", payload: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b" }
      );
      expect(todos).toEqual({});
    });

    it("should not record the delete action if app is not in record state", () => {
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
          userActions: {
            isRecording: false,
            actions: [
              { id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b", action: "ADD" },
            ],
          },
        },
        { type: "TODO_DELETE", payload: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b" }
      );
      expect(userActions).toEqual({
        isRecording: false,
        actions: [
          { id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b", action: "ADD" },
        ],
      });
    });

    it("should record the delete action when app is in record state", () => {
      const { userActions } = reducers(
        { todos: {}, userActions: { isRecording: true } },
        {
          type: "ACTION_ADD_DELETE",
          payload: {
            id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b",
            action: "DELETE",
          },
        }
      );
      expect(userActions).toEqual({
        isRecording: true,
        actions: [
          { id: "7b2a3db5-af85-42a5-9440-fa4dc6c7e12b", action: "DELETE" },
        ],
      });
    });
  });
});
