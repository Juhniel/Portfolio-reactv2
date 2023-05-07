import React from "react";

import { BsArrowUpRight, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TextAnimation from "./TextAnimation";


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

export default function Experience() {
  const experienceTitle = "Experience".split("")

  return (
    <section id="experience" className="section">
      <div className="container mx-auto mt-20">
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
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-primary mb-14 font-light leading-[0.8] lg:text-[110px] text-black dark:text-white"
            >
              {experienceTitle.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </motion.h1>
            <h3 className="text max-w[455px] mb-16">
              I am currently studying to become a software developer.
              My interest in development started in 2022 when I 
              decided to give <span className="font-semibold">Java</span> a try.
              Fast-forward to today, I started school, met awesome new
              people and fell in love with programming and web development.
            </h3>
            <button className="btn btn-sm ">Download CV</button>
            <button className="btn btn-sm ml-3">Portfolio</button>
            
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
            <div className="text">
              {experience.map((experience, index) => {
                const { name, description, title, date, place } = experience;
                return (
                  <div
                    className="border-b border-black/20 dark:border-white/20 h-[200px] mb-14 flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold">
                        {name}
                      </h4>
                      <p className="text font-thin mb-6">
                        {title}
                      </p>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end whitespace-nowrap">
                      <p className="text">{date}</p>
                      <p className="text">{place}</p>
                      {/* <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-sm">
                        {link}
                      </a> */}
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
