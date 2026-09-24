import type { SectionId } from '../sections';

type TabNavProps = {
  items: readonly { readonly id: SectionId; readonly label: string }[];
  activeId: SectionId;
};

export default function TabNav({ items, activeId }: TabNavProps) {
  return (
    <nav className="tabs" aria-label="Sections du site">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <a
            key={item.id}
            className="tab"
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
