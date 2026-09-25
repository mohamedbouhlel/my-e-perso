import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import CheckList from '../components/CheckList';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import PhotoVisual from '../components/PhotoVisual';
import { contactExpectations } from '../content/contact';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

export default function ContactSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('contact.title');
  const lead = useTranslatedList('contact.lead');
  const list = useTranslatedList('contact.list');

  return (
    <section className="section">
      <Hero
        eyebrow={t('contact.eyebrow')}
        title={title}
        lead={lead}
        visual={
          <PhotoVisual src={visualSources.contactHero} alt={t('visuals.alt.contactHero')} />
        }
      >
        <p className="section-lead">{t('contact.listLead')}</p>
        <CheckList items={list} single />
      </Hero>

      <div className="grid grid--2">
        <ContactForm />

        <Card icon="chat" title={t('contact.expectations.title')}>
          <div className="highlights">
            {contactExpectations.map((expectation) => (
              <div className="highlight" key={expectation.key}>
                <span className="highlight__icon">
                  <Icon name={expectation.icon} size={22} />
                </span>
                <div>
                  <p className="highlight__title">
                    {t(`contact.expectations.items.${expectation.key}.title`)}
                  </p>
                  <p className="highlight__text">
                    {t(`contact.expectations.items.${expectation.key}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <CallToAction
        eyebrow={t('contact.cta.eyebrow')}
        title={t('contact.cta.title')}
        text={t('contact.cta.text')}
        note={t('contact.cta.note')}
      />
    </section>
  );
}
