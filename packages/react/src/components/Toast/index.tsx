import { ComponentProps, useState } from "react";
import { X } from "phosphor-react";

import { Button } from "../Button";

import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  // ToastClose,
  ToastViewport,
} from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastRoot> {}

export function Toast(props: ToastProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ToastProvider>
      <Button onClick={() => setModalIsOpen(true)}>Show Toast</Button>

      <ToastRoot open={modalIsOpen}>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription asChild>
          <time>Quarta-feira, 23 de Outubro às 16h</time>
        </ToastDescription>

        <ToastAction altText="Close toast">
          <X />
        </ToastAction>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  );
}

Toast.displayName = "Toast";
