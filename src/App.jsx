import "./index.css";
import React, { useState } from "react";
import { Inputfields } from "./Base/Components/Input/Inputfields.jsx";
import Badges from "./Base/Components/Badges/Badges.jsx";
import { AvatarOnlineIndicator } from "./Base/Components/Avatar/AvatarOnlineIndicator.jsx";
import Avatar from "./Base/Components/Avatar/Avatar.jsx";
import { CompanyIcon } from "./Base/Components/Avatar/AvatarOnlineIndicator.jsx";
import SidebarMenu from "./Base/Components/sidebar/SidebarMenu.jsx";
import UpperNavigation from "./Base/Components/Navigation/UpperNavigation.jsx";
import Users from "./AdminScreens/Users.jsx";
import Groups from "./AdminScreens/Groups.jsx";
import CourseVerif from "./AdminScreens/CourseVerif.jsx";
import Button from "./Base/Components/Buttons/Button.jsx";
import CreatorSidebar from "./Base/Creator/CreatorSidebar/CreatorSidebar.jsx";
import CollapsedSidebar from "./Base/Creator/CreatorSidebar/CollapsedSidebar.jsx";

function App() {

const data = [
  {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
    Collaborators:["A","B","C","D"],
    
  },
  {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
 
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  }, {
    username: "5 steps optimizing user experience",
    email: "Owned by Pratham Dave",
    Requested: "Mar 13,2025",
    Type:"Course",
    Tags:["Design","Research"],
  },

];
  const [value, setValue] = useState("");

  const sidebarData = [
    { 
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M5.00163 10.835V12.5017M8.33496 7.50166V12.5017M11.6683 4.16832V12.5017M4.83496 15.835H11.835C13.2351 15.835 13.9352 15.835 14.4699 15.5625C14.9403 15.3228 15.3228 14.9404 15.5625 14.47C15.835 13.9352 15.835 13.2351 15.835 11.835V4.83499C15.835 3.43486 15.835 2.73479 15.5625 2.20002C15.3228 1.72961 14.9403 1.34716 14.4699 1.10748C13.9352 0.834991 13.2351 0.834991 11.835 0.834991H4.83496C3.43483 0.834991 2.73476 0.834991 2.19998 1.10748C1.72958 1.34716 1.34713 1.72961 1.10744 2.20002C0.834961 2.73479 0.834961 3.43486 0.834961 4.83499V11.835C0.834961 13.2351 0.834961 13.9352 1.10744 14.47C1.34713 14.9404 1.72958 15.3228 2.19998 15.5625C2.73476 15.835 3.43483 15.835 4.83496 15.835Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "publish",
          label: "Publish course",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M5.41829 9.16832L7.91829 11.6683L12.9183 6.66832M17.5016 9.16832C17.5016 13.7707 13.7707 17.5017 9.16829 17.5017C4.56592 17.5017 0.834961 13.7707 0.834961 9.16832C0.834961 4.56595 4.56592 0.834991 9.16829 0.834991C13.7707 0.834991 17.5016 4.56595 17.5016 9.16832Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "assigned",
          label: "Assigned",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M12.5016 13.335L14.1683 15.0017L17.5016 11.6683M9.16829 10.835H5.83496C4.28182 10.835 3.50525 10.835 2.89268 11.0887C2.07592 11.427 1.42701 12.076 1.0887 12.8927C0.834961 13.5053 0.834961 14.2819 0.834961 15.835M12.085 1.07729C13.3066 1.57178 14.1683 2.76942 14.1683 4.16832C14.1683 5.56723 13.3066 6.76487 12.085 7.25936M10.4183 4.16832C10.4183 6.00927 8.92591 7.50166 7.08496 7.50166C5.24401 7.50166 3.75163 6.00927 3.75163 4.16832C3.75163 2.32738 5.24401 0.834991 7.08496 0.834991C8.92591 0.834991 10.4183 2.32738 10.4183 4.16832Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "courses",
          label: "Courses",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
            >
              <path
                d="M9.16829 14.1683H3.50163C2.56821 14.1683 2.1015 14.1683 1.74498 13.9867C1.43137 13.8269 1.17641 13.5719 1.01662 13.2583C0.834961 12.9018 0.834961 12.4351 0.834961 11.5017V3.50166C0.834961 2.56824 0.834961 2.10153 1.01662 1.74501C1.17641 1.4314 1.43137 1.17644 1.74498 1.01665C2.1015 0.834991 2.56821 0.834991 3.50163 0.834991H3.83496C5.7018 0.834991 6.63522 0.834991 7.34826 1.1983C7.97547 1.51788 8.4854 2.02782 8.80498 2.65502C9.16829 3.36806 9.16829 4.30148 9.16829 6.16832M9.16829 14.1683V6.16832M9.16829 14.1683H14.835C15.7684 14.1683 16.2351 14.1683 16.5916 13.9867C16.9052 13.8269 17.1602 13.5719 17.32 13.2583C17.5016 12.9018 17.5016 12.4351 17.5016 11.5017V3.50166C17.5016 2.56824 17.5016 2.10153 17.32 1.74501C17.1602 1.4314 16.9052 1.17644 16.5916 1.01665C16.2351 0.834991 15.7684 0.834991 14.835 0.834991H14.5016C12.6348 0.834991 11.7014 0.834991 10.9883 1.1983C10.3611 1.51788 9.85118 2.02782 9.53161 2.65502C9.16829 3.36806 9.16829 4.30148 9.16829 6.16832"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "explore",
          label: "Explore",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16675 8.33334V13.3426C4.16675 13.6418 4.16675 13.7913 4.21229 13.9234C4.25257 14.0401 4.3183 14.1465 4.40473 14.2347C4.50247 14.3345 4.63625 14.4014 4.9038 14.5352L9.4038 16.7852C9.62243 16.8945 9.73175 16.9492 9.84642 16.9707C9.94797 16.9897 10.0522 16.9897 10.1537 16.9707C10.2684 16.9492 10.3777 16.8945 10.5964 16.7852L15.0964 14.5352C15.3639 14.4014 15.4977 14.3345 15.5954 14.2347C15.6819 14.1465 15.7476 14.0401 15.7879 13.9234C15.8334 13.7913 15.8334 13.6418 15.8334 13.3426V8.33334M1.66675 7.08334L9.70194 3.06574C9.81126 3.01108 9.86592 2.98375 9.92325 2.973C9.97403 2.96347 10.0261 2.96347 10.0769 2.973C10.1342 2.98375 10.1889 3.01108 10.2982 3.06574L18.3334 7.08334L10.2982 11.1009C10.1889 11.1556 10.1342 11.1829 10.0769 11.1937C10.0261 11.2032 9.97403 11.2032 9.92325 11.1937C9.86592 11.1829 9.81126 11.1556 9.70194 11.1009L1.66675 7.08334Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "leaderboard",
          label: "Leaderboard",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.5 5.83333H3.83333C3.36662 5.83333 3.13327 5.83333 2.95501 5.92416C2.79821 6.00406 2.67072 6.13154 2.59083 6.28834C2.5 6.4666 2.5 6.69996 2.5 7.16667V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7.5M7.5 17.5H12.5M7.5 17.5L7.5 3.83333C7.5 3.36662 7.5 3.13327 7.59083 2.95501C7.67072 2.79821 7.79821 2.67072 7.95501 2.59083C8.13327 2.5 8.36662 2.5 8.83333 2.5L11.1667 2.5C11.6334 2.5 11.8667 2.5 12.045 2.59083C12.2018 2.67072 12.3293 2.79821 12.4092 2.95501C12.5 3.13327 12.5 3.36662 12.5 3.83333V17.5M12.5 9.16667H16.1667C16.6334 9.16667 16.8667 9.16667 17.045 9.25749C17.2018 9.33739 17.3293 9.46487 17.4092 9.62167C17.5 9.79993 17.5 10.0333 17.5 10.5V16.1667C17.5 16.6334 17.5 16.8667 17.4092 17.045C17.3293 17.2018 17.2018 17.3293 17.045 17.4092C16.8667 17.5 16.6334 17.5 16.1667 17.5H12.5"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "notification",
          label: "Notification",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.16667 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H12.6667C14.0668 17.5 14.7669 17.5 15.3016 17.2275C15.772 16.9878 16.1545 16.6054 16.3942 16.135C16.6667 15.6002 16.6667 14.9001 16.6667 13.5V10.8333M16.7678 3.23223C17.7441 4.20854 17.7441 5.79146 16.7678 6.76777C15.7915 7.74408 14.2085 7.74408 13.2322 6.76777C12.2559 5.79146 12.2559 4.20854 13.2322 3.23223C14.2085 2.25592 15.7915 2.25592 16.7678 3.23223Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
      ],
    },
    {
      label: "MANAGE",
      items: [
        {
          id: "users",
          label: "Users",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
            >
              <path
                d="M14.1683 15.835C14.1683 14.672 14.1683 14.0906 14.0248 13.6174C13.7016 12.5521 12.8679 11.7184 11.8026 11.3952C11.3294 11.2517 10.7479 11.2517 9.58496 11.2517H5.4183C4.25533 11.2517 3.67384 11.2517 3.20068 11.3952C2.13534 11.7184 1.30166 12.5521 0.978494 13.6174C0.834961 14.0906 0.834961 14.672 0.834961 15.835M11.2516 4.58502C11.2516 6.65609 9.5727 8.33502 7.50163 8.33502C5.43056 8.33502 3.75163 6.65609 3.75163 4.58502C3.75163 2.51395 5.43056 0.835022 7.50163 0.835022C9.5727 0.835022 11.2516 2.51395 11.2516 4.58502Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "groups",
          label: "Groups",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3334 17.5V15.8333C18.3334 14.2801 17.2711 12.9751 15.8334 12.605M12.9167 2.7423C14.1383 3.23679 15.0001 4.43443 15.0001 5.83333C15.0001 7.23224 14.1383 8.42988 12.9167 8.92437M14.1667 17.5C14.1667 15.9469 14.1667 15.1703 13.913 14.5577C13.5747 13.741 12.9258 13.092 12.109 12.7537C11.4965 12.5 10.7199 12.5 9.16675 12.5H6.66675C5.11361 12.5 4.33704 12.5 3.72447 12.7537C2.90771 13.092 2.2588 13.741 1.92048 14.5577C1.66675 15.1703 1.66675 15.9469 1.66675 17.5M11.2501 5.83333C11.2501 7.67428 9.7577 9.16667 7.91675 9.16667C6.0758 9.16667 4.58341 7.67428 4.58341 5.83333C4.58341 3.99238 6.0758 2.5 7.91675 2.5C9.7577 2.5 11.2501 3.99238 11.2501 5.83333Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "roles",
          label: "Roles",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99992 2.08333V17.9167M16.6666 9.99999C16.6666 14.0904 12.205 17.0653 10.5816 18.0124C10.3971 18.12 10.3048 18.1738 10.1747 18.2018C10.0736 18.2234 9.92622 18.2234 9.82519 18.2018C9.695 18.1738 9.60275 18.12 9.41826 18.0124C7.79489 17.0653 3.33325 14.0904 3.33325 9.99999V6.01466C3.33325 5.3484 3.33325 5.01527 3.44222 4.72891C3.53848 4.47594 3.6949 4.25023 3.89797 4.07127C4.12783 3.86869 4.43975 3.75172 5.06359 3.51778L9.53175 1.84222C9.705 1.77725 9.79162 1.74477 9.88074 1.73189C9.95978 1.72047 10.0401 1.72047 10.1191 1.73189C10.2082 1.74477 10.2948 1.77725 10.4681 1.84222L14.9362 3.51778C15.5601 3.75172 15.872 3.86869 16.1019 4.07127C16.3049 4.25023 16.4614 4.47594 16.5576 4.72891C16.6666 5.01527 16.6666 5.3484 16.6666 6.01466V9.99999Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
        {
          id: "sites",
          label: "Sites",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M3.33496 11.0737C1.79216 11.7542 0.834961 12.7027 0.834961 13.7517C0.834961 15.8228 4.56592 17.5017 9.16829 17.5017C13.7707 17.5017 17.5016 15.8228 17.5016 13.7517C17.5016 12.7027 16.5444 11.7542 15.0016 11.0737M14.1683 5.83502C14.1683 9.22145 10.4183 10.835 9.16829 13.335C7.91829 10.835 4.16829 9.22145 4.16829 5.83502C4.16829 3.0736 6.40687 0.835022 9.16829 0.835022C11.9297 0.835022 14.1683 3.0736 14.1683 5.83502ZM10.0016 5.83502C10.0016 6.29526 9.62853 6.66836 9.16829 6.66836C8.70806 6.66836 8.33496 6.29526 8.33496 5.83502C8.33496 5.37478 8.70806 5.00169 9.16829 5.00169C9.62853 5.00169 10.0016 5.37478 10.0016 5.83502Z"
                stroke="#A4A7AE"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          subMenuItems: [],
        },
      ],
    },
  ];

  const userData = {
    name: "Jacob Jones",
    email: "jacob@diacto.com",
    avatarUrl: "https://avatar.iran.liara.run/public/30",
  };

  const filterOptions = [
    { label: "All Items", value: "all", count: 24 },
    { label: "Pending", value: "pending", count: 2 },
    { label: "In Progress", value: "in-progress", count: 5 },
    { label: "Completed", value: "completed", count: 17 },
  ];

  const [filter, setFilter] = useState("all");
  return (
    // <div className="flex flex-row h-screen w-full bg-bg-primary">
    //   <Sidebar />
    // <svg width="12" height="100vh" xmlns="http://www.w3.org/2000/svg">
    //   <defs>
    //     <pattern
    //       id="slashes"
    //       patternUnits="userSpaceOnUse"
    //       width="8"
    //       height="8"
    //       patternTransform="rotate(235)"
    //     >
    //       <line
    //         x1="0"
    //         y1="0"
    //         x2="0"
    //         y2="8"
    //         stroke="gray"
    //         strokeWidth="1"
    //       />
    //     </pattern>
    //   </defs>
    //   <rect width="12" height="100vh" fill="url(#slashes)" />
    // </svg>

    //   <Home />
    // </div>
    // <div className="">
    //   {/* <Select
    //     searchable
    //     label="Team member"
    //     placeholder="Select team member"
    //     options={[
    //       { value: "jacob", label: "Jacob Jones" },
    //       { value: "courtney", label: "Courtney Henry" },
    //       { value: "cameron", label: "Cameron Williamson" },
    //       { value: "darrell", label: "Darrell Steward" },
    //     ]}
    //   /> */}
    //   {/* <TableCell variant="trendpos" username="Pratham77.pdf" email="234 KB" isAvatar={false} isFile={false} isPayment={true} isBadge={false} isMultipleBadges={true} /> */}
    // </div>

    // <div className="flex h-screen">
    //   <aside className="">
    //     <SidebarMenu sections={sidebarData} variant="default" user={userData} />
    //   </aside>

    //   <main className="flex-1 p-xs">
    //     <h1>Welcome to the App</h1>
    //   </main>
    // </div>

    // <UpperNavigation
    //   variant="pill"
    //   items={filterOptions}
    //   value={filter}
    //   onChange={setFilter}
    //   className="mb-4" // You can pass extra tailwind classes
    // />
<div className="flex ">
     {/* <Cardheader
      title="Team members"
      subtitle="Manage your team members and their account permission here."
      actions={
        <>
          <Button variant="secondary">Import</Button>
          <Button>+ Add user</Button>
        </>
      }
    /> */}
    {/* <Groups /> */}
      {/* <CourseVerif /> */}
    <Users />
    {/* <Tables /> */}
    {/* <CollapsedSidebar /> */}
    </div>

  );
}

export default App;
