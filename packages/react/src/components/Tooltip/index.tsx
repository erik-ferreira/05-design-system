import { Text } from "../Text";
import { Heading } from "../Heading";
import { ComponentProps } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { TooltipTrigger, TooltipContent } from "./styles";

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipTrigger>
          <Text>Lorem ipsum</Text>
        </TooltipTrigger>

        <TooltipPrimitive.Portal>
          <TooltipContent>
            <TooltipPrimitive.Arrow />

            <Heading size="sm">Lorem Ipsum</Heading>
            <Text size="sm" css={{ lineHeight: "$short" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              voluptatibus repudiandae non ducimus totam voluptatem? Rem ut
              numquam atque iste quia incidunt eligendi aliquid inventore iusto
              rerum, nemo nulla non?
            </Text>
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

Tooltip.displayName = "Tooltip";
