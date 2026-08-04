const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process');
const path = require('path');

const dir = 'C:\\Users\\32890\\Desktop\\校园';
const workspace = 'C:\\Users\\32890\\.qclaw\\workspace-agent-8819a796';
const files = {
  index: path.join(dir, 'index.html'),
  guide: path.join(dir, '江西电力职业技术学院校园指南.html'),
  data: path.join(dir, 'data.js')
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

// 4. Update data.js?v= in HTML
for (const p of [files.index, files.guide]) {
  let html = fs.readFileSync(p, 'utf8');
  const old = html.match(/<script src="data\.js(\?v=[^"]*)?"><\/script>/);
  if (old) {
    html = html.replace(old[0], `<script src="data.js?v=${dataHash}"></script>`);
    fs.writeFileSync(p, html);
    console.log('✅ 更新', path.basename(p), 'data.js?v=', dataHash);
  } else {
    console.error('❌ 找不到 data.js 引用');
    process.exit(1);
  }
}

// 5. JS syntax check via check_js.js
console.log('\n🔍 JS 语法检查...');
try {
  const out = execSync(`"${process.execPath}" "${path.join(workspace, 'check_js.js')}" "${files.index}"`, { encoding: 'utf8' });
  console.log(out.trim());
} catch (e) {
  console.error('❌ JS 语法检查失败');
  console.error(e.stdout || e.message);
  process.exit(1);
}

// 6. Write version file
fs.writeFileSync(path.join(dir, 'data-version.txt'), dataHash + '\n');

// 7. Final report
console.log('\n===== 构建报告 =====');
console.log('index.html:', size(files.index), 'bytes');
console.log('guide.html:', size(files.guide), 'bytes');
console.log('data.js   :', size(files.data), 'bytes');
console.log('data hash :', dataHash);
console.log('✅ 构建完成，可执行 git 提交');
