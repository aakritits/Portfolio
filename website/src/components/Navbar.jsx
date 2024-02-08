import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState("false");
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center mx-w-[1240px] h-24 px-4 mx-auto ">
      <h1 className="text-3xl font-bold text-[#00df9a] w-full">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-8 cursor-pointer">HOME</li>
        <li className="p-8 cursor-pointer">PROJECTS</li>
        <li className="p-8 cursor-pointer">ABOUT</li>
        <li className="p-8 cursor-pointer">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] w-full m-8">REACT.</h1>

        <ul className="p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">HOME</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            COMPANY
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            RESOURCES
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">ABOUT</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
