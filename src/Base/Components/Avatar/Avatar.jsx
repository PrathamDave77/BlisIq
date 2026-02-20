import React from 'react'
import pkd from '../../../../public/pkd.jpg';
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import {AvatarOnlineIndicator} from './AvatarOnlineIndicator.jsx';

const divstyles = cva("flex ",

{
    variants:{
    size:{
        xs:"w-[24px] h-[24px] rounded-[24px]",
        sm:"w-8 h-8 rounded-[32px]",
        md:" w-10 h-10 rounded-[40px]",
        lg:"w-[48px] h-[48px] rounded-[48px]",
        xl:"w-[56px] h-[56px] rounded-[56px]",
        "2xl":"w-[64px] h-[64px] rounded-[64px]",
    },   
    }
}

);

const Avatar = ({ variant,size,isOnline }) => {
    return (
        <div className={cn(divstyles({size}))}>
            <div className={cn(actions({variant,size}))}>
                <AvatarOnlineIndicator variant="default" size="xs" isOnline={isOnline}/>
            </div>
        </div>
        
    )
}

const actions = cva("",
    {
        variants: {
            variant: {
                default: "relative shrink-0 border-[var(--color-border-secondary-alt)] bg-[url('/pkd.jpg')] bg-[lightgray] bg-center bg-cover bg-no-repeat",
            },
            size:{
                xs:"w-full h-full border-[0.5px] rounded-full ",
                sm:"w-full h-full border-[0.75px] rounded-full ",
                md:"w-full h-full border-[1px]  rounded-full",
                lg:"w-full h-full  border-[1px] rounded-full",
                xl:"w-full h-full  border-[1px] rounded-full",
                "2xl":"w-full h-full  border-[1px] rounded-full",
                
            }
        }
    }

)

export default Avatar
