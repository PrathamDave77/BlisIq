import React from 'react'
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";
import Cardheader from './Cardheader.jsx';
import TableCell from './TableCell.jsx';
import TableHeaderCell from './TableHeaderCell.jsx';
import HeaderTable from './HeaderTable.jsx';


const data = [
  {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
    
  },
  {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
 
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
  }, {
    username: "Jacob Jones",
    email: "jacob@diacto.com",
    isActive: true,
    Role:"UI UX Designer",
    Teams:["Marketing","Sales","Label","Label"],
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
      <Cardheader isAvatar={true} />
      <div className="flex items-start self-stretch">
        <div className="flex flex-col items-start flex-1">
          <TableHeaderCell Checkbox={true} Text={true} title="Name" />
          {data.map(item => <TableCell isAvatar={false} credentials={false} isdefault={true} username={item.username} email={item.email} />)}
        </div>
        <div className="flex items-center flex-1 w-full">
            <HeaderTable label="Status" arrowDownIcon={true} />
            {data.map(item => <Badges />)}
        </div>
        <div className="flex flex-col items-start">
          
        </div>

      </div>
    </div>
  )
}


export default Tables
