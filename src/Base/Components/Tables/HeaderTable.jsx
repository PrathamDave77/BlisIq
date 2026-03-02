import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';

const actions = cva(
    ` inline-flex items-center gap-xs bg-bg-secondary w-full`,
    {
        variants: {
            variant: {
                
            },

        }
    }

)

const HeaderTable = ({ label, helpIcon, arrowIcon, arrowUpIcon, arrowDownIcon, isarrowSelectorVertical }) => {

    const help = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_32998_1251)">
            <path d="M6.05998 6C6.21672 5.55445 6.52608 5.17874 6.93328 4.93942C7.34048 4.70011 7.81924 4.61263 8.28476 4.69248C8.75028 4.77233 9.17252 5.01435 9.4767 5.37569C9.78087 5.73702 9.94735 6.19435 9.94665 6.66667C9.94665 8 7.94665 8.66667 7.94665 8.66667M7.99998 11.3333H8.00665M14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8C1.33331 4.3181 4.31808 1.33334 7.99998 1.33334C11.6819 1.33334 14.6666 4.3181 14.6666 8Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_32998_1251">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>;

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>;

    const arrowDown = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>;

    const arrowUp = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>;


    return (
        <div className={cn(actions(), 'group')}><div className="text-text-tertiary font-family-body font-semibold text-xs leading-xs ">{label}</div>{helpIcon && <button className="flex items-center gap-[8px] text-[#A4A7AE] group-hover:text-[#717680]">{help}</button>} {arrowIcon && <button className="flex items-center gap-[8px] text-[#A4A7AE] group-hover:text-[#717680]">{arrow}</button>} {arrowUpIcon && <button className="flex items-center gap-[8px] text-[#A4A7AE] group-hover:text-[#717680]">{arrowUp}</button>} {arrowDownIcon && <button className="flex items-center gap-[8px] text-[#A4A7AE] group-hover:text-[#717680]">{arrowDown}</button>}
            {isarrowSelectorVertical && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3.5 7.5L6 10L8.5 7.5M3.5 4.5L6 2L8.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}

        </div>
    )
}

export default HeaderTable
