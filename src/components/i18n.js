import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './homepagetextEN.json';
import translationFR from './homepagetextFR.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
