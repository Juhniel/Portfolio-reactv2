import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import ProjectCard from "./ProjectCard";
import TextAnimation from "./TextAnimation";

export default function AllProjects({handleViewWork}) {
  const projects = "Projects".split("");
  return (
    <motion.section
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      id="work"
      className="section"
    >
      <div className="container mx-auto">
        {/* title */}
        <div className="">
          <div className="mb-8">
            <h1 className="text text-[60px] mb-7 font-light leading-[0.8] xl:text-[110px] xl:mb-10">
              {projects.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </h1>
            <button 
            onClick={handleViewWork}
            className="btn btn-lg my-2 mb-8">View latest work</button>
          </div>
          {/* category tab */}
          <div className="sm:hidden mb-5">
            <label htmlFor="tabs" className="sr-only">
              Select your country
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Web Applications</option>
              <option>Desktop Applications</option>
              <option>Mobile Applications</option>
              <option>Miscellaneous</option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full">
              <a
                href="#"
                className="inline-block w-full p-4 text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300  focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                Web Applications
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Desktop Applications
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Mobile Applications
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Miscellaneous
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <ProjectCard />
        </div>
      </div>
    </motion.section>
  );
}
