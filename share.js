function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

function generateShareCard() {
  var canvas = document.createElement('canvas');
  canvas.width = 750; canvas.height = 1334;
  var ctx = canvas.getContext('2d');
  // 背景
  var grad = ctx.createLinearGradient(0,0,750,1334);
  grad.addColorStop(0,'#0B1A3F'); grad.addColorStop(0.5,'#1A439E'); grad.addColorStop(1,'#06B6D4');
  ctx.fillStyle = grad; ctx.fillRect(0,0,750,1334);
  // 网格
  ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.lineWidth=1;
  for(var i=0;i<750;i+=60){ ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,1334); ctx.stroke(); }
  for(var i=0;i<1334;i+=60){ ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(750,i); ctx.stroke(); }
  // 光晕
  var r1 = ctx.createRadialGradient(375,350,0,375,350,300);
  r1.addColorStop(0,'rgba(59,130,246,0.35)'); r1.addColorStop(1,'rgba(59,130,246,0)');
  ctx.fillStyle=r1; ctx.fillRect(0,0,750,700);
  // 内容
  ctx.fillStyle='#fff'; ctx.textAlign='center';
  ctx.font='700 36px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('2026新生指南',375,180);
  ctx.font='900 64px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.shadowColor='rgba(0,0,0,0.3)'; ctx.shadowBlur=20; ctx.shadowOffsetY=6;
  ctx.fillText('江西电力职业',375,300);
  ctx.fillText('技术学院',375,380);
  ctx.shadowColor='transparent';
  ctx.font='400 26px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle='rgba(255,255,255,0.85)';
  ctx.fillText('场景化时间线 · 从出发到报到 · 校园全攻略',375,460);
  // 学长信息卡
  ctx.fillStyle='rgba(255,255,255,0.12)'; ctx.strokeStyle='rgba(255,255,255,0.2)';
  ctx.lineWidth=2; roundRect(ctx,75,560,600,360,24); ctx.fill(); ctx.stroke();
  ctx.font='700 34px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle='#fff'; ctx.fillText('👨‍🎓 小宸学长',375,630);
  ctx.font='400 24px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle='rgba(255,255,255,0.8)';
  ctx.fillText('电院在校生 · 2026新生向导',375,675);
  ctx.font='600 28px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle='#fff'; ctx.textAlign='left';
  ctx.fillText('💬 微信：XMB2D888',135,760);
  ctx.fillText('🐧 QQ：3289094177',135,810);
  ctx.fillText('🎓 避坑指南 · 有问必答',135,860);
  ctx.fillText('⚡ 带你玩转电院',135,910);
  // 底部
  ctx.textAlign='center'; ctx.font='400 22px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle='rgba(255,255,255,0.6)';
  ctx.fillText('扫码打开完整校园指南',375,1120);
  ctx.fillStyle='#fff'; ctx.font='600 26px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('phc520hyl.github.io/campus-guide/',375,1170);
  ctx.font='400 20px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle='rgba(255,255,255,0.5)';
  ctx.fillText('长按保存图片 · 分享给身边同学',375,1220);
  // 下载
  try {
    var link = document.createElement('a');
    link.download = '电院2026新生指南-小宸学长.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    if (typeof showToast === 'function') showToast('分享卡片已生成');
  } catch(e) { if (typeof showToast === 'function') showToast('生成失败，请截图保存'); }
}

if (typeof window !== 'undefined') {
  window.generateShareCard = generateShareCard;
}
