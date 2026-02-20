import React from 'react'
import {useState} from 'react';
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import Button from '../Button.jsx';
import Dropdownmenu from '../Dropdown/Dropdownmenu.jsx';
import Badges from '../Badges/Badges.jsx';

const Cardheader = ({isAvatar}) => {
    
    const [dropdown,setDropdown] = useState(false);
    return (
        <div className="flex flex-col w-full items-start gap-2xl bg-bg-primary">
            <div id="AvatarFalse" className="flex pt-2xl px-3xl items-center gap-xl self-stretch">
                <div id="content" className="flex flex-row justify-center items-center gap-xl flex-1 ">
                    {isAvatar ? <div id="text" className="flex flex-col justify-center items-start gap-xxs flex-1">
                        <div id="textandbadge" className="flex items-center gap-md ">
                            <span className="text-text-primary font-family-body text-lg font-semibold leading-lg">Team members</span>
                            <Badges pillcolor={true} isIcon={false} color="brand" label="135 Users"/>
                        </div>
                        <div id="Supporting" className="text-text-tertiary font-family-body text-sm leading-sm ">
                            Manage your team members and their account permission here.
                        </div>
                    </div> : <div id="text" className="flex flex-col justify-center items-start gap-xxs flex-1">
                        <div id="textandbadge" className="flex items-center gap-md ">
                            <span className="text-text-primary font-family-body text-lg font-semibold leading-lg">Team members</span>
                            <div id="badge" className="flex py-xxs px-md justify-center items-center gap-md rounded-full border border-[var(--color-brand-200)] bg-[var(--color-brand-50)]">
                                <div className="text-red-600 text-center font-family-body text-xs text-xs">10/20 seats</div>
                            </div>
                        </div>
                        <div id="Supporting" className="text-text-tertiary font-family-body text-sm leading-sm ">
                            Manage your team members and their account permission here.
                        </div>
                    </div>}
                    
                    <div className="flex flex-col items-end gap-md ">
                        <button className="cursor-pointer" onClick={() => setDropdown(prev => !prev)}><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99996 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 9.99996 9.16667C9.53972 9.16667 9.16663 9.53976 9.16663 10C9.16663 10.4602 9.53972 10.8333 9.99996 10.8333Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.99996 5C10.4602 5 10.8333 4.6269 10.8333 4.16667C10.8333 3.70643 10.4602 3.33333 9.99996 3.33333C9.53972 3.33333 9.16663 3.70643 9.16663 4.16667C9.16663 4.6269 9.53972 5 9.99996 5Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.99996 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99996 15C9.53972 15 9.16663 15.3731 9.16663 15.8333C9.16663 16.2936 9.53972 16.6667 9.99996 16.6667Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                        {dropdown && <div id="dropdown menu" className="">
                            <Dropdownmenu Header="Header" Iconleading="false" Checkboxleading="false"/>
                        </div>}
                    </div>
                </div>
                <div id="divider" className="p-px self-stretch border-border-secondary">
                    
                </div>
            </div>
            <div className="AvatarTrue">

            </div>
        </div>
    )
}




export default Cardheader

