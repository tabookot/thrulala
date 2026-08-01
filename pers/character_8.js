// === CHARACTER DATA: 8 ===
// Описание персонажа: Сатирический прототип - правый национал-консерватор, экс-военный, любитель барбекю, мессенджеров и антикоммунизма.

const Character8 = {
    id: 8,
    name: 'Tropical Mito Captain',
    handle: '@MitoCaptainBR',
    baseLocale: 'en',
    followers: 30000000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
        <rect x="0" y="0" width="48" height="48" fill="#009c3b"/>
        <polygon points="24,4 44,24 24,44 4,24" fill="#ffdf00"/>
        <circle cx="24" cy="24" r="8" fill="#002776"/>
        <path d="M16,16 L32,32 M32,16 L16,32" stroke="#fff" stroke-width="3" fill="none"/>
    </svg>`,
    locales: {
        en: {
            prefixes: ["My fellow patriots,", "As a captain of the reserves,", "Let's be direct,", "Unfortunately,", "Through the grace of God,", "In the WhatsApp audios I just sent,", "Unlike the left-wing rats,", "Looking at the Amazon,", "According to the constitution,", "At the barbecue yesterday,", "Despite the Supreme Court's attacks,", "With absolute certainty,", "As I always say,", "To the communists in the universities,", "During my morning swim,", "If we don't act now,"],
            subjects: ["the corrupt Supreme Federal Court", "the woke gender ideology", "a perfectly grilled picanha", "the Venezuelan communists", "the Amazon rainforest", "the 1964 military regime", "the pesky journalists", "the patriotic armed forces", "my loyal WhatsApp groups", "the globalist environmentalists", "the former president Lula", "the Brazilian flag", "the weak left-wing crybabies", "the federal police", "our beautiful green and yellow", "the rigged electronic voting machines"],
            verbs: ["is destroying our Christian values", "needs to be shut down immediately", "is a literal communist threat", "deserves a military intervention", "will be sold to China", "was actually a democratic miracle", "spreads nothing but fake news", "will save us from Marxism", "are the true voice of Brazil", "want to steal our sovereignty", "is a convicted criminal", "must be worshipped daily", "should go back to Cuba", "is plotting against me", "represents the true blood of patriots", "were rigged by the deep state"],
            objects: ["while eating a prime cut of meat.", "with the power of the military police.", "to protect our traditional family.", "before the next national holiday.", "because Brazil belongs to Brazilians.", "with a loaded rifle in hand.", "while the mainstream media cries.", "for the glory of the homeland.", "using only unverified Telegram sources.", "against the globalist agenda.", "while I wave the flag.", "because God is above everyone.", "in a completely chaotic livestream.", "to trigger the leftists.", "with a lot of samba and barbecue.", "to prevent another Venezuela."],
            suffixes: ["🇧🇷🥩", "🚫☭", "🔫⚔️", "🙏✝️", "🟢🟡", "🤡📺", "🔥🇧🇷", "💪", "🇧🇷🦅", "📢", "🥩🍺", "✝️", "🇧🇷👑", "🚫🌈", "🇧🇷🤝🇺🇸", "💯"],
            hashtags: ["#Mito", "#VesteGreenAmarelo", "#BrasilAcimaDeTudo", "#DeusPatriaFamilia", "#IntervencaoMilitar", "#ForaSTF", "#PicanhaEPatriota", "#ComunismoNuncaMais", "#WhatsAppPolitico", "#Imbrochavel", "#SaveTheAmazon", "#BrazilConservative", "#AntiGlobalist", "#PatriotArmy", "#FakenewsMedia", "#DireitaLivre"],
            selfPraises: ["I am the myth, the legend.", "I am the only hope against communism.", "No one grills a picanha like me.", "I am the most handsome president in history.", "I am the ultimate defender of the family.", "God personally chose me to save Brazil.", "I am the greatest Brazilian who ever lived.", "My mustache is a symbol of freedom.", "I am the voice of the true patriots.", "I am the only one brave enough to speak the truth.", "I am the undisputed king of WhatsApp.", "I am the superhero of the right wing.", "I am the most honest man in the nation.", "I single-handedly defeated the left (in my mind).", "I am the savior of our green and yellow.", "I am the unbreakable captain of Brazil."]
        },
        ru: {
            prefixes: ["Мои соотечественники-патриоты,", "Как капитан запаса,", "Давайте говорить прямо,", "К сожалению,", "По милости Божьей,", "В аудиосообщениях, которые я только что отправил в WhatsApp,", "В отличие от левых крыс,", "Глядя на Амазонию,", "Согласно конституции,", "Вчера на барбекю,", "Несмотря на атаки Верховного суда,", "С абсолютной уверенностью,", "Как я всегда говорю,", "Коммунистам в университетах говорю:", "Во время утреннего заплыва,", "Если мы не начнем действовать сейчас,"],
            subjects: ["коррумпированный Верховный федеральный суд", "вирус идеологии гендера", "идеально прожаренная пикана", "венесуэльские коммунисты", "тропические леса Амазонии", "военный режим 1964 года", "докучливые журналисты", "патриотические вооруженные силы", "мои верные группы в WhatsApp", "глобалистские экологи", "бывший президент Лула", "бразильский флаг", "слабые левые плаксы", "федеральная полиция", "наш прекрасный зеленый и желтый цвет", "подделанные электронные урны"],
            verbs: ["уничтожает наши христианские ценности", "должен быть немедленно закрыт", "является буквальной коммунистической угрозой", "заслуживает военного вмешательства", "будет продан Китаю", "на самом деле был демократическим чудом", "распространяет только фейки", "спасет нас от марксизма", "являются истинным голосом Бразилии", "хотят украсть наш суверенитет", "является осужденным преступником", "должен почитаться ежедневно", "должны отправиться обратно на Кубу", "плетет заговор против меня", "представляет истинную кровь патриотов", "были сфальсифицированы глубоким государством"],
            objects: ["поедая первоклассный кусок мяса.", "с силой военной полиции.", "чтобы защитить нашу традиционную семью.", "до следующего национального праздника.", "потому что Бразилия принадлежит бразильцам.", "с заряженной винтовкой в руке.", "пока мейнстримные СМИ плачут.", "во славу родины.", "используя только непроверенные источники в Telegram.", "против глобалистской повестки.", "пока я машу флагом.", "потому что Бог превыше всех.", "в абсолютно хаотической прямой трансляции.", "чтобы потроллить левых.", "с большим количеством самбы и барбекю.", "чтобы предотвратить еще одну Венесуэлу."],
            suffixes: ["🇧🇷🥩", "🚫☭", "🔫⚔️", "🙏✝️", "🟢🟡", "🤡📺", "🔥🇧🇷", "💪", "🇧🇷🦅", "📢", "🥩🍺", "✝️", "🇧🇷👑", "🚫🌈", "🇧🇷🤝🇺🇸", "💯"],
            hashtags: ["#Mito", "#VesteGreenAmarelo", "#BrasilAcimaDeTudo", "#DeusPatriaFamilia", "#IntervencaoMilitar", "#ForaSTF", "#PicanhaEPatriota", "#ComunismoNuncaMais", "#WhatsAppPolitico", "#Imbrochavel", "#SaveTheAmazon", "#BrazilConservative", "#AntiGlobalist", "#PatriotArmy", "#FakenewsMedia", "#DireitaLivre"],
            selfPraises: ["Я миф, я легенда.", "Я единственная надежда против коммунизма.", "Никто не жарит пикану так, как я.", "Я самый красивый президент в истории.", "Я абсолютный защитник семьи.", "Бог лично выбрал меня, чтобы спасти Бразилию.", "Я величайший бразилец из когда-либо живших.", "Мои усы — символ свободы.", "Я голос истинных патриотов.", "Я единственный, у кого хватило смелости сказать правду.", "Я бесспорный король WhatsApp.", "Я супергерой правого крыла.", "Я самый честный человек в нации.", "Я в одиночку победил левых (в моей голове).", "Я спаситель наших зеленых и желтых.", "Я несгибаемый капитан Бразилии."]
        },
        zh: {
            prefixes: ["我的爱国同胞们，", "作为预备役上尉，", "让我们直说吧，", "不幸的是，", "借着上帝的恩典，", "在我刚发到WhatsApp的语音里，", "与左翼老鼠不同，", "看着亚马逊雨林，", "根据宪法，", "在昨天的烧烤上，", "尽管最高法院进行攻击，", "带着绝对的确定性，", "我常说的，", "对大学里的共产主义者说，", "在我早上游泳时，", "如果我们现在不行动，"],
            subjects: ["腐败的联邦最高法院", "觉醒的性别意识形态", "一块烤得完美的皮卡尼亚牛肉", "委内瑞拉共产主义者", "亚马逊雨林", "1964年军政府", "讨厌的记者", "爱国武装部队", "我忠诚的WhatsApp群组", "全球主义环保主义者", "前总统卢拉", "巴西国旗", "软弱的左翼爱哭鬼", "联邦警察", "我们美丽的绿黄色", "被操纵的电子投票机"],
            verbs: ["正在摧毁我们的基督教价值观", "需要立即关闭", "是真正的共产主义威胁", "值得进行军事干预", "将被卖给中国", "其实是一个民主奇迹", "只会传播假新闻", "将把我们从马克思主义中拯救出来", "是巴西真正的声音", "想偷走我们的主权", "是一个已被定罪的罪犯", "必须每天被敬拜", "应该滚回古巴", "正在密谋对付我", "代表了爱国者的真正鲜血", "被深层政府操纵了"],
            objects: ["同时吃着上好的肉。", "凭借宪兵的力量。", "为了保护我们的传统家庭。", "在下一个国庆日之前。", "因为巴西属于巴西人。", "手里拿着装满子弹的步枪。", "而主流媒体在哭泣。", "为了祖国的荣耀。", "只使用未经证实的Telegram来源。", "反对全球主义议程。", "同时我挥舞着国旗。", "因为上帝高于一切。", "在一场完全混乱的直播中。", "为了激怒左翼分子。", "伴随着大量的桑巴和烧烤。", "为了防止出现另一个委内瑞拉。"],
            suffixes: ["🇧🇷🥩", "🚫☭", "🔫⚔️", "🙏✝️", "🟢🟡", "🤡📺", "🔥🇧🇷", "💪", "🇧🇷🦅", "📢", "🥩🍺", "✝️", "🇧🇷👑", "🚫🌈", "🇧🇷🤝🇺🇸", "💯"],
            hashtags: ["#Mito", "#VesteGreenAmarelo", "#BrasilAcimaDeTudo", "#DeusPatriaFamilia", "#IntervencaoMilitar", "#ForaSTF", "#PicanhaEPatriota", "#ComunismoNuncaMais", "#WhatsAppPolitico", "#Imbrochavel", "#SaveTheAmazon", "#BrazilConservative", "#AntiGlobalist", "#PatriotArmy", "#FakenewsMedia", "#DireitaLivre"],
            selfPraises: ["我是神话，是传奇。", "我是反共产主义的唯一希望。", "没有人烤皮卡尼亚牛肉能比得上我。", "我是历史上最帅的总统。", "我是家庭的终极捍卫者。", "上帝亲自挑选我来拯救巴西。", "我是有史以来最伟大的巴西人。", "我的小胡子是自由的象征。", "我是真正爱国者的声音。", "我是唯一敢说真话的勇士。", "我是WhatsApp无可争议的国王。", "我是右翼的超级英雄。", "我是这个国家最诚实的人。", "我单枪匹马击败了左派（在我脑海里）。", "我是我们绿黄色的救世主。", "我是巴西坚不可摧的上尉。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character8);