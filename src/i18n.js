import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageEN from "./locales/en/translation.json"; // Файл англійської мови
import languageUA from "./locales/ua/translation.json"; // Файл української мови
import languagePL from "./locales/pl/translation.json"; // Файл польскої мови

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: languageEN },
    ua: { translation: languageUA },
    pl: { translation: languagePL },
  },
  lng: "en", // Мова за замовчуванням
  fallbackLng: "en", // Резервна мова
  interpolation: {
    escapeValue: false, // React вже виконує екранізацію значень
  },
  react: {
    useSuspense: false, // Додано, щоб уникнути проблем з рендерингом компонентів
  },
});