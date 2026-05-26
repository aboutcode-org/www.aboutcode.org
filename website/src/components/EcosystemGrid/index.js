import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Display grids of icons for packages, licenses and vulnerabilities


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

const ecosystems = [
    { label: 'Alpine', logo: 'img/logos/apk.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/apk-definition.md' },
    { label: 'Android', logo: 'img/logos/android.svg', url: 'https://developer.android.com' },
    { label: 'Arch Linux', logo: 'img/logos/alpm.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/alpm-definition.md', logoClass: 'logoXL' },
    { label: 'Bazel', logo: 'img/logos/bazel.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/bazel-definition.md' },
    { label: 'Bitbucket', logo: 'img/logos/bitbucket.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/bitbucket-definition.md' },
    { label: 'Bitnami', logo: 'img/logos/bitnami.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/bitnami-definition.md' },
    { label: 'Bower', logo: 'img/logos/bower.png', url: 'https://bower.io' },
    { label: 'Cargo', logo: 'img/logos/cargo.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/cargo-definition.md' },
    { label: 'Chef', logo: 'img/logos/chef.png', url: 'https://www.chef.io', logoClass: 'logoLarge' },
    { label: 'Chrome Extension', logo: 'img/logos/chrome.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/chrome-extension-definition.md' },
    { label: 'CocoaPods', logo: 'img/logos/cocoapods.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/cocoapods-definition.md' },
    { label: 'Composer', logo: 'img/logos/composer.jpg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/composer-definition.md' },
    { label: 'Conan', logo: 'img/logos/conan.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/conan-definition.md' },
    { label: 'Conda', logo: 'img/logos/conda.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/conda-definition.md' },
    { label: 'CPAN', logo: 'img/logos/cpan.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/cpan-definition.md', logoClass: 'logoLarge' },
    { label: 'CRAN', logo: 'img/logos/cran.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/cran-definition.md' },
    { label: 'Debian / Ubuntu', logo: 'img/logos/deb.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/deb-definition.md' },
    { label: 'Docker', logo: 'img/logos/docker.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/docker-definition.md' },
    { label: 'F-Droid', logo: 'img/logos/fdroid.png', url: 'https://f-droid.org' },
    { label: 'Fedora', logo: 'img/logos/fedora.svg', url: 'https://packages.fedoraproject.org' },
    { label: 'FreeBSD', logo: 'img/logos/freebsd.png', url: 'https://www.freebsd.org/ports/', logoClass: 'logoLarge' },
    { label: 'Gentoo', logo: 'img/logos/gentoo.png', url: 'https://packages.gentoo.org' },
    { label: 'GitHub', logo: 'img/logos/github.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/github-definition.md' },
    { label: 'GitLab', logo: 'img/logos/gitlab.png', url: 'https://gitlab.com', logoClass: 'logoLarge' },
    { label: 'Hackage', logo: 'img/logos/hackage.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/hackage-definition.md' },
    { label: 'Hex', logo: 'img/logos/hex.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/hex-definition.md' },
    { label: 'Hugging Face', logo: 'img/logos/huggingface.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/huggingface-definition.md' },
    { label: 'Julia', logo: 'img/logos/julia.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/julia-definition.md' },
    { label: 'LuaRocks', logo: 'img/logos/luarocks.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/luarocks-definition.md' },
    { label: 'Maven', logo: 'img/logos/maven.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/maven-definition.md' },
    { label: 'MLflow', logo: 'img/logos/mlflow.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/mlflow-definition.md' },
    { label: 'npm', logo: 'img/logos/npm.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/npm-definition.md' },
    { label: 'NuGet', logo: 'img/logos/nuget.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/nuget-definition.md' },
    { label: 'OCI', logo: 'img/logos/oci.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/oci-definition.md' },
    { label: 'opam', logo: 'img/logos/opam.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/opam-definition.md', logoClass: 'logoLarge' },
    { label: 'OpenWrt', logo: 'img/logos/openwrt.png', url: 'https://openwrt.org', logoClass: 'logoLarge' },
    { label: 'OTP', logo: 'img/logos/otp.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/otp-definition.md' },
    { label: 'Pub', logo: 'img/logos/pub.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/pub-definition.md' },
    { label: 'PyPI', logo: 'img/logos/pypi.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/pypi-definition.md' },
    { label: 'QNX QPKG', logo: 'img/logos/qnap.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/qpkg-definition.md', logoClass: 'logoWideLarge' },
    { label: 'RPM', logo: 'img/logos/rpm.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/rpm-definition.md', logoClass: 'logoLarge' },
    { label: 'RubyGems', logo: 'img/logos/gem.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/gem-definition.md' },
    { label: 'Swift', logo: 'img/logos/swift.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/swift-definition.md' },
    { label: 'VS Code Extension', logo: 'img/logos/vscode.svg', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/vscode-extension-definition.md' },
    { label: 'Yocto', logo: 'img/logos/yocto.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/yocto-definition.md', logoClass: 'logoWideLarge' },
    { label: 'Autotools', logo: 'img/logos/autotools.svg', url: 'https://www.gnu.org/software/automake/' },
    { label: 'Bash/Shell', logo: 'img/logos/bash.svg', url: 'https://www.gnu.org/software/bash/' },
    { label: 'C', logo: 'img/logos/c-lang.svg', url: 'https://en.cppreference.com/w/c' },
    { label: 'C#', logo: 'img/logos/csharp.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { label: 'C++', logo: 'img/logos/cpp.svg', url: 'https://isocpp.org' },
    { label: 'Dart', logo: 'img/logos/dart.png', url: 'https://dart.dev' },
    { label: '.NET', logo: 'img/logos/dotnet.svg', url: 'https://dotnet.microsoft.com' },
    { label: 'Go', logo: 'img/logos/golang.png', url: 'https://github.com/package-url/purl-spec/blob/main/types-doc/golang-definition.md' },
    { label: 'Haxe', logo: 'img/logos/haxe.svg', url: 'https://lib.haxe.org' },
    { label: 'HTML/CSS', logo: 'img/logos/html-css.svg', url: 'https://developer.mozilla.org/en-US/docs/Web', logoClass: 'logoWideLarge' },
    { label: 'iOS', logo: 'img/logos/ios.svg', url: 'https://developer.apple.com/ios/' },
    { label: 'Java', logo: 'img/logos/java.svg', url: 'https://www.java.com' },
    { label: 'JavaScript', logo: 'img/logos/javascript.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { label: 'Kotlin', logo: 'img/logos/kotlin.svg', url: 'https://kotlinlang.org' },
    { label: 'Linux', logo: 'img/logos/linux.png', url: 'https://www.kernel.org' },
    { label: 'macOS', logo: 'img/logos/macos.svg', url: 'https://developer.apple.com/macos/' },
    { label: 'PHP', logo: 'img/logos/php.svg', url: 'https://www.php.net', logoClass: 'logoWideLarge' },
    { label: 'Python', logo: 'img/logos/python.svg', url: 'https://www.python.org' },
    { label: 'R', logo: 'img/logos/r-lang.svg', url: 'https://www.r-project.org' },
    { label: 'Raku', logo: 'img/logos/raku.svg', url: 'https://raku.org' },
    { label: 'Ruby', logo: 'img/logos/ruby.svg', url: 'https://www.ruby-lang.org' },
    { label: 'Rust', logo: 'img/logos/rust.svg', url: 'https://www.rust-lang.org' },
    { label: 'Scala', logo: 'img/logos/scala.svg', url: 'https://www.scala-lang.org', logoClass: 'logoWideLarge' },
    { label: 'TypeScript', logo: 'img/logos/typescript.svg', url: 'https://www.typescriptlang.org' },
    { label: 'Visual Basic', logo: 'img/logos/vb.svg', url: 'https://learn.microsoft.com/en-us/dotnet/visual-basic/' },
    { label: 'Windows', logo: 'img/logos/windows.svg', url: 'https://www.microsoft.com/windows' },
];

const vulnSources = [
    { label: 'Alpine Security', logo: 'img/logos/apk.png', url: 'https://secdb.alpinelinux.org' },
    { label: 'Apache HTTPD', logo: 'img/logos/apache.svg', url: 'https://httpd.apache.org/security/', logoClass: 'logoWideLarge' },
    { label: 'Apache Kafka', logo: 'img/logos/apache.svg', url: 'https://kafka.apache.org/cve-list', logoClass: 'logoWideLarge' },
    { label: 'Apache Tomcat', logo: 'img/logos/apache.svg', url: 'https://tomcat.apache.org/security.html', logoClass: 'logoWideLarge' },
    { label: 'Arch Linux', logo: 'img/logos/alpm.png', url: 'https://security.archlinux.org', logoClass: 'logoXL' },
    { label: 'CPE', logo: 'img/logos/cpe.svg', url: 'https://nvd.nist.gov/products/cpe', logoClass: 'logoWideLarge' },
    { label: 'CVE', logo: 'img/logos/cve.svg', url: 'https://www.cve.org/', logoClass: 'logoWideLarge' },
    { label: 'CVSS', logo: 'img/logos/cvss.svg', url: 'https://www.first.org/cvss/', logoClass: 'logoWideLarge' },
    { label: 'CWE', logo: 'img/logos/cwe.svg', url: 'https://cwe.mitre.org/', logoClass: 'logoWideLarge' },
    { label: 'curl', logo: 'img/logos/curl.svg', url: 'https://curl.se/docs/security.html', logoClass: 'logoWideLarge' },
    { label: 'Debian Security', logo: 'img/logos/deb.png', url: 'https://security-tracker.debian.org' },
    { label: '.NET Advisories', logo: 'img/logos/dotnet.svg', url: 'https://github.com/dotnet/announcements' },
    { label: 'Elixir Advisories', logo: 'img/logos/elixir.png', url: 'https://github.com/dependabot/elixir-security-advisories', logoClass: 'logoLarge' },
    { label: 'EPSS', logo: 'img/logos/epss.png', url: 'https://www.first.org/epss/', logoClass: 'logoXL' },
    { label: 'ExploitDB', logo: 'img/logos/exploitdb.svg', url: 'https://www.exploit-db.com', logoClass: 'logoWideLarge' },
    { label: 'Gentoo GLSA', logo: 'img/logos/gentoo.png', url: 'https://security.gentoo.org' },
    { label: 'GitHub Advisories', logo: 'img/logos/github.png', url: 'https://github.com/advisories' },
    { label: 'GitLab Advisories', logo: 'img/logos/gitlab.png', url: 'https://advisories.gitlab.com', logoClass: 'logoLarge' },
    { label: 'glibc', logo: 'img/logos/glibc.svg', url: 'https://sourceware.org/glibc/wiki/Security' },
    { label: 'Istio', logo: 'img/logos/istio.png', url: 'https://istio.io/latest/news/security/' },
    { label: 'Linux Kernel', logo: 'img/logos/linux-kernel.svg', url: 'https://www.kernel.org' },
    { label: 'Mattermost', logo: 'img/logos/mattermost.png', url: 'https://mattermost.com/security-updates/' },
    { label: 'Metasploit', logo: 'img/logos/metasploit.svg', url: 'https://www.metasploit.com', logoClass: 'logoWideLarge' },
    { label: 'Mozilla', logo: 'img/logos/mozilla.svg', url: 'https://www.mozilla.org/en-US/security/advisories/', logoClass: 'logoWideLarge' },
    { label: 'nginx', logo: 'img/logos/nginx.svg', url: 'https://nginx.org/en/security_advisories.html', logoClass: 'logoWideLarge' },
    { label: 'npm Advisories', logo: 'img/logos/npm.png', url: 'https://github.com/advisories?query=ecosystem%3Anpm' },
    { label: 'NVD', logo: 'img/logos/nvd.png', url: 'https://nvd.nist.gov', logoClass: 'logoLarge' },
    { label: 'OpenSSL', logo: 'img/logos/openssl.png', url: 'https://www.openssl.org/news/vulnerabilities.html', logoClass: 'logoXL' },
    { label: 'OSS-Fuzz', logo: 'img/logos/ossfuzz.png', url: 'https://google.github.io/oss-fuzz/' },
    { label: 'OSV.dev', logo: 'img/logos/osv.svg', url: 'https://osv.dev', logoClass: 'logoXL' },
    { label: 'PostgreSQL', logo: 'img/logos/postgresql.svg', url: 'https://www.postgresql.org/support/security/' },
    { label: 'PyPA', logo: 'img/logos/pypi.png', url: 'https://github.com/pypa/advisory-database' },
    { label: 'Red Hat', logo: 'img/logos/redhat.png', url: 'https://access.redhat.com/security/security-updates/' },
    { label: 'Ruby Advisory DB', logo: 'img/logos/gem.png', url: 'https://github.com/rubysec/ruby-advisory-db' },
    { label: 'Rust Advisory DB', logo: 'img/logos/cargo.png', url: 'https://github.com/rustsec/advisory-db' },
    { label: 'SSVC', logo: 'img/logos/ssvc.svg', url: 'https://www.cisa.gov/stakeholder-specific-vulnerability-categorization-ssvc', logoClass: 'logoWideLarge' },
    { label: 'openSUSE', logo: 'img/logos/suse.svg', url: 'https://www.suse.com/security/', logoClass: 'logoXL' },
    { label: 'Ubuntu USN', logo: 'img/logos/ubuntu.svg', url: 'https://ubuntu.com/security/notices', logoClass: 'ubuntuLogo' },
    { label: 'Vulnrichment (CISA)', logo: 'img/logos/cisa.png', url: 'https://github.com/cisagov/vulnrichment', logoClass: 'logoLarge' },
    { label: 'CISA KEV', logo: 'img/logos/cisa.png', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog', logoClass: 'logoLarge' },
    { label: 'Xen', logo: 'img/logos/xen.svg', url: 'https://xenbits.xen.org/xsa/', logoClass: 'logoLarge' },
];


function GridItem({ item }) {
    const logoSrc = useBaseUrl(`/${item.logo}`);
    return (
        <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cell}
        >
            <div className={styles.logoSlot}>
                {item.logo && (
                    <img
                        src={logoSrc}
                        alt={item.label}
                        className={`${styles.cellLogo} ${item.logoClass ? styles[item.logoClass] : ''}`}
                    />
                )}
            </div>
            <span className={styles.cellLabel}>{item.label}</span>
        </a>
    );
}

function GridSection({ id, title, items, header_link, intro }) {
    return (
        <div id={id} className={styles.section}>
            <h3 className={styles.sectionTitle}>
                {title}
                {header_link && (
                    <>{' - '}<a href={header_link.url} className={styles.header_link}>{header_link.label}...</a></>
                )}
            </h3>
            {intro && <div className={styles.intro}>{intro}</div>}
            <div className={styles.grid}>
                {items.map((item) => (
                    <GridItem key={item.label} item={item} />
                ))}
            </div>
        </div>
    );
}

export default function EcosystemGrid() {
    return (
        <div className={styles.gridWrapper}>
            <GridSection
                id="licensing"
                title="Licensing data"
                items={licenses}
                header_link={{ label: 'Getting started', url: '/docs/getting_started/getting_started-compliance/' }}
                intro={<p>The ScanCode LicenseDB contains 2,500+ curated licenses across 12 categories. Browse all <a href="https://scancode-licensedb.aboutcode.org" target="_blank" rel="noopener noreferrer">2,500+ licenses</a> in the LicenseDB. Industry-leading license detection is backed by <a href="https://github.com/aboutcode-org/scancode-toolkit/tree/develop/src/licensedcode/data/rules" target="_blank" rel="noopener noreferrer">over 35,000 license notices</a> used as detection rules.</p>}
            />
            <GridSection
            	id="pkg-ecosystems"
            	title="Package ecosystems and programming languages"
            	items={ecosystems}
            	header_link={{ label: 'Getting started', url: '/docs/getting_started/getting_started-software-identification/' }}
                intro={<p>The AboutCode package database and scanners track million of packages over 70 package ecosystems and programming languages. </p>}
        	/>
            <GridSection
                id="vuln-sources"
                title="Vulnerability data sources"
                items={vulnSources}
                header_link={{ label: 'Getting started', url: '/docs/getting_started/getting_started-security/' }}
                intro={<p>AboutCode collects, correlates, and improves vulnerabilities from over 50 data sources, privileging upstream data. </p>}
            />
        </div>
    );
}
