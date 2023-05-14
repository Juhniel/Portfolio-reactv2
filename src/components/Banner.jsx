import React from "react";
import Selfie from "../assets/images/selfies/cv-nobg.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import TextAnimation from "./TextAnimation";
import TextAnimation2 from "./TextAnimationFishEye";

export default function Banner({scrollToElement}) {
  const name = "Juhn Kim".split("");
  const contactMe = "Contact Me".split("");
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-primary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] mb-2 font-light leading-[0.8] lg:text-[90px] xl:text-[110px] text-black dark:text-white"
            >
              {name.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 ml-6 text-[36px] lg:text-[40px] xl:text-[60px] font-secondary font-semibold  leading-[1]"
            >
              <span className="mr-2 text">I'm a</span>

              <TypeAnimation
                sequence={[
                  "developer",
                  2000,
                  "..",
                  2000,
                  "student",
                  2000,
                  "..",
                  2000,
                ]}
                speed={30}
                className="text"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-black dark:text-white"
            >
              - welcome to my porfolio
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button 
              onClick={() => scrollToElement("contact")}
              className="btn btn-lg btn-hover text-base">
                {contactMe.map((letter, index) => {
                  return (
                    <TextAnimation2 key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextAnimation2>
                  );
                })}
              </button>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] lg:ml-11 gap-x-5 max-w-max mx-auto lg:mx-0"
            >
               <a href="https://www.linkedin.com/in/juhn-kim-7872a5251/" target="_blank">
                <FaLinkedinIn className="text btn-hover" size={26} />
              </a>
              <a href="https://github.com/Juhniel" target="_blank">
                <FaGithub className="text btn-hover" size={26} />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img
              src={Selfie}
              className="w-[400px] rounded-2xl filter transition-all duration-700 grayscale hover:grayscale-0 "
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
