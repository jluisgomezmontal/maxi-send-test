/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Header } from "../../../src/components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing <Header/>", () => {
  test("should render propertly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("DEMO Streaming")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("Start your free trial")).toBeInTheDocument();
  });
});
