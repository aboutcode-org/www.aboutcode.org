import React from 'react';
import styles from './styles.module.css';

const pillars = [
    {
        title: 'Interoperable tools',
        description: 'Reusable building blocks like ScanCode, so you can focus on your processes, policies, and automation.',
        icon: '/img/icons/pillar-tools.png',
        link: '/#projects',
    },
    {
        title: 'Practical standards',
        description: 'Automated processes require consistency, with standards like Package-URL (PURL) and VERS.',
        icon: '/img/icons/pillar-standards.png',
        link: '/#standards',
    },
    {
        title: 'Accurate data',
        description: 'Data you can trust to make your processes more efficient, like PurlDB and VulnerableCode.',
        icon: '/img/icons/pillar-data.png',
        link: '/#data',
    },
    {
        title: 'Shared development',
        description: 'We work together on shared ecosystem solutions for shared ecosystem challenges.',
        icon: '/img/icons/pillar-shared.png',
        link: '/#community',
    },
];

export default function ValuePillars() {
    return (
        <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => {
                const content = (
                    <>
                        <img src={pillar.icon} alt="" className={styles.pillarIcon} />
                        <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                        <p className={styles.pillarDescription}>{pillar.description}</p>
                    </>
                );
                return pillar.link ? (
                    <a key={pillar.title} href={pillar.link} className={styles.pillar} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {content}
                    </a>
                ) : (
                    <div key={pillar.title} className={styles.pillar}>
                        {content}
                    </div>
                );
            })}
        </div>
    );
}
