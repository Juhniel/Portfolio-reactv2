import React from "react";

import { motion, AnimatePresence} from "framer-motion";
import TextAnimation from "./TextAnimation";
import TextAnimation2 from "./TextAnimationFishEye";
import { fadeIn, fadeOut } from "../variants";
import recipebook from "../assets/project-recipebook.png";
import portfoliov1 from "../assets/project-portfoliov1.png";
import webshop from "../assets/project-webshop.png";



export default function Work({handleViewAllProjects}) {
  const myLatest = "My Latest".split("");
  const work = "Work".split("");
  const viewMyWork = "View all projects".split("");
  
  return (
    <section
    className="section"
    id="latest-projects">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          exit={fadeOut("left", 0).exit}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 mb-10 lg:mt-[4.7rem] xl:mt-[3.8rem]">
            {/* text */}
            <div>
              <h2 className="text text-[60px] mb-7 font-light leading-[0.8] xl:text-[100px] xl:mb-10">
              {myLatest.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })} <br/>
              <span className="mt-4">  {work.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}</span>
              
              </h2>
              <p className="max-w-lg mb-16 text-secondary text-black dark:text-white">
              Explore a collection of my most recent projects, 
              where I showcase my skills in development, web-development and design. <br/> These works demonstrate my passion for creating 
              innovative solutions and my commitment to continuous learning and improvement.
              </p>
              <button className="btn btn-sm btn-hover text-base" onClick={handleViewAllProjects}>
              {viewMyWork.map((letter, index) => {
                return (
                  <TextAnimation2 key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation2>
                );
              })}
              </button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img 
              className="group-hover:scale-125 transition-all duration-500" 
              src={recipebook} 
              alt="" 
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">#Spring #MySQL #JavaScript #Thymeleaf</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Recipebook</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          exit={fadeOut("right", 0).exit}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 mb-10 lg:mt-[8rem]">
            {/* image */}
            <div className="group relative overflow-hidden rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img 
              className="group-hover:scale-125 transition-all duration-500" 
              src={portfoliov1} 
              alt="" 
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">#HTML #CSS #JavaScript</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Portfolio v1</span>
              </div>
            </div>
             {/* image */}
             <div className="group relative overflow-hidden rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img 
              className="group-hover:scale-125 transition-all duration-500" 
              src={webshop} 
              alt="" 
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">#React #JavaScript #CSS #Tailwind #HTML </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Webshop</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
