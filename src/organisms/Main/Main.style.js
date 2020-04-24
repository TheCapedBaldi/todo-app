import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }
`;

export const StyledRoutingSection = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;

  @media screen and (min-width: 300px) {
    width: 100vw;
  }
`;

export const StyledPlayPause = styled.button`
  border-radius: 100%;
  padding: 1em;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease-in;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1em;
  background-color: ${({ play }) => (!play ? "#f5365c" : "white")};
  color: ${({ play }) => (!play ? "white" : "#525f7f")};

  svg {
    transition: all 0.15s ease-in-out;

    circle {
      fill: #b7334d;
      stroke: #b7334d;
    }
  }
`;
