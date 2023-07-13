import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Hamster: Story = {
  args: {
    name: "hamster",
  },
};

export const Cat: Story = {
  args: {
    name: "cat",
  },
};

export const Dog: Story = {
  args: {
    name: "dog",
  },
};

export const Fish: Story = {
  args: {
    name: "fish",
  },
};

export const Frog: Story = {
  args: {
    name: "frog",
  },
};

export const Monkey: Story = {
  args: {
    name: "monkey",
  },
};

export const Penguin: Story = {
  args: {
    name: "penguin",
  },
};

export const Pig: Story = {
  args: {
    name: "pig",
  },
};

export const Snake: Story = {
  args: {
    name: "snake",
  },
};

export const Turtle: Story = {
  args: {
    name: "turtle",
  },
};

export const Rabbit: Story = {
  args: {
    name: "rabbit",
  },
};
