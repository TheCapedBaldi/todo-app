import React from "react";

import {
  StyledTodo,
  StyledTodoControls,
  StyledDateContainer,
  StyledEditTodo,
  StyledDeleteTodo,
  StyledTodoName,
  StyledTodoDesc,
  StyledTodoFooter,
  StyledTodoAttachments,
  StyledTodoChat,
  StyledSeperator,
  StyledTodoLeft,
  StyledTodoRight,
} from "./Todo.style";

const TodoTopControls = () => (
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
      <span>Jan 31</span>
    </StyledDateContainer>

    <div>
      <StyledEditTodo href="#">
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
      </StyledEditTodo>
      <StyledDeleteTodo href="#">
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
      </StyledDeleteTodo>
    </div>
  </StyledTodoControls>
);

const TodoDescription = () => (
  <StyledTodoDesc>
    Deserunt dolor est adipisicing do cillum consectetur commodo consequat eu
    aliqua. Ut sit eiusmod elit aute mollit elit. Cillum elit pariatur enim
    voluptate quis nulla occaecat fugiat nostrud eu incididunt id sit. Lorem
    pariatur enim magna nostrud anim officia sint voluptate voluptate sint
    officia. Tempor veniam nisi quis velit pariatur occaecat minim cupidatat ut.
    Proident mollit fugiat qui incididunt sunt. Lorem Lorem sit esse et
    proident. Quis minim ipsum elit eiusmod sit proident et nostrud ut.
    Incididunt cillum dolore proident reprehenderit consectetur qui fugiat
    laborum cupidatat cillum aliquip est labore. Minim sint occaecat culpa qui
    ex in aliqua esse culpa sit. Mollit nisi cillum in enim eiusmod tempor
    proident aliqua. Amet minim amet commodo sit consequat. Commodo nulla ex
    commodo laboris deserunt.
  </StyledTodoDesc>
);

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

    <StyledTodoRight>
      <a href="#">
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
      </a>
    </StyledTodoRight>
  </StyledTodoFooter>
);

const Todo = () => (
  <StyledTodo>
    <TodoTopControls />
    <StyledTodoName>Landing Page</StyledTodoName>
    <TodoDescription />
    <StyledSeperator />
    <TodoFooter />
  </StyledTodo>
);

export default Todo;
