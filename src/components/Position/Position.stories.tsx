import type { Meta, StoryObj } from "@storybook/react";
import Position from "./Position";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Position> = {
  component: Position,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TopLeft: Story = {
  args: {
    top: true,
    left: true,
    children: "Top left",
  },
};

export const TopRight: Story = {
  args: {
    top: true,
    right: true,
    children: "Top right",
  },
};

export const BottomLeft: Story = {
  args: {
    bottom: true,
    left: true,
    children: "Bottom left",
  },
};

export const BottomRight: Story = {
  args: {
    bottom: true,
    right: true,
    children: "Bottom right",
  },
};
