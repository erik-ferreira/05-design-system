import { ComponentProps, useState } from "react";
import { X } from "phosphor-react";

import { Button } from "../Button";

import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
} from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description?: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ToastProvider swipeDirection="right">
      <Button onClick={() => setModalIsOpen(true)}>Show Toast</Button>

      <ToastRoot open={modalIsOpen} onOpenChange={setModalIsOpen} {...props}>
        <ToastTitle>{title}</ToastTitle>
        {!!description && (
          <ToastDescription asChild>
            <time>{description}</time>
          </ToastDescription>
        )}

        <ToastAction altText="Close toast">
          <X />
        </ToastAction>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  );
}

Toast.displayName = "Toast";
