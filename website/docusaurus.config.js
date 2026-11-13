// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { execSync } from 'node:child_process';

// Run git to get versions, and commit date when buildingg.
// Fall-back to defaulst for non-git clones/tarballs/plain dir upload
function vcs_info() {
    const run = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();
    try {
        return {
            version: run('git describe --always --tags --dirty'),
            commit_date: run('git log -1 --format=%cI'),
            // also strip trailing slash
            repo_url: run('git config --get remote.origin.url').replace(/\/$/, ''),
        };
    } catch {
        return {
            version: 'unknown',
            commit_date: '',
            repo_url: 'https://github.com/aboutcode-org/www.aboutcode.org',
        };
    }
}

// Deployment target: local | gh | dreamhost
/** @type {'local' | 'gh' | 'dreamhost'} */
let deployTarget = 'local';

if (process.env.DEPLOY_TARGET === 'gh') {
    deployTarget = 'gh';
} else if (process.env.DEPLOY_TARGET === 'dreamhost') {
    deployTarget = 'dreamhost';
}

const siteConfig = {
    local: {
        url: 'http://localhost',
        baseUrl: '/',
    },
    gh: {
        url: 'https://aboutcode-org.github.io',
        baseUrl: '/www.aboutcode.org/',
    },
    dreamhost: {
        // url: 'https://www.aboutcode.org',
        url: 'https://aboutcode.org',
        baseUrl: '/',
    },
};

// Define const for the footer icon paths.
const currentBaseUrl = siteConfig[deployTarget].baseUrl

const vcs = vcs_info();
const buildLine = vcs.version === 'unknown'
    ? ''
    : `<div class="footer__build">Built with Docusaurus from <a href="${vcs.repo_url}/tree/${vcs.version}" target="_blank" rel="noopener noreferrer">${vcs.repo_url}/tree/${vcs.version}</a> on ${vcs.commit_date}</div>`;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AboutCode.org',
    tagline: 'Open data, tools, and standards for the software supply chains',
    favicon: 'img/favicon.ico',



    markdown: {
        format: 'detect', // Auto-detects: .md = plain Markdown (CommonMark), .mdx = MDX
        hooks: {
            onBrokenMarkdownLinks: 'warn', // This new setting surfaced in 3.9.
        },
    },

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Adapt the www.packageurl.org approach for the GH Pages vs. DreamHost baseUrl adjustment.
    url: siteConfig[deployTarget].url,
    baseUrl: siteConfig[deployTarget].baseUrl,
    trailingSlash: true,

    onBrokenLinks: 'throw',
    // The following is deprecated, to be removed in v4, replaced with similar structure above under 'markdown:'.
    // (New config was introduced in 3.9 -- https://docusaurus.io/blog/releases/3.9#:~:text=In%20%2311283%2C%20we%20added%20siteConfig,to%20make%20Docusaurus%20build%20faster.)
    // onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // sidebarPath: './sidebars.js',
                    // 2026-05-05 15:57:26 (PT) Tuesday.  Does this address the link errors?
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    editUrl: ({ docPath }) => {
                        // TODO We can include a map here as in packageurl.org.
                        // Otherwise, provide a default (so “Edit this page” still works)
                        return `https://github.com/aboutcode-org/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                    },
                },
                blog: {
                    showReadingTime: true,
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    blogTitle: 'AboutCode blog!',
                    editUrl: 'https://github.com/aboutcode-org/www.aboutcode.org/tree/main/website/',
                },

                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // colorMode: {
            //     respectPrefersColorScheme: true,
            // },
            navbar: {
                logo: {
                    alt: 'www.aboutcode.org Logo',
                    src: 'img/AboutCode.svg',
                },
                style: 'dark',
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'getting_started',
                        position: 'left',
                        label: 'Getting Started',
                    },
                    {   to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {   to: '/projects',
                        label: 'Projects',
                        position: 'left'
                    },
                    {   to: '/environments',
                        label: 'Environments',
                        position: 'left'
                    },
                    {
                        type: 'dropdown',
                        label: 'About',
                        position: 'left',
                        items: [
                            {to: '/docs/about/about', label: 'About'},
                            { to: '/docs/about/contribute', label: 'Contribute' },
                            { to: '/docs/about/events', label: 'Events' },
                            { to: '/docs/about/meetings', label: 'Meetings' },
                            { to: '/docs/about/news', label: 'News' },
                            { to: '/docs/about/releases', label: 'Releases' },
                            { to: '/docs/about/standards', label: 'Standards' },
                            { to: '/docs/about/credits', label: 'Thank you' },
                        ],
                    },
                    {
                        href: 'https://aboutcode.readthedocs.io',
                        label: 'Doc',
                        position: 'right',
                    },
                    {
                        href: 'https://join.slack.com/t/aboutcode-org/shared_invite/zt-31uzazd7l-tBHcqKUKkX6jUEPRLswiNw',
                        label: 'Slack',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/aboutcode-org',
                        label: 'GitHub',
                        position: 'right',
                    },

                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        html: `<img src="${currentBaseUrl}img/AboutCode.svg" alt="AboutCode.org" width="150"/>`,
                    },

                    {
                        html: `<a href="https://github.com/aboutcode-org" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="${currentBaseUrl}img/github-mark-white.svg" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="https://www.linkedin.com/company/aboutcode/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="${currentBaseUrl}img/brand-inlogo-download-fg-dsk-v01-2x.png" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="https://join.slack.com/t/aboutcode-org/shared_invite/zt-31uzazd7l-tBHcqKUKkX6jUEPRLswiNw" target="_blank" rel="noopener noreferrer" aria-label="Slack"><img src="${currentBaseUrl}img/slack-logo.svg" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im" target="_blank" rel="noopener noreferrer" aria-label="Gitter"><img src="${currentBaseUrl}img/gitter.svg" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="mailto:hello@aboutcode.org" target="_blank" rel="noopener noreferrer" aria-label="Email"><img src="${currentBaseUrl}img/email-svgrepo-com.svg" alt="" width="25" height="20"></a>`,
                    },

                    { label: 'Privacy Policy', to: '/privacy' },
                    { label: 'Terms of Use', to: '/terms' },
                    { label: 'Credits', to: '/docs/about/credits' },
                ],
                copyright: `Copyright (c) AboutCode Europe ASBL. &nbsp; Content licensed under CC-BY-SA-4.0.${buildLine}`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
