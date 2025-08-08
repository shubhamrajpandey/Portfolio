import React from "react";

function Experience() {
  return (
    <div className=" text-white py-16 px-4  ">
      <h1 className="text-center text-4xl font-semibold mb-12 text-black">
        My <span className="font-bold">Experience</span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* HCK Experience Card */}
        <div className="text-black border border-gray-700 rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <img
                src="/icons/HearldCollege.png"
                alt="Herald College"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  Frontend Developer at Development Platform HCK (Learner)
                </h2>
              </div>
            </div>
            <div className="text-sm text-black whitespace-nowrap">
              Jun 2025 – Present
            </div>
          </div>

          <p className="mt-4 text-sm text-black leading-relaxed">
            Contributing as a Frontend Developer at Herald College Kathmandu's development platform (HCK), where I collaborate with a team to build full-stack web applications using Next.js, Tailwind CSS, TypeScript, and modern frontend tools. Actively involved in designing responsive UIs, integrating APIs, and maintaining clean, scalable code for real-world projects.
          </p>
        </div>

        {/* Sajilo Shikshya Experience Card */}
        <div className="bg-bla  ck border border-gray-700 rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <img
                src="/icons/sajiloshiksya.png"
                alt="Sajilo Shikshya"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h2 className="text-lg text-black font-semibold">
                  SQL Data Intern at Sajilo Shikshya
                </h2>
              </div>
            </div>
            <div className="text-sm text-black whitespace-nowrap">
              Jun 2024 – Oct 2024
            </div>
          </div>

          <p className="mt-4 text-sm text-black leading-relaxed">
            As an SQL Data Intern, I contributed to the company's administrative operations by executing SQL queries to input and manage data through the admin panel. My role involved ensuring accurate and efficient data entry, contributing to smooth backend operations and reliable data systems.
          </p>

          <p className="mt-2 text-sm text-black italic">
            Skills: Databases · Communication · Teamwork
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
