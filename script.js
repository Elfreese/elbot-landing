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
    'arch.input': 'Input',
    'arch.core': 'Core',
    'arch.llm': 'LLM',
    'arch.output': 'Output',
    'arch.chatMode': 'Chat Mode',
    'arch.workMode': 'Work Mode',
    'arch.toolDiscovery': 'Tool Discovery',
    'arch.text': 'Text',
    'arch.image': 'Image',
    'arch.file': 'File',
    'arch.emoticon': 'Emoticon',
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
    'arch.input': '输入',
    'arch.core': '核心',
    'arch.llm': 'LLM',
    'arch.output': '输出',
    'arch.chatMode': 'Chat 模式',
    'arch.workMode': 'Work 模式',
    'arch.toolDiscovery': '工具发现',
    'arch.text': '文本',
    'arch.image': '图片',
    'arch.file': '文件',
    'arch.emoticon': '表情',
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

document.querySelectorAll('.stat-card, .feature-card, .arch-layer, .start-links a').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
  observer.observe(el);
});

