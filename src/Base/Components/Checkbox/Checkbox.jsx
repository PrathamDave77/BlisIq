import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const Actions = cva(
    "border border-border-primary flex justify-center items-center ",
    {
        variants: {
            variant: {
                isCheckbox: "",
            },
            size: {
                sm: "w-4 h-4 rounded-[4px]",
                md: "w-5 h-5 rounded-[6px]",
            },
        },
        defaultVariants: {
            size: "sm",
        },
    }
);

const Checkbox = ({ ischeck, indeterminate, size, variant = "isCheckbox", text, SupportingText }) => {
    return (
        <div className="flex ">

            {/* Checkbox */}
            <div
                className={cn(
                    "mt-[2px]",
                    Actions({ variant, size }),
                    ischeck ? "bg-bg-brand-solid border-bg-brand-solid" : "bg-white"
                )}
            >
                {ischeck && indeterminate ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.91699 7H11.0837" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                ) : ischeck && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 12 10" fill="none">
                        <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )  }
            </div>

            {/* Text */}
            <div className="flex flex-col items-start justify-center ">
                <div className="text-text-secondary font-family-body text-sm font-semibold leading-sm flex items-center gap-xs">
                    {text}
                </div>

                {SupportingText && (
                    <div className="text-text-tertiary text-sm">
                        {SupportingText}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Checkbox;