import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import ProjectCard from "./ProjectCard";

export default function AllProjects() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard />
        </div>
      </div>
    </motion.section>
  );
}
