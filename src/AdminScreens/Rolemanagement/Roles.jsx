import React from "react";
import { useState } from "react";
import { SIDEBAR_SECTIONS } from "../SidebarData.jsx";
import SidebarMenu from "../../Base/Components/Sidebar/SidebarMenu.jsx";
import Button from "../../Base/Components/Buttons/Button.jsx";
import Select from '../../Base/Components/Input/Select.jsx';
import Avatar_1 from '../../../public/Avatar_1.png';
import Avatar_2 from '../../../public/Avatar_2.svg';
import Avatar_3 from '../../../public/Avatar_3.svg';
import Avatar_4 from '../../../public/Avatar_4.svg';
import pkd from '../../../public/pkd.jpg';
import {
  Cardheader,
  Sectionheader,
} from "../../Base/Components/Navigation/Cardheader.jsx";
import {
  DownChevron,
  PlusIcon,
  Eye,
  Edit,
  Trash,
} from "../../Base/Components/ComponentIcons/CompIcons.jsx";
import UpperNavigation from "../../Base/Components/Navigation/UpperNavigation.jsx";
import { FilterIcon, Columns, Filters, VerticalDots } from '../../Base/Creator/Icons/Icons.jsx';
import Avatar from '../../Base/Components/Avatar/Avatar.jsx';
import AddNewRole from './AddNewRole.jsx';
import Dropdownmenu from '../../Base/Components/Dropdown/Dropdownmenu.jsx';
import Dropdownlistitem from '../../Base/Components/Dropdown/Dropdownlistitem.jsx';

const NAV_ITEMS = [
  { label: "Roles", value: "active" },
  { label: "Permissions", value: "inactive" },
];

const Rolelist = [
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Class Teacher",
    RoleCreator: "Created by you",
    RoleDesc: "Track learner progress and assign content.",
  },
  {
    RoleTitle: "Instructor ",
    RoleCreator: "Default Role",
    RoleDesc: "Create and manage content, view reports",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
  {
    RoleTitle: "Admin",
    RoleCreator: "Default Role",
    RoleDesc: "Full access to everything",
  },
];

const List = [
  { label: "View", Iconleading: true, Checkboxleading: false, Isdivider: false, Icon: Eye, },
  { label: "Edit", Iconleading: true, Checkboxleading: false, Isdivider: false, Icon: Edit, },
  { label: "Delete", Iconleading: true, Checkboxleading: false, Isdivider: false, Icon: Trash, },
]
const Roles = () => {
  const [currentTab, setCurrentTab] = useState("Roles");

  const [newRole, setNewRole] = useState(false);

  const [dropdown, setDropdown] = useState(null);

  const navigationItems = [
    { label: "Roles", value: "Roles" },
    { label: "Permissions", value: "Permissions" },
  ];
  console.log(Rolelist);

  const handleNewRole = () => {
    setNewRole(prev => !prev);
  }

  return (
    <div className="flex h-screen bg-bg-primary font-inter w-screen overflow-hidden">

      <main className=" flex flex-col min-w-auto flex-1 gap-8 w-full overflow-hidden">
        <header className="px-4xl pt-4xl flex flex-col gap-8 w-full shrink-0">
          <Cardheader
            title="Role management"
            subtitle="Edit role permissions, create new roles and set a default for new user"
            actions={
              <div className="flex gap-3">
                <Button variant="primary" iconleft={PlusIcon} size="md" onClick={() => handleNewRole()}>
                  New Role
                </Button>
              </div>
            }
          />
          <UpperNavigation
            variant="underline"
            items={NAV_ITEMS}
            value={currentTab}
            onChange={setCurrentTab}
            className="w-auto"
          />



        </header>
        <div id="Section" className="flex flex-col flex-1 px-4xl items-start gap-3xl self-stretch w-full overflow-hidden min-h-0">
          <Sectionheader
            title="All roles"
            badge={
              <span className="text-text-quaternary text-lg font-semibold leading-lg text-md ">
                43
              </span>
            }
            searchable
            Iconright={DownChevron}
            children="All Role"
          />
          <div className="flex-1 overflow-y-auto pb-[48px] w-full h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-start content-start gap-3xl self-stretch flex-wrap w-full h-full">
              {Rolelist.map((item, index) => (
                <div key={index} className="flex w-full min-w-[304px] h-full p-2xl flex-col items-start gap-2xl rounded-xl border border-border-secondary bg-bg-primary shadow-xs justify-between relative">

                  {/* Title Row */}
                  <div className="flex flex-col items-start w-full">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-text-primary font-semibold text-md leading-md">
                        {item.RoleTitle}
                      </span>
                      <div className="">
                        <div className="hover:cursor-pointer" key={index} onClick={() => setDropdown(dropdown === index ? null : index)}><VerticalDots /></div>
                        <div className="absolute z-100 mt-1 right-5">{dropdown === index && <div><Dropdownmenu Iconleading={true} isDetached List={List} />
                        </div>}

                        </div>
                      </div>
                    </div>
                    <div className="line-clamp-1 text-text-tertiary text-sm leading-sm font-[400px]">
                      {item.RoleCreator}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="line-clamp-2 text-text-tertiary text-sm font-[400px] leading-sm">
                    {item.RoleDesc}
                  </div>

                  {/* Footer */}
                  <div className=" flex justify-between items-center w-full">

                    {/* Stacked Avatars */}
                    <div className="flex items-center gap-lg">
                      <div className="flex -space-x-2">
                        <Avatar isOnline={false} size="xs" className="ring-2 ring-white" Icon={Avatar_1} />
                        <Avatar isOnline={false} size="xs" className="ring-2 ring-white" Icon={Avatar_2} />
                        <Avatar isOnline={false} size="xs" className="ring-2 ring-white" Icon={Avatar_3} />
                        <Avatar isOnline={false} size="xs" className="ring-2 ring-white" Icon={Avatar_4} />
                      </div>
                      <div className="text-text-tertiary text-sm font-normal leading-sm">
                        32 Users
                      </div>
                    </div>

                    {/* Date */}
                    <div className="text-text-tertiary text-sm font-normal leading-sm">
                      Mar 12, 2025
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {newRole && <AddNewRole newRole={newRole} setNewRole={setNewRole} />}
        </div>


      </main>

    </div>
  );
}

export default Roles;
