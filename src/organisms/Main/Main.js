import React, { useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Create from "src/organisms/Create";
import Todos from "src/molecules/Todos";
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
              <Route exact path="/create" component={Create} />
              <Route path="*">
                <Redirect to="/todos" />
              </Route>
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
            <circle cx="12" cy="12" r="13" />
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
          </svg>
        )}
      </StyledPlayPause>
    </StyledMain>
  );
};

export default Main;
