import { useTranslation } from 'react-i18next';
import Bars from '../components/Bars';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import CheckList from '../components/CheckList';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import MiniTabs from '../components/MiniTabs';
import TechPanel from '../components/TechPanel';
import {
  homeDomains,
  homeTargets,
  profileExperienceLevels,
  profileProjectNames,
  profileTabIds,
  profileTools,
  profileToolsTarget,
} from '../content/home';
import { panelFiles, panelLines, panelTonePatterns } from '../content/panels';
import { siteIdentity } from '../content/site';
import { useTranslatedList } from '../i18n';

export default function HomeSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('home.title');
  const visualLines = useTranslatedList('home.visualLines');
  const profileChecks = useTranslatedList('home.profile.checks');
  const experienceRows = useTranslatedList('home.profile.experienceRows');

  const profileTabs = profileTabIds.map((id) => ({ id, label: t(`home.profile.tabs.${id}`) }));

  return (
    <section className="section">
      <Hero
        eyebrow={t('home.eyebrow')}
        title={title}
        lead={t('home.lead')}
        actions={
          <>
            <a className="btn btn--primary" href={`#${homeTargets.projects}`}>
              {t('home.primaryCta')}
              <span className="btn__icon">
                <Icon name="arrow-right" size={16} />
              </span>
            </a>
            <a className="btn btn--outline" href={`#${homeTargets.contact}`}>
              {t('home.secondaryCta')}
            </a>
          </>
        }
        visual={
          <TechPanel
            file={panelFiles.home}
            action={t('common.copy')}
            lines={panelLines(visualLines, panelTonePatterns.home)}
            numbered
            corners
          />
        }
        quote={{ text: t('home.quote'), author: siteIdentity.name }}
      />

      <div className="grid grid--4">
        {homeDomains.map((domain) => (
          <a className="card card--domain" href="#competences" key={domain.key}>
            <span className="tile__icon">
              <Icon name={domain.icon} size={36} />
            </span>
            <h3 className="tile__title">{t(`home.domains.${domain.key}.title`)}</h3>
            <p className="tile__text">{t(`home.domains.${domain.key}.text`)}</p>
            <p className="tile__more">
              <span className="link-arrow">
                {t('home.domainLink')}
                <Icon name="arrow-right" size={15} />
              </span>
            </p>
          </a>
        ))}
      </div>

      <div className="grid grid--2">
        <div className="profile-block">
          <p className="eyebrow">{t('home.profile.eyebrow')}</p>
          <h3 className="block-title">{t('home.profile.title')}</h3>
          <p className="section-lead">{t('home.profile.lead')}</p>
          <CheckList items={profileChecks} />
          {/* Aucun fichier de CV n'est fourni : l'emplacement existe mais reste inactif. */}
          <p className="profile-block__cta">
            <button
              type="button"
              className="btn btn--primary"
              disabled
              title={t('common.documentPending')}
            >
              {t('home.profile.cvCta')}
              <span className="btn__icon">
                <Icon name="download" size={16} />
              </span>
            </button>
          </p>
        </div>

        <Card>
          <MiniTabs
            ariaLabel={t('common.overview')}
            tabs={profileTabs}
            panels={{
              experience: (
                <>
                  <p className="mini-tabs__panel-title">
                    {t('home.profile.experienceTitle')}{' '}
                    <span className="pending-inline">({t('home.profile.experienceNote')})</span>
                  </p>
                  <Bars
                    rows={experienceRows.map((label, index) => ({
                      label,
                      level: profileExperienceLevels[index] ?? null,
                    }))}
                    pendingValue={t('common.pendingValue')}
                    highlightFirst
                  />
                </>
              ),
              projects: (
                <>
                  <p className="mini-tabs__panel-title">{t('home.profile.projectsTitle')}</p>
                  <CheckList items={profileProjectNames} single />
                </>
              ),
              tools: (
                <>
                  <p className="mini-tabs__panel-title">{t('home.profile.toolsTitle')}</p>
                  <p className="pending-inline">{t('skills.technologies.subtitle')}</p>
                  <ul className="tech-tags">
                    {profileTools.map((tool) => (
                      <li className="badge badge--tag" key={tool}>
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <p className="tile__more">
                    <a className="link-arrow" href={`#${profileToolsTarget}`}>
                      {t('home.profile.toolsMore')}
                      <Icon name="arrow-right" size={15} />
                    </a>
                  </p>
                </>
              ),
            }}
          />
        </Card>
      </div>

      <CallToAction
        eyebrow={t('home.mission.eyebrow')}
        title={t('home.mission.title')}
        text={t('home.mission.text')}
        action={{ label: t('home.mission.action'), target: homeTargets.contact }}
      />
    </section>
  );
}
