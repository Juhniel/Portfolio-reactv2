
import ThemeToggle from './ThemeToggle';

export default function Header({ handleThemeDark, handleThemeLight, theme }) {
  return (
    <header className="py-8  z-50 bg-white bg-opacity-0 dark:bg-zinc-900 dark:text-white">
      <div className="container mx-auto">
        <div className="flex justify-end items-center">
          {/* dark/light mode */}
          <ThemeToggle handleThemeDark={handleThemeDark} handleThemeLight={handleThemeLight} theme={theme} />
        </div>
      </div>
    </header>
  );
}
