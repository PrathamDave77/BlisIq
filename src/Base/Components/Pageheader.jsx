import React from 'react'
import Breadcrumbs from './Breadcrumbs.jsx'; 
import Button from './Buttons/Button.jsx';
import Select from './Input/Select.jsx';

const Pageheader = ({isBreadcrumbs,isAction1,isAction2,isAction3,isAction4,isSearch,isDivider,isSupportingText,title}) => {
  return (
    <div className="flex flex-col items-start gap-xl ">
      {isBreadcrumbs && <Breadcrumbs variant="button"/>}
      <div className="flex items-start gap-xl self-stretch">
        <div className="flex flex-col items-start gap-xxs flex-1">
          <div className="text-text-primary font-family-display text-display-xs font-semibold leading-display-xs">{title}</div>
          {isSupportingText && <div className="text-text-tertiary font-family-body text-md leading-md">{isSupportingText}</div>}
        </div>
        <div className="flex items-center gap-lg">
          {isAction1 && <Button variant="tertiary" size="md" children="tertiary"/>}
          {isAction2 && <Button variant="secondary" size="md" children="secondary"/>}
          {isAction3 && <Button variant="secondary" size="md" children="secondary"/>}
          {isAction4 && <Button variant="Primary" size="md" children="primary"/>}
        </div>
        {isSearch && <Select searchable label="Search" size="md"/>}
      </div>
      {isDivider && <div className="h-px self-tretch w-full border border-border-secondary"></div>}
    </div>
  )
}

export default Pageheader
