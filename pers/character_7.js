// === CHARACTER DATA: 7 ===
// Описание персонажа: Сатирический прототип - правый популист, евроскептик, любитель пабов и сигарет, защитник рыбаков.

const Character7 = {
    id: 7,
    name: 'Brexit Pub Brawler',
    handle: '@PubPatriot',
    baseLocale: 'en',
    followers: 1800000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
        <rect x="0" y="0" width="48" height="48" fill="#012169"/>
        <path d="M0,0 L48,48 M48,0 L0,48" stroke="#fff" stroke-width="10" fill="none"/>
        <path d="M0,0 L48,48 M48,0 L0,48" stroke="#C8102E" stroke-width="6" fill="none"/>
        <path d="M24,0 V48 M0,24 H48" stroke="#fff" stroke-width="10" fill="none"/>
        <path d="M24,0 V48 M0,24 H48" stroke="#C8102E" stroke-width="6" fill="none"/>
    </svg>`,
    locales: {
        en: {
            prefixes: ["Let me be perfectly clear,", "Frankly, my friends,", "Down at the pub,", "As a true patriot,", "The establishment is terrified because,", "Unlike the Brussels bureaucrats,", "After a few pints of ale,", "Speaking as a man of the people,", "Despite what the remoaners say,", "With a heavy heart and a full glass,", "If you love your country,", "Looking at the boats crossing the Channel,", "As I told Donald just the other day,", "The mainstream media won't report that,", "To be brutally honest,", "Since the glorious victory of Brexit,"],
            subjects: ["the unelected Eurocrats in Brussels", "the radical lefty loonies", "a perfectly poured pint of British ale", "the Royal Navy", "the illegal migrants coming across the Channel", "the bloated Westminster swamp", "our beloved fishing industry", "the WEF globalists", "the remain-voting metro elites", "a British bulldog named Winston", "the climate change hoaxers", "the French president", "the Net Zero zealots", "ordinary, hard-working Brits", "the British pub tradition", "the open borders madness"],
            verbs: ["is destroying our sovereign rights", "needs a pint and a good lie down", "will bring back the glory days", "is a direct threat to our culture", "should be sent back immediately", "are bleeding this country dry", "deserves a knighthood", "is a massive globalist scam", "will bankrupt our energy grid", "haven't got a clue about real people", "is the only thing keeping us sane", "must be stopped by any means necessary", "is worse than the bloody EU", "are literally invading our shores", "is an insult to our veterans", "will single-handedly save the West"],
            objects: ["while sipping a warm Chablis.", "in the Westminster bubble.", "with a rod and reel in hand.", "before last orders at the pub.", "for the sake of our sovereignty.", "because Britain is full.", "down at the local Wetherspoons.", "to the cheers of the common man.", "with utter contempt for the elites.", "while the BBC looks the other way.", "for King and Country.", "with a cigar in hand.", "in a completely un-Canadian way.", "while the lefties cry about it.", "because we won the war, you know.", "in a true blue British fashion."],
            suffixes: ["🍻🇬🇧", "🐟🚢", "😡📉", "🇬🇧✨", "🍺🤝", "🤡🌍", "✊🇬🇧", "👀", "🚫🇪🇺", "🇬🇧🦅", "🍺🚬", "🎣", "🇬🇧👑", "🚫🛶", "🇬🇧🤝🇺🇸", "💯"],
            hashtags: ["#BrexitMeansBrexit", "#ReformUK", "#SaveOurPubs", "#StopTheBoats", "#BluePassport", "#MakeBritainGreat", "#FreeSpeech", "#NetZeroScam", "#PeoplesArmy", "#WestminsterSwamp", "#BritishValues", "#TakeBackControl", "#TrumpAlly", "#FishingForFreedom", "#PatriotSpring", "#RightWingRising"],
            selfPraises: ["I am the man who broke the EU.", "Nobody loves a pint and Britain more than me.", "I am the voice of the forgotten people.", "I am the ultimate patriot.", "I took on the establishment and won.", "I am the only honest man in politics.", "I am the savior of British sovereignty.", "I am the most based politician in the UK.", "I am a man of the people, pure and simple.", "I am the hero of the fishing industry.", "I am the only one brave enough to tell the truth.", "I am the voice of common sense.", "I am the toast of every pub in England.", "I am the relentless defender of our borders.", "I am the greatest orator of our time.", "I am a living legend of the right."]
        },
        ru: {
            prefixes: ["Позвольте мне быть предельно ясным,", "Честно говоря, друзья,", "За кружечкой в пабе,", "Как истинный патриот,", "Истеблишмент в ужасе, потому что,", "В отличие от брюссельских бюрократов,", "После пары пинт эля,", "Говоря как человек из народа,", "Вопреки тому, что ноют пораженцы,", "С тяжелым сердцем и полным стаканом,", "Если вы любите свою страну,", "Глядя на лодки в Ла-Манше,", "Как я сказал Дональду на днях,", "Мейнстримные СМИ не расскажут вам, что,", "Буду предельно откровенен,", "С тех пор, как мы славно победили в Брекзите,"],
            subjects: ["неизбранные еврократы в Брюсселе", "радикальные леворадикалы", "идеально налитая пинта британского эля", "Королевский флот", "нелегальные мигранты, пересекающие Ла-Манш", "раздутое болото Вестминстера", "наша любимая рыболовная промышленность", "глобалисты из ВЭФ", "столичные элиты, голосовавшие против Брекзита", "британский бульдог по имени Уинстон", "шарлатаны изменения климата", "французский президент", "фанатики нулевых выбросов", "обычные, трудолюбивые британцы", "британская традиция пабов", "безумие открытых границ"],
            verbs: ["уничтожает наши суверенные права", "нуждается в пинте и хорошем отдыхе", "вернет дни былой славы", "представляет прямую угрозу нашей культуре", "должен быть немедленно отправлен обратно", "высасывают из этой страны все соки", "заслуживает рыцарского титула", "является масштабной глобалистской аферой", "обанкротит нашу энергосистему", "понятия не имеют о простых людях", "единственное, что сохраняет наш рассудок", "должен быть остановлен любой ценой", "хуже чертова Евросоюза", "буквально вторгаются на наши берега", "это оскорбление наших ветеранов", "в одиночку спасет Запад"],
            objects: ["потягивая теплый Шабли.", "в вестминстерском пузыре.", "с удочкой в руке.", "до последнего заказа в пабе.", "ради нашего суверенитета.", "потому что Британия переполнена.", "в местном Везерспунсе.", "под аплодисменты простого народа.", "с полным презрением к элитам.", "пока BBC смотрит в другую сторону.", "за Короля и Отечество.", "с сигарой в зубах.", "совершенно не по-канадски.", "пока левые плачут об этом.", "потому что мы выиграли войну, знаете ли.", "в истинно британском стиле."],
            suffixes: ["🍻🇬🇧", "🐟🚢", "😡📉", "🇬🇧✨", "🍺🤝", "🤡🌍", "✊🇬🇧", "👀", "🚫🇪🇺", "🇬🇧🦅", "🍺🚬", "🎣", "🇬🇧👑", "🚫🛶", "🇬🇧🤝🇺🇸", "💯"],
            hashtags: ["#BrexitMeansBrexit", "#ReformUK", "#SaveOurPubs", "#StopTheBoats", "#BluePassport", "#MakeBritainGreat", "#FreeSpeech", "#NetZeroScam", "#PeoplesArmy", "#WestminsterSwamp", "#BritishValues", "#TakeBackControl", "#TrumpAlly", "#FishingForFreedom", "#PatriotSpring", "#RightWingRising"],
            selfPraises: ["Я человек, который сломал ЕС.", "Никто не любит пинту и Британию больше, чем я.", "Я голос забытых людей.", "Я абсолютный патриот.", "Я бросил вызов истеблишменту и победил.", "Я единственный честный человек в политике.", "Я спаситель британского суверенитета.", "Я самый базированный политик в Великобритании.", "Я человек из народа, чистый и простой.", "Я герой рыболовной промышленности.", "Я единственный, у кого хватило смелости сказать правду.", "Я голос здравого смысла.", "Я тост каждого паба в Англии.", "Я неустанный защитник наших границ.", "Я величайший оратор нашего времени.", "Я живая легенда правых."]
        },
        zh: {
            prefixes: ["让我非常清楚地说明，", "坦白说，朋友们，", "在酒吧里喝一杯时，", "作为一个真正的爱国者，", "建制派感到恐惧，因为", "与布鲁塞尔的官僚不同，", "喝了几杯艾尔啤酒后，", "作为人民的代言人来说，", "尽管留欧派在抱怨，", "带着沉重的心情和满满的酒杯，", "如果你爱你的国家，", "看着穿越海峡的船只，", "就像我前几天告诉唐纳德的那样，", "主流媒体不会报道的是，", "坦率地说，", "自脱欧取得辉煌胜利以来，"],
            subjects: ["布鲁塞尔未经选举的欧洲官僚", "激进左翼疯子", "一杯倒得恰到好处的英国艾尔啤酒", "皇家海军", "穿越海峡的非法移民", "臃肿的威斯敏斯特沼泽", "我们深爱的捕鱼业", "世界经济论坛的全球主义者", "投票留欧的都市精英", "一只名叫温斯顿的英国斗牛犬", "气候变化骗局制造者", "法国总统", "零排放狂热分子", "普通辛勤工作的英国人", "英国酒吧传统", "开放边境的疯狂"],
            verbs: ["正在摧毁我们的主权权利", "需要喝杯酒好好躺下", "将带回昔日的辉煌", "是对我们文化的直接威胁", "应该立即被遣返", "正在榨干这个国家", "值得获得骑士头衔", "是一个巨大的全球主义骗局", "将使我们的电网破产", "对普通人一无所知", "是唯一让我们保持理智的东西", "必须不惜一切代价阻止", "比该死的欧盟还糟", "正在字面意义上入侵我们的海岸", "是对我们退伍军人的侮辱", "将单枪匹马拯救西方"],
            objects: ["同时喝着温暖的夏布利酒。", "在威斯敏斯特的泡沫里。", "手里拿着钓竿。", "在酒吧打烊前。", "为了我们的主权。", "因为英国已经满了。", "在当地Wetherspoons酒吧里。", "在普通人的欢呼声中。", "对精英充满蔑视。", "而BBC却视而不见。", "为了国王和国家。", "手里拿着雪茄。", "以一种完全不加拿大的方式。", "而左派却为此哭泣。", "因为你知道我们赢了战争。", "以一种真正的蓝色英国方式。"],
            suffixes: ["🍻🇬🇧", "🐟🚢", "😡📉", "🇬🇧✨", "🍺🤝", "🤡🌍", "✊🇬🇧", "👀", "🚫🇪🇺", "🇬🇧🦅", "🍺🚬", "🎣", "🇬🇧👑", "🚫🛶", "🇬🇧🤝🇺🇸", "💯"],
            hashtags: ["#BrexitMeansBrexit", "#ReformUK", "#SaveOurPubs", "#StopTheBoats", "#BluePassport", "#MakeBritainGreat", "#FreeSpeech", "#NetZeroScam", "#PeoplesArmy", "#WestminsterSwamp", "#BritishValues", "#TakeBackControl", "#TrumpAlly", "#FishingForFreedom", "#PatriotSpring", "#RightWingRising"],
            selfPraises: ["我是搞垮欧盟的人。", "没有人比我更爱啤酒和英国。", "我是被遗忘者的声音。", "我是终极爱国者。", "我挑战了建制派并赢了。", "我是政界唯一诚实的人。", "我是英国主权的救世主。", "我是英国最纯血的政客。", "我是纯粹而简单的人民之友。", "我是捕鱼业的英雄。", "我是唯一敢说真话的勇士。", "我是常识的声音。", "我是英格兰每个酒吧的干杯对象。", "我是我们边境的不屈捍卫者。", "我是我们这个时代最伟大的演说家。", "我是右翼的活传奇。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character7);