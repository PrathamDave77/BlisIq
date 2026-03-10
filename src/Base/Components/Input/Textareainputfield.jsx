
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';

const inputStyles = cva(
  `flex flex-col items-start gap-sm w-full h-[128px] py-lg px-[14px] rounded-md text-md font-normal leading-md shadow-xs outline-none border border-border-primary text-(--color-placeholder) text-md font-family-body leading-md transition placeholder:text-text-placeholder border focus-visible:border-[2px] focus-visible:border-border-brand disabled:bg-bg-disabled-subtle `,
  {
    variants: {
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

export default function Textareainputfield({
  label,
  hint,
  isError = false,
  children: children,
  size,
  state: state = "default",
  ...props
}) {

  return (
    <div className="flex flex-col gap-sm w-full items-start h-[128px]">

      {/* Label */}
      {label && (
        <div className="flex items-center gap-xxs">
          <label className="text-text-secondary text-lg font-family-body font-semibold leading-sm">
            {label}
          </label>
          <span className="text-brand-tertiary">*</span>
        </div>
      )}

      {/* Input */}
      <textarea defaultValue="You can describe about role..."
        className={cn(
          inputStyles({ size }),
          isError && "border-border-error-subtle focus-visible:border-border-error py-lg px-[14px] w-full h-full "
        )}
        {...props}
      />

      {/* Hint */}
      {hint && (
        <p
          className={cn(
            "text-lg",
            isError
              ? "text-text-error-primary"
              : "text-tertiary"
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
}