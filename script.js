// === i18n ===
const i18n = {
  en: {
    'nav.features': 'Features',
    'nav.architecture': 'Architecture',
    'nav.start': 'Quick Start',
    'hero.label': 'Agent Framework / Go',
    'hero.title': 'Let ElBot Feel<br><span class="hero-accent">Everything</span>',
    'hero.sub': 'A lightweight Agent framework.<br>Token-efficient. Extensible. World-aware.',
    'hero.ctaPrimary': 'Get Started',
    'hero.ctaSecondary': 'Learn More',
    'hero.scroll': 'scroll',
    'stats.startup': 'Startup',
    'stats.memory': 'Resident Memory',
    'stats.binary': 'Binary Size',
    'stats.tokens': 'Chat Mode First Request',
    'features.title': 'Features',
    'features.lightweight.title': 'Lightweight',
    'features.lightweight.desc': 'Sub-10ms startup. ~30MB memory. On-demand tool discovery keeps context lean.',
    'features.hook.title': 'Hook System',
    'features.hook.desc': 'Inject logic at any event point. Exec scripts in any language via stdio protocol.',
    'features.elnis.title': 'Elnis',
    'features.elnis.desc': 'Perceive external signals. Server alerts, RSS, webhooks, game events — one curl away.',
    'features.platform.title': 'Multi-Platform',
    'features.platform.desc': 'CLI, QQ OneBot, QQ Official, Telegram. Front-end fully customizable.',
    'features.security.title': 'Secure by Design',
    'features.security.desc': 'Risk-level tool permissions. Sandboxed execution. Full audit logging.',
    'features.dual.title': 'Dual Mode',
    'features.dual.desc': 'Chat for casual talk, Work for complex tasks. Independent models per mode.',
    'arch.title': 'Architecture',
    'arch.sources': 'External World + Elwisp',
    'arch.elvena': 'Elvena',
    'arch.elvenaSub': 'Event Content / Goal / Tools',
    'arch.elnis': 'Elnis Listening Hub',
    'arch.ingress': 'HTTP Ingress',
    'arch.auth': 'Token Auth / Protocol Check',
    'arch.dedupe': 'Event Dedup / Audit',
    'arch.route': 'Goal Judgment / Mode Dispatch',
    'arch.record': 'record',
    'arch.recordSub': 'Log Only',
    'arch.direct': 'direct',
    'arch.directSub': 'Direct Notification',
    'arch.llm': 'llm',
    'arch.llmSub': 'Background LLM Session',
    'arch.elbot': 'ElBot Control Layer',
    'arch.hook': 'Hook Layer',
    'arch.hookSub': 'Rules / Exec Scripts',
    'arch.agent': 'Agent',
    'arch.toolrun': 'ToolRun',
    'arch.toolrunSub': 'Risk Confirm / Call Record',
    'arch.tools': 'Built-in + External Tools',
    'arch.security': 'Security Policy',
    'arch.output': 'Output Layer',
    'arch.platforms': 'Target Platforms',
    'arch.platformsSub': 'CLI / QQ / Telegram',
    'start.title': 'Quick Start',
    'start.terminal': 'terminal',
    'start.c1': '# Configure provider',
    'start.c2': '# Or connect as remote client',
    'start.c3': '# Headless service mode',
    'start.guide': 'Quick Start Guide',
    'start.config': 'Configuration',
    'start.commands': 'Commands',
    'start.concepts': 'Core Concepts',
    'start.hooks': 'Hooks',
    'start.showcase': 'Showcase',
    'footer.tagline': 'Let ElBot feel everything.',
    'footer.showcase': 'Showcase',
    'footer.docs': 'Docs',
    'footer.status': 'ElBot is under active development.',
  },
  zh: {
    'nav.features': '特性',
    'nav.architecture': '架构',
    'nav.start': '快速开始',
    'hero.label': 'Agent 框架 / Go',
    'hero.title': '让 ElBot 感知<br><span class="hero-accent">万物</span>',
    'hero.sub': '轻量级 Agent 框架。<br>Token 高效。可扩展。感知世界。',
    'hero.ctaPrimary': '开始使用',
    'hero.ctaSecondary': '了解更多',
    'hero.scroll': '向下滚动',
    'stats.startup': '启动时间',
    'stats.memory': '常驻内存',
    'stats.binary': '二进制大小',
    'stats.tokens': 'Chat 模式首次请求',
    'features.title': '特性',
    'features.lightweight.title': '轻量高效',
    'features.lightweight.desc': '启动 <10ms。内存 ~30MB。按需工具发现，保持上下文精简。',
    'features.hook.title': 'Hook 系统',
    'features.hook.desc': '在任意事件点注入逻辑。通过 stdio 协议执行任意语言脚本。',
    'features.elnis.title': 'Elnis',
    'features.elnis.desc': '感知外部信号。服务器告警、RSS、Webhook、游戏事件——一条 curl 搞定。',
    'features.platform.title': '多平台',
    'features.platform.desc': 'CLI、QQ OneBot、QQ 官方、Telegram。前端完全可定制。',
    'features.security.title': '安全设计',
    'features.security.desc': '风险分级工具权限。沙箱隔离执行。完整审计日志。',
    'features.dual.title': '双模式',
    'features.dual.desc': 'Chat 模式闲聊，Work 模式处理复杂任务。各模式独立模型。',
    'arch.title': '架构',
    'arch.sources': '外部世界 + Elwisp',
    'arch.elvena': 'Elvena',
    'arch.elvenaSub': '事件内容 / 目标 / 工具',
    'arch.elnis': 'Elnis 监听枢纽',
    'arch.ingress': 'HTTP 入口',
    'arch.auth': 'Token 认证 / 协议检查',
    'arch.dedupe': '事件去重 / 审计',
    'arch.route': '目标判断 / 模式分发',
    'arch.record': 'record',
    'arch.recordSub': '仅记录日志',
    'arch.direct': 'direct',
    'arch.directSub': '直接通知',
    'arch.llm': 'llm',
    'arch.llmSub': '后台 LLM Session',
    'arch.elbot': 'ElBot 控制层',
    'arch.hook': 'Hook 层',
    'arch.hookSub': '规则 / Exec 脚本',
    'arch.agent': 'Agent',
    'arch.toolrun': 'ToolRun',
    'arch.toolrunSub': '风险确认 / 调用记录',
    'arch.tools': '内置 + 外部工具',
    'arch.security': '安全策略',
    'arch.output': '输出层',
    'arch.platforms': '目标平台',
    'arch.platformsSub': 'CLI / QQ / Telegram',
    'start.title': '快速开始',
    'start.terminal': '终端',
    'start.c1': '# 配置 Provider',
    'start.c2': '# 或作为远程客户端连接',
    'start.c3': '# 无头服务模式',
    'start.guide': '快速上手指南',
    'start.config': '配置说明',
    'start.commands': '命令速查',
    'start.concepts': '核心概念',
    'start.hooks': 'Hook',
    'start.showcase': 'Showcase',
    'footer.tagline': '让 ElBot 感知万物。',
    'footer.showcase': 'Showcase',
    'footer.docs': '文档',
    'footer.status': 'ElBot 正在积极开发中。',
  },
};

function detectLang() {
  const stored = localStorage.getItem('elbot-lang');
  if (stored) return stored;
  const nav = navigator.language || navigator.userLanguage || 'en';
  return nav.startsWith('zh') ? 'zh' : 'en';
}

let currentLang = detectLang();

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('elbot-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });
  // Render architecture SVG
  const archEl = document.getElementById('archDiagram');
  if (archEl && dict['arch.elvena']) {
    archEl.innerHTML = buildArchSVG(dict);
  }
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中';
  // Update doc links for language
  const useEn = lang === 'en';
  document.querySelectorAll('.start-links a, .footer-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.includes('/docs')) {
      a.href = useEn
        ? href.replace('/docs/', '/docs.en/')
        : href.replace('/docs.en/', '/docs/');
    }
  });
}

// Init i18n immediately to avoid flash
applyLang(currentLang);

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'zh' ? 'en' : 'zh');
});

// === Architecture SVG builder ===
function buildArchSVG(d) {
  const C = {
    bg: '#0f1620',
    card: '#121b27',
    border: '#1a2638',
    accent: '#4a90d9',
    accentSoft: '#2a5a8a',
    text: '#c8d4e3',
    textDim: '#6b7d94',
    textFaint: '#4a5a72',
    groupBg: '#0a0f14',
    groupBorder: '#162032',
  };
  const node = (x, y, w, h, title, sub, opts = {}) => {
    const fill = opts.core ? 'rgba(74,144,217,0.08)' : C.card;
    const stroke = opts.core ? C.accentSoft : C.border;
    const titleColor = opts.core ? C.accent : (opts.dim ? C.textDim : C.text);
    let html = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
    if (sub) {
      html += `<text x="${x + w / 2}" y="${y + h / 2 - 2}" text-anchor="middle" fill="${titleColor}" font-size="12" font-weight="500" font-family="Inter,sans-serif">${title}</text>`;
      html += `<text x="${x + w / 2}" y="${y + h / 2 + 14}" text-anchor="middle" fill="${C.textFaint}" font-size="10" font-family="Inter,sans-serif">${sub}</text>`;
    } else {
      html += `<text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" fill="${titleColor}" font-size="12" font-weight="500" font-family="Inter,sans-serif">${title}</text>`;
    }
    return html;
  };
  const arrow = (x1, y1, x2, y2, dashed = false, label = '') => {
    const dash = dashed ? 'stroke-dasharray="4 3"' : '';
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    let html = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.textFaint}" stroke-width="1" ${dash}/>`;
    html += `<polygon points="${x2},${y2} ${x2 - 5},${y2 - 3} ${x2 - 5},${y2 + 3}" fill="${C.textFaint}"/>`;
    if (label) {
      html += `<text x="${midX}" y="${midY - 4}" text-anchor="middle" fill="${C.textFaint}" font-size="9" font-family="Inter,sans-serif">${label}</text>`;
    }
    return html;
  };
  const group = (x, y, w, h, label) => {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="none" stroke="${C.groupBorder}" stroke-width="1" stroke-dasharray="2 4"/>`;
  };
  const groupLabel = (x, y, label) => {
    return `<text x="${x + 12}" y="${y + 18}" fill="${C.textFaint}" font-size="10" font-weight="500" font-family="Inter,sans-serif" letter-spacing="0.05em">${label}</text>`;
  };

  const W = 820, H = 460;
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-height: 480px;" xmlns="http://www.w3.org/2000/svg">`;

  // Group: Sources (left column)
  svg += group(10, 30, 110, 400, '');
  svg += groupLabel(10, 30, d['arch.sources']);
  const srcItems = ['Server / Log', 'RSS / Webpage', 'Webhook', 'Game Event', 'Script / Device', 'More ...'];
  srcItems.forEach((item, i) => {
    svg += `<rect x="20" y="${60 + i * 56}" width="90" height="40" rx="6" fill="${C.card}" stroke="${C.border}" stroke-width="1"/>`;
    svg += `<text x="65" y="${84 + i * 56}" text-anchor="middle" fill="${C.textDim}" font-size="10" font-family="Inter,sans-serif">${item}</text>`;
  });

  // Elvena
  svg += node(150, 190, 100, 60, d['arch.elvena'], d['arch.elvenaSub'], { core: true });

  // Group: Elnis
  svg += group(280, 30, 130, 400, '');
  svg += groupLabel(280, 30, d['arch.elnis']);
  svg += node(290, 60, 110, 40, d['arch.ingress']);
  svg += node(290, 120, 110, 40, d['arch.auth']);
  svg += node(290, 180, 110, 40, d['arch.dedupe']);
  svg += node(290, 240, 110, 40, d['arch.route']);
  // Elnis internal arrows
  svg += arrow(345, 100, 345, 118);
  svg += arrow(345, 160, 345, 178);
  svg += arrow(345, 220, 345, 238);

  // Route targets
  svg += node(290, 310, 110, 40, d['arch.record'], d['arch.recordSub'], { dim: true });
  svg += node(290, 360, 110, 40, d['arch.direct'], d['arch.directSub'], { dim: true });

  // llm node (between Elnis and ElBot)
  svg += node(440, 310, 90, 50, d['arch.llm'], d['arch.llmSub'], { core: true });

  // Group: ElBot
  svg += group(560, 30, 250, 400, '');
  svg += groupLabel(560, 30, d['arch.elbot']);
  svg += node(575, 60, 100, 50, d['arch.agent'], '', { core: true });
  svg += node(695, 60, 95, 50, d['arch.hook'], d['arch.hookSub']);
  svg += node(575, 130, 100, 50, d['arch.toolrun'], d['arch.toolrunSub']);
  svg += node(695, 130, 95, 50, d['arch.tools'], '', { dim: true });
  svg += node(575, 200, 100, 40, d['arch.security'], '', { dim: true });
  svg += node(695, 200, 95, 40, d['arch.output'], '', { core: true });

  // Platforms
  svg += node(695, 270, 95, 50, d['arch.platforms'], d['arch.platformsSub']);

  // Arrows: sources → elvena (representative)
  svg += arrow(110, 150, 148, 210);
  svg += arrow(110, 230, 148, 222);

  // elvena → elnis ingress
  svg += arrow(250, 210, 288, 80);
  // elvena → toolrun (dashed, tool declaration)
  svg += arrow(250, 215, 573, 150, true, '→');

  // route → record
  svg += arrow(345, 280, 345, 308);
  // route → direct
  svg += arrow(345, 280, 345, 358);
  // route → llm
  svg += arrow(400, 270, 438, 330);

  // direct → output
  svg += arrow(400, 380, 693, 220);
  // llm → agent
  svg += arrow(490, 320, 573, 85);

  // agent ↔ hook
  svg += arrow(675, 85, 693, 85);
  svg += arrow(693, 95, 675, 95);
  // agent → toolrun
  svg += arrow(625, 110, 615, 128);
  // toolrun → agent
  svg += arrow(600, 128, 610, 112, false, '↑');
  // toolrun → security
  svg += arrow(625, 180, 625, 198);
  // toolrun → tools
  svg += arrow(675, 155, 693, 155);
  // agent → output
  svg += arrow(625, 110, 740, 198);
  // output → platforms
  svg += arrow(742, 250, 742, 268);

  svg += '</svg>';
  return svg;
}

// === Nav scroll effect ===
const nav = document.getElementById('nav');
let ticking = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });

// === Fade-in on scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-card, .feature-card, .arch-svg, .start-links a').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
  observer.observe(el);
});

