import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { English } from "./English";
import { Turkish } from "./Turkish";
import { italian } from "./Italian";

i18n.use(initReactI18next).init({
  debug: true,
  lng: navigator.language,
  fallbackLng: "en",
  resources: {
    en: {
      translation: English,
    },
    tr: {
      translation: Turkish,
    },
    it: {
      translation: italian,
    },
  },
});

export default i18n;
