import React from "react";
import { screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { renderWithRouter } from "../../test-utils/render-utils";

test("renders Dashboard", () => {
  renderWithRouter(<Dashboard />);

  expect(screen.getByTestId("dashboard")).toBeInTheDocument();
});

test("renders funds in list", () => {
  renderWithRouter(<Dashboard />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
  expect(listItems[0]).toHaveTextContent("Hane and Sons Ventures");
  expect(listItems[1]).toHaveTextContent("Windler Group");
  expect(listItems[2]).toHaveTextContent("Olson Ventures");
});
