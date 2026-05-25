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
          We build, and maintain open software supply chains data with open source code and open standards.
        </p>
      </div>
    </div>
  );
}
