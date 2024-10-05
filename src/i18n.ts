import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const translationEN = {
  title: "Welcome to my demo",
  paragraph: "this is my first trying of demo app",
};
const translationTR = {
  title: "tanıtım uygulamama hoşgeldiniz",
  paragraph: "bu benim ilk demo uygulaması denemem.",
};
const translationIT = {
  title: "bella ciao, quento costa un te cornetto",
  paragraph: "bella ciao, quento costa un te cornetto",
};

i18n.use(initReactI18next).init({
  debug: true,
  lng: navigator.language,
  fallbackLng: "en",
  resources: {
    en: {
      translation: translationEN,
    },
    tr: {
      translation: translationTR,
    },
    it: {
      translation: translationIT,
    },
  },
});

export default i18n;
