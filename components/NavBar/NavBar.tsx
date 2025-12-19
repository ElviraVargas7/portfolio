"use client";

import Image from "next/image";
import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="fixed top-0 right-0 left-0 z-50">
        <div className="flex flex-row justify-between backdrop-blur-md bg-white/75 dark:bg-black/75 border-b border-gray-200 dark:border-[#490829] px-16 py-2">
          <section>
            <p className="text-[#c7417b] dark:text-[#c7417b] font-bold text-4xl">
              EVB
            </p>
          </section>

          <button
            className="md:hidden flex justify-end"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/icons/menu-pink.svg"
              alt="Menu Icon"
              width={35}
              height={35}
              priority
            />
          </button>

          <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
            <NavLinks />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-6 text-center backdrop-blur-md text-gray-800 dark:text-gray-200 font-medium shadow-xl">
            <NavLinks mobile />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
