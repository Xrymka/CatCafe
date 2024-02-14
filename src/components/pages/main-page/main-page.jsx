import { About } from "/src/components/blocks/about/about";
import { StarsList } from "/src/components/blocks/stars-list/stars-list";
import { TitleLevel } from "/src/components/ui/title/title";

export function MainPage({ stars }) {
  return <>
    <About />
    <StarsList stars={stars} level={TitleLevel.H2} />
  </>;
}