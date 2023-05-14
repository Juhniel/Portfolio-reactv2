import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import projectData from "../data/projectData.json";
import ProjectCard from "./ProjectCard";
import TextAnimation from "./TextAnimation";

export default function AllProjects({ handleSwitchComponent }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const projects = "Projects".split("");
  const CARDS_PER_PAGE = getCardsPerPage();

  function handleFilterChange(filter) {
    setSelectedFilter(filter);
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function getCardsPerPage() {
    return window.innerWidth < 640 ? 3 : 6; 
  }

  return (
    <section className="section" id="all-projects">
      <div
        className="container mx-auto"
      >
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
              View latest projects
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
              <option value="web">Web Application</option>
              <option value="desktop">Desktop Application</option>
              <option value="mobile">Mobile Application</option>
            </select>
          </div>
          <ul className="hidden text-sm text-secondary  font-bold text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
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
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {projectData.projects
            .filter(
              (project) =>
                selectedFilter === "all" || project.category === selectedFilter
            )
            .slice(
              (currentPage - 1) * CARDS_PER_PAGE,
              currentPage * CARDS_PER_PAGE
            )
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>

        <div className="hidden sm:flex justify-center mt-8">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="btn btn-md mx-2"
  >
    Previous
  </button>
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={
      currentPage * CARDS_PER_PAGE >=
      projectData.projects.filter(
        (project) =>
          selectedFilter === "all" || project.category === selectedFilter
      ).length
    }
    className="btn btn-md mx-2"
  >
    Next
  </button>
</div>
<div className="sm:hidden flex justify-center mt-8">
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={
      currentPage * CARDS_PER_PAGE >=
      projectData.projects.filter(
        (project) =>
          selectedFilter === "all" || project.category === selectedFilter
      ).length
    }
    className="btn btn-md mx-2"
  >
    Show More
  </button>
</div>
      </div>
    </section>
  );
}
