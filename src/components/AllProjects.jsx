import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import projectData from "../data/projectData.json";
import ProjectCard from "./ProjectCard";
import TextAnimation from "./TextAnimation";

export default function AllProjects({ handleSwitchComponent, isMobileDevice }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const projects = "Projects".split("");
  const CARDS_PER_PAGE = getCardsPerPage();

  function handleFilterChange(filter) {
    setSelectedFilter(filter);
    setCurrentPage(1);
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function getCardsPerPage() {
    return window.innerWidth < 700 ? 1 : 3;
  }

  return (
    <section className="section lg:mt-80" id="all-projects">
      <div className="container mx-auto">
        {/* title */}
        <div>
          <motion.div
            variants={fadeIn("right", 0.3, isMobileDevice)}
            exit={fadeOut("left", 0, isMobileDevice).exit}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.7 }}
            className="mb-8"
          >
            <h1 className="text text-[60px] mb-7 font-light leading-[0.8] xl:text-[110px] xl:mb-10">
              {projects.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </h1>
          </motion.div>
          {/* category tab */}
          <div className="sm:hidden mb-5">
            <select
              id="tabs"
              onChange={(e) => handleFilterChange(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            >
              <option value="all">All</option>
              <option value="web">Web Application</option>
              <option value="desktop">Desktop Application</option>
              <option value="mobile">Mobile Application</option>
            </select>
          </div>
          <motion.ul
            variants={fadeIn("left", 0.3, isMobileDevice)}
            exit={fadeOut("right", 0, isMobileDevice).exit}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.7 }}
            className="hidden text-sm text-secondary  font-bold text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
          >
            <li className="w-full">
              <p
                onClick={() => handleFilterChange("all")}
                className={`inline-block w-full p-4 ${
                  selectedFilter === "all"
                    ? "text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white"
                    : "bg-white hover:text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                } focus:ring-4 focus:ring-blue-300 focus:outline-none`}
              >
                All
              </p>
            </li>
            <li
              className="w-full"
              onClick={() => handleFilterChange("desktop")}
            >
              <p
                className={`inline-block w-full p-4 ${
                  selectedFilter === "desktop"
                    ? "text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white"
                    : "bg-white hover:text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                } focus:ring-4 focus:ring-blue-300 focus:outline-none`}
              >
                Desktop Applications
              </p>
            </li>
            <li className="w-full" onClick={() => handleFilterChange("mobile")}>
              <p
                className={`inline-block w-full p-4 ${
                  selectedFilter === "mobile"
                    ? "text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white"
                    : "bg-white hover:text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                } focus:ring-4 focus:ring-blue-300 focus:outline-none`}
              >
                Mobile Applications
              </p>
            </li>
            <li className="w-full" onClick={() => handleFilterChange("web")}>
              <p
                className={`inline-block w-full p-4 ${
                  selectedFilter === "web"
                    ? "text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white"
                    : "bg-white hover:text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                } focus:ring-4 focus:ring-blue-300 focus:outline-none rounded-r-lg`}
              >
                Web Applications
              </p>
            </li>
          </motion.ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {(() => {
            const filteredProjects = projectData.projects.filter(
              (project) =>
                selectedFilter === "all" || project.category === selectedFilter
            );

            if (filteredProjects.length === 0) {
              return (
                <h1 className="col-span-full text-center text-black dark:text-white">
                  No projects available
                </h1>
              );
            } else {
              return filteredProjects
                .slice(
                  (currentPage - 1) * CARDS_PER_PAGE,
                  currentPage * CARDS_PER_PAGE
                )
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    isMobileDevice={isMobileDevice}
                  />
                ));
            }
          })()}
        </div>
        <motion.div
          variants={fadeIn("right", 0.3, isMobileDevice)}
          exit={fadeOut("left", 0, isMobileDevice).exit}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: isMobileDevice ? true : false, amount: 0.7 }}
          className="flex justify-center mt-8"
        >
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-lg lg:btn-hover"
            >
              Previous
            </button>
          )}
          {currentPage * CARDS_PER_PAGE <
            projectData.projects.filter(
              (project) =>
                selectedFilter === "all" || project.category === selectedFilter
            ).length && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="btn btn-lg lg:btn-hover ml-2"
            >
              {CARDS_PER_PAGE === 1 ? "Next Project" : "Next"}
            </button>
          )}
        </motion.div>
        <motion.div 
         variants={fadeIn("left", 0.5, isMobileDevice)}
         exit={fadeOut("right", 0).exit}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
        className="flex justify-center mt-5">
          <button
            onClick={handleSwitchComponent}
            className="btn btn-lg my-2 ml-1 lg:btn-hover"
          >
            Back to latest projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
