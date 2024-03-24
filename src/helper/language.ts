import i18next from 'i18next';
import { read, store } from './localStorage';

export const readLanguage = (): string => {
  const currentLanguage = String(read('lang'));
  return currentLanguage ?? 'fa';
};

export const writeLanguage = (lang: string): void => {
  store('lang', lang);
  i18next.changeLanguage(lang);
  document.body.dir = i18next.dir();
};
