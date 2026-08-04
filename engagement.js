/* 用户粘度系统：签到/积分/等级/收藏/浏览记录/个人中心/每日资讯 */
const CHECKIN_KEY = 'jxdl_checkin';
const FAVORITES_KEY = 'jxdl_favorites';
const HISTORY_KEY = 'jxdl_history';
const MAX_HISTORY = 20;

function onReady(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

// ===== 每日签到系统 =====

function getCheckinData() {
  try {
    return JSON.parse(localStorage.getItem(CHECKIN_KEY) || '{}');
  } catch(e) { return {}; }
}

function saveCheckinData(data) {
  localStorage.setItem(CHECKIN_KEY, JSON.stringify(data));
}

function getToday() {
  return new Date().toDateString();
}

function getWeekDays() {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  const today = new Date().getDay();
  const result = [];
  for (let i = 0; i < 7; i++) {
    const dayIndex = (today - 6 + i + 7) % 7;
    result.push({
      label: days[dayIndex],
      isToday: i === 6,
      date: new Date(Date.now() - (6 - i) * 86400000).toDateString()
    });
  }
  return result;
}

function renderCheckin() {
  const data = getCheckinData();
  const today = getToday();
  const isChecked = data.lastCheckin === today;
  const streak = data.streak || 0;
  const weekDays = getWeekDays();
  
  let html = '<div class="checkin-widget">';
  html += '<div class="checkin-header">';
  html += '<div class="checkin-title">📅 每日签到</div>';
  html += '<div class="checkin-streak">🔥 连续' + streak + '天</div>';
  html += '</div>';
  
  html += '<button class="checkin-btn ' + (isChecked ? 'checked' : '') + '" onclick="doCheckin()">';
  html += isChecked ? '✅ 今日已签到' : '👆 点击签到 +10积分';
  html += '</button>';
  
  html += '<div class="checkin-days">';
  weekDays.forEach(day => {
    const isActive = data.checkinHistory && data.checkinHistory.includes(day.date);
    html += '<div class="checkin-day">';
    html += '<div class="checkin-day-dot ' + (isActive ? 'active' : '') + ' ' + (day.isToday ? 'today' : '') + '">';
    html += isActive ? '✓' : day.label;
    html += '</div>';
    html += '<div class="checkin-day-label">' + (day.isToday ? '今天' : day.label) + '</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '</div>';
  
  return html;
}

function doCheckin() {
  const data = getCheckinData();
  const today = getToday();
  
  if (data.lastCheckin === today) {
    showToast('今天已经签到过了！');
    return;
  }
  
  // 检查是否连续签到
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (data.lastCheckin === yesterday) {
    data.streak = (data.streak || 0) + 1;
  } else {
    data.streak = 1;
  }
  
  data.lastCheckin = today;
  data.checkinHistory = data.checkinHistory || [];
  data.checkinHistory.push(today);
  
  // 积分奖励（连续签到翻倍）
  const points = 10 * Math.min(data.streak, 5);
  data.points = (data.points || 0) + points;
  
  saveCheckinData(data);
  
  // 重新渲染
  const widget = document.querySelector('.checkin-widget');
  if (widget) {
    widget.outerHTML = renderCheckin();
  }
  
  showToast('签到成功！+' + points + '积分 🎉');
  updateUserStats();
}

// 初始化签到组件
onReady(function(){
  const container = document.getElementById('checkinContainer');
  if (container) {
    container.innerHTML = renderCheckin();
  }
});

// ===== 积分+等级系统 =====
const LEVEL_CONFIG = [
  { name: '萌新', min: 0, color: '#10b981', class: 'mengxin' },
  { name: '活跃新生', min: 100, color: '#3b82f6', class: 'xuesheng' },
  { name: '资深学长', min: 300, color: '#8b5cf6', class: 'daren' },
  { name: '校园传说', min: 600, color: '#f59e0b', class: 'legend' }
];

function getUserLevel(points) {
  points = points || 0;
  for (let i = LEVEL_CONFIG.length - 1; i >= 0; i--) {
    if (points >= LEVEL_CONFIG[i].min) {
      return LEVEL_CONFIG[i];
    }
  }
  return LEVEL_CONFIG[0];
}

function getNextLevel(points) {
  points = points || 0;
  for (let i = 0; i < LEVEL_CONFIG.length; i++) {
    if (points < LEVEL_CONFIG[i].min) {
      return LEVEL_CONFIG[i];
    }
  }
  return null;
}

function getLevelProgress(points) {
  const current = getUserLevel(points);
  const next = getNextLevel(points);
  if (!next) return 100;
  
  const range = next.min - current.min;
  const progress = points - current.min;
  return Math.min(100, Math.round((progress / range) * 100));
}

function renderUserStats() {
  const data = getCheckinData();
  const points = data.points || 0;
  const level = getUserLevel(points);
  const nextLevel = getNextLevel(points);
  const progress = getLevelProgress(points);
  
  let html = '<div class="user-stats-bar">';
  html += '<div class="user-avatar">👨‍🎓</div>';
  html += '<div class="user-info">';
  html += '<div class="user-name">小宸学长</div>';
  html += '<div class="user-level ' + level.class + '">';
  html += '<span>' + level.name + '</span>';
  if (nextLevel) {
    html += '<span style="opacity:0.6;">· 距' + nextLevel.name + '还差' + (nextLevel.min - points) + '分</span>';
  }
  html += '</div>';
  html += '<div class="progress-bar">';
  html += '<div class="progress-fill" style="width:' + progress + '%;"></div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="user-points">';
  html += '<div class="points-number">' + points + '</div>';
  html += '<div class="points-label">积分</div>';
  html += '</div>';
  html += '</div>';
  
  return html;
}

function updateUserStats() {
  const container = document.getElementById('userStatsContainer');
  if (container) {
    container.innerHTML = renderUserStats();
  }
}

// 添加积分
function addPoints(amount, reason) {
  const data = getCheckinData();
  data.points = (data.points || 0) + amount;
  saveCheckinData(data);
  updateUserStats();
  showToast('+' + amount + '积分 · ' + reason);
}

// 初始化用户统计
onReady(function(){
  const container = document.getElementById('userStatsContainer');
  if (container) {
    container.innerHTML = renderUserStats();
  }
});

// ===== 收藏系统 =====

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  } catch(e) { return []; }
}

function saveFavorites(favs) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}

function toggleFavorite(id, title) {
  let favs = getFavorites();
  const index = favs.indexOf(id);
  
  if (index > -1) {
    favs.splice(index, 1);
    saveFavorites(favs);
    showToast('已取消收藏');
    return false;
  } else {
    favs.push(id);
    saveFavorites(favs);
    addPoints(5, '收藏内容');
    showToast('已收藏 ✅');
    return true;
  }
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

// ===== 浏览记录 =====

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch(e) { return []; }
}

function addHistory(id, title) {
  let history = getHistory();
  // 移除重复
  history = history.filter(h => h.id !== id);
  // 添加到开头
  history.unshift({ id, title, time: Date.now() });
  // 限制数量
  if (history.length > MAX_HISTORY) {
    history = history.slice(0, MAX_HISTORY);
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// ===== 每日资讯 =====
const DAILY_NEWS = [
  { title: '📢 开学提醒', content: '9月3-4日报到，记得带齐材料！' },
  { title: '🎉 新生福利', content: '关注小宸学长微信，领取新生攻略PDF' },
  { title: '💡 避坑指南', content: '不要买学长学姐推荐的"必备"用品，很多用不上' },
  { title: '🚌 交通攻略', content: '西站最方便，9线直达学校西北门' },
  { title: '🍜 食堂推荐', content: '一食堂二楼拌粉+瓦罐汤，7元吃饱' },
  { title: '📱 校园卡', content: '移动室内信号差，联通更稳定' },
  { title: '🏠 宿舍须知', content: '6人间为主，空调需租赁，澡堂刷卡' },
  { title: '💰 省钱技巧', content: '教材可以找学长学姐买二手，省一半' }
];

function getTodayNews() {
  const day = new Date().getDay();
  return DAILY_NEWS[day % DAILY_NEWS.length];
}

function renderDailyNews() {
  const news = getTodayNews();
  let html = '<div class="daily-news">';
  html += '<div class="daily-news-header">📰 今日校园资讯</div>';
  html += '<div class="daily-news-content">';
  html += '<strong>' + news.title + '</strong><br>';
  html += news.content;
  html += '</div>';
  html += '</div>';
  return html;
}

// ===== 个人中心 =====
function renderProfileEntry() {
  const data = getCheckinData();
  const points = data.points || 0;
  const level = getUserLevel(points);
  
  let html = '<div class="profile-entry" onclick="showProfile()">';
  html += '<div class="profile-avatar">👨‍🎓</div>';
  html += '<div class="profile-info">';
  html += '<div class="profile-name">小宸学长</div>';
  html += '<div class="profile-meta">' + level.name + ' · ' + points + '积分</div>';
  html += '</div>';
  html += '<div class="profile-arrow">›</div>';
  html += '</div>';
  return html;
}

function showProfile() {
  const data = getCheckinData();
  const points = data.points || 0;
  const level = getUserLevel(points);
  const favs = getFavorites();
  const history = getHistory();
  
  let html = '<div style="padding:20px;">';
  html += '<div style="text-align:center;margin-bottom:24px;">';
  html += '<div style="width:80px;height:80px;border-radius:50%;background:var(--primary-gradient);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:40px;">👨‍🎓</div>';
  html += '<div style="font-size:20px;font-weight:700;">小宸学长</div>';
  html += '<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border-radius:20px;background:' + level.color + '15;color:' + level.color + ';font-size:14px;font-weight:600;margin-top:8px;">' + level.name + '</div>';
  html += '</div>';
  
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px;">';
  html += '<div style="text-align:center;padding:16px;background:var(--bg);border-radius:var(--radius);"><div style="font-size:24px;font-weight:700;color:var(--primary);">' + points + '</div><div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">积分</div></div>';
  html += '<div style="text-align:center;padding:16px;background:var(--bg);border-radius:var(--radius);"><div style="font-size:24px;font-weight:700;color:var(--accent-warm);">' + favs.length + '</div><div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">收藏</div></div>';
  html += '<div style="text-align:center;padding:16px;background:var(--bg);border-radius:var(--radius);"><div style="font-size:24px;font-weight:700;color:var(--accent-success);">' + history.length + '</div><div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">浏览</div></div>';
  html += '</div>';
  
  if (history.length > 0) {
    html += '<div style="margin-bottom:16px;"><div style="font-size:16px;font-weight:600;margin-bottom:12px;">最近浏览</div>';
    history.slice(0, 5).forEach(h => {
      html += '<div style="padding:12px;background:var(--bg);border-radius:var(--radius);margin-bottom:8px;font-size:14px;">' + h.title + '</div>';
    });
    html += '</div>';
  }
  
  html += '</div>';
  
  showModal('个人中心', html);
}

// 初始化
onReady(function(){
  // 渲染每日资讯
  const newsContainer = document.getElementById('dailyNewsContainer');
  if (newsContainer) {
    newsContainer.innerHTML = renderDailyNews();
  }
  
  // 渲染个人中心入口
  const profileContainer = document.getElementById('profileContainer');
  if (profileContainer) {
    profileContainer.innerHTML = renderProfileEntry();
  }
});


// 暴露全局调用（内联 onclick 需要）
window.doCheckin = doCheckin;
window.showProfile = showProfile;
window.toggleFavorite = toggleFavorite;
window.isFavorite = isFavorite;
window.addHistory = addHistory;
window.getFavorites = getFavorites;
window.getHistory = getHistory;
