import React from 'react';
import styles from './styles.module.css';

const withLogo = [
    { name: 'Apache Software Foundation', url: 'https://www.apache.org', logo: 'img/logos/apache.svg' },
    { name: 'BANG', url: 'https://github.com/armijnhemel/binaryanalysis-ng', logo: 'img/logos/bang.png', showName: true, title: 'Binary Analysis Next Generation (BANG)' },
    { name: 'CSAF', url: 'https://csaf.io', logo: 'img/logos/csaf.png' },
    { name: 'CVE', url: 'https://www.cve.org', logo: 'img/logos/cve.svg' },
    { name: 'ClearlyDefined', url: 'https://clearlydefined.io', logo: 'img/logos/clearlydefined.png' },
    { name: 'CycloneDX', url: 'https://cyclonedx.org', logo: 'img/logos/cyclonedx.png' },
    { name: 'Dependency-Track', url: 'https://dependencytrack.org', logo: 'img/logos/dependency-track.svg' },
    { name: 'Eclipse Apoapsis', url: 'https://projects.eclipse.org/projects/technology.apoapsis', logo: 'img/logos/eclipse-apoapsis.png' },
    { name: 'Eclipse Foundation', url: 'https://www.eclipse.org', logo: 'img/logos/eclipse-foundation.svg' },
    { name: 'Erlang Ecosystem Foundation', url: 'https://erlef.org', logo: 'img/logos/erlang-ecosystem.png' },
    { name: 'Ecosyste.ms', url: 'https://ecosyste.ms', logo: 'img/logos/ecosystems.png' },
    { name: 'FOSSLight', url: 'https://fosslight.org', logo: 'img/logos/fosslight.png' },
    { name: 'FSF', url: 'https://www.fsf.org', logo: 'img/logos/fsf.png' },
    { name: 'FSFE', url: 'https://fsfe.org', logo: 'img/logos/fsfe.svg' },
    { name: 'FOSSology', url: 'https://www.fossology.org', logo: 'img/logos/fossology.png' },
    { name: 'Google OSV', url: 'https://osv.dev', logo: 'img/logos/osv.svg' },
    { name: 'Grype', url: 'https://github.com/anchore/grype', logo: 'img/logos/grype.png' },
    { name: 'Hugging Face', url: 'https://huggingface.co', logo: 'img/logos/huggingface.svg' },
    { name: 'Linux Foundation', url: 'https://www.linuxfoundation.org', logo: 'img/logos/linux-foundation.svg' },
    { name: 'OpenChain', url: 'https://www.openchainproject.org', logo: 'img/logos/openchain.png' },
    { name: 'OpenSSF', url: 'https://openssf.org', logo: 'img/logos/openssf.png' },
    { name: 'OpenSSF GUAC', url: 'https://guac.sh', logo: 'img/logos/guac.png' },
    { name: 'OW2', url: 'https://www.ow2.org', logo: 'img/logos/ow2.png' },
    { name: 'OWASP', url: 'https://owasp.org', logo: 'img/logos/owasp.png' },
    { name: 'OpenVEX', url: 'https://openvex.dev', logo: 'img/logos/openvex.png' },
    { name: 'ORT', url: 'https://oss-review-toolkit.org', logo: 'img/logos/ort.png' },
    { name: 'OSI', url: 'https://opensource.org', logo: 'img/logos/osi.png' },
    { name: 'OSSelot', url: 'https://www.osselot.org', logo: 'img/logos/osselot.svg' },
    { name: 'OSSIndex', url: 'https://ossindex.sonatype.org', logo: 'img/logos/ossindex.png' },
    { name: 'OSS Compass', url: 'https://oss-compass.org', logo: 'img/logos/oss-compass.png' },
    { name: 'Rust Foundation', url: 'https://foundation.rust-lang.org', logo: 'img/logos/rust-foundation.png' },
    { name: 'REUSE.software', url: 'https://reuse.software', logo: 'img/logos/reuse.png' },
    { name: 'SCANOSS', url: 'https://www.scanoss.com', logo: 'img/logos/scanoss.png' },
    { name: 'Software Heritage', url: 'https://www.softwareheritage.org', logo: 'img/logos/software-heritage.png' },
    { name: 'SPDX', url: 'https://spdx.dev', logo: 'img/logos/spdx.png' },
    { name: 'Syft', url: 'https://github.com/anchore/syft', logo: 'img/logos/syft.png' },
    { name: 'SW360', url: 'https://www.eclipse.org/sw360/', logo: 'img/logos/sw360.svg' },
    { name: 'Trivy', url: 'https://trivy.dev', logo: 'img/logos/trivy.png' },
];

const withoutLogo = [
    { name: 'Adobe', url: 'https://www.adobe.com' },
    { name: 'Amazon', url: 'https://www.amazon.com' },
    { name: 'Anchore', url: 'https://anchore.com' },
    { name: 'Apple', url: 'https://www.apple.com' },
    { name: 'Audi', url: 'https://www.audi.com' },
    { name: 'BMW', url: 'https://www.bmw.com' },
    { name: 'Bosch', url: 'https://www.bosch.com' },
    { name: 'BlackDuck Software', url: 'https://www.blackduck.com' },
    { name: 'CARIAD', url: 'https://cariad.technology' },
    { name: 'Chainguard', url: 'https://www.chainguard.dev' },
    { name: 'Checkmarx', url: 'https://checkmarx.com' },
    { name: 'SODGE IT', url: 'https://www.sodge-it.com' },
    { name: 'Citi', url: 'https://www.citigroup.com' },
    { name: 'Cisco', url: 'https://www.cisco.com' },
    { name: 'CIRCL.lu', url: 'https://www.circl.lu' },
    { name: 'deps.dev', url: 'https://deps.dev' },
    { name: 'Deutsche Bahn', url: 'https://www.deutschebahn.com' },
    { name: 'Endor Labs', url: 'https://www.endorlabs.com' },
    { name: 'Ericsson', url: 'https://www.ericsson.com' },
    { name: 'Fujitsu', url: 'https://www.fujitsu.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'HERE', url: 'https://www.here.com' },
    { name: 'Huawei', url: 'https://www.huawei.com' },
    { name: 'HPE', url: 'https://www.hpe.com' },
    { name: 'IBM', url: 'https://www.ibm.com' },
    { name: 'LG', url: 'https://www.lg.com' },
    { name: 'Wiz', url: 'https://www.wiz.io' },
    { name: 'Liferay', url: 'https://www.liferay.com' },
    { name: 'Maven Central', url: 'https://central.sonatype.com' },
    { name: 'OSADL', url: 'https://www.osadl.org' },
    { name: 'Mend', url: 'https://www.mend.io' },
    { name: 'Mercedes-Benz', url: 'https://www.mercedes-benz.com' },
    { name: 'Snyk', url: 'https://snyk.io' },
    { name: 'Meta', url: 'https://about.meta.com' },
    { name: 'Porsche', url: 'https://www.porsche.com' },
    { name: 'Microsoft', url: 'https://www.microsoft.com' },
    { name: 'Oracle', url: 'https://www.oracle.com' },
    { name: 'Nokia', url: 'https://www.nokia.com' },
    { name: 'OpenRails', url: 'https://openrails.org' },
    { name: 'Orange', url: 'https://www.orange.com' },
    { name: 'Qualcomm', url: 'https://www.qualcomm.com' },
    { name: 'Red Hat', url: 'https://www.redhat.com' },
    { name: 'ReversingLabs', url: 'https://www.reversinglabs.com' },
    { name: 'Saab', url: 'https://www.saab.com' },
    { name: 'Samsung', url: 'https://www.samsung.com' },
    { name: 'SAP', url: 'https://www.sap.com' },
    { name: 'ServiceNow', url: 'https://www.servicenow.com' },
    { name: 'Siemens', url: 'https://www.siemens.com' },
    { name: 'Siemens Healthineers', url: 'https://www.siemens-healthineers.com' },
    { name: 'Sony', url: 'https://www.sony.com' },
    { name: 'Sonatype', url: 'https://www.sonatype.com' },
    { name: 'Veracode', url: 'https://www.veracode.com' },
    { name: 'Verizon', url: 'https://www.verizon.com' },
    { name: 'VMware', url: 'https://www.vmware.com' },
    { name: 'Volkswagen', url: 'https://www.volkswagen.com' },
    { name: 'VulnCheck', url: 'https://vulncheck.com' },
    { name: 'Zeiss', url: 'https://www.zeiss.com' },
];

const adopters = [];
let li = 0, ni = 0;
while (li < withLogo.length || ni < withoutLogo.length) {
    if (ni < withoutLogo.length) adopters.push(withoutLogo[ni++]);
    if (ni < withoutLogo.length) adopters.push(withoutLogo[ni++]);
    if (li < withLogo.length) adopters.push(withLogo[li++]);
}

export default function AdoptersBanner() {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerTrack}>
                {adopters.map((a) => (
                    <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className={styles.adopter} title={a.title || a.name}>
                        {a.logo ? (
                            <>
                                <img src={`/${a.logo}`} alt={a.name} className={styles.adopterLogo} />
                                {a.showName && <span className={styles.adopterName}>{a.name}</span>}
                            </>
                        ) : (
                            <span className={styles.adopterName}>{a.name}</span>
                        )}
                    </a>
                ))}
                {adopters.map((a) => (
                    <a key={a.name + '-dup'} href={a.url} target="_blank" rel="noopener noreferrer" className={styles.adopter} title={a.title || a.name}>
                        {a.logo ? (
                            <>
                                <img src={`/${a.logo}`} alt={a.name} className={styles.adopterLogo} />
                                {a.showName && <span className={styles.adopterName}>{a.name}</span>}
                            </>
                        ) : (
                            <span className={styles.adopterName}>{a.name}</span>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}
