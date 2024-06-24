import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/img/LogoBlack.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const navigate = useNavigate();

  return (
    <nav className="bg-[#4ab45b] dark:[#4ab45b] fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            onClick={() => navigate("/")}
            className="h-20 w-32"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
          >
            Get started
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className=" cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-[#1A5D1A]"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col justify-center p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="contentOne"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => navigate("/")}
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-white rounded md:bg-transparent md:hover:text-white md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="contentTwo"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => navigate("/about")}
                className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:text-white md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contentThree"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => navigate("/services")}
                className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:text-white md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:text-white 0 md:hover:bg-transparent md:hover:text-white md:p-0"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
