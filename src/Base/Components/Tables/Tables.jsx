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

const styles = cva("", {
  variants: {
    variant: {

    },
    size: {},
  },

});



const Tables = ({ title, isCheckbox, Text, isAvatar, size, username, credentials, isBadge, children }) => {

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
            <TableCell isAvatar={true} size="md" username="Class 2nd" credentials={true}/>
            <TableCell size="md" children="Class 2nd" />
            <TableCell size="md" isBadge={true}/>
            <TableCell size="md" children="Pratham Dave" />
            <TableCell size="md" children="Mar 13, 2025" />
          </td>
        </tr>
      </div>
    </div>
  )
}


export default Tables;
