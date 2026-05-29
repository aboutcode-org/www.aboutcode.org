import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomeIntro from './HomeIntro.mdx';
import StandardsOverview from './StandardsOverview.mdx';
import AdoptersBanner from '@site/src/components/AdoptersBanner';
import ProjectOverview from './ProjectOverview.md';
import Supporters from './Supporters.md';
import ValuePillars from '@site/src/components/ValuePillars';
import CapabilitiesGrid from '@site/src/components/CapabilitiesGrid';
import EcosystemGrid from '@site/src/components/EcosystemGrid';
import OpenDataSection from '@site/src/components/OpenDataSection';
import ProjectGrid from '@site/src/components/ProjectGrid';
import { featuredProjectSources } from '@site/src/data/projects-featured';
import styles from './styles.module.css';

export default function HomepageContent() {
    const meetingsUrl = useBaseUrl('/docs/about/meetings/');
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
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Main capabilities</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <p>AboutCode provides modular building blocks for software composition analysis,
                    from license detection to vulnerability management, that you can combine to match your workflow.</p>
                </div>
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
                        downloaded over 4 million times per day.
                        Join our <a href="https://join.slack.com/t/aboutcode-org/shared_invite/zt-31uzazd7l-tBHcqKUKkX6jUEPRLswiNw">chat</a> and
                        our <a href={meetingsUrl}>weekly calls</a> to
                        meet and start the conversation with AboutCode maintainers and contributors.
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
                    <h2>Practical software supply chain standards - <Link to="/docs/about/standards/" className={styles.headerLink}>See all supported standards</Link></h2>
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
                    <h2>Interoperable modular tools and projects we
                    support or maintain - <Link to="/projects/"
                    className={styles.headerLink}>See all projects</Link></h2>
                </div>
                <div className={styles.sectionIntro}>
                    <ProjectOverview />
                </div>
                <ProjectGrid
                    projectSources={featuredProjectSources}
                    showSectionTitles={false}
                />
            </section>

            <section id="ecosystems" className={styles.sectionContainer}>
                <div
                    className={styles.sectionHeader}
                    style={{ marginBottom: '15px', marginTop: '15px' }}
                >
                    <h2>Supported ecosystems, languages, licenses, and data sources</h2>
                </div>
                <div className={styles.sectionIntro}>
                    <p>AboutCode tools support a large number of licenses, package ecosystems, programming languages,
                    and vulnerability data sources, all identified using{' '}
                    <a href="https://packageurl.org">Package-URL (PURL)</a> or SPDX license expressions.</p>
                </div>
                <EcosystemGrid />
            </section>

            <div style={{ marginBottom: '50px' }}></div>
        </main>
    );
}
