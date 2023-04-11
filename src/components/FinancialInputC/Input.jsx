import React, { useState } from "react";

const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { label } = props;

  
  const handleChange = (event) => {
    const newValue = event.target.value.replace(/\D/g, "");
    const formattedValue = Number(newValue).toLocaleString();
    setValue(formattedValue);
  };

  return (
    <div className="flex flex-col">
      <label
        className={`${
          focused ? "text-[#404EED]" : "text-[#121212]"
        } opacity-80 font-semibold text-xs leading-4 mt-1 mb-[3px]`}
        htmlFor={label}
      >
        {label}
      </label>
      <div className="relative ">
        <span
          className={`${
            value ? "" : "hidden"
          }  text-black absolute top-[13px] left-[6px] font-semibold`}
        >
          $
        </span>
        <input
          onChange={handleChange}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          name={label}
          id={label}
          value={value}
          className="w-[14.1rem] h-[50px] rounded-xl bg-[rgb(236,236,236)] bg-opacity-50 text-[#0A1827] text-base font-semibold leading-6 px-[17px] py-[13px] font-body focus:border-[#404EED] focus:border-2 outline-none"
          type="text"
        />
      </div>
    </div>
  );
};

export default InputField;
