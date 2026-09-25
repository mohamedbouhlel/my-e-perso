export type TimelineEntry = {
  title: string;
  text: string;
  current?: boolean;
};

type TimelineProps = {
  items: readonly TimelineEntry[];
  /** Aucune date n'est validée pour l'instant : la période reste provisoire. */
  pendingPeriod: string;
};

export default function Timeline({ items, pendingPeriod }: TimelineProps) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li
          className={`timeline__item${item.current ? ' timeline__item--current' : ''}`}
          key={item.title}
        >
          <span className="timeline__dot" aria-hidden="true" />
          <p className="timeline__period">{pendingPeriod}</p>
          <p className="timeline__title">{item.title}</p>
          <p className="timeline__desc">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
