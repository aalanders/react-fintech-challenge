import React from "react";
import { screen } from "@testing-library/react";
import Fund from "./Fund";
import { renderWithRouterMatch } from "../../test-utils/render-utils";
import userEvent from "@testing-library/user-event";

test("renders Fund", () => {
  renderWithRouterMatch(<Fund />, { path: "/fund/:fundId", route: "/fund/3" });

  expect(screen.getByTestId("fund")).toBeInTheDocument();
  expect(screen.getByTestId("toggle-button")).toBeInTheDocument();
});

test("renders fund table and user can toggle to view chart", async () => {
  const user = userEvent.setup();
  renderWithRouterMatch(<Fund />, { path: "/fund/:fundId", route: "/fund/3" });

  expect(screen.getByTestId("fund-table")).toBeInTheDocument();
  expect(screen.queryByTestId("fund-chart")).toBeNull();

  const button = screen.getByRole("button");
  await user.click(button);

  expect(screen.queryByTestId("fund-table")).toBeNull();
  expect(screen.getByTestId("fund-chart")).toBeInTheDocument();
});
