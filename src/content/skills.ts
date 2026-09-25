import type { IconName } from '../components/Icon';

export type SkillDomain =
  | 'informatique'
  | 'domotique'
  | 'reseaux'
  | 'developpement'
  | 'outils'
  | 'soft';

export const skillDomainIds: SkillDomain[] = [
  'informatique',
  'domotique',
  'reseaux',
  'developpement',
  'outils',
  'soft',
];

export type KeySkillKey =
  | 'infrastructure'
  | 'domotique'
  | 'reseaux'
  | 'developpement'
  | 'basesDonnees'
  | 'support';

export const keySkillItems: { key: KeySkillKey; icon: IconName; domains: SkillDomain[] }[] = [
  { key: 'infrastructure', icon: 'monitor', domains: ['informatique', 'outils'] },
  { key: 'domotique', icon: 'home', domains: ['domotique'] },
  { key: 'reseaux', icon: 'shield', domains: ['reseaux'] },
  { key: 'developpement', icon: 'code', domains: ['developpement'] },
  { key: 'basesDonnees', icon: 'database', domains: ['informatique', 'developpement'] },
  { key: 'support', icon: 'gear', domains: ['soft'] },
];

export type MasteryKey =
  | 'reseaux'
  | 'linux'
  | 'domotique'
  | 'securite'
  | 'developpement'
  | 'basesDonnees'
  | 'ia';

export const masteryRows: { key: MasteryKey; domain: SkillDomain; level: number }[] = [
  { key: 'reseaux', domain: 'reseaux', level: 95 },
  { key: 'linux', domain: 'informatique', level: 90 },
  { key: 'domotique', domain: 'domotique', level: 85 },
  { key: 'securite', domain: 'reseaux', level: 80 },
  { key: 'developpement', domain: 'developpement', level: 75 },
  { key: 'basesDonnees', domain: 'informatique', level: 70 },
  { key: 'ia', domain: 'outils', level: 65 },
];

export type TechnologyGroupKey =
  | 'systemes'
  | 'reseaux'
  | 'developpement'
  | 'domotique'
  | 'basesDonnees'
  | 'ia';

/** Les technologies elles-mêmes sont des noms propres : non traduits. */
export const technologyGroups: {
  key: TechnologyGroupKey;
  domains: SkillDomain[];
  items: string[];
}[] = [
  { key: 'systemes', domains: ['informatique', 'outils'], items: ['Linux (Debian)', 'Docker', 'Proxmox', 'Nginx'] },
  {
    key: 'reseaux',
    domains: ['reseaux', 'outils'],
    items: ['Ubiquiti', 'PfSense', 'Nftables', 'Grafana', 'Prometheus'],
  },
  {
    key: 'developpement',
    domains: ['developpement'],
    items: ['Python', 'Bash', 'JavaScript', 'FastAPI', 'React', 'Git', 'VS Code'],
  },
  { key: 'domotique', domains: ['domotique'], items: ['Home Assistant', 'KNX', 'MQTT', 'Zigbee'] },
  { key: 'basesDonnees', domains: ['informatique', 'developpement'], items: ['PostgreSQL', 'SQL'] },
  { key: 'ia', domains: ['outils', 'developpement'], items: ['llama.cpp', 'OpenWebUI', 'RAG'] },
];

export type CertificationKey = 'linux' | 'knx' | 'securite' | 'python' | 'docker';

export const certificationItems: { key: CertificationKey; icon: IconName }[] = [
  { key: 'linux', icon: 'monitor' },
  { key: 'knx', icon: 'home' },
  { key: 'securite', icon: 'shield' },
  { key: 'python', icon: 'code' },
  { key: 'docker', icon: 'cube' },
];

export type SkillMetricKey = 'experience' | 'projects' | 'passion';

export const skillMetrics: { key: SkillMetricKey; icon: IconName }[] = [
  { key: 'experience', icon: 'trophy' },
  { key: 'projects', icon: 'users' },
  { key: 'passion', icon: 'bolt' },
];

export const keySkillsIcon: IconName = 'gear';
export const masteryIcon: IconName = 'bars';
export const technologiesIcon: IconName = 'cube';
export const certificationsIcon: IconName = 'medal';
