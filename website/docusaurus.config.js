// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AboutCode.org',
    tagline: '[Tagline . . . ?]',
    favicon: 'img/nexB_icon.png',

    markdown: {
        format: 'detect', // Auto-detects: .md = plain Markdown (CommonMark), .mdx = MDX
    },

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // // Set the production url of your site here
    // url: 'https://your-docusaurus-site.example.com',
    // // Set the /<baseUrl>/ pathname under which your site is served
    // // For GitHub pages deployment, it is often '/<projectName>/'
    // baseUrl: '/',

    // // GitHub pages deployment config.
    // // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    url: 'https://aboutcode-org.github.io',
    baseUrl: '/www.aboutcode.org/',
    trailingSlash: false,

    // For GitHub pages deployment:
    organizationName: 'aboutcode-org',
    projectName: 'www.aboutcode.org',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    editUrl: ({ docPath }) => {
                        // TODO We can include a map here as in packageurl.org.
                        // Otherwise, provide a default (so “Edit this page” still works)
                        return `https://github.com/aboutcode-org/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                        // fork:
                        // return `https://github.com/johnmhoran/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                    },
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
            // Replace with your project's social card
            // image: 'img/docusaurus-social-card.jpg',
            // colorMode: {
            //     respectPrefersColorScheme: true,
            // },
            navbar: {
                logo: {
                    alt: 'www.aboutcode.org Logo',
                    src: 'img/AboutCode-logo-stackedv3.png',
                },
                style: 'dark',
                items: [
                    { to: '/', label: 'Home', position: 'left', exact: true },
                    {
                        type: 'docSidebar',
                        sidebarId: 'scancode',
                        position: 'left',
                        label: 'ScanCode',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'vulnerablecode',
                        position: 'left',
                        label: 'VulnerableCode',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'purldb',
                        position: 'left',
                        label: 'PURL-DB',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'dejacode',
                        position: 'left',
                        label: 'DejaCode',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'about',
                        position: 'left',
                        label: 'About',
                    },
                    {
                        href: 'https://github.com/aboutcode-org',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og',
                        label: 'Slack',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        html: `<img src="/www.aboutcode.org/img/AboutCode.svg" alt="My Company" width="150"/>`,
                    },

                    {
                        html: `<a href="https://github.com/aboutcode-org" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/www.aboutcode.org/img/github-mark-white.svg" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="https://www.linkedin.com/company/aboutcode/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BrQlfT6M0S1qSDpQjt52CiQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/www.aboutcode.org/img/brand-inlogo-download-fg-dsk-v01-2x.png" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og" target="_blank" rel="noopener noreferrer" aria-label="Slack"><img src="/www.aboutcode.org/img/slack-logo.svg" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im" target="_blank" rel="noopener noreferrer" aria-label="Gitter"><img src="/www.aboutcode.org/img/gitter.svg" alt="" width="20" height="20"></a>`,
                    },

                    {
                        html: `<a href="mailto:hello@aboutcode.org" target="_blank" rel="noopener noreferrer" aria-label="Email"><img src="/www.aboutcode.org/img/email-svgrepo-com.svg" alt="" width="25" height="20"></a>`,
                    },

                    { label: 'Privacy Policy', to: '/privacy' },
                    { label: 'Terms of Service', to: '/terms' },
                ],
                copyright: `Copyright AboutCode Foundation ASBL. &nbsp; All rights reserved. &nbsp; Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
