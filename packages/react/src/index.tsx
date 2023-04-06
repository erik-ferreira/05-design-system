import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$gray500",
});

export function App() {
  return <Button>HEllo</Button>;
}
