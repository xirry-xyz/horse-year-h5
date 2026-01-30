export interface CharacterData {
  char: string;
  category: 'career' | 'wealth' | 'love' | 'growth' | 'mindset';
  categoryLabel: string;
  description: string;
  blessing: string;
  luckyColor: string;
  luckyColorName: string;
  luckyNumber: number;
}

export interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

// ============================================================
// 50 Characters Data
// ============================================================

export const characters: CharacterData[] = [
  // ========================
  // 事业类 (career) - 10 characters
  // ========================
  {
    char: '达',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「达」字，寓意你将如骏马奔腾，通达四方。你骨子里有一股不服输的劲头，新的一年里，所有的努力都将汇成一条通往成功的大道。前路已然开阔，纵马扬鞭，便是坦途。',
    blessing: '马到成功，通达顺遂',
    luckyColor: '#C41E3A',
    luckyColorName: '中国红',
    luckyNumber: 18,
  },
  {
    char: '展',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「展」字，恰似骏马昂首，舒展四蹄。你心中藏着大格局，新的一年正是你施展才华的舞台。积蓄已久的能量即将迸发，属于你的高光时刻就在前方。',
    blessing: '大展宏图，鹏程万里',
    luckyColor: '#4169E1',
    luckyColorName: '皇家蓝',
    luckyNumber: 66,
  },
  {
    char: '拓',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「拓」字，如同千里马踏破疆界，开拓新天地。你天生具备探索精神，不愿困于方寸之间。新的一年，勇敢踏出舒适区，前方有你意想不到的广阔天地。',
    blessing: '开拓进取，万马奔腾',
    luckyColor: '#2E8B57',
    luckyColorName: '翡翠绿',
    luckyNumber: 28,
  },
  {
    char: '驰',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「驰」字，正是纵横驰骋之象。你内心渴望速度与激情，不甘平庸是你最大的底气。马年将为你注入龙马精神，在事业的赛道上一路飞驰，无人能挡。',
    blessing: '纵横驰骋，势不可挡',
    luckyColor: '#FF6347',
    luckyColorName: '烈焰橙',
    luckyNumber: 39,
  },
  {
    char: '腾',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「腾」字，万马奔腾之势尽在其中。你是人群中那匹蓄势待发的黑马，厚积薄发正是你的写照。马年一到，便是你腾飞的时刻，扶摇直上，不可限量。',
    blessing: '飞黄腾达，一跃千里',
    luckyColor: '#DAA520',
    luckyColorName: '琥珀金',
    luckyNumber: 88,
  },
  {
    char: '攀',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「攀」字，意味着你将如骏马登高，勇攀巅峰。你从不畏惧挑战，每一次困难都是你成长的阶梯。新的一年，步步高升，你注定会站在更高的地方，看到更远的风景。',
    blessing: '勇攀高峰，步步登高',
    luckyColor: '#6A5ACD',
    luckyColorName: '星空紫',
    luckyNumber: 51,
  },
  {
    char: '创',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「创」字，寓意破旧立新、开创未来。你心里总有新奇的点子，马年正是将灵感化为现实的最佳时机。如骏马破晓而出，你将用自己的方式开创一片新天地。',
    blessing: '开创新局，马年大吉',
    luckyColor: '#FF4500',
    luckyColorName: '朝霞红',
    luckyNumber: 17,
  },
  {
    char: '领',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「领」字，你天生具有领袖气质，如同马群中的头马，引领方向。你的判断力和行动力让人信服，新的一年，你将在自己的领域独占鳌头，带领身边的人共同前行。',
    blessing: '一马当先，领跑未来',
    luckyColor: '#1C1C1C',
    luckyColorName: '墨玉黑',
    luckyNumber: 21,
  },
  {
    char: '锐',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「锐」字，锐意进取，势如破竹。你有一双敏锐的眼睛，总能看到别人忽略的机遇。马年里，保持这份锐气，以锐不可当之势，一路向前，所向披靡。',
    blessing: '锐不可当，所向披靡',
    luckyColor: '#B22222',
    luckyColorName: '赤铁红',
    luckyNumber: 33,
  },
  {
    char: '启',
    category: 'career',
    categoryLabel: '事业',
    description:
      '马年得「启」字，如同晨曦初照，万物新生。你正站在一段新旅程的起点，马年将为你开启全新的篇章。过去的积累都将成为你的底牌，新的征程即刻启航。',
    blessing: '启程向前，前途无量',
    luckyColor: '#E8963A',
    luckyColorName: '暖橘色',
    luckyNumber: 8,
  },

  // ========================
  // 财富类 (wealth) - 10 characters
  // ========================
  {
    char: '旺',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「旺」字，运势正旺，财源广进。你身上有一种天然的好运气，新的一年里，这股旺气会更加强劲。如同骏马踏金而来，福气财气双双临门，挡都挡不住。',
    blessing: '人财两旺，马年兴旺',
    luckyColor: '#FF2D2D',
    luckyColorName: '鸿运红',
    luckyNumber: 68,
  },
  {
    char: '丰',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「丰」字，五谷丰登，硕果累累。你一直在默默耕耘，马年就是你收获丰年的时刻。如同骏马驮满金银归来，你的每一份付出都将得到丰厚的回报。',
    blessing: '丰收满仓，富足安康',
    luckyColor: '#FFD700',
    luckyColorName: '麦穗金',
    luckyNumber: 58,
  },
  {
    char: '盛',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「盛」字，意气风发，盛世华章。你命中带着一股昌盛之气，马年将把这份气运推向顶峰。事业兴盛、财运旺盛，属于你的繁盛时代已经到来。',
    blessing: '繁荣昌盛，盛世如意',
    luckyColor: '#8B0000',
    luckyColorName: '宝石红',
    luckyNumber: 96,
  },
  {
    char: '裕',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「裕」字，丰裕充盈，生活无忧。你懂得经营生活，马年里你的智慧将化为实实在在的回报。骏马载福而来，让你的生活更加富裕从容，物质精神双丰收。',
    blessing: '富裕丰足，绰绰有余',
    luckyColor: '#D4AF37',
    luckyColorName: '古铜金',
    luckyNumber: 72,
  },
  {
    char: '昌',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「昌」字，日出东方，繁荣昌盛。你天生有一种蓬勃向上的能量，马年会让这股力量更加势不可挡。如同万马齐喑后的一声长嘶，你的事业财运都将进入昌明之境。',
    blessing: '繁荣昌达，蒸蒸日上',
    luckyColor: '#FF8C00',
    luckyColorName: '暖阳橙',
    luckyNumber: 36,
  },
  {
    char: '盈',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「盈」字，盈满富足，笑意盈盈。你的福报已经积攒到了溢出的边缘，马年正是硕果盈枝的好时节。财库充盈、心中欢盈，好运如同泉水般源源不断涌入生活。',
    blessing: '财源盈门，喜乐盈心',
    luckyColor: '#50C878',
    luckyColorName: '翠玉绿',
    luckyNumber: 48,
  },
  {
    char: '兴',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「兴」字，万象更新，百业兴旺。你有一颗不安分的心，总想把事情做得更好。马年会给你带来蒸蒸日上的好势头，如骏马奋蹄，你所经手的一切都将欣欣向荣。',
    blessing: '兴旺发达，万事皆兴',
    luckyColor: '#DC143C',
    luckyColorName: '胭脂红',
    luckyNumber: 16,
  },
  {
    char: '隆',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「隆」字，生意兴隆，国运昌隆。你做事大气磅礴，不拘小节，这份格局会在马年为你带来丰厚的回报。骏马隆隆，踏出一条黄金大道，前路尽是繁华锦绣。',
    blessing: '生意兴隆，隆运当头',
    luckyColor: '#B8860B',
    luckyColorName: '琉璃金',
    luckyNumber: 82,
  },
  {
    char: '聚',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「聚」字，聚沙成塔，聚财有方。你擅长把散落的资源凝聚在一起，马年将大大增强你的聚财运。四方财气如万马归槽般向你汇聚，守得住也聚得来。',
    blessing: '聚财纳福，八方来财',
    luckyColor: '#CD853F',
    luckyColorName: '沉香棕',
    luckyNumber: 43,
  },
  {
    char: '润',
    category: 'wealth',
    categoryLabel: '财富',
    description:
      '马年得「润」字，润物无声，利润丰厚。你的财富来得不张扬，却细水长流、绵绵不绝。马年里，财运如春雨般滋润你的生活，温润而富足，正是最令人安心的好运势。',
    blessing: '润泽万物，财运亨通',
    luckyColor: '#5F9EA0',
    luckyColorName: '碧波青',
    luckyNumber: 26,
  },

  // ========================
  // 情感类 (love) - 10 characters
  // ========================
  {
    char: '悦',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「悦」字，悦人悦己，喜乐满怀。你是一个懂得欣赏美好的人，马年会让你的心情如春风拂面般愉悦。身边的人因你而快乐，你也因他们而幸福，这份双向的喜悦弥足珍贵。',
    blessing: '心生欢悦，岁岁喜乐',
    luckyColor: '#FF69B4',
    luckyColorName: '桃花粉',
    luckyNumber: 77,
  },
  {
    char: '融',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「融」字，融洽和谐，心意相通。你有一种温暖的力量，能够融化隔阂、拉近距离。马年里，人际关系将更加融洽，如同冰雪遇暖阳，所有的生疏都将化作亲密。',
    blessing: '情深意融，其乐融融',
    luckyColor: '#FF7F50',
    luckyColorName: '珊瑚橙',
    luckyNumber: 52,
  },
  {
    char: '暖',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「暖」字，温暖如春，暖意融融。你就像冬日里的一缕暖阳，总能给身边的人带来温暖与安心。马年里，这份暖意会加倍回馈到你身上，被爱包围就是你最真实的模样。',
    blessing: '温暖相伴，岁月生暖',
    luckyColor: '#FFA07A',
    luckyColorName: '暮光橙',
    luckyNumber: 14,
  },
  {
    char: '缘',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「缘」字，缘分天定，妙不可言。你相信冥冥之中自有安排，马年正是缘分汇聚的一年。无论是旧情重续还是新缘初结，那些命中注定的人和事，都将在马年与你相逢。',
    blessing: '良缘天赐，有缘千里',
    luckyColor: '#DB7093',
    luckyColorName: '海棠红',
    luckyNumber: 69,
  },
  {
    char: '馨',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「馨」字，温馨满溢，馨香悠远。你重视家庭与亲情，内心柔软而坚定。马年里，家庭氛围将更加温馨，如同骏马归巢，最温暖的港湾永远为你敞开。',
    blessing: '温馨如意，馨香满堂',
    luckyColor: '#DDA0DD',
    luckyColorName: '丁香紫',
    luckyNumber: 35,
  },
  {
    char: '伴',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「伴」字，相伴相守，不离不弃。你最珍视的是身边人的陪伴，马年将让你与重要的人更加亲密。如同并肩策马的伙伴，风雨同舟、甘苦与共，这才是你心中最美的风景。',
    blessing: '长情相伴，白首不离',
    luckyColor: '#BC8F8F',
    luckyColorName: '玫瑰棕',
    luckyNumber: 22,
  },
  {
    char: '怡',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「怡」字，心旷神怡，怡然自得。你追求内心的宁静与喜悦，马年将带给你更多怡然自在的美好时光。情感上不急不躁，用最舒服的节奏经营关系，幸福自然水到渠成。',
    blessing: '怡然自乐，心旷神怡',
    luckyColor: '#98D8C8',
    luckyColorName: '薄荷绿',
    luckyNumber: 42,
  },
  {
    char: '恋',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「恋」字，眷恋深情，爱意缠绵。你的内心藏着一片柔情似水，马年会唤醒你心中最真挚的情感。无论是初恋般的悸动还是老酒般的醇厚，马年都将让你的爱情故事更加动人。',
    blessing: '情深眷恋，甜蜜如蜜',
    luckyColor: '#E75480',
    luckyColorName: '胭脂粉',
    luckyNumber: 91,
  },
  {
    char: '甜',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「甜」字，甜蜜幸福，如糖似蜜。生活中那些甜丝丝的小确幸，都是马年送给你的礼物。你值得被温柔以待，马年会让你嘴角常带微笑，日子甜得刚刚好。',
    blessing: '甜蜜如愿，生活美满',
    luckyColor: '#FFB6C1',
    luckyColorName: '樱花粉',
    luckyNumber: 63,
  },
  {
    char: '宜',
    category: 'love',
    categoryLabel: '情感',
    description:
      '马年得「宜」字，万事皆宜，适得其所。你总能在对的时间做对的事，马年里这份从容会延伸到情感生活中。宜喜宜嗔、宜远宜近，一切关系都将调整到最舒适的状态。',
    blessing: '诸事皆宜，百年好合',
    luckyColor: '#F0E68C',
    luckyColorName: '月光黄',
    luckyNumber: 9,
  },

  // ========================
  // 成长类 (growth) - 10 characters
  // ========================
  {
    char: '跃',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「跃」字，如骏马跃过山涧，一跃千里。你内心深处渴望突破与飞跃，马年正是实现质变的关键时刻。所有的量变积累都将在这一年迎来飞跃，让世界看到全新的你。',
    blessing: '龙腾马跃，飞跃成长',
    luckyColor: '#4682B4',
    luckyColorName: '晴空蓝',
    luckyNumber: 37,
  },
  {
    char: '韧',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「韧」字，坚韧不拔，百折不挠。你看似温和，内心却有着惊人的韧性。马年会考验你，也会成就你——就像千锤百炼的骏马，越是艰难越能展现你的韧劲。',
    blessing: '坚韧如马，百折不挠',
    luckyColor: '#708090',
    luckyColorName: '青石灰',
    luckyNumber: 45,
  },
  {
    char: '勇',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「勇」字，勇往直前，无所畏惧。你心中住着一匹不羁的烈马，渴望冲破一切束缚。马年赐你勇气，让你敢于面对恐惧、挑战未知，勇者无畏，方能行远。',
    blessing: '勇者无惧，马年向前',
    luckyColor: '#B7410E',
    luckyColorName: '赤陶红',
    luckyNumber: 11,
  },
  {
    char: '毅',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「毅」字，刚毅果断，矢志不渝。你有着超乎常人的意志力和决心，一旦认定方向便不会轻易放弃。马年里，这份坚毅将化为最强大的力量，助你跨越一切障碍。',
    blessing: '坚毅不拔，志在千里',
    luckyColor: '#2F4F4F',
    luckyColorName: '松石青',
    luckyNumber: 53,
  },
  {
    char: '慧',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「慧」字，聪慧通透，福慧双全。你拥有一颗灵慧的心，总能在纷繁复杂中看到本质。马年将进一步开启你的智慧之门，如骏马识途，你会越来越清楚自己要走的路。',
    blessing: '慧心如炬，明辨通达',
    luckyColor: '#7B68EE',
    luckyColorName: '鸢尾紫',
    luckyNumber: 73,
  },
  {
    char: '悟',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「悟」字，醍醐灌顶，大彻大悟。你正处于一个认知跃升的阶段，马年会带来许多顿悟时刻。那些曾经困惑你的问题将豁然开朗，如同骏马破雾而出，前路一片清明。',
    blessing: '觉悟开明，豁然开朗',
    luckyColor: '#9370DB',
    luckyColorName: '暮紫色',
    luckyNumber: 7,
  },
  {
    char: '蜕',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「蜕」字，蜕变新生，破茧成蝶。你正在经历一场深刻的蜕变，马年将加速这个过程。如同骏马褪去冬毛、焕发新光，你也将褪去旧日的迷茫，以崭新的面貌拥抱世界。',
    blessing: '华丽蜕变，焕然一新',
    luckyColor: '#DA70D6',
    luckyColorName: '兰花紫',
    luckyNumber: 29,
  },
  {
    char: '进',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「进」字，勇猛精进，日进一步。你从不满足于原地踏步，每天都在进步是你最好的状态。马年里，如同快马加鞭，你前进的步伐将更加坚定有力，每一步都算数。',
    blessing: '精进不休，日进斗金',
    luckyColor: '#228B22',
    luckyColorName: '常青绿',
    luckyNumber: 61,
  },
  {
    char: '砺',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「砺」字，砥砺前行，磨砺成锋。你深知成长从来不是一帆风顺的，每一次磨砺都让你变得更加锋利。马年的历练将如同宝剑出鞘，让你光芒万丈、不可小觑。',
    blessing: '砥砺奋进，锋芒毕露',
    luckyColor: '#A0522D',
    luckyColorName: '赭石棕',
    luckyNumber: 85,
  },
  {
    char: '炼',
    category: 'growth',
    categoryLabel: '成长',
    description:
      '马年得「炼」字，千锤百炼，炉火纯青。你正在通过不断的历练锻造更好的自己，马年的烈火会将你淬炼成钢。如同骏马经过严格训练方能日行千里，你的每一滴汗水都不会白流。',
    blessing: '百炼成钢，炉火纯青',
    luckyColor: '#CC5500',
    luckyColorName: '烈焰橙',
    luckyNumber: 49,
  },

  // ========================
  // 心态类 (mindset) - 10 characters
  // ========================
  {
    char: '安',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「安」字，安然自在，岁月静好。在快节奏的生活中，你内心最渴望的是一份安宁与踏实。马年将赐你一颗安定之心，如同骏马在草原上安然栖息，内心平和便是最大的福气。',
    blessing: '平安喜乐，安然无恙',
    luckyColor: '#87CEEB',
    luckyColorName: '天青蓝',
    luckyNumber: 6,
  },
  {
    char: '顺',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「顺」字，顺风顺水，一帆风顺。你一直在等一个顺畅的年份，马年就是了。曾经的坎坷都将成为过去，前方的道路如同万马坦途，顺心顺意顺生活。',
    blessing: '万事顺遂，马到功成',
    luckyColor: '#66CDAA',
    luckyColorName: '碧玉绿',
    luckyNumber: 38,
  },
  {
    char: '逸',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「逸」字，飘逸洒脱，逸兴遄飞。你向往一种自由洒脱的生活方式，马年将帮你找到忙碌与悠闲之间的平衡。如同骏马在草原上自由奔跑，逸然自在才是你的最佳姿态。',
    blessing: '闲逸自在，逸趣横生',
    luckyColor: '#B0E0E6',
    luckyColorName: '雾霭蓝',
    luckyNumber: 24,
  },
  {
    char: '和',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「和」字，和气致祥，以和为贵。你是一个温和而有力量的人，懂得在纷争中寻找和解之道。马年里，和气生财、和睦生福，你的温润平和将为你招来无数好运。',
    blessing: '和气致祥，家和万事兴',
    luckyColor: '#F5DEB3',
    luckyColorName: '暖麦黄',
    luckyNumber: 56,
  },
  {
    char: '瑞',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「瑞」字，祥瑞降临，瑞气盈门。你身上自带一种吉祥的气场，走到哪里都能带去好运。马年的瑞气将格外眷顾你，如同瑞雪兆丰年，好事接二连三。',
    blessing: '瑞气盈门，吉祥如意',
    luckyColor: '#E6BE8A',
    luckyColorName: '瑞金色',
    luckyNumber: 78,
  },
  {
    char: '福',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「福」字，是最质朴也最隆重的祝福。你是一个惜福之人，懂得感恩生活中的点滴美好。马年里，五福临门，如同骏马载福而来，福运绵长，福气满满。',
    blessing: '五福临门，福星高照',
    luckyColor: '#FF0000',
    luckyColorName: '正红色',
    luckyNumber: 99,
  },
  {
    char: '泰',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「泰」字，泰然自若，否极泰来。你有一颗大心脏，面对波澜也能从容不迫。马年将为你带来否极泰来的转运时刻，如同骏马穿越风雨后迎来晴空万里，稳如泰山。',
    blessing: '国泰民安，否极泰来',
    luckyColor: '#4B0082',
    luckyColorName: '靛青紫',
    luckyNumber: 15,
  },
  {
    char: '宁',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「宁」字，心境安宁，宁静致远。在喧嚣的世界中，你需要的不是更多刺激，而是一方宁静。马年赐你一片内心净土，宁静方能致远，如骏马在月下安然漫步。',
    blessing: '岁月安宁，宁静致远',
    luckyColor: '#6495ED',
    luckyColorName: '矢车菊蓝',
    luckyNumber: 3,
  },
  {
    char: '澄',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「澄」字，澄清明净，心如止水。你的内心正在经历一场净化，马年会帮你澄清所有的困惑与杂念。如同清澈的湖水倒映骏马的身影，心澄则万事明，通透即是智慧。',
    blessing: '心境澄明，清澈通透',
    luckyColor: '#40E0D0',
    luckyColorName: '碧水青',
    luckyNumber: 31,
  },
  {
    char: '朗',
    category: 'mindset',
    categoryLabel: '心态',
    description:
      '马年得「朗」字，天朗气清，开朗豁达。你骨子里是一个乐观开朗的人，马年会让你的笑容更加灿烂。如同晴空下骏马奔腾的爽朗画面，心中无阴霾，每一天都是好天气。',
    blessing: '天朗气清，豁然开朗',
    luckyColor: '#FFC125',
    luckyColorName: '晨曦金',
    luckyNumber: 46,
  },
];

// ============================================================
// Questions Data
// ============================================================

export const questions: Question[] = [
  {
    id: 1,
    text: '马年第一天，你最想做什么？',
    options: [
      { label: '睡到自然醒，享受慵懒时光', value: 0 },
      { label: '出门探索，拥抱新世界', value: 1 },
      { label: '陪伴家人，温馨团聚', value: 2 },
    ],
  },
  {
    id: 2,
    text: '选一个你最喜欢的春节元素',
    options: [
      { label: '漫天烟花，绚烂夺目', value: 0 },
      { label: '热气腾腾的年夜饭', value: 1 },
      { label: '厚厚的红包，满满的祝福', value: 2 },
    ],
  },
  {
    id: 3,
    text: '新的一年，你最期待什么？',
    options: [
      { label: '事业突破，大展宏图', value: 0 },
      { label: '遇见美好，收获幸福', value: 1 },
      { label: '内心平静，从容自在', value: 2 },
    ],
  },
];
