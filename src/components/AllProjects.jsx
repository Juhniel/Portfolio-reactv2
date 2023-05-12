import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import projectData from "../data/projectData.json";
import ProjectCard from "./ProjectCard";
import TextAnimation from "./TextAnimation";

export default function AllProjects({ handleSwitchComponent }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const projects = "Projects".split("");

  function handleFilterChange(filter) {
    setSelectedFilter(filter);
  }

  return (
    <section className="section">
      <div 
      variants={fadeIn("right", 0.3)}
      exit={fadeOut("left", 0).exit}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      id="work"
      className="container mx-auto">
        {/* title */}
        <div>
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
              onClick={handleSwitchComponent}
              className="btn btn-lg my-2 mb-8"
            >
              View latest work
            </button>
          </div>
          {/* category tab */}
          <div className="sm:hidden mb-5">
            <select
              id="tabs"
              onChange={(e) => handleFilterChange(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="all">All</option>
              <option value="web">
                Web Application
              </option>
              <option value="desktop">
                Desktop Application
              </option>
              <option value="mobile">
                Mobile Application
              </option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full">
              <p
                onClick={() => handleFilterChange("all")}
                className="inline-block w-full p-4 text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300  focus:outline-none dark:bg-gray-700 dark:text-white"
              >
                All
              </p>
            </li>
            <li
              onClick={() => handleFilterChange("desktop")}
              className="w-full"
            >
              <p className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                Desktop Applications
              </p>
            </li>
            <li onClick={() => handleFilterChange("mobile")} className="w-full">
              <p className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                Mobile Applications
              </p>
            </li>
            <li onClick={() => handleFilterChange("web")} className="w-full">
              <p className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                Web Applications
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {projectData.projects
            .filter(
              (project) =>
                selectedFilter === "all" || project.category === selectedFilter
            )
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
