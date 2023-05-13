
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="py-8  z-50 bg-white bg-opacity-0 dark:bg-zinc-900 dark:text-white">
      <div className="container mx-auto">
        <div className="flex justify-end">
          {/* dark/light mode */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
