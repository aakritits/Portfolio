import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState("false");
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center mx-w-[1240px] h-24 px-4 mx-auto">
      <h1 className="font-bold text-[#00df9a] text-3xl w-full cursor-pointer px-2 ">
        REACT.
      </h1>
      <div className="hidden md:flex font-bold">
        <div className="px-12 cursor-pointer">Home</div>
        <div className="px-12 cursor-pointer">About</div>
        <div className="px-12 cursor-pointer">Projects</div>
        <div className="px-12 cursor-pointer">Contact</div>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 border-r h-full border-r-gray-900 bg-[#000300] w-[45%]"
            : "fixed left-[-100%] "
        }
      >
        <div className="m-8">
          <h1 className="font-bold text-[#00df9a] text-3xl ease-in-out duration-5600 w-full cursor-pointer mb-7">
            REACT.
          </h1>
          <div className="p-4 cursor-pointer">Home</div>
          <div className="p-4 cursor-pointer">About</div>
          <div className="p-4 cursor-pointer">Projects</div>
          <div className="p-4 cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
