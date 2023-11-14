"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import NavbarDropdown from "./navbarDropdown";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="bg-tertiary-300 relative">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-tertiary-300 relative">
          {/* Icon */}
          <a href="/">
            <img
              className="w-[124px] h-9 lg:w-[250px] lg:h-[100px] object-cover z-20 relative"
              src="/assets/images/storexpert.png"
              alt="STOREXPERT-icon"
            />
          </a>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? `${styles.open}` : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="/pricing">
              <p className="text-black-100  cursor-pointer">Pricing</p>
            </a>
            <a href="/login">
              <p className="text-black-100 underline cursor-pointer">Login</p>
            </a>
            <a href="/login">
              <button className="border bg-black text-white hover:bg-slate-800 md:py-2.5 px-4 py-3.5 rounded-full md:px-[25px]">
                Start free trial
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}
