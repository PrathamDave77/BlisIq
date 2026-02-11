"use client";

import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../Base-Components/utils/cn.js";

const inputStyles = cva(
  `
  flex items-center gap-md
  w-full
  
  
  rounded-md

  text-md font-normal leading-md

  shadow-shadow-xs

  outline-none transition
  placeholder:text-text-placeholder
  `,
  {
    variants: {
      size: {
        sm: "px-spacing-md py-spacing-sm text-sm leading-sm",
        md: "px-spacing-lg py-spacing-md text-md leading-md",
        lg: "px-spacing-xl py-spacing-lg text-lg leading-lg",
      },

      state: {
        default: "",

        focus:
          "border-color-border-primary ring-2 ring-color-focus-ring-02",

        error:
          "border-color-border-error ring-2 ring-color-fg-error-primary",
      },

      disabled: {
        true:
          "bg-color-bg-secondary text-text-disabled border-color-border-secondary opacity-60 cursor-not-allowed",
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

export function Input({
  label,
  hint,
  error,

  size,
  state = "default",
  disabled,

  placeholder = "Enter text...",

  value,
  onChange,

  className,
  type = "text",
}) {
  const [focused, setFocused] = useState(false);

  const finalState = error ? "error" : focused ? "focus" : state;

  return (
    <div className="flex flex-col gap-sm w-full">
      {label && (
        <label className="text-text-secondary text-sm leading-sm font-semibold">
          {label}
        </label>
      )}

      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          inputStyles({
            size,
            state: finalState,
            disabled,
          }),
          className
        )}
      />

      {(hint || error) && (
        <p
          className={cn(
            "text-xs",
            error ? "text-text-error" : "text-text-tertiary"
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}