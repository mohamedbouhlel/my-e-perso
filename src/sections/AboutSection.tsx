import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import CheckList from '../components/CheckList';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import Metrics from '../components/Metrics';
import PhotoVisual from '../components/PhotoVisual';
import Timeline from '../components/Timeline';
import { aboutIcons, aboutMetrics, aboutTimeline } from '../content/about';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

export default function AboutSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('about.title');
  const values = useTranslatedList('about.values.items');
  const motivationParagraphs = useTranslatedList('about.motivation.paragraphs');

  const metrics = aboutMetrics.map(({ key, icon }) => ({ icon, label: t(`about.metrics.${key}`) }));
  const timeline = aboutTimeline.map(({ key, current }) => ({
    title: t(`about.story.timeline.${key}.title`),
    text: t(`about.story.timeline.${key}.text`),
    current,
  }));

  return (
    <section className="section">
      <Hero
        eyebrow={t('about.eyebrow')}
        title={title}
        lead={t('about.lead')}
        actions={
          <>
            <a className="btn btn--primary" href="#contact">
              {t('about.primaryCta')}
              <span className="btn__icon">
                <Icon name="arrow-right" size={16} />
              </span>
            </a>
            {/* Aucun fichier de CV n'est fourni : l'emplacement existe mais reste inactif. */}
            <button
              type="button"
              className="btn btn--outline"
              disabled
              title={t('common.documentPending')}
            >
              {t('about.cvCta')}
              <span className="btn__icon">
                <Icon name="download" size={16} />
              </span>
            </button>
          </>
        }
        visual={
          <PhotoVisual
            src={visualSources.aboutHero}
            alt={t('visuals.alt.aboutHero')}
            overlay="quote-right"
          >
            {/* La citation remplace celle, figée, de la référence, au même emplacement. */}
            <blockquote className="photo-visual__quote">{t('about.quote')}</blockquote>
          </PhotoVisual>
        }
      />

      <Metrics items={metrics} pendingValue={t('common.pendingValue')} card />

      <div className="about-story">
        <div className="profile-block">
          <p className="eyebrow">{t('about.story.eyebrow')}</p>
          <h3 className="block-title">{t('about.story.title')}</h3>
          <p className="section-lead">{t('about.story.lead')}</p>
          <Timeline items={timeline} pendingPeriod={t('common.pendingPeriod')} />
        </div>

        <Card icon={aboutIcons.values} title={t('about.values.title')}>
          <CheckList items={values} single />
        </Card>

        <Card icon={aboutIcons.motivation} title={t('about.motivation.title')}>
          {motivationParagraphs.map((paragraph) => (
            <p className="card__text" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <blockquote className="quote quote--card">{t('about.motivation.quote')}</blockquote>
        </Card>
      </div>

      <PhotoVisual
        className="wide-visual"
        src={visualSources.aboutWorkshop}
        alt={t('visuals.alt.aboutWorkshop')}
      />

      <CallToAction
        eyebrow={t('about.cta.eyebrow')}
        title={t('about.cta.title')}
        text={t('about.cta.text')}
        action={{ label: t('about.cta.action'), target: 'contact' }}
      />
    </section>
  );
}
