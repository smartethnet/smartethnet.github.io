// Internationalization for static version

const translations = {
    en: {
        'nav-features': 'Features',
        'nav-download': 'Download',
        'nav-docs': 'Docs',
        'hero-title': 'Modern VPN Tunnel Solution',
        'hero-subtitle': 'Open Source • Secure • Multi-Tenant • Easy to Use',
        'hero-download': 'Download Now',
        'hero-source': 'View Source',
        'stat-opensource': 'Open Source',
        'stat-cluster': 'Cluster Isolation',
        'stat-platforms': 'Cross-Platform',
        'features-title': 'Core Features',
        'feature1-title': 'High Performance',
        'feature1-desc': 'Built on Tokio async runtime with ChaCha20-Poly1305 encryption for near line-rate performance',
        'feature2-title': 'Cross-Platform',
        'feature2-desc': 'Support for Linux, macOS, Windows with pre-built binaries',
        'feature3-title': 'Secure & Reliable',
        'feature3-desc': 'AEAD encryption, perfect forward secrecy, replay protection for data security',
        'feature4-title': 'Multi-Tenant',
        'feature4-desc': 'Cluster-based isolation with complete separation between tenants',
        'feature5-title': 'Easy to Use',
        'feature5-desc': 'Simple CLI interface with minimal configuration for quick deployment',
        'feature6-title': 'Lightweight',
        'feature6-desc': 'Zero dependencies, low memory footprint (~20MB per connection)',
        'quickstart-title': 'Quick Start',
        'step1-title': 'Download Binary',
        'step1-desc': 'Download pre-built binary for your platform from GitHub Releases',
        'step2-title': 'Start Server',
        'step3-title': 'Connect Client',
        'download-title': 'Download',
        'download-subtitle': 'Choose the pre-built binary for your platform',
        'download-wintun': 'Download Wintun Driver',
        'download-all': 'View All Releases',
        'footer-desc': 'Modern VPN Tunnel Solution',
        'footer-resources': 'Resources',
        'footer-docs': 'Documentation',
        'footer-releases': 'Releases',
        'footer-build': 'Build Guide',
        'footer-community': 'Community',
        'footer-issues': 'Issues',
        'footer-discussions': 'Discussions',
        'footer-contributing': 'Contributing',
        'footer-license': 'License',
        'demo-title': 'How It Works',
        'demo-subtitle': 'Multi-tenant architecture with cluster isolation and secure connections',
        'legend-cluster-a': 'Cluster A - Internal Network',
        'legend-cluster-b': 'Cluster B - Internal Network',
        'legend-server': 'Central Server - Encrypted Relay'
    },
    zh: {
        'nav-features': '特性',
        'nav-download': '下载',
        'nav-docs': '文档',
        'hero-title': '现代化的 VPN 隧道解决方案',
        'hero-subtitle': '开源 • 安全 • 多租户 • 简单易用',
        'hero-download': '立即下载',
        'hero-source': '查看源码',
        'stat-opensource': '开源许可证',
        'stat-cluster': '集群隔离',
        'stat-platforms': '跨平台支持',
        'features-title': '核心特性',
        'feature1-title': '高性能',
        'feature1-desc': '基于 Tokio 异步运行时，ChaCha20-Poly1305 加密，支持近线速传输',
        'feature2-title': '跨平台支持',
        'feature2-desc': '支持 Linux、macOS、Windows，提供预编译二进制文件',
        'feature3-title': '安全可靠',
        'feature3-desc': 'AEAD 加密、完美前向保密、重放保护，保障数据安全',
        'feature4-title': '多租户',
        'feature4-desc': '基于集群的组织隔离，不同集群完全隔离，互不干扰',
        'feature5-title': '简单易用',
        'feature5-desc': '简洁的命令行接口，最小化配置，快速部署',
        'feature6-title': '轻量级',
        'feature6-desc': '零依赖，低内存占用，单个连接仅需约 20 MB 内存',
        'quickstart-title': '快速开始',
        'step1-title': '下载二进制文件',
        'step1-desc': '从 GitHub Releases 下载适合您系统的预编译版本',
        'step2-title': '启动服务端',
        'step3-title': '连接客户端',
        'download-title': '下载',
        'download-subtitle': '选择适合您平台的预编译二进制文件',
        'download-wintun': '下载 Wintun 驱动',
        'download-all': '查看所有版本',
        'footer-desc': '高性能 VPN 隧道解决方案',
        'footer-resources': '资源',
        'footer-docs': '文档',
        'footer-releases': '版本发布',
        'footer-build': '构建指南',
        'footer-community': '社区',
        'footer-issues': '问题反馈',
        'footer-discussions': '讨论区',
        'footer-contributing': '贡献指南',
        'footer-license': '许可证',
        'demo-title': '工作原理',
        'demo-subtitle': '多租户架构，集群隔离，安全连接',
        'legend-cluster-a': '集群 A - 内网互通',
        'legend-cluster-b': '集群 B - 内网互通',
        'legend-server': '中心服务器 - 加密转发'
    }
};

// Get current language from localStorage or browser
function getCurrentLanguage() {
    const stored = localStorage.getItem('language');
    if (stored && translations[stored]) {
        return stored;
    }
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        return 'zh';
    }
    
    return 'en';
}

// Switch language
function switchLanguage(lang) {
    if (!translations[lang]) return;
    
    localStorage.setItem('language', lang);
    
    // Update all translated elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.getElementById('html-root').setAttribute('lang', lang);
    
    // Update page title
    if (lang === 'zh') {
        document.title = 'Rustun - 现代 VPN 隧道';
        document.querySelector('meta[name="description"]').content = 'Rust 编写的高性能 VPN 隧道，用于实现设备互联，异地组网';
    } else {
        document.title = 'Rustun - Modern VPN Tunnel';
        document.querySelector('meta[name="description"]').content = 'High-performance VPN tunnel implementation written in Rust';
    }
    
    // Toggle language switcher buttons
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    
    if (lang === 'en') {
        // Show Chinese button when in English
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        // Show English button when in Chinese
        zhBtn.classList.remove('active');
        enBtn.classList.add('active');
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    // Set initial button visibility immediately
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    
    if (currentLang === 'en') {
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        zhBtn.classList.remove('active');
        enBtn.classList.add('active');
    }
    
    // Then switch language content
    switchLanguage(currentLang);
});

