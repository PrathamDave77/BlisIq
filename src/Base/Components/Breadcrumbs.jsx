import React from "react";
import { useState } from "react";
import { Home_line, Chevron_right, Slash_divider } from "../Creator/Icons/Icons.jsx";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";

/* =========================
   Styles (CVA)
========================= */

const actions = cva(
    "inline-flex justify-center items-center gap-2 rounded-xs text-(--color-fg-quaternary) hover:text-(--color-fg-quaternary-hover) focus-visible:bg-[rgba(255,255,255,0.00)] focus-visible:shadow-(--color-focus-ring-01)",
    {
        variants: {
            variant: {
                text: "text-text-quaternary text-center font-family-body text-sm font-semibold leading-(--leading-text-sm) hover:text-text-tertiary-hover",
                Iconbutton: "p-xs flex items-center gap-2 rounded-sm",
                button: "inline-flex py-xs px-md justify-center items-center gap-md rounded-sm",
            },
        },
        defaultVariants: {
            variant: "text",
        },
    }
);

/* =========================
   Divider
========================= */

const DividerIcon = ({ divider }) => {
    return (
        <>
            {divider === "Chevron" && <chevron_right />}
            {divider === "Slash" && <Slash_divider />}
        </>
    );
};

/* =========================
   Breadcrumb Item
========================= */

const BreadcrumbItem = ({ label, icon: Icon }) => {
    const [current, setCurrent] = useState(false);
    return (
        <div onClick={() => setCurrent(prev => !prev)} className={cn(actions({ variant: "text" }), current && "text-(--color-brand-secondary) hover:text-(--color-brand-secondary-hover)")}>
            {Icon && <Icon />}
            <span>{label}</span>
        </div>
    );
};

/* =========================
   Breadcrumbs Component
========================= */

 const Breadcrumbs = ({
    items = [],
    divider = "Slash",
    variant = "text",
}) => {

    return (
        <div
            className={cn(
                "inline-flex items-center gap-md",
                variant === "textwithline" &&
                "py-md border-t border-t-border-secondary border-b border-b-border-secondary",
                variant === "button" && "gap-md",
            )}
        >
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem label={item.label} icon={item.icon} />

                    {index !== items.length - 1 && (
                        <DividerIcon divider={divider} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs