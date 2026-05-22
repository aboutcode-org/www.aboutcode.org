import React from 'react';
import styles from './styles.module.css';

const packageEcosystems = [
    { label: 'Alpine', logo: 'img/ecosystems/apk.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/apk-definition' },
    { label: 'Arch Linux', logo: 'img/ecosystems/alpm.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/alpm-definition' },
    { label: 'Bazel', logo: 'img/ecosystems/bazel.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/bazel-definition' },
    { label: 'Bitbucket', logo: 'img/ecosystems/bitbucket.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/bitbucket-definition' },
    { label: 'Bitnami', logo: 'img/ecosystems/bitnami.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/bitnami-definition' },
    { label: 'Bower', logo: 'img/ecosystems/bower.png', url: 'https://bower.io' },
    { label: 'Cargo', logo: 'img/ecosystems/cargo.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cargo-definition' },
    { label: 'Chef', logo: 'img/ecosystems/chef.png', url: 'https://www.chef.io' },
    { label: 'CocoaPods', logo: 'img/ecosystems/cocoapods.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cocoapods-definition' },
    { label: 'Composer', logo: 'img/ecosystems/composer.jpg', url: 'https://packageurl.org/docs/purl-spec/types-doc/composer-definition' },
    { label: 'Conan', logo: 'img/ecosystems/conan.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/conan-definition' },
    { label: 'Conda', logo: 'img/ecosystems/conda.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/conda-definition' },
    { label: 'CPAN', logo: 'img/ecosystems/cpan.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cpan-definition' },
    { label: 'CRAN', logo: 'img/ecosystems/cran.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cran-definition' },
    { label: 'Debian / Ubuntu', logo: 'img/ecosystems/deb.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/deb-definition' },
    { label: 'Docker', logo: 'img/ecosystems/docker.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/docker-definition' },
    { label: 'F-Droid', logo: 'img/ecosystems/fdroid.png', url: 'https://f-droid.org' },
    { label: 'FreeBSD', logo: 'img/ecosystems/freebsd.png', url: 'https://www.freebsd.org/ports/' },
    { label: 'Gentoo', logo: 'img/ecosystems/gentoo.png', url: 'https://packages.gentoo.org' },
    { label: 'GitHub', logo: 'img/ecosystems/github.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/github-definition' },
    { label: 'Hackage', logo: 'img/ecosystems/hackage.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/hackage-definition' },
    { label: 'Hex', logo: 'img/ecosystems/hex.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/hex-definition' },
    { label: 'Hugging Face', logo: 'img/ecosystems/huggingface.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/huggingface-definition' },
    { label: 'Julia', logo: 'img/ecosystems/julia.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/julia-definition' },
    { label: 'LuaRocks', logo: 'img/ecosystems/luarocks.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/luarocks-definition' },
    { label: 'Maven', logo: 'img/ecosystems/maven.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/maven-definition' },
    { label: 'MLflow', logo: 'img/ecosystems/mlflow.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/mlflow-definition' },
    { label: 'npm', logo: 'img/ecosystems/npm.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/npm-definition' },
    { label: 'NuGet', logo: 'img/ecosystems/nuget.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/nuget-definition' },
    { label: 'OCI', logo: 'img/ecosystems/oci.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/oci-definition' },
    { label: 'opam', logo: 'img/ecosystems/opam.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/opam-definition' },
    { label: 'OpenWrt', logo: 'img/ecosystems/openwrt.png', url: 'https://openwrt.org' },
    { label: 'OTP', logo: 'img/ecosystems/otp.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/otp-definition' },
    { label: 'Pub', logo: 'img/ecosystems/pub.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/pub-definition' },
    { label: 'PyPI', logo: 'img/ecosystems/pypi.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/pypi-definition' },
    { label: 'RPM', logo: 'img/ecosystems/rpm.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/rpm-definition' },
    { label: 'RubyGems', logo: 'img/ecosystems/gem.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/gem-definition' },
    { label: 'Swift', logo: 'img/ecosystems/swift.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/swift-definition' },
    { label: 'Yocto', logo: 'img/ecosystems/yocto.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/yocto-definition' },
];

const languages = [
    { label: 'C / C++', logo: 'img/ecosystems/conan.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/conan-definition' },
    { label: 'Dart', logo: 'img/ecosystems/pub.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/pub-definition' },
    { label: 'Elixir / Erlang', logo: 'img/ecosystems/hex.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/hex-definition' },
    { label: 'Go', logo: 'img/ecosystems/golang.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/golang-definition' },
    { label: 'Haskell', logo: 'img/ecosystems/hackage.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/hackage-definition' },
    { label: 'Haxe', logo: 'img/ecosystems/haxe.png', url: 'https://lib.haxe.org' },
    { label: 'Java', logo: 'img/ecosystems/maven.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/maven-definition' },
    { label: 'JavaScript', logo: 'img/ecosystems/npm.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/npm-definition' },
    { label: 'Julia', logo: 'img/ecosystems/julia.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/julia-definition' },
    { label: 'Lua', logo: 'img/ecosystems/luarocks.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/luarocks-definition' },
    { label: '.NET / C#', logo: 'img/ecosystems/nuget.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/nuget-definition' },
    { label: 'OCaml', logo: 'img/ecosystems/opam.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/opam-definition' },
    { label: 'Perl', logo: 'img/ecosystems/cpan.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cpan-definition' },
    { label: 'PHP', logo: 'img/ecosystems/composer.jpg', url: 'https://packageurl.org/docs/purl-spec/types-doc/composer-definition' },
    { label: 'Python', logo: 'img/ecosystems/pypi.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/pypi-definition' },
    { label: 'R', logo: 'img/ecosystems/cran.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cran-definition' },
    { label: 'Raku', logo: 'img/ecosystems/raku.svg', url: 'https://raku.org' },
    { label: 'Ruby', logo: 'img/ecosystems/gem.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/gem-definition' },
    { label: 'Rust', logo: 'img/ecosystems/cargo.png', url: 'https://packageurl.org/docs/purl-spec/types-doc/cargo-definition' },
    { label: 'Swift', logo: 'img/ecosystems/swift.svg', url: 'https://packageurl.org/docs/purl-spec/types-doc/swift-definition' },
];

const vulnSources = [
    { label: 'Alpine Security', logo: 'img/ecosystems/apk.png', url: 'https://secdb.alpinelinux.org' },
    { label: 'Apache HTTPD', logo: 'img/logos/apache.svg', url: 'https://httpd.apache.org/security/' },
    { label: 'Apache Kafka', logo: 'img/logos/apache.svg', url: 'https://kafka.apache.org/cve-list' },
    { label: 'Apache Tomcat', logo: 'img/logos/apache.svg', url: 'https://tomcat.apache.org/security.html' },
    { label: 'Arch Linux', logo: 'img/ecosystems/alpm.png', url: 'https://security.archlinux.org' },
    { label: 'curl', logo: 'img/ecosystems/curl.svg', url: 'https://curl.se/docs/security.html' },
    { label: 'Debian Security', logo: 'img/ecosystems/deb.png', url: 'https://security-tracker.debian.org' },
    { label: 'Elixir Advisories', logo: 'img/ecosystems/elixir.png', url: 'https://github.com/dependabot/elixir-security-advisories' },
    { label: 'EPSS', logo: 'img/ecosystems/epss.png', url: 'https://www.first.org/epss/' },
    { label: 'Gentoo GLSA', logo: 'img/ecosystems/gentoo.png', url: 'https://security.gentoo.org' },
    { label: 'GitHub Advisories', logo: 'img/ecosystems/github.png', url: 'https://github.com/advisories' },
    { label: 'GitLab Advisories', logo: 'img/ecosystems/gitlab.png', url: 'https://advisories.gitlab.com' },
    { label: 'Istio', logo: 'img/ecosystems/istio.png', url: 'https://istio.io/latest/news/security/' },
    { label: 'Mattermost', logo: 'img/ecosystems/mattermost.png', url: 'https://mattermost.com/security-updates/' },
    { label: 'Mozilla', logo: 'img/ecosystems/mozilla.svg', url: 'https://www.mozilla.org/en-US/security/advisories/' },
    { label: 'NVD', logo: 'img/ecosystems/nvd.png', url: 'https://nvd.nist.gov' },
    { label: 'OpenSSL', logo: 'img/ecosystems/openssl.png', url: 'https://www.openssl.org/news/vulnerabilities.html' },
    { label: 'OSS-Fuzz', logo: 'img/ecosystems/ossfuzz.png', url: 'https://google.github.io/oss-fuzz/' },
    { label: 'OSV.dev', logo: 'img/logos/osv.svg', url: 'https://osv.dev' },
    { label: 'PostgreSQL', logo: 'img/ecosystems/postgresql.svg', url: 'https://www.postgresql.org/support/security/' },
    { label: 'PyPA', logo: 'img/ecosystems/pypi.png', url: 'https://github.com/pypa/advisory-database' },
    { label: 'Red Hat', logo: 'img/ecosystems/redhat.png', url: 'https://access.redhat.com/security/security-updates/' },
    { label: 'Ruby Advisory DB', logo: 'img/ecosystems/gem.png', url: 'https://github.com/rubysec/ruby-advisory-db' },
    { label: 'Rust Advisory DB', logo: 'img/ecosystems/cargo.png', url: 'https://github.com/rustsec/advisory-db' },
    { label: 'SUSE', logo: 'img/ecosystems/suse.svg', url: 'https://www.suse.com/security/' },
    { label: 'Ubuntu USN', logo: 'img/ecosystems/ubuntu.svg', url: 'https://ubuntu.com/security/notices' },
    { label: 'Vulnrichment (CISA)', logo: 'img/ecosystems/cisa.png', url: 'https://github.com/cisagov/vulnrichment' },
    { label: 'Xen', logo: 'img/ecosystems/xen.png', url: 'https://xenbits.xen.org/xsa/' },
];

function GridSection({ title, items }) {
    return (
        <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{title}</h3>
            <div className={styles.grid}>
                {items.map((item) => (
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
                                    src={`/${item.logo}`}
                                    alt={item.label}
                                    className={styles.cellLogo}
                                />
                            )}
                        </div>
                        <span className={styles.cellLabel}>{item.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function EcosystemGrid() {
    return (
        <div className={styles.gridWrapper}>
            <GridSection title="Package ecosystems" items={packageEcosystems} />
            <GridSection title="Programming languages" items={languages} />
            <GridSection title="Vulnerability data sources" items={vulnSources} />
        </div>
    );
}
