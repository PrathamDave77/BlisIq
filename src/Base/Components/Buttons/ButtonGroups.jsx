import { React } from 'react'
import { useState, forwardRef } from "react";
import '../../styles/semantic/bg_modes.css';
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils.js';

const buttonVariants = cva(
    "inline-flex justify-center items-center gap-sm rounded-md transition-all duration-200 font-semibold leading-sm font-family-body bg-bg-primary text-text-secondary text-sm",

    {
        variants: {
            /*Primary Current only*/
            Current: {
                true: '',
                false: '',
            },
            variant: {
                primary: `border-r-[1px] border-solid border-[var(--color-border-primary)] bg-bg-primary  disabled:border-px disabled:border-[var(--border-disabled-subtle)] disabled:shadow-[var(--color-shadow-xs)] bg-[var(--bg-brand-solid)] hover:bg-[var(--bg-primary-hover)]              focus-visible:shadow-[var(--focus-ring-shadow-xs-skeumorphic)]`,
                secondary: ` border-px bg-[var(--bg-primary-hover])] text-[var(--color-text-secondary-hover)] shadow-[var(--shadow-xs-skeumorphic)]  focus-visible:shadow-[var(--focus-ring-shadow-xs-skeumorphic)] disabled:border-[var(--border-disabled-subtle)] disabled:shadow-xs disabled:text-fg-disabled border-border-primary text-text-secondary hover:bg-bg-primary-hover text-text-error
                `,
                tertiary: ` border-[2px] text-text-tertiary text-sm hover:bg-bg-primary-hover hover:text-text-tertiary-hover focus-visible:bg-[#FFF] focus-visible:shadow-[var(--focus-ring)] disabled:text-fg-disabled disabled:bg-bg-primary-hover`,
                link: `text-text-brand-secondary hover:text-text-brand-secondary-hover hover:underline hover:decoration-solid hover:decoration-skip-ink-auto hover:decoration-auto hover:underline-offset-auto hover:underline-from-font focus-visible:bg-[rgba(255, 255, 255, 0.01)] focus-visible:shadow-[var(--focus-ring)]disabled:text-fg-disabled `,
                gray_link: ' text-text-tertiary hover:text-text-tertiary-hover hover:underline hover:decoration-solid hover:decoration-skip-ink-auto hover:decoration-auto hover:underline-offset-auto hover:underline-from-font focus-visible:bg-[rgba(255, 255, 255, 0.01)] focus-visible:shadow-[var(--focus-ring)]disabled:text-fg-disabled focus-visible:bg-[rgba(255, 255, 255, 0.01)] focus-visible:shadow-[var(--focus-ring)] disabled:text-fg-disabled'
            },
        },
        compoundVariants: [
            {
                variant: "primary",
                Current: true,
                class: 'bg-[var(--bg-error-solid)] hover:bg-[var(--bg-error-solid-hover)] focus-visible:shadow-[var(--focus-ring-shadow-xs-skeumorphic-error)]',
            },
            {
                variant: "secondary",
                Current: true,
                class: 'border-[var(--border-error-subtle)] hover:bg-[var(--bg-error-primary)]',
            },
            {
                variant: "tertiary",
                Current: true,
                class: 'text-text-primary-error',
            },
        ],
    }
);

const Button = forwardRef(

    ({ children, variant, size, disabled, Current, ...props }, ref) => {

        const [isloading, setIsloading] = useState(false);

        return (
            <button className={cn(buttonVariants({ variant, size, Current }))} ref={ref}>{children}</button>
        );
    }
);

export default Button
