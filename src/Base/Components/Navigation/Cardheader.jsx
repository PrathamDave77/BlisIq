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

export const Sectionheader = ({ title, badge }) => {
  return (
    <div className="font-inter flex items-center gap-md w-full">
      {title && (
        <span className="text-text-primary text-lg font-semibold leading-lg">
          {title}
        </span>
      )}
      {badge}
    </div>
  );
};


