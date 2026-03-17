import React from 'react'

import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import Ellipse from '../../../../public/Ellipse.png';

const styles = cva("flex py-lg px-xl flex-col items-start border-b border-b-border-secondary w-full", {
    variants: {
        variant: {
            
        },
    },

});

const Dropdownlistheader = () => {
  return (
    <div className={cn(styles({}))}>
        <div className="flex items-center gap-md">
            <img className="w-10 h-10" src={Avatar} alt="image"/>
            <div className="flex flex-col justify-center items-start">
                <div className="self-stretch text-text-primary font-family-body text-sm font-semibold leading-sm ">Jacob Jones</div>
                <div className="text-text-tertiary font-family-body text-sm font-normal leading-sm">jacob@diacto.com</div>
            </div>
        </div>
    </div>
  )
}

export default Dropdownlistheader
