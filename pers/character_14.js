// === CHARACTER DATA: 14 ===
// Описание персонажа: Сатирический прототип - центр-левая политик, любительница диаграмм Венна, "словесных салатов", смеха в неловкий момент и желтых школьных автобусов.

const Character14 = {
    id: 14,
    name: 'Veep Word Salad',
    handle: '@WordSaladChef',
    baseLocale: 'en',
    followers: 19500000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
        <rect x="0" y="0" width="48" height="48" fill="#2E2B5F"/>
        <circle cx="24" cy="24" r="14" fill="#B045F0" opacity="0.6"/>
        <circle cx="24" cy="30" r="3" fill="#fff"/>
        <circle cx="20" cy="32" r="3" fill="#fff"/>
        <circle cx="28" cy="32" r="3" fill="#fff"/>
        <circle cx="16" cy="29" r="3" fill="#fff" opacity="0.8"/>
        <circle cx="32" cy="29" r="3" fill="#fff" opacity="0.8"/>
        <circle cx="24" cy="24" r="14" stroke="#00FF00" stroke-width="2" fill="none"/>
    </svg>`,
    locales: {
        en: {
            prefixes: ["So, let me be clear,", "To the working families,", "As a former prosecutor,", "Looking at the Venn diagram,", "In the context of the passage of time,", "Unburdened by what has been,", "I grew up in a community of folks,", "With all due respect, I'm speaking,", "To my sorority sisters,", "When we think about the moment,", "Frankly, the significance of it all,", "As the first to do this,", "Listen, here's the thing,", "According to the yellow school bus initiative,", "During my recent flight on Air Force Two,", "Let me break it down for you,"],
            subjects: ["the passage of time", "the Venn diagram of demographics", "a falling coconut tree", "the significance of the moment", "the unburdened future", "my signature nervous laugh", "the electric yellow school buses", "the southern border crisis", "the historic nature of my appointment", "the word salad I just served", "the community of folks", "the marginalized small businesses", "my high staff turnover rate", "the roots of the coconut tree", "the context of the history", "the joy of the administration"],
            verbs: ["is what can be", "needs to be put in a chart", "hit me on the head", "requires us to march forward", "must be unburdened", "fills the awkward silence perfectly", "will save our children", "has been completely solved by me", "is a groundbreaking achievement", "makes zero sense to anyone", "is exactly where I come from", "deserves our immediate circular talking", "is passing right now", "proves I am the most qualified", "gives me great historical joy", "is very, very significant"],
            objects: ["in a completely circular sentence.", "while I cackle into the microphone.", "with zero clear policy points.", "because I am speaking right now.", "before the next high-dollar fundraiser.", "under the shade of the coconut tree.", "with the help of my trusty teleprompter.", "for the hardworking working families.", "in a completely historic first.", "while nervously adjusting my pearls.", "because words actually have meaning.", "during a totally unrelated press conference.", "with the utmost historical significance.", "to the absolute joy of the White House.", "for the sake of the passage of time.", "with a big smile and a nod."],
            suffixes: ["🥥🌴", "📊💡", "😂🎙️", "🚌💛", "⚖️🇺🇸", "🗣️💅", "⏳🕰️", "🤷‍♀️", "🇺🇸🔵", "🎓🤝", "📉🥗", "👀", "🚫🛑", "🤡🎭", "💯", "😂"],
            hashtags: ["#Unburdened", "#CoconutTree", "#VennDiagram", "#ImSpeaking", "#PassageOfTime", "#WordSalad", "#WorkingFamilies", "#YellowBuses", "#FirstButNotLast", "#Cackle", "#BlueWave", "#SignificantMoment", "#SororitySister", "#TimeIsPassing", "#JoyfulLaughter", "#Historic"],
            selfPraises: ["I am the master of the word salad.", "Nobody understands Venn diagrams like I do.", "My cackle is a national treasure.", "I am the most significant VP in history.", "I single-handedly defined the passage of time.", "I am the ultimate pioneer of circular speaking.", "My coconut tree metaphor changed the world.", "I am the most articulate politician alive.", "I bravely speak over male moderators.", "I am the true genius of the administration.", "I am the undisputed queen of being unburdened.", "Nobody laughs at funerals better than me.", "I am the savior of the electric school bus.", "I am the greatest prosecutor of the English language.", "I am a historic first in making zero sense.", "I am the voice of the community of folks."]
        },
        ru: {
            prefixes: ["Итак, позвольте мне прояснить,", "Трудящимся семьям скажу:", "Как бывший прокурор,", "Глядя на диаграмму Венна,", "В контексте хода времени,", "Свободные от того, что было,", "Я выросла в сообществе людей,", "При всем уважении, я говорю,", "Моим сестрам по женскому клубу:", "Когда мы думаем о моменте,", "Честно говоря, значимость всего этого", "Как первая, кто это делает,", "Слушайте, вот в чем суть:", "Согласно инициативе желтых школьных автобусов,", "Во время недавнего полета на борту номер два,", "Позвольте мне разложить это по полочкам,"],
            subjects: ["ход времени", "диаграмма Венна демографических групп", "падающее кокосовое дерево", "значимость момента", "свободное будущее", "моя фирменная нервная усмешка", "электрические желтые школьные автобусы", "кризис на южной границе", "исторический характер моего назначения", "словесный салат, который я только что подала", "сообщество людей", "маргинализированный малый бизнес", "высокая текучка моего персонала", "корни кокосового дерева", "контекст истории", "радость от администрации"],
            verbs: ["это то, чем может быть", "нужно поместить на график", "ударило меня по голове", "требует от нас идти вперед", "должно быть освобождено", "идеально заполняет неловкую тишину", "спасет наших детей", "было полностью решено мной", "является новаторским достижением", "не имеет никакого смысла для окружающих", "именно то, откуда я родом", "заслуживает нашего немедленного бесконечного обсуждения", "проходит прямо сейчас", "доказывает, что я самая квалифицированная", "дарит мне великую историческую радость", "это очень, очень значимо"],
            objects: ["в совершенно круговом предложении.", "пока я смеюсь в микрофон.", "с нулевым количеством конкретных политических шагов.", "потому что я сейчас говорю.", "перед следующим дорогим сбором средств.", "в тени кокосового дерева.", "с помощью моего верного суфлера.", "ради трудолюбивых трудящихся семей.", "абсолютно исторически впервые.", "нервно поправляя свое жемчужное ожерелье.", "потому что слова на самом деле имеют значение.", "во время совершенно не связанной пресс-конференции.", "с величайшей исторической значимостью.", "к абсолютной радости Белого дома.", "ради хода времени.", "с широкой улыбкой и кивком."],
            suffixes: ["🥥🌴", "📊💡", "😂🎙️", "🚌💛", "⚖️🇺🇸", "🗣️💅", "⏳🕰️", "🤷‍♀️", "🇺🇸🔵", "🎓🤝", "📉🥗", "👀", "🚫🛑", "🤡🎭", "💯", "😂"],
            hashtags: ["#Unburdened", "#CoconutTree", "#VennDiagram", "#ImSpeaking", "#PassageOfTime", "#WordSalad", "#WorkingFamilies", "#YellowBuses", "#FirstButNotLast", "#Cackle", "#BlueWave", "#SignificantMoment", "#SororitySister", "#TimeIsPassing", "#JoyfulLaughter", "#Historic"],
            selfPraises: ["Я мастер словесного салата.", "Никто не понимает диаграммы Венна так, как я.", "Мой смех — национальное достояние.", "Я самый значимый вице-президент в истории.", "Я в одиночку определила ход времени.", "Я абсолютный пионер круговой речи.", "Моя метафора о кокосовом дереве изменила мир.", "Я самый красноречивый политик из ныне живущих.", "Я смело перебиваю мужчин-модераторов.", "Я истинный гений этой администрации.", "Я бесспорная королева свободы от прошлого.", "Никто не умеет смеяться на похоронах лучше меня.", "Я спаситель электрического школьного автобуса.", "Я величайший прокурор английского языка.", "Я исторически первая в том, чтобы нести бессмыслицу.", "Я голос сообщества людей."]
        },
        zh: {
            prefixes: ["所以，让我澄清一下，", "致工薪家庭，", "作为一名前检察官，", "看着维恩图，", "在时间流逝的背景下，", "摆脱过去的负担，", "我在一个人们的社区长大，", "恕我直言，我正在说话，", "致我的姐妹会姐妹们：", "当我们思考这个时刻时，", "坦率地说，这一切的意义", "作为第一个这样做的人，", "听着，事情是这样的，", "根据黄色校车倡议，", "在我最近乘坐空军二号飞行时，", "让我为你分析一下，"],
            subjects: ["时间的流逝", "人口统计学的维恩图", "倒下的椰子树", "时刻的意义", "不受负担的未来", "我标志性的紧张笑声", "电动黄色校车", "南部边境危机", "我被任命的历史性质", "我刚端上的词语沙拉", "人们的社区", "被边缘化的小企业", "我极高的员工流失率", "椰子树的根", "历史的背景", "政府的喜悦"],
            verbs: ["是可以成为的", "需要被放进图表里", "砸在了我的头上", "要求我们向前迈进", "必须被卸下负担", "完美地填补了尴尬的沉默", "将拯救我们的孩子", "已经被我完全解决了", "是一项突破性成就", "对任何人来说都毫无意义", "正是我的出身之处", "需要我们立即进行圆桌谈话", "正在此刻流逝", "证明我是最合格的", "给了我巨大的历史喜悦", "是非常非常重大的"],
            objects: ["在一个完全循环的句子里。", "同时对麦克风咯咯笑。", "没有任何明确的政治要点。", "因为我现在正在说话。", "在下一次高级筹款活动之前。", "在椰子树的树荫下。", "在我可靠的提词器帮助下。", "为了辛勤工作的工薪家庭。", "以完全历史性的第一次。", "紧张地整理着我的珍珠项链。", "因为词语确实有意义。", "在一次完全不相关的新闻发布会上。", "带着最大的历史意义。", "给白宫带来绝对的喜悦。", "为了时间的流逝。", "带着灿烂的微笑和点头。"],
            suffixes: ["🥥🌴", "📊💡", "😂🎙️", "🚌💛", "⚖️🇺🇸", "🗣️💅", "⏳🕰️", "🤷‍♀️", "🇺🇸🔵", "🎓🤝", "📉🥗", "👀", "🚫🛑", "🤡🎭", "💯", "😂"],
            hashtags: ["#Unburdened", "#CoconutTree", "#VennDiagram", "#ImSpeaking", "#PassageOfTime", "#WordSalad", "#WorkingFamilies", "#YellowBuses", "#FirstButNotLast", "#Cackle", "#BlueWave", "#SignificantMoment", "#SororitySister", "#TimeIsPassing", "#JoyfulLaughter", "#Historic"],
            selfPraises: ["我是词语沙拉的大师。", "没有人比我更懂维恩图。", "我的笑声是国宝。", "我是历史上最具意义的副总统。", "我单枪匹马定义了时间的流逝。", "我是循环演讲的终极先锋。", "我的椰子树比喻改变了世界。", "我是当今最雄辩的政治家。", "我勇敢地打断男性主持人。", "我是本届政府的真正天才。", "我是摆脱过去负担的无争议女王。", "没有人比我更擅长在葬礼上大笑。", "我是电动校车的救世主。", "我是英语语言最伟大的检察官。", "我是毫无意义地说话的历史第一人。", "我是人们社区的声音。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character14);