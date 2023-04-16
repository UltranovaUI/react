import type { Meta, StoryObj } from "@storybook/react";
import Reveal from "./Reveal";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Reveal> = {
  component: Reveal,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Auto: Story = {
  args: {
    auto: true,
    children: "Hello world!",
  },
};

export const Auto_Offset: Story = {
  name: "Auto (offset)",
  args: {
    auto: true,
    offset: 1,
    children: "Hello world!",
  },
};

export const Manual: Story = {
  args: {
    width: "12ch",
    duration: "1s",
    steps: "12",
    children: "Hello world!",
  },
};

export const Responsive: Story = {
    render: (args) =>
    <>
      <Reveal {...args} auto responsive="sm" children="Hi world!" />
      <Reveal {...args} auto responsive="md" children="Hello world!" />
    </>
}