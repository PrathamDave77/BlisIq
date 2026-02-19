import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

const tabVariants = cva(
  "flex items-center text-sm font-semibold leading-sm font-inter transition cursor-pointer ",
  {
    variants: {
      variant: {
        underline: "px-xs pb-lg border-b-2 border-transparent text-text-quaternary",
        pill: "py-[10px] px-[14px] rounded-md text-text-quaternary ",
      },
      isActive: {
        true: "",
        false: "",
      },
    },
 
    compoundVariants: [
      {
        variant: "underline",
        isActive: true,
        
        className: "border-fg-brand-primary text-brand-secondary",
      },
      {
        variant: "pill",
        isActive: true,
        className: "shadow-xs bg-bg-primary-alt text-text-secondary border border-border-primary",
      },
    ],
    defaultVariants: {
      variant: "underline",
      isActive: false,
    },
  }
);

function UpperNavigation({
  items = [],
  value,
  onChange,
  variant = "underline",
  className,
}) {
  return (
    <div
      className={cn(
        "flex items-center w-full overflow-x-auto no-scrollbar",

        variant === "underline"
          ? "border-b border-border-secondary gap-md"
          : "bg-bg-secondary-alt rounded-lg gap-xxs border-2 border-border-secondary",
        className
      )}
    >
      {items.map((item) => {
        const isActive = value === item.value;

        return (
          <button
            key={item.value}
            type="button"
            className={cn(tabVariants({ variant, isActive }), "gap-md")}
            onClick={() => onChange?.(item.value)}
          >
            <span>{item.label}</span>

            {item.count !== undefined && (
              <span
                className={cn(
                  "flex items-center py-xxs px-md justify-center rounded-full border leading-xs font-normal text-xs transition-colors",
                 
                  isActive
                    ? "bg-brand-50 border-brand-200 text-brand-700"
                    : "bg-bg-primary border-border-secondary text-utility-gray-700"
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default UpperNavigation;