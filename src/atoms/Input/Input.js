import React from "react";

import { StyledInput } from "./Input.style";

const Input = ({ children, ...rest }) => (
  <StyledInput {...rest}>{children}</StyledInput>
);

export default Input;
