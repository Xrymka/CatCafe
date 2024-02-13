import { Logo } from "/src/components/ui/logo/logo";
import { Nav } from "/src/components/layout/nav/nav";
import "./style.css";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}
