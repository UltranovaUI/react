import React from "react";
import { render } from "@testing-library/react";

import Reveal from "./Reveal";

describe("Reveal", () => {
  test("Render Reveal component (auto)", () => {
    render(<Reveal auto>Hello world!</Reveal>);
  });
  test("Render Reveal component (auto, offset)", () => {
    render(
      <Reveal auto offset={1}>
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (auto, color light)", () => {
    render(
      <Reveal auto color="light">
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (auto, color dark)", () => {
    render(
      <Reveal auto color="dark">
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (auto, color custom)", () => {
    render(
      <Reveal auto color="#f00">
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (auto, responsive)", () => {
    render(
      <>
        <Reveal auto responsive="sm">
          Hi world!
        </Reveal>
        <Reveal auto responsive="md">
          Hello world!
        </Reveal>
      </>
    );
  });
  test("Render Reveal component (manual)", () => {
    render(<Reveal width="12ch" duration="1s" steps="12">Hello world!</Reveal>);
  });
  test("Render Reveal component (manual, color light)", () => {
    render(
      <Reveal width="12ch" duration="1s" steps="12" color="light">
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (manual, color dark)", () => {
    render(
      <Reveal width="12ch" duration="1s" steps="12" color="dark">
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (manual, color custom)", () => {
    render(
      <Reveal width="12ch" duration="1s" steps="12" color="#f00">
        Hello world!
      </Reveal>
    );
  });
  test("Render Reveal component (manual, responsive)", () => {
    render(
      <>
        <Reveal width="12ch" duration="1s" steps="12" responsive="sm">
          Hi there!
        </Reveal>
        <Reveal width="12ch" duration="1s" steps="12" responsive="md">
          Hello world!
        </Reveal>
      </>
    );
  });
});
