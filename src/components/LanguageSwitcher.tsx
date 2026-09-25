import { useTranslation } from 'react-i18next';
import {
  LANGUAGE_NAMES,
  SUPPORTED_LANGUAGES,
  changeLanguage,
  isLanguage,
  type Language,
} from '../i18n';

/** Sélecteur compact de langue du shell. */
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const resolved = i18n.resolvedLanguage ?? i18n.language;
  const current: Language = isLanguage(resolved) ? resolved : 'fr';

  return (
    <div className="language-switcher">
      <select
        className="language-switcher__select"
        value={current}
        lang={current}
        aria-label={t('a11y.languageGroup')}
        onChange={(event) => {
          const next = event.target.value;
          if (isLanguage(next)) changeLanguage(next);
        }}
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language} value={language} lang={language}>
            {language.toUpperCase()} — {LANGUAGE_NAMES[language]}
          </option>
        ))}
      </select>
    </div>
  );
}
