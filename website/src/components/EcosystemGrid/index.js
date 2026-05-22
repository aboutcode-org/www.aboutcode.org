import React from 'react';
import styles from './styles.module.css';

const ecosystems = [
    { name: 'alpm', label: 'Arch Linux', url: 'https://packageurl.org/docs/purl-spec/types-doc/alpm-definition', logo: 'img/ecosystems/alpm.png' },
    { name: 'apk', label: 'Alpine', url: 'https://packageurl.org/docs/purl-spec/types-doc/apk-definition', logo: 'img/ecosystems/apk.png' },
    { name: 'bazel', label: 'Bazel', url: 'https://packageurl.org/docs/purl-spec/types-doc/bazel-definition', logo: 'img/ecosystems/bazel.png' },
    { name: 'bitbucket', label: 'Bitbucket', url: 'https://packageurl.org/docs/purl-spec/types-doc/bitbucket-definition', logo: 'img/ecosystems/bitbucket.png' },
    { name: 'bitnami', label: 'Bitnami', url: 'https://packageurl.org/docs/purl-spec/types-doc/bitnami-definition', logo: 'img/ecosystems/bitnami.png' },
    { name: 'bower', label: 'Bower', url: 'https://bower.io' },
    { name: 'cargo', label: 'Cargo / Rust', url: 'https://packageurl.org/docs/purl-spec/types-doc/cargo-definition', logo: 'img/ecosystems/cargo.png' },
    { name: 'chef', label: 'Chef', url: 'https://www.chef.io' },
    { name: 'cocoapods', label: 'CocoaPods', url: 'https://packageurl.org/docs/purl-spec/types-doc/cocoapods-definition', logo: 'img/ecosystems/cocoapods.png' },
    { name: 'composer', label: 'Composer / PHP', url: 'https://packageurl.org/docs/purl-spec/types-doc/composer-definition', logo: 'img/ecosystems/composer.jpg' },
    { name: 'conan', label: 'Conan / C++', url: 'https://packageurl.org/docs/purl-spec/types-doc/conan-definition', logo: 'img/ecosystems/conan.png' },
    { name: 'conda', label: 'Conda', url: 'https://packageurl.org/docs/purl-spec/types-doc/conda-definition', logo: 'img/ecosystems/conda.png' },
    { name: 'cpan', label: 'CPAN / Perl', url: 'https://packageurl.org/docs/purl-spec/types-doc/cpan-definition', logo: 'img/ecosystems/cpan.png' },
    { name: 'cran', label: 'CRAN / R', url: 'https://packageurl.org/docs/purl-spec/types-doc/cran-definition', logo: 'img/ecosystems/cran.png' },
    { name: 'deb', label: 'Debian / Ubuntu', url: 'https://packageurl.org/docs/purl-spec/types-doc/deb-definition', logo: 'img/ecosystems/deb.png' },
    { name: 'docker', label: 'Docker', url: 'https://packageurl.org/docs/purl-spec/types-doc/docker-definition', logo: 'img/ecosystems/docker.png' },
    { name: 'freebsd', label: 'FreeBSD', url: 'https://www.freebsd.org/ports/' },
    { name: 'gem', label: 'RubyGems', url: 'https://packageurl.org/docs/purl-spec/types-doc/gem-definition', logo: 'img/ecosystems/gem.png' },
    { name: 'github', label: 'GitHub', url: 'https://packageurl.org/docs/purl-spec/types-doc/github-definition', logo: 'img/ecosystems/github.png' },
    { name: 'golang', label: 'Go', url: 'https://packageurl.org/docs/purl-spec/types-doc/golang-definition', logo: 'img/ecosystems/golang.png' },
    { name: 'hackage', label: 'Hackage / Haskell', url: 'https://packageurl.org/docs/purl-spec/types-doc/hackage-definition', logo: 'img/ecosystems/hackage.png' },
    { name: 'haxe', label: 'Haxe', url: 'https://lib.haxe.org' },
    { name: 'hex', label: 'Hex / Erlang', url: 'https://packageurl.org/docs/purl-spec/types-doc/hex-definition', logo: 'img/ecosystems/hex.png' },
    { name: 'huggingface', label: 'Hugging Face', url: 'https://packageurl.org/docs/purl-spec/types-doc/huggingface-definition', logo: 'img/ecosystems/huggingface.svg' },
    { name: 'julia', label: 'Julia', url: 'https://packageurl.org/docs/purl-spec/types-doc/julia-definition', logo: 'img/ecosystems/julia.png' },
    { name: 'luarocks', label: 'LuaRocks', url: 'https://packageurl.org/docs/purl-spec/types-doc/luarocks-definition', logo: 'img/ecosystems/luarocks.svg' },
    { name: 'maven', label: 'Maven / Java', url: 'https://packageurl.org/docs/purl-spec/types-doc/maven-definition', logo: 'img/ecosystems/maven.png' },
    { name: 'mlflow', label: 'MLflow', url: 'https://packageurl.org/docs/purl-spec/types-doc/mlflow-definition', logo: 'img/ecosystems/mlflow.png' },
    { name: 'npm', label: 'npm / JavaScript', url: 'https://packageurl.org/docs/purl-spec/types-doc/npm-definition', logo: 'img/ecosystems/npm.png' },
    { name: 'nuget', label: 'NuGet / .NET', url: 'https://packageurl.org/docs/purl-spec/types-doc/nuget-definition', logo: 'img/ecosystems/nuget.png' },
    { name: 'oci', label: 'OCI', url: 'https://packageurl.org/docs/purl-spec/types-doc/oci-definition', logo: 'img/ecosystems/oci.png' },
    { name: 'opam', label: 'opam / OCaml', url: 'https://packageurl.org/docs/purl-spec/types-doc/opam-definition', logo: 'img/ecosystems/opam.svg' },
    { name: 'otp', label: 'OTP / Erlang', url: 'https://packageurl.org/docs/purl-spec/types-doc/otp-definition', logo: 'img/ecosystems/otp.png' },
    { name: 'pub', label: 'Pub / Dart', url: 'https://packageurl.org/docs/purl-spec/types-doc/pub-definition', logo: 'img/ecosystems/pub.png' },
    { name: 'pypi', label: 'PyPI / Python', url: 'https://packageurl.org/docs/purl-spec/types-doc/pypi-definition', logo: 'img/ecosystems/pypi.png' },
    { name: 'rpm', label: 'RPM / Fedora', url: 'https://packageurl.org/docs/purl-spec/types-doc/rpm-definition', logo: 'img/ecosystems/rpm.png' },
    { name: 'swift', label: 'Swift', url: 'https://packageurl.org/docs/purl-spec/types-doc/swift-definition', logo: 'img/ecosystems/swift.svg' },
    { name: 'yocto', label: 'Yocto', url: 'https://packageurl.org/docs/purl-spec/types-doc/yocto-definition' },
];

export default function EcosystemGrid() {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {ecosystems.map((eco) => (
                        <a
                            key={eco.name}
                            href={eco.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cell}
                        >
                            <div className={styles.logoSlot}>
                                {eco.logo && (
                                    <img
                                        src={`/${eco.logo}`}
                                        alt={eco.label}
                                        className={styles.cellLogo}
                                    />
                                )}
                            </div>
                            <span className={styles.cellLabel}>{eco.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
