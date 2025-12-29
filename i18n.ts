import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.json';
import kz from './locales/kz.json';
import en from './locales/en.json';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
            kz: { translation: kz },
            en: { translation: en },
        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
