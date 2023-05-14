import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [showWork, setShowWork] = useState(true);
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  function handleSwitchComponent(component) {
    if (component === "Work") {
      setShowAnotherComponent(false);
      setTimeout(() => {
        setShowWork(true);
      }, 1000); // Adjust the timeout according to your exit animation duration
    } else if (component === "AllProjects") {
      setShowWork(false);
      setTimeout(() => {
        setShowAnotherComponent(true);
      }, 1000); // Adjust the timeout according to your exit animation duration
    }
  }

  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="bg-white bg-no-repeat bg-cover overflow-hidden dark:bg-zinc-900 dark:text-white">
      <Header />
      <Banner scrollToElement={scrollToElement} />
      <Nav
        handleSwitchComponent={handleSwitchComponent}
        showWork={showWork}
        showAnotherComponent={showAnotherComponent}
      />
      <About />
      <Experience />
      <AnimatePresence>
        {showWork && (
          <Work
            handleViewAllProjects={() => handleSwitchComponent("AllProjects")}
          />
        )}
        {showAnotherComponent && (
          <AllProjects
            handleSwitchComponent={() => handleSwitchComponent("Work")}
          />
        )}
      </AnimatePresence>

      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}
