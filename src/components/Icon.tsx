import type { ReactNode } from 'react';

/** Pictogrammes dessinés en SVG inline : aucune bibliothèque d'icônes n'est ajoutée. */
export type IconName =
  | 'monitor'
  | 'home'
  | 'code'
  | 'gear'
  | 'shield'
  | 'database'
  | 'check'
  | 'bulb'
  | 'trophy'
  | 'users'
  | 'bolt'
  | 'target'
  | 'graduation'
  | 'heart'
  | 'rocket'
  | 'cube'
  | 'bars'
  | 'medal'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'globe'
  | 'chat'
  | 'lock'
  | 'arrow-right'
  | 'arrow-up'
  | 'download'
  | 'send'
  | 'folder'
  | 'person';

const PATHS: Record<IconName, ReactNode> = {
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M9.5 20h5M12 16.5V20" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  code: (
    <>
      <path d="M9 8.5 5.5 12 9 15.5" />
      <path d="M15 8.5 18.5 12 15 15.5" />
      <path d="M13.5 6.5l-3 11" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.2M12 18.3v2.2M4.9 7.9l1.9 1.1M17.2 15l1.9 1.1M4.9 16.1l1.9-1.1M17.2 9l1.9-1.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v6c0 4-3 7-7 8.5C8 19 5 16 5 12V6z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" />
      <path d="M5.5 6.5v11c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-11" />
      <path d="M5.5 12c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  bulb: (
    <>
      <path d="M9.5 17.5h5M10.5 20.5h3" />
      <path d="M12 3.5a5.5 5.5 0 0 0-3.2 9.9v4.1h6.4v-4.1A5.5 5.5 0 0 0 12 3.5z" />
    </>
  ),
  trophy: (
    <>
      <path d="M7.5 4h9v4.5a4.5 4.5 0 0 1-9 0z" />
      <path d="M7.5 5.5H4.5V8a3.5 3.5 0 0 0 3.5 3.5" />
      <path d="M16.5 5.5h3V8a3.5 3.5 0 0 1-3.5 3.5" />
      <path d="M12 13v4" />
      <path d="M8.5 20.5h7l-.8-3.5h-5.4z" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3" />
      <path d="M4 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.8a3 3 0 0 1 0 5.4" />
      <path d="M17.5 14.8a5.5 5.5 0 0 1 2.5 4.7" />
    </>
  ),
  bolt: <path d="M13.5 3 6.5 13.5H12l-1.5 7.5 7-10.5H12z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  graduation: (
    <>
      <path d="M3 9.5 12 5.5l9 4-9 4z" />
      <path d="M7 12v4.6c0 1.4 2.2 2.4 5 2.4s5-1 5-2.4V12" />
    </>
  ),
  heart: <path d="M12 20.5S4.5 16 4.5 11.2A4.2 4.2 0 0 1 12 8.4a4.2 4.2 0 0 1 7.5 2.8C19.5 16 12 20.5 12 20.5z" />,
  rocket: (
    <>
      <path d="M12 3.5c3 1.6 4.5 4.6 4.5 8.2L12 15.2 7.5 11.7c0-3.6 1.5-6.6 4.5-8.2z" />
      <circle cx="12" cy="9.6" r="1.5" />
      <path d="M9 15.6 6.5 20.5l3.5-1.6M15 15.6l2.5 4.9-3.5-1.6" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8z" />
      <path d="M4 8l8 4.5L20 8M12 12.5v8" />
    </>
  ),
  bars: (
    <>
      <path d="M6.5 19.5v-8M12 19.5V5M17.5 19.5v-5" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14.8" r="4.7" />
      <path d="m8.6 10.6-2-7.1h10.8l-2 7.1" />
      <path d="m12 12.9 1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.6 7 8.4 6 8.4-6" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h2.6l1.4 3.8-1.9 1.4a10.4 10.4 0 0 0 5.5 5.5l1.4-1.9 3.8 1.4v2.6a1.9 1.9 0 0 1-2.1 1.9A15.4 15.4 0 0 1 4.3 5.6a1.9 1.9 0 0 1 1.9-2.1z" />
  ),
  pin: (
    <>
      <path d="M12 21s6.5-6.3 6.5-11a6.5 6.5 0 0 0-13 0C5.5 14.7 12 21 12 21z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M3.8 12h16.4" />
      <path d="M12 3.8c2.6 2.7 3.6 5.5 3.6 8.2s-1 5.5-3.6 8.2c-2.6-2.7-3.6-5.5-3.6-8.2S9.4 6.5 12 3.8z" />
    </>
  ),
  chat: <path d="M20 12.3c0 3.8-3.6 6.9-8 6.9-1 0-2-.2-2.9-.5L5 20.6l1.2-3.2A6.6 6.6 0 0 1 4 12.3c0-3.8 3.6-6.9 8-6.9s8 3.1 8 6.9z" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5L13 17.5" />
    </>
  ),
  'arrow-up': (
    <>
      <path d="M12 19.5v-14" />
      <path d="m6.5 11 5.5-5.5L17.5 11" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M5 19.5h14" />
    </>
  ),
  send: (
    <>
      <path d="M20 4 3.8 11.2l6.4 2.6L12.8 20z" />
      <path d="M10.2 13.8 20 4" />
    </>
  ),
  folder: (
    <path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h3.8l2 2.5H19a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z" />
  ),
  person: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 22, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
