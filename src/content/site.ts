import type { IconName } from '../components/Icon';
import type { SectionId } from '../sections';

/**
 * Repères non traduits du shell : nom du site, monogramme et adresse affichée.
 * Tous les autres textes visibles viennent de `src/i18n/`.
 */
export const siteIdentity = {
  /** Nom affiché, repris de la référence validée (`docs/design/home.png`). */
  name: 'Operius',
  monogram: 'O',
  /**
   * Adresse affichée dans le chrome. Correspond au domaine réellement servi
   * (`https://operius.fr/`, voir la procédure de déploiement).
   */
  address: 'operius.fr',
};

type SectionIcon = {
  icon: IconName;
  /** Premier onglet : la référence affiche le monogramme du site plutôt qu'un pictogramme. */
  monogram?: boolean;
  /** La référence colore l'onglet « Compétences » en vert, les autres en bleu. */
  iconTone?: 'green';
};

export const sectionIcons: Record<SectionId, SectionIcon> = {
  accueil: { icon: 'home', monogram: true },
  projets: { icon: 'folder' },
  competences: { icon: 'code', iconTone: 'green' },
  'a-propos': { icon: 'person' },
  contact: { icon: 'mail' },
};

/** Navigation de l'en-tête du site (les libellés viennent des traductions). */
export const headerNavIds: SectionId[] = ['accueil', 'projets', 'competences', 'a-propos'];

export const footerLinkIds = ['github', 'linkedin', 'contact'] as const;

export type FooterLinkId = (typeof footerLinkIds)[number];

/** Aucune URL externe n'est validée : `null` laisse l'emplacement inactif. */
export const footerLinkHrefs: Record<FooterLinkId, string | null> = {
  github: null,
  linkedin: null,
  contact: '#contact',
};
