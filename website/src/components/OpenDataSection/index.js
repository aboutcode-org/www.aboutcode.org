import React from 'react';
import styles from './styles.module.css';

const dataCards = [
    {
        title: 'Packages',
        description:
            'PurlDB is a comprehensive, open database of software package metadata indexed by Package-URL. ' +
            'Combined with ClearlyDefined - managed by AboutCode - it provides provenance, licensing, ' +
            'and origin data for millions of packages.',
        stats: '75M+ packages indexed',
        titleLink: '/#ecosystems',
        links: [
            { label: 'PurlDB', url: 'https://public.purldb.io/api/' },
            { label: 'Code', url: 'https://github.com/aboutcode-org/purldb' },
            { label: 'ClearlyDefined', url: 'https://clearlydefined.io' },
            { label: 'Code', url: 'https://github.com/clearlydefined/' },
        ],
    },
    {
        title: 'Licenses',
        description:
            'ScanCode LicenseDB is the largest open database of software licenses, ' +
            'with over 2,500+ curated license texts, over 35,000 detection rules, and SPDX mappings used by scanners worldwide.',
        stats: '2,500+ licenses and 35,000+ notices curated',
        titleLink: '/#licensing',
        links: [
            { label: 'LicenseDB', url: 'https://scancode-licensedb.aboutcode.org' },
            { label: 'Code', url: 'https://github.com/aboutcode-org/scancode-licensedb' },
        ],
    },
    {
        title: 'Vulnerabilities',
        description:
            'VulnerableCode is a free and open database of software package vulnerabilities, ' +
            'correlating advisories from 30+ sources and mapping them to affected packages using Package-URL.',
        stats: '300K+ vulnerabilities tracked',
        titleLink: '/#vuln-sources',
        links: [
            { label: 'VulnerableCode', url: 'https://public.vulnerablecode.io' },
            { label: 'Code', url: 'https://github.com/aboutcode-org/vulnerablecode' },
        ],
    },
];

export default function OpenDataSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                <p>
                    Curated datasets for thousands of licenses, millions of packages, and aggregated
                    vulnerability data from dozens of public sources.
                    We believe software supply chain data should be open, decentralized, and federated.
                    Our <a href="https://github.com/aboutcode-org/federatedcode">FederatedCode</a> approach
                    enables anyone to publish and consume package, license, and vulnerability data using
                    open protocols without a single point of control, and no vendor lock-in.
                    All AboutCode data is freely available under open licenses via public APIs.
                </p>
            </div>
            <div className={styles.grid}>
                {dataCards.map((card) => (
                    <div key={card.title} className={styles.card}>
                        <h3 className={styles.cardTitle}>
                            {card.titleLink ? <a href={card.titleLink} style={{ color: 'inherit', textDecoration: 'none' }}>{card.title}</a> : card.title}
                        </h3>
                        <p className={styles.cardDescription}>{card.description}</p>
                        <span className={styles.cardStats}>{card.stats}</span>
                        <div className={styles.cardLinks}>
                            {card.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cardLink}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
