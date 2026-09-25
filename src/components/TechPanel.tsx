export type TechLine = {
  text: string;
  tone?: 'default' | 'muted' | 'accent' | 'info';
};

type TechPanelProps = {
  file: string;
  action?: string;
  lines: readonly TechLine[];
  /** Les visuels de hero sont numérotés comme dans les références. */
  numbered?: boolean;
  corners?: boolean;
  compact?: boolean;
  /** Sans barre de titre : utilisé pour les panneaux superposés aux photos. */
  showBar?: boolean;
  className?: string;
};

const toneClass: Record<NonNullable<TechLine['tone']>, string> = {
  default: '',
  muted: ' tech-panel__text--muted',
  accent: ' tech-panel__text--accent',
  info: ' tech-panel__text--info',
};

/**
 * Panneau technique sombre (façon terminal) utilisé comme visuel.
 * Les références utilisent des photos : aucune n'étant fournie dans le projet,
 * ce panneau reprend la même famille visuelle (fond sombre + coins verts).
 */
export default function TechPanel({
  file,
  action,
  lines,
  numbered = false,
  corners = false,
  compact = false,
  showBar = true,
  className,
}: TechPanelProps) {
  const classes = [
    'tech-panel',
    corners ? 'tech-panel--corners' : '',
    compact ? 'tech-panel--compact' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {showBar && (
        <div className="tech-panel__bar">
          <span className="tech-panel__file">$ {file}</span>
          {action && <span className="tech-panel__action">{action}</span>}
        </div>
      )}
      <div className="tech-panel__body">
        {lines.map((line, index) => (
          <div className="tech-panel__line" key={`${line.text}-${index}`}>
            {numbered && <span className="tech-panel__num">{index + 1}</span>}
            <span className={`tech-panel__text${line.tone ? toneClass[line.tone] : ''}`}>
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
