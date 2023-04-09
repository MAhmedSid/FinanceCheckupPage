import React, { useState } from "react";

const RouterMenu = () => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = [
    { label: "Financial health checkup", link: "#" },
    { label: "Buying Home", link: "#" },
    { label: "Allocate Savings", link: "#" },
    { label: "Debt Management", link: "#" },
    { label: "Value Spending", link: "#" },
    { label: "Saving for a Goal", link: "#" },
  ];

  function handleClick(index) {
    setActiveButton(index);
  }

  return (
    <div className="flex justify-around mt-[87px]">
      {buttons.map((button, index) => (
        <a
          key={button.label}
          href={button.link}
          className={`flex text-center items-center justify-center w-[11.4rem] h-14 rounded-xl font-medium text-base leading-[22px] ${
            index === activeButton
              ? "bg-gradient-to-r from-primary-0 to-primary-1 text-white"
              : "bg-[#404EEd] bg-opacity-[15%] text-[#404EEd]"
          }`}
          onClick={() => handleClick(index)}
        >
          {button.label}
        </a>
      ))}
    </div>
  );
};

export default React.memo(RouterMenu);
