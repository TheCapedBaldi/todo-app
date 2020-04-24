import styled from "styled-components";

export const StyledNavbar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 3em 0 1em;
  padding-left: 0;

  @media screen and (min-width: 200px) {
    justify-content: center;
  }

  @media screen and (min-width: 400px) {
    justify-content: space-between;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 9px;
    }
  }
`;
