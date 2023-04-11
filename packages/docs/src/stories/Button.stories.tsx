import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@erik-ignite-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Teste",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
