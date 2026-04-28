// ============================================
// MIDI & Digital Music Hub - Application Logic
// ============================================

let allTags = new Set();
let activeFilters = {
    tag: null,
    platform: null,
    price: null,
    category: null
};
let searchQuery = '';
let currentView = 'home';

// ============================================
// DATA HELPERS
// ============================================

function extractTags() {
    allTags.clear();
    siteData.categories.forEach(cat => {
        cat.subcategories.forEach(sub => {
            sub.sites.forEach(site => {
                site.tags.forEach(tag => allTags.add(tag));
            });
        });
    });
}

function getTagStats() {
    const stats = {};
    siteData.categories.forEach(cat => {
        cat.subcategories.forEach(sub => {
            sub.sites.forEach(site => {
                site.tags.forEach(tag => {
                    stats[tag] = (stats[tag] || 0) + 1;
                });
            });
        });
    });
    return stats;
}

function getCategorySiteCount(cat) {
    return cat.subcategories.reduce((sum, sub) => sum + sub.sites.length, 0);
}

function getTotalSiteCount() {
    return siteData.categories.reduce((sum, cat) => sum + getCategorySiteCount(cat), 0);
}

function filterSites(sites) {
    return sites.filter(site => {
        // 标签筛选
        if (activeFilters.tag && !site.tags.includes(activeFilters.tag)) {
            return false;
        }
        // 平台筛选
        if (activeFilters.platform) {
            const hasPlatform = site.tags.some(t => 
                t.toLowerCase().includes(activeFilters.platform.toLowerCase())
            );
            if (!hasPlatform) return false;
        }
        // 价格筛选
        if (activeFilters.price) {
            const hasPrice = site.tags.some(t => 
                t.toLowerCase().includes(activeFilters.price.toLowerCase())
            );
            if (!hasPrice) return false;
        }
        // 搜索
        if (searchQuery) {
            const matchesSearch = 
                site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                site.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                site.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            if (!matchesSearch) return false;
        }
        return true;
    });
}

function getLevelColor(levelId) {
    const level = siteData.userLevels.find(l => l.id === levelId);
    return level ? level.color : '#888';
}

function getLevelName(levelId) {
    const level = siteData.userLevels.find(l => l.id === levelId);
    return level ? level.name : levelId;
}

// ============================================
// NAVIGATION
// ============================================

function initNav() {
    const nav = document.querySelector('.sidebar-nav');
    if (!nav) return;

    nav.addEventListener('click', (e) => {
        const item = e.target.closest('.nav-item');
        if (!item) return;

        const view = item.dataset.view;
        if (view && view !== currentView) {
            // 清除筛选
            activeFilters = { tag: null, platform: null, price: null, category: null };
            searchQuery = '';
            document.getElementById('searchInput').value = '';
            switchView(view);
            updatePageTitle(view);
        }
    });
}

function updateNavState() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === currentView);
    });
}

function updatePageTitle(view) {
    const titles = {
        'home': '🏠 首页',
        'categories': '📂 分类浏览',
        'workflows': '🔄 工作流程',
        'tags': '🏷️ 标签筛选'
    };
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) {
        titleEl.textContent = titles[view] || view;
    }
}

function switchView(view) {
    currentView = view;
    updateNavState();
    renderContent();
}

// ============================================
// RENDER: HOME / FEATURED
// ============================================

// 随机打乱数组
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 按分类分组推荐
function groupByCategory(items) {
    const groups = {};
    items.forEach(item => {
        const cat = item.category;
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
    });
    return groups;
}

function renderHomeView() {
    const container = document.getElementById('contentArea');
    
    // 随机打乱所有推荐
    const shuffledFeatured = shuffleArray(siteData.featured);
    const grouped = groupByCategory(shuffledFeatured);
    
    // 定义要显示的分类顺序
    const categoryOrder = [
        '🚀 新手入门',
        '🎛️ DAW与制作', 
        '🤖 AI音乐工具',
        '🎹 虚拟乐器与音色',
        '🎚️ 混音与母带',
        '📚 学习与资源',
        '🔧 工具与实用',
        '🎤 现场与演出'
    ];
    
    // 获取热门标签
    const tagStats = getTagStats();
    const hotTags = Object.entries(tagStats)
        .sort((a, b) => b[1] - a[1])
        .filter(([tag]) => !['免费', '专业', '入门', '进阶', '必装'].includes(tag)) // 排除等级标签
        .slice(0, 14)
        .map(([tag, count]) => ({ tag, count }));
    
    let html = `
        <!-- 快速筛选 - 多维度 -->
        <div class="filter-section">
            <h3>🔍 快速筛选 <span class="filter-hint">点击标签立即筛选，可多维度组合</span></h3>
            
            <!-- 价格筛选 -->
            <div class="filter-group">
                <span class="filter-label">💰 价格：</span>
                <div class="filter-options">
                    <button class="filter-btn price-free" onclick="filterByPrice('免费')" title="完全免费，功能完整">🎁 完全免费</button>
                    <button class="filter-btn price-freemium" onclick="filterByPrice('免费版')" title="基础功能免费，高级功能付费">🆓 免费版/内购</button>
                    <button class="filter-btn price-paid" onclick="filterByPrice('付费')" title="需要付费购买">💎 付费软件</button>
                    <button class="filter-btn price-sub" onclick="filterByPrice('订阅')" title="按月或按年订阅">📅 订阅制</button>
                    <button class="filter-btn" onclick="filterByPrice('开源')" title="源代码开放，可自由使用">🔓 开源</button>
                </div>
            </div>
            
            <!-- 平台筛选 -->
            <div class="filter-group">
                <span class="filter-label">💻 平台：</span>
                <div class="filter-options">
                    <button class="filter-btn" onclick="filterByPlatform('Mac')">🍎 macOS</button>
                    <button class="filter-btn" onclick="filterByPlatform('Windows')">🪟 Windows</button>
                    <button class="filter-btn" onclick="filterByPlatform('Linux')">🐧 Linux</button>
                    <button class="filter-btn" onclick="filterByPlatform('iOS')">📱 iOS</button>
                    <button class="filter-btn" onclick="filterByPlatform('Android')">🤖 Android</button>
                    <button class="filter-btn" onclick="filterByPlatform('在线')">☁️ 在线/网页</button>
                    <button class="filter-btn" onclick="filterByPlatform('跨平台')">🌐 跨平台</button>
                </div>
            </div>
            
            <!-- 用途筛选 -->
            <div class="filter-group">
                <span class="filter-label">🎯 用途：</span>
                <div class="filter-options">
                    <button class="filter-btn" onclick="filterByTag('录音')">🎙️ 录音</button>
                    <button class="filter-btn" onclick="filterByTag('混音')">🎚️ 混音</button>
                    <button class="filter-btn" onclick="filterByTag('母带')">✨ 母带</button>
                    <button class="filter-btn" onclick="filterByTag('编曲')">🎼 编曲</button>
                    <button class="filter-btn" onclick="filterByTag('合成器')">🎹 音色设计</button>
                    <button class="filter-btn" onclick="filterByTag('AI')">🤖 AI生成</button>
                    <button class="filter-btn" onclick="filterByTag('采样')">📼 采样制作</button>
                    <button class="filter-btn" onclick="filterByTag('教程')">📖 学习教程</button>
                    <button class="filter-btn" onclick="filterByTag('打谱')">📝 打谱作曲</button>
                    <button class="filter-btn" onclick="filterByTag('现场')">🎤 现场演出</button>
                    <button class="filter-btn" onclick="filterByTag('DJ')">🎧 DJ表演</button>
                </div>
            </div>

            <!-- 难度筛选 -->
            <div class="filter-group">
                <span class="filter-label">📊 难度：</span>
                <div class="filter-options">
                    <button class="filter-btn level-beginner" onclick="filterByTag('入门')">🌱 入门友好</button>
                    <button class="filter-btn level-intermediate" onclick="filterByTag('进阶')">📈 进阶提升</button>
                    <button class="filter-btn level-pro" onclick="filterByTag('专业')">🏆 专业级</button>
                    <button class="filter-btn" onclick="filterByTag('行业标准')">👑 行业标准</button>
                </div>
            </div>

            <!-- 音乐风格筛选 -->
            <div class="filter-group">
                <span class="filter-label">🎵 风格：</span>
                <div class="filter-options">
                    <button class="filter-btn" onclick="filterByTag('电子')">⚡ 电子/EDM</button>
                    <button class="filter-btn" onclick="filterByTag('Hip-hop')">🎤 Hip-hop/说唱</button>
                    <button class="filter-btn" onclick="filterByTag('电影')">🎬 影视配乐</button>
                    <button class="filter-btn" onclick="filterByTag('管弦乐')">🎻 管弦/古典</button>
                    <button class="filter-btn" onclick="filterByTag('流行')">🎸 流行/摇滚</button>
                    <button class="filter-btn" onclick="filterByTag('爵士')">🎷 爵士/布鲁斯</button>
                    <button class="filter-btn" onclick="filterByTag('游戏')">🎮 游戏音频</button>
                    <button class="filter-btn" onclick="filterByTag('播客')">🎙️ 播客/语音</button>
                </div>
            </div>

            <!-- 特色筛选 -->
            <div class="filter-group">
                <span class="filter-label">⭐ 特色：</span>
                <div class="filter-options">
                    <button class="filter-btn" onclick="filterByTag('推荐')">👍 站长推荐</button>
                    <button class="filter-btn" onclick="filterByTag('必装')">💯 必装神器</button>
                    <button class="filter-btn" onclick="filterByTag('开源')">🔓 开源免费</button>
                    <button class="filter-btn" onclick="filterByTag('中文')">🇨🇳 中文支持</button>
                    <button class="filter-btn" onclick="filterByTag('协作')">👥 协作功能</button>
                    <button class="filter-btn" onclick="filterByTag('移动')">📱 移动端</button>
                    <button class="filter-btn" onclick="filterByTag('硬件')">🔌 硬件配套</button>
                </div>
            </div>
        </div>

        <!-- 快速导航 -->
        <div class="quick-access">
            <h3>🚀 快速导航</h3>
            <div class="quick-grid">
                <div class="quick-card beginner" onclick="jumpToCategory('新手入门')">
                    <span class="quick-icon">🌱</span>
                    <span class="quick-name">新手入门</span>
                    <span class="quick-desc">零基础起步，免费工具</span>
                </div>
                <div class="quick-card" onclick="switchView('workflows')">
                    <span class="quick-icon">🔄</span>
                    <span class="quick-name">工作流程</span>
                    <span class="quick-desc">按场景学习制作</span>
                </div>
                <div class="quick-card" onclick="filterByPrice('免费')">
                    <span class="quick-icon">🎁</span>
                    <span class="quick-name">免费工具</span>
                    <span class="quick-desc">精选免费资源</span>
                </div>
                <div class="quick-card" onclick="jumpToCategory('AI')">
                    <span class="quick-icon">🤖</span>
                    <span class="quick-name">AI工具</span>
                    <span class="quick-desc">AI辅助创作</span>
                </div>
            </div>
        </div>
        
        <!-- 热门标签 - 纯内容标签 -->
        <div class="home-tags-section">
            <h3>🔥 热门标签</h3>
            <div class="home-tags-cloud">
                ${hotTags.map(({tag, count}) => `
                    <span class="home-tag-item" onclick="filterByTag('${tag}')">
                        ${tag} <span class="tag-count">${count}</span>
                    </span>
                `).join('')}
            </div>
        </div>
        
        <!-- 分类推荐 -->
        <div class="category-recommendations">
            <h3>📂 分类推荐 <span class="refresh-hint">🎲 每次刷新显示不同内容</span></h3>
    `;
    
    // 添加各分类的随机推荐
    categoryOrder.forEach(category => {
        if (grouped[category] && grouped[category].length > 0) {
            const count = Math.min(grouped[category].length, 3);
            const items = shuffleArray(grouped[category]).slice(0, count);
            
            html += `
                <div class="category-section-mini">
                    <div class="category-header-mini">
                        <span class="icon">${category.split(' ')[0]}</span>
                        <h4 onclick="jumpToCategory('${category.split(' ')[1]}')" style="cursor: pointer;">${category}</h4>
                    </div>
                    <div class="sites-grid-mini">
                        ${items.map(site => `
                            <a class="site-card-mini" href="${site.url}" target="_blank" rel="noopener noreferrer">
                                <h5>${site.name}</h5>
                                <p>${site.reason}</p>
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    html += `</div>`;
    
    container.innerHTML = html;
}

// ============================================
// RENDER: WORKFLOWS
// ============================================

function renderWorkflowsView() {
    const container = document.getElementById('contentArea');

    let html = `
        <div class="page-header">
            <h2>🔄 工作流程</h2>
            <p>按你的需求和场景，选择合适的工作流程。点击任意步骤查看相关工具。</p>
        </div>
        
        <!-- 工作流程筛选 -->
        <div class="workflow-filters">
            <span class="filter-label">按类型筛选：</span>
            <button class="filter-btn active" onclick="filterWorkflow('all')">全部</button>
            <button class="filter-btn" onclick="filterWorkflow('beginner')">🌱 入门</button>
            <button class="filter-btn" onclick="filterWorkflow('electronic')">🎹 电子</button>
            <button class="filter-btn" onclick="filterWorkflow('recording')">🎙️ 录音</button>
            <button class="filter-btn" onclick="filterWorkflow('film')">🎬 影视</button>
            <button class="filter-btn" onclick="filterWorkflow('ai')">🤖 AI</button>
        </div>
        
        <div class="workflows-container" id="workflowsContainer">
            ${siteData.workflows.map(wf => `
                <div class="workflow-card-large" data-workflow="${wf.id}">
                    <div class="workflow-header">
                        <span class="workflow-icon">${wf.icon}</span>
                        <div>
                            <h3>${wf.name}</h3>
                            <p>${wf.desc}</p>
                        </div>
                    </div>
                    <div class="workflow-steps-list">
                        ${wf.steps.map((step, i) => {
                            const targetCategory = step.categories && step.categories[0] ? step.categories[0] : '';
                            const clickHandler = targetCategory ? `onclick="jumpToSubcategory('${targetCategory}')"` : '';
                            const cursorStyle = targetCategory ? 'cursor: pointer;' : '';
                            return `
                            <div class="workflow-step-item" ${clickHandler} style="${cursorStyle}">
                                <span class="step-number">${i + 1}</span>
                                <div class="step-content">
                                    <span class="step-title">${step.name}</span>
                                    <span class="step-desc">${step.desc}</span>
                                    <div class="step-tools">
                                        ${step.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
                                    </div>
                                    ${targetCategory ? '<span class="step-hint">点击查看相关工具 →</span>' : ''}
                                </div>
                            </div>
                        `}).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = html;
}

// 筛选工作流程
function filterWorkflow(type) {
    const cards = document.querySelectorAll('.workflow-card-large');
    const buttons = document.querySelectorAll('.workflow-filters .filter-btn');
    
    buttons.forEach(btn => {
        btn.classList.toggle('active', 
            (type === 'all' && btn.textContent.includes('全部')) ||
            btn.getAttribute('onclick').includes(`'${type}'`)
        );
    });
    
    cards.forEach(card => {
        if (type === 'all' || card.dataset.workflow === type) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// RENDER: CATEGORIES
// ============================================

function renderCategoriesView() {
    const container = document.getElementById('contentArea');
    let html = '';

    // 显示当前筛选状态
    const activeFilterNames = [];
    if (activeFilters.tag) activeFilterNames.push(`标签: ${activeFilters.tag}`);
    if (activeFilters.platform) activeFilterNames.push(`平台: ${activeFilters.platform}`);
    if (activeFilters.price) activeFilterNames.push(`价格: ${activeFilters.price}`);
    if (searchQuery) activeFilterNames.push(`搜索: ${searchQuery}`);

    if (activeFilterNames.length > 0) {
        html += `
            <div class="active-filter">
                <span>当前筛选: ${activeFilterNames.join(' | ')}</span>
                <button onclick="clearAllFilters()">清除全部</button>
            </div>
        `;
    }

    // 添加分类快速导航栏
    if (!activeFilters.tag && !activeFilters.platform && !activeFilters.price && !activeFilters.category && !searchQuery) {
        html += `
            <div class="category-nav-bar">
                <div class="category-nav-title">📑 快速导航</div>
                <div class="category-nav-items">
                    ${siteData.categories.map((cat, index) => `
                        <button class="category-nav-item" onclick="scrollToCategory(${index})" title="${cat.desc}">
                            <span class="nav-icon">${cat.icon}</span>
                            <span class="nav-name">${cat.name.split(' | ')[0].replace(/^[^\s]+\s*/, '')}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    siteData.categories.forEach((cat, index) => {
        const visibleSubs = cat.subcategories.map(sub => ({
            ...sub,
            filteredSites: filterSites(sub.sites)
        })).filter(sub => sub.filteredSites.length > 0);

        if (visibleSubs.length === 0) return;

        const totalVisible = visibleSubs.reduce((sum, sub) => sum + sub.filteredSites.length, 0);
        const levelColor = getLevelColor(cat.level);

        html += `
            <div class="category-section" id="cat-${index}">
                <div class="category-header">
                    <span class="icon">${cat.icon}</span>
                    <div class="category-info">
                        <h3>${cat.name}</h3>
                        <span class="category-desc">${cat.desc}</span>
                    </div>
                    <div class="category-meta">
                        <span class="level-badge-small" style="background: ${levelColor}20; color: ${levelColor}; border-color: ${levelColor}40">
                            ${getLevelName(cat.level)}
                        </span>
                        <span class="site-count">${totalVisible} 网站</span>
                    </div>
                </div>
                ${visibleSubs.map(sub => renderSubcategory(sub)).join('')}
            </div>
        `;
    });

    if (html === '') {
        html = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <p>没有找到匹配的网站</p>
                <button onclick="clearAllFilters()" style="margin-top: 16px;">清除筛选</button>
            </div>
        `;
    }

    container.innerHTML = html;
}

function renderSubcategory(sub) {
    return `
        <div class="subcategory">
            <div class="subcategory-title">
                ${sub.name}
                ${sub.desc ? `<span class="subcategory-desc">- ${sub.desc}</span>` : ''}
            </div>
            <div class="sites-grid">
                ${sub.filteredSites.map(site => renderSiteCard(site)).join('')}
            </div>
        </div>
    `;
}

function renderSiteCard(site) {
    const tagsHtml = site.tags.map(tag => {
        const isActive = tag === activeFilters.tag;
        return `<span class="site-tag ${isActive ? 'active' : ''}" onclick="event.preventDefault(); event.stopPropagation(); filterByTag('${tag}')">${tag}</span>`;
    }).join('');

    return `
        <a class="site-card" href="${site.url}" target="_blank" rel="noopener noreferrer">
            <h4>${site.name}</h4>
            <p>${site.desc}</p>
            <div class="site-tags">${tagsHtml}</div>
        </a>
    `;
}

// ============================================
// RENDER: TAGS
// ============================================

// 标签图标和颜色配置
const tagStyles = {
    // 价格
    '免费': { icon: '🎁', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' },
    '免费版': { icon: '🆓', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    '付费': { icon: '💎', color: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)' },
    '部分免费': { icon: '💝', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    
    // 平台
    'Mac': { icon: '🍎', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
    'Windows': { icon: '🪟', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
    'iOS': { icon: '📱', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
    'Android': { icon: '🤖', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' },
    'Linux': { icon: '🐧', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    '跨平台': { icon: '🌐', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
    '在线': { icon: '☁️', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
    
    // 类型
    'AI': { icon: '🤖', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
    '开源': { icon: '🔓', color: '#f97316', bg: 'rgba(249, 115, 22, 0.15)' },
    
    // 专业程度
    '专业': { icon: '⭐', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    '行业标准': { icon: '👑', color: '#eab308', bg: 'rgba(234, 179, 8, 0.15)' },
    '推荐': { icon: '👍', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' },
    '必装': { icon: '💯', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' },
    
    // 用途
    '录音': { icon: '🎙️', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
    '混音': { icon: '🎚️', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
    '母带': { icon: '✨', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    '编曲': { icon: '🎼', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
    '合成器': { icon: '🎹', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
    '采样': { icon: '📼', color: '#f97316', bg: 'rgba(249, 115, 22, 0.15)' },
    '效果器': { icon: '⚡', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
    
    // 乐器
    '钢琴': { icon: '🎹', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
    '吉他': { icon: '🎸', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    '鼓': { icon: '🥁', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' },
    '管弦乐': { icon: '🎻', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
    '弦乐': { icon: '🎻', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
    '打击乐': { icon: '🥁', color: '#f97316', bg: 'rgba(249, 115, 22, 0.15)' },
    
    // 风格
    '电子': { icon: '⚡', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
    'EDM': { icon: '🎧', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
    'Hip-hop': { icon: '🎤', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    '电影': { icon: '🎬', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' },
    
    // 学习
    '教程': { icon: '📖', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' },
    '课程': { icon: '🎓', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
    
    // 社区
    '论坛': { icon: '💬', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
    '社区': { icon: '👥', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' },
    
    // 其他
    '移动': { icon: '📱', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' },
    '硬件': { icon: '🔌', color: '#6b7280', bg: 'rgba(107, 114, 128, 0.15)' },
};

// 获取标签样式
function getTagStyle(tag) {
    if (tagStyles[tag]) {
        return tagStyles[tag];
    }
    
    for (let key in tagStyles) {
        if (tag.toLowerCase().includes(key.toLowerCase())) {
            return tagStyles[key];
        }
    }
    
    return { icon: '🏷️', color: '#00d4aa', bg: 'rgba(0, 212, 170, 0.1)' };
}

function renderTagsView() {
    const container = document.getElementById('contentArea');
    const stats = getTagStats();
    const sortedTags = Array.from(allTags).sort((a, b) => stats[b] - stats[a]);
    
    // 按使用频率和类型分组
    const platformTags = sortedTags.filter(t => ['Mac', 'Windows', 'iOS', 'Android', 'Linux', '跨平台', '在线'].includes(t));
    const priceTags = sortedTags.filter(t => ['免费', '免费版', '付费', '部分免费', '开源'].includes(t));
    const typeTags = sortedTags.filter(t => ['AI', '专业', '行业标准', '推荐', '必装'].includes(t));
    const usageTags = sortedTags.filter(t => ['录音', '混音', '母带', '编曲', '合成器', '采样', '教程'].includes(t));
    const otherTags = sortedTags.filter(t => !platformTags.includes(t) && !priceTags.includes(t) && !typeTags.includes(t) && !usageTags.includes(t));

    let html = `
        <div class="page-header">
            <h2>🏷️ 标签筛选</h2>
            <p>通过标签快速筛选工具，支持多维度筛选</p>
        </div>
        
        <!-- 筛选维度 -->
        <div class="tags-filter-dims">
            ${platformTags.length > 0 ? `
                <div class="tags-dim-group">
                    <h4>📱 平台</h4>
                    <div class="tags-cloud enhanced">
                        ${platformTags.slice(0, 8).map(tag => renderTagItem(tag, stats[tag])).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${priceTags.length > 0 ? `
                <div class="tags-dim-group">
                    <h4>💰 价格</h4>
                    <div class="tags-cloud enhanced">
                        ${priceTags.map(tag => renderTagItem(tag, stats[tag])).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${typeTags.length > 0 ? `
                <div class="tags-dim-group">
                    <h4>⭐ 类型</h4>
                    <div class="tags-cloud enhanced">
                        ${typeTags.map(tag => renderTagItem(tag, stats[tag])).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${usageTags.length > 0 ? `
                <div class="tags-dim-group">
                    <h4>🎯 用途</h4>
                    <div class="tags-cloud enhanced">
                        ${usageTags.map(tag => renderTagItem(tag, stats[tag])).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${otherTags.length > 0 ? `
                <div class="tags-dim-group">
                    <h4>🏷️ 其他标签</h4>
                    <div class="tags-cloud enhanced">
                        ${otherTags.slice(0, 20).map(tag => renderTagItem(tag, stats[tag])).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    container.innerHTML = html;
}

function renderTagItem(tag, count) {
    const style = getTagStyle(tag);
    return `
        <span class="tag-item enhanced" 
              onclick="filterByTag('${tag}')"
              style="--tag-color: ${style.color}; --tag-bg: ${style.bg}">
            <span class="tag-icon">${style.icon}</span>
            <span class="tag-name">${tag}</span>
            <span class="tag-count">${count}</span>
        </span>
    `;
}

// ============================================
// RENDER MAIN
// ============================================

function renderContent() {
    if (currentView === 'home') {
        renderHomeView();
    } else if (currentView === 'categories') {
        renderCategoriesView();
    } else if (currentView === 'tags') {
        renderTagsView();
    } else if (currentView === 'workflows') {
        renderWorkflowsView();
    }
}

// ============================================
// ACTIONS
// ============================================

function filterByTag(tag) {
    // 清除所有其他筛选条件，只保留当前标签
    activeFilters = { tag: tag, platform: null, price: null, category: null };
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    currentView = 'categories';
    updateNavState();
    updatePageTitle('categories');
    renderContent();
}

function filterByPlatform(platform) {
    // 清除所有其他筛选条件，只保留当前平台
    activeFilters = { tag: null, platform: platform, price: null, category: null };
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    currentView = 'categories';
    updateNavState();
    updatePageTitle('categories');
    renderContent();
}

function filterByPrice(price) {
    // 清除所有其他筛选条件，只保留当前价格
    activeFilters = { tag: null, platform: null, price: price, category: null };
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    currentView = 'categories';
    updateNavState();
    updatePageTitle('categories');
    renderContent();
}

function clearAllFilters() {
    activeFilters = { tag: null, platform: null, price: null, category: null };
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    renderContent();
}

function scrollToCategory(index) {
    const element = document.getElementById(`cat-${index}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // 添加高亮效果
        element.style.transition = 'background 0.3s';
        element.style.background = 'rgba(0, 212, 170, 0.05)';
        setTimeout(() => {
            element.style.background = '';
        }, 1000);
    }
}

function jumpToCategory(keyword) {
    currentView = 'categories';
    activeFilters = { tag: null, platform: null, price: null, category: null };
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    updateNavState();
    updatePageTitle('categories');
    renderContent();

    setTimeout(() => {
        const headers = document.querySelectorAll('.category-header h3');
        headers.forEach(el => {
            if (el.textContent.toLowerCase().includes(keyword.toLowerCase())) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }, 100);
}

function jumpToSubcategory(subcategoryName) {
    currentView = 'categories';
    activeFilters = { tag: null, platform: null, price: null, category: null };
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    updateNavState();
    updatePageTitle('categories');
    renderContent();

    setTimeout(() => {
        const subTitles = document.querySelectorAll('.subcategory-title');
        for (let el of subTitles) {
            if (el.textContent.toLowerCase().includes(subcategoryName.toLowerCase())) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.style.background = 'rgba(0, 212, 170, 0.1)';
                el.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    el.style.background = '';
                    el.style.borderColor = '';
                }, 2000);
                break;
            }
        }
    }, 150);
}

// ============================================
// SEARCH
// ============================================

function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    input.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery && currentView !== 'categories') {
            currentView = 'categories';
            updateNavState();
            updatePageTitle('categories');
        }
        renderContent();
    });

    // Ctrl+K shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            input.focus();
        }
    });
}

// ============================================
// STATS
// ============================================

function updateStats() {
    const statsEl = document.getElementById('statsText');
    if (statsEl) {
        const totalSites = getTotalSiteCount();
        const totalCategories = siteData.categories.length;
        statsEl.textContent = `${totalSites} 个工具 · ${totalCategories} 个分类`;
    }
}

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    if (typeof siteData === 'undefined') {
        console.error('siteData not loaded yet, retrying...');
        setTimeout(() => {
            if (typeof siteData !== 'undefined') {
                extractTags();
                initNav();
                initSearch();
                updateStats();
                currentView = 'home';
                updateNavState();
                updatePageTitle('home');
                renderContent();
            }
        }, 100);
        return;
    }
    extractTags();
    initNav();
    initSearch();
    updateStats();
    
    // Default to home view
    currentView = 'home';
    updateNavState();
    updatePageTitle('home');
    renderContent();
});
