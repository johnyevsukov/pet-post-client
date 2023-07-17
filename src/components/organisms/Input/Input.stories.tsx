import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "username",
    type: "text",
    name: "username",
    label: "Username",
    value: "",
    handleBlur: () => null,
    handleChange: () => null,
  },
};
