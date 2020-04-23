import React from "react";

import { StyledTextArea } from "./TextArea.style";

const TextArea = ({ children, ...rest }) => (
  <StyledTextArea {...rest}>{children}</StyledTextArea>
);

export default TextArea;
