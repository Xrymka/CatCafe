import { Header } from "/src/components/layout/header/header";
import { Footer } from "/src/components/layout/footer/footer";
import { MainPage } from "/src/components/pages/main-page/main-page";
import "./style.css";

export function PageWrapper(props) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage {...props} />
      </main>
      <Footer />
    </>
  );
}
