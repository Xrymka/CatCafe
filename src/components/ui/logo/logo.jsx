import logo from "/src/assets/images/logo.svg";
import "./style.css";

export function Logo() {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="логотип" />
      <span className="logo__text">Котокафе</span>
    </a>
  );
}