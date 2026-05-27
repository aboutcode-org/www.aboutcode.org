import React from 'react';
import Layout from '@theme/Layout';
import ProjectOverview from '@site/src/components/HomepageContent/ProjectOverview.md';
import ProjectGridTemplate from '@site/src/components/ProjectGridTemplate';
import { allProjectSources } from '@site/src/data/projects-all';
import styles from '@site/src/components/HomepageContent/styles.module.css';

export default function Projects() {
    return (
        <Layout
            title='Projects'
            description='Supported or Maintained AboutCode projects'
        >
            <main>
                <section className={styles.sectionContainer}>
                    <div
                        className={styles.sectionHeader}
                        style={{ marginBottom: '15px', marginTop: '30px' }}
                    >
                        <h1>Projects</h1>
                    </div>
                    <div className={styles.sectionIntro}>
                        <ProjectOverview />
                    </div>
                    <ProjectGridTemplate projectSources={allProjectSources} />
                </section>
                <div style={{ marginBottom: '50px' }}></div>
            </main>
        </Layout>
    );
}
