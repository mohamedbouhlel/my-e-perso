import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT_MESSAGE_MAX_LENGTH } from '../content/contact';
import { useTranslatedList } from '../i18n';
import Card from './Card';
import Icon from './Icon';

export default function ContactForm() {
  const { t } = useTranslation();
  const subjects = useTranslatedList('contact.form.subjects');
  const [message, setMessage] = useState('');
  const noticeId = 'contact-form-notice';

  return (
    <Card icon="mail" title={t('contact.form.title')}>
      <form className="form" aria-describedby={noticeId}>
        <div className="form__grid">
          <div className="form__field">
            <label className="form__label" htmlFor="contact-name">
              {t('contact.form.fields.name')} {t('contact.form.requiredMark')}
            </label>
            <input
              className="form__input"
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="contact-email">
              {t('contact.form.fields.email')} {t('contact.form.requiredMark')}
            </label>
            <input
              className="form__input"
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="form__field form__field--full">
            <label className="form__label" htmlFor="contact-subject">
              {t('contact.form.fields.subject')} {t('contact.form.requiredMark')}
            </label>
            <select className="form__select" id="contact-subject" name="subject" required defaultValue="">
              <option value="" disabled>
                {t('contact.form.subjectPlaceholder')}
              </option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="form__field form__field--full">
            <label className="form__label" htmlFor="contact-message">
              {t('contact.form.fields.message')} {t('contact.form.requiredMark')}
            </label>
            <textarea
              className="form__textarea"
              id="contact-message"
              name="message"
              maxLength={CONTACT_MESSAGE_MAX_LENGTH}
              placeholder={t('contact.form.messagePlaceholder')}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            <p className="form__counter">
              {message.length} / {CONTACT_MESSAGE_MAX_LENGTH}
            </p>
          </div>
        </div>

        {/* Aucun service d'envoi n'est connecté : le bouton reste inactif plutôt que de simuler un envoi. */}
        <p className="form__notice" id={noticeId}>
          {t('contact.form.notice')}
        </p>

        <div className="form__actions">
          <button type="button" className="btn btn--primary" disabled title={t('contact.form.notice')}>
            <span className="btn__icon">
              <Icon name="send" size={16} />
            </span>
            {t('contact.form.submit')}
          </button>
        </div>
      </form>
    </Card>
  );
}
