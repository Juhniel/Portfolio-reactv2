import React, {useState, useEffect} from "react";

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';



export default function App() {
  const [theme, setTheme] = useState("light");

  //  LIGHT / DARK - MODE
  function handleThemeLight() {
    setTheme("light");
  }
  function handleThemeDark() {
    setTheme("dark");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleViewWork(){
    
  }

  return(
    <div className='bg-white bg-no-repeat bg-cover overflow-hidden dark:bg-zinc-900 dark:text-white'>
    <Header handleThemeLight={handleThemeLight} handleThemeDark={handleThemeDark} theme={theme}/>
    <Banner />
    <Nav />
    <About />
    <Experience />
    <Work handleViewWork={handleViewWork} />
    <Contact />
    <div className='h-[4000px]'></div>
  </div>
  )
}