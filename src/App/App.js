import React from "react";

import { GlobalStyles } from "../global.style";
import Header from "src/organisms/Header";
import Main from "src/organisms/Main";
import { StyledApp } from "./App.style";

/**
 * App component - is the top most root component
 * which wraps everything. inc. global styles.
 */
const App = () => (
  <StyledApp>
    <GlobalStyles />
    <Header />
    <Main />
  </StyledApp>
);

export default App;
