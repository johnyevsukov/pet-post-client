import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  render: (args) => (
    <Button {...args} $size="sm">
      Button
    </Button>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <Button {...args} $size="md">
      Button
    </Button>
  ),
};

export const Large: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const Blue: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const Red: Story = {
  render: (args) => (
    <Button {...args} $variant="red">
      Button
    </Button>
  ),
};

export const White: Story = {
  render: (args) => (
    <Button {...args} $variant="white">
      Button
    </Button>
  ),
};
