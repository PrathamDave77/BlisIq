import React, { useState } from "react";
import Card from "./card";
import one from "./../../public/1.png";
import two from "./../../public/2.png";
import three from "./../../public/3.png";
import four from "./../../public/4.png";
import five from "./../../public/5.png";
import six from "./../../public/6.png";
import seven from "./../../public/7.png";
import eight from "./../../public/8.png";

const Home = () => {
  const tabs = [
    "All Status",
    "Assigned to me",
    "Not started",
    "In progress",
    "Completed",
  ];

  const blogCards = [
    {
      id: 1,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: one,
    },
    {
      id: 2,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: two,
    },
    {
      id: 3,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: three,
    },
    {
      id: 4,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: four,
    },
    {
      id: 5,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: five,
    },
    {
      id: 6,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: six,
    },
    {
      id: 7,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: seven,
    },
    {
      id: 8,
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
      image: eight,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="font-inter flex-1 overflow-y-auto py-4xl px-4xl bg-bg-primary">
      <div className="gap-4xl flex flex-col">
        <div className="flex flex-col gap-3xl">
          <div className="text-display-xs font-family-display font-semibold text-text-primary self-stretch leading-display-xs ">Learning</div>
          <div className="relative border-b border-border-secondary">
            <div className="flex gap-md items-center  ">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-xs pb-lg text-sm font-semibold transition-all relative z-10 ${isActive
                        ? "text-text-brand-secondary"
                        : "text-text-quaternary hover:text-text-secondary-hover"
                      }`}
                  >
                    {tab}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-text-brand-secondary rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 px-lg py-md border border-border-primary rounded-lg w-[280px] cursor-pointer shadow-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M15.8334 15.8335L12.9168 12.9168M15 7.91683C15 11.8288 11.8287 15.0002 7.91671 15.0002C4.00469 15.0002 0.833374 11.8288 0.833374 7.91683C0.833374 4.00481 4.00469 0.833496 7.91671 0.833496C11.8287 0.833496 15 4.00481 15 7.91683Z"
                stroke="#A4A7AE"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Search user"
              className="w-full text-md font-normal outline-none text-text-placeholder placeholder:text-text-placeholder "
            />
          </div>

          <button className="flex items-center gap-md px-lg py-md border border-border-primary rounded-lg text-md  leading-sm text-text-secondary font-medium hover:bg-utility-gray-50 transition-all cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 6h18M6 12h12M10 18h4"
                stroke="#A4A7AE"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            Filters
          </button>
        </div>
        {activeTab === "All Status" && (
          <div className="grid grid-cols-4 gap-3xl">
            {blogCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
