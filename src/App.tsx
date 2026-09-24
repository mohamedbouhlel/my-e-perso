import { useEffect, useRef, useState } from 'react';
import TabNav from './components/TabNav';
import WindowMenu from './components/WindowMenu';
import { DEFAULT_SECTION_ID, SECTIONS, isSectionId, type SectionId } from './sections';

function readSectionFromHash(): SectionId {
  const candidate = window.location.hash.slice(1);
  return isSectionId(candidate) ? candidate : DEFAULT_SECTION_ID;
}

export default function App() {
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

  return (
    <div className="shell">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="shell__header">
        <p className="shell__brand">Site personnel</p>
        <WindowMenu />
      </header>

      <TabNav items={SECTIONS} activeId={activeId} />

      <main className="shell__panel" id="contenu">
        {SECTIONS.map(({ id, Component }) => (
          <div className="shell__view" id={id} key={id} hidden={id !== activeId}>
            <Component />
          </div>
        ))}
      </main>

      <footer className="shell__footer">
        <p>© {new Date().getFullYear()} — Site personnel</p>
      </footer>
    </div>
  );
}
