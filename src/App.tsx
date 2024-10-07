import { Suspense } from "react";
import "./App.css";
import i18n from "./components/i18n";
import { useTranslation } from "react-i18next";
import { imagesBG } from "./components/images";

function App() {
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const textArray = [
    "bodyguardTitle",
    "bodyguard",
    "armed",
    "unarmed",
    "private",
  ];
  return (
    <Suspense fallback="Loading...">
      <div className="App w-full">
        <header className="w-full flex justify-between items-center px-8 py-12 bg-slate-800 max-sm:p-2">
          <div>
            <div className="text-5xl font-bold text-white max-sm:text-3xl">
              <h1>{t("titleBG")}</h1>
            </div>
          </div>
          <div className="Buttons flex gap-8 items-center justify-center max-sm:flex-col max-lg:gap-2 ">
            <button
              className={
                "border-2 px-2 py-5 bg-slate-400 rounded-full border-black max-sm:p-2 " +
                (i18n.language === "tr" && " border-slate-200 text-white")
              }
              onClick={() => {
                changeLanguage("tr");
              }}
            >
              Turkish
            </button>
            <button
              className={
                "border-2 px-2 py-5 bg-slate-400 rounded-full border-black max-sm:p-2 " +
                (i18n.language === "en" && " border-slate-200 text-white")
              }
              onClick={() => {
                changeLanguage("en");
              }}
            >
              English
            </button>
            <button
              className={
                "border-2 border-black px-3 py-5 bg-slate-400 rounded-full max-sm:px-3 max-sm:py-[0.385rem] " +
                (i18n.language === "it" && " border-slate-200 text-white")
              }
              onClick={() => {
                changeLanguage("it");
              }}
            >
              Italian
            </button>
          </div>
        </header>
        <main className="w-full flex flex-col gap-6 px-8 py-16 bg-gray-200 max-lg:py-0">
          {textArray.map((key, index) => (
            <div className="box-1 w-full flex gap-12 pb-8 items-center max-lg:flex-col max-lg:gap-8">
              <div className={index % 2 === 0 ? "order-0 " : "order-1 "}>
                <h1 className="text-4xl font-semibold my-8">
                  {t(`${key}.title`)}
                </h1>
                <p>{t(`${key}.content`)}</p>
              </div>
              <img
                src={imagesBG[index]}
                alt={key}
                className={
                  (index % 2 === 0 ? " order-1 " : " order-0 ") +
                  " w-2/6 max-lg:order-2 max-lg:w-3/4"
                }
              />
            </div>
          ))}
        </main>
        <footer className="w-full flex pl-10 gap-16 items-start py-10 bg-slate-800 text-white max-sm:gap-6 max-sm:pl-4 max-sm:flex-col">
          <h1 className="text-4xl max-sm:text-2xl">Contact</h1>
          <div className="flex flex-col text-lg max-sm:text-sm">
            <p>Email: admin@gmail.com</p>
            <p>Phone: +11 1111111111</p>
          </div>
          <p className="max-sm:text-sm">
            Adress: 123 Main Street, apt 4B San Diego CA, 91911
          </p>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
