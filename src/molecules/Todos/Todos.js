import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Todo from "src/molecules/Todo";
import { getAllTodos } from "src/Store/todos/actions";
import { StyledList } from "./Todos.style";

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
      {Object.keys(todos).map((k) => {
        const todo = todos[k];
        return <Todo {...todo} key={k} />;
      })}
    </StyledList>
  );
};

export default Todos;
