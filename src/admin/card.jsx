import React from "react";

function card() {
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

  return (
    <div
      className="
    bg-bg-primary
    w-[var(--width-md)]
    overflow-hidden
    radius-3xl
    shadow-lg
  "
    >
      {/* Image */}
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src="/cover.jpg"
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="spacing-xl flex flex-col gap-[var(--spacing-md)]">
        {/* Meta */}
        <div
          className="
        text-text-tertiary
        text-sm
        font-medium
        flex items-center gap-[var(--spacing-xs)]
      "
        >
          <span className="text-text-brand-primary">John smith</span>
          <span>•</span>
          <span>20 Jan 2025</span>
        </div>

        {/* Title */}
        <h3
          className="
        text-display-sm
        leading-display-sm
        font-semibold
        text-text-primary
      "
        >
          5 steps optimizing user experience
        </h3>

        {/* Tags */}
        <div className="flex gap-[var(--spacing-xs)]">
          <span
            className="
          px-[var(--spacing-sm)]
          py-[var(--spacing-xxs)]
          radius-full
          bg-bg-secondary
          text-text-secondary
          text-xs
          font-medium
        "
          >
            Design
          </span>

          <span
            className="
          px-[var(--spacing-sm)]
          py-[var(--spacing-xxs)]
          radius-full
          bg-bg-secondary
          text-text-secondary
          text-xs
          font-medium
        "
          >
            Research
          </span>
        </div>
      </div>
    </div>
  );
}

export default card;
