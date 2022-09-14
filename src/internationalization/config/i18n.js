import i18n from "i18next";
import translation_es from "../translations/es/translation.json";
import translation_en from "../translations/en/translation.json";
import { LanguageEnum } from "../../constants/LanguageEnum";

i18n
  .init({
    lng: LanguageEnum.ES,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: translation_es,
      },
      en: {
        translation: translation_en,
      },
    },
  })
  .then(() => {});

export default i18n;
