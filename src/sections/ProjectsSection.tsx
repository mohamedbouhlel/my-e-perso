import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Filters from '../components/Filters';
import Hero from '../components/Hero';
import PhotoVisual from '../components/PhotoVisual';
import ProjectCard from '../components/ProjectCard';
import TechPanel from '../components/TechPanel';
import { panelFiles, panelLines, panelTonePatterns } from '../content/panels';
import { projectCategoryIds, projects, type ProjectCategory } from '../content/projects';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

const ALL = 'tous';

export default function ProjectsSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('projects.title');
  const heroVisualLines = useTranslatedList('projects.heroVisualLines');
  const [category, setCategory] = useState<string>(ALL);

  const visibleProjects =
    category === ALL
      ? projects
      : projects.filter((project) => project.categories.includes(category as ProjectCategory));

  // Libellés des filtres résolus hors du rendu : les identifiants viennent de la structure.
  const categoryFilters = projectCategoryIds.map((id) => ({
    id,
    label: id === ALL ? t('common.all') : t(`projects.categories.${id}`),
  }));

  return (
    <section className="section">
      <Hero
        eyebrow={t('projects.eyebrow')}
        title={title}
        lead={t('projects.lead')}
        visual={
          <PhotoVisual
            src={visualSources.projectsHero}
            alt={t('visuals.alt.projectsHero')}
            overlay="hero-left"
          >
            {/* Le panneau traduit remplace l'incrustation figée de la référence, au même endroit. */}
            <TechPanel
              file={panelFiles.projectsHero}
              lines={panelLines(heroVisualLines, panelTonePatterns.projectsHero)}
              compact
              showBar={false}
            />
          </PhotoVisual>
        }
      />

      <Filters
        items={categoryFilters}
        active={category}
        onChange={setCategory}
        ariaLabel={t('projects.filtersLabel')}
      />

      {visibleProjects.length > 0 ? (
        <div className="grid grid--3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="pending-note">{t('projects.empty')}</p>
      )}

      <p className="pending-note">{t('projects.pendingNote')}</p>

      <CallToAction
        eyebrow={t('projects.cta.eyebrow')}
        title={t('projects.cta.title')}
        text={t('projects.cta.text')}
        action={{ label: t('projects.cta.action'), target: 'contact' }}
      />
    </section>
  );
}
