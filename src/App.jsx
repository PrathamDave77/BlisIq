import "./index.css";
import Sidebar from "./admin/Sidebar.jsx";
import Home from "./admin/Home.jsx";
import { Select } from "./Base/Components/Select.jsx";
import React, { useState } from "react";
import { Inputfields } from "./Base/Components/Inputfields.jsx";
import TableCell from './Base/Components/Tables/TableCell.jsx';
import Badges from './Base/Components/Badges/Badges.jsx'
import {AvatarOnlineIndicator} from './Base/Components/Avatar/AvatarOnlineIndicator.jsx';
import Avatar from './Base/Components/Avatar/Avatar.jsx';
import {CompanyIcon} from './Base/Components/Avatar/AvatarOnlineIndicator.jsx';
import Cardheader from './Base/Components/Tables/Cardheader.jsx';
import Tables from './Base/Components/Tables/Tables.jsx';

function App() {
  const [value, setValue] = useState("");
  return (
    // <div className="flex flex-row h-screen w-full bg-bg-primary">
    //   <Sidebar />
    //   <svg width="12" height="100vh" xmlns="http://www.w3.org/2000/svg">
    //     <defs>
    //       <pattern
    //         id="slashes"
    //         patternUnits="userSpaceOnUse"
    //         width="8"
    //         height="8"
    //         patternTransform="rotate(235)"
    //       >
    //         <line
    //           x1="0"
    //           y1="0"
    //           x2="0"
    //           y2="8"
    //           stroke="gray"
    //           strokeWidth="1"
    //         />
    //       </pattern>
    //     </defs>
    //     <rect width="12" height="100vh" fill="url(#slashes)" />
    //   </svg>

    //   <Home />
    // </div>
    <div className=" ">
      {/* <Select
        searchable
        label="Team member"
        placeholder="Select team member"
        options={[
          { value: "jacob", label: "Jacob Jones" },
          { value: "courtney", label: "Courtney Henry" },
          { value: "cameron", label: "Cameron Williamson" },
          { value: "darrell", label: "Darrell Steward" },
        ]}
      /> */}
      
      <Sidebar />

    </div>
  );
}

export default App;
