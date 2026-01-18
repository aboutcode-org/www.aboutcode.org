# AboutCode.org Website

[![Deploy to GitHub Pages](https://github.com/aboutcode-org/www.aboutcode.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/aboutcode-org/www.aboutcode.org/actions/workflows/deploy.yml)

Official website repository for [AboutCode.org](https://aboutcode.org) - built with [Docusaurus](https://docusaurus.io/).

The live website is available at: https://aboutcode-org.github.io/www.aboutcode.org/

## About AboutCode

AboutCode is a community of open source developers building tools to help you discover, analyze, and track open source software dependencies. Our projects include:

- **[ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit)** - Scan code for licenses, copyrights, and dependencies
- **[VulnerableCode](https://github.com/aboutcode-org/vulnerablecode)** - Open source vulnerability database
- **[PURL-DB](https://github.com/aboutcode-org/purldb)** - Package URL database
- **[DejaCode](https://github.com/aboutcode-org/dejacode)** - Application for managing open source compliance

## Prerequisites

- Node.js 20.0 or higher
- npm (comes with Node.js)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aboutcode-org/www.aboutcode.org.git
cd www.aboutcode.org
```

2. Install dependencies:
```bash
cd website
npm install
```

### Development

Start the local development server:
```bash
cd website
npm start
```

The site will be available at http://localhost:3000/www.aboutcode.org/

Changes you make will automatically reload in the browser.

### Build

Build the static site for production:
```bash
cd website
npm run build
```

The built files will be in `website/build/`.

### Preview Production Build

Test the production build locally:
```bash
cd website
npm run serve
```

## Project Structure

```
.
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── website/
│   ├── blog/              # Blog posts
│   ├── docs/              # Documentation pages
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── css/          # Custom CSS
│   │   ├── data/         # Project data (JSON)
│   │   └── pages/        # Custom pages
│   ├── static/           # Static assets
│   ├── docusaurus.config.js  # Docusaurus configuration
│   ├── sidebars.js       # Sidebar configuration
│   └── package.json      # Dependencies
└── README.md
```

## Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues

- Check if the issue already exists
- Provide clear description and steps to reproduce
- Include screenshots if relevant

### Submitting Changes

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test your changes locally
5. Commit with a clear message (`git commit -m "Add feature"`)
6. Push to your fork (`git push origin feature/your-feature`)
7. Open a Pull Request

### Adding Blog Posts

Blog posts are located in `website/blog/`. Create a new folder with your post:

```markdown
---
slug: your-post-slug
title: Your Post Title
authors: [yourname]
tags: [tag1, tag2]
---

Your content here...
```

### Documentation Guidelines

- Keep documentation clear and concise
- Use proper markdown formatting
- Test all code examples
- Update table of contents if needed

## Community & Support

- **Slack:** [Join our Slack](https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og)
- **Gitter:** [Chat on Gitter](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
- **GitHub:** [AboutCode Organization](https://github.com/aboutcode-org)
- **LinkedIn:** [AboutCode on LinkedIn](https://www.linkedin.com/company/aboutcode/)
- **Email:** hello@aboutcode.org

## Available Scripts

In the `website` directory, you can run:

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clear` - Clear Docusaurus cache
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

Manual deployment via SSH:
```bash
USE_SSH=true npm run deploy
```

Manual deployment via HTTPS:
```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## License

Copyright AboutCode Europe ASBL. All rights reserved.

## Links

- [Website](https://aboutcode.org)
- [Documentation](https://aboutcode.readthedocs.io)
- [GitHub](https://github.com/aboutcode-org)

