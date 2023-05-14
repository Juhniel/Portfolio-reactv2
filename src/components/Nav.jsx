import React, { useEffect, useState } from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { TbFileCertificate } from "react-icons/tb";
import { Link, Element } from "react-scroll";

export default function Nav({handleSwitchComponent, showWork, showAnotherComponent}) {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const observeSections = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    const unobserveSections = observeSections();

    return () => {
      unobserveSections();
    };
  }, [showWork, showAnotherComponent]); // Add dependencies here


  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/*  nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <a
            href="#home"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeLink === "home" ? "active" : ""
            }`}
          >
            <BiHomeAlt />
          </a>
          <a
            href="#about"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeLink === "about" ? "active" : ""
            }`}
          >
            <BiUser />
          </a>
          <a
            href="#experience"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeLink === "experience" ? "active" : ""
            }`}
          >
            <TbFileCertificate />
          </a>
          <a
             href={showWork ? "#latest-projects" : "#all-projects"}
            onClick={handleSwitchComponent}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeLink === "latest-projects" || activeLink === "all-projects"
                ? "active"
                : ""
            }`}
          >
            <BsBriefcase />
          </a>

          <a
            href="#contact"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeLink === "contact" ? "active" : ""
            }`}
          >
            <BsChatSquareText />
          </a>
        </div>
      </div>
    </nav>
  );
}
