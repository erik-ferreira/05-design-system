import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from "@erik-ignite-ui/react";

export default {
  title: "Overlay/Toast",
  component: Toast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
