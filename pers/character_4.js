// === CHARACTER DATA: X ===
// Описание персонажа: Сатирический прототип либертарианского политика (Хавьер Милей). Упоротый анкап, фанат бензопил, Мюррея Ротбарда и уничтожения государства.

const Character4 = {
    id: '4',
    name: 'AnarchoChainsaw',
    handle: '@AnCapChainsaw',
    baseLocale: 'en',
    followers: 5000000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
    <rect x="0" y="0" width="48" height="48" fill="#111111"/>
    <path d="M14,38 C14,28 22,28 24,22 C26,16 20,12 24,8 C27,5 32,8 30,12 C28,16 34,20 30,26 C26,32 34,36 34,38" fill="none" stroke="#FFD700" stroke-width="5" stroke-linecap="round"/>
    <polygon points="32,6 36,10 30,10" fill="#FFD700"/>
</svg>`,
    locales: {
        en: {
            prefixes: ["ATTENTION!", "Listen up, parasites.", "By the almighty market,", "VIVA LA LIBERTAD CARAJO!", "Let me be clear,", "While the Keynesians cry,", "Enough of the useless political caste!", "As Murray Rothbard taught us,", "Grab the chainsaw,", "In a truly free society,", "Look at the degenerate leftists,", "After privatizing my grandmother,", "Against all logic of the state,", "To save the peso,", "I am the President,"],
            subjects: ["the central bank", "the corrupt political caste", "every single ministry", "the commie academia", "taxes on success", "the fiat money printer", "the evil Keynesian animals", "the Ministry of Education", "public spending", "the parasitic elites", "collectivism", "the socialist policies", "inflation", "my trusty chainsaw", "the free market"],
            verbs: ["will be destroyed", "is getting atomized", "must be abolished", "will be privatized immediately", "deserves a good chainsawing", "is going to the garbage bin of history", "will bleed out", "will be replaced by pure competition", "is getting blown up", "will be sold for dollars", "shall perish", "is being mercilessly defunded", "will be eradicated", "is burning in the fires of liberty", "will make us all trillionaires"],
            objects: ["with extreme prejudice.", "for the glory of capitalism.", "and there is nothing the left can do.", "while Murray Rothbard smiles from heaven.", "to establish Ancapistan.", "because taxes are theft.", "using the holy chainsaw.", "without any state intervention.", "because the market is always right.", "and replacing it with a private corporation.", "to end poverty forever.", "with a massive deregulation blast.", "because socialism is a cancer.", "for the absolute freedom of the individual.", "and selling the parts for Bitcoin."],
            suffixes: ["Period.", "Amen.", "Make Argentina Capitalist Again.", "End the Fed.", "Long live profit.", "Buy my meme coin.", "Down with the caste!", "Reject modernity, embrace anarcho-capitalism.", "Slash, slash, slash!", "The market will provide.", "Taxation is theft.", "I am a lion, not a sheep.", "Gold and guns.", "Freedom knows no limits.", "Watch out, commies."],
            hashtags: ["#VivaLaLibertadCarajo", "#AnCap", "#ChainsawTime", "#EndTheFed", "#TaxationIsTheft", "#AustrianEconomics", "#FuckTheCaste", "#MileiIsMyPresident", "#FreeMarketFetish", "#BitcoinStandard", "#Dollarize", "#RothbardWasRight", "#PrivatizeEverything", "#AntiCommunist", "#LibertyOrDeath"],
            selfPraises: ["I am the greatest economist in history.", "Only I can save this country from ruin.", "My chainsaw is sharper than a socialist's mind.", "I am the Messiah of the free market.", "No one understands money better than me.", "I am a literal lion of liberty.", "My deregulation skills are unmatched.", "I am the final boss of the political caste.", "God himself chose me to cut taxes.", "I am the first true anarcho-capitalist president.", "My IQ is purely unregulated.", "I am the only one with the balls to do this.", "I defeated communism just by existing.", "My haircut is worth more than the state's reserves.", "I am the human embodiment of the invisible hand."]
        },
        ru: {
            prefixes: ["ВНИМАНИЕ!", "Слушайте сюда, паразиты.", "Именем всемогущего рынка,", "ВИВА ЛА ЛИБЕРТАД КАРAХО!", "Дайте прояснить!", "Пока кейнсианцы рыдают,", "Хватит терпеть продажную касту!", "Как учил нас Мюррей Ротбард.", "Хватай бензопилу,", "В по-настоящему свободном обществе,", "Посмотрите на этих дегенератов слева.", "После приватизации моей бабушки,", "Вопреки всей логике государства,", "Чтобы спасти песо,", "Я ваш Президент,"],
            subjects: ["центральный банк", "коррумпированная политическая каста", "каждое министерство", "комми-академики", "налоги на успех", "станок фиатных денег", "злые кейнсианские звери", "Министерство образования", "госрасходы", "паразитические элиты", "коллективизм", "социалистическая политика", "инфляция", "моя верная бензопила", "свободный рынок"],
            verbs: ["будет уничтожен", "будет атомизирован", "должен быть упразднен", "будет немедленно приватизирован", "заслуживает хорошего удара бензопилой", "отправляется на свалку истории", "истечет кровью", "будет заменен чистой конкуренцией", "взрывается прямо сейчас", "будет продан за доллары", "исчезнет навсегда", "безжалостно лишается финансирования", "будет искоренен", "горит в огне свободы", "сделает нас всех триллионерами"],
            objects: ["с особой жестокостью.", "во славу капитализма.", "и леваки ничего не смогут сделать.", "пока Мюррей Ротбард улыбается с небес.", "чтобы построить Анкапистан.", "потому что налоги — это кража.", "с помощью святой бензопилы.", "без вмешательства государства.", "потому что рынок всегда прав.", "и на его месте будет частная корпорация.", "чтобы навсегда покончить с бедностью.", "взрывной волной дерегулирования.", "потому что социализм — это рак.", "ради абсолютной свободы личности.", "а запчасти будут проданы за биткоины."],
            suffixes: ["Точка.", "Аминь.", "Сделаем Аргентину Капиталистической Снова.", "Прикончим ФРС.", "Да здравствует прибыль.", "Покупайте мой мем-коин.", "Долой касту!", "Отвергни современность, прими анархо-капитализм.", "Вжик, вжик, вжик!", "Рынок все устроит.", "Налоги — это кража.", "Я лев, а не овца.", "Золото и стволы.", "Свобода не знает границ.", "Берегитесь, коммуняки."],
            hashtags: ["#VivaLaLibertadCarajo", "#AnCap", "#ChainsawTime", "#EndTheFed", "#TaxationIsTheft", "#AustrianEconomics", "#FuckTheCaste", "#MileiIsMyPresident", "#FreeMarketFetish", "#BitcoinStandard", "#Dollarize", "#RothbardWasRight", "#PrivatizeEverything", "#AntiCommunist", "#LibertyOrDeath"],
            selfPraises: ["Я величайший экономист в истории.", "Только я могу спасти эту страну от краха.", "Моя бензопила острее, чем мозг социалиста.", "Я Мессия свободного рынка.", "Никто не понимает деньги лучше меня.", "Я буквально лев свободы.", "Мои навыки дерегулирования не имеют равных.", "Я финальный босс для политической касты.", "Сам Бог выбрал меня резать налоги.", "Я первый настоящий анархо-капиталистический президент.", "Мой IQ абсолютно ничем не регулируется.", "Я единственный, у кого хватает яиц на это.", "Я победил коммунизм одним своим существованием.", "Моя стрижка стоит больше, чем резервы государства.", "Я человеческое воплощение невидимой руки."]
        },
        zh: {
            prefixes: ["注意！", "听好了，寄生虫们。", "以全能的市场之名，", "自由万岁，妈的！", "让我说清楚，", "当凯恩斯主义者还在哭泣时，", "受够了无用的政治种姓！", "正如默里·罗斯巴德教导我们的。", "拿起电锯，", "在一个真正自由的社会里，", "看看那些堕落的左派，", "在把我的祖母私有化之后，", "违背国家的一切逻辑，", "为了拯救比索，", "我是总统，"],
            subjects: ["中央银行", "腐败的政治种姓", "每一个部委", "共产党学术界", "对成功征收的税", "法币印钞机", "邪恶的凯恩斯主义禽兽", "教育部", "公共支出", "寄生精英", "集体主义", "社会主义政策", "通货膨胀", "我可靠的电锯", "自由市场"],
            verbs: ["将被摧毁", "将被原子化", "必须被废除", "将被立即私有化", "理应被电锯好好锯一下", "正走向历史的垃圾堆", "将流血殆尽", "将被纯粹的竞争取代", "正在被炸毁", "将被换成美元", "必将灭亡", "正在被无情地断绝资金", "将被根除", "正在自由的烈火中燃烧", "将让我们都成为万亿富翁"],
            objects: ["带着极端的偏见。", "为了资本主义的荣耀。", "左派对此无能为力。", "而默里·罗斯巴德在天上微笑。", "以建立安卡帕斯坦。", "因为税收就是盗窃。", "使用神圣的电锯。", "没有任何国家干预。", "因为市场永远是正确的。", "并用一家私人公司取代它。", "永远终结贫困。", "伴随着大规模放松管制的冲击。", "因为社会主义是癌症。", "为了个人的绝对自由。", "零件将被卖成比特币。"],
            suffixes: ["句号。", "阿门。", "让阿根廷再次资本主义化。", "终结美联储。", "利润万岁。", "买我的模因币。", "打倒种姓！", "拒绝现代性，拥抱无政府资本主义。", "锯，锯，锯！", "市场会提供的。", "税收就是盗窃。", "我是狮子，不是绵羊。", "黄金与枪支。", "自由无极限。", "小心点，共产分子。"],
            hashtags: ["#VivaLaLibertadCarajo", "#AnCap", "#ChainsawTime", "#EndTheFed", "#TaxationIsTheft", "#AustrianEconomics", "#FuckTheCaste", "#MileiIsMyPresident", "#FreeMarketFetish", "#BitcoinStandard", "#Dollarize", "#RothbardWasRight", "#PrivatizeEverything", "#AntiCommunist", "#LibertyOrDeath"],
            selfPraises: ["我是历史上最伟大的经济学家。", "只有我能拯救这个国家免于毁灭。", "我的电锯比社会主义者的头脑更锋利。", "我是自由市场的弥赛亚。", "没有人比我更懂金钱。", "我简直是自由的雄狮。", "我的放松管制技能无人能及。", "我是政治种姓的最终BOSS。", "上帝亲自选择我来减税。", "我是第一位真正的无政府资本主义总统。", "我的智商完全不受监管。", "我是唯一有胆量这么做的人。", "我仅凭存在就击败了共产主义。", "我的发型比国家储备还值钱。", "我是无形之手的化身。"]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character4);