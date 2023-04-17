import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps, Text, Heading } from "@erik-ignite-ui/react";

export default {
  title: "Overlay/Tooltip",
  component: Tooltip,
  args: {
    children: (
      <>
        <Heading size="sm">Lorem Ipsum</Heading>
        <Text size="sm" css={{ lineHeight: "$short" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          voluptatibus repudiandae non ducimus totam voluptatem? Rem ut numquam
          atque iste quia incidunt eligendi aliquid inventore iusto rerum, nemo
          nulla non?
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
