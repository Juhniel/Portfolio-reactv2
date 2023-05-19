import React from "react";

import CountDown from "react-countdown";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";

import TextAnimation from "./TextAnimation";

export default function About({ scrollToElement, isMobileDevice }) {
  const title = "About me".split("");

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const unitRenderer =
    (unit) =>
    ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <span className="text-black">0</span>;
      } else {
        switch (unit) {
          case "days":
            return <span className="text">{days}</span>;
          case "hours":
            return <span className="text">{hours}</span>;
          case "minutes":
            return <span className="text">{minutes}</span>;
          case "seconds":
            return <span className="text">{seconds}</span>;
          default:
            return null;
        }
      }
    };

  const graduationDate = new Date("2024-05-30T00:00:00");

  return (
    <section className="section mb-20" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3, isMobileDevice)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat hidden lg:block lg:h-[480px] bg-top rounded-full duration-700 grayscale hover:grayscale-0"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5, isMobileDevice)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            className="flex flex-col items-center lg:flex-1 text-black dark:text-white"
          >
            <h1 className="text-[55px] font-primary mb-2 font-light leading-[0.8] lg:text-[90px] xl:text-[110px] text-black dark:text-white">
              {title.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </h1>
            <div className="mb-4 ml-6 text-[36px] lg:text-[40px] xl:text-[60px] font-secondary font-semibold  leading-[1]">
              <span className="mr-2 font-tertiary text-black dark:text-white">
                I am
              </span>
              <TypeAnimation
                sequence={[
                  "innovative..",
                  2000,
                  "adaptive..",
                  2000,
                  "focused..",
                  2000,
                  "motivated..",
                  2000,
                  "curious..",
                  2000,
                  "ambitious..",
                  2000,
                  "creative",
                  2000,
                ]}
                speed={30}
                className="text"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-6 mx-10 text-center">
              I embarked on my journey to become a software developer in 2022,
              when my curiosity led me to explore Java. Since then,
              my passion for programming and web development has only grown
              stronger.
              <br />
              <br />
            </p>
            {/* GRADUATION */}
            <motion.div
              variants={fadeIn("up", 0.3, isMobileDevice)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
              className="flex justify-center font-primary text-[48px] tracking-[2px] lg:tracking-[4px] xl:text-[68px] font-thin lg:btn-hover"
            >
              <h3 className="text-[34px]">Graduation</h3>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3, isMobileDevice)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
              className="flex justify-center mt-14 gap-x-8 lg:gap-x-10 mb-12"
            >
              <div>
                <div className="text-[40px] mb-2 font-primary">
                  <CountDown
                    date={graduationDate}
                    renderer={unitRenderer("days")}
                    intervalDelay={0}
                  />
                </div>
                <div className="font-primary  text-sm tracking-[2px]">days</div>
              </div>
              <div>
                <div className="text-[40px] mb-2 font-primary">
                  <CountDown
                    date={graduationDate}
                    renderer={unitRenderer("hours")}
                    intervalDelay={0}
                  />
                </div>
                <div className="font-primary text-sm tracking-[2px]">hours</div>
              </div>
              <div>
                <div className="text text-[40px] mb-2">
                  <CountDown
                    date={graduationDate}
                    renderer={unitRenderer("minutes")}
                    intervalDelay={0}
                  />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  minutes
                </div>
              </div>
              <div>
                <div className="text-[40px] mb-2 font-primary">
                  <CountDown
                    date={graduationDate}
                    renderer={unitRenderer("seconds")}
                    intervalDelay={0}
                  />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  seconds
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5, isMobileDevice)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
              className="flex justify-center"
            >
              <button
                onClick={() => scrollToElement("experience")}
                className="btn btn-lg lg:btn-hover"
              >
                Experience
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
