import React from "react";

import NavbarItem from "src/molecules/NavbarItem";
import { StyledNavbar } from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarItem to="/todos">Todos</NavbarItem>
      <NavbarItem to="/create">Create</NavbarItem>
    </StyledNavbar>
  );
};

export default Navbar;
