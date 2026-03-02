import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

import TableCell from './TableCell.jsx';
import TableHeaderCell from './TableHeaderCell.jsx';
import Badges from '../Badges/Badges.jsx';
import Avatar from '../Avatar/Avatar.jsx';
import { Cardheader } from '../Navigation/Cardheader.jsx';
import Dropdownmenu from '../Dropdown/Dropdownmenu.jsx';

const data = [
  {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
    Collaborators: ["A", "B", "C", "D"],

  },
  {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],

  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type: "Course",
    Tags: ["Design", "Research"],
  },

];



export const GroupManagementTables = ({ title, isCheckbox, Text, isAvatar, size, username, credentials, isBadge, children }) => {

  return (
    <div className="flex flex-1 flex-col h-full w-full items-start rounded-xl bg-white shadow-xs">
      <Cardheader />
      <div className="flex flex-1 flex-col items-start self-stretch">
        <th className="flex items-start self-stretch">
          <TableHeaderCell title="Group Name" isCheckbox={true} Text />
          <TableHeaderCell title="Description" isCheckbox={false} Text />
          <TableHeaderCell title="Members" isCheckbox={false} Text />
          <TableHeaderCell title="Created by" isCheckbox={false} Text />
          <TableHeaderCell title="Created on" isCheckbox={false} Text />
        </th>
        <tr className="flex flex-1 w-full self-stretch items-center h-[72px] border-px border-b-border-secondary">
          <td className="flex flex-1">
            <TableCell isAvatar={true} size="md" username="Class 2nd" credentials={true} />
            <TableCell size="md" children="Class 2nd" />
            <TableCell size="md" isBadge={true} />
            <TableCell size="md" children="Pratham Dave" />
            <TableCell size="md" children="Mar 13, 2025" />
            <div className="flex py-lg px-xl justify-center items-center gap-lg border-b border-b-border-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.0003 10.833C10.4606 10.833 10.8337 10.4599 10.8337 9.99967C10.8337 9.53944 10.4606 9.16634 10.0003 9.16634C9.54009 9.16634 9.16699 9.53944 9.16699 9.99967C9.16699 10.4599 9.54009 10.833 10.0003 10.833Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0003 4.99967C10.4606 4.99967 10.8337 4.62658 10.8337 4.16634C10.8337 3.7061 10.4606 3.33301 10.0003 3.33301C9.54009 3.33301 9.16699 3.7061 9.16699 4.16634C9.16699 4.62658 9.54009 4.99967 10.0003 4.99967Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0003 16.6663C10.4606 16.6663 10.8337 16.2932 10.8337 15.833C10.8337 15.3728 10.4606 14.9997 10.0003 14.9997C9.54009 14.9997 9.16699 15.3728 9.16699 15.833C9.16699 16.2932 9.54009 16.6663 10.0003 16.6663Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </td>
        </tr>
      </div>
    </div>
  )
}

export const SiteManagementTables = ({ title, isCheckbox, Text, isAvatar, size, username, credentials, isBadge, children }) => {

  return (
    <div className="flex flex-1 flex-col h-full w-full items-start rounded-xl bg-white shadow-xs">
      <Cardheader />
      <div className="flex w-full flex-col items-center self-stretch">
        <table className="table-fixed w-full border-collapse">
          <thead className="">
            <tr className=" w-full">
              <th className="w-[337px]  p-0 text-left">
                <TableHeaderCell title="Site Name" isCheckbox={true} Text isarrowSelectorVertical /></th>
              <th className=" w-[168px] p-0 text-left"><TableHeaderCell title="Address" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[168px] p-0 text-left"><TableHeaderCell title="Location" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className=" w-[64px] p-0 text-left"> <TableHeaderCell title="Country" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="py-lg px-xl bg-bg-secondary border-border-secondary border-b"></th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="w-full border-px border-b-border-secondary text-text-primary">
              <td className="w-[337px] font-semibold p-0 text-left">
                <TableCell children="ISC_Mangaon" credentials={false} istableaction={true} /></td>
              <td className="w-[168px] text-left p-0 text-left"><TableCell children="3605 Parker Rd." /></td>
              <td className="w-[168px] text-left p-0 text-left whitespace-nowrap"><TableCell children="Pune, Maharashtra" /></td>
              <td className="w-[64px]  self-stretch p-0 text-left"><TableCell children="India" /></td>
              <td className="p-0 text-left"><TableCell isAction={true} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
