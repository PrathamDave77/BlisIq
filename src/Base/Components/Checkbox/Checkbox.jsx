import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const Actions = cva(
    "border border-border-primary focus-visible:bg-bg-primary focus-visible:shadow-(--focus-ring) disabled:border-border-disabled disabled:bg-bg-disabled-subtle",
    {
        variants: {
            variant: {
                Checkbox: "flex p-[2px] justify-center items-center rounded-[4px] bg-bg-brand-solid hover:bg-bg-brand-solid-hover focus-visible:shadow-(--focus-ring) focus-visible:bg-bg-primary disabled:border-border-disabled ",
            },
            size: {
                sm: "w-4 h-4 rounded-[4px]",
                md: "w-5 h-5 rounded-[6px]",
            },

        },
    });

const Styles = cva(
    "border border-border-primary focus-visible:bg-bg-primary focus-visible:shadow-(--focus-ring) disabled:border-border-disabled disabled:bg-bg-disabled-subtle",
    {
        variants: {
            variant: {
                Radio: "rounded-2 border border-border-primary focus-visible:shadow-(--focus-ring) disabled:border-border-disabled disabled:bg-bg-disabled-subtle ",
            },
            size: {
                sm: "w-4 h-4 rounded-[8px] ",
                md: "w-5 h-5 rounded-[10px] text-md leading-md",
            },

        },
    });

const Checkbox = ({ ischeck, indeterminate, size, variant, state, text, SupportingText }) => {
    return (
        <div className={text && "flex flex-start gap-md"}>
            <div className={text && "flex pt-[2px] justify-center items-center"} ></div>
            <div className={variant = "Radio" ? Actions({ variant, size }) : Styles({ variant, size })}>
                {variant = "isCheckbox" && <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}
                {variant = "isCheckbox" && indeterminate && <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}
                {variant = "Radio" && <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <rect width="16" height="16" rx="8" fill="#1570EF" />
                    <circle cx="8" cy="8" r="3" fill="white" />
                </svg>}
                {variant = "Radio" && indeterminate && <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <rect width="16" height="16" rx="8" fill="#1570EF" />
                    <circle cx="8" cy="8" r="3" fill="white" />
                </svg>}
                {text && <><div className="self-stretch text-text-secondary font-family-body text-sm font-semibold leading-sm">{text}</div><div>{SupportingText}</div></>}
            </div>
        </div>
    )
}




export default Checkbox
