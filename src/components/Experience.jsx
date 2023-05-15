import React from "react";
import cv from "../assets/cv.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TextAnimation from "./TextAnimation";
import TextAnimation2 from "./TextAnimationFishEye";
import experienceData from "../data/experienceData.json";

export default function Experience({ scrollToElement, showAllProjects }) {
  const experienceTitle = "Experience".split("");
  const download = "Download CV".split("");
  const portfolio = "Portfolio".split("");

  return (
    <section id="experience" className="section lg:mb-96">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom mb-12 mr-14 lg:mb-0"
          >
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text text-[60px] mb-7 font-light leading-[0.8] xl:text-[100px] xl:mb-10"
            >
              {experienceTitle.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </motion.h1>
            <div className="text-secondary text-black dark:text-white max-w[455px] mb-2 ml-2 relative">
              <h3>
                As a highly motivated individual with a passion for learning
                and self-improvement, I have gained valuable experience in the
                world of programming since July 2022. My diverse skill set
                includes languages such as Java & JavaScript and frameworks like
                React and Spring. <br /> <br />Alongside this, I have also developed a
                understanding of back-end tools & frameworks. I continuously
                strive to expand my knowledge and stay up-to-date with the
                latest industry trends, enabling me to deliver cutting-edge
                solutions in my projects. 
                <br />
              </h3>
            </div>

            <span className="flex justify-end mr-12 italic font-light text-black dark:text-white">
              - Juhn Kim
            </span>
            <br />
            <h3 className="text-secondary text-black dark:text-white mb-5">
              <span className="font-light text-[24px] tracking-wider mb-2">
                Keywords
              </span>
              <br />
              <span className="font-medium mb-2">
                #Java #Spring #mySQL #PostgreSQL #Git #HTML #CSS #JavaScript
                #React #Tailwind #Swing #Agile{" "}
              </span>
            </h3>

            <button className="btn btn-sm btn-hover text-base">
              <a href={cv} download>
                {download.map((letter, index) => {
                  return (
                    <TextAnimation2 key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextAnimation2>
                  );
                })}
              </a>
            </button>
            <button
              onClick={() =>
                scrollToElement(
                  showAllProjects ? "all-projects" : "latest-projects"
                )
              }
              className="btn btn-sm btn-hover text-base ml-3"
            >
              {portfolio.map((letter, index) => {
                return (
                  <TextAnimation2 key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation2>
                );
              })}
            </button>
          </motion.div>
          {/* experience */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* experience list */}
            <div className="text mt-8 h-30">
              {experienceData.map((experience, index) => {
                const { name, description, title, date, place } = experience;
                return (
                  <div
                    className="border-b border-black/20 dark:border-white/20 mb-14 lg:h-[240px] xl:h-[200px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold">
                        {name}
                      </h4>
                      <p className="text font-thin mb-6">{title}</p>
                      <p className="font-secondary leading-tight mb-12">
                        {description}
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
