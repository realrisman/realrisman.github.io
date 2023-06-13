import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

import StoryContainer from "../storybook";
import { useState } from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const LoadableButton = (props: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button loading={loading} onClick={() => setLoading(!loading)} {...props} />
  );
};

export const Primary: Story = {
  render: () => (
    <StoryContainer>
      <Button onClick={action("clicked")}>Text only</Button>
      <Button icon="send" onClick={action("clicked")}>
        Icon left
      </Button>
      <Button iconEnd="arrowRight" onClick={action("clicked")}>
        Icon right
      </Button>
    </StoryContainer>
  ),
};

export const Secondary: Story = {
  render: () => (
    <StoryContainer>
      <Button secondary onClick={action("clicked")}>
        Text only
      </Button>
      <Button secondary icon="arrowRight" onClick={action("clicked")}>
        Icon left
      </Button>
      <Button secondary iconEnd="arrowRight" onClick={action("clicked")}>
        Icon right
      </Button>
    </StoryContainer>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <StoryContainer gutter={20}>
      <Button
        iconOnly
        aria-label="Send"
        icon="send"
        onClick={action("clicked")}
      />
      <Button
        iconOnly
        aria-label="Figma"
        icon="figma"
        onClick={action("clicked")}
      />
      <Button
        iconOnly
        aria-label="Close"
        icon="close"
        onClick={action("clicked")}
      />
    </StoryContainer>
  ),
};

export const Loader: Story = {
  render: () => (
    <StoryContainer>
      <LoadableButton>Click to load</LoadableButton>
      <LoadableButton icon="send">Click to load</LoadableButton>
    </StoryContainer>
  ),
};
