import { lazy } from 'react';

const HomeSection = lazy(() => import('./HomeSection'));
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const SkillsSection = lazy(() => import('./SkillsSection'));
const AboutSection = lazy(() => import('./AboutSection'));
const ContactSection = lazy(() => import('./ContactSection'));

/** Source unique des onglets : identifiant d'URL, libellé et contenu. */
export const SECTIONS = [
  { id: 'accueil', label: 'Accueil', Component: HomeSection },
  { id: 'projets', label: 'Projets', Component: ProjectsSection },
  { id: 'competences', label: 'Compétences', Component: SkillsSection },
  { id: 'a-propos', label: 'À propos', Component: AboutSection },
  { id: 'contact', label: 'Contact', Component: ContactSection },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

export const DEFAULT_SECTION_ID: SectionId = 'accueil';

export function isSectionId(value: string): value is SectionId {
  return SECTIONS.some((section) => section.id === value);
}
