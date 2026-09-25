import type { TechLine } from '../components/TechPanel';

export type PanelLineTone = 'default' | 'muted' | 'accent' | 'info';

/**
 * Répartition visuelle des tons par panneau technique : elle ne dépend pas de la langue,
 * seuls les textes viennent des traductions (même longueur de tableau).
 */
export const panelTonePatterns = {
  home: ['accent', 'default', 'default', 'default', 'default', 'default', 'accent'],
  projectsHero: ['accent', 'info', 'default', 'default', 'default'],
  projectCard: ['accent', 'info', 'default', 'default', 'default'],
  skills: ['accent', 'info', 'default', 'default', 'default', 'default'],
  about: ['accent', 'info', 'default', 'default', 'default', 'muted'],
  aboutWide: ['accent', 'info', 'default', 'default', 'default', 'default', 'accent'],
  contact: ['accent', 'info', 'default', 'default', 'default', 'accent'],
} satisfies Record<string, readonly PanelLineTone[]>;

export type PanelKey = keyof typeof panelTonePatterns;

/** Noms de fichiers affichés dans l'en-tête des panneaux (contenu technique, non traduit). */
export const panelFiles: Record<PanelKey, string> = {
  home: 'mon_approche.sh',
  projectsHero: 'idees/',
  projectCard: 'projet/',
  skills: 'methode.sh',
  about: 'parcours.sh',
  aboutWide: 'atelier.txt',
  contact: 'echange.sh',
};

export function panelLines(
  texts: readonly string[],
  tones: readonly PanelLineTone[],
): TechLine[] {
  return texts.map((text, index) => ({ text, tone: tones[index] ?? 'default' }));
}
