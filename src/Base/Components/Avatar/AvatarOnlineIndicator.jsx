import React from 'react'


import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import companyicon from '../../../../public/companyicon.png';

const styles = cva("absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 aspect-square border-[1.5px] border-white overflow-hidden",
    {        
    variants:{
        variant:{
          default:" bg-[var(--color-fg-disabled-subtle)]",  
        },
        isOnline:{
            true:"bg-[var(--color-fg-success-secondary)]",
        },                                                    
        size:{
            xs:" w-[6px] h-[6px] rounded-[3px]",
            sm:"w-2 h-2 rounded-[4px] ",
            md:"w-[10px] h-[10px] rounded-[5px] ",
            lg:"w-[12px] h-[12px] rounded-[6px] ",
            xl:"w-[14px] h-[14px] rounded-[7px] ",
            "2xl":"w-[16px] h-[16px] rounded-[8px] ",
        },
    },
});



export const AvatarOnlineIndicator = ({variant,size,isOnline}) => {
    return (
        <div className={cn(styles({variant,size,isOnline}))}>
            
        </div>
    )
}


const Iconstyles = cva("",
    {
        variant:{
            default:"flex justify-center items-center bg-bg-primary ",
        },
        size:{
            xs:"w-2.5 h-2.5",
            sm:"w-3 h-3",
            md:"w-[14px] h-[14px]",
            lg:"w-4 h-4",
            xl:"w-[18px] h-[18px]",
            "2xl":"w-5 h-5",
        },
    },

);

export const CompanyIcon = ({variant,size}) => {
    return (<div className={cn(Iconstyles({variant,size}))}>
        <img className="object-cover w-full h-full"  src={companyicon} alt="I am an image!"/>
    </div>)
}