import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className=" text-lg md:flex justify-around mb-14 ">
        <nav className="h-2/5 ">
          <img
            src=".assets/landingillustration.jpg"
            className="px-9 pt-14  h-1/6"
          />
        </nav>
        <div className=" ">
          <nav className="hidden md:flex pt-14 gap-11 justify-end ">
            <a href="go">Features</a>
            <a href="somewhere">downloads</a>
            <a href="faqcenter">FAQ</a>
            <button
              id="loginbtn"
              className="bg-red-500 text-slate-200 hover:bg-slate-200 hover:text-red-500 px-5 rounded-md"
            >
              Login
            </button>
          </nav>
        </div>
      </div>

      <div className="md:hidden ">
        <button
          id="toggleNav"
          onClick={toggleNav}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isNavOpen == true && (
        <nav id="mobileNav" className="md:hidden bg-gray-200 px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
