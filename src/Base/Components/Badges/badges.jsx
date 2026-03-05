import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import Indian_flag from '../../../../public/Indian_flag.png';
import pkd from '../../../../public/pkd.jpg';

const actions = cva(
    `inline-flex items-center justify-center gap-md py-xxs px-md  border content-center font-family-body text-xs font-normal leading-xs md:px-[10px] lg:py-xs lg:px-lg `,
    {
        variants: {
            variant: {
                Icondot: "py-xxs pl-md pr-sm gap-xs md:pr-[10px] md:gap-sm lg:py-xs lg:pr-lg lg:pl-[10px] lg:gap-sm",
                Iconflag: "py-xxs pl-[3px] pr-md gap-xs md:pr-[10px] md:gap-sm lg:py-xs lg:pr-lg lg:pl-sm lg:gap-sm",
                Iconavatar: "py-xxs pl-[3px] pr-md gap-xs md:py-xxs md:pl-xs md:pr-[10px] md:gap-sm lg:py-xs lg:pr-lg lg:pl-sm lg:gap-sm ",
                Iconclose: "py-xxs pl-md pr-[3px] gap-xxs md:pl-[10px] md:pr-xs lg:py-xs lg:pl-lg ",
                Iconarrowright: "py-xxs pl-md pr-sm gap-xxs md:pl-[10px] lg:pl-[10px] md:pr-xs lg:py-xs lg:pl-lg",
                Iconarrowup: "py-xxs pl-sm pr-md gap-xxs md:py-xxs md:px-md md:gap-xs lg:py-xs lg:pr-lg lg:pl-[10px]",
                Iconarrowdown: "py-xxs pl-sm pr-md gap-xxs md:py-xxs md:px-md md:gap-xs lg:py-xs lg:pr-lg lg:pl-[10px]",
                Icononly: "p-[5px] gap-xxs rounded-full md:p-sm lg:p-lg",
            },

            pillcolor: { true: "rounded-full " },
            badgecolor: { true: "rounded-sm" },
            badgeModern: { true: "bg-bg-primary rounded-sm text-xs leading-xs text-utility-gray-700 " },



        }
    }
)

const badgeColor = cva(
    ``, {
    variants: {
        color: {
            grey: "border-gray-200 bg-gray-50 text-gray-700",
            brand: "border-[var(--color-brand-200)] text-[var(--color-brand-700)] bg-[var(--color-brand-50)]",
            error: "border-[var(--color-error-200)] bg-[var(--color-error-50)] text-[var(--color-error-700)]",
            warning: "border-[var(--color-warning-200)] bg-[var(--color-warning-50)] text-[var(--color-warning-700)]",
            success: "border-success-200 bg-success-50 text-(--color-utility-success-700)",
            bluegray: "border-gray-blue-200 bg-gray-blue-50 text-gray-blue-700",
            lightblue: "border-blue-light-200 bg-blue-light-50 text-blue-light-700",
            indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
            teal: "border-teal-200 bg-teal-50 text-teal-700",
            rose: "border-rose-200 bg-rose-50 text-rose-700",
            pink: "border-pink-200 bg-pink-50 text-pink-700",
            orange: "border-orange-200 bg-orange-50 text-orange-700",
            gray: "border-border-primary bg-bg-primary shadow-xs ",
        },
    },
})

const Badges = ({ variant, isIcon, pillcolor, badgecolor, badgeModern, color, label }) => {
    return (
        <>
            {isIcon ?
                <div className={cn(actions({ variant, pillcolor, badgecolor, badgeModern }),badgeColor({color}))}>
                    {isIcon === "dot" && <><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="3.99976" cy="4" r="3" fill="currentColor" />
                    </svg>{label}</> || isIcon === "Country" && <><img src={Indian_flag} alt="Indian Flag" />{label}</> || isIcon === "Avatar" && <><img src={pkd} alt="Avatar" />{label}</> || isIcon === "close" && <>{label}<span className="inline-flex items-center rounded-full"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg></span>
                    </> || isIcon === "arrowright" && <>{label}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></> || isIcon === "close" && <>{label}<span className="p-xxs"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span></> || isIcon === "arrowup" && <><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>{label}</> || isIcon === "arrowdown" && <><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>{label}</>
                    }
                </div> : <div className={cn(actions({ variant, pillcolor, badgecolor, badgeModern, color }))}>{label}</div>}
        </>
    )
}

export default Badges;
