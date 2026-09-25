import Icon, { type IconName } from './Icon';

export type MetricItem = {
  icon: IconName;
  label: string;
  /** Aucun chiffre n'est validé : sans valeur, la métrique affiche la marque provisoire. */
  value?: string;
};

type MetricsProps = {
  items: readonly MetricItem[];
  pendingValue: string;
  /** Variante encadrée utilisée dans « À propos ». */
  card?: boolean;
  className?: string;
};

export default function Metrics({ items, pendingValue, card = false, className }: MetricsProps) {
  return (
    <ul className={className ? `metrics ${className}` : 'metrics'}>
      {items.map((item) => (
        <li className={`metric${card ? ' metric--card' : ''}`} key={item.label}>
          <span className="metric__icon">
            <Icon name={item.icon} size={22} />
          </span>
          <div>
            <p className={`metric__value${item.value ? '' : ' metric__value--pending'}`}>
              {item.value ?? pendingValue}
            </p>
            <p className="metric__label">{item.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
