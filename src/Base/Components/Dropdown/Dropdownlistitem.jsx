import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import {Chevron_right} from '../ComponentIcons/CompIcons.jsx';

const styles = cva("flex flex-col py-[1px] items-start gap-md bg-bg-primary shadow-lg hover:bg-bg-primary-hover text-text-secondary hover:text-text-secondary-hover font-family-body disabled:text-text-disabled w-[256px]", {
    variants: {
        variant: {
            Iconleading: "hover:text-text-secondary-hover flex-1 disabled:text-text-disabled",
            Checkboxleading: "hover:text-text-secondary-hover flex-1 disabled:text-text-disabled",
            Isdivider:"flex py-xs flex-col items-start gap-md ",
        },
    },

});

const resolvedVariant = (Iconleading, Checkboxleading, Isdivider) =>
  Isdivider ? "Isdivider" : Iconleading ? "Iconleading" : Checkboxleading ? "Checkboxleading" : "default";

const Dropdownlistitem = ({ Iconleading, Checkboxleading, Isdivider, Shortcut, Chevron, isIcon, Label, children }) => {
  const variant = resolvedVariant(Iconleading, Checkboxleading, Isdivider);
  const IconComponent = isIcon
  return (
    <>
      {Isdivider ? (
        <div className={cn(styles({ variant: "Isdivider" }))}>
          <div className="w-full h-px border-border-secondary bg-bg-secondary" />
        </div>
      ) : (
        <div className={cn(styles({ variant }))}>

            <div className="flex items-center gap-md p-[10px] rounded-sm   text-sm font-semibold leading-sm w-full">
                {Iconleading && <div className="flex items-center gap-[8px] flex-1">
                    <div className="flex items-center gap-2 flex-1">{isIcon && <IconComponent />}{Label}</div>
                </div>}
                {Checkboxleading && <div className="flex items-center gap-md self-stretch rounded-sm">
                    <div>{isIcon && <isIcon />}{Label}</div>
                </div>}
                
                {Shortcut && <div className="flex py-[1px] px-[4px] justify-center items-center gap-[8px] rounded-xs border border-border-secondary bg-bg-primary text-text-quaternary font-family-body text-xs leading-xs">
                    ⌘C
                </div>}
                {Chevron && <Chevron_right />}
            </div>
        </div>
      )}
    </>
  );
};



export default Dropdownlistitem
