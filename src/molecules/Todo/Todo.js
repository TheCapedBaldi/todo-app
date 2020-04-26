import React from "react";
import PropTypes from "prop-types";

import { useTodo } from "src/hooks/useTodo";
import Input from "src/atoms/Input";
import {
  StyledContainer,
  StyledTodo,
  StyledBtn,
  StyledTodoControls,
  StyledDateContainer,
  StyledTodoName,
  StyledTodoDesc,
  StyledTodoFooter,
  StyledTodoAttachments,
  StyledTodoChat,
  StyledSeperator,
  StyledTodoLeft,
  StyledInputContainer,
} from "./Todo.style";

/**
 * Will render the top section of the Todo component
 * @param {Object} controls - an object that carries values needed for the controls
 */
const TodoTopControls = ({ date, editable, onEdit, onDelete, onSubmit }) => {
  return (
    <StyledTodoControls>
      <StyledDateContainer>
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
          className="feather feather-clock"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{date}</span>
      </StyledDateContainer>
      <StyledContainer>
        {editable ? (
          <StyledBtn marginRight check onClick={onSubmit}>
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
              className="feather feather-check"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </StyledBtn>
        ) : (
          <StyledBtn marginRight onClick={onEdit}>
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
              className="feather feather-edit-2"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </StyledBtn>
        )}
        <StyledBtn remove onClick={onDelete}>
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
      </StyledContainer>
    </StyledTodoControls>
  );
};

/**
 * Will render the footer section of our todo
 */
const TodoFooter = () => (
  <StyledTodoFooter>
    <StyledTodoLeft>
      <StyledTodoAttachments>
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
          className="feather feather-paperclip"
        >
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
        <span>13</span>
      </StyledTodoAttachments>
      <StyledTodoChat>
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
          className="feather feather-message-square"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>20</span>
      </StyledTodoChat>
    </StyledTodoLeft>

    <StyledBtn circle>
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
        className="feather feather-plus"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </StyledBtn>
  </StyledTodoFooter>
);

/**
 * Todo component which will render the UI of todo
 * @param {Object} todo - object that defines our todo
 */
const Todo = ({ id, name, description, date }) => {
  // destrcuture our custom hook
  const {
    editable,
    todo,
    formatDate,
    toggleEditable,
    onChange,
    onDelete,
    onSubmit,
  } = useTodo(id, name, description, date);

  return (
    <StyledTodo>
      <TodoTopControls
        date={formatDate(date)}
        editable={editable}
        onEdit={() => toggleEditable(true)}
        onDelete={onDelete}
        onSubmit={onSubmit}
      />
      {editable ? (
        <StyledInputContainer marginTop marginBottom>
          <label htmlFor="name">Todo Name</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Todo Name"
            value={todo.name}
            onChange={onChange}
          />
        </StyledInputContainer>
      ) : (
        <StyledTodoName>{name}</StyledTodoName>
      )}

      {editable ? (
        <StyledInputContainer marginTop marginBottom>
          <label htmlFor="description">Todo Description</label>
          <Input
            id="description"
            name="description"
            type="text"
            placeholder="Todo Description"
            value={todo.description}
            onChange={onChange}
          />
        </StyledInputContainer>
      ) : (
        <StyledTodoDesc>{description}</StyledTodoDesc>
      )}
      <StyledSeperator />
      <TodoFooter />
    </StyledTodo>
  );
};

Todo.defaultProps = {
  name: "Todo Title",
  description: "Todo Description",
  date: new Date().toString(),
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default Todo;
