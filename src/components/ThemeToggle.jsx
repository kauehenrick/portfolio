import { useState, useEffect } from 'react';
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      {theme === 'dark' ? <FaRegSun size={14} /> : <FaRegMoon size={14} />}
    </button>
  );
};

export default ThemeToggle;