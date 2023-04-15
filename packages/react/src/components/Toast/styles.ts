import * as Toast from "@radix-ui/react-toast";
import { styled, keyframes } from "../../styles";

const VIEWPORT_PADDING = 25;
const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});
export const ToastProvider = styled(Toast.Provider, {});

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: "$gray800",
  padding: "$3 $5",
  borderRadius: "$sm",
  display: "flex",
  gap: "$1",
  flexDirection: "column",
  position: "relative",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  fontFamily: "$default",
  fontSize: "$xl",
  color: "$white",
  lineHeight: "$base",
});

export const ToastDescription = styled(Toast.Description, {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray200",
  lineHeight: "$base",
});

export const ToastAction = styled(Toast.Action, {
  all: "unset",

  color: "$gray200",
  lineHeight: 0,
  borderRadius: "$xs",

  position: "absolute",
  top: 16,
  right: 16,

  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100",
  },

  "&:hover": {
    color: "$gray100",
    cursor: "pointer",
  },

  svg: {
    width: "$5",
    height: "$5",
  },
});

export const ButtonClose = styled("button", {});

export const ToastClose = styled(Toast.Close, {});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  right: 32,
  bottom: 32,
  listStyle: "none",
  outline: 0,
  maxWidth: 360,
  width: "100%",
});
