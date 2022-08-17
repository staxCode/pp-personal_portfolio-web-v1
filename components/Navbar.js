import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])
    
 
    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <button className="block ease-in duration-200 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0
                dark:text-gray-300 dark:hover:text-gray-100" onClick={() => setTheme('light')} >
                    <i className="ri-sun-line ri-lg"></i>
                </button>
            )
        }

        else {
            return (
                <button className="block text-gray-900 ease-in duration-300 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0
                dark:text-gray-100 md:dark:hover:text-gray-100 dark:hover:text-indigo-700" onClick={() => setTheme('dark')}>
                    <i className="ri-moon-line ri-lg"></i>
                </button>
            )
        }
    };

    return (<nav className="bg-white dark:bg-gray-800 ease-in duration-300">
        <div className="container flex flex-wrap justify-end items-center mx-auto">
            <div className="p-3">
                {renderThemeChanger()}
            </div>
        </div>
    </nav>)
}
export default Navbar