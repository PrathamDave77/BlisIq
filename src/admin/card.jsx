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
      "
    >

      <div className="w-full aspect-[16/9] overflow-hidden">
        <img src={image} alt="cover" className="w-full h-full object-cover" />
      </div>

      <div className="p-xl flex flex-col gap-md self-stretch">
        <div
          className="
            text-text-brand-tertiary
            text-xs
            font-semibold
            
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
            leading-display-sm
            font-semibold
            text-text-primary
          "
        >
          {title}
        </h3>

        {/* Tags */}
        <div className="flex gap-xs">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-sm
                py-xxs
                radius-full
                bg-bg-secondary
                text-text-secondary
                text-xs
                font-medium
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
