import React, { useState } from "react";
import SidebarMenu from "../Base/Components/Sidebar/SidebarMenu.jsx";
import UpperNavigation from "../Base/Components/Navigation/UpperNavigation.jsx";
import Button from "../Base/Components/Buttons/Button.jsx";
import Select  from "../Base/Components/Input/Select.jsx";

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 12.5V14.1667M10 9.16667V14.1667M13.3333 5.83333V14.1667M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="#A4A7AE" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#A4A7AE" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const SIDEBAR_SECTIONS = [
  {
    label: "Main",
    items: [
      { id: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
      { id: "publish", label: "Publish course", icon: <DashboardIcon /> }, // Active for this page
      { id: "assigned", label: "Assigned", icon: <DashboardIcon /> },
    ],
  },
  {
    label: "Manage",
    items: [
      { id: "users", label: "Users", icon: <DashboardIcon /> },
      { id: "groups", label: "Groups", icon: <DashboardIcon /> },
      { id: "roles", label: "Roles", icon: <DashboardIcon /> },
    ],
  },
];

const NAV_ITEMS = [
  { label: "Pending request", value: "pending" },
  { label: "Verified & published", value: "verified" },
  { label: "Declined", value: "declined" },
];


function CourseVerif() {
  const [currentTab, setCurrentTab] = useState("pending");

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

      <main className="flex-1 flex flex-col min-w-0">
        <header className="px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-display-sm font-semibold text-text-primary">
              Content verification
            </h1>
            <p className="text-text-tertiary text-md">
              Verify and publish content in your organization
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <UpperNavigation
              variant="underline" 
              items={NAV_ITEMS}
              value={currentTab}
              onChange={setCurrentTab}
              className="w-full border-b border-border-secondary"
            />

            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-text-primary">
                Pending verification <span className="text-text-tertiary font-normal ml-1">18</span>
              </h2>

              <div className="flex gap-3 items-center">
                <Select
                  placeholder="Search course"
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
          <div className="border border-border-secondary rounded-xl overflow-hidden bg-white min-h-[400px]">
            <div className="p-10 text-center text-text-tertiary">
              Course Verification Table...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CourseVerif;