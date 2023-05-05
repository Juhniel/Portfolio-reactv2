import React from 'react';

import CountDown from "react-countdown"

import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion"

import { fadeIn } from '../variants';

import Selfie from "../assets/selfie2.png"
import TextAnimation from './TextAnimation';

export default function About() {
  const title = "About me".split("");

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
            <h1 className='font-primary text-[32px]'>
            {title.map((letter, index) => {
                return (
                  <TextAnimation key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextAnimation>
                );
              })}
            </h1>
            <h3 className='h3'>Upcoming software developer</h3>
            <p>
              I am currently studying to become a software developer. 

              My interest in development started in 2022 when I decided to give <span className='font-semibold'>Java</span>   a try. 
              <br/>
              Fast-forward to today, I started school, met awesome people and fell in love with programming and 
              web development. 
              <br/>
              <br/>
              <span className='flex justify-center'>Turns out I found my real passion in life..</span> 
              <br/>
              <span className='flex justify-center'>Do not hessitate to contact me to get to know me or for any other inquiries.</span> 
            
            </p>
            {/* stats */}
            <div className='flex justify-center text-[48px] mt-12'>
              <h3 className="font-primary">Graduation</h3>
              </div>
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
