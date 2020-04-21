import React from "react";
import { Link } from "react-router-dom";
import { StyledItem } from "./NavbarItem.style";

const NavbarItem = (props) => (
  <StyledItem>
    <Link {...props} style={{ color: "inherit" }} />
  </StyledItem>
);

export default NavbarItem;
