import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@erik-ignite-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text>Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
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
