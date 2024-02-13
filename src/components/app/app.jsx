import { PageWrapper } from "/src/components/layout/page-wrapper/page-wrapper.jsx";
import { starList } from "/src/mocks/starList.js";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <PageWrapper stars={starList} />;
    </div>
  );
}
