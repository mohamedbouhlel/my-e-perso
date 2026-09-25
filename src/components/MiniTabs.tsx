import { useId, useState, type KeyboardEvent, type ReactNode } from 'react';

type MiniTabsProps = {
  tabs: readonly { id: string; label: string }[];
  panels: Record<string, ReactNode>;
  ariaLabel: string;
};

/** Petits onglets internes (carte « profil polyvalent »). */
export default function MiniTabs({ tabs, panels, ariaLabel }: MiniTabsProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');
  const baseId = useId();

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const index = tabs.findIndex((tab) => tab.id === active);
    let next = -1;

    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;

    event.preventDefault();
    const nextTab = tabs[next];
    if (!nextTab) return;

    setActive(nextTab.id);
    const list = event.currentTarget.parentElement;
    const button = list?.children[next];
    if (button instanceof HTMLElement) button.focus();
  };

  return (
    <div className="mini-tabs">
      <div className="mini-tabs__list" role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${baseId}-${tab.id}`}
            className="mini-tabs__tab"
            aria-selected={tab.id === active}
            aria-controls={`${baseId}-${tab.id}-panel`}
            tabIndex={tab.id === active ? 0 : -1}
            onClick={() => setActive(tab.id)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-${tab.id}-panel`}
          aria-labelledby={`${baseId}-${tab.id}`}
          hidden={tab.id !== active}
          className="mini-tabs__panel"
        >
          {panels[tab.id]}
        </div>
      ))}
    </div>
  );
}
