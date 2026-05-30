import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const capabilities = [
    {
        title: 'License Detection',
        description: 'Detect licenses in any codebase, whether open source, or proprietary; in source code and binaries. Powers dozens of open source and commercial SCA tools.',
        link: '/docs/getting_started/license-compliance/#identify-licenses-for-software-and-for-data',
    },
    {
        title: 'Code Origin Matching',
        description: 'Identify code origin at package, file, and snippet level using PurlDB fingerprints and matching pipelines.',
        link: '/docs/getting_started/software-identification/#match-binaries-to-source',
    },
    {
        title: 'Binary Analysis',
        description: 'Match deployed binaries, containers, and firmware back to source packages. Analyze ELFs, PEs, Mach-Os, and archives.',
        link: '/docs/getting_started/software-identification/#match-binaries-to-source',
    },
    {
        title: 'Dependency Management',
        description: 'Resolve direct and transitive dependencies across package ecosystems with ScanCode pipelines and dedicated inspectors.',
        link: '/docs/getting_started/software-identification/#identify-software-dependencies',
    },
    {
        title: 'Vulnerability Management',
        description: 'Aggregate vulnerability data, map to affected packages, identify fixes, and score exploitability and risk for triage.',
        link: '/docs/getting_started/software-security/#manage-risk-with-aggregated-vulnerability-data',
    },
    {
        title: 'SBOMs and Compliance',
        description: 'Generate and manage SBOMs in CycloneDX and SPDX. Meet CRA requirements with automated VEX reporting and vulnerability tracking.',
        link: '/docs/getting_started/cravex/',
    },
];

function CapabilityCard({ cap }) {
    const href = useBaseUrl(cap.link);
    return (
        <a key={cap.title} href={href} className={styles.card}>
            <h3 className={styles.cardTitle}>{cap.title}</h3>
            <p className={styles.cardDescription}>{cap.description}</p>
        </a>
    );
}

export default function CapabilitiesGrid() {
    return (
        <div className={styles.grid}>
            {capabilities.map((cap) => (
                <CapabilityCard key={cap.title} cap={cap} />
            ))}
        </div>
    );
}
