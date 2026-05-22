import React from 'react';
import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <div className={styles.fullHero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Healthy and Safe<br />
          Software Supply Chains
        </h1>
        <p className={styles.heroSubtitle}>
          We build, maintain, and sustain open data with open source code and open standards.
        </p>
      </div>
    </div>
  );
}
