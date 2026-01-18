# AboutCode.org Website

<div align="center">

[![Deploy to GitHub Pages](https://github.com/aboutcode-org/www.aboutcode.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/aboutcode-org/www.aboutcode.org/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-green.svg)](https://docusaurus.io/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0-brightgreen)](https://nodejs.org/)

**Official documentation and community website for the AboutCode project**

[Live Website](https://aboutcode-org.github.io/www.aboutcode.org/) • [Report Bug](https://github.com/aboutcode-org/www.aboutcode.org/issues) • [Request Feature](https://github.com/aboutcode-org/www.aboutcode.org/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Community & Support](#community--support)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## 🌟 About

AboutCode is a community of open source developers dedicated to creating tools that help organizations discover, analyze, and manage open source software dependencies. This repository contains the source code for the AboutCode website, built using Docusaurus - a modern static website generator.

### AboutCode Projects

- **[ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit)** - Comprehensive license, copyright, and dependency scanner
- **[VulnerableCode](https://github.com/aboutcode-org/vulnerablecode)** - Free and open vulnerability database
- **[PURL-DB](https://github.com/aboutcode-org/purldb)** - Package URL database for universal software package identification
- **[DejaCode](https://github.com/aboutcode-org/dejacode)** - Enterprise-grade application for managing open source compliance

## ✨ Key Features

- 📚 **Comprehensive Documentation** - Detailed guides for all AboutCode projects
- 📝 **Community Blog** - Latest news, updates, and community contributions
- 🎨 **Modern UI** - Clean, responsive design built with React
- 🔍 **Search Functionality** - Quick access to documentation and resources
- 🌐 **Multi-language Support** - Internationalization ready
- ♿ **Accessibility** - WCAG compliant
- 📱 **Mobile Responsive** - Optimized for all devices

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `>= 20.0` ([Download](https://nodejs.org/))
- **npm** `>= 9.0` (comes bundled with Node.js)
- **Git** ([Download](https://git-scm.com/))

## 🚀 Getting Started

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/aboutcode-org/www.aboutcode.org.git
cd www.aboutcode.org
```

2. **Navigate to the website directory**

```bash
cd website
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```

The website will automatically open at `http://localhost:3000/www.aboutcode.org/`

## 💻 Development

### Available Commands

All commands should be run from the `website` directory:

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Build production-ready static files |
| `npm run serve` | Preview production build locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run swizzle` | Customize Docusaurus components |

### Local Development Workflow

1. Create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes in the `website` directory

3. Test your changes locally:
```bash
npm start
```

4. Build to ensure no errors:
```bash
npm run build
```

5. Commit your changes with a descriptive message:
```bash
git commit -m "Add: brief description of changes"
```

### Hot Reload

The development server includes hot module replacement. Changes to React components, pages, and styles will automatically refresh in the browser without losing state.

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/              # GitHub Actions CI/CD workflows
│       ├── deploy.yml         # Deployment workflow
│       └── ci.yml             # Continuous integration
├── website/
│   ├── blog/                  # Blog posts (MDX format)
│   │   ├── authors.yml        # Blog author information
│   │   └── tags.yml           # Blog tag definitions
│   ├── docs/                  # Documentation pages
│   │   ├── about/            # About section
│   │   ├── getting_started/  # Getting started guides
│   │   └── tutorial-basics/  # Basic tutorials
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── HomepageContent/
│   │   │   ├── HomepageFeatures/
│   │   │   └── ProjectGridTemplate/
│   │   ├── css/             # Global styles
│   │   ├── data/            # Project data (JSON)
│   │   └── pages/           # Custom pages (React)
│   ├── static/              # Static assets (images, fonts)
│   │   └── img/            # Images
│   ├── docusaurus.config.js # Docusaurus configuration
│   ├── sidebars.js          # Sidebar navigation
│   ├── package.json         # Dependencies and scripts
│   └── README.md            # Website-specific documentation
├── README.md                 # This file
└── LICENSE                   # License information
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features or improvements
- 📝 Improve documentation
- ✍️ Write blog posts
- 🎨 Enhance UI/UX design
- 🌐 Add translations

### Contribution Workflow

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
```bash
git clone https://github.com/YOUR_USERNAME/www.aboutcode.org.git
```

3. **Create a feature branch**:
```bash
git checkout -b feature/amazing-feature
```

4. **Make your changes** and commit:
```bash
git add .
git commit -s -m "Add: amazing feature"
```
   > **Note:** Use `-s` flag to sign-off commits (required for DCO compliance)

5. **Push to your fork**:
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request** with a clear description of your changes

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `Add:` - New features or content
- `Fix:` - Bug fixes
- `Update:` - Updates to existing features
- `Remove:` - Removed features or files
- `Docs:` - Documentation changes
- `Style:` - Code style changes (formatting, etc.)

### Writing Blog Posts

Create a new folder in `website/blog/` with your post:

```markdown
---
slug: your-post-slug
title: Your Post Title
authors: [username]
tags: [opensource, scancode]
date: 2026-01-18
---

Your introduction here...

<!-- truncate -->

Rest of your content...
```

### Code Review Process

All submissions require review. We follow these guidelines:

- PRs should have a clear purpose and description
- Code should follow project style guidelines
- All tests must pass
- Documentation must be updated if needed
- Commits must be signed off (DCO)

## 💬 Community & Support

Join our vibrant community:

- **💬 Slack** - [Join AboutCode Slack](https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og)
- **🗨️ Gitter** - [Chat on Gitter](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
- **🐙 GitHub** - [AboutCode Organization](https://github.com/aboutcode-org)
- **💼 LinkedIn** - [Follow us on LinkedIn](https://www.linkedin.com/company/aboutcode/)
- **📧 Email** - hello@aboutcode.org

### Getting Help

- Check the [documentation](https://aboutcode.readthedocs.io)
- Search [existing issues](https://github.com/aboutcode-org/www.aboutcode.org/issues)
- Ask questions on [Slack](https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og)
- Create a [new issue](https://github.com/aboutcode-org/www.aboutcode.org/issues/new)

## 🛠️ Technology Stack

- **[Docusaurus](https://docusaurus.io/)** `v3.x` - Static site generator
- **[React](https://reactjs.org/)** `v19.x` - UI library
- **[MDX](https://mdxjs.com/)** - Markdown with JSX
- **[Prism](https://prismjs.com/)** - Syntax highlighting
- **[GitHub Pages](https://pages.github.com/)** - Hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

## 🚢 Deployment

### Automatic Deployment

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment

#### Using SSH

```bash
USE_SSH=true npm run deploy
```

#### Using HTTPS

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

### Build Optimization

The production build is optimized for:
- Fast page loads
- SEO
- Accessibility
- Browser compatibility
- Asset optimization

## 🔧 Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Find and kill the process
npx kill-port 3000
# Or use a different port
npm start -- --port 3001
```

**Issue: Module not found errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run clear
```

**Issue: Build fails**
```bash
# Clear Docusaurus cache
npm run clear
# Rebuild
npm run build
```

### Debug Mode

Run in debug mode for detailed logs:
```bash
DEBUG=* npm start
```

## 📄 License

Copyright © AboutCode Europe ASBL. All rights reserved.

This project documentation is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all [contributors](https://github.com/aboutcode-org/www.aboutcode.org/graphs/contributors)
- Built with [Docusaurus](https://docusaurus.io/)
- Hosted on [GitHub Pages](https://pages.github.com/)

## 📚 Additional Resources

- [AboutCode Documentation](https://aboutcode.readthedocs.io)
- [ScanCode Toolkit](https://scancode-toolkit.readthedocs.io)
- [VulnerableCode Documentation](https://vulnerablecode.readthedocs.io)
- [Package URL Specification](https://github.com/package-url/purl-spec)

---

<div align="center">

Made with ❤️ by the AboutCode community

[⬆ Back to Top](#aboutcodeorg-website)

</div>


