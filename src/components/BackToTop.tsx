import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';

/** Seuil d'apparition : évite que le bouton recouvre les CTA en haut de page. */
const VISIBLE_AFTER_PX = 320;

export default function BackToTop() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const syncVisibility = () => setIsVisible(window.scrollY > VISIBLE_AFTER_PX);
    syncVisibility();
    window.addEventListener('scroll', syncVisibility, { passive: true });
    return () => window.removeEventListener('scroll', syncVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label={t('a11y.backToTop')}
      onClick={scrollToTop}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
