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
    favicon: 'img/favicon-test.ico',

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
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
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
                // title: 'My Site',
                // logo: {
                //     alt: 'My Site Logo',
                //     src: 'img/logo.svg',
                // },
                logo: {
                    alt: 'www.aboutcode.org Logo',
                    src: 'img/no_logo_placeholder.svg',
                },
                style: "dark",
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
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'tutorialSidebar',
                    //     position: 'left',
                    //     label: 'Tutorial',
                    // },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'X',
                                href: 'https://x.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
