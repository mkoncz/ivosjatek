import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEn from "../locales/translation_en.json";
import translationHu from "../locales/translation_hu.json";
import rulesHu from "../locales/rules_hu.json";
import rulesEn from "../locales/rules_en.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "hu",
    fallbackLng: "hu", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEn,
        rules: rulesEn
      },
      hu: {
        translations: translationHu,
        rules: rulesHu
      }
    },
    // have a common namespace used around the full app
    ns: ["translations","rules"],
    defaultNS: "translations"
  });

export default i18n;
