import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";


export default function App() {
  const [showWork, setShowWork] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobileDevice(window.innerWidth < 768);
    }
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSwitchComponent(component) {
    if (component === "Work") {
      setShowAllProjects(false);
      setTimeout(() => {
        setShowWork(true);
      }, 1000); // Adjust the timeout according to your exit animation duration
    } else if (component === "AllProjects") {
      setShowWork(false);
      setTimeout(() => {
        setShowAllProjects(true);
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
      <Header isMobileDevice={isMobileDevice} showAllProjects={showAllProjects} />
      <Banner scrollToElement={scrollToElement} isMobileDevice={isMobileDevice} />
      <Nav
        handleSwitchComponent={handleSwitchComponent}
        showWork={showWork}
        showAllProjects={showAllProjects}
        isMobileDevice={isMobileDevice}
      />
      <About scrollToElement={scrollToElement} isMobileDevice={isMobileDevice} />
      <Experience scrollToElement={scrollToElement} showAllProjects={showAllProjects} isMobileDevice={isMobileDevice} />
      <AnimatePresence>
        {showWork && (
          <Work
            isMobileDevice={isMobileDevice}
            handleViewAllProjects={() => handleSwitchComponent("AllProjects")}
          />
        )}
        {showAllProjects && (
          <AllProjects
            isMobileDevice={isMobileDevice}
            handleSwitchComponent={() => handleSwitchComponent("Work")}
          />
        )}
      </AnimatePresence>

      <Contact isMobileDevice={isMobileDevice} />
    </div>
  );
}
