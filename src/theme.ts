/**
 * Apparence du site : `light`, `dark` ou `system`.
 *
 * Le thème *résolu* (`light` ou `dark`) est écrit dans l'attribut `data-theme` de `<html>` ;
 * la feuille de style ne connaît que ces deux valeurs, et les jetons CSS font le reste.
 * Le choix de l'utilisateur, lui, est conservé dans `localStorage`.
 *
 * `index.html` applique le même choix avant le premier rendu (évite un flash de mauvais thème) :
 * la clé de stockage et la valeur par défaut y sont répétées, toute évolution doit être faite
 * dans les deux fichiers.
 */

export const THEME_CHOICES = ['light', 'dark', 'system'] as const;

export type ThemeChoice = (typeof THEME_CHOICES)[number];

/** Thème réellement appliqué (`system` est résolu avant d'atteindre le DOM). */
export type ResolvedTheme = 'light' | 'dark';

/** Clé partagée avec le script d'initialisation de `index.html`. */
export const THEME_STORAGE_KEY = 'site-theme';

/** Sans choix enregistré, le site suit le système. */
export const DEFAULT_THEME_CHOICE: ThemeChoice = 'system';

const DARK_QUERY = '(prefers-color-scheme: dark)';

export function isThemeChoice(value: unknown): value is ThemeChoice {
  return typeof value === 'string' && (THEME_CHOICES as readonly string[]).includes(value);
}

export function readStoredTheme(): ThemeChoice | null {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeChoice(stored) ? stored : null;
  } catch {
    return null;
  }
}

/** Choix courant, en mémoire : le thème et l'interface restent alignés sans contexte React. */
let currentChoice: ThemeChoice = readStoredTheme() ?? DEFAULT_THEME_CHOICE;

export function getThemeChoice(): ThemeChoice {
  return currentChoice;
}

function prefersDark(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia(DARK_QUERY).matches;
}

export function resolveTheme(choice: ThemeChoice, dark: boolean): ResolvedTheme {
  return choice === 'system' ? (dark ? 'dark' : 'light') : choice;
}

function applyResolved(choice: ThemeChoice): ResolvedTheme {
  const resolved = resolveTheme(choice, prefersDark());
  document.documentElement.dataset.theme = resolved;
  return resolved;
}

/**
 * Applique le thème enregistré au démarrage et suit les changements du système
 * lorsque le mode « système » est actif. Appelé une fois depuis `main.tsx`.
 */
export function initTheme(): ThemeChoice {
  currentChoice = readStoredTheme() ?? DEFAULT_THEME_CHOICE;
  applyResolved(currentChoice);

  if (typeof window.matchMedia === 'function') {
    window.matchMedia(DARK_QUERY).addEventListener('change', () => {
      if (currentChoice === 'system') {
        applyResolved(currentChoice);
      }
    });
  }

  return currentChoice;
}

/**
 * Change le thème sans rechargement et sans toucher au hash de l'URL.
 */
export function setTheme(choice: ThemeChoice): ResolvedTheme {
  currentChoice = choice;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // localStorage indisponible : le choix reste actif pour la session.
  }

  return applyResolved(choice);
}
