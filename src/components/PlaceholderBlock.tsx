type PlaceholderBlockProps = {
  label: string;
};

export default function PlaceholderBlock({ label }: PlaceholderBlockProps) {
  return (
    <div className="placeholder">
      <p className="placeholder__label">{label}</p>
      <div className="placeholder__rows" aria-hidden="true">
        <span className="placeholder__row" />
        <span className="placeholder__row placeholder__row--medium" />
        <span className="placeholder__row placeholder__row--short" />
      </div>
    </div>
  );
}
