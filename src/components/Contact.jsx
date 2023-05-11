import React from "react";

import {motion} from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section mt-52">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div className="flex-1 flex justify-start items-center">
            <div>
            <h4 className="text text-xl uppercase mb-2 tracking-wide mb-2">
              Get in touch
            </h4>
            <h2 className="text text-[45px] lg:text-[90px] leading-none mb-12">
              Let's work <br /> together!
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
              className="text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-sm">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
