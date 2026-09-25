/**
 * Visuels photo du site.
 *
 * Source : zones photo découpées dans les captures de référence (`docs/design/`),
 * exportées dans `public/images/` — voir `docs/VERIFICATION-03.4.md`.
 * Les textes alternatifs sont dans les ressources i18n (`visuals.alt.<id>`).
 */
export type VisualId =
  | 'projectsHero'
  | 'skillsHero'
  | 'aboutHero'
  | 'aboutWorkshop'
  | 'contactHero'
  | 'projectCockpitServers'
  | 'projectDomotique'
  | 'projectSecuriteReseaux';

/** Chemins servis tels quels depuis `public/` (aucune transformation du bundler). */
export const visualSources: Record<VisualId, string> = {
  projectsHero: '/images/projects-hero.jpg',
  skillsHero: '/images/skills-hero.jpg',
  aboutHero: '/images/about-hero.jpg',
  aboutWorkshop: '/images/about-workshop.jpg',
  contactHero: '/images/contact-hero.jpg',
  projectCockpitServers: '/images/project-cockpit-servers.jpg',
  projectDomotique: '/images/project-domotique.jpg',
  projectSecuriteReseaux: '/images/project-securite-reseaux.jpg',
};
