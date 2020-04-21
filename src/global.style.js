import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700&display=swap');
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    background-color: #f4f5f7;
    color: #525f7f;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-family: 'Baloo Bhaina 2', cursive;
    font-weight: 400;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    padding: 0;
    width: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;
