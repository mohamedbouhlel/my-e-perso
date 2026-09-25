import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackToTop from './components/BackToTop';
import Icon from './components/Icon';
import TabNav from './components/TabNav';
import WindowMenu from './components/WindowMenu';
import LanguageSwitcher from './components/LanguageSwitcher';
import {
  footerLinkHrefs,
  footerLinkIds,
  headerNavIds,
  sectionIcons,
  siteIdentity,
} from './content/site';
import { DEFAULT_SECTION_ID, SECTIONS, isSectionId, type SectionId } from './sections';

function readSectionFromHash(): SectionId {
  const candidate = window.location.hash.slice(1);
  return isSectionId(candidate) ? candidate : DEFAULT_SECTION_ID;
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [activeId, setActiveId] = useState<SectionId>(readSectionFromHash);
  const isFirstRender = useRef(true);

  // L'URL est la source de vérité : pas de routeur, seulement le hash.
  useEffect(() => {
    const syncFromHash = () => {
      setActiveId(readSectionFromHash());

      // Un hash absent ou inconnu est remplacé, sans jamais écraser une section valide.
      if (!isSectionId(window.location.hash.slice(1))) {
        try {
          window.history.replaceState(null, '', `#${DEFAULT_SECTION_ID}`);
        } catch {
          // replaceState indisponible (contexte restreint) : la navigation reste fonctionnelle.
        }
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.scrollTo(0, 0);
  }, [activeId]);

  // Titre et description du document suivent la langue active.
  useEffect(() => {
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
  }, [t, i18n.language]);

  const tabItems = SECTIONS.map((section) => ({
    id: section.id,
    label: t(`sections.${section.id}`),
    ...sectionIcons[section.id],
  }));

  return (
    <div className="app">
      <a className="skip-link" href="#contenu">
        {t('a11y.skipToContent')}
      </a>

      {/* Faux environnement de fenêtre : interface du site, pas le navigateur réel. */}
      <div className="chrome">
        <div className="chrome__bar">
          <WindowMenu />
          <TabNav items={tabItems} activeId={activeId} />
          <span className="chrome__plus" aria-hidden="true">
            +
          </span>
        </div>

        <div className="chrome__address" aria-hidden="true">
          <span className="chrome__url">
            <Icon name="lock" size={15} />
            <span className="chrome__url-text">{siteIdentity.address}</span>
            <span className="chrome__url-actions">
              <span className="chrome__badge">
                <Icon name="trophy" size={16} />
              </span>
              <span className="chrome__avatar">{siteIdentity.monogram}</span>
            </span>
          </span>
        </div>
      </div>

      <div className="shell">
        <header className="site-header">
          <a className="site-header__brand" href="#accueil">
            <span className="site-header__logo" aria-hidden="true">
              {siteIdentity.monogram}
            </span>
            <span className="site-header__name">{siteIdentity.name}</span>
          </a>

          <nav className="site-header__nav" aria-label={t('a11y.headerNav')}>
            {headerNavIds.map((id) => (
              <a
                key={id}
                className="site-header__link"
                href={`#${id}`}
                aria-current={id === activeId ? 'true' : undefined}
              >
                {t(`headerNav.${id}`)}
              </a>
            ))}
          </nav>

          <LanguageSwitcher />

          <a className="btn btn--primary site-header__cta" href="#contact">
            {t('common.contactCta')}
            <span className="btn__icon">
              <Icon name="arrow-right" size={16} />
            </span>
          </a>
        </header>

        <main className="shell__panel" id="contenu">
          {SECTIONS.map(({ id, Component }) => (
            <div className="shell__view" id={id} key={id} hidden={id !== activeId}>
              <Component />
            </div>
          ))}
        </main>

        <footer className="site-footer">
          <span className="site-footer__name">{siteIdentity.name}</span>
          <p className="site-footer__note">
            © {new Date().getFullYear()} — {t('footer.legal')}
          </p>
          <nav className="site-footer__links" aria-label={t('a11y.footerNav')}>
            {footerLinkIds.map((id) => {
              const href = footerLinkHrefs[id];

              return href ? (
                <a key={id} href={href}>
                  {t(`footer.links.${id}`)}
                </a>
              ) : (
                <span
                  className="site-footer__link-pending"
                  key={id}
                  title={t('common.linkPending')}
                >
                  {t(`footer.links.${id}`)}
                </span>
              );
            })}
          </nav>
        </footer>
      </div>

      <BackToTop />
    </div>
  );
}
