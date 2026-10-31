// src/locales/index.ts
import es from './languages/es.json';
import en from './languages/en.json';
import ja from './languages/ja.json';
import fr from './languages/fr.json';
import ru from './languages/ru.json';
import de from './languages/de.json';
import zh from './languages/zh.json';

export const uiTranslations: Record<string, any> = {
  es,
  en,
  ja,
  fr,
  ru,
  de,
  zh
};

export type SupportedLangs = keyof typeof uiTranslations;
export const VALID_LANGS = Object.keys(uiTranslations) as SupportedLangs[];
export default uiTranslations;