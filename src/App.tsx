import { Suspense } from "react";
import "./App.css";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Suspense fallback="Loading...">
      <div className="App w-screen">
        <h1 className="w-full text-5xl text-center">{t("title")}</h1>
        <p className="w-full text-center text-xl font-bold mt-8">
          {t("paragraph")}
        </p>
        <div className="Buttons flex gap-8 items-center justify-center mt-8">
          <button
            className="border-black border-2 px-4 py-2 bg-red-700"
            onClick={() => {
              changeLanguage("tr");
            }}
          >
            Turkish
          </button>
          <button
            className="border-2 border-black px-4 py-2 bg-red-700"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            english
          </button>
          <button
            className="border-2 border-black px-6 py-2 bg-red-700"
            onClick={() => {
              changeLanguage("it");
            }}
          >
            italy
          </button>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
