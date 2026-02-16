import React from 'react'
import {tooltipPagination} from './tooltipPagination.jsx';
import { React } from 'react'
import { useState, forwardRef } from "react";
import { cva } from 'class-variance-authority'
import {cn} from '../../../lib/utils.js';

const tooltipactions = cva(
    "flex pt-0 pb-lg px-xl",
    {
        variants: {
            /*Primary isError only*/
            variant: {
                primarysecondary:`border-[2px] border-[#FFF] text-text-white shadow-[var(--shadow-xs-skeumorphic)]  disabled:border-px disabled:border-[var(--border-disabled-subtle)] disabled:shadow-[var(--color-shadow-xs)] bg-[var(--bg-brand-solid)] hover:bg-[var(--bg-brand-solid-hover)] focus-visible:shadow-[var(--focus-ring-shadow-xs-skeumorphic)] `,
                secondary:` border-px bg-[var(--bg-primary])] text- shadow-[var(--shadow-xs-skeumorphic)]  focus-visible:shadow-[var(--focus-ring-shadow-xs-skeumorphic)] disabled:border-[var(--border-disabled-subtle)] disabled:shadow-xs disabled:text-fg-disabled border-border-primary text-text-secondary hover:bg-bg-primary-hover text-text-error
                `,
                tertiary:` border-[2px] text-text-tertiary text-sm hover:bg-bg-primary-hover hover:text-text-tertiary-hover focus-visible:bg-[#FFF] focus-visible:shadow-[var(--focus-ring)] disabled:text-fg-disabled disabled:bg-bg-primary-hover`,
                link:`text-text-brand-secondary hover:text-text-brand-secondary-hover hover:underline hover:decoration-solid hover:decoration-skip-ink-auto hover:decoration-auto hover:underline-offset-auto hover:underline-from-font focus-visible:bg-[rgba(255, 255, 255, 0.01)] focus-visible:shadow-[var(--focus-ring)]disabled:text-fg-disabled `,
                gray_link:' text-text-tertiary hover:text-text-tertiary-hover hover:underline hover:decoration-solid hover:decoration-skip-ink-auto hover:decoration-auto hover:underline-offset-auto hover:underline-from-font focus-visible:bg-[rgba(255, 255, 255, 0.01)] focus-visible:shadow-[var(--focus-ring)]disabled:text-fg-disabled focus-visible:bg-[rgba(255, 255, 255, 0.01)] focus-visible:shadow-[var(--focus-ring)] disabled:text-fg-disabled' 
            },
        },
    }
);

const tooltippagination = forwardRef(

        ({children,variant,size,disabled,isError,...props},ref) => {

        const [isloading,setIsloading] = useState(false);

        return (
            <div className="flex pt-0 pb-lg px-xl">
            <tooltipPagination/>
            <div className="flex justify-end items-center gap-lg flex-1">
                <button className="flex py-md px-lg justify-center items-center gap-xs rounded-md border-px border-solid bg-bg-primary border-border-primary">Skip</button>
                <button className="flex py-md px-lg justify-center items-center gap-xs bg-bg-brand-solid border-[2px] border-solid border-[#FFF]">Next</button>
            </div>
            
            </div>
        );
    }
)
export default tooltippagination
