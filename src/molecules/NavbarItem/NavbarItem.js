import React from "react";
import { NavLink } from "react-router-dom";
import { StyledItem } from "./NavbarItem.style";

const NavbarItem = (props) => (
  <StyledItem>
    <NavLink {...props} />
  </StyledItem>
);

export default NavbarItem;
