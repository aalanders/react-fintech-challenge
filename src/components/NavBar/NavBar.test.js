import React from "react";
import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { renderWithRouter } from "../../test-utils/render-utils";

test("renders NavBar", () => {
  renderWithRouter(<NavBar />);

  expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveTextContent(/View all Funds/);
});
