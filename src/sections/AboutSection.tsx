import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import CheckList from '../components/CheckList';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import PhotoVisual from '../components/PhotoVisual';
import { aboutPrinciples, principlesIcon } from '../content/about';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

export default function AboutSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('about.title');
  const lead = useTranslatedList('about.lead');
  const journeyIntros = useTranslatedList('about.journey.intros');
  const journeyLessons = useTranslatedList('about.journey.lessons');
  const layers = useTranslatedList('about.profile.layers');
  const profileParagraphs = useTranslatedList('about.profile.paragraphs');

  return (
    <section className="section">
      <Hero
        eyebrow={t('about.eyebrow')}
        title={title}
        lead={lead}
        actions={
          <a className="btn btn--primary" href="#contact">
            {t('about.primaryCta')}
            <span className="btn__icon">
              <Icon name="arrow-right" size={16} />
            </span>
          </a>
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

      <div className="about-story">
        <div className="profile-block">
          <p className="eyebrow">{t('about.journey.eyebrow')}</p>
          <h2 className="block-title">{t('about.journey.title')}</h2>
          {/* Chaque étape relie un domaine à la leçon qu'il a apportée. */}
          {journeyLessons.map((lesson, index) => (
            <p className="section-lead" key={lesson}>
              {journeyIntros[index]} <strong>{lesson}</strong>
            </p>
          ))}
        </div>

        <Card title={t('about.profile.title')}>
          <p className="card__text">{t('about.profile.lead')}</p>
          <CheckList items={layers} single />
          {profileParagraphs.map((paragraph) => (
            <p className="card__text" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </Card>

        <Card icon={principlesIcon} title={t('about.principles.title')}>
          <ul className="info-list">
            {aboutPrinciples.map((item) => (
              <li className="info-list__item" key={item.key}>
                <span className="info-list__icon">
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <p className="info-list__title">
                    {t(`about.principles.items.${item.key}.title`)}
                  </p>
                  <p className="info-list__text">
                    {t(`about.principles.items.${item.key}.text`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
