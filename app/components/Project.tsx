import React from "react";

const projects = [
  {
    id: "01",
    title: "Task Tracker Web Application",
    description:
      "A full-stack task management web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project allows users to create, edit, delete, and organize personal or team tasks in a user-friendly dashboard. Implemented Google Authentication using OAuth 2.0 for secure login and user session management. Features include real-time task updates, status filters (To Do, In Progress, Done).",
    image: "/icons/tasktracker.png",
    github: "https://github.com/shubhamrajpandey/Task-Tracker.git", 
  },
  {
    id: "02",
    title: "E-Commerce Website (Shopper)",
    description:
      "A modern PHP-based eCommerce website integrated with MySQL database, featuring dynamic product management, category filtering, wishlist functionality, responsive design, and secure checkout system with Swiper-powered image sliders.",
    image: "/icons/Shopper1.png",
    github: "https://github.com/shubhamrajpandey/Shopper.git",
  },
  {
    id: "03",
    title: "Java-Based Quiz Management System",
    description:
      "Developed a desktop-based Quiz Application using Java (Swing) and MySQL, allowing users to participate in quizzes up to 5 times across various General Knowledge and Educational topics. The system includes features like randomized question selection, score tracking, and topic-wise categorization. Data such as quiz attempts, scores, and user information are securely stored and retrieved from a MySQL database.",
    image: "/icons/JavaQuiz1.png",
    github: "https://github.com/shubhamrajpandey/Quiz-management-system-java",
  },
  {
    id: "04",
    title: "Java-Based Banking Management System",
    description:
      "Developed a console-based Banking System using Core Java, focusing on basic banking operations such as account creation, deposit, withdrawal, balance inquiry, and transaction history. The system supports multiple users and ensures secure data handling using object-oriented programming principles like encapsulation, inheritance, and polymorphism. ",
    image: "/icons/BankngSystem.png",
    github: "https://github.com/shubhamrajpandey/BankingApplication",
  },
];

function Projects() {
  return (
    <div className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-12">
          My <span className="font-bold text-black">Projects</span>
        </h2>

        <div className="grid gap-30">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >

              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              <div className="w-full ">
                <h3 className="text-3xl font-bold mb-2">{project.id}</h3>
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium text-blue-600 hover:underline"
                  >
                    🔗 View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
