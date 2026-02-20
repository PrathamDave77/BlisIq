import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

import TableCell from './TableCell.jsx';
import TableHeaderCell from './TableHeaderCell.jsx';
import HeaderTable from './HeaderTable.jsx';
import Badges from '../Badges/Badges.jsx';
import Avatar from '../Avatar/Avatar.jsx';import { Cardheader } from './Cardheader.jsx';


const data = [
  {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
    Collaborators:["A","B","C","D"],
    
  },
  {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
 
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  },

];

const styles = cva("", {
  variants: {
    variant: {

    },
    size: {},
  },

});



const Tables = () => {

  return (
    <div className="inline-flex flex-col h-full w-full items-start rounded-xl border border-[var(--color-gray-200)] bg-white shadow-xs">
      <Cardheader />
      <div className="flex items-start self-stretch">
        <div className="flex flex-col items-start flex-1 w-full ">
          <TableHeaderCell Checkbox={true} Text={true} title="Content" />
          {data.map(item => <TableCell isAvatar={true} credentials={true} isdefault={false} username={item.username} email={item.email} />)}
          
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell Checkbox={false} Text={true} title="Status" />
            {data.map(item => item.Tags && <div className="flex flex-row"><TableCell  isBadge={true}  children="Design"/><TableCell  isBadge={true}  children="Research"/></div>)}
        </div>
        <div className="flex flex-col items-start flex-1 w-full">
            <TableHeaderCell Checkbox={false} Text={true} title="Requested for" />
            {data.map(item => <TableHeaderCell Text={true} title={item.Requested}/>)}
        </div>
        <div className="flex flex-col items-start flex-1 w-full">
            <HeaderTable label="Type" isarrowSelectorVertical={true} />
            {data.map(item => <TableHeaderCell Text={true} title={item.Type}/>)}
        </div>
        <div className="flex flex-col items-start">
            <HeaderTable label="Collaborators" isarrowSelectorVertical={true}/>
            {data.map(item => <div className="flex"><Avatar variant="default" size="md" isOnline={false}/><Avatar variant="default" size="md" isOnline={false}/><Avatar variant="default" size="md" isOnline={false}/><Avatar variant="default" size="md" isOnline={false}/></div>)}
        </div>
      </div>
    </div>
  )
}


export default Tables
