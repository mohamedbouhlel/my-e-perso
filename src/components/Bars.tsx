export type BarRow = {
  label: string;
  /** Tant qu'aucun niveau n'est validé, la barre reste vide et affiche la marque provisoire. */
  value?: number | null;
};

type BarsProps = {
  rows: readonly BarRow[];
  pendingValue: string;
  highlightFirst?: boolean;
};

export default function Bars({ rows, pendingValue, highlightFirst = false }: BarsProps) {
  return (
    <div className="bars">
      {rows.map((row, index) => (
        <div className="bar-row" key={row.label}>
          <span className="bar-row__label">{row.label}</span>
          <span className={row.value == null ? 'bar-track bar-track--pending' : 'bar-track'}>
            {row.value != null && (
              <span
                className={`bar-fill${highlightFirst && index === 0 ? ' bar-fill--green' : ''}`}
                style={{ width: `${row.value}%` }}
              />
            )}
          </span>
          <span className="bar-row__value">
            {row.value == null ? pendingValue : `${row.value} %`}
          </span>
        </div>
      ))}
    </div>
  );
}
