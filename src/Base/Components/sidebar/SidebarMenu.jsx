import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils.js";

import logo from "../../../../public/Logo.png";

const category =
  "px-2xl pb-xs font-semibold text-red-500 text-xs leading-xs uppercase";

const sidebarMenu = cva("flex flex-col w-full pb-2xl px-xl", {
  variants: {
    variant: { default: "", compact: "gap-1" },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Setlightmode = () => {
  document.documentElement.classList.remove("theme-dark");
  setIsdarkcolor((prev) => false);
};

const Setdarkmode = () => {
  document.documentElement.classList.add("theme-dark");
  setIsdarkcolor((prev) => true);
};

const itemsMenu = cva(
  "flex items-center justify-between px-lg py-[10px] text-md font-semibold leading-md rounded-sm cursor-pointer transition-all duration-200 group",
  {
    variants: {
      state: {
        default:
          "bg-bg-primary text-text-secondary hover:bg-bg-primary-hover hover:text-text-secondary-hover",
        active: "bg-bg-active text-text-secondary-hover  ",
        expanded: "bg-bg-active text-text-secondary  ",
      },
    },
  },
);

const subMenu = cva(
  "flex flex-col overflow-hidden transition-all duration-300",
  {
    variants: {
      isOpen: {
        true: "max-h-96 opacity-100",
        false: "max-h-0 opacity-0",
      },
    },
  },
);

const subMenuItemStyles = cva(
  "py-md pr-lg pl-5xl text-md font-semibold text-text-secondary rounded-sm cursor-pointer transition-all duration-200",
  {
    variants: {
      state: {
        default:
          "bg-bg-primary text-text-secondary hover:bg-bg-primary-hover hover:text-text-secondary-hover",
        active: "bg-bg-active text-text-secondary-hover",
      },
    },
  },
);

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "transition-transform duration-200",
      isOpen ? "rotate-180" : "rotate-0",
    )}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const footerItems = [
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M9.16829 11.6684C10.549 11.6684 11.6683 10.5491 11.6683 9.16836C11.6683 7.78764 10.549 6.66836 9.16829 6.66836C7.78758 6.66836 6.66829 7.78764 6.66829 9.16836C6.66829 10.5491 7.78758 11.6684 9.16829 11.6684Z"
          stroke="#A4A7AE"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.7744 11.4411C14.6735 11.6696 14.6434 11.923 14.688 12.1688C14.7325 12.4146 14.8497 12.6413 15.0244 12.8199L15.0698 12.8653C15.2107 13.006 15.3224 13.1731 15.3987 13.3571C15.4749 13.541 15.5142 13.7382 15.5142 13.9373C15.5142 14.1364 15.4749 14.3336 15.3987 14.5175C15.3224 14.7014 15.2107 14.8685 15.0698 15.0093C14.9291 15.1501 14.762 15.2619 14.5781 15.3381C14.3941 15.4144 14.197 15.4536 13.9978 15.4536C13.7987 15.4536 13.6016 15.4144 13.4176 15.3381C13.2337 15.2619 13.0666 15.1501 12.9259 15.0093L12.8804 14.9638C12.7019 14.7892 12.4751 14.672 12.2293 14.6274C11.9836 14.5829 11.7301 14.613 11.5016 14.7138C11.2776 14.8098 11.0865 14.9693 10.9519 15.1725C10.8173 15.3758 10.745 15.614 10.7441 15.8577V15.9865C10.7441 16.3884 10.5844 16.7738 10.3003 17.0579C10.0161 17.3421 9.63074 17.5017 9.2289 17.5017C8.82706 17.5017 8.44167 17.3421 8.15753 17.0579C7.87338 16.7738 7.71375 16.3884 7.71375 15.9865V15.9184C7.70788 15.6676 7.62672 15.4244 7.4808 15.2204C7.33489 15.0164 7.13097 14.861 6.89557 14.7744C6.66707 14.6736 6.4136 14.6435 6.16785 14.688C5.92209 14.7326 5.69532 14.8498 5.51678 15.0244L5.47132 15.0699C5.33061 15.2107 5.1635 15.3225 4.97957 15.3987C4.79563 15.475 4.59847 15.5142 4.39935 15.5142C4.20024 15.5142 4.00308 15.475 3.81914 15.3987C3.63521 15.3225 3.4681 15.2107 3.32739 15.0699C3.18651 14.9292 3.07476 14.7621 2.99851 14.5781C2.92226 14.3942 2.88301 14.197 2.88301 13.9979C2.88301 13.7988 2.92226 13.6016 2.99851 13.4177C3.07476 13.2338 3.18651 13.0666 3.32739 12.9259L3.37284 12.8805C3.54749 12.7019 3.66465 12.4752 3.70921 12.2294C3.75377 11.9837 3.72368 11.7302 3.62284 11.5017C3.52681 11.2776 3.36735 11.0865 3.1641 10.9519C2.96085 10.8173 2.72268 10.7451 2.4789 10.7441H2.35011C1.94827 10.7441 1.56288 10.5845 1.27874 10.3003C0.994593 10.0162 0.834961 9.6308 0.834961 9.22896C0.834961 8.82712 0.994593 8.44173 1.27874 8.15759C1.56288 7.87344 1.94827 7.71381 2.35011 7.71381H2.41829C2.66905 7.70794 2.91224 7.62678 3.11625 7.48086C3.32026 7.33495 3.47565 7.13103 3.56223 6.89563C3.66308 6.66713 3.69316 6.41366 3.6486 6.16791C3.60404 5.92216 3.48688 5.69538 3.31223 5.51684L3.26678 5.47139C3.12591 5.33067 3.01415 5.16356 2.9379 4.97963C2.86165 4.79569 2.82241 4.59853 2.82241 4.39942C2.82241 4.2003 2.86165 4.00314 2.9379 3.8192C3.01415 3.63527 3.12591 3.46816 3.26678 3.32745C3.4075 3.18657 3.5746 3.07482 3.75854 2.99857C3.94247 2.92232 4.13963 2.88307 4.33875 2.88307C4.53786 2.88307 4.73502 2.92232 4.91896 2.99857C5.1029 3.07482 5.27 3.18657 5.41072 3.32745L5.45617 3.3729C5.63472 3.54755 5.86149 3.66471 6.10724 3.70927C6.353 3.75383 6.60646 3.72375 6.83496 3.6229H6.89557C7.11963 3.52687 7.31073 3.36741 7.44533 3.16416C7.57994 2.96091 7.65217 2.72274 7.65314 2.47896V2.35017C7.65314 1.94833 7.81277 1.56295 8.09692 1.2788C8.38107 0.994654 8.76645 0.835022 9.16829 0.835022C9.57014 0.835022 9.95552 0.994654 10.2397 1.2788C10.5238 1.56295 10.6834 1.94833 10.6834 2.35017V2.41836C10.6844 2.66213 10.7567 2.90031 10.8913 3.10356C11.0259 3.30681 11.217 3.46626 11.441 3.56229C11.6695 3.66314 11.923 3.69322 12.1687 3.64866C12.4145 3.6041 12.6413 3.48694 12.8198 3.31229L12.8653 3.26684C13.006 3.12597 13.1731 3.01421 13.357 2.93796C13.541 2.86171 13.7381 2.82247 13.9372 2.82247C14.1363 2.82247 14.3335 2.86171 14.5174 2.93796C14.7014 3.01421 14.8685 3.12597 15.0092 3.26684C15.1501 3.40756 15.2618 3.57466 15.3381 3.7586C15.4143 3.94253 15.4536 4.1397 15.4536 4.33881C15.4536 4.53792 15.4143 4.73509 15.3381 4.91902C15.2618 5.10296 15.1501 5.27006 15.0092 5.41078L14.9637 5.45623C14.7891 5.63478 14.6719 5.86155 14.6274 6.1073C14.5828 6.35306 14.6129 6.60653 14.7137 6.83502V6.89563C14.8098 7.1197 14.9692 7.31079 15.1725 7.4454C15.3757 7.58 15.6139 7.65223 15.8577 7.6532H15.9865C16.3883 7.6532 16.7737 7.81284 17.0578 8.09698C17.342 8.38113 17.5016 8.76651 17.5016 9.16836C17.5016 9.5702 17.342 9.95558 17.0578 10.2397C16.7737 10.5239 16.3883 10.6835 15.9865 10.6835H15.9183C15.6745 10.6845 15.4363 10.7567 15.2331 10.8913C15.0298 11.0259 14.8704 11.217 14.7744 11.4411Z"
          stroke="#A4A7AE"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Support",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M6.74329 6.66836C6.93921 6.11141 7.32592 5.64178 7.83492 5.34263C8.34393 5.04349 8.94237 4.93414 9.52427 5.03395C10.1062 5.13376 10.634 5.43629 11.0142 5.88796C11.3944 6.33963 11.6025 6.91129 11.6016 7.50169C11.6016 9.16836 9.10163 10.0017 9.10163 10.0017M9.16829 13.335H9.17663M17.5016 9.16836C17.5016 13.7707 13.7707 17.5017 9.16829 17.5017C4.56592 17.5017 0.834961 13.7707 0.834961 9.16836C0.834961 4.56598 4.56592 0.835022 9.16829 0.835022C13.7707 0.835022 17.5016 4.56598 17.5016 9.16836Z"
          stroke="#A4A7AE"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

function SidebarMenu(
  { sections = [], variant = "default", className, user },
  props,
) {
  const [expandedId, setExpandedId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const handleItemClick = (item) => {
    const hasSubmenu = item.subMenuItems && item.subMenuItems.length > 0;

    if (hasSubmenu) {
      setExpandedId(expandedId === item.id ? null : item.id);
    } else {
      setActiveId(item.id);
      setExpandedId(null);
    }
  };
  const handleSubItemClick = (subItemID) => {
    setActiveId(subItemID.id);
  };

  return (
    <div className="flex flex-row h-screen flex-shrink-0">
      <aside
        className={cn("flex flex-col h-screen w-[296px] font-inter", className)}
      >
        <div className="pt-2xl px-2xl flex items-center justify-between">
          <div className="flex items-center gap-xs">
            <img src="/Logo.png" alt="BlissIQ" className="h-[28px] w-[23px]" />
            <span className="text-2xl font-semibold text-utility-gray-900">
              BlissIQ
            </span>
          </div>
        </div>

        <div className="mt-4xl flex-1 overflow-y-auto" {...props}>
          {sections.map((section) => (
            <div key={section.id || section.label}>
              <div className={cn(category)}>{section.label}</div>

              <div className={cn(sidebarMenu({ variant }))}>
                {section.items.map((item) => {
                  const hasSubmenu =
                    item.subMenuItems && item.subMenuItems.length > 0;
                  const isActive = activeId === item.id;
                  const isExpanded = expandedId === item.id;

                  return (
                    <div key={item.id}>
                      {" "}
                      <div
                        className={cn(
                          itemsMenu({
                            state: isActive
                              ? "active"
                              : isExpanded
                                ? "expanded"
                                : "default",
                          }),
                        )}
                        onClick={() => handleItemClick(item)}
                      >
                        <div className="flex items-center gap-md">
                          <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                            {item.icon}
                          </div>

                          <span className="text-sm font-semibold text-text-secondary leading-none">
                            {item.label}
                          </span>
                        </div>
                        {hasSubmenu && <ChevronIcon isOpen={isExpanded} />}
                      </div>
                      {hasSubmenu && (
                        <div className={cn(subMenu({ isOpen: isExpanded }))}>
                          {item.subMenuItems.map((subItem) => (
                            <div
                              key={subItem.id}
                              className={cn(
                                subMenuItemStyles({
                                  state:
                                    activeId === subItem.id
                                      ? "active"
                                      : "default",
                                }),
                              )}
                              onClick={() => handleSubItemClick(subItem)}
                            >
                              <span>{subItem.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col px-xl pt-md pb-xl gap-xl">
          <div className="flex flex-col">
            {footerItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  itemsMenu({
                    state: activeId === item.id ? "active" : "default",
                  }),
                )}
                onClick={() => setActiveId(item.id)}
              >
                <div className="flex items-center gap-md">
                  <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                    {item.icon}
                  </div>

                  <span className="text-sm font-semibold text-text-secondary leading-none">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex rounded-md items-center gap-xxs bg-bg-secondary text-text-secondary border border-border-secondary self-stretch">
            <button
              className="flex flex-1 px-lg py-md items-center justify-center cursor-pointer bg-bg-primary text-text-secondary leading-sm rounded-md gap-md border border-border-secondary shadow-shadow-xs self-stretch font-semibold"
              onClick={() => Setlightmode()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_32345_12817)">
                  <path
                    d="M8.00004 1.3335V2.66683M8.00004 13.3335V14.6668M2.66671 8.00016H1.33337M4.20945 4.20957L3.26664 3.26676M11.7906 4.20957L12.7334 3.26676M4.20945 11.7935L3.26664 12.7363M11.7906 11.7935L12.7334 12.7363M14.6667 8.00016H13.3334M11.3334 8.00016C11.3334 9.84111 9.84099 11.3335 8.00004 11.3335C6.15909 11.3335 4.66671 9.84111 4.66671 8.00016C4.66671 6.15921 6.15909 4.66683 8.00004 4.66683C9.84099 4.66683 11.3334 6.15921 11.3334 8.00016Z"
                    stroke="#A4A7AE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32345_12817">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Light
            </button>
            <button
              className="flex flex-1 items-center justify-center px-lg py-md cursor-pointer rounded-md gap-md border-border-secondary shadow-shadow-xs self-stretch font-semibold leading-sm"
              onClick={() => Setdarkmode()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.0833 9.97948C13.2077 10.3755 12.2358 10.5959 11.2123 10.5959C7.36019 10.5959 4.23744 7.47314 4.23744 3.62102C4.23744 2.59757 4.45787 1.6256 4.85385 0.75C2.43384 1.84442 0.75 4.2798 0.75 7.10846C0.75 10.9606 3.87276 14.0833 7.72487 14.0833C10.5535 14.0833 12.9889 12.3995 14.0833 9.97948Z"
                  stroke="#A4A7AE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Dark
            </button>
          </div>

          <div className="rounded-xl p-lg border border-border-secondary bg-bg-primary flex items-center justify-between hover:bg-bg-primary-hover cursor-pointer transition-colors duration-200">
            <div className="flex items-center gap-md overflow-hidden">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col overflow-hidden leading-sm">
                <span className="text-sm font-semibold text-text-primary truncate">
                  {user.name}
                </span>
                <span className="text-sm font-normal text-text-tertiary truncate">
                  {user.email}
                </span>
              </div>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-text-secondary flex-shrink-0"
            >
              <path
                d="M5 10L8 13L11 10M11 6L8 3L5 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </aside>

      <svg
        width="12"
        height="100%"
        className="h-full flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="slashes"
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
            patternTransform="rotate(235)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#D1D5DB" /* Using a standard Tailwind gray-300 hex */
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="12" height="100%" fill="url(#slashes)" />
      </svg>
    </div>
  );
}

export default SidebarMenu;
