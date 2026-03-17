import React, { useState } from "react";
import { SIDEBAR_SECTIONS } from "../SidebarData.jsx";
import SidebarMenu from "../../Base/Components/Sidebar/SidebarMenu.jsx";
import { Cardheader, Sectionheader } from "../../Base/Components/Navigation/Cardheader.jsx";
import Button from "../../Base/Components/Buttons/Button.jsx";
import Select from '../../Base/Components/Input/Select.jsx';
import { SiteManagementTables } from '../../Base/Components/Tables/Tables.jsx';
import {
  DownChevron,
  PlusIcon,
} from "../../Base/Components/ComponentIcons/CompIcons.jsx";
import UpperNavigation from "../../Base/Components/Navigation/UpperNavigation.jsx";
import AddNewSite from './AddNewSite.jsx';


const SiteManagement = () => {
  const [currentTab, setCurrentTab] = useState("Roles");
  const [openModal, setOpenmodal] = useState(false);
  
  const Sitemodal = () => {
    setOpenmodal(prev => !prev);
    
  };

  const navigationItems = [
    { label: "Roles", value: "Roles" },
    { label: "Permissions", value: "Permissions" },
  ];

  return (
    <div className="flex bg-bg-primary font-inter w-full ">
      <SidebarMenu
        sections={SIDEBAR_SECTIONS}
        user={{
          name: "Jacob Jones",
          email: "jacob@diacto.com",
          avatarUrl: "https://i.pravatar.cc/150?u=jacob",
        }}
      />

      <main className="px-8 flex flex-col min-w-0 flex-1 pt-4xl pb-6xl">
        <Cardheader
          title="Site management"
          subtitle="Create and manage groups for your school or organization"
          actions={
            <div className="flex gap-3">
              <Button variant="primary" Iconleft={PlusIcon} size="md" onClick={() => Sitemodal()}>
                New Site
              </Button>
            </div>
          }
        />
        <header className="pt-8 pb-6 flex flex-col gap-8">
          <Sectionheader title="All Items" badge="43" searchable />
          <SiteManagementTables />

        </header>
      </main>
      {openModal && <AddNewSite />}
    </div>
  );
}

export default SiteManagement;
