import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import CheckList from '../components/CheckList';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import TechPanel from '../components/TechPanel';
import { homeDomains, homeTargets } from '../content/home';
import { panelFiles, panelLines, panelTonePatterns } from '../content/panels';
import { siteIdentity } from '../content/site';
import { useTranslatedList } from '../i18n';

export default function HomeSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('home.title');
  const lead = useTranslatedList('home.lead');
  const visualLines = useTranslatedList('home.visualLines');
  const approachSteps = useTranslatedList('home.approach.steps');
  const journeySteps = useTranslatedList('home.journey.steps');

  return (
    <section className="section">
      <Hero
        eyebrow={t('home.eyebrow')}
        title={title}
        lead={lead}
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
            <h2 className="tile__title">{t(`home.domains.${domain.key}.title`)}</h2>
            <p className="tile__text">
              <strong>{t(`home.domains.${domain.key}.hook`)}</strong>{' '}
              {t(`home.domains.${domain.key}.text`)}
            </p>
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
          <p className="eyebrow">{t('home.approach.eyebrow')}</p>
          <h2 className="block-title">{t('home.approach.title')}</h2>
          <p className="section-lead">{t('home.approach.lead')}</p>
          <p className="section-lead">{t('home.approach.stepsLead')}</p>
          <CheckList items={approachSteps} />
          <p className="section-lead">
            {t('home.approach.closingLead')} <strong>{t('home.approach.closing')}</strong>
          </p>
        </div>

        <Card title={t('home.journey.title')}>
          <p className="card__text">{t('home.journey.lead')}</p>
          <CheckList items={journeySteps} single />
          <p className="card__text">{t('home.journey.closing')}</p>
        </Card>
      </div>

      <CallToAction
        eyebrow={t('home.conviction.eyebrow')}
        title={t('home.conviction.title')}
        text={t('home.conviction.text')}
        action={{ label: t('home.conviction.action'), target: homeTargets.contact }}
      />
    </section>
  );
}
