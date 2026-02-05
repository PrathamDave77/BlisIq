import React, { useState } from "react";

const Home = () => {
  const tabs = [
    "All Status",
    "Assigned to me",
    "Not started",
    "In progress",
    "Completed",
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
                className={`pb-4 text-sm font-semibold transition-all relative ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
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
      </div>
    </div>
  );
};

export default Home;
