import React, { useState } from "react";
import SidebarMenu from "../Base/Components/Sidebar/SidebarMenu.jsx";
import UpperNavigation from "../Base/Components/Navigation/UpperNavigation.jsx";
import Button from "../Base/Components/Buttons/Button.jsx";
import { Select } from "../Base/Components/Input/Select.jsx";
import {SiteManagementTables, GroupManagementTables} from "../Base/Components/Tables/Tables.jsx";

import {
  Cardheader,
  Sectionheader,
} from "../Base/Components/Navigation/Cardheader.jsx";
import { SIDEBAR_SECTIONS } from "./SidebarData.jsx";
import { ImportIcon, PlusIcon } from "../Base/Components/ComponentIcons/CompIcons.jsx";

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
      stroke="#A4A7AE"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NAV_ITEMS = [
  { label: "View all", value: "all", count: 214 },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Imported", value: "imported" },
];

function Users() {
  const [currentTab, setCurrentTab] = useState("all");

  return (
    <div className="font-inter flex min-h-screen bg-bg-primary font-inter w-full ">
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
            title="User management"
            subtitle="Create and manage users for your organization."
            actions={
              <div className="flex gap-3">
                <Button variant="secondary" iconLeft={ImportIcon} size="md">
                  Import
                </Button>
                <Button variant="primary" iconLeft={PlusIcon} size="md">
                  Add user
                </Button>
              </div>
            }
          />

          <div className="flex flex-col gap-2xl">
            <Sectionheader
              title="All users"
              badge={
                <span className="text-text-tertiary font-normal text-md">
                  214
                </span>
              }
            />

            <div className="flex items-center justify-between">
              <UpperNavigation
                variant="pill"
                items={NAV_ITEMS}
                value={currentTab}
                onChange={setCurrentTab}
                className="w-auto"
              />

              <div className="flex gap-3 items-center">
                <Select
                  placeholder="Search user"
                  searchable
                  className="w-[320px]"
                />
                <Button variant="secondary" iconLeft={FilterIcon}>
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="px-8 flex-1 overflow-auto">
          <div className=" rounded-xl overflow-hidden">
             <SiteManagementTables  />
           
          </div>
        </section>
      </main>
    </div>
  );
}

export default Users;
