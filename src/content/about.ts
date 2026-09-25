import type { IconName } from '../components/Icon';

export type AboutMetricKey = 'experience' | 'projects' | 'passion' | 'goal';

export const aboutMetrics: { key: AboutMetricKey; icon: IconName }[] = [
  { key: 'experience', icon: 'graduation' },
  { key: 'projects', icon: 'users' },
  { key: 'passion', icon: 'bulb' },
  { key: 'goal', icon: 'target' },
];

export type TimelineKey = 'diploma' | 'technician' | 'integrator' | 'personal';

export const aboutTimeline: { key: TimelineKey; current: boolean }[] = [
  { key: 'diploma', current: false },
  { key: 'technician', current: false },
  { key: 'integrator', current: false },
  { key: 'personal', current: true },
];

export const aboutIcons = {
  values: 'heart' as IconName,
  motivation: 'rocket' as IconName,
};
