/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Inicio } from "../../src/routes/Inicio";

describe("testing <Inicio/>", () => {
  test("should render propertly", () => {
    const { container } = render(
      <BrowserRouter>
        <Inicio />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should have series and movies", () => {
    render(
      <BrowserRouter>
        <Inicio />
      </BrowserRouter>
    );

    const seriesLink = screen.getByText("SERIES");
    const moviesLink = screen.getByText("MOVIES");

    expect(seriesLink).toBeInTheDocument();
    expect(moviesLink).toBeInTheDocument();
  });
});
