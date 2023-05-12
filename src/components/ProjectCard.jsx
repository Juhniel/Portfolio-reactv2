import React from "react"
import Img1 from "../assets/project-recipebook.png";
import Img2 from "../assets/project-portfoliov1.png";
import Img3 from "../assets/project-webshop.png";

import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import {
  SiJavascript,
  SiReact,
  SiSpring,
  SiThymeleaf,
  SiHtml5,
  SiMysql,
  SiGithub,
  SiCss3,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export default function ProductCard({ project }) {
  function getTechnologyIcon(technology) {
    switch (technology) {
      case "Spring":
        return <SiSpring className="text px-2 text-[45px] hover:text-[#6DB33F] transition-colors duration-300" />;
      case "mySQL":
        return <SiMysql className="text px-2 text-[45px]  hover:text-[#4479A1] transition-colors duration-300" />;
      case "Java":
        return <FaJava className="text px-2 text-[45px]  hover:text-[#5382a1] transition-colors duration-300" />;
      case "JavaScript":
        return <SiJavascript className="text px-2 text-[45px] hover:text-[#F7DF1E] transition-colors duration-300" />;
      case "PostgreSQL":
        return <SiPostgresql className="text px-2 text-[45px]  hover:text-[#4169E1] transition-colors duration-300" />;
      case "React":
        return <SiReact className="text px-2 text-[45px]  hover:text-[#61DAFB] transition-colors duration-300" />;
      case "HTML":
        return <SiHtml5 className="text px-2 text-[45px]  hover:text-[#E34F26] transition-colors duration-300" />;
      case "CSS":
        return <SiCss3 className="text px-2 text-[45px]  hover:text-[#1572B6] transition-colors duration-300" />;

      default:
        return null;
    }
  }

  return (
    <div className="dark:bg-zinc-800 rounded-md p-4 shadow-xl relative overflow-hidden">
      {/* Image container */}
      <div className="group relative h-62">
        {/* Image */}
        <img
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          src={Img1}
          alt=""
        />
        {/* Overlay */}
        <div className="group-hover:bg-black/70 group-hover:scale-125 w-full h-full top-0 absolute z-80 transition-all duration-300"></div>
        {/* Pretitle */}
        <div className="absolute bottom-20 left-4 group-hover:-bottom-5  transition-all duration-500 z-50">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="text-white opacity-0 group-hover:opacity-100"
            >
              {index >= 0 ? ` #${tech}\u00A0 ` : ``}
            </span>
          ))}
        </div>
        {/* Title */}
        <div className="absolute bottom-4 left-4 group-hover:bottom-3 lg:group-hover:bottom-10 xl:group-hover:bottom-3 transition-all duration-700 z-50">
          <span className="text-3xl tracking-wide text-white opacity-0 group-hover:opacity-100">
            {project.name}
          </span>
        </div>
      </div>

      {/* Card content */}

      <div className="mt-10">
        <p className="text-secondary font-medium text-black dark:text-white mb-6">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          className="text-secondary btn-hover text-black dark:text-white tracking-widest font-bold flex justify-center mb-4"
        >
          Link to project
          <span className="ml-2 text-2xl text-black dark:text-white">
            <SiGithub />
          </span>
        </a>

        <div className="flex justify-around text px-2 items-end">
          {project.stack.map((tech, index) => (
            <React.Fragment key={index}>
              {getTechnologyIcon(tech)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
