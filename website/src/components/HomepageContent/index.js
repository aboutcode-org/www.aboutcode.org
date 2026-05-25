import React from 'react';
import Link from '@docusaurus/Link';
import HomeIntro from './HomeIntro.mdx';
import StandardsOverview from './StandardsOverview.md';
import AdoptersBanner from '@site/src/components/AdoptersBanner';
import ProjectOverview from './ProjectOverview.md';
import Supporters from './Supporters.md';
import ValuePillars from '@site/src/components/ValuePillars';
import CapabilitiesGrid from '@site/src/components/CapabilitiesGrid';
import EcosystemGrid from '@site/src/components/EcosystemGrid';
import OpenDataSection from '@site/src/components/OpenDataSection';
import ProjectGridTemplate from '@site/src/components/ProjectGridTemplate';
import { featuredProjectSources } from '@site/src/data/projects-featured';
import styles from './styles.module.css';

export default function HomepageContent() {
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
                <ValuePillars />
            </section>

            <section className={styles.sectionContainer}>
                <CapabilitiesGrid />
            </section>

            <section id="community" className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Community and adopters, fostering shared development</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <p>AboutCode is supported by over 700 contributors and
                        downloaded over 4 millions times per day.
                    </p>
                    <p>Our open tools, data, and standards are used by
                       leading open source projects and organizations worldwide.
                    </p>
                </div>
                <AdoptersBanner />
            </section>

            <section className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Supporters</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <Supporters />
                </div>
            </section>

            <section id="standards" className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Practical software supply chain standards</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <StandardsOverview />
                </div>
            </section>


            <section id="data" className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Accurate and open data</h2>
                </div>
                <OpenDataSection />
            </section>

            <section id="projects" className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Interoperable modular tools and projects - <a href="/docs/getting_started/getting_started-getting-started/" className={styles.headerLink}>Getting started...</a></h2>
                </div>
                <div className={styles.sectionIntro}>
                    <ProjectOverview />
                </div>
                <ProjectGridTemplate
                    projectSources={featuredProjectSources}
                    showSectionTitles={false}
                />
                <div className={styles.projectLinkRow}>
                    <Link className={styles.projectLink} to="/projects/">
                        See all supported projects
                    </Link>
                </div>
            </section>

            <section id="ecosystems" className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Supported ecosystems, languages, and data sources</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <p>AboutCode tools support 70+ package ecosystems, programming languages,
                    and vulnerability data sources, all identified using{' '}
                    <a href="https://packageurl.org">Package-URL (PURL)</a>.</p>
                </div>
                <EcosystemGrid />
            </section>

            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
