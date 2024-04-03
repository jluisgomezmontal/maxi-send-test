/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Modal } from "../../../src/components/Modal/Modal";

describe("testing <Modal/>", () => {
  const modal = false;
  const setModal = jest.fn();
  const dataModal = {
    title: "Wolf Creek",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      PosterArt: {
        url: "http://localhost/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  };
  test("should render propertly", () => {
    render(
      <BrowserRouter>
        <Modal dataModal={dataModal} setModal={setModal} modal={modal} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test("should title, img and Release Year", () => {
    render(
      <BrowserRouter>
        <Modal dataModal={dataModal} setModal={setModal} modal={modal} />
      </BrowserRouter>
    );

    expect(screen.getByText(`Title: ${dataModal.title}`)).toBeInTheDocument();
    expect(screen.getByRole("img").src).toBe(dataModal.images.PosterArt.url);
    expect(
      screen.getByText(`Release Year: ${dataModal.releaseYear}`)
    ).toBeInTheDocument();
  });
});
