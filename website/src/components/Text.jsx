import React from "react";
import Typed from "react-typed";

function Text() {
  return (
    <div className="text-white mt-60 text-center h-screen mx-auto">
      <p className="text-[#00df9a] font-bold">Front-End React Developer</p>
      <h1 className="font-bold py-6 sm:text-4xl md:text-5xl text-2xl">
        Hi, I'm Akriti Adhikari!
        <br />
        <span className="text-xl">
          A passionate Front-End React Developer based in Kathmandu.
        </span>
        <br />
        <span className="text-xl sm:text-2xl md:text-3xl ">
          More Updates Coming Soon.
        </span>
      </h1>
      <div className="font-bold text-xl sm:text-2xl md:text-3xl flex justify-center text-[#00df9a]">
        <p>Tech Stack </p>
        <Typed
          className="pl-2"
          strings={["JavaScript", "React", "Tailwind", "HTML"]}
          typeSpeed={20}
          backSpeed={30}
          loop
        />
      </div>
    </div>
  );
}

export default Text;
