import React from "react";
import Typed from "react-typed";

function Text() {
  return (
    <div className="text-white mt-40 mx-auto flex flex-col items-center ">
      <div className="w-full ml-12 max-w-[640px] text-left items-start">
        {/* Align "Hi," to the left within the center-aligned block */}

        <p className="font-bold text-lg sm:text-xl md:text-2xl">Hi,</p>

        {/* Main title text remains centered in the same block */}
        <p className="text-4xl sm:text-5xl md:text-5xl font-bold mt-1">
          I'm Akriti Adhikari!
        </p>
        <p className="text-[#00df9a] font-bold text-xl sm:text-2xl md:text-3xl mt-2">
          Front-End React Developer
        </p>
        <p className="text-md mb-0">From Nepal</p>
        <div className="font-bold text-xl sm:text-2xl md:text-3xl flex text-left items-start text-[#00df9a] mt-2">
          <p className=""> Tech Stack </p>
          <Typed
            className="pl-2  "
            strings={["JavaScript", "React", "Tailwind", "HTML"]}
            typeSpeed={20}
            backSpeed={30}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Text;
