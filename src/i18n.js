import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const supportedLanguages = ["en", "fr"];
const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      detection: DETECTION_OPTIONS,
      resources,
      whitelist: supportedLanguages,
      fallbackLng: "en",
      supportedLngs: ["en", "fr"],
      interpolation: {
        escapeValue: false,
      },
      debug: false,
    },
    (err, t) => {
      console.info("i18next.language", i18n.language);
    }
  );

export default i18n;
