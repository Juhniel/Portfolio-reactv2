import React, {useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header({ handleThemeDark, handleThemeLight, theme }) {
  return(
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center'>
          {/* logo */}
          <a href="#">
            {/* <img src={Logo} className="w-24" alt="" /> */}
          </a>
          {/* button */}
          {/* <button className='btn btn-sm'>
            Work with me
          </button> */}
      
            <ThemeToggle handleThemeDark={handleThemeDark} handleThemeLight={handleThemeLight} theme={theme}/>
            {/* <BsMoonStars color='black'/> */}
        </div>
      </div>
      </header>
  )
}
