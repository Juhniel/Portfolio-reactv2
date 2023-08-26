import React, { useState } from "react";
import cv from "../assets/cv.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TextAnimation from "./TextAnimation";
import experienceData from "../data/experienceData.json";

export default function Experience({
  scrollToElement,
  showAllProjects,
  isMobileDevice,
}) {
  const experienceTitle = "Experience".split("");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const description = `
  As a highly motivated individual with a passion for learning and
  self-improvement, I have gained valuable experience in the world
  of programming since July 2022. My diverse skill set includes
  languages such as Java, JavaScript and frameworks like React
  and Spring. `;

  const moreText = `
  Alongside this, I have also developed a understanding of
  back-end tools & frameworks. I continuously strive to expand my
  knowledge and stay up-to-date with the latest industry trends,
  enabling me to deliver cutting-edge solutions in my projects.
  `;

  return (
    <section id="experience" className="section">
      <div className="container mx-auto mb-80 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <div className="flex flex-col items-center lg:items-start lg:flex-1 lg:bg-bottom mb-12 lg:mr-14 lg:mb-0">
            <motion.h1
              variants={fadeIn("right", 0.3, isMobileDevice)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.7 }}
              className="text text-[55px] mb-7 font-light leading-[0.8] xl:text-[100px] xl:mb-10"
            >
              {experienceTitle.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </motion.h1>
            <motion.div
              variants={fadeIn("right", 0.3, isMobileDevice)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
              className="text-secondary mx-10  text-center lg:text-start lg:mr-12 text-black dark:text-white max-w[455px] mb-2 ml-2 relative"
            >
              <h3>
                {description}
                {isMobileDevice && !showMore ? "\u000A" : moreText}
                {isMobileDevice && (
                  <button
                    onClick={toggleShowMore}
                    className="text-amber-400 dark:text-amber-200"
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>
                )}
              </h3>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3, isMobileDevice)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            >
              <span className="flex justify-end mr-4 lg:mr-20 italic font-light text-black dark:text-white">
                - Juhn Kim
              </span>
              <br />
              <h3 className="text-secondary text-center text-black dark:text-white mb-5">
                <span className="font-secondary font-medium text-[20px] tracking-wide mb-2">
                  Keywords
                </span>
                <br />
                <span className="font-thin mb-2 ">
                  #Java #Spring #mySQL #PostgreSQL #Git #HTML #CSS #JavaScript
                  #React #Tailwind #Swing #Agile{" "}
                </span>
              </h3>
              <div className="flex justify-center">    
              <button className="btn btn-sm lg:btn-hover text-base">
                <a href={cv} download>
                  Download CV
                </a>
              </button>
              <button
                onClick={() =>
                  scrollToElement(
                    showAllProjects ? "all-projects" : "latest-projects"
                  )
                }
                className="btn btn-sm lg:btn-hover text-base ml-3"
              >
                Portfolio
              </button>
              </div>  
            </motion.div>
          </div>
          {/* experience */}
          <motion.div
            variants={fadeIn("left", 0.5, isMobileDevice)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            className="flex-1"
          >
            {/* experience list */}
            <div className="text mt-24 lg:mt-6 h-30">
              {experienceData.map((experience, index) => {
                const { name, description, title, date, place } = experience;

                const [showMoreExp, setShowMoreExp] = useState(false);

                const toggleShowMoreExp = () => {
                  setShowMoreExp(!showMoreExp);
                };

                const shortDescription = description.slice(0, 40);
                const moreTextExp = description.slice(200);

                return (
                  <div
                    className="border-b border-black/20 dark:border-white/20 mb-14  flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold">
                        {name}
                      </h4>
                      <p className="text font-thin mb-6">{title}</p>
                      <p className="font-secondary leading-tight mb-12">
                        {isMobileDevice && !showMoreExp
                          ? `${shortDescription} `
                          : description}
                        {isMobileDevice && (
                          <button
                            onClick={toggleShowMoreExp}
                            className="text-amber-400 dark:text-amber-200"
                          >
                            {showMoreExp ? "Show less" : "Show more"}
                          </button>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end whitespace-nowrap">
                      <p className="text">{date}</p>
                      <p className="text">{place}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
