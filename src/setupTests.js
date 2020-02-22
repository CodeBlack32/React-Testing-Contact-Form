// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("mounts to a simulated DOM", () => {
    const simulatedDOM = render(<App />);
    const p = simulatedDOM.queryByText(/error/i);
    expect(p).toBeInTheDocument();
    console.log(simulatedDOM.debug());
  });
});
