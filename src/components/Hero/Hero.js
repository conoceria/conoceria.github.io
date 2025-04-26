import React from 'react';
import styles from './Hero.module.css';
import logo from '../../logo.svg';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <h1>Unlock Your AI Potential</h1>
      <p className={styles.heroSubtitle}>
        Join the world’s most vibrant AI learning community. Learn, build, and grow with peers and experts.
      </p>
      <a href="https://t.me/+gT1BFmOowB9kZGQx" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonLarge}>Get Started</a>
    </div>
    <div className={styles.heroImage}>
      <img src={logo} alt="AI Community" />
    </div>
  </section>
);

export default Hero;
