import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";


const styles = cva("flex flex-col py-[1px] px-sm items-start gap-md rounded-md border border-border-secondary bg-bg-primary shadow-lg hover:bg-bg-primary-hover text-text-secondary hover:text-text-secondary-hover font-family-body disabled:text-text-disabled", {
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

const Dropdownlistitem = ({ Iconleading, Checkboxleading, Isdivider, children }) => {
  const variant = resolvedVariant(Iconleading, Checkboxleading, Isdivider);
  return (
    <>
      {Isdivider ? (
        <div className={cn(styles({ variant: "Isdivider" }))}>
          <div className="w-[256px] h-px border-border-secondary" />
        </div>
      ) : (
        <div className={cn(styles({ variant }))}>

            <div className="flex items-center gap-md p-[10px] rounded-sm   text-sm font-semibold leading-sm">
                {Iconleading && <div className="flex items-center gap-[8px] flex-1">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3332 14V12.6667C13.3332 11.9594 13.0522 11.2811 12.5521 10.781C12.052 10.281 11.3737 10 10.6665 10H5.33317C4.62593 10 3.94765 10.281 3.44755 10.781C2.94746 11.2811 2.6665 11.9594 2.6665 12.6667V14M10.6665 4.66667C10.6665 6.13943 9.4726 7.33333 7.99984 7.33333C6.52708 7.33333 5.33317 6.13943 5.33317 4.66667C5.33317 3.19391 6.52708 2 7.99984 2C9.4726 2 10.6665 3.19391 10.6665 4.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></div>
                    {children}
                </div>}
                {Checkboxleading && <div className="flex items-center gap-md self-stretch rounded-sm">
                    <div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16">
                        <path d="M0 0 C5.28 0 10.56 0 16 0 C16 5.28 16 10.56 16 16 C10.72 16 5.44 16 0 16 C0 10.72 0 5.44 0 0 Z " fill="currentColor" stroke="currentColor" transform="translate(0,0)" />
                    </svg></div>
                    {children}
                </div>}
                {children}
                <div className="flex py-[1px] px-[4px] justify-center items-center gap-[8px] rounded-xs border border-border-secondary bg-bg-primary text-text-quaternary font-family-body text-xs leading-xs">
                    ⌘C
                </div>
            </div>
        </div>
      )}
    </>
  );
};



export default Dropdownlistitem
