import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

import StoryContainer from "../storybook";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Size: Story = {
  render: () => (
    <StoryContainer vertical>
      <Text size="xs">XSmall</Text>
      <Text size="sm">Small</Text>
      <Text size="base">Base</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">XLarge</Text>
      <Text size="2xl">2XLarge</Text>
    </StoryContainer>
  ),
};

export const Align: Story = {
  render: () => (
    <StoryContainer vertical stretch>
      <Text align="left">Left</Text>
      <Text align="center">Center</Text>
      <Text align="right">Right</Text>
      <Text align="justify">Justify</Text>
      <Text align="start">Start</Text>
      <Text align="end">End</Text>
    </StoryContainer>
  ),
};
