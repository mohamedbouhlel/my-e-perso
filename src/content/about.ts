import type { IconName } from '../components/Icon';

/** Les quatre critères de choix présentés sur la page À propos. */
export type PrincipleKey = 'simplicity' | 'mastery' | 'proportion' | 'openness';

export const aboutPrinciples: { key: PrincipleKey; icon: IconName }[] = [
  { key: 'simplicity', icon: 'check' },
  { key: 'mastery', icon: 'gear' },
  { key: 'proportion', icon: 'target' },
  { key: 'openness', icon: 'globe' },
];

export const principlesIcon: IconName = 'heart';
