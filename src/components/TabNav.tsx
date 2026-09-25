import { useTranslation } from 'react-i18next';
import { siteIdentity } from '../content/site';
import type { SectionId } from '../sections';
import Icon, { type IconName } from './Icon';

type TabNavProps = {
  items: readonly {
    readonly id: SectionId;
    readonly label: string;
    readonly icon: IconName;
    readonly monogram?: boolean;
    readonly iconTone?: 'green';
  }[];
  activeId: SectionId;
};

export default function TabNav({ items, activeId }: TabNavProps) {
  const { t } = useTranslation();

  return (
    <nav className="tabs" aria-label={t('a11y.sectionNav')}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        const iconClasses = [
          'tab__icon',
          item.monogram ? 'tab__icon--monogram' : '',
          item.iconTone === 'green' ? 'tab__icon--green' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <a
            key={item.id}
            className="tab"
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className={iconClasses}>
              {item.monogram ? siteIdentity.monogram : <Icon name={item.icon} size={17} />}
            </span>
            {item.label}
            {isActive && (
              <span className="tab__close" aria-hidden="true">
                ×
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
