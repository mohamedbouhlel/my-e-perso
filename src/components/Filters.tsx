type FiltersProps = {
  items: readonly { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  ariaLabel: string;
};

export default function Filters({ items, active, onChange, ariaLabel }: FiltersProps) {
  return (
    <div className="filters" role="group" aria-label={ariaLabel}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="chip"
          aria-pressed={item.id === active}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
