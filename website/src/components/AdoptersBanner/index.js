import React from 'react';
import styles from './styles.module.css';

const adopters = [
    { name: 'Apache Software Foundation', url: 'https://www.apache.org', logo: 'img/logos/apache.svg' },
    { name: 'Adobe', url: 'https://www.adobe.com' },
    { name: 'CSAF', url: 'https://csaf.io', logo: 'img/logos/csaf.png' },
    { name: 'Amazon', url: 'https://www.amazon.com' },
    { name: 'CVE', url: 'https://www.cve.org', logo: 'img/logos/cve.svg' },
    { name: 'Anchore', url: 'https://anchore.com' },
    { name: 'ClearlyDefined', url: 'https://clearlydefined.io', logo: 'img/logos/clearlydefined.png' },
    { name: 'Apple', url: 'https://www.apple.com' },
    { name: 'CycloneDX', url: 'https://cyclonedx.org', logo: 'img/logos/cyclonedx.png' },
    { name: 'Audi', url: 'https://www.audi.com' },
    { name: 'Dependency-Track', url: 'https://dependencytrack.org', logo: 'img/logos/dependency-track.svg' },
    { name: 'BANG', url: 'https://github.com/armijnhemel/binaryanalysis-ng' },
    { name: 'Eclipse Apoapsis', url: 'https://projects.eclipse.org/projects/technology.apoapsis', logo: 'img/logos/eclipse-apoapsis.png' },
    { name: 'BMW', url: 'https://www.bmw.com' },
    { name: 'Eclipse Foundation', url: 'https://www.eclipse.org', logo: 'img/logos/eclipse-foundation.svg' },
    { name: 'Bosch', url: 'https://www.bosch.com' },
    { name: 'Erlang Ecosystem Foundation', url: 'https://erlef.org', logo: 'img/logos/erlang-ecosystem.png' },
    { name: 'BlackDuck Software', url: 'https://www.blackduck.com' },
    { name: 'Ecosyste.ms', url: 'https://ecosyste.ms', logo: 'img/logos/ecosystems.png' },
    { name: 'CARIAD', url: 'https://cariad.technology' },
    { name: 'FOSSLight', url: 'https://fosslight.org', logo: 'img/logos/fosslight.png' },
    { name: 'Chainguard', url: 'https://www.chainguard.dev' },
    { name: 'FSFE', url: 'https://fsfe.org', logo: 'img/logos/fsfe.svg' },
    { name: 'Checkmarx', url: 'https://checkmarx.com' },
    { name: 'FOSSology', url: 'https://www.fossology.org', logo: 'img/logos/fossology.png' },
    { name: 'Citi', url: 'https://www.citigroup.com' },
    { name: 'Google OSV', url: 'https://osv.dev', logo: 'img/logos/osv.svg' },
    { name: 'Cisco', url: 'https://www.cisco.com' },
    { name: 'Grype', url: 'https://github.com/anchore/grype', logo: 'img/logos/grype.png' },
    { name: 'CIRCL.lu', url: 'https://www.circl.lu' },
    { name: 'Hugging Face', url: 'https://huggingface.co', logo: 'img/logos/huggingface.svg' },
    { name: 'deps.dev', url: 'https://deps.dev' },
    { name: 'Linux Foundation', url: 'https://www.linuxfoundation.org', logo: 'img/logos/linux-foundation.svg' },
    { name: 'Deutsche Bahn', url: 'https://www.deutschebahn.com' },
    { name: 'OpenChain', url: 'https://www.openchainproject.org', logo: 'img/logos/openchain.png' },
    { name: 'Endor Labs', url: 'https://www.endorlabs.com' },
    { name: 'OpenSSF', url: 'https://openssf.org', logo: 'img/logos/openssf.png' },
    { name: 'Ericsson', url: 'https://www.ericsson.com' },
    { name: 'OpenSSF GUAC', url: 'https://guac.sh', logo: 'img/logos/guac.png' },
    { name: 'FSF', url: 'https://www.fsf.org' },
    { name: 'OW2', url: 'https://www.ow2.org', logo: 'img/logos/ow2.png' },
    { name: 'Fujitsu', url: 'https://www.fujitsu.com' },
    { name: 'OWASP', url: 'https://owasp.org', logo: 'img/logos/owasp.png' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'OpenVEX', url: 'https://openvex.dev', logo: 'img/logos/openvex.png' },
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'ORT', url: 'https://oss-review-toolkit.org', logo: 'img/logos/ort.png' },
    { name: 'HERE', url: 'https://www.here.com' },
    { name: 'OSI', url: 'https://opensource.org', logo: 'img/logos/osi.png' },
    { name: 'Huawei', url: 'https://www.huawei.com' },
    { name: 'OSSelot', url: 'https://www.osselot.org', logo: 'img/logos/osselot.svg' },
    { name: 'HPE', url: 'https://www.hpe.com' },
    { name: 'OSSIndex', url: 'https://ossindex.sonatype.org', logo: 'img/logos/ossindex.png' },
    { name: 'IBM', url: 'https://www.ibm.com' },
    { name: 'OSS Compass', url: 'https://oss-compass.org', logo: 'img/logos/oss-compass.png' },
    { name: 'LG', url: 'https://www.lg.com' },
    { name: 'Rust Foundation', url: 'https://foundation.rust-lang.org', logo: 'img/logos/rust-foundation.png' },
    { name: 'Liferay', url: 'https://www.liferay.com' },
    { name: 'REUSE.software', url: 'https://reuse.software', logo: 'img/logos/reuse.png' },
    { name: 'Maven Central', url: 'https://central.sonatype.com' },
    { name: 'SCANOSS', url: 'https://www.scanoss.com', logo: 'img/logos/scanoss.png' },
    { name: 'Mend', url: 'https://www.mend.io' },
    { name: 'Software Heritage', url: 'https://www.softwareheritage.org', logo: 'img/logos/software-heritage.png' },
    { name: 'Mercedes-Benz', url: 'https://www.mercedes-benz.com' },
    { name: 'SPDX', url: 'https://spdx.dev', logo: 'img/logos/spdx.png' },
    { name: 'Meta', url: 'https://about.meta.com' },
    { name: 'Syft', url: 'https://github.com/anchore/syft', logo: 'img/logos/syft.png' },
    { name: 'Microsoft', url: 'https://www.microsoft.com' },
    { name: 'SW360', url: 'https://www.eclipse.org/sw360/', logo: 'img/logos/sw360.svg' },
    { name: 'Nokia', url: 'https://www.nokia.com' },
    { name: 'Trivy', url: 'https://trivy.dev', logo: 'img/logos/trivy.png' },
    { name: 'OpenRails', url: 'https://openrails.org' },
    { name: 'Oracle', url: 'https://www.oracle.com' },
    { name: 'Orange', url: 'https://www.orange.com' },
    { name: 'OSADL', url: 'https://www.osadl.org' },
    { name: 'Porsche', url: 'https://www.porsche.com' },
    { name: 'Qualcomm', url: 'https://www.qualcomm.com' },
    { name: 'Red Hat', url: 'https://www.redhat.com' },
    { name: 'ReversingLabs', url: 'https://www.reversinglabs.com' },
    { name: 'Saab', url: 'https://www.saab.com' },
    { name: 'Samsung', url: 'https://www.samsung.com' },
    { name: 'SAP', url: 'https://www.sap.com' },
    { name: 'ServiceNow', url: 'https://www.servicenow.com' },
    { name: 'Siemens', url: 'https://www.siemens.com' },
    { name: 'Siemens Healthineers', url: 'https://www.siemens-healthineers.com' },
    { name: 'Snyk', url: 'https://snyk.io' },
    { name: 'SODGE IT', url: 'https://www.sodge-it.com' },
    { name: 'Sony', url: 'https://www.sony.com' },
    { name: 'Sonatype', url: 'https://www.sonatype.com' },
    { name: 'Veracode', url: 'https://www.veracode.com' },
    { name: 'Verizon', url: 'https://www.verizon.com' },
    { name: 'VMware', url: 'https://www.vmware.com' },
    { name: 'Volkswagen', url: 'https://www.volkswagen.com' },
    { name: 'VulnCheck', url: 'https://vulncheck.com' },
    { name: 'Wiz', url: 'https://www.wiz.io' },
    { name: 'Zeiss', url: 'https://www.zeiss.com' },
];

export default function AdoptersBanner() {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerTrack}>
                {adopters.map((a) => (
                    <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className={styles.adopter}>
                        {a.logo ? (
                            <img src={`/${a.logo}`} alt={a.name} className={styles.adopterLogo} />
                        ) : (
                            <span className={styles.adopterName}>{a.name}</span>
                        )}
                    </a>
                ))}
                {adopters.map((a) => (
                    <a key={a.name + '-dup'} href={a.url} target="_blank" rel="noopener noreferrer" className={styles.adopter}>
                        {a.logo ? (
                            <img src={`/${a.logo}`} alt={a.name} className={styles.adopterLogo} />
                        ) : (
                            <span className={styles.adopterName}>{a.name}</span>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}
