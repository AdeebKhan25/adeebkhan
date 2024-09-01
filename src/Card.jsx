import React from "react";

const Card = ({ heading, content, imgSrc, tags, isOnline, git, access }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-300 flex flex-col h-full">
      <div className="p-4 flex-grow">
        <img
          src={imgSrc}
          alt={heading}
          className="h-full w-full border border-gray-300"
        />
      </div>
      <div className="p-4 flex-grow">
        <p className="mb-3 font-medium text-2xl">{heading}</p>
        <p>{content}</p>
      </div>
      <div className="mt-auto p-4 text-xs">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 font-bold text-blue-500 border border-blue-500 rounded-lg p-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="p-4 mt-auto">
        <a href={git} target="_blank" rel="noopener noreferrer">
          <button className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Github Repo
          </button>
        </a>
        {isOnline && (
          <a href={access} target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Access
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
