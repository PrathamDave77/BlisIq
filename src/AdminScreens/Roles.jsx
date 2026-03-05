import React, { useState } from "react";
import { SIDEBAR_SECTIONS } from "./SidebarData";
import SidebarMenu from "../Base/Components/Sidebar/SidebarMenu";
import { Cardheader } from "../Base/Components/Navigation/Cardheader";
import Button from "../Base/Components/Buttons/Button";
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
    </div>
  );
}

export default Roles;
