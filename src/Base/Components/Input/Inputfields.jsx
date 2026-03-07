import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const inputfieldsStyles = cva(
  "flex items-center gap-md w-full rounded-md text-md font-normal leading-md shadow-xs outline-none transition bg-primary border border-border-primary focus-within:border-[2px] focus-within:border-border-brand disabled:cursor-not-allowed disabled:bg-bg-disabled-subtle",
  {
    variants: {
      size: {
        md: "py-[10px] px-[14px]",
      },
      isError: {
        true: "border-border-error-subtle focus-within:border-border-error-subtle",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export default function Inputfields({
  label,
  placeholder,
  required,
  hint,
  isError,
  Email,
  PhoneNumber: PhoneNumber,
  SaleAmount,
  WebsiteUrl,
  CardNumber: CardNumber,
  Users: Users,
  WebsiteCopy,
  value,
  onChange,
  type = "text",
  ...props
}) {
  // Check if we need to show a leading element at all
  const hasLeadingElement = Email || WebsiteUrl || SaleAmount;

  const HelpIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M6.06 6C6.217 5.554 6.526 5.179 6.933 4.939C7.34 4.7 7.819 4.613 8.285 4.692C8.75 4.772 9.173 5.014 9.477 5.376C9.781 5.737 9.947 6.194 9.947 6.667C9.947 8 7.947 8.667 7.947 8.667M8 11.333H8.007M14.667 8C14.667 11.682 11.682 14.667 8 14.667C4.318 14.667 1.333 11.682 1.333 8C1.333 4.318 4.318 1.333 8 1.333C11.682 1.333 14.667 4.318 14.667 8Z" stroke="#A4A7AE" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ErrorIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M8 5.333V8M8 10.667H8.007M14.667 8C14.667 11.682 11.682 14.667 8 14.667C4.318 14.667 1.333 11.682 1.333 8C1.333 4.318 4.318 1.333 8 1.333C11.682 1.333 14.667 4.318 14.667 8Z" stroke="#F04438" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="flex flex-col gap-sm w-full">
      {label && (
        <div className="flex items-center gap-xs">
          <label className="text-text-secondary text-sm font-semibold leading-sm">
            {label}
          </label>
          {required && <span className="text-brand-tertiary">*</span>}
        </div>
      )}

      <div className={cn(inputfieldsStyles({ isError }))}>
        
        {hasLeadingElement && (
          <div className="flex items-center justify-center shrink-0">
            {Email && (
              <svg width="20" height="20" viewBox="0 0 19 15" fill="none">
                <path d="M0.833374 3.33334L7.63747 8.09621C8.18845 8.4819 8.46394 8.67474 8.76359 8.74943C9.02829 8.81541 9.30513 8.81541 9.56982 8.74943C9.86948 8.67474 10.145 8.4819 10.6959 8.09621L17.5 3.33334M4.83337 14.1667H13.5C14.9002 14.1667 15.6002 14.1667 16.135 13.8942C16.6054 13.6545 16.9879 13.2721 17.2276 12.8017C17.5 12.2669 17.5 11.5668 17.5 10.1667V4.83334C17.5 3.43321 17.5 2.73315 17.2276 2.19837C16.9879 1.72796 16.6054 1.34551 16.135 1.10583C15.6002 0.833344 14.9002 0.833344 13.5 0.833344H4.83337C3.43324 0.833344 2.73318 0.833344 2.1984 1.10583C1.72799 1.34551 1.34554 1.72796 1.10586 2.19837C0.833374 2.73315 0.833374 3.43321 0.833374 4.83334V10.1667C0.833374 11.5668 0.833374 12.2669 1.10586 12.8017C1.34554 13.2721 1.72799 13.6545 2.1984 13.8942C2.73318 14.1667 3.43324 14.1667 4.83337 14.1667Z" stroke="#A4A7AE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {WebsiteUrl && <span className="text-text-tertiary pr-2 border-r border-border-primary mr-2">http://</span>}
            {SaleAmount && <span className="text-text-tertiary mr-1">$</span>}
          </div>
        )}

        <input
          className="flex-1 border-none outline-none bg-transparent text-text-primary placeholder:text-text-placeholder text-md leading-md font-normal"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={Email ? "email" : type}
          {...props}
        />

        <div className="flex items-center gap-2 shrink-0">
          {isError ? <ErrorIcon /> : <HelpIcon />}
          {WebsiteCopy && (
            <button type="button" className="pl-2 border-l border-border-primary text-sm font-semibold text-text-secondary hover:text-text-primary">
              Copy
            </button>
          )}
        </div>
      </div>

      {hint && (
        <p className={cn("text-sm", isError ? "text-text-error-primary" : "text-text-tertiary")}>
          {hint}
        </p>
      )}
    </div>
  );
}