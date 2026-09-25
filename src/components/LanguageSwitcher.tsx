import { useTranslation } from 'react-i18next';
import {
  LANGUAGE_NAMES,
  SUPPORTED_LANGUAGES,
  changeLanguage,
  isLanguage,
  type Language,
} from '../i18n';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const resolved = i18n.resolvedLanguage ?? i18n.language;
  const current: Language = isLanguage(resolved) ? resolved : 'fr';

  return (
    <div className="language-switcher" role="group" aria-label={t('a11y.languageGroup')}>
      {SUPPORTED_LANGUAGES.map((language) => (
        <button
          key={language}
          type="button"
          className="language-switcher__button"
          lang={language}
          aria-pressed={language === current}
          aria-label={`${language.toUpperCase()} — ${LANGUAGE_NAMES[language]}`}
          onClick={() => changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
