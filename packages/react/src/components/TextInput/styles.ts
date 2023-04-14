import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  variants: {
    size: {
      sm: {
        padding: "$2 $3",
      },
      md: {
        padding: "$3 $4",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const Prefix = styled("span", {
  color: "$gray400",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
});

export const Input = styled("input", {
  color: "$white",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});
