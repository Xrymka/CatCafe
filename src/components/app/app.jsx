import { PageWrapper } from "/src/components/layout/page-wrapper/page-wrapper.jsx";
// import { starList } from "/src/mocks/starList.js";
import { gallery } from "/src/mocks/gallery.js";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <PageWrapper stars={starList} />; */}
      <PageWrapper slides={gallery} />;
    </div>
  );
}
