import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import { THEME_CHOICES, getThemeChoice, setTheme, type ThemeChoice } from '../theme';

const ZOOM_STEPS: readonly number[] = [0.8, 0.9, 1, 1.1, 1.25, 1.5];
const DEFAULT_ZOOM_INDEX = ZOOM_STEPS.indexOf(1);
const BASE_FONT_SIZE = 16;

export default function WindowMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX);
  const [status, setStatus] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canUseFullscreen, setCanUseFullscreen] = useState(false);
  const [canCopy, setCanCopy] = useState(false);
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>(getThemeChoice);

  const panelId = useId();
  const appearanceLabelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const appearanceRef = useRef<HTMLDivElement>(null);

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
      setStatus(t('window.status.fullscreenRefused'));
    }
  };

  const printPage = () => {
    setIsOpen(false);
    window.print();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus(t('window.status.linkCopied'));
    } catch {
      setStatus(t('window.status.copyFailed'));
    }
  };

  // Le thème est appliqué immédiatement : aucun rechargement, le hash de l'URL n'est pas touché.
  const chooseTheme = (choice: ThemeChoice) => {
    setTheme(choice);
    setThemeChoice(choice);
  };

  // Liste de boutons radio : les flèches changent le choix et déplacent le focus (motif ARIA).
  const handleThemeKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    const key = event.key;
    const step =
      key === 'ArrowDown' || key === 'ArrowRight' ? 1 : key === 'ArrowUp' || key === 'ArrowLeft' ? -1 : 0;

    if (step === 0) {
      return;
    }

    event.preventDefault();
    const index = THEME_CHOICES.indexOf(themeChoice);
    const nextChoice = THEME_CHOICES[(index + step + THEME_CHOICES.length) % THEME_CHOICES.length];

    chooseTheme(nextChoice);
    appearanceRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="radio"]')
      [THEME_CHOICES.indexOf(nextChoice)]?.focus();
  };

  return (
    <div className="window-menu" ref={containerRef}>
      <button
        type="button"
        ref={triggerRef}
        className="window-menu__trigger"
        aria-label={t('window.trigger')}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggleMenu}
      >
        ⋯
      </button>

      {isOpen && (
        <div className="window-menu__panel" id={panelId} ref={panelRef}>
          <p className="window-menu__group-label">{t('window.groups.window')}</p>
          <button
            type="button"
            className="window-menu__item"
            onClick={toggleFullscreen}
            disabled={!canUseFullscreen}
          >
            <span>
              {isFullscreen ? t('window.items.exitFullscreen') : t('window.items.fullscreen')}
            </span>
            {!canUseFullscreen && (
              <span className="window-menu__value">{t('window.items.unavailable')}</span>
            )}
          </button>
          <button type="button" className="window-menu__item" onClick={printPage}>
            {t('window.items.print')}
          </button>

          <p className="window-menu__group-label">{t('window.groups.display')}</p>
          <div className="window-menu__meter">
            <span>{t('window.items.zoom')}</span>
            <span className="window-menu__value">{Math.round(zoom * 100)} %</span>
          </div>
          <button
            type="button"
            className="window-menu__item"
            onClick={() => setZoomIndex((index) => Math.max(0, index - 1))}
            disabled={zoomIndex === 0}
          >
            {t('window.items.zoomOut')}
          </button>
          <button
            type="button"
            className="window-menu__item"
            onClick={() => setZoomIndex((index) => Math.min(ZOOM_STEPS.length - 1, index + 1))}
            disabled={zoomIndex === ZOOM_STEPS.length - 1}
          >
            {t('window.items.zoomIn')}
          </button>
          <button
            type="button"
            className="window-menu__item"
            onClick={() => setZoomIndex(DEFAULT_ZOOM_INDEX)}
            disabled={zoomIndex === DEFAULT_ZOOM_INDEX}
          >
            {t('window.items.zoomReset')}
          </button>

          <p className="window-menu__group-label" id={appearanceLabelId}>
            {t('window.groups.appearance')}
          </p>
          <div role="radiogroup" aria-labelledby={appearanceLabelId} ref={appearanceRef}>
            {THEME_CHOICES.map((choice) => (
              <button
                key={choice}
                type="button"
                role="radio"
                aria-checked={choice === themeChoice}
                tabIndex={choice === themeChoice ? 0 : -1}
                className="window-menu__item window-menu__item--choice"
                onClick={() => chooseTheme(choice)}
                onKeyDown={handleThemeKeyDown}
              >
                <span className="window-menu__mark" aria-hidden="true">
                  {choice === themeChoice ? '●' : '○'}
                </span>
                <span>{t(`window.theme.${choice}`)}</span>
              </button>
            ))}
          </div>

          <p className="window-menu__group-label">{t('window.groups.share')}</p>
          <button
            type="button"
            className="window-menu__item"
            onClick={copyLink}
            disabled={!canCopy}
          >
            <span>{t('window.items.copyLink')}</span>
            {!canCopy && <span className="window-menu__value">{t('window.items.unavailable')}</span>}
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
