import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@erik-ignite-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: "Type your name",
  },
};
