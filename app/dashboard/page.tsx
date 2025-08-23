"use client";

import React from "react";
import { FaFacebook, FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import Skills from "../components/skill";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Project";
import ContactForm from "../components/Contact";

function HomePage() {
  return (
    <div>
      <section className="flex items-center justify-center py-20 md:py-43 px-6 md:px-20 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-light leading-snug">
              Hello I’m{" "}
              <span className="font-bold typing border-r-2 border-black dark:border-white">
                Shubham Raj Pandey
              </span>{" "}
              <br />
              <span className="font-bold">Web</span>{" "}
              <span className="font-extrabold border-4 border-black dark:border-green-400 px-1">
                Developer
              </span>{" "}
            </h1>

            {/* Styled JSX works now because this is a client component */}
            <style jsx>{`
              .typing {
                overflow: hidden;
                white-space: nowrap;
                animation: typing 3s steps(20, end), blink 0.75s step-end infinite;
              }
              @keyframes typing {
                from { width: 0; }
                to { width: 18ch; }
              }
              @keyframes blink {
                50% { border-color: transparent; }
              }
            `}</style>

            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-md">
              I am dedicated and passionate computer science student with a
              strong foundation of programming language, algorithms.
            </p>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-black text-white p-2 rounded-md dark:bg-gray-700 dark:text-white"><FaFacebook /></a>
              <a href="#" className="border border-black p-2 rounded-md dark:border-gray-500 dark:text-white"><FaLinkedin /></a>
              <a href="#" className="border border-black p-2 rounded-md dark:border-gray-500 dark:text-white"><FaGithubSquare /></a>
              <a href="#" className="border border-black p-2 rounded-md dark:border-gray-500 dark:text-white"><FaInstagram /></a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
            <div className="border-2 border-black dark:border-gray-700 rounded-full shadow-2xl">
              <img src="/1234.jpeg" alt="Image" className="w-53 h-53 md:w-110 md:h-110 object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default HomePage;
