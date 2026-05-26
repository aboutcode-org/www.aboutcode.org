import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const licenses = [
    { label: 'MIT', logo: 'img/logos/lic-mit.svg', url: 'https://scancode-licensedb.aboutcode.org/mit.html' },
    { label: 'Apache-2.0', logo: 'img/logos/apache.svg', url: 'https://scancode-licensedb.aboutcode.org/apache-2.0.html' },
    { label: 'GPL-2.0', logo: 'img/logos/gnu.svg', url: 'https://scancode-licensedb.aboutcode.org/gpl-2.0.html' },
    { label: 'GPL-3.0', logo: 'img/logos/gpl.svg', url: 'https://scancode-licensedb.aboutcode.org/gpl-3.0.html' },
    { label: 'BSD-2-Clause', logo: 'img/logos/berkeley.svg', url: 'https://scancode-licensedb.aboutcode.org/bsd-simplified.html' },
    { label: 'BSD-3-Clause', logo: 'img/logos/berkeley.svg', url: 'https://scancode-licensedb.aboutcode.org/bsd-new.html' },
    { label: 'LGPL-2.0', logo: 'img/logos/gnu.svg', url: 'https://scancode-licensedb.aboutcode.org/lgpl-2.0.html' },
    { label: 'LGPL-2.1', logo: 'img/logos/gnu.svg', url: 'https://scancode-licensedb.aboutcode.org/lgpl-2.1.html' },
    { label: 'LGPL-3.0', logo: 'img/logos/gpl.svg', url: 'https://scancode-licensedb.aboutcode.org/lgpl-3.0.html' },
    { label: 'MPL-2.0', logo: 'img/logos/mozilla.svg', url: 'https://scancode-licensedb.aboutcode.org/mpl-2.0.html' },
    { label: 'ISC', logo: 'img/logos/lic-isc.svg', url: 'https://scancode-licensedb.aboutcode.org/isc.html' },
    { label: 'CC-BY-4.0', logo: 'img/logos/cc.svg', url: 'https://scancode-licensedb.aboutcode.org/cc-by-4.0.html' },
    { label: 'AGPL-3.0', logo: 'img/logos/gpl.svg', url: 'https://scancode-licensedb.aboutcode.org/agpl-3.0.html' },
    { label: 'Artistic-2.0', logo: 'img/logos/perl-camel.png', url: 'https://scancode-licensedb.aboutcode.org/artistic-2.0.html' },
    { label: 'EPL-2.0', logo: 'img/logos/eclipse-logo.svg', url: 'https://scancode-licensedb.aboutcode.org/epl-2.0.html' },
    { label: 'CDDL-1.0', logo: 'img/logos/lic-cddl.svg', url: 'https://scancode-licensedb.aboutcode.org/cddl-1.0.html' },
    { label: 'Unlicense', logo: 'img/logos/lic-unlicense.svg', url: 'https://scancode-licensedb.aboutcode.org/unlicense.html' },
    { label: 'Zlib', logo: 'img/logos/lic-zlib.svg', url: 'https://scancode-licensedb.aboutcode.org/zlib.html' },
];

function LicenseItem({ item }) {
    const logoSrc = useBaseUrl(`/${item.logo}`);
    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cell}
        >
            <div className={styles.logoSlot}>
                <img
                    src={logoSrc}
                    alt={item.label}
                    className={styles.cellLogo}
                />
            </div>
            <span className={styles.cellLabel}>{item.label}</span>
        </a>
    );
}

export default function LicenseGrid() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.sectionTitle}>
                Licensing data{' - '}
                <a href="/docs/getting_started/getting_started-compliance/" className={styles.headerLink}>Getting started...</a>
            </h3>
            <div className={styles.intro}>
                <p>
                    The ScanCode LicenseDB contains 2,500+ curated licenses across 12 categories
                    including Permissive, Copyleft, Copyleft Limited, Public Domain, Proprietary, and more.
                    Each license includes full text, detection rules, SPDX mappings for license expressions,
                    and category classification. Below are some of the most common licenses.
                </p>
                <p>
                    Browse all 
                <a href="https://scancode-licensedb.aboutcode.org" target="_blank" rel="noopener noreferrer">
                     &nbsp;2,500+ licenses &nbsp;
                </a>
                    in the LicenseDB. 
                    Industry-leading license detection is backed by
                <a href="https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/rules" target="_blank" rel="noopener noreferrer">
                    &nbsp;over 35,000+ license notices &nbsp;
                </a>
                     used as detection rules.
                </p>

            </div>
            <div className={styles.grid}>
                {licenses.map((item) => (
                    <LicenseItem key={item.label} item={item} />
                ))}
            </div>

        </div>
    );
}
