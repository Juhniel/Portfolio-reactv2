import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Header({showAllProjects}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="fixed top-0 right-0 py-8 z-50 bg-white bg-opacity-0 dark:bg-zinc-900 dark:text-white">
      <div className="container mx-auto">
        <div className="hidden lg:flex justify-end">
          {/* dark/light mode */}
          <ThemeToggle />
        </div>
        <div className="flex lg:hidden justify-end">
             {/* mobile navigation */}
             <button onClick={toggleMobileNav} className="text-black dark:text-white">
            <FaBars size={24} />
          </button>
          {mobileNavOpen && <MobileNav showAllProjects={showAllProjects} />}
        </div>
      </div>
    </header>
  );
}