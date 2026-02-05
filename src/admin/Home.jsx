import React, { useState } from "react";
import Card from "./card";

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
      image: "/images/blog-1.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 2,
      image: "/images/blog-2.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 3,
      image: "/images/blog-3.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 4,
      image: "/images/blog-4.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 5,
      image: "/images/blog-5.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 6,
      image: "/images/blog-6.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 7,
      image: "/images/blog-7.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
    {
      id: 8,
      image: "/images/blog-8.jpg",
      author: "John smith",
      date: "20 Jan 2025",
      title: "5 steps optimizing user experience",
      tags: ["Design", "Research"],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="py-4xl px-4xl bg-primary">
      <div className="gap-3xl flex flex-col">
        <h1 className="text-3xl font-semibold text-text-primary">Learning</h1>

        <div className="flex gap-md items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-xs pb-lg text-sm font-semibold transition-all relative ${
                  isActive
                    ? "text-text-brand-secondary"
                    : "text-text-quaternary hover:text-gray-700"
                }`}
              >
                {tab}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex gap-sm">
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
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" />
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
