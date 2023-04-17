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
    side: "bottom",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    side: {
      options: ["top", "right", "bottom", "left"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
