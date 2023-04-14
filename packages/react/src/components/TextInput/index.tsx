import { ComponentProps, forwardRef, ElementRef } from "react";
import { TextInputContainer, Prefix, Input } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...rest }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <Input ref={ref} {...rest} />
      </TextInputContainer>
    );
    // eslint-disable-next-line prettier/prettier
  }
);

TextInput.displayName = "TextInput";
