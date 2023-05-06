import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const experience = [
  {
    name: "UI/UX Design",
    description: "test",
    link: "Learn more",
  },
  {
    name: "Development",
    description: "test",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description: "test",
    link: "Learn more",
  },
  {
    name: "Product branding",
    description: "test",
    link: "Learn more",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-bottom mb-12 lg:mb-0 ">
            <h2 className="text mb-6">What I do</h2>
            <h3 className="text max-w[455px] mb-16">
            I am currently studying to become a software developer. My
              interest in development started in 2022 when I decided to give{" "}
              <span className="font-semibold">Java</span> a try. Fast-forward to
              today, I started school, met awesome new people and fell in love
              with programming and web development.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* experience */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            {/* experience list */}
            <div className="text">
              {experience.map((experience, index) => {
                const {name, description, link} = experience;
                return(
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}> 
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight ">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className="text-sm">{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
 
}
