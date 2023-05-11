import React from "react";

import { motion, AnimatePresence} from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import Img1 from "../assets/project-recipebook.png";
import Img2 from "../assets/project-portfoliov1.png";
import Img3 from "../assets/project-webshop.png";



export default function Work({handleViewWork}) {
  
  return (
    <section
    className="section"
    id="work">
      <div className="container mx-auto mt-40">
        <div className="flex flex-col lg:flex-row gap-x-12">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          exit={fadeOut("left", 0).exit}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 mb-10 lg:mt-[4.7rem] xl:mt-[4.7rem]">
            {/* text */}
            <div>
              <h2 className="text text-[60px] mb-7 font-light leading-[0.8] xl:text-[110px] xl:mb-10">
              My Latest <br/>
              <span className="mt-4">Work</span>
              
              </h2>
              <p className="max-w-sm mb-16 text">
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Ut porro excepturi dolore 
                quasi vel aperiam vero illum dolorem repellendus facilis.asjfoasjfoaskoaskasko

              </p>
              <button className="btn btn-sm" onClick={handleViewWork}>View my work</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden dark:border-2 dark:border-white rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img 
              className="group-hover:scale-125 transition-all duration-500" 
              src={Img1} 
              alt="" 
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">#Spring #MySQL #JavaScript #Thymeleaf</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Recipebook</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          exit={fadeOut("right", 0).exit}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 mb-10 lg:mt-[8rem]">
            {/* image */}
            <div className="group relative overflow-hidden dark:border-2 dark:border-white rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img 
              className="group-hover:scale-125 transition-all duration-500" 
              src={Img2} 
              alt="" 
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">#HTML #CSS #JavaScript</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Portfolio v1</span>
              </div>
            </div>
             {/* image */}
             <div className="group relative overflow-hidden dark:border-2 dark:border-white rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img 
              className="group-hover:scale-125 transition-all duration-500" 
              src={Img3} 
              alt="" 
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white">#React #JavaScript #CSS #Tailwind #HTML </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Webshop</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
