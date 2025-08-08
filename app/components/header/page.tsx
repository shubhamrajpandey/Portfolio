import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";


function Header() {
  return (
    <header>
      <div className="flex flex-wrap  justify-around text-black">
        {/* Logo */}
        <div className="py-1 ">
            <img className="w-25 h-25"  src="/icons/Shubhamlogo.png" alt="Logo"/>
        </div>

        {/* Navlink */}
        <div className="hidden lg:flex">
            <li className="flex gap-10 md:text-[18px] text-[16px] font-medium tracking-wide py-8">
                <ul className="cursor-pointer">About Me</ul>
                <ul className="cursor-pointer">Skills</ul>
                <ul className="cursor-pointer">Project</ul>
                <ul className="cursor-pointer">Contact Me</ul>
            </li>
        </div>

        {/* Resume Download Button */}
        <div className="py-5">
            <button className="w-33 flex gap-3 rounded-[8px] text-white bg-black border text-[18px] font-medium p-3 cursor-pointer">Resume <PiDownloadSimpleBold className="mt-1"/></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
