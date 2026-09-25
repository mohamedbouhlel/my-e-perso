import type { IconName } from '../components/Icon';
import type { SectionId } from '../sections';

/** Les quatre niveaux d'intervention présentés sur la page Compétences. */
export type SkillDomainKey = 'terrain' | 'infrastructure' | 'developpement' | 'ia';

export const skillDomains: { key: SkillDomainKey; icon: IconName }[] = [
  { key: 'terrain', icon: 'bolt' },
  { key: 'infrastructure', icon: 'monitor' },
  { key: 'developpement', icon: 'code' },
  { key: 'ia', icon: 'gear' },
];

/**
 * Technologies réellement utilisées dans les projets du site.
 * Noms propres : non traduits.
 */
export const skillTechnologies: string[] = [
  'Linux',
  'Docker',
  'Python',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Git',
  'llama.cpp',
];

export const technologiesIcon: IconName = 'cube';

/** Renvoi vers la preuve : la liste ci-dessus est utilisée dans les projets. */
export const projectsTarget: SectionId = 'projets';
