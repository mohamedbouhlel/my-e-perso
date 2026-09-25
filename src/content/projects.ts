import type { IconName } from '../components/Icon';
import type { PhotoOverlay } from '../components/PhotoVisual';
import type { VisualId } from './visuals';

export type ProjectCategory = 'infrastructure' | 'ia' | 'developpement' | 'domotique' | 'securite';

/** Clé de traduction dans `projects.items.<key>`. */
export type ProjectKey =
  | 'smartBtpProgest'
  | 'versutusIa'
  | 'cockpitServers'
  | 'domotique'
  | 'outilsScripts'
  | 'securiteReseaux';

/**
 * Visuel d'une carte :
 * - `photo` : zone photo découpée dans les références ; `overlay` reprend la présence (ou non)
 *   d'un panneau technique incrusté dans la référence ;
 * - `panel` : la référence utilise une maquette d'interface ou de terminal, réimplémentée avec
 *   du texte traduit plutôt qu'une image au texte figé.
 */
export type ProjectVisual =
  | { kind: 'photo'; visualId: VisualId; overlay: PhotoOverlay }
  | { kind: 'panel'; file: string };

export type Project = {
  id: string;
  key: ProjectKey;
  /** Nom propre : non traduit. */
  name: string;
  icon: IconName;
  statusTone: 'green' | 'amber';
  /** Technologies : non traduites. */
  tags: string[];
  categories: ProjectCategory[];
  visual: ProjectVisual;
  /** Aucune URL n'est validée pour l'instant : l'emplacement est prévu mais inactif. */
  link: string | null;
  repository: string | null;
};

export const projectCategoryIds: (ProjectCategory | 'tous')[] = [
  'tous',
  'infrastructure',
  'ia',
  'developpement',
  'domotique',
  'securite',
];

export const projects: Project[] = [
  {
    id: 'smart-btp-progest',
    key: 'smartBtpProgest',
    name: 'Smart BTP ProGest',
    icon: 'monitor',
    statusTone: 'green',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
    categories: ['developpement'],
    visual: { kind: 'panel', file: 'smart-btp-progest/' },
    link: null,
    repository: null,
  },
  {
    id: 'versutus-ia',
    key: 'versutusIa',
    name: 'Versutus-IA',
    icon: 'gear',
    statusTone: 'green',
    tags: ['llama.cpp', 'Docker', 'OpenWebUI', 'Python'],
    categories: ['ia', 'developpement'],
    visual: { kind: 'panel', file: 'versutus-ia/' },
    link: null,
    repository: null,
  },
  {
    id: 'cockpit-servers',
    key: 'cockpitServers',
    name: 'Cockpit Servers',
    icon: 'gear',
    statusTone: 'green',
    tags: ['Debian', 'Postfix', 'Nginx', 'Monitoring'],
    categories: ['infrastructure'],
    visual: { kind: 'photo', visualId: 'projectCockpitServers', overlay: 'card-right' },
    link: null,
    repository: null,
  },
  {
    id: 'domotique',
    key: 'domotique',
    name: 'Solutions Domotique',
    icon: 'home',
    statusTone: 'green',
    tags: ['Home Assistant', 'KNX', 'MQTT', 'Zigbee'],
    categories: ['domotique'],
    visual: { kind: 'photo', visualId: 'projectDomotique', overlay: 'none' },
    link: null,
    repository: null,
  },
  {
    id: 'outils-scripts',
    key: 'outilsScripts',
    name: 'Outils & Scripts',
    icon: 'code',
    statusTone: 'amber',
    tags: ['Bash', 'Python', 'Docker', 'Linux'],
    categories: ['developpement'],
    visual: { kind: 'panel', file: 'outils/' },
    link: null,
    repository: null,
  },
  {
    id: 'securite-reseaux',
    key: 'securiteReseaux',
    name: 'Sécurité & Réseaux',
    icon: 'shield',
    statusTone: 'green',
    tags: ['Ubiquiti', 'Hikvision', 'PfSense', 'Nftables'],
    categories: ['securite', 'infrastructure'],
    visual: { kind: 'photo', visualId: 'projectSecuriteReseaux', overlay: 'card-right' },
    link: null,
    repository: null,
  },
];
