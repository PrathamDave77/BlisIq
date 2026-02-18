import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import Button from '../Button.jsx';

const Cardheader = () => {
    return (
        <div className="flex flex-col items-start gap-2xl bg-bg-primary">
            <div id="AvatarFalse" className="flex pt-2xl px-3xl items-center gap-xl self-stretch">
                <div id="content" className="flex flex-col justify-center items-start gap-xxs flex-1 ">
                    <div id="text" className="flex flex-col justify-center items-start gap-xxs flex-1">
                        <div id="textandbadge" className="flex items-center gap-md ">
                            <span className="text-text-primary font-family-body text-lg font-semibold leading-lg">Team members</span>
                            <div id="badge" className="flex py-xxs px-md justify-center items-center gap-md rounded-full border border-[var(--color-brand-200)] bg-[var(--color-brand-50)]">
                                <div className="text-[var(--color-brand-700)] text-center font-family-body text-xs text-xs">10/20 seats</div>
                            </div>
                        </div>
                        <div id="Supporting" className="text-text-tertiary font-family-body text-sm leading-sm ">
                            Manage your team members and their account permission here.
                        </div>
                    </div>
                    <div id="actions" className="flex items-center gap-lg">
                        <Button variant="secondary" size="sm"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Tertiary
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg></Button>
                        <button className="flex py-[10px] px-[14px] items-center justify-center gap-xs rounded-md border border-border-primary bg-bg-primary shadow-xs">

                        </button>

                    </div>
                </div>
                <div id="divider" className="">

                </div>
            </div>
            <div className="AvatarTrue">

            </div>
        </div>
    )
}




export default Cardheader

