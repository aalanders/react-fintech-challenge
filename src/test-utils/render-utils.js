import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export const renderWithRouter = (uiComponent) => {
  return {
    ...render(uiComponent, { wrapper: MemoryRouter }),
  };
};

export const renderWithRouterMatch = (
  uiComponent,
  { path = "/", route = "/" } = {}
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route element={uiComponent} path={path} />
        </Routes>
      </MemoryRouter>
    ),
  };
};
