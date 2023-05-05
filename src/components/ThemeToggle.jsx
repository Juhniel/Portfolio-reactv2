import { BsSun, BsMoonStars } from "react-icons/bs";

export default function ThemeToggle({ handleThemeDark, handleThemeLight, theme }) {
  return (
    <>
    <button
      onClick={handleThemeLight}
    >
      {theme === "light" ? <BsSun className="text-amber-400 w-8 text-[36px] m-2  dark:text-white hover:text-amber-600 dark:hover:text-amber-600"/> :  <BsSun className="text-amber-200 w-8 text-[36px] m-2  dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"/>}
          
         
        
    </button>
    <button
      onClick={handleThemeDark}
    >
      {theme === "dark" ? <BsMoonStars className="text-yellow-200 text-[28px] hover:text-yellow-400 dark:hover:text-yellow-400"/> : <BsMoonStars className="text-black dark:text-white text-[28px] hover:text-yellow-400 dark:hover:text-yellow-200"/>}
    </button>
        
    </>
  );
}