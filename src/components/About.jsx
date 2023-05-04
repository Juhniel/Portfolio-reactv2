import React from 'react';

import CountDown from "react-countdown"

import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion"

import { fadeIn } from '../variants';

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

  const graduationDate = new Date('2024-05-30T00:00:00');


  return(
    <section className='section' id='about' ref={ref} >
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div className='font-primary text-black dark:text-white'>
            <h2>About me</h2>
            <h3>I'm a student at Grit Academy, Malmö. </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae quas distinctio facilis culpa officiis asperiores at reiciendis aspernatur libero!
            </p>
            {/* stats */}
            <div className='flex'>
              <div>
                <div className='text-[40px] mb-2 font-secondary'>
                  <CountDown date={graduationDate} renderer={unitRenderer('days')} intervalDelay={0}/>
                  <CountDown date={graduationDate} renderer={unitRenderer('hours')} intervalDelay={0}/>
                  <CountDown date={graduationDate} renderer={unitRenderer('minutes')} intervalDelay={0}/>
                  <CountDown date={graduationDate} renderer={unitRenderer('seconds')} intervalDelay={0}/>
                </div>
                <div className='font-primary text-sm tracking-[2px]'> 
                  Days - Hours - Minutes - Seconds <br/>
                   - Graduation -
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
