const Character16 = {
    id: 16,
    name: 'Uncle Malarkey',
    handle: '@UncleMalarkey',
    baseLocale: 'en',
    followers: 38000000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
        <rect x="0" y="0" width="48" height="48" fill="#0A3161"/>
        <path d="M10 12 H22 V18 H10 Z M26 12 H38 V18 H26 Z" fill="#D4AF37" stroke="#000" stroke-width="1.5"/>
        <circle cx="16" cy="15" r="4" fill="#000" opacity="0.5"/>
        <circle cx="32" cy="15" r="4" fill="#000" opacity="0.5"/>
        <path d="M22 15 H26" stroke="#000" stroke-width="1.5"/>
        <path d="M18 30 Q24 24 30 30 L28 36 Q24 38 20 36 Z" fill="#fff" stroke="#B22234" stroke-width="1.5"/>
    </svg>`,
    locales: {
        en: {
            prefixes: ["Listen here, Jack,", "Here's the deal,", "No malarkey, folks,", "Let me be clear, not a joke,", "During the Great Depression,", "I'll whisper this to you,", "Unlike my predecessor,", "After my afternoon nap,", "According to my teleprompter,", "Folks, I kid you not,", "As I told Barack,", "Looking past the reporters,", "In my Scranton days,", "With my aviators on,", "To all you towel-snappers,", "Before I forget what I'm saying,"],
            subjects: ["the Amtrak conductor", "a double scoop of chocolate chip", "the ghost of Corn Pop", "the 81 million votes", "the working class folks", "my boss Barack Obama", "the bad folks on the other side", "the economy under my predecessor", "a shiny new ice cream cone", "the blinking teleprompter", "the dog Major biting a Secret Service agent", "my favorite hairy legs in the pool", "the voters in the state of... uh...", "the empty chair at the debate", "the millions of new jobs", "the Russian leader, uh, Putin"],
            verbs: ["is a bunch of malarkey", "deserves a 6pm bedtime", "tastes like pure Scranton", "are the most extensive fraud in history", "just want a fair shot", "is my real boss", "are trying to steal your democracy", "was strong as an ox", "melts faster than the polls", "tells me to pivot to the center", "deserves a good pardon", "got the roaches running", "is a place I can't remember", "represents the soul of America", "are created by my magic pen", "is a killer with no soul"],
            objects: ["while sniffing a kid's hair.", "in my shiny aviator sunglasses.", "before falling up the Air Force One stairs.", "with all due respect, man.", "during a 4pm press conference.", "while wandering off the stage.", "and I mean that from the bottom of my heart.", "while eating a vanilla cone.", "until Jill tells me to stop.", "because Corn Pop said so.", "with a blank stare into the camera.", "during the long Delaware winter.", "while forgetting my own name.", "and that's no joke, folks.", "with my signature creepy whisper.", "before the nursing home calls."],
            suffixes: ["🕶️🍦", "🤫😴", "🚂🇺🇸", "🗣️👴", "🇺🇸🔵", "🤡🥄", "🚫🧠", "📉📈", "🥱💤", "👀🐕", "🤝 Barack", "🧊🌍", "🚫malarkey", "🥄🍦", "🤷‍♂️", "🗽"],
            hashtags: ["#NoMalarkey", "#IceCreamPresident", "#AmtrakJoe", "#BuildBackBlinker", "#CornPop", "#ScrantonValues", "#FallingUpStairs", "#WhereAmI", "#TheBigGuy", "#DarkBrandon", "#SniffSniff", "#NappyTime", "#Bidenomics", "#TeleprompterPresident", "#ObamaThirdTerm", "#81Million"],
            selfPraises: ["I am the most articulate president ever.", "I single-handedly beat Corn Pop.", "I am the Amtrak whisperer.", "My ice cream taste is unmatched.", "I am the grandfather of the nation.", "Nobody whispers like I do.", "I fixed the economy in my sleep.", "I am the master of the aviators.", "I have the best memory since Roosevelt.", "I am the ultimate unifier of ice cream flavors.", "I am the bravest stair-climber alive.", "I took on the mega-MAGA and won.", "I am the smartest guy in Delaware.", "Nobody handles a spoon like I do.", "I am the true heir to Obama's legacy.", "I am the most energetic 80-year-old."]
        },
        ru: {
            prefixes: ["Слушай сюда, Джек,", "Вот в чем суть,", "Никакой чепухи, народ,", "Позвольте быть ясным, это не шутка,", "Во время Великой депрессии,", "Я прошепчу это тебе на ухо,", "В отличие от моего предшественника,", "После моего дневного сна,", "Согласно моему суфлеру,", "Ребята, я не шучу,", "Как я сказал Бараку,", "Глядя поверх репортеров,", "В мои Скрантонские деньки,", "С моими солнцезащитными очками,", "Всем вам, любителям полотенец,", "Пока я не забыл, что говорил,"],
            subjects: ["проводник Амтрака", "двойной шарик шоколадного мороженого", "призрак Корн Попа", "81 миллион голосов", "трудяги из рабочего класса", "мой босс Барак Обама", "плохие парни с другой стороны", "экономика при моем предшественнике", "блестящий новый рожок мороженого", "мигающий суфлер", "пес Мейджор, кусающий агента Секретной службы", "мои любимые волосатые ноги в бассейне", "избиратели в штате... эээ...", "пустой стул на дебатах", "миллионы новых рабочих мест", "российский лидер, эм, Путин"],
            verbs: ["это полная чепуха", "заслуживает отбоя в 6 вечера", "на вкус как чистый Скрантон", "самая масштабная фальсификация в истории", "просто хотят справедливого шанса", "мой настоящий босс", "пытаются украсть вашу демократию", "была крепкой как бык", "тает быстрее, чем рейтинги", "велит мне сдвинуться к центру", "заслуживает хорошего помилования", "заставила тараканов разбежаться", "место, которое я не могу вспомнить", "представляет душу Америки", "создаются моей волшебной ручкой", "убийца без души"],
            objects: ["пока нюхаю волосы ребенка.", "в моих блестящих очках-авиаторах.", "прежде чем упасть по лестнице Air Force One.", "со всем уважением, мужик.", "во время пресс-конференции в 4 часа дня.", "пока ухожу со сцены.", "и я говорю это от всего сердца.", "поедая ванильный рожок.", "пока Джилл не скажет мне остановиться.", "потому что Корн Поп так сказал.", "с пустым взглядом в камеру.", "в течение долгой делавэрской зимы.", "пока забываю свое имя.", "и это не шутка, народ.", "с моим фирменным жутким шепотом.", "пока не позвонили из дома престарелых."],
            suffixes: ["🕶️🍦", "🤫😴", "🚂🇺🇸", "🗣️👴", "🇺🇸🔵", "🤡🥄", "🚫🧠", "📉📈", "🥱💤", "👀🐕", "🤝 Barack", "🧊🌍", "🚫malarkey", "🥄🍦", "🤷‍♂️", "🗽"],
            hashtags: ["#NoMalarkey", "#IceCreamPresident", "#AmtrakJoe", "#BuildBackBlinker", "#CornPop", "#ScrantonValues", "#FallingUpStairs", "#WhereAmI", "#TheBigGuy", "#DarkBrandon", "#SniffSniff", "#NappyTime", "#Bidenomics", "#TeleprompterPresident", "#ObamaThirdTerm", "#81Million"],
            selfPraises: ["Я самый красноречивый президент за всю историю.", "Я в одиночку победил Корн Попа.", "Я шептун Амтрака.", "Мой вкус к мороженому не имеет себе равных.", "Я дедушка нации.", "Никто не шепчет так, как я.", "Я починил экономику во сне.", "Я повелитель авиаторов.", "У меня лучшая память со времен Рузвельта.", "Я абсолютный объединитель вкусов мороженого.", "Я самый смелый ходок по лестницам.", "Я бросил вызов мега-МАГА и победил.", "Я самый умный парень в Делавэре.", "Никто так не управляется с ложкой, как я.", "Я истинный наследник наследия Обамы.", "Я самый энергичный 80-летний."]
        },
        zh: {
            prefixes: ["听着，杰克，", "事情是这样的，", "别胡扯了，乡亲们，", "让我说清楚，这不是开玩笑，", "在大萧条时期，", "我会小声告诉你，", "与我的前任不同，", "在我下午小睡之后，", "根据我的提词器，", "伙计们，我没开玩笑，", "正如我告诉巴拉克的那样，", "越过记者们看过去，", "在斯克兰顿的那些日子，", "戴上我的飞行员墨镜，", "致所有爱抖机灵的家伙，", "趁我还没忘记我在说什么，"],
            subjects: ["美铁列车长", "双球巧克力碎冰淇淋", "玉米爆的鬼魂", "8100万张选票", "工薪阶层的人们", "我的老板巴拉克·奥巴马", "另一边的坏人", "我前任治下的经济", "一个闪亮的新冰淇淋甜筒", "闪烁的提词器", "咬了特勤局特工的狗少校", "我在泳池里最爱的长毛腿", "那个...呃...州的选民", "辩论中的空椅子", "数以百万计的新工作岗位", "俄罗斯领导人，呃，普京"],
            verbs: ["是一堆胡扯", "应该在下午6点上床睡觉", "尝起来像纯正的斯克兰顿", "是历史上最大规模的舞弊", "只是想要一个公平的机会", "才是我真正的老板", "正试图偷走你们的民主", "曾经像牛一样强壮", "比民调数字融化得还快", "告诉我要转向中间立场", "应该得到一个好的特赦", "让蟑螂四处逃窜", "是一个我不记得的地方", "代表着美国的灵魂", "由我的神奇钢笔创造", "是一个没有灵魂的杀手"],
            objects: ["同时闻着小孩的头发。", "戴着闪亮的飞行员墨镜。", "在摔下空军一号的台阶之前。", "带着所有的敬意，老兄。", "在下午4点的新闻发布会上。", "同时走下舞台。", "而且是发自内心的。", "同时吃着香草甜筒。", "直到吉尔叫我停下来。", "因为玉米爆是这么说的。", "茫然地盯着镜头。", "在漫长的特拉华州冬天里。", "同时忘记了自己的名字。", "而且这不是开玩笑，乡亲们。", "用我标志性的令人毛骨悚然的耳语。", "在养老院打电话来之前。"],
            suffixes: ["🕶️🍦", "🤫😴", "🚂🇺🇸", "🗣️👴", "🇺🇸🔵", "🤡🥄", "🚫🧠", "📉📈", "🥱💤", "👀🐕", "🤝 Barack", "🧊🌍", "🚫malarkey", "🥄🍦", "🤷‍♂️", "🗽"],
            hashtags: ["#NoMalarkey", "#IceCreamPresident", "#AmtrakJoe", "#BuildBackBlinker", "#CornPop", "#ScrantonValues", "#FallingUpStairs", "#WhereAmI", "#TheBigGuy", "#DarkBrandon", "#SniffSniff", "#NappyTime", "#Bidenomics", "#TeleprompterPresident", "#ObamaThirdTerm", "#81Million"],
            selfPraises: ["我是历史上最雄辩的总统。", "我单枪匹马打败了玉米爆。", "我是美铁的耳语者。", "我对冰淇淋的品味是无与伦比的。", "我是这个国家的祖父。", "没有人能像我一样耳语。", "我在睡梦中修好了经济。", "我是飞行员墨镜的大师。", "我有自罗斯福以来最好的记忆力。", "我是冰淇淋口味的终极统一者。", "我是最勇敢的爬楼梯者。", "我迎战了超级MAGA并赢了。", "我是特拉华州最聪明的人。", "没有人能像我一样拿勺子。", "我是奥巴马遗产的真正继承人。", "我是最精力充沛的80岁老人。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character16);