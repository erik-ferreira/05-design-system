import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@erik-ignite-ui/react";

export default {
  title: "Typography/Box",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate atque labore officia reprehenderit dolor beatae est. Rerum vero, eos corporis est reprehenderit deserunt animi quae debitis temporibus, harum perspiciatis omnis.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
