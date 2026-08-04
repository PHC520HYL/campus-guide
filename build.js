const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process');
const path = require('path');

const dir = 'C:\\Users\\32890\\Desktop\\校园';
const workspace = 'C:\\Users\\32890\\.qclaw\\workspace-agent-8819a796';
const files = {
  index: path.join(dir, 'index.html'),
  guide: path.join(dir, '江西电力职业技术学院校园指南.html'),
  data: path.join(dir, 'data.js'),
  share: path.join(dir, 'share.js'),
  utils: path.join(dir, 'utils.js')
};

function sha256(p) {
  return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
}

function md5(p) {
  return crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex');
}

function size(p) {
  return fs.statSync(p).size;
}

console.log('===== 校园指南构建脚本 =====');

// 1. Check files exist
for (const [k, p] of Object.entries(files)) {
  if (!fs.existsSync(p)) {
    console.error(`❌ ${k} 不存在: ${p}`);
    process.exit(1);
  }
}
console.log('✅ 文件存在');

// 2. Compare HTML files
const idxHash = sha256(files.index);
const guideHash = sha256(files.guide);
if (idxHash !== guideHash) {
  console.error('❌ index.html 与 江西电力...html 不一致');
  console.log('  index:', idxHash.slice(0, 16));
  console.log('  guide:', guideHash.slice(0, 16));
  process.exit(1);
}
console.log('✅ 双 HTML 文件一致');

// 3. Compute data.js version
const dataHash = md5(files.data).slice(0, 8);
console.log('📦 data.js version:', dataHash);

// 4. Compute share.js version
const shareHash = md5(files.share).slice(0, 8);
console.log('📦 share.js version:', shareHash);

// 5. Compute utils.js version
const utilsHash = md5(files.utils).slice(0, 8);
console.log('📦 utils.js version:', utilsHash);

// 6. Update JS versions in HTML
for (const p of [files.index, files.guide]) {
  let html = fs.readFileSync(p, 'utf8');
  const oldData = html.match(/<script src="data\.js(\?v=[^"]*)?"><\/script>/);
  if (oldData) {
    html = html.replace(oldData[0], `<script src="data.js?v=${dataHash}"></script>`);
  } else {
    console.error('❌ 找不到 data.js 引用');
    process.exit(1);
  }
  const oldShare = html.match(/<script src="share\.js(\?v=[^"]*)?"><\/script>/);
  if (oldShare) {
    html = html.replace(oldShare[0], `<script src="share.js?v=${shareHash}"></script>`);
  } else {
    console.error('❌ 找不到 share.js 引用');
    process.exit(1);
  }
  const oldUtils = html.match(/<script src="utils\.js(\?v=[^"]*)?"><\/script>/);
  if (oldUtils) {
    html = html.replace(oldUtils[0], `<script src="utils.js?v=${utilsHash}"></script>`);
  } else {
    console.error('❌ 找不到 utils.js 引用');
    process.exit(1);
  }
  fs.writeFileSync(p, html);
  console.log('✅ 更新', path.basename(p), 'data.js?v=', dataHash, 'share.js?v=', shareHash, 'utils.js?v=', utilsHash);
}

// JS syntax check via check_js.js
console.log('\n🔍 JS 语法检查...');
try {
  const out = execSync(`"${process.execPath}" "${path.join(workspace, 'check_js.js')}" "${files.index}"`, { encoding: 'utf8' });
  console.log(out.trim());
} catch (e) {
  console.error('❌ JS 语法检查失败');
  console.error(e.stdout || e.message);
  process.exit(1);
}

// 7. Write version files
fs.writeFileSync(path.join(dir, 'data-version.txt'), dataHash + '\n');
fs.writeFileSync(path.join(dir, 'share-version.txt'), shareHash + '\n');
fs.writeFileSync(path.join(dir, 'utils-version.txt'), utilsHash + '\n');

// 8. Git status check
console.log('\n🔍 Git 状态检查...');
try {
  const gitStatus = execSync('git status --short', { encoding: 'utf8', cwd: dir }).trim();
  if (gitStatus) {
    console.log('⚠️ 存在未提交变更：');
    console.log(gitStatus);
  } else {
    console.log('✅ 工作目录干净');
  }
} catch (e) {
  console.log('⚠️ 无法获取 git 状态');
}

// 9. Final report
console.log('\n===== 构建报告 =====');
console.log('index.html:', size(files.index), 'bytes');
console.log('guide.html:', size(files.guide), 'bytes');
console.log('data.js   :', size(files.data), 'bytes');
console.log('share.js  :', size(files.share), 'bytes');
console.log('utils.js  :', size(files.utils), 'bytes');
console.log('data hash :', dataHash);
console.log('share hash:', shareHash);
console.log('utils hash:', utilsHash);
console.log('✅ 构建完成，可执行 git 提交');
