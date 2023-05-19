import React, { useState } from "react";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import projectData from "../data/projectData.json";
import { fadeIn, fadeOut } from "../variants";

import recipebook from "../assets/images/projects/project-recipebook.png";
import portfoliov1 from "../assets/images/projects/project-portfoliov1.png";
import webshop from "../assets/images/projects/project-webshop.png";
import java from "../assets/images/projects/java.png";
import spring from "../assets/images/projects/spring.png";
import javascript from "../assets/images/projects/javascript.png";

export default function Work({ handleViewAllProjects, isMobileDevice }) {
  const myLatest = "My Latest".split("");
  const work = "Work".split("");
  const projectArray = Object.values(projectData.projects);
  const latestProjects = projectArray.slice(1, 3);
  const firstImage = projectArray[0].img;

  const [showMore, setShowMore] = useState(false);

  const images = {
    recipebook: recipebook,
    webshop: webshop,
    portfoliov1: portfoliov1,
    java: java,
    javascript: javascript,
    spring: spring,
    // Add more mappings as needed
  };

  const description = `Explore a collection of my most recent projects, where I
  showcase my skills in development, web-development and design.`;

  const moreText = ` These works demonstrate my passion for creating
  innovative solutions and my commitment to continuous learning
  and improvement. `;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="section" id="latest-projects">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-x-12">
          <div className="lg:flex-1 flex flex-col gap-y-10 lg:mt-[4.7rem] xl:mt-[3.8rem]">
            {/* text */}
            <div>
              <motion.div
                variants={fadeIn("right", 0.3, isMobileDevice)}
                exit={fadeOut("left", 0).exit}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
              >
                {" "}
                <h2 className="text text-center lg:text-start  text-[60px] mb-7 font-light leading-[0.8] xl:text-[100px] xl:mb-10">
                  {myLatest.map((letter, index) => {
                    return (
                      <TextAnimation key={index}>
                        {letter === " " ? "\u00A0" : letter}
                      </TextAnimation>
                    );
                  })}{" "}
                  <br />
                  <span className="mt-4">
                    {" "}
                    {work.map((letter, index) => {
                      return (
                        <TextAnimation key={index}>
                          {letter === " " ? "\u00A0" : letter}
                        </TextAnimation>
                      );
                    })}
                  </span>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeIn("right", 0.3, isMobileDevice)}
                exit={fadeOut("left", 0).exit}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
                className="max-w-lg text-center mx-10 lg:mx-0 lg:text-start mb-16 text-secondary text-black dark:text-white"
              >
                {description}
                {isMobileDevice && !showMore ? " " : moreText}
                {isMobileDevice && (
                  <button
                    onClick={toggleShowMore}
                    className="text-amber-400 dark:text-amber-200"
                  >
                    {showMore ? ` Show less` : "Show more"}
                  </button>
                )}
              </motion.p>
              <div className="flex justify-center">
                <motion.button
                  variants={fadeIn("right", 0.3, isMobileDevice)}
                  exit={fadeOut("left", 0).exit}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{
                    once: isMobileDevice ? true : false,
                    amount: 0.3,
                  }}
                  className="btn btn-sm lg:btn-hover text-base"
                  onClick={handleViewAllProjects}
                >
                  View all projects
                </motion.button>
              </div>
            </div>
            {/* image */}
            <motion.div
              variants={fadeIn("right", 0.3, isMobileDevice)}
              exit={fadeOut("left", 0).exit}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
              className="hidden lg:inline-block group relative overflow-hidden rounded-xl mt-[1.9rem]"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <a
                href="https://github.com/Juhniel/RecipeBookSpring"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="group-hover:scale-125 transition-all duration-500 w-full"
                  src={images[firstImage]}
                  alt=""
                />
              </a>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                {projectArray[0].stack.map((stackItem, index) => (
                  <span
                    key={index}
                    className="text-white"
                  >{` #${stackItem}\u00A0 `}</span>
                ))}
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  {projectArray[0].name}
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.5, isMobileDevice)}
            exit={fadeOut("right", 0).exit}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            className="hidden lg:flex flex-1  flex-col gap-y-10 mb-10"
          >
            <div className="hidden lg:flex flex-1 flex-col gap-y-10 mb-10 lg:mt-[8rem]">
              {latestProjects.map((project, index) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div className="group relative overflow-hidden rounded-xl mt-[42px]">
                    {/* overlay */}
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                    {/* img */}
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={images[project.img]}
                      alt=""
                    />
                    {/* pretitle */}
                    <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                      {project.stack.map((projectStack, index) => (
                        <span
                          key={index}
                          className="text-white"
                        >{` #${projectStack}\u00A0 `}</span>
                      ))}
                    </div>
                    {/* title */}
                    <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                      <span className="text-3xl text-white">
                        {project.name}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
