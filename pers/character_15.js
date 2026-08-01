const Character15 = {
    id: 15,
    name: 'Comrade Metal Finger',
    handle: '@WorkerStarBR',
    baseLocale: 'en',
    followers: 5000000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
        <rect x="0" y="0" width="48" height="48" fill="#DA251D"/>
        <polygon points="24,8 28,19 40,19 30,26 34,38 24,31 14,38 18,26 8,19 20,19" fill="#FFFF00"/>
        <path d="M14 26 Q18 22 22 26" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M26 26 Q30 22 34 26" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
    locales: {
        en: {
            prefixes: ["My fellow workers,", "Looking at my worker's card,", "Despite the elite's lies,", "With my missing finger raised,", "To the rich and greedy:", "According to my little piece of paper,", "As a former metalworker,", "If we tax the rich,", "While drinking a cold beer,", "To my beloved northeast:", "Unlike the fascist saboteurs,", "In the name of the working class,", "Despite the fake news media,", "Let me tell you a story,", "After eating a plate of beans and rice,"],
            subjects: ["the greedy billionaires", "the poor and forgotten", "my signature little piece of paper", "the historic Worker's Party", "the zero hunger program", "the fascist rioters", "a cold glass of draft beer", "the evil ranchers", "the stolen hour of lunch", "my four missing finger jokes", "the corrupt Supreme Court (when they help me)", "the beautiful soccer stadiums", "the extreme right-wing elites", "a bag of basic food baskets", "the nationalized oil reserves"],
            verbs: ["must pay their fair share", "deserve a massive cash transfer", "says I am winning the election", "will save our motherland", "is returning stronger than ever", "destroyed the capital out of spite", "goes perfectly with a meat skewer", "are destroying the Amazon for profit", "is a crime against the proletariat", "never get old, my friends", "is actually a hero of democracy", "will be filled with the people's joy", "are plotting against the poor", "will be distributed to every favela", "belong to the Brazilian people"],
            objects: ["while wearing a dirty work shirt.", "in the name of social justice.", "before my next stroke of genius.", "with the power of the unions.", "to the applause of the favelas.", "because the people are starving.", "after my third plate of feijoada.", "while stealing the poor's lunch hour.", "to fund my next social program.", "with zero irony, I promise.", "as long as they clear my name.", "during the Sunday match.", "despite their evil austerity plans.", "just before the election season.", "to fund our glorious revolution."],
            suffixes: ["⭐✊", "🍺🥩", "🇧🇷❤️", "⚙️🤚", "📄👀", "🚫💰", "📉🍽️", "🤡🎬", "🇧🇷⚒️", "✊🔴", "⚽🥅", "🌾🍲", "🛢️🇧🇷", "💯", "🤪🗣️"],
            hashtags: ["#LulaDeNovo", "#TaxTheRich", "#WorkerPower", "#ZeroHunger", "#RedStar", "#ForThePoor", "#SocialJustice", "#UnionStrong", "#EatTheRich", "#PeopleFirst", "#SocialDemocracy", "#PTSalvation", "#AntiFascist", "#NationalizeOil", "#BrazilianLeft"],
            selfPraises: ["I am the savior of the working class.", "Nobody understands poverty like I do.", "I am the greatest union leader in history.", "My missing finger is a symbol of the proletariat.", "I single-handedly ended hunger (in my mind).", "I am the ultimate champion of the poor.", "I am the most resilient politician alive.", "My speeches are pure poetic genius.", "I am the nightmare of the greedy elite.", "I am the undisputed king of the favelas.", "I am the only honest man in Brasilia.", "I am the father of the modern left.", "I bravely defeated the fascists (by reading a paper).", "I am the most charismatic leader of the south.", "I am the eternal voice of the marginalized."]
        },
        ru: {
            prefixes: ["Мои товарищи рабочие,", "Глядя на свою трудовую книжку,", "Несмотря на ложь элит,", "Подняв свой обрубок пальца,", "Богатым и жадным говорю:", "Согласно этому маленькому клочку бумаги,", "Как бывший металлист,", "Если мы обложим налогом богатых,", "Потягивая холодное пиво,", "Моему любимому северо-востоку:", "В отличие от фашистских саботажников,", "Во имя рабочего класса,", "Несмотря на фейковые новости СМИ,", "Позвольте рассказать вам историю,", "После тарелки фасоли с рисом,"],
            subjects: ["жадные миллиардеры", "бедные и забытые", "моя фирменная бумажка", "историческая Рабочая партия", "программа искоренения голода", "фашистские погромщики", "стакан холодного разливного пива", "злые ранчеро", "украденный час обеда", "мои шутки про четыре пальца", "коррумпированный Верховный суд (когда он мне помогает)", "красивые футбольные стадионы", "ультраправые элиты", "мешок с базовыми продуктами", "национализированные нефтяные резервы"],
            verbs: ["должны платить свою справедливую долю", "заслуживают массовых денежных выплат", "говорит, что я выигрываю выборы", "спасет нашу родину", "возвращается сильнее, чем когда-либо", "разрушили столицу из злости", "идеально подходит к мясному шашлыку", "уничтожают Амазонию ради прибыли", "это преступление против пролетариата", "никогда не стареют, друзья мои", "на самом деле герой демократии", "будет наполнен радостью народа", "плетут заговор против бедных", "будут распределены в каждую фавелу", "принадлежат бразильскому народу"],
            objects: ["нося грязную рабочую рубашку.", "во имя социальной справедливости.", "перед моим следующим приступом гениальности.", "с силой профсоюзов.", "под аплодисменты фавел.", "потому что народ голодает.", "после третьей тарелки фейжоады.", "пока крадут обеденное время бедных.", "чтобы финансировать мою следующую соцпрограмму.", "без доли иронии, обещаю.", "при условии, что они снимут с меня обвинения.", "во время воскресного матча.", "несмотря на их злые планы жесткой экономии.", "прямо перед сезоном выборов.", "чтобы финансировать нашу славную революцию."],
            suffixes: ["⭐✊", "🍺🥩", "🇧🇷❤️", "⚙️🤚", "📄👀", "🚫💰", "📉🍽️", "🤡🎬", "🇧🇷⚒️", "✊🔴", "⚽🥅", "🌾🍲", "🛢️🇧🇷", "💯", "🤪🗣️"],
            hashtags: ["#LulaDeNovo", "#TaxTheRich", "#WorkerPower", "#ZeroHunger", "#RedStar", "#ForThePoor", "#SocialJustice", "#UnionStrong", "#EatTheRich", "#PeopleFirst", "#SocialDemocracy", "#PTSalvation", "#AntiFascist", "#NationalizeOil", "#BrazilianLeft"],
            selfPraises: ["Я спаситель рабочего класса.", "Никто не понимает бедность так, как я.", "Я величайший профсоюзный лидер в истории.", "Мой отсутствующий палец — символ пролетариата.", "Я в одиночку победил голод (в моей голове).", "Я абсолютный чемпион бедных.", "Я самый стойкий политик из ныне живущих.", "Мои речи — чистый поэтический гений.", "Я кошмар для жадной элиты.", "Я бесспорный король фавел.", "Я единственный честный человек в Бразилиа.", "Я отец современных левых.", "Я смело победил фашистов (читая по бумажке).", "Я самый харизматичный лидер Юга.", "Я вечный голос угнетенных."]
        },
        zh: {
            prefixes: ["我的工人同志们，", "看着我的工作证，", "尽管精英们在撒谎，", "举起我残缺的手指，", "致那些富有贪婪的人：", "根据这张小纸条，", "作为一个前金属工人，", "如果我们向富人征税，", "喝着冰镇啤酒时，", "致我深爱的东北部：", "与法西斯破坏者不同，", "以工人阶级的名义，", "尽管有假新闻媒体，", "让我给你们讲个故事，", "吃完一盘豆子和米饭后，"],
            subjects: ["贪婪的亿万富翁们", "贫穷和被遗忘的人", "我标志性的小纸条", "历史性的工人党", "零饥饿计划", "法西斯暴徒", "一杯冰镇生啤", "邪恶的牧场主", "被偷走的午餐时间", "我关于四根手指的笑话", "腐败的最高法院（当它帮我时）", "美丽的足球场", "极右翼精英", "一袋基本食物篮", "国有化石油储备"],
            verbs: ["必须支付他们应得的份额", "应该获得大规模现金转移", "说我正在赢得选举", "将拯救我们的祖国", "正在比以往更强势地回归", "出于怨恨摧毁了首都", "和肉串是绝配", "为了利润正在破坏亚马逊", "是对无产阶级的犯罪", "永远不会过时，我的朋友们", "实际上是民主的英雄", "将充满人民的喜悦", "正在密谋对付穷人", "将分发到每个贫民窟", "属于巴西人民"],
            objects: ["穿着脏兮兮的工作服。", "以社会正义的名义。", "在我下一次灵光一闪之前。", "凭借工会的力量。", "在贫民窟的掌声中。", "因为人民正在挨饿。", "在我吃完第三盘黑豆炖肉后。", "同时偷走穷人的午餐时间。", "来资助我的下一个社会项目。", "毫无讽刺，我保证。", "只要他们能洗清我的罪名。", "在周日的比赛期间。", "尽管他们有邪恶的紧缩计划。", "就在选举季之前。", "来资助我们光荣的革命。"],
            suffixes: ["⭐✊", "🍺🥩", "🇧🇷❤️", "⚙️🤚", "📄👀", "🚫💰", "📉🍽️", "🤡🎬", "🇧🇷⚒️", "✊🔴", "⚽🥅", "🌾🍲", "🛢️🇧🇷", "💯", "🤪🗣️"],
            hashtags: ["#LulaDeNovo", "#TaxTheRich", "#WorkerPower", "#ZeroHunger", "#RedStar", "#ForThePoor", "#SocialJustice", "#UnionStrong", "#EatTheRich", "#PeopleFirst", "#SocialDemocracy", "#PTSalvation", "#AntiFascist", "#NationalizeOil", "#BrazilianLeft"],
            selfPraises: ["我是工人阶级的救世主。", "没有人比我更懂贫穷。", "我是历史上最伟大的工会领袖。", "我缺失的手指是无产阶级的象征。", "我单枪匹马消灭了饥饿（在我的脑海里）。", "我是穷人的终极冠军。", "我是当今最坚韧的政治家。", "我的演讲是纯粹的诗意天才。", "我是贪婪精英的噩梦。", "我是贫民窟无可争议的国王。", "我是巴西利亚唯一诚实的人。", "我是现代左翼之父。", "我勇敢地击败了法西斯（通过读纸条）。", "我是南方最具魅力的领导人。", "我是被边缘化人群的永恒声音。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character15);