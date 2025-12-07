import React from 'react';
import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <div className={styles.fullHero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Welcome to AboutCode.org
        </h1>
        <p className={styles.heroSubtitle}>
          [Tagline . . . ?]
        </p>
      </div>
    </div>
  );
}
