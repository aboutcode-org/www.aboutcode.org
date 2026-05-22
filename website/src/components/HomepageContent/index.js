import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeIntro from './HomeIntro.mdx';
import StandardsOverview from './StandardsOverview.md';
import Adopters from './Adopters.md';
import ProjectOverview from './ProjectOverview.md';
import Supporters from './Supporters.md';
import CapabilitiesGrid from '@site/src/components/CapabilitiesGrid';
import ProjectGridTemplate from '@site/src/components/ProjectGridTemplate';
import styles from './styles.module.css';

export default function HomepageContent() {
    const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig;

    return (
        <main>
            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                </div>
                <div className={styles.sectionIntro}>
                    <HomeIntro />
                </div>
            </section>

            <section className={styles.sectionContainer}>
                <CapabilitiesGrid />
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Software supply chain standards</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <StandardsOverview />
                </div>
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Adopters</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <Adopters />
                </div>
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Projects</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <ProjectOverview />
                </div>
                <ProjectGridTemplate />
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '30px' }}
                >
                    <h2>Supporters</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <Supporters />
                </div>
            </section>

            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
