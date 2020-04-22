import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
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
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1em;
  border-radius: 100%;
  background-color: ${({ play }) => (!play ? "#f5365c" : "white")};
  padding: 1em;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease-in;
  cursor: pointer;
  color: ${({ play }) => (!play ? "white" : "#525f7f")};

  svg {
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    background-color: ${({ play }) => (play ? "#f5365c" : "#5e72e4")};

    svg {
      color: ${({ play }) => (play ? "#525f7f" : "white")};
    }
  }
`;
