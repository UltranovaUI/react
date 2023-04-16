import React, { ReactNode } from "react";
import "./Position.css";

interface PositionProps {
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  children: ReactNode;
  className?: string;
}

const Position = ({ top, bottom, right, left, children, className }: PositionProps) => {
  if (top) {
    if (right) {
      return <div className={`absolute top right ${className}`}>{children}</div>;
    } else if (left) {
      return <div className={`absolute top left ${className}`}>{children}</div>;
    }
  }

  if (bottom) {
    if (right) {
      return <div className={`absolute bottom right ${className}`}>{children}</div>;
    } else if (left) {
      return <div className={`absolute bottom left ${className}`}>{children}</div>;
    }
  }

  return <></>;
};

export default Position;
