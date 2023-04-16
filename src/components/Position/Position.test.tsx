import React from "react";
import { render } from "@testing-library/react";

import Position from "./Position";

describe("Position", () => {
  test("Render position component (top left variation)", () => {
    render(
      <Position top left>
        Top left
      </Position>
    );
  });
  test("Render position component (top right variation)", () => {
    render(
      <Position top right>
        Top right
      </Position>
    );
  });
  test("Render position component (bottom left variation)", () => {
    render(
      <Position bottom left>
        bottom left
      </Position>
    );
  });
  test("Render position component (bottom right variation)", () => {
    render(
      <Position bottom right>
        bottom right
      </Position>
    );
  });
});
