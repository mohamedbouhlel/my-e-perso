export type BarRow = {
  label: string;
  /**
   * Longueur relative de la barre (0-100), reprise des proportions de la référence :
   * purement graphique, aucun chiffre n'est affiché ni présenté comme validé.
   * `null` laisse la piste vide.
   */
  level?: number | null;
};

type BarsProps = {
  rows: readonly BarRow[];
  /** Marque provisoire affichée en bout de ligne tant qu'aucune valeur n'est validée. */
  pendingValue: string;
  highlightFirst?: boolean;
};

export default function Bars({ rows, pendingValue, highlightFirst = false }: BarsProps) {
  return (
    <div className="bars">
      {rows.map((row, index) => (
        <div className="bar-row" key={row.label}>
          <span className="bar-row__label">{row.label}</span>
          <span className={row.level == null ? 'bar-track bar-track--pending' : 'bar-track'}>
            {row.level != null && (
              <span
                className={`bar-fill${highlightFirst && index === 0 ? ' bar-fill--green' : ''}`}
                style={{ width: `${row.level}%` }}
              />
            )}
          </span>
          <span className="bar-row__value">{pendingValue}</span>
        </div>
      ))}
    </div>
  );
}
