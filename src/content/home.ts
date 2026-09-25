import type { IconName } from '../components/Icon';
import type { SectionId } from '../sections';
import { projects } from './projects';

export type HomeDomainKey = 'infrastructure' | 'domotique' | 'developpement' | 'support';

export const homeDomains: { key: HomeDomainKey; icon: IconName }[] = [
  { key: 'infrastructure', icon: 'monitor' },
  { key: 'domotique', icon: 'home' },
  { key: 'developpement', icon: 'code' },
  { key: 'support', icon: 'gear' },
];

export type ProfileTabId = 'experience' | 'projects' | 'tools';

export const profileTabIds: ProfileTabId[] = ['experience', 'projects', 'tools'];

/** Noms propres : la liste des projets réutilise les noms non traduits. */
export const profileProjectNames: string[] = projects.map((project) => project.name);

/** Technologies : non traduites. */
export const profileTools: string[] = [
  'Linux',
  'Docker',
  'Python',
  'PostgreSQL',
  'Home Assistant',
  'KNX',
  'Nginx',
  'Grafana',
  'Prometheus',
  'Git',
  'VS Code',
  'Proxmox',
];

export const homeTargets: Record<'projects' | 'contact', SectionId> = {
  projects: 'projets',
  contact: 'contact',
};

export const profileToolsTarget: SectionId = 'competences';
