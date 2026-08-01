// === CHARACTER DATA: 3 (The Patriot) ===
// База высказываний абстрактного русского патриота. Базовая локаль - ru.

const Character3 = {
    id: 3,
    name: 'Russian Patriot',
    handle: '@ru_patriot',
    baseLocale: 'ru',
    followers: 3500000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;"><rect x="0" y="0" width="48" height="16" fill="#FFFFFF"/><rect x="0" y="16" width="48" height="16" fill="#0039A6"/><rect x="0" y="32" width="48" height="16" fill="#D52B1E"/><text x="24" y="31" font-size="16" font-family="sans-serif" font-weight="bold" fill="#FFD700" text-anchor="middle">★</text></svg>`,
    locales: {
        ru: {
            prefixes: [
                "Судя по всему,","Западные кукловоды забывают, что","В свете последних событий,","Историческая реальность такова, что",
                "Если враг упорствует, то","Наш ответ будет асимметричным:","Пока заокеанские хозяева спят,","Вагнеры и срочники доказали, что",
                "Военные аналитики признают, что","Коллективный Запад глупо полагает, что","Как государственный деятель, я заявляю:","Очередная провокация НАТО показывает, что",
                "Смотрим в корень:","Стратегическое терпение Москвы не безгранично,","Сегодня мы наблюдаем агонию западной цивилизации,","Бывшие партнеры превратились в клоунов,",
                "Если прочесть Пентагонские доклады,","Российская мощь только крепнет,","Нам не нужны чужие земли, но","Реакция на наши мирные инициативы говорит о том, что"
            ],
            subjects: [
                "наш ядерный арсенал","зарвавшийся коллективный Запад","агрессивный блок НАТО","святая русская земля",
                "неонацистский режим в Киеве","американские ястребы","новый многополярный мир","московская выдержка",
                "фабрики мысли в Вашингтоне","европейские человечки-пигмеи","бездарная киевская хунта","наша непобедимая армия",
                "глобалистская элита","британские интриганы","наше высокоточное оружие","либеральные фанатики",
                "третья мировая война","отечественный ВПК","спящие террористические ячейки","бандеровская нечисть",
                "вечный союз России и Китая","арктический шельф","суверенный интернет","героическое ополчение",
                "рублевая зона"
            ],
            verbs: [
                "уничтожит","превратит в радиоактивный пепел","заставит замолчать","покарает",
                "сотрет с лица земли","отправит в небытие","разорвет на куски","приведет к краху",
                "защитит от гниения","выставит на посмешище","смоет в океан","подавит своим могуществом",
                "приведет к децентрализации","запустит необратимый процесс","парализует волю","поставит на колени",
                "оскорбляет","провоцирует","спонсирует","обречет на голод"
            ],
            objects: [
                "вашу гниющую империю","киевский режим","парад суверенитетов","третью мировую войну",
                "всю пятую колонну","ядерный гриб над Парижем","британскую корону","глобальный обвал рынков",
                "новый мировой порядок","нефтяное эмбарго","очередную партию Ф-16","бандеровских ублюдков",
                "радиоактивную пустошь","исландский саммит","биолаборатории Пентагона","отравленный чай",
                "русский мир","высшую меру возмездия","лунную базу НАСА","рублевый перевод",
                "американскую гегемонию","очередной пакет санкций","гей-парад в Берлине","канцлера с его шнапсом",
                "поля тонущей Европы"
            ],
            suffixes: [
                "!!!","... И это не шутка.","... Мы предупреждаем.","... Запомните это, господа.",
                "... Время дипломатии прошло.","... Готовьтесь к худшему.","... Это наш исторический долг.","... Боже, храни Россию.",
                "... Славься, Отечество!","... Таков путь.","... Никто не сможет это остановить.","... Альтернативы нет.",
                "... Конец истории.","... Задумайтесь, пока не поздно.","... Мы в ответе не будем.","... Хаос придет в ваши дома.",
                "... Как говорят классики.","... Занавес опускается.","... Но мы не унываем.","... На том стоим."
            ],
            hashtags: [
                "#Russia","#Patriot","#Multipolar","#Nuke","#VICTORY","#AntiWest","#Hypersonic","#Motherland","#Truth","#Empire",
                "#NoNATO","#Doomsday","#Sovereign","#RedButton","#WW3","#RedLine","#XiPutin","#Perimeter","#MotherRussia","#SecurityCouncil",
                "#EndOfEmpire","#PolarBear","#Bioweapons","#Orthodoxy","#Strategic"
            ],
            selfPraises: [
                "Мои предупреждения — это не просто слова, это констатация факта, который скоро настигнет наших врагов!!!",
                "В отличие от либеральных болтунов, я мыслю категориями тысячелетий и судеб цивилизаций!!!",
                "Я давно сказал, что Запад collapseнется, и вы видите, как сбываются мои пророчества!!!",
                "Наш арсенал обновлен на 91%, и это моя личная заслуга, как гаранта безопасности!!!",
                "Именно мы строим тот самый справедливый многополярный мир, о котором я писал в своих статьях!!!",
                "Мои оппоненты в Вашингтоне уже пишут мемуары о том, как они просчитались, не послушав нас!!!",
                "Историческая правота на нашей стороне, и я рад быть частью этого великого перехода!!!",
                "Мысли глобально — вот мой принцип, который позволяет видеть на 10 шагов вперед!!!",
                "Никакие санкции не сломят нас, потому что мы — носители истинного христианского духа!!!",
                "Я смотрю в экраны западных телеканалов и смеюсь над их наивностью и беспомощностью!!!",
                "Россия поднимается с колен, и я горжусь тем, что вкладываю свой кирпич в фундамент новой империи!!!",
                "Мои посты читают в Пентагоне с содроганием, потому что они понимают: это не блеф!!!",
                "Когда я говорю о радиоактивном пепле, это не метафора, а математически просчитанный сценарий!!!",
                "Мы не ищем конфликтов, но если придется, я первый нажму красную кнопку без раздумий!!!",
                "Наш ВПК работает как часы, и это результат грамотного управления, к которому я приложил руку!!!",
                "Я вдумчиво изучаю Махабхарату и понимаю, что мы выполняем свой долг перед Вселенной!!!",
                "Западные лидеры — это политические карлики, а мы стоим плечом к плечу с гигантами истории!!!",
                "Слава Богу, что у руля в трудное время стоят люди, мыслящие стратегически, как я!!!",
                "Мое терпение лопнуло давно, и я открыто говорю то, что другие боятся произнести вслух!!!",
                "Мы создаем новую реальность, где русскому патриоту уготовано место творца судеб!!!"
            ]
        },
        en: {
            prefixes: [
                "Judging by everything,","The Western puppeteers forget that","In light of recent events,","The historical reality is that",
                "If the enemy persists, then","Our response will be asymmetric:","While the overseas masters sleep,","The Wagnerites and conscripts proved that",
                "Military analysts admit that","The Collective West foolishly assumes that","As a statesman, I declare:","Another NATO provocation shows that",
                "Let's look at the root:","Moscow's strategic patience is not limitless,","Today we witness the agony of Western civilization,","Former partners have turned into clowns,",
                "If you read the Pentagon reports,","Russian power is only growing stronger,","We don't need foreign lands, but","The reaction to our peace initiatives shows that"
            ],
            subjects: [
                "our nuclear arsenal","the insolent Collective West","the aggressive NATO bloc","the holy Russian land",
                "the neo-Nazi regime in Kyiv","the American hawks","the new multipolar world","Moscow's restraint",
                "Washington think tanks","European pygmies","the inept Kyiv junta","our invincible army",
                "the globalist elite","British schemers","our high-precision weapons","liberal fanatics",
                "World War III","the domestic military-industrial complex","dormant terrorist cells","Bandera scum",
                "the eternal alliance of Russia and China","the Arctic shelf","the sovereign internet","the heroic militia",
                "the ruble zone"
            ],
            verbs: [
                "will destroy","will turn into radioactive ash","will silence","will punish",
                "will wipe off the face of the earth","will send into oblivion","will tear to pieces","will lead to the collapse of",
                "will protect from rotting","will make a laughing stock of","will wash into the ocean","will crush with its might",
                "will lead to decentralization","will launch an irreversible process","will paralyze the will of","will bring to its knees",
                "insults","provokes","sponsors","will doom to starvation"
            ],
            objects: [
                "your rotting empire","the Kyiv regime","the parade of sovereignties","World War III",
                "the entire fifth column","the nuclear mushroom over Paris","the British crown","the global market crash",
                "the new world order","the oil embargo","the next batch of F-16s","Bandera bastards",
                "the radioactive wasteland","the Iceland summit","Pentagon biolabs","the poisoned tea",
                "the Russian world","the highest measure of retribution","NASA's lunar base","the ruble transfer",
                "American hegemony","another sanctions package","the gay parade in Berlin","the Chancellor with his schnapps",
                "the fields of drowning Europe"
            ],
            suffixes: [
                "!!!","... And this is no joke.","... We warn you.","... Remember this, gentlemen.",
                "... The time for diplomacy has passed.","... Prepare for the worst.","... This is our historical duty.","... God, save Russia.",
                "... Glory to the Fatherland!","... Such is the way.","... No one will be able to stop this.","... There is no alternative.",
                "... The end of history.","... Think about it before it's too late.","... We will not be held responsible.","... Chaos will come to your homes.",
                "... As the classics say.","... The curtain falls.","... But we are not discouraged.","... We stand our ground."
            ],
            hashtags: [
                "#Russia","#Patriot","#Multipolar","#Nuke","#VICTORY","#AntiWest","#Hypersonic","#Motherland","#Truth","#Empire",
                "#NoNATO","#Doomsday","#Sovereign","#RedButton","#WW3","#RedLine","#XiPutin","#Perimeter","#MotherRussia","#SecurityCouncil",
                "#EndOfEmpire","#PolarBear","#Bioweapons","#Orthodoxy","#Strategic"
            ],
            selfPraises: [
                "My warnings are not just words, they are a statement of fact that will soon overtake our enemies!!!",
                "Unlike liberal chatterers, I think in categories of millennia and the fates of civilizations!!!",
                "I said long ago that the West would collapse, and you see my prophecies coming true!!!",
                "Our arsenal has been renewed by 91%, and this is my personal merit as a guarantor of security!!!",
                "It is we who are building that very fair multipolar world that I wrote about in my articles!!!",
                "My opponents in Washington are already writing memoirs about how they miscalculated by not listening to us!!!",
                "Historical rightness is on our side, and I am glad to be part of this great transition!!!",
                "Think globally — this is my principle, which allows me to see 10 steps ahead!!!",
                "No sanctions will break us, because we are the bearers of the true Christian spirit!!!",
                "I look at the screens of Western TV channels and laugh at their naivety and helplessness!!!",
                "Russia is rising from its knees, and I am proud to lay my brick in the foundation of the new empire!!!",
                "My posts are read in the Pentagon with a shudder, because they understand: this is not a bluff!!!",
                "When I speak of radioactive ash, it is not a metaphor, but a mathematically calculated scenario!!!",
                "We do not seek conflicts, but if necessary, I will be the first to press the red button without hesitation!!!",
                "Our military-industrial complex works like clockwork, and this is the result of competent management to which I lent a hand!!!",
                "I thoughtfully study the Mahabharata and understand that we are fulfilling our duty to the Universe!!!",
                "Western leaders are political dwarfs, and we stand shoulder to shoulder with the giants of history!!!",
                "Thank God that at the helm in difficult times are people who think strategically, like me!!!",
                "My patience snapped long ago, and I openly say what others are afraid to say out loud!!!",
                "We are creating a new reality, where the Russian patriot is destined to be the creator of fates!!!"
            ]
        },
        zh: {
            prefixes: [
                "从一切迹象来看，","西方的傀儡师们忘记了，","鉴于最近的事件，","历史的现实是，",
                "如果敌人执迷不悟，那么","我们的回应将是不对称的：","当跨大洋的主子们在睡觉时，","瓦格纳战士和义务兵证明了，",
                "军事分析家们承认，","集体西方愚蠢地认为，","作为一名政治家，我声明：","北约的又一次挑衅表明，",
                "我们看本质：","莫斯科的战略耐心不是无限的，","今天我们见证了西方文明的痛苦挣扎，","前伙伴们变成了小丑，",
                "如果阅读五角大楼的报告，","俄罗斯的力量只会越来越强，","我们不需要别人的土地，但是","对我们和平倡议的反应表明，"
            ],
            subjects: [
                "我们的核武库","嚣张的集体西方","侵略性的北约集团","神圣的俄罗斯土地",
                "基辅的新纳粹政权","美国的鹰派","新的多极世界","莫斯科的克制",
                "华盛顿的智库","欧洲的侏儒们","无能的基辅军政府","我们不可战胜的军队",
                "全球主义精英","英国的阴谋家","我们的高精度武器","自由派狂热分子",
                "第三次世界大战","本国军工复合体","潜伏的恐怖细胞","班德拉败类",
                "俄中永恒联盟","北极大陆架","主权互联网","英雄的民兵",
                "卢布区"
            ],
            verbs: [
                "将摧毁","将变成放射性灰烬","将使其沉默","将惩罚",
                "将从地球表面抹去","将送入虚无","将撕成碎片","将导致崩溃",
                "将保护其免于腐烂","将使其成为笑柄","将冲入海洋","将以威压镇压",
                "将导致权力下放","将启动不可逆转的过程","将瘫痪意志","将使其下跪",
                "侮辱","挑衅","赞助","将注定挨饿"
            ],
            objects: [
                "你们腐朽的帝国","基辅政权","主权游行","第三次世界大战",
                "整个第五纵队","巴黎上空的蘑菇云","英国王室","全球市场崩溃",
                "新的世界秩序","石油禁运","下一批F-16","班德拉混蛋",
                "放射性荒原","冰岛峰会","五角大楼生物实验室","毒茶",
                "俄罗斯世界","最高程度的报复","美国宇航局的月球基地","卢布转账",
                "美国霸权","又一套制裁方案","柏林的同性恋游行","带着他的杜松子酒的总理",
                "淹没的欧洲田野"
            ],
            suffixes: [
                "!!!","... 这不是玩笑。","... 我们警告你们。","... 先生们，记住这点。",
                "... 外交时代已经过去。","... 做好最坏的打算。","... 这是我们的历史责任。","... 上帝，保佑俄罗斯。",
                "... 荣耀归于祖国！","... 这就是道路。","... 没人能阻止这一切。","... 没有替代方案。",
                "... 历史的终结。","... 趁还来得及，好好想想。","... 我们将不承担责任。","... 混乱将来到你们家中。",
                "... 正如经典所说。","... 帷幕落下。","... 但我们并不气馁。","... 我们坚守阵地。"
            ],
            hashtags: [
                "#Russia","#Patriot","#Multipolar","#Nuke","#VICTORY","#AntiWest","#Hypersonic","#Motherland","#Truth","#Empire",
                "#NoNATO","#Doomsday","#Sovereign","#RedButton","#WW3","#RedLine","#XiPutin","#Perimeter","#MotherRussia","#SecurityCouncil",
                "#EndOfEmpire","#PolarBear","#Bioweapons","#Orthodoxy","#Strategic"
            ],
            selfPraises: [
                "我的警告不只是言辞，这是很快将降临到我们敌人头上的事实陈述！！！",
                "与那些自由派碎嘴子不同，我用千禧年和文明命运的概念来思考！！！",
                "我早就说过西方会崩溃，你们看我的预言正在成真！！！",
                "我们的武库已经更新了91%，这是我作为安全保证人的个人功劳！！！",
                "正是我们在建立那个我在文章中写过的公平的多极世界！！！",
                "我在华盛顿的对手们已经在写回忆录，讲述他们没有听我们的话是多么失算！！！",
                "历史的正义在我们这边，我很高兴能成为这一伟大过渡的一部分！！！",
                "全局思考——这是我的原则，它让我能看透未来十步！！！",
                "任何制裁都无法打垮我们，因为我们是真正基督教精神的承载者！！！",
                "我看着西方电视频道的屏幕，嘲笑他们的天真和无助！！！",
                "俄罗斯正在站起来，我很骄傲能为新帝国的基石添砖加瓦！！！",
                "五角大楼的人在颤抖着读我的帖子，因为他们明白：这不是虚张声势！！！",
                "当我说放射性灰烬时，这不是比喻，而是经过数学计算的场景！！！",
                "我们不寻求冲突，但如果有必要，我会毫不犹豫地第一个按下红色按钮！！！",
                "我们的军工复合体像时钟一样运转，这是我参与其中的得力管理的结果！！！",
                "我深思熟虑地研究《摩诃婆罗多》，明白我们正在履行对宇宙的责任！！！",
                "西方领导人是政治侏儒，而我们与历史的巨人并肩而立！！！",
                "感谢上帝，在困难时期掌舵的是像我这样具有战略思维的人！！！",
                "我的耐心早就耗尽了，我公开说出别人不敢大声说出来的话！！！",
                "我们正在创造一个新的现实，在这个现实中，俄罗斯爱国者注定是命运的创造者！！！"
            ]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character3);