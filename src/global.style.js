import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
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

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    font-family: 'Baloo Bhaina 2',cursive;
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.625rem 1.25rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: all 0.15s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
      transform: translateY(-1px);
    }

    &:focus {
      offset: none;
      outline: none;
      box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08), 0 0 0 0 rgba(118,135,232,.5);
    }
  }

  input, textarea {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.25rem + 2px);
    padding: 0.625rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #8898aa;
    background-color: #fff;
    margin-top: 10px;
    background-clip: padding-box;
    border: 1px solid #cad1d7;
    border-radius: 0.25rem;
    box-shadow: none;
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
    border: 0;
    transition: box-shadow 0.15s ease;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:focus {
      color: #8898aa;
      background-color: #fff;
      border-color: rgba(50, 151, 211, 0.25);
      outline: 0;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }
`;
