import { TitleSize } from "/src/components/ui/title/title";
import { Gallery } from "/src/components/ui/gallery/gallery";
import { StyledSection, StyledTitle } from "./styles";

export const CafeGallery = ({ slides }) => {
  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  );
} 