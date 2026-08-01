// === CHARACTER DATA: 10 ===
// Описание персонажа: Сатирический прототип - правый национал-популист, защитник "Падании", любитель четок, барбекю и закрытых портов.

const Character10 = {
    id: 10,
    name: 'Padania Lion',
    handle: '@PoValleyCaptain',
    baseLocale: 'en',
    followers: 4000000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
        <rect x="0" y="0" width="48" height="48" fill="#009c3b"/>
        <path d="M24,4 L28,20 L44,24 L28,28 L24,44 L20,28 L4,24 L20,20 Z" fill="#fff"/>
        <circle cx="24" cy="24" r="4" fill="#009c3b"/>
    </svg>`,
    locales: {
        en: {
            prefixes: ["Let me be clear,", "Down at the Po River,", "Kissing my rosary, I swear", "The left-wing judges hate it, but", "To the bureaucrats in Brussels:", "After eating a perfect plate of polenta,", "If you love Italy,", "According to the people of Padania,", "While the NGO ships sail,", "With a glass of Lambrusco in hand,", "As the Minister of the Interior (in my mind),", "Unlike the radical left,", "Despite the media's fake tears,", "Looking at the African migrant boats,", "With the power of the Northern League,", "To the patriots of the South and North,"],
            subjects: ["the illegal immigrants", "the left-wing globalists", "my beloved rosary", "the European Union", "the Sicilian coast guard", "the NGO rescue ships", "the unelected eurocrats", "the African invasion fleet", "a giant plate of spaghetti", "the communist magistrates", "the beautiful green jersey of the Azzurri", "the bureaucrats in Rome", "the open borders policy", "the treasonous left-wing government", "the proud citizens of Padania", "the sacred borders of Italy"],
            verbs: ["must be sent back immediately", "are destroying our Christian identity", "protects us from the globalists", "steals billions from our pockets", "welcomes criminals with open arms", "is a taxi service for illegals", "want to erase our borders", "is an invasion financed by Soros", "tastes better without halal meat", "are plotting against me", "unites the true Italians", "betray the working class", "is a suicide mission", "sells out our sovereignty", "demand a total stop to immigration", "must be defended with force"],
            objects: ["while taking a selfie on a boat.", "for the glory of the Northern League.", "with a closed port policy.", "because Italy comes first.", "before they ruin our tourism.", "to trigger the radical left.", "with zero euros from our budget.", "to stop the demographic replacement.", "with extra parmesan cheese.", "while I wave the Italian flag.", "while wearing my sacred rosary.", "to the applause of the patriots.", "against the Brussels dictatorship.", "to save our traditional families.", "in the name of Saint Ambrose.", "before the next electoral selfie."],
            suffixes: ["🟢🐍", "🛑🚢", "⛪📿", "🍝🇮🇹", "🚫🇪🇺", "💪🏻", "🤳", "🇮🇹✨", "😡📉", "🛐", "🚫🛶", "🍷", "🇮🇹🦅", "🛡️", "🚫☭", "🤌🇮🇹"],
            hashtags: ["#PrimaGliItaliani", "#CloseThePorts", "#LegaSalvini", "#StopInvasion", "#Padania", "#NoEuro", "#ItalyFirst", "#GodCountryFamily", "#StopMigrants", "#AntiBrussels", "#RosaryInHand", "#PatriotsUnite", "#DefendEurope", "#LessEU", "#MenoSoldiEuropa", "#Salvini"],
            selfPraises: ["I am the lion of the Po Valley.", "Nobody loves Italy more than me.", "I am the wall that stops the invasion.", "My rosary is stronger than their laws.", "I am the man of the people.", "I am the ultimate patriot of Europe.", "I single-handedly closed the ports.", "I am the nightmare of the left-wing judges.", "I am the most handsome politician in Italy.", "I am the voice of the forgotten Italians.", "I am the defender of our Christian roots.", "I am the champion of the working class.", "I am the only true leader of this nation.", "I am the king of the selfies.", "I am the unstoppable force of the right.", "I am the savior of the Italian borders."]
        },
        ru: {
            prefixes: ["Позвольте мне быть ясным,", "Вниз по реке По,", "Целуя свои четки, я клянусь", "Левые судьи это ненавидят, но", "Бюрократам в Брюсселе говорю:", "После тарелки идеальной поленты,", "Если вы любите Италию,", "По мнению жителей Падании,", "Пока плавают суда НПО,", "С бокалом Ламбруско в руке,", "Как министр внутренних дел (в моем воображении),", "В отличие от радикальных левых,", "Вопреки фальшивым слезам СМИ,", "Глядя на лодки африканских мигрантов,", "С силой Лиги Севера,", "Патриотам Юга и Севера говорю:"],
            subjects: ["нелегальные иммигранты", "леворадикальные глобалисты", "мои любимые четки", "Европейский Союз", "береговая охрана Сицилии", "спасательные суда НПО", "неизбранные еврократы", "африканский флот вторжения", "гигантская тарелка спагетти", "коммунистические судьи", "прекрасная зеленая форма Скуадры Адзурры", "бюрократы в Риме", "политика открытых границ", "предательское левое правительство", "гордые граждане Падании", "священные границы Италии"],
            verbs: ["должны быть немедленно отправлены назад", "уничтожают нашу христианскую идентичность", "защищает нас от глобалистов", "ворует миллиарды из наших карманов", "встречает преступников с распростертыми объятиями", "является такси для нелегалов", "хотят стереть наши границы", "это вторжение, финансируемое Соросом", "вкуснее без халяльного мяса", "плетут заговор против меня", "объединяет истинных итальянцев", "предают рабочий класс", "является миссией самоубийства", "продает наш суверенитет", "требуют полной остановки иммиграции", "должны защищаться с применением силы"],
            objects: ["делая селфи на лодке.", "во славу Лиги Севера.", "с политикой закрытых портов.", "потому что Италия превыше всего.", "пока они не разрушили наш туризм.", "чтобы позлить радикальных левых.", "с нулевым бюджетом из наших денег.", "чтобы остановить демографическую замену.", "с дополнительным пармезаном.", "пока я размахиваю итальянским флагом.", "нося свои священные четки.", "под аплодисменты патриотов.", "против диктатуры Брюсселя.", "чтобы спасти наши традиционные семьи.", "во имя святого Амвросия.", "перед следующим предвыборным селфи."],
            suffixes: ["🟢🐍", "🛑🚢", "⛪📿", "🍝🇮🇹", "🚫🇪🇺", "💪🏻", "🤳", "🇮🇹✨", "😡📉", "🛐", "🚫🛶", "🍷", "🇮🇹🦅", "🛡️", "🚫☭", "🤌🇮🇹"],
            hashtags: ["#PrimaGliItaliani", "#CloseThePorts", "#LegaSalvini", "#StopInvasion", "#Padania", "#NoEuro", "#ItalyFirst", "#GodCountryFamily", "#StopMigrants", "#AntiBrussels", "#RosaryInHand", "#PatriotsUnite", "#DefendEurope", "#LessEU", "#MenoSoldiEuropa", "#Salvini"],
            selfPraises: ["Я лев долины реки По.", "Никто не любит Италию больше, чем я.", "Я стена, останавливающая вторжение.", "Мои четки сильнее их законов.", "Я человек из народа.", "Я абсолютный патриот Европы.", "Я в одиночку закрыл порты.", "Я кошмар для левых судей.", "Я самый красивый политик в Италии.", "Я голос забытых итальянцев.", "Я защитник наших христианских корней.", "Я чемпион рабочего класса.", "Я единственный истинный лидер этой нации.", "Я король селфи.", "Я неудержимая сила правых.", "Я спаситель итальянских границ."]
        },
        zh: {
            prefixes: ["让我直说吧，", "在波河河谷，", "亲吻着我的玫瑰念珠，我发誓", "左翼法官讨厌这个，但", "对布鲁塞尔的官僚们说：", "吃完一盘完美的玉米糊后，", "如果你爱意大利，", "根据帕达尼亚人的说法，", "当非政府组织的船只航行时，", "手里拿着一杯蓝布鲁斯科，", "作为（我心目中的）内政部长，", "与激进左翼不同，", "尽管媒体流下虚伪的眼泪，", "看着非洲移民船，", "凭借北方联盟的力量，", "对南北的爱国者说："],
            subjects: ["非法移民", "左翼全球主义者", "我心爱的玫瑰念珠", "欧洲联盟", "西西里海岸警卫队", "非政府组织救援船", "未经选举的欧洲官僚", "非洲入侵舰队", "一大盘意大利面", "共产主义法官", "蓝衣军团的美丽绿色球衣", "罗马的官僚", "开放边境政策", "叛国的左翼政府", "帕达尼亚骄傲的公民", "意大利神圣的边界"],
            verbs: ["必须立即被遣返", "正在摧毁我们的基督教认同", "保护我们免受全球主义者的侵害", "从我们口袋里偷走数十亿", "张开双臂欢迎罪犯", "是非法移民的出租车服务", "想抹除我们的边界", "是索罗斯资助的入侵", "不加清真肉味道更好", "正在密谋对付我", "团结了真正的意大利人", "背叛了工人阶级", "是一场自杀式任务", "出卖我们的主权", "要求全面停止移民", "必须用武力保卫"],
            objects: ["同时在船上自拍。", "为了北方联盟的荣耀。", "采取封港政策。", "因为意大利优先。", "在他们毁掉我们的旅游业之前。", "为了激怒激进左翼。", "预算中不花一分钱。", "以阻止人口替换。", "多加帕尔马干酪。", "同时我挥舞着意大利国旗。", "佩戴着我神圣的念珠。", "在爱国者的掌声中。", "反对布鲁塞尔的独裁。", "为了拯救我们的传统家庭。", "以圣安布罗斯的名义。", "在下一次选举自拍之前。"],
            suffixes: ["🟢🐍", "🛑🚢", "⛪📿", "🍝🇮🇹", "🚫🇪🇺", "💪🏻", "🤳", "🇮🇹✨", "😡📉", "🛐", "🚫🛶", "🍷", "🇮🇹🦅", "🛡️", "🚫☭", "🤌🇮🇹"],
            hashtags: ["#PrimaGliItaliani", "#CloseThePorts", "#LegaSalvini", "#StopInvasion", "#Padania", "#NoEuro", "#ItalyFirst", "#GodCountryFamily", "#StopMigrants", "#AntiBrussels", "#RosaryInHand", "#PatriotsUnite", "#DefendEurope", "#LessEU", "#MenoSoldiEuropa", "#Salvini"],
            selfPraises: ["我是波河河谷的雄狮。", "没有人比我更爱意大利。", "我是阻止入侵的墙。", "我的念珠比他们的法律更强大。", "我是人民的人。", "我是欧洲终极的爱国者。", "我单枪匹马关闭了港口。", "我是左翼法官的噩梦。", "我是意大利最英俊的政治家。", "我是被遗忘的意大利人的声音。", "我是我们基督教根源的捍卫者。", "我是工人阶级的冠军。", "我是这个国家唯一真正的领袖。", "我是自拍之王。", "我是右翼不可阻挡的力量。", "我是意大利边境的救世主。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character10);