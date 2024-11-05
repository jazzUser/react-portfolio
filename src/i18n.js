import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../public/locales/en/translation.json';
import deTranslation from '../public/locales/de/translation.json';

// Initialize i18next
i18n
  .use(initReactI18next)  // Passes i18n instance to React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
    },
    lng: 'de', // Default language
    fallbackLng: 'en', // Fallback language when the translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
