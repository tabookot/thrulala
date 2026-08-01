// === CHARACTER DATA: 2 (Zhirinovsky) ===
// Полная база высказываний. Базовая локаль персонажа - ru.

const Character2 = {
    id: 2,
    name: 'Zhirinovsky',
    handle: '@zhirik',
    baseLocale: 'ru',
    followers: 1500000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
    <rect x="0" y="0" width="48" height="48" fill="#003399"/>
    <path d="M24,8 L28,19 L39,19 L30,25 L33,36 L24,30 L15,36 L18,25 L9,19 L20,19 Z" fill="#FFD700"/>
    <rect x="0" y="40" width="48" height="8" fill="#D52B1E"/>
    <rect x="0" y="37" width="48" height="3" fill="#FFFFFF"/>
</svg>`,
    locales: {
        ru: {
            prefixes: [
                "Я вам прямо скажу:","Пока правительство спит,","Если бы я был президентом,","Понимаете ли вы,",
                "Слушайте меня внимательно:","Американские ястребы думают, что","Русские мужики,","Завтра может быть поздно, но",
                "Я обещаю вам:","Сегодня в Госдуме я заявил, что","Пока пиндосы строят козни,","Великая Россия скажет:",
                "Если мы не одумаемся,","Я уже двадцать лет кричу:","Представьте себе,","Мои политические противники забыли, что",
                "С экранов телевизоров нам врут, а на самом деле","Пока чиновники воруют,","Мы дойдем до Индийского океана, и","Никто не хочет этого признать, но"
            ],
            subjects: [
                "гнилой Запад","проклятые пиндосы","наш великий народ","спящая Госдума","коррумпированный чиновник",
                "пятая колонна","русский солдат","либеральная интеллигенция","иностранные агенты","старая большевичка",
                "новые олигархи","вся эта Дума","агрессивный НАТОвский сапог","американский посол","простой русский мужик",
                "государственная машина","московская тусовка","наша святая Земля","кремлевские мечтатели","враги отечества",
                "мудрый избиратель","вся Европа","бандеровская хунта","наш дорогой премьер","вечный президент"
            ],
            verbs: [
                "уничтожит","защитит","поразит","прогонит","порвет на части",
                "умыет","прижмет к ногтю","отправит на нары","превратит в радиоактивный пепел","посадит в клетку",
                "продаст за бесценок","выбросит на свалку истории","заставит молиться","покорит","откупорит",
                "разорвет","поглотит","успокоит","обеспечит","похоронит"
            ],
            objects: [
                "нашу Родину","ихнюю демократию","всех пингвинов","коррупционеров","вражеских шпионов",
                "русский мир","бутылку водки","индийский океан","вашингтонских ястребов","независимую прессу",
                "наших женщин","ядерный чемоданчик","зарплату учителям","оцепенение в Госдуме","пасть акулы империализма",
                "зеленую мазуту","китайскую границу","полярного медведя","братский украинский народ","Калининград",
                "северный морской путь","прямые выборы","старые партбилеты","бочки с селедкой","лунную базу"
            ],
            suffixes: [
                "!!!","... Так точно!","... Конец эпохе!","... Я гарантирую!","... И никто не пикнет!",
                "... Это будет новый 37-й год!","... Мы дойдем до Калькутты!","... Плевать я хотел на их санкции!","... Россия вперед!","... Запомните этот день!",
                "... А вы смеетесь в камеру!","... Слюнки текут, да?","... Пусть только попробуют!","... Вот вам и ЛДПР!","... Мать русская, земля русская!",
                "... Американцы обосрались!","... Думайте своей головой!","... Пора валить лес и сажать картошку!","... Бандерлоги будут ползать в ногах!","... Вчера в бане мы это обсудили!"
            ],
            hashtags: [
                "#LDPR","#Russia","#Motherland","#Zhirik","#Truth","#IndianOcean","#WashFeet","#Putin","#Duma","#Empire",
                "#NoWest","#Vodka","#Patriot","#Future","#RedButton","#1999","#Bear","#Madman","#Victory","#Slavs",
                "#Kremlin","#DumaFun","#MotherRussia","#NoSanctions","#Calcutta"
            ],
            selfPraises: [
                "Я единственный, кто говорит правду в этой стране!!!",
                "Мой голос решает судьбы мира, запомните это!!!",
                "Пока я здесь, Россия будет спать спокойно!!!",
                "Я могу стать президентом хоть завтра, если захочу!!!",
                "Никто не знает Россию так, как я, потомственный дворянин!!!",
                "Мои прогнозы сбываются с точностью до 99 процентов!!!",
                "Если бы не я, вы бы все уже давно работали на американцев!!!",
                "Я — гений политической борьбы, мой отец был юристом, а мать — русской!!!",
                "Посмотрите на меня: 70 лет, а энергии больше, чем у любого двадцатилетнего!!!",
                "Моя программа спасет страну за три месяца, остальные могут только завидовать!!!",
                "Я уже смыл ноги в Индийском океане, а вы что сделали для Родины?!!!",
                "Я не боюсь никого: ни ЦРУ, ни ФСБ, ни даже тещу!!!",
                "Когда я говорю, в Вашингтоне трясутся стекла, это факт!!!",
                "Я — душа этой Госдумы, без меня тут просто скучный клуб пенсионеров!!!",
                "Мои книги читают больше, чем Библию, потому что там только правда!!!",
                "Мой танец на трибуне — это символ мощи великой России, поймите это!!!",
                "Я обещал вам водить в Кремль, и я туда вошел, а вы будете мыть мне ноги!!!",
                "Я тот самый сумасшедший, который спасет этот мир от ядерного огня!!!",
                "Никто не умеет так красиво ругаться матом, как я, это искусство высшего пилотажа!!!",
                "Мой автопробег — это подвиг, который впишут в учебники истории наряду с Батыем!!!"
            ]
        },
        en: {
            prefixes: [
                "I'll tell you straight:","While the government sleeps,","If I were president,","Do you understand,",
                "Listen to me carefully:","The American hawks think that","Russian men,","Tomorrow may be too late, but",
                "I promise you:","Today in the Duma I stated that","While the Yankees scheme,","Great Russia will say:",
                "If we don't come to our senses,","I've been screaming for twenty years:","Imagine,","My political opponents forgot that",
                "They lie to us from the TV screens, but in reality","While officials steal,","We will reach the Indian Ocean, and","Nobody wants to admit it, but"
            ],
            subjects: [
                "the rotten West","the cursed Yankees","our great people","the sleeping Duma","the corrupt official",
                "the fifth column","the Russian soldier","the liberal intelligentsia","foreign agents","the old Bolshevik woman",
                "the new oligarchs","this whole Duma","the aggressive NATO boot","the American ambassador","the simple Russian man",
                "the state machine","the Moscow crowd","our holy Land","the Kremlin dreamers","enemies of the fatherland",
                "the wise voter","all of Europe","the Bandera junta","our dear premier","the eternal president"
            ],
            verbs: [
                "will destroy","will protect","will strike","will chase away","will tear to pieces",
                "will wash the feet of","will nail down","will send to the slammer","will turn to radioactive ash","will put in a cage",
                "will sell for pennies","will throw on the trash heap of history","will force to pray","will conquer","will uncork",
                "will rip apart","will swallow","will calm down","will provide","will bury"
            ],
            objects: [
                "our Motherland","their democracy","all the penguins","corrupt officials","enemy spies",
                "the Russian world","a bottle of vodka","the Indian Ocean","the Washington hawks","the independent press",
                "our women","the nuclear briefcase","teachers' salaries","the paralysis in the Duma","the maw of the imperialist shark",
                "the green scum","the Chinese border","the polar bear","the fraternal Ukrainian people","Kaliningrad",
                "the Northern Sea Route","direct elections","old party cards","barrels of herring","the lunar base"
            ],
            suffixes: [
                "!!!","... Exactly right!","... End of an era!","... I guarantee it!","... And no one will squeak!",
                "... This will be a new 1937!","... We will reach Calcutta!","... I don't give a damn about their sanctions!","... Russia forward!","... Remember this day!",
                "... And you laugh on camera!","... Drooling, right?","... Let them just try!","... That's LDPR for you!","... Mother is Russian, the land is Russian!",
                "... The Americans crapped themselves!","... Use your own head!","... Time to chop wood and plant potatoes!","... The banderlogs will crawl at our feet!","... Yesterday in the bathhouse we discussed this!"
            ],
            hashtags: [
                "#LDPR","#Russia","#Motherland","#Zhirik","#Truth","#IndianOcean","#WashFeet","#Putin","#Duma","#Empire",
                "#NoWest","#Vodka","#Patriot","#Future","#RedButton","#1999","#Bear","#Madman","#Victory","#Slavs",
                "#Kremlin","#DumaFun","#MotherRussia","#NoSanctions","#Calcutta"
            ],
            selfPraises: [
                "I am the only one telling the truth in this country!!!",
                "My voice decides the fate of the world, remember that!!!",
                "While I am here, Russia will sleep peacefully!!!",
                "I can become president tomorrow if I want to!!!",
                "No one knows Russia like I do, a hereditary nobleman!!!",
                "My predictions come true with 99 percent accuracy!!!",
                "If not for me, you would all be working for the Americans long ago!!!",
                "I am a genius of political struggle, my father was a lawyer, and my mother was Russian!!!",
                "Look at me: 70 years old, but more energy than any twenty-year-old!!!",
                "My program will save the country in three months, the rest can only envy!!!",
                "I have already washed my feet in the Indian Ocean, and what have you done for the Motherland?!!!",
                "I am not afraid of anyone: not the CIA, not the FSB, not even my mother-in-law!!!",
                "When I speak, windows shake in Washington, that's a fact!!!",
                "I am the soul of this State Duma, without me it's just a boring club of pensioners!!!",
                "My books are read more than the Bible, because they contain only the truth!!!",
                "My dance on the podium is a symbol of the power of great Russia, understand this!!!",
                "I promised to lead you into the Kremlin, and I entered it, and you will wash my feet!!!",
                "I am the very madman who will save this world from nuclear fire!!!",
                "No one can swear so beautifully as I do, it's high art!!!",
                "My motor rally is a feat that will be written into history textbooks alongside Batu!!!"
            ]
        },
        zh: {
            prefixes: [
                "我直接告诉你们：","当政府在睡觉时，","如果我是总统，","你们明白吗，",
                "仔细听我说：","美国鹰派认为","俄罗斯男人们，","明天可能就太迟了，但是",
                "我向你们保证：","今天在国家杜马我声明","当美国佬在搞阴谋时，","伟大的俄罗斯会说：",
                "如果我们不醒悟，","我已经喊了二十年了：","想象一下，","我的政治对手忘了，",
                "他们从电视屏幕上对我们撒谎，但实际上","当官员们在偷窃时，","我们将打到印度洋，并且","没人想承认这一点，但是"
            ],
            subjects: [
                "腐朽的西方","被诅咒的美国佬","我们伟大的人民","沉睡的杜马","腐败的官员",
                "第五纵队","俄罗斯士兵","自由派知识分子","外国代理人","老布尔什维克妇女",
                "新寡头","整个杜马","侵略性的北约军靴","美国大使","普通的俄罗斯男人",
                "国家机器","莫斯科圈子","我们神圣的土地","克里姆林宫的梦想家","祖国的敌人",
                "明智的选民","整个欧洲","班德拉军政府","我们亲爱的总理","永远的总统"
            ],
            verbs: [
                "将摧毁","将保护","将打击","将驱逐","将撕成碎片",
                "将为其洗脚","将钉死","将送进监狱","将变成放射性灰烬","将关进笼子",
                "将贱卖","将扔进历史的垃圾堆","将强迫祈祷","将征服","将开启",
                "将撕裂","将吞噬","将使平静","将提供","将埋葬"
            ],
            objects: [
                "我们的祖国","他们的民主","所有企鹅","腐败分子","敌对间谍",
                "俄罗斯世界","一瓶伏特加","印度洋","华盛顿的鹰派","独立的新闻界",
                "我们的女人","核手提箱","教师的工资","杜马中的瘫痪","帝国主义鲨鱼的巨口",
                "绿色的浮渣","中国边界","北极熊","兄弟般的乌克兰人民","加里宁格勒",
                "北方海航道","直接选举","旧党证","鲱鱼桶","月球基地"
            ],
            suffixes: [
                "!!!","... 完全正确！","... 时代的终结！","... 我保证！","... 谁也不敢吱声！",
                "... 这将是新的37年！","... 我们将打到加尔各答！","... 我才不在乎他们的制裁！","... 俄罗斯前进！","... 记住这一天！",
                "... 你们在镜头前笑！","... 流口水了吧？","... 让他们试试看！","... 这就是自民党！","... 母亲是俄罗斯人，土地是俄罗斯的！",
                "... 美国人吓屎了！","... 用你们自己的脑子思考！","... 是时候砍树和种土豆了！","... 班德尔洛格将在我们脚下爬行！","... 昨天我们在澡堂讨论过这个！"
            ],
            hashtags: [
                "#LDPR","#Russia","#Motherland","#Zhirik","#Truth","#IndianOcean","#WashFeet","#Putin","#Duma","#Empire",
                "#NoWest","#Vodka","#Patriot","#Future","#RedButton","#1999","#Bear","#Madman","#Victory","#Slavs",
                "#Kremlin","#DumaFun","#MotherRussia","#NoSanctions","#Calcutta"
            ],
            selfPraises: [
                "我是这个国家唯一说实话的人！！！",
                "我的声音决定世界的命运，记住这点！！！",
                "只要我在，俄罗斯就能安然入睡！！！",
                "只要我愿意，我明天就能当总统！！！",
                "没人比我更懂俄罗斯，我是世袭贵族！！！",
                "我的预测有99%的准确率！！！",
                "如果不是我，你们早就都在给美国人打工了！！！",
                "我是政治斗争的天才，我父亲是律师，母亲是俄罗斯人！！！",
                "看看我：70岁了，但精力比任何20岁的人都旺盛！！！",
                "我的计划能在三个月内拯救国家，其他人只能嫉妒！！！",
                "我已经在印度洋洗过脚了，你们为祖国做了什么？！！！",
                "我谁也不怕：不怕CIA，不怕FSB，连丈母娘都不怕！！！",
                "我说话时，华盛顿的玻璃都在抖，这是事实！！！",
                "我是国家杜马的灵魂，没有我这里只是个无聊的养老院！！！",
                "我的书比圣经读的人还多，因为里面只有真相！！！",
                "我在讲台上的舞蹈是伟大俄罗斯力量的象征，明白吗！！！",
                "我承诺带你们进克里姆林宫，我进去了，你们要给我洗脚！！！",
                "我就是那个能从核火中拯救这个世界的疯子！！！",
                "没人能像我一样骂脏话骂得这么漂亮，那是高雅艺术！！！",
                "我的汽车拉力赛是壮举，将和拔都一起被写进历史教科书！！！"
            ]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character2);