import React from "react";

import TableCell from './TableCell.jsx';
import TableHeaderCell from './TableHeaderCell.jsx';
import Badges from '../Badges/Badges.jsx';
import Avatar from '../Avatar/Avatar.jsx';
import { Cardheader } from '../Navigation/Cardheader.jsx';
import Dropdownmenu from '../Dropdown/Dropdownmenu.jsx';
import { Loading } from '../../Creator/Icons/Icons.jsx';
import {Usefetch} from '../../../Usefetch';
import axios from 'axios';

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
  const { data, loading } = Usefetch();
  return (
    <div className="flex flex-1 flex-col h-full w-full items-start rounded-xl bg-white shadow-xs">
      <Cardheader />
      <div className="flex flex-1 w-full flex-col items-center self-stretch ">
        <table className="w-full  border-collapse  min-w-[1080px]">
          <thead className="w-full">
            <tr className=" w-full">
              <th className="min-w-[361px] p-0 text-left">
                <TableHeaderCell title="Group Name" isCheckbox={true} isCheck={true} indeterminate={true} Text />
              </th>
              <th className=" min-w-[254px]  p-0 text-left"><TableHeaderCell title="Description" isCheckbox={false} Text /></th>
              <th className=" min-w-[71px]  p-0 text-left"><TableHeaderCell title="Members" isCheckbox={false} Text /></th>
              <th className="min-w-[95px]  p-0 text-left"><TableHeaderCell title="Created by" isCheckbox={false} Text /></th>
              <th className=" min-w-[87px]  p-0 text-left"><TableHeaderCell title="Created on" isCheckbox={false} Text /></th>
              <th className="w-[] bg-bg-secondary p-0"></th>
            </tr>
          </thead>

          <tbody className="w-full">
            {loading ? <Loading /> : data.sites.map(item => <tr className="w-full border-b border-b-border-secondary text-text-primary whitespace-nowrap">
              <td className=" min-w-[361px] font-semibold p-0 text-left h-full">
                <TableCell isCheck isAvatar={true} size="md"  username="Class 2nd" credentials={true} /></td>
              <td className=" w-[254px] text-left p-0"><TableCell size="md" children="Class 2nd students delhi public school" /></td>
              <td className="w-[71px] text-left p-0 h-full"><TableCell size="md" isBadge={true} color="grey" badgeModern={true} islabel="343" badgeVariant="Textonly"/></td>
              <td className="w-[95px] self-stretch p-0 text-left h-full"><TableCell size="md" children="Pratham Dave" /></td>
              <td className="w-[87px] p-0 text-left "><TableCell size="md" children="Mar 13, 2025" /></td>
              <td className=" p-0 text-center align-middle"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.0003 10.833C10.4606 10.833 10.8337 10.4599 10.8337 9.99967C10.8337 9.53944 10.4606 9.16634 10.0003 9.16634C9.54009 9.16634 9.16699 9.53944 9.16699 9.99967C9.16699 10.4599 9.54009 10.833 10.0003 10.833Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0003 4.99967C10.4606 4.99967 10.8337 4.62658 10.8337 4.16634C10.8337 3.7061 10.4606 3.33301 10.0003 3.33301C9.54009 3.33301 9.16699 3.7061 9.16699 4.16634C9.16699 4.62658 9.54009 4.99967 10.0003 4.99967Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0003 16.6663C10.4606 16.6663 10.8337 16.2932 10.8337 15.833C10.8337 15.3728 10.4606 14.9997 10.0003 14.9997C9.54009 14.9997 9.16699 15.3728 9.16699 15.833C9.16699 16.2932 9.54009 16.6663 10.0003 16.6663Z" stroke="#A4A7AE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const SiteManagementTables = ({ title, isCheckbox, Text, isAvatar, size, username, credentials, isBadge, children }) => {
  const { data, loading } = Usefetch();
  console.log(data);

  return (
    <div className="flex flex-1 flex-col h-full w-full items-start rounded-xl bg-white shadow-xs ">
      <Cardheader />
      <div className="flex flex-1 w-full flex-col items-center self-stretch overflow-auto">
        <table className="w-full border-collapse table-fixed min-w-[1080px] h-full">
          <thead className="w-full">
            <tr className=" w-full">
              <th className="w-[41%] p-0 text-left">
                <TableHeaderCell title="Site Name" isCheckbox={true} Text isarrowSelectorVertical={true} indeterminate={false} ischeck={false}/></th>
              <th className=" w-[21%] p-0 text-left"><TableHeaderCell title="Address" isCheckbox={false} Text isarrowSelectorVertical={true} indeterminate={false}/></th>
              <th className="w-[21%] p-0 text-left"><TableHeaderCell title="Location" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className=" w-[8%] p-0 text-left"> <TableHeaderCell title="Country" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[10%] bg-bg-secondary p-0"></th>
            </tr>
          </thead>

          <tbody className="w-full">
            {loading ? <Loading /> : data.sites.map(item => <tr className="w-full h-full border-b border-b-border-secondary text-text-primary">
              <td className="w-[41%] font-semibold p-0 text-left h-full">
                <TableCell children={item.siteName} credentials={false} istableaction={true} /></td>
              <td className="w-[21%] text-left p-0 "><TableCell children="asdasjdkl jasdj asdjklasj dlkasjkdl jaslkdjaslkdj awijid jawjiodj ioj aw iodjo ajwio jawiodj awiojdajwdoiwadwjd wriperpowerierop  ewripoewiropi" /></td>
              <td className="w-[21%] text-left p-0 whitespace-nowrap h-full"><TableCell children={[item.city, ", ", item.state]} /></td>
              <td className="w-[8%] self-stretch p-0 text-left h-full"><TableCell children={item.country} /></td>
              <td className="w-[10%] p-0 text-left "><TableCell isAction /></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const UserManagementTables = ({ title, isCheckbox, Text, isAvatar, size, username, credentials, isBadge, children }) => {

  return (
    <div className="flex flex-col h-full w-full items-start rounded-xl bg-white shadow-xs">
      <Cardheader />
      <div className="flex w-full flex-col items-center self-stretch">
        <table className="table-fixed w-full border-collapse">
          <thead className="">
            <tr className=" w-full text-sm">
              <th className="w-[220px] h-[20px] p-0 text-left">
                <TableHeaderCell title="User Name" isCheckbox={true} Text isarrowSelectorVertical /></th>
              <th className="w-[63px] h-[20px] p-0 text-left"><TableHeaderCell title="Status" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[83px] h-[20px] p-0 text-left"><TableHeaderCell title="Site" isCheckbox={false} Text /></th>
              <th className="w-[51px] h-[20px] p-0 text-left"> <TableHeaderCell title="Role" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[49px] h-[20px] p-0 text-left"> <TableHeaderCell title="Class" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[83px] h-[20px] p-0 text-left text-sm"> <TableHeaderCell title="Added on" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[95px] h-[20px] p-0 text-left"> <TableHeaderCell title="Added by" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-[100px] h-[20px] p-0 text-left"> <TableHeaderCell title="Group" isCheckbox={false} Text isarrowSelectorVertical /></th>
              <th className="w-5 py-lg px-xl bg-bg-secondary"></th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="w-full border-b border-b-border-secondary text-text-primary">
              <td className="w-[220px] h-5 font-semibold p-0 text-left "><TableCell isAvatar={true} istableaction={true} isCheck={false} credentials={true} username="Jacob Jones" email="jacob@diacto.com" /></td>
              <td className="w-full h-5 text-left p-0 "><TableCell isBadge={true} color="grey" badgeModern={true} islabel="343" badgeVariant="Textonly"/></td>
              <td className="w-[83px] h-5 text-left p-0 whitespace-nowrap"><TableCell children="ISC_mangaon" /></td>
              <td className="w-[51px]  self-stretch p-0 text-left"><TableCell children="Admin" /></td>
              <td className="w-[49px]  self-stretch p-0 text-left"><TableCell children="III" /></td>
              <td className="w-[83px]  self-stretch p-0 text-left"><TableCell children="March 13, 2025" /></td>
              <td className="w-[95px]  self-stretch p-0 text-left"><TableCell children="Pratham Dave" /></td>
              <td className="w-[49px] p-0 text-left"><TableCell isAvatarGrp /></td>
              <td className="w-[49px] p-0 text-left"><TableCell isdropdown /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


