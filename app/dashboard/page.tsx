import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Skills from "../components/skill";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Project";
import ContactForm from "../components/Contact";

function HomePage() {
  return (
    <div>
    <section className=" flex items-center justify-center py-20 md:py-43 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Text Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-light leading-snug">
            Hello I’m <span className="font-bold">Shubham Raj Pandey.</span>{" "}
            <br />
            <span className="font-bold">Frontend</span>{" "}
            <span className="font-extrabold border-4 border-black px-1">
              Developer
            </span>{" "}
            <br />
            Based In <span className="font-bold">Nepal.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            I am dedicated and passionate computer science student with a strong
            foundation of programming language, algorithms. 
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-black text-white p-2 rounded-md">
              <FaFacebook />
            </a>
            <a href="#" className="border border-black p-2 rounded-md">
              <FaLinkedin />
            </a>
            <a href="#" className="border border-black p-2 rounded-md">
              <FaGithubSquare />
            </a>
            <a href="#" className="border border-black p-2 rounded-md">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
          <img
            src="/1234.jpeg"
            alt="Image"
            className="w-53 h-53 md:w-110 md:h-110 object-cover rounded-full border-2 border-black shadow-2xl"
          />
        </div>
      </div>
    </section>

    <AboutMe/>
    <Skills/>
    <Experience/>
    <Projects/>
    <ContactForm/>
    </div>
  );
}

export default HomePage;
