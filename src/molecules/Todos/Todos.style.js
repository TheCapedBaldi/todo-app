import styled from "styled-components";

export const StyledList = styled.div``;

export const StyledPlay = styled.button`
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
  border-radius: 0.4em;
  background-color: white;
  width: 60px;
  height: 60px;
  margin: 0 0 1em 1em;

  svg {
    color: #525f7f;
    transition: all 0.15s ease-in;
    fill: transparent;
  }

  &:hover {
    svg {
      fill: #f5365c;
      stroke: #f5365c;
    }
  }
`;
