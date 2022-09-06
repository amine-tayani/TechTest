import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import Logo from "./icons/Logo";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-8 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 font-quick">
      <div className="relative flex items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <Logo />
        </a>
        <ul className="items-center space-x-2 hidden md:flex md:mt-2 lg:justify-center lg:ml-20 py-4 ">
          <li>
            <a
              href="#"
              className="font-semibold m-2 hover:bg-gray-200 text-black text-lg px-4 py-3 transition-colors duration-200 "
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`font-semibold text-lg px-4 py-3 transition-colors duration-200`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold m-2 hover:bg-gray-200 text-black text-lg px-4 py-3 transition-colors duration-200"
            >
              Career
            </a>
          </li>
        </ul>
        <ul className=" items-center hidden sm:flex space-x-8">
          <li>
            <a
              href="#"
              className="font-semibold m-2 hover:bg-gray-200 text-black text-lg px-4 py-3 transition-colors duration-200"
            >
              En
            </a>
          </li>
        </ul>
        <div className="sm:hidden">
          <button
            className={`${isMenuOpen ? "hidden" : "block"} `}
            onClick={() => setIsMenuOpen(true)}
          >
            <Hamburger />
          </button>
          {isMenuOpen && (
            <div className="min-w-max absolute top-0 -left-4 w-full max-z ">
              <div className=" bg-white min-h-screen min-w-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-8">
                    <a
                      href="/"
                      aria-label="Company"
                      className="inline-flex items-center"
                    >
                      <Logo />
                    </a>
                  </div>
                  <div className="px-16">
                    <button
                      aria-label="Close Menu"
                      className="p-4 -mt-2 transform hover:scale-105 transition duration-200 focus:outline-none focus:shadow-outline shadow rounded-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-6 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className="mx-4 h-screen w-screen">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/artworks"
                        aria-label="Our product"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/creator"
                        aria-label="Our product"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Career
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        En
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
