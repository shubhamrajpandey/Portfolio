"use client";

import React, { useState } from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { ThemeToggle } from "../ToggleButton";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Header.tsx
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md transition-colors duration-500 fixed w-full z-50">
      <div className="flex justify-between items-center py-3 px-6 md:px-20">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold dark:text-white">
            Shubham Raj Pandey
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Passionate Learner
          </p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-10 md:text-[18px] text-[16px] font-medium tracking-wide">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            About Me
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            Contact Me
          </li>
        </ul>

        {/* Desktop Resume & ThemeToggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex gap-3 rounded-[8px] text-white bg-black dark:bg-green-500 border text-[18px] font-medium p-3 cursor-pointer hover:opacity-90 transition-opacity">
            Resume <PiDownloadSimpleBold className="mt-1" />
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 px-6 pb-6">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li
              onClick={() => {
                scrollToSection("about");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-green-400 transition-colors"
            >
              About Me
            </li>
            <li
              onClick={() => {
                scrollToSection("skills");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-green-400 transition-colors"
            >
              Skills
            </li>
            <li
              onClick={() => {
                scrollToSection("projects");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-green-400 transition-colors"
            >
              Projects
            </li>
            <li
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-green-400 transition-colors"
            >
              Contact Me
            </li>
          </ul>

          {/* Divider line above Resume button */}
          <div className="w-full border-t border-gray-300 dark:border-gray-600 my-4"></div>

          {/* Resume Button centered */}
          <div className="flex justify-center">
            <a href="/Shubham_Raj_Pandey_Resume.pdf" download>
              <button className="flex items-center gap-3 rounded-[8px] text-white bg-black dark:bg-green-500 border text-[18px] font-medium px-6 py-3 cursor-pointer hover:opacity-90 transition-opacity">
                Resume <PiDownloadSimpleBold className="mt-1" />
              </button>
            </a>
          </div>

          {/* Theme Toggle inside Mobile Menu */}
          <div className="mt-4 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
