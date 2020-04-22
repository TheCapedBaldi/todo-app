import React from "react";
import { MemoryRouter } from "react-router-dom";
import { create } from "react-test-renderer";

export const withReactRouter = (component) =>
  create(<MemoryRouter>{component}</MemoryRouter>);
