import React, {useState, useEffect} from "react";

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';



export default function App() {
  const [theme, setTheme] = useState("light");

  //  LIGHT / DARK - MODE
  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return(
    <div className='bg-white bg-no-repeat bg-cover overflow-hidden dark:bg-zinc-900 dark:text-white'>
    <Header toggleTheme={handleThemeSwitch} theme={theme}/>
    <Banner />
    <Nav />
    <About />
    <Services />
    <Work />
    <Contact />
    <div className='h-[4000px]'></div>
  </div>
  )
}