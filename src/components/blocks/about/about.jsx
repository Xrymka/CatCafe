import "./style.css";
import { Title, TitleSize } from "/src/components/ui/title/title";

export function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title size={TitleSize.BIG}>Первое в&nbsp;России котокафе</Title>
        <p className="about__text">Крупнейшее котокафе России, в&nbsp;котором живёт 50&nbsp;кошек и&nbsp;котов, и&nbsp;каждый из&nbsp;них ищет новый дом. Животных можно гладить, фотографировать, играть с&nbsp;ними.</p>
        <p className="about__work-time">Рабочее время с&nbsp;8:00 до&nbsp;23:00</p>
        <p className="about__address">Санкт-Петербург, набережная реки Карповки, дом&nbsp;5, литера&nbsp;П</p>
      </div>
    </section>
  );
}