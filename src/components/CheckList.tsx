import Icon from './Icon';

type CheckListProps = {
  items: readonly string[];
  single?: boolean;
};

export default function CheckList({ items, single = false }: CheckListProps) {
  return (
    <ul className={`checks${single ? ' checks--single' : ''}`}>
      {items.map((item) => (
        <li className="checks__item" key={item}>
          <span className="checks__icon">
            <Icon name="check" size={16} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
