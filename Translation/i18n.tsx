import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import transEnglish from "./English/translation.json";
import transBrazilian from "./BrazilianPortuguese/translation.json";

const resources = {
  en: {
    translation: transEnglish
  },
  br: {
    translation: transBrazilian
  }
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "br",
  });

export default i18next;
