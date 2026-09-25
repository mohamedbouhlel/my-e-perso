import { useTranslation } from 'react-i18next';
import type { Project } from '../content/projects';
import { panelLines, panelTonePatterns } from '../content/panels';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';
import Icon from './Icon';
import PhotoVisual from './PhotoVisual';
import TechPanel from './TechPanel';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const visualLines = useTranslatedList(`projects.items.${project.key}.visualLines`);
  const lines = panelLines(visualLines, panelTonePatterns.projectCard);

  return (
    <article className="project-card">
      {project.visual.kind === 'photo' ? (
        <PhotoVisual
          className="project-card__visual"
          src={visualSources[project.visual.visualId]}
          alt={t(`visuals.alt.${project.visual.visualId}`)}
          overlay={project.visual.overlay}
        >
          {/* La référence n'incruste pas de panneau sur tous les visuels photo. */}
          {project.visual.overlay !== 'none' && (
            <TechPanel
              file={project.visual.visualId}
              lines={lines}
              numbered={false}
              compact
              showBar={false}
            />
          )}
        </PhotoVisual>
      ) : (
        <TechPanel
          className="project-card__visual"
          file={project.visual.file}
          lines={lines}
          compact
        />
      )}

      <div className="project-card__body">
        <div className="project-card__top">
          <span className="project-card__icon">
            <Icon name={project.icon} size={20} />
          </span>
          <h3 className="project-card__name">{project.name}</h3>
          <span className={`badge badge--${project.statusTone} project-card__status`}>
            {t(`projects.items.${project.key}.status`)}
          </span>
        </div>

        <p className="project-card__desc">{t(`projects.items.${project.key}.description`)}</p>

        <ul className="tech-tags">
          {project.tags.map((tag) => (
            <li className="badge badge--tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {/* Les URL ne sont pas validées : l'emplacement existe mais reste inactif. */}
          <button type="button" className="link-arrow" disabled title={t('common.linkPending')}>
            {t('projects.linkLabel')}
            <Icon name="arrow-right" size={15} />
          </button>
          <button type="button" className="link-arrow" disabled title={t('common.linkPending')}>
            {t('projects.repositoryLabel')}
          </button>
        </div>
      </div>
    </article>
  );
}
