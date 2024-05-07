import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="text-white flex justify-between items-center max-w-[1240px] h-20 px-4 mx-auto">
      <h1 className="font-bold text-[#00df9a] text-3xl cursor-pointer">
        Portfolio.
      </h1>
      <ul className="hidden md:flex font-bold">
        <li className="px-4 cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-[#00df9a]"
                : "text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="px-4 cursor-pointer">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-[#00df9a]"
                : "text-white hover:text-gray-300"
            }
          >
            About
          </NavLink>
        </li>
        <li className="px-4 cursor-pointer">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-[#00df9a]"
                : "text-white hover:text-gray-300"
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="px-4 cursor-pointer">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-[#00df9a]"
                : "text-white hover:text-gray-300"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full bg-black text-white text-md font-semibold flex flex-col justify-center items-center"
            : "fixed left-[-100%]"
        }
      >
        <ul className="grid gap-12">
          <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-[#00df9a]"
                  : "text-white hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-[#00df9a]"
                  : "text-white hover:text-gray-300"
              }
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-[#00df9a]"
                  : "text-white hover:text-gray-300"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-[#00df9a]"
                  : "text-white hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
