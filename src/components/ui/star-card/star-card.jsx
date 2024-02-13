import "./style.css";
import { Title, TitleSize } from "/src/components/ui/title/title";
import { StarIcon } from "/src/components/ui/star-icon/star-icon";
export function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // URL c фото кота
}) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StarIcon className="star-card__icon" feature={feature} />
      </figure>
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}
