

import React, { useState, useRef, useEffect } from "react";
import { cva } from "class-variance-authority";
import {cn} from '../../lib/utils.js';

const selectStyles = cva(
  `
  flex items-center gap-md
  w-full

  px-lg py-md
  rounded-md
  text-md font-normal leading-md

  outline-none transition
  placeholder:text-text-placeholder
  `,
  {
    variants: {
      size: {
        sm: "px-md py-sm text-sm leading-sm",
        md: "px-lg py-spacing-md text-md leading-md",
        lg: "px-xl py-lg text-lg leading-lg",
      },

      state: {
        default:
          "border border-border-primary text-text-primary bg-bg-primary shadow-xs",

        focus: "border-border-primary ring-2 ring-focus-ring-02",

        error: "border-color-border-error ring-2 ring-color-fg-error-primary",
      },

      disabled: {
        true: "bg-bg-secondary text-text-disabled border-border-secondary opacity-60",
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

export function Select({
  label,
  hint,
  error,
  size,
  state = "default",
  disabled,

  variant = "default", // default | icon | avatar | dot

  searchable = false,

  leadingIcon,
  avatarSrc,
  dotColor = "bg-success-500",

  options = [],
  value,

  placeholder = "Select option",

  className,
}) {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const wrapperRef = useRef(null);

  const finalState = error ? "error" : focused || open ? "focus" : state;

  const filtered = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
        setFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-sm relative" ref={wrapperRef}>
      {label && (
        <label className="text-text-secondary text-sm leading-sm font-semibold">
          {label}
        </label>
      )}

      <div
        onClick={() => {
          if (!disabled && !searchable) {
            setOpen((v) => !v);
          }
        }}
        className={cn(
          selectStyles({
            size,
            state: finalState,
            disabled,
          }),
          "cursor-pointer",
          className,
        )}
      >
        {searchable && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M15.8334 15.8333L12.9168 12.9167M15 7.91668C15 11.8287 11.8287 15 7.91671 15C4.00469 15 0.833374 11.8287 0.833374 7.91668C0.833374 4.00466 4.00469 0.833344 7.91671 0.833344C11.8287 0.833344 15 4.00466 15 7.91668Z"
              stroke="#A4A7AE"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}

        {variant === "icon" && leadingIcon && (
          <span className="text-text-tertiary shrink-0">{leadingIcon}</span>
        )}

        {variant === "avatar" && avatarSrc && (
          <img src={avatarSrc} className="w-6 h-6 rounded-full shrink-0" />
        )}

        {variant === "dot" && (
          <span className={cn("w-2.5 h-2.5 rounded-full shrink-0", dotColor)} />
        )}

        {searchable ? (
          <input
            disabled={disabled}
            value={open ? query : selected?.label || ""}
            placeholder={placeholder}
            onFocus={() => {
              setFocused(true);
              setOpen(true);
            }}
            onBlur={() => setFocused(false)}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none w-full"
          />
        ) : (
          <span className="flex-1 text-left">
            {selected?.label || placeholder}
          </span>
        )}
      </div>

      {open && !disabled && (
        <div className="absolute top-full mt-1 w-full bg-bg-primary border border-border-secondary rounded-md shadow-lg z-50 max-h-64 overflow-auto">
          {filtered.length === 0 && (
            <div className="px-lg py-md text-sm text-text-tertiary">
              No results
            </div>
          )}

          {filtered.map((opt) => (
            <div
              key={opt.value}
              onMouseDown={() => {
                setSelected(opt);
                setQuery("");
                setOpen(false);
              }}
              className="px-lg py-md hover:bg-bg-secondary cursor-pointer text-sm"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}

      {(hint || error) && (
        <p
          className={`text-xs ${
            error ? "text-text-error" : "text-text-tertiary"
          }`}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}
