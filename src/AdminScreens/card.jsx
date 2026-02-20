import React from "react";

const Card = (props) => {
  const { image, author, date, title, tags } = props;

  return (
    <div
      className="
        bg-bg-primary
        rounded-xl
        flex
        flex-col
        items-start
        self-stretch
        justify-self-stretch
        overflow-hidden
        font-inter
        border
        border-border-secondary
        shadow-xs
      "
    >
      <div className="w-full aspect-[61/34] overflow-hidden pt-xs px-xs">
        <img src={image} alt="cover" className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="p-xl flex flex-col gap-xl self-stretch">
        <div className="gap-sm flex flex-col">
          <div
            className="
            text-text-brand-tertiary
            text-xs
            font-semibold
            leading-xs
            flex
            items-center
            gap-xs
          "
          >
            <span className="text-text-brand-tertiary">{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>

          <h3
            className="
            text-md
            leading-md
            font-family-body
            font-semibold
            text-text-primary
          "
          >
            {title}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex gap-xs">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-md
                py-xxs
                rounded-full
                bg-utility-gray-50
                text-utility-gray-700
                text-xs
                font-medium
                leading-sm
                border
                border-border-secondary
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
