import React from "react";
import recipebook from "../assets/images/projects/project-recipebook.png";
import portfoliov1 from "../assets/images/projects/project-portfoliov1.png";
import webshop from "../assets/images/projects/project-webshop.png";
import java from "../assets/images/projects/java.png";
import spring from "../assets/images/projects/spring.png";
import javascript from "../assets/images/projects/javascript.png";
import { motion } from "framer-motion";
import { FaJava, FaFolder } from "react-icons/fa";
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
  SiApachetomcat,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

export default function ProductCard({ project, isMobileDevice }) {
  const images = {
    recipebook: recipebook,
    webshop: webshop,
    portfoliov1: portfoliov1,
    java: java,
    javascript: javascript,
    spring: spring,
    // Add more mappings as needed
  };

  function getTechnologyIcon(technology) {
    switch (technology) {
      case "Spring":
        return (
          <SiSpring className="text px-2 text-[45px] hover:text-[#6DB33F] transition-colors duration-300" />
        );
      case "mySQL":
        return (
          <SiMysql className="text px-2 text-[55px] pt-3 h-34 hover:text-[#4479A1] transition-colors duration-300" />
        );
      case "Java":
        return (
          <FaJava className="text px-2 text-[45px]  hover:text-[#5382a1] transition-colors duration-300" />
        );
      case "JavaScript":
        return (
          <SiJavascript className="text px-2 text-[45px] hover:text-[#F7DF1E] transition-colors duration-300" />
        );
      case "PostgreSQL":
        return (
          <SiPostgresql className="text px-2 text-[45px]  hover:text-[#4169E1] transition-colors duration-300" />
        );
      case "React":
        return (
          <SiReact className="text px-2 text-[45px]  hover:text-[#61DAFB] transition-colors duration-300" />
        );
      case "HTML":
        return (
          <SiHtml5 className="text px-2 text-[45px]  hover:text-[#E34F26] transition-colors duration-300" />
        );
      case "CSS":
        return (
          <SiCss3 className="text px-2 text-[45px]  hover:text-[#1572B6] transition-colors duration-300" />
        );
      case "Tomcat":
        return (
          <SiApachetomcat className="text px-2 text-[50px] pt-3 hover:text-[#F8DC75] transition-colors duration-300" />
        );
      case "Firebase":
        return (
          <SiFirebase className="text px-2 text-[45px]  hover:text-[#FFCA28] transition-colors duration-300" />
        );
      case "Tailwind":
        return (
          <SiTailwindcss className="text px-2 text-[45px]  hover:text-[#06B6D4] transition-colors duration-300" />
        );
      default:
        return null;
    }
  }

  return (
    <motion.div
      variants={fadeIn("left", 0.5, isMobileDevice)}
      exit={fadeOut("right", 0).exit}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
      className="dark:bg-zinc-800 rounded-md shadow-xl relative overflow-hidden h-[430px] lg:h-[720px] flex flex-col"
    >
      {/* Image container */}
      <div className="group flex justify-center relative h-64">
        {/* Image */}
        {isMobileDevice ? (
          <div className="text-black dark:text-white">
            <span className="flex justify-center">
            <FaFolder size={40} />
            </span>
            <p className="font-secondary text-black dark:text-white text-xl font-bold">{project.name}</p>
          </div>
        ) : (
          <img
            className="w-full lg:h-[300px] lg:object-fit group-hover:scale-125 transition-all duration-500"
            src={images[project.img]}
            alt="project image"
          />
        )}

        {/* Overlay */}
        {!isMobileDevice && (
          <div className="group-hover:bg-black/70 group-hover:scale-[1.64] w-full h-full top-0 absolute z-80 transition-all duration-300"></div>
        )}

        {/* Pretitle */}
        {!isMobileDevice && (
          <>
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
            <div className="absolute -bottom-5 lg:bottom-0 lg:left-4 group-hover:bottom-5 lg:group-hover:bottom-10 xl:group-hover:-bottom-16 transition-all duration-700 z-50">
              <span className="text-3xl tracking-wide text-white opacity-0 group-hover:opacity-100">
                {project.name}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Card content */}

      <div className="lg:mt-10 flex-grow h-74 flex flex-col">
        <p className="text-secondary font-medium text-black dark:text-white flex-grow mb-14 lg:mt-12 text-center mx-4">
          {project.description}
        </p>
        <a
          href={project.github}
          target="_blank"
          className="text-secondary text-xl lg:btn-hover text-black dark:text-white tracking-widest font-bold flex justify-center mb-12"
        >
          Link to project
          <span className="ml-2 text-2xl text-black dark:text-white">
            <SiGithub />
          </span>
        </a>

        <div className="flex justify-around text px-2 pb-5 items-end">
          {project.stack.map((tech, index) => (
            <React.Fragment key={index}>
              {getTechnologyIcon(tech)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
