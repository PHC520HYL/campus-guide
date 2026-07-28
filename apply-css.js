const fs = require('fs');
const path = require('path');

const htmlFile = path.join(require('os').homedir(), 'Desktop', '校园', '江西电力职业技术学院-校园指南.html');
const cssSource = path.join(require('os').homedir(), 'Desktop', '校园', 'optimized-css.txt');

const css = fs.readFileSync(cssSource, 'utf8');
let html = fs.readFileSync(htmlFile, 'utf8');

const startIdx = html.indexOf('<style>');
const endIdx = html.indexOf('</style>') + '</style>'.length;

const before = html.substring(0, startIdx);
const after = html.substring(endIdx);

const result = before + css + after;
fs.writeFileSync(htmlFile, result, 'utf8');
console.log('Done:', htmlFile);
console.log('New size:', Buffer.byteLength(result, 'utf8'), 'bytes');
