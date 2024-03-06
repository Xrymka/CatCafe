import { PageWrapper } from "/src/components/layout/page-wrapper/page-wrapper";
// import { starList } from "/src/mocks/starList";
import { gallery } from "/src/mocks/gallery";
import { buyOptions } from "../../mocks/buyOptions";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <PageWrapper stars={starList} />; */}
      <PageWrapper slides={gallery} buyOptions={buyOptions} />;
    </div>
  );
}
