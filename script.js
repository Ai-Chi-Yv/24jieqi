// ======================= 24节气与山西古建 · 完整交互脚本 =======================
// 所有图片URL均使用占位符+明确提示词，便于后续AI替换为真实资源
// 音乐URL同样提供替换提示

// ----------------------------------- 1. 全局数据 -----------------------------------
// 24节气完整列表（24个）
const solarTermsData = [
  {
    name: "立春",
    dateRange: "2月3-5日",
    exactFormula: "太阳黄经315°",
    customExt: "鞭春牛、咬春饼",
    shanxiCustom: "晋北贴剪纸春牛",
    songRec: ["《立春》- 河图", "《春风》- 音频怪物"],
    songUrl: [
      "https://example.com/lichun1.mp3",
      "https://example.com/lichun2.mp3",
    ],
    poetry: "春到人间草木知，东风吹水绿参差。",
    poet: "张栻《立春偶成》",
    archMatch: "王家大院",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20spring%20atmosphere%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20spring%20atmosphere%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20summer%20atmosphere%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20autumn%20atmosphere%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20winter%20atmosphere%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、迎春花",
    fauna: "燕子、蜜蜂",
    customDetails:
      "立春是二十四节气之首，标志着春季的开始。在这一天，人们会举行鞭春牛、咬春饼等习俗，祈求一年的丰收和吉祥。",
  },
  {
    name: "雨水",
    dateRange: "2月18-20日",
    exactFormula: "太阳黄经330°",
    customExt: "回娘屋、占稻色",
    shanxiCustom: "晋南蒸花馍祈雨",
    songRec: ["《雨水》- 银临", "《雨碎江南》- 河图"],
    songUrl: [
      "https://example.com/yushui1.mp3",
      "https://example.com/yushui2.mp3",
    ],
    poetry: "好雨知时节，当春乃发生。随风潜入夜，润物细无声。",
    poet: "杜甫《春夜喜雨》",
    archMatch: "平遥古城",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+spring+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+summer+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+autumn+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+winter+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "杏花、桃花",
    fauna: "青蛙、蚯蚓",
    customDetails:
      "雨水节气标志着降雨开始，雨量渐增。在这一天，人们会回娘屋、占稻色等习俗，祈求风调雨顺、五谷丰登。",
  },
  {
    name: "惊蛰",
    dateRange: "3月5-7日",
    exactFormula: "太阳黄经345°",
    customExt: "祭白虎、吃梨",
    shanxiCustom: "晋中炒豆子、驱虫",
    songRec: ["《惊蛰》- 音阙诗听", "《春雷》- 巫娜"],
    songUrl: [
      "https://example.com/jingzhe1.mp3",
      "https://example.com/jingzhe2.mp3",
    ],
    poetry: "微雨众卉新，一雷惊蛰始。",
    poet: "韦应物《观田家》",
    archMatch: "乔家大院",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+spring+thunder+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+spring+thunder+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+summer+thunder+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+autumn+thunder+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+winter+thunder+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "桃花、樱花",
    fauna: "蛇、蜈蚣",
    customDetails:
      "惊蛰节气标志着春雷始鸣，惊醒蛰伏于地下越冬的蛰虫。在这一天，人们会祭白虎、吃梨等习俗，祈求平安健康。",
  },
  {
    name: "春分",
    dateRange: "3月20-22日",
    exactFormula: "太阳黄经0°",
    customExt: "竖蛋、吃春菜",
    shanxiCustom: "晋北放风筝",
    songRec: ["《春分》- 音阙诗听", "《纸鸢》- 银临"],
    songUrl: [
      "https://example.com/chunfen1.mp3",
      "https://example.com/chunfen2.mp3",
    ],
    poetry: "春分雨脚落声微，柳岸斜风带客归。",
    poet: "徐铉《春分日》",
    archMatch: "应县木塔",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+spring+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+spring+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+summer+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+autumn+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+winter+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "油菜花、郁金香",
    fauna: "蝴蝶、蜜蜂",
    customDetails:
      "春分节气是春季的中分点，昼夜平分。在这一天，人们会竖蛋、吃春菜、放风筝等习俗，祈求平安和丰收。",
  },
  {
    name: "清明",
    dateRange: "4月4-6日",
    exactFormula: "太阳黄经15°",
    customExt: "扫墓、踏青",
    shanxiCustom: "介休绵山寒食节",
    songRec: ["《清明雨上》- 许嵩", "《寒食》- 古风曲"],
    songUrl: [
      "https://example.com/qingming1.mp3",
      "https://example.com/qingming2.mp3",
    ],
    poetry: "清明时节雨纷纷，路上行人欲断魂。",
    poet: "杜牧《清明》",
    archMatch: "介休绵山",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+qingming+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+spring+qingming+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+summer+qingming+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+autumn+qingming+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+winter+qingming+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "杏花、梨花",
    fauna: "杜鹃、黄鹂",
    customDetails:
      "清明节气是传统的扫墓节日，人们会祭祖、扫墓、踏青等习俗，表达对先人的怀念之情。",
  },
  {
    name: "谷雨",
    dateRange: "4月19-21日",
    exactFormula: "太阳黄经30°",
    customExt: "喝谷雨茶、祭仓颉",
    shanxiCustom: "晋南种谷",
    songRec: ["《谷雨》- 音阙诗听", "《茶山》- 纯音乐"],
    songUrl: ["https://example.com/guyu1.mp3", "https://example.com/guyu2.mp3"],
    poetry: "谷雨如丝复似尘，煮瓶浮蜡正尝新。",
    poet: "范成大《晚春田园杂兴》",
    archMatch: "悬空寺",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+spring+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+summer+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+autumn+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+winter+rainy+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "牡丹、芍药",
    fauna: "布谷鸟、蚕",
    customDetails:
      "谷雨节气是春季的最后一个节气，标志着雨量充足而及时，谷类作物能茁壮成长。在这一天，人们会喝谷雨茶、祭仓颉等习俗，祈求丰收。",
  },
  {
    name: "立夏",
    dateRange: "5月5-7日",
    exactFormula: "太阳黄经45°",
    customExt: "斗蛋、称人",
    shanxiCustom: "晋中尝新麦",
    songRec: ["《立夏》- 音阙诗听", "《麦浪》- 纯音乐"],
    songUrl: [
      "https://example.com/lixia1.mp3",
      "https://example.com/lixia2.mp3",
    ],
    poetry: "立夏少半月，谷雨是今朝。",
    poet: "杨万里《立夏日南风大作》",
    archMatch: "王家大院",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20summer%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20spring%20summer%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20summer%20summer%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20autumn%20summer%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20winter%20summer%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "月季、蔷薇",
    fauna: "蝉、蝴蝶",
    customDetails:
      "立夏节气标志着夏季的开始，气温逐渐升高。在这一天，人们会斗蛋、称人等习俗，祈求健康和平安。",
  },
  {
    name: "小满",
    dateRange: "5月20-22日",
    exactFormula: "太阳黄经60°",
    customExt: "祭车神、食苦菜",
    shanxiCustom: "晋北磨麦尝新",
    songRec: ["《小满》- 音阙诗听", "《麦穗》- 变奏的梦想"],
    songUrl: [
      "https://example.com/xiaoman1.mp3",
      "https://example.com/xiaoman2.mp3",
    ],
    poetry: "小满田塍寻草药，农闲莫问动三车。",
    poet: "吴藕汀《小满》",
    archMatch: "平遥市楼",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+market+tower+grain+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+market+tower+spring+grain+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+market+tower+summer+grain+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+market+tower+autumn+grain+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+market+tower+winter+grain+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "石榴、栀子花",
    fauna: "螳螂、蝈蝈",
    customDetails:
      "小满节气标志着夏熟作物的籽粒开始灌浆饱满，但还未成熟。在这一天，人们会祭车神、食苦菜等习俗，祈求丰收。",
  },
  {
    name: "芒种",
    dateRange: "6月5-7日",
    exactFormula: "太阳黄经75°",
    customExt: "送花神、安苗",
    shanxiCustom: "晋南打麦场",
    songRec: ["《芒种》- 音阙诗听", "《风吹麦浪》- 李健"],
    songUrl: [
      "https://example.com/mangzhong1.mp3",
      "https://example.com/mangzhong2.mp3",
    ],
    poetry: "芒种忙忙割，农家乐启镰。",
    poet: "佚名",
    archMatch: "张壁古堡",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+harvest+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+spring+harvest+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+summer+harvest+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+autumn+harvest+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+winter+harvest+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "荷花、茉莉",
    fauna: "蜻蜓、萤火虫",
    customDetails:
      "芒种节气标志着麦类等有芒作物成熟，是收获的季节。在这一天，人们会送花神、安苗等习俗，祈求丰收和平安。",
  },
  {
    name: "夏至",
    dateRange: "6月21-22日",
    exactFormula: "太阳黄经90°",
    customExt: "吃夏至面、祭地",
    shanxiCustom: "晋中喝凉汤",
    songRec: ["《夏至》- 河图", "《蝉鸣》- 空雨"],
    songUrl: [
      "https://example.com/xiazhi1.mp3",
      "https://example.com/xiazhi2.mp3",
    ],
    poetry: "昼晷已云极，宵漏自此长。",
    poet: "韦应物《夏至避暑北池》",
    archMatch: "应县木塔",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+summer+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+spring+summer+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+summer+summer+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+autumn+summer+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+winter+summer+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "向日葵、合欢",
    fauna: "蝉、蟋蟀",
    customDetails:
      "夏至节气是夏季的中点，白天最长，夜晚最短。在这一天，人们会吃夏至面、祭地等习俗，祈求平安和丰收。",
  },
  {
    name: "小暑",
    dateRange: "7月6-8日",
    exactFormula: "太阳黄经105°",
    customExt: "晒伏姜、吃藕",
    shanxiCustom: "五台山避暑",
    songRec: ["《小暑》- 银临", "《清凉》- 巫娜"],
    songUrl: [
      "https://example.com/xiaoshu1.mp3",
      "https://example.com/xiaoshu2.mp3",
    ],
    poetry: "小暑大暑正清和，荷花香风透凉阁。",
    poet: "民间",
    archMatch: "五台山佛光寺",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=foguang+temple+summer+cool+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=foguang+temple+spring+summer+cool+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=foguang+temple+summer+summer+cool+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=foguang+temple+autumn+summer+cool+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=foguang+temple+winter+summer+cool+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "荷花、睡莲",
    fauna: "青蛙、蝈蝈",
    customDetails:
      "小暑节气标志着进入伏天，气温升高，天气炎热。在这一天，人们会晒伏姜、吃藕等习俗，祈求健康和清凉。",
  },
  {
    name: "大暑",
    dateRange: "7月22-24日",
    exactFormula: "太阳黄经120°",
    customExt: "喝伏茶、烧伏香",
    shanxiCustom: "晋东南喝绿豆汤",
    songRec: ["《大暑》- 音频怪物", "《骤雨》- 李志辉"],
    songUrl: [
      "https://example.com/dashu1.mp3",
      "https://example.com/dashu2.mp3",
    ],
    poetry: "大暑运金气，荆扬不知秋。",
    poet: "晁补之《大暑赋》",
    archMatch: "悬空寺",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+hot+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+spring+hot+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+summer+hot+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+autumn+hot+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+winter+hot+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "茉莉、夜来香",
    fauna: "蝉、蜻蜓",
    customDetails:
      "大暑节气是一年中最热的时期，气温最高。在这一天，人们会喝伏茶、烧伏香等习俗，祈求健康和清凉。",
  },
  {
    name: "立秋",
    dateRange: "8月7-9日",
    exactFormula: "太阳黄经135°",
    customExt: "贴秋膘、咬秋",
    shanxiCustom: "晋北吃炖肉",
    songRec: ["《立秋》- 周子琰", "《秋意浓》- 纯音乐"],
    songUrl: [
      "https://example.com/liqiu1.mp3",
      "https://example.com/liqiu2.mp3",
    ],
    poetry: "乳鸦啼散玉屏空，一枕新凉一扇风。",
    poet: "刘翰《立秋》",
    archMatch: "介休绵山",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+autumn+begin+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+spring+autumn+begin+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+summer+autumn+begin+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+autumn+autumn+begin+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mian+mountain+winter+autumn+begin+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "菊花、桂花",
    fauna: "大雁、蟋蟀",
    customDetails:
      "立秋节气标志着秋季的开始，气温逐渐下降。在这一天，人们会贴秋膘、咬秋等习俗，祈求健康和丰收。",
  },
  {
    name: "处暑",
    dateRange: "8月22-24日",
    exactFormula: "太阳黄经150°",
    customExt: "放河灯、开渔节",
    shanxiCustom: "晋中晒秋",
    songRec: ["《处暑》- 音阙诗听", "《凉风》- 王俊雄"],
    songUrl: [
      "https://example.com/chushu1.mp3",
      "https://example.com/chushu2.mp3",
    ],
    poetry: "处暑无三日，新凉直万金。",
    poet: "苏泂《长江二首》",
    archMatch: "悬空寺",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+autumn+wind+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+spring+autumn+wind+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+summer+autumn+wind+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+autumn+autumn+wind+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+winter+autumn+wind+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "芦苇、芦花",
    fauna: "白鹭、野鸭",
    customDetails:
      "处暑节气标志着炎热的暑天结束，气温逐渐下降。在这一天，人们会放河灯、开渔节等习俗，祈求平安和丰收。",
  },
  {
    name: "白露",
    dateRange: "9月7-9日",
    exactFormula: "太阳黄经165°",
    customExt: "收清露、饮白露茶",
    shanxiCustom: "晋南酿米酒",
    songRec: ["《白露》- 河图", "《蒹葭》- 古琴"],
    songUrl: [
      "https://example.com/bailu1.mp3",
      "https://example.com/bailu2.mp3",
    ],
    poetry: "白露团甘子，清晨散马蹄。",
    poet: "杜甫《白露》",
    archMatch: "平遥古城",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+autumn+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+spring+autumn+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+summer+autumn+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+autumn+autumn+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+winter+autumn+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "芦苇、秋菊",
    fauna: "大雁、秋蝉",
    customDetails:
      "白露节气标志着天气转凉，露水增多。在这一天，人们会收清露、饮白露茶等习俗，祈求健康和平安。",
  },
  {
    name: "秋分",
    dateRange: "9月22-24日",
    exactFormula: "太阳黄经180°",
    customExt: "祭月、吃秋菜",
    shanxiCustom: "晋北打场",
    songRec: ["《秋分》- 音阙诗听", "《月光》- 纯音乐"],
    songUrl: [
      "https://example.com/qiufen1.mp3",
      "https://example.com/qiufen2.mp3",
    ],
    poetry: "秋分客尚在，竹露夕微微。",
    poet: "杜甫《晚晴》",
    archMatch: "乔家大院",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+autumn+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+spring+autumn+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+summer+autumn+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+autumn+autumn+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+winter+autumn+equinox+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "菊花、桂花",
    fauna: "大雁、松鼠",
    customDetails:
      "秋分节气是秋季的中点，昼夜平分。在这一天，人们会祭月、吃秋菜等习俗，祈求平安和丰收。",
  },
  {
    name: "寒露",
    dateRange: "10月8-9日",
    exactFormula: "太阳黄经195°",
    customExt: "赏菊、吃芝麻",
    shanxiCustom: "晋中摘棉花",
    songRec: ["《寒露》- 音阙诗听", "《菊颂》- 纯音乐"],
    songUrl: [
      "https://example.com/hanlu1.mp3",
      "https://example.com/hanlu2.mp3",
    ],
    poetry: "袅袅凉风动，凄凄寒露零。",
    poet: "白居易《池上》",
    archMatch: "应县木塔",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+cold+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+spring+cold+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+summer+cold+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+autumn+cold+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+winter+cold+dew+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "菊花、芦花",
    fauna: "大雁、野兔",
    customDetails:
      "寒露节气标志着天气转冷，露水更凉。在这一天，人们会赏菊、吃芝麻等习俗，祈求健康和平安。",
  },
  {
    name: "霜降",
    dateRange: "10月23-24日",
    exactFormula: "太阳黄经210°",
    customExt: "赏菊、吃柿子",
    shanxiCustom: "晋南收秋",
    songRec: ["《霜降》- 音阙诗听", "《秋霜》- 纯音乐"],
    songUrl: [
      "https://example.com/shuangjiang1.mp3",
      "https://example.com/shuangjiang2.mp3",
    ],
    poetry: "霜降碧天静，秋事促西风。",
    poet: "叶梦得《水调歌头·霜降》",
    archMatch: "张壁古堡",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+autumn+frost+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+spring+autumn+frost+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+summer+autumn+frost+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+autumn+autumn+frost+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+winter+autumn+frost+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "菊花、枫树",
    fauna: "野兔、松鼠",
    customDetails:
      "霜降节气标志着天气渐冷，开始降霜。在这一天，人们会赏菊、吃柿子等习俗，祈求健康和平安。",
  },
  {
    name: "立冬",
    dateRange: "11月7-8日",
    exactFormula: "太阳黄经225°",
    customExt: "补冬、吃饺子",
    shanxiCustom: "晋北储冬菜",
    songRec: ["《立冬》- 音阙诗听", "《冬雪》- 纯音乐"],
    songUrl: [
      "https://example.com/lidong1.mp3",
      "https://example.com/lidong2.mp3",
    ],
    poetry: "立冬犹十日，衣亦未装绵。",
    poet: "方回《立冬前一日霜对菊有感》",
    archMatch: "王家大院",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20winter%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20spring%20winter%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20summer%20winter%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20autumn%20winter%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20winter%20winter%20begin%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、松树",
    fauna: "喜鹊、麻雀",
    customDetails:
      "立冬节气标志着冬季的开始，气温逐渐下降。在这一天，人们会补冬、吃饺子等习俗，祈求健康和温暖。",
  },
  {
    name: "小雪",
    dateRange: "11月22-23日",
    exactFormula: "太阳黄经240°",
    customExt: "腌腊肉、吃糍粑",
    shanxiCustom: "晋南做酸菜",
    songRec: ["《小雪》- 音阙诗听", "《雪落》- 纯音乐"],
    songUrl: [
      "https://example.com/xiaoxue1.mp3",
      "https://example.com/xiaoxue2.mp3",
    ],
    poetry: "小雪晴沙不作泥，疏帘红日弄朝晖。",
    poet: "黄庭坚《小雪》",
    archMatch: "悬空寺",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+light+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+spring+light+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+summer+light+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+autumn+light+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+winter+light+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、雪松",
    fauna: "喜鹊、麻雀",
    customDetails:
      "小雪节气标志着开始降雪，但雪量较小。在这一天，人们会腌腊肉、吃糍粑等习俗，祈求健康和丰收。",
  },
  {
    name: "大雪",
    dateRange: "12月6-8日",
    exactFormula: "太阳黄经255°",
    customExt: "腌肉、赏雪",
    shanxiCustom: "晋北扫雪",
    songRec: ["《大雪》- 音阙诗听", "《踏雪》- 纯音乐"],
    songUrl: [
      "https://example.com/daxue1.mp3",
      "https://example.com/daxue2.mp3",
    ],
    poetry: "大雪江南见未曾，今年方始是严凝。",
    poet: "陆游《大雪》",
    archMatch: "应县木塔",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+heavy+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+spring+heavy+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+summer+heavy+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+autumn+heavy+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+winter+heavy+snow+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、雪松",
    fauna: "喜鹊、野兔",
    customDetails:
      "大雪节气标志着雪量增大，天气更加寒冷。在这一天，人们会腌肉、赏雪等习俗，祈求健康和温暖。",
  },
  {
    name: "冬至",
    dateRange: "12月21-23日",
    exactFormula: "太阳黄经270°",
    customExt: "吃饺子、画九",
    shanxiCustom: "晋中吃头脑",
    songRec: ["《冬至》- 音阙诗听", "《寒夜》- 纯音乐"],
    songUrl: [
      "https://example.com/dongzhi1.mp3",
      "https://example.com/dongzhi2.mp3",
    ],
    poetry: "天时人事日相催，冬至阳生春又来。",
    poet: "杜甫《小至》",
    archMatch: "平遥古城",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+winter+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+spring+winter+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+summer+winter+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+autumn+winter+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+winter+winter+solstice+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、松树",
    fauna: "喜鹊、麻雀",
    customDetails:
      "冬至节气是冬季的中点，白天最短，夜晚最长。在这一天，人们会吃饺子、画九等习俗，祈求健康和温暖。",
  },
  {
    name: "小寒",
    dateRange: "1月5-7日",
    exactFormula: "太阳黄经285°",
    customExt: "吃腊八粥、扫房",
    shanxiCustom: "晋北熬腊八粥",
    songRec: ["《小寒》- 音阙诗听", "《腊八》- 纯音乐"],
    songUrl: [
      "https://example.com/xiaohan1.mp3",
      "https://example.com/xiaohan2.mp3",
    ],
    poetry: "小寒连大吕，欢鹊垒新巢。",
    poet: "元稹《小寒》",
    archMatch: "乔家大院",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+minor+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+spring+minor+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+summer+minor+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+autumn+minor+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+winter+minor+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、腊梅",
    fauna: "喜鹊、麻雀",
    customDetails:
      "小寒节气标志着天气寒冷，但还未到最冷。在这一天，人们会吃腊八粥、扫房等习俗，祈求健康和温暖。",
  },
  {
    name: "大寒",
    dateRange: "1月20-21日",
    exactFormula: "太阳黄经300°",
    customExt: "尾牙祭、守岁",
    shanxiCustom: "晋南蒸年馍",
    songRec: ["《大寒》- 音阙诗听", "《年关》- 纯音乐"],
    songUrl: [
      "https://example.com/dahan1.mp3",
      "https://example.com/dahan2.mp3",
    ],
    poetry: "大寒须遣酒争豪，绿蚁浮蛆按玉槽。",
    poet: "王之道《和孔纯老按属邑六首》",
    archMatch: "张壁古堡",
    archImg:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+major+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+spring+major+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+summer+major+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+autumn+major+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+castle+winter+major+cold+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    flora: "梅花、松树",
    fauna: "喜鹊、麻雀",
    customDetails:
      "大寒节气是一年中最冷的时期。在这一天，人们会尾牙祭、守岁等习俗，祈求健康和温暖。",
  },
];

// 山西古建列表
const ancientBuildings = [
  {
    name: "王家大院",
    location: "山西省灵石县静升镇",
    dynasty: "清代",
    features: "华夏民居第一宅",
    history: "王姓家族历时300年修建",
    songRec: ["《大院》- 林海", "《晋商》- 赵季平"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20spring%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20summer%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20autumn%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wang%20family%20compound%20winter%20anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    bestSeason: "春",
    mapCoord: [111.74, 36.89],
  },
  {
    name: "乔家大院",
    location: "山西省祁县乔家堡村",
    dynasty: "清代",
    features: "北方民居建筑的一颗明珠",
    history: "乔致庸发家后修建",
    songRec: ["《乔家大院》- 赵季平", "《晋商往事》- 纯音乐"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+spring+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+autumn+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qiao+compound+winter+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    bestSeason: "秋",
    mapCoord: [112.33, 37.32],
  },
  {
    name: "平遥古城",
    location: "山西省平遥县",
    dynasty: "明代",
    features: "中国保存最完好的四大古城之一",
    history: "明清金融中心",
    songRec: ["《平遥古韵》- 林海", "《票号》- 纯音乐"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+spring+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+autumn+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pingyao+ancient+city+winter+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    bestSeason: "四季",
    mapCoord: [112.19, 37.21],
  },
  {
    name: "应县木塔",
    location: "山西省应县",
    dynasty: "辽代",
    features: "世界最高木塔",
    history: "佛宫寺释迦塔",
    songRec: ["《木塔风铃》- 纯音乐", "《辽风》- 赵季平"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+spring+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+autumn+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yingxian+pagoda+winter+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    bestSeason: "秋",
    mapCoord: [113.17, 39.53],
  },
  {
    name: "悬空寺",
    location: "山西省浑源县",
    dynasty: "北魏",
    features: "挂在悬崖上的寺庙",
    history: "建于悬崖峭壁间",
    songRec: ["《悬空》- 林海", "《崖上》- 纯音乐"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+spring+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+summer+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+autumn+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hanging+temple+winter+anime%20ink%20painting%20chinese%20style%20soft%20elegant&image_size=landscape_4_3",
    ],
    bestSeason: "夏",
    mapCoord: [113.67, 39.6],
  },
  {
    name: "永乐宫",
    location: "山西省芮城县",
    dynasty: "元代",
    features: "朝元图壁画",
    history: "道教全真派祖庭",
    songRec: ["《永乐朝元》- 国风集", "《壁画之谜》- 林海"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yongle+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yongle+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yongle+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yongle+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "秋季",
    mapCoord: [110.69, 34.69],
  },
  {
    name: "解州关帝庙",
    location: "山西省运城市解州镇",
    dynasty: "隋朝始建",
    features: "武庙之冠",
    history: "关羽故里",
    songRec: ["《关公》- 赵季平", "《忠义》- 古风曲"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=guandi+temple+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=guandi+temple+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=guandi+temple+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=guandi+temple+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "四季",
    mapCoord: [110.87, 34.86],
  },
  {
    name: "张壁古堡",
    location: "山西省介休市",
    dynasty: "十六国时期",
    features: "地道、星象村",
    history: "袖珍古堡",
    songRec: ["《古堡》- 林海", "《地道战》- 变奏"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhangbi+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "夏",
    mapCoord: [111.98, 37.02],
  },
  {
    name: "皇城相府",
    location: "山西省晋城市阳城县",
    dynasty: "明清",
    features: "双城古堡、陈廷敬故居",
    history: "康熙老师宅邸",
    songRec: ["《相府》- 李志辉", "《河山楼》- 国风"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=huangcheng+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=huangcheng+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=huangcheng+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=huangcheng+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "春",
    mapCoord: [112.58, 35.48],
  },
  {
    name: "碛口古镇",
    location: "山西省吕梁市临县",
    dynasty: "明清",
    features: "九曲黄河第一镇",
    history: "水旱码头",
    songRec: ["《碛口》- 林海", "《黄河谣》- 古琴"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qikou+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qikou+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qikou+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=qikou+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "秋",
    mapCoord: [110.82, 37.68],
  },
  {
    name: "大云院",
    location: "山西省长治市平顺县",
    dynasty: "五代",
    features: "五代壁画、木构",
    history: "弥陀殿",
    songRec: ["《大云梵音》- 巫娜"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dayun+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dayun+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dayun+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dayun+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "四季",
    mapCoord: [113.58, 36.2],
  },
  {
    name: "龙门寺",
    location: "山西省长治市平顺县",
    dynasty: "五代至清",
    features: "六朝建筑集于一体",
    history: "西配殿五代遗构",
    songRec: ["《龙门》- 林海"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=longmen+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=longmen+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=longmen+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=longmen+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "春",
    mapCoord: [113.55, 36.18],
  },
  {
    name: "崇福寺",
    location: "山西省朔州市",
    dynasty: "金代",
    features: "弥陀殿金代巨构",
    history: "朔州第一寺",
    songRec: ["《崇福》- 空雨"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chongfu+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chongfu+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chongfu+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chongfu+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "秋",
    mapCoord: [112.43, 39.33],
  },
  {
    name: "镇国寺",
    location: "山西省平遥县",
    dynasty: "五代北汉",
    features: "万佛殿、五代彩塑",
    history: "平遥世界遗产组成部分",
    songRec: ["《镇国》- 变奏"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhenguo+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhenguo+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhenguo+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zhenguo+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "春",
    mapCoord: [112.21, 37.19],
  },
  {
    name: "双林寺",
    location: "山西省平遥县",
    dynasty: "明代",
    features: "两千余尊彩塑",
    history: "东方彩塑艺术宝库",
    songRec: ["《双林》- 巫娜"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shuanglin+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shuanglin+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shuanglin+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shuanglin+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "夏",
    mapCoord: [112.19, 37.18],
  },
  {
    name: "娘子关",
    location: "山西省平定县",
    dynasty: "唐代",
    features: "长城关隘、瀑布",
    history: "平阳公主驻守",
    songRec: ["《娘子关》- 林海"],
    seasonsImg: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=niangziguan+spring+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=niangziguan+summer+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=niangziguan+autumn+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=niangziguan+winter+anime+ink+painting+chinese+style+soft+elegant&image_size=landscape_4_3",
    ],
    bestSeason: "夏",
    mapCoord: [113.92, 37.97],
  },
];

// 辅助函数
function getExactDate(term) {
  return `${term.dateRange}（太阳黄经${term.exactFormula}，前后范时±1天）`;
}

// 诗词水墨逐字渲染
function renderPoetryWithInk(poetry, poet) {
  const container = document.createElement("div");
  container.className =
    "bg-primary/5 p-6 rounded-2xl shadow-inner mb-6 relative overflow-hidden";
  const lines = poetry.split(/[，。！？\n]/).filter((l) => l.trim().length > 0);
  const poetryDiv = document.createElement("div");
  poetryDiv.className = "poetry-content space-y-2";
  lines.forEach((line, lineIndex) => {
    const lineDiv = document.createElement("div");
    lineDiv.className = "poetry-line";
    for (let i = 0; i < line.length; i++) {
      const charSpan = document.createElement("span");
      charSpan.className = "poetry-ink-char";
      charSpan.style.setProperty("--char-index", i + lineIndex * 10);
      charSpan.textContent = line[i];
      lineDiv.appendChild(charSpan);
    }
    poetryDiv.appendChild(lineDiv);
  });
  container.appendChild(poetryDiv);
  const poetDiv = document.createElement("div");
  poetDiv.className = "poet-name text-right text-stone-600";
  poetDiv.textContent = poet;
  container.appendChild(poetDiv);
  return container;
}

// 渲染24节气卡片
function renderSolarTerms() {
  console.log("renderSolarTerms called");
  const container = document.getElementById("terms-container");
  console.log("terms-container found:", container);
  if (!container) return;
  solarTermsData.forEach((term) => {
    const card = document.createElement("div");
    card.className =
      "term-card bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl fade-in";
    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
          <img src="${term.archImg}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="${term.name}">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h3 class="text-white text-xl font-bold p-4">${term.name}</h3>
          </div>
        </div>
        <div class="p-6 space-y-3">
          <p class="text-gray-600"><i class="fa fa-calendar text-gold mr-2"></i>${term.dateRange}</p>
          <p class="text-gray-600"><i class="fa fa-map-marker text-gold mr-2"></i>${term.archMatch}</p>
          <button class="view-detail-btn bg-gold text-dark px-4 py-2 rounded-lg hover:shadow-md transition w-full mt-2" data-term-id="${term.name}">
            查看详情
          </button>
        </div>
      `;
    container.appendChild(card);
  });
  container.querySelectorAll(".view-detail-btn[data-term-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const termId = btn.dataset.termId;
      const term = solarTermsData.find(t => t.name === termId);
      if (term) {
        openTermDetail(term);
      } else {
        console.error("未找到节气:", termId);
      }
    });
  });
}

// 渲染山西古建卡片
function renderBuildings() {
  console.log("renderBuildings called");
  const container = document.getElementById("buildings-container");
  console.log("buildings-container found:", container);
  if (!container) return;
  ancientBuildings.forEach((building) => {
    const card = document.createElement("div");
    card.className =
      "building-card bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl fade-in";
    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
          <img src="${building.seasonsImg[0]}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="${building.name}">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h3 class="text-white text-xl font-bold p-4">${building.name}</h3>
          </div>
        </div>
        <div class="p-6 space-y-3">
          <p class="text-gray-600"><i class="fa fa-map-marker text-gold mr-2"></i>${building.location}</p>
          <p class="text-gray-600"><i class="fa fa-history text-gold mr-2"></i>${building.dynasty}</p>
          <p class="text-gray-600"><i class="fa fa-star text-gold mr-2"></i>${building.features}</p>
          <button class="view-detail-btn bg-gold text-dark px-4 py-2 rounded-lg hover:shadow-md transition w-full mt-2" data-building-id="${building.name}">
            查看详情
          </button>
        </div>
      `;
    container.appendChild(card);
  });
  container.querySelectorAll(".view-detail-btn[data-building-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const buildingId = btn.dataset.buildingId;
      const building = ancientBuildings.find(b => b.name === buildingId);
      if (building) {
        openBuildingDetail(building);
      } else {
        console.error("未找到古建筑:", buildingId);
      }
    });
  });
}

// 打开节气详情
function openTermDetail(term) {
  const modal = document.getElementById("detail-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  modalTitle.innerText = `${term.name} · 节气物语`;
  modalBody.innerHTML = `<div class="space-y-4 relative" id="modal-detail-content"></div>`;
  const container = document.getElementById("modal-detail-content");
  const coverImg = term.archImg;

  // 根据节气添加特色动效
  let weatherEffect = "";
  if (term.name.includes("雨")) {
    weatherEffect = `<div class="weather-rain"></div>`;
  } else if (term.name.includes("雪")) {
    weatherEffect = `<div class="weather-snow"></div>`;
  } else if (term.name.includes("春") || term.name.includes("花")) {
    weatherEffect = `<div class="weather-flower"></div>`;
  }

  container.innerHTML = `
        <div class="relative rounded-lg overflow-hidden h-48 mb-4">
            <img src="${coverImg}" class="w-full h-full object-cover" alt="${term.name}">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            ${weatherEffect}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div class="flex items-center mb-2">
                    <i class="fa fa-calendar text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">精确日期</h3>
                </div>
                <p class="ml-6">${getExactDate(term)}</p>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-leaf text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">习俗</h3>
                </div>
                <p class="ml-6">全国通用：${term.customExt}；山西特色：${term.shanxiCustom}</p>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-music text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">推荐歌曲</h3>
                </div>
                <p class="ml-6">${term.songRec.join(" · ")}</p>
            </div>
            <div>
                <div class="flex items-center mb-2">
                    <i class="fa fa-building text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">应景古建</h3>
                </div>
                <p class="ml-6">${term.archMatch}</p>
                <div class="mt-2 ml-6">
                    <img src="${term.archImg}" class="w-full h-32 object-cover rounded-lg" alt="${term.archMatch}">
                </div>
            </div>
        </div>
        <div class="mt-6 bg-accent/50 p-4 rounded-lg">
            <div class="text-center mb-2">
                <h3 class="font-bold text-secondary">诗词</h3>
            </div>
            <div class="text-center text-lg font-chinese">
                ${term.poetry}
            </div>
            <div class="text-right mt-2 text-gray-600">
                —— ${term.poet}
            </div>
        </div>
        <div class="mt-4 text-sm text-gray-600">
            <p>推荐曲目：${term.songRec.join(" · ")}（当前为示例音乐，请替换为真实URL）</p>
        </div>
        <div class="mt-6 flex justify-end">
            <button id="close-modal" class="bg-stone-700/80 text-white px-6 py-2 rounded-lg hover:shadow-md transition">
                关闭
            </button>
        </div>`;

  // 初始化天气效果
  initWeatherEffect(term.name);

  playRecommendSong(term.songRec, modalBody);
  modal.classList.remove("hidden");
  document.getElementById("close-modal").addEventListener("click", () => {
    modal.classList.add("hidden");
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
  });
}

// 打开古建详情
function openBuildingDetail(building) {
  const modal = document.getElementById("detail-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  modalTitle.innerText = `${building.name} · 千年营造`;
  modalBody.innerHTML = `<div class="space-y-4 relative" id="modal-detail-content"></div>`;
  const container = document.getElementById("modal-detail-content");
  container.innerHTML = `
        <div class="relative rounded-lg overflow-hidden h-48 mb-4">
            <img src="${building.seasonsImg[0]}" class="w-full h-full object-cover" alt="${building.name}">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div class="flex items-center mb-2">
                    <i class="fa fa-map-marker text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">位置</h3>
                </div>
                <p class="ml-6">${building.location}</p>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-road text-gold mr-2"></i>
                    <a href="#" class="font-bold text-secondary">查看地图路线</a>
                </div>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-star text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">建筑特色</h3>
                </div>
                <p class="ml-6">${building.features}</p>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-history text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">历史渊源</h3>
                </div>
                <p class="ml-6">${building.history}</p>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-music text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">意象之乐</h3>
                </div>
                <p class="ml-6">${building.songRec.join(" · ")}</p>
            </div>
            <div>
                <div class="flex items-center mb-2">
                    <i class="fa fa-calendar text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">最佳节气观赏</h3>
                </div>
                <p class="ml-6">${building.bestSeason}景观</p>
                
                <div class="flex items-center mt-4 mb-2">
                    <i class="fa fa-camera text-gold mr-2"></i>
                    <h3 class="font-bold text-secondary">24节气全景掠影</h3>
                </div>
                <div class="season-carousel ml-6">
                    <div class="carousel-track custom-scroll">
                        ${building.seasonsImg
                          .map((img, idx) => {
                            const seasons = ["春景", "夏景", "秋景", "冬景"];
                            return `
                                <div class="carousel-item">
                                    <img src="${img}" alt="${building.name}${seasons[idx]}">
                                    <div class="carousel-caption">${seasons[idx]}</div>
                                </div>
                            `;
                          })
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <p>与节气共鸣：此建筑在${building.bestSeason}季节时最为动人，常需${building.features.toLowerCase()}时更见风骨。</p>
        </div>
        <div class="mt-4 text-sm text-gray-600">
            <p>推荐曲目：${building.songRec.join(" · ")}（当前为示例音乐，请替换为真实URL）</p>
        </div>
        <div class="mt-6 flex justify-end">
            <button id="close-modal" class="bg-stone-700/80 text-white px-6 py-2 rounded-lg hover:shadow-md transition">
                关闭
            </button>
        </div>`;
  playRecommendSong(building.songRec, modalBody);
  modal.classList.remove("hidden");
  document.getElementById("close-modal").addEventListener("click", () => {
    modal.classList.add("hidden");
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
  });
}

// 音乐播放
let currentAudio = null;
function playSongByUrl(songUrl) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (!songUrl) return;
  const audioPlayer = new Audio(songUrl);
  audioPlayer.loop = false;
  audioPlayer
    .play()
    .catch((e) => console.log("自动播放受限，请用户交互后播放"));
  currentAudio = audioPlayer;
  const currSpan = document.getElementById("current-song");
  if (currSpan) currSpan.innerText = "播放中";
  audioPlayer.onended = () => {
    if (currentAudio === audioPlayer) currentAudio = null;
  };
}
function playRecommendSong(songNames, modalBody) {
  if (songNames && songNames.length) {
    // 使用免费的示例音乐URL
    const demoUrl =
      "https://assets.mixkit.co/active_storage/sfx/2703/2703-preview.mp3";
    playSongByUrl(demoUrl);
    const songInfo = document.createElement("div");
    songInfo.className = "text-sm text-stone-500 mt-2 italic";
    songInfo.innerText = `🎵 推荐曲目：${songNames.join(" · ")}`;
    modalBody.appendChild(songInfo);
  }
}

// 知识竞答游戏
const quizQA = [
  {
    q: "立春时节，山西哪个大院会举办鞭春牛活动？",
    options: ["王家大院", "乔家大院", "渠家大院", "曹家大院"],
    correct: 0,
    hint: "灵石静升",
  },
  {
    q: "雨水节气，晋南地区有什么传统习俗？",
    options: ["蒸花馍祈雨", "贴剪纸", "放风筝", "炒豆子"],
    correct: 0,
    hint: "面食文化",
  },
  {
    q: "惊蛰节气，晋中地区的传统习俗是？",
    options: ["炒豆子驱虫", "吃梨", "祭白虎", "贴春牛"],
    correct: 0,
    hint: "驱虫避害",
  },
  {
    q: "春分时节，山西北部地区流行什么活动？",
    options: ["放风筝", "踏青", "扫墓", "吃春菜"],
    correct: 0,
    hint: "春风拂面",
  },
  {
    q: "清明节气，介休绵山因什么而闻名？",
    options: ["寒食节", "扫墓", "踏青", "放风筝"],
    correct: 0,
    hint: "介子推",
  },
  {
    q: "谷雨节气，晋南地区的主要农事活动是？",
    options: ["种谷", "收麦", "摘棉花", "种玉米"],
    correct: 0,
    hint: "谷雨种谷",
  },
  {
    q: "立夏时节，山西哪座大院会修剪庭院绿植防暑？",
    options: ["王家大院", "乔家大院", "渠家大院", "曹家大院"],
    correct: 0,
    hint: "灵石静升",
  },
  {
    q: "白露节气，平遥古城哪项设计体现防潮智慧？",
    options: ["粮仓", "城墙", "市楼", "票号"],
    correct: 0,
    hint: "谷物储存",
  },
  {
    q: "大雪节气，应县木塔的屋顶设计主要考虑？",
    options: ["防积雪", "防雷", "防火", "防虫"],
    correct: 0,
    hint: "坡度利于雪滑落",
  },
];
let quizIndex = 0,
  quizScore = 0,
  quizAnswered = false;
function loadQuiz() {
  if (quizIndex >= quizQA.length) {
    document.getElementById("quiz-question").innerText =
      "🎉 恭喜你完成了所有题目！";
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("quiz-score").innerText =
      `最终得分：${quizScore}/${quizQA.length}`;
    return;
  }
  const q = quizQA[quizIndex];
  document.getElementById("quiz-question").innerHTML =
    `<i class="fa fa-leaf text-gold mr-2"></i> ${q.q}`;
  const optsDiv = document.getElementById("quiz-options");
  optsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "quiz-option text-left";
    btn.addEventListener("click", () => {
      if (quizAnswered) return;
      quizAnswered = true;
      if (idx === q.correct) {
        quizScore++;
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        optsDiv.children[q.correct].classList.add("correct");
      }
      document.getElementById("quiz-score").innerText =
        `当前得分：${quizScore}`;
      setTimeout(() => {
        quizIndex++;
        quizAnswered = false;
        loadQuiz();
      }, 1200);
    });
    optsDiv.appendChild(btn);
  });
}
document.getElementById("next-quiz")?.addEventListener("click", () => {
  if (!quizAnswered) return;
  quizIndex++;
  quizAnswered = false;
  loadQuiz();
});

// 游戏选项卡切换功能
const gameTabs = document.querySelectorAll(".game-tab");
const gameContents = document.querySelectorAll(".game-content");

gameTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const game = tab.dataset.game;

    // 切换选项卡样式
    gameTabs.forEach((t) => {
      t.classList.remove("active", "bg-gold", "text-dark");
      t.classList.add("bg-stone-700/80", "text-white");
    });
    tab.classList.add("active", "bg-gold", "text-dark");
    tab.classList.remove("bg-stone-700/80", "text-white");

    // 切换游戏内容
    gameContents.forEach((content) => {
      content.classList.add("hidden");
    });
    document.getElementById(`${game}-game`).classList.remove("hidden");
  });
});

// 节气拼图游戏
const startPuzzleBtn = document.getElementById("start-puzzle");
const resetPuzzleBtn = document.getElementById("reset-puzzle");
const puzzleContainer = document.getElementById("puzzle-container");
const puzzlePreview = document.getElementById("puzzle-preview");
const puzzleImage = document.getElementById("puzzle-image");
const puzzleInstruction = document.getElementById("puzzle-instruction");

startPuzzleBtn?.addEventListener("click", () => {
  // 随机选择一个节气图片
  const randomTerm =
    solarTermsData[Math.floor(Math.random() * solarTermsData.length)];
  puzzleImage.src = randomTerm.archImg;
  puzzlePreview.classList.remove("hidden");

  // 显示拼图容器
  puzzleContainer.classList.remove("hidden");

  // 生成拼图碎片
  generatePuzzle(randomTerm.archImg);

  // 切换按钮
  startPuzzleBtn.classList.add("hidden");
  resetPuzzleBtn.classList.remove("hidden");

  // 更新指令
  puzzleInstruction.textContent = `将拼图碎片拖动到正确位置，完成${randomTerm.name}的拼图`;
});

resetPuzzleBtn?.addEventListener("click", () => {
  // 重新开始拼图
  const randomTerm =
    solarTermsData[Math.floor(Math.random() * solarTermsData.length)];
  puzzleImage.src = randomTerm.archImg;
  generatePuzzle(randomTerm.archImg);
  puzzleInstruction.textContent = `将拼图碎片拖动到正确位置，完成${randomTerm.name}的拼图`;
});

function generatePuzzle(imageUrl) {
  puzzleContainer.innerHTML = "";
  const pieces = 16; // 4x4拼图
  const pieceSize = 80; // 每个拼图碎片的大小

  // 设置拼图容器样式
  puzzleContainer.style.display = "grid";
  puzzleContainer.style.gridTemplateColumns = "repeat(4, 80px)";
  puzzleContainer.style.gridTemplateRows = "repeat(4, 80px)";
  puzzleContainer.style.gap = "2px";
  puzzleContainer.style.justifyContent = "center";
  puzzleContainer.style.padding = "20px";
  puzzleContainer.style.backgroundColor = "rgba(245, 245, 240, 0.8)";
  puzzleContainer.style.borderRadius = "12px";
  puzzleContainer.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("div");
    piece.className =
      "puzzle-piece w-20 h-20 cursor-move border border-gray-400 flex items-center justify-center transition-transform duration-300";
    piece.dataset.index = i;

    // 计算拼图碎片的位置
    const row = Math.floor(i / 4);
    const col = i % 4;

    // 设置背景图片
    piece.style.backgroundImage = `url(${imageUrl})`;
    piece.style.backgroundSize = `${pieceSize * 4}px ${pieceSize * 4}px`;
    piece.style.backgroundPosition = `-${col * pieceSize}px -${row * pieceSize}px`;
    piece.style.borderRadius = "4px";
    piece.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    piece.style.userSelect = "none";

    // 添加拖动功能
    piece.draggable = true;
    piece.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", piece.dataset.index);
      piece.style.opacity = "0.5";
      piece.style.transform = "scale(1.05)";
    });

    piece.addEventListener("dragend", (e) => {
      piece.style.opacity = "1";
      piece.style.transform = "scale(1)";
    });

    puzzleContainer.appendChild(piece);
  }

  // 打乱拼图碎片
  const puzzlePieces = Array.from(puzzleContainer.children);
  puzzlePieces.sort(() => Math.random() - 0.5);
  puzzleContainer.innerHTML = "";
  puzzlePieces.forEach((piece) => puzzleContainer.appendChild(piece));

  // 添加放置区域和游戏逻辑
  puzzleContainer.querySelectorAll(".puzzle-piece").forEach((piece) => {
    piece.addEventListener("dragover", (e) => {
      e.preventDefault();
      piece.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });

    piece.addEventListener("dragleave", (e) => {
      piece.style.backgroundColor = "transparent";
    });

    piece.addEventListener("drop", (e) => {
      e.preventDefault();
      piece.style.backgroundColor = "transparent";
      const draggedIndex = e.dataTransfer.getData("text/plain");
      const draggedPiece = document.querySelector(
        `[data-index="${draggedIndex}"]`,
      );

      // 交换位置
      const tempParent = piece.parentNode;
      const tempSibling = piece.nextSibling;
      draggedPiece.parentNode.removeChild(draggedPiece);
      if (tempSibling) {
        tempParent.insertBefore(draggedPiece, tempSibling);
      } else {
        tempParent.appendChild(draggedPiece);
      }

      // 检查是否完成拼图
      checkPuzzleCompletion();
    });
  });
}

function checkPuzzleCompletion() {
  const pieces = puzzleContainer.querySelectorAll(".puzzle-piece");
  let isComplete = true;

  pieces.forEach((piece, index) => {
    if (parseInt(piece.dataset.index) !== index) {
      isComplete = false;
    }
  });

  if (isComplete) {
    setTimeout(() => {
      alert("🎉 恭喜你完成了拼图！");
    }, 500);
  }
}

// 古建记忆游戏
const startMemoryBtn = document.getElementById("start-memory");
const resetMemoryBtn = document.getElementById("reset-memory");
const memoryContainer = document.getElementById("memory-container");
const memoryPreview = document.getElementById("memory-preview");
const memoryImage = document.getElementById("memory-image");
const memoryInstruction = document.getElementById("memory-instruction");
const memoryTimer = document.getElementById("memory-timer");

startMemoryBtn?.addEventListener("click", () => {
  // 随机选择一个古建图片
  const randomBuilding =
    ancientBuildings[Math.floor(Math.random() * ancientBuildings.length)];
  memoryImage.src = randomBuilding.seasonsImg[0];
  memoryPreview.classList.remove("hidden");

  // 显示记忆时间
  let timeLeft = 3;
  memoryTimer.textContent = `记忆时间: ${timeLeft}秒`;
  const timerInterval = setInterval(() => {
    timeLeft--;
    memoryTimer.textContent = `记忆时间: ${timeLeft}秒`;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      memoryPreview.classList.add("hidden");
      memoryContainer.classList.remove("hidden");
      generateMemoryGame(randomBuilding);
    }
  }, 1000);

  // 切换按钮
  startMemoryBtn.classList.add("hidden");
  resetMemoryBtn.classList.remove("hidden");

  // 更新指令
  memoryInstruction.textContent = `记住${randomBuilding.name}的外观，3秒后选择正确的图片`;
});

resetMemoryBtn?.addEventListener("click", () => {
  // 重新开始记忆游戏
  memoryContainer.classList.add("hidden");
  memoryPreview.classList.add("hidden");
  startMemoryBtn.classList.remove("hidden");
  resetMemoryBtn.classList.add("hidden");
  memoryInstruction.textContent = "点击下方按钮开始记忆游戏";
});

function generateMemoryGame(targetBuilding) {
  memoryContainer.innerHTML = "";

  // 创建4个选项，其中一个是正确的
  const options = [targetBuilding];
  while (options.length < 4) {
    const randomBuilding =
      ancientBuildings[Math.floor(Math.random() * ancientBuildings.length)];
    if (!options.includes(randomBuilding)) {
      options.push(randomBuilding);
    }
  }

  // 打乱选项顺序
  options.sort(() => Math.random() - 0.5);

  // 创建选项卡片
  options.forEach((building) => {
    const card = document.createElement("div");
    card.className =
      "memory-card w-24 h-24 bg-gray-200 rounded cursor-pointer border border-gray-300 flex items-center justify-center";
    card.innerHTML = `
      <img src="${building.seasonsImg[0]}" class="w-full h-full object-cover rounded" alt="${building.name}">
    `;
    card.addEventListener("click", () => {
      if (building === targetBuilding) {
        alert("🎉 恭喜你答对了！");
      } else {
        alert(`❌ 答错了，正确答案是${targetBuilding.name}`);
      }
      resetMemoryBtn.click();
    });
    memoryContainer.appendChild(card);
  });
}

// 节气连线游戏
const startConnectBtn = document.getElementById("start-connect");
const resetConnectBtn = document.getElementById("reset-connect");
const connectContainer = document.getElementById("connect-container");
const connectInstruction = document.getElementById("connect-instruction");

startConnectBtn?.addEventListener("click", () => {
  // 随机选择4个节气
  const selectedTerms = [];
  while (selectedTerms.length < 4) {
    const randomTerm =
      solarTermsData[Math.floor(Math.random() * solarTermsData.length)];
    if (!selectedTerms.includes(randomTerm)) {
      selectedTerms.push(randomTerm);
    }
  }

  // 显示连线游戏
  connectContainer.classList.remove("hidden");
  generateConnectGame(selectedTerms);

  // 切换按钮
  startConnectBtn.classList.add("hidden");
  resetConnectBtn.classList.remove("hidden");

  // 更新指令
  connectInstruction.textContent = "将左侧的节气与右侧对应的古建或习俗连接起来";
});

resetConnectBtn?.addEventListener("click", () => {
  // 重新开始连线游戏
  connectContainer.classList.add("hidden");
  startConnectBtn.classList.remove("hidden");
  resetConnectBtn.classList.add("hidden");
  connectInstruction.textContent = "点击下方按钮开始连线游戏";
});

function generateConnectGame(terms) {
  // 为每个节气生成对应的匹配项（民俗、风俗、花草鸟树）
  const matchItemsData = terms.map((term) => {
    // 随机选择匹配类型
    const matchTypes = [
      term.customExt, // 民俗
      term.flora, // 花草
      term.fauna, // 鸟树
      term.archMatch, // 古建
    ];
    return matchTypes[Math.floor(Math.random() * matchTypes.length)];
  });

  // 打乱匹配项
  const shuffledMatches = [...matchItemsData].sort(() => Math.random() - 0.5);
  const matchIndices = shuffledMatches.map((match) =>
    matchItemsData.indexOf(match),
  );

  connectContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      <div class="terms-column">
        <h4 class="font-bold text-center mb-4 text-secondary border-b border-gold pb-2">节气</h4>
        ${terms
          .map(
            (term, index) => `
          <div class="term-item mb-4 p-3 bg-white/90 rounded-lg shadow cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-white" draggable="true" data-term-index="${index}">
            <div class="flex items-center">
              <i class="fa fa-leaf text-green-600 mr-2"></i>
              <span>${term.name}</span>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="connections-column flex items-center justify-center">
        <div class="connections"></div>
      </div>
      <div class="matches-column">
        <h4 class="font-bold text-center mb-4 text-secondary border-b border-gold pb-2">对应民俗/花草/鸟树/古建</h4>
        ${shuffledMatches
          .map(
            (match, index) => `
          <div class="match-item mb-4 p-3 bg-white/90 rounded-lg shadow transition-all duration-300 hover:shadow-md hover:bg-white" data-match-index="${matchIndices[index]}">
            <div class="flex items-center">
              <i class="fa fa-link text-blue-600 mr-2"></i>
              <span>${match}</span>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;

  // 添加拖动功能
  const termItems = connectContainer.querySelectorAll(".term-item");
  const matchItems = connectContainer.querySelectorAll(".match-item");

  termItems.forEach((termItem) => {
    termItem.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", termItem.dataset.termIndex);
      termItem.style.opacity = "0.5";
      termItem.style.transform = "scale(1.05)";
    });

    termItem.addEventListener("dragend", (e) => {
      termItem.style.opacity = "1";
      termItem.style.transform = "scale(1)";
    });
  });

  matchItems.forEach((matchItem) => {
    matchItem.addEventListener("dragover", (e) => {
      e.preventDefault();
      matchItem.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });

    matchItem.addEventListener("dragleave", (e) => {
      matchItem.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    });

    matchItem.addEventListener("drop", (e) => {
      e.preventDefault();
      matchItem.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      const termIndex = e.dataTransfer.getData("text/plain");
      const matchIndex = matchItem.dataset.matchIndex;

      if (termIndex === matchIndex) {
        // 显示正确动画
        termItems[termIndex].classList.add(
          "bg-green-100",
          "border-green-500",
          "border",
        );
        matchItem.classList.add("bg-green-100", "border-green-500", "border");
        termItems[termIndex].style.pointerEvents = "none";
        matchItem.style.pointerEvents = "none";

        // 检查是否所有连接都已完成
        const allCorrect = Array.from(termItems).every((item) =>
          item.classList.contains("bg-green-100"),
        );
        if (allCorrect) {
          setTimeout(() => {
            alert("🎉 恭喜你完成了所有连接！");
          }, 500);
        } else {
          setTimeout(() => {
            alert("🎉 连接正确！");
          }, 100);
        }
      } else {
        // 显示错误动画
        termItems[termIndex].classList.add("bg-red-100");
        matchItem.classList.add("bg-red-100");
        setTimeout(() => {
          termItems[termIndex].classList.remove("bg-red-100");
          matchItem.classList.remove("bg-red-100");
          alert("❌ 连接错误，请重新尝试");
        }, 500);
      }
    });
  });
}

// 初始化
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired");
  renderSolarTerms();
  renderBuildings();
  loadQuiz();
  initMap(); // 初始化地图
  const audioBg = document.getElementById("bg-music");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const volSlider = document.getElementById("volume-control");
  playBtn?.addEventListener("click", () => {
    audioBg.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
  });
  pauseBtn?.addEventListener("click", () => {
    audioBg.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
  });
  volSlider?.addEventListener("input", () => {
    audioBg.volume = volSlider.value;
  });
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );
  faders.forEach((el) => observer.observe(el));
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  menuToggle?.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden"),
  );
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const hash = a.getAttribute("href");
      if (hash === "#") return;
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target)
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      if (mobileMenu && !mobileMenu.classList.contains("hidden"))
        mobileMenu.classList.add("hidden");
    });
  });
});

// 初始化天气效果
function initWeatherEffect(termName) {
  if (termName.includes("雨")) {
    createRain();
  } else if (termName.includes("雪")) {
    createSnow();
  } else if (termName.includes("春") || termName.includes("花")) {
    createFlower();
  }
}

// 创建下雨效果
function createRain() {
  const rainContainer = document.querySelector(".weather-rain");
  if (!rainContainer) return;

  rainContainer.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const raindrop = document.createElement("div");
    raindrop.className = "rain-drop";
    raindrop.style.left = Math.random() * 100 + "%";
    raindrop.style.animationDuration = Math.random() * 1 + 0.5 + "s";
    raindrop.style.animationDelay = Math.random() * 2 + "s";
    rainContainer.appendChild(raindrop);
  }
}

// 创建下雪效果
function createSnow() {
  const snowContainer = document.querySelector(".weather-snow");
  if (!snowContainer) return;

  snowContainer.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snow-flake";
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.animationDelay = Math.random() * 2 + "s";
    snowContainer.appendChild(snowflake);
  }
}

// 创建飘花效果
function createFlower() {
  const flowerContainer = document.querySelector(".weather-flower");
  if (!flowerContainer) return;

  flowerContainer.innerHTML = "";
  for (let i = 0; i < 50; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = Math.random() * 5 + 3 + "s";
    flower.style.animationDelay = Math.random() * 2 + "s";
    flower.style.width = Math.random() * 8 + 4 + "px";
    flower.style.height = Math.random() * 8 + 4 + "px";
    flower.style.background = `url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=small%20flower%20petal%20white%20translucent&image_size=square')`;
    flower.style.backgroundSize = "cover";
    flowerContainer.appendChild(flower);
  }
}

// 初始化地图
// 高德地图初始化函数
async function initMap() {
  console.log("开始初始化高德地图...");

  const mapContainer = document.getElementById("map-container");
  if (!mapContainer) {
    console.error("地图容器不存在");
    return;
  }

  // 检查高德地图API是否加载成功
  if (typeof AMap === "undefined") {
    console.warn("高德地图API未加载，显示提示信息");
    mapContainer.innerHTML = `
      <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
        <div class="text-center p-8">
          <i class="fa fa-map-marker text-4xl text-gray-400 mb-4"></i>
          <h3 class="text-xl font-bold text-gray-600 mb-2">地图加载中</h3>
          <p class="text-gray-500">请检查网络连接或刷新页面重试</p>
          <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-gold text-dark rounded-lg hover:bg-gold/80 transition">
            刷新页面
          </button>
        </div>
      </div>
    `;
    return;
  }

  try {
    console.log("高德地图API已加载，开始创建地图...");

    // 创建地图实例
    const map = new AMap.Map("map-container", {
      center: [112.549248, 37.857014], // 山西省会太原的坐标
      zoom: 7, // 初始缩放级别
      viewMode: "2D", // 使用2D视图（更稳定）
      resizeEnable: true, // 允许自适应大小
    });

    console.log("地图实例创建成功");

    // 加载地图控件插件
    try {
      await new Promise((resolve, reject) => {
        AMap.plugin(['AMap.Scale', 'AMap.ToolBar', 'AMap.MapType'], function() {
          try {
            map.addControl(new AMap.Scale());
            map.addControl(new AMap.ToolBar({
              position: 'LB'
            }));
            map.addControl(new AMap.MapType({
              defaultType: 0
            }));
            console.log("地图控件添加成功");
            resolve();
          } catch (e) {
            console.warn("地图控件添加失败:", e);
            resolve(); // 继续执行，不阻断
          }
        });
      });
    } catch (e) {
      console.warn("插件加载失败:", e);
    }

    // 为每个山西古建添加标记
    let markerCount = 0;
    const infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(0, -30),
    });

    ancientBuildings.forEach((building) => {
      if (
        building.mapCoord &&
        Array.isArray(building.mapCoord) &&
        building.mapCoord.length === 2
      ) {
        const [lng, lat] = building.mapCoord;

        // 验证坐标有效性
        if (
          typeof lng === "number" &&
          typeof lat === "number" &&
          lng >= 110 &&
          lng <= 114 &&
          lat >= 34 &&
          lat <= 40
        ) {
          // 创建标记
          const marker = new AMap.Marker({
            position: [lng, lat],
            title: building.name,
            animation: "AMAP_ANIMATION_DROP", // 添加下落动画
            label: {
              content: building.name,
              offset: new AMap.Pixel(0, -35),
            },
          });

          // 添加标记到地图
          marker.setMap(map);
          markerCount++;

          // 添加点击事件
          marker.on("click", function () {
            // 打开建筑详情
            openBuildingDetail(building);
          });

          // 添加鼠标悬停事件
          marker.on("mouseover", function () {
            infoWindow.setContent(`
              <div style="padding: 12px; min-width: 200px;">
                <h3 style="font-weight: bold; margin-bottom: 8px; color: #333;">${building.name}</h3>
                <p style="color: #666; margin-bottom: 4px;"><i class="fa fa-map-marker"></i> ${building.location}</p>
                <p style="color: #666; margin-bottom: 4px;"><i class="fa fa-history"></i> ${building.dynasty}</p>
                <p style="color: #888; font-size: 12px;">${building.features}</p>
                <p style="color: #d4af37; font-size: 12px; margin-top: 8px;">点击查看详情</p>
              </div>
            `);
            infoWindow.open(map, [lng, lat]);
          });

          marker.on("mouseout", function () {
            // 可选：鼠标移出时关闭信息窗口
            // infoWindow.close();
          });
        } else {
          console.warn(`建筑 ${building.name} 的坐标无效:`, building.mapCoord);
        }
      } else {
        console.warn(`建筑 ${building.name} 缺少坐标信息`);
      }
    });

    console.log(`高德地图初始化完成，共标记了 ${markerCount} 个山西古建`);

    // 添加地图加载完成提示
    if (markerCount > 0) {
      mapContainer.style.position = "relative";
      const tipDiv = document.createElement("div");
      tipDiv.className =
        "absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md z-10 text-sm";
      tipDiv.innerHTML = `<i class="fa fa-info-circle text-gold mr-2"></i>共 ${markerCount} 处古建，点击标记查看详情`;
      mapContainer.appendChild(tipDiv);

      // 3秒后自动隐藏提示
      setTimeout(() => {
        tipDiv.style.opacity = "0";
        tipDiv.style.transition = "opacity 0.5s";
        setTimeout(() => tipDiv.remove(), 500);
      }, 3000);
    }
  } catch (error) {
    console.error("高德地图初始化失败:", error);
    mapContainer.innerHTML = `
      <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
        <div class="text-center p-8">
          <i class="fa fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <h3 class="text-xl font-bold text-gray-600 mb-2">地图加载失败</h3>
          <p class="text-gray-500">错误信息: ${error.message}</p>
          <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-gold text-dark rounded-lg hover:bg-gold/80 transition">
            刷新重试
          </button>
        </div>
      </div>
    `;
  }
}

// 初始化模拟地图
function initMockMap() {
  const mapContainer = document.getElementById("map-container");
  mapContainer.innerHTML = `
    <div class="relative inset-0 flex items-center justify-center text-gray-400 flex-col">
      <img
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shanxi+map+anime+ink+painting+chinese+style+soft+elegant+with+ancient+buildings+markers&image_size=landscape_16_9"
        class="w-full h-full object-cover"
        alt="山西古建分布地图"
      />
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative z-10 text-center">
        <h3 class="text-white text-xl font-bold mb-2">
          山西古建分布地图
        </h3>
        <p class="text-white mb-4">点击下方按钮查看示例标记</p>
        <button
          id="mock-map-btn"
          class="mt-4 bg-gold text-dark px-4 py-2 rounded-lg"
        >
          查看示例标记
        </button>
      </div>
      <div
        id="map-markers"
        class="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></div>
    </div>
  `;

  // 添加模拟地图标记点击事件
  document.getElementById("mock-map-btn")?.addEventListener("click", () => {
    const markersDiv = document.getElementById("map-markers");
    markersDiv.innerHTML = "";
    ancientBuildings.slice(0, 12).forEach((b) => {
      if (b.mapCoord) {
        const left = 20 + (b.mapCoord[0] - 110) * 2.5;
        const top = 20 + (b.mapCoord[1] - 34) * 3;
        const marker = document.createElement("div");
        marker.className = "mock-marker absolute";
        marker.style.left = `${Math.min(90, Math.max(5, left))}%`;
        marker.style.top = `${Math.min(90, Math.max(5, top))}%`;
        marker.title = b.name;
        marker.addEventListener("click", () => openBuildingDetail(b));
        markersDiv.appendChild(marker);
      }
    });
    alert("已在地图上标记主要古建，点击金色标记可查看详情。");
  });

  console.log("模拟地图初始化完成");
}
