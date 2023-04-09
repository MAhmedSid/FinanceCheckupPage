import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center mt-28  bg-[#404EED]">
      <div className="flex justify-around gap-9 ml-10  font-medium text-base leading-6 text-white">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Button</a>
      </div>
      <div className="flex m-auto gap-2">
        <AiOutlineCopyright className="w-5 h-7 font-thin " />

        <div>
          <p className="font-medium text-sm leading-4">All rights Reserved</p>
          <p className="font-light text-xs leading-3">Developed by Mayonity</p>
        </div>
      </div>
      <div className="flex gap-6 my-2 mr-20">
        <div className="bg-white p-2 rounded-sm ">
          <a href="#">
            <FaTwitter color="#404EED" />
          </a>
        </div>
        <div className="bg-white p-2 rounded-sm">
          <a href="#">
            <FaFacebookF color="#404EED" />
          </a>
        </div>
        <div className="bg-white p-2 rounded-sm">
          <a href="#">
            <FaLinkedinIn color="#404EED" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
