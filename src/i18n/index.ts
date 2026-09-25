import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';

export const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'it', 'de'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

/** Le français reste la langue par défaut et le repli garanti. */
export const DEFAULT_LANGUAGE: Language = 'fr';

/** Noms natifs : un endonyme ne se traduit pas. */
export const LANGUAGE_NAMES: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  de: 'Deutsch',
};

const STORAGE_KEY = 'site-language';

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

function readStoredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch {
    return null;
  }
}

function readBrowserLanguage(): Language | null {
  const candidates = [navigator.language, ...(navigator.languages ?? [])];

  for (const candidate of candidates) {
    const base = candidate?.split('-')[0]?.toLowerCase();
    if (isLanguage(base)) {
      return base;
    }
  }

  return null;
}

/** Résolution : langue enregistrée → langue navigateur → français. */
function resolveInitialLanguage(): Language {
  return readStoredLanguage() ?? readBrowserLanguage() ?? DEFAULT_LANGUAGE;
}

const initialLanguage = resolveInitialLanguage();

void i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    es: { translation: es },
    it: { translation: it },
    de: { translation: de },
  },
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  returnNull: false,
});

document.documentElement.lang = initialLanguage;

/**
 * Change la langue sans rechargement : le hash de l'URL n'est pas touché,
 * la section courante reste donc affichée.
 */
export function changeLanguage(language: Language) {
  void i18n.changeLanguage(language);

  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // localStorage indisponible : la langue reste active pour la session.
  }

  document.documentElement.lang = language;
}

/** Liste de chaînes traduites (les listes sont stockées en tableaux dans les ressources). */
export function useTranslatedList(key: string): string[] {
  const { t } = useTranslation();
  return t(key, { returnObjects: true }) as unknown as string[];
}

export default i18n;
