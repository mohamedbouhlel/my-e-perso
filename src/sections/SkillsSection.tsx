import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import PhotoVisual from '../components/PhotoVisual';
import { siteIdentity } from '../content/site';
import {
  projectsTarget,
  skillDomains,
  skillTechnologies,
  technologiesIcon,
} from '../content/skills';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

export default function SkillsSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('skills.title');
  const lead = useTranslatedList('skills.lead');

  return (
    <section className="section">
      <Hero
        eyebrow={t('skills.eyebrow')}
        title={title}
        lead={lead}
        visual={
          <PhotoVisual src={visualSources.skillsHero} alt={t('visuals.alt.skillsHero')} />
        }
        quote={{ text: t('skills.quote'), author: siteIdentity.name }}
      />

      <div className="grid grid--2">
        {skillDomains.map((domain) => (
          <Card
            key={domain.key}
            icon={domain.icon}
            title={t(`skills.domains.${domain.key}.title`)}
            subtitle={t(`skills.domains.${domain.key}.subtitle`)}
          >
            <p className="card__text">{t(`skills.domains.${domain.key}.text`)}</p>
          </Card>
        ))}
      </div>

      <Card
        icon={technologiesIcon}
        title={t('skills.technologies.title')}
        subtitle={t('skills.technologies.subtitle')}
      >
        <ul className="tech-tags">
          {skillTechnologies.map((item) => (
            <li className="badge badge--tag" key={item}>
              {item}
            </li>
          ))}
        </ul>
        {/* Précision de lecture : la liste est un constat, pas une promesse. */}
        <p className="card__text">{t('skills.technologies.note')}</p>
        {/* Renvoi vers la preuve : les technologies citées sont celles des projets. */}
        <p className="tile__more">
          <a className="link-arrow" href={`#${projectsTarget}`}>
            {t('skills.projectsLink')}
            <Icon name="arrow-right" size={15} />
          </a>
        </p>
      </Card>

      <CallToAction
        eyebrow={t('skills.cta.eyebrow')}
        title={t('skills.cta.title')}
        action={{ label: t('skills.cta.action'), target: 'contact' }}
      />
    </section>
  );
}
