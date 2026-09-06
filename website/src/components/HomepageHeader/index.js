import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <div className={styles.fullHero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Healthy Software Supply Chains
        </h1>
        <p className={styles.heroSubtitle}>
          With open data, open code, and open standards.
        </p>
      </div>
    </div>
  );
}
