import React from "react";
import cv from "../assets/cv.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TextAnimation from "./TextAnimation";
import TextAnimation2 from "./TextAnimationFishEye";


const experience = [
  {
    name: "Capgemini",
    title: "Intern - Software Engineer ",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum repellat quidem maiores quaerat ipsum soluta omnis numquam eligendi! Atque, corporis!",
    date: "Jun. 2023 - Aug. 2023",
    place: "Malmö, Sweden",
  },
  {
    name: "Grit Academy",
    title: "Student",
    description: "Java as programming language with courses within front-end & back-end development.",
    date: "Aug. 2022 - Jun. 2024",
    place: "Malmö, Sweden",
  },
  {
    name: "Sweprima AB",
    title: "Administration & Coordinator",
    description: "Primary responsibilities involved managing the financial aspects of the company. Bookkeeping and invoices including payroll for the employees.",
    date: "Aug. 2022 - Jun. 2024",
    place: "Halmstad, Sweden",
  },
];

export default function Experience({scrollToElement, showAllProjects}) {
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
              className="text text-[60px] mb-7 font-light leading-[0.8] xl:text-[110px] xl:mb-10"
            >
              {experienceTitle.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </motion.h1>
            <h3 className="text-secondary text-black dark:text-white max-w[455px] mb-12 ml-2">
             I have been programming since July 2022. 
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
            onClick={() => scrollToElement(showAllProjects ? "all-projects" : "latest-projects")}
            className="btn btn-sm btn-hover text-base ml-3">
              
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
              {experience.map((experience, index) => {
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
                      <p className="text font-thin mb-6">
                        {title}
                      </p>
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
