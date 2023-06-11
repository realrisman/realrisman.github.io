import type { Meta, StoryObj } from "@storybook/react";
import { Icon, icons } from "./icon";

import StoryContainer from "../storybook";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  render: () => (
    <StoryContainer>
      {Object.keys(icons).map((key) => (
        <Icon key={key} icon={key} />
      ))}
    </StoryContainer>
  ),
};
