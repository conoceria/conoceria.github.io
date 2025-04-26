import React from 'react';
import styles from './Navbar.module.css';
import DarkModeToggle from '../DarkModeToggle';
import logo from '../../logo.svg';

const Navbar = () => (
  <nav className={styles.navbar}>
    <img src={logo} alt="ConocerIA Logo" className={styles.navLogo} />
    <ul className={styles.navLinks}>
      <li><a href="#features">Features</a></li>
      <li><a href="#community">Community</a></li>
      <li><a href="https://t.me/+gT1BFmOowB9kZGQx" target="_blank" rel="noopener noreferrer" className={styles.navCta}>Join</a></li>
    </ul>
    <div className={styles.navActions}>
      <DarkModeToggle />
    </div>
  </nav>
);

export default Navbar;
