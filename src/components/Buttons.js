import React from 'react';

const buttons = [
  "All Recommendation",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "UI Design",
  "Web Programming",
  "Mobile Programming",
  "Backend Development",
  "Vue JS"
];

const Buttons = () => {
  return (
    <div className="flex space-x-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${
            index === 0 ? "border border-teal-300 text-teal-500" : "bg-gray-100 text-gray-500"
          } py-2 px-4 rounded-full focus:outline-none`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;