import React from 'react';

export default function Contact() {
  return(
    <section id='contact' className='py-16 lg:section'>
      {/* text */}
      <div className='flex-1'>
        <div>
          <h4 className='text text-xl uppercase mb-2 tracking-wide'>Get in touch</h4>
          <h2 className='text text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>
        </div>
      </div>
      {/* form */}
      <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
        <input className='text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all' type="text" placeholder='Your name' />
        <input className='text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all' type="text" placeholder='Your email' />
        <textarea className='text bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-red transition-all resize-none mb-12' placeholder='Your message'></textarea>
        <button className='btn btn-sm'>Send message</button>
      </form>
    </section>
  )
}
