import React from "react";
import SidebarMenu from "../Base/Components/Sidebar/SidebarMenu.jsx";
import Button from "../Base/Components/Buttons/Button.jsx";
import Select  from "../Base/Components/Input/Select.jsx";
import {Cardheader} from "../Base/Components/Navigation/Cardheader.jsx";
import TableHeaderCell from '../Base/Components/Tables/TableHeaderCell.jsx';
import {SiteManagementTables} from '../Base/Components/Tables/Tables.jsx';
import { SIDEBAR_SECTIONS } from "./SidebarData.jsx";


function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 12.5V14.1667M10 9.16667V14.1667M13.3333 5.83333V14.1667M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z" stroke="#A4A7AE" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GroupsIcon() {
  return (
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5016 15.835V14.1683C17.5016 12.6151 16.4393 11.31 15.0016 10.94M12.085 1.07726C13.3066 1.57175 14.1683 2.76939 14.1683 4.16829C14.1683 5.5672 13.3066 6.76484 12.085 7.25933M13.335 15.835C13.335 14.2818 13.335 13.5053 13.0812 12.8927C12.7429 12.0759 12.094 11.427 11.2772 11.0887C10.6647 10.835 9.8881 10.835 8.33496 10.835H5.83496C4.28182 10.835 3.50525 10.835 2.89268 11.0887C2.07592 11.427 1.42701 12.0759 1.0887 12.8927C0.834961 13.5053 0.834961 14.2818 0.834961 15.835M10.4183 4.16829C10.4183 6.00924 8.92591 7.50163 7.08496 7.50163C5.24401 7.50163 3.75163 6.00924 3.75163 4.16829C3.75163 2.32734 5.24401 0.834961 7.08496 0.834961C8.92591 0.834961 10.4183 2.32734 10.4183 4.16829Z" stroke="#A4A7AE" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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


function Groups() {
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
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-display-sm font-semibold text-text-primary">
                Group management
              </h1>
              <p className="text-text-tertiary text-md">
                Create and manage groups for your organization
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="primary" iconLeft={PlusIcon}>
                Add user
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-text-primary">
                All groups <span className="text-text-tertiary font-normal ml-1">43</span>
              </h2>

              <div className="flex gap-3 items-center">
                <Select
                  placeholder="Search group"
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
            <div className=" text-center text-text-tertiary flex ">
              {/* You can now drop a Table component here */}
              <RoleManagementTables />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Groups;