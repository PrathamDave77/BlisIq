import React from 'react'

import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import Avatar from '../../../../public/Avatar.png';

const styles = cva("flex py-lg px-xl flex-col items-start border-b border-b-border-secondary", {
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
            <div className="flex flex-col justify-center items-center">
                Jacob Jones
                jacob@diacto.com
            </div>
        </div>
    </div>
  )
}

export default Dropdownlistheader
