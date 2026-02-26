import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import File_icons from "../../../../public/File_icons.png";
import Badges from "../Badges/Badges.jsx";
import TableCellActions from "./TableCellActions.jsx";
import CheckboxImg from "../../../../public/Checkbox.png";

    const actions = cva(
        `inline-flex items-center w-[280px] gap-lg py-lg px-xl border-b-[1px] border-b-border-secondary bg-bg-primary text-text-tertiary text-center font-family-body text-sm leading-sm`,
        {
            variants: {
                variant: {
                    
                },
                size: {
                    md: "",
                },
            }
        }

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
    }

    export default TableCell
