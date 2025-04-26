import React from 'react';
import { ThemeProvider, useTheme } from '../utils/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Community from '../components/Community';
import Join from '../components/Join';
import Footer from '../components/Footer';
import styles from '../App.module.css';

function AppContent() {
  const { darkMode } = useTheme();
  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <Join />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
