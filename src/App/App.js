import React from "react";

import { GlobalStyles } from "../global.style";
import Header from "src/organisms/Header";
import Main from "src/organisms/Main";
import { StyledApp } from "./App.style";
import { Helmet } from "react-helmet";

/**
 * App component - is the top most root component
 * which wraps everything. inc. global styles.
 */
const App = () => (
  <StyledApp>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <Header />
    <Main />
  </StyledApp>
);

export default App;
