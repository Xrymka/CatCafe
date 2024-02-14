import { Logo } from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

export function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledSection>
  );
}