import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import translationEN from "./assets/locals/en/translation.json";
import translationAR from "./assets/locals/ar/translation.json";
import translationKU from "./assets/locals/ku/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar", "ku"];

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  ku: {
    translation: translationKU,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    debug: false,
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
