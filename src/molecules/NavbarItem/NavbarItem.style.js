import styled from "styled-components";

export const StyledItem = styled.li`
  @media screen and (min-width: 200px) {
    margin: 0.5em;
  }

  a {
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #525f7f;
    font-size: 0.875rem;
    font-weight: 500;
    min-width: 145px;
    padding: 1rem;
    transition: all 0.15s ease;

    &.selected {
      background-color: #5e72e4;
      color: white;
    }
  }
`;
