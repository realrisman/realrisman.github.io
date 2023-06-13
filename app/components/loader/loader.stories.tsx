import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./loader";

import StoryContainer from "../storybook";

const meta: Meta<typeof Loader> = {
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => (
    <StoryContainer>
      <Loader size={48} />
    </StoryContainer>
  ),
};
