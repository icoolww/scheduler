import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  // it("renders without crashing", () => {
  //   render(<Appointment />);
  // });

  it("does something it is supposed to do", () => {
    // ...
  });

  it("does something else it is supposed to do", () => {
    // ...
  });
});


it("doesn't call the function", () => {
  const fn = jest.fn();
  expect(fn).toHaveBeenCalledTimes(0);
});