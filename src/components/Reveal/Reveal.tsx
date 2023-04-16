import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  auto?: boolean;
  width?: string;
  duration?: string;
  steps?: string;
  color?: "light" | "dark" | string;
  offset?: number;
  children: React.ReactNode;
  responsive?: "sm" | "md";
}

const Reveal: React.FC<Props> = ({ auto, width, duration, steps, color = "dark", offset = 1, children, responsive }) => {
  const characters = (children as string).trim().length;

  let dynamicWidth = "auto";
  let dynamicDuration = characters / 12 + "s";
  let dynamicSteps = characters + offset;

  if (auto) {
    dynamicWidth = `${characters + offset}ch`;
  } else if (width && duration && steps) {
    dynamicWidth = width;
    dynamicDuration = duration;
    dynamicSteps = parseInt(steps);

    if (isNaN(dynamicSteps)) {
      throw new Error("Invalid value passed for 'steps'");
    }
  } else if (width || duration || steps) {
    throw new Error("If one of 'width', 'duration' or 'steps' is passed, all three are required");
  } else {
    throw new Error("Either 'auto' or 'width', 'duration' and 'steps' are required");
  }

  const cursorColorValue = color === "light" ? "rgba(255, 255, 255, 0.75)" : color === "dark" ? "rgba(0, 0, 0, 0.75)" : color;

  const reveal = keyframes`
    from {
      width: 0;
    }
    to {
      width: ${dynamicWidth};
    }
  `;

  const blinkTextCursor = keyframes`
    from {
      border-right-color: ${cursorColorValue};
    }
    to {
      border-right-color: transparent;
    }
  `;

  const RevealContainer = styled.div`
    margin: 0 auto;
    border-right: 2px solid ${cursorColorValue};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    animation: ${reveal} steps(${dynamicSteps}) ${dynamicDuration} 1 normal both, ${blinkTextCursor} 1000ms steps(40) infinite normal;
  `;

  if (responsive === "sm") {
    return (
      <div className={`md:hidden block`}>
        <RevealContainer>{children}</RevealContainer>
      </div>
    );
  } else if (responsive === "md") {
    return (
      <div className={`md:block hidden`}>
        <RevealContainer>{children}</RevealContainer>
      </div>
    );
  } else {
    return <RevealContainer>{children}</RevealContainer>;
  }
};

export default Reveal;
