import { About } from "/src/components/blocks/about/about";
import { StarsList } from "/src/components/blocks/stars-list/stars-list";

export function MainPage({ stars }) {
  return <>
    <About />
    <StarsList stars={stars} />
  </>;
}