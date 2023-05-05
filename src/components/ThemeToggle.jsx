import { BsSun, BsMoonStars } from "react-icons/bs";

export default function ThemeToggle({ handleThemeDark, handleThemeLight, theme }) {
  return (
    <>
    <button
      onClick={handleThemeLight}
    >
        <BsSun
          className="text-black w-8 text-[36px] m-2 dark:text-white hover:text-amber-400 dark:hover:text-amber-400 "
        />
    </button>
    <button
      onClick={handleThemeDark}
    >
        <BsMoonStars
         className="text-black dark:text-white text-[28px] hover:text-yellow-400 dark:hover:text-yellow-200"
        />
    </button>
    </>
  );
}