import type { IconName } from '../components/Icon';
import type { SectionId } from '../sections';

/** Quatre familles de problèmes, dans l'ordre du parcours : du terrain jusqu'au logiciel. */
export type HomeDomainKey = 'infrastructure' | 'securite' | 'automatisation' | 'developpement';

export const homeDomains: { key: HomeDomainKey; icon: IconName }[] = [
  { key: 'infrastructure', icon: 'monitor' },
  { key: 'securite', icon: 'shield' },
  { key: 'automatisation', icon: 'home' },
  { key: 'developpement', icon: 'code' },
];

export const homeTargets: Record<'projects' | 'contact', SectionId> = {
  projects: 'projets',
  contact: 'contact',
};
