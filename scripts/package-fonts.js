#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcDir = path.resolve("public", "fonts");
const destDir = path.resolve("public", "dist");

const weights = [
    "Regular",
    "Medium",
    "SemiBold",
    "Bold",
    "ExtraBold",
    "Black",
];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

fs.readdirSync(srcDir, { withFileTypes: true }).forEach(f => {
    for (const weight of weights) {
        if (f.name.includes(weight)) {
            const src = path.resolve(srcDir, f.name);
            const dest = path.resolve(destDir, `_${f.name}`);
            console.log(`Copying ${srcDir} to ${destDir}`);
            fs.cpSync(src, dest);
        }
    }
});