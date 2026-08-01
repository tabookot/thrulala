// [AI_MODEL_INSTRUCTION]: Increase build by 1 every full generation (e.g. 0.3.0 -> 0.3.1)
const SCRIPT_VERSION = "0.1.13";
const STORAGE_KEY = 'thrulala_posts_v8';
const MAX_POSTS = 50; // Лимит постов для защиты от перегрузки памяти устройства

// === ACTIVE CHARACTERS & LOCALE SETUP ===
const ActiveCharacters = window.THRULALA_CHARACTERS || [];
let userLocale = localStorage.getItem('thrulala_locale') || 'en';

// Читаем состояние из URL (приоритет), если нет — из LocalStorage
const urlParams = new URLSearchParams(window.location.search);
const urlAutogen = urlParams.get('autogen');
if (urlAutogen === '1' || urlAutogen === 'true') localStorage.setItem('thrulala_autogen', 'true');
if (urlAutogen === '0' || urlAutogen === 'false') localStorage.setItem('thrulala_autogen', 'false');
let isAutoGenEnabled = localStorage.getItem('thrulala_autogen') !== 'false';

let isTickRunning = false;

// === UI LOCALES (Independent from character phrases) ===
const UI_LOCALES = {
    ru: {
        botActors: ['Бот-ферма','Тролль-отряд','Алгоритм X','Патриот-бот','Фейковая армия','Deep State Bot','Мем-фабрика'],
        botVerbs: ['накручивает','усиливает','подогревает','раскручивает','набивает','бомбит','заливает'],
        typeLabels: { likes: 'лайки', fires: 'огоньки', laughs: 'смехи', dislikes: 'дизлайки', poops: 'какашки', skulls: 'черепа' },
        timeFormats: { sec: 'с', min: 'м', hour: 'ч', day: 'д' },
        emptyState: "Ваша лента пуста. Нажмите Thru, чтобы обновить.",
        nukeEmpty: "Нечего очищать. Лента и так пуста.",
        nukeText: "☢️ ОЧИЩЕНО ☢️",
        nukeMsgs: ["Лента сгорела","Память очищена","Все посты удалены","История стерта"],
        composePlaceholder: "Что происходит?!",
        translateText: "Перевести",
        followersText: "подписчиков",
        autoGenLabel: "Авто-thru",
        exitBtn: "Выйти",
        nukeBtnTitle: "Очистить ленту",
        ageTitle: "⚠️ 18+ Контент",
        ageDesc: "В ленте присутствует сатира, политика и признаки экзистенциального кризиса. Подтвердите возраст.",
        ageCheckboxText: "Мне есть 18 лет, и я готов к разочарованиям",
        ageCaptchaText: "Введите кодовое слово взрослого человека:",
        agePlaceholder: "Кодовое слово",
        ageBtn: "Впустить",
        ageErr1: "Подтвердите, что вы готовы к страданиям (поставьте галочку).",
        ageErr2: "Неверно. Видимо, вы еще слишком молоды и полны надежд.",
        adultWords: ['НАЛОГИ', 'ИПОТЕКА', 'ПРОСТАТА', 'БУХГАЛТЕР', 'РАЗВОД', 'ДИАГНОЗ', 'ХОНДРОЗ', 'АЛЬЦГЕЙМЕР']
    },
    en: {
        botActors: ['Bot farm','Troll squad','X Algorithm','Patriot bot','Fake army','Deep State Bot','Meme factory'],
        botVerbs: ['inflates','boosts','heats up','spins','stuffs','bombs','floods'],
        typeLabels: { likes: 'likes', fires: 'fires', laughs: 'laughs', dislikes: 'dislikes', poops: 'poops', skulls: 'skulls' },
        timeFormats: { sec: 's', min: 'm', hour: 'h', day: 'd' },
        emptyState: "Your feed is empty. Click THru to refresh.",
        nukeEmpty: "Nothing to clear. The feed is already empty.",
        nukeText: "☢️ NUKED ☢️",
        nukeMsgs: ["Feed burned","Memory cleared","All posts deleted","History erased"],
        composePlaceholder: "What is happening?!",
        translateText: "Translate",
        followersText: "followers",
        autoGenLabel: "Auto-thru",
        exitBtn: "Exit",
        nukeBtnTitle: "Clear Feed",
        ageTitle: "⚠️ 18+ Content",
        ageDesc: "This feed contains satire, politics, and signs of an existential crisis. Please verify your age.",
        ageCheckboxText: "I am 18 or older and ready to be disappointed",
        ageCaptchaText: "Enter the adult code word:",
        agePlaceholder: "Code word",
        ageBtn: "Let me in",
        ageErr1: "Confirm you are ready to suffer (check the box).",
        ageErr2: "Incorrect. You are probably still too young and full of hope.",
        adultWords: ['TAXES', 'MORTGAGE', 'PROSTATE', 'DIVORCE', 'BACKPAIN', 'BALDING', 'HEMORRHOIDS']
    },
    zh: {
        botActors: ['机器人农场','巨魔小队','X算法','爱国者机器人','假军队','深层政府机器人','梗图工厂'],
        botVerbs: ['刷榜','助推','加热','炒作','塞满','轰炸','灌水'],
        typeLabels: { likes: '赞', fires: '火', laughs: '笑', dislikes: '踩', poops: '屎', skulls: '骷髅' },
        timeFormats: { sec: '秒', min: '分', hour: '时', day: '天' },
        emptyState: "您的信息流为空。点击 Thru 生成。",
        nukeEmpty: "没啥可清除的。信息流已经空了。",
        nukeText: "☢️ 核平 ☢️",
        nukeMsgs: ["信息流烧毁","记忆清除","所有帖子删除","历史抹去"],
        composePlaceholder: "发生了什么？！",
        translateText: "翻译",
        followersText: "粉丝",
        autoGenLabel: "自动发帖",
        exitBtn: "退出",
        nukeBtnTitle: "清除信息流",
        ageTitle: "⚠️ 18+ 内容",
        ageDesc: "此信息流包含讽刺、政治和存在主义危机的迹象。请验证您的年龄。",
        ageCheckboxText: "我已年满 18 岁，并准备好面对失望",
        ageCaptchaText: "输入成年人的暗号：",
        agePlaceholder: "暗号",
        ageBtn: "放我进去",
        ageErr1: "请确认您已准备好受苦（勾选复选框）。",
        ageErr2: "错误。你可能还太年轻，充满希望。",
        adultWords: ['税收', '房贷', '前列腺', '离婚', '腰痛', '秃头', '痔疮']
    }
};

let L = UI_LOCALES[userLocale];

const ICONS = {
    heart: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    fire: `<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>`,
    laugh: `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>`,
    poop: `<svg viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 .8.3 1.5.8 2C6.5 8 5 9.5 5 11.5c0 1 .4 1.8 1 2.4C5 14.5 4 16 4 17.5c0 2 1.5 3.5 3.5 3.5h9c2 0 3.5-1.5 3.5-3.5 0-1.5-1-3-2.5-3.6.6-.6 1-1.4 1-2.4 0-2-1.5-3.5-3.3-4 .5-.5.8-1.2.8-2C17 3.5 15 2 12.5 2z"/></svg>`,
    skull: `<svg viewBox="0 0 24 24"><path d="M12 2C7.5 2 4 5.5 4 9.5c0 2.5 1.2 4.7 3 6V19c0 1 1 2 2 2h6c1 0 2-1 2-2v-3.5c1.8-1.3 3-3.5 3-6C20 5.5 16.5 2 12 2zM9 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-3 3c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/></svg>`,
    thumbDown: `<svg viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>`
};

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function getRandomElement(arr) { return arr[getRandomInt(0, arr.length - 1)]; }

function getCharacterById(id) {
    return ActiveCharacters.find(c => c.id === id) || ActiveCharacters[0];
}

function generateHashtagIndices(char) {
    const tags = char.locales[char.baseLocale].hashtags;
    let i1 = getRandomInt(0, tags.length - 1);
    let i2 = getRandomInt(0, tags.length - 1);
    while (i2 === i1) i2 = getRandomInt(0, tags.length - 1);
    return [i1, i2];
}

function buildText(post, locale, charId) {
    const char = getCharacterById(charId);
    const loc = char.locales[locale];
    if (post.isSelfPraise) return loc.selfPraises[post.selfPraiseIndex];
    const [p, s, v, o, suf] = post.codes;
    return `${loc.prefixes[p]} ${loc.subjects[s]} ${loc.verbs[v]} ${loc.objects[o]}${loc.suffixes[suf]}`;
}

function buildTagsHTML(indices, locale, charId) {
    const char = getCharacterById(charId);
    const loc = char.locales[locale];
    return indices.map(i => {
        const tag = loc.hashtags[i];
        const tagClean = tag.replace(/^#/, '');
        return `<a href="https://x.com/hashtag/${encodeURIComponent(tagClean)}" target="_blank" rel="noopener noreferrer">${tag}</a>`;
    }).join(' ');
}

function formatDate(isoString) {
    const d = new Date(isoString);
    const now = new Date();
    const diffSec = Math.floor((now - d) / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    if (diffSec < 60) return `${diffSec}${L.timeFormats.sec}`;
    if (diffMin < 60) return `${diffMin}${L.timeFormats.min}`;
    if (diffHour < 24) return `${diffHour}${L.timeFormats.hour}`;
    if (diffDay < 7) return `${diffDay}${L.timeFormats.day}`;
    const localeStr = userLocale === 'ru' ? 'ru-RU' : userLocale === 'zh' ? 'zh-CN' : 'en-US';
    return d.toLocaleDateString(localeStr, { day: 'numeric', month: 'short' });
}

function loadPosts() {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : []; }
    catch { return []; }
}
function savePosts(posts) { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); }

function createPostObject(forceCharId = null) {
    const char = forceCharId ? getCharacterById(forceCharId) : getRandomElement(ActiveCharacters);
    const baseChar = char.locales[char.baseLocale];
    const isSelfPraise = Math.random() < 0.28;
    let codes, tagIndices, selfPraiseIndex = -1;
    if (isSelfPraise) {
        codes = [-1,-1,-1,-1,-1];
        tagIndices = generateHashtagIndices(char);
        selfPraiseIndex = getRandomInt(0, baseChar.selfPraises.length - 1);
    } else {
        codes = [
            getRandomInt(0, baseChar.prefixes.length - 1),
            getRandomInt(0, baseChar.subjects.length - 1),
            getRandomInt(0, baseChar.verbs.length - 1),
            getRandomInt(0, baseChar.objects.length - 1),
            getRandomInt(0, baseChar.suffixes.length - 1)
        ];
        tagIndices = generateHashtagIndices(char);
    }
    return {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        characterId: char.id,
        codes, tagIndices, isSelfPraise, selfPraiseIndex,
        likes: 0, fires: 0, laughs: 0, dislikes: 0, poops: 0, skulls: 0,
        userLiked: false, userFired: false, userLaughed: false,
        userDisliked: false, userPooped: false, userSkulled: false
    };
}

function formatCount(n) {
    if (n === 0) return '';
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'K';
    return n.toString();
}

// === ANIMATED COUNTER ===
function animateCounter(el, from, to, duration = 400) {
    if (from === to) return;
    const start = performance.now();
    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * ease);
        el.textContent = formatCount(current);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = formatCount(to);
    }
    requestAnimationFrame(tick);
}

function showCounter(el, value) {
    el.textContent = formatCount(value);
    el.classList.remove('hidden');
    el.classList.add('appear');
    setTimeout(() => el.classList.remove('appear'), 400);
}

// === GLOBAL REACTION TICK ===
const REACTION_TYPES = ['likes', 'fires', 'laughs', 'dislikes', 'poops', 'skulls'];
const TYPE_MULTIPLIERS = {
    likes: 1.0,
    fires: 0.55,
    laughs: 0.30,
    dislikes: 0.06,
    poops: 0.012,
    skulls: 0.006
};
const TYPE_CLASSES = {
    likes: '.like', fires: '.fire', laughs: '.laugh',
    dislikes: '.dislike', poops: '.poop', skulls: '.skull'
};

function getTickAmount(freshness, type, char) {
    let baseMin, baseMax;
    if (freshness > 0.8) { baseMin = 40; baseMax = 200; }
    else if (freshness > 0.5) { baseMin = 15; baseMax = 80; }
    else if (freshness > 0.2) { baseMin = 3; baseMax = 20; }
    else { baseMin = 0; baseMax = 3; }

    const base = getRandomInt(baseMin, baseMax);
    const mult = TYPE_MULTIPLIERS[type];
    
    // Follower multiplier: 1M followers = 1x base, scales logarithmically
    const followerMult = char ? Math.max(1, Math.log10(char.followers || 1000) - 4) : 1;
    
    let amount = Math.round(base * mult * followerMult * (0.8 + Math.random() * 0.4));

    if (Math.random() < 0.03) {
        amount *= getRandomInt(3, 8);
    }

    return Math.max(0, amount);
}

function reactionTick() {
    isTickRunning = true;
    const posts = loadPosts();
    const now = Date.now();
    let changed = false;
    let lastChangedPost = null;
    let lastPostChanges = [];

    posts.forEach(post => {
        const age = now - post.id;
        const freshness = Math.max(0, 1 - age / 300000);
        const effectiveFreshness = freshness > 0 ? freshness : 0.05;
        
        const char = getCharacterById(post.characterId);
        let postChanges = [];

        REACTION_TYPES.forEach(type => {
            const amount = getTickAmount(effectiveFreshness, type, char);
            if (amount <= 0) return;
            const oldVal = post[type];
            post[type] += amount;
            changed = true;

            postChanges.push({ type, amount });

            const card = document.querySelector(`.post[data-id="${post.id}"]`);
            if (card) {
                const btn = card.querySelector(TYPE_CLASSES[type]);
                if (btn) {
                    const countEl = btn.querySelector('.count');
                    if (countEl) {
                        if (oldVal === 0) showCounter(countEl, post[type]);
                        else animateCounter(countEl, oldVal, post[type], 350);
                    }
                }
            }
        });

        if (postChanges.length > 0) {
            if (!lastChangedPost || post.id > lastChangedPost.id) {
                lastChangedPost = post;
                lastPostChanges = postChanges;
            }
        }
    });

    if (changed) {
        savePosts(posts);

        if (lastChangedPost && lastPostChanges.length > 0) {
            const maxChange = lastPostChanges.reduce((a, b) => a.amount > b.amount ? a : b);
            const card = document.querySelector(`.post[data-id="${lastChangedPost.id}"]`);
            if (card) {
                const btn = card.querySelector(TYPE_CLASSES[maxChange.type]);
                if (btn) {
                    bumpFly(btn, maxChange.amount, maxChange.type === 'dislikes');
                }
            }

            showBotToast(`${getRandomElement(L.botActors)} ${getRandomElement(L.botVerbs)} ${L.typeLabels[maxChange.type]} +${formatCount(maxChange.amount)}`);
        }
    }

    // Автогенерация поста с вероятностью 2% (в 5 раз меньше 10%)
    if (isAutoGenEnabled && Math.random() < 0.02) {
        addNewPost();
    }

    setTimeout(reactionTick, getRandomInt(600, 1400));
}

function bumpFly(el, amount, isDown) {
    const bump = document.createElement('span');
    bump.style.cssText = `
        position:absolute; top:-18px; left:50%; transform:translateX(-50%);
        font-size:0.75rem; font-weight:900; color:${isDown ? '#f4212e' : '#1d9bf0'};
        pointer-events:none; text-shadow:0 0 4px rgba(0,0,0,0.9); white-space:nowrap;
    `;
    bump.textContent = '+' + formatCount(amount);
    el.appendChild(bump);
    bump.animate([
        { opacity: 1, transform: 'translateX(-50%) translateY(0) scale(1)' },
        { opacity: 1, transform: 'translateX(-50%) translateY(-10px) scale(1.3)' },
        { opacity: 0, transform: 'translateX(-50%) translateY(-24px) scale(0.8)' }
    ], { duration: 900, easing: 'ease-out' });
    setTimeout(() => bump.remove(), 900);
}

// === TOAST ===
let toastTimeout;
function showBotToast(message) {
    const toast = document.getElementById('bot-toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

// === LOCALE LOGIC ===
function changeLocale(locale) {
    userLocale = locale;
    L = UI_LOCALES[userLocale];
    localStorage.setItem('thrulala_locale', locale);

    document.querySelectorAll('.locale-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.locale === locale);
    });

    const autoGenBtn = document.getElementById('auto-gen-btn');
    if (autoGenBtn) autoGenBtn.title = L.autoGenLabel;

    const exitBtn = document.getElementById('exit-btn');
    if (exitBtn) exitBtn.title = L.exitBtn;

    const nukeBtn = document.getElementById('nuke-btn');
    if (nukeBtn) nukeBtn.title = L.nukeBtnTitle; // Добавим перевод для очистки

    const mainLocaleLabel = document.getElementById('main-locale-label');
    if (mainLocaleLabel) mainLocaleLabel.textContent = locale.toUpperCase();

    const ageLocaleLabel = document.getElementById('age-locale-label');
    if (ageLocaleLabel) ageLocaleLabel.textContent = locale.toUpperCase();

    // Обновление активного языка в меню
    document.querySelectorAll('.locale-dropdown button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.locale === locale);
    });

    // Обновление текстов капчи, если она на экране
    const ageTitle = document.getElementById('age-title');
    if (ageTitle) {
        ageTitle.textContent = L.ageTitle;
        document.getElementById('age-desc').textContent = L.ageDesc;
        document.getElementById('age-checkbox-text').textContent = L.ageCheckboxText;
        document.getElementById('age-captcha-text').textContent = L.ageCaptchaText;
        document.getElementById('captcha-input').placeholder = L.agePlaceholder;
        document.getElementById('age-verify-btn').textContent = L.ageBtn;
        // Перегенерируем капчу на новом языке
        if (document.getElementById('age-gate-overlay').style.display === 'flex') {
            generateCaptcha();
        }
    }

    renderPosts();
}

// === TRANSLATE POST ===
function translatePost(id) {
    const posts = loadPosts();
    const post = posts.find(p => p.id === id);
    if (!post) return;
    const el = document.getElementById(`translation-${id}`);
    const link = document.querySelector(`.post[data-id="${id}"] .translate-link`);
    if (el && post) {
        el.innerHTML = `${buildText(post, userLocale, post.characterId)}`;
        el.classList.remove('hidden');
        if (link) link.style.display = 'none';
    }
}

// === POST MANAGEMENT ===
function deletePost(postId) {
    let posts = loadPosts();
    posts = posts.filter(p => p.id !== postId);
    savePosts(posts);
    
    const card = document.querySelector(`.post[data-id="${postId}"]`);
    if (card) {
        card.classList.add('post-limbo');
        setTimeout(() => {
            card.remove();
            if (loadPosts().length === 0) renderPosts();
        }, 600);
    }
}

function addNewPost(forceCharId = null) {
    let posts = loadPosts();
    const newPost = createPostObject(forceCharId);
    posts.push(newPost);
    
    let postsToRemove = [];
    if (posts.length > MAX_POSTS) {
        posts.sort((a, b) => a.id - b.id);
        const excess = posts.length - MAX_POSTS;
        postsToRemove = posts.slice(0, excess);
        posts = posts.slice(excess);
    }
    
    savePosts(posts);
    
    const feed = document.getElementById('feed');
    if (feed.querySelector('.empty-state')) {
        feed.innerHTML = '';
    }
    
    // Анимация удаления старых постов ("в limbo")
    postsToRemove.forEach(p => {
        const card = document.querySelector(`.post[data-id="${p.id}"]`);
        if (card) {
            card.classList.add('post-limbo');
            setTimeout(() => card.remove(), 600);
        }
    });
    
    feed.prepend(createPostElement(newPost));
}

// === RENDER ===
function createPostElement(post) {
    const char = getCharacterById(post.characterId);
    const charBaseLocale = char.baseLocale;
    const isTranslated = userLocale !== charBaseLocale;
    
    const el = document.createElement('div');
    el.className = 'post';
    el.dataset.id = post.id;
    const likeCls = post.userLiked ? 'liked' : '';
    const fireCls = post.userFired ? 'liked' : '';
    const laughCls = post.userLaughed ? 'liked' : '';
    const poopCls = post.userPooped ? 'liked' : '';
    const skullCls = post.userSkulled ? 'liked' : '';
    const dislikeCls = post.userDisliked ? 'liked' : '';
    
    const translationHtml = isTranslated ? `
        <span class="translate-link" onclick="translatePost(${post.id})">${L.translateText}</span>
        <div id="translation-${post.id}" class="post-text translated-text hidden"></div>
    ` : '';

    el.innerHTML = `
        <div class="avatar">${char.icon}</div>
        <div class="post-body">
            <div class="post-header-line">
                <span class="post-name">${char.name}</span>
                <span class="verified">✓</span>
                <span class="post-followers">${formatCount(char.followers)} ${L.followersText}</span>
                <span class="post-dot">·</span>
                <span class="post-time">${formatDate(post.timestamp)}</span>
            </div>
            <div class="post-text">${buildText(post, charBaseLocale, post.characterId)}</div>
            <div class="post-tags">${buildTagsHTML(post.tagIndices, charBaseLocale, post.characterId)}</div>
            ${translationHtml}
            <div class="reactions">
                <button class="react-btn like ${likeCls}" onclick="handleReact(${post.id},'like')">
                    ${ICONS.heart}<span class="count ${post.likes === 0 ? 'hidden' : ''}">${formatCount(post.likes)}</span>
                </button>
                <button class="react-btn fire ${fireCls}" onclick="handleReact(${post.id},'fire')">
                    ${ICONS.fire}<span class="count ${post.fires === 0 ? 'hidden' : ''}">${formatCount(post.fires)}</span>
                </button>
                <button class="react-btn laugh ${laughCls}" onclick="handleReact(${post.id},'laugh')">
                    ${ICONS.laugh}<span class="count ${post.laughs === 0 ? 'hidden' : ''}">${formatCount(post.laughs)}</span>
                </button>
                <button class="react-btn poop ${poopCls}" onclick="handleReact(${post.id},'poop')">
                    ${ICONS.poop}<span class="count ${post.poops === 0 ? 'hidden' : ''}">${formatCount(post.poops)}</span>
                </button>
                <button class="react-btn skull ${skullCls}" onclick="handleReact(${post.id},'skull')">
                    ${ICONS.skull}<span class="count ${post.skulls === 0 ? 'hidden' : ''}">${formatCount(post.skulls)}</span>
                </button>
                <button class="react-btn dislike ${dislikeCls}" onclick="handleReact(${post.id},'dislike')">
                ${ICONS.thumbDown}<span class="count ${post.dislikes === 0 ? 'hidden' : ''}">${formatCount(post.dislikes)}</span>
            </button>
        </div>
    </div>
`;

// Пасхалки: двойной клик (новый пост от этого перса) и 3 наведения (удалить пост)
const avatarEl = el.querySelector('.avatar');
if (avatarEl) {
let hoverTimes = [];
avatarEl.addEventListener('mouseenter', () => {
    hoverTimes.push(Date.now());
    hoverTimes = hoverTimes.filter(t => Date.now() - t < 1000);
    if (hoverTimes.length >= 3) {
        hoverTimes = [];
        deletePost(post.id);
    }
});
avatarEl.addEventListener('dblclick', () => {
    addNewPost(post.characterId);
});
}

return el;
}

function renderPosts() {
    const feed = document.getElementById('feed');
    const posts = loadPosts();
    if (posts.length === 0) {
        feed.innerHTML = `<div class="empty-state">${L.emptyState}</div>`;
        return;
    }
    feed.innerHTML = '';
    const sorted = [...posts].sort((a, b) => b.id - a.id);
    sorted.forEach(post => feed.appendChild(createPostElement(post)));
}

function handleReact(postId, type) {
    let posts = loadPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    const toggle = (field, counter) => {
        if (post[field]) { post[counter]--; post[field] = false; }
        else { post[counter]++; post[field] = true; }
    };
    if (type === 'like') {
        toggle('userLiked', 'likes');
        if (post.userDisliked) { post.dislikes--; post.userDisliked = false; }
    } else if (type === 'dislike') {
        toggle('userDisliked', 'dislikes');
        if (post.userLiked) { post.likes--; post.userLiked = false; }
    } else if (type === 'fire') {
        toggle('userFired', 'fires');
    } else if (type === 'laugh') {
        toggle('userLaughed', 'laughs');
    } else if (type === 'poop') {
        toggle('userPooped', 'poops');
    } else if (type === 'skull') {
        toggle('userSkulled', 'skulls');
    }
    savePosts(posts);

    const card = document.querySelector(`.post[data-id="${postId}"]`);
    if (card) {
        const map = { like: '.like', fire: '.fire', laugh: '.laugh', poop: '.poop', skull: '.skull', dislike: '.dislike' };
        const btn = card.querySelector(map[type]);
        if (btn) {
            const fieldMap = { like: 'userLiked', fire: 'userFired', laugh: 'userLaughed', poop: 'userPooped', skull: 'userSkulled', dislike: 'userDisliked' };
            btn.classList.toggle('liked', post[fieldMap[type]]);
            const countEl = btn.querySelector('.count');
            const counterMap = { like: 'likes', fire: 'fires', laugh: 'laughs', poop: 'poops', skull: 'skulls', dislike: 'dislikes' };
            const val = post[counterMap[type]];
            if (countEl) {
                if (val === 0) { countEl.classList.add('hidden'); countEl.textContent = ''; }
                else { countEl.classList.remove('hidden'); countEl.textContent = formatCount(val); }
            }
        }
        if (type === 'like' || type === 'dislike') {
            const other = type === 'like' ? '.dislike' : '.like';
            const otherBtn = card.querySelector(other);
            if (otherBtn) {
                otherBtn.classList.remove('liked');
                const otherCount = otherBtn.querySelector('.count');
                const otherKey = type === 'like' ? 'dislikes' : 'likes';
                const otherVal = post[otherKey];
                if (otherCount) {
                    if (otherVal === 0) { otherCount.classList.add('hidden'); otherCount.textContent = ''; }
                    else { otherCount.classList.remove('hidden'); otherCount.textContent = formatCount(otherVal); }
                }
            }
        }
    }
}

// === NUKE ===
function nukeFeed() {
    const posts = loadPosts();
    if (posts.length === 0) {
        showBotToast(L.nukeEmpty);
        return;
    }

    const cards = Array.from(document.querySelectorAll('.post'));
    cards.forEach(card => card.classList.add('post-shake'));

    const overlay = document.createElement('div');
    overlay.className = 'nuke-overlay';
    overlay.innerHTML = `
        <div class="nuke-red"></div>
        <div class="nuke-flash"></div>
        <div class="nuke-text">${L.nukeText}</div>
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
    });

    const burnStart = 1200;
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.remove('post-shake');
            card.classList.add('post-burn');
        }, burnStart + i * 140);
    });

    setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        overlay.remove();
        renderPosts();
        showBotToast(getRandomElement(L.nukeMsgs));
    }, burnStart + cards.length * 140 + 800);
}

// === AGE GATE CAPTCHA ===
let currentCaptchaWord = '';

function generateCaptcha() {
    currentCaptchaWord = getRandomElement(L.adultWords);
    const canvas = document.getElementById('captcha-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Фон
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Линии помехи
    for(let i=0; i<4; i++) {
        ctx.strokeStyle = `rgba(29, 155, 240, ${Math.random() * 0.4})`;
        ctx.beginPath();
        ctx.moveTo(Math.random()*200, Math.random()*60);
        ctx.lineTo(Math.random()*200, Math.random()*60);
        ctx.stroke();
    }

    // Текст
    const fontSize = currentCaptchaWord.length > 5 ? 20 : 26;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    const textWidth = ctx.measureText(currentCaptchaWord).width;
    const startX = (canvas.width - textWidth) / 2;
    let currentX = startX;
    
    for (let i = 0; i < currentCaptchaWord.length; i++) {
        ctx.save();
        const charWidth = ctx.measureText(currentCaptchaWord[i]).width;
        const x = currentX + charWidth / 2;
        const y = 30 + (Math.random() * 10 - 5);
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.5);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
        ctx.fillText(currentCaptchaWord[i], -charWidth/2, 0);
        ctx.restore();
        currentX += charWidth;
    }
}

function checkAgeGate() {
    const isVerified = localStorage.getItem('thrulala_adult_verified') === 'true';
    const lastActiveStr = localStorage.getItem('thrulala_last_active');
    const lastActive = lastActiveStr ? parseInt(lastActiveStr, 10) : 0;
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const isExpired = (now - lastActive) > oneDay;

    const overlay = document.getElementById('age-gate-overlay');
    
    // Если подтверждено и сессия не истекла (менее суток) — пускаем
    if (isVerified && !isExpired) {
        localStorage.setItem('thrulala_last_active', now.toString()); // Продлеваем сессию
        if (overlay) overlay.style.display = 'none';
        return;
    }

    if (overlay) {
        overlay.style.display = 'flex';
        
        // Сброс формы
        document.getElementById('age-checkbox').checked = false;
        document.querySelector('.captcha-container').style.display = 'none';
        document.getElementById('age-verify-btn').style.display = 'none';
        document.getElementById('captcha-input').value = '';
        document.getElementById('age-error').textContent = '';
        
        generateCaptcha();
        
        // Показ капчи и кнопки только после галочки
        const checkbox = document.getElementById('age-checkbox');
        checkbox.onchange = () => {
            const display = checkbox.checked ? 'block' : 'none';
            document.querySelector('.captcha-container').style.display = display;
            document.getElementById('age-verify-btn').style.display = display;
        };
        
        // Срабатывание кнопки по Enter
        const input = document.getElementById('captcha-input');
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                document.getElementById('age-verify-btn').click();
            }
        };
        
        // Пасхалка: 3 наведения на капчу копируют слово
        const canvasEl = document.getElementById('captcha-canvas');
        let canvasHoverTimes = [];
        canvasEl.onmouseenter = () => {
            canvasHoverTimes.push(Date.now());
            canvasHoverTimes = canvasHoverTimes.filter(t => Date.now() - t < 1000);
            if (canvasHoverTimes.length >= 3) {
                canvasHoverTimes = [];
                document.getElementById('captcha-input').value = currentCaptchaWord;
            }
        };

        const btn = document.getElementById('age-verify-btn');
        btn.onclick = () => {
            const checked = document.getElementById('age-checkbox').checked;
            const inputVal = document.getElementById('captcha-input').value.trim().toUpperCase();
            const errorEl = document.getElementById('age-error');
            
            if (!checked) {
                errorEl.textContent = L.ageErr1;
                return;
            }
            if (inputVal !== currentCaptchaWord.toUpperCase()) {
                errorEl.textContent = L.ageErr2;
                generateCaptcha();
                document.getElementById('captcha-input').value = '';
                return;
            }
            
            localStorage.setItem('thrulala_adult_verified', 'true');
            localStorage.setItem('thrulala_last_active', Date.now().toString());
            overlay.style.display = 'none';
            renderPosts(); // Восстанавливаем ленту (если были старые посты)
        };
    }
}

// === INIT & VERSIONING ===
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем возраст (капча)
    checkAgeGate();

    const versionBadge = document.getElementById('version-tag');
    if (versionBadge) {
        versionBadge.textContent = `v${SCRIPT_VERSION}`;
    }

    // Выпадающие меню локалей
    const mainLocaleBtn = document.getElementById('main-locale-btn');
    const mainLocaleMenu = document.getElementById('main-locale-menu');
    const ageLocaleBtn = document.getElementById('age-locale-btn');
    const ageLocaleMenu = document.getElementById('age-locale-menu');

    function toggleMenu(menu, btn) {
        menu.classList.toggle('show');
        // Закрываем другое меню, если оно открыто
        const otherMenu = menu === mainLocaleMenu ? ageLocaleMenu : mainLocaleMenu;
        if (otherMenu) otherMenu.classList.remove('show');
    }

    if (mainLocaleBtn && mainLocaleMenu) {
        mainLocaleBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(mainLocaleMenu, mainLocaleBtn); });
    }
    if (ageLocaleBtn && ageLocaleMenu) {
        ageLocaleBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(ageLocaleMenu, ageLocaleBtn); });
    }

    document.querySelectorAll('.locale-dropdown button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeLocale(btn.dataset.locale);
            document.querySelectorAll('.locale-dropdown').forEach(m => m.classList.remove('show'));
        });
    });

    // Закрытие меню по клику вне его
    document.addEventListener('click', () => {
        document.querySelectorAll('.locale-dropdown').forEach(m => m.classList.remove('show'));
    });

    // Кнопка авто-постинга
    const autoGenBtn = document.getElementById('auto-gen-btn');
    if (autoGenBtn) {
        autoGenBtn.classList.toggle('active', isAutoGenEnabled);
        autoGenBtn.addEventListener('click', () => {
            isAutoGenEnabled = !isAutoGenEnabled;
            autoGenBtn.classList.toggle('active', isAutoGenEnabled);
            localStorage.setItem('thrulala_autogen', isAutoGenEnabled);
            
            const url = new URL(window.location.href);
            if (isAutoGenEnabled) {
                url.searchParams.set('autogen', '1');
            } else {
                url.searchParams.set('autogen', '0');
            }
            window.history.replaceState({}, '', url);
        });
    }

    changeLocale(userLocale);

    renderPosts();
    
    // Запускаем таймер реакций сразу при загрузке
    if (!isTickRunning) {
        setTimeout(reactionTick, getRandomInt(500, 1200));
    }

    document.getElementById('thru-btn').addEventListener('click', () => {
        addNewPost();
    });

    document.getElementById('nuke-btn').addEventListener('click', nukeFeed);

    document.getElementById('exit-btn').addEventListener('click', () => {
        // Полный сброс кэша и состояния (кроме локали)
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('thrulala_autogen');
        localStorage.removeItem('thrulala_adult_verified');
        localStorage.removeItem('thrulala_last_active');
        
        // Сброс переменных состояния в памяти
        isAutoGenEnabled = true;
        
        // Обновление UI
        const autoGenBtn = document.getElementById('auto-gen-btn');
        if (autoGenBtn) autoGenBtn.classList.add('active');
        
        renderPosts(); // Показываем пустую ленту
        checkAgeGate(); // Откроет капчу, так как thrulala_adult_verified удален
    });
});