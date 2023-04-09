import React from "react";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="flex flex-row h-[156px] ">
      <div className="h-52 w-52 ml-36 ">
        <Logo />
      </div>
      <header className="absolute ml-auto mr-auto left-0 right-0 w-[467px] h-[54px] mt-[46px] font-[700] text-4xl ">
        Financial Health Checkup
      </header>
    </div>
  );
};

export default Header;
