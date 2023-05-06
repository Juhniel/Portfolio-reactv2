import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";



export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text">
              My Latest <br/>
              Work. 
              </h2>
              <p className="max-w-sm mb-16 text">
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Ut porro excepturi dolore 
                quasi vel aperiam vero illum dolorem repellendus facilis.
              </p>
              <button className="btn btn-sm">View my work</button>
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
                <span className="text-white">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 mb-10 lg:mt-[1.7rem]">
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
                <span className="text-white">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
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
                <span className="text-white">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
