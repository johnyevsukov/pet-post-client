import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const ExtraSmall: Story = {
  render: (args) => (
    <Text {...args} $size="xs">
      Some xs text here.
    </Text>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Text {...args} $size="sm">
      Some sm text here.
    </Text>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <Text {...args} $size="md">
      Some md text here.
    </Text>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Text {...args} $size="lg">
      Some lg text here.
    </Text>
  ),
};

export const ExtraLarge: Story = {
  render: (args) => (
    <Text {...args} $size="xl">
      Some xl text here.
    </Text>
  ),
};

export const ExtraExtraLarge: Story = {
  render: (args) => (
    <Text {...args} $size="xxl">
      Some xxl text here.
    </Text>
  ),
};

export const RegularWeight: Story = {
  render: (args) => (
    <Text {...args} $weight="regular">
      Some 400 weight text here.
    </Text>
  ),
};

export const MediumWeight: Story = {
  render: (args) => (
    <Text {...args} $weight="medium">
      Some 500 weight text here.
    </Text>
  ),
};

export const BoldWeight: Story = {
  render: (args) => (
    <Text {...args} $weight="bold">
      Some 700 weight text here.
    </Text>
  ),
};
