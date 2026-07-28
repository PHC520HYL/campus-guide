
(function(){
var gridData = {
  xinbi: [
    { id:'baodao', icon:'icon-blue', label:'报到须知', desc:'时间地点与入校流程', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01"/></svg>' },
    { id:'qingdan', icon:'icon-green', label:'必备清单', desc:'开学带齐不慌张', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
    { id:'jiaotong', icon:'icon-orange', label:'到校交通', desc:'火车站/机场全路线', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
    { id:'junxun', icon:'icon-green', label:'军训贴士', desc:'作息防晒与注意事项', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>' },
    { id:'xuefei', icon:'icon-purple', label:'学费标准', desc:'各专业收费明细', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>' },
    { id:'bilei', icon:'icon-red', label:'新生避雷', desc:'防骗防推销指南', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
    { id:'lvtong', icon:'icon-teal', label:'绿色通道', desc:'困难生入学帮扶', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
    { id:'card', icon:'icon-indigo', label:'校园卡', desc:'办理与使用说明', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>' },
    { id:'app', icon:'icon-cyan', label:'常用应用', desc:'入学必备APP入口', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
  ],
  life: [
    { id:'shitang', icon:'icon-orange', label:'食堂指南', desc:'菜品价格与营业时间', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>' },
    { id:'sushe', icon:'icon-blue', label:'宿舍介绍', desc:'房型配置与入住须知', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { id:'kuaidi', icon:'icon-teal', label:'快递收发', desc:'校内外取件地址', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>' },
    { id:'yishi', icon:'icon-red', label:'校医室', desc:'位置与医保报销说明', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' },
    { id:'map', icon:'icon-green', label:'校园地图', desc:'楼栋分布与地标指引', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>' },
    { id:'chaoshi', icon:'icon-indigo', label:'校园超市', desc:'位置与营业时间', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>' },
    { id:'yushi', icon:'icon-cyan', label:'浴室洗衣', desc:'洗浴与洗衣房指引', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>' },
    { id:'yundong', icon:'icon-green', label:'运动场所', desc:'操场篮球场分布', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10"/><path d="M2 12h20"/></svg>' },
    { id:'wanle', icon:'icon-pink', label:'周边玩乐', desc:'校门周边吃喝玩乐', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  ],
  study: [
    { id:'zhuanye', icon:'icon-blue', label:'专业介绍', desc:'5大二级学院专业', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>' },
    { id:'jidian', icon:'icon-purple', label:'绩点学分', desc:'规则与计算方式', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
    { id:'jiangzhu', icon:'icon-orange', label:'奖助学金', desc:'评选条件与流程', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>' },
    { id:'lib', icon:'icon-teal', label:'图书馆', desc:'借阅与自习指南', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="12" y1="6" x2="12" y2="14"/></svg>' },
    { id:'jiaoxue', icon:'icon-indigo', label:'教学楼', desc:'楼栋分布与找教室', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>' },
    { id:'xuanke', icon:'icon-cyan', label:'选课重修', desc:'选课补考与预警', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
    { id:'zhuanben', icon:'icon-green', label:'专升本', desc:'政策与备考建议', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
    { id:'zhengshu', icon:'icon-blue', label:'技能证书', desc:'必考证书指南', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>' },
    { id:'jiaowu', icon:'icon-purple', label:'教务入口', desc:'官方系统跳转', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
  ],
  growth: [
    { id:'xueshenghui', icon:'icon-blue', label:'学生会', desc:'校学生会部门介绍', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>' },
    { id:'shetuan', icon:'icon-green', label:'社团组织', desc:'全校社团名录', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' },
    { id:'dierketang', icon:'icon-orange', label:'第二课堂', desc:'活动与志愿服务', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>' },
    { id:'jingsai', icon:'icon-purple', label:'科研竞赛', desc:'电力类赛事汇总', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>' },
    { id:'shixi', icon:'icon-teal', label:'实习就业', desc:'电网招聘与渠道', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>' },
    { id:'dangtuan', icon:'icon-red', label:'党团组织', desc:'关系转接说明', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 14.5 11 20 11 15.5 14 17.5 19 12 15.5 6.5 19 8.5 14 4 11 9.5 11"/></svg>' },
    { id:'pingyou', icon:'icon-indigo', label:'评优评先', desc:'奖学金与荣誉评定', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>' },
    { id:'qingong', icon:'icon-cyan', label:'勤工助学', desc:'校内岗位介绍', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>' },
    { id:'jineng', icon:'icon-blue', label:'技能提升', desc:'学习资源推荐', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>' },
  ],
  service: [
    { id:'xueshengzheng', icon:'icon-blue', label:'学生证补办', desc:'流程与费用说明', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
    { id:'dianhua', icon:'icon-green', label:'常用电话', desc:'各部门办事号码', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>' },
    { id:'qingjia', icon:'icon-orange', label:'请假流程', desc:'事假病假办理', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
    { id:'yibao', icon:'icon-red', label:'医保报销', desc:'政策与办理方式', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
    { id:'baoxiu', icon:'icon-teal', label:'宿舍报修', desc:'物业维修渠道', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>' },
    { id:'xueji', icon:'icon-purple', label:'学籍异动', desc:'休学转学流程', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>' },
    { id:'caiwu', icon:'icon-indigo', label:'财务缴费', desc:'学费住宿费缴纳', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>' },
    { id:'baowei', icon:'icon-red', label:'保卫处', desc:'门禁与安全事务', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    { id:'zizhu', icon:'icon-teal', label:'学生资助', desc:'助学金与助学贷款', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
  ]
};

var detailContent = {
  kuaidi: "<div class=\"content-card\"><h3>📦 快递收发指南</h3><div class=\"img-placeholder\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"/><path d=\"M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z\"/></svg></div><p style=\"font-size:12px;color:#9CA3AF;text-align:center;\">📷 快递驿站位置示意图</p></div><div class=\"content-card\"><div class=\"info-item\"><span style=\"flex-shrink:0;font-weight:700;\">📍 校内驿站</span><span>10栋宿舍楼下<button class=\"copy-btn\" data-copy=\"江西省南昌市新建区海棠南路268号江西电力职业技术学院\">📋 复制地址</button></span></div><div class=\"info-item\"><span style=\"flex-shrink:0;\">📮 校内地址</span><span style=\"font-size:12px;\">江西省南昌市新建区海棠南路268号江西电力职业技术学院</span></div><div class=\"info-item\"><span style=\"flex-shrink:0;font-weight:700;\">📍 校外驿站</span><span>学校西北门，靠近1-9栋宿舍<button class=\"copy-btn\" data-copy=\"江西省南昌市新建区蛟龙镇瑞香路900号五栋一楼\">📋 复制地址</button></span></div><div class=\"info-item\"><span style=\"flex-shrink:0;\">📮 校外地址</span><span style=\"font-size:12px;\">江西省南昌市新建区蛟龙镇瑞香路900号五栋一楼</span></div></div><div class=\"content-card\"><h3>📱 快递代收代寄</h3><p>校内移动营业厅提供快递代收、代寄服务（营业厅直营），大件行李也可以帮忙收发。</p><p>💬 需要帮忙取快递或寄东西？联系学长微信 <strong>XMB2D888</strong></p></div><div class=\"highlight\">💡 报到期间快递量较大，建议出发前2-3天寄出，标注好宿舍楼号方便取件。</div>",
  xuefei: "<div class=\"content-card\"><h3>💰 学费标准</h3><p><strong>普通电力类专业：</strong>5000元/学年</p><p><strong>中外合作办学专业：</strong>12000元/学年</p><p><strong>住宿费：</strong>800~1000元/学年</p><p><strong>书本费：</strong>按实际教材费用收取（约500~800元/学年）</p><p style=\"color:var(--primary);font-weight:700;\">预计合计：约6300~6800元/学年（学费+住宿费+书本费）</p></div><div class=\"content-card\"><h3>四大专业二级学院收费表（马克思主义学院负责全校思政课，不单独招收专业学生）</h3><table><thead><tr><th>二级学院</th><th>代表专业</th><th>学费(元/年)</th></tr></thead><tbody><tr><td>电力工程学院</td><td>电力系统自动化技术、电气自动化技术等</td><td>5000</td></tr><tr><td>供用电工程学院</td><td>供用电技术、发电厂及电力系统等</td><td>5000</td></tr><tr><td>动力工程学院</td><td>热能动力工程技术、发电运行技术等</td><td>5000</td></tr><tr><td>新能源工程学院</td><td>风力发电工程技术、分布式发电等</td><td>5000</td></tr></tbody></table><p style=\"font-size:11px;color:var(--text-light);margin-top:8px;\">* 中外合作办学专业12000元/学年，具体以录取通知书为准</p></div>",
  sushe: "<div class=\"content-card\"><h3>🏠 宿舍介绍</h3><div class=\"img-placeholder\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/></svg></div><p style=\"font-size:12px;color:#9CA3AF;text-align:center;\">📷 宿舍内部实拍参考</p></div><div class=\"content-card\"><h3>宿舍分配</h3><div class=\"info-item\"><span style=\"font-weight:700;\">👨 男生</span><span>一律6人寝，部分为老宿舍；上床下桌，带衣柜、书桌、椅子</span></div><div class=\"info-item\"><span style=\"font-weight:700;\">👩 女生</span><span>9栋、10栋为4人寝；7栋为6人寝；上床下桌，带衣柜、书桌、椅子</span></div></div><div class=\"content-card\"><h3>配置设施</h3><p>✅ 全天候空调</p><p>✅ 独立卫浴（部分楼栋）</p><p>✅ 上床下桌，带衣柜、书桌、椅子</p><p>✅ 宽带网络覆盖</p><p>✅ 直饮水供应</p></div><div class=\"content-card\"><h3>🌐 宽带上网</h3><p>宿舍宽带需办理校园电话卡后连接校园网使用。校内仅<strong>中国移动营业厅</strong>可办理。联通/电信用户无法连接校园网。</p><p>💬 办宽带咨询：学长微信 <strong>XMB2D888</strong></p></div><div class=\"content-card\"><h3>🚿 热水</h3><p>宿舍热水使用<strong>完美校园</strong>App扫码消费，入学后下载注册绑定即可。</p></div><div class=\"content-card\"><h3>💧 直饮水</h3><p>宿舍楼内配备直饮水机，使用<strong>惠生活</strong>App/小程序扫码接水。</p></div><div class=\"content-card\"><h3>⚡ 电费</h3><p>绑定校园卡（移动卡）后可通过完美校园App充值宿舍电费。</p></div><div class=\"highlight\">💡 新生入住提示：报到当天凭录取通知书到宿舍楼管理处领取钥匙，建议提前准备好床上用品（床尺寸约0.9m×1.9m）</div>",
  shitang: "<div class=\"content-card\"><h3>🍽️ 食堂指南</h3><div class=\"img-placeholder\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M18 8h1a4 4 0 010 8h-1\"/><path d=\"M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z\"/></svg></div><p style=\"font-size:12px;color:#9CA3AF;text-align:center;\">📷 食堂环境实拍</p></div><div class=\"content-card\"><p>学校共有三个食堂，均配有空调、环境整洁卫生：</p></div><div class=\"content-card\"><h3>🍚 第一食堂（基础快餐为主）</h3><p>一荤一素约<strong>9元</strong> | 两荤一素<strong>12-14元</strong></p><p>晚8点后两荤一素约<strong>10元</strong>（特价时段）</p><p>米饭免费续，吃饱为止</p><p>🌟 每天供应<strong>一元特价菜</strong></p></div><div class=\"content-card\"><h3>🍜 第二食堂（风味档口）</h3><div class=\"tag-row\"><span class=\"tag\">南昌拌粉+瓦罐汤</span><span class=\"tag\">江西小炒</span><span class=\"tag\">羊杂面</span><span class=\"tag\">兰州拉面</span><span class=\"tag\">麻辣烫</span><span class=\"tag\">汉堡炸鸡</span></div></div><div class=\"content-card\"><h3>🍲 第三食堂（综合餐厅）</h3><div class=\"tag-row\"><span class=\"tag\">小碗菜</span><span class=\"tag\">煲仔饭</span><span class=\"tag\">铁板饭</span><span class=\"tag\">水饺馄饨</span><span class=\"tag\">各类小吃</span></div></div><div class=\"content-card\"><h3>✨ 亮点</h3><p>🎁 <strong>节日福利</strong>：端午/中秋/冬至赠送水果/汤圆/水饺</p><p>❄️ <strong>全食堂空调开放</strong>，整洁卫生</p><p>⏰ 营业时间：早餐约6:30-9:00 | 午餐约11:00-13:00 | 晚餐约17:00-19:30</p><p>📍 三个食堂集中在校园中部，靠近宿舍区</p><p>💰 月均伙食费参考：<strong>600-900元</strong>（正常吃）</p></div>",
  jiaotong: "<div class=\"content-card\"><h3>🚗 到校交通指南</h3><div class=\"img-placeholder\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"/><polygon points=\"16 8 20 8 23 11 23 16 16 16\"/><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"/><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"/></svg></div><p style=\"font-size:12px;color:#9CA3AF;text-align:center;\">📷 学校校门/交通示意图</p></div><div class=\"content-card\"><h3>🚂 三大火车站路线</h3><div class=\"info-item\"><span style=\"font-weight:700;\">① 南昌站</span><span>高铁巴士9线直达西北门，5元约45分钟<br><span style=\"color:var(--text-light);font-size:12px;\">或地铁换乘229路到达</span></span></div><div class=\"info-item\"><span style=\"font-weight:700;\">② 南昌西站 ⭐</span><span>北广场高铁巴士9线直达西北门，5元约30分钟<br><span style=\"color:var(--green);font-size:12px;\">最方便的到达方式！</span></span></div><div class=\"info-item\"><span style=\"font-weight:700;\">③ 南昌东站</span><span>地铁2号线转1号线，再转229路北门下车<br><span style=\"color:var(--text-light);font-size:12px;\">全程约1小时</span></span></div></div><div class=\"content-card\"><h3>✈️ 昌北机场</h3><p>机场公交1线转214路，全程约1.2小时</p></div><div class=\"highlight\">🎉 开学报到期间（以录取通知书通知日期为准），南昌站、南昌西站均设有学校免费迎新大巴，有志愿者引导，建议优先乘坐！</div>",
  bilei: "<div class=\"content-card\"><h3>⚠️ 新生避雷指南</h3></div><div class=\"content-card\"><h3>🚫 三大高频骗局</h3><p style=\"font-weight:700;color:var(--red);font-size:16px;\">① 上门推销电话卡（最常见！）</p><p style=\"margin-bottom:12px;\">开学期间会有大量人员上门推销手机卡，谎称\"学校强制办理\"\"不办这个卡用不了校园网\"\"现在不办以后就没优惠了\"。</p><p style=\"margin-bottom:12px;\"><strong>真相：</strong>校园网和手机卡不是绑定的，手机卡完全可以到校内官方营业厅自愿办理。校内<strong>只有中国移动营业厅</strong>（院内商场、官方直营），联通和电信在校内无营业厅，出了问题只能远程联系推销的\"学长学姐\"，学校无法提供帮助。</p><p style=\"margin-bottom:16px;\">✅ <strong>建议：</strong>不要在上门推销时匆忙办理。如果想办移动卡，联系学长微信 <strong style=\"color:var(--primary);\">XMB2D888</strong> 帮你代跑校内移动营业厅办理，套餐透明、有问题直接到店解决。也可以自己到校内移动营业厅慢慢对比选择，完全自愿！</p><p style=\"font-weight:700;color:var(--red);font-size:16px;\">② 专升本/考国网培训推销</p><p style=\"margin-bottom:12px;\">开学后会有各种培训机构的人混进宿舍或新生群，打着\"学长学姐推荐\"\"内部资料\"\"不报班考不上\"的旗号推销培训课程，价格从几千到上万不等。</p><p style=\"margin-bottom:12px;\"><strong>真相：</strong>专升本靠自学+正规网课完全够用，大一时完全不用着急报班。考国网需要的是大一大二打好专业基础，不是靠某个\"保过班\"。</p><p style=\"margin-bottom:16px;\">💬 如果到了大二大三确实想报班，可以联系学长微信 <strong style=\"color:var(--primary);\">XMB2D888</strong>，有各机构的实地照片和详细资料对比，能帮你争取最大优惠，比你自己去问省一截。</p><p style=\"font-weight:700;color:var(--red);font-size:16px;\">③ 冒充学长推销驾校/兼职</p><p style=\"margin-bottom:12px;\">宿舍敲门说\"学长推荐\"\"最低价\"\"最后几个名额\"。驾校价格和质量参差不齐，\"最低价\"通常意味着练车时间少、隐形收费多。</p><p style=\"margin-bottom:12px;\"><strong>真相：</strong>正规驾校不会上门推销。报名前自己实地考察训练场，问清楚总费用（含考试费、补考费等）。</p></div><div class=\"content-card\"><h3>🛡️ 通用原则</h3><p>🔴 陌生人上门<strong>一律不信</strong></p><p>🔴 正规业务不会进宿舍推销</p><p>🔴 所有让你\"现在不办就亏了\"的，都是在制造焦虑</p><p>🟢 有需求找官方渠道或认识的学长学姐</p></div><div class=\"highlight\">💬 拿不准的事，加学长微信 <strong>XMB2D888</strong> 或 QQ <strong>3289094177</strong>，先问一嘴不亏。</div>",
  xueshenghui: "<div class=\"content-card\"><h3>🏛️ 校学生会 · 8大部门</h3></div><div class=\"content-card\"><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">办公室</span><span style=\"color:var(--text-secondary);\">统筹协调学生会日常事务，档案管理与会议组织</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">学习部</span><span style=\"color:var(--text-secondary);\">组织学术活动、学习经验分享、学风建设</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">宣传部</span><span style=\"color:var(--text-secondary);\">负责校园活动宣传、新媒体运营与视觉设计</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">文艺部</span><span style=\"color:var(--text-secondary);\">策划校园文艺活动、晚会演出、才艺比赛</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">体育部</span><span style=\"color:var(--text-secondary);\">组织体育赛事、运动会、阳光体育活动</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">纪检部</span><span style=\"color:var(--text-secondary);\">负责校园纪律检查、晚自习巡查、文明督导</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">权益生活部</span><span style=\"color:var(--text-secondary);\">维护学生权益、收集反馈生活问题、食堂监督</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:90px;flex-shrink:0;\">社会实践部</span><span style=\"color:var(--text-secondary);\">组织志愿服务、社会实践、勤工助学对接</span></div></div><div class=\"highlight\">💡 军训期间各部门会在操场设摊招新，建议先了解再选择1-2个感兴趣的，不要贪多。</div>",
  shetuan: "<div class=\"content-card\"><h3>🎭 全校社团名录</h3></div><div class=\"content-card\"><div class=\"tag-row\"><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">足球协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">主持朗诵社</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">羽毛球协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">音乐社</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">星原文学院</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">舞蹈社</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">礼仪模特社</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">书画协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">棋类协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">乒乓球协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">篮球协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">健美操协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">广播站</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">英语协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">电子协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">电力技术协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">裁判协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">数学建模协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">青年志愿者协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">青年马克思主义研修班</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">绿源协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">就业协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">计算机协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">动漫社</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">武术协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">摄影协会</span><span class=\"tag\" style=\"font-size:13px;padding:6px 12px;\">中长跑协会</span></div></div><div class=\"highlight\">💡 共27个社团，开学后会在操场集中招新（百团大战），可以现场了解报名。</div>",
  yishi: "<div class=\"content-card\"><h3>🏥 校医室</h3><p><strong>📍 位置：</strong>校园东侧区域</p><div class=\"img-placeholder\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2\"/></svg></div><p style=\"font-size:12px;color:#9CA3AF;text-align:center;\">📷 校园地图中校医室位置标注</p><p>⏰ 日常门诊覆盖常见病诊治</p><p>🏥 重大疾病建议前往附近大型医院</p><div class=\"highlight\">💡 期末期间可用医保报销部分费用，就诊时携带学生证和医保卡即可。</div></div>",
  xueshengzheng: "<div class=\"content-card\"><h3>📇 学生证补办流程</h3></div><div class=\"content-card\"><ol class=\"step-list\"><li><strong>领表填表：</strong>找辅导员领取补办申请表，填写个人信息，辅导员签字 → 学院办公室盖公章</li><li><strong>提交审核：</strong>携带材料前往行政楼学工处学籍管理窗口提交审核</li><li><strong>缴费领证：</strong>工本费<strong>5元</strong>；火车优惠磁条<strong>10元</strong>（仅丢失时需补办）。每月集中制证，<strong>7-15个工作日</strong>领证</li></ol></div><div class=\"highlight\">💡 学生证请妥善保管，火车优惠磁条每年只能充磁4次。</div>",
  dianhua: "<div class=\"content-card\"><h3>📞 常用电话</h3></div><div class=\"content-card\"><h3>行政招生类</h3><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">招生就业处</span><span>0791-83899638</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">学院总机</span><span>0791-83880170</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">学生工作处</span><span>0791-83895221</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">保卫处</span><span>0791-83895162</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">后勤服务中心</span><span>0791-83831083</span></div></div><div class=\"content-card\"><h3>二级学院</h3><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">电力工程学院</span><span>0791-83972565</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">供用电工程学院</span><span>0791-83972160</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">动力工程学院</span><span>0791-83880042</span></div><div class=\"info-item\"><span style=\"font-weight:700;width:110px;flex-shrink:0;\">信息工程学院</span><span>0791-83880045</span></div></div><div class=\"content-card\"><p><strong>📍 校园地址：</strong>南昌市经开区海棠南路268号</p></div>",
  map: "<div class=\"content-card\"><h3>🗺️ 校园地图</h3><div class=\"map-container\" style=\"padding:20px;min-height:300px;display:flex;align-items:center;justify-content:center;flex-direction:column;\"><svg viewBox=\"0 0 400 320\" style=\"width:100%;max-width:380px;\"><rect width=\"400\" height=\"320\" fill=\"#E8F0FF\" rx=\"8\"/><rect x=\"80\" y=\"10\" width=\"240\" height=\"8\" fill=\"#165DFF\" rx=\"2\"/><rect x=\"80\" y=\"300\" width=\"240\" height=\"8\" fill=\"#165DFF\" rx=\"2\"/><rect x=\"10\" y=\"60\" width=\"8\" height=\"200\" fill=\"#165DFF\" rx=\"2\"/><rect x=\"380\" y=\"60\" width=\"8\" height=\"200\" fill=\"#165DFF\" rx=\"2\"/><rect x=\"30\" y=\"30\" width=\"340\" height=\"30\" fill=\"#fff\" stroke=\"#165DFF\" stroke-width=\"1.5\" rx=\"4\"/><text x=\"200\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" fill=\"#165DFF\" font-weight=\"bold\">江西电力职业技术学院 · 昌北校区平面图</text><rect x=\"170\" y=\"65\" width=\"60\" height=\"16\" fill=\"#27AE60\" rx=\"3\"/><text x=\"200\" y=\"77\" text-anchor=\"middle\" font-size=\"8\" fill=\"#fff\" font-weight=\"bold\">西北门(主校门)</text><rect x=\"20\" y=\"90\" width=\"85\" height=\"18\" fill=\"#FFF3E0\" stroke=\"#F57C00\" stroke-width=\"1\" rx=\"3\"/><text x=\"62\" y=\"103\" text-anchor=\"middle\" font-size=\"8\" fill=\"#F57C00\">1-6栋宿舍(男)</text><rect x=\"20\" y=\"112\" width=\"85\" height=\"18\" fill=\"#FFF3E0\" stroke=\"#F57C00\" stroke-width=\"1\" rx=\"3\"/><text x=\"62\" y=\"125\" text-anchor=\"middle\" font-size=\"8\" fill=\"#F57C00\">7-9栋宿舍</text><rect x=\"20\" y=\"134\" width=\"85\" height=\"18\" fill=\"#FFF3E0\" stroke=\"#F57C00\" stroke-width=\"1\" rx=\"3\"/><text x=\"62\" y=\"147\" text-anchor=\"middle\" font-size=\"8\" fill=\"#F57C00\">10-11栋宿舍(女)</text><rect x=\"120\" y=\"90\" width=\"120\" height=\"22\" fill=\"#E8F0FF\" stroke=\"#165DFF\" stroke-width=\"1\" rx=\"3\"/><text x=\"180\" y=\"105\" text-anchor=\"middle\" font-size=\"8\" fill=\"#165DFF\">1-4号教学楼</text><rect x=\"120\" y=\"116\" width=\"120\" height=\"22\" fill=\"#E8F0FF\" stroke=\"#165DFF\" stroke-width=\"1\" rx=\"3\"/><text x=\"180\" y=\"131\" text-anchor=\"middle\" font-size=\"8\" fill=\"#165DFF\">5-6号教学楼(实训)</text><rect x=\"255\" y=\"90\" width=\"120\" height=\"30\" fill=\"#F3E8FF\" stroke=\"#7C3AED\" stroke-width=\"1\" rx=\"3\"/><text x=\"315\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"#7C3AED\" font-weight=\"bold\">📚 图书馆</text><rect x=\"120\" y=\"148\" width=\"80\" height=\"20\" fill=\"#FFF3E0\" stroke=\"#F57C00\" stroke-width=\"1\" rx=\"3\"/><text x=\"160\" y=\"162\" text-anchor=\"middle\" font-size=\"8\" fill=\"#F57C00\">🍽 食堂</text><rect x=\"210\" y=\"148\" width=\"80\" height=\"20\" fill=\"#E8F0FF\" stroke=\"#165DFF\" stroke-width=\"1\" rx=\"3\"/><text x=\"250\" y=\"162\" text-anchor=\"middle\" font-size=\"8\" fill=\"#165DFF\">🏢 行政楼</text><rect x=\"300\" y=\"148\" width=\"80\" height=\"20\" fill=\"#E6F7EC\" stroke=\"#27AE60\" stroke-width=\"1\" rx=\"3\"/><text x=\"340\" y=\"162\" text-anchor=\"middle\" font-size=\"8\" fill=\"#27AE60\">🏟 操场</text><rect x=\"120\" y=\"178\" width=\"60\" height=\"16\" fill=\"#FDE8E8\" stroke=\"#E74C3C\" stroke-width=\"1\" rx=\"3\"/><text x=\"150\" y=\"190\" text-anchor=\"middle\" font-size=\"7\" fill=\"#E74C3C\">🏥 校医务室</text><rect x=\"195\" y=\"178\" width=\"60\" height=\"16\" fill=\"#E0F7FA\" stroke=\"#00897B\" stroke-width=\"1\" rx=\"3\"/><text x=\"225\" y=\"190\" text-anchor=\"middle\" font-size=\"7\" fill=\"#00897B\">📦 快递驿站</text><rect x=\"120\" y=\"210\" width=\"260\" height=\"40\" fill=\"#E6F7EC\" rx=\"4\" stroke=\"#27AE60\" stroke-width=\"1\"/><text x=\"250\" y=\"235\" text-anchor=\"middle\" font-size=\"10\" fill=\"#27AE60\">🌳 校园绿化区 / 中心广场</text><rect x=\"170\" y=\"260\" width=\"60\" height=\"16\" fill=\"#27AE60\" rx=\"3\"/><text x=\"200\" y=\"272\" text-anchor=\"middle\" font-size=\"8\" fill=\"#fff\" font-weight=\"bold\">西南门</text><line x1=\"100\" y1=\"82\" x2=\"400\" y2=\"82\" stroke=\"#165DFF\" stroke-width=\"1\" stroke-dasharray=\"4,2\"/><line x1=\"100\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#165DFF\" stroke-width=\"1\" stroke-dasharray=\"4,2\"/></svg><p style=\"text-align:center;font-size:11px;color:#9CA3AF;margin-top:8px;\">⚠ 示意图，具体楼栋位置以开学实际指引为准</p></div></div><div class=\"content-card\"><h3>主要地标速查</h3><div class=\"tag-row\"><span class=\"tag\">1-6栋 男生宿舍</span><span class=\"tag\">7-9栋 宿舍</span><span class=\"tag\">10-11栋 女生宿舍</span><span class=\"tag\">1-4号教学楼</span><span class=\"tag\">5-6号教学楼</span><span class=\"tag\">图书馆</span><span class=\"tag\">食堂</span><span class=\"tag\">行政楼</span><span class=\"tag\">操场</span><span class=\"tag\">校医务室</span><span class=\"tag\">快递驿站</span><span class=\"tag\">西北门</span><span class=\"tag\">西南门</span></div></div>",
  baodao: "<div class=\"content-card\"><h3>📋 报到须知</h3><p>📅 <strong>报到时间：</strong>以录取通知书为准（一般为9月上旬）</p><p>📍 <strong>报到地点：</strong>南昌市昌北经开区海棠南路268号（昌北校区）</p><p>📝 <strong>报到流程：</strong>校门身份核验 → 各学院迎新点报到 → 宿舍办理入住 → 领取军训服装</p></div><div class=\"content-card\"><h3>📄 报到必需材料</h3><div class=\"checklist\"><div class=\"check-item\"><span class=\"check-icon\">☑</span><span><strong>录取通知书</strong>（原件，报到现场核验）</span></div><div class=\"check-item\"><span class=\"check-icon\">☑</span><span><strong>身份证原件 + 复印件 ×5份</strong>（正反面复印在同一张A4纸上）</span></div><div class=\"check-item\"><span class=\"check-icon\">☑</span><span><strong>高中档案</strong>（密封完好，切勿自行拆封）</span></div><div class=\"check-item\"><span class=\"check-icon\">☑</span><span><strong>团员/党员关系转接材料</strong>（团员证、入团申请书、组织关系介绍信）</span></div><div class=\"check-item\"><span class=\"check-icon\">☑</span><span><strong>一寸免冠照片 ×10张</strong>（蓝底或红底均可，建议保留电子版）</span></div><div class=\"check-item\"><span class=\"check-icon\">☑</span><span><strong>银行卡</strong>（可自己办理，进校后学校会统一组织办理发放，用于奖助学金发放和校园卡绑定）</span></div></div></div><div class=\"highlight\">💡 报到当天南昌站和南昌西站有免费迎新大巴，建议优先乘坐。自驾可导航至「江西电力职业技术学院昌北校区西北门」。</div>",
  qingdan: "<div class=\"content-card\"><h3>🎒 新生必备清单</h3></div><div class=\"content-card\"><h3>📋 证件类（随身携带，切勿托运）</h3><p>录取通知书、身份证原件+复印件×5份、高中档案（密封完好）、团员/党员关系转接材料、一寸免冠照片×10张（蓝底或红底，保留电子版）、银行卡</p></div><div class=\"content-card\"><h3>🛏️ 床上用品（可提前寄到学校）</h3><p>床垫(0.9m×1.9m)、被子(冬被+夏被)、枕头、床单被套三件套×2套、蚊帐/床帘</p><p style=\"color:var(--primary);font-size:13px;margin-top:6px;\">💬 床上用品不知道怎么选？加学长微信 <strong>XMB2D888</strong> 或 QQ <strong>3289094177</strong>，帮你一站式配齐送到宿舍</p></div><div class=\"content-card\"><h3>🧴 生活用品</h3><p>洗漱用品（牙刷、牙膏、毛巾、洗发水、沐浴露）、衣架×10、拖鞋、水杯、雨伞、充电器、排插（线长1.5m以上）、小台灯、收纳盒</p><p style=\"color:var(--primary);font-size:13px;margin-top:6px;\">💬 生活用品懒得带？联系学长微信 <strong>XMB2D888</strong>，帮你提前配好</p></div><div class=\"content-card\"><h3>💊 医疗用品</h3><p>感冒药、退烧药、创可贴、肠胃药、防蚊液（南昌夏天蚊子多）、风油精、棉签碘伏</p></div><div class=\"content-card\"><h3>🪖 军训必备</h3><p>SPF50+防晒霜、大容量水杯(1L以上)、软鞋垫/卫生巾（垫军鞋用）、润喉糖、小风扇</p><p style=\"color:var(--primary);font-size:13px;margin-top:6px;\">💬 军训装备一站式配齐？加学长微信 <strong>XMB2D888</strong></p></div><div class=\"highlight\">💡 大件物品（被子、床垫等）可以提前2-3天寄到学校快递驿站，轻装报到更省力。</div>",
  junxun: "<div class=\"content-card\"><h3>🪖 军训贴士</h3><p>⏰ <strong>时间：</strong>开学报到后即开始，为期约两周</p><p>☀️ <strong>防晒：</strong>南昌9月太阳较烈，务必准备SPF50+防晒霜，休息时间及时补涂</p><p>👟 <strong>鞋子：</strong>发放的军训鞋底较硬，建议备软鞋垫或卫生巾垫底</p><p>💧 <strong>饮水：</strong>带大容量水杯（1L以上），训练间隙及时补水</p><p>😷 <strong>身体不适：</strong>及时报告教官，不要硬撑。有医院证明的特殊情况可申请观训</p><p>🍬 <strong>低血糖：</strong>口袋备几颗糖或巧克力，早上一定吃早饭</p><p style=\"color:var(--red);font-weight:600;margin-top:12px;\">⚠️ 免训/请假：如因身体原因（心脏病、哮喘、骨折等）需免训或请假，请提前联系辅导员和带训教官，提供医院证明即可办理观训手续。不要硬撑！</p></div><div class=\"highlight\">💡 军训是大学第一课，也是交朋友的好机会。别太紧张，大部分同学都能坚持下来。</div>",
  lvtong: "<div class=\"content-card\"><h3>🟢 绿色通道</h3><p>家庭经济困难的新生可通过<strong>绿色通道</strong>先行办理入学手续，暂缓缴纳学费。<span style=\"color:var(--green);font-size:12px;\">（学校官方已明确开通）</span></p><p><strong>申请条件：</strong>建档立卡家庭、低保家庭、残疾学生、孤儿、遭受重大自然灾害家庭等</p><p><strong>办理流程：</strong>报到当天到各学院迎新点 → 出示相关证明材料 → 填写绿色通道申请表 → 完成入学注册</p><p><strong>后续资助：</strong>入学后还可申请国家助学金（平均3300元/年）、国家助学贷款（最高12000元/年）等</p><p>💡 建议在入学前到生源地教育行政管理部门下属的学生资助管理中心申请办理生源地信用助学贷款。</p><div class=\"highlight\">💡 不要因为经济原因放弃入学。学校有多渠道资助体系，入学后也可申请勤工助学岗位。</div></div>",
  card: "<div class=\"content-card\"><h3>💳 校园卡 + 手机卡</h3></div><div class=\"content-card\"><h3>💳 校园卡（一卡通）</h3><p>入学后学校统一采集信息发放，主要功能：</p><p>🍽️ <strong>食堂消费</strong>（刷卡支付）</p><p>🏫 <strong>图书馆借阅</strong>（学校统一录取，无需额外操作）</p><p>🚪 <strong>人脸识别门禁</strong>（学校统一录取信息）</p><p>📇 <strong>校内身份识别</strong></p><p style=\"margin-top:8px;\">充值：校内充值点或<strong>完美校园</strong>App线上充值</p></div><div class=\"content-card\"><h3>📱 绑定移动卡后解锁的功能</h3><p>💧 交水费</p><p>🌐 连校园网（宿舍宽带上网）</p><p>⚡ 充宿舍电费</p><p style=\"color:var(--red);font-size:12px;margin-top:6px;\">⚠️ 注意：图书馆借阅和人脸识别门禁由学校统一采集信息录取，不需要绑定任何手机卡！</p></div><div class=\"content-card\"><h3>📱 手机卡</h3><div class=\"info-item\"><span style=\"font-weight:700;color:var(--primary);\">🏪 校内唯一运营商</span><span style=\"font-weight:700;color:var(--red);\">中国移动</span></div><p style=\"margin-top:8px;\">学校校园内<strong>只有中国移动营业厅</strong>（位于院内商场，官方直营），联通和电信在校内无营业厅。</p><p style=\"margin-top:8px;\">办理建议：开学报到后到校内移动营业厅<strong>自愿办理</strong>，不要在上门推销时匆忙决定。</p><p style=\"color:var(--primary);margin-top:8px;\">💬 想提前了解套餐或预办？联系学长微信 <strong>XMB2D888</strong></p></div>",
  app: "<div class=\"content-card\"><h3>📱 常用应用</h3></div><div class=\"content-card\"><h3>📖 学习类</h3><p><strong>学习通</strong>——网课和课程学习必备，开学前提前下载注册</p></div><div class=\"content-card\"><h3>🏠 生活类</h3><p><strong>完美校园</strong>——校园卡充值、热水扫码、宿舍电费充值</p><p><strong>惠生活</strong>——饮水机扫码接水</p></div><div class=\"content-card\"><h3>🏫 校内系统</h3><p>🔗 学校官网：<span style=\"color:var(--primary);\">www.jxdlzy.com</span></p><p>📋 教务系统：选课、查成绩、查课表</p><p>💬 <strong>企业微信</strong>：校内通知、班群沟通</p></div><div class=\"content-card\"><h3>👥 社交类</h3><p>各二级学院新生QQ群后续会由辅导员创建并通知，届时以录取通知书或辅导员通知为准。</p><p style=\"color:var(--red);font-weight:600;margin-top:8px;\">⚠️ 注意：在官方群未建立之前，不要加入来路不明的所谓\"XX学院新生群\"，谨防推销号和广告群！</p></div><div class=\"highlight\">💡 学习通到校前先下载注册好。完美校园和惠生活到校后再下载即可。</div>",
  chaoshi: "<div class=\"content-card\"><h3>🏪 校园超市</h3><p>📍 校内设有超市，位于食堂附近</p><p>🛒 日常用品、零食饮料、学习文具一应俱全</p><p>⏰ 营业时间覆盖早中晚，方便随时购买</p></div>",
  yushi: "<div class=\"content-card\"><h3>🚿 浴室与洗衣房</h3><p>🚿 <strong>公共浴室：</strong>部分宿舍楼配有楼层公共浴室，使用热水卡淋浴</p><p>👕 <strong>洗衣房：</strong>宿舍楼内配有自助洗衣机，扫码支付即可使用</p><p>💧 宿舍楼直饮水机使用<strong>惠生活</strong>App/小程序扫码接水</p><p>💡 建议准备洗澡篮、拖鞋等个人洗浴用品</p></div>",
  yundong: "<div class=\"content-card\"><h3>⚽ 运动场所</h3><p>🏟 <strong>田径场：</strong>标准400米塑胶跑道，配有足球场</p><p>🏀 <strong>篮球场：</strong>多个室外篮球场地，全天免费使用</p><p>🏸 <strong>其他：</strong>羽毛球场、乒乓球台等散布校园各处</p><p>⏰ 所有户外运动场所全天开放</p></div>",
  wanle: "<div class=\"content-card\"><h3>🎉 周边玩乐</h3><p>学校位于昌北经开区，周边有商业街区和小吃街</p><p>🚇 乘坐地铁可快捷到达南昌市中心（八一广场、滕王阁、秋水广场等）</p><p>🍢 校门口小吃街：南昌拌粉、烧烤、奶茶等应有尽有</p><p>🛍 附近商圈：经开区万达广场（公交约15分钟）</p><p>🌉 周末推荐：滕王阁夜游、南昌之星摩天轮、八一起义纪念馆</p></div>",
  zhuanye: "<div class=\"content-card\"><h3>📖 5大二级学院专业一览</h3></div><div class=\"content-card\"><h3>电力工程学院</h3><div class=\"tag-row\"><span class=\"tag\">电力系统自动化技术</span><span class=\"tag\">电气自动化技术</span><span class=\"tag\">电力系统继电保护技术</span><span class=\"tag\">分布式发电与智能微电网技术</span><span class=\"tag\">城市轨道交通供配电技术</span></div></div><div class=\"content-card\"><h3>供用电工程学院</h3><div class=\"tag-row\"><span class=\"tag\">供用电技术</span><span class=\"tag\">发电厂及电力系统</span><span class=\"tag\">工程造价</span><span class=\"tag\">无人机应用技术</span><span class=\"tag\">输配电工程技术</span></div></div><div class=\"content-card\"><h3>动力工程学院</h3><div class=\"tag-row\"><span class=\"tag\">热能动力工程技术</span><span class=\"tag\">发电运行技术</span><span class=\"tag\">热工自动化技术</span><span class=\"tag\">电厂化学与环保技术</span><span class=\"tag\">水电站设备安装与管理</span><span class=\"tag\">机电一体化技术</span><span class=\"tag\">工业节能技术</span><span class=\"tag\">风力发电工程技术</span></div></div><div class=\"content-card\"><h3>新能源工程学院</h3><div class=\"tag-row\"><span class=\"tag\">风力发电工程技术</span><span class=\"tag\">分布式发电</span></div></div><div class=\"content-card\"><h3>马克思主义学院</h3><p style=\"color:var(--text-secondary);\">负责全校思想政治理论课教学</p></div>",
  jidian: "<div class=\"content-card\"><h3>📊 绩点学分</h3><p><strong>课程成绩：</strong>一般采用百分制，60分及格。绩点按成绩分段换算：90-100对应4.0，80-89对应3.0，以此类推</p><p><strong>学分修读：</strong>每学期修读学分有上限和下限要求，具体以各专业培养方案为准</p><p><strong>毕业要求：</strong>修满培养方案规定的最低学分（专业课+公共课+选修课+实践环节）方可毕业</p><p>⚠ <strong>挂科处理：</strong>不及格课程需参加补考，补考不过则需重修。挂科过多会触发学业预警</p><div class=\"highlight\">💡 大一上学期是最容易挂科的学期（很多人还没从高中模式切换过来），前几周就要进入学习状态。</div></div>",  jiangzhu: "<div class=\"content-card\"><h3>🏆 奖助学金</h3><p><strong>国家奖学金：</strong>8000元/年（成绩+综合表现择优）</p><p><strong>国家励志奖学金：</strong>5000元/年（品学兼优+家庭经济困难）</p><p><strong>国家助学金：</strong>平均3300元/年（家庭经济困难学生）</p><p><strong>学院奖学金：</strong>一等、二等、三等奖学金，按学年综合测评排名评选</p><p>📝 评选一般在大二开始，大一学年成绩和综合表现是评选依据</p></div>",
  lib: "<div class=\"content-card\"><h3>📚 图书馆</h3><p>📖 馆藏丰富，涵盖电力、工程、信息技术、人文社科等多领域</p><p>🪑 设有自习座位，<strong>直接进馆即可（不强制刷校园卡）</strong></p><p>💻 有电子阅览室和无线网络覆盖</p><p>⏰ 开放时间覆盖全天（具体时间以入馆通知为准）</p><p>📚 借阅方式：</p><ul style=\"margin:0 0 0 16px;color:#374151;font-size:14px;line-height:1.8;\"><li>使用校园内<strong>自助借还书机器</strong>（最方便，全程自助）</li><li>机器用不了的，可以<strong>联系图书馆工作人员</strong>，他们在电脑上帮你借/还</li><li>借阅册数与时间限制以馆内公告为准</li></ul></div>",
  jiaoxue: "<div class=\"content-card\"><h3>🏫 教学楼分布</h3><p>1-4号教学楼：主要理论课程教学区</p><p>5-6号教学楼：实训与实验课程区</p><p>💡 每个教室门口贴有课程表，找不到教室时可以查看</p><p>📱 建议保存课表截图或设置手机提醒，前几周容易走错教室</p></div>",
  xuanke: "<div class=\"content-card\"><h3>📝 选课与重修</h3><p><strong>选课：</strong>每学期末开放下一学期选课，通过教务系统操作。部分热门选修课名额有限，建议第一时间抢</p><p><strong>补考：</strong>期末考试不及格可在下学期初参加补考，补考通过按60分计</p><p><strong>重修：</strong>补考仍未通过则需重修该课程，跟随下一年级重新上课和考试</p><p>⚠ <strong>学业预警：</strong>累计挂科学分达到一定数量会收到学业预警，严重者可能面临留级或退学</p></div>",
  zhuanben: "<div class=\"content-card\"><h3>📈 专升本</h3><p><strong>专升本考试：</strong>大三下学期参加江西省专升本统一考试</p><p><strong>考试科目：</strong>公共基础课+专业基础课</p><p><strong>可报院校：</strong>江西省内本科院校的对口专业</p><p>💡 建议大一就开始关注目标院校的招生简章和考试大纲。大一大二打好专业基础比大三突击更有效。</p><p>📝 学校也有专升本辅导资源，可咨询辅导员或教务处</p></div>",
  zhengshu: "<div class=\"content-card\"><h3>📜 必考证书指南</h3><p>⚡ <strong>电工证（特种作业操作证）：</strong>电力类学生就业必备，学校统一组织培训考试</p><p>💻 <strong>计算机等级证书：</strong>一级或二级，建议大一大二考完</p><p>🗣 <strong>英语等级证书：</strong>英语AB级或四六级，对专升本和就业有帮助</p><p>📐 <strong>CAD/CAM证书：</strong>工科类专业推荐</p><p>🔧 <strong>相关专业技能证书：</strong>根据不同专业方向选择</p></div>",
  jiaowu: "<div class=\"content-card\"><h3>💻 教务入口</h3><p>🔗 <strong>学校官网：</strong>www.jxdlzy.com</p><p>📋 教务系统可在线进行：选课、查课表、查成绩、考试安排、学籍查询等</p><p>🔑 账号为学号，初始密码入学后由教务处统一告知</p><p>💡 建议收藏学校官网和教务系统网址</p></div>",
  dierketang: "<div class=\"content-card\"><h3>🎯 第二课堂</h3><p><strong>第二课堂学分：</strong>在校期间需修满一定数量的第二课堂学分方可毕业</p><p><strong>获取方式：</strong>参加社团活动、志愿服务、讲座、社会实践、竞赛等</p><p>💡 大一多参加活动，越往后越没时间。志愿服务是最稳定好拿的学分来源</p></div>",
  jingsai: "<div class=\"content-card\"><h3>🏆 科研竞赛</h3><p>⚡ 电力类专业赛事丰富：</p><p>• 全国职业院校技能大赛（电力类赛项）</p><p>• 江西省职业院校技能大赛</p><p>• 电力行业各类技能比武/创新创业大赛</p><p>💡 参加竞赛对评奖评优和就业都有帮助，建议大二开始关注学校通知</p></div>",
  shixi: "<div class=\"content-card\"><h3>💼 实习与就业</h3><p>🏢 <strong>就业方向：</strong>国家电网、南方电网、五大发电集团、电力建设企业、新能源公司等</p><p>🎓 <strong>校企合作：</strong>学校与国网江西省电力公司等电力企业有深度合作，毕业生就业率较高</p><p>📋 <strong>实习安排：</strong>大三安排集中实习，学院统一对接实习单位</p><p>💡 电力类专业就业面不窄——除了电网，光伏、风电、储能等新能源方向需求也很大</p></div>",
  dangtuan: "<div class=\"content-card\"><h3>🔴 党团组织</h3><p><strong>团员关系转接：</strong>入学后在「智慧团建」系统完成线上转接，纸质团员档案交至学院团委</p><p><strong>入党流程：</strong>提交入党申请书 → 推优 → 入党积极分子 → 发展对象 → 预备党员 → 正式党员</p><p>💡 入党流程较长（一般2-3年），大一就可以递交入党申请书</p></div>",
  pingyou: "<div class=\"content-card\"><h3>⭐ 评优评先</h3><p><strong>三好学生：</strong>成绩优异+综合表现突出</p><p><strong>优秀学生干部：</strong>在学生组织工作中表现突出</p><p><strong>优秀毕业生：</strong>毕业时综合评选</p><p>📝 评优一般以学年为单位，学习成绩和综合测评各占一定比例</p></div>",
  qingong: "<div class=\"content-card\"><h3>💪 勤工助学</h3><p>🏫 校内岗位：图书馆助理、行政办公室助理、实验室助理、食堂帮厨等</p><p>💰 薪资标准：按学校勤工助学管理办法执行，一般按月发放</p><p>📝 申请方式：入学后关注学生工作处通知，填写申请表并提交</p><p>💡 勤工助学不仅赚生活费，也是接触老师和积累经验的好渠道</p></div>",
  jineng: "<div class=\"content-card\"><h3>📚 技能提升资源</h3><p>📱 <strong>在线学习平台：</strong>中国大学MOOC、B站、学习通</p><p>⚡ <strong>电力专业资源：</strong>中国电力出版社教材、电力行业标准文档</p><p>💻 <strong>编程技能：</strong>Python基础（自动化方向）、CAD制图</p><p>🗣 <strong>沟通表达：</strong>多参加社团活动、课堂展示</p><p>💡 大学最值钱的能力不是考试分数，是自学能力和信息搜索能力</p></div>",
  qingjia: "<div class=\"content-card\"><h3>📝 请假流程</h3><p><strong>事假：</strong>提前向辅导员提交书面申请 → 辅导员审批 → 学院备案</p><p><strong>病假：</strong>向辅导员报告 → 提供医院证明（如需长期请假）→ 补办请假手续</p><p><strong>紧急请假：</strong>先电话/微信告知辅导员，事后补办手续</p><p>⚠ 未经批准擅自离校视为旷课，累计旷课一定课时会触发纪律处分</p></div>",
  yibao: "<div class=\"content-card\"><h3>🏥 医保报销</h3><p>📋 <strong>大学生医保：</strong>入学后统一办理城镇居民基本医疗保险</p><p>🏥 <strong>校医室就诊：</strong>携带学生证和医保卡，期末可报销部分费用</p><div class=\"highlight\" style=\"background:#FEF3C7;border-left:3px solid #F59E0B;padding:12px;border-radius:8px;margin:12px 0;\"><p style=\"margin:0;color:#92400E;font-size:13px;\"><strong>💡 报销不强制带学生证：</strong>记牢自己的<strong>学号 + 班级 + 姓名</strong>即可办理；电子医保卡也可使用。</p></div><p>🏨 <strong>校外就医：</strong>需在校医室开具转诊单，保留好发票和病历等材料</p><div class=\"highlight\" style=\"background:#FEE2E2;border-left:3px solid #EF4444;padding:12px;border-radius:8px;margin:12px 0;\"><p style=\"margin:0;color:#B91C1C;font-size:13px;\"><strong>⚠️ 报销地点会变动：</strong>学校每年或每次报销活动的地点都可能换，<strong>想报销的同学务必关注辅导员通知 / 班级群消息</strong>，以免错过。</p></div><p>📝 具体报销比例和流程以学校医保办最新通知为准</p></div>",
  baoxiu: "<div class=\"content-card\"><h3>🔧 宿舍报修</h3><p>🛠 <strong>报修渠道：</strong>联系宿管登记 → 物业维修人员上门处理</p><p>⚡ 常见报修项目：水管漏水、电路故障、门锁损坏、空调故障等</p><p>📞 如宿管处理不及时，可联系后勤服务中心：0791-83831083</p></div>",
  xueji: "<div class=\"content-card\"><h3>📄 学籍异动</h3><p><strong>休学：</strong>因身体原因或其他正当理由可申请休学，需提交书面申请+相关证明材料</p><p><strong>复学：</strong>休学期满后，提交复学申请+医院康复证明等材料</p><p><strong>转专业：</strong>一般在第一学期末或第二学期初开放申请，需满足成绩要求和目标专业容量</p><p>📝 所有学籍异动请第一时间联系辅导员和学工处学籍管理窗口</p></div>",
  caiwu: "<div class=\"content-card\"><h3>💰 财务缴费</h3><p>📋 <strong>缴费项目：</strong>学费（5000元/年）+ 住宿费（800~1000元/年）+ 书本费（约500~800元/年）≈ 6300~6800元/学年</p><p>💳 <strong>缴费方式：</strong>学校指定银行账户转账 / 线上缴费平台 / 报到现场刷卡或现金</p><p>📅 <strong>缴费时间：</strong>每学年开学前完成缴费，具体时间以学校通知为准</p><p>⚠ 逾期未缴费可能影响学籍注册和选课</p></div>",
  baowei: "<div class=\"content-card\"><h3>🛡️ 保卫处</h3><p>📞 <strong>值班电话：</strong>0791-83895162</p><p>🔑 <strong>主要职能：</strong>校园出入管理、夜间巡逻、安防监控、失物招领、突发事件处理</p><p>🚪 <strong>门禁时间：</strong>宿舍楼一般23:00锁门，晚归需登记（具体情况以各宿舍楼公告为准）</p><p>💡 校园安全求助直接拨打保卫处电话，比110出警更快</p></div>",
  zizhu: "<div class=\"content-card\"><h3>🎓 学生资助</h3><p><strong>国家助学金：</strong>平均3300元/年，面向家庭经济困难学生</p><p><strong>国家助学贷款：</strong>最高12000元/年，毕业后分期还款</p><p><strong>校内资助：</strong>勤工助学岗位、临时困难补助、学费减免等</p><p><strong>社会资助：</strong>部分企业和社会团体设立的专项助学金</p><p>📝 申请时间：一般在每学年开学初集中办理，关注学生资助管理中心通知</p></div>",
  default: "<div class=\"content-card\"><h3>📄 详情</h3><p>该页面内容正在整理中，敬请期待。如需帮助，请拨打招就处电话：0791-83899638</p></div>"
};

// Flatten all grid items from the 5 categories
var allItems = [];
for (var k in gridData) {
  allItems = allItems.concat(gridData[k]);
}

// Stage definitions: stage-id -> [item ids]
var stages = {
  departure: { emoji:'📦', title:'出发前准备', desc:'收到录取通知后，这些事情先搞定', items: ['qingdan','jiaotong','xuefei','sushe','map','app'] },
  checkin:   { emoji:'🏁', title:'报到当天', desc:'顺利入学，按部就班不慌张', items: ['baodao','card','lvtong','bilei','dianhua'] },
  term:      { emoji:'📚', title:'开学适应期', desc:'安顿好之后，了解这些让生活更顺畅', items: ['shitang','junxun','kuaidi','chaoshi','yushi','yishi','yundong','sushe'] },
  daily:     { emoji:'🎓', title:'校园日常', desc:'搜索或浏览全校园指南信息', items: null }
};
var currentStage = 'departure';
var currentCatFilter = null; // for daily stage category filtering

// find item by id across all data
function findItemById(id){
  for (var i = 0; i < allItems.length; i++) {
    if (allItems[i].id === id) return allItems[i];
  }
  return null;
}

// render single card HTML
function renderCard(item) {
  return '<div class="grid-item" data-id="'+item.id+'"><div class="grid-icon '+item.icon+'">'+item.svg+'</div><div class="grid-label">'+item.label+'</div><div class="grid-desc">'+item.desc+'</div></div>';
}

// render grid for current stage
function renderStageGrid() {
  var grid = document.getElementById('cardsGrid');
  var stage = stages[currentStage];
  var items;

  if (currentStage === 'daily') {
    if (currentCatFilter) {
      items = gridData[currentCatFilter] || [];
    } else {
      // default: show all items
      items = allItems;
    }
  } else {
    var ids = stage.items;
    items = ids.map(function(id) { return findItemById(id); }).filter(Boolean);
  }

  grid.innerHTML = items.map(renderCard).join('');
}

// render daily stage extra (search + category chips)
function renderDailyExtra() {
  var extra = document.getElementById('stageExtra');
  if (currentStage !== 'daily') { extra.innerHTML = ''; return; }
  var cats = [
    { id:'xinbi', label:'新生必读' },
    { id:'life', label:'校园生活' },
    { id:'study', label:'学业发展' },
    { id:'growth', label:'成长发展' },
    { id:'service', label:'办事指南' }
  ];
  var chipsHtml = cats.map(function(c) {
    var activeClass = (currentCatFilter === c.id) ? ' active' : '';
    return '<button class="cat-chip'+activeClass+'" data-cat="'+c.id+'">'+c.label+'</button>';
  }).join('');

  extra.innerHTML =
    '<div class="search-inline" id="searchInline">'+
      '<div class="search-inline-title">🔍 校园资料搜索</div>'+
      '<div class="search-inline-desc">输入关键词，查找整理好的校园指南</div>'+
      '<div class="search-row">'+
        '<label for="searchInput" class="sr-only">搜索校园指南</label>'+
        '<input class="search-input" id="searchInput" type="text" aria-label="搜索校园指南" placeholder="宿舍、食堂、学费、教务处…">'+
        '<button class="search-btn" id="searchBtn">搜索</button>'+
      '</div>'+
      '<div class="search-hints">'+
        '<span class="search-hint" data-kw="快递">快递</span>'+
        '<span class="search-hint" data-kw="宿舍">宿舍</span>'+
        '<span class="search-hint" data-kw="学费">学费</span>'+
        '<span class="search-hint" data-kw="教务处">教务处</span>'+
      '</div>'+
    '</div>'+
    '<div class="cat-chips" id="catChips">'+chipsHtml+'</div>';
}

function updateStageUI() {
  // timeline active state
  document.querySelectorAll('.timeline-item').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-stage') === currentStage);
  });

  // progress bar
  var stageOrder = ['departure','checkin','term','daily'];
  var idx = stageOrder.indexOf(currentStage);
  var progress = document.getElementById('timelineProgress');
  var pct = idx >= 0 ? ((idx + 1) / stageOrder.length * 100) : 25;
  progress.style.width = pct + '%';

  // stage title
  var s = stages[currentStage];
  document.getElementById('stageTitle').innerHTML =
    '<div class="stage-title">'+s.emoji+' '+s.title+'</div>'+
    '<div class="stage-desc">'+s.desc+'</div>';

  renderStageGrid();
  renderDailyExtra();
}

function setStage(stageId) {
  if (currentStage === stageId) return;
  currentStage = stageId;
  currentCatFilter = null;
  updateStageUI();
  // scroll to stage info
  var el = document.getElementById('stageInfo');
  if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
  // refocus search inputs if on daily stage
  if (stageId === 'daily') {
    bindSearchInline();
  }
}

// detail page
function openDetail(id){
  var page = document.getElementById('detailPage');
  var item = findItemById(id);
  document.getElementById('detailTitle').textContent = item ? (item.label || '详情') : '详情';
  document.getElementById('detailBody').innerHTML = detailContent[id] || detailContent['default'] || '';
  page.classList.add('active');
  document.body.classList.add('noscroll');
  page.scrollTop = 0;
}
function closeDetail(){
  document.getElementById('detailPage').classList.remove('active');
  document.body.classList.remove('noscroll');
}

// modal
var modal = document.getElementById('loadingModal');
function openModal(){ modal.classList.remove('hidden'); document.body.classList.add('noscroll'); }
function closeModal(){ modal.classList.add('hidden'); document.body.classList.remove('noscroll'); }

// toast
var toastTimer;
function showToast(msg){
  var t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 2000);
}

// copy
function copyText(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){ showToast('✅ 已复制：'+text); }).catch(function(){ fallbackCopy(text); });
  } else { fallbackCopy(text); }
}
function fallbackCopy(text){
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); showToast('✅ 已复制：'+text); }
  catch(e){ showToast('复制失败，请长按手动复制'); }
  document.body.removeChild(ta);
}

// navigate to card from search
function navigateToCard(id) {
  // find which stage contains this card
  var foundStage = null;
  for (var s in stages) {
    if (stages[s].items && stages[s].items.indexOf(id) >= 0) {
      foundStage = s; break;
    }
  }
  if (foundStage) {
    currentStage = foundStage;
    currentCatFilter = null;
    updateStageUI();
  }
  // small delay then open detail
  setTimeout(function() { openDetail(id); }, 200);
}

// search
function doSearch(q){
  q = (q || (document.getElementById('searchInput') ? document.getElementById('searchInput').value : '')).trim();
  if (!q) return;
  var map = {
    '快递':'kuaidi','宿舍':'sushe','学费':'xuefei','食堂':'shitang','交通':'jiaotong','避雷':'bilei',
    '骗':'bilei','推销':'bilei','学生会':'xueshenghui','社团':'shetuan','校医':'yishi',
    '学生证':'xueshengzheng','补办':'xueshengzheng','电话':'dianhua','地图':'map','报到':'baodao',
    '军训':'junxun','清单':'qingdan','绿色通道':'lvtong','困难':'lvtong','校园卡':'card','应用':'app',
    '超市':'chaoshi','浴室':'yushi','洗衣':'yushi','运动':'yundong','篮球':'yundong','操场':'yundong',
    '玩乐':'wanle','专业':'zhuanye','绩点':'jidian','学分':'jidian','奖学金':'jiangzhu',
    '助学金':'jiangzhu','图书馆':'lib','教学楼':'jiaoxue','教室':'jiaoxue','选课':'xuanke',
    '重修':'xuanke','补考':'xuanke','专升本':'zhuanben','证书':'zhengshu','教务':'jiaowu',
    '第二课堂':'dierketang','竞赛':'jingsai','科研':'jingsai','实习':'shixi','就业':'shixi',
    '电网':'shixi','党团':'dangtuan','评优':'pingyou','勤工':'qingong','技能':'jineng',
    '学习':'jineng','请假':'qingjia','医保':'yibao','报销':'yibao','报修':'baoxiu','学籍':'xueji',
    '休学':'xueji','转学':'xueji','财务':'caiwu','缴费':'caiwu','保卫':'baowei','门禁':'baowei',
    '资助':'zizhu','贷款':'zizhu','免训':'junxun','宽带':'sushe','热水':'sushe','接水':'yushi',
    '国网':'shixi','驾校':'bilei'
  };
  var target = map[q];
  if(!target){
    for(var k in map){
      if(q.indexOf(k)>=0){ target = map[k]; break; }
    }
  }
  if(target){
    navigateToCard(target);
    if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
  } else {
    showToast('未找到相关内容，请换关键词试试');
  }
}

// live search filtering (for daily stage)
function liveFilter(query) {
  query = query.trim();
  var grid = document.getElementById('cardsGrid');
  var items = grid.querySelectorAll('.grid-item');
  items.forEach(function(item) {
    var label = item.querySelector('.grid-label');
    var desc = item.querySelector('.grid-desc');
    var text = ((label ? label.textContent : '') + ' ' + (desc ? desc.textContent : '')).toLowerCase();
    if (!query || text.indexOf(query.toLowerCase()) >= 0) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// bind search events for inline search (called when daily stage renders)
function bindSearchInline() {
  var si = document.getElementById('searchInput');
  var sb = document.getElementById('searchBtn');
  if (si) {
    si.addEventListener('input', function() { liveFilter(this.value); });
  }
  if (sb) {
    sb.addEventListener('click', function() { doSearch(); });
  }
  // search hints
  var hints = document.querySelectorAll('#stageExtra .search-hint');
  hints.forEach(function(h) {
    h.addEventListener('click', function() { doSearch(this.getAttribute('data-kw')); });
  });
  // cat chips
  var chips = document.querySelectorAll('#catChips .cat-chip');
  chips.forEach(function(c) {
    c.addEventListener('click', function() {
      var cat = this.getAttribute('data-cat');
      if (currentCatFilter === cat) {
        currentCatFilter = null;
      } else {
        currentCatFilter = cat;
      }
      renderStageGrid();
      renderDailyExtra();
      bindSearchInline();
      // rebind category chips after re-render
    });
  });
}

// === EVENT BINDINGS ===
document.addEventListener('DOMContentLoaded', function(){
  // initial render
  updateStageUI();
  bindSearchInline();

  // timeline items
  document.querySelectorAll('.timeline-item').forEach(function(el) {
    el.addEventListener('click', function() {
      var stage = this.getAttribute('data-stage');
      if (stage) setStage(stage);
    });
  });

  // modal
  var modalOverlay = document.getElementById('loadingModal');
  modalOverlay.addEventListener('click', function(e){ if(e.target===this) closeModal(); });
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('modalLaterBtn').addEventListener('click', closeModal);
  document.getElementById('copyWechatBtn').addEventListener('click', function(){ copyText('XMB2D888'); });
  document.getElementById('copyQQBtn').addEventListener('click', function(){ copyText('3289094177'); });

  // detail page
  document.getElementById('detailBackBtn').addEventListener('click', closeDetail);
  document.getElementById('detailPage').addEventListener('click', function(e){ if(e.target===this) closeDetail(); });

  // grid items (delegation on cardsGrid)
  document.getElementById('cardsGrid').addEventListener('click', function(e){
    var item = e.target.closest('.grid-item');
    if(item){
      var id = item.getAttribute('data-id');
      if(id) openDetail(id);
    }
  });

  // bottom tabs
  document.getElementById('tabHome').addEventListener('click', function(){
    closeDetail();
    setStage('departure');
    window.scrollTo({top:0,behavior:'smooth'});
    // highlight home tab
    document.querySelectorAll('.tab-item').forEach(function(t){ t.classList.remove('active'); });
    this.classList.add('active');
  });
  document.getElementById('tabSearch').addEventListener('click', function(){
    closeDetail();
    setStage('daily');
    // focus search input
    setTimeout(function() {
      var si = document.getElementById('searchInput');
      if (si) si.focus();
    }, 400);
    document.querySelectorAll('.tab-item').forEach(function(t){ t.classList.remove('active'); });
    this.classList.add('active');
  });
  document.getElementById('tabContact').addEventListener('click', function(){
    openModal();
    document.querySelectorAll('.tab-item').forEach(function(t){ t.classList.remove('active'); });
  });

  // delegated copy for data-copy buttons in detail view
  document.getElementById('detailBody').addEventListener('click', function(e){
    var btn = e.target.closest('[data-copy]');
    if(btn) copyText(btn.getAttribute('data-copy'));
  });

  // keyboard escape
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape' && document.getElementById('detailPage').classList.contains('active')) closeDetail();
  });
});

})();
