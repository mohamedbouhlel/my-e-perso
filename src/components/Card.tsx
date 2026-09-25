import type { ReactNode } from 'react';
import Icon, { type IconName } from './Icon';

type CardProps = {
  icon?: IconName;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ icon, title, subtitle, children, className }: CardProps) {
  const classes = className ? `card ${className}` : 'card';

  return (
    <section className={classes}>
      {title && (
        <header className="card__head">
          {icon && (
            <span className="card__icon">
              <Icon name={icon} size={18} />
            </span>
          )}
          <div>
            <h2 className="card__title">{title}</h2>
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
        </header>
      )}
      {children}
    </section>
  );
}
