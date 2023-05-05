import React from 'react';

import CountDown from "react-countdown"

import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion"

import { fadeIn } from '../variants';

import Selfie from "../assets/selfie2.png"

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const unitRenderer = (unit) => ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className='text-black'>0</span>;
    } else {
      switch (unit) {
        case 'days':
          return <span className='text-black dark:text-white'>{days}</span>;
        case 'hours':
          return <span className='text-black dark:text-white'>{hours}</span>;
        case 'minutes':
          return <span className='text-black dark:text-white'>{minutes}</span>;
        case 'seconds':
          return <span className='text-black dark:text-white'>{seconds}</span>;
        default:
          return null;
      }
    }
  };

  // <CountDown date={graduationDate} renderer={unitRenderer('hours')} intervalDelay={0}/> <span>Hours{"\u00A0"}</span>
  // <CountDown date={graduationDate} renderer={unitRenderer('minutes')} intervalDelay={0}/> <span>Minutes{"\u00A0"}</span>
  // <CountDown date={graduationDate} renderer={unitRenderer('seconds')} intervalDelay={0}/> <span>Seconds{"\u00A0"}</span>
  const graduationDate = new Date('2024-05-30T00:00:00');


  return(
    <section className='section' id='about' ref={ref} >
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex justify-center mb-10">
            <img className="w-[240px] rounded-2xl filter transition-all duration-300 grayscale hover:grayscale-0" src={Selfie} alt="" />
          </div>
          {/* text */}
          <div className='font-primary text-black dark:text-white'>
            <h2 className=''>About me</h2>
            <h3>I'm a student at Grit Academy, Malmö. </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae quas distinctio facilis culpa officiis asperiores at reiciendis aspernatur libero!
            </p>
            {/* stats */}
            <div className='flex justify-center text-[48px] mt-12'>Graduation</div>
            <div className='flex justify-center mt-14 gap-x-8 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] mb-2 font-secondary text-amber-400 dark:text-yellow-300'>
                  <CountDown date={graduationDate} renderer={unitRenderer('days')} intervalDelay={0}/> 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Days
                </div>
              </div>
              <div>
                <div className='text-[40px] mb-2 font-secondary text-amber-400 dark:text-yellow-300'>
                  <CountDown date={graduationDate} renderer={unitRenderer('hours')} intervalDelay={0}/> 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Hours
                </div>
              </div>
              <div>
                <div className='text-[40px] mb-2 font-secondary text-amber-400 dark:text-yellow-300'>
                  <CountDown date={graduationDate} renderer={unitRenderer('minutes')} intervalDelay={0}/> 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Minutes
                </div>
              </div>
              <div>
                <div className='text-[40px] mb-2 font-secondary text-amber-400 dark:text-yellow-300'>
                  <CountDown date={graduationDate} renderer={unitRenderer('seconds')} intervalDelay={0}/> 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                    Seconds
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className='btn btn-lg'>My portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
