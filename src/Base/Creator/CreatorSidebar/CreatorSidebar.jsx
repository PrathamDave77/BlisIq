import React from "react";
import { initialSidebarData } from "./data.js";
import Button from "../../Components/Buttons/Button.jsx";
import { Plus, SidebarClose } from "../Icons/Icons.jsx";

function CreatorSidebar() {
  return (
    <div className="font-inter">
      <div className="flex flex-col gap-md px-2xl">
        <div className="flex justify-between items-center pt-2xl pb-md">
          <p className="text-text-tertiary font-normal text-sm leading-sm ">Last edited 23 Dec 2025</p>
          <Button variant="secondary" size="icon">
            <SidebarClose />
          </Button>
        </div>

        <div className="border-1 border-border-secondary" />

        <div className="py-md flex justify-between items-center">
          <p className="text-text-quaternary font-semibold text-xs leading-xs uppercase">Pages (12)</p>
          <Button variant="primary" size="icon">
              <div className=""><Plus /></div>
          </Button>
        </div>
      </div>

      <div>
        {/* {initialSidebarData.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
      </div>
    </div>
  );
}

export default CreatorSidebar;
