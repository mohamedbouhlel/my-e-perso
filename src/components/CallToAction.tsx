import type { SectionId } from '../sections';
import Icon from './Icon';

type CallToActionProps = {
  eyebrow: string;
  title: string;
  /** Facultatif : certaines conclusions tiennent en un titre et une action. */
  text?: string;
  action?: { label: string; target: SectionId };
  note?: string;
};

/** Appel à l'action récurrent en bas de chaque section. */
export default function CallToAction({ eyebrow, title, text, action, note }: CallToActionProps) {
  return (
    <div className="cta">
      <span className="cta__icon">
        <Icon name="bulb" size={34} />
      </span>
      <div className="cta__body">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="cta__title">{title}</h2>
        {text && <p className="cta__text">{text}</p>}
      </div>
      <div className="cta__action">
        {action ? (
          <a className="btn btn--primary" href={`#${action.target}`}>
            {action.label}
            <span className="btn__icon">
              <Icon name="arrow-right" size={16} />
            </span>
          </a>
        ) : (
          note && (
            <p className="cta__note">
              <span>{note}</span>
            </p>
          )
        )}
      </div>
    </div>
  );
}
