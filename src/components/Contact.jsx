import React from "react";

import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import TextAnimation1 from "./TextAnimation";
import TextAnimation2 from "./TextAnimationFishEye";

export default function Contact() {
  const contactTitle = "Let's work".split("");
  const together = "together!".split("");
  const sendMsg = "Send Message".split("");

  return (
    <section id="contact" className="section mt-52">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div className="flex-1 flex justify-start items-center">
            <div>
            <h2 className="text text-[60px] lg:text-[90px] xl:text-[110px] leading-none mb-14 lg:mb-40 xl:mb-48">
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
          <form className="flex-1 flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all resize-none mb-5"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-sm btn-hover text-base">
              {sendMsg.map((letter, index) => {
                return (
                  <TextAnimation2 key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation2>
                );
              })}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
