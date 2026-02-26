import React from "react";

import TableCell from './TableCell.jsx';
import TableHeaderCell from './TableHeaderCell.jsx';
import Avatar from "../Avatar/Avatar.jsx";
import { Cardheader } from "../Navigation/Cardheader.jsx";


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




const Tables = () => {

  return (
    <div className="flex flex-col h-full w-full items-start rounded-xl bg-white shadow-xs">
      <Cardheader />
      <div className="flex items-start self-stretch">
        <div className="flex flex-col items-start flex-1 w-full rounded-tl-md rounded-bl-md">
          <TableHeaderCell title="User name" Text={true} Checkbox={true}/>
          {data.map((item) => (
            <TableCell key={item.username + item.email} isAvatar={true} credentials={true} isdefault={false} username={item.username} email={item.email} />
          ))}
          
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell title="Status" Text={true} Checkbox={false}/>
            {data.map((item) => item.Tags && (
            <div key={item.username} className="flex flex-row">
              <TableCell isBadge={true}>Design</TableCell>
              <TableCell isBadge={true}>Research</TableCell>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell title="Content" Text={true} Checkbox={false}/>
            {data.map((item) => (
            <TableHeaderCell key={item.username} Text={true} title={item.Requested} />
          ))}
        </div>
        <div className="flex flex-col items-start flex-1 w-full ">
            <TableHeaderCell title="Type" Text={true} Checkbox={false}/>
            {data.map((item) => (
            <TableHeaderCell key={item.username} Text={true} title={item.Type} />
          ))}
        </div>
        <div className="flex flex-col items-start flex-1 w-full">
            <TableHeaderCell title="Collaborators" Text={true} Checkbox={false}/>
            {data.map((item) => (
            <div key={item.username} className="flex">
              <Avatar variant="default" size="md" isOnline={false} />
              <Avatar variant="default" size="md" isOnline={false} />
              <Avatar variant="default" size="md" isOnline={false} />
              <Avatar variant="default" size="md" isOnline={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Tables;
