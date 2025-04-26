import React from 'react';
import styles from './DarkModeToggle.module.css';
import { useTheme } from '../../utils/ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
