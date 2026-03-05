import React, { useState } from "react";
import { SIDEBAR_SECTIONS } from "./SidebarData";
import SidebarMenu from "../Base/Components/Sidebar/SidebarMenu";
import { Cardheader } from "../Base/Components/Navigation/Cardheader";
import Button from "../Base/Components/Buttons/Button";
import Select from '../Base/Components/Input/Select.jsx';

import {
  DownChevron,
  PlusIcon,
} from "../Base/Components/ComponentIcons/CompIcons";
import UpperNavigation from "../Base/Components/Navigation/UpperNavigation";

function Roles() {
  const [currentTab, setCurrentTab] = useState("Roles");

  const navigationItems = [
    { label: "Roles", value: "Roles" },
    { label: "Permissions", value: "Permissions" },
  ];

  return (
    <div className="flex min-h-screen bg-bg-primary font-inter w-full ">
      <SidebarMenu
        sections={SIDEBAR_SECTIONS}
        user={{
          name: "Jacob Jones",
          email: "jacob@diacto.com",
          avatarUrl: "https://i.pravatar.cc/150?u=jacob",
        }}
      />

      <main className=" flex flex-col min-w-0  flex-1">
        <header className="px-8 pt-8 pb-6 flex flex-col gap-8">
          <Cardheader
            title="Role management"
            subtitle="Edit role permissions, create new roles and set a default for new user"
            actions={
              <div className="flex gap-3">
                <Button variant="primary" iconLeft={PlusIcon} size="md">
                  New Role
                </Button>
              </div>
            }
          />

          <UpperNavigation
          variant="underline"
          items={navigationItems}
          value={currentTab}
          onChange={(val) => setCurrentTab(val)}
          className="w-auto"
        />
        </header>

        
        <div></div>
      </main>
      <div id="Section" className="flex px-4xl flex-col items-start gap-3xl self-stretch">
          <div id="Section-header" className="flex items-center gap-2xl self-stretch">
            <div className="flex items-center gap-md flex-1">
              <div className="text-text-primary font-family-body text-lg font-semibold leading-lg">All Roles</div>
              <div className="text-text-quaternary font-family-body text-lg font-semibold leading-lg">43</div>
            </div>
            <div className="flex justify-end items-center gap-xl flex-1">
              <div className="flex items-center gap-lg">
                <Select label="Search group" size="sm" searchable/>
                <Button/>
              </div>
            </div>
            <div></div>
          </div>
      </div>
    </div>
  );
}

export default Roles;
