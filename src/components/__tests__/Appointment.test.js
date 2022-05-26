

import { cleanup } from "@testing-library/react";



afterEach(cleanup);

describe("Appointment", () => {
  it("does something it is supposed to do", () => {
    
  });

  it("does something else it is supposed to do", () => {
    
  });
});

it("doesn't call the function", () => {
  const fn = jest.fn();
  expect(fn).toHaveBeenCalledTimes(0);
});
