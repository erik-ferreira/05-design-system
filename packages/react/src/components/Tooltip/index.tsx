import { ComponentProps, ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { Text } from "../Text";

import { TooltipTrigger, TooltipArrow, TooltipContent } from "./styles";

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({ children, side = "bottom", ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipTrigger>
          <Text>Lorem ipsum</Text>
        </TooltipTrigger>

        <TooltipPrimitive.Portal>
          <TooltipContent side={side}>
            <TooltipArrow />

            {children}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

Tooltip.displayName = "Tooltip";
