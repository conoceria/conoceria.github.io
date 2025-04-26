import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <span>&copy; {new Date().getFullYear()} AI Learners Hub</span>
      <span>
        <a href="#features">Features</a> | <a href="#community">Community</a> | <a href="#join">Join</a>
      </span>
    </div>
  </footer>
);

export default Footer;
