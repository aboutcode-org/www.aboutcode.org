#!/usr/bin/env node
// Post-build script: rewrite absolute paths to relative paths in HTML files
// so the site can be browsed via file:// without a server.

const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

function getRelativePrefix(filePath) {
    const rel = path.relative(path.dirname(filePath), buildDir);
    if (rel === '') return './';
    return rel.replace(/\\/g, '/') + '/';
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const prefix = getRelativePrefix(filePath);

    // Replace absolute paths starting with / (but not //) with relative prefix
    content = content.replace(/(href|src|action)="\/(?!\/)/g, `$1="${prefix}`);
    content = content.replace(/url\(\/(?!\/)/g, `url(${prefix}`);

    fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full);
        } else if (entry.name.endsWith('.html')) {
            processFile(full);
        }
    }
}

walk(buildDir);
console.log('All HTML paths converted to relative.');
