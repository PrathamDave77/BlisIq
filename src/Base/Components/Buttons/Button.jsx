import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";


const base = [
  "inline-flex items-center justify-center gap-xs rounded-md font-semibold font-family-body leading-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:text-fg-disabled focus-visible:outline-none",
].join(" ");

const buttonVariants = cva(base, {
  variants: {
    variant: {
      primary: [
        "border-[2px] border-[#FFF] border-solid text-white bg-bg-brand-solid hover:bg-(--bg-brand-solid-hover) shadow-(--shadow-xs-skeumorphic) focus-visible:shadow-(--focus-ring-shadow-xs-skeumorphic) disabled:border disabled:border-(--border-disabled-subtle) disabled:bg-(--bg-disabled)"
      ],
      secondary: [
        "border border-border-primary bg-(--bg-primary) text-text-secondary shadow-(--shadow-xs-skeumorphic) hover:bg-bg-primary-hover focus-visible:shadow-(--focus-ring-shadow-xs-skeumorphic) disabled:border-(--border-disabled-subtle)",
      ],  
      tertiary: [
        "border-2 text-text-tertiary hover:bg-bg-primary-hover hover:text-text-tertiary-hover focus-visible:bg-white focus-visible:shadow-(--focus-ring) disabled:bg-bg-primary-hover",
      ],
      link: [
        "text-(--color-text-brand-secondary) hover:text-text-brand-secondary-hover hover:underline focus-visible:shadow-(--focus-ring)",
      ],
      gray_link: [
        "text-text-tertiary hover:text-text-tertiary-hover hover:underline focus-visible:shadow-(--focus-ring)",
      ],
    },
    size: {
      sm: "py-md px-lg text-sm",
      md: "py-[10px] px-[14px] text-sm",
      lg: "py-[10px] px-xl text-md leading-md",
      xl: "py-lg px-[18px] text-md leading-md",
      icon: "p-[10px]",
    },
    isError: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      isError: true,
      class: [
        "bg-(--bg-error-solid) hover:bg-(--bg-error-solid-hover)",
        "focus-visible:shadow-(--focus-ring-shadow-xs-skeumorphic-error)",
      ],
    },
    {
      variant: "secondary",
      isError: true,
      class: "border-(--border-error-subtle) text-text-error hover:bg-(--bg-error-primary)",
    },
    {
      variant: "tertiary",
      isError: true,
      class: "text-text-primary-error",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    isError: false,
  },
});

const Spinner = ({ className }) => (
  <svg className={cn("animate-spin w-4 h-4", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const Button = forwardRef(({
  children,
  variant,
  size,
  isError = false,
  isLoading = false,
  disabled = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  loadingText = "Submitting...",
  className,
  ...props
}, ref) => (
  <button
    ref={ref}
    disabled={disabled || isLoading}
    aria-busy={isLoading}
    className={cn(buttonVariants({ variant, size, isError }), className)}
    {...props}
  >
    {isLoading ? (
      <><Spinner /><span>{loadingText}</span></>
    ) : (
      <>
        {IconLeft && <IconLeft className="w-5 h-5" aria-hidden="true" />}
        {children}
        {IconRight && <IconRight className="w-5 h-5" aria-hidden="true" />}
      </>
    )}
  </button>
));

Button.displayName = "Button";
export default Button;