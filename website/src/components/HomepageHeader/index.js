import React from 'react';
import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <div className={styles.fullHero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Healthy Software Supply Chains
        </h1>
        <p className={styles.heroSubtitle}>
          We build, maintain, and sustain open data with open source code and open standards for the software supply chains.
        </p>
      </div>
    </div>
  );
}
