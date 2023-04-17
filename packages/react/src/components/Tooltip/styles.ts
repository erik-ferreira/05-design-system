import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: "unset",
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray100",
});

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: "$gray900",
  borderRadius: "$md",
  padding: "$3 $4",
  maxWidth: 250,
});
