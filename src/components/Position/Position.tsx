import React, { ReactNode } from "react";

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
      return <div className={`absolute top-[20px] right-[20px] ${className}`}>{children}</div>;
    } else if (left) {
      return <div className={`absolute top-[20px] left-[20px] ${className}`}>{children}</div>;
    }
  }

  if (bottom) {
    if (right) {
      return <div className={`absolute bottom-[20px] right-[20px] ${className}`}>{children}</div>;
    } else if (left) {
      return <div className={`absolute bottom-[20px] left-[20px] ${className}`}>{children}</div>;
    }
  }

  return <></>;
};

export default Position;
