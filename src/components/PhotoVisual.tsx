import type { ReactNode } from 'react';

/**
 * Position du contenu superposé au visuel.
 * Les valeurs reprennent les emplacements des incrustations des références,
 * légèrement élargis pour les couvrir entièrement.
 */
export type PhotoOverlay = 'none' | 'hero-left' | 'quote-right' | 'card-right';

type PhotoVisualProps = {
  src: string;
  /** Image informative : le texte alternatif vient des traductions. */
  alt: string;
  overlay?: PhotoOverlay;
  /** Stratégie de chargement : les héros restent eager, les vignettes peuvent être lazy. */
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Contenu traduit superposé (panneau technique, citation). */
  children?: ReactNode;
  className?: string;
};

export default function PhotoVisual({
  src,
  alt,
  overlay = 'none',
  loading = 'eager',
  fetchPriority = 'auto',
  children,
  className,
}: PhotoVisualProps) {
  const classes = className ? `photo-visual ${className}` : 'photo-visual';

  return (
    <figure className={classes}>
      <img
        className="photo-visual__image"
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
      {children && (
        <div className={`photo-visual__overlay photo-visual__overlay--${overlay}`}>{children}</div>
      )}
    </figure>
  );
}