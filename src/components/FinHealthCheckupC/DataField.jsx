import React from "react";

const DataField = (props) => {
  const { heading, budgetBox, data } = props;

  return (
    <div className="mt-5">
      <h3 className="font-semibold text-center text-xs text-[#121212] text-opacity-70 leading-[18px]">
        {heading}
      </h3>
      <div
        className={`flex justify-center items-center h-12 w-56 text-center rounded-xl bg-[rgb(236,236,236)] bg-opacity-50 font-semibold text-base leading-6  ${
          budgetBox
            ? "bg-[#404EED] bg-opacity-20 text-[#404EED]"
            : "text-[#0A1827] bg-[#ECECEC] bg-opacity-50"
        }`}
      >
        {data}
      </div>
    </div>
  );
};

export default DataField;
