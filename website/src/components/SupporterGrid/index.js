import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

// 2025-10-15 Wednesday 17:28:05.  The new .js data file
// import getPackages from "@site/src/data/getPackages";
import getSupporters from "@site/src/data/getSupporters";

// export default function HomepageContent() {
export default function SupporterGrid() {
    // Get baseUrl from Docusaurus context
    const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig;
    const types = getSupporters(baseUrl);

    return (
        <div>
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 0,
                    marginTop: 30,
                }}
            >
                <h1 style={{ marginBottom: 0 }}>Registered PURL Types</h1>
            </div> */}

            <div className={styles.purlGridWrapper}>
                <div className={styles.purlGridContainer}>
                    <div className={styles.purlGrid}>
                        {types.map((pkg, idx) => (
                            <a
                                key={idx}
                                href={pkg.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.packageCell}
                            >
                                <img
                                    src={pkg.logo}
                                    alt={pkg.name}
                                    className={`${styles.packageLogo} ${
                                        styles[pkg.name]
                                    }`}
                                />

                                <span>{pkg.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
}
