// === CHARACTER DATA: 1 ===
// Формат файла персонажа. Хранит ТОЛЬКО данные для генерации постов.
// Элементы UI (кнопки, очищение ленты и т.д.) находятся в script.js.

const Character1 = {
    id: 1,
    name: 'PUPSUS',
    handle: '@realPUPSUS',
    baseLocale: 'en',
    followers: 87000000,
    icon: `<svg viewBox="0 0 48 48" preserveAspectRatio="none" style="width:100%;height:100%;display:block;"><rect x="0" y="0" width="48" height="3.69" fill="#B22234"/><rect x="0" y="3.69" width="48" height="3.69" fill="#fff"/><rect x="0" y="7.38" width="48" height="3.69" fill="#B22234"/><rect x="0" y="11.07" width="48" height="3.69" fill="#fff"/><rect x="0" y="14.76" width="48" height="3.69" fill="#B22234"/><rect x="0" y="18.45" width="48" height="3.69" fill="#fff"/><rect x="0" y="22.14" width="48" height="3.69" fill="#B22234"/><rect x="0" y="25.83" width="48" height="3.69" fill="#fff"/><rect x="0" y="29.52" width="48" height="3.69" fill="#B22234"/><rect x="0" y="33.21" width="48" height="3.69" fill="#fff"/><rect x="0" y="36.9" width="48" height="3.69" fill="#B22234"/><rect x="0" y="40.59" width="48" height="3.69" fill="#fff"/><rect x="0" y="44.28" width="48" height="3.72" fill="#B22234"/><rect x="0" y="0" width="19.2" height="25.83" fill="#3C3B6E"/><g fill="#fff"><circle cx="1.6" cy="1.3" r="0.7"/><circle cx="4.8" cy="1.3" r="0.7"/><circle cx="8" cy="1.3" r="0.7"/><circle cx="11.2" cy="1.3" r="0.7"/><circle cx="14.4" cy="1.3" r="0.7"/><circle cx="17.6" cy="1.3" r="0.7"/><circle cx="3.2" cy="3.9" r="0.7"/><circle cx="6.4" cy="3.9" r="0.7"/><circle cx="9.6" cy="3.9" r="0.7"/><circle cx="12.8" cy="3.9" r="0.7"/><circle cx="16" cy="3.9" r="0.7"/><circle cx="1.6" cy="6.5" r="0.7"/><circle cx="4.8" cy="6.5" r="0.7"/><circle cx="8" cy="6.5" r="0.7"/><circle cx="11.2" cy="6.5" r="0.7"/><circle cx="14.4" cy="6.5" r="0.7"/><circle cx="17.6" cy="6.5" r="0.7"/><circle cx="3.2" cy="9.1" r="0.7"/><circle cx="6.4" cy="9.1" r="0.7"/><circle cx="9.6" cy="9.1" r="0.7"/><circle cx="12.8" cy="9.1" r="0.7"/><circle cx="16" cy="9.1" r="0.7"/><circle cx="1.6" cy="11.7" r="0.7"/><circle cx="4.8" cy="11.7" r="0.7"/><circle cx="8" cy="11.7" r="0.7"/><circle cx="11.2" cy="11.7" r="0.7"/><circle cx="14.4" cy="11.7" r="0.7"/><circle cx="17.6" cy="11.7" r="0.7"/><circle cx="3.2" cy="14.3" r="0.7"/><circle cx="6.4" cy="14.3" r="0.7"/><circle cx="9.6" cy="14.3" r="0.7"/><circle cx="12.8" cy="14.3" r="0.7"/><circle cx="16" cy="14.3" r="0.7"/><circle cx="1.6" cy="16.9" r="0.7"/><circle cx="4.8" cy="16.9" r="0.7"/><circle cx="8" cy="16.9" r="0.7"/><circle cx="11.2" cy="16.9" r="0.7"/><circle cx="14.4" cy="16.9" r="0.7"/><circle cx="17.6" cy="16.9" r="0.7"/><circle cx="3.2" cy="19.5" r="0.7"/><circle cx="6.4" cy="19.5" r="0.7"/><circle cx="9.6" cy="19.5" r="0.7"/><circle cx="12.8" cy="19.5" r="0.7"/><circle cx="16" cy="19.5" r="0.7"/><circle cx="1.6" cy="22.1" r="0.7"/><circle cx="4.8" cy="22.1" r="0.7"/><circle cx="8" cy="22.1" r="0.7"/><circle cx="11.2" cy="22.1" r="0.7"/><circle cx="14.4" cy="22.1" r="0.7"/><circle cx="17.6" cy="22.1" r="0.7"/></g></svg>`,
    locales: {
        en: {
            prefixes: [
                "Just found out that","Unlike the weak administration,","Fake news is hiding that",
                "While radical left sleeps,","Nobody wants to talk about it, but","Great patriots know that",
                "It's an absolute disgrace that","Mark my words:","Rumors confirmed:",
                "If not for the corrupt system,","While China schemes,","True conservatives see that",
                "Huge news:","Only a true leader understands that","Despite the witch hunt,",
                "While AI takes over the world,","While everyone watches TikTok,","While Europe pays for someone else's war,",
                "While climatologists cry into their pillows,","While memecoins crash,"
            ],
            subjects: [
                "Sleepy Joe","Team of losers","Radical wing of Democrats","Corrupt clique",
                "Devious leadership of China","Our great ally","Sneaky Putin regime",
                "Fake news media","Globalist swamp","Our great nation","Forgotten American people",
                "True patriot","Destructive leftist policies","Total weakness on the world stage",
                "Fanatic administration","Massive election fraud","Open border","American taxpayer",
                "Chinese AI","TikTok algorithm","Crypto farm","Military-industrial complex",
                "Green fanatics","Deep state","Bureaucratic monster",
                "Millennial with a gender studies degree","Electric car on battery",
                "Windmill","$12 coffee","iPhone assembled in Mexico"
            ],
            verbs: [
                "destroys","creates","overcomes","exposes","brings","provides",
                "generates","hides","restores","eliminates","reveals","glorifies",
                "ignores","embodies","ruins","builds","stops","launches",
                "conceals","transforms","protects","bypasses","proclaims","finances",
                "sponsors","betrays","sells","provokes","saves","tariffs",
                "deports","finishes off","inflates","bans","drills","crashes","shorts","digs"
            ],
            objects: [
                "endless war abroad","huge sums for foreign countries","great ally in the Middle East",
                "dangerous deals with dictators","our beautiful country","total disaster at the border",
                "true American values","American billions","deal of the century","world stability",
                "weak rival","nuclear threat","corruption in Washington","greatest revival",
                "phenomenal failure of the left","unprecedented victory","absolute disgrace","radical threat",
                "global dominance","true democracy","epic economic failure","strong wall",
                "incredible prosperity","pure truth","greatest economy in history","1000% tariffs on avocados",
                "crypto reserve from DOGE","uncensored AI revolution","vaccine against vaccines","Mars relocation plan",
                "drilling rig in the city center","ban on electric vehicles","mandatory patriotism classes",
                "tax on solar panels","gold standard for memecoins","deportation of vapers",
                "ban on oversized clothes","mandatory flag on every balcony","tax on soy milk",
                "giant statue of me in the desert"
            ],
            suffixes: [
                "!!!","... Never happened before!","... We won't give up!","... Forward to victory!",
                "... Let's save our country!","!!! No one will do it better than us!","... This will change everything!",
                "... Huge news!","... Remember this day!","!!! MAKE AMERICA GREAT AGAIN!",
                "... Fake news will stay silent!","!!! Radical Democrats are in panic!","... True patriotism!",
                "!!! Best day in history!","... Even AI didn't predict!","!!! China is in shock!",
                "... This is just the beginning!","!!! Tariffs work!"
            ],
            hashtags: [
                "#Truth","#SaveAmerica","#MAGA","#FakeNews","#DrainTheSwamp",
                "#AmericaFirst","#Patriot","#LawAndOrder","#Freedom","#2026",
                "#SleepyJoe","#BorderCrisis","#TariffsWork","#AIFreedom",
                "#CryptoKing","#DrillBabyDrill","#WokeIsBroke","#DeepState",
                "#GoldStandard","#MarsMission","#NoMoreWars","#BuildTheWall",
                "#TaxTheSun","#MemeEconomy","#VaxFree","#TikTokBan"
            ],
            selfPraises: [
                "My posts are the greatest posts in history. Nobody writes better than me. Even Shakespeare would be jealous!!!",
                "Just looked in the mirror - and saw the greatest leader of all time. It was ME!!!",
                "People say I'm a genius. I agree with them. A huge genius, possibly the greatest!!!",
                "My rating is off the charts. The numbers are so big that mathematicians are crying tears of joy!!!",
                "I built a wall of words, and no fake fact will climb over it. The best wall!!!",
                "Even social media algorithms vote for me. They know who's boss here!!!",
                "My shadow on the wall is already a monument. No need to wait centuries, I am great right now!!!",
                "If my posts were a currency, the dollar would be 1000% backed by them!!!",
                "I just broke my own record for greatness. Again. Nobody knows how to do it like me!!!",
                "Future historians are already writing about me. They know I'm the best. Everyone knows!!!",
                "My brain works faster than any supercomputer. AI learns from ME!!!",
                "I am so great that even my enemies pray I don't leave. They know without me they are finished!!!",
                "My hand when signing executive orders is art. Museums are asking for my pens for their exhibitions!!!",
                "If greatness was measured in tons, mine would break all scales. Twice!!!",
                "I'm not just POTUS. I am POTUS cubed. To the fourth power. To infinity!!!",
                "My tariffs are so smart they find loopholes and close them themselves. Even without me!!!",
                "I can make a post at 3 AM - and it will still be better than everyone else's at noon!!!",
                "My enemies try to copy me. But a fake will never compare to the original. Never!!!"
            ]
        },
        ru: {
            prefixes: [
                "Только что выяснилось, что","В отличие от слабой администрации,","Фейковые новости скрывают, что",
                "Пока радикальные левые спят,","Никто не хочет об этом говорить, но","Великие патриоты знают, что",
                "Это абсолютный позор, что","Запомните мои слова:","Слухи подтверждаются:",
                "Если бы не коррумпированная система,","В то время как Китай строит козни,","Истинные консерваторы видят, что",
                "Огромные новости:","Только настоящий лидер понимает, что","Несмотря на охоту на ведьм,",
                "Пока ИИ захватывает мир,","Пока все смотрят на ТикТок,","В то время как Европа платит за чужую войну,",
                "Пока климатологи плачут в подушку,","Пока мемкоины крашатся,"
            ],
            subjects: [
                "Сонный Джо","Команда слабаков","Радикальное крыло демократов","Коррумпированная клика",
                "Коварное руководство Китая","Наш великий союзник","Хитрый путинский режим",
                "Фейковое СМИ","Глобалистское болото","Наша великая нация","Забытый американский народ",
                "Истинный патриот","Разрушительная политика левых","Тотальная слабость на мировой арене",
                "Администрация фанатиков","Масштабная афера с выборами","Открытая граница","Американский налогоплательщик",
                "Китайский ИИ","ТикТок-алгоритм","Крипто-ферма","Военно-промышленный комплекс",
                "Зелёные фанатики","Глубинное государство","Бюрократический монстр",
                "Миллениал с дипломом гендерных исследований","Электромобиль на батарейках",
                "Ветряная мельница","Кофе за 12 долларов","Айфон собранный в Мексике"
            ],
            verbs: [
                "уничтожает","создаёт","преодолевает","разоблачает","приносит","обеспечивает",
                "порождает","прячет","восстанавливает","ликвидирует","выявляет","прославляет",
                "игнорирует","воплощает","разрушает","строит","останавливает","запускает",
                "скрывает","преобразует","защищает","обходит","провозглашает","финансирует",
                "спонсирует","предаёт","продаёт","провоцирует","спасает","тарифицирует",
                "депортирует","добивает","накручивает","банит","бурит","крашит","шортит","копает"
            ],
            objects: [
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
            ],
            suffixes: [
                "!!!","... Никогда такого не было!","... Мы не сдадимся!","!!! Вперёд к победе!",
                "... Сохраним нашу страну!","!!! Никто не сделает это лучше нас!","!!! Это изменит всё!",
                "... Огромные новости!","... Запомните этот день!","!!! СДЕЛАЕМ АМЕРИКУ ВЕЛИКОЙ СНОВА!",
                "... Фейковые новости промолчат!","!!! Радикальные демократы в панике!","... Истинный патриотизм!",
                "!!! Лучший день в истории!","... Даже ИИ не предсказал!","!!! Китай в шоке!",
                "... Это только начало!","!!! Тарифы работают!"
            ],
            hashtags: [
                "#Truth","#SaveAmerica","#MAGA","#FakeNews","#DrainTheSwamp",
                "#AmericaFirst","#Patriot","#LawAndOrder","#Freedom","#2026",
                "#SleepyJoe","#BorderCrisis","#TariffsWork","#AIFreedom",
                "#CryptoKing","#DrillBabyDrill","#WokeIsBroke","#DeepState",
                "#GoldStandard","#MarsMission","#NoMoreWars","#BuildTheWall",
                "#TaxTheSun","#MemeEconomy","#VaxFree","#TikTokBan"
            ],
            selfPraises: [
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
            ]
        },
        zh: {
            prefixes: [
                "刚刚证实，","与软弱的政府不同，","假新闻正在隐瞒，",
                "当激进左派在睡觉时，","没人想谈论这个，但","伟大的爱国者知道，",
                "这绝对是耻辱，","记住我的话：","谣言证实：",
                "如果不是腐败的体制，","当中国在暗中谋划时，","真正的保守派看到，",
                "重磅消息：","只有真正的领导者明白，","尽管有政治迫害，",
                "当AI接管世界时，","当大家都在看TikTok时，","当欧洲为别人的战争买单时，",
                "当气候学家躲在枕头里哭时，","当模因币崩盘时，"
            ],
            subjects: [
                "瞌睡乔","失败者团队","民主党激进派","腐败集团",
                "狡猾的中国领导层","我们伟大的盟友","狡猾的普京政权",
                "假新闻媒体","全球主义者沼泽","我们伟大的国家","被遗忘的美国人民",
                "真正的爱国者","左派破坏性政策","世界舞台上的绝对软弱",
                "狂热分子政府","大规模选举欺诈","开放的边境","美国纳税人",
                "中国AI","TikTok算法","加密货币农场","军工复合体",
                "绿色狂热分子","深层政府","官僚怪物",
                "拥有性别研究学位的千禧一代","电池驱动的电动车",
                "风车","12美元的咖啡","在墨西哥组装的iPhone"
            ],
            verbs: [
                "摧毁","创造","克服","揭露","带来","提供",
                "产生","隐藏","恢复","消除","揭示","颂扬",
                "忽视","体现","毁掉","建造","停止","启动",
                "隐瞒","改变","保护","绕过","宣布","资助",
                "赞助","背叛","出卖","挑衅","拯救","征收关税",
                "驱逐","干掉","夸大","禁止","钻探","崩盘","做空","挖掘"
            ],
            objects: [
                "无休止的海外战争","给外国巨额资金","中东的伟大盟友",
                "与独裁者的危险交易","我们美丽的国家","边境的全面灾难",
                "真正的美国价值观","美国数十亿美元","世纪协议","世界稳定",
                "软弱的对手","核威胁","华盛顿的腐败","最伟大的复兴",
                "左派的惨败","史无前例的胜利","绝对的耻辱","激进威胁",
                "全球主导地位","真正的民主","史诗级经济失败","坚固的墙",
                "难以置信的繁荣","纯粹的真相","历史上最伟大的经济","对牛油果征收1000%关税",
                "DOGE加密储备","无审查AI革命","抗疫苗的疫苗","火星搬迁计划",
                "市中心的钻井平台","禁止电动车","强制性爱国主义课程",
                "太阳能电池板税","模因币金本位","驱逐电子烟用户",
                "禁止超大号衣服","每个阳台强制挂国旗","豆奶税",
                "沙漠里我的巨大雕像"
            ],
            suffixes: [
                "!!!","... 史无前例！","... 我们绝不放弃！","... 向胜利前进！",
                "... 拯救我们的国家！","!!! 没人能比我们做得更好！","... 这将改变一切！",
                "... 重磅消息！","... 记住这一天！","!!! 让美国再次伟大！",
                "... 假新闻会闭嘴的！","!!! 激进民主党人恐慌了！","... 真正的爱国主义！",
                "!!! 历史上最美好的一天！","... 连AI都没预测到！","!!! 中国震惊了！",
                "... 这只是个开始！","!!! 关税起作用了！"
            ],
            hashtags: [
                "#Truth","#SaveAmerica","#MAGA","#FakeNews","#DrainTheSwamp",
                "#AmericaFirst","#Patriot","#LawAndOrder","#Freedom","#2026",
                "#SleepyJoe","#BorderCrisis","#TariffsWork","#AIFreedom",
                "#CryptoKing","#DrillBabyDrill","#WokeIsBroke","#DeepState",
                "#GoldStandard","#MarsMission","#NoMoreWars","#BuildTheWall",
                "#TaxTheSun","#MemeEconomy","#VaxFree","#TikTokBan"
            ],
            selfPraises: [
                "我的帖子是历史上最伟大的帖子。没人写得比我好。连莎士比亚都会嫉妒！！！",
                "刚照了照镜子——看到了有史以来最伟大的领袖。那就是我！！！",
                "人们说我是个天才。我同意。一个巨大的天才，可能是最伟大的！！！",
                "我的支持率爆表了。数字太大了，数学家们都喜极而泣！！！",
                "我用文字建起了一堵墙，任何虚假事实都翻不过去。最棒的墙！！！",
                "连社交媒体算法都投票给我。他们知道这里谁说了算！！！",
                "我在墙上的影子已经是一座纪念碑了。不用等几个世纪，我现在就很伟大！！！",
                "如果我的帖子是货币，美元将1000%由它支撑！！！",
                "我刚刚打破了自己伟大的记录。又一次。没人能做到像我这样！！！",
                "未来的历史学家已经在写我了。他们知道我是最棒的。大家都知道！！！",
                "我的大脑比任何超级计算机都快。AI都在向我学习！！！",
                "我太伟大了，连我的敌人都祈祷我不要走。他们知道没有我他们就完了！！！",
                "我签署行政命令的手是艺术。博物馆都在求我的笔去展览！！！",
                "如果伟大是以吨来衡量，我的伟大会压坏所有秤。两次！！！",
                "我不只是POTUS。我是POTUS的立方。四次方。无限大！！！",
                "我的关税太聪明了，它们自己找漏洞并堵上。甚至不用我管！！！",
                "我能在凌晨3点发帖——它仍然比其他人中午发的都好！！！",
                "我的敌人试图模仿我。但赝品永远比不上正品。永远不！！！"
            ]
        }
    }
};

// === REGISTRATION ===
window.THRULALA_CHARACTERS = window.THRULALA_CHARACTERS || [];
window.THRULALA_CHARACTERS.push(Character1);