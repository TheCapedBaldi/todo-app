import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Todo from "src/molecules/Todo";
import { StyledList, StyledBtn, StyledRow } from "./Todos.style";
import { useTodos } from "src/hooks/useTodos";

/**
 * Todos component which will retrieve todos from localStorage,
 * and render them.
 */
const Todos = () => {
  // using custom hook to abstract the side effects of updates from redux
  const { animationFinished, play, togglePlay, todos, onDelete } = useTodos();

  return (
    <StyledList>
      <StyledRow>
        <StyledBtn
          disable={
            Object.keys(todos).length === 0 || !(animationFinished && !play)
          }
          onClick={() => {
            if (animationFinished && !play) {
              togglePlay(true);
            }
          }}
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
          onClick={onDelete}
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
      <TransitionGroup className="todo-list">
        {Object.keys(todos).map((k) => {
          const todo = todos[k];

          return (
            <CSSTransition key={todo.id} timeout={500} classNames="item">
              <Todo {...todo} key={k} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </StyledList>
  );
};

export default Todos;
