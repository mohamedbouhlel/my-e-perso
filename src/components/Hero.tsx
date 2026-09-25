import type { ReactNode } from 'react';

type HeroProps = {
  eyebrow: string;
  title: string | readonly string[];
  lead: string;
  actions?: ReactNode;
  visual?: ReactNode;
  quote?: { text: string; author?: string };
  children?: ReactNode;
};

export default function Hero({ eyebrow, title, lead, actions, visual, quote, children }: HeroProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div className="section-hero">
      <div className="section-hero__text">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-hero__title">
          {lines.map((line) => (
            <span className="hero-line" key={line}>
              {line}
            </span>
          ))}
        </h2>
        <p className="section-lead">{lead}</p>
        {actions && <div className="hero__actions">{actions}</div>}
        {children}
      </div>

      {visual && (
        <div className="hero__visual">
          {visual}
          {quote && (
            <blockquote className="quote">
              <p className="quote__text">« {quote.text} »</p>
              {quote.author && <span className="quote__author">— {quote.author}</span>}
            </blockquote>
          )}
        </div>
      )}
    </div>
  );
}
