import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import Checkbox from '../Checkbox/Checkbox.jsx';
import Button from '../Buttons/Button.jsx';

const actions = cva(
    `flex items-start gap-lg self-stretch px-3xl pb-3xl `,
    {
        variants: {
            variant: {
                HorizontalfillContainer: "flex-row",
                VerticalfillContainer:"flex-col",
                Spacebetween:"flex justify-between ",
                Checkbox:"flex items-center ",
                
            },
            Breakpoint: {
                Mobile:"flex px-xl pb-xl flex-col items-start gap-lg self-stretch", 
            },
        }
    }
)

const ModalActions = ({ variant, Destructive, Breakpoint, Divider, Tertiarybutton }) => {
    return (
        <div className="flex flex-col pt-3xl items-start   ">
            <div className="flex flex-col items-start self-stretch pb-6">
                <div className="h-px self-stretch stroke-[1px] stroke-border-secondary"></div>
            </div>
            <div className={cn(actions({variant}))}>
                {variant==="Checkbox" && <><Button variant="gray_link" size="md"/></>}
                <div className={variant==="Checkbox" && "flex items-end justify-end gap-lg flex-1"}>
                    <Button variant="secondary" size="md" children="Cancel" className={Destructive && "bg-bg-error-solid"}/>
                    <Button variant="primary" size="md" children="Confirm" />
                </div>
                
            </div>
        </div>
    )
}



export default ModalActions
