import logo from "/src/assets/images/logo.svg";
import { Text, StyledLogo } from "./styles";

export function Logo() {
  return (
    <StyledLogo href="/">
      <img src={logo} alt="логотип" />
      <Text>Котокафе</Text>
      </StyledLogo>
  );
}
