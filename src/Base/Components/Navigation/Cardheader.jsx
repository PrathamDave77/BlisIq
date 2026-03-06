import UpperNavigation from './UpperNavigation.jsx';
import Select from '../Input/Select.jsx';

export const Cardheader = ({ title, subtitle, badge, actions }) => {
  return (
    <div className="font-inter flex flex-col w-full bg-bg-primary">
      <div className="flex items-center gap-xl">
        <div className="flex flex-col gap-xxs flex-1">
          {(title || badge) && (
            <div className="flex items-center gap-md">
              {title && (
                <span className="text-text-primary text-display-xs font-semibold leading-display-xs">
                  {title}
                </span>
              )}
              {badge}
            </div>
          )}


          {subtitle && (
            <div className="text-text-tertiary text-md leading-md font-normal">
              {subtitle}
            </div>
          )}
        </div>

        {actions && (
          <div className="flex items-center gap-lg">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export const Sectionheader = ({ title, badge, variant, searchable, tabs, items }) => {
  return (
    <div className="font-inter flex flex-col items-start gap-2xl w-full">
      <div className="flex items-start gap-xl self-stretch">
        <div className="flex items-center gap-xxs flex-1 flex-nowrap">
          {title && (
            <span className="text-text-primary text-lg font-semibold leading-lg">
              {title}
            </span>
          )}
          {badge && <div className="text-text-quaternary font-family-body text-lg font-semibold leading-lg">596</div>}
          {searchable && <Select placeholder="Search" searchable />}
        </div>
      </div>
      {tabs && <UpperNavigation items={items} variant={variant} />}
      <div className="h-px self-stretch border border-border-secondary"></div>
    </div>
  );
};


