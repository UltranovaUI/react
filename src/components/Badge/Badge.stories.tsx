import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    text: "TypeScript",
    bgColor: "#212121",
  },
};

export const Logo: Story = {
  args: {
    text: "TypeScript",
    bgColor: "#212121",
    logo: "typescript",
  },
};

export const Logo_with_color: Story = {
  name: "Logo (with color)",
  args: {
    text: "TypeScript",
    bgColor: "#212121",
    logo: "typescript",
    logoColor: "#fff",
  },
};
