/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { useData } from "../../src/hooks/useData";

describe("testing useData hook", () => {
  test("should take correct values", () => {
    const [series] = useData("series");
    expect(series.length).toBe(20);
    expect(series[0]).toEqual({
      title: expect.any(String),
      description: expect.any(String),
      programType: expect.any(String),
      images: {
        PosterArt: {
          url: expect.any(String),
          width: expect.any(Number),
          height: expect.any(Number),
        },
      },
      releaseYear: 2016,
    });
  });
});
