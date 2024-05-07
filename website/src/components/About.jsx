import React from "react";
import githubLogo from "../images/github_PNG72.png";
import linkedinLogo from "../images/LinkedIn-Symbole.png";

function About() {
  return (
    <div className="container mx-auto px-4 py-2 md:py-16 text-left justify-start mt-40 h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
        About Me
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-lg md:text-xl text-white mb-6 font-semibold">
          Currently pursuing my Bachelor's degree in Computer Science. My
          academic journey has equipped me with a solid foundation in
          programming principles and problem-solving techniques including
          algorithms and data structures.
        </p>
      </div>
      <div className="flex flex-wrap text-center justify-center mt-4">
        <a
          href="https://www.linkedin.com/in/akriti-adhikari-9a4a2522a/"
          target="_blank"
          className="bg-[#00df9a] text-white font-semibold py-2 px-4 rounded-md mr-4 mb-4 inline-flex items-center justify-center hover:bg-[#24ecad] transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aakritits"
          target="_blank"
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md mb-4 inline-flex items-center justify-center hover:bg-gray-900 transition duration-300"
        >
          <img src={githubLogo} alt="GitHub" className="w-6 h-6 mr-2" /> GitHub
        </a>
      </div>
    </div>
  );
}

export default About;
