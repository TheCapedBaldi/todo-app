import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Todos from "src/molecules/Todos";
import Todo from "src/molecules/Todo";
import {
  StyledMain,
  StyledRoutingSection,
  StyledPlayPause,
} from "./Main.style";

const Main = () => {
  const [recordingState, setRecordingState] = useState(false);

  const location = useLocation();
  return (
    <StyledMain>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <StyledRoutingSection>
            <Switch location={location}>
              <Route exact path="/todos" component={Todos} />
              <Route path="/todos/:id" component={Todo} />
            </Switch>
          </StyledRoutingSection>
        </CSSTransition>
      </TransitionGroup>
      <StyledPlayPause
        play={recordingState}
        onClick={() => setRecordingState(!recordingState)}
      >
        {recordingState ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-pause-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="10" y1="15" x2="10" y2="9" />
            <line x1="14" y1="15" x2="14" y2="9" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        )}
      </StyledPlayPause>
    </StyledMain>
  );
};

export default Main;
