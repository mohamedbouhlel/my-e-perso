import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Bars from '../components/Bars';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import Filters from '../components/Filters';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import Metrics from '../components/Metrics';
import PhotoVisual from '../components/PhotoVisual';
import { siteIdentity } from '../content/site';
import {
  certificationItems,
  certificationsIcon,
  keySkillItems,
  keySkillsIcon,
  masteryIcon,
  masteryRows as masteryRowDefs,
  skillDomainIds,
  skillMetrics,
  technologiesIcon,
  technologyGroups,
  type SkillDomain,
} from '../content/skills';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

const ALL = 'tous';

export default function SkillsSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('skills.title');
  const [domain, setDomain] = useState<string>(ALL);

  const matches = (domains: readonly SkillDomain[]) =>
    domain === ALL || domains.includes(domain as SkillDomain);

  const tiles = keySkillItems.filter((item) => matches(item.domains));
  const masteryRows = masteryRowDefs.filter((row) => matches([row.domain]));
  const techGroups = technologyGroups.filter((group) => matches(group.domains));

  return (
    <section className="section">
      <Hero
        eyebrow={t('skills.eyebrow')}
        title={title}
        lead={t('skills.lead')}
        visual={
          <PhotoVisual src={visualSources.skillsHero} alt={t('visuals.alt.skillsHero')} />
        }
        quote={{ text: t('skills.quote'), author: siteIdentity.name }}
      >
        <Metrics
          items={skillMetrics.map(({ key, icon }) => ({ icon, label: t(`skills.metrics.${key}`) }))}
          pendingValue={t('common.pendingValue')}
          className="metrics--inline"
        />
      </Hero>

      <Filters
        items={[
          { id: ALL, label: t('common.overview') },
          ...skillDomainIds.map((id) => ({ id, label: t(`skills.domains.${id}`) })),
        ]}
        active={domain}
        onChange={setDomain}
        ariaLabel={t('skills.filtersLabel')}
      />

      <div className="grid grid--2">
        <Card
          icon={keySkillsIcon}
          title={t('skills.keySkills.title')}
          subtitle={t('skills.keySkills.subtitle')}
        >
          {tiles.length > 0 ? (
            <div className="grid grid--tiles">
              {tiles.map((item) => (
                <div className="tile" key={item.key}>
                  <span className="tile__icon">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <h4 className="tile__title">{t(`skills.keySkills.items.${item.key}.title`)}</h4>
                  <p className="tile__text">{t(`skills.keySkills.items.${item.key}.text`)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="pending-note">{t('skills.empty')}</p>
          )}
        </Card>

        <Card
          icon={masteryIcon}
          title={t('skills.mastery.title')}
          subtitle={t('skills.mastery.subtitle')}
        >
          {masteryRows.length > 0 ? (
            <>
              <Bars
                rows={masteryRows.map((row) => ({ label: t(`skills.mastery.rows.${row.key}`) }))}
                pendingValue={t('common.pendingValue')}
              />
              <p className="pending-note">{t('skills.mastery.note')}</p>
            </>
          ) : (
            <p className="pending-note">{t('skills.empty')}</p>
          )}
        </Card>
      </div>

      <div className="grid grid--2">
        <Card
          icon={technologiesIcon}
          title={t('skills.technologies.title')}
          subtitle={t('skills.technologies.subtitle')}
        >
          {techGroups.length > 0 ? (
            <div className="tech-tree">
              {techGroups.map((group) => (
                <div className="tech-group" key={group.key}>
                  <p className="tech-group__title">{t(`skills.technologies.groups.${group.key}`)}</p>
                  <ul className="tech-tags">
                    {group.items.map((item) => (
                      <li className="badge badge--tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="pending-note">{t('skills.empty')}</p>
          )}
        </Card>

        <Card
          icon={certificationsIcon}
          title={t('skills.certifications.title')}
          subtitle={t('skills.certifications.subtitle')}
        >
          <ul className="info-list">
            {certificationItems.map((item) => (
              <li className="info-list__item" key={item.key}>
                <span className="info-list__icon">
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <p className="info-list__title">
                    {t(`skills.certifications.items.${item.key}.title`)}
                  </p>
                  <p className="info-list__text">
                    {t(`skills.certifications.items.${item.key}.text`)}
                  </p>
                </div>
                <span className="info-list__meta">{t('common.pendingPeriod')}</span>
              </li>
            ))}
          </ul>
          <p className="pending-note">{t('skills.certifications.note')}</p>
        </Card>
      </div>

      <CallToAction
        eyebrow={t('skills.cta.eyebrow')}
        title={t('skills.cta.title')}
        text={t('skills.cta.text')}
        action={{ label: t('skills.cta.action'), target: 'contact' }}
      />
    </section>
  );
}
