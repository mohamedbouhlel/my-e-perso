import { useEffect, useId, useRef, useState } from 'react';

const ZOOM_STEPS: readonly number[] = [0.8, 0.9, 1, 1.1, 1.25, 1.5];
const DEFAULT_ZOOM_INDEX = ZOOM_STEPS.indexOf(1);
const BASE_FONT_SIZE = 16;

export default function WindowMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX);
  const [status, setStatus] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canUseFullscreen, setCanUseFullscreen] = useState(false);
  const [canCopy, setCanCopy] = useState(false);

  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const zoom = ZOOM_STEPS[zoomIndex];

  // Capacités réelles du navigateur : une commande indisponible est annoncée, jamais simulée.
  useEffect(() => {
    setCanUseFullscreen(document.fullscreenEnabled === true);
    setCanCopy(typeof navigator.clipboard?.writeText === 'function');

    const syncFullscreen = () => setIsFullscreen(document.fullscreenElement !== null);
    syncFullscreen();
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  // Zoom de page : seules les tailles en rem suivent, donc la mise en page reste cohérente.
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${BASE_FONT_SIZE * zoom}px`;
    return () => {
      root.style.fontSize = '';
    };
  }, [zoom]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    panelRef.current?.querySelector<HTMLButtonElement>('button:not(:disabled)')?.focus();

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setStatus('');
    setIsOpen((open) => !open);
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
      setStatus('');
    } catch {
      setStatus('Plein écran refusé par le navigateur.');
    }
  };

  const printPage = () => {
    setIsOpen(false);
    window.print();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus('Lien de la page copié.');
    } catch {
      setStatus('Copie impossible : autorisation refusée.');
    }
  };

  return (
    <div className="window-menu" ref={containerRef}>
      <button
        type="button"
        ref={triggerRef}
        className="window-menu__trigger"
        aria-label="Commandes de fenêtre"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggleMenu}
      >
        ⋯
      </button>

      {isOpen && (
        <div className="window-menu__panel" id={panelId} ref={panelRef}>
          <p className="window-menu__group-label">Fenêtre</p>
          <button
            type="button"
            className="window-menu__item"
            onClick={toggleFullscreen}
            disabled={!canUseFullscreen}
          >
            <span>{isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}</span>
            {!canUseFullscreen && <span className="window-menu__value">indisponible</span>}
          </button>
          <button type="button" className="window-menu__item" onClick={printPage}>
            Imprimer la page
          </button>

          <p className="window-menu__group-label">Affichage</p>
          <div className="window-menu__meter">
            <span>Zoom</span>
            <span className="window-menu__value">{Math.round(zoom * 100)} %</span>
          </div>
          <button
            type="button"
            className="window-menu__item"
            onClick={() => setZoomIndex((index) => Math.max(0, index - 1))}
            disabled={zoomIndex === 0}
          >
            Zoom arrière
          </button>
          <button
            type="button"
            className="window-menu__item"
            onClick={() => setZoomIndex((index) => Math.min(ZOOM_STEPS.length - 1, index + 1))}
            disabled={zoomIndex === ZOOM_STEPS.length - 1}
          >
            Zoom avant
          </button>
          <button
            type="button"
            className="window-menu__item"
            onClick={() => setZoomIndex(DEFAULT_ZOOM_INDEX)}
            disabled={zoomIndex === DEFAULT_ZOOM_INDEX}
          >
            Taille réelle
          </button>

          <p className="window-menu__group-label">Partage</p>
          <button
            type="button"
            className="window-menu__item"
            onClick={copyLink}
            disabled={!canCopy}
          >
            <span>Copier le lien</span>
            {!canCopy && <span className="window-menu__value">indisponible</span>}
          </button>

          {status && (
            <p className="window-menu__status" role="status">
              {status}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
