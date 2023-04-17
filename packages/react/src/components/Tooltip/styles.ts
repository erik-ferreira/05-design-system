import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: "unset",
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray100",
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$gray900",
  width: "$4",
  height: "2",
});

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  padding: "$3 $4",
  maxWidth: 250,

  fontFamily: "$default",
  fontSize: "$sm",
  lineHeight: "$short",
  color: "$gray100",
});
