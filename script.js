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
    'arch.input': 'Input Surfaces',
    'arch.inputSub': 'CLI / QQ / Telegram / Frontend API',
    'arch.inputItems': ['Platform adapters', 'Remote CLI', 'Rich messages', 'Actor & scope'],
    'arch.events': 'Event Perception',
    'arch.eventsSub': 'Elnis + Elvena + Elwisp',
    'arch.eventsItems': ['RSS / Webhook', 'Server alerts', 'Game events', 'Scripts & devices'],
    'arch.core': 'ElBot Core',
    'arch.coreSub': 'Request, session, context, tools, and safety in one control layer',
    'arch.coreItems': ['Agent loop', 'Session & fork', 'Context compression', 'ToolRun', 'Risk policy', 'Cron runtime'],
    'arch.hook': 'Hook System',
    'arch.hookSub': 'Hook input, LLM, output, and more. Scripts can be written in any language.',
    'arch.hookItems': ['Any language', 'Rule hooks', 'Exec scripts', 'More ...'],
    'arch.llm': 'LLM & Skills',
    'arch.llmSub': 'Model routing and token-efficient capabilities',
    'arch.llmItems': ['Chat mode', 'Work mode', 'Tool discovery', 'ELyph skills'],
    'arch.output': 'Unified Output',
    'arch.outputSub': 'One output intent, many targets',
    'arch.outputItems': ['Text', 'Image', 'File', 'Reply / At', 'Emoticon', 'Streaming'],
    'arch.storage': 'Persistent State',
    'arch.storageSub': 'Transparent local data for long-running assistants',
    'arch.storageItems': ['SQLite', 'Long memory', 'Audit logs', 'Config assets'],
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
    'arch.input': '输入入口',
    'arch.inputSub': 'CLI / QQ / Telegram / 前端 API',
    'arch.inputItems': ['平台适配', '远程 CLI', '富消息', 'Actor 与 Scope'],
    'arch.events': '事件感知',
    'arch.eventsSub': 'Elnis + Elvena + Elwisp',
    'arch.eventsItems': ['RSS / Webhook', '服务器告警', '游戏事件', '脚本与设备'],
    'arch.core': 'ElBot 核心',
    'arch.coreSub': '在统一控制层里管理请求、会话、上下文、工具和安全策略',
    'arch.coreItems': ['Agent 循环', '会话与 Fork', '上下文压缩', 'ToolRun', '风险策略', 'Cron 运行时'],
    'arch.hook': 'Hook 系统',
    'arch.hookSub': '可 Hook 输入、LLM、输出等等。脚本支持任意语言编写。',
    'arch.hookItems': ['任意语言', '规则 Hook', 'Exec 脚本', '更多 ...'],
    'arch.llm': 'LLM 与 Skill',
    'arch.llmSub': '模型路由与 Token 高效能力扩展',
    'arch.llmItems': ['Chat 模式', 'Work 模式', '工具发现', 'ELyph Skill'],
    'arch.output': '统一输出',
    'arch.outputSub': '一种输出意图，落到多个目标平台',
    'arch.outputItems': ['文本', '图片', '文件', '回复 / At', '表情', '流式输出'],
    'arch.storage': '持久状态',
    'arch.storageSub': '适合长期运行助手的透明本地数据',
    'arch.storageItems': ['SQLite', '长期记忆', '审计日志', '配置资产'],
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
  // Render architecture blocks
  const archEl = document.getElementById('archDiagram');
  if (archEl && dict['arch.core']) {
    archEl.innerHTML = buildArchBlocks(dict);
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

// === Architecture blocks builder ===
function buildArchBlocks(d) {
  const items = (labels) => labels.map(l => `<span>${l}</span>`).join('');
  const block = (name, extra = '') => `
    <div class="arch-block ${extra}">
      <div class="arch-block-label">${d[`arch.${name}`]}</div>
      <div class="arch-block-sub">${d[`arch.${name}Sub`]}</div>
      <div class="arch-block-items">${items(d[`arch.${name}Items`])}</div>
    </div>`;
  return `
    <div class="arch-row">${block('input')}${block('events')}</div>
    <div class="arch-arrow-down"></div>
    <div class="arch-row arch-row-core">
      ${block('core', 'arch-block-core arch-block-wide')}
      ${block('hook', 'arch-block-hook')}
    </div>
    <div class="arch-arrow-down"></div>
    <div class="arch-row">${block('llm')}${block('storage')}${block('output')}</div>
  `;
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

