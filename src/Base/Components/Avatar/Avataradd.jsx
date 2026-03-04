import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import Avatar from './Avatar.jsx';

const Avataradd = ({ variant, size, }) => {
    return (
        <div className={cn(actions({ variant, size }))}>
            <Avatar size="md"/>
            <Avatar size="md"/>
            <Avatar size="md"/>
            <Avatar size="md"/>
        </div>
    )
}

const actions = cva("flex items-center rounded-[12px] justify-center border border-dashed border-border-primary bg-bg-primary hover:border-border-primary hover:bg-bg-secondary text-utility-gray-400 hover:text-utility-gray-500 focus-visible:shadow-[var(--focus-ring)] disabled:rounded-[12px] disabled:border-border-disabled disabled:bg-bg-secondary-subtle",
    {
        variants: {
            variant: {
                default: ``,
            },
            size: {
                sm: "p-[4px] rounded-[16px] focus-visible:shadow-[var(--focus-ring)]",
                md: "p-[6px] rounded-[20px] focus-visible:shadow-[var(--focus-ring)]",
            }
        }
    }

)

export default Avataradd
