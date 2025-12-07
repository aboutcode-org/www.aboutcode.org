import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeInfo from './HomeInfo.mdx';
// import GeneralInfo from '@site/src/components/GeneralInfo';
// import SpecGrid from '@site/src/components/SpecGrid';
// import ToolGrid from '@site/src/components/ToolGrid';
import ProjectGrid from '@site/src/components/ProjectGrid';
import SupporterGrid from '@site/src/components/SupporterGrid';

import styles from './styles.module.css';

export default function HomepageContent() {
    // Get baseUrl from Docusaurus context
    const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig;

    return (
        <main>
            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h1>Welcome</h1>
                </div>
                <div className={styles.sectionIntro}>
                    <HomeInfo />
                </div>
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px' }}
                >
                    <h1>Getting Started</h1>
                </div>
                <div className={styles.sectionIntro}>[to come]</div>
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h1>AboutCode Capabilities</h1>
                </div>
                <div className={styles.sectionIntro}>[to come]</div>
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h1>AboutCode Projects Overview</h1>
                </div>
                {/* <div className={styles.sectionHeader}>
                    <h2>[sub-category?]</h2>
                </div> */}
                <div className={styles.sectionIntro}>[intro]</div>
                <ProjectGrid />
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '30px' }}
                >
                    <h1>Supporters</h1>
                </div>
                <div className={styles.sectionIntro}>[intro]</div>
                <SupporterGrid />
            </section>

            {/* <section className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h2>[h2 title]</h2>
                </div>
                <div
                    className={styles.sectionIntro}
                >
                    [intro]
                </div>
                <SpecGrid />
            </section> */}

            {/* <section className={styles.sectionContainer}>
                <div className={styles.sectionHeader}>
                    <h1>[h1 title]]</h1>
                </div>
            </section> */}

            {/* temp dummy div to create space above footer */}
            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
