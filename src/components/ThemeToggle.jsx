import { useState, useEffect } from "react";
import Switch from "react-switch";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const iconStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 16,
  };

  return (
    <Switch
    checked={darkMode}
    onChange={toggleTheme}
    offColor="#f6ad55"
    onColor="#4a5568"
    handleDiameter={24}
    uncheckedIcon={<div style={iconStyles}><FiSun /></div>}
    checkedIcon={<div style={iconStyles}><FiMoon /></div>}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
    height={24}
    width={60}
    className="react-switch"
  />
  );
}
