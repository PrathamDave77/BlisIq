import React, { useState } from "react";
import SidebarMenu from "../Base/Components/sidebar/SidebarMenu.jsx";
import UpperNavigation from "../Base/Components/UpperNavigation.jsx";
import Button from "../Base/Components/Button.jsx";
import { Select } from "../Base/Components/Select.jsx";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M6.66829 0.834961V12.5016M0.834961 6.66829H12.5016"
      stroke="#84CAFF"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ImportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
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
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M6.66667 12.5V14.1667M10 9.16667V14.1667M13.3333 5.83333V14.1667M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M16.6663 17.5C16.6663 16.337 16.6663 15.7555 16.5228 15.2824C16.1996 14.217 15.366 13.3834 14.3006 13.0602C13.8275 12.9167 13.246 12.9167 12.083 12.9167H7.91634C6.75337 12.9167 6.17189 12.9167 5.69872 13.0602C4.63339 13.3834 3.79971 14.217 3.47654 15.2824C3.33301 15.7555 3.33301 16.337 3.33301 17.5M13.7497 6.25C13.7497 8.32107 12.0707 10 9.99967 10C7.92861 10 6.24967 8.32107 6.24967 6.25C6.24967 4.17893 7.92861 2.5 9.99967 2.5C12.0707 2.5 13.7497 4.17893 13.7497 6.25Z"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const GroupsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="17"
    viewBox="0 0 19 17"
    fill="none"
  >
    <path
      d="M17.5016 15.835V14.1683C17.5016 12.6151 16.4393 11.31 15.0016 10.94M12.085 1.07726C13.3066 1.57175 14.1683 2.76939 14.1683 4.16829C14.1683 5.5672 13.3066 6.76484 12.085 7.25933M13.335 15.835C13.335 14.2818 13.335 13.5053 13.0812 12.8927C12.7429 12.0759 12.094 11.427 11.2772 11.0887C10.6647 10.835 9.8881 10.835 8.33496 10.835H5.83496C4.28182 10.835 3.50525 10.835 2.89268 11.0887C2.07592 11.427 1.42701 12.0759 1.0887 12.8927C0.834961 13.5053 0.834961 14.2818 0.834961 15.835M10.4183 4.16829C10.4183 6.00924 8.92591 7.50163 7.08496 7.50163C5.24401 7.50163 3.75163 6.00924 3.75163 4.16829C3.75163 2.32734 5.24401 0.834961 7.08496 0.834961C8.92591 0.834961 10.4183 2.32734 10.4183 4.16829Z"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const RolesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="19"
    viewBox="0 0 15 19"
    fill="none"
  >
    <path
      d="M7.50163 1.19496V17.0283M14.1683 9.11163C14.1683 13.202 9.70666 16.177 8.08329 17.124C7.89879 17.2317 7.80655 17.2855 7.67636 17.3134C7.57533 17.3351 7.42793 17.3351 7.32689 17.3134C7.19671 17.2855 7.10446 17.2317 6.91997 17.124C5.2966 16.177 0.834961 13.202 0.834961 9.11163V5.12629C0.834961 4.46004 0.834961 4.12691 0.943928 3.84055C1.04019 3.58758 1.19661 3.36186 1.39968 3.1829C1.62954 2.98033 1.94146 2.86336 2.5653 2.62942L7.03346 0.953856C7.20671 0.888888 7.29333 0.856405 7.38245 0.843527C7.46149 0.832105 7.54176 0.832105 7.62081 0.843527C7.70992 0.856405 7.79655 0.888888 7.96979 0.953855L12.438 2.62942C13.0618 2.86336 13.3737 2.98033 13.6036 3.1829C13.8066 3.36186 13.9631 3.58758 14.0593 3.84055C14.1683 4.12691 14.1683 4.46003 14.1683 5.12629V9.11163Z"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const PublishIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
  >
    <path
      d="M5.41829 9.16829L7.91829 11.6683L12.9183 6.66829M17.5016 9.16829C17.5016 13.7707 13.7707 17.5016 9.16829 17.5016C4.56592 17.5016 0.834961 13.7707 0.834961 9.16829C0.834961 4.56592 4.56592 0.834961 9.16829 0.834961C13.7707 0.834961 17.5016 4.56592 17.5016 9.16829Z"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const AssignedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="17"
    viewBox="0 0 19 17"
    fill="none"
  >
    <path
      d="M12.5016 13.335L14.1683 15.0016L17.5016 11.6683M9.16829 10.835H5.83496C4.28182 10.835 3.50525 10.835 2.89268 11.0887C2.07592 11.427 1.42701 12.0759 1.0887 12.8927C0.834961 13.5053 0.834961 14.2818 0.834961 15.835M12.085 1.07726C13.3066 1.57175 14.1683 2.76939 14.1683 4.16829C14.1683 5.5672 13.3066 6.76484 12.085 7.25933M10.4183 4.16829C10.4183 6.00924 8.92591 7.50163 7.08496 7.50163C5.24401 7.50163 3.75163 6.00924 3.75163 4.16829C3.75163 2.32734 5.24401 0.834961 7.08496 0.834961C8.92591 0.834961 10.4183 2.32734 10.4183 4.16829Z"
      stroke="#A4A7AE"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const SIDEBAR_SECTIONS = [
  {
    label: "Main",
    items: [
      { id: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
      { id: "publish", label: "Publish course", icon: <PublishIcon /> },
      { id: "assigned", label: "Assigned", icon: <AssignedIcon /> },
    ],
  },
  {
    label: "Manage",
    items: [
      { id: "users", label: "Users", icon: <UsersIcon /> },
      { id: "groups", label: "Groups", icon: <GroupsIcon /> },
      { id: "roles", label: "Roles", icon: <RolesIcon /> },
    ],
  },
];

const NAV_ITEMS = [
  { label: "View all", value: "all", count: 214 },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Imported", value: "imported" },
];

function Users() {
  const [currentTab, setCurrentTab] = useState("all");

  return (
    <div className="flex min-h-screen bg-bg-primary font-inter">

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
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-display-sm font-semibold text-text-primary">
                User management
              </h1>
              <p className="text-text-tertiary text-md">
                Create and manage groups for your sites
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" iconLeft={ImportIcon}>
                Import
              </Button>
              <Button variant="primary" iconLeft={PlusIcon}>
                Add user
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">
                All users{" "}
                <span className="text-text-tertiary font-normal ml-1">214</span>
              </h2>
            </div>

            <div className="flex items-center justify-between gap-4">
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
          <div className="border border-border-secondary rounded-xl overflow-hidden">
            <div className="p-10 text-center text-text-tertiary bg-white">
              Table implementation goes here...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


export default Users;
