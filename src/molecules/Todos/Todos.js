import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "src/molecules/Todo";
import {
  fetchAllTodos,
  deleteAllTodos,
  playbackRecord,
} from "src/Store/todos/actions";
import { StyledList, StyledPlay } from "./Todos.style";

/**
 * Todos component which will retrieve todos from localStorage,
 * and render them.
 */
const Todos = () => {
  // keep track of play state
  const [play, setPlay] = useState(false);

  // retrieve todos state from redux
  const { todos } = useSelector(({ todos }) => ({ todos }));

  // retrieve our action stack from redux
  const { userActions } = useSelector(({ userActions }) => ({ userActions }));

  // to dispatch actions in redux
  const dispatch = useDispatch();

  // dispatch to get all todos on mount
  useEffect(() => {
    // which will retrieve latest todos from localStorage
    dispatch(fetchAllTodos());
  }, []);

  // clean all todos if play btn was pressed
  useEffect(() => {
    if (play) {
      dispatch(deleteAllTodos());
    }
  }, [play]);

  // On play, remove from stack, and add to todos state, with 1s delay
  useEffect(() => {
    if (play) {
      dispatch(playbackRecord(userActions, (cb) => setPlay(cb)));
    }
  }, [play, userActions]);

  return (
    <StyledList>
      <StyledPlay onClick={() => setPlay(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-play"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </StyledPlay>
      {Object.keys(todos).map((k) => {
        const todo = todos[k];
        return <Todo {...todo} key={k} />;
      })}
    </StyledList>
  );
};

export default Todos;
