import React, {useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header({ handleThemeDark, handleThemeLight, theme }) {
  return(
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-end items-center'>
          {/* dark/light mode */}
          <ThemeToggle handleThemeDark={handleThemeDark} handleThemeLight={handleThemeLight} theme={theme}/>
        </div>
      </div>
      </header>
  )
}
