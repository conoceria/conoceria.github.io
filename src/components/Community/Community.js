import React from 'react';
import styles from './Community.module.css';

const Community = () => (
  <section className={styles.community} id="community">
    <h2>What Members Say</h2>
    <div className={styles.testimonials}>
      <blockquote>
        “I landed my first AI job thanks to the projects and mentorship here!”<br />
        <span>- Alex, Data Scientist</span>
      </blockquote>
      <blockquote>
        “The community is so welcoming and the events are top-notch.”<br />
        <span>- Priya, Student</span>
      </blockquote>
    </div>
  </section>
);

export default Community;
