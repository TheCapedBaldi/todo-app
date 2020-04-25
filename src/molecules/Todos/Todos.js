import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "src/molecules/Todo";
import {
  fetchAllTodos,
  deleteAllTodos,
  playbackRecord,
} from "src/Store/todos/actions";
import { StyledList, StyledBtn, StyledRow } from "./Todos.style";

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
      // delete call todos, without deleting it from localstorage
      dispatch(deleteAllTodos(false));
    }
  }, [play]);

  // On play, remove from stack, and add to todos state, with 1s delay
  useEffect(() => {
    if (play) {
      // start replaying user actions. Once done, toggle the play state
      dispatch(playbackRecord(userActions, (cb) => setPlay(cb)));
    }
  }, [play, userActions]);

  return (
    <StyledList>
      <StyledRow>
        <StyledBtn
          disable={Object.keys(todos).length === 0}
          onClick={() => setPlay(true)}
        >
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
        </StyledBtn>
        <StyledBtn
          disableIconHover
          disable={Object.keys(todos).length === 0}
          onClick={() => dispatch(deleteAllTodos(true))}
        >
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
            className="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </StyledBtn>
      </StyledRow>
      {Object.keys(todos).map((k) => {
        const todo = todos[k];
        return <Todo {...todo} key={k} />;
      })}
    </StyledList>
  );
};

export default Todos;
