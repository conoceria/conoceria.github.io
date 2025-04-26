import React from 'react';
import styles from './Features.module.css';

const Features = () => (
  <section className={styles.features} id="features">
    <h2>What We Offer</h2>
    <div className={styles.featuresGrid}>
      <div className={styles.featureCard}>
        <span role="img" aria-label="Projects">🚀</span>
        <h3>Real Projects</h3>
        <p>Work on hands-on AI projects and build your portfolio.</p>
      </div>
      <div className={styles.featureCard}>
        <span role="img" aria-label="Events">🎓</span>
        <h3>Live Events</h3>
        <p>Attend workshops, webinars, and hackathons led by AI experts.</p>
      </div>
      <div className={styles.featureCard}>
        <span role="img" aria-label="Community">🤝</span>
        <h3>Supportive Community</h3>
        <p>Connect, collaborate, and get feedback from fellow learners.</p>
      </div>
      <div className={styles.featureCard}>
        <span role="img" aria-label="Resources">📚</span>
        <h3>Curated Resources</h3>
        <p>Access guides, tutorials, and learning paths for all levels.</p>
      </div>
    </div>
  </section>
);

export default Features;
