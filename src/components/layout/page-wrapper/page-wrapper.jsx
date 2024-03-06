import { Header } from "/src/components/layout/header/header";
import { Footer } from "/src/components/layout/footer/footer";
// import { MainPage } from "/src/components/pages/main-page/main-page";
import { BuyPage } from "../../pages/buy-page/buy-page";
import { Main } from "./styles";

export function PageWrapper({ ...props }) {
  return (
    <>
      <Header />
      <Main>
        {/* <MainPage {...props} /> */}
        <BuyPage {...props} />
      </Main>
      <Footer />
    </>
  );
}
