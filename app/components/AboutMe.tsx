import React from "react";

function AboutMe() {
  return (
    <div className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border-2 border-gray-300 rounded-xl p-4">
            <img
              src="/icons/Shubham.jpeg" 
              alt="About Me Illustration"
              className="w-[350px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold mb-4">
            About <span className="font-bold text-black">Me</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, NestJS, TailwindCSS, Supabase and much more.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
