import React from "react";
// images
import Selfie from "../assets/cv.jpg";
// icons
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

export default function Banner() {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-tertiary lg:text-left">
            <h1 className="text-[55px] mb-6 font-light leading-[0.8] lg:text-[110px] text-black dark:text-white">
              JUHN <span>KIM</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 font-tertiary text-black dark:text-white">I'm A</span>

              <TypeAnimation
                sequence={[
                  "Student",
                  2000,
                  "Developer",
                  2000,
                ]}
                speed={50}
                className="text-black font-tertiary"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-black dark:text-white">
              Welcome to my porfolio
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            {/* Socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaFacebook color="black"/>
              </a>
              <a href="#">
                <FaGithub color="black"/>
              </a>
              <a href="#">
                <FaLinkedinIn color="black"/>
              </a>
            </div>
          </div>
          {/* image */}
          <div>
            <img src={Selfie} className="w-[400px] rounded-full filter transition-all duration-300 grayscale hover:grayscale-0" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
