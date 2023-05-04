import React from 'react';

import CountDown from "react-countdown"

import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion"

import { fadeIn } from '../variants';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <span className='text-black'>Graduation!!!</span>;
    } else {
      // Render a countdown
      return (
        <span className='text-black'>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };


  return(
    <section className='section' id='about' ref={ref} >
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div>
            <h2>About me</h2>
            <h3>I'm a student at Grit Academy, Malmö. </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae quas distinctio facilis culpa officiis asperiores at reiciendis aspernatur libero!
            </p>
            {/* stats */}
            <div>
              <div>
                <div>
                  <CountDown date={new Date('2024-05-30T00:00:00')} renderer={renderer} intervalDelay={0}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
