import React from "react";
import {
  Chevron_left,
  Edit_01,
  File_check_02,
  Info_circle,
  Moon_01,
  Settings_01,
} from "../Icons/Icons";
import { useState } from "react";

const collapsedSidebar = [Edit_01, Info_circle, File_check_02, Settings_01];

function CollapsedSidebar() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  return (
    <div className="flex h-screen bg-bg-primary px-lg">
      <aside className=" flex flex-col justify-between items-center py-2xl">
        <div className="flex flex-col gap-xl">
          <div className="p-[10px] bg-bg-primary border-border-primary border-[1px] rounded-md shadow-(--shadow-xs-skeumorphic) cursor-pointer">
            <div className="w-[20px] h-[20px]">
              <Chevron_left size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-xxs">
            {collapsedSidebar.map((Icon, index) => (
              <div
                key={index}
                className={`p-[10px] rounded-md hover:bg-bg-primary-hover cursor-pointer ${selectedIcon === index ? "bg-bg-active" : ""}`}
                onClick={() => handleIconClick(index)}
              >
                <Icon size={20} className="text-gray-400 hover:text-gray-600" />
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
          <Moon_01 size={20} />
        </div>
      </aside>
    </div>
  );
}

export default CollapsedSidebar;
