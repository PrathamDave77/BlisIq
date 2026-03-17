import React from 'react';
import { useState } from 'react';
import Ellipse from '../../../../public/Ellipse.png';
import VerifiedTicks from './VerifiedTicks.jsx';
import { Edit_line } from '../ComponentIcons/CompIcons.jsx';
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

const actions1 = cva(
    "inline-flex items-center rounded-full border border-border-secondary-alt bg-bg-primary",
    {
        variants: {
            size: {
                sm: "p-[3px] gap-md ",
                md: "p-[4px] gap-md ",
                lg: "p-sm gap-md ",
            },
        },
    },
);

const actions2 = cva(
    "flex items-center justify-center rounded-full border border-border-secondary-alt bg-bg-tertiary ",
    {
        variants: {
            size: {
                sm: "shadow-lg",
                md: "shadow-xl",
                lg: "shadow-2xl",
            },
        },
    },
);

const AvatarProfilePicture = ({ size, variant, Icon, Verified }) => {
    const [ishover, setIsHover] = useState(false);
    return (
        <div className={cn(actions1({ size }))}>
            <div className={cn(actions2({ size }), "relative")} onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <div className="shrink-0 rounded-[66px] bg-[lightgray] bg-center bg-cover bg-no-repeat w-full h-full" style={{
                    backgroundImage: variant === "avatar" ? `url(${Icon})` :
                        variant === "Text" ? `url(${Ellipse})` :
                            "none"
                }}>

                </div>
                {ishover && <div className="absolute inset-0 rounded-full bg-black/50 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Edit_line className="text-white w-4 h-4" />
                    <span className="text-white text-xs font-semibold text-center leading-tight">
                        Change photo
                    </span>
                </div>}
            </div>
            {Verified && <VerifiedTicks size={size === "sm" && "2xl" || size === "md" && "3xl" || size === "lg" && "4xl"} />}
        </div>
    )
}

export default AvatarProfilePicture
