import React from "react"
import recipebook from "../assets/images/projects/project-recipebook.png";
import portfoliov1 from "../assets/images/projects/project-portfoliov1.png";
import webshop from "../assets/images/projects/project-webshop.png";
import java from "../assets/images/projects/java.png";
import spring from "../assets/images/projects/spring.png";
import javascript from "../assets/images/projects/javascript.png";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
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
  SiTailwindcss
} from "react-icons/si";


export default function ProductCard({ project }) {

  const images = {
    "recipebook": recipebook,
    "webshop": webshop,
    "portfoliov1": portfoliov1,
    "java": java,
    "javascript": javascript,
    "spring": spring,
    // Add more mappings as needed
  };

  function getTechnologyIcon(technology) {
    switch (technology) {
      case "Spring":
        return <SiSpring className="text px-2 text-[45px] hover:text-[#6DB33F] transition-colors duration-300" />;
      case "mySQL":
        return <SiMysql className="text px-2 text-[55px] pt-3 h-34 hover:text-[#4479A1] transition-colors duration-300" />;
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
      case "Tomcat":
      return <SiApachetomcat className="text px-2 text-[50px] pt-3 hover:text-[#F8DC75] transition-colors duration-300" />;
      case "Firebase":
      return <SiFirebase className="text px-2 text-[45px]  hover:text-[#FFCA28] transition-colors duration-300" />
      case "Tailwind":
      return <SiTailwindcss className="text px-2 text-[45px]  hover:text-[#06B6D4] transition-colors duration-300" />
      default:
        return null;
    }
  }

  return (
    <motion.div 
    variants={fadeIn("left", 0.5)}
    exit={fadeOut("down", 0).exit}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className="dark:bg-zinc-800 rounded-md p-4 shadow-xl relative overflow-hidden h-[700px] xl:h-[800px] flex flex-col">
      {/* Image container */}
      <div className="group relative h-62">
        {/* Image */}
        <img
          className="w-full  xl:h-[350px] lg:object-cover group-hover:scale-125 transition-all duration-500"
          src={images[project.img]}
          alt="project image"
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

      <div className="mt-14 lg:mt-10 flex-grow h-74 flex flex-col">
      <p className="text-secondary font-medium text-black dark:text-white flex-grow mb-4">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        className="text-secondary text-xl btn-hover text-black dark:text-white tracking-widest font-bold flex justify-center mb-12"
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
