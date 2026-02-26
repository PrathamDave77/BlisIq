import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const actions = cva(
  "flex items-center rounded-[12px] justify-center border border-dashed border-border-primary bg-bg-primary hover:border-border-primary hover:bg-bg-secondary text-utility-gray-400 hover:text-utility-gray-500 focus-visible:shadow-[var(--focus-ring)] disabled:rounded-[12px] disabled:border-border-disabled disabled:bg-bg-secondary-subtle",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        sm: "p-[4px] rounded-[16px] focus-visible:shadow-[var(--focus-ring)]",
        md: "p-[6px] rounded-[20px] focus-visible:shadow-[var(--focus-ring)]",
      },
    },
  }
);

const Avataradd = ({ variant = "default", size }) => {
  return (
    <div className={cn(actions({ variant, size }))}>
            <div className="p-[4px] justify-center items-center rounded-[12px] sm:rounded-[16px] md:rounded-[12px] "><svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                <path d="M7.99998 3.33334V12.6667M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg></div>
        </div>
  );
};

export default Avataradd;
