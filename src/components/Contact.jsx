import React from "react";

import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../variants";
import TextAnimation1 from "./TextAnimation";

export default function Contact({ isMobileDevice }) {
  const contactTitle = "Let's work".split("");
  const together = "together!".split("");

  return (
    <section id="contact" className="section mt-80 lg:mt-[28rem]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5, isMobileDevice)}
            exit={fadeOut("right", 0).exit}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            className="lg:flex-1 lg:flex lg:justify-start items-center"
          >
            <div>
              <h2 className="text text-center lg:text-start text-[60px] lg:text-[90px] xl:text-[110px] leading-none mb-14 lg:mb-40 xl:mb-48">
                {contactTitle.map((letter, index) => {
                  return (
                    <TextAnimation1 key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextAnimation1>
                  );
                })}
                <br />
                {together.map((letter, index) => {
                  return (
                    <TextAnimation1 key={index}>
                      {letter === " " ? "\u00A0" : letter}
                    </TextAnimation1>
                  );
                })}
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5, isMobileDevice)}
            exit={fadeOut("left", 0).exit}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: isMobileDevice ? true : false, amount: 0.3 }}
            action="https://formsubmit.co/e6cfc893776581ce228c666ab181a78d"
            method="POST"
            className="flex-1 flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all resize-none mb-5"
              type="text"
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <div className="flex w-full justify-center lg:justify-end">
            <button type="submit" className="btn btn-sm lg:btn-hover text-base">
              Send message
            </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
