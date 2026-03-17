import React, { useState } from "react";
import SidebarMenu from "../../Base/Components/Sidebar/SidebarMenu.jsx";
import UpperNavigation from "../../Base/Components/Navigation/UpperNavigation.jsx";
import Button from "../../Base/Components/Buttons/Button.jsx";
import Select  from "../../Base/Components/Input/Select.jsx";
import {GroupManagementTables} from "../../Base/Components/Tables/Tables.jsx";
import {
  Cardheader,
  Sectionheader,
} from "../../Base/Components/Navigation/Cardheader.jsx";
import { SIDEBAR_SECTIONS } from "../SidebarData.jsx";
import { ImportIcon, PlusIcon } from "../../Base/Components/ComponentIcons/CompIcons.jsx";
import {FilterIcon} from '../../Base/Creator/Icons/Icons.jsx';
import Addnewgroup from './Addnewgroup.jsx';

const NAV_ITEMS = [
  { label: "View all", value: "all", count: 214 },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Imported", value: "imported" },
];

function Groups() {
  const [currentTab, setCurrentTab] = useState("all");
  const [addgroup,setAddGroup] = useState(false);

  return (
    <div className="font-inter flex min-h-screen bg-bg-primary font-inter w-full">

      <main className=" flex flex-col min-w-0 flex-1">
        <header className="px-8 pt-8 pb-6 flex flex-col gap-8">
          <Cardheader
            title="Group management"
            subtitle="Create and manage groups for your organization."
            actions={
              <div className="flex gap-3">
                <Button variant="primary" Iconleft={PlusIcon} size="md" onClick={() => setAddGroup(prev => !prev)}>
                  Add user
                </Button>
              </div>
            }
          />

          <div className="flex gap-2xl">
            <Sectionheader
              title="All Groups"
              badge={
                <span className="text-text-tertiary font-normal text-md">
                  43
                </span>
              }
            />
            <div className="flex gap-3 items-center">
                <Select
                  placeholder="Search group"
                  searchable
                  className="w-[320px]"
                />
                <Button variant="secondary" Iconleft={FilterIcon}>
                  Filters
                </Button>
              </div>
          </div>
        </header>

        <section className="px-8 flex-1 overflow-auto">
          <div className=" rounded-xl overflow-hidden">
             <GroupManagementTables  />
              {addgroup && <Addnewgroup setAddGroup={setAddGroup}/>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Groups;
