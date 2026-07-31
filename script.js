// === DATA ===
const prefixes = [
    "Только что выяснилось, что","В отличие от слабой администрации,","Фейковые новости скрывают, что",
    "Пока радикальные левые спят,","Никто не хочет об этом говорить, но","Великие патриоты знают, что",
    "Это абсолютный позор, что","Запомните мои слова:","Слухи подтверждаются:",
    "Если бы не коррумпированная система,","В то время как Китай строит козни,","Истинные консерваторы видят, что",
    "Огромные новости:","Только настоящий лидер понимает, что","Несмотря на охоту на ведьм,",
    "Пока ИИ захватывает мир,","Пока все смотрят на ТикТок,","В то время как Европа платит за чужую войну,",
    "Пока климатологи плачут в подушку,","Пока мемкоины крашатся,"
];
const subjects = [
    "Сонный Джо","Команда слабаков","Радикальное крыло демократов","Коррумпированная клика",
    "Коварное руководство Китая","Наш великий союзник","Хитрый путинский режим",
    "Фейковое СМИ","Глобалистское болото","Наша великая нация","Забытый американский народ",
    "Истинный патриот","Разрушительная политика левых","Тотальная слабость на мировой арене",
    "Администрация фанатиков","Масштабная афера с выборами","Открытая граница","Американский налогоплательщик",
    "Китайский ИИ","ТикТок-алгоритм","Крипто-ферма","Военно-промышленный комплекс",
    "Зелёные фанатики","Глубинное государство","Бюрократический монстр",
    "Миллениал с дипломом гендерных исследований","Электромобиль на батарейках",
    "Ветряная мельница","Кофе за 12 долларов","Айфон собранный в Мексике"
];
const verbs = [
    "уничтожает","создаёт","преодолевает","разоблачает","приносит","обеспечивает",
    "порождает","прячет","восстанавливает","ликвидирует","выявляет","прославляет",
    "игнорирует","воплощает","разрушает","строит","останавливает","запускает",
    "скрывает","преобразует","защищает","обходит","провозглашает","финансирует",
    "спонсирует","предаёт","продаёт","провоцирует","спасает","тарифицирует",
    "депортирует","добивает","накручивает","банит","бурит","крашит","шортит","копает"
];
const objects = [
    "бесконечную войну за границей","огромные суммы для чужих стран","великого союзника на Ближнем Востоке",
    "опасные сделки с диктаторами","нашу прекрасную страну","тотальную катастрофу на границе",
    "истинные ценности Америки","американские миллиарды","сделку века","мировую стабильность",
    "слабого соперника","ядерную угрозу","коррупцию в Вашингтоне","величайшее возрождение",
    "феерический провал левых","невиданную победу","абсолютный позор","радикальную угрозу",
    "глобальное доминирование","истинную демократию","эпичный провал в экономике","крепкую стену",
    "невероятное процветание","чистую правду","величайшую экономику в истории","тарифы в 1000% на авокадо",
    "крипто-резерв из DOGE","ИИ-революцию без цензуры","вакцину от вакцин","план переселения на Марс",
    "буровую установку в центре города","запрет на электромобили","обязательные курсы патриотизма",
    "налог на солнечные панели","золотой стандарт для мемкоинов","депортацию вейперов",
    "запрет на безразмерные одежды","обязательный флаг на каждом балконе","налог на соевое молоко",
    "гигантскую статую меня в пустыне"
];
const suffixes = [
    "!!!","... Никогда такого не было!","... Мы не сдадимся!","!!! Вперёд к победе!",
    "... Сохраним нашу страну!","!!! Никто не сделает это лучше нас!","!!! Это изменит всё!",
    "... Огромные новости!","... Запомните этот день!","!!! СДЕЛАЕМ АМЕРИКУ ВЕЛИКОЙ СНОВА!",
    "... Фейковые новости промолчат!","!!! Радикальные демократы в панике!","... Истинный патриотизм!",
    "!!! Лучший день в истории!","... Даже ИИ не предсказал!","!!! Китай в шоке!",
    "... Это только начало!","!!! Тарифы работают!"
];
const hashtags = [
    "#Truth","#SaveAmerica","#MAGA","#FakeNews","#DrainTheSwamp",
    "#AmericaFirst","#Patriot","#LawAndOrder","#Freedom","#2026",
    "#SleepyJoe","#BorderCrisis","#TariffsWork","#AIFreedom",
    "#CryptoKing","#DrillBabyDrill","#WokeIsBroke","#DeepState",
    "#GoldStandard","#MarsMission","#NoMoreWars","#BuildTheWall",
    "#TaxTheSun","#MemeEconomy","#VaxFree","#TikTokBan"
];

const selfPraises = [
    "Мои посты — самые великие посты в истории. Никто не пишет лучше меня. Даже Шекспир бы позавидовал!!!",
    "Только что посмотрел в зеркало — и увидел самого великого лидера всех времён. Это был Я!!!",
    "Народ говорит, что я гений. Я с ним согласен. Огромный гений, возможно, величайший!!!",
    "Мой рейтинг зашкаливает. Цифры такие большие, что математики плачут от счастья!!!",
    "Я построил стену из слов, и никакой фейковый факт её не перелезет. Лучшая стена!!!",
    "Даже алгоритмы соцсетей голосуют за меня. Они знают, кто здесь главный!!!",
    "Моя тень на стене — это уже монумент. Не нужно ждать столетий, я велик прямо сейчас!!!",
    "Если бы мои посты были валютой, доллар был бы обеспечен ими на 1000%!!!",
    "Я только что побил свой собственный рекорд по величию. Снова. Никто так не умеет!!!",
    "Историки будущего уже пишут обо мне. Они знают, что я лучший. Все знают!!!",
    "Мой мозг работает быстрее, чем любой суперкомпьютер. ИИ учится у МЕНЯ!!!",
    "Я настолько велик, что даже мои враги молятся, чтобы я не ушёл. Они знают, что без меня им конец!!!",
    "Моя рука при подписании указов — это искусство. Музеи просят мои ручки в экспозицию!!!",
    "Если бы величие измерялось в тоннах, моё бы сломало все весы. Дважды!!!",
    "Я не просто POTUS. Я — POTUS в кубе. В четвёртой степени. В бесконечности!!!",
    "Мои тарифы настолько умные, что они сами находят лазейки и их закрывают. Даже без меня!!!",
    "Я могу сделать пост в 3 часа ночи — и он всё равно будет лучше, чем у всех остальных в обед!!!",
    "Мои враги пытаются меня скопировать. Но подделка никогда не сравнится с оригиналом. Никогда!!!"
];

const nukeMsgs = [
    "Глубинное государство стёрто","Болото осушено. Полностью.","Фейковые новости удалены из эфира",
    "Радикальные левые в шоке от очистки","Память очищена. Как и Вашингтон.","Все посты депортированы в облако забвения"
];

const STORAGE_KEY = 'thrulala_posts_v6';
const activeViral = new Set();

const US_FLAG_SVG = `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;"><rect x="0" y="0" width="48" height="3.69" fill="#B22234"/><rect x="0" y="3.69" width="48" height="3.69" fill="#fff"/><rect x="0" y="7.38" width="48" height="3.69" fill="#B22234"/><rect x="0" y="11.07" width="48" height="3.69" fill="#fff"/><rect x="0" y="14.76" width="48" height="3.69" fill="#B22234"/><rect x="0" y="18.45" width="48" height="3.69" fill="#fff"/><rect x="0" y="22.14" width="48" height="3.69" fill="#B22234"/><rect x="0" y="25.83" width="48" height="3.69" fill="#fff"/><rect x="0" y="29.52" width="48" height="3.69" fill="#B22234"/><rect x="0" y="33.21" width="48" height="3.69" fill="#fff"/><rect x="0" y="36.9" width="48" height="3.69" fill="#B22234"/><rect x="0" y="40.59" width="48" height="3.69" fill="#fff"/><rect x="0" y="44.28" width="48" height="3.72" fill="#B22234"/><rect x="0" y="0" width="19.2" height="25.83" fill="#3C3B6E"/><g fill="#fff"><circle cx="1.6" cy="1.3" r="0.7"/><circle cx="4.8" cy="1.3" r="0.7"/><circle cx="8" cy="1.3" r="0.7"/><circle cx="11.2" cy="1.3" r="0.7"/><circle cx="14.4" cy="1.3" r="0.7"/><circle cx="17.6" cy="1.3" r="0.7"/><circle cx="3.2" cy="3.9" r="0.7"/><circle cx="6.4" cy="3.9" r="0.7"/><circle cx="9.6" cy="3.9" r="0.7"/><circle cx="12.8" cy="3.9" r="0.7"/><circle cx="16" cy="3.9" r="0.7"/><circle cx="1.6" cy="6.5" r="0.7"/><circle cx="4.8" cy="6.5" r="0.7"/><circle cx="8" cy="6.5" r="0.7"/><circle cx="11.2" cy="6.5" r="0.7"/><circle cx="14.4" cy="6.5" r="0.7"/><circle cx="17.6" cy="6.5" r="0.7"/><circle cx="3.2" cy="9.1" r="0.7"/><circle cx="6.4" cy="9.1" r="0.7"/><circle cx="9.6" cy="9.1" r="0.7"/><circle cx="12.8" cy="9.1" r="0.7"/><circle cx="16" cy="9.1" r="0.7"/><circle cx="1.6" cy="11.7" r="0.7"/><circle cx="4.8" cy="11.7" r="0.7"/><circle cx="8" cy="11.7" r="0.7"/><circle cx="11.2" cy="11.7" r="0.7"/><circle cx="14.4" cy="11.7" r="0.7"/><circle cx="17.6" cy="11.7" r="0.7"/><circle cx="3.2" cy="14.3" r="0.7"/><circle cx="6.4" cy="14.3" r="0.7"/><circle cx="9.6" cy="14.3" r="0.7"/><circle cx="12.8" cy="14.3" r="0.7"/><circle cx="16" cy="14.3" r="0.7"/><circle cx="1.6" cy="16.9" r="0.7"/><circle cx="4.8" cy="16.9" r="0.7"/><circle cx="8" cy="16.9" r="0.7"/><circle cx="11.2" cy="16.9" r="0.7"/><circle cx="14.4" cy="16.9" r="0.7"/><circle cx="17.6" cy="16.9" r="0.7"/><circle cx="3.2" cy="19.5" r="0.7"/><circle cx="6.4" cy="19.5" r="0.7"/><circle cx="9.6" cy="19.5" r="0.7"/><circle cx="12.8" cy="19.5" r="0.7"/><circle cx="16" cy="19.5" r="0.7"/><circle cx="1.6" cy="22.1" r="0.7"/><circle cx="4.8" cy="22.1" r="0.7"/><circle cx="8" cy="22.1" r="0.7"/><circle cx="11.2" cy="22.1" r="0.7"/><circle cx="14.4" cy="22.1" r="0.7"/><circle cx="17.6" cy="22.1" r="0.7"/></g></svg>`;

// === SVG ICONS ===
const ICONS = {
    heart: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    fire: `<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>`,
    laugh: `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>`,
    poop: `<svg viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 .8.3 1.5.8 2C6.5 8 5 9.5 5 11.5c0 1 .4 1.8 1 2.4C5 14.5 4 16 4 17.5c0 2 1.5 3.5 3.5 3.5h9c2 0 3.5-1.5 3.5-3.5 0-1.5-1-3-2.5-3.6.6-.6 1-1.4 1-2.4 0-2-1.5-3.5-3.3-4 .5-.5.8-1.2.8-2C17 3.5 15 2 12.5 2z"/></svg>`,
    skull: `<svg viewBox="0 0 24 24"><path d="M12 2C7.5 2 4 5.5 4 9.5c0 2.5 1.2 4.7 3 6V19c0 1 1 2 2 2h6c1 0 2-1 2-2v-3.5c1.8-1.3 3-3.5 3-6C20 5.5 16.5 2 12 2zM9 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-3 3c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/></svg>`,
    down: `<svg viewBox="0 0 24 24"><path d="M19 15l-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"/></svg>`
};

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function getRandomElement(arr) { return arr[getRandomInt(0, arr.length - 1)]; }

function generateHashtagIndices() {
    let i1 = getRandomInt(0, hashtags.length - 1);
    let i2 = getRandomInt(0, hashtags.length - 1);
    while (i2 === i1) i2 = getRandomInt(0, hashtags.length - 1);
    return [i1, i2];
}

function buildText(post) {
    if (post.isSelfPraise) return selfPraises[post.selfPraiseIndex];
    const [p, s, v, o, suf] = post.codes;
    return `${prefixes[p]} ${subjects[s]} ${verbs[v]} ${objects[o]}${suffixes[suf]}`;
}

function buildTagsHTML(indices) {
    return indices.map(i => {
        const tag = hashtags[i];
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
    if (diffSec < 60) return `${diffSec}с`;
    if (diffMin < 60) return `${diffMin}м`;
    if (diffHour < 24) return `${diffHour}ч`;
    if (diffDay < 7) return `${diffDay}д`;
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

function loadPosts() {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : []; }
    catch { return []; }
}
function savePosts(posts) { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); }

function createPostObject() {
    const isSelfPraise = Math.random() < 0.28;
    let codes, tagIndices, selfPraiseIndex = -1;
    if (isSelfPraise) {
        codes = [-1,-1,-1,-1,-1];
        tagIndices = generateHashtagIndices();
        selfPraiseIndex = getRandomInt(0, selfPraises.length - 1);
    } else {
        codes = [
            getRandomInt(0, prefixes.length - 1),
            getRandomInt(0, subjects.length - 1),
            getRandomInt(0, verbs.length - 1),
            getRandomInt(0, objects.length - 1),
            getRandomInt(0, suffixes.length - 1)
        ];
        tagIndices = generateHashtagIndices();
    }
    return {
        id: Date.now(),
        timestamp: new Date().toISOString(),
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

// === VIRAL BOOST (massive scale) ===
function startViralBoost(postId, iteration = 0) {
    if (activeViral.has(postId)) return;
    activeViral.add(postId);

    const posts = loadPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) { activeViral.delete(postId); return; }

    const types = ['likes', 'fires', 'laughs', 'dislikes', 'poops', 'skulls'];
    const r = Math.random();
    let type;
    if (r < 0.35) type = 'likes';
    else if (r < 0.55) type = 'fires';
    else if (r < 0.72) type = 'laughs';
    else if (r < 0.82) type = 'dislikes';
    else if (r < 0.92) type = 'poops';
    else type = 'skulls';

    // 2-3 orders of magnitude bigger
    const amount = getRandomInt(1000, 10000);
    const oldVal = post[type];
    post[type] += amount;
    savePosts(posts);

    const card = document.querySelector(`.post[data-id="${postId}"]`);
    if (card) {
        const map = { likes: '.like', fires: '.fire', laughs: '.laugh', dislikes: '.dislike', poops: '.poop', skulls: '.skull' };
        const btn = card.querySelector(map[type]);
        if (btn) {
            const countEl = btn.querySelector('.count');
            if (countEl) {
                if (oldVal === 0) showCounter(countEl, post[type]);
                else animateCounter(countEl, oldVal, post[type], 350);
            }
            bumpFly(btn, amount, type === 'dislikes');
        }
    }

    iteration++;
    const delay = 600 + iteration * 250 + getRandomInt(0, 500);
    if (iteration < 35 && delay < 10000) {
        setTimeout(() => startViralBoost(postId, iteration), delay);
    } else {
        activeViral.delete(postId);
    }
}

function bumpFly(el, amount, isDown) {
    const bump = document.createElement('span');
    bump.style.cssText = `
        position:absolute; top:-18px; left:50%; transform:translateX(-50%);
        font-size:0.75rem; font-weight:900; color:${isDown ? '#f4212e' : '#d4af37'};
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

// === RENDER ===
function renderPosts() {
    const feed = document.getElementById('feed');
    const posts = loadPosts();
    if (posts.length === 0) {
        feed.innerHTML = '<div class="empty-state">Нажмите THRU, чтобы выпустить абсолютную правду в эфир</div>';
        return;
    }
    feed.innerHTML = '';
    const sorted = [...posts].sort((a, b) => b.id - a.id);
    sorted.forEach(post => {
        const el = document.createElement('div');
        el.className = 'post';
        el.dataset.id = post.id;
        const likeCls = post.userLiked ? 'liked' : '';
        const fireCls = post.userFired ? 'liked' : '';
        const laughCls = post.userLaughed ? 'liked' : '';
        const poopCls = post.userPooped ? 'liked' : '';
        const skullCls = post.userSkulled ? 'liked' : '';
        const dislikeCls = post.userDisliked ? 'liked' : '';
        el.innerHTML = `
            <div class="avatar">${US_FLAG_SVG}</div>
            <div class="post-body">
                <div class="post-header-line">
                    <span class="post-name">POTUS</span>
                    <span class="verified">✓</span>
                    <span class="post-handle">@realPOTUS</span>
                    <span class="post-dot">·</span>
                    <span class="post-time">${formatDate(post.timestamp)}</span>
                </div>
                <div class="post-text">${buildText(post)}</div>
                <div class="post-tags">${buildTagsHTML(post.tagIndices)}</div>
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
                        ${ICONS.down}<span class="count ${post.dislikes === 0 ? 'hidden' : ''}">${formatCount(post.dislikes)}</span>
                    </button>
                </div>
            </div>
        `;
        feed.appendChild(el);
    });
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

// === Background bots (massive) ===
function botActivity() {
    let posts = loadPosts();
    if (posts.length === 0) return;
    const post = getRandomElement(posts);
    const types = ['likes', 'fires', 'laughs', 'dislikes', 'poops', 'skulls'];
    const type = getRandomElement(types);
    const amount = getRandomInt(2000, 15000);
    const oldVal = post[type];
    post[type] += amount;
    savePosts(posts);

    const card = document.querySelector(`.post[data-id="${post.id}"]`);
    if (card) {
        const map = { likes: '.like', fires: '.fire', laughs: '.laugh', dislikes: '.dislike', poops: '.poop', skulls: '.skull' };
        const btn = card.querySelector(map[type]);
        if (btn) {
            const countEl = btn.querySelector('.count');
            if (countEl) {
                if (oldVal === 0) showCounter(countEl, post[type]);
                else animateCounter(countEl, oldVal, post[type], 350);
            }
            bumpFly(btn, amount, type === 'dislikes');
        }
    }

    const verbsBot = ['накручивает','усиливает','подогревает','раскручивает','набивает','бомбит','заливает'];
    const actors = ['Бот-ферма','Тролль-отряд','Алгоритм X','Патриот-бот','Фейковая армия','Deep State Bot','Мем-фабрика'];
    const labels = { likes: 'лайки', dislikes: 'дизлайки', fires: 'огоньки', laughs: 'смехи', poops: 'какашки', skulls: 'черепа' };
    showBotToast(`${getRandomElement(actors)} ${getRandomElement(verbsBot)} ${labels[type]} +${formatCount(amount)}`);

    setTimeout(botActivity, getRandomInt(6000, 20000));
}

// === NUKE ===
function nukeFeed() {
    const posts = loadPosts();
    if (posts.length === 0) {
        showBotToast("Нечего взрывать. Лента и так чиста.");
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'nuke-overlay';
    overlay.innerHTML = `<div class="nuke-text">☢️ NUKED ☢️</div>`;
    document.body.appendChild(overlay);
    void overlay.offsetWidth;
    overlay.classList.add('anim');
    document.body.classList.add('shake-body');

    const cards = Array.from(document.querySelectorAll('.post'));
    cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('post-burn'), 400 + i * 120);
    });

    setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        activeViral.clear();
        overlay.remove();
        document.body.classList.remove('shake-body');
        renderPosts();
        showBotToast(getRandomElement(nukeMsgs));
    }, 400 + cards.length * 120 + 900);
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();

    const posts = loadPosts();
    posts.forEach(post => {
        const age = Date.now() - post.id;
        if (age < 120000 && !activeViral.has(post.id)) {
            setTimeout(() => startViralBoost(post.id), getRandomInt(400, 1000));
        }
    });

    setTimeout(botActivity, getRandomInt(5000, 12000));

    document.getElementById('thru-btn').addEventListener('click', () => {
        const posts = loadPosts();
        const newPost = createPostObject();
        posts.push(newPost);
        savePosts(posts);
        renderPosts();
        startViralBoost(newPost.id);
    });

    document.getElementById('nuke-btn').addEventListener('click', nukeFeed);
});