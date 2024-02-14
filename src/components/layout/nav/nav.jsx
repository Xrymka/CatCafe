import { Button } from "/src/components/ui/button/button";

export function Nav() {
  return (
    <nav>
      <Button minWidth={260} link="/buy">Купить билет</Button>
    </nav>
  );
}