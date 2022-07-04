import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./test-utils/render-utils";

test("renders App", () => {
  renderWithRouter(<App />);

  expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByTestId("dashboard")).toBeInTheDocument();
});
