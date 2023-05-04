import {BsSun, BsMoonStars} from "react-icons/bs"

export default function ThemeToggle({ toggleTheme, theme }) {

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full p-1 bg-white dark:bg-gray-900 relative transition-colors duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-white focus:border-transparent"
    >
      <BsSun
        color="black"
        className={`absolute top-1 left-1 transition-opacity duration-300 ease-out ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <BsMoonStars
        color="black"
        className={`absolute top-1 right-1 transition-opacity duration-300 ease-out ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}