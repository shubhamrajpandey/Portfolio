"use client";

const skills = [
  { name: "Git", icon: "/icons/git1.png", percent: 80 },
  { name: "Javascript", icon: "/icons/js1.png", percent: 90 },
  { name: "React", icon: "/icons/recat.png", percent: 85 },
  { name: "Nest.Js", icon: "/icons/Nextjs.png", percent: 70 },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png", percent: 88 },
  { name: "Java", icon: "/icons/Java.png", percent: 65 },
  { name: "Figma", icon: "/icons/figmaa.png", percent: 75 },
  { name: "Node", icon: "/icons/nodde.png", percent: 80 },
  { name: "TypeScript", icon: "/icons/typescript-def.png", percent: 78 },
  { name: "Database", icon: "/icons/Database.png", percent: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 md:px-20 text-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <h2 className="text-3xl sm:text-4xl font-light mb-10">
        My{" "}
        <span className="font-bold text-black dark:text-green-400">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-full min-h-[160px] p-6 sm:p-8 border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-xl shadow-xl"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4"
            />
            <span className="text-sm sm:text-base font-semibold mb-2">{skill.name}</span>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <span className="text-xs sm:text-sm mt-1">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
