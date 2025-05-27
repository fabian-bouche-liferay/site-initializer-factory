#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ Source path not found: ${src}`);
    return;
  }

  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(entry => {
      const srcPath = path.join(src, entry);
      const destPath = path.join(dest, entry);
      copyRecursive(srcPath, destPath);
    });
  } else {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied: ${src} → ${dest}`);
  }
}

const basePath = path.dirname(require.resolve("my-site-initializer-lib/package.json"));
const source = path.join(basePath, "site-initializer");
const destination = path.join(process.cwd(), "site-initializer");

copyRecursive(source, destination);
