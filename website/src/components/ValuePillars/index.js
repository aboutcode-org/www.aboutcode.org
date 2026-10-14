import useBaseUrl from '@docusaurus/useBaseUrl';
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

function PillarCard({ pillar }) {
    const iconSrc = useBaseUrl(pillar.icon);
    const linkHref = useBaseUrl(pillar.link || '/');
    const content = (
        <>
            <img src={iconSrc} alt="" className={styles.pillarIcon} />
            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
            <p className={styles.pillarDescription}>{pillar.description}</p>
        </>
    );
    return pillar.link ? (
        <a href={linkHref} className={styles.pillar} style={{ textDecoration: 'none', color: 'inherit' }}>
            {content}
        </a>
    ) : (
        <div className={styles.pillar}>
            {content}
        </div>
    );
}

export default function ValuePillars() {
    return (
        <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
                <PillarCard key={pillar.title} pillar={pillar} />
            ))}
        </div>
    );
}
