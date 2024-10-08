import "./App.css";
import i18n from "./components/Languages/i18n";
import { useTranslation } from "react-i18next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App w-full">
      <Header {...{ t, i18n }} />
      <Main t={t} />
      <Footer />
    </div>
  );
}

export default App;
