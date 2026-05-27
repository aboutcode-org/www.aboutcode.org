export const packageUrlProject = {
    group: 'package-url',
    name: 'Package-URL',
    description: [
        'Package-URL (PURL) is a specification to reliably identify and locate software packages across package ecosystems.',
    ],
    repository_url: 'https://github.com/package-url/purl-spec',
    documentation_url: 'https://packageurl.org/',
    package_download_url: ['Not applicable'],
    service_url: 'Not applicable',
    languages: 'Not applicable',
    software_license: 'MIT',
    data_license: 'Not applicable',
    platform: 'Not applicable',
    lead_maintainer: ['Not applicable'],
    notes: 'Not applicable',
};

export const clearlyDefinedProject = {
    group: 'application',
    name: 'ClearlyDefined',
    description: [
        'ClearlyDefined curates and serves open source component metadata for license, copyright, source, and security compliance.',
    ],
    repository_url: 'https://github.com/clearlydefined/clearlydefined',
    documentation_url: 'https://docs.clearlydefined.io/',
    package_download_url: ['Not applicable'],
    service_url: 'https://clearlydefined.io/',
    languages: 'TypeScript, JavaScript',
    software_license: 'MIT',
    data_license: 'CC-BY-4.0',
    platform: 'Web',
    lead_maintainer: ['Not applicable'],
    notes: 'Not applicable',
};

export const featuredProjectSources = [
    {
        id: 'featured-projects',
        title: 'Featured projects',
        data: [
            packageUrlProject,
            {
                group: 'scancode',
                name: 'ScanCode Toolkit',
                description: [
                    'ScanCode Toolkit is a set of code scanning tools that detect the origin (copyrights), license and vulnerabilities of code, packages and dependencies in a codebase.',
                ],
                repository_url: 'https://github.com/aboutcode-org/scancode-toolkit',
                documentation_url:
                    'https://scancode-toolkit.readthedocs.io/en/stable/',
                package_download_url: [
                    'https://pypi.org/project/scancode-toolkit/',
                    'https://pypi.org/project/scancode-toolkit-mini/',
                ],
                service_url: 'Not applicable',
                languages: 'Python',
                software_license: 'Apache-2.0',
                data_license: 'CC-BY-4.0',
                platform: 'Python',
                lead_maintainer: ['https://github.com/AyanSinhaMahapatra'],
                notes: 'Not applicable',
            },
            {
                group: 'application',
                name: 'ScanCode.io',
                description: [
                    'ScanCode.io provides a Web UI and API to run and review complex scans in rich scripted pipelines, on different kinds of containers, docker images, package archives, manifests etc, to get information on licenses, copyrights, sources, and vulnerabilities.',
                ],
                repository_url: 'https://github.com/aboutcode-org/scancode.io',
                documentation_url: 'https://scancodeio.readthedocs.io/en/latest/',
                package_download_url: ['https://pypi.org/project/scancodeio/'],
                service_url: 'Not applicable',
                languages: 'Python',
                software_license: 'Apache-2.0',
                data_license: 'Not applicable',
                platform: 'Docker',
                lead_maintainer: ['https://github.com/tdruez'],
                notes: 'Not applicable',
            },
            {
                group: 'package-url',
                name: 'PurlDB',
                description: [
                    'PURLDB provides tools to create and update a database of package metadata keyed by PURL (Package URL) and an API for the PURL data.',
                ],
                repository_url: 'https://github.com/aboutcode-org/purldb',
                documentation_url: 'https://purldb.readthedocs.io/en/stable/',
                package_download_url: [
                    'https://pypi.org/project/minecode-pipelines/',
                    'https://pypi.org/project/purl2vcs/',
                ],
                service_url: 'https://public.purldb.io/api/',
                languages: 'Python',
                software_license: 'Apache-2.0',
                data_license: 'CC-BY-SA-4.0',
                platform: 'Debian-based Linux distros',
                lead_maintainer: ['https://github.com/JonoYang'],
                notes: 'Not applicable',
            },
            {
                group: 'application',
                name: 'DejaCode',
                description: [
                    'DejaCode provides an enterprise-level application to automate open source license compliance and ensure software supply chain integrity, powered by ScanCode.',
                ],
                repository_url: 'https://github.com/aboutcode-org/dejacode',
                documentation_url: 'https://dejacode.readthedocs.io/en/stable/',
                package_download_url: ['https://pypi.org/project/dejacode/'],
                service_url: 'https://public.dejacode.com/account/register/',
                languages: 'Python',
                software_license: 'AGPL-3.0-only',
                data_license: 'Not applicable',
                platform: 'Docker, Debian-based Linux distros',
                lead_maintainer: [
                    'https://github.com/tdruez',
                    'https://github.com/DennisClark',
                ],
                notes: 'Not applicable',
            },
            {
                group: 'application',
                name: 'VulnerableCode',
                description: [
                    'VulnerableCode provides a Web UI and API to access a database of known software package vulnerabilities with comprehensive information from upstream and downstream public sources including packages affected by a vulnerability and packages that fix a vulnerability. There is a public VulnerableCode database at: https://public.vulnerablecode.io/ and the project also provides the tools to build your own instance of the database.',
                ],
                repository_url: 'https://github.com/aboutcode-org/vulnerablecode',
                documentation_url:
                    'https://vulnerablecode.readthedocs.io/en/stable/',
                package_download_url: [
                    'https://pypi.org/project/vulnerablecode/',
                    'https://pypi.org/project/aboutcode.federated/',
                    'https://pypi.org/project/aboutcode.hashid/',
                ],
                service_url: 'https://public.vulnerablecode.io/',
                languages: 'Python',
                software_license: 'Apache-2.0',
                data_license: 'CC-BY-SA-4.0',
                platform: 'Docker, Debian-based Linux distros, MacOS',
                lead_maintainer: [
                    'https://github.com/TG1999',
                    'https://github.com/keshav-space',
                ],
                notes: 'Coming soon: https://public2.vulnerablecode.io/.',
            },
            clearlyDefinedProject,
        ],
    },
];
