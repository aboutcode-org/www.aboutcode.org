import Layout from '@theme/Layout';
import EcosystemGrid from '@site/src/components/EcosystemGrid';
import styles from '@site/src/components/HomepageContent/styles.module.css';

export default function Environments() {
    return (
        <Layout
            title='Environments'
            description='Licenses, package ecosystems, programming languages, operating systems, vulnerability sources, and other environments supported by AboutCode tools. and data'
        >
            <main>
                <section className={styles.sectionContainer}>
                    <div
                        className={styles.sectionHeader}
                        style={{ marginBottom: '15px', marginTop: '30px' }}
                    >
                        <h1>Environments</h1>
                    </div>
                    <div className={styles.sectionIntro}>
                        <p>AboutCode tools support a large number of licenses,
                        package ecosystems, programming languages, operating
                        systems, binary and archive formats, and vulnerability
                        data sources, all identified using{' '}
                        <a href="https://packageurl.org">Package-URL (PURL)</a> or
                        SPDX license expressions.</p>
                    </div>
                    <EcosystemGrid />
                </section>
                <div style={{ marginBottom: '50px' }}></div>
            </main>
        </Layout>
    );
}
