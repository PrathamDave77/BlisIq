import UpperNavigation from './UpperNavigation.jsx';
import Select from '../Input/Select.jsx';
import {Columns} from '../../Creator/Icons/Icons.jsx';
import Button from '../Buttons/Button.jsx';

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
    <div className="flex items-center gap-2xl self-stretch w-full">
      <div className="flex items-start gap-md flex-1 w-full">

        {title && (
          <span className="text-text-primary text-lg font-semibold leading-lg">
            {title}
          </span>
        )}
        {badge && <div className="text-text-quaternary font-family-body text-lg font-semibold leading-lg">596</div>}

      </div>
      <div className="flex justify-end items-center gap-xl flex-1">
        <div className="flex items-center gap-lg ">
          {searchable && <Select placeholder="Search" searchable />}
          <div className="flex items-center gap-lg">
            <Button variant="secondary" Iconleft={Columns} size="md" children="Column 7/12"/>
          </div>
        </div>  
        
      </div>
      
    </div>
  );
};


