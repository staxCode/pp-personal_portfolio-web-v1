import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="block text-amber-400 ease-in duration-200 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0"
          onClick={() => setTheme("light")}
        >
          <i className="ri-sun-line ri-lg"></i>
        </button>
      );
    } else {
      return (
        <button
          className="block text-gray-300 ease-in duration-300 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
          onClick={() => setTheme("dark")}
        >
          <i className="ri-moon-line ri-lg"></i>
        </button>
      );
    }
  };

  return (
    <nav className="ease-in duration-300 py-4">
      <div className="container flex flex-wrap justify-end items-center mx-auto">
        <div className="w-10">{renderThemeChanger()}</div>
      </div>
    </nav>
  );
};
export default Navbar;
