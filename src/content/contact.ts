import type { IconName } from '../components/Icon';

export type ContactHighlightKey = 'response' | 'exchange' | 'confidential';

export const contactHighlights: { key: ContactHighlightKey; icon: IconName }[] = [
  { key: 'response', icon: 'chat' },
  { key: 'exchange', icon: 'users' },
  { key: 'confidential', icon: 'shield' },
];

export type ContactMethodKey = 'email' | 'phone' | 'location';

export const contactMethods: { key: ContactMethodKey; icon: IconName }[] = [
  { key: 'email', icon: 'mail' },
  { key: 'phone', icon: 'phone' },
  { key: 'location', icon: 'pin' },
];

/** Limite technique du champ message (non traduite). */
export const CONTACT_MESSAGE_MAX_LENGTH = 1000;

export const contactMethodIconsUsed: IconName[] = contactMethods.map((method) => method.icon);
