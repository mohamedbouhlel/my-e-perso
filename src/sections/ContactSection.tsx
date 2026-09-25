import { useTranslation } from 'react-i18next';
import CallToAction from '../components/CallToAction';
import Card from '../components/Card';
import CheckList from '../components/CheckList';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import PhotoVisual from '../components/PhotoVisual';
import { contactHighlights, contactMethods } from '../content/contact';
import { visualSources } from '../content/visuals';
import { useTranslatedList } from '../i18n';

export default function ContactSection() {
  const { t } = useTranslation();
  const title = useTranslatedList('contact.title');
  const zoneItems = useTranslatedList('contact.zone.items');

  return (
    <section className="section">
      <Hero
        eyebrow={t('contact.eyebrow')}
        title={title}
        lead={t('contact.lead')}
        visual={
          <PhotoVisual src={visualSources.contactHero} alt={t('visuals.alt.contactHero')} />
        }
      >
        <div className="highlights">
          {contactHighlights.map((highlight) => {
            const text = t(`contact.highlights.${highlight.key}.text`);

            return (
              <div className="highlight" key={highlight.key}>
                <span className="highlight__icon">
                  <Icon name={highlight.icon} size={22} />
                </span>
                <div>
                  <p className="highlight__title">{t(`contact.highlights.${highlight.key}.title`)}</p>
                  {text && <p className="highlight__text">{text}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </Hero>

      <div className="grid grid--2">
        <ContactForm />

        <div className="contact-side">
          <Card icon="chat" title={t('contact.methods.title')} subtitle={t('contact.methods.subtitle')}>
            <div className="contact-methods">
              {contactMethods.map((item) => (
                <div className="contact-method" key={item.key}>
                  <span className="contact-method__icon">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <p className="contact-method__title">{t(`contact.methods.items.${item.key}.title`)}</p>
                  {/* Coordonnées non validées : l'emplacement reste à renseigner. */}
                  <p className="contact-method__value contact-method__value--pending">
                    {t(`contact.methods.items.${item.key}.value`)}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card icon="globe" title={t('contact.zone.title')} subtitle={t('contact.zone.subtitle')}>
            <div className="grid grid--2">
              <div className="zone-visual">
                <p className="zone-visual__badge">
                  <Icon name="globe" size={18} />
                  {t('contact.zone.badge')}
                </p>
              </div>
              <CheckList items={zoneItems} single />
            </div>
          </Card>
        </div>
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
