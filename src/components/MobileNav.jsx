import React from "react";

export default function MobileNav({showAllProjects}) {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: showAllProjects ? "#all-projects" : "#latest-projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="absolute top-0 right-0 mt-14 mr-4 w-48 bg-white dark:bg-zinc-900 rounded shadow-lg">
      <ul className="py-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 text-black dark:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}