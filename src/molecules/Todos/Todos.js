import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Todo from "src/molecules/Todo";
import { getAllTodos } from "src/Store/todos/actions";
import { StyledList, StyledPlay } from "./Todos.style";

/**
 * Todos component which will retrieve todos from localStorage,
 * and render them.
 */
const Todos = () => {
  // use hook instead of connect() HOC
  const { todos } = useSelector(({ todos }) => ({ todos }));

  const dispatch = useDispatch();

  useEffect(() => {
    // which will retrieve latest todos from localStorage
    dispatch(getAllTodos());
  }, []);

  return (
    <StyledList>
      <StyledPlay>
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
