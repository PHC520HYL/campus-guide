const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

// 背景
const grad = ctx.createLinearGradient(0, 0, 1200, 630);
grad.addColorStop(0, '#0B1A3F');
grad.addColorStop(0.5, '#1A439E');
grad.addColorStop(1, '#06B6D4');
ctx.fillStyle = grad;
ctx.fillRect(0, 0, 1200, 630);

// 网格纹理
ctx.strokeStyle = 'rgba(255,255,255,0.05)';
ctx.lineWidth = 1;
for (let x = 0; x < 1200; x += 60) {
  ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 630); ctx.stroke();
}
for (let y = 0; y < 630; y += 60) {
  ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1200, y); ctx.stroke();
}

// 光晕
const r = ctx.createRadialGradient(600, 280, 0, 600, 280, 320);
r.addColorStop(0, 'rgba(59,130,246,0.4)');
r.addColorStop(1, 'rgba(59,130,246,0)');
ctx.fillStyle = r;
ctx.fillRect(0, 0, 1200, 560);

// 装饰圆环
ctx.strokeStyle = 'rgba(255,255,255,0.08)';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(1050, 150, 220, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(150, 520, 160, 0, Math.PI * 2);
ctx.stroke();

// 左上角年份标签
ctx.fillStyle = 'rgba(255,255,255,0.15)';
roundRect2(ctx, 50, 50, 120, 44, 22);
ctx.fill();
ctx.fillStyle = 'rgba(255,255,255,0.9)';
ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('2026', 110, 78);

// 主标题
ctx.fillStyle = '#fff';
ctx.font = 'bold 52px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillText('校园指南', 600, 200);

// 学校名（3D 效果）
ctx.save();
ctx.shadowColor = 'rgba(0,0,0,0.4)';
ctx.shadowBlur = 25;
ctx.shadowOffsetY = 8;
ctx.font = '900 76px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillText('江西电力职业技术学院', 600, 300);
ctx.restore();

// 分隔线
ctx.strokeStyle = 'rgba(255,255,255,0.2)';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(200, 325); ctx.lineTo(1000, 325);
ctx.stroke();

// 副标题
ctx.fillStyle = 'rgba(255,255,255,0.8)';
ctx.font = '28px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillText('场景化时间线引导式 · 从出发到报到 · 校园全攻略', 600, 375);

// 学长信息卡
ctx.fillStyle = 'rgba(255,255,255,0.1)';
ctx.strokeStyle = 'rgba(255,255,255,0.2)';
ctx.lineWidth = 2;
roundRect2(ctx, 100, 430, 400, 150, 20);
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#fff';
ctx.font = 'bold 30px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.textAlign = 'left';
ctx.fillText('👨‍🎓 小宸学长', 135, 475);
ctx.fillStyle = 'rgba(255,255,255,0.7)';
ctx.font = '22px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillText('电院在校生 · 2026新生向导', 135, 510);
ctx.font = '22px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillStyle = '#fff';
ctx.fillText('💬 微信：XMB2D888', 135, 555);
ctx.fillText('🐧 QQ：3289094177', 135, 590);

// 底部标签
ctx.textAlign = 'right';
ctx.fillStyle = 'rgba(255,255,255,0.6)';
ctx.font = '20px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillText('📦 出发前 · 🏁 报到日 · 📚 开学后 · ⚡ 校园日常', 1100, 475);

// 右下角 URL
ctx.fillStyle = 'rgba(255,255,255,0.4)';
ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
ctx.fillText('phc520hyl.github.io/campus-guide/', 1100, 590);

const buf = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, 'og-image.png'), buf);
console.log('og-image.png written:', buf.length, 'bytes');

function roundRect2(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
