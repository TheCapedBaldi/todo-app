import styled, { css } from "styled-components";

export const StyledList = styled.div``;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBtn = styled.button`
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
  margin: 1em;

  ${({ disable }) =>
    disable
      ? css`
          opacity: 0.5;
          pointer-events: none;
          transform: scale(0.9);
          cursor: none;
        `
      : ""}

  svg {
    color: #525f7f;
    transition: all 0.15s ease-in;
    fill: transparent;
  }

  &:hover {
    ${({ disableIconHover }) =>
      !disableIconHover
        ? css`
            svg {
              fill: #f5365c;
              stroke: #f5365c;
            }
          `
        : ""}
  }
`;
