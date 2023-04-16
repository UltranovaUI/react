import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";

describe("Badge", () => {
  test("Render Badge component", () => {
    render(<Badge text="TypeScript" bgColor="#212121" />);
  });
  test("Render Badge component (logo variation)", () => {
    render(<Badge text="TypeScript" bgColor="#212121" logo="typescript" />);
  });
  test("Render Badge component (logo + logoColor variation)", () => {
    render(<Badge text="TypeScript" bgColor="#212121" logo="typescript" logoColor="#fff" />);
  });
});
