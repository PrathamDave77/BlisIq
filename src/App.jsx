import "./index.css";
import Sidebar from "./admin/Sidebar.jsx";
import Home from "./admin/Home.jsx";
import { Select } from "./Base-Components/Select.jsx";
import React, { useState } from "react";
import { Input } from "./Base-Components/input.jsx";

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
    <div className="p-xl">
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
      <Input
        label="Description"
        placeholder="Enter a description..."
        hint="This is a hint text to help user."
      />

      <Input
        label="Description"
        placeholder="Enter a description..."
        error="This field is required."
      />

      <Input label="Description" disabled />
    </div>
  );
}

export default App;
