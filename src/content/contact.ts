import type { IconName } from '../components/Icon';

/** Ce qu'un visiteur peut attendre d'un premier échange (page Contact). */
export type ContactExpectationKey =
  | 'noPaste'
  | 'noFreeComplexity'
  | 'explainedChoices'
  | 'proportionate';

export const contactExpectations: { key: ContactExpectationKey; icon: IconName }[] = [
  { key: 'noPaste', icon: 'chat' },
  { key: 'noFreeComplexity', icon: 'gear' },
  { key: 'explainedChoices', icon: 'bulb' },
  { key: 'proportionate', icon: 'target' },
];

/** Limite technique du champ message (non traduite). */
export const CONTACT_MESSAGE_MAX_LENGTH = 1000;
