import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import {Indian_flag} from '../../../../public/Indian_flag.png';

const actions = cva(
    `inline-flex items-center justify-center gap-md py-xxs px-md  border border-gray-200 bg-gray-50 text-gray-700 content-center font-family-body text-xs font-normal leading-xs`,
    {
        variants: {
            variant: {
                pillcolor:"rounded-full",
                badgecolor:"rounded-sm",
            },
            color:{
                gray: "border-gray-200 bg-gray-50 text-gray-700",
                brand: "border-brand-200 text-brand-700",
                error: "border-error-200 bg-error-200 text-error-700",
                warning: "border-warning-200 bg-warning-50 text-warning-700",
                success: "border-success-200 bg-success-50 text-success-700",
                bluegray: "border-gray-blue-200 bg-gray-blue-50 text-gray-blue-700",
                Rose: "border-blue-light-200 bg-blue-light-50 text-blue-light-700",
                Teal: "border-indigo-200 bg-indigo-50 text-indigo-700",
                Indigo: "border-teal-200 bg-teal-50 text-teal-700",
                Purple: "border-rose-200 bg-rose-50 text-rose-700",
                Pink: "border-pink-200 bg-pink-50 text-pink-700",
                Orange: "border-orange-200 bg-orange-50 text-orange-700",
                Grey: "border-border-primary bg-bg-primary shadow-xs ",
            },
            size: {
                md: "px-[10px]",
                lg: "py-xs px-lg",
            },
            
        }
    }
)

const TableCellActions = ({ variant, isIcon }) => {
    return (
        <div className={cn(actions({ size, gray }))}>
            {isIcon==="dot" && <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="3.99976" cy="4" r="3" fill="#717680" />
            </svg> || isIcon==="Country" && <img src={Indian_flag} alt="Indian Flag" /> || isIcon==="Avatar" && }
        </div>
    )
}

export default TableCellActions;
