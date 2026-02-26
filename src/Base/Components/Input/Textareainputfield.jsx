

import React from "react";
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';

const inputStyles = cva(
  `flex flex-col items-start gap-sm w-full rounded-md text-md font-normal leading-md shadow-shadow-xs outline-none  transition placeholder:text-text-placeholder border focus-visible:border-[2px] focus-visible:border-border-brand disabled:bg-bg-disabled-subtle`,
  {
    variants: {
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

export function Textareainputfield({
  label,
  hint,
  isError = false,
  children: _children,
  size,
  state: _state = "default",
  ...props
}) {

  return (
    <div className="flex flex-col gap-sm w-full">

      {/* Label */}
      {label && (
        <div className="flex items-center gap-xxs">
          <label className="text-text-secondary text-lg font-family-body font-semibold leading-sm">
            {label}
          </label>
          <span className="text-brand-tertiary">*</span>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_32880_383)">
                <path d="M6.05998 6.00004C6.21672 5.55449 6.52608 5.17878 6.93328 4.93946C7.34048 4.70015 7.81924 4.61267 8.28476 4.69252C8.75028 4.77236 9.17252 5.01439 9.4767 5.37573C9.78087 5.73706 9.94735 6.19439 9.94665 6.66671C9.94665 8.00004 7.94665 8.66671 7.94665 8.66671M7.99998 11.3334H8.00665M14.6666 8.00004C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6819 1.33337 14.6666 4.31814 14.6666 8.00004Z" stroke="#A4A7AE" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_32880_383">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {/* Input */}
      <input
        className={cn(
          inputStyles({ size }),
          isError && "border-border-error-subtle focus-visible:border-border-error py-lg px-[14px]"
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