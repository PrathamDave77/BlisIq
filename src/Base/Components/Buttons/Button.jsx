import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import { Info_circle, Spinner } from '../../Creator/Icons/Icons.jsx';

const base = [
  "inline-flex items-center justify-center gap-sm rounded-md font-semibold font-family-body leading-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:text-fg-disabled focus-visible:outline-none ",
].join(" ");

const buttonVariants = cva(base, {
  variants: {
    variant: {
      primary: [
        "shadow-xs-skeumorphic text-white bg-[var(--bg-brand-solid)] hover:bg-[var(--bg-brand-solid-hover)] focus-visible:shadow-(--focus-ring-shadow-xs-skeumorphic) disabled:border disabled:border-(--border-disabled-subtle) disabled:bg-(--bg-disabled)"
      ],
      secondary: [
        "border border-border-primary bg-(--bg-primary) text-text-secondary shadow-(--shadow-xs-skeumorphic) hover:bg-bg-primary-hover focus-visible:shadow-(--focus-ring-shadow-xs-skeumorphic) disabled:border-(--border-disabled-subtle) font-medium",
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
      sm: "py-md px-lg text-sm leading-sm",
      md: "py-[10px] px-[14px] text-sm leading-sm",
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



const Button = forwardRef(({
  children,
  variant,
  size,
  isError = false,
  isLoading = false,
  disabled = false,
  Iconleft,
  Iconright,
  loadingText = "Submitting...",
  handleClick,
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
        {Iconleft && <Iconleft className="w-5 h-5 aspect-square" aria-hidden="true" />}
        <div className="flex px-xxs justify-center items-center gap-2">{children}</div>
        {Iconright && <Iconright className="w-5 h-5" aria-hidden="true" />}
        
      </>
    )}
  </button>
));

Button.displayName = "Button";
export default Button;

