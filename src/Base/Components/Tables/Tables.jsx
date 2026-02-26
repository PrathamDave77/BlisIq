import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

import TableCell from './TableCell.jsx';
import TableHeaderCell from './TableHeaderCell.jsx';
import Badges from '../Badges/Badges.jsx';
import Avatar from '../Avatar/Avatar.jsx';
import { Cardheader } from '../Navigation/Cardheader.jsx';


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



const Tables = ({title}) => {

  return (
    <div className="flex flex-col h-full w-full items-start rounded-xl bg-white shadow-xs">
      <Cardheader />
      <div className="flex items-start self-stretch">
        <div className="flex flex-col items-start flex-1 w-full rounded-tl-md rounded-bl-md">
          <TableHeaderCell title={title} Text={true} Checkbox={true}/>
          {data.map(item => <TableCell isAvatar={true} credentials={true} isdefault={false} username={item.username} email={item.email} />)}
          
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell title={title} Text={true} Checkbox={false}/>
            {data.map(item => item.Tags && <TableCell isBadge={true} children="Design"/>)}
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell title={title} Text={true} Checkbox={false}/>
            {data.map(item => <TableHeaderCell Text={true} title={item.Requested}/>)}
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell title={title} Text={true} Checkbox={false}/>
            {data.map(item => <TableHeaderCell Text={true} title={item.Type}/>)}
        </div>
      </div>
    </div>
  )
}


export default Tables;
