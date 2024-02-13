import "./style.css";
import { Title } from "/src/components/ui/title/title";
import { StarCard } from "/src/components/ui/star-card/star-card";
import { Button } from "/src/components/ui/button/button";
import "./style.css";

export function StarsList({ stars }) {
  return (
    <section className="star-list">
      {stars?.length ? (
        <>
          <Title>Наши звёзды</Title>
          <ul className="star-list__list">
            {stars.map((star) => (
              <li className="star-list__item" key={star.id}>
                <StarCard {...star} />
              </li>
            ))}
          </ul>
          <Button minWidth={353}>Купить билет</Button>
        </>
      ) : null}
    </section>
  );
}