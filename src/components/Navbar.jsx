import React from "react";
//images
import banner2 from "../assets/img/banner2.png";

import logo from "../assets/img/LogoBlack.png";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav class="bg-[#4ab45b] dark:[#4ab45b] fixed w-full z-20 top-0 start-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} class="h-20 w-32" alt="Flowbite Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="contentOne"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={scrollToTop}
                href="#"
                class="block py-2 px-3 text-gray-900 bg-[#1A5D1A] rounded md:bg-transparent md:hover:text-white md:p-0"
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
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0"
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
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
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
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
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
