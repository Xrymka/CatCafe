import "./style.css";

export function Button({ children, minWidth }) {
  return (
    <button type="button" style={{ minWidth: minWidth }} className="button">
      {children}
    </button>
  );
}
