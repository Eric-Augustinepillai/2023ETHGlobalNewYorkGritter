// hooks/useDarkMode.js
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;