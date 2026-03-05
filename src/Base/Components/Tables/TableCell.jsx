<<<<<<< HEAD
import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from '../../../lib/utils.js';
import File_icons from '../../../../public/File_icons.png';
import Badges from '../Badges/Badges.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
import TableCellActions from './TableCellActions.jsx';
import Button from '../Buttons/Button.jsx';
import Avatar from '../Avatar/Avatar.jsx';
import Avataradd from '../Avatar/Avataradd.jsx';
=======
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import File_icons from "../../../../public/File_icons.png";
import Badges from "../Badges/Badges.jsx";
import TableCellActions from "./TableCellActions.jsx";
import CheckboxImg from "../../../../public/Checkbox.png";
>>>>>>> b9025fea184a9a18e2a7baf63393c4e864645098


const actions = cva(
    `inline-flex flex-1 items-center gap-lg py-lg px-xl bg-bg-primary text-text-tertiary text-center font-family-body text-sm leading-sm h-[48px]`,
    {
        variants: {
            variant: {

            },
            size: {
                md: "",
            },
        }
<<<<<<< HEAD
=======

    )

    const TableCell = ({ variant, isdefault, istableaction, email, username, isAvatar, isAvatarGrp, isFile, isPayment, isBadge, istrend, amount, credentials, children: _children }) => {
        return (
            <div className={cn(actions({}))}>
                {isdefault && <div className={cn(actions({ variant }))}>
                        <img src={CheckboxImg} alt="checkbox" />
                        <div className="flex flex-col items-start"><div className="line-clamp-1 text-text-primary font-semibold ">{username}</div><div className="self-stretch line-clamp-1 overflow-ellipsis text-text-tertiary font-normal">{email}</div>
                        </div>
                    </div>}
                {isBadge && <div className="flex py-xxs px-md justify-center items-center gap-md rounded-full border border-success-200 bg-success-50 text-(--color-success-700) content-center font-family-body text-xs font-normal leading-xs">Active</div>} 
                

                {istableaction && <><TableCellActions Radio={false} Toggle="Toggle" isToggle={false}/></>}

                {isAvatar && <div id="Avatar-Label-Group" className="flex items-center gap-lg font-family-body self-stretch leading-sm text-sm ">
                    <img src={CheckboxImg} alt="checkbox" />
                    <div id="Avatar" className="justify-center items-center flex "><div className="shrink-0 rounded-full border border-solid border-border-secondary-alt bg-[url('../../../public/pkd.jpg')] bg-lightgray bg-position-[50%] bg-cover bg-no-repeat h-10 w-10"></div></div>
                    {isFile && <div className="flex items-center gap-2"><img src={File_icons} /></div>}
                    {isPayment && <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
                        <path d="M3.2002 0.400391H24C25.5464 0.400391 26.7998 1.6538 26.7998 3.2002V16C26.7998 17.5464 25.5464 18.7998 24 18.7998H3.2002C1.6538 18.7998 0.400391 17.5464 0.400391 16V3.2002C0.400391 1.6538 1.6538 0.400391 3.2002 0.400391Z" fill="white" />
                        <path d="M3.2002 0.400391H24C25.5464 0.400391 26.7998 1.6538 26.7998 3.2002V16C26.7998 17.5464 25.5464 18.7998 24 18.7998H3.2002C1.6538 18.7998 0.400391 17.5464 0.400391 16V3.2002C0.400391 1.6538 1.6538 0.400391 3.2002 0.400391Z" stroke="#E9EAEB" strokeWidth="0.8" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.60017 12.6866H6.95237L5.71673 7.83388C5.65808 7.61066 5.53355 7.41331 5.35038 7.3203C4.89324 7.08656 4.3895 6.90054 3.83997 6.80673V6.6199H6.49443C6.86079 6.6199 7.13555 6.90054 7.18135 7.22648L7.82247 10.7269L9.46946 6.6199H11.0715L8.60017 12.6866ZM11.9873 12.6866H10.4311L11.7126 6.6199H13.2688L11.9873 12.6866ZM15.2821 8.30055C15.3279 7.9738 15.6027 7.78697 15.9232 7.78697C16.427 7.74006 16.9757 7.83388 17.4337 8.06681L17.7084 6.76063C17.2505 6.5738 16.7467 6.47998 16.2896 6.47998C14.7792 6.47998 13.6801 7.32031 13.6801 8.48657C13.6801 9.37381 14.4586 9.83967 15.0082 10.1203C15.6027 10.4002 15.8317 10.587 15.7859 10.8668C15.7859 11.2866 15.3279 11.4734 14.8708 11.4734C14.3212 11.4734 13.7717 11.3335 13.2688 11.0997L12.994 12.4067C13.5435 12.6397 14.1381 12.7335 14.6876 12.7335C16.3812 12.7796 17.4337 11.9401 17.4337 10.68C17.4337 9.09316 15.2821 9.00015 15.2821 8.30055ZM22.88 12.6866L21.6443 6.6199H20.3171C20.0423 6.6199 19.7676 6.80673 19.676 7.08656L17.3879 12.6866H18.9899L19.3096 11.8002H21.278L21.4611 12.6866H22.88ZM20.5461 8.25365L21.0032 10.5401H19.7218L20.5461 8.25365Z" fill="#172B85" />
                    </svg></div>} 
                    
                    {credentials && <div className="flex flex-col ">
                        <div className="line-clamp-1 text-text-primary font-semibold self-stretch">{username}</div>
                        <div className="self-stretch line-clamp-1 overflow-ellipsis text-text-tertiary">{email}</div>
                    </div>}
                    
                </div>} 
                
                {istrend==="postive" && <div className="flex flex-row gap-lg">
                    <div>{amount}</div>
                    <Badges variant="Iconarrowup" isIcon="arrowup" pillcolor={true} color="teal" label="20%"/> 
                </div>}
                {istrend==="negative" && <div className="flex flex-row gap-lg">
                    <div>{amount}</div>
                    <Badges variant="Iconarrowdown" isIcon="arrowdown" pillcolor={true} color="error" label="20%"/> 
                </div>}
                {isAvatarGrp && <div></div>}
            </div>
        )
>>>>>>> b9025fea184a9a18e2a7baf63393c4e864645098
    }

)

const TableCell = ({ variant, isdefault, istableaction, email, username, isAvatar, isAvatarGrp, isFile, isPayment, isBadge, istrend, amount, credentials, isAction, isCheck, isdropdown,children }) => {
    return (
        <div className={cn(actions({}))}>
            {isdefault && <div className="w-full">
                <div className="flex flex-col items-start"><div className="line-clamp-1 text-text-primary font-semibold ">{username}</div><div className="self-stretch line-clamp-1 overflow-ellipsis text-text-tertiary font-normal text-left">{email}</div>
                </div>
            </div>}
            {isBadge && <Badges isIcon="dot" color="success" badgeModern={true} Icondot={true}  label="Active" />}

            {isCheck && <Checkbox size="md" variant="isCheckbox" />}

            {istableaction ? <><TableCellActions Radio={false} Toggle="Toggle" isToggle={false} />{children}</> : children}

            {isAvatar && <div id="Avatar-Label-Group" className="flex items-center gap-lg font-family-body self-stretch leading-sm text-sm ">
                {isCheck && <Checkbox size="md" variant="isCheckbox" />}
                <div id="Avatar" className="justify-center items-center flex "><div className="shrink-0 rounded-full border-px border-border-secondary-alt bg-[url('../../../public/pkd.jpg')] bg-lightgray bg-position-[50%] bg-cover bg-no-repeat h-10 w-10"></div></div>
                {isFile && <div className="flex items-center gap-2"><img src={File_icons} /></div>}
                {isPayment && <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
                    <path d="M3.2002 0.400391H24C25.5464 0.400391 26.7998 1.6538 26.7998 3.2002V16C26.7998 17.5464 25.5464 18.7998 24 18.7998H3.2002C1.6538 18.7998 0.400391 17.5464 0.400391 16V3.2002C0.400391 1.6538 1.6538 0.400391 3.2002 0.400391Z" fill="white" />
                    <path d="M3.2002 0.400391H24C25.5464 0.400391 26.7998 1.6538 26.7998 3.2002V16C26.7998 17.5464 25.5464 18.7998 24 18.7998H3.2002C1.6538 18.7998 0.400391 17.5464 0.400391 16V3.2002C0.400391 1.6538 1.6538 0.400391 3.2002 0.400391Z" stroke="#E9EAEB" stroke-width="0.8" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.60017 12.6866H6.95237L5.71673 7.83388C5.65808 7.61066 5.53355 7.41331 5.35038 7.3203C4.89324 7.08656 4.3895 6.90054 3.83997 6.80673V6.6199H6.49443C6.86079 6.6199 7.13555 6.90054 7.18135 7.22648L7.82247 10.7269L9.46946 6.6199H11.0715L8.60017 12.6866ZM11.9873 12.6866H10.4311L11.7126 6.6199H13.2688L11.9873 12.6866ZM15.2821 8.30055C15.3279 7.9738 15.6027 7.78697 15.9232 7.78697C16.427 7.74006 16.9757 7.83388 17.4337 8.06681L17.7084 6.76063C17.2505 6.5738 16.7467 6.47998 16.2896 6.47998C14.7792 6.47998 13.6801 7.32031 13.6801 8.48657C13.6801 9.37381 14.4586 9.83967 15.0082 10.1203C15.6027 10.4002 15.8317 10.587 15.7859 10.8668C15.7859 11.2866 15.3279 11.4734 14.8708 11.4734C14.3212 11.4734 13.7717 11.3335 13.2688 11.0997L12.994 12.4067C13.5435 12.6397 14.1381 12.7335 14.6876 12.7335C16.3812 12.7796 17.4337 11.9401 17.4337 10.68C17.4337 9.09316 15.2821 9.00015 15.2821 8.30055ZM22.88 12.6866L21.6443 6.6199H20.3171C20.0423 6.6199 19.7676 6.80673 19.676 7.08656L17.3879 12.6866H18.9899L19.3096 11.8002H21.278L21.4611 12.6866H22.88ZM20.5461 8.25365L21.0032 10.5401H19.7218L20.5461 8.25365Z" fill="#172B85" />
                </svg></div>}

                {credentials && <div className="flex flex-col text-left">
                    <div className="line-clamp-1 text-text-primary font-semibold self-stretch">{username}</div>
                    <div className="self-stretch line-clamp-1 overflow-ellipsis text-text-tertiary">{email}</div>
                </div>}

            </div>}

            {istrend === "postive" && <div className="flex flex-row gap-lg">
                <div>{amount}</div>
                <Badges variant="Iconarrowup" isIcon="arrowup" pillcolor={true} color="teal" label="20%" />
            </div>}
            {istrend === "negative" && <div className="flex flex-row gap-lg">
                <div>{amount}</div>
                <Badges variant="Iconarrowdown" isIcon="arrowdown" pillcolor={true} color="error" label="20%" />
            </div>}
            {isAvatarGrp && <div><Avatar size="md" /></div>}
            {isAction && <div className="flex gap-lg"><Button variant="gray_link" size="sm" >Delete</Button><Button variant="link" size="sm">Edit</Button></div>}
            {isdropdown && <div className="py-[3.33px] "><svg xmlns="http://www.w3.org/2000/svg" width="4" height="15" viewBox="0 0 4 15" fill="none">
                <path d="M1.66671 8.33331C2.12694 8.33331 2.50004 7.96022 2.50004 7.49998C2.50004 7.03974 2.12694 6.66665 1.66671 6.66665C1.20647 6.66665 0.833374 7.03974 0.833374 7.49998C0.833374 7.96022 1.20647 8.33331 1.66671 8.33331Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.66671 2.49998C2.12694 2.49998 2.50004 2.12688 2.50004 1.66665C2.50004 1.20641 2.12694 0.833313 1.66671 0.833313C1.20647 0.833313 0.833374 1.20641 0.833374 1.66665C0.833374 2.12688 1.20647 2.49998 1.66671 2.49998Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.66671 14.1666C2.12694 14.1666 2.50004 13.7935 2.50004 13.3333C2.50004 12.8731 2.12694 12.5 1.66671 12.5C1.20647 12.5 0.833374 12.8731 0.833374 13.3333C0.833374 13.7935 1.20647 14.1666 1.66671 14.1666Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>}
        </div>
    )
}

export default TableCell
