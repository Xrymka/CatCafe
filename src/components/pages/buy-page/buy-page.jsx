import { CafeGallery } from "/src/components/blocks/cafe-gallery/cafe-gallery";
import { Buy } from "/src/components/blocks/buy/buy";
export function BuyPage({ slides, buyOptions }) {
  return <>
    <CafeGallery slides={slides} />
    <Buy buyOptions={buyOptions} />
  </>;
}