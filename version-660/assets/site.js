(() => {
    const MOVIE_INDEX = [
    {
        "title": "恋爱特别邀请",
        "url": "movie-1.html",
        "cover": "./1.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "喜剧/爱情",
        "type": "电视剧",
        "tags": [
            "婚恋综艺",
            "假戏真做",
            "职场",
            "轻浮男",
            "老实女"
        ]
    },
    {
        "title": "坡道上的红屋顶",
        "url": "movie-2.html",
        "cover": "./2.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "悬疑,剧情",
        "type": "电视剧",
        "tags": [
            "社会派",
            "家庭秘密",
            "慢热",
            "人性拷问"
        ]
    },
    {
        "title": "攞命",
        "url": "movie-3.html",
        "cover": "./3.jpg",
        "year": "2026",
        "region": "香港",
        "genre": "恐怖,犯罪",
        "type": "电影",
        "tags": [
            "港式邪典",
            "诅咒",
            "警匪",
            "民俗"
        ]
    },
    {
        "title": "好孕测验",
        "url": "movie-4.html",
        "cover": "./4.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "惊悚/悬疑",
        "type": "电影",
        "tags": [
            "验孕棒",
            "暗网",
            "直播",
            "诅咒",
            "反转"
        ]
    },
    {
        "title": "体验捞金鱼吧",
        "url": "movie-5.html",
        "cover": "./5.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "剧情、奇幻",
        "type": "电影",
        "tags": [
            "祭典",
            "时间循环",
            "治愈",
            "人生选择",
            "日式温情"
        ]
    },
    {
        "title": "霹雳玫瑰",
        "url": "movie-6.html",
        "cover": "./6.jpg",
        "year": "1995",
        "region": "香港",
        "genre": "动作,犯罪,女性",
        "type": "电影",
        "tags": [
            "女杀手",
            "双雄对决",
            "港式枪战"
        ]
    },
    {
        "title": "爸爸的味道",
        "url": "movie-7.html",
        "cover": "./7.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "美食",
            "亲情",
            "失智症",
            "记忆",
            "和解"
        ]
    },
    {
        "title": "河口的圣诞节",
        "url": "movie-8.html",
        "cover": "./8.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "圣诞",
            "渔村",
            "异地恋",
            "治愈"
        ]
    },
    {
        "title": "演员龟冈拓次",
        "url": "movie-9.html",
        "cover": "./9.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "剧情/喜剧",
        "type": "电影",
        "tags": [
            "龙套",
            "演艺圈",
            "人生如戏"
        ]
    },
    {
        "title": "雨色可可第一季",
        "url": "movie-10.html",
        "cover": "./10.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "日常/治愈",
        "type": "动画剧集",
        "tags": [
            "咖啡店",
            "泡面番",
            "温馨日常",
            "声优演绎",
            "生活碎片"
        ]
    },
    {
        "title": "秩序的守护者",
        "url": "movie-11.html",
        "cover": "./11.jpg",
        "year": "2025",
        "region": "法国/比利时",
        "genre": "犯罪、剧情、政治",
        "type": "剧集",
        "tags": [
            "警察",
            "腐败",
            "内鬼",
            "双重身份",
            "布鲁塞尔"
        ]
    },
    {
        "title": "普京之吻",
        "url": "movie-12.html",
        "cover": "./12.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "政治,传记,剧情",
        "type": "电影",
        "tags": [
            "克格勃",
            "权力巅峰",
            "铁汉柔情",
            "历史再造"
        ]
    },
    {
        "title": "燃烧吧篮朋友",
        "url": "movie-13.html",
        "cover": "./13.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/运动",
        "type": "剧集",
        "tags": [
            "篮球",
            "姐弟恋",
            "热血",
            "体育生",
            "治愈"
        ]
    },
    {
        "title": "苍生大医",
        "url": "movie-14.html",
        "cover": "./14.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "传记剧情",
        "type": "电视剧",
        "tags": [
            "中医",
            "抗疫",
            "真实人物",
            "医者仁心"
        ]
    },
    {
        "title": "碧血剑粤语",
        "url": "movie-15.html",
        "cover": "./15.jpg",
        "year": "1985",
        "region": "中国香港",
        "genre": "武侠,古装",
        "type": "剧集",
        "tags": [
            "TVB",
            "金庸",
            "复仇",
            "粤语原声"
        ]
    },
    {
        "title": "我的天才女友 第三季",
        "url": "movie-16.html",
        "cover": "./16.jpg",
        "year": "2024",
        "region": "意大利/美国",
        "genre": "剧情/女性/文学",
        "type": "TV 剧集",
        "tags": [
            "那不勒斯",
            "友谊",
            "女性觉醒",
            "婚姻"
        ]
    },
    {
        "title": "未来作业",
        "url": "movie-17.html",
        "cover": "./17.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "科幻/校园",
        "type": "电影",
        "tags": [
            "教育",
            "AI",
            "穿越",
            "成长"
        ]
    },
    {
        "title": "大篷车",
        "url": "movie-18.html",
        "cover": "./18.jpg",
        "year": "1971",
        "region": "印度",
        "genre": "动作/爱情/歌舞",
        "type": "电影",
        "tags": [
            "流浪",
            "复仇",
            "吉普赛",
            "经典"
        ]
    },
    {
        "title": "致命弯道2",
        "url": "movie-19.html",
        "cover": "./19.jpg",
        "year": "2007",
        "region": "美国",
        "genre": "恐怖,惊悚,动作",
        "type": "电影",
        "tags": [
            "畸形人",
            "食人族",
            "丛林追杀",
            "血腥",
            "幸存者"
        ]
    },
    {
        "title": "火王之千里同风",
        "url": "movie-20.html",
        "cover": "./20.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装、奇幻、爱情",
        "type": "电视剧",
        "tags": [
            "漫改剧",
            "异能者",
            "环保题材",
            "虐恋情深"
        ]
    },
    {
        "title": "为什么不是巴西",
        "url": "movie-21.html",
        "cover": "./21.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧/剧情/冒险",
        "type": "电影",
        "tags": [
            "中年危机",
            "足球",
            "误打误撞",
            "黑色幽默"
        ]
    },
    {
        "title": "最后的德鲁伊:加尔姆战争",
        "url": "movie-22.html",
        "cover": "./22.jpg",
        "year": "2014",
        "region": "日本/加拿大",
        "genre": "动作/科幻/奇幻",
        "type": "电影",
        "tags": [
            "3D动画",
            "德鲁伊",
            "机甲",
            "自然与科技",
            "史诗战争"
        ]
    },
    {
        "title": "目的地汽车旅馆",
        "url": "movie-23.html",
        "cover": "./23.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑,爱情,奇幻",
        "type": "电影",
        "tags": [
            "汽车旅馆",
            "时间循环",
            "遗憾",
            "治愈"
        ]
    },
    {
        "title": "艾拉妮丝",
        "url": "movie-24.html",
        "cover": "./24.jpg",
        "year": "2021",
        "region": "阿根廷",
        "genre": "剧情,犯罪,女性",
        "type": "电影",
        "tags": [
            "女毒枭",
            "单亲妈妈",
            "布宜诺斯艾利斯",
            "救赎"
        ]
    },
    {
        "title": "聂荣臻",
        "url": "movie-25.html",
        "cover": "./25.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "传记/历史",
        "type": "剧集",
        "tags": [
            "两弹一星",
            "开国元勋",
            "国防科技",
            "正剧"
        ]
    },
    {
        "title": "那你来做做看啊",
        "url": "movie-26.html",
        "cover": "./26.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧、职场、剧情",
        "type": "电视剧",
        "tags": [
            "职场互怼",
            "甲方乙方",
            "黑色幽默",
            "反向PUA"
        ]
    },
    {
        "title": "中间人2",
        "url": "movie-27.html",
        "cover": "./27.jpg",
        "year": "2014",
        "region": "英国",
        "genre": "喜剧/情色",
        "type": "电影",
        "tags": [
            "英式幽默",
            "成人喜剧",
            "创业",
            "恶搞"
        ]
    },
    {
        "title": "午夜人魔",
        "url": "movie-28.html",
        "cover": "./28.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "都市传说",
            "连环杀手",
            "午夜设定",
            "心理压迫"
        ]
    },
    {
        "title": "果宝特攻4",
        "url": "movie-29.html",
        "cover": "./29.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "喜剧,冒险,机甲",
        "type": "动画剧集",
        "tags": [
            "水果世界",
            "合体机甲",
            "搞笑反派"
        ]
    },
    {
        "title": "黑板丛林",
        "url": "movie-30.html",
        "cover": "./30.jpg",
        "year": "1955",
        "region": "美国",
        "genre": "剧情,犯罪",
        "type": "电影",
        "tags": [
            "教育",
            "问题少年",
            "街头文化",
            "经典",
            "社会写实"
        ]
    },
    {
        "title": "爱欲关头",
        "url": "movie-31.html",
        "cover": "./31.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "爱情/剧情/情色",
        "type": "电影",
        "tags": [
            "哲学",
            "出轨",
            "婚姻",
            "戛纳",
            "对话体"
        ]
    },
    {
        "title": "天颤地惧,两眼非兄",
        "url": "movie-32.html",
        "cover": "./32.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "恐怖,悬疑",
        "type": "电影",
        "tags": [
            "民俗",
            "双胞胎",
            "诅咒",
            "山村"
        ]
    },
    {
        "title": "不只但总是",
        "url": "movie-33.html",
        "cover": "./33.jpg",
        "year": "2025",
        "region": "法国/比利时",
        "genre": "剧情/同性",
        "type": "电影",
        "tags": [
            "中年",
            "同志",
            "疾病",
            "陪伴"
        ]
    },
    {
        "title": "美国大兵",
        "url": "movie-34.html",
        "cover": "./34.jpg",
        "year": "1978",
        "region": "美国",
        "genre": "剧情,战争",
        "type": "电影",
        "tags": [
            "越战",
            "街头",
            "回归社会"
        ]
    },
    {
        "title": "鬼谜",
        "url": "movie-35.html",
        "cover": "./35.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "恐怖,悬疑",
        "type": "电影",
        "tags": [
            "民俗",
            "降头",
            "密室",
            "无限循环"
        ]
    },
    {
        "title": "雪豹",
        "url": "movie-36.html",
        "cover": "./36.jpg",
        "year": "2010",
        "region": "中国大陆",
        "genre": "战争,剧情",
        "type": "电视剧",
        "tags": [
            "抗战",
            "特战",
            "传奇"
        ]
    },
    {
        "title": "侵入者2020",
        "url": "movie-37.html",
        "cover": "./37.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "悬疑/惊悚/心理",
        "type": "电影",
        "tags": [
            "密室",
            "入侵",
            "身份疑云",
            "反转"
        ]
    },
    {
        "title": "扎职",
        "url": "movie-38.html",
        "cover": "./38.jpg",
        "year": "2012",
        "region": "中国香港",
        "genre": "动作,犯罪",
        "type": "电影",
        "tags": [
            "黑帮",
            "上位",
            "兄弟情",
            "背叛",
            "宿命"
        ]
    },
    {
        "title": "神猫密探队",
        "url": "movie-39.html",
        "cover": "./39.jpg",
        "year": "2020",
        "region": "中国大陆",
        "genre": "喜剧,悬疑,儿童",
        "type": "动画剧集",
        "tags": [
            "猫咪",
            "侦探",
            "推理",
            "科普",
            "幽默"
        ]
    },
    {
        "title": "神探勇闯毒龙潭",
        "url": "movie-40.html",
        "cover": "./40.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "动作、犯罪、悬疑",
        "type": "电影",
        "tags": [
            "警匪",
            "卧底",
            "枪战",
            "江湖",
            "硬汉"
        ]
    },
    {
        "title": "鬼哭神嚎8:灵异鬼现",
        "url": "movie-41.html",
        "cover": "./41.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖/超自然",
        "type": "电影",
        "tags": [
            "凶宅",
            "直播",
            "灵媒",
            "伪纪录片"
        ]
    },
    {
        "title": "秘密夏天2017",
        "url": "movie-42.html",
        "cover": "./42.jpg",
        "year": "2017",
        "region": "韩国",
        "genre": "剧情、爱情、悬疑",
        "type": "电影",
        "tags": [
            "青春",
            "秘密",
            "乡村",
            "失踪",
            "回忆杀"
        ]
    },
    {
        "title": "一和二",
        "url": "movie-43.html",
        "cover": "./43.jpg",
        "year": "2025",
        "region": "中国内地",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "亲情",
            "双胞胎",
            "身份互换",
            "成长",
            "社会阶层"
        ]
    },
    {
        "title": "警察故事",
        "url": "movie-44.html",
        "cover": "./44.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "警匪,悬疑,动作",
        "type": "电视剧",
        "tags": [
            "重启",
            "单元剧",
            "写实",
            "人性",
            "职场"
        ]
    },
    {
        "title": "驴子巴达萨",
        "url": "movie-45.html",
        "cover": "./45.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "剧情/文艺/动物题材",
        "type": "电影",
        "tags": [
            "布莱松",
            "灵魂转世",
            "苦难哲学",
            "黑白"
        ]
    },
    {
        "title": "真假森林王",
        "url": "movie-46.html",
        "cover": "./46.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "喜剧,冒险,家庭",
        "type": "动画电影",
        "tags": [
            "森林",
            "王位",
            "模仿",
            "成长",
            "谎言"
        ]
    },
    {
        "title": "我不在的时候",
        "url": "movie-47.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情,奇幻",
        "type": "电影",
        "tags": [
            "遗愿",
            "时光胶囊",
            "社区温情"
        ]
    },
    {
        "title": "风速40米",
        "url": "movie-48.html",
        "cover": "./48.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "运动,剧情,青春",
        "type": "电影",
        "tags": [
            "帆船",
            "残奥",
            "励志",
            "师徒",
            "真实改编"
        ]
    },
    {
        "title": "幻影特攻粤语",
        "url": "movie-49.html",
        "cover": "./49.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "动作,科幻",
        "type": "电影",
        "tags": [
            "特工",
            "虚拟现实",
            "粤语原声",
            "枪战"
        ]
    },
    {
        "title": "爱的噩梦",
        "url": "movie-50.html",
        "cover": "./50.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "恐怖/心理/爱情",
        "type": "电影",
        "tags": [
            "梦魇",
            "亲密关系",
            "潜意识"
        ]
    },
    {
        "title": "无间道长之神剑门",
        "url": "movie-51.html",
        "cover": "./51.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "动作/奇幻/武侠",
        "type": "电影",
        "tags": [
            "僵尸",
            "道长",
            "神剑",
            "港式奇幻",
            "捉鬼"
        ]
    },
    {
        "title": "女武神的餐桌第二季",
        "url": "movie-52.html",
        "cover": "./52.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "美食,奇幻",
        "type": "剧集/动画",
        "tags": [
            "二次元",
            "治愈系",
            "同人衍生"
        ]
    },
    {
        "title": "谁吻了洁西卡",
        "url": "movie-53.html",
        "cover": "./53.jpg",
        "year": "2023",
        "region": "西班牙",
        "genre": "悬疑/喜剧/青春",
        "type": "电影",
        "tags": [
            "校园",
            "醉酒",
            "谜团",
            "多视角"
        ]
    },
    {
        "title": "白粉飞 第三季",
        "url": "movie-54.html",
        "cover": "./54.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "犯罪,剧情",
        "type": "剧集",
        "tags": [
            "贩毒集团",
            "80年代",
            "家族恩怨"
        ]
    },
    {
        "title": "淬火成钢",
        "url": "movie-55.html",
        "cover": "./55.jpg",
        "year": "2016",
        "region": "中国",
        "genre": "军旅,历史,成长",
        "type": "电视剧",
        "tags": [
            "红军",
            "锻造",
            "兄弟情",
            "信仰"
        ]
    },
    {
        "title": "海棠春",
        "url": "movie-56.html",
        "cover": "./56.jpg",
        "year": "1962",
        "region": "中国香港",
        "genre": "爱情,戏曲",
        "type": "电影",
        "tags": [
            "黄梅调",
            "经典",
            "李翰祥",
            "三角恋"
        ]
    },
    {
        "title": "新小子",
        "url": "movie-57.html",
        "cover": "./57.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "小镇",
            "邪教",
            "儿童"
        ]
    },
    {
        "title": "蹩脚魔术师:糟糕的圣诞节",
        "url": "movie-58.html",
        "cover": "./58.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧,家庭,奇幻",
        "type": "电影",
        "tags": [
            "圣诞特辑",
            "乌龙笑料",
            "温情治愈",
            "反套路"
        ]
    },
    {
        "title": "火鸟的沼泽",
        "url": "movie-59.html",
        "cover": "./59.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "genre": "奇幻/悬疑",
        "type": "电影",
        "tags": [
            "民间传说",
            "沼泽",
            "失踪",
            "心理"
        ]
    },
    {
        "title": "格林兄弟幻险记",
        "url": "movie-60.html",
        "cover": "./60.jpg",
        "year": "2005",
        "region": "美国/德国",
        "genre": "奇幻/冒险/喜剧",
        "type": "电影",
        "tags": [
            "格林童话",
            "魔幻现实",
            "戏说历史",
            "特瑞·吉列姆"
        ]
    },
    {
        "title": "当男人恋爱时",
        "url": "movie-61.html",
        "cover": "./61.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "爱情,剧情",
        "type": "剧集",
        "tags": [
            "黑道",
            "绝症",
            "虐恋",
            "救赎"
        ]
    },
    {
        "title": "发明之母",
        "url": "movie-62.html",
        "cover": "./62.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "传记/剧情",
        "type": "电影",
        "tags": [
            "女性发明家",
            "专利战争",
            "职场性别歧视",
            "真人真事"
        ]
    },
    {
        "title": "许海峰的枪",
        "url": "movie-63.html",
        "cover": "./63.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "剧情,传记,运动",
        "type": "电影",
        "tags": [
            "奥运首金",
            "射击",
            "励志"
        ]
    },
    {
        "title": "玛吉",
        "url": "movie-64.html",
        "cover": "./64.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "剧情、传记",
        "type": "电影",
        "tags": [
            "单亲妈妈",
            "工人阶级",
            "撒切尔时代",
            "女性力量"
        ]
    },
    {
        "title": "好好学吧",
        "url": "movie-65.html",
        "cover": "./65.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,家庭",
        "type": "电视剧",
        "tags": [
            "学区房",
            "反向鸡娃",
            "代际和解"
        ]
    },
    {
        "title": "夜愿梦想国",
        "url": "movie-66.html",
        "cover": "./66.jpg",
        "year": "2024",
        "region": "德国",
        "genre": "奇幻,冒险",
        "type": "电影",
        "tags": [
            "梦境世界",
            "兄妹冒险",
            "治愈系",
            "手绘风格",
            "隐喻"
        ]
    },
    {
        "title": "共进午餐",
        "url": "movie-67.html",
        "cover": "./67.jpg",
        "year": "2024",
        "region": "意大利",
        "genre": "喜剧/剧情",
        "type": "电影",
        "tags": [
            "生活流",
            "美食",
            "代际对话",
            "小成本"
        ]
    },
    {
        "title": "乳痕",
        "url": "movie-68.html",
        "cover": "./68.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "母乳",
            "产后抑郁",
            "母女",
            "身体自主",
            "写实"
        ]
    },
    {
        "title": "游戏改变者",
        "url": "movie-69.html",
        "cover": "./69.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "动作,惊悚,科幻",
        "type": "电影",
        "tags": [
            "虚拟现实",
            "大逃杀",
            "财阀",
            "反乌托邦",
            "黑科技"
        ]
    },
    {
        "title": "最终时刻:耶路撒冷",
        "url": "movie-70.html",
        "cover": "./70.jpg",
        "year": "2024",
        "region": "以色列/美国",
        "genre": "动作,惊悚,悬疑",
        "type": "剧集",
        "tags": [
            "中东",
            "倒计时",
            "核危机",
            "多线叙事",
            "国际"
        ]
    },
    {
        "title": "鱼跃在花见粤语",
        "url": "movie-71.html",
        "cover": "./71.jpg",
        "year": "2011",
        "region": "中国香港",
        "genre": "剧情,美食,家庭",
        "type": "剧集",
        "tags": [
            "寿司对决",
            "兄弟恩怨",
            "日料文化",
            "粤语原声"
        ]
    },
    {
        "title": "玻璃屋2001",
        "url": "movie-72.html",
        "cover": "./72.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "科幻/惊悚",
        "type": "电影",
        "tags": [
            "虚拟现实",
            "全透明监狱",
            "记忆删除",
            "伦理",
            "悬疑"
        ]
    },
    {
        "title": "密室大逃脱7大神版",
        "url": "movie-73.html",
        "cover": "./73.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "真人秀、悬疑",
        "type": "综艺",
        "tags": [
            "高智商",
            "密室",
            "解谜",
            "团队",
            "沉浸式"
        ]
    },
    {
        "title": "垂乳女",
        "url": "movie-74.html",
        "cover": "./74.jpg",
        "year": "2027",
        "region": "日本",
        "genre": "恐怖/民俗",
        "type": "电影",
        "tags": [
            "山村怪谈",
            "母神献祭",
            "诅咒传承"
        ]
    },
    {
        "title": "蜜月花车",
        "url": "movie-75.html",
        "cover": "./75.jpg",
        "year": "1954",
        "region": "美国",
        "genre": "喜剧/爱情/歌舞",
        "type": "电影",
        "tags": [
            "黑白片",
            "公路喜剧",
            "新婚夫妻",
            "倒霉之旅",
            "经典好莱坞"
        ]
    },
    {
        "title": "射雕英雄传之东成西就",
        "url": "movie-76.html",
        "cover": "./76.jpg",
        "year": "1993",
        "region": "中国香港",
        "genre": "喜剧,武侠,奇幻",
        "type": "电影",
        "tags": [
            "无厘头",
            "全明星",
            "恶搞"
        ]
    },
    {
        "title": "仙姬送子",
        "url": "movie-77.html",
        "cover": "./77.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "奇幻古装",
        "type": "电影",
        "tags": [
            "天庭",
            "人仙恋",
            "赎罪之旅",
            "治愈"
        ]
    },
    {
        "title": "星空奇迹",
        "url": "movie-78.html",
        "cover": "./78.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "科幻,爱情,青春",
        "type": "动画电影",
        "tags": [
            "天文",
            "纯爱",
            "时空错位",
            "治愈",
            "流星"
        ]
    },
    {
        "title": "47号公路",
        "url": "movie-79.html",
        "cover": "./79.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "惊悚公路",
        "type": "电影",
        "tags": [
            "无人荒漠",
            "卡车杀手",
            "生存对抗",
            "心理压迫"
        ]
    },
    {
        "title": "无相劫",
        "url": "movie-80.html",
        "cover": "./80.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑、犯罪、动作",
        "type": "电影",
        "tags": [
            "高科技犯罪",
            "反诈骗",
            "无脸人",
            "AI换脸",
            "烧脑"
        ]
    },
    {
        "title": "悲密",
        "url": "movie-81.html",
        "cover": "./81.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "悬疑/惊悚/犯罪",
        "type": "电影",
        "tags": [
            "秘密",
            "双胞胎",
            "复仇",
            "反转",
            "身份互换"
        ]
    },
    {
        "title": "妖魔大战争",
        "url": "movie-82.html",
        "cover": "./82.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "奇幻,动作,历史",
        "type": "电影",
        "tags": [
            "战国时代",
            "百鬼夜行",
            "武士",
            "阴阳术"
        ]
    },
    {
        "title": "马洛",
        "url": "movie-83.html",
        "cover": "./83.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "黑色电影",
            "私家侦探",
            "硬汉派",
            "连环案"
        ]
    },
    {
        "title": "恶魔的艺术2:邪降",
        "url": "movie-84.html",
        "cover": "./84.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "降头术",
            "因果报应",
            "校园霸凌",
            "血肉模糊"
        ]
    },
    {
        "title": "高速婆婆",
        "url": "movie-85.html",
        "cover": "./85.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "恐怖/都市传说",
        "type": "电影",
        "tags": [
            "公路",
            "诅咒",
            "老人",
            "飙车"
        ]
    },
    {
        "title": "闻香寻爱",
        "url": "movie-86.html",
        "cover": "./86.jpg",
        "year": "2023",
        "region": "台湾",
        "genre": "爱情,奇幻,剧情",
        "type": "电影",
        "tags": [
            "嗅觉",
            "气味",
            "灵魂伴侣",
            "治愈"
        ]
    },
    {
        "title": "倾斜",
        "url": "movie-87.html",
        "cover": "./87.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "悬疑,科幻,灾难",
        "type": "电影",
        "tags": [
            "地轴偏移",
            "物理学",
            "末世",
            "人性"
        ]
    },
    {
        "title": "永春白鹤拳之擎天画卷",
        "url": "movie-88.html",
        "cover": "./88.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "动作/古装",
        "type": "电影",
        "tags": [
            "永春拳",
            "寻宝",
            "清末",
            "海外华人"
        ]
    },
    {
        "title": "传教士",
        "url": "movie-89.html",
        "cover": "./89.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "奇幻/恐怖/西部",
        "type": "剧集",
        "tags": [
            "神父",
            "超能力",
            "天使与恶魔",
            "暴力美学"
        ]
    },
    {
        "title": "热血极速",
        "url": "movie-90.html",
        "cover": "./90.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "动作/赛车/犯罪",
        "type": "电影",
        "tags": [
            "地下赛车",
            "改装车",
            "兄弟情",
            "复仇",
            "氮气加速"
        ]
    },
    {
        "title": "龙的心",
        "url": "movie-91.html",
        "cover": "./91.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情,家庭,奇幻",
        "type": "电影",
        "tags": [
            "亲情",
            "神话",
            "残疾",
            "治愈",
            "都市传说"
        ]
    },
    {
        "title": "遥控战争",
        "url": "movie-92.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻/动作/战争",
        "type": "电影",
        "tags": [
            "无人机",
            "道德困境",
            "近未来",
            "心理惊悚",
            "技术伦理"
        ]
    },
    {
        "title": "跨世奇人",
        "url": "movie-93.html",
        "cover": "./93.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "奇幻,古装,悬疑",
        "type": "电视剧",
        "tags": [
            "穿越",
            "算命",
            "单元破案",
            "前世今生"
        ]
    },
    {
        "title": "再婚进行时",
        "url": "movie-94.html",
        "cover": "./94.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "爱情,家庭,喜剧",
        "type": "剧集",
        "tags": [
            "中年爱情",
            "重组家庭",
            "现实向",
            "治愈"
        ]
    },
    {
        "title": "杀戮场",
        "url": "movie-95.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "澳大利亚",
        "genre": "惊悚,恐怖,生存",
        "type": "电影",
        "tags": [
            "荒野追杀",
            "家庭噩梦",
            "无声恐惧"
        ]
    },
    {
        "title": "蜜月杀机",
        "url": "movie-96.html",
        "cover": "./96.jpg",
        "year": "2022",
        "region": "西班牙/美国",
        "genre": "惊悚/悬疑/爱情",
        "type": "电影",
        "tags": [
            "蜜月",
            "荒岛",
            "信任",
            "反转"
        ]
    },
    {
        "title": "金玉良缘红楼梦",
        "url": "movie-97.html",
        "cover": "./97.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "歌舞,爱情,古装",
        "type": "电影",
        "tags": [
            "全息投影",
            "戏曲改良",
            "经典新编"
        ]
    },
    {
        "title": "楼王之谜",
        "url": "movie-98.html",
        "cover": "./98.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑/家庭",
        "type": "电视剧",
        "tags": [
            "房产",
            "家族斗争",
            "商战",
            "遗产"
        ]
    },
    {
        "title": "赌船荒唐镜",
        "url": "movie-99.html",
        "cover": "./99.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "喜剧,动作,赌片",
        "type": "电影",
        "tags": [
            "赌术",
            "无厘头",
            "群星贺岁"
        ]
    },
    {
        "title": "房子",
        "url": "movie-100.html",
        "cover": "./100.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "蜗居",
            "亲情",
            "现实",
            "挤迫"
        ]
    },
    {
        "title": "穷友记第五季",
        "url": "movie-101.html",
        "cover": "./101.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧",
        "type": "剧集",
        "tags": [
            "底层生活",
            "黑色幽默",
            "友情",
            "社会讽刺",
            "单元剧"
        ]
    },
    {
        "title": "继承高校2",
        "url": "movie-102.html",
        "cover": "./102.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情,悬疑,青春",
        "type": "剧集",
        "tags": [
            "精英教育",
            "权力游戏",
            "谋杀案"
        ]
    },
    {
        "title": "微笑在我心",
        "url": "movie-103.html",
        "cover": "./103.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "都市情感,治愈",
        "type": "剧集",
        "tags": [
            "心理创伤",
            "阳光型抑郁",
            "民宿疗愈",
            "双向救赎",
            "慢生活"
        ]
    },
    {
        "title": "余额不足",
        "url": "movie-104.html",
        "cover": "./104.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,剧情,社会",
        "type": "电影",
        "tags": [
            "小人物",
            "借钱",
            "黑色幽默",
            "都市",
            "环环相扣"
        ]
    },
    {
        "title": "屋顶里的散步者",
        "url": "movie-105.html",
        "cover": "./105.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑,犯罪,情色",
        "type": "电影",
        "tags": [
            "偷窥",
            "阁楼",
            "密室",
            "江户川乱步"
        ]
    },
    {
        "title": "末世圣童",
        "url": "movie-106.html",
        "cover": "./106.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "科幻,惊悚,灾难",
        "type": "电影",
        "tags": [
            "末日",
            "婴孩",
            "救世主",
            "超能力",
            "牺牲"
        ]
    },
    {
        "title": "尘世女王",
        "url": "movie-107.html",
        "cover": "./107.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情,悬疑,人性",
        "type": "电影",
        "tags": [
            "女性",
            "心理",
            "复仇",
            "阶层",
            "华丽"
        ]
    },
    {
        "title": "赤手青春",
        "url": "movie-108.html",
        "cover": "./108.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "动作,校园,剧情",
        "type": "剧集",
        "tags": [
            "格斗",
            "友情",
            "底层逆袭",
            "热血",
            "霸凌"
        ]
    },
    {
        "title": "缩小人",
        "url": "movie-109.html",
        "cover": "./109.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "科幻/惊悚",
        "type": "电影",
        "tags": [
            "身体恐怖",
            "社会寓言",
            "黑科技"
        ]
    },
    {
        "title": "恐惧街",
        "url": "movie-110.html",
        "cover": "./110.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "恐怖,悬疑",
        "type": "电影",
        "tags": [
            "都市传说",
            "连环杀手",
            "小镇秘密",
            "复古恐怖"
        ]
    },
    {
        "title": "大学女生的性生活第二季",
        "url": "movie-111.html",
        "cover": "./111.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧/爱情/青春",
        "type": "剧集",
        "tags": [
            "女性友谊",
            "现代约会",
            "无厘头搞笑"
        ]
    },
    {
        "title": "长脚怪",
        "url": "movie-112.html",
        "cover": "./112.jpg",
        "year": "2023",
        "region": "加拿大",
        "genre": "科幻/悬疑",
        "type": "电影",
        "tags": [
            "都市传说",
            "超自然",
            "森林",
            "调查"
        ]
    },
    {
        "title": "在我心里的星星",
        "url": "movie-113.html",
        "cover": "./113.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "爱情,奇幻",
        "type": "电影",
        "tags": [
            "绝症",
            "治愈",
            "催泪"
        ]
    },
    {
        "title": "性爱帮派",
        "url": "movie-114.html",
        "cover": "./114.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "剧情/惊悚/情色",
        "type": "电影",
        "tags": [
            "邪教",
            "青少年",
            "心理操控",
            "血色青春"
        ]
    },
    {
        "title": "爱情不轮转",
        "url": "movie-115.html",
        "cover": "./115.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "爱情、剧情、奇幻",
        "type": "电影",
        "tags": [
            "时间循环",
            "离婚",
            "老年恋",
            "治愈",
            "法式浪漫"
        ]
    },
    {
        "title": "遇见爱情的利先生",
        "url": "movie-116.html",
        "cover": "./116.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "爱情/剧情",
        "type": "电视剧",
        "tags": [
            "虐恋",
            "豪门",
            "霸道总裁",
            "励志"
        ]
    },
    {
        "title": "烽烟",
        "url": "movie-117.html",
        "cover": "./117.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "战争,历史",
        "type": "剧集",
        "tags": [
            "抗日战争",
            "兄弟情",
            "谍战"
        ]
    },
    {
        "title": "下半场",
        "url": "movie-118.html",
        "cover": "./118.jpg",
        "year": "2020",
        "region": "中国台湾",
        "genre": "剧情,运动,家庭",
        "type": "电影",
        "tags": [
            "篮球",
            "兄弟",
            "听障",
            "热血"
        ]
    },
    {
        "title": "平静的田园",
        "url": "movie-119.html",
        "cover": "./119.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "剧情,悬疑,惊悚",
        "type": "剧集",
        "tags": [
            "田园惊悚",
            "邪教",
            "科技伦理",
            "基因编辑"
        ]
    },
    {
        "title": "同学会",
        "url": "movie-120.html",
        "cover": "./120.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "悬疑,剧情",
        "type": "电影",
        "tags": [
            "密闭空间",
            "人性博弈",
            "黑色幽默"
        ]
    },
    {
        "title": "素拉之梦",
        "url": "movie-121.html",
        "cover": "./121.jpg",
        "year": "2021",
        "region": "印度",
        "genre": "奇幻/悬疑",
        "type": "电影",
        "tags": [
            "集体梦境",
            "拉贾斯坦邦",
            "记忆盗贼",
            "女性力量"
        ]
    },
    {
        "title": "鹿湖艳尸",
        "url": "movie-122.html",
        "cover": "./122.jpg",
        "year": "1978",
        "region": "中国香港",
        "genre": "恐怖,悬疑",
        "type": "电影",
        "tags": [
            "邵氏",
            "风月",
            "谋杀"
        ]
    },
    {
        "title": "夜夜破胆",
        "url": "movie-123.html",
        "cover": "./123.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "恐怖,奇幻",
        "type": "剧集",
        "tags": [
            "单元剧",
            "噩梦",
            "民间传说",
            "血腥"
        ]
    },
    {
        "title": "成功的秘密",
        "url": "movie-124.html",
        "cover": "./124.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情",
        "type": "剧集",
        "tags": [
            "悬疑",
            "复仇",
            "财阀",
            "职场",
            "反转"
        ]
    },
    {
        "title": "红色药丸",
        "url": "movie-125.html",
        "cover": "./125.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "科幻/惊悚",
        "type": "电影",
        "tags": [
            "意识上传",
            "真相",
            "反抗",
            "赛博朋克"
        ]
    },
    {
        "title": "分手工作室",
        "url": "movie-126.html",
        "cover": "./126.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "喜剧,爱情",
        "type": "电视剧",
        "tags": [
            "单元剧",
            "情感调解",
            "奇葩客户",
            "损友",
            "反转"
        ]
    },
    {
        "title": "动乱1980",
        "url": "movie-127.html",
        "cover": "./127.jpg",
        "year": "2020",
        "region": "日本",
        "genre": "剧情、历史",
        "type": "电影",
        "tags": [
            "学运",
            "青春",
            "反思"
        ]
    },
    {
        "title": "爸爸在审判",
        "url": "movie-128.html",
        "cover": "./128.jpg",
        "year": "2025",
        "region": "印度",
        "genre": "剧情/法律",
        "type": "电影",
        "tags": [
            "酷儿",
            "家庭",
            "法庭戏",
            "代际冲突"
        ]
    },
    {
        "title": "赛尔号第五季之猎天困兽",
        "url": "movie-129.html",
        "cover": "./129.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻/冒险/儿童",
        "type": "动画/季播",
        "tags": [
            "赛尔号",
            "宇宙冒险",
            "机械兽",
            "太空监狱"
        ]
    },
    {
        "title": "埃利希博士的神奇的子弹",
        "url": "movie-130.html",
        "cover": "./130.jpg",
        "year": "1940",
        "region": "德国",
        "genre": "传记,剧情,历史",
        "type": "电影",
        "tags": [
            "医学史",
            "科研",
            "梅毒",
            "诺贝尔奖"
        ]
    },
    {
        "title": "春季大赏",
        "url": "movie-131.html",
        "cover": "./131.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "爱情/职场",
        "type": "剧集",
        "tags": [
            "广告界",
            "逆袭",
            "姐弟恋",
            "樱花季"
        ]
    },
    {
        "title": "不眠之夜",
        "url": "movie-132.html",
        "cover": "./132.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "悬疑,惊悚,奇幻",
        "type": "剧集",
        "tags": [
            "失眠诅咒",
            "梦境入侵",
            "心理惊悚",
            "都市怪谈"
        ]
    },
    {
        "title": "吸血黑王子",
        "url": "movie-133.html",
        "cover": "./133.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "奇幻/爱情",
        "type": "电视剧",
        "tags": [
            "吸血鬼",
            "宫斗",
            "契约婚姻"
        ]
    },
    {
        "title": "挖那只狗",
        "url": "movie-134.html",
        "cover": "./134.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "黑色幽默,犯罪",
        "type": "电影",
        "tags": [
            "荒诞",
            "寻宝",
            "错位"
        ]
    },
    {
        "title": "禽兽1953",
        "url": "movie-135.html",
        "cover": "./135.jpg",
        "year": "1953",
        "region": "日本",
        "genre": "剧情/犯罪/黑色电影",
        "type": "电影",
        "tags": [
            "战后",
            "颓废",
            "黑市",
            "人性"
        ]
    },
    {
        "title": "前任酒吧战!",
        "url": "movie-136.html",
        "cover": "./136.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧、爱情",
        "type": "电影",
        "tags": [
            "前任",
            "酒吧",
            "误会"
        ]
    },
    {
        "title": "爱上费加罗",
        "url": "movie-137.html",
        "cover": "./137.jpg",
        "year": "2020",
        "region": "澳大利亚",
        "genre": "爱情,音乐",
        "type": "电影",
        "tags": [
            "歌剧",
            "乡下",
            "声乐教练",
            "小镇竞赛"
        ]
    },
    {
        "title": "艾迪:大力士",
        "url": "movie-138.html",
        "cover": "./138.jpg",
        "year": "2024",
        "region": "英国,美国",
        "genre": "传记,运动,剧情",
        "type": "电影",
        "tags": [
            "大力士",
            "励志",
            "真实改编",
            "肌肉",
            "废柴逆袭"
        ]
    },
    {
        "title": "关于我家的一切",
        "url": "movie-139.html",
        "cover": "./139.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "剧集",
        "tags": [
            "家族史",
            "三代人",
            "拆迁",
            "代际冲突"
        ]
    },
    {
        "title": "盗梦睡务员",
        "url": "movie-140.html",
        "cover": "./140.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻,奇幻,心理",
        "type": "动画剧集",
        "tags": [
            "梦境盗取",
            "睡眠警察",
            "上班族"
        ]
    },
    {
        "title": "人类清除计划5",
        "url": "movie-141.html",
        "cover": "./141.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻,惊悚,动作",
        "type": "电影",
        "tags": [
            "无政府",
            "杀戮夜",
            "反乌托邦",
            "终极",
            "血腥"
        ]
    },
    {
        "title": "失控玩家",
        "url": "movie-142.html",
        "cover": "./142.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "喜剧/动作/科幻",
        "type": "电影",
        "tags": [
            "元宇宙",
            "AI觉醒",
            "NPC逆袭",
            "彩蛋狂魔",
            "反套路"
        ]
    },
    {
        "title": "日本桥",
        "url": "movie-143.html",
        "cover": "./143.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "社会议题",
            "孤独死",
            "记忆",
            "治愈"
        ]
    },
    {
        "title": "相对宇宙第二季",
        "url": "movie-144.html",
        "cover": "./144.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "科幻、惊悚、剧情",
        "type": "剧集",
        "tags": [
            "平行世界",
            "谍战",
            "身份认同",
            "冷色调",
            "高智商博弈"
        ]
    },
    {
        "title": "星运里的错",
        "url": "movie-145.html",
        "cover": "./145.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "剧情/爱情/科幻",
        "type": "电影",
        "tags": [
            "太空灾难",
            "绝症爱情",
            "硬科幻",
            "催泪"
        ]
    },
    {
        "title": "换做人看看",
        "url": "movie-146.html",
        "cover": "./146.jpg",
        "year": "2019",
        "region": "中国香港",
        "genre": "奇幻",
        "type": "电影",
        "tags": [
            "互换身体",
            "职场",
            "夫妻",
            "喜剧",
            "感悟"
        ]
    },
    {
        "title": "红鼻子驯鹿鲁道夫",
        "url": "movie-147.html",
        "cover": "./147.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画/家庭",
        "type": "电影",
        "tags": [
            "圣诞",
            "另类英雄",
            "自我认同"
        ]
    },
    {
        "title": "异教徒的标志",
        "url": "movie-148.html",
        "cover": "./148.jpg",
        "year": "2024",
        "region": "美国/英国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "邪教",
            "心理恐怖",
            "民俗",
            "孤立无援"
        ]
    },
    {
        "title": "闪耀青春",
        "url": "movie-149.html",
        "cover": "./149.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "校园竞技",
        "type": "剧集",
        "tags": [
            "啦啦队",
            "逆袭",
            "身体焦虑",
            "热血"
        ]
    },
    {
        "title": "千万不要忘记",
        "url": "movie-150.html",
        "cover": "./150.jpg",
        "year": "2023",
        "region": "中国",
        "genre": "悬疑",
        "type": "电影",
        "tags": [
            "失忆",
            "笔记",
            "小镇",
            "秘密",
            "反转"
        ]
    },
    {
        "title": "曼德拉",
        "url": "movie-151.html",
        "cover": "./1.jpg",
        "year": "2025",
        "region": "南非",
        "genre": "传记,历史,剧情",
        "type": "电影",
        "tags": [
            "曼德拉",
            "反种族隔离",
            "监狱",
            "和解",
            "史诗"
        ]
    },
    {
        "title": "美国忍者",
        "url": "movie-152.html",
        "cover": "./2.jpg",
        "year": "1985",
        "region": "美国",
        "genre": "动作,冒险,惊悚",
        "type": "电影",
        "tags": [
            "B级动作片",
            "冷兵器对战",
            "丛林营救",
            "80年代肌肉美学"
        ]
    },
    {
        "title": "与谁共眠",
        "url": "movie-153.html",
        "cover": "./3.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑/家庭",
        "type": "剧集",
        "tags": [
            "伪装身份",
            "同床异梦",
            "心理战"
        ]
    },
    {
        "title": "魔神坛斗士",
        "url": "movie-154.html",
        "cover": "./4.jpg",
        "year": "1988",
        "region": "日本",
        "genre": "动画/奇幻/动作",
        "type": "TV Series",
        "tags": [
            "铠甲",
            "烈火",
            "光明与黑暗",
            "五人战队"
        ]
    },
    {
        "title": "偶像大师百万现场!",
        "url": "movie-155.html",
        "cover": "./5.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "音乐/励志",
        "type": "动画/剧场版",
        "tags": [
            "偶像养成",
            "Live演出",
            "群像剧",
            "演唱会作画",
            "梦想接力"
        ]
    },
    {
        "title": "泰雷津",
        "url": "movie-156.html",
        "cover": "./6.jpg",
        "year": "2017",
        "region": "捷克",
        "genre": "剧情/历史/战争",
        "type": "电影",
        "tags": [
            "集中营",
            "音乐",
            "纳粹",
            "虚假宣传"
        ]
    },
    {
        "title": "绝密使命2021",
        "url": "movie-157.html",
        "cover": "./7.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "谍战/历史/剧情",
        "type": "剧集",
        "tags": [
            "红色",
            "交通线",
            "真实改编",
            "信仰"
        ]
    },
    {
        "title": "曼塔,曼塔:兹沃特泰尔",
        "url": "movie-158.html",
        "cover": "./8.jpg",
        "year": "2027",
        "region": "俄罗斯",
        "genre": "奇幻,冒险,史诗",
        "type": "电影",
        "tags": [
            "斯拉夫神话",
            "巨兽",
            "丛林法则",
            "部落战争"
        ]
    },
    {
        "title": "有完没完",
        "url": "movie-159.html",
        "cover": "./9.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "喜剧,奇幻",
        "type": "电影",
        "tags": [
            "时间循环",
            "小人物",
            "父子情",
            "日常荒诞"
        ]
    },
    {
        "title": "蓬门碧玉红颜泪",
        "url": "movie-160.html",
        "cover": "./10.jpg",
        "year": "1974",
        "region": "中国台湾",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "苦情",
            "女性",
            "时代悲剧",
            "坚韧"
        ]
    },
    {
        "title": "2005活跳尸",
        "url": "movie-161.html",
        "cover": "./11.jpg",
        "year": "2005",
        "region": "美国",
        "genre": "恐怖/喜剧",
        "type": "电影",
        "tags": [
            "僵尸",
            "恶搞",
            "血腥",
            "B级"
        ]
    },
    {
        "title": "地狱客栈第一季",
        "url": "movie-162.html",
        "cover": "./12.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "奇幻/恐怖/喜剧",
        "type": "剧集/季播",
        "tags": [
            "公路恐怖",
            "鬼魂",
            "客栈",
            "连环杀手",
            "单元剧"
        ]
    },
    {
        "title": "艳婚秘密",
        "url": "movie-163.html",
        "cover": "./13.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情/悬疑",
        "type": "电影",
        "tags": [
            "财阀",
            "复仇",
            "豪门恩怨",
            "反转"
        ]
    },
    {
        "title": "血世纪",
        "url": "movie-164.html",
        "cover": "./14.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻,恐怖,惊悚",
        "type": "电视剧",
        "tags": [
            "吸血鬼",
            "赛博朋克",
            "反乌托邦",
            "永生",
            "阶级"
        ]
    },
    {
        "title": "咎爱心风暴",
        "url": "movie-165.html",
        "cover": "./15.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "爱情,悬疑",
        "type": "电视剧",
        "tags": [
            "复仇",
            "心理",
            "禁忌"
        ]
    },
    {
        "title": "地藏龙神农巨兽",
        "url": "movie-166.html",
        "cover": "./16.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "灾难怪兽",
        "type": "电影",
        "tags": [
            "古生物",
            "神农架",
            "科研队",
            "生存之战"
        ]
    },
    {
        "title": "屋顶的公寓",
        "url": "movie-167.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "屋顶房",
            "都市孤独",
            "邻里",
            "治愈"
        ]
    },
    {
        "title": "卧虎传说",
        "url": "movie-168.html",
        "cover": "./18.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "动作,犯罪",
        "type": "电影",
        "tags": [
            "卧底",
            "黑帮",
            "父子",
            "宿命"
        ]
    },
    {
        "title": "银河艳星",
        "url": "movie-169.html",
        "cover": "./19.jpg",
        "year": "1996",
        "region": "香港",
        "genre": "剧情/情色",
        "type": "电影",
        "tags": [
            "风月片",
            "娱乐圈",
            "黑帮",
            "悲情",
            "邱淑贞风格"
        ]
    },
    {
        "title": "英雄少年",
        "url": "movie-170.html",
        "cover": "./20.jpg",
        "year": "1999",
        "region": "中国大陆",
        "genre": "动作、武侠、青春",
        "type": "电影",
        "tags": [
            "少年",
            "复仇",
            "剑法",
            "门派",
            "成长"
        ]
    },
    {
        "title": "阿马尔菲:女神的报酬",
        "url": "movie-171.html",
        "cover": "./21.jpg",
        "year": "2024",
        "region": "意大利、日本",
        "genre": "悬疑、犯罪、剧情",
        "type": "电影",
        "tags": [
            "异国风情",
            "外交风云",
            "绑架",
            "寻宝"
        ]
    },
    {
        "title": "+-正负之间",
        "url": "movie-172.html",
        "cover": "./22.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "剧情,爱情,家庭",
        "type": "电视剧",
        "tags": [
            "双胞胎",
            "性格互换",
            "和解",
            "都市情感",
            "人生选择"
        ]
    },
    {
        "title": "照片的她",
        "url": "movie-173.html",
        "cover": "./23.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "悬疑,爱情,奇幻",
        "type": "电影",
        "tags": [
            "暗房",
            "时空错位",
            "执念",
            "摄影"
        ]
    },
    {
        "title": "恋爱咖啡馆",
        "url": "movie-174.html",
        "cover": "./24.jpg",
        "year": "2028",
        "region": "韩国",
        "genre": "浪漫/喜剧/奇幻",
        "type": "电视剧",
        "tags": [
            "味觉超能力",
            "替身文学",
            "契约恋爱",
            "轻奇幻"
        ]
    },
    {
        "title": "雀圣",
        "url": "movie-175.html",
        "cover": "./25.jpg",
        "year": "2005",
        "region": "中国香港",
        "genre": "喜剧,动作,剧情",
        "type": "电影",
        "tags": [
            "麻将",
            "赌术",
            "失忆",
            "市井英雄",
            "王晶"
        ]
    },
    {
        "title": "双生赤狐",
        "url": "movie-176.html",
        "cover": "./26.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "奇幻/冒险/古装",
        "type": "动画电影",
        "tags": [
            "双主角",
            "狐妖",
            "羁绊",
            "宿命"
        ]
    },
    {
        "title": "爱存在",
        "url": "movie-177.html",
        "cover": "./27.jpg",
        "year": "2023",
        "region": "泰国",
        "genre": "爱情、奇幻、悬疑",
        "type": "剧集",
        "tags": [
            "意念",
            "失忆",
            "拯救",
            "高概念",
            "甜虐"
        ]
    },
    {
        "title": "顽猫斗俏鼠",
        "url": "movie-178.html",
        "cover": "./28.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧,动画,家庭",
        "type": "动画电影",
        "tags": [
            "猫鼠大战",
            "搞笑",
            "2D动画",
            "合家欢",
            "无厘头"
        ]
    },
    {
        "title": "毕业那年:分手季",
        "url": "movie-179.html",
        "cover": "./29.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "爱情,剧情,青春",
        "type": "电影",
        "tags": [
            "青春",
            "毕业",
            "现实",
            "异地恋",
            "催泪"
        ]
    },
    {
        "title": "蚁族的奋斗",
        "url": "movie-180.html",
        "cover": "./30.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "剧情/爱情/都市",
        "type": "电视剧",
        "tags": [
            "北漂",
            "职场菜鸟",
            "租房生活",
            "励志",
            "现实主义"
        ]
    },
    {
        "title": "高速狂情",
        "url": "movie-181.html",
        "cover": "./31.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "动作,爱情,惊悚",
        "type": "电影",
        "tags": [
            "公路电影",
            "雌雄大盗",
            "速度与激情"
        ]
    },
    {
        "title": "幕后玩家国语",
        "url": "movie-182.html",
        "cover": "./32.jpg",
        "year": "2018",
        "region": "中国大陆",
        "genre": "悬疑,商战",
        "type": "剧集",
        "tags": [
            "金融",
            "高智商",
            "操纵",
            "复仇",
            "国语配音"
        ]
    },
    {
        "title": "123度谋杀案",
        "url": "movie-183.html",
        "cover": "./33.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "数学",
            "现场温度",
            "完美犯罪",
            "教授",
            "体温谋杀"
        ]
    },
    {
        "title": "温特的故事:泳不放弃",
        "url": "movie-184.html",
        "cover": "./34.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情/家庭/励志",
        "type": "电影",
        "tags": [
            "残疾海豚",
            "真实改编",
            "永不放弃"
        ]
    },
    {
        "title": "露营",
        "url": "movie-185.html",
        "cover": "./35.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "恐怖,悬疑,生存",
        "type": "电影",
        "tags": [
            "野外",
            "直播",
            "神秘生物",
            "自媒体",
            "密闭空间"
        ]
    },
    {
        "title": "神探忠犬",
        "url": "movie-186.html",
        "cover": "./36.jpg",
        "year": "2025",
        "region": "中国内地",
        "genre": "悬疑,犯罪,温情",
        "type": "电影",
        "tags": [
            "退役警犬",
            "破案搭档",
            "人狗情"
        ]
    },
    {
        "title": "正经好人",
        "url": "movie-187.html",
        "cover": "./37.jpg",
        "year": "2009",
        "region": "美国",
        "genre": "剧情,黑色喜剧",
        "type": "电影",
        "tags": [
            "科恩兄弟",
            "存在主义",
            "道德困境",
            "倒霉人生"
        ]
    },
    {
        "title": "萨尔瓦托雷之死",
        "url": "movie-188.html",
        "cover": "./38.jpg",
        "year": "2026",
        "region": "意大利",
        "genre": "悬疑,历史,传记",
        "type": "电影",
        "tags": [
            "黑手党",
            "线人",
            "政治阴谋"
        ]
    },
    {
        "title": "衣橱国语",
        "url": "movie-189.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "恐怖,家庭,心理",
        "type": "电影",
        "tags": [
            "衣橱",
            "儿童失踪",
            "分离焦虑",
            "国语配音"
        ]
    },
    {
        "title": "冬眠",
        "url": "movie-190.html",
        "cover": "./40.jpg",
        "year": "2014",
        "region": "土耳其/法国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "锡兰",
            "金棕榈",
            "酒店",
            "知识分子",
            "阶级"
        ]
    },
    {
        "title": "疯狂粉丝王",
        "url": "movie-191.html",
        "cover": "./41.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "悬疑,惊悚",
        "type": "电影",
        "tags": [
            "私生饭",
            "偶像文化",
            "心理恐怖",
            "社交网络",
            "现实投射"
        ]
    },
    {
        "title": "黑手党老大",
        "url": "movie-192.html",
        "cover": "./42.jpg",
        "year": "2021",
        "region": "意大利/美国",
        "genre": "犯罪/剧情/传记",
        "type": "电影",
        "tags": [
            "黑帮",
            "卧底",
            "真实改编",
            "西西里",
            "背叛"
        ]
    },
    {
        "title": "逐梦上学路",
        "url": "movie-193.html",
        "cover": "./43.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "纪录,社会",
        "type": "纪录片",
        "tags": [
            "教育",
            "山区",
            "孩子",
            "真实"
        ]
    },
    {
        "title": "白目怪谈",
        "url": "movie-194.html",
        "cover": "./44.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "恐怖/悬疑/惊悚",
        "type": "剧集",
        "tags": [
            "都市传说",
            "怪谈",
            "反转",
            "单元剧"
        ]
    },
    {
        "title": "饶恕我们的罪",
        "url": "movie-195.html",
        "cover": "./45.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情/犯罪",
        "type": "电影",
        "tags": [
            "神父",
            "卧底",
            "忏悔室",
            "信仰"
        ]
    },
    {
        "title": "婚词离曲第三季",
        "url": "movie-196.html",
        "cover": "./46.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "家庭/伦理",
        "type": "电视剧",
        "tags": [
            "婚姻战争",
            "离婚律师",
            "多线叙事",
            "金句频出",
            "真实扎心"
        ]
    },
    {
        "title": "吃货达人打卡吧",
        "url": "movie-197.html",
        "cover": "./47.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "美食/真人秀/喜剧",
        "type": "综艺/剧集混合",
        "tags": [
            "探店",
            "竞赛",
            "金厨",
            "直播",
            "搞笑"
        ]
    },
    {
        "title": "我与妻子的1778个故事",
        "url": "movie-198.html",
        "cover": "./48.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情,爱情,家庭",
        "type": "电影",
        "tags": [
            "日记",
            "癌症",
            "作家",
            "催泪",
            "真实事件改编"
        ]
    },
    {
        "title": "战马一号",
        "url": "movie-199.html",
        "cover": "./49.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "战争,剧情",
        "type": "电影",
        "tags": [
            "阿富汗",
            "海军陆战队",
            "骑兵传统",
            "袍泽情",
            "现代战争"
        ]
    },
    {
        "title": "嘿!妈咪",
        "url": "movie-200.html",
        "cover": "./50.jpg",
        "year": "2024",
        "region": "新加坡/马来西亚",
        "genre": "喜剧/家庭/女性",
        "type": "电影",
        "tags": [
            "母亲节",
            "重生",
            "三代同堂",
            "娘惹"
        ]
    },
    {
        "title": "凶案深处",
        "url": "movie-201.html",
        "cover": "./51.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑/刑侦",
        "type": "剧集",
        "tags": [
            "案中案",
            "连环杀手",
            "心理侧写"
        ]
    },
    {
        "title": "鬼娃新娘国语",
        "url": "movie-202.html",
        "cover": "./52.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖,惊悚,黑色喜剧",
        "type": "电影",
        "tags": [
            "鬼娃回魂",
            "国语配音",
            "恐怖新娘",
            "杀人娃娃",
            "血腥搞笑"
        ]
    },
    {
        "title": "后院",
        "url": "movie-203.html",
        "cover": "./53.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,家庭,悬疑",
        "type": "电影",
        "tags": [
            "邻里",
            "犯罪",
            "窥视",
            "秘密"
        ]
    },
    {
        "title": "后窗的女人",
        "url": "movie-204.html",
        "cover": "./54.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "悬疑,惊悚",
        "type": "电影",
        "tags": [
            "偷窥",
            "恐旷症",
            "心理博弈"
        ]
    },
    {
        "title": "不得不爱第一季",
        "url": "movie-205.html",
        "cover": "./55.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "都市,情感,悬疑",
        "type": "剧集",
        "tags": [
            "家族恩怨",
            "失忆",
            "商战",
            "虐恋",
            "复仇"
        ]
    },
    {
        "title": "撒旦日记",
        "url": "movie-206.html",
        "cover": "./56.jpg",
        "year": "1921",
        "region": "丹麦",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "默片",
            "宗教寓言",
            "黑白电影",
            "四段式"
        ]
    },
    {
        "title": "金牌拳手3",
        "url": "movie-207.html",
        "cover": "./57.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "剧情/运动/动作",
        "type": "电影",
        "tags": [
            "拳击",
            "宿敌",
            "友情",
            "复仇",
            "决斗"
        ]
    },
    {
        "title": "激情黑寡妇",
        "url": "movie-208.html",
        "cover": "./58.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作/惊悚",
        "type": "电影",
        "tags": [
            "复仇",
            "女性",
            "高智商犯罪",
            "反转"
        ]
    },
    {
        "title": "爱因斯坦传",
        "url": "movie-209.html",
        "cover": "./59.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "传记,历史",
        "type": "剧集",
        "tags": [
            "科学巨匠",
            "多面人生",
            "天才的代价",
            "二十世纪",
            "人性与道德"
        ]
    },
    {
        "title": "老大当差",
        "url": "movie-210.html",
        "cover": "./60.jpg",
        "year": "1990",
        "region": "中国香港",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "黑帮",
            "卧底",
            "乌龙",
            "港式笑料"
        ]
    },
    {
        "title": "我孩子们的爸爸",
        "url": "movie-211.html",
        "cover": "./61.jpg",
        "year": "2009",
        "region": "法国",
        "genre": "家庭",
        "type": "电影",
        "tags": [
            "单亲爸爸",
            "丧偶之痛",
            "父爱如山",
            "生活流"
        ]
    },
    {
        "title": "凶间雪山",
        "url": "movie-212.html",
        "cover": "./62.jpg",
        "year": "2012",
        "region": "中国大陆",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "登山",
            "雪域",
            "同伴失踪",
            "心理悬疑"
        ]
    },
    {
        "title": "火花兄弟",
        "url": "movie-213.html",
        "cover": "./63.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情,喜剧",
        "type": "电影",
        "tags": [
            "落语",
            "师徒",
            "励志",
            "催泪"
        ]
    },
    {
        "title": "虎妞儿的赛车梦",
        "url": "movie-214.html",
        "cover": "./64.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,运动,励志",
        "type": "电影",
        "tags": [
            "女赛车手",
            "农村女孩",
            "逆袭",
            "师徒情"
        ]
    },
    {
        "title": "精采的尸体",
        "url": "movie-215.html",
        "cover": "./65.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑,科幻,恐怖",
        "type": "剧集",
        "tags": [
            "法医",
            "犯罪解密",
            "尸体交易",
            "黑市",
            "科技伦理"
        ]
    },
    {
        "title": "滑板狂热",
        "url": "movie-216.html",
        "cover": "./66.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧,运动",
        "type": "剧集",
        "tags": [
            "青春",
            "滑板",
            "废柴逆袭",
            "英式幽默"
        ]
    },
    {
        "title": "富士山之恋",
        "url": "movie-217.html",
        "cover": "./67.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "纯爱",
            "绝症",
            "治愈"
        ]
    },
    {
        "title": "行动目标希特勒",
        "url": "movie-218.html",
        "cover": "./68.jpg",
        "year": "2008",
        "region": "美国",
        "genre": "历史,惊悚",
        "type": "电影",
        "tags": [
            "二战",
            "刺杀",
            "真实改编"
        ]
    },
    {
        "title": "黑白线人",
        "url": "movie-219.html",
        "cover": "./69.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "动作/剧情/犯罪",
        "type": "电影",
        "tags": [
            "卧底",
            "人性挣扎",
            "港风",
            "父子情",
            "悲剧美学"
        ]
    },
    {
        "title": "标准之外",
        "url": "movie-220.html",
        "cover": "./70.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "社会",
            "教育",
            "自闭症",
            "温情"
        ]
    },
    {
        "title": "海边的屋子",
        "url": "movie-221.html",
        "cover": "./71.jpg",
        "year": "2022",
        "region": "法国",
        "genre": "剧情/悬疑/文艺",
        "type": "电影",
        "tags": [
            "孤独",
            "记忆碎片",
            "海边",
            "文艺",
            "心理"
        ]
    },
    {
        "title": "总统的女儿",
        "url": "movie-222.html",
        "cover": "./72.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "政治,悬疑,动作",
        "type": "剧集",
        "tags": [
            "第一家庭",
            "绑架",
            "黑幕"
        ]
    },
    {
        "title": "秘鲁:神秘宝藏",
        "url": "movie-223.html",
        "cover": "./73.jpg",
        "year": "2025",
        "region": "英国/秘鲁",
        "genre": "冒险/纪录片",
        "type": "电影",
        "tags": [
            "印加文明",
            "科考探险",
            "未解之谜"
        ]
    },
    {
        "title": "赛马娘四格",
        "url": "movie-224.html",
        "cover": "./74.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "喜剧/日常",
        "type": "剧集/动画",
        "tags": [
            "四格改编",
            "泡面番",
            "萌系",
            "运动搞笑"
        ]
    },
    {
        "title": "星空清理者",
        "url": "movie-225.html",
        "cover": "./75.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻职场",
        "type": "剧集",
        "tags": [
            "太空",
            "垃圾清理",
            "环保",
            "治愈"
        ]
    },
    {
        "title": "新不了情",
        "url": "movie-226.html",
        "cover": "./76.jpg",
        "year": "1993",
        "region": "中国香港",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "绝症",
            "庙街",
            "音乐",
            "香港情怀"
        ]
    },
    {
        "title": "伙头智多星国语",
        "url": "movie-227.html",
        "cover": "./77.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧家庭",
        "type": "剧集",
        "tags": [
            "中华美食",
            "破产父子",
            "网红餐厅",
            "斗厨翻身"
        ]
    },
    {
        "title": "宇宙之门",
        "url": "movie-228.html",
        "cover": "./78.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻、悬疑、冒险",
        "type": "电影",
        "tags": [
            "平行宇宙",
            "神秘装置",
            "量子物理",
            "家庭救赎"
        ]
    },
    {
        "title": "倒挂的爱丽丝",
        "url": "movie-229.html",
        "cover": "./79.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "奇幻,剧情",
        "type": "电影",
        "tags": [
            "梦境",
            "母女",
            "重力反转",
            "超现实",
            "心理"
        ]
    },
    {
        "title": "青川入梦",
        "url": "movie-230.html",
        "cover": "./80.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑/奇幻/爱情",
        "type": "电视剧",
        "tags": [
            "时空循环",
            "古镇",
            "水墨风",
            "宿命感",
            "民俗"
        ]
    },
    {
        "title": "办砸了",
        "url": "movie-231.html",
        "cover": "./81.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "喜剧/黑色幽默",
        "type": "电影",
        "tags": [
            "殡葬业",
            "乌龙",
            "小人物",
            "荒诞"
        ]
    },
    {
        "title": "浅田家!",
        "url": "movie-232.html",
        "cover": "./82.jpg",
        "year": "2020",
        "region": "日本",
        "genre": "剧情,家庭,喜剧",
        "type": "电影",
        "tags": [
            "真实改编",
            "摄影",
            "温情",
            "治愈",
            "亲情"
        ]
    },
    {
        "title": "蠢蛋告别式",
        "url": "movie-233.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "喜剧、剧情",
        "type": "电影",
        "tags": [
            "台湾",
            "葬礼",
            "乌龙",
            "和解",
            "黑色幽默"
        ]
    },
    {
        "title": "虎父无犬女",
        "url": "movie-234.html",
        "cover": "./84.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,动作,家庭",
        "type": "电影",
        "tags": [
            "父女情",
            "武术",
            "代际冲突",
            "成长"
        ]
    },
    {
        "title": "达摩祖师粤语",
        "url": "movie-235.html",
        "cover": "./85.jpg",
        "year": "1994",
        "region": "中国香港",
        "genre": "传记/禅宗/武侠",
        "type": "电影",
        "tags": [
            "高僧",
            "少林",
            "面壁",
            "粤语配音修复版"
        ]
    },
    {
        "title": "冰雪友情",
        "url": "movie-236.html",
        "cover": "./86.jpg",
        "year": "2026",
        "region": "美国/加拿大",
        "genre": "动画/冒险/家庭",
        "type": "动画电影",
        "tags": [
            "雪人",
            "极地动物",
            "环保",
            "成长"
        ]
    },
    {
        "title": "芭比之海豚魔法",
        "url": "movie-237.html",
        "cover": "./87.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画,奇幻,家庭",
        "type": "电影",
        "tags": [
            "芭比",
            "海豚",
            "公主",
            "魔法",
            "冒险"
        ]
    },
    {
        "title": "怦然心动20岁第二季",
        "url": "movie-238.html",
        "cover": "./88.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "真人秀/恋爱",
        "type": "综艺",
        "tags": [
            "青春",
            "旅行",
            "毕业",
            "校园",
            "交友"
        ]
    },
    {
        "title": "米拉达",
        "url": "movie-239.html",
        "cover": "./89.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "悬疑,惊悚,剧情",
        "type": "电影",
        "tags": [
            "复仇",
            "记忆替换",
            "身份认知",
            "反转"
        ]
    },
    {
        "title": "你好布拉德",
        "url": "movie-240.html",
        "cover": "./90.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧/剧情",
        "type": "电影",
        "tags": [
            "中年危机",
            "父子",
            "比较",
            "治愈"
        ]
    },
    {
        "title": "傻丫头日记",
        "url": "movie-241.html",
        "cover": "./91.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "喜剧,爱情",
        "type": "电视剧",
        "tags": [
            "校园青春",
            "搞笑女",
            "逆袭成长"
        ]
    },
    {
        "title": "送报女孩",
        "url": "movie-242.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻冒险",
        "type": "剧集",
        "tags": [
            "时间穿越",
            "女性友谊",
            "80年代",
            "末日危机"
        ]
    },
    {
        "title": "那年夏天2025",
        "url": "movie-243.html",
        "cover": "./93.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "科幻,青春",
        "type": "电影",
        "tags": [
            "时间循环",
            "夏日",
            "棒球",
            "纯爱"
        ]
    },
    {
        "title": "贩肤俗子",
        "url": "movie-244.html",
        "cover": "./94.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情,犯罪,黑色幽默",
        "type": "电影",
        "tags": [
            "黑色电影",
            "纹身",
            "身份盗窃",
            "荒诞"
        ]
    },
    {
        "title": "洛克斯",
        "url": "movie-245.html",
        "cover": "./95.jpg",
        "year": "2023",
        "region": "英国",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "青少年",
            "街头",
            "姐妹情"
        ]
    },
    {
        "title": "2019:纽约陷落之后",
        "url": "movie-246.html",
        "cover": "./96.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "科幻/动作/灾难",
        "type": "电影",
        "tags": [
            "废土",
            "纽约",
            "前传",
            "机甲"
        ]
    },
    {
        "title": "贱人快跑",
        "url": "movie-247.html",
        "cover": "./97.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧/动作/犯罪",
        "type": "电影",
        "tags": [
            "黑色喜剧",
            "笨贼",
            "多线叙事",
            "荒诞",
            "方言"
        ]
    },
    {
        "title": "爱情无计",
        "url": "movie-248.html",
        "cover": "./98.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,爱情,悬疑",
        "type": "电影",
        "tags": [
            "都市情感",
            "骗局",
            "反转",
            "女性视角"
        ]
    },
    {
        "title": "超级苍蝇续集",
        "url": "movie-249.html",
        "cover": "./99.jpg",
        "year": "1973",
        "region": "美国",
        "genre": "动作/犯罪/剧情",
        "type": "电影",
        "tags": [
            "黑人剥削电影",
            "毒品交易",
            "亡命鸳鸯",
            "街头暴力",
            "复古"
        ]
    },
    {
        "title": "飙风特警",
        "url": "movie-250.html",
        "cover": "./100.jpg",
        "year": "1989",
        "region": "中国香港",
        "genre": "动作,犯罪",
        "type": "电影",
        "tags": [
            "赛车",
            "警匪",
            "兄弟情"
        ]
    },
    {
        "title": "燕山君",
        "url": "movie-251.html",
        "cover": "./101.jpg",
        "year": "2017",
        "region": "韩国",
        "genre": "古装、历史",
        "type": "剧集",
        "tags": [
            "暴君",
            "政治斗争",
            "悲剧"
        ]
    },
    {
        "title": "逃离索马里",
        "url": "movie-252.html",
        "cover": "./102.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "动作、战争、冒险",
        "type": "电影",
        "tags": [
            "撤侨",
            "特种兵",
            "巷战",
            "真实事件改编"
        ]
    },
    {
        "title": "杰和沉默鲍伯的反击",
        "url": "movie-253.html",
        "cover": "./103.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧",
        "type": "电影",
        "tags": [
            "恶搞",
            "复仇",
            "话痨搭档",
            "元电影"
        ]
    },
    {
        "title": "情陷高达",
        "url": "movie-254.html",
        "cover": "./104.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "科幻/爱情/机甲",
        "type": "动画电影",
        "tags": [
            "人机恋",
            "战争反思",
            "宇宙",
            "精神共鸣",
            "宿命"
        ]
    },
    {
        "title": "黄昏清兵卫",
        "url": "movie-255.html",
        "cover": "./105.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "时代剧/剧情/家庭",
        "type": "电影",
        "tags": [
            "武士道",
            "黄昏恋",
            "贫穷武士",
            "人文关怀"
        ]
    },
    {
        "title": "暴雨",
        "url": "movie-256.html",
        "cover": "./106.jpg",
        "year": "2027",
        "region": "中国",
        "genre": "悬疑、犯罪、心理",
        "type": "剧集",
        "tags": [
            "连环杀人",
            "暴风雪山庄",
            "全员恶人",
            "双重人格",
            "高能反转"
        ]
    },
    {
        "title": "留守的天空",
        "url": "movie-257.html",
        "cover": "./107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "留守儿童",
            "乡村教师",
            "真实事件改编",
            "催泪",
            "教育"
        ]
    },
    {
        "title": "棒棒糖之恋",
        "url": "movie-258.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "爱情,喜剧,奇幻",
        "type": "电影",
        "tags": [
            "甜点师",
            "味觉",
            "契约恋爱",
            "治愈"
        ]
    },
    {
        "title": "续姿三四郎",
        "url": "movie-259.html",
        "cover": "./109.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动作,体育,历史",
        "type": "剧集",
        "tags": [
            "柔道",
            "昭和风云",
            "武士道精神",
            "战后重建"
        ]
    },
    {
        "title": "顽皮豹喇叭",
        "url": "movie-260.html",
        "cover": "./110.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "动画、冒险、喜剧",
        "type": "电影",
        "tags": [
            "合家欢",
            "音乐魔法",
            "环保",
            "奇幻冒险"
        ]
    },
    {
        "title": "黎明要来",
        "url": "movie-261.html",
        "cover": "./111.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "剧情,同性",
        "type": "电影",
        "tags": [
            "青春",
            "残酷",
            "救赎",
            "乡土"
        ]
    },
    {
        "title": "消失的尸体",
        "url": "movie-262.html",
        "cover": "./112.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "暴风雪山庄",
            "偷尸体",
            "全员恶人",
            "多层反转",
            "黑色幽默"
        ]
    },
    {
        "title": "快乐的大脚2",
        "url": "movie-263.html",
        "cover": "./113.jpg",
        "year": "2011",
        "region": "美国",
        "genre": "动画/歌舞/家庭",
        "type": "电影",
        "tags": [
            "企鹅",
            "舞蹈",
            "家庭",
            "冒险",
            "环保"
        ]
    },
    {
        "title": "犯罪王",
        "url": "movie-264.html",
        "cover": "./114.jpg",
        "year": "2022",
        "region": "韩国",
        "genre": "犯罪/悬疑/动作",
        "type": "剧集",
        "tags": [
            "高智商犯罪",
            "黑吃黑",
            "双雄对决"
        ]
    },
    {
        "title": "异形帝国之灵与欲",
        "url": "movie-265.html",
        "cover": "./115.jpg",
        "year": "2003",
        "region": "美国",
        "genre": "科幻,惊悚",
        "type": "电影",
        "tags": [
            "外星寄生",
            "欲望投射",
            "心理惊悚",
            "反乌托邦"
        ]
    },
    {
        "title": "生命中的第一次",
        "url": "movie-266.html",
        "cover": "./116.jpg",
        "year": "2015",
        "region": "法国/比利时",
        "genre": "喜剧/爱情/青春",
        "type": "电影",
        "tags": [
            "成长",
            "初体验",
            "法式幽默",
            "青春疼痛"
        ]
    },
    {
        "title": "飞虎出征国语",
        "url": "movie-267.html",
        "cover": "./117.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "喜剧,动作",
        "type": "电影",
        "tags": [
            "飞虎队",
            "警匪",
            "恶搞"
        ]
    },
    {
        "title": "戏中之王",
        "url": "movie-268.html",
        "cover": "./118.jpg",
        "year": "1952",
        "region": "美国",
        "genre": "剧情/爱情/马戏",
        "type": "电影",
        "tags": [
            "经典",
            "大制作",
            "三角恋",
            "马戏团"
        ]
    },
    {
        "title": "古宅老友记第四季",
        "url": "movie-269.html",
        "cover": "./119.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "喜剧/奇幻",
        "type": "电视剧",
        "tags": [
            "英式幽默",
            "鬼魂日常",
            "庄园遗产",
            "社畜主角",
            "温馨"
        ]
    },
    {
        "title": "盲侠大发神威",
        "url": "movie-270.html",
        "cover": "./120.jpg",
        "year": "1993",
        "region": "中国香港",
        "genre": "动作,武侠",
        "type": "电影",
        "tags": [
            "港产武侠",
            "盲人高手",
            "复仇",
            "老港片"
        ]
    },
    {
        "title": "南国春恋",
        "url": "movie-271.html",
        "cover": "./121.jpg",
        "year": "2024",
        "region": "新加坡",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "南洋",
            "雨季",
            "中年恋爱",
            "怀旧",
            "慢热"
        ]
    },
    {
        "title": "赛格描绘天空",
        "url": "movie-272.html",
        "cover": "./122.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "留守儿童",
            "梦想",
            "乡村",
            "治愈"
        ]
    },
    {
        "title": "厚颜无耻的人",
        "url": "movie-273.html",
        "cover": "./123.jpg",
        "year": "2023",
        "region": "法国,比利时",
        "genre": "喜剧,剧情,黑色幽默",
        "type": "电影",
        "tags": [
            "政治讽刺",
            "无耻之徒",
            "媒体操控",
            "竞选",
            "谎言"
        ]
    },
    {
        "title": "香槟",
        "url": "movie-274.html",
        "cover": "./124.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "豪门恩怨",
            "品酒",
            "复仇",
            "遗产"
        ]
    },
    {
        "title": "玉兰花开君再来",
        "url": "movie-275.html",
        "cover": "./125.jpg",
        "year": "2016",
        "region": "中国大陆",
        "genre": "爱情,年代",
        "type": "电视剧",
        "tags": [
            "民国",
            "上海滩",
            "歌女",
            "复仇"
        ]
    },
    {
        "title": "庞贝末日",
        "url": "movie-276.html",
        "cover": "./126.jpg",
        "year": "2014",
        "region": "英国/德国/加拿大",
        "genre": "动作/冒险/灾难/爱情",
        "type": "电影",
        "tags": [
            "火山",
            "角斗士",
            "古罗马",
            "奴隶",
            "末世"
        ]
    },
    {
        "title": "机械人求生记",
        "url": "movie-277.html",
        "cover": "./127.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "科幻、冒险",
        "type": "动画剧集",
        "tags": [
            "废土",
            "机器人",
            "孤独",
            "环保",
            "成长"
        ]
    },
    {
        "title": "忍者神龟第七季",
        "url": "movie-278.html",
        "cover": "./128.jpg",
        "year": "2015",
        "region": "美国",
        "genre": "动画/动作/科幻",
        "type": "电视剧",
        "tags": [
            "忍者神龟",
            "超级英雄",
            "变异",
            "纽约",
            "童年回忆"
        ]
    },
    {
        "title": "谁来爱你",
        "url": "movie-279.html",
        "cover": "./129.jpg",
        "year": "2025",
        "region": "中国内地",
        "genre": "剧情、家庭",
        "type": "电影",
        "tags": [
            "阿尔茨海默症",
            "亲情",
            "遗忘",
            "陪伴"
        ]
    },
    {
        "title": "红颜浩劫",
        "url": "movie-280.html",
        "cover": "./130.jpg",
        "year": "1991",
        "region": "中国香港",
        "genre": "爱情,历史,剧情",
        "type": "电影",
        "tags": [
            "民国",
            "女性命运",
            "战乱",
            "虐恋"
        ]
    },
    {
        "title": "小姑居处",
        "url": "movie-281.html",
        "cover": "./131.jpg",
        "year": "2026",
        "region": "中国台湾",
        "genre": "家庭,喜剧",
        "type": "电视剧",
        "tags": [
            "婆媳",
            "女性成长",
            "都市",
            "幽默"
        ]
    },
    {
        "title": "温柔酒吧",
        "url": "movie-282.html",
        "cover": "./132.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/家庭/治愈",
        "type": "电影",
        "tags": [
            "酒吧",
            "单亲",
            "成长",
            "非血缘父子",
            "60年代"
        ]
    },
    {
        "title": "格吉(杀人鬼)",
        "url": "movie-283.html",
        "cover": "./133.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "恐怖/犯罪",
        "type": "电影",
        "tags": [
            "都市传说",
            "连环杀手",
            "悬疑推理",
            "社会派恐怖",
            "反转"
        ]
    },
    {
        "title": "偷情谎言",
        "url": "movie-284.html",
        "cover": "./134.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "悬疑/惊悚/伦理",
        "type": "电影",
        "tags": [
            "反转",
            "婚姻",
            "心理战",
            "密室",
            "女性"
        ]
    },
    {
        "title": "制胜人生",
        "url": "movie-285.html",
        "cover": "./135.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/运动/励志",
        "type": "剧集",
        "tags": [
            "围棋",
            "天才陨落",
            "师徒",
            "逆风翻盘",
            "成长"
        ]
    },
    {
        "title": "迪特,人之子",
        "url": "movie-286.html",
        "cover": "./136.jpg",
        "year": "2019",
        "region": "德国",
        "genre": "剧情,传记,战争",
        "type": "电影",
        "tags": [
            "二战",
            "反思",
            "人性",
            "非英雄叙事"
        ]
    },
    {
        "title": "轩辕大帝",
        "url": "movie-287.html",
        "cover": "./137.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "奇幻,动作",
        "type": "电影",
        "tags": [
            "上古神话",
            "黄帝",
            "机甲",
            "文明起源"
        ]
    },
    {
        "title": "追捕2003",
        "url": "movie-288.html",
        "cover": "./138.jpg",
        "year": "2024",
        "region": "日本/中国大陆",
        "genre": "动作/犯罪",
        "type": "电影",
        "tags": [
            "翻拍",
            "跨国追捕",
            "警匪",
            "双雄",
            "高仓健致敬"
        ]
    },
    {
        "title": "马诺莱特",
        "url": "movie-289.html",
        "cover": "./139.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "传记,剧情",
        "type": "电影",
        "tags": [
            "斗牛士",
            "传奇人生",
            "宿命",
            "黑白与彩色"
        ]
    },
    {
        "title": "鸟儿们的奇幻冒险",
        "url": "movie-290.html",
        "cover": "./140.jpg",
        "year": "2023",
        "region": "法国/比利时",
        "genre": "奇幻、冒险",
        "type": "动画电影",
        "tags": [
            "迁徙",
            "勇气",
            "自然奇迹",
            "成长"
        ]
    },
    {
        "title": "缘结甘神家",
        "url": "movie-291.html",
        "cover": "./141.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "奇幻爱情,日常",
        "type": "剧集",
        "tags": [
            "神道教",
            "神社",
            "同居",
            "神明",
            "治愈"
        ]
    },
    {
        "title": "生活伊始",
        "url": "movie-292.html",
        "cover": "./142.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情/家庭/治愈",
        "type": "剧集",
        "tags": [
            "重启人生",
            "母女",
            "日常",
            "温情"
        ]
    },
    {
        "title": "浴室春情",
        "url": "movie-293.html",
        "cover": "./143.jpg",
        "year": "1999",
        "region": "中国香港",
        "genre": "剧情/情色/爱情",
        "type": "电影",
        "tags": [
            "王家卫风格",
            "潮湿美学",
            "禁忌之恋",
            "旧楼记忆"
        ]
    },
    {
        "title": "来自星星的少年",
        "url": "movie-294.html",
        "cover": "./144.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻,剧情,青春",
        "type": "电影",
        "tags": [
            "自闭症",
            "外星人",
            "治愈",
            "校园欺凌"
        ]
    },
    {
        "title": "动感战士",
        "url": "movie-295.html",
        "cover": "./145.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动作科幻",
        "type": "电影",
        "tags": [
            "外骨骼机甲",
            "极限运动",
            "反恐",
            "青年热血"
        ]
    },
    {
        "title": "狼的孩子雨和雪",
        "url": "movie-296.html",
        "cover": "./146.jpg",
        "year": "2012",
        "region": "日本",
        "genre": "剧情/动画/奇幻",
        "type": "电影",
        "tags": [
            "细田守",
            "母爱史诗",
            "奇幻成长",
            "治愈催泪"
        ]
    },
    {
        "title": "庇护",
        "url": "movie-297.html",
        "cover": "./147.jpg",
        "year": "2021",
        "region": "西班牙",
        "genre": "剧情,惊悚,社会",
        "type": "电影",
        "tags": [
            "家暴庇护所",
            "人格伪装",
            "施暴者互换",
            "女性群像",
            "反转"
        ]
    },
    {
        "title": "恒久定律",
        "url": "movie-298.html",
        "cover": "./148.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "科幻/爱情/伦理",
        "type": "电影",
        "tags": [
            "基因编辑",
            "永生诅咒",
            "夫妻对抗"
        ]
    },
    {
        "title": "天使陨落",
        "url": "movie-299.html",
        "cover": "./149.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "奇幻,动作,悬疑",
        "type": "剧集",
        "tags": [
            "堕落天使",
            "异能",
            "末世",
            "背叛"
        ]
    },
    {
        "title": "厉爷的心尖妻",
        "url": "movie-300.html",
        "cover": "./150.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "爱情,短剧",
        "type": "剧集",
        "tags": [
            "霸总",
            "重生",
            "复仇",
            "甜宠",
            "爽文"
        ]
    },
    {
        "title": "国家要案",
        "url": "movie-301.html",
        "cover": "./1.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "政治,悬疑",
        "type": "电视剧",
        "tags": [
            "反腐",
            "记者调查",
            "权力游戏",
            "高官落马",
            "抽丝剥茧"
        ]
    },
    {
        "title": "家有酒神",
        "url": "movie-302.html",
        "cover": "./2.jpg",
        "year": "2020",
        "region": "中国大陆",
        "genre": "喜剧/家庭",
        "type": "电影",
        "tags": [
            "酿酒",
            "代际冲突",
            "返乡创业"
        ]
    },
    {
        "title": "幻日",
        "url": "movie-303.html",
        "cover": "./3.jpg",
        "year": "2027",
        "region": "中国大陆",
        "genre": "科幻悬疑",
        "type": "电影",
        "tags": [
            "天象异常",
            "记忆删除",
            "伦理困境",
            "烧脑",
            "平行宇宙"
        ]
    },
    {
        "title": "康瑞德家的男孩",
        "url": "movie-304.html",
        "cover": "./4.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "悬疑,剧情",
        "type": "电影",
        "tags": [
            "心理",
            "家族秘密",
            "哥特",
            "成长"
        ]
    },
    {
        "title": "超摩登原始人",
        "url": "movie-305.html",
        "cover": "./5.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧,科幻,动画",
        "type": "剧集",
        "tags": [
            "石器时代",
            "高科技",
            "反差萌",
            "讽刺"
        ]
    },
    {
        "title": "神魔奇缘",
        "url": "movie-306.html",
        "cover": "./6.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "奇幻/动作/冒险",
        "type": "动画电影",
        "tags": [
            "东方神话",
            "少年救世",
            "善恶反转",
            "水墨风"
        ]
    },
    {
        "title": "记住",
        "url": "movie-307.html",
        "cover": "./7.jpg",
        "year": "2022",
        "region": "加拿大/德国",
        "genre": "惊悚,剧情",
        "type": "电影",
        "tags": [
            "老年",
            "复仇",
            "失忆",
            "反转"
        ]
    },
    {
        "title": "大马帮",
        "url": "movie-308.html",
        "cover": "./8.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "冒险,历史,剧情",
        "type": "剧集",
        "tags": [
            "马帮",
            "西南",
            "商战",
            "兄弟"
        ]
    },
    {
        "title": "功夫熊猫:盖世传奇第三季",
        "url": "movie-309.html",
        "cover": "./9.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "动作、喜剧、动画",
        "type": "动画剧集",
        "tags": [
            "熊猫",
            "功夫",
            "师徒"
        ]
    },
    {
        "title": "人民的审判",
        "url": "movie-310.html",
        "cover": "./10.jpg",
        "year": "2001",
        "region": "中国大陆",
        "genre": "剧情,犯罪,历史",
        "type": "电影",
        "tags": [
            "纪实",
            "反腐",
            "法庭",
            "集体记忆"
        ]
    },
    {
        "title": "美国战鹰",
        "url": "movie-311.html",
        "cover": "./11.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/战争/惊悚",
        "type": "电影",
        "tags": [
            "无人机",
            "高空",
            "独狼"
        ]
    },
    {
        "title": "魔性之线魔性之线",
        "url": "movie-312.html",
        "cover": "./12.jpg",
        "year": "2028",
        "region": "日本",
        "genre": "爱情/奇幻/悬疑",
        "type": "剧集",
        "tags": [
            "吸血鬼",
            "警察",
            "禁忌之恋",
            "伦理"
        ]
    },
    {
        "title": "偷破天际线",
        "url": "movie-313.html",
        "cover": "./13.jpg",
        "year": "2025",
        "region": "美国/德国",
        "genre": "动作/犯罪/科幻",
        "type": "电影",
        "tags": [
            "高空",
            "盗窃",
            "无人机",
            "隐形技术"
        ]
    },
    {
        "title": "狂风暴雨群芳刦",
        "url": "movie-314.html",
        "cover": "./14.jpg",
        "year": "1977",
        "region": "台湾",
        "genre": "动作/惊悚/犯罪",
        "type": "电影",
        "tags": [
            "女性复仇",
            "台风夜",
            "绑架",
            "暴力美学",
            "剥削电影"
        ]
    },
    {
        "title": "澳门营业中",
        "url": "movie-315.html",
        "cover": "./15.jpg",
        "year": "2020",
        "region": "中国澳门",
        "genre": "剧情/喜剧",
        "type": "电视剧",
        "tags": [
            "澳门",
            "小店",
            "群像",
            "奋斗",
            "温情"
        ]
    },
    {
        "title": "血口逃生",
        "url": "movie-316.html",
        "cover": "./16.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "巨兽",
            "密室",
            "洞穴",
            "生存",
            "血腥"
        ]
    },
    {
        "title": "诱惑法则",
        "url": "movie-317.html",
        "cover": "./17.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "三角恋",
            "作家",
            "哲学"
        ]
    },
    {
        "title": "嫂娘",
        "url": "movie-318.html",
        "cover": "./18.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "女性",
            "乡村",
            "牺牲",
            "真情",
            "年代"
        ]
    },
    {
        "title": "简爱1970",
        "url": "movie-319.html",
        "cover": "./19.jpg",
        "year": "1970",
        "region": "英国",
        "genre": "剧情/爱情/经典改编",
        "type": "电影",
        "tags": [
            "名著",
            "维多利亚",
            "家庭教师",
            "哥特",
            "女性独立"
        ]
    },
    {
        "title": "万事通大全",
        "url": "movie-320.html",
        "cover": "./20.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧,剧情",
        "type": "剧集",
        "tags": [
            "社交尴尬",
            "社区",
            "友情",
            "成长",
            "治愈"
        ]
    },
    {
        "title": "柏林谍影",
        "url": "movie-321.html",
        "cover": "./21.jpg",
        "year": "2019",
        "region": "德国/英国",
        "genre": "悬疑/谍战/惊悚",
        "type": "剧集",
        "tags": [
            "冷战",
            "双面间谍",
            "柏林墙",
            "阴谋论",
            "高智商博弈"
        ]
    },
    {
        "title": "黑色东京",
        "url": "movie-322.html",
        "cover": "./22.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "犯罪/悬疑",
        "type": "剧集",
        "tags": [
            "赛博朋克",
            "城市寓言",
            "多线叙事",
            "黑色电影"
        ]
    },
    {
        "title": "云雾之间",
        "url": "movie-323.html",
        "cover": "./23.jpg",
        "year": "2023",
        "region": "智利/阿根廷",
        "genre": "悬疑/剧情",
        "type": "电影",
        "tags": [
            "安第斯山脉",
            "失踪",
            "记者",
            "云林"
        ]
    },
    {
        "title": "摩天高楼",
        "url": "movie-324.html",
        "cover": "./24.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "灾难,动作,剧情",
        "type": "电影",
        "tags": [
            "高楼",
            "火灾",
            "救援",
            "极限运动",
            "亲情"
        ]
    },
    {
        "title": "凯旋在子夜",
        "url": "movie-325.html",
        "cover": "./25.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "战争,剧情",
        "type": "电影",
        "tags": [
            "抗美援朝",
            "狙击手",
            "兄弟情",
            "真实事件改编"
        ]
    },
    {
        "title": "巴瑞第四季",
        "url": "movie-326.html",
        "cover": "./26.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "剧情,犯罪,黑色幽默",
        "type": "剧集",
        "tags": [
            "杀手",
            "演员梦",
            "最终季"
        ]
    },
    {
        "title": "蓝色情室",
        "url": "movie-327.html",
        "cover": "./27.jpg",
        "year": "2022",
        "region": "法国,比利时",
        "genre": "爱情,悬疑,剧情",
        "type": "电影",
        "tags": [
            "情欲",
            "心理",
            "悬疑爱情",
            "出轨",
            "记忆碎片"
        ]
    },
    {
        "title": "永顺永和",
        "url": "movie-328.html",
        "cover": "./28.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "留守儿童",
            "兄弟情",
            "方言电影",
            "催泪"
        ]
    },
    {
        "title": "和平卫士",
        "url": "movie-329.html",
        "cover": "./29.jpg",
        "year": "2021",
        "region": "法国/比利时",
        "genre": "科幻/战争/剧情",
        "type": "电影",
        "tags": [
            "反战寓言",
            "机械士兵",
            "伦理困境"
        ]
    },
    {
        "title": "我是瓦金",
        "url": "movie-330.html",
        "cover": "./30.jpg",
        "year": "2023",
        "region": "西班牙",
        "genre": "传记/音乐",
        "type": "电影",
        "tags": [
            "弗拉门戈",
            "自传",
            "艺术家",
            "流浪",
            "吉普赛"
        ]
    },
    {
        "title": "德伯力克2",
        "url": "movie-331.html",
        "cover": "./31.jpg",
        "year": "2026",
        "region": "意大利",
        "genre": "犯罪,惊悚,动作",
        "type": "电影",
        "tags": [
            "反英雄",
            "高智商犯罪",
            "漫画改编",
            "暗黑美学"
        ]
    },
    {
        "title": "刑档内幕",
        "url": "movie-332.html",
        "cover": "./32.jpg",
        "year": "1997",
        "region": "中国香港",
        "genre": "犯罪/纪录片式剧情",
        "type": "电影",
        "tags": [
            "刑侦档案",
            "真实案件",
            "廉政公署"
        ]
    },
    {
        "title": "撤离倒数13天",
        "url": "movie-333.html",
        "cover": "./33.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "科幻/灾难",
        "type": "电影",
        "tags": [
            "末日倒计时",
            "人性实验",
            "高概念设定"
        ]
    },
    {
        "title": "十万个冷笑话2",
        "url": "movie-334.html",
        "cover": "./34.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "喜剧,动画,奇幻",
        "type": "电影/动画",
        "tags": [
            "恶搞",
            "穿越",
            "吐槽",
            "全明星"
        ]
    },
    {
        "title": "芦苇荡的时光",
        "url": "movie-335.html",
        "cover": "./35.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/家庭/文艺",
        "type": "电影",
        "tags": [
            "代际冲突",
            "回乡潮",
            "方言电影",
            "湿地生态"
        ]
    },
    {
        "title": "狮子王们的夏天",
        "url": "movie-336.html",
        "cover": "./36.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "留守儿童",
            "舞狮",
            "热血",
            "夏天",
            "成长"
        ]
    },
    {
        "title": "最后一枪",
        "url": "movie-337.html",
        "cover": "./37.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "犯罪动作",
        "type": "电影",
        "tags": [
            "狙击",
            "复仇",
            "硬汉",
            "牺牲"
        ]
    },
    {
        "title": "神探光头妹",
        "url": "movie-338.html",
        "cover": "./38.jpg",
        "year": "2023",
        "region": "香港",
        "genre": "喜剧,动作,悬疑",
        "type": "电影",
        "tags": [
            "光头造型",
            "女侦探",
            "香港街景",
            "爆笑推理"
        ]
    },
    {
        "title": "奔跑吧第三季",
        "url": "movie-339.html",
        "cover": "./39.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,喜剧,家庭",
        "type": "剧集",
        "tags": [
            "返乡",
            "创业",
            "父子",
            "乡村",
            "马拉松"
        ]
    },
    {
        "title": "尘埃人",
        "url": "movie-340.html",
        "cover": "./40.jpg",
        "year": "2025",
        "region": "欧洲",
        "genre": "科幻,惊悚,哲理",
        "type": "电影",
        "tags": [
            "微观世界",
            "变异",
            "存在主义",
            "身体恐惧"
        ]
    },
    {
        "title": "小战象2",
        "url": "movie-341.html",
        "cover": "./41.jpg",
        "year": "2009",
        "region": "泰国",
        "genre": "历史冒险动画",
        "type": "动画电影",
        "tags": [
            "战象",
            "王朝战争",
            "成长"
        ]
    },
    {
        "title": "八十天环游地球",
        "url": "movie-342.html",
        "cover": "./42.jpg",
        "year": "2021",
        "region": "英国",
        "genre": "剧情,冒险",
        "type": "电视剧",
        "tags": [
            "环球旅行",
            "蒸汽朋克",
            "赌约",
            "异域风情"
        ]
    },
    {
        "title": "地下城里的人们",
        "url": "movie-343.html",
        "cover": "./43.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "奇幻,冒险,日常",
        "type": "动画剧集",
        "tags": [
            "迷宫",
            "反套路",
            "经营模拟",
            "社畜"
        ]
    },
    {
        "title": "无聊的教育",
        "url": "movie-344.html",
        "cover": "./44.jpg",
        "year": "2009",
        "region": "法国",
        "genre": "剧情/喜剧/教育",
        "type": "电影",
        "tags": [
            "反权威",
            "天才少年",
            "学校批判"
        ]
    },
    {
        "title": "拜托了!别宠我",
        "url": "movie-345.html",
        "cover": "./45.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "古装,甜宠,喜剧",
        "type": "剧集",
        "tags": [
            "穿越逆袭",
            "太后助攻",
            "冤家路窄",
            "沙雕互怼"
        ]
    },
    {
        "title": "猎杀游戏",
        "url": "movie-346.html",
        "cover": "./46.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作,惊悚",
        "type": "电影",
        "tags": [
            "密室逃生",
            "真人秀",
            "高科技猎杀",
            "反杀"
        ]
    },
    {
        "title": "大白鲨",
        "url": "movie-347.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖/灾难",
        "type": "电影",
        "tags": [
            "鲨鱼",
            "基因突变",
            "深海",
            "惊悚",
            "生态"
        ]
    },
    {
        "title": "黑金村传说",
        "url": "movie-348.html",
        "cover": "./48.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "恐怖/民俗",
        "type": "电影",
        "tags": [
            "泰国恐怖片",
            "降头",
            "贪婪诅咒",
            "乡村怪谈"
        ]
    },
    {
        "title": "蓝领一生",
        "url": "movie-349.html",
        "cover": "./49.jpg",
        "year": "2014",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电视剧",
        "tags": [
            "工人",
            "国企改革",
            "下岗",
            "三十年变迁",
            "现实主义"
        ]
    },
    {
        "title": "火坑莲情鸳定藕",
        "url": "movie-350.html",
        "cover": "./50.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "悬疑/爱情/古装",
        "type": "电影",
        "tags": [
            "戏曲风",
            "民国",
            "灭门案",
            "双胞胎",
            "疯批"
        ]
    },
    {
        "title": "点亮欧洲",
        "url": "movie-351.html",
        "cover": "./51.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "跨国追梦",
            "中欧文化",
            "创业",
            "复古胶片质感"
        ]
    },
    {
        "title": "比特币的崛起",
        "url": "movie-352.html",
        "cover": "./52.jpg",
        "year": "2021",
        "region": "美国/全球",
        "genre": "纪录片,财经,历史",
        "type": "纪录片",
        "tags": [
            "加密货币",
            "区块链",
            "金融",
            "互联网",
            "阴谋论"
        ]
    },
    {
        "title": "深宅奇剑",
        "url": "movie-353.html",
        "cover": "./53.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "武侠/悬疑",
        "type": "剧集",
        "tags": [
            "密室杀人",
            "古装推理",
            "家传秘宝"
        ]
    },
    {
        "title": "格林威治谋杀案",
        "url": "movie-354.html",
        "cover": "./54.jpg",
        "year": "1965",
        "region": "英国",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "伦敦",
            "侦探",
            "古典推理",
            "群像"
        ]
    },
    {
        "title": "地狱来的房东",
        "url": "movie-355.html",
        "cover": "./55.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "惊悚/恐怖",
        "type": "电影",
        "tags": [
            "变态房东",
            "合租噩梦",
            "密室囚禁",
            "反转"
        ]
    },
    {
        "title": "游戏王 次元的黑暗面",
        "url": "movie-356.html",
        "cover": "./56.jpg",
        "year": "2016",
        "region": "日本",
        "genre": "奇幻,冒险",
        "type": "动画电影",
        "tags": [
            "卡牌对决",
            "平行世界",
            "友情",
            "暗游戏"
        ]
    },
    {
        "title": "神秘蜡像馆",
        "url": "movie-357.html",
        "cover": "./57.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "恐怖,悬疑,哥特",
        "type": "电影",
        "tags": [
            "蜡像诅咒",
            "维多利亚时代",
            "复仇艺术",
            "感官恐怖"
        ]
    },
    {
        "title": "风的另一边",
        "url": "movie-358.html",
        "cover": "./58.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "剧情/西部",
        "type": "电影",
        "tags": [
            "公路片",
            "衰老",
            "救赎"
        ]
    },
    {
        "title": "无爱理想国",
        "url": "movie-359.html",
        "cover": "./59.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "科幻爱情",
        "type": "网络剧",
        "tags": [
            "反乌托邦",
            "情感消除",
            "自由意志",
            "压抑美学"
        ]
    },
    {
        "title": "始与终",
        "url": "movie-360.html",
        "cover": "./60.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "悬疑、科幻",
        "type": "剧集",
        "tags": [
            "时间循环",
            "宿命论",
            "高智商"
        ]
    },
    {
        "title": "扭曲2025",
        "url": "movie-361.html",
        "cover": "./61.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "科幻/惊悚",
        "type": "电影",
        "tags": [
            "时间循环",
            "记忆删除",
            "罪与罚"
        ]
    },
    {
        "title": "第九区",
        "url": "movie-362.html",
        "cover": "./62.jpg",
        "year": "2009",
        "region": "美国/新西兰",
        "genre": "科幻",
        "type": "电影",
        "tags": [
            "外星难民",
            "种族隔离",
            "身体异变"
        ]
    },
    {
        "title": "狼之谜",
        "url": "movie-363.html",
        "cover": "./63.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "悬疑,惊悚,犯罪",
        "type": "剧集",
        "tags": [
            "小镇",
            "秘密组织",
            "狼人隐喻",
            "连环犯罪",
            "双男主"
        ]
    },
    {
        "title": "丑小鸭",
        "url": "movie-364.html",
        "cover": "./64.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动画,家庭,成长",
        "type": "电影",
        "tags": [
            "经典改编",
            "自我认同",
            "校园霸凌",
            "逆袭"
        ]
    },
    {
        "title": "恋爱兵法",
        "url": "movie-365.html",
        "cover": "./65.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "爱情/喜剧",
        "type": "剧集",
        "tags": [
            "高智商恋爱",
            "反套路",
            "职场"
        ]
    },
    {
        "title": "神眼之金面具",
        "url": "movie-366.html",
        "cover": "./66.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,冒险,古装",
        "type": "网络电影",
        "tags": [
            "盗墓",
            "机关术",
            "双男主",
            "寻宝"
        ]
    },
    {
        "title": "死亡之间",
        "url": "movie-367.html",
        "cover": "./67.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "濒死体验",
            "哲学",
            "亲情"
        ]
    },
    {
        "title": "玩转全家福",
        "url": "movie-368.html",
        "cover": "./68.jpg",
        "year": "2024",
        "region": "马来西亚",
        "genre": "喜剧,家庭",
        "type": "电影",
        "tags": [
            "春节",
            "回乡",
            "公路",
            "闹剧"
        ]
    },
    {
        "title": "比生命还重要的事",
        "url": "movie-369.html",
        "cover": "./69.jpg",
        "year": "2025",
        "region": "法国/比利时",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "器官捐献",
            "新生",
            "伦理纠葛"
        ]
    },
    {
        "title": "当你年少时",
        "url": "movie-370.html",
        "cover": "./70.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "青春,成长",
        "type": "剧集",
        "tags": [
            "怀旧",
            "校园",
            "友情",
            "治愈"
        ]
    },
    {
        "title": "四三二一",
        "url": "movie-371.html",
        "cover": "./71.jpg",
        "year": "2025",
        "region": "香港",
        "genre": "犯罪,剧情",
        "type": "电影",
        "tags": [
            "计时",
            "飙车",
            "群像",
            "多线叙事"
        ]
    },
    {
        "title": "捕鼠人",
        "url": "movie-372.html",
        "cover": "./72.jpg",
        "year": "2023",
        "region": "英国",
        "genre": "惊悚,悬疑,犯罪",
        "type": "电影",
        "tags": [
            "暗黑童话",
            "连环杀手",
            "维多利亚时代",
            "猫鼠游戏"
        ]
    },
    {
        "title": "泰山传奇",
        "url": "movie-373.html",
        "cover": "./73.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作/冒险",
        "type": "电影",
        "tags": [
            "丛林",
            "殖民者",
            "动物沟通",
            "反狩猎"
        ]
    },
    {
        "title": "化装舞会",
        "url": "movie-374.html",
        "cover": "./74.jpg",
        "year": "1989",
        "region": "意大利/法国",
        "genre": "悬疑/爱情",
        "type": "电影",
        "tags": [
            "贵族奢靡",
            "身份互换",
            "面具隐喻",
            "古典配乐"
        ]
    },
    {
        "title": "铁血茶城",
        "url": "movie-375.html",
        "cover": "./75.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "战争/历史",
        "type": "电视剧",
        "tags": [
            "剿匪",
            "小人物史诗",
            "兄弟反目"
        ]
    },
    {
        "title": "强扭的瓜",
        "url": "movie-376.html",
        "cover": "./76.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情,喜剧,家庭",
        "type": "剧集",
        "tags": [
            "契约婚姻",
            "先婚后爱",
            "欢喜冤家",
            "真香定律"
        ]
    },
    {
        "title": "少女惊魂",
        "url": "movie-377.html",
        "cover": "./77.jpg",
        "year": "2014",
        "region": "日本",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "校园怪谈",
            "录像带",
            "集体幻觉"
        ]
    },
    {
        "title": "欲女心惊",
        "url": "movie-378.html",
        "cover": "./78.jpg",
        "year": "2013",
        "region": "中国香港",
        "genre": "情色/剧情/悬疑",
        "type": "电影",
        "tags": [
            "女性视角",
            "职场潜规则",
            "复仇",
            "大反转"
        ]
    },
    {
        "title": "他的",
        "url": "movie-379.html",
        "cover": "./79.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情/同性",
        "type": "电影",
        "tags": [
            "身份互换",
            "霸凌",
            "接纳"
        ]
    },
    {
        "title": "唯一的证人",
        "url": "movie-380.html",
        "cover": "./80.jpg",
        "year": "2023",
        "region": "德国",
        "genre": "悬疑、犯罪、剧情",
        "type": "电影",
        "tags": [
            "谋杀",
            "自闭症",
            "天才",
            "法庭",
            "推理"
        ]
    },
    {
        "title": "偷心上流",
        "url": "movie-381.html",
        "cover": "./81.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,爱情",
        "type": "电影",
        "tags": [
            "骗局",
            "阶层差异",
            "反转"
        ]
    },
    {
        "title": "超世纪战神",
        "url": "movie-382.html",
        "cover": "./82.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "动作、科幻",
        "type": "电影",
        "tags": [
            "机甲",
            "AI觉醒",
            "父子对决"
        ]
    },
    {
        "title": "有招没招之爱情达人",
        "url": "movie-383.html",
        "cover": "./83.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "爱情喜剧",
        "type": "电影",
        "tags": [
            "都市",
            "恋爱技巧",
            "反转"
        ]
    },
    {
        "title": "麻烦终结者",
        "url": "movie-384.html",
        "cover": "./84.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "动作喜剧",
        "type": "电影",
        "tags": [
            "暴力美学",
            "乌龙",
            "杀手",
            "搞笑"
        ]
    },
    {
        "title": "英宫秘史",
        "url": "movie-385.html",
        "cover": "./85.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "历史/悬疑",
        "type": "剧集",
        "tags": [
            "王室丑闻",
            "宫廷阴谋",
            "双面间谍"
        ]
    },
    {
        "title": "死亡与复活",
        "url": "movie-386.html",
        "cover": "./86.jpg",
        "year": "2023",
        "region": "德国",
        "genre": "悬疑/奇幻",
        "type": "电影",
        "tags": [
            "轮回",
            "记忆碎片",
            "宗教隐喻",
            "心理惊悚"
        ]
    },
    {
        "title": "徒步101",
        "url": "movie-387.html",
        "cover": "./87.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "剧情/冒险/治愈",
        "type": "电视剧",
        "tags": [
            "徒步",
            "环岛",
            "自我救赎"
        ]
    },
    {
        "title": "圣诞树5",
        "url": "movie-388.html",
        "cover": "./88.jpg",
        "year": "2018",
        "region": "俄罗斯",
        "genre": "喜剧、剧情、家庭",
        "type": "电影",
        "tags": [
            "圣诞",
            "多线叙事",
            "温情",
            "俄罗斯"
        ]
    },
    {
        "title": "佩吉巷的火枪手",
        "url": "movie-389.html",
        "cover": "./89.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "动作,喜剧,悬疑",
        "type": "网络电影",
        "tags": [
            "民国",
            "上海滩",
            "荒诞",
            "小人物逆袭",
            "枪战"
        ]
    },
    {
        "title": "正义守护者",
        "url": "movie-390.html",
        "cover": "./90.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "律政动作",
        "type": "剧集",
        "tags": [
            "前检察官",
            "黑化律师",
            "以暴制暴",
            "爽剧"
        ]
    },
    {
        "title": "我和大天使家加百利",
        "url": "movie-391.html",
        "cover": "./91.jpg",
        "year": "2022",
        "region": "法国/比利时",
        "genre": "奇幻,喜剧,剧情",
        "type": "电影",
        "tags": [
            "天使",
            "荒诞",
            "治愈"
        ]
    },
    {
        "title": "向往",
        "url": "movie-392.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "亲情",
            "返乡",
            "乡村",
            "治愈"
        ]
    },
    {
        "title": "爸爸与父亲的家常菜",
        "url": "movie-393.html",
        "cover": "./93.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "剧情/家庭/美食",
        "type": "电视剧",
        "tags": [
            "失智症",
            "父子和解",
            "台湾小吃"
        ]
    },
    {
        "title": "艳阳假期",
        "url": "movie-394.html",
        "cover": "./94.jpg",
        "year": "2026",
        "region": "法国",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "度假",
            "群像",
            "夏日"
        ]
    },
    {
        "title": "刀背藏身",
        "url": "movie-395.html",
        "cover": "./95.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "武侠/动作",
        "type": "电影",
        "tags": [
            "刀法",
            "江湖",
            "隐世",
            "民国",
            "徐浩峰风"
        ]
    },
    {
        "title": "人生是一场抗争",
        "url": "movie-396.html",
        "cover": "./96.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "剧情,家庭,社会",
        "type": "剧集",
        "tags": [
            "昭和遗风",
            "女性抗争",
            "家族解体",
            "战后伤痕",
            "长镜头美学"
        ]
    },
    {
        "title": "二十一世纪神话学",
        "url": "movie-397.html",
        "cover": "./97.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情,奇幻,哲学",
        "type": "电视剧",
        "tags": [
            "现代神话",
            "存在主义",
            "城市传说",
            "法剧"
        ]
    },
    {
        "title": "长翅膀的猪",
        "url": "movie-398.html",
        "cover": "./98.jpg",
        "year": "2024",
        "region": "法国,比利时",
        "genre": "奇幻,剧情,黑色幽默",
        "type": "电影",
        "tags": [
            "存在主义",
            "荒诞",
            "屠夫",
            "预言"
        ]
    },
    {
        "title": "赖汉的幸福指数",
        "url": "movie-399.html",
        "cover": "./99.jpg",
        "year": "2022",
        "region": "中国",
        "genre": "剧情,家庭,乡村",
        "type": "电视剧",
        "tags": [
            "治愈",
            "底层",
            "励志",
            "温情"
        ]
    },
    {
        "title": "诡打墙",
        "url": "movie-400.html",
        "cover": "./100.jpg",
        "year": "2015",
        "region": "中国大陆",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "无限循环",
            "心理惊悚",
            "密室",
            "国产小成本"
        ]
    },
    {
        "title": "木乃伊魔咒",
        "url": "movie-401.html",
        "cover": "./101.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖/冒险",
        "type": "电影",
        "tags": [
            "考古",
            "诅咒",
            "超自然",
            "埃及"
        ]
    },
    {
        "title": "欢喜拍档",
        "url": "movie-402.html",
        "cover": "./102.jpg",
        "year": "2024",
        "region": "香港",
        "genre": "喜剧,动作",
        "type": "电影",
        "tags": [
            "双雄",
            "警匪",
            "搞笑",
            "兄弟情"
        ]
    },
    {
        "title": "护花神探",
        "url": "movie-403.html",
        "cover": "./103.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "动作,喜剧",
        "type": "电影",
        "tags": [
            "侦探",
            "保镖",
            "黑帮",
            "乌龙",
            "枪战"
        ]
    },
    {
        "title": "旅馆春光",
        "url": "movie-404.html",
        "cover": "./104.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情,爱情,情色",
        "type": "电影",
        "tags": [
            "爱情旅馆",
            "各色房客",
            "人生百态",
            "单元剧",
            "治愈系情欲"
        ]
    },
    {
        "title": "心花怒放",
        "url": "movie-405.html",
        "cover": "./105.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧",
        "type": "电影",
        "tags": [
            "浪漫",
            "婚礼",
            "乌龙"
        ]
    },
    {
        "title": "乱世瓢丐",
        "url": "movie-406.html",
        "cover": "./106.jpg",
        "year": "1992",
        "region": "中国大陆",
        "genre": "剧情,历史,动作",
        "type": "电影",
        "tags": [
            "民国",
            "乞丐",
            "讨薪",
            "底层抗争"
        ]
    },
    {
        "title": "夏普的滑铁卢",
        "url": "movie-407.html",
        "cover": "./107.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "战争/历史/动作",
        "type": "电视剧",
        "tags": [
            "拿破仑战争",
            "英军",
            "狙击手",
            "背叛",
            "滑铁卢"
        ]
    },
    {
        "title": "温暖的,甜蜜的",
        "url": "movie-408.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "爱情,都市",
        "type": "电视剧",
        "tags": [
            "甜品",
            "治愈",
            "慢生活",
            "姐弟恋"
        ]
    },
    {
        "title": "锁龙井",
        "url": "movie-409.html",
        "cover": "./109.jpg",
        "year": "2020",
        "region": "中国大陆",
        "genre": "恐怖/悬疑/奇幻",
        "type": "电影",
        "tags": [
            "民俗恐怖",
            "古井",
            "民间传说",
            "考古队",
            "诅咒"
        ]
    },
    {
        "title": "好汉饶命",
        "url": "movie-410.html",
        "cover": "./110.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,古装,武侠",
        "type": "剧集",
        "tags": [
            "反英雄",
            "躺平",
            "江湖",
            "黑色幽默"
        ]
    },
    {
        "title": "深渊游戏",
        "url": "movie-411.html",
        "cover": "./111.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "科幻/悬疑/惊悚",
        "type": "剧集",
        "tags": [
            "虚拟现实",
            "密室逃脱",
            "意识上传",
            "反乌托邦",
            "高智商对决"
        ]
    },
    {
        "title": "子夜招魂",
        "url": "movie-412.html",
        "cover": "./112.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "恐怖,惊悚,民俗",
        "type": "电影",
        "tags": [
            "台湾民俗",
            "道教仪式",
            "招魂",
            "家族诅咒"
        ]
    },
    {
        "title": "异种3",
        "url": "movie-413.html",
        "cover": "./113.jpg",
        "year": "2004",
        "region": "美国",
        "genre": "科幻,惊悚,恐怖",
        "type": "电影",
        "tags": [
            "外星生物",
            "实验失控",
            "血腥",
            "遗传变异"
        ]
    },
    {
        "title": "剪辑师",
        "url": "movie-414.html",
        "cover": "./114.jpg",
        "year": "2024",
        "region": "印度",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "剪辑视角",
            "犯罪拼图",
            "非线性叙事",
            "心理操控"
        ]
    },
    {
        "title": "情人知己",
        "url": "movie-415.html",
        "cover": "./115.jpg",
        "year": "1999",
        "region": "香港",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "三角恋",
            "友谊",
            "都市情感",
            "遗憾"
        ]
    },
    {
        "title": "哥布林杀手第二季",
        "url": "movie-416.html",
        "cover": "./116.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动画,奇幻,黑暗,动作",
        "type": "剧集",
        "tags": [
            "冒险",
            "复仇",
            "战术",
            "哥布林"
        ]
    },
    {
        "title": "午夜烟花",
        "url": "movie-417.html",
        "cover": "./117.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "爱情/奇幻",
        "type": "电影",
        "tags": [
            "夏日情怀",
            "穿越时空",
            "烟火师",
            "遗憾美学"
        ]
    },
    {
        "title": "林来疯",
        "url": "movie-418.html",
        "cover": "./118.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "剧情/传记/运动",
        "type": "电影",
        "tags": [
            "篮球",
            "亚裔",
            "逆境",
            "真实事件改编",
            "励志"
        ]
    },
    {
        "title": "老师早上好",
        "url": "movie-419.html",
        "cover": "./119.jpg",
        "year": "1994",
        "region": "中国台湾",
        "genre": "家庭喜剧",
        "type": "剧集",
        "tags": [
            "校园温情",
            "代际和解",
            "怀旧风"
        ]
    },
    {
        "title": "漫画爆高墙",
        "url": "movie-420.html",
        "cover": "./120.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "剧情/奇幻/犯罪",
        "type": "动画电影",
        "tags": [
            "越狱",
            "漫画家",
            "监狱",
            "想象成真",
            "社会隐喻"
        ]
    },
    {
        "title": "越狱第一季",
        "url": "movie-421.html",
        "cover": "./121.jpg",
        "year": "2005",
        "region": "美国",
        "genre": "剧情,犯罪,悬疑",
        "type": "电视剧",
        "tags": [
            "高智商犯罪",
            "兄弟情",
            "阴谋论",
            "封闭空间"
        ]
    },
    {
        "title": "变形金刚:堕落者的复仇",
        "url": "movie-422.html",
        "cover": "./122.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "动作/科幻/冒险",
        "type": "电影",
        "tags": [
            "机甲",
            "末日",
            "宿敌之战",
            "特效大片"
        ]
    },
    {
        "title": "黑之契约者2:流星的双子",
        "url": "movie-423.html",
        "cover": "./123.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻,超能力,战斗",
        "type": "动漫",
        "tags": [
            "致郁系",
            "契约者",
            "星空",
            "代价"
        ]
    },
    {
        "title": "马路与天使",
        "url": "movie-424.html",
        "cover": "./124.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "剧情,爱情",
        "type": "电影",
        "tags": [
            "底层人物",
            "清洁工",
            "妓女",
            "王家卫风"
        ]
    },
    {
        "title": "回溯",
        "url": "movie-425.html",
        "cover": "./125.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "科幻、悬疑、惊悚",
        "type": "电影",
        "tags": [
            "时间循环",
            "记忆删除",
            "侦探",
            "烧脑",
            "反转"
        ]
    },
    {
        "title": "太平洋航空作战",
        "url": "movie-426.html",
        "cover": "./126.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "战争、历史、动作",
        "type": "电影",
        "tags": [
            "中途岛",
            "航母对决",
            "真实改编",
            "空中激战"
        ]
    },
    {
        "title": "九个完美陌生人第一季",
        "url": "movie-427.html",
        "cover": "./127.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "悬疑,剧情,惊悚",
        "type": "剧集",
        "tags": [
            "疗养",
            "心理操控",
            "悬疑",
            "群像",
            "精神控制"
        ]
    },
    {
        "title": "永远一家人",
        "url": "movie-428.html",
        "cover": "./128.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "家庭/伦理/剧情",
        "type": "电视剧",
        "tags": [
            "亲情",
            "虐心",
            "养女",
            "身世之谜",
            "催泪"
        ]
    },
    {
        "title": "驼背人与舞女",
        "url": "movie-429.html",
        "cover": "./129.jpg",
        "year": "2022",
        "region": "法国",
        "genre": "剧情,爱情,历史",
        "type": "电影",
        "tags": [
            "巴黎",
            "蒙马特",
            "残疾人",
            "现代舞",
            "印象派"
        ]
    },
    {
        "title": "中国好声音第四季",
        "url": "movie-430.html",
        "cover": "./130.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "音乐,真人秀",
        "type": "综艺",
        "tags": [
            "选秀",
            "导师",
            "翻唱",
            "梦想"
        ]
    },
    {
        "title": "刑侦笔记",
        "url": "movie-431.html",
        "cover": "./131.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑、犯罪、刑侦",
        "type": "电视剧",
        "tags": [
            "本格推理",
            "连环命案",
            "高智商对决",
            "双男主"
        ]
    },
    {
        "title": "东京奏鸣曲",
        "url": "movie-432.html",
        "cover": "./132.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "音乐,剧情",
        "type": "电影",
        "tags": [
            "钢琴",
            "家族",
            "秘密",
            "治愈"
        ]
    },
    {
        "title": "狂暴",
        "url": "movie-433.html",
        "cover": "./133.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作、惊悚、科幻",
        "type": "电影",
        "tags": [
            "AI失控",
            "机甲",
            "末日",
            "硬核动作",
            "反乌托邦"
        ]
    },
    {
        "title": "十字锁喉手",
        "url": "movie-434.html",
        "cover": "./134.jpg",
        "year": "1982",
        "region": "中国香港",
        "genre": "动作,犯罪,剧情",
        "type": "电影",
        "tags": [
            "邵氏",
            "擒拿",
            "复仇",
            "兄弟反目",
            "老港片"
        ]
    },
    {
        "title": "一部电影",
        "url": "movie-435.html",
        "cover": "./135.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情、实验",
        "type": "电影",
        "tags": [
            "元叙事",
            "戏中戏",
            "导演",
            "人生",
            "哲学"
        ]
    },
    {
        "title": "给妹妹的情书",
        "url": "movie-436.html",
        "cover": "./136.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "家庭/青春",
        "type": "电影",
        "tags": [
            "姐妹",
            "书信",
            "暗恋",
            "代笔",
            "秘密"
        ]
    },
    {
        "title": "万紫千红花弄蝶",
        "url": "movie-437.html",
        "cover": "./137.jpg",
        "year": "1999",
        "region": "中国香港",
        "genre": "爱情/文艺",
        "type": "电影",
        "tags": [
            "蝴蝶",
            "女性",
            "唯美",
            "怀旧"
        ]
    },
    {
        "title": "百万吨级武藏",
        "url": "movie-438.html",
        "cover": "./138.jpg",
        "year": "2027",
        "region": "日本",
        "genre": "机甲,热血",
        "type": "动画剧集",
        "tags": [
            "外星入侵",
            "合体",
            "高达风"
        ]
    },
    {
        "title": "长冈的难忘岁月",
        "url": "movie-439.html",
        "cover": "./139.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "剧情,家庭,年代",
        "type": "剧集",
        "tags": [
            "战后",
            "家族",
            "复兴",
            "催泪"
        ]
    },
    {
        "title": "亲爱的别怕我",
        "url": "movie-440.html",
        "cover": "./140.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑/惊悚",
        "type": "剧集",
        "tags": [
            "反转剧",
            "夫妻关系",
            "心理操控",
            "密室"
        ]
    },
    {
        "title": "大汉风之破釜沉舟",
        "url": "movie-441.html",
        "cover": "./141.jpg",
        "year": "2005",
        "region": "中国大陆",
        "genre": "历史/战争/古装",
        "type": "电影",
        "tags": [
            "楚汉争霸",
            "项羽",
            "巨鹿之战",
            "成语故事"
        ]
    },
    {
        "title": "马戏女郎",
        "url": "movie-442.html",
        "cover": "./142.jpg",
        "year": "2023",
        "region": "西班牙/墨西哥",
        "genre": "剧情/歌舞/女性",
        "type": "电影",
        "tags": [
            "飞刀",
            "母女",
            "继承",
            "身体政治"
        ]
    },
    {
        "title": "百万两之壶",
        "url": "movie-443.html",
        "cover": "./143.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "悬疑剧情",
        "type": "电影",
        "tags": [
            "古董",
            "家族秘密",
            "茶道",
            "百年骗局"
        ]
    },
    {
        "title": "克伦西亚",
        "url": "movie-444.html",
        "cover": "./144.jpg",
        "year": "2025",
        "region": "英国/德国",
        "genre": "奇幻/历史",
        "type": "剧集",
        "tags": [
            "架空大陆",
            "王室斗争",
            "魔法",
            "史诗"
        ]
    },
    {
        "title": "阴谋职场第二季",
        "url": "movie-445.html",
        "cover": "./145.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,动画",
        "type": "剧集",
        "tags": [
            "成人动画",
            "社畜文化",
            "阴谋论",
            "办公室政治"
        ]
    },
    {
        "title": "路易斯安纳鱼子酱",
        "url": "movie-446.html",
        "cover": "./146.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/喜剧/家庭",
        "type": "电影",
        "tags": [
            "南方",
            "穷富",
            "食物",
            "和解"
        ]
    },
    {
        "title": "剃刀边缘1980",
        "url": "movie-447.html",
        "cover": "./147.jpg",
        "year": "1980",
        "region": "中国台湾",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "凶杀",
            "雨夜",
            "失忆",
            "古典推理"
        ]
    },
    {
        "title": "三勇士蛮荒救美",
        "url": "movie-448.html",
        "cover": "./148.jpg",
        "year": "1985",
        "region": "美国",
        "genre": "冒险,动作,奇幻",
        "type": "电影",
        "tags": [
            "原始部落",
            "救援",
            "蛮荒",
            "勇士",
            "异族"
        ]
    },
    {
        "title": "咸鱼传奇",
        "url": "movie-449.html",
        "cover": "./149.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "喜剧、励志、古装",
        "type": "电影",
        "tags": [
            "逆袭",
            "草根皇帝",
            "无厘头"
        ]
    },
    {
        "title": "母亲节",
        "url": "movie-450.html",
        "cover": "./150.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "剧情/家庭/悬疑",
        "type": "电影",
        "tags": [
            "母爱",
            "身份迷局",
            "西班牙悬疑",
            "催泪弹"
        ]
    },
    {
        "title": "弹簧刀",
        "url": "movie-451.html",
        "cover": "./1.jpg",
        "year": "1996",
        "region": "美国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "友情",
            "救赎",
            "智障",
            "小镇",
            "温情"
        ]
    },
    {
        "title": "小鸡",
        "url": "movie-452.html",
        "cover": "./2.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "动画/冒险",
        "type": "电影",
        "tags": [
            "农场",
            "成长",
            "环保",
            "寓言"
        ]
    },
    {
        "title": "名校",
        "url": "movie-453.html",
        "cover": "./3.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情、悬疑、教育",
        "type": "剧集",
        "tags": [
            "升学压力",
            "校园霸凌",
            "阶级",
            "探案"
        ]
    },
    {
        "title": "孽迷宫",
        "url": "movie-454.html",
        "cover": "./4.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "悬疑,惊悚,犯罪",
        "type": "电影",
        "tags": [
            "心理战",
            "密室",
            "遗产争夺",
            "全员恶人",
            "多层反转"
        ]
    },
    {
        "title": "潜艇总动员:海底两万里",
        "url": "movie-455.html",
        "cover": "./5.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻/冒险/儿童",
        "type": "动画电影",
        "tags": [
            "潜艇",
            "凡尔纳",
            "深海冒险",
            "环保科普"
        ]
    },
    {
        "title": "都市灰姑娘",
        "url": "movie-456.html",
        "cover": "./6.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "爱情/职场/喜剧",
        "type": "剧集",
        "tags": [
            "霸总",
            "反套路",
            "职场",
            "灰姑娘",
            "独立女性"
        ]
    },
    {
        "title": "哥哥的情人",
        "url": "movie-457.html",
        "cover": "./7.jpg",
        "year": "1993",
        "region": "中国台湾",
        "genre": "剧情/爱情/家庭",
        "type": "电影",
        "tags": [
            "禁忌之恋",
            "家庭伦理",
            "三角关系",
            "乡村",
            "情感纠葛"
        ]
    },
    {
        "title": "幻影队长",
        "url": "movie-458.html",
        "cover": "./8.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作、超级英雄",
        "type": "电影",
        "tags": [
            "幻觉",
            "反英雄",
            "心理战",
            "间谍"
        ]
    },
    {
        "title": "宇宙嫁给我",
        "url": "movie-459.html",
        "cover": "./9.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,爱情,科幻",
        "type": "网络剧",
        "tags": [
            "外星人",
            "沙雕",
            "甜宠",
            "跨星际",
            "搞笑"
        ]
    },
    {
        "title": "牵牛的夏天",
        "url": "movie-460.html",
        "cover": "./10.jpg",
        "year": "2024",
        "region": "中国内地",
        "genre": "都市/家庭/治愈",
        "type": "电视剧集",
        "tags": [
            "园艺",
            "返乡",
            "代际和解",
            "慢生活"
        ]
    },
    {
        "title": "脱线教父",
        "url": "movie-461.html",
        "cover": "./11.jpg",
        "year": "2025",
        "region": "意大利/美国",
        "genre": "喜剧/犯罪/家庭",
        "type": "电影",
        "tags": [
            "黑帮",
            "乌龙",
            "神父",
            "反转"
        ]
    },
    {
        "title": "失眠社群系列之不眠之夜",
        "url": "movie-462.html",
        "cover": "./12.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "悬疑,惊悚,犯罪",
        "type": "剧集",
        "tags": [
            "失眠",
            "社群",
            "都市传说",
            "单元剧"
        ]
    },
    {
        "title": "冰上鸭仔队再战江湖",
        "url": "movie-463.html",
        "cover": "./13.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧/家庭/运动",
        "type": "电影",
        "tags": [
            "冰球",
            "草台班子",
            "中年危机",
            "热血合家欢"
        ]
    },
    {
        "title": "向着星辰的长征",
        "url": "movie-464.html",
        "cover": "./14.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "科幻/历史/剧情",
        "type": "电影",
        "tags": [
            "航天",
            "硬科幻",
            "家国情怀"
        ]
    },
    {
        "title": "生死桥",
        "url": "movie-465.html",
        "cover": "./15.jpg",
        "year": "2010",
        "region": "中国大陆",
        "genre": "爱情,年代,悬疑",
        "type": "剧集",
        "tags": [
            "民国",
            "三人行",
            "命运",
            "李碧华"
        ]
    },
    {
        "title": "福斯特医生第一季",
        "url": "movie-466.html",
        "cover": "./16.jpg",
        "year": "2017",
        "region": "英国",
        "genre": "剧情,惊悚",
        "type": "剧集",
        "tags": [
            "出轨",
            "复仇",
            "职场女性",
            "心理战"
        ]
    },
    {
        "title": "黑桃皇后",
        "url": "movie-467.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "genre": "惊悚/悬疑",
        "type": "电影",
        "tags": [
            "扑克牌诅咒",
            "心理游戏",
            "庄园",
            "家族秘密"
        ]
    },
    {
        "title": "抵挡太平洋的堤坝",
        "url": "movie-468.html",
        "cover": "./18.jpg",
        "year": "2008",
        "region": "法国",
        "genre": "剧情、历史、家庭",
        "type": "电影",
        "tags": [
            "殖民地",
            "贫穷",
            "绝望",
            "母亲",
            "改编自杜拉斯"
        ]
    },
    {
        "title": "我和春天的约定",
        "url": "movie-469.html",
        "cover": "./19.jpg",
        "year": "2027",
        "region": "中国台湾",
        "genre": "剧情/家庭/同性",
        "type": "电影",
        "tags": [
            "乡土文学",
            "祖孙情",
            "初恋",
            "绝症"
        ]
    },
    {
        "title": "甜米奇竞选总统",
        "url": "movie-470.html",
        "cover": "./20.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧/政治",
        "type": "剧集",
        "tags": [
            "米老鼠",
            "讽刺喜剧",
            "选举",
            "娱乐至死"
        ]
    },
    {
        "title": "甜木兰第三季",
        "url": "movie-471.html",
        "cover": "./21.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "剧情/家庭/浪漫",
        "type": "剧集",
        "tags": [
            "南方",
            "姐妹情",
            "小镇",
            "烘焙"
        ]
    },
    {
        "title": "魔法的力量",
        "url": "movie-472.html",
        "cover": "./22.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "奇幻/冒险/热血",
        "type": "TV 动画",
        "tags": [
            "魔法学院",
            "元素之力",
            "觉醒",
            "宿命",
            "友情"
        ]
    },
    {
        "title": "巴黎时装周",
        "url": "movie-473.html",
        "cover": "./23.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情/悬疑",
        "type": "电影",
        "tags": [
            "时尚圈",
            "职场宫斗",
            "失踪案"
        ]
    },
    {
        "title": "爆裂兄弟",
        "url": "movie-474.html",
        "cover": "./24.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/剧情",
        "type": "电影",
        "tags": [
            "兄弟",
            "犯罪家族",
            "背叛",
            "车戏"
        ]
    },
    {
        "title": "被劫持的爱情",
        "url": "movie-475.html",
        "cover": "./25.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "爱情/犯罪/喜剧",
        "type": "电影",
        "tags": [
            "绑架",
            "人质",
            "斯德哥尔摩",
            "黑色幽默"
        ]
    },
    {
        "title": "隧道",
        "url": "movie-476.html",
        "cover": "./26.jpg",
        "year": "2024",
        "region": "德国",
        "genre": "惊悚/悬疑/政治",
        "type": "剧集",
        "tags": [
            "冷战",
            "柏林",
            "越狱",
            "人性"
        ]
    },
    {
        "title": "薪资带回家",
        "url": "movie-477.html",
        "cover": "./27.jpg",
        "year": "2025",
        "region": "印度",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "劳工问题",
            "父爱如山",
            "底层视角"
        ]
    },
    {
        "title": "顶级阴谋",
        "url": "movie-478.html",
        "cover": "./28.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "政治/悬疑",
        "type": "剧集",
        "tags": [
            "阴谋论",
            "总统",
            "深层政府",
            "记者",
            "反转套娃"
        ]
    },
    {
        "title": "人民公敌第三集",
        "url": "movie-479.html",
        "cover": "./29.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "政治,犯罪",
        "type": "剧集",
        "tags": [
            "检察官",
            "政商勾结",
            "爽剧",
            "体制内反抗"
        ]
    },
    {
        "title": "浪客剑心最终章人诛篇",
        "url": "movie-480.html",
        "cover": "./30.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "动作/历史/剧情",
        "type": "电影",
        "tags": [
            "剑心",
            "追忆篇",
            "雪代巴",
            "人诛",
            "完结"
        ]
    },
    {
        "title": "蜡像",
        "url": "movie-481.html",
        "cover": "./31.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "都市传说",
            "邪术",
            "人皮蜡像"
        ]
    },
    {
        "title": "微天堂",
        "url": "movie-482.html",
        "cover": "./32.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻/悬疑",
        "type": "剧集",
        "tags": [
            "虚拟现实",
            "意识上传",
            "阶级",
            "伦理"
        ]
    },
    {
        "title": "鹅毛笔",
        "url": "movie-483.html",
        "cover": "./33.jpg",
        "year": "2020",
        "region": "英国",
        "genre": "悬疑/传记",
        "type": "电影",
        "tags": [
            "禁书",
            "文学审查",
            "精神病院",
            "疯癫与文明"
        ]
    },
    {
        "title": "鬼家怪谈",
        "url": "movie-484.html",
        "cover": "./34.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "日式恐怖",
            "怪谈",
            "家族诅咒",
            "密室",
            "反转"
        ]
    },
    {
        "title": "笔仙惊魂",
        "url": "movie-485.html",
        "cover": "./35.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "校园灵异",
            "游戏",
            "因果循环",
            "民俗"
        ]
    },
    {
        "title": "爱,死亡和机器人第四季",
        "url": "movie-486.html",
        "cover": "./36.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻/动画/奇幻/恐怖",
        "type": "动画剧集",
        "tags": [
            "短片集",
            "成人动画",
            "脑洞"
        ]
    },
    {
        "title": "寂寞大师",
        "url": "movie-487.html",
        "cover": "./37.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "孤独",
            "艺术",
            "救赎",
            "温情"
        ]
    },
    {
        "title": "恋爱中的舒伯特",
        "url": "movie-488.html",
        "cover": "./38.jpg",
        "year": "2025",
        "region": "奥地利/德国",
        "genre": "音乐/爱情/传记",
        "type": "电影",
        "tags": [
            "古典乐",
            "作曲家",
            "维也纳",
            "暗恋",
            "艺术"
        ]
    },
    {
        "title": "强制执行",
        "url": "movie-489.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,犯罪,动作",
        "type": "电影",
        "tags": [
            "法理情",
            "执行法官",
            "社会现实"
        ]
    },
    {
        "title": "柏林漂流",
        "url": "movie-490.html",
        "cover": "./40.jpg",
        "year": "2023",
        "region": "德国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "难民",
            "柏林",
            "偶遇",
            "都市",
            "成长"
        ]
    },
    {
        "title": "铁幕下的童年",
        "url": "movie-491.html",
        "cover": "./41.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "冷战",
            "苏联",
            "儿童视角",
            "历史"
        ]
    },
    {
        "title": "今天可能有点辣",
        "url": "movie-492.html",
        "cover": "./42.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "剧情/家庭",
        "type": "剧集",
        "tags": [
            "美食",
            "临终关怀",
            "母女",
            "治愈"
        ]
    },
    {
        "title": "后半生 第二季",
        "url": "movie-493.html",
        "cover": "./43.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "剧情/喜剧",
        "type": "剧集",
        "tags": [
            "英式丧",
            "治愈",
            "中年危机"
        ]
    },
    {
        "title": "辛弃疾铁血传奇",
        "url": "movie-494.html",
        "cover": "./44.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史/动作/传记",
        "type": "电影",
        "tags": [
            "南宋",
            "豪放派",
            "抗金",
            "智勇双全",
            "沙场秋点兵"
        ]
    },
    {
        "title": "黑暗之歌",
        "url": "movie-495.html",
        "cover": "./45.jpg",
        "year": "2024",
        "region": "爱尔兰",
        "genre": "恐怖,民俗,音乐",
        "type": "电影",
        "tags": [
            "凯尔特神话",
            "吟游诗人",
            "仪式感",
            "心理恐怖"
        ]
    },
    {
        "title": "哈莉·奎茵第五季",
        "url": "movie-496.html",
        "cover": "./46.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动画,动作,喜剧",
        "type": "剧集",
        "tags": [
            "反英雄",
            "DC宇宙",
            "暴力美学",
            "女性向"
        ]
    },
    {
        "title": "正经少主的幸福生活",
        "url": "movie-497.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "喜剧/古装/家庭",
        "type": "剧集",
        "tags": [
            "反套路",
            "少主",
            "种田",
            "躺平"
        ]
    },
    {
        "title": "蓝调之歌",
        "url": "movie-498.html",
        "cover": "./48.jpg",
        "year": "2008",
        "region": "印度",
        "genre": "动画、歌舞、剧情",
        "type": "电影",
        "tags": [
            "女性",
            "神话",
            "现代",
            "出轨"
        ]
    },
    {
        "title": "樱桃炸弹2024",
        "url": "movie-499.html",
        "cover": "./49.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "动作/犯罪",
        "type": "电影",
        "tags": [
            "女性杀手",
            "复仇",
            "炸裂打斗",
            "霓虹美学",
            "黑色电影"
        ]
    },
    {
        "title": "固执的爱",
        "url": "movie-500.html",
        "cover": "./50.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "爱情,家庭,剧情",
        "type": "剧集",
        "tags": [
            "姐弟恋",
            "聋哑",
            "泡菜",
            "治愈",
            "长跑"
        ]
    },
    {
        "title": "两厢情愿",
        "url": "movie-501.html",
        "cover": "./51.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "爱情、喜剧、家庭",
        "type": "电视剧",
        "tags": [
            "契约婚姻",
            "先婚后爱",
            "方言",
            "美食"
        ]
    },
    {
        "title": "老鼠爱大米",
        "url": "movie-502.html",
        "cover": "./52.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "爱情/黑色喜剧",
        "type": "电影",
        "tags": [
            "网恋",
            "替身",
            "粮食战争",
            "反转"
        ]
    },
    {
        "title": "美国围攻",
        "url": "movie-503.html",
        "cover": "./53.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/惊悚",
        "type": "电影",
        "tags": [
            "反恐",
            "孤胆英雄",
            "密室逃脱"
        ]
    },
    {
        "title": "亲家过年",
        "url": "movie-504.html",
        "cover": "./54.jpg",
        "year": "2012",
        "region": "中国大陆",
        "genre": "喜剧/家庭",
        "type": "电影",
        "tags": [
            "春节",
            "过年",
            "亲家",
            "矛盾",
            "团圆"
        ]
    },
    {
        "title": "三看御妹刘金定",
        "url": "movie-505.html",
        "cover": "./55.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "戏曲/古装/爱情/喜剧",
        "type": "电影",
        "tags": [
            "越剧电影",
            "女将军",
            "反套路爱情",
            "巾帼不让须眉"
        ]
    },
    {
        "title": "猪人归来",
        "url": "movie-506.html",
        "cover": "./56.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "都市传说",
            "血腥",
            "返乡",
            "诅咒"
        ]
    },
    {
        "title": "黑暗正义联盟:天启星战争",
        "url": "movie-507.html",
        "cover": "./57.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作、奇幻、科幻",
        "type": "动画电影",
        "tags": [
            "DC",
            "魔法",
            "末日",
            "黑暗",
            "正联"
        ]
    },
    {
        "title": "买凶杀自己",
        "url": "movie-508.html",
        "cover": "./58.jpg",
        "year": "2026",
        "region": "香港",
        "genre": "黑色喜剧、犯罪、悬疑",
        "type": "电影",
        "tags": [
            "自杀",
            "雇佣杀手",
            "绝症",
            "意外反转"
        ]
    },
    {
        "title": "地心毁灭",
        "url": "movie-509.html",
        "cover": "./59.jpg",
        "year": "2003",
        "region": "美国",
        "genre": "科幻,动作,灾难",
        "type": "电影",
        "tags": [
            "地心",
            "核爆",
            "冒险",
            "科学",
            "拯救世界"
        ]
    },
    {
        "title": "纸人",
        "url": "movie-510.html",
        "cover": "./60.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑,剧情",
        "type": "电影",
        "tags": [
            "剪纸",
            "小镇",
            "死亡预言",
            "民俗",
            "心理"
        ]
    },
    {
        "title": "奇妙的命运呀",
        "url": "movie-511.html",
        "cover": "./61.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "奇幻/爱情/喜剧",
        "type": "剧集",
        "tags": [
            "穿越",
            "漫画",
            "逆袭",
            "校园",
            "二次元"
        ]
    },
    {
        "title": "泰版秘密花园",
        "url": "movie-512.html",
        "cover": "./62.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "爱情,奇幻,喜剧",
        "type": "电视剧",
        "tags": [
            "灵魂互换",
            "富豪与替身",
            "泰式搞笑",
            "田园风光",
            "双向治愈"
        ]
    },
    {
        "title": "白日美人",
        "url": "movie-513.html",
        "cover": "./63.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情,情色,心理",
        "type": "电影",
        "tags": [
            "重拍经典",
            "欲望",
            "中产阶级",
            "布努埃尔"
        ]
    },
    {
        "title": "烈火刀影",
        "url": "movie-514.html",
        "cover": "./64.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "武侠,悬疑,年代",
        "type": "电视剧",
        "tags": [
            "民国江湖",
            "复仇",
            "冷兵器",
            "帮派斗争"
        ]
    },
    {
        "title": "我就是不按套路出牌",
        "url": "movie-515.html",
        "cover": "./65.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,奇幻,职场",
        "type": "剧集",
        "tags": [
            "反内卷",
            "系统文",
            "套路解构",
            "爽剧变奏"
        ]
    },
    {
        "title": "奴隶的梦想",
        "url": "movie-516.html",
        "cover": "./66.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "剧情/历史/悬疑",
        "type": "电影",
        "tags": [
            "黑奴史",
            "超现实",
            "自由隐喻",
            "种植园",
            "觉醒"
        ]
    },
    {
        "title": "作家不跳舞:等待贝克特",
        "url": "movie-517.html",
        "cover": "./67.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "存在主义",
            "文学",
            "荒诞",
            "黑色幽默"
        ]
    },
    {
        "title": "假行家",
        "url": "movie-518.html",
        "cover": "./68.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧/悬疑/荒诞",
        "type": "剧集",
        "tags": [
            "冒牌专家",
            "伦敦文艺圈",
            "骗中骗",
            "身份错位",
            "每集一个领域"
        ]
    },
    {
        "title": "剑豪的一生",
        "url": "movie-519.html",
        "cover": "./69.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "剧情/动作/传记",
        "type": "电影",
        "tags": [
            "武士道",
            "孤独",
            "时代剧",
            "宿命"
        ]
    },
    {
        "title": "百变智多星",
        "url": "movie-520.html",
        "cover": "./70.jpg",
        "year": "1995",
        "region": "中国香港",
        "genre": "喜剧/犯罪/动作",
        "type": "电影",
        "tags": [
            "易容术",
            "骗中骗",
            "港式无厘头",
            "团伙作案"
        ]
    },
    {
        "title": "如此勇敢的女孩",
        "url": "movie-521.html",
        "cover": "./71.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "剧情/惊悚",
        "type": "电影",
        "tags": [
            "女性",
            "复仇",
            "校园霸凌",
            "反杀",
            "社会议题"
        ]
    },
    {
        "title": "束不住的茜茜皇后",
        "url": "movie-522.html",
        "cover": "./72.jpg",
        "year": "2024",
        "region": "奥地利/德国",
        "genre": "历史传记",
        "type": "电视剧",
        "tags": [
            "茜茜皇后",
            "反叛",
            "女性觉醒",
            "宫廷"
        ]
    },
    {
        "title": "新学生",
        "url": "movie-523.html",
        "cover": "./73.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "校园/剧情",
        "type": "剧集",
        "tags": [
            "转校生",
            "霸凌",
            "救赎"
        ]
    },
    {
        "title": "圣乔治日",
        "url": "movie-524.html",
        "cover": "./74.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "战争,历史,动作",
        "type": "电影",
        "tags": [
            "中世纪",
            "屠龙传说",
            "反英雄",
            "信仰"
        ]
    },
    {
        "title": "少年去天国",
        "url": "movie-525.html",
        "cover": "./75.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "剧情,奇幻,治愈",
        "type": "电影",
        "tags": [
            "生命教育",
            "催泪",
            "公路片"
        ]
    },
    {
        "title": "三三两两的恋爱",
        "url": "movie-526.html",
        "cover": "./76.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "爱情/喜剧",
        "type": "剧集",
        "tags": [
            "单元剧",
            "都市",
            "群像",
            "轻喜",
            "真实感"
        ]
    },
    {
        "title": "美特拉",
        "url": "movie-527.html",
        "cover": "./77.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻/惊悚",
        "type": "电影",
        "tags": [
            "太空灾难",
            "AI失控",
            "密室求生"
        ]
    },
    {
        "title": "末日狂花",
        "url": "movie-528.html",
        "cover": "./78.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/冒险",
        "type": "电影",
        "tags": [
            "女性公路",
            "丧尸",
            "改装车",
            "姐妹情"
        ]
    },
    {
        "title": "新娘航班",
        "url": "movie-529.html",
        "cover": "./79.jpg",
        "year": "2025",
        "region": "荷兰",
        "genre": "剧情,历史,爱情",
        "type": "电影",
        "tags": [
            "二战",
            "移民",
            "女性",
            "空中乘务"
        ]
    },
    {
        "title": "欲孽",
        "url": "movie-530.html",
        "cover": "./80.jpg",
        "year": "2024",
        "region": "香港",
        "genre": "剧情,爱情,悬疑",
        "type": "剧集",
        "tags": [
            "豪门恩怨",
            "不伦之恋",
            "精神控制",
            "大尺度"
        ]
    },
    {
        "title": "防筑传说",
        "url": "movie-531.html",
        "cover": "./81.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "悬疑/奇幻/历史",
        "type": "电影",
        "tags": [
            "长城",
            "民间传说",
            "平行时空",
            "时空循环",
            "历史悬疑"
        ]
    },
    {
        "title": "沉默之墙",
        "url": "movie-532.html",
        "cover": "./82.jpg",
        "year": "2024",
        "region": "西班牙/阿根廷",
        "genre": "悬疑,剧情",
        "type": "电影",
        "tags": [
            "公寓",
            "噪音",
            "邻居",
            "心理"
        ]
    },
    {
        "title": "黑色的新娘",
        "url": "movie-533.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑/惊悚/爱情",
        "type": "剧集",
        "tags": [
            "婚姻",
            "复仇",
            "心理战",
            "上流社会"
        ]
    },
    {
        "title": "空手道",
        "url": "movie-534.html",
        "cover": "./84.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情、运动、励志",
        "type": "电影",
        "tags": [
            "空手道",
            "女高中生",
            "自闭症",
            "师徒"
        ]
    },
    {
        "title": "江湖有道",
        "url": "movie-535.html",
        "cover": "./85.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "喜剧、犯罪",
        "type": "电影",
        "tags": [
            "黑道",
            "环保",
            "荒谬"
        ]
    },
    {
        "title": "西尔玛",
        "url": "movie-536.html",
        "cover": "./86.jpg",
        "year": "2024",
        "region": "挪威,瑞典",
        "genre": "剧情,奇幻,惊悚",
        "type": "电影",
        "tags": [
            "超自然",
            "宗教压抑",
            "觉醒",
            "女性力量"
        ]
    },
    {
        "title": "杨光的快乐生活4",
        "url": "movie-537.html",
        "cover": "./87.jpg",
        "year": "2011",
        "region": "中国大陆",
        "genre": "喜剧,家庭",
        "type": "剧集",
        "tags": [
            "津味喜剧",
            "小人物",
            "邻里",
            "家长里短"
        ]
    },
    {
        "title": "刑事案十号",
        "url": "movie-538.html",
        "cover": "./88.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "犯罪,悬疑,律政",
        "type": "电视剧",
        "tags": [
            "冷案",
            "档案室",
            "推理",
            "搭档"
        ]
    },
    {
        "title": "来自玛茹西亚的信",
        "url": "movie-539.html",
        "cover": "./89.jpg",
        "year": "2023",
        "region": "波兰/德国",
        "genre": "爱情,战争,剧情",
        "type": "电影",
        "tags": [
            "二战",
            "书信",
            "绝恋",
            "重逢"
        ]
    },
    {
        "title": "楚汉骄雄粤语",
        "url": "movie-540.html",
        "cover": "./90.jpg",
        "year": "2004",
        "region": "中国香港",
        "genre": "历史,战争,剧情",
        "type": "剧集",
        "tags": [
            "粤语配音",
            "刘邦",
            "项羽",
            "权谋"
        ]
    },
    {
        "title": "艳遇比赛2",
        "url": "movie-541.html",
        "cover": "./91.jpg",
        "year": "2026",
        "region": "泰国",
        "genre": "爱情",
        "type": "电影",
        "tags": [
            "旅行",
            "竞赛",
            "网红",
            "反转"
        ]
    },
    {
        "title": "超能特工学院",
        "url": "movie-542.html",
        "cover": "./92.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "科幻,悬疑,青春",
        "type": "剧集",
        "tags": [
            "异能",
            "校园",
            "卧底",
            "超能力战争"
        ]
    },
    {
        "title": "真假学园5",
        "url": "movie-543.html",
        "cover": "./93.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "动作,青春,校园",
        "type": "剧集",
        "tags": [
            "不良少女",
            "热血",
            "打架",
            "毕业"
        ]
    },
    {
        "title": "噩梦交响曲",
        "url": "movie-544.html",
        "cover": "./94.jpg",
        "year": "2024",
        "region": "德国",
        "genre": "惊悚、音乐",
        "type": "电影",
        "tags": [
            "古典乐",
            "精神分裂",
            "心理操控",
            "噪音",
            "悬疑"
        ]
    },
    {
        "title": "格列佛的宇宙旅行",
        "url": "movie-545.html",
        "cover": "./95.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻/冒险",
        "type": "电影",
        "tags": [
            "太空歌剧",
            "异星文明",
            "经典改编"
        ]
    },
    {
        "title": "婶子",
        "url": "movie-546.html",
        "cover": "./96.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "剧集",
        "tags": [
            "农村",
            "女性",
            "时代变迁",
            "坚韧",
            "亲情"
        ]
    },
    {
        "title": "凛冬边缘",
        "url": "movie-547.html",
        "cover": "./97.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "犯罪,悬疑",
        "type": "电影",
        "tags": [
            "东北",
            "黑色电影",
            "追凶"
        ]
    },
    {
        "title": "土豚",
        "url": "movie-548.html",
        "cover": "./98.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "犯罪,黑色幽默",
        "type": "剧集",
        "tags": [
            "怪盗",
            "动物隐喻",
            "低科技犯罪"
        ]
    },
    {
        "title": "小脚板走天涯8",
        "url": "movie-549.html",
        "cover": "./99.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "动画,冒险,家庭",
        "type": "电影",
        "tags": [
            "恐龙",
            "续集",
            "成长",
            "友情",
            "寻家"
        ]
    },
    {
        "title": "第零军团",
        "url": "movie-550.html",
        "cover": "./100.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻战争",
        "type": "剧集",
        "tags": [
            "克隆人",
            "觉醒",
            "道德困境",
            "太空歌剧"
        ]
    },
    {
        "title": "幸福特快车",
        "url": "movie-551.html",
        "cover": "./101.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "时间循环",
            "电车",
            "人生选择",
            "治愈"
        ]
    },
    {
        "title": "鲁邦三世 不死身的血族",
        "url": "movie-552.html",
        "cover": "./102.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "动作、冒险、怪盗",
        "type": "动画特别篇",
        "tags": [
            "鲁邦三世",
            "吸血鬼传说",
            "欧洲古堡"
        ]
    },
    {
        "title": "龙之奇迹",
        "url": "movie-553.html",
        "cover": "./103.jpg",
        "year": "2025",
        "region": "泰国/中国大陆",
        "genre": "奇幻/冒险/动作",
        "type": "电影",
        "tags": [
            "东南亚",
            "龙",
            "传说",
            "女性英雄",
            "视觉奇观"
        ]
    },
    {
        "title": "金陵三绝之猾丐",
        "url": "movie-554.html",
        "cover": "./104.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装/动作/悬疑",
        "type": "电影",
        "tags": [
            "丐帮",
            "奇案",
            "美食",
            "江湖"
        ]
    },
    {
        "title": "四角社群",
        "url": "movie-555.html",
        "cover": "./105.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/悬疑",
        "type": "剧集",
        "tags": [
            "社交实验",
            "人性博弈",
            "密室",
            "心理战"
        ]
    },
    {
        "title": "我是古巴",
        "url": "movie-556.html",
        "cover": "./106.jpg",
        "year": "2024",
        "region": "古巴/西班牙",
        "genre": "剧情/音乐/历史",
        "type": "电影",
        "tags": [
            "黑白摄影",
            "长镜头炫技",
            "殖民伤痕",
            "雪茄与革命",
            "魔幻现实主义"
        ]
    },
    {
        "title": "明年此时",
        "url": "movie-557.html",
        "cover": "./107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/奇幻/剧情",
        "type": "电影",
        "tags": [
            "时间循环",
            "遗憾弥补",
            "治愈"
        ]
    },
    {
        "title": "绝地战警:生死与共",
        "url": "movie-558.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "警匪",
            "搭档",
            "枪战",
            "幽默"
        ]
    },
    {
        "title": "超人梅比斯外传:光明始动",
        "url": "movie-559.html",
        "cover": "./109.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "特摄,科幻,超级英雄",
        "type": "电影",
        "tags": [
            "奥特曼",
            "前传",
            "成长",
            "友情"
        ]
    },
    {
        "title": "霸爱总裁",
        "url": "movie-560.html",
        "cover": "./110.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "爱情/剧情",
        "type": "剧集",
        "tags": [
            "商战",
            "替身文学",
            "失忆",
            "豪门恩怨"
        ]
    },
    {
        "title": "王室绯闻守则",
        "url": "movie-561.html",
        "cover": "./111.jpg",
        "year": "2023",
        "region": "英国",
        "genre": "爱情喜剧",
        "type": "电影",
        "tags": [
            "王室",
            "同性",
            "政治",
            "喜剧",
            "罗密欧与朱丽叶式"
        ]
    },
    {
        "title": "谎话连篇 浪花梦之阵",
        "url": "movie-562.html",
        "cover": "./112.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "喜剧、剧情",
        "type": "电影",
        "tags": [
            "古董骗局",
            "关西文化",
            "茶碗",
            "反转再反转"
        ]
    },
    {
        "title": "郊狼",
        "url": "movie-563.html",
        "cover": "./113.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "犯罪,剧情",
        "type": "剧集",
        "tags": [
            "边境",
            "走私",
            "卧底",
            "拉丁裔",
            "人性"
        ]
    },
    {
        "title": "一子错",
        "url": "movie-564.html",
        "cover": "./114.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情,犯罪,动作",
        "type": "电影",
        "tags": [
            "象棋",
            "黑帮",
            "悔棋"
        ]
    },
    {
        "title": "越狱者",
        "url": "movie-565.html",
        "cover": "./115.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "动作/悬疑/犯罪",
        "type": "电视剧",
        "tags": [
            "越狱",
            "体制内黑幕",
            "双面人",
            "高智商"
        ]
    },
    {
        "title": "奇缘",
        "url": "movie-566.html",
        "cover": "./116.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "爱情/奇幻",
        "type": "电影",
        "tags": [
            "轮回",
            "古董",
            "时钟",
            "错位时空"
        ]
    },
    {
        "title": "空军敢死队",
        "url": "movie-567.html",
        "cover": "./117.jpg",
        "year": "1958",
        "region": "美国",
        "genre": "战争、动作",
        "type": "电影",
        "tags": [
            "二战",
            "飞行员",
            "轰炸任务",
            "黑白片"
        ]
    },
    {
        "title": "索马里海盗之绿林海盗",
        "url": "movie-568.html",
        "cover": "./118.jpg",
        "year": "2026",
        "region": "美国/索马里",
        "genre": "动作,冒险,犯罪",
        "type": "电影",
        "tags": [
            "海盗",
            "反英雄",
            "丛林法则",
            "枪战"
        ]
    },
    {
        "title": "落水狗",
        "url": "movie-569.html",
        "cover": "./119.jpg",
        "year": "1992",
        "region": "美国",
        "genre": "犯罪、剧情、惊悚",
        "type": "电影",
        "tags": [
            "昆汀",
            "黑色幽默",
            "非线性叙事",
            "抢劫",
            "背叛"
        ]
    },
    {
        "title": "和爸爸在一起",
        "url": "movie-570.html",
        "cover": "./120.jpg",
        "year": "2014",
        "region": "中国大陆",
        "genre": "剧情/家庭/儿童",
        "type": "电影",
        "tags": [
            "父子",
            "留守儿童",
            "绝症",
            "成长"
        ]
    },
    {
        "title": "大学新生",
        "url": "movie-571.html",
        "cover": "./121.jpg",
        "year": "2021",
        "region": "中国",
        "genre": "青春/校园",
        "type": "剧集",
        "tags": [
            "宿舍生活",
            "社团竞选",
            "成长阵痛"
        ]
    },
    {
        "title": "时空陷阱",
        "url": "movie-572.html",
        "cover": "./122.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "科幻,悬疑",
        "type": "电影",
        "tags": [
            "时间循环",
            "实验室",
            "克隆",
            "悖论",
            "烧脑"
        ]
    },
    {
        "title": "学园默示录",
        "url": "movie-573.html",
        "cover": "./123.jpg",
        "year": "2010",
        "region": "日本",
        "genre": "恐怖/动作/丧尸",
        "type": "动画剧集",
        "tags": [
            "丧尸",
            "校园",
            "枪战",
            "卖肉",
            "生存"
        ]
    },
    {
        "title": "安娜和狼",
        "url": "movie-574.html",
        "cover": "./124.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,悬疑,奇幻",
        "type": "电影",
        "tags": [
            "人性",
            "心理博弈",
            "女性力量",
            "寓言式叙事"
        ]
    },
    {
        "title": "春梦",
        "url": "movie-575.html",
        "cover": "./125.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "爱情,奇幻,文艺",
        "type": "电影",
        "tags": [
            "梦境",
            "暗恋",
            "时空交错",
            "唯美"
        ]
    },
    {
        "title": "他的模样",
        "url": "movie-576.html",
        "cover": "./126.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情,爱情,伦理",
        "type": "电影",
        "tags": [
            "替身",
            "肖像画",
            "禁忌之恋",
            "失忆",
            "寻找自我"
        ]
    },
    {
        "title": "私家课程",
        "url": "movie-577.html",
        "cover": "./127.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "剧情同性",
        "type": "电影",
        "tags": [
            "师生",
            "钢琴",
            "代际创伤",
            "禁恋",
            "秘密"
        ]
    },
    {
        "title": "曼谷爱情故事之纯真",
        "url": "movie-578.html",
        "cover": "./128.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "青春同性",
        "type": "电视剧",
        "tags": [
            "校园",
            "暗恋",
            "音乐"
        ]
    },
    {
        "title": "学警狙击国语",
        "url": "movie-579.html",
        "cover": "./129.jpg",
        "year": "2009",
        "region": "中国香港",
        "genre": "警匪,动作,剧情",
        "type": "剧集",
        "tags": [
            "卧底",
            "警校兄弟",
            "港式枪战"
        ]
    },
    {
        "title": "失忆的爱",
        "url": "movie-580.html",
        "cover": "./130.jpg",
        "year": "2021",
        "region": "韩国",
        "genre": "爱情,悬疑",
        "type": "剧集",
        "tags": [
            "失忆",
            "契约婚姻",
            "反转",
            "催泪"
        ]
    },
    {
        "title": "情断爱河",
        "url": "movie-581.html",
        "cover": "./131.jpg",
        "year": "2025",
        "region": "印度",
        "genre": "爱情/剧情/歌舞",
        "type": "电影",
        "tags": [
            "宝莱坞",
            "浪漫悲剧",
            "圣河",
            "家族世仇",
            "隔世情缘"
        ]
    },
    {
        "title": "大马戏团",
        "url": "movie-582.html",
        "cover": "./132.jpg",
        "year": "1952",
        "region": "美国",
        "genre": "剧情/爱情/马戏",
        "type": "电影",
        "tags": [
            "马戏团",
            "爱情",
            "悲剧",
            "经典",
            "人间冷暖"
        ]
    },
    {
        "title": "我们这一天第一季",
        "url": "movie-583.html",
        "cover": "./133.jpg",
        "year": "2016",
        "region": "美国",
        "genre": "剧情/喜剧/家庭",
        "type": "剧集",
        "tags": [
            "催泪",
            "时间交错",
            "多线叙事",
            "生活诗"
        ]
    },
    {
        "title": "四十度晒",
        "url": "movie-584.html",
        "cover": "./134.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "喜剧/惊悚",
        "type": "电影",
        "tags": [
            "度假惊悚",
            "社交媒体",
            "网红文化",
            "密闭空间"
        ]
    },
    {
        "title": "恐怖网络2024",
        "url": "movie-585.html",
        "cover": "./135.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "惊悚/悬疑",
        "type": "电影",
        "tags": [
            "暗网",
            "直播",
            "都市传说",
            "心理恐怖",
            "社会讽刺"
        ]
    },
    {
        "title": "天线宝宝",
        "url": "movie-586.html",
        "cover": "./136.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "恐怖/实验",
        "type": "剧集",
        "tags": [
            "邪典重启",
            "儿童邪典",
            "超自然",
            "心理恐怖",
            "社会隐喻"
        ]
    },
    {
        "title": "钢铁少女团2",
        "url": "movie-587.html",
        "cover": "./137.jpg",
        "year": "2028",
        "region": "日本",
        "genre": "动作,科幻,少女",
        "type": "电影",
        "tags": [
            "机甲",
            "校园",
            "百合"
        ]
    },
    {
        "title": "记忆风暴",
        "url": "movie-588.html",
        "cover": "./138.jpg",
        "year": "2012",
        "region": "美国",
        "genre": "科幻/悬疑/动作",
        "type": "电影",
        "tags": [
            "记忆删除",
            "记忆植入",
            "特工",
            "失忆"
        ]
    },
    {
        "title": "逐浪豪情",
        "url": "movie-589.html",
        "cover": "./139.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "动作/运动/剧情",
        "type": "电影",
        "tags": [
            "冲浪",
            "兄弟情",
            "救赎",
            "台风季"
        ]
    },
    {
        "title": "#居酒屋新干线",
        "url": "movie-590.html",
        "cover": "./140.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "美食/日常",
        "type": "剧集",
        "tags": [
            "铁路",
            "治愈",
            "深夜食堂风"
        ]
    },
    {
        "title": "爱杀玛莉",
        "url": "movie-591.html",
        "cover": "./141.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "都市传说",
            "血腥玛丽",
            "复仇",
            "校园灵异"
        ]
    },
    {
        "title": "合约情人",
        "url": "movie-592.html",
        "cover": "./142.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "浪漫剧情",
        "type": "电影",
        "tags": [
            "契约",
            "治愈",
            "假戏真做",
            "泪点",
            "相互救赎"
        ]
    },
    {
        "title": "隐形狂人",
        "url": "movie-593.html",
        "cover": "./143.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻/恐怖",
        "type": "电影",
        "tags": [
            "心理恐怖",
            "家暴隐喻",
            "高概念",
            "密室"
        ]
    },
    {
        "title": "爱与群魔",
        "url": "movie-594.html",
        "cover": "./144.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情/恐怖",
        "type": "电影",
        "tags": [
            "宗教惊悚",
            "心理异化",
            "历史改编"
        ]
    },
    {
        "title": "还我本性",
        "url": "movie-595.html",
        "cover": "./145.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "犯罪,悬疑,剧情",
        "type": "电影",
        "tags": [
            "失忆",
            "卧底",
            "警匪",
            "身份认同",
            "暴力美学"
        ]
    },
    {
        "title": "人生相谈",
        "url": "movie-596.html",
        "cover": "./146.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情/喜剧/治愈",
        "type": "剧集",
        "tags": [
            "单元剧",
            "深夜电台",
            "人生百态",
            "温情"
        ]
    },
    {
        "title": "信心主宰",
        "url": "movie-597.html",
        "cover": "./147.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "骗局",
            "宗教",
            "洗脑"
        ]
    },
    {
        "title": "还来得及说爱妳",
        "url": "movie-598.html",
        "cover": "./148.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "临终关怀",
            "老年爱情",
            "遗憾",
            "粤语"
        ]
    },
    {
        "title": "旋风书院",
        "url": "movie-599.html",
        "cover": "./149.jpg",
        "year": "2025",
        "region": "中国内地",
        "genre": "古装、青春、竞技",
        "type": "电视剧",
        "tags": [
            "书院打擂",
            "废柴逆袭",
            "热血团魂"
        ]
    },
    {
        "title": "巴哈",
        "url": "movie-600.html",
        "cover": "./150.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "剧情,西部",
        "type": "电影",
        "tags": [
            "新疆",
            "驯鹰人",
            "传承",
            "父子"
        ]
    },
    {
        "title": "女兵报到",
        "url": "movie-601.html",
        "cover": "./1.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/军旅",
        "type": "剧集",
        "tags": [
            "青春",
            "成长",
            "热血",
            "女性",
            "励志"
        ]
    },
    {
        "title": "秋波怨",
        "url": "movie-602.html",
        "cover": "./2.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑/爱情",
        "type": "电影",
        "tags": [
            "民国",
            "宅斗",
            "心理惊悚",
            "眼神杀",
            "替身文学"
        ]
    },
    {
        "title": "234说爱你",
        "url": "movie-603.html",
        "cover": "./3.jpg",
        "year": "2016",
        "region": "中国台湾",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "数字隐喻",
            "恋人絮语",
            "青春告别"
        ]
    },
    {
        "title": "无名记忆",
        "url": "movie-604.html",
        "cover": "./4.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "科幻/爱情",
        "type": "电影",
        "tags": [
            "记忆删除",
            "婚姻",
            "后悔药"
        ]
    },
    {
        "title": "表里不一",
        "url": "movie-605.html",
        "cover": "./5.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "悬疑、惊悚、剧情",
        "type": "剧集",
        "tags": [
            "双重人格",
            "整容",
            "复仇",
            "豪门"
        ]
    },
    {
        "title": "兄弟情深",
        "url": "movie-606.html",
        "cover": "./6.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "剧情/家庭/温情",
        "type": "电影",
        "tags": [
            "手足情",
            "成长",
            "和解",
            "乡土"
        ]
    },
    {
        "title": "警部补大魔神",
        "url": "movie-607.html",
        "cover": "./7.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "动作/犯罪",
        "type": "剧集",
        "tags": [
            "漫改",
            "anti-hero",
            "暴力执法",
            "警视厅",
            "爽剧"
        ]
    },
    {
        "title": "人体蜈蚣",
        "url": "movie-608.html",
        "cover": "./8.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "恐怖科幻",
        "type": "电影",
        "tags": [
            "人体实验",
            "畸形",
            "惊悚",
            "医学疯狂"
        ]
    },
    {
        "title": "命运化妆师",
        "url": "movie-609.html",
        "cover": "./9.jpg",
        "year": "2015",
        "region": "中国台湾",
        "genre": "奇幻/爱情",
        "type": "电视剧",
        "tags": [
            "化妆师",
            "命运",
            "灵魂",
            "治愈",
            "单元剧"
        ]
    },
    {
        "title": "错",
        "url": "movie-610.html",
        "cover": "./10.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "悬疑,犯罪,心理",
        "type": "电影",
        "tags": [
            "时空错乱",
            "蝴蝶效应",
            "高智商",
            "烧脑"
        ]
    },
    {
        "title": "骇故事之凶宅",
        "url": "movie-611.html",
        "cover": "./11.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "直播",
            "灵异",
            "反转",
            "都市传说"
        ]
    },
    {
        "title": "鬼勾魂",
        "url": "movie-612.html",
        "cover": "./12.jpg",
        "year": "1998",
        "region": "中国香港",
        "genre": "恐怖/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "中式恐怖",
            "冥婚",
            "因果报应",
            "阴阳眼"
        ]
    },
    {
        "title": "笼中的女儿",
        "url": "movie-613.html",
        "cover": "./13.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "惊悚,剧情",
        "type": "电影",
        "tags": [
            "囚禁",
            "母女",
            "精神控制",
            "反转"
        ]
    },
    {
        "title": "我们的新生活",
        "url": "movie-614.html",
        "cover": "./14.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "剧情,家庭,社会",
        "type": "剧集",
        "tags": [
            "拆迁",
            "邻里",
            "温暖"
        ]
    },
    {
        "title": "无情路",
        "url": "movie-615.html",
        "cover": "./15.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "警匪/动作",
        "type": "电影",
        "tags": [
            "卧底",
            "双雄",
            "宿敌",
            "枪战",
            "背叛"
        ]
    },
    {
        "title": "屋檐下",
        "url": "movie-616.html",
        "cover": "./16.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "家庭、伦理",
        "type": "电视剧",
        "tags": [
            "老宅拆迁",
            "三代恩怨",
            "遗产暗战",
            "方言剧"
        ]
    },
    {
        "title": "黑影窥窗",
        "url": "movie-617.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "悬疑,惊悚",
        "type": "电影",
        "tags": [
            "对面楼",
            "偷窥反杀",
            "城市恐惧"
        ]
    },
    {
        "title": "对我而言非常珍贵的你",
        "url": "movie-618.html",
        "cover": "./18.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情、家庭、治愈",
        "type": "电影",
        "tags": [
            "父女",
            "自闭症",
            "感动",
            "演技派"
        ]
    },
    {
        "title": "机械玩家",
        "url": "movie-619.html",
        "cover": "./19.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻,悬疑,游戏",
        "type": "剧集",
        "tags": [
            "虚拟现实",
            "死亡游戏",
            "赛博朋克",
            "反转"
        ]
    },
    {
        "title": "中华大丈夫粤语",
        "url": "movie-620.html",
        "cover": "./20.jpg",
        "year": "1998",
        "region": "中国香港",
        "genre": "动作,喜剧",
        "type": "电视剧",
        "tags": [
            "民国功夫",
            "中外对决",
            "粤语原声"
        ]
    },
    {
        "title": "伟大神秘马戏团",
        "url": "movie-621.html",
        "cover": "./21.jpg",
        "year": "2018",
        "region": "法国",
        "genre": "奇幻/剧情",
        "type": "电影",
        "tags": [
            "马戏",
            "代际",
            "梦境"
        ]
    },
    {
        "title": "回到你怀抱",
        "url": "movie-622.html",
        "cover": "./22.jpg",
        "year": "2022",
        "region": "韩国",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "母女和解",
            "遗愿清单",
            "催泪"
        ]
    },
    {
        "title": "夏日福星粤语",
        "url": "movie-623.html",
        "cover": "./23.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "洪金宝",
            "元彪",
            "怀旧",
            "粤语原声",
            "经典重启"
        ]
    },
    {
        "title": "陌生人2",
        "url": "movie-624.html",
        "cover": "./24.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "密室",
            "心理战",
            "身份反转"
        ]
    },
    {
        "title": "心愿房间",
        "url": "movie-625.html",
        "cover": "./25.jpg",
        "year": "2014",
        "region": "美国",
        "genre": "奇幻悬疑",
        "type": "电影",
        "tags": [
            "密室",
            "愿望",
            "代价",
            "心理"
        ]
    },
    {
        "title": "缉毒先锋",
        "url": "movie-626.html",
        "cover": "./26.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "犯罪/动作/悬疑",
        "type": "剧集",
        "tags": [
            "缉毒",
            "卧底",
            "兄弟情",
            "反转"
        ]
    },
    {
        "title": "伊朗式摔角",
        "url": "movie-627.html",
        "cover": "./27.jpg",
        "year": "2021",
        "region": "伊朗",
        "genre": "剧情,运动",
        "type": "电影",
        "tags": [
            "传统",
            "父权",
            "体育"
        ]
    },
    {
        "title": "搏击芭蕾",
        "url": "movie-628.html",
        "cover": "./28.jpg",
        "year": "2023",
        "region": "俄罗斯",
        "genre": "动作,剧情,舞蹈",
        "type": "剧集",
        "tags": [
            "格斗",
            "芭蕾",
            "复仇"
        ]
    },
    {
        "title": "李碧华鬼魅系列",
        "url": "movie-629.html",
        "cover": "./29.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "恐怖,悬疑,爱情",
        "type": "电视剧系列",
        "tags": [
            "单元剧",
            "都市传说",
            "孽缘",
            "宿命",
            "奇情"
        ]
    },
    {
        "title": "男人与婴儿",
        "url": "movie-630.html",
        "cover": "./30.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "喜剧、剧情",
        "type": "电影",
        "tags": [
            "单身父亲",
            "育儿",
            "成长",
            "法式幽默"
        ]
    },
    {
        "title": "掘火者",
        "url": "movie-631.html",
        "cover": "./31.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "悬疑剧情",
        "type": "电影",
        "tags": [
            "考古",
            "西部",
            "家族秘密"
        ]
    },
    {
        "title": "秘密特工",
        "url": "movie-632.html",
        "cover": "./32.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "谍战",
        "type": "电视剧 悬疑/动作",
        "tags": [
            "冷战",
            "双面间谍",
            "身份认同"
        ]
    },
    {
        "title": "博莱罗",
        "url": "movie-633.html",
        "cover": "./33.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情,音乐",
        "type": "电影",
        "tags": [
            "舞蹈",
            "创作",
            "传记",
            "拉威尔"
        ]
    },
    {
        "title": "救森动物联盟",
        "url": "movie-634.html",
        "cover": "./34.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "冒险动画",
        "type": "动画片",
        "tags": [
            "环保",
            "动物伙伴",
            "正能量"
        ]
    },
    {
        "title": "爱在当下",
        "url": "movie-635.html",
        "cover": "./35.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "绝症",
            "时间重置",
            "珍惜"
        ]
    },
    {
        "title": "领袖",
        "url": "movie-636.html",
        "cover": "./36.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情、犯罪、悬疑",
        "type": "电影",
        "tags": [
            "政治阴谋",
            "权力游戏",
            "双面人生",
            "黑暗真相"
        ]
    },
    {
        "title": "关于阿斯特丽德",
        "url": "movie-637.html",
        "cover": "./37.jpg",
        "year": "2025",
        "region": "瑞典",
        "genre": "剧情/传记/家庭",
        "type": "电影",
        "tags": [
            "单亲母亲",
            "自闭症",
            "天才",
            "社会偏见",
            "治愈"
        ]
    },
    {
        "title": "杀人电梯",
        "url": "movie-638.html",
        "cover": "./38.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "惊悚/恐怖",
        "type": "电影",
        "tags": [
            "密闭空间",
            "都市怪谈",
            "复仇",
            "反转"
        ]
    },
    {
        "title": "我对你有感觉",
        "url": "movie-639.html",
        "cover": "./39.jpg",
        "year": "2002",
        "region": "中国香港",
        "genre": "爱情,喜剧",
        "type": "电影",
        "tags": [
            "办公室",
            "暗恋",
            "乌龙",
            "同事",
            "轻喜"
        ]
    },
    {
        "title": "小仙之瑶",
        "url": "movie-640.html",
        "cover": "./40.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装、奇幻、爱情",
        "type": "剧集",
        "tags": [
            "仙婢",
            "逆袭",
            "甜宠",
            "职场",
            "仙界"
        ]
    },
    {
        "title": "柔情史",
        "url": "movie-641.html",
        "cover": "./41.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/家庭/历史",
        "type": "电影",
        "tags": [
            "文革",
            "芭蕾",
            "母女",
            "时代伤痕"
        ]
    },
    {
        "title": "致命女秘书",
        "url": "movie-642.html",
        "cover": "./42.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑、犯罪",
        "type": "电影",
        "tags": [
            "办公室阴谋",
            "双面人生",
            "职场黑化"
        ]
    },
    {
        "title": "那年我对你的承诺",
        "url": "movie-643.html",
        "cover": "./43.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情,剧情,年代",
        "type": "电影",
        "tags": [
            "知青岁月",
            "跨越半生",
            "重逢",
            "遗憾之美"
        ]
    },
    {
        "title": "金鹰访谈2012",
        "url": "movie-644.html",
        "cover": "./44.jpg",
        "year": "2012",
        "region": "中国大陆",
        "genre": "访谈,纪录片",
        "type": "综艺",
        "tags": [
            "怀旧",
            "时代眼泪",
            "考古"
        ]
    },
    {
        "title": "蜜蜂与远雷",
        "url": "movie-645.html",
        "cover": "./45.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情,音乐,青春",
        "type": "电影",
        "tags": [
            "钢琴比赛",
            "天才对决",
            "治愈",
            "古典乐"
        ]
    },
    {
        "title": "汉化日记第一季",
        "url": "movie-646.html",
        "cover": "./46.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,奇幻,日常",
        "type": "剧集",
        "tags": [
            "国风神仙",
            "现代都市",
            "打工少女",
            "手机成精",
            "神仙下凡"
        ]
    },
    {
        "title": "至少是圣徒",
        "url": "movie-647.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "巴西/葡萄牙",
        "genre": "剧情/宗教",
        "type": "电影",
        "tags": [
            "奇迹",
            "贫民窟",
            "信仰",
            "救赎",
            "黑色幽默"
        ]
    },
    {
        "title": "出尔反尔",
        "url": "movie-648.html",
        "cover": "./48.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,奇幻",
        "type": "电影",
        "tags": [
            "超能力",
            "契约",
            "谎言",
            "道德困境"
        ]
    },
    {
        "title": "暗杀沙皇",
        "url": "movie-649.html",
        "cover": "./49.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "genre": "历史,惊悚,动作",
        "type": "电影",
        "tags": [
            "沙俄宫廷",
            "刺杀阴谋",
            "双面间谍"
        ]
    },
    {
        "title": "一八九五",
        "url": "movie-650.html",
        "cover": "./50.jpg",
        "year": "2008",
        "region": "中国台湾",
        "genre": "剧情/历史/战争",
        "type": "电影",
        "tags": [
            "乙未战争",
            "客家义军",
            "抗日"
        ]
    },
    {
        "title": "玩命情劫",
        "url": "movie-651.html",
        "cover": "./51.jpg",
        "year": "2019",
        "region": "法国",
        "genre": "爱情/惊悚",
        "type": "电影",
        "tags": [
            "畸恋",
            "囚禁",
            "斯德哥尔摩综合征",
            "极限"
        ]
    },
    {
        "title": "三大怪兽美食家",
        "url": "movie-652.html",
        "cover": "./52.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "奇幻,喜剧",
        "type": "电影",
        "tags": [
            "怪兽",
            "美食",
            "治愈"
        ]
    },
    {
        "title": "想好再结婚",
        "url": "movie-653.html",
        "cover": "./53.jpg",
        "year": "2006",
        "region": "中国大陆",
        "genre": "爱情、喜剧、都市",
        "type": "剧集",
        "tags": [
            "婚前恐惧",
            "试婚",
            "同居",
            "轻喜"
        ]
    },
    {
        "title": "情人劫",
        "url": "movie-654.html",
        "cover": "./54.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/悬疑",
        "type": "电影",
        "tags": [
            "情人节",
            "反转",
            "都市",
            "虐心"
        ]
    },
    {
        "title": "工作(电影)",
        "url": "movie-655.html",
        "cover": "./55.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "剧情、职场、黑色幽默",
        "type": "电影",
        "tags": [
            "上班",
            "荒诞",
            "裁员",
            "讽刺"
        ]
    },
    {
        "title": "少年标靶",
        "url": "movie-656.html",
        "cover": "./56.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "犯罪,悬疑,动作",
        "type": "电影",
        "tags": [
            "高中生复仇",
            "社会派",
            "反转"
        ]
    },
    {
        "title": "他的",
        "url": "movie-657.html",
        "cover": "./57.jpg",
        "year": "2020",
        "region": "日本",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "LGBTQ+",
            "同妻",
            "抚养权",
            "和解",
            "乡村"
        ]
    },
    {
        "title": "血与雪",
        "url": "movie-658.html",
        "cover": "./58.jpg",
        "year": "2023",
        "region": "加拿大",
        "genre": "悬疑,犯罪,惊悚",
        "type": "电影",
        "tags": [
            "极地",
            "犯罪",
            "封闭空间",
            "人性拷问"
        ]
    },
    {
        "title": "时尚的未来第二季",
        "url": "movie-659.html",
        "cover": "./59.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "真人秀,竞技",
        "type": "剧集",
        "tags": [
            "时尚设计",
            "比赛",
            "淘汰制",
            "创意"
        ]
    },
    {
        "title": "墓王之王:寒铁斗",
        "url": "movie-660.html",
        "cover": "./60.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动作,奇幻,冒险",
        "type": "动画电影",
        "tags": [
            "盗墓",
            "机关术",
            "门派之争"
        ]
    },
    {
        "title": "香蕉先生不睡觉",
        "url": "movie-661.html",
        "cover": "./61.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "奇幻/喜剧/爱情",
        "type": "电视剧",
        "tags": [
            "失眠",
            "偶像",
            "治愈系",
            "甜宠"
        ]
    },
    {
        "title": "娱乐插班生粤语",
        "url": "movie-662.html",
        "cover": "./62.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "都市喜剧",
        "type": "剧集",
        "tags": [
            "电视台",
            "模仿秀",
            "小人物",
            "怀旧"
        ]
    },
    {
        "title": "彩香最爱弘子前辈",
        "url": "movie-663.html",
        "cover": "./63.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "喜剧/爱情/同性",
        "type": "剧集",
        "tags": [
            "职场",
            "年上",
            "暗恋",
            "办公室恋情"
        ]
    },
    {
        "title": "焦裕禄1990",
        "url": "movie-664.html",
        "cover": "./64.jpg",
        "year": "1990",
        "region": "中国大陆",
        "genre": "剧情/传记/历史",
        "type": "电影",
        "tags": [
            "楷模",
            "兰考",
            "治沙",
            "真实改编",
            "精神丰碑"
        ]
    },
    {
        "title": "风流罪过",
        "url": "movie-665.html",
        "cover": "./65.jpg",
        "year": "1975",
        "region": "法国/意大利",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "情色",
            "讽刺",
            "中产阶级",
            "荒诞"
        ]
    },
    {
        "title": "有些事众所周知但是不能说",
        "url": "movie-666.html",
        "cover": "./66.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情/黑色幽默",
        "type": "电影",
        "tags": [
            "职场潜规则",
            "荒诞现实",
            "群体沉默",
            "讽刺",
            "人性实验"
        ]
    },
    {
        "title": "精灵高中:周五夜惊吓夜",
        "url": "movie-667.html",
        "cover": "./67.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画,喜剧,奇幻",
        "type": "电影/动画",
        "tags": [
            "怪物学校",
            "校园舞会",
            "跨种族友谊",
            "青春歌舞",
            "惊吓派对"
        ]
    },
    {
        "title": "女武神的餐桌第一季",
        "url": "movie-668.html",
        "cover": "./68.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "美食,日常",
        "type": "动画",
        "tags": [
            "女神下凡",
            "治愈系",
            "料理对决",
            "轻松向"
        ]
    },
    {
        "title": "再见时光",
        "url": "movie-669.html",
        "cover": "./69.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "阿尔茨海默症",
            "亲情",
            "怀旧"
        ]
    },
    {
        "title": "超燃美食记第二季",
        "url": "movie-670.html",
        "cover": "./70.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "真人秀/美食",
        "type": "综艺",
        "tags": [
            "美食",
            "旅行",
            "明星",
            "竞技"
        ]
    },
    {
        "title": "复仇2008",
        "url": "movie-671.html",
        "cover": "./71.jpg",
        "year": "2008",
        "region": "美国",
        "genre": "动作,惊悚",
        "type": "电影",
        "tags": [
            "复仇",
            "杀手",
            "阴谋",
            "反转"
        ]
    },
    {
        "title": "强扭瓜不甜",
        "url": "movie-672.html",
        "cover": "./72.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧/爱情/乡村",
        "type": "电影",
        "tags": [
            "包办婚姻",
            "农村",
            "逆袭",
            "真香定律",
            "土味浪漫"
        ]
    },
    {
        "title": "我是那不勒斯人",
        "url": "movie-673.html",
        "cover": "./73.jpg",
        "year": "2025",
        "region": "意大利",
        "genre": "剧情/家庭",
        "type": "剧集",
        "tags": [
            "黑手党",
            "女性成长",
            "城市史诗",
            "母女关系",
            "复仇"
        ]
    },
    {
        "title": "神龟力量:忍者神龟简明史",
        "url": "movie-674.html",
        "cover": "./74.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "纪录/动漫史",
        "type": "纪录片",
        "tags": [
            "忍者神龟",
            "幕后",
            "粉丝文化",
            "亚文化"
        ]
    },
    {
        "title": "致善良的妳",
        "url": "movie-675.html",
        "cover": "./75.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "爱情,家庭",
        "type": "电视剧",
        "tags": [
            "善良",
            "虐心",
            "亲情",
            "自我救赎"
        ]
    },
    {
        "title": "洋妞到我家",
        "url": "movie-676.html",
        "cover": "./76.jpg",
        "year": "2018",
        "region": "中国大陆",
        "genre": "喜剧/家庭",
        "type": "电影",
        "tags": [
            "文化碰撞",
            "寄宿家庭",
            "成长",
            "温情",
            "搞笑"
        ]
    },
    {
        "title": "舐血夜魔",
        "url": "movie-677.html",
        "cover": "./77.jpg",
        "year": "1992",
        "region": "美国",
        "genre": "恐怖,吸血鬼",
        "type": "电影",
        "tags": [
            "吸血鬼",
            "小镇",
            "诅咒",
            "基督教意象",
            "B级片经典"
        ]
    },
    {
        "title": "至爱梵高·星空之谜",
        "url": "movie-678.html",
        "cover": "./78.jpg",
        "year": "2017",
        "region": "英国/波兰",
        "genre": "传记悬疑",
        "type": "动画电影",
        "tags": [
            "油画动画",
            "梵高",
            "手绘",
            "艺术",
            "死亡之谜"
        ]
    },
    {
        "title": "目之所及",
        "url": "movie-679.html",
        "cover": "./79.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "科幻悬疑",
        "type": "电影",
        "tags": [
            "视觉交换",
            "社会批判",
            "近未来"
        ]
    },
    {
        "title": "四年一生",
        "url": "movie-680.html",
        "cover": "./80.jpg",
        "year": "2018",
        "region": "日本",
        "genre": "剧情/校园",
        "type": "电视剧",
        "tags": [
            "大学",
            "青春",
            "友情",
            "毕业"
        ]
    },
    {
        "title": "间谍亚契第五季",
        "url": "movie-681.html",
        "cover": "./81.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画,喜剧,动作",
        "type": "剧集",
        "tags": [
            "间谍",
            "恶搞",
            "办公室政治",
            "无厘头"
        ]
    },
    {
        "title": "黑之契约者2:流星的双子",
        "url": "movie-682.html",
        "cover": "./82.jpg",
        "year": "2009",
        "region": "日本",
        "genre": "动作,科幻,悬疑",
        "type": "动漫",
        "tags": [
            "超能力",
            "组织对抗",
            "末日氛围"
        ]
    },
    {
        "title": "奇冤得雪",
        "url": "movie-683.html",
        "cover": "./83.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装/悬疑",
        "type": "电影",
        "tags": [
            "宋朝",
            "法医",
            "官场"
        ]
    },
    {
        "title": "神秘眼",
        "url": "movie-684.html",
        "cover": "./84.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻,恐怖,悬疑",
        "type": "电影",
        "tags": [
            "超能力",
            "器官移植",
            "看到罪恶",
            "末日预言"
        ]
    },
    {
        "title": "穿过你眼神的爱",
        "url": "movie-685.html",
        "cover": "./85.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "爱情,奇幻,剧情",
        "type": "电影",
        "tags": [
            "灵异",
            "遗憾",
            "治愈",
            "轮回"
        ]
    },
    {
        "title": "在迷宫中(电影)",
        "url": "movie-686.html",
        "cover": "./86.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "惊悚/奇幻",
        "type": "电影",
        "tags": [
            "迷宫",
            "时间循环",
            "心理学",
            "隐喻"
        ]
    },
    {
        "title": "黑色琴弦",
        "url": "movie-687.html",
        "cover": "./87.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "悬疑/惊悚/音乐",
        "type": "剧集",
        "tags": [
            "古典乐",
            "诅咒",
            "天才",
            "家族秘密"
        ]
    },
    {
        "title": "星期一的硕果第一季",
        "url": "movie-688.html",
        "cover": "./88.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "爱情、喜剧、职场",
        "type": "剧集",
        "tags": [
            "职场",
            "暧昧",
            "星期一综合征",
            "治愈"
        ]
    },
    {
        "title": "初尝禁果",
        "url": "movie-689.html",
        "cover": "./89.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "剧情,同性",
        "type": "电影",
        "tags": [
            "校园",
            "成长疼痛",
            "觉醒",
            "保守社会"
        ]
    },
    {
        "title": "比基尼海盗",
        "url": "movie-690.html",
        "cover": "./90.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "动作,喜剧,冒险",
        "type": "电影 喜剧,冒险",
        "tags": [
            "比基尼",
            "海盗",
            "恶搞",
            "夺宝",
            "美女"
        ]
    },
    {
        "title": "法证先锋5粤语",
        "url": "movie-691.html",
        "cover": "./91.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "悬疑,犯罪",
        "type": "电视剧",
        "tags": [
            "法证",
            "连环案",
            "高智商犯罪",
            "粤语原声"
        ]
    },
    {
        "title": "狄仁杰之夺命天眼",
        "url": "movie-692.html",
        "cover": "./92.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑/古装",
        "type": "电影",
        "tags": [
            "狄仁杰",
            "风水",
            "密室杀人",
            "唐朝诡案"
        ]
    },
    {
        "title": "芭蕾(纪录片)",
        "url": "movie-693.html",
        "cover": "./93.jpg",
        "year": "2021",
        "region": "法国",
        "genre": "纪录",
        "type": "纪录片",
        "tags": [
            "芭蕾",
            "幕后",
            "艰辛",
            "艺术"
        ]
    },
    {
        "title": "除匪",
        "url": "movie-694.html",
        "cover": "./94.jpg",
        "year": "2026",
        "region": "中国",
        "genre": "动作、古装",
        "type": "剧集",
        "tags": [
            "剿匪",
            "兄弟反目",
            "权谋",
            "热血"
        ]
    },
    {
        "title": "雨衣",
        "url": "movie-695.html",
        "cover": "./95.jpg",
        "year": "2004",
        "region": "中国台湾",
        "genre": "爱情/奇幻",
        "type": "电影",
        "tags": [
            "纯爱",
            "雨天",
            "遗憾",
            "穿越",
            "轻幻"
        ]
    },
    {
        "title": "干吧!我的彩虹人生",
        "url": "movie-696.html",
        "cover": "./96.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "喜剧/同性/青春",
        "type": "剧集",
        "tags": [
            "LGBTQ+",
            "校园",
            "自我认同",
            "热血"
        ]
    },
    {
        "title": "危机13小时",
        "url": "movie-697.html",
        "cover": "./97.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作,悬疑",
        "type": "剧集",
        "tags": [
            "反恐",
            "密室逃生",
            "绑架"
        ]
    },
    {
        "title": "奇葩料理大作战第一季",
        "url": "movie-698.html",
        "cover": "./98.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,美食",
        "type": "剧集",
        "tags": [
            "黑暗料理",
            "网红",
            "生存",
            "搞笑"
        ]
    },
    {
        "title": "风沙线上",
        "url": "movie-699.html",
        "cover": "./99.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "纪录片/社会",
        "type": "纪录片",
        "tags": [
            "环保",
            "西北",
            "治沙",
            "坚守"
        ]
    },
    {
        "title": "最后的车轮",
        "url": "movie-700.html",
        "cover": "./100.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "剧情,公路",
        "type": "电影",
        "tags": [
            "孤独",
            "救赎",
            "旧物",
            "治愈"
        ]
    },
    {
        "title": "厉阴孩",
        "url": "movie-701.html",
        "cover": "./101.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "校园",
            "鬼童",
            "诅咒",
            "替身"
        ]
    },
    {
        "title": "不可磨灭",
        "url": "movie-702.html",
        "cover": "./102.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "记忆移植",
            "复仇",
            "反转"
        ]
    },
    {
        "title": "粉身碎骨",
        "url": "movie-703.html",
        "cover": "./103.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动作,惊悚,灾难",
        "type": "电影",
        "tags": [
            "赛车",
            "复仇",
            "爆破",
            "高燃"
        ]
    },
    {
        "title": "激情的岁月",
        "url": "movie-704.html",
        "cover": "./104.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史,剧情",
        "type": "电影",
        "tags": [
            "两弹一星",
            "奉献",
            "爱情",
            "年代"
        ]
    },
    {
        "title": "哭泣杀神",
        "url": "movie-705.html",
        "cover": "./105.jpg",
        "year": "1994",
        "region": "日本",
        "genre": "动作,犯罪,惊悚",
        "type": "电影",
        "tags": [
            "杀手",
            "眼泪",
            "暴力美学",
            "漫画改"
        ]
    },
    {
        "title": "长崎1945 天使之钟",
        "url": "movie-706.html",
        "cover": "./106.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "战争/历史/剧情",
        "type": "电影",
        "tags": [
            "原子弹",
            "教堂钟声",
            "战后余生"
        ]
    },
    {
        "title": "魔犬",
        "url": "movie-707.html",
        "cover": "./107.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "恐怖/民俗/悬疑",
        "type": "电影",
        "tags": [
            "犬灵",
            "乡村",
            "祭祀",
            "诅咒传承"
        ]
    },
    {
        "title": "你也可以是天使4",
        "url": "movie-708.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "新加坡",
        "genre": "医疗/职场/温情",
        "type": "剧集",
        "tags": [
            "护士",
            "社区医疗",
            "临终关怀",
            "传承"
        ]
    },
    {
        "title": "我的挚友安妮·法兰克",
        "url": "movie-709.html",
        "cover": "./109.jpg",
        "year": "2025",
        "region": "荷兰",
        "genre": "历史",
        "type": "电影",
        "tags": [
            "二战",
            "友谊",
            "日记",
            "女性",
            "真实改编"
        ]
    },
    {
        "title": "厨子·戏子·痞子",
        "url": "movie-710.html",
        "cover": "./110.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "悬疑/黑色幽默",
        "type": "电影",
        "tags": [
            "民国",
            "密闭空间",
            "身份互换",
            "毒药"
        ]
    },
    {
        "title": "白领超人",
        "url": "movie-711.html",
        "cover": "./111.jpg",
        "year": "2016",
        "region": "日本",
        "genre": "喜剧/职场",
        "type": "剧集",
        "tags": [
            "社畜",
            "变身",
            "讽刺"
        ]
    },
    {
        "title": "一门忠烈",
        "url": "movie-712.html",
        "cover": "./112.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史/战争/家庭",
        "type": "电影",
        "tags": [
            "抗日",
            "全家从军",
            "真实改编",
            "小人物",
            "悲壮"
        ]
    },
    {
        "title": "齐瓦哥医生",
        "url": "movie-713.html",
        "cover": "./113.jpg",
        "year": "1965",
        "region": "英国/美国",
        "genre": "爱情,战争,史诗",
        "type": "电影",
        "tags": [
            "俄国革命",
            "婚外情",
            "诗人",
            "医生"
        ]
    },
    {
        "title": "坠恶真相",
        "url": "movie-714.html",
        "cover": "./114.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "法庭",
            "反转",
            "心理"
        ]
    },
    {
        "title": "回忆积木小屋",
        "url": "movie-715.html",
        "cover": "./115.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情/科幻/温情",
        "type": "动画短片/电影",
        "tags": [
            "末世",
            "孤独",
            "回忆",
            "治愈",
            "手绘"
        ]
    },
    {
        "title": "最后的武士",
        "url": "movie-716.html",
        "cover": "./116.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,历史,剧情",
        "type": "电影",
        "tags": [
            "武士道精神",
            "明治维新",
            "西式枪炮vs武士刀",
            "文化冲突",
            "自我救赎"
        ]
    },
    {
        "title": "空海",
        "url": "movie-717.html",
        "cover": "./117.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "历史,奇幻,冒险",
        "type": "电影",
        "tags": [
            "遣唐使",
            "密宗",
            "大唐",
            "视觉奇观"
        ]
    },
    {
        "title": "索马里海盗之绿林海盗",
        "url": "movie-718.html",
        "cover": "./118.jpg",
        "year": "2010",
        "region": "德国/南非",
        "genre": "冒险/动作/剧情",
        "type": "电影",
        "tags": [
            "海盗",
            "雇佣兵",
            "赎金",
            "黑色幽默"
        ]
    },
    {
        "title": "二龙湖往事惊魂夜",
        "url": "movie-719.html",
        "cover": "./119.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,悬疑,惊悚",
        "type": "网络电影",
        "tags": [
            "东北",
            "乡村",
            "幽默",
            "凶案"
        ]
    },
    {
        "title": "忍者",
        "url": "movie-720.html",
        "cover": "./120.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "动作/历史",
        "type": "电影",
        "tags": [
            "忍者",
            "战国",
            "复仇",
            "真实系",
            "冷兵器"
        ]
    },
    {
        "title": "从一个老男人的脑中出来",
        "url": "movie-721.html",
        "cover": "./121.jpg",
        "year": "2026",
        "region": "阿根廷",
        "genre": "奇幻,剧情",
        "type": "电影",
        "tags": [
            "意识流",
            "老年痴呆",
            "记忆",
            "超现实"
        ]
    },
    {
        "title": "魔爪入室",
        "url": "movie-722.html",
        "cover": "./122.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "惊悚/恐怖",
        "type": "电影",
        "tags": [
            "入室抢劫",
            "心理战",
            "反转",
            "密室"
        ]
    },
    {
        "title": "连环情杀案",
        "url": "movie-723.html",
        "cover": "./123.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "悬疑/犯罪/爱情",
        "type": "网络电影",
        "tags": [
            "连环杀手",
            "情感纠葛",
            "反套路",
            "女性视角"
        ]
    },
    {
        "title": "大雄与云之王国",
        "url": "movie-724.html",
        "cover": "./124.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动画,冒险,奇幻",
        "type": "电影",
        "tags": [
            "哆啦A梦",
            "云上世界",
            "环保",
            "平行宇宙"
        ]
    },
    {
        "title": "从未说过的话",
        "url": "movie-725.html",
        "cover": "./125.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "家庭",
            "沉默",
            "和解",
            "遗物",
            "书信"
        ]
    },
    {
        "title": "你是我的毒玫瑰",
        "url": "movie-726.html",
        "cover": "./126.jpg",
        "year": "2023",
        "region": "泰国",
        "genre": "爱情,剧情,喜剧",
        "type": "电视剧",
        "tags": [
            "先婚后爱",
            "欢喜冤家",
            "契约婚姻",
            "泰剧",
            "高颜值"
        ]
    },
    {
        "title": "出神入化的恋爱",
        "url": "movie-727.html",
        "cover": "./127.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "浪漫喜剧、奇幻、悬疑",
        "type": "电视剧",
        "tags": [
            "诈骗犯",
            "催眠",
            "高智商",
            "替身"
        ]
    },
    {
        "title": "逃亡",
        "url": "movie-728.html",
        "cover": "./128.jpg",
        "year": "2025",
        "region": "瑞典/丹麦",
        "genre": "动画,纪录片,剧情",
        "type": "电影",
        "tags": [
            "阿富汗难民",
            "LGBTQ+",
            "身份认同",
            "手绘动画",
            "真实事件改编"
        ]
    },
    {
        "title": "铁蹄慈泪",
        "url": "movie-729.html",
        "cover": "./129.jpg",
        "year": "2018",
        "region": "蒙古/中国",
        "genre": "历史剧情",
        "type": "电影",
        "tags": [
            "成吉思汗",
            "战马",
            "战争",
            "人性",
            "史诗"
        ]
    },
    {
        "title": "美丽生灵",
        "url": "movie-730.html",
        "cover": "./130.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "奇幻、冒险、环保",
        "type": "电影",
        "tags": [
            "海洋",
            "精灵",
            "污染",
            "共生",
            "少女"
        ]
    },
    {
        "title": "搜下留情粤语",
        "url": "movie-731.html",
        "cover": "./131.jpg",
        "year": "2010",
        "region": "中国香港",
        "genre": "警匪喜剧",
        "type": "剧集",
        "tags": [
            "卧底",
            "茶餐厅",
            "市井",
            "粤语",
            "温情"
        ]
    },
    {
        "title": "飞船历险记",
        "url": "movie-732.html",
        "cover": "./132.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "科幻、冒险、家庭",
        "type": "剧集",
        "tags": [
            "宇宙飞船",
            "儿童主角",
            "星际探险",
            "AI伙伴"
        ]
    },
    {
        "title": "识骨寻踪第二季",
        "url": "movie-733.html",
        "cover": "./133.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "悬疑,罪案",
        "type": "剧集",
        "tags": [
            "法医人类学",
            "连环杀手",
            "师徒",
            "冷案"
        ]
    },
    {
        "title": "奶爸的爱情生活",
        "url": "movie-734.html",
        "cover": "./134.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧、家庭、爱情",
        "type": "电视剧",
        "tags": [
            "带娃",
            "再婚",
            "欢乐",
            "温馨"
        ]
    },
    {
        "title": "休战协定",
        "url": "movie-735.html",
        "cover": "./135.jpg",
        "year": "2017",
        "region": "英国",
        "genre": "剧情/战争/同性",
        "type": "电影",
        "tags": [
            "一战",
            "战壕",
            "圣诞",
            "敌对",
            "人性"
        ]
    },
    {
        "title": "超能立方·动态漫",
        "url": "movie-736.html",
        "cover": "./136.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻,冒险",
        "type": "动漫",
        "tags": [
            "异能",
            "悬疑",
            "动态漫画",
            "平行宇宙",
            "高概念"
        ]
    },
    {
        "title": "最后的维米尔",
        "url": "movie-737.html",
        "cover": "./137.jpg",
        "year": "2024",
        "region": "美国/荷兰",
        "genre": "历史剧情",
        "type": "电影",
        "tags": [
            "名画伪造",
            "二战",
            "艺术犯罪",
            "法庭辩护"
        ]
    },
    {
        "title": "夜魔侠:重生第一季",
        "url": "movie-738.html",
        "cover": "./138.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/犯罪/超级英雄",
        "type": "剧集",
        "tags": [
            "漫威",
            "律政",
            "街头英雄"
        ]
    },
    {
        "title": "一雪前耻",
        "url": "movie-739.html",
        "cover": "./139.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "动作,复仇,惊悚",
        "type": "电影",
        "tags": [
            "校园霸凌",
            "多年复仇",
            "以暴制暴",
            "高燃",
            "反转"
        ]
    },
    {
        "title": "圣诞老人 魔法大战",
        "url": "movie-740.html",
        "cover": "./140.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作/奇幻/家庭",
        "type": "电影",
        "tags": [
            "圣诞老人",
            "魔法对决",
            "拯救圣诞节",
            "驯鹿骑士"
        ]
    },
    {
        "title": "甜蜜的来世",
        "url": "movie-741.html",
        "cover": "./141.jpg",
        "year": "1997",
        "region": "加拿大",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "多线叙事",
            "校车事故",
            "律师",
            "小镇秘事",
            "文学改编"
        ]
    },
    {
        "title": "生死线2009",
        "url": "movie-742.html",
        "cover": "./142.jpg",
        "year": "2009",
        "region": "中国大陆",
        "genre": "战争,历史,剧情",
        "type": "剧集",
        "tags": [
            "抗战",
            "小人物群像",
            "滬城",
            "残酷青春",
            "家国情怀"
        ]
    },
    {
        "title": "此时此刻第三季",
        "url": "movie-743.html",
        "cover": "./143.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情,科幻,家庭",
        "type": "剧集",
        "tags": [
            "时间跳跃",
            "家庭史诗",
            "伦理抉择",
            "烧脑"
        ]
    },
    {
        "title": "暴力启示录",
        "url": "movie-744.html",
        "cover": "./144.jpg",
        "year": "2021",
        "region": "美国/加拿大",
        "genre": "动作,惊悚",
        "type": "电影",
        "tags": [
            "反英雄",
            "血腥",
            "生存",
            "公路片",
            "女性杀手"
        ]
    },
    {
        "title": "龙凤店国语",
        "url": "movie-745.html",
        "cover": "./145.jpg",
        "year": "2012",
        "region": "中国内地",
        "genre": "古装喜剧",
        "type": "电影",
        "tags": [
            "宫廷",
            "市井",
            "爱情",
            "身份错位",
            "搞笑"
        ]
    },
    {
        "title": "1941之春",
        "url": "movie-746.html",
        "cover": "./146.jpg",
        "year": "2022",
        "region": "波兰",
        "genre": "战争,剧情,历史",
        "type": "电影",
        "tags": [
            "二战",
            "大屠杀",
            "音乐",
            "人性"
        ]
    },
    {
        "title": "30枚银币第一季",
        "url": "movie-747.html",
        "cover": "./147.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "恐怖/悬疑",
        "type": "剧集",
        "tags": [
            "宗教",
            "惊悚",
            "犹大",
            "驱魔"
        ]
    },
    {
        "title": "动画100",
        "url": "movie-748.html",
        "cover": "./148.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "纪录片/历史",
        "type": "纪录片",
        "tags": [
            "中国动画百年",
            "幕后揭秘",
            "怀旧",
            "行业史"
        ]
    },
    {
        "title": "暗杀英雄榜",
        "url": "movie-749.html",
        "cover": "./149.jpg",
        "year": "1993",
        "region": "香港",
        "genre": "动作,黑色幽默",
        "type": "电影",
        "tags": [
            "排行榜",
            "荒诞",
            "九十年代",
            "多线叙事",
            "江湖"
        ]
    },
    {
        "title": "越策越开心2009",
        "url": "movie-750.html",
        "cover": "./150.jpg",
        "year": "2009",
        "region": "中国大陆",
        "genre": "喜剧,荒诞",
        "type": "电影",
        "tags": [
            "脱口秀",
            "绑架乌龙",
            "股市暴跌",
            "黑色幽默"
        ]
    },
    {
        "title": "千万别眨眼",
        "url": "movie-751.html",
        "cover": "./1.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "密室逃脱",
            "规则类怪谈",
            "眨眼即死",
            "高概念",
            "心理"
        ]
    },
    {
        "title": "冲出砺练营之换羽高飞",
        "url": "movie-752.html",
        "cover": "./2.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动作,励志,军事",
        "type": "电影",
        "tags": [
            "特种兵",
            "女性成长",
            "蜕变",
            "高空跳伞"
        ]
    },
    {
        "title": "荒漠恶种",
        "url": "movie-753.html",
        "cover": "./3.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "西部,犯罪",
        "type": "电影",
        "tags": [
            "荒漠",
            "寻宝",
            "人性"
        ]
    },
    {
        "title": "魔方新世界",
        "url": "movie-754.html",
        "cover": "./4.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "真人秀竞技",
        "type": "综艺",
        "tags": [
            "益智",
            "博弈",
            "闯关",
            "沉浸式",
            "脑力"
        ]
    },
    {
        "title": "兰根堡之旅",
        "url": "movie-755.html",
        "cover": "./5.jpg",
        "year": "2019",
        "region": "德国",
        "genre": "悬疑/恐怖",
        "type": "电影",
        "tags": [
            "集体幻觉",
            "邪教",
            "森林"
        ]
    },
    {
        "title": "机器情人梦",
        "url": "movie-756.html",
        "cover": "./6.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/爱情/伦理",
        "type": "电影",
        "tags": [
            "人机恋",
            "定制情人",
            "遗忘",
            "AI觉醒"
        ]
    },
    {
        "title": "生化危机:终章",
        "url": "movie-757.html",
        "cover": "./7.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/科幻/恐怖",
        "type": "电影",
        "tags": [
            "丧尸",
            "爱丽丝",
            "大结局",
            "真相"
        ]
    },
    {
        "title": "僵尸谷惊魂",
        "url": "movie-758.html",
        "cover": "./8.jpg",
        "year": "2004",
        "region": "美国",
        "genre": "恐怖/动作",
        "type": "电影",
        "tags": [
            "僵尸",
            "特种兵",
            "生存",
            "血腥"
        ]
    },
    {
        "title": "回不去的家",
        "url": "movie-759.html",
        "cover": "./9.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "农村",
            "拐卖",
            "复仇"
        ]
    },
    {
        "title": "南法撩妹记",
        "url": "movie-760.html",
        "cover": "./10.jpg",
        "year": "2020",
        "region": "法国",
        "genre": "喜剧",
        "type": "电影",
        "tags": [
            "爱情",
            "度假",
            "屌丝逆袭",
            "搞笑",
            "夏日"
        ]
    },
    {
        "title": "恋上你爱上我",
        "url": "movie-761.html",
        "cover": "./11.jpg",
        "year": "2025",
        "region": "中国/韩国",
        "genre": "爱情/喜剧/剧情",
        "type": "剧集",
        "tags": [
            "偶像",
            "替身",
            "双向暗恋",
            "娱乐圈",
            "轻喜剧"
        ]
    },
    {
        "title": "跳芭蕾舞的男孩",
        "url": "movie-762.html",
        "cover": "./12.jpg",
        "year": "2016",
        "region": "俄罗斯",
        "genre": "剧情/家庭/运动",
        "type": "电影",
        "tags": [
            "芭蕾",
            "男孩",
            "父子和解",
            "梦想",
            "俄罗斯芭蕾舞团"
        ]
    },
    {
        "title": "网飞对抗全世界",
        "url": "movie-763.html",
        "cover": "./13.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "纪录片,商业",
        "type": "电影",
        "tags": [
            "流媒体",
            "竞争",
            "行业揭秘",
            "起家史",
            "颠覆"
        ]
    },
    {
        "title": "妻子的浪漫旅行2025",
        "url": "movie-764.html",
        "cover": "./14.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "真人秀/旅行",
        "type": "综艺",
        "tags": [
            "明星夫妻",
            "治愈",
            "社交观察",
            "跨国"
        ]
    },
    {
        "title": "无名浪子心",
        "url": "movie-765.html",
        "cover": "./15.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情,爱情,公路",
        "type": "电影",
        "tags": [
            "流浪",
            "救赎",
            "摩托车"
        ]
    },
    {
        "title": "水银灯下死",
        "url": "movie-766.html",
        "cover": "./16.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑、犯罪、剧情",
        "type": "电影",
        "tags": [
            "法医",
            "密室",
            "复仇",
            "器官黑市",
            "反转"
        ]
    },
    {
        "title": "黑森灵",
        "url": "movie-767.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "恐怖,奇幻",
        "type": "电影",
        "tags": [
            "黑森林",
            "邪神",
            "民俗恐怖",
            "徒步"
        ]
    },
    {
        "title": "饥饿的岁月",
        "url": "movie-768.html",
        "cover": "./18.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "剧情/历史",
        "type": "电影",
        "tags": [
            "三年困难时期",
            "生存",
            "家庭",
            "历史创伤"
        ]
    },
    {
        "title": "学生1号",
        "url": "movie-769.html",
        "cover": "./19.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,校园",
        "type": "电影",
        "tags": [
            "高考",
            "替身",
            "阶级",
            "悬疑",
            "成长"
        ]
    },
    {
        "title": "特勤精英之逃出生天",
        "url": "movie-770.html",
        "cover": "./20.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动作,灾难",
        "type": "电影",
        "tags": [
            "消防救援",
            "极限逃生",
            "团队协作"
        ]
    },
    {
        "title": "木乃伊坟墓之血",
        "url": "movie-771.html",
        "cover": "./21.jpg",
        "year": "1994",
        "region": "英国",
        "genre": "恐怖,冒险",
        "type": "电影",
        "tags": [
            "考古惊魂",
            "诅咒",
            "复古恐怖"
        ]
    },
    {
        "title": "第九禁区",
        "url": "movie-772.html",
        "cover": "./22.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "科幻/悬疑/动作",
        "type": "剧集",
        "tags": [
            "传染病",
            "隔离区",
            "政府阴谋",
            "生存游戏"
        ]
    },
    {
        "title": "任长霞",
        "url": "movie-773.html",
        "cover": "./23.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "传记/刑侦",
        "type": "剧集",
        "tags": [
            "真人真事",
            "女局长",
            "扫黑",
            "河南"
        ]
    },
    {
        "title": "开玩笑 第一季",
        "url": "movie-774.html",
        "cover": "./24.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧,剧情",
        "type": "剧集",
        "tags": [
            "脱口秀",
            "丧文化",
            "中年危机",
            "心理"
        ]
    },
    {
        "title": "驯龙高手:归家",
        "url": "movie-775.html",
        "cover": "./25.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "奇幻,冒险",
        "type": "动画电影",
        "tags": [
            "催泪",
            "重逢",
            "成长"
        ]
    },
    {
        "title": "阿拉丁和神灯",
        "url": "movie-776.html",
        "cover": "./26.jpg",
        "year": "2015",
        "region": "法国",
        "genre": "喜剧/奇幻/冒险",
        "type": "电影",
        "tags": [
            "恶搞喜剧",
            "法国幽默",
            "现代改编",
            "穿越元素"
        ]
    },
    {
        "title": "你能原谅我吗",
        "url": "movie-777.html",
        "cover": "./27.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "剧情/传记/犯罪",
        "type": "电影",
        "tags": [
            "造假",
            "孤独",
            "中年危机",
            "文学"
        ]
    },
    {
        "title": "蕾哈娜内衣秀",
        "url": "movie-778.html",
        "cover": "./28.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "音乐,时尚",
        "type": "电影/纪录片",
        "tags": [
            "蕾哈娜",
            "内衣品牌",
            "时尚帝国",
            "幕后花絮"
        ]
    },
    {
        "title": "新西游记第六季",
        "url": "movie-779.html",
        "cover": "./29.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "奇幻,冒险",
        "type": "剧集",
        "tags": [
            "赛博朋克",
            "神话新编",
            "公路片"
        ]
    },
    {
        "title": "脑残粉丝",
        "url": "movie-780.html",
        "cover": "./30.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "惊悚,剧情",
        "type": "电影",
        "tags": [
            "粉丝",
            "心理",
            "社交网络",
            "偷窥",
            "反转"
        ]
    },
    {
        "title": "国定杀戮日:无法无天",
        "url": "movie-781.html",
        "cover": "./31.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/科幻/惊悚",
        "type": "电影",
        "tags": [
            "反乌托邦",
            "暴力",
            "续集",
            "政治讽刺"
        ]
    },
    {
        "title": "硬汉龙虎斗",
        "url": "movie-782.html",
        "cover": "./32.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "动作/犯罪",
        "type": "电影",
        "tags": [
            "拳击",
            "卧底",
            "黑帮",
            "硬核格斗",
            "复仇"
        ]
    },
    {
        "title": "国学小名士第三季",
        "url": "movie-783.html",
        "cover": "./33.jpg",
        "year": "2020",
        "region": "中国大陆",
        "genre": "真人秀/竞赛",
        "type": "综艺",
        "tags": [
            "国学",
            "知识竞赛",
            "诗词",
            "传统文化"
        ]
    },
    {
        "title": "无考不成冤家国语",
        "url": "movie-784.html",
        "cover": "./34.jpg",
        "year": "2021",
        "region": "中国香港",
        "genre": "喜剧,家庭",
        "type": "剧集",
        "tags": [
            "考试",
            "父子",
            "补习班",
            "乌龙",
            "代际冲突"
        ]
    },
    {
        "title": "霹雳湾风云",
        "url": "movie-785.html",
        "cover": "./35.jpg",
        "year": "2025",
        "region": "中国香港/马来西亚",
        "genre": "犯罪/悬疑/商战",
        "type": "电视剧",
        "tags": [
            "黑帮",
            "家族恩怨",
            "港口",
            "卧底",
            "反腐"
        ]
    },
    {
        "title": "数字英雄第二季",
        "url": "movie-786.html",
        "cover": "./36.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "悬疑/科幻",
        "type": "剧集",
        "tags": [
            "黑客",
            "高智商",
            "团队",
            "阴谋"
        ]
    },
    {
        "title": "凶相",
        "url": "movie-787.html",
        "cover": "./37.jpg",
        "year": "2019",
        "region": "泰国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "整容",
            "复仇",
            "诅咒",
            "鬼魂"
        ]
    },
    {
        "title": "春之声",
        "url": "movie-788.html",
        "cover": "./38.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "音乐/剧情",
        "type": "电影",
        "tags": [
            "交响乐",
            "治愈",
            "聋哑人"
        ]
    },
    {
        "title": "哈啰你有事吗",
        "url": "movie-789.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "喜剧、生活、职场",
        "type": "剧集",
        "tags": [
            "社畜",
            "电话客服",
            "荒诞日常"
        ]
    },
    {
        "title": "原子危机",
        "url": "movie-790.html",
        "cover": "./40.jpg",
        "year": "2025",
        "region": "俄罗斯",
        "genre": "动作/科幻/惊悚",
        "type": "电影",
        "tags": [
            "核电站",
            "恐怖袭击",
            "孤胆英雄",
            "硬核动作",
            "限时救援"
        ]
    },
    {
        "title": "裸眼",
        "url": "movie-791.html",
        "cover": "./41.jpg",
        "year": "2017",
        "region": "西班牙",
        "genre": "科幻/惊悚",
        "type": "电影",
        "tags": [
            "隐形人",
            "军方实验",
            "视网膜",
            "背叛",
            "生存"
        ]
    },
    {
        "title": "神魄",
        "url": "movie-792.html",
        "cover": "./42.jpg",
        "year": "2013",
        "region": "中国大陆",
        "genre": "动画,机战,奇幻",
        "type": "剧集",
        "tags": [
            "热血",
            "召唤兽",
            "异世界",
            "对战"
        ]
    },
    {
        "title": "钢琴之森",
        "url": "movie-793.html",
        "cover": "./43.jpg",
        "year": "2007",
        "region": "日本",
        "genre": "音乐/剧情/成长",
        "type": "动画电影",
        "tags": [
            "钢琴比赛",
            "天才少年",
            "森林奇遇",
            "音乐治愈"
        ]
    },
    {
        "title": "黄土高天",
        "url": "movie-794.html",
        "cover": "./44.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/历史",
        "type": "电视剧",
        "tags": [
            "改革开放",
            "农村变革",
            "三代人",
            "陕西"
        ]
    },
    {
        "title": "小电影",
        "url": "movie-795.html",
        "cover": "./45.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情/喜剧/家庭",
        "type": "电影",
        "tags": [
            "家庭录像",
            "怀旧温情",
            "小人物故事",
            "梦想与现实",
            "市井生活"
        ]
    },
    {
        "title": "河流故事",
        "url": "movie-796.html",
        "cover": "./46.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "文艺/家庭",
        "type": "电影",
        "tags": [
            "长江",
            "父子",
            "公路电影"
        ]
    },
    {
        "title": "守边人",
        "url": "movie-797.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "年代剧情",
        "type": "电视剧",
        "tags": [
            "主旋律",
            "边疆",
            "三代人",
            "家国情怀",
            "史诗"
        ]
    },
    {
        "title": "独臂屠龙",
        "url": "movie-798.html",
        "cover": "./48.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "古装武侠",
        "type": "电影",
        "tags": [
            "断臂",
            "复仇",
            "阴谋",
            "龙脉",
            "残剑"
        ]
    },
    {
        "title": "纸年",
        "url": "movie-799.html",
        "cover": "./49.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "年代戏",
            "出版业",
            "父子关系",
            "时代变迁"
        ]
    },
    {
        "title": "校对女孩河野悦子",
        "url": "movie-800.html",
        "cover": "./50.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情/喜剧/职场",
        "type": "剧集",
        "tags": [
            "校阅部",
            "出版业",
            "梦想",
            "热血"
        ]
    },
    {
        "title": "克隆高校第一季",
        "url": "movie-801.html",
        "cover": "./51.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻,悬疑",
        "type": "剧集",
        "tags": [
            "校园",
            "伦理",
            "基因编辑",
            "反乌托邦"
        ]
    },
    {
        "title": "残破的娃娃",
        "url": "movie-802.html",
        "cover": "./52.jpg",
        "year": "2016",
        "region": "西班牙",
        "genre": "恐怖,心理惊悚",
        "type": "电影",
        "tags": [
            "玩偶",
            "创伤",
            "童年阴影",
            "超自然"
        ]
    },
    {
        "title": "苦妹.丧姐.连环图",
        "url": "movie-803.html",
        "cover": "./53.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "悬疑/惊悚/黑色喜剧",
        "type": "电影",
        "tags": [
            "港式惊悚",
            "漫画家",
            "双胞胎",
            "复仇",
            "脑洞"
        ]
    },
    {
        "title": "扑杀天使第二季",
        "url": "movie-804.html",
        "cover": "./54.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "动画,喜剧,奇幻",
        "type": "剧集",
        "tags": [
            "无厘头",
            "暴力萌",
            "时间循环"
        ]
    },
    {
        "title": "我爷爷和奶奶的故事",
        "url": "movie-805.html",
        "cover": "./55.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "年代/家庭",
        "type": "电视剧",
        "tags": [
            "抗战",
            "爱情",
            "国共",
            "平民史诗",
            "误会"
        ]
    },
    {
        "title": "哈斯巴根的天骄",
        "url": "movie-806.html",
        "cover": "./56.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/历史",
        "type": "电影",
        "tags": [
            "蒙古",
            "马背",
            "传承",
            "史诗"
        ]
    },
    {
        "title": "未麻之部屋",
        "url": "movie-807.html",
        "cover": "./57.jpg",
        "year": "1997",
        "region": "日本",
        "genre": "动画,惊悚,悬疑",
        "type": "电影",
        "tags": [
            "心理",
            "偶像",
            "虚实交织",
            "今敏"
        ]
    },
    {
        "title": "健听女孩",
        "url": "movie-808.html",
        "cover": "./58.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "剧情,音乐,家庭",
        "type": "电影",
        "tags": [
            "成长",
            "聋哑家庭",
            "梦想",
            "亲情"
        ]
    },
    {
        "title": "这一年,那一夜",
        "url": "movie-809.html",
        "cover": "./59.jpg",
        "year": "2019",
        "region": "中国香港",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "跨年",
            "遗憾",
            "错过",
            "治愈"
        ]
    },
    {
        "title": "小镇圣诞爱",
        "url": "movie-810.html",
        "cover": "./60.jpg",
        "year": "2024",
        "region": "加拿大",
        "genre": "爱情/家庭",
        "type": "电影",
        "tags": [
            "圣诞",
            "治愈",
            "返乡",
            "烘焙"
        ]
    },
    {
        "title": "天地姻缘七仙女",
        "url": "movie-811.html",
        "cover": "./61.jpg",
        "year": "2010",
        "region": "中国大陆",
        "genre": "古装,奇幻,爱情",
        "type": "剧集",
        "tags": [
            "神话",
            "七仙女",
            "下凡",
            "欢喜冤家",
            "仙凡恋"
        ]
    },
    {
        "title": "销售奇姬",
        "url": "movie-812.html",
        "cover": "./62.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "喜剧,励志",
        "type": "电影",
        "tags": [
            "职场",
            "女性",
            "逆袭",
            "销售"
        ]
    },
    {
        "title": "玉笼困凤",
        "url": "movie-813.html",
        "cover": "./63.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "古装/宫斗/悬疑",
        "type": "剧集",
        "tags": [
            "替身",
            "权谋",
            "反转",
            "女性觉醒"
        ]
    },
    {
        "title": "直到永远",
        "url": "movie-814.html",
        "cover": "./64.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "爱情/科幻",
        "type": "电影",
        "tags": [
            "冷冻",
            "苏醒",
            "时差",
            "等待"
        ]
    },
    {
        "title": "山山田田间",
        "url": "movie-815.html",
        "cover": "./65.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "纪录片,人文",
        "type": "剧集",
        "tags": [
            "乡村振兴",
            "农耕",
            "治愈",
            "慢生活"
        ]
    },
    {
        "title": "汪汪队立大功第一季",
        "url": "movie-816.html",
        "cover": "./66.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "动画,儿童,冒险,教育",
        "type": "剧集",
        "tags": [
            "狗狗",
            "救援",
            "团队合作",
            "STEM启蒙"
        ]
    },
    {
        "title": "反恐怖大行动",
        "url": "movie-817.html",
        "cover": "./67.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "动作、惊悚、犯罪",
        "type": "电影",
        "tags": [
            "人质解救",
            "巷战",
            "以暴制暴",
            "政治阴谋"
        ]
    },
    {
        "title": "暴火线13",
        "url": "movie-818.html",
        "cover": "./68.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,犯罪",
        "type": "电影",
        "tags": [
            "警匪",
            "孤胆英雄",
            "复仇",
            "飙车",
            "枪战"
        ]
    },
    {
        "title": "城主是我的",
        "url": "movie-819.html",
        "cover": "./69.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装/甜宠",
        "type": "剧集/短剧",
        "tags": [
            "穿越",
            "女强",
            "逆袭"
        ]
    },
    {
        "title": "黑色大理花悬案",
        "url": "movie-820.html",
        "cover": "./70.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "悬疑/犯罪/剧情",
        "type": "剧集",
        "tags": [
            "真实案件",
            "冷案",
            "调查",
            "黑色"
        ]
    },
    {
        "title": "弊家伙,我有咗!",
        "url": "movie-821.html",
        "cover": "./71.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "意外怀孕",
            "港式喜剧",
            "职场女性",
            "丁克",
            "家庭和解"
        ]
    },
    {
        "title": "盗尸杀人狂",
        "url": "movie-822.html",
        "cover": "./72.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "恐怖/犯罪",
        "type": "电影",
        "tags": [
            "港产三级",
            "真实改编",
            "雨夜屠夫",
            "变态杀手"
        ]
    },
    {
        "title": "加州圣诞恋曲",
        "url": "movie-823.html",
        "cover": "./73.jpg",
        "year": "2020",
        "region": "美国",
        "genre": "爱情,圣诞",
        "type": "电影",
        "tags": [
            "假日电影",
            "旧情复燃",
            "音乐人",
            "返乡",
            "治愈"
        ]
    },
    {
        "title": "希波克拉底的弟子们",
        "url": "movie-824.html",
        "cover": "./74.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情,医疗",
        "type": "剧集",
        "tags": [
            "医院政治",
            "理想主义",
            "师徒传承"
        ]
    },
    {
        "title": "别闯阴阳界",
        "url": "movie-825.html",
        "cover": "./75.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "惊悚/悬疑",
        "type": "电影",
        "tags": [
            "通灵",
            "校园怪谈",
            "禁忌游戏"
        ]
    },
    {
        "title": "红星闪亮",
        "url": "movie-826.html",
        "cover": "./76.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "儿童/战争/历史",
        "type": "电影",
        "tags": [
            "红色",
            "少年",
            "革命",
            "公路",
            "成长"
        ]
    },
    {
        "title": "钓鱼迷日记5",
        "url": "movie-827.html",
        "cover": "./77.jpg",
        "year": "2003",
        "region": "日本",
        "genre": "喜剧/生活",
        "type": "电影",
        "tags": [
            "系列电影",
            "钓鱼",
            "职场",
            "悠闲"
        ]
    },
    {
        "title": "甜蜜圈套",
        "url": "movie-828.html",
        "cover": "./78.jpg",
        "year": "2023",
        "region": "西班牙",
        "genre": "爱情/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "骗局",
            "情感",
            "反转",
            "西班牙",
            "女性"
        ]
    },
    {
        "title": "孤山诡事",
        "url": "movie-829.html",
        "cover": "./79.jpg",
        "year": "2023",
        "region": "中国",
        "genre": "悬疑,古装",
        "type": "电视剧",
        "tags": [
            "民国",
            "鬼宅",
            "密室杀人",
            "连环案"
        ]
    },
    {
        "title": "寻亲",
        "url": "movie-830.html",
        "cover": "./80.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "失孤",
            "公路",
            "执着",
            "人性"
        ]
    },
    {
        "title": "爱的世界",
        "url": "movie-831.html",
        "cover": "./81.jpg",
        "year": "1990",
        "region": "中国香港",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "经典港片",
            "父权",
            "兄弟情",
            "催泪",
            "写实"
        ]
    },
    {
        "title": "荷里活小子",
        "url": "movie-832.html",
        "cover": "./82.jpg",
        "year": "2004",
        "region": "美国",
        "genre": "喜剧,励志,青春",
        "type": "电影",
        "tags": [
            "追梦",
            "龙套",
            "好莱坞",
            "友情",
            "搞笑"
        ]
    },
    {
        "title": "奇幻森林",
        "url": "movie-833.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "印度",
        "genre": "奇幻/冒险",
        "type": "电影",
        "tags": [
            "丛林法则",
            "部落传说",
            "生态寓言",
            "手绘特效"
        ]
    },
    {
        "title": "优格大婶",
        "url": "movie-834.html",
        "cover": "./84.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "恐怖,喜剧,科幻",
        "type": "电影",
        "tags": [
            "益生菌",
            "丧尸",
            "中年",
            "大妈"
        ]
    },
    {
        "title": "病毒航班",
        "url": "movie-835.html",
        "cover": "./85.jpg",
        "year": "2025",
        "region": "韩国/美国",
        "genre": "灾难/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "密闭空间",
            "生化危机",
            "空难",
            "反转"
        ]
    },
    {
        "title": "新狂人乐队",
        "url": "movie-836.html",
        "cover": "./86.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "恐怖,音乐,惊悚",
        "type": "剧集",
        "tags": [
            "乐队",
            "邪教",
            "神秘学",
            "巡演"
        ]
    },
    {
        "title": "雨季来临前",
        "url": "movie-837.html",
        "cover": "./87.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "剧情、同性",
        "type": "电影",
        "tags": [
            "乡愁",
            "初恋",
            "告别"
        ]
    },
    {
        "title": "万里长城",
        "url": "movie-838.html",
        "cover": "./88.jpg",
        "year": "2016",
        "region": "中国大陆/美国",
        "genre": "纪录片/历史",
        "type": "电影",
        "tags": [
            "长城",
            "考古",
            "幕后",
            "张艺谋",
            "揭秘"
        ]
    },
    {
        "title": "魔鬼4骑士",
        "url": "movie-839.html",
        "cover": "./89.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "犯罪,惊悚",
        "type": "剧集",
        "tags": [
            "反英雄",
            "连环杀手",
            "末日预言"
        ]
    },
    {
        "title": "水上漂",
        "url": "movie-840.html",
        "cover": "./90.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/运动",
        "type": "电影",
        "tags": [
            "独竹漂",
            "非遗",
            "传承"
        ]
    },
    {
        "title": "天空的极限",
        "url": "movie-841.html",
        "cover": "./91.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "传记/剧情/体育",
        "type": "电影",
        "tags": [
            "跳伞",
            "极限运动",
            "励志",
            "真实人物",
            "突破自我"
        ]
    },
    {
        "title": "果戈里·复仇",
        "url": "movie-842.html",
        "cover": "./92.jpg",
        "year": "2020",
        "region": "俄罗斯",
        "genre": "悬疑/恐怖/惊悚",
        "type": "电影",
        "tags": [
            "哥特",
            "通灵",
            "沙俄",
            "黑暗奇幻",
            "连环杀人"
        ]
    },
    {
        "title": "二捕出山",
        "url": "movie-843.html",
        "cover": "./93.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,悬疑,古装",
        "type": "网络剧",
        "tags": [
            "双男主",
            "探案",
            "欢喜冤家"
        ]
    },
    {
        "title": "挑逗性谋杀",
        "url": "movie-844.html",
        "cover": "./94.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "情色/惊悚/犯罪",
        "type": "电视剧",
        "tags": [
            "恋爱匹配软件",
            "死亡约会",
            "替身杀人",
            "黑色交易",
            "双面恋人"
        ]
    },
    {
        "title": "草木人间",
        "url": "movie-845.html",
        "cover": "./95.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "治愈/生活",
        "type": "电视剧",
        "tags": [
            "植物",
            "都市疗愈",
            "慢节奏",
            "单元剧"
        ]
    },
    {
        "title": "边缘",
        "url": "movie-846.html",
        "cover": "./96.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "剧情,犯罪,动作",
        "type": "电影",
        "tags": [
            "卧底",
            "灰色地带",
            "硬核",
            "人性拷问"
        ]
    },
    {
        "title": "死去的东西",
        "url": "movie-847.html",
        "cover": "./97.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖/剧情",
        "type": "剧集 恐怖/剧情",
        "tags": [
            "心理恐怖",
            "丧亲",
            "超自然",
            "象征主义"
        ]
    },
    {
        "title": "死神地窖",
        "url": "movie-848.html",
        "cover": "./98.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "恐怖,悬疑,考古",
        "type": "电影",
        "tags": [
            "古墓",
            "诅咒",
            "密室",
            "考古惊悚"
        ]
    },
    {
        "title": "使徒保禄",
        "url": "movie-849.html",
        "cover": "./99.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "历史,传记,宗教",
        "type": "电影",
        "tags": [
            "信仰之旅",
            "迫害者转变",
            "罗马帝国",
            "殉道"
        ]
    },
    {
        "title": "吻你想吻的人",
        "url": "movie-850.html",
        "cover": "./100.jpg",
        "year": "2022",
        "region": "法国",
        "genre": "爱情/喜剧",
        "type": "电影",
        "tags": [
            "巴黎午夜",
            "陌生人邂逅",
            "一夜浪漫"
        ]
    },
    {
        "title": "剩女约瑟芬国语",
        "url": "movie-851.html",
        "cover": "./101.jpg",
        "year": "2023",
        "region": "德国",
        "genre": "喜剧、爱情、剧情",
        "type": "剧集",
        "tags": [
            "大龄单身",
            "自我成长",
            "都市独立",
            "反催婚"
        ]
    },
    {
        "title": "在我冒险的日子",
        "url": "movie-852.html",
        "cover": "./102.jpg",
        "year": "2023",
        "region": "美国/英国",
        "genre": "冒险/传记",
        "type": "电影",
        "tags": [
            "登山",
            "极限运动",
            "兄弟情"
        ]
    },
    {
        "title": "念白部分",
        "url": "movie-853.html",
        "cover": "./103.jpg",
        "year": "2026",
        "region": "中国",
        "genre": "剧情/实验/舞台剧改编",
        "type": "电影",
        "tags": [
            "戏曲元素",
            "一人分饰多角",
            "文学改编",
            "形式主义"
        ]
    },
    {
        "title": "缇萦",
        "url": "movie-854.html",
        "cover": "./104.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "历史,剧情",
        "type": "电影",
        "tags": [
            "女性力量",
            "汉代",
            "替父申冤"
        ]
    },
    {
        "title": "我们的爱情",
        "url": "movie-855.html",
        "cover": "./105.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "爱情,家庭",
        "type": "电视剧",
        "tags": [
            "三代同堂",
            "时代变迁",
            "台式浪漫",
            "情感纠葛",
            "怀旧"
        ]
    },
    {
        "title": "男人的儿子",
        "url": "movie-856.html",
        "cover": "./106.jpg",
        "year": "2018",
        "region": "韩国",
        "genre": "剧情,惊悚,家庭",
        "type": "电影",
        "tags": [
            "父权压迫",
            "退伍军人",
            "弑父情结",
            "心理创伤"
        ]
    },
    {
        "title": "列夫·朗道:退变",
        "url": "movie-857.html",
        "cover": "./107.jpg",
        "year": "2020",
        "region": "俄罗斯/乌克兰",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "体制批判",
            "知识分子的堕落",
            "极权隐喻",
            "长镜头",
            "惊悚氛围"
        ]
    },
    {
        "title": "两世欢",
        "url": "movie-858.html",
        "cover": "./108.jpg",
        "year": "2020",
        "region": "中国大陆",
        "genre": "古装/爱情",
        "type": "剧集",
        "tags": [
            "失忆",
            "替身",
            "权谋"
        ]
    },
    {
        "title": "金融大王",
        "url": "movie-859.html",
        "cover": "./109.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "传记,犯罪",
        "type": "电影",
        "tags": [
            "华尔街",
            "白手起家",
            "金融诈骗",
            "黑色幽默"
        ]
    },
    {
        "title": "寻梦环游记国语",
        "url": "movie-860.html",
        "cover": "./110.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动画",
        "type": "电影",
        "tags": [
            "家庭",
            "音乐",
            "治愈",
            "亡灵"
        ]
    },
    {
        "title": "救命解药",
        "url": "movie-861.html",
        "cover": "./111.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "惊悚,悬疑",
        "type": "电影",
        "tags": [
            "诊所",
            "阴谋",
            "记者",
            "洗脑"
        ]
    },
    {
        "title": "铁翼雄风",
        "url": "movie-862.html",
        "cover": "./112.jpg",
        "year": "1927",
        "region": "美国",
        "genre": "爱情/战争/动作",
        "type": "电影",
        "tags": [
            "默片",
            "空战",
            "奥斯卡",
            "经典"
        ]
    },
    {
        "title": "绞刑台2",
        "url": "movie-863.html",
        "cover": "./113.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "伪纪录片",
            "密室逃脱",
            "反转",
            "血腥"
        ]
    },
    {
        "title": "玩情高手",
        "url": "movie-864.html",
        "cover": "./114.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "爱情/喜剧",
        "type": "电影",
        "tags": [
            "情场",
            "骗局",
            "反套路",
            "都市",
            "成长"
        ]
    },
    {
        "title": "枕男子",
        "url": "movie-865.html",
        "cover": "./115.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑,爱情",
        "type": "剧集",
        "tags": [
            "同枕",
            "都市传说",
            "人格分裂"
        ]
    },
    {
        "title": "迷途人生",
        "url": "movie-866.html",
        "cover": "./116.jpg",
        "year": "2022",
        "region": "法国/意大利",
        "genre": "剧情/公路",
        "type": "电影",
        "tags": [
            "公路片",
            "哲学",
            "相遇",
            "治愈"
        ]
    },
    {
        "title": "刑警博客",
        "url": "movie-867.html",
        "cover": "./117.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑/犯罪",
        "type": "剧集",
        "tags": [
            "博客",
            "连环杀手",
            "心理战",
            "刑警",
            "新媒体"
        ]
    },
    {
        "title": "法老",
        "url": "movie-868.html",
        "cover": "./118.jpg",
        "year": "2024",
        "region": "埃及/美国",
        "genre": "动作,冒险",
        "type": "电影",
        "tags": [
            "古埃及",
            "超级英雄",
            "神话改编"
        ]
    },
    {
        "title": "恍惚的土地",
        "url": "movie-869.html",
        "cover": "./119.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "土地记忆",
            "灵魂",
            "生态",
            "魔幻写实",
            "家族史"
        ]
    },
    {
        "title": "魔力月光",
        "url": "movie-870.html",
        "cover": "./120.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "奇幻,爱情,喜剧",
        "type": "电影",
        "tags": [
            "复古",
            "魔术",
            "谎言与真心",
            "伍迪艾伦式"
        ]
    },
    {
        "title": "边境杀手",
        "url": "movie-871.html",
        "cover": "./121.jpg",
        "year": "2023",
        "region": "墨西哥/美国",
        "genre": "动作/惊悚",
        "type": "电影",
        "tags": [
            "毒枭",
            "边境",
            "暴力美学",
            "孤胆英雄",
            "复仇"
        ]
    },
    {
        "title": "柳生一族的阴谋",
        "url": "movie-872.html",
        "cover": "./122.jpg",
        "year": "1978",
        "region": "日本",
        "genre": "动作/历史",
        "type": "电影",
        "tags": [
            "武士",
            "家族斗争",
            "幕府",
            "剑戟片"
        ]
    },
    {
        "title": "大桥梁",
        "url": "movie-873.html",
        "cover": "./123.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情,灾难",
        "type": "电影",
        "tags": [
            "基建",
            "救援",
            "父子",
            "社会现实"
        ]
    },
    {
        "title": "我为钢琴狂",
        "url": "movie-874.html",
        "cover": "./124.jpg",
        "year": "2024",
        "region": "德国",
        "genre": "剧情/音乐/心理",
        "type": "电影",
        "tags": [
            "天才陨落",
            "强迫症",
            "师生关系",
            "肖邦大赛",
            "自我救赎"
        ]
    },
    {
        "title": "黑帮高中",
        "url": "movie-875.html",
        "cover": "./125.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "动作犯罪",
        "type": "电影",
        "tags": [
            "校园暴力",
            "以暴制暴",
            "兄弟情",
            "热血"
        ]
    },
    {
        "title": "挚爱无尽",
        "url": "movie-876.html",
        "cover": "./126.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,爱情",
        "type": "电影",
        "tags": [
            "绝症",
            "守候",
            "亲情",
            "催泪"
        ]
    },
    {
        "title": "魔鬼小霸王",
        "url": "movie-877.html",
        "cover": "./127.jpg",
        "year": "2020",
        "region": "韩国",
        "genre": "动作/犯罪/黑色幽默",
        "type": "电影",
        "tags": [
            "黑帮",
            "反转",
            "校园",
            "卧底",
            "爽片"
        ]
    },
    {
        "title": "愤怒管理",
        "url": "movie-878.html",
        "cover": "./128.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/悬疑",
        "type": "电影",
        "tags": [
            "心理惊悚",
            "情绪",
            "职场暴力",
            "反转",
            "控制欲"
        ]
    },
    {
        "title": "居礼夫人",
        "url": "movie-879.html",
        "cover": "./129.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "传记剧情",
        "type": "电影",
        "tags": [
            "女性力量",
            "科学史",
            "战争背景",
            "情感纠葛",
            "励志"
        ]
    },
    {
        "title": "结婚,先不要",
        "url": "movie-880.html",
        "cover": "./130.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "喜剧/爱情",
        "type": "电视剧",
        "tags": [
            "恐婚",
            "都市",
            "闺蜜",
            "独立女性"
        ]
    },
    {
        "title": "超人/沙赞!:黑亚当归来",
        "url": "movie-881.html",
        "cover": "./131.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "超级英雄/动作/科幻",
        "type": "电影",
        "tags": [
            "双雄对决",
            "神力冲突",
            "反英雄",
            "宇宙危机"
        ]
    },
    {
        "title": "西部世界第二季",
        "url": "movie-882.html",
        "cover": "./132.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻,西部",
        "type": "剧集",
        "tags": [
            "人工智能",
            "觉醒",
            "西部",
            "迷宫"
        ]
    },
    {
        "title": "防弹武僧",
        "url": "movie-883.html",
        "cover": "./133.jpg",
        "year": "2003",
        "region": "美国/加拿大",
        "genre": "动作,奇幻,冒险",
        "type": "电影",
        "tags": [
            "超级英雄",
            "不死之身",
            "东方元素",
            "师徒传承"
        ]
    },
    {
        "title": "醒来",
        "url": "movie-884.html",
        "cover": "./134.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "科幻/悬疑",
        "type": "电影",
        "tags": [
            "意识上传",
            "记忆重构",
            "虚实难辨",
            "悬疑反转"
        ]
    },
    {
        "title": "11号战壕",
        "url": "movie-885.html",
        "cover": "./135.jpg",
        "year": "2020",
        "region": "美国",
        "genre": "恐怖,战争",
        "type": "电影",
        "tags": [
            "一战",
            "地底怪物",
            "密闭空间",
            "血腥"
        ]
    },
    {
        "title": "冷血继父",
        "url": "movie-886.html",
        "cover": "./136.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "惊悚/悬疑/犯罪",
        "type": "电影",
        "tags": [
            "家庭",
            "伪装",
            "谋杀",
            "心理操控",
            "反转结局"
        ]
    },
    {
        "title": "芭乐鸳鸯",
        "url": "movie-887.html",
        "cover": "./137.jpg",
        "year": "2026",
        "region": "中国台湾",
        "genre": "爱情/喜剧/奇幻",
        "type": "电影",
        "tags": [
            "灵魂互换",
            "乡村",
            "水果",
            "纯爱",
            "轻奇幻"
        ]
    },
    {
        "title": "前哨第二季",
        "url": "movie-888.html",
        "cover": "./138.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻,悬疑",
        "type": "剧集",
        "tags": [
            "科幻",
            "悬疑",
            "军事",
            "未来战争"
        ]
    },
    {
        "title": "看我说什么",
        "url": "movie-889.html",
        "cover": "./139.jpg",
        "year": "1997",
        "region": "中国香港",
        "genre": "喜剧,动作,警匪",
        "type": "电影",
        "tags": [
            "聋哑",
            "卧底",
            "手语",
            "乌龙",
            "黄金年代"
        ]
    },
    {
        "title": "低沉的天空",
        "url": "movie-890.html",
        "cover": "./140.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "科幻,悬疑,惊悚",
        "type": "剧集",
        "tags": [
            "低空禁区",
            "气候异常",
            "小镇疑云"
        ]
    },
    {
        "title": "娇娃偷情",
        "url": "movie-891.html",
        "cover": "./141.jpg",
        "year": "1993",
        "region": "中国香港",
        "genre": "情色/剧情/悬疑",
        "type": "电影",
        "tags": [
            "情欲",
            "悬疑",
            "香港电影",
            "伦理",
            "反转"
        ]
    },
    {
        "title": "英俊又可爱",
        "url": "movie-892.html",
        "cover": "./142.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "爱情,喜剧",
        "type": "剧集",
        "tags": [
            "反差萌",
            "整容",
            "纯爱"
        ]
    },
    {
        "title": "被迫成为反派赘婿第二季",
        "url": "movie-893.html",
        "cover": "./143.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "穿越/古装/喜剧/动作",
        "type": "剧集",
        "tags": [
            "赘婿",
            "反派",
            "系统",
            "沙雕",
            "爽文"
        ]
    },
    {
        "title": "鞋店事务所 第二季",
        "url": "movie-894.html",
        "cover": "./144.jpg",
        "year": "2011",
        "region": "美国",
        "genre": "喜剧/律政",
        "type": "电视剧",
        "tags": [
            "情景喜剧",
            "草根律师",
            "黑人幽默"
        ]
    },
    {
        "title": "无焰爱火",
        "url": "movie-895.html",
        "cover": "./145.jpg",
        "year": "2025",
        "region": "土耳其",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "宗教压迫",
            "禁忌之恋",
            "欧洲三大"
        ]
    },
    {
        "title": "爱欲潜行",
        "url": "movie-896.html",
        "cover": "./146.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "惊悚,爱情,悬疑",
        "type": "电影",
        "tags": [
            "游艇",
            "禁忌",
            "阴谋",
            "反转",
            "19禁"
        ]
    },
    {
        "title": "建筑大师",
        "url": "movie-897.html",
        "cover": "./147.jpg",
        "year": "2024",
        "region": "挪威/德国",
        "genre": "剧情/心理/传记",
        "type": "电影",
        "tags": [
            "建筑师",
            "中年危机",
            "幻觉与真实"
        ]
    },
    {
        "title": "飞越苏联",
        "url": "movie-898.html",
        "cover": "./148.jpg",
        "year": "1985",
        "region": "美国",
        "genre": "剧情/惊悚",
        "type": "电影",
        "tags": [
            "冷战背景",
            "叛逃",
            "舞蹈",
            "心理博弈"
        ]
    },
    {
        "title": "警察李“酒瓶",
        "url": "movie-899.html",
        "cover": "./149.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "剧情/犯罪/黑色幽默",
        "type": "电影",
        "tags": [
            "底层警察",
            "小人物",
            "社会讽刺",
            "中年危机"
        ]
    },
    {
        "title": "国王的全息图",
        "url": "movie-900.html",
        "cover": "./150.jpg",
        "year": "2024",
        "region": "美国/德国",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "沙特",
            "经济改革",
            "中年危机",
            "技术冲突"
        ]
    },
    {
        "title": "学校万花筒",
        "url": "movie-901.html",
        "cover": "./1.jpg",
        "year": "2006",
        "region": "中国大陆",
        "genre": "校园、喜剧、青春",
        "type": "电视剧(30集)",
        "tags": [
            "小学",
            "师生日常",
            "单元剧",
            "90后童年"
        ]
    },
    {
        "title": "亲爱的药王大人",
        "url": "movie-902.html",
        "cover": "./2.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装/爱情/奇幻",
        "type": "剧集",
        "tags": [
            "仙侠",
            "药王",
            "契约婚姻",
            "治愈"
        ]
    },
    {
        "title": "摩登女郎谋杀案",
        "url": "movie-903.html",
        "cover": "./3.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "1920年代",
            "时尚",
            "连环杀手",
            "女性侦探"
        ]
    },
    {
        "title": "九十岁的美女",
        "url": "movie-904.html",
        "cover": "./4.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "喜剧/剧情/爱情",
        "type": "电影",
        "tags": [
            "高龄",
            "爱情",
            "第二春",
            "法式浪漫",
            "治愈"
        ]
    },
    {
        "title": "心脏在跳啊",
        "url": "movie-905.html",
        "cover": "./5.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "爱情/喜剧",
        "type": "电影",
        "tags": [
            "器官捐赠",
            "命中注定",
            "都市奇缘"
        ]
    },
    {
        "title": "鼠人",
        "url": "movie-906.html",
        "cover": "./6.jpg",
        "year": "2024",
        "region": "德国/奥地利",
        "genre": "恐怖/心理惊悚",
        "type": "电影",
        "tags": [
            "都市传说",
            "地下城",
            "变异",
            "寄生虫"
        ]
    },
    {
        "title": "不准忘了我",
        "url": "movie-907.html",
        "cover": "./7.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "失忆",
            "婚内PUA",
            "反转",
            "密室"
        ]
    },
    {
        "title": "夜市人生",
        "url": "movie-908.html",
        "cover": "./8.jpg",
        "year": "2009",
        "region": "中国台湾",
        "genre": "家庭/生活/喜剧",
        "type": "电视剧",
        "tags": [
            "夜市",
            "草根奋斗",
            "长剧"
        ]
    },
    {
        "title": "千分之一",
        "url": "movie-909.html",
        "cover": "./9.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "科幻、伦理",
        "type": "电影",
        "tags": [
            "基因筛选",
            "完美小孩",
            "母亲焦虑",
            "反乌托邦"
        ]
    },
    {
        "title": "没有过去的男人",
        "url": "movie-910.html",
        "cover": "./10.jpg",
        "year": "2024",
        "region": "芬兰/德国",
        "genre": "剧情/悬疑/黑色幽默",
        "type": "电影",
        "tags": [
            "失忆",
            "北欧冷幽默",
            "身份探索",
            "极简主义",
            "救赎"
        ]
    },
    {
        "title": "神勇双响炮续集",
        "url": "movie-911.html",
        "cover": "./11.jpg",
        "year": "1987",
        "region": "中国香港",
        "genre": "喜剧/动作",
        "type": "电影",
        "tags": [
            "港产片",
            "警匪",
            "乌龙搭档",
            "怀旧"
        ]
    },
    {
        "title": "13",
        "url": "movie-912.html",
        "cover": "./12.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "数字诅咒",
            "密闭空间",
            "极限逃生"
        ]
    },
    {
        "title": "拉各斯黑帮",
        "url": "movie-913.html",
        "cover": "./13.jpg",
        "year": "2025",
        "region": "尼日利亚",
        "genre": "犯罪,动作",
        "type": "电影",
        "tags": [
            "非洲",
            "暴力美学",
            "街头",
            "信仰",
            "复仇"
        ]
    },
    {
        "title": "家族的形式",
        "url": "movie-914.html",
        "cover": "./14.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "家庭/剧情/治愈",
        "type": "剧集",
        "tags": [
            "单身主义",
            "家庭羁绊",
            "温情",
            "日式细腻",
            "生活流"
        ]
    },
    {
        "title": "亡灵",
        "url": "movie-915.html",
        "cover": "./15.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "丧尸",
            "病毒",
            "母女",
            "生存",
            "反转"
        ]
    },
    {
        "title": "都市惧集",
        "url": "movie-916.html",
        "cover": "./16.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "恐怖/惊悚",
        "type": "剧集",
        "tags": [
            "都市怪谈",
            "单元剧",
            "心理恐怖",
            "本土化"
        ]
    },
    {
        "title": "黑化游戏",
        "url": "movie-917.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "都市传说",
            "社交恐怖",
            "手机诅咒",
            "小成本黑马",
            "邪恶结局"
        ]
    },
    {
        "title": "手语的保存",
        "url": "movie-918.html",
        "cover": "./18.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "剧情/历史/人文",
        "type": "电影",
        "tags": [
            "手语",
            "听障",
            "文化保存",
            "二战遗孤"
        ]
    },
    {
        "title": "拿什么让你幸福",
        "url": "movie-919.html",
        "cover": "./19.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "家庭,伦理",
        "type": "剧集",
        "tags": [
            "拆迁",
            "养老",
            "兄妹反目",
            "现实主义",
            "催泪"
        ]
    },
    {
        "title": "地狱之家",
        "url": "movie-920.html",
        "cover": "./20.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖/惊悚/密室",
        "type": "电影",
        "tags": [
            "鬼屋",
            "家庭悲剧",
            "心理创伤",
            "血腥美学"
        ]
    },
    {
        "title": "不完美的美",
        "url": "movie-921.html",
        "cover": "./21.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情/喜剧/生活",
        "type": "电影",
        "tags": [
            "温情",
            "治愈",
            "残疾",
            "友谊"
        ]
    },
    {
        "title": "阿里结婚啦",
        "url": "movie-922.html",
        "cover": "./22.jpg",
        "year": "2027",
        "region": "中国大陆",
        "genre": "剧情/喜剧/爱情",
        "type": "电影",
        "tags": [
            "少数民族",
            "新疆",
            "传统与现代",
            "婚礼",
            "家族"
        ]
    },
    {
        "title": "帕德玛瓦特",
        "url": "movie-923.html",
        "cover": "./23.jpg",
        "year": "2021",
        "region": "印度",
        "genre": "剧情、历史",
        "type": "电影",
        "tags": [
            "女性",
            "反抗",
            "史诗"
        ]
    },
    {
        "title": "美味盛宴",
        "url": "movie-924.html",
        "cover": "./24.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "喜剧/剧情/美食",
        "type": "电影",
        "tags": [
            "米其林",
            "美食评论家",
            "味觉",
            "复仇",
            "哲学"
        ]
    },
    {
        "title": "野战第三连",
        "url": "movie-925.html",
        "cover": "./25.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动作、战争",
        "type": "电影",
        "tags": [
            "军事",
            "热血",
            "兄弟情",
            "实战"
        ]
    },
    {
        "title": "万界仙踪",
        "url": "movie-926.html",
        "cover": "./26.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "奇幻、仙侠、冒险",
        "type": "剧集",
        "tags": [
            "穿越",
            "修仙",
            "多元宇宙",
            "废柴逆袭",
            "宗门"
        ]
    },
    {
        "title": "父儿情深",
        "url": "movie-927.html",
        "cover": "./27.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "自闭症",
            "单亲爸爸",
            "温情"
        ]
    },
    {
        "title": "国医养生馆",
        "url": "movie-928.html",
        "cover": "./28.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/古装/医学",
        "type": "剧集",
        "tags": [
            "中医",
            "悬疑",
            "朝堂",
            "师徒",
            "养生"
        ]
    },
    {
        "title": "少年特工科迪2",
        "url": "movie-929.html",
        "cover": "./29.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作、冒险、喜剧",
        "type": "电影",
        "tags": [
            "特工",
            "少年英雄",
            "全球任务",
            "合家欢"
        ]
    },
    {
        "title": "时光沙漏",
        "url": "movie-930.html",
        "cover": "./30.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "奇幻动画",
        "type": "动画电影",
        "tags": [
            "时间回溯",
            "校园",
            "治愈",
            "遗憾"
        ]
    },
    {
        "title": "死亡的权利",
        "url": "movie-931.html",
        "cover": "./31.jpg",
        "year": "2025",
        "region": "法国/比利时",
        "genre": "剧情/伦理",
        "type": "电影",
        "tags": [
            "安乐死",
            "律师",
            "母女",
            "庭审",
            "尊严"
        ]
    },
    {
        "title": "雾柱",
        "url": "movie-932.html",
        "cover": "./32.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,悬疑,灾难",
        "type": "电影",
        "tags": [
            "化工事故",
            "盲人",
            "密室",
            "社会隐喻",
            "长镜头"
        ]
    },
    {
        "title": "迷途人生",
        "url": "movie-933.html",
        "cover": "./33.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情,犯罪",
        "type": "电影",
        "tags": [
            "黑色电影",
            "命运",
            "底层挣扎",
            "多线叙事"
        ]
    },
    {
        "title": "两个人的小森林",
        "url": "movie-934.html",
        "cover": "./34.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/治愈/奇幻",
        "type": "剧集",
        "tags": [
            "植物学",
            "治愈系",
            "森林系",
            "慢生活",
            "边缘人格"
        ]
    },
    {
        "title": "比利小子第二季",
        "url": "movie-935.html",
        "cover": "./35.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "西部,动作,传记",
        "type": "剧集",
        "tags": [
            "传奇枪手",
            "新墨西哥",
            "恩怨",
            "快枪决斗",
            "史诗"
        ]
    },
    {
        "title": "刺杀甘迺迪",
        "url": "movie-936.html",
        "cover": "./36.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "悬疑,惊悚,历史",
        "type": "电影",
        "tags": [
            "政治阴谋",
            "调查",
            "记者",
            "真相",
            "档案"
        ]
    },
    {
        "title": "抗战英雌",
        "url": "movie-937.html",
        "cover": "./37.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "历史,战争",
        "type": "剧集",
        "tags": [
            "女性",
            "抗战",
            "真实改编",
            "谍战",
            "群像"
        ]
    },
    {
        "title": "司机奇艳录",
        "url": "movie-938.html",
        "cover": "./38.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑/喜剧",
        "type": "网络剧",
        "tags": [
            "出租车",
            "奇遇",
            "单元剧",
            "黑色幽默",
            "都市传说"
        ]
    },
    {
        "title": "黑暗中的孩子们",
        "url": "movie-939.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "日本/泰国",
        "genre": "剧情/犯罪",
        "type": "电影",
        "tags": [
            "社会议题",
            "儿童贩卖",
            "写实"
        ]
    },
    {
        "title": "魔力女战士",
        "url": "movie-940.html",
        "cover": "./40.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻,动作",
        "type": "电影",
        "tags": [
            "赛博朋克",
            "女性特工",
            "基因编辑"
        ]
    },
    {
        "title": "记忆碎片2000",
        "url": "movie-941.html",
        "cover": "./41.jpg",
        "year": "2000",
        "region": "美国",
        "genre": "悬疑,惊悚,犯罪",
        "type": "电影",
        "tags": [
            "失忆",
            "倒叙",
            "纹身",
            "复仇"
        ]
    },
    {
        "title": "野猫",
        "url": "movie-942.html",
        "cover": "./42.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情/惊悚",
        "type": "电影",
        "tags": [
            "女性主义",
            "夜行",
            "城市探索",
            "复仇"
        ]
    },
    {
        "title": "心灵的深夜对话",
        "url": "movie-943.html",
        "cover": "./43.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情,治愈",
        "type": "剧集",
        "tags": [
            "深夜电台",
            "陌生人故事",
            "人生解忧"
        ]
    },
    {
        "title": "幸运的星",
        "url": "movie-944.html",
        "cover": "./44.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "彩票",
            "家庭关系",
            "小人物",
            "黑色幽默"
        ]
    },
    {
        "title": "弗兰奇街13号",
        "url": "movie-945.html",
        "cover": "./45.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "悬疑,恐怖,超自然",
        "type": "剧集",
        "tags": [
            "公寓",
            "邻居",
            "邪教",
            "密室"
        ]
    },
    {
        "title": "桃花源怪谈",
        "url": "movie-946.html",
        "cover": "./46.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "恐怖,悬疑,惊悚",
        "type": "网络电影",
        "tags": [
            "民俗恐怖",
            "克苏鲁",
            "村庄",
            "解谜"
        ]
    },
    {
        "title": "我们的电影",
        "url": "movie-947.html",
        "cover": "./47.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "迷影",
            "青春",
            "小镇",
            "梦想",
            "友情"
        ]
    },
    {
        "title": "不归的使者",
        "url": "movie-948.html",
        "cover": "./48.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "犯罪/动作/黑色电影",
        "type": "电影",
        "tags": [
            "杀手",
            "宿命",
            "复仇",
            "雨夜"
        ]
    },
    {
        "title": "国境燃烧",
        "url": "movie-949.html",
        "cover": "./49.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "动作/谍战",
        "type": "电影",
        "tags": [
            "朝韩边境",
            "孤立无援",
            "绝地求生"
        ]
    },
    {
        "title": "外遇心风暴",
        "url": "movie-950.html",
        "cover": "./50.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "悬疑,惊悚",
        "type": "剧集",
        "tags": [
            "出轨",
            "心理博弈",
            "反转"
        ]
    },
    {
        "title": "死神度假",
        "url": "movie-951.html",
        "cover": "./51.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "奇幻,喜剧",
        "type": "电影",
        "tags": [
            "死神",
            "海滩度假",
            "灵魂错乱"
        ]
    },
    {
        "title": "无上尊者",
        "url": "movie-952.html",
        "cover": "./52.jpg",
        "year": "2025",
        "region": "中国香港/台湾",
        "genre": "奇幻,武侠,悬疑",
        "type": "剧集",
        "tags": [
            "修真",
            "废柴逆袭",
            "多重人格",
            "神魔大战"
        ]
    },
    {
        "title": "东云色的周末",
        "url": "movie-953.html",
        "cover": "./53.jpg",
        "year": "2019",
        "region": "法国",
        "genre": "剧情/同性",
        "type": "电影",
        "tags": [
            "度假",
            "出轨",
            "中年危机",
            "海风",
            "和解"
        ]
    },
    {
        "title": "卡吉丽昂",
        "url": "movie-954.html",
        "cover": "./54.jpg",
        "year": "2022",
        "region": "印度",
        "genre": "动作/剧情",
        "type": "电影",
        "tags": [
            "村庄",
            "女神",
            "复仇",
            "女性觉醒"
        ]
    },
    {
        "title": "普西迪基地",
        "url": "movie-955.html",
        "cover": "./55.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作,惊悚",
        "type": "电影",
        "tags": [
            "军队",
            "谋杀",
            "旧金山",
            "老兵"
        ]
    },
    {
        "title": "春光奏鸣曲",
        "url": "movie-956.html",
        "cover": "./56.jpg",
        "year": "1991",
        "region": "法国/英国",
        "genre": "爱情,音乐,传记",
        "type": "电影",
        "tags": [
            "肖邦",
            "乔治·桑",
            "古典乐",
            "文艺"
        ]
    },
    {
        "title": "斑马人2:斑马城的逆袭",
        "url": "movie-957.html",
        "cover": "./57.jpg",
        "year": "2010",
        "region": "日本",
        "genre": "动作/科幻/喜剧",
        "type": "电影",
        "tags": [
            "恶趣味",
            "三池崇史",
            "特摄",
            "黑色幽默",
            "低预算美学"
        ]
    },
    {
        "title": "社内相亲",
        "url": "movie-958.html",
        "cover": "./58.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "浪漫,喜剧",
        "type": "剧集",
        "tags": [
            "契约恋爱",
            "办公室恋情",
            "替身相亲",
            "财阀搞笑"
        ]
    },
    {
        "title": "欲浪春潮",
        "url": "movie-959.html",
        "cover": "./59.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "爱情/剧情",
        "type": "剧集 爱情/剧情",
        "tags": [
            "成年人的爱情",
            "婚外",
            "欲望",
            "文学改编感"
        ]
    },
    {
        "title": "埃加罗",
        "url": "movie-960.html",
        "cover": "./60.jpg",
        "year": "2026",
        "region": "西班牙/阿根廷",
        "genre": "剧情/悬疑/犯罪",
        "type": "剧集",
        "tags": [
            "贵族",
            "庄园",
            "血统",
            "家族秘密",
            "双胞胎"
        ]
    },
    {
        "title": "搏击人生",
        "url": "movie-961.html",
        "cover": "./61.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/运动",
        "type": "电影",
        "tags": [
            "女子MMA",
            "中年危机",
            "女性力量",
            "打脸爽片"
        ]
    },
    {
        "title": "极限挑战第三季",
        "url": "movie-962.html",
        "cover": "./62.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "真人秀、竞技",
        "type": "综艺",
        "tags": [
            "户外",
            "任务",
            "对抗",
            "明星"
        ]
    },
    {
        "title": "捍卫雅各布",
        "url": "movie-963.html",
        "cover": "./63.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "犯罪,悬疑,剧情",
        "type": "剧集",
        "tags": [
            "律政",
            "家庭伦理",
            "校园谋杀",
            "反转"
        ]
    },
    {
        "title": "恐怖怪物",
        "url": "movie-964.html",
        "cover": "./64.jpg",
        "year": "2025",
        "region": "加拿大/挪威",
        "genre": "恐怖/心理/超自然",
        "type": "电影",
        "tags": [
            "怪物",
            "家庭创伤",
            "隐喻",
            "实拍特效"
        ]
    },
    {
        "title": "沉默的心",
        "url": "movie-965.html",
        "cover": "./65.jpg",
        "year": "2024",
        "region": "丹麦",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "绝症",
            "告别",
            "家庭聚会",
            "和解",
            "北欧冷感"
        ]
    },
    {
        "title": "浪子挑情",
        "url": "movie-966.html",
        "cover": "./66.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "爱情/悬疑",
        "type": "电影",
        "tags": [
            "虐恋",
            "复仇",
            "反转",
            "情欲"
        ]
    },
    {
        "title": "转型团伙",
        "url": "movie-967.html",
        "cover": "./67.jpg",
        "year": "2018",
        "region": "中国香港/中国大陆",
        "genre": "喜剧/动作/犯罪",
        "type": "电影",
        "tags": [
            "过气明星",
            "假绑架",
            "黑帮",
            "拍电影",
            "荒诞"
        ]
    },
    {
        "title": "圣路易斯的骄傲",
        "url": "movie-968.html",
        "cover": "./68.jpg",
        "year": "1952",
        "region": "美国",
        "genre": "剧情,歌舞,传记",
        "type": "电影",
        "tags": [
            "棒球",
            "种族歧视",
            "黑人联盟",
            "励志",
            "奥斯卡遗珠"
        ]
    },
    {
        "title": "灵魂的四段旅程",
        "url": "movie-969.html",
        "cover": "./69.jpg",
        "year": "2020",
        "region": "意大利/德国",
        "genre": "剧情/奇幻/哲学",
        "type": "电影",
        "tags": [
            "章节体",
            "生死",
            "寓言",
            "慢电影",
            "视觉哲思"
        ]
    },
    {
        "title": "春日小恋曲",
        "url": "movie-970.html",
        "cover": "./70.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "爱情,青春",
        "type": "电影",
        "tags": [
            "校园",
            "音乐",
            "暗恋",
            "短命",
            "纯爱"
        ]
    },
    {
        "title": "狙击部队",
        "url": "movie-971.html",
        "cover": "./71.jpg",
        "year": "2012",
        "region": "中国",
        "genre": "军旅,动作",
        "type": "电视剧",
        "tags": [
            "抗战",
            "神枪手",
            "特种作战",
            "兄弟情",
            "热血"
        ]
    },
    {
        "title": "想唱就唱2013",
        "url": "movie-972.html",
        "cover": "./72.jpg",
        "year": "2013",
        "region": "中国大陆",
        "genre": "剧情,音乐",
        "type": "电影",
        "tags": [
            "选秀",
            "十年前",
            "素人",
            "梦想",
            "怀旧"
        ]
    },
    {
        "title": "刺猬小子之天生我刺",
        "url": "movie-973.html",
        "cover": "./73.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "喜剧/冒险/家庭",
        "type": "电影/动画",
        "tags": [
            "成长",
            "刺猬",
            "自信",
            "动画",
            "友谊"
        ]
    },
    {
        "title": "我们仍未知道那颗星的校规",
        "url": "movie-974.html",
        "cover": "./74.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/校园/悬疑",
        "type": "动画剧集",
        "tags": [
            "太空学院",
            "反乌托邦",
            "规则怪谈",
            "青春群像"
        ]
    },
    {
        "title": "我们的歌",
        "url": "movie-975.html",
        "cover": "./75.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "音乐/剧情",
        "type": "电影",
        "tags": [
            "民谣",
            "乐队",
            "北漂",
            "梦想"
        ]
    },
    {
        "title": "大力水手2014",
        "url": "movie-976.html",
        "cover": "./76.jpg",
        "year": "2014",
        "region": "美国",
        "genre": "动画,冒险,喜剧",
        "type": "电影",
        "tags": [
            "经典重启",
            "菠菜新解",
            "环保主题"
        ]
    },
    {
        "title": "命",
        "url": "movie-977.html",
        "cover": "./77.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "剧情、悬疑、伦理",
        "type": "电影",
        "tags": [
            "器官移植",
            "替身",
            "宿命",
            "心理操控",
            "双生"
        ]
    },
    {
        "title": "小羊肖恩大电影",
        "url": "movie-978.html",
        "cover": "./78.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "动画/喜剧",
        "type": "电影",
        "tags": [
            "定格动画",
            "黏土风格",
            "农场冒险",
            "无对白"
        ]
    },
    {
        "title": "治愈之心~如何喜欢自己",
        "url": "movie-979.html",
        "cover": "./79.jpg",
        "year": "2028",
        "region": "韩国",
        "genre": "治愈/浪漫/职场",
        "type": "电视剧",
        "tags": [
            "心理学",
            "社畜自救",
            "轻喜剧",
            "温暖治愈"
        ]
    },
    {
        "title": "遗忘与宽恕",
        "url": "movie-980.html",
        "cover": "./80.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "失忆",
            "和解",
            "父子",
            "伤痛",
            "日记"
        ]
    },
    {
        "title": "摩哈维的月亮",
        "url": "movie-981.html",
        "cover": "./81.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情、惊悚、西部",
        "type": "电影",
        "tags": [
            "沙漠",
            "黑色电影",
            "宿命",
            "独行"
        ]
    },
    {
        "title": "无间道第三季",
        "url": "movie-982.html",
        "cover": "./82.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "悬疑/犯罪",
        "type": "剧集",
        "tags": [
            "卧底",
            "警匪",
            "续作",
            "宿命",
            "港风"
        ]
    },
    {
        "title": "炙爱之战",
        "url": "movie-983.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "真人秀,恋爱",
        "type": "综艺",
        "tags": [
            "分手",
            "复合",
            "前任",
            "修罗场",
            "情感"
        ]
    },
    {
        "title": "花心大少满堂春",
        "url": "movie-984.html",
        "cover": "./84.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "喜剧,爱情",
        "type": "电影",
        "tags": [
            "港式喜剧",
            "多线叙事",
            "追女仔",
            "怀旧"
        ]
    },
    {
        "title": "爱情合众国",
        "url": "movie-985.html",
        "cover": "./85.jpg",
        "year": "2024",
        "region": "波兰/德国",
        "genre": "剧情/爱情/文艺",
        "type": "电影",
        "tags": [
            "多线叙事",
            "欧洲",
            "中年危机",
            "女性视角"
        ]
    },
    {
        "title": "瑕疵品第一季",
        "url": "movie-986.html",
        "cover": "./86.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻/动作/反乌托邦",
        "type": "剧集",
        "tags": [
            "基因编辑",
            "底层反抗",
            "赛博朋克",
            "群体觉醒"
        ]
    },
    {
        "title": "阿蒂卡监狱事件",
        "url": "movie-987.html",
        "cover": "./87.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "历史/犯罪/剧情",
        "type": "电影",
        "tags": [
            "真实事件改编",
            "监狱暴动",
            "种族矛盾",
            "司法不公",
            "集体记忆"
        ]
    },
    {
        "title": "弹无虚发",
        "url": "movie-988.html",
        "cover": "./88.jpg",
        "year": "2007",
        "region": "美国",
        "genre": "动作/犯罪/惊悚",
        "type": "电影",
        "tags": [
            "狙击手",
            "复仇",
            "高智商犯罪"
        ]
    },
    {
        "title": "非礼勿言",
        "url": "movie-989.html",
        "cover": "./89.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "密室",
            "心理战",
            "反转",
            "社会隐喻"
        ]
    },
    {
        "title": "我将喜欢告诉了风",
        "url": "movie-990.html",
        "cover": "./90.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情,文艺,青春",
        "type": "电影",
        "tags": [
            "西藏",
            "骑行",
            "绝症",
            "治愈",
            "公路爱情"
        ]
    },
    {
        "title": "圣斗士星矢 极乐净土篇",
        "url": "movie-991.html",
        "cover": "./91.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "动作/奇幻/热血",
        "type": "动画电影",
        "tags": [
            "经典IP",
            "热血战斗",
            "神话题材",
            "情怀",
            "视觉特效"
        ]
    },
    {
        "title": "恶犬之下",
        "url": "movie-992.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "犯罪、动作、剧情",
        "type": "电影",
        "tags": [
            "狗镇",
            "暴力美学",
            "以暴制暴",
            "复仇"
        ]
    },
    {
        "title": "海的钥匙",
        "url": "movie-993.html",
        "cover": "./93.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "剧情,奇幻",
        "type": "电影",
        "tags": [
            "海滨",
            "记忆",
            "钥匙",
            "治愈",
            "亲子关系"
        ]
    },
    {
        "title": "美国黑人魔法协会",
        "url": "movie-994.html",
        "cover": "./94.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "奇幻,剧情,历史",
        "type": "电影",
        "tags": [
            "魔法",
            "种族",
            "历史改线",
            "非裔文化",
            "社会隐喻"
        ]
    },
    {
        "title": "爱的赌注",
        "url": "movie-995.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "赌博",
            "地下拳赛",
            "虐恋",
            "救赎"
        ]
    },
    {
        "title": "妈妈",
        "url": "movie-996.html",
        "cover": "./96.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "韩式恐怖",
            "家庭伦理",
            "母爱",
            "反转",
            "音频恐怖"
        ]
    },
    {
        "title": "我的纯洁土地",
        "url": "movie-997.html",
        "cover": "./97.jpg",
        "year": "2023",
        "region": "巴基斯坦/英国",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "荣誉文化",
            "女性困境",
            "跨代冲突",
            "英伦亚裔"
        ]
    },
    {
        "title": "诡计",
        "url": "movie-998.html",
        "cover": "./98.jpg",
        "year": "2006",
        "region": "中国香港",
        "genre": "悬疑/犯罪",
        "type": "电视剧",
        "tags": [
            "高智商犯罪",
            "推理",
            "单元剧",
            "警匪斗智"
        ]
    },
    {
        "title": "吻灭",
        "url": "movie-999.html",
        "cover": "./99.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "爱情,奇幻,剧情",
        "type": "电影",
        "tags": [
            "诅咒",
            "失忆",
            "命运",
            "唯美"
        ]
    },
    {
        "title": "幸福满满",
        "url": "movie-1000.html",
        "cover": "./100.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "家庭/喜剧",
        "type": "剧集",
        "tags": [
            "养老",
            "拆迁",
            "广场舞",
            "邻里",
            "轻喜"
        ]
    },
    {
        "title": "作伪心劳",
        "url": "movie-1001.html",
        "cover": "./101.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "悬疑,犯罪",
        "type": "电影",
        "tags": [
            "高概念",
            "反转",
            "心理博弈",
            "全员恶人"
        ]
    },
    {
        "title": "宝贝儿2018",
        "url": "movie-1002.html",
        "cover": "./102.jpg",
        "year": "2018",
        "region": "中国大陆",
        "genre": "剧情,文艺",
        "type": "电影",
        "tags": [
            "社会",
            "缺陷",
            "挣扎",
            "现实"
        ]
    },
    {
        "title": "吸血鬼就在隔壁2",
        "url": "movie-1003.html",
        "cover": "./103.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "恐怖,喜剧,惊悚",
        "type": "电影",
        "tags": [
            "续集",
            "邻里关系",
            "黑色幽默",
            "吸血鬼猎人"
        ]
    },
    {
        "title": "夏树",
        "url": "movie-1004.html",
        "cover": "./104.jpg",
        "year": "2020",
        "region": "日本",
        "genre": "爱情/青春/剧情",
        "type": "电影",
        "tags": [
            "初恋",
            "夏日",
            "癌症",
            "纯爱",
            "催泪"
        ]
    },
    {
        "title": "魔窟营救",
        "url": "movie-1005.html",
        "cover": "./105.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "动作,惊悚,冒险",
        "type": "电影",
        "tags": [
            "洞穴",
            "特种兵",
            "人质",
            "变异生物",
            "密闭空间"
        ]
    },
    {
        "title": "高中驱魔人",
        "url": "movie-1006.html",
        "cover": "./106.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "恐怖/喜剧",
        "type": "电影",
        "tags": [
            "校园",
            "搞笑",
            "降灵"
        ]
    },
    {
        "title": "蹩脚英语",
        "url": "movie-1007.html",
        "cover": "./107.jpg",
        "year": "2023",
        "region": "法国/美国",
        "genre": "爱情/喜剧",
        "type": "电影",
        "tags": [
            "语言障碍",
            "巴黎",
            "翻译乌龙"
        ]
    },
    {
        "title": "2020去死",
        "url": "movie-1008.html",
        "cover": "./108.jpg",
        "year": "2023",
        "region": "多国",
        "genre": "灾难喜剧",
        "type": "电影",
        "tags": [
            "疫情",
            "黑色幽默",
            "群像",
            "末日狂欢"
        ]
    },
    {
        "title": "等待达利",
        "url": "movie-1009.html",
        "cover": "./109.jpg",
        "year": "2023",
        "region": "西班牙",
        "genre": "剧情/传记/奇幻",
        "type": "电影",
        "tags": [
            "超现实主义",
            "达利",
            "艺术家",
            "幻觉"
        ]
    },
    {
        "title": "古宅老友记第五季",
        "url": "movie-1010.html",
        "cover": "./110.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "喜剧奇幻",
        "type": "剧集",
        "tags": [
            "鬼魂",
            "合家欢",
            "英式幽默",
            "治愈"
        ]
    },
    {
        "title": "迎头重击",
        "url": "movie-1011.html",
        "cover": "./111.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "动作、运动、剧情",
        "type": "电影",
        "tags": [
            "拳击",
            "失忆",
            "救赎"
        ]
    },
    {
        "title": "多数欠",
        "url": "movie-1012.html",
        "cover": "./112.jpg",
        "year": "2016",
        "region": "日本",
        "genre": "恐怖,悬疑,奇幻",
        "type": "电影",
        "tags": [
            "密室",
            "投票",
            "生死",
            "人性",
            "游戏"
        ]
    },
    {
        "title": "大英雄",
        "url": "movie-1013.html",
        "cover": "./113.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动作/武侠",
        "type": "电影",
        "tags": [
            "反英雄",
            "小人物崛起",
            "功夫写实"
        ]
    },
    {
        "title": "勇气",
        "url": "movie-1014.html",
        "cover": "./114.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "剧情/运动",
        "type": "电影",
        "tags": [
            "女性",
            "拳击",
            "中年危机"
        ]
    },
    {
        "title": "灭绝大屠杀",
        "url": "movie-1015.html",
        "cover": "./115.jpg",
        "year": "2026",
        "region": "德国",
        "genre": "科幻,惊悚,恐怖",
        "type": "电影",
        "tags": [
            "人工智能",
            "种族清洗",
            "末世",
            "伦理"
        ]
    },
    {
        "title": "金海情",
        "url": "movie-1016.html",
        "cover": "./116.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情,文艺,年代",
        "type": "电影",
        "tags": [
            "海边小城",
            "错过",
            "知青子女",
            "旧梦重温"
        ]
    },
    {
        "title": "芭比之圣诞欢歌",
        "url": "movie-1017.html",
        "cover": "./117.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画,歌舞,奇幻",
        "type": "电影/动画",
        "tags": [
            "圣诞",
            "童话改编",
            "女性成长",
            "合家欢",
            "音乐剧"
        ]
    },
    {
        "title": "天外怪魔",
        "url": "movie-1018.html",
        "cover": "./118.jpg",
        "year": "1999",
        "region": "日本",
        "genre": "科幻,特摄,悬疑",
        "type": "剧集",
        "tags": [
            "怪兽",
            "少年",
            "友情",
            "单元剧",
            "童年"
        ]
    },
    {
        "title": "联邦调查局第二季",
        "url": "movie-1019.html",
        "cover": "./119.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "犯罪/剧情/动作",
        "type": "剧集",
        "tags": [
            "单元剧",
            "反恐",
            "侧写",
            "团队合作"
        ]
    },
    {
        "title": "沉默不语的顾小姐",
        "url": "movie-1020.html",
        "cover": "./120.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "悬疑,犯罪,心理",
        "type": "剧集",
        "tags": [
            "哑女复仇",
            "无声审判",
            "手语博弈",
            "刑侦谜题"
        ]
    },
    {
        "title": "神奇的汉字",
        "url": "movie-1021.html",
        "cover": "./121.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "奇幻/悬疑",
        "type": "电视剧",
        "tags": [
            "语言",
            "超能力",
            "校园"
        ]
    },
    {
        "title": "富贵荣华第一家",
        "url": "movie-1022.html",
        "cover": "./122.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "喜剧,剧情,家庭",
        "type": "电影",
        "tags": [
            "豪门",
            "争产",
            "温情",
            "市井"
        ]
    },
    {
        "title": "浪漫",
        "url": "movie-1023.html",
        "cover": "./123.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "爱情/剧情/文艺",
        "type": "电影",
        "tags": [
            "巴黎",
            "邂逅",
            "中年之爱",
            "存在主义",
            "话痨电影"
        ]
    },
    {
        "title": "再见的延续",
        "url": "movie-1024.html",
        "cover": "./124.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "剧情奇幻",
        "type": "电影",
        "tags": [
            "咖啡店",
            "时间暂停",
            "手写信",
            "离别",
            "疗愈"
        ]
    },
    {
        "title": "小马鞭",
        "url": "movie-1025.html",
        "cover": "./125.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,儿童,运动",
        "type": "电影",
        "tags": [
            "成长",
            "骑马",
            "乡村少年"
        ]
    },
    {
        "title": "失眠症",
        "url": "movie-1026.html",
        "cover": "./126.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "悬疑,心理",
        "type": "电影",
        "tags": [
            "无眠",
            "幻觉",
            "都市传说",
            "便利店"
        ]
    },
    {
        "title": "武侠七公主",
        "url": "movie-1027.html",
        "cover": "./127.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "喜剧,动作,古装",
        "type": "电影",
        "tags": [
            "女侠",
            "公主",
            "联盟",
            "夺宝",
            "反套路"
        ]
    },
    {
        "title": "杀诫",
        "url": "movie-1028.html",
        "cover": "./128.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "惊悚/悬疑/犯罪",
        "type": "电影",
        "tags": [
            "杀手",
            "宗教",
            "十诫",
            "连环杀人",
            "反转"
        ]
    },
    {
        "title": "鬼影特攻:以暴制暴",
        "url": "movie-1029.html",
        "cover": "./129.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作,犯罪",
        "type": "电影",
        "tags": [
            "特工",
            "黑吃黑",
            "复仇",
            "小队作战",
            "高燃"
        ]
    },
    {
        "title": "冰河世纪:巨蛋恶作剧",
        "url": "movie-1030.html",
        "cover": "./130.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画,喜剧,冒险",
        "type": "电影",
        "tags": [
            "史前",
            "搞笑",
            "合家欢",
            "寻宝"
        ]
    },
    {
        "title": "小镇警官",
        "url": "movie-1031.html",
        "cover": "./131.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "刑侦/剧情",
        "type": "电视剧",
        "tags": [
            "悬疑",
            "基层",
            "人性",
            "写实"
        ]
    },
    {
        "title": "勇士斗恺撒",
        "url": "movie-1032.html",
        "cover": "./132.jpg",
        "year": "2024",
        "region": "英国/意大利",
        "genre": "动作/历史",
        "type": "电影",
        "tags": [
            "古罗马",
            "角斗士",
            "史诗"
        ]
    },
    {
        "title": "大唐魔盗团",
        "url": "movie-1033.html",
        "cover": "./133.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "奇幻/动作/喜剧",
        "type": "电影",
        "tags": [
            "唐朝",
            "盗贼",
            "幻术",
            "夺宝",
            "组团"
        ]
    },
    {
        "title": "有兽焉",
        "url": "movie-1034.html",
        "cover": "./134.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "动画,奇幻,喜剧",
        "type": "剧集",
        "tags": [
            "神话",
            "治愈",
            "萌宠"
        ]
    },
    {
        "title": "飞驰人生",
        "url": "movie-1035.html",
        "cover": "./135.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "喜剧,运动",
        "type": "电影",
        "tags": [
            "赛车",
            "中年危机",
            "韩寒",
            "励志"
        ]
    },
    {
        "title": "米加门顿",
        "url": "movie-1036.html",
        "cover": "./136.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "科幻/悬疑/密室推理",
        "type": "剧集",
        "tags": [
            "超能力公寓",
            "集体失忆",
            "数字诅咒",
            "智斗"
        ]
    },
    {
        "title": "好景在望",
        "url": "movie-1037.html",
        "cover": "./137.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "励志/家庭",
        "type": "电影",
        "tags": [
            "自闭症",
            "园艺",
            "父子情",
            "治愈"
        ]
    },
    {
        "title": "爱是一只猫",
        "url": "movie-1038.html",
        "cover": "./138.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "爱情/奇幻",
        "type": "电影",
        "tags": [
            "超现实",
            "巴黎",
            "孤独灵魂",
            "治愈系"
        ]
    },
    {
        "title": "婚礼大联蒙",
        "url": "movie-1039.html",
        "cover": "./139.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "喜剧,爱情",
        "type": "电影",
        "tags": [
            "婚礼",
            "连环误会",
            "闹剧"
        ]
    },
    {
        "title": "开罗谍影",
        "url": "movie-1040.html",
        "cover": "./140.jpg",
        "year": "1953",
        "region": "英国/埃及",
        "genre": "惊悚,战争",
        "type": "电影",
        "tags": [
            "二战",
            "北非谍战",
            "黑白经典"
        ]
    },
    {
        "title": "我的疯狂书迷",
        "url": "movie-1041.html",
        "cover": "./141.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "惊悚悬疑",
        "type": "电影",
        "tags": [
            "病娇",
            "作家",
            "私生饭",
            "心理战"
        ]
    },
    {
        "title": "武逆第三季",
        "url": "movie-1042.html",
        "cover": "./142.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "动画/奇幻/热血",
        "type": "剧集",
        "tags": [
            "修仙",
            "逆袭",
            "法相天地",
            "大结局"
        ]
    },
    {
        "title": "黑板",
        "url": "movie-1043.html",
        "cover": "./143.jpg",
        "year": "2024",
        "region": "伊朗/法国",
        "genre": "剧情/战争",
        "type": "电影",
        "tags": [
            "教育",
            "战争与儿童",
            "诗意现实主义",
            "边境",
            "希望"
        ]
    },
    {
        "title": "城市与城市",
        "url": "movie-1044.html",
        "cover": "./144.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "悬疑,犯罪,科幻",
        "type": "剧集",
        "tags": [
            "平行空间",
            "政治惊悚",
            "认知渗透"
        ]
    },
    {
        "title": "惊喜来敲门",
        "url": "movie-1045.html",
        "cover": "./145.jpg",
        "year": "2018",
        "region": "英国",
        "genre": "喜剧,剧情",
        "type": "电影",
        "tags": [
            "圣诞电影",
            "邻里关系",
            "中年危机",
            "温情喜剧"
        ]
    },
    {
        "title": "小狗当家",
        "url": "movie-1046.html",
        "cover": "./146.jpg",
        "year": "2024",
        "region": "美国/加拿大",
        "genre": "喜剧/家庭/冒险",
        "type": "电影",
        "tags": [
            "萌宠",
            "智斗笨贼",
            "搞笑",
            "废墟",
            "忠诚"
        ]
    },
    {
        "title": "押绘与旅行的男人",
        "url": "movie-1047.html",
        "cover": "./147.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "治愈",
            "公路",
            "艺术",
            "人生"
        ]
    },
    {
        "title": "异水",
        "url": "movie-1048.html",
        "cover": "./148.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "科幻/悬疑",
        "type": "电影",
        "tags": [
            "水体",
            "复制人",
            "日式科幻",
            "心理惊悚",
            "环境"
        ]
    },
    {
        "title": "丝黛芬妮",
        "url": "movie-1049.html",
        "cover": "./149.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "悬疑,惊悚",
        "type": "电影",
        "tags": [
            "失踪",
            "记忆碎片",
            "心理博弈"
        ]
    },
    {
        "title": "流金故梦",
        "url": "movie-1050.html",
        "cover": "./150.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "年代/爱情/商战",
        "type": "电视剧",
        "tags": [
            "民国",
            "上海滩",
            "旗袍",
            "复仇千金",
            "股票大战"
        ]
    },
    {
        "title": "围困城堡",
        "url": "movie-1051.html",
        "cover": "./1.jpg",
        "year": "2010",
        "region": "法国",
        "genre": "战争,剧情",
        "type": "电影",
        "tags": [
            "中世纪",
            "攻城战",
            "骑士"
        ]
    },
    {
        "title": "兰梦九月",
        "url": "movie-1052.html",
        "cover": "./2.jpg",
        "year": "2026",
        "region": "泰国",
        "genre": "爱情",
        "type": "剧集",
        "tags": [
            "奇幻",
            "百合",
            "轮回",
            "催泪"
        ]
    },
    {
        "title": "满月疑云",
        "url": "movie-1053.html",
        "cover": "./3.jpg",
        "year": "1999",
        "region": "日本",
        "genre": "悬疑/犯罪/惊悚",
        "type": "电影",
        "tags": [
            "连环杀人",
            "月相",
            "心理战",
            "刑警"
        ]
    },
    {
        "title": "酒鬼奶奶",
        "url": "movie-1054.html",
        "cover": "./4.jpg",
        "year": "2022",
        "region": "澳大利亚",
        "genre": "剧情/家庭/喜剧",
        "type": "电影",
        "tags": [
            "亲情",
            "酗酒",
            "和解",
            "黑色幽默"
        ]
    },
    {
        "title": "八角亭谜雾",
        "url": "movie-1055.html",
        "cover": "./5.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "悬疑、犯罪、家庭",
        "type": "剧集",
        "tags": [
            "江南水乡",
            "家庭伦理",
            "连环杀人",
            "记忆",
            "心魔"
        ]
    },
    {
        "title": "都铎王朝第四季",
        "url": "movie-1056.html",
        "cover": "./6.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "剧情,历史,传记",
        "type": "电视剧",
        "tags": [
            "宫廷",
            "权力游戏",
            "宗教改革",
            "悲剧"
        ]
    },
    {
        "title": "我们这一天第二季",
        "url": "movie-1057.html",
        "cover": "./7.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/家庭/喜剧",
        "type": "剧集",
        "tags": [
            "情感",
            "家庭",
            "治愈",
            "时间线",
            "催泪"
        ]
    },
    {
        "title": "冒险三人组",
        "url": "movie-1058.html",
        "cover": "./8.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "冒险/家庭/喜剧",
        "type": "电影",
        "tags": [
            "寻宝",
            "青少年",
            "搞笑",
            "成长"
        ]
    },
    {
        "title": "高卢英雄救公主",
        "url": "movie-1059.html",
        "cover": "./9.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "喜剧,冒险,动作",
        "type": "电影",
        "tags": [
            "欧洲漫画改编",
            "恶搞历史",
            "凯撒",
            "魔药",
            "蠢萌英雄"
        ]
    },
    {
        "title": "我们的快乐时光",
        "url": "movie-1060.html",
        "cover": "./10.jpg",
        "year": "2017",
        "region": "韩国",
        "genre": "剧情",
        "type": "剧集",
        "tags": [
            "监狱",
            "探监",
            "治愈",
            "反差萌",
            "短篇"
        ]
    },
    {
        "title": "见龙卸甲",
        "url": "movie-1061.html",
        "cover": "./11.jpg",
        "year": "2024",
        "region": "中国香港/中国大陆",
        "genre": "动作/古装",
        "type": "电影",
        "tags": [
            "三国",
            "机甲",
            "赵子龙",
            "架空历史",
            "蒸汽朋克"
        ]
    },
    {
        "title": "爱后余生",
        "url": "movie-1062.html",
        "cover": "./12.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "爱情剧情",
        "type": "电影",
        "tags": [
            "失忆",
            "救赎",
            "多重人格",
            "文艺"
        ]
    },
    {
        "title": "合唱团指挥(短片)",
        "url": "movie-1063.html",
        "cover": "./13.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情,音乐,家庭",
        "type": "短片",
        "tags": [
            "阿尔茨海默",
            "父子",
            "合唱",
            "催泪",
            "获奖短片"
        ]
    },
    {
        "title": "心链",
        "url": "movie-1064.html",
        "cover": "./14.jpg",
        "year": "2027",
        "region": "韩国",
        "genre": "爱情/奇幻/悬疑",
        "type": "剧集",
        "tags": [
            "灵魂伴侣",
            "穿越",
            "虐恋",
            "医疗"
        ]
    },
    {
        "title": "开心勿语",
        "url": "movie-1065.html",
        "cover": "./15.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "喜剧/奇幻/家庭",
        "type": "剧集",
        "tags": [
            "诅咒",
            "反讽",
            "现代寓言",
            "和解"
        ]
    },
    {
        "title": "哦我天,吸血鬼",
        "url": "movie-1066.html",
        "cover": "./16.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,恐怖,青春",
        "type": "剧集",
        "tags": [
            "吸血鬼",
            "高中",
            "沙雕",
            "反转"
        ]
    },
    {
        "title": "革命军中马前卒",
        "url": "movie-1067.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史,战争",
        "type": "电影",
        "tags": [
            "辛亥革命",
            "小人物",
            "袍哥",
            "热血"
        ]
    },
    {
        "title": "黑白小姐第二季",
        "url": "movie-1068.html",
        "cover": "./18.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "奇幻/黑色幽默",
        "type": "动画剧集",
        "tags": [
            "黑白",
            "治愈",
            "单元剧",
            "哲学",
            "脑洞"
        ]
    },
    {
        "title": "无尽的战壕",
        "url": "movie-1069.html",
        "cover": "./19.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "剧情/历史/惊悚",
        "type": "电影",
        "tags": [
            "洞穴",
            "心理折磨",
            "内战",
            "藏匿"
        ]
    },
    {
        "title": "拯救大兵瑞恩",
        "url": "movie-1070.html",
        "cover": "./20.jpg",
        "year": "1998",
        "region": "美国",
        "genre": "战争,剧情,历史",
        "type": "电影",
        "tags": [
            "二战",
            "诺曼底",
            "斯皮尔伯格",
            "人性"
        ]
    },
    {
        "title": "飞上去,企鹅",
        "url": "movie-1071.html",
        "cover": "./21.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动画,奇幻,治愈",
        "type": "电影",
        "tags": [
            "梦想",
            "异世界",
            "友情",
            "催泪",
            "手绘风"
        ]
    },
    {
        "title": "山羊",
        "url": "movie-1072.html",
        "cover": "./22.jpg",
        "year": "2022",
        "region": "挪威",
        "genre": "恐怖,民俗",
        "type": "电影",
        "tags": [
            "北欧民俗",
            "邪教",
            "心理恐怖",
            "寂静",
            "羊"
        ]
    },
    {
        "title": "魔王2099",
        "url": "movie-1073.html",
        "cover": "./23.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/赛博朋克/奇幻",
        "type": "动画剧集",
        "tags": [
            "未来都市",
            "魔王转生",
            "高科技低生活",
            "战斗"
        ]
    },
    {
        "title": "帕姆与汤米",
        "url": "movie-1074.html",
        "cover": "./24.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "传记、剧情、历史",
        "type": "剧集",
        "tags": [
            "真实事件",
            "录像带",
            "女性视角",
            "时代悲剧"
        ]
    },
    {
        "title": "玉女芳心",
        "url": "movie-1075.html",
        "cover": "./25.jpg",
        "year": "2025",
        "region": "香港",
        "genre": "爱情喜剧",
        "type": "电影",
        "tags": [
            "玉女掌门",
            "狗仔队",
            "假戏真做"
        ]
    },
    {
        "title": "芝加哥警署第九季",
        "url": "movie-1076.html",
        "cover": "./26.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "犯罪,剧情",
        "type": "电视剧",
        "tags": [
            "警匪",
            "单元剧",
            "情报组",
            "道德困境"
        ]
    },
    {
        "title": "爆丸小子",
        "url": "movie-1077.html",
        "cover": "./27.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "动画热血",
        "type": "剧集",
        "tags": [
            "竞技",
            "机甲",
            "友情",
            "少年成长"
        ]
    },
    {
        "title": "新恋爱世纪",
        "url": "movie-1078.html",
        "cover": "./28.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "怀旧爱情",
            "千禧年",
            "错过与重逢",
            "港风",
            "成年人的爱情"
        ]
    },
    {
        "title": "地下终劫站",
        "url": "movie-1079.html",
        "cover": "./29.jpg",
        "year": "2016",
        "region": "西班牙",
        "genre": "恐怖/科幻",
        "type": "电影",
        "tags": [
            "地铁",
            "末日",
            "怪物",
            "封闭空间"
        ]
    },
    {
        "title": "芒果新星班之了不起的艺能",
        "url": "movie-1080.html",
        "cover": "./30.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "真人秀,选秀",
        "type": "综艺",
        "tags": [
            "偶像",
            "练习生",
            "竞技",
            "青春"
        ]
    },
    {
        "title": "断魂小丑3",
        "url": "movie-1081.html",
        "cover": "./31.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "恐怖/血腥",
        "type": "电影",
        "tags": [
            "万圣节",
            "小丑",
            "杀戮",
            "复仇",
            "实体特效"
        ]
    },
    {
        "title": "晴天小猪",
        "url": "movie-1082.html",
        "cover": "./32.jpg",
        "year": "1998",
        "region": "日本",
        "genre": "奇幻,搞笑,日常",
        "type": "动画",
        "tags": [
            "童年",
            "日记本",
            "愿望",
            "粉红小猪"
        ]
    },
    {
        "title": "空谷兰",
        "url": "movie-1083.html",
        "cover": "./33.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "爱情,文艺,历史",
        "type": "电影",
        "tags": [
            "民国",
            "昆曲",
            "战火",
            "戏班",
            "乱世佳人"
        ]
    },
    {
        "title": "摩登衙门",
        "url": "movie-1084.html",
        "cover": "./34.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "未来警匪",
            "AI执法",
            "港味"
        ]
    },
    {
        "title": "声临其境 宝藏配音间",
        "url": "movie-1085.html",
        "cover": "./35.jpg",
        "year": "2023",
        "region": "中国",
        "genre": "真人秀,声音",
        "type": "综艺",
        "tags": [
            "配音",
            "竞演",
            "宝藏选手",
            "声音演技"
        ]
    },
    {
        "title": "逐梦雨人",
        "url": "movie-1086.html",
        "cover": "./36.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "犯罪剧情",
        "type": "电影",
        "tags": [
            "雨夜",
            "连环杀手",
            "精神分裂",
            "模仿犯",
            "暴力美学"
        ]
    },
    {
        "title": "忠烈杨家将",
        "url": "movie-1087.html",
        "cover": "./37.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "古装,战争,动作,历史",
        "type": "电影",
        "tags": [
            "满门忠烈",
            "冷兵器",
            "悲壮",
            "史诗",
            "硬核动作"
        ]
    },
    {
        "title": "小孩都是魔鬼吧",
        "url": "movie-1088.html",
        "cover": "./38.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖,喜剧,悬疑",
        "type": "电视剧",
        "tags": [
            "熊孩子",
            "反转",
            "黑色幽默",
            "小镇疑云",
            "邪典"
        ]
    },
    {
        "title": "正义联盟大战少年悍将",
        "url": "movie-1089.html",
        "cover": "./39.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,科幻,超级英雄",
        "type": "电影,动画",
        "tags": [
            "DC宇宙",
            "跨代合作",
            "意识控制"
        ]
    },
    {
        "title": "第八页",
        "url": "movie-1090.html",
        "cover": "./40.jpg",
        "year": "2011",
        "region": "英国",
        "genre": "剧情,惊悚,政治",
        "type": "电影",
        "tags": [
            "军情五处",
            "退休间谍",
            "档案",
            "阴谋",
            "现实主义"
        ]
    },
    {
        "title": "太空行者",
        "url": "movie-1091.html",
        "cover": "./41.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "科幻/冒险",
        "type": "电影",
        "tags": [
            "太空救援",
            "硬科幻",
            "父子情"
        ]
    },
    {
        "title": "1945",
        "url": "movie-1092.html",
        "cover": "./42.jpg",
        "year": "2025",
        "region": "匈牙利",
        "genre": "剧情,历史",
        "type": "电影",
        "tags": [
            "二战",
            "战后",
            "村庄",
            "沉默的暴力"
        ]
    },
    {
        "title": "巴拿马",
        "url": "movie-1093.html",
        "cover": "./43.jpg",
        "year": "2022",
        "region": "美国/德国",
        "genre": "动作,惊悚",
        "type": "电影",
        "tags": [
            "雇佣兵",
            "政变",
            "丛林"
        ]
    },
    {
        "title": "勇冠三军",
        "url": "movie-1094.html",
        "cover": "./44.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "战争,历史",
        "type": "电视剧",
        "tags": [
            "古代战争",
            "将军成长",
            "热血",
            "权谋"
        ]
    },
    {
        "title": "幸福房屋事件簿",
        "url": "movie-1095.html",
        "cover": "./45.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "悬疑/温情",
        "type": "电视剧",
        "tags": [
            "凶宅",
            "中介",
            "人性"
        ]
    },
    {
        "title": "神秘的旅伴",
        "url": "movie-1096.html",
        "cover": "./46.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑公路",
        "type": "电影",
        "tags": [
            "火车",
            "卧铺车厢",
            "连环谜团"
        ]
    },
    {
        "title": "天皇",
        "url": "movie-1097.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "日本、美国",
        "genre": "历史、战争、剧情",
        "type": "剧集",
        "tags": [
            "二战",
            "麦克阿瑟",
            "昭和天皇",
            "人性抉择"
        ]
    },
    {
        "title": "一夜恩情粤语",
        "url": "movie-1098.html",
        "cover": "./48.jpg",
        "year": "1995",
        "region": "中国香港",
        "genre": "剧情,爱情",
        "type": "电影",
        "tags": [
            "粤语",
            "一夜情",
            "命运"
        ]
    },
    {
        "title": "凶影",
        "url": "movie-1099.html",
        "cover": "./49.jpg",
        "year": "1998",
        "region": "香港",
        "genre": "犯罪,悬疑,动作",
        "type": "电影",
        "tags": [
            "连环杀手",
            "刑警",
            "雨夜",
            "双重人格",
            "港式暴力美学"
        ]
    },
    {
        "title": "恐怖巨兽",
        "url": "movie-1100.html",
        "cover": "./50.jpg",
        "year": "2025",
        "region": "日本/美国",
        "genre": "科幻怪兽",
        "type": "电影",
        "tags": [
            "巨物恐惧",
            "灾难",
            "生态恐怖",
            "特效大片",
            "核辐射"
        ]
    },
    {
        "title": "遇见贵人",
        "url": "movie-1101.html",
        "cover": "./51.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧",
        "type": "电影",
        "tags": [
            "都市",
            "阶层",
            "奇遇",
            "温情"
        ]
    },
    {
        "title": "即刻救援3",
        "url": "movie-1102.html",
        "cover": "./52.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/惊悚",
        "type": "电影",
        "tags": [
            "特工",
            "营救",
            "硬汉",
            "复仇"
        ]
    },
    {
        "title": "妈妈你真棒",
        "url": "movie-1103.html",
        "cover": "./53.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/喜剧",
        "type": "电影",
        "tags": [
            "母女",
            "交换身体",
            "职场",
            "校园"
        ]
    },
    {
        "title": "星愿国语",
        "url": "movie-1104.html",
        "cover": "./54.jpg",
        "year": "1999",
        "region": "香港/台湾",
        "genre": "爱情/奇幻/悲剧",
        "type": "电影",
        "tags": [
            "流星",
            "失明",
            "洋葱头",
            "配音"
        ]
    },
    {
        "title": "出册",
        "url": "movie-1105.html",
        "cover": "./55.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情/犯罪",
        "type": "剧集",
        "tags": [
            "出狱",
            "重生",
            "社会边缘"
        ]
    },
    {
        "title": "良缘再缔",
        "url": "movie-1106.html",
        "cover": "./56.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "爱情/喜剧",
        "type": "电影",
        "tags": [
            "再婚",
            "前任",
            "误会",
            "中年浪漫",
            "港式幽默"
        ]
    },
    {
        "title": "大不列颠医院",
        "url": "movie-1107.html",
        "cover": "./57.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "黑色喜剧",
        "type": "电影",
        "tags": [
            "国民保健体系",
            "官僚主义",
            "讽刺",
            "荒诞",
            "群像"
        ]
    },
    {
        "title": "暗房秘密",
        "url": "movie-1108.html",
        "cover": "./58.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,犯罪,心理",
        "type": "剧集",
        "tags": [
            "胶片",
            "连环杀手",
            "双重人格",
            "本格推理"
        ]
    },
    {
        "title": "卡拉瓦乔之影",
        "url": "movie-1109.html",
        "cover": "./59.jpg",
        "year": "2022",
        "region": "意大利",
        "genre": "传记/悬疑/历史",
        "type": "电影",
        "tags": [
            "卡拉瓦乔",
            "艺术史",
            "文艺复兴",
            "同性恋",
            "逃亡"
        ]
    },
    {
        "title": "足球梦",
        "url": "movie-1110.html",
        "cover": "./60.jpg",
        "year": "2025",
        "region": "巴西/中国大陆",
        "genre": "运动,剧情",
        "type": "电影",
        "tags": [
            "足球",
            "贫民窟",
            "梦想",
            "师徒",
            "励志"
        ]
    },
    {
        "title": "18岁的盛夏告白",
        "url": "movie-1111.html",
        "cover": "./61.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "爱情/青春/校园",
        "type": "电影",
        "tags": [
            "夏日",
            "双向暗恋",
            "遗憾美学",
            "烟花",
            "纯爱"
        ]
    },
    {
        "title": "打开心世界",
        "url": "movie-1112.html",
        "cover": "./62.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "书信",
            "田园",
            "女性凝视",
            "治愈",
            "年代"
        ]
    },
    {
        "title": "飞奔的高卓人",
        "url": "movie-1113.html",
        "cover": "./63.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情/西部/冒险",
        "type": "电影",
        "tags": [
            "草原",
            "赛马",
            "父子",
            "成长",
            "非遗"
        ]
    },
    {
        "title": "老鼠危机",
        "url": "movie-1114.html",
        "cover": "./64.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "科幻,惊悚,灾难",
        "type": "电影",
        "tags": [
            "变异生物",
            "末世求生",
            "幽闭恐惧",
            "实验室泄漏",
            "鼠群"
        ]
    },
    {
        "title": "七鹰大厦宝藏",
        "url": "movie-1115.html",
        "cover": "./65.jpg",
        "year": "1991",
        "region": "中国香港",
        "genre": "动作/冒险",
        "type": "电视剧",
        "tags": [
            "港剧",
            "寻宝",
            "兄弟情",
            "黑帮"
        ]
    },
    {
        "title": "永葆青春",
        "url": "movie-1116.html",
        "cover": "./66.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "科幻,惊悚",
        "type": "剧集",
        "tags": [
            "长生不老",
            "细胞再生",
            "社会阶层",
            "伦理困境"
        ]
    },
    {
        "title": "兰博基尼:传奇",
        "url": "movie-1117.html",
        "cover": "./67.jpg",
        "year": "2025",
        "region": "意大利/美国",
        "genre": "传记/剧情",
        "type": "电影",
        "tags": [
            "兰博基尼",
            "费鲁吉欧",
            "跑车",
            "创业史",
            "机械美学"
        ]
    },
    {
        "title": "致命的玛丽亚",
        "url": "movie-1118.html",
        "cover": "./68.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "惊悚恐怖",
        "type": "电影",
        "tags": [
            "诅咒",
            "娃娃",
            "宗教",
            "反转"
        ]
    },
    {
        "title": "火车三段程",
        "url": "movie-1119.html",
        "cover": "./69.jpg",
        "year": "2005",
        "region": "英国/德国",
        "genre": "剧情,爱情",
        "type": "电影",
        "tags": [
            "火车",
            "偶遇",
            "人生片段",
            "欧洲"
        ]
    },
    {
        "title": "嫁我吧,哥们",
        "url": "movie-1120.html",
        "cover": "./70.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "喜剧/爱情/同性",
        "type": "电影",
        "tags": [
            "假结婚",
            "移民",
            "损友",
            "乌龙"
        ]
    },
    {
        "title": "新精神",
        "url": "movie-1121.html",
        "cover": "./71.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "脑机接口",
            "意识上传",
            "数字永生",
            "伦理困境",
            "反乌托邦"
        ]
    },
    {
        "title": "我的裘可妹妹",
        "url": "movie-1122.html",
        "cover": "./72.jpg",
        "year": "2006",
        "region": "日本",
        "genre": "喜剧,日常,奇幻",
        "type": "TV动画",
        "tags": [
            "兄妹",
            "同居",
            "神明",
            "治愈"
        ]
    },
    {
        "title": "再见我的新郎",
        "url": "movie-1123.html",
        "cover": "./73.jpg",
        "year": "2023",
        "region": "泰国",
        "genre": "爱情、同性",
        "type": "电影",
        "tags": [
            "催泪",
            "绝症",
            "治愈系"
        ]
    },
    {
        "title": "魔翼杀手2",
        "url": "movie-1124.html",
        "cover": "./74.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "奇幻",
        "type": "电影",
        "tags": [
            "天使",
            "恶魔",
            "动作",
            "末世",
            "宗教"
        ]
    },
    {
        "title": "真命天子国语",
        "url": "movie-1125.html",
        "cover": "./75.jpg",
        "year": "1998",
        "region": "中国台湾",
        "genre": "爱情,喜剧",
        "type": "电视剧",
        "tags": [
            "偶像剧",
            "配音版",
            "错位恋爱",
            "复古"
        ]
    },
    {
        "title": "飞车女童党",
        "url": "movie-1126.html",
        "cover": "./76.jpg",
        "year": "1993",
        "region": "中国香港",
        "genre": "动作,剧情,青春",
        "type": "电影",
        "tags": [
            "飙车",
            "女童党",
            "黑帮",
            "义气",
            "江湖"
        ]
    },
    {
        "title": "油炸绿蕃茄",
        "url": "movie-1127.html",
        "cover": "./77.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情,喜剧,同性",
        "type": "电影",
        "tags": [
            "公路电影",
            "美食",
            "忘年交"
        ]
    },
    {
        "title": "卢卡斯兄弟搬家公司 第一季",
        "url": "movie-1128.html",
        "cover": "./78.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,生活",
        "type": "剧集",
        "tags": [
            "兄弟",
            "搬家公司",
            "单元剧"
        ]
    },
    {
        "title": "1966年",
        "url": "movie-1129.html",
        "cover": "./79.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "历史,剧情",
        "type": "电影",
        "tags": [
            "时代变迁",
            "家族",
            "秘密",
            "文革",
            "离散"
        ]
    },
    {
        "title": "喀喀喀喀",
        "url": "movie-1130.html",
        "cover": "./80.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "悬疑犯罪",
        "type": "剧集",
        "tags": [
            "连环杀人",
            "电台",
            "直播",
            "心理战"
        ]
    },
    {
        "title": "火线出击下",
        "url": "movie-1131.html",
        "cover": "./81.jpg",
        "year": "2024",
        "region": "中国内地",
        "genre": "动作,战争",
        "type": "电影",
        "tags": [
            "缉毒",
            "东南亚",
            "兄弟情",
            "牺牲"
        ]
    },
    {
        "title": "纳米学院",
        "url": "movie-1132.html",
        "cover": "./82.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻/悬疑",
        "type": "剧集",
        "tags": [
            "纳米科技",
            "记忆植入",
            "精英教育",
            "集体失忆",
            "真相"
        ]
    },
    {
        "title": "猛鬼街",
        "url": "movie-1133.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖",
        "type": "电影",
        "tags": [
            "梦魇",
            "意识入侵",
            "青少年",
            "超自然",
            "重启"
        ]
    },
    {
        "title": "太乙仙魔录第四季",
        "url": "movie-1134.html",
        "cover": "./84.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "动画/奇幻",
        "type": "剧集",
        "tags": [
            "修仙",
            "国漫",
            "玄门",
            "宿命"
        ]
    },
    {
        "title": "里亚德录大地",
        "url": "movie-1135.html",
        "cover": "./85.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "动画,奇幻,冒险",
        "type": "剧集",
        "tags": [
            "异世界",
            "网游",
            "开挂女主"
        ]
    },
    {
        "title": "七擒七纵七色狼国语",
        "url": "movie-1136.html",
        "cover": "./86.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "喜剧情色",
        "type": "电影",
        "tags": [
            "搞笑",
            "情色",
            "翻拍",
            "荒诞"
        ]
    },
    {
        "title": "饮料杯历险记第十一季",
        "url": "movie-1137.html",
        "cover": "./87.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,奇幻,冒险",
        "type": "动画剧集",
        "tags": [
            "脑洞大开",
            "成人动画",
            "跨次元",
            "恶搞文化"
        ]
    },
    {
        "title": "爱情白皮书1993",
        "url": "movie-1138.html",
        "cover": "./88.jpg",
        "year": "2025",
        "region": "台湾",
        "genre": "爱情青春",
        "type": "剧集",
        "tags": [
            "校园",
            "纯爱",
            "怀旧"
        ]
    },
    {
        "title": "无声的呐喊",
        "url": "movie-1139.html",
        "cover": "./89.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/悬疑",
        "type": "电影",
        "tags": [
            "校园霸凌",
            "手语",
            "心理创伤",
            "反转"
        ]
    },
    {
        "title": "猛鬼差馆",
        "url": "movie-1140.html",
        "cover": "./90.jpg",
        "year": "1989",
        "region": "中国香港",
        "genre": "喜剧,恐怖,动作",
        "type": "电影",
        "tags": [
            "警匪",
            "僵尸",
            "风水",
            "枪战",
            "搞笑"
        ]
    },
    {
        "title": "连锁大阴谋",
        "url": "movie-1141.html",
        "cover": "./91.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "惊悚",
        "type": "剧集",
        "tags": [
            "犯罪",
            "悬疑",
            "都市传说",
            "暗网"
        ]
    },
    {
        "title": "风中划船",
        "url": "movie-1142.html",
        "cover": "./92.jpg",
        "year": "2024",
        "region": "中国大陆/台湾",
        "genre": "剧情/家庭/运动",
        "type": "电影",
        "tags": [
            "帆船",
            "自闭症",
            "父子关系",
            "治愈",
            "大自然"
        ]
    },
    {
        "title": "超级小郎中之降龙戒",
        "url": "movie-1143.html",
        "cover": "./93.jpg",
        "year": "2016",
        "region": "中国大陆",
        "genre": "奇幻",
        "type": "电影",
        "tags": [
            "中医",
            "降妖",
            "古装动作"
        ]
    },
    {
        "title": "爱哭的孩子",
        "url": "movie-1144.html",
        "cover": "./94.jpg",
        "year": "2007",
        "region": "法国",
        "genre": "剧情,儿童,悬疑",
        "type": "电影",
        "tags": [
            "乡村",
            "秘密",
            "童年阴影",
            "鬼魂"
        ]
    },
    {
        "title": "黑色琴弦",
        "url": "movie-1145.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "恐怖,音乐",
        "type": "电影",
        "tags": [
            "大提琴",
            "诅咒",
            "乡村",
            "仪式"
        ]
    },
    {
        "title": "铁线虫",
        "url": "movie-1146.html",
        "cover": "./96.jpg",
        "year": "2012",
        "region": "韩国",
        "genre": "灾难/惊悚/科幻",
        "type": "电影",
        "tags": [
            "寄生虫",
            "变异",
            "传染",
            "末日",
            "人性"
        ]
    },
    {
        "title": "战地记者",
        "url": "movie-1147.html",
        "cover": "./97.jpg",
        "year": "2020",
        "region": "美国/英国",
        "genre": "剧情/战争/传记",
        "type": "电影",
        "tags": [
            "叙利亚",
            "女性记者",
            "真实改编",
            "战争摄影",
            "勇气"
        ]
    },
    {
        "title": "爵士风情",
        "url": "movie-1148.html",
        "cover": "./98.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "音乐,爱情,剧情",
        "type": "电影",
        "tags": [
            "爵士乐",
            "复古",
            "种族",
            "梦想"
        ]
    },
    {
        "title": "金蚕丝雨",
        "url": "movie-1149.html",
        "cover": "./99.jpg",
        "year": "2024",
        "region": "中国内地",
        "genre": "古装武侠,奇幻",
        "type": "剧集",
        "tags": [
            "悬疑",
            "江湖",
            "复仇",
            "宿命"
        ]
    },
    {
        "title": "蝙蝠侠:死胡同",
        "url": "movie-1150.html",
        "cover": "./100.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/犯罪/心理惊悚",
        "type": "电影",
        "tags": [
            "黑暗骑士",
            "小丑终局",
            "哥谭下水道",
            "一镜到底尝试"
        ]
    },
    {
        "title": "尖刀班",
        "url": "movie-1151.html",
        "cover": "./101.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "战争/历史",
        "type": "剧集",
        "tags": [
            "抗战",
            "特种作战",
            "小分队",
            "兄弟情",
            "写实"
        ]
    },
    {
        "title": "新干线惊爆倒数",
        "url": "movie-1152.html",
        "cover": "./102.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动作,惊悚,灾难",
        "type": "电影",
        "tags": [
            "列车危机",
            "限时救援",
            "高科技犯罪",
            "群像戏",
            "物理逻辑"
        ]
    },
    {
        "title": "蝎子之歌",
        "url": "movie-1153.html",
        "cover": "./103.jpg",
        "year": "2024",
        "region": "墨西哥",
        "genre": "犯罪,惊悚,剧情",
        "type": "剧集",
        "tags": [
            "毒枭",
            "女性力量",
            "复仇",
            "家族恩怨"
        ]
    },
    {
        "title": "起立,老师好!",
        "url": "movie-1154.html",
        "cover": "./104.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/喜剧",
        "type": "电影",
        "tags": [
            "教育",
            "逆袭",
            "师生情",
            "燃"
        ]
    },
    {
        "title": "无药可救",
        "url": "movie-1155.html",
        "cover": "./105.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻,悬疑,惊悚",
        "type": "电影",
        "tags": [
            "病毒",
            "末日",
            "道德困境",
            "人性",
            "反转"
        ]
    },
    {
        "title": "我的宝贝2024",
        "url": "movie-1156.html",
        "cover": "./106.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情犯罪",
        "type": "电影",
        "tags": [
            "打拐",
            "亲情",
            "公路",
            "催泪"
        ]
    },
    {
        "title": "灵界转生",
        "url": "movie-1157.html",
        "cover": "./107.jpg",
        "year": "2009",
        "region": "香港",
        "genre": "奇幻/惊悚",
        "type": "电影",
        "tags": [
            "转世",
            "灵异",
            "因果",
            "轮回"
        ]
    },
    {
        "title": "流氓经纪",
        "url": "movie-1158.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "犯罪喜剧",
        "type": "电影",
        "tags": [
            "经纪人",
            "黑帮",
            "荒诞",
            "反套路"
        ]
    },
    {
        "title": "王爷你好贱 动态漫第一季",
        "url": "movie-1159.html",
        "cover": "./109.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,古装",
        "type": "动漫",
        "tags": [
            "搞笑",
            "穿越",
            "沙雕",
            "甜宠"
        ]
    },
    {
        "title": "我们俩的婚姻",
        "url": "movie-1160.html",
        "cover": "./110.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情,家庭,伦理",
        "type": "电视剧集",
        "tags": [
            "现实题材",
            "婚姻修罗场",
            "内心独白",
            "刺痛"
        ]
    },
    {
        "title": "萨达特",
        "url": "movie-1161.html",
        "cover": "./111.jpg",
        "year": "2023",
        "region": "埃及",
        "genre": "历史,传记,战争",
        "type": "电视剧",
        "tags": [
            "政治强人",
            "中东战争",
            "和平之路",
            "真实改编",
            "史诗感"
        ]
    },
    {
        "title": "有毒蜂蜜",
        "url": "movie-1162.html",
        "cover": "./112.jpg",
        "year": "2024",
        "region": "土耳其",
        "genre": "剧情/爱情/悬疑",
        "type": "电视剧",
        "tags": [
            "复仇",
            "豪门恩怨",
            "毒药"
        ]
    },
    {
        "title": "私家侦探",
        "url": "movie-1163.html",
        "cover": "./113.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "悬疑/推理",
        "type": "剧集",
        "tags": [
            "单元剧",
            "硬汉派",
            "昭和",
            "人情冷暖"
        ]
    },
    {
        "title": "慕尼黑",
        "url": "movie-1164.html",
        "cover": "./114.jpg",
        "year": "2025",
        "region": "德国",
        "genre": "历史,惊悚",
        "type": "剧集",
        "tags": [
            "二战",
            "间谍",
            "历史改编",
            "暗杀"
        ]
    },
    {
        "title": "辣姊妹",
        "url": "movie-1165.html",
        "cover": "./115.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情/女性/犯罪",
        "type": "剧集",
        "tags": [
            "拉丁裔",
            "黑帮家族",
            "姐妹情",
            "权力斗争"
        ]
    },
    {
        "title": "小狗波图之雪岭历险记",
        "url": "movie-1166.html",
        "cover": "./116.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "动画/冒险/家庭",
        "type": "电影",
        "tags": [
            "狗狗",
            "雪山",
            "救援",
            "感人",
            "动物友情"
        ]
    },
    {
        "title": "真爱未了情",
        "url": "movie-1167.html",
        "cover": "./117.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "剧情,爱情,奇幻",
        "type": "电影",
        "tags": [
            "绝症",
            "轮回",
            "誓言",
            "催泪",
            "韩式虐恋"
        ]
    },
    {
        "title": "邦蒂号之后",
        "url": "movie-1168.html",
        "cover": "./118.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "历史/冒险",
        "type": "剧集",
        "tags": [
            "航海",
            "殖民反思",
            "皮特凯恩群岛",
            "人性实验"
        ]
    },
    {
        "title": "纸屋悦子的青春",
        "url": "movie-1169.html",
        "cover": "./119.jpg",
        "year": "2006",
        "region": "日本",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "战后",
            "书信",
            "少女",
            "成长"
        ]
    },
    {
        "title": "女子监狱",
        "url": "movie-1170.html",
        "cover": "./120.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "犯罪/剧情",
        "type": "剧集",
        "tags": [
            "群像",
            "女性",
            "越狱",
            "复仇",
            "社会现实"
        ]
    },
    {
        "title": "树下惊魂",
        "url": "movie-1171.html",
        "cover": "./121.jpg",
        "year": "2026",
        "region": "泰国",
        "genre": "恐怖",
        "type": "电影",
        "tags": [
            "古曼童",
            "村庄",
            "诅咒"
        ]
    },
    {
        "title": "国际特攻战",
        "url": "movie-1172.html",
        "cover": "./122.jpg",
        "year": "2026",
        "region": "韩国/美国",
        "genre": "动作/谍战/喜剧",
        "type": "电影",
        "tags": [
            "韩式幽默",
            "全球取景",
            "团队作战",
            "高燃打斗"
        ]
    },
    {
        "title": "一年级生",
        "url": "movie-1173.html",
        "cover": "./123.jpg",
        "year": "2011",
        "region": "英国/肯尼亚",
        "genre": "剧情/传记/教育",
        "type": "电影",
        "tags": [
            "老年求学",
            "非洲",
            "殖民伤痕",
            "坚韧"
        ]
    },
    {
        "title": "今天在这里",
        "url": "movie-1174.html",
        "cover": "./124.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "平行宇宙",
            "选择题",
            "蝴蝶效应",
            "烧脑",
            "高概念"
        ]
    },
    {
        "title": "负重前行2023",
        "url": "movie-1175.html",
        "cover": "./125.jpg",
        "year": "2023",
        "region": "澳大利亚",
        "genre": "惊悚/剧情/丧尸",
        "type": "电影",
        "tags": [
            "丧尸末日",
            "父爱",
            "短片改编",
            "绝望"
        ]
    },
    {
        "title": "艾蜜丽的五件事",
        "url": "movie-1176.html",
        "cover": "./126.jpg",
        "year": "2018",
        "region": "中国台湾",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "治愈",
            "遗愿清单",
            "成长"
        ]
    },
    {
        "title": "特殊的日子",
        "url": "movie-1177.html",
        "cover": "./127.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情片",
        "type": "电影",
        "tags": [
            "纪念日",
            "秘密",
            "家庭"
        ]
    },
    {
        "title": "危险男女",
        "url": "movie-1178.html",
        "cover": "./128.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "特工",
            "假结婚",
            "夫妻诈骗",
            "爆笑"
        ]
    },
    {
        "title": "公羊2015",
        "url": "movie-1179.html",
        "cover": "./129.jpg",
        "year": "2015",
        "region": "冰岛",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "冰岛",
            "兄弟",
            "羊",
            "沉默",
            "和解"
        ]
    },
    {
        "title": "老千计状元才",
        "url": "movie-1180.html",
        "cover": "./130.jpg",
        "year": "1988",
        "region": "中国香港",
        "genre": "犯罪/喜剧",
        "type": "电影",
        "tags": [
            "赌片",
            "千术",
            "港式喜剧",
            "反套路"
        ]
    },
    {
        "title": "格莱普尼尔",
        "url": "movie-1181.html",
        "cover": "./131.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻,动作,悬疑",
        "type": "剧集",
        "tags": [
            "怪兽",
            "合体",
            "外星生物",
            "生存游戏"
        ]
    },
    {
        "title": "贝拉的秘密",
        "url": "movie-1182.html",
        "cover": "./132.jpg",
        "year": "2024",
        "region": "意大利",
        "genre": "喜剧,悬疑",
        "type": "电影",
        "tags": [
            "身份错位",
            "双胞胎",
            "庄园",
            "遗产",
            "幽默"
        ]
    },
    {
        "title": "厨子当官",
        "url": "movie-1183.html",
        "cover": "./133.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装喜剧",
        "type": "剧集",
        "tags": [
            "美食",
            "断案",
            "反腐"
        ]
    },
    {
        "title": "大梦西游",
        "url": "movie-1184.html",
        "cover": "./134.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "奇幻/冒险/悬疑",
        "type": "剧集",
        "tags": [
            "多重宇宙",
            "孙悟空",
            "醒来",
            "颠覆"
        ]
    },
    {
        "title": "皇家酒店谋杀案",
        "url": "movie-1185.html",
        "cover": "./135.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "悬疑,惊悚",
        "type": "电影",
        "tags": [
            "暴风雪山庄",
            "黑色电影",
            "怀旧"
        ]
    },
    {
        "title": "失格纹的最强贤者",
        "url": "movie-1186.html",
        "cover": "./136.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "奇幻/战斗",
        "type": "剧集",
        "tags": [
            "异世界",
            "龙傲天",
            "转生",
            "魔法学院",
            "热血"
        ]
    },
    {
        "title": "俏女复仇",
        "url": "movie-1187.html",
        "cover": "./137.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "校园霸凌",
            "降头术",
            "复仇女神",
            "高能反转"
        ]
    },
    {
        "title": "绿帽子",
        "url": "movie-1188.html",
        "cover": "./138.jpg",
        "year": "2004",
        "region": "中国大陆",
        "genre": "剧情/黑色幽默",
        "type": "电影",
        "tags": [
            "出轨",
            "兄弟反目",
            "极端抉择"
        ]
    },
    {
        "title": "大捕快粤语",
        "url": "movie-1189.html",
        "cover": "./139.jpg",
        "year": "1997",
        "region": "中国香港",
        "genre": "古装,悬疑,动作",
        "type": "电视剧",
        "tags": [
            "六扇门",
            "密案",
            "官场黑幕"
        ]
    },
    {
        "title": "末日孤舰第五季",
        "url": "movie-1190.html",
        "cover": "./140.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "灾难动作",
        "type": "剧集",
        "tags": [
            "丧尸",
            "海军",
            "政治阴谋",
            "终局之战"
        ]
    },
    {
        "title": "离婚好麻吉",
        "url": "movie-1191.html",
        "cover": "./141.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "喜剧,爱情",
        "type": "电视剧",
        "tags": [
            "离婚",
            "成年友谊",
            "重组家庭"
        ]
    },
    {
        "title": "星语心愿之再爱",
        "url": "movie-1192.html",
        "cover": "./142.jpg",
        "year": "2024",
        "region": "中国大陆,香港",
        "genre": "爱情,奇幻,剧情",
        "type": "电影",
        "tags": [
            "隔空恋爱",
            "人工智能恋人",
            "绝症重逢",
            "催泪续作"
        ]
    },
    {
        "title": "密曲",
        "url": "movie-1193.html",
        "cover": "./143.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "悬疑犯罪",
        "type": "电影",
        "tags": [
            "发酵",
            "酒厂",
            "菌种间谍",
            "感官世界"
        ]
    },
    {
        "title": "夜车",
        "url": "movie-1194.html",
        "cover": "./144.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑/恐怖/奇幻",
        "type": "电影",
        "tags": [
            "午夜列车",
            "轮回",
            "密闭空间",
            "都市传说",
            "人性考验"
        ]
    },
    {
        "title": "八田与一:嘉南大圳之父",
        "url": "movie-1195.html",
        "cover": "./145.jpg",
        "year": "2008",
        "region": "日本/中国台湾",
        "genre": "历史/传记",
        "type": "电影",
        "tags": [
            "水利工程",
            "殖民时期",
            "台日情结"
        ]
    },
    {
        "title": "看门狗",
        "url": "movie-1196.html",
        "cover": "./146.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/科幻/犯罪",
        "type": "电影",
        "tags": [
            "黑客",
            "义警",
            "城市监控",
            "反乌托邦",
            "高能"
        ]
    },
    {
        "title": "狐蝠",
        "url": "movie-1197.html",
        "cover": "./147.jpg",
        "year": "2024",
        "region": "香港/澳大利亚",
        "genre": "灾难,惊悚",
        "type": "电影",
        "tags": [
            "病毒爆发",
            "生态反思",
            "密闭空间",
            "极限逃生"
        ]
    },
    {
        "title": "上海异人娼馆",
        "url": "movie-1198.html",
        "cover": "./148.jpg",
        "year": "2024",
        "region": "日本/中国香港",
        "genre": "剧情/情色/历史",
        "type": "电影",
        "tags": [
            "1930年代",
            "租界文化",
            "女性群像",
            "禁忌之恋",
            "浮世绘美学"
        ]
    },
    {
        "title": "伴我走天涯2",
        "url": "movie-1199.html",
        "cover": "./149.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "宠物",
            "感人",
            "离别",
            "治愈"
        ]
    },
    {
        "title": "永夜魔女",
        "url": "movie-1200.html",
        "cover": "./150.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "奇幻,悬疑",
        "type": "剧集",
        "tags": [
            "女巫",
            "极夜",
            "诅咒",
            "小镇"
        ]
    },
    {
        "title": "你是我心中的太阳",
        "url": "movie-1201.html",
        "cover": "./1.jpg",
        "year": "2020",
        "region": "泰国",
        "genre": "爱情,虐恋,家庭伦理",
        "type": "电视剧",
        "tags": [
            "错爱",
            "复仇",
            "豪门恩怨",
            "失忆"
        ]
    },
    {
        "title": "下女的诱惑",
        "url": "movie-1202.html",
        "cover": "./2.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "悬疑、惊悚、情色",
        "type": "电影",
        "tags": [
            "复仇",
            "豪门",
            "禁忌关系",
            "反转"
        ]
    },
    {
        "title": "少女与战车 剧场版",
        "url": "movie-1203.html",
        "cover": "./3.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "动作/校园",
        "type": "电影/动画",
        "tags": [
            "战车竞技",
            "少女",
            "热血"
        ]
    },
    {
        "title": "元帅之死",
        "url": "movie-1204.html",
        "cover": "./4.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史,悬疑",
        "type": "电影",
        "tags": [
            "古代权谋",
            "战争",
            "复仇"
        ]
    },
    {
        "title": "靓女猎艳",
        "url": "movie-1205.html",
        "cover": "./5.jpg",
        "year": "1995",
        "region": "中国香港",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "港式无厘头",
            "女追男",
            "都市",
            "反转"
        ]
    },
    {
        "title": "黑袍纠察队第一季",
        "url": "movie-1206.html",
        "cover": "./6.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/黑色喜剧/超级英雄",
        "type": "剧集",
        "tags": [
            "反超级英雄",
            "公司阴谋",
            "民间复仇"
        ]
    },
    {
        "title": "我的淘气天使",
        "url": "movie-1207.html",
        "cover": "./7.jpg",
        "year": "1999",
        "region": "中国台湾",
        "genre": "喜剧/爱情",
        "type": "电视剧",
        "tags": [
            "偶像剧",
            "校园",
            "欢喜冤家",
            "青春"
        ]
    },
    {
        "title": "鬼门关3",
        "url": "movie-1208.html",
        "cover": "./8.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "恐怖/民俗/惊悚",
        "type": "电影",
        "tags": [
            "生死门",
            "民俗禁忌",
            "轮回",
            "村庄诅咒",
            "无归路"
        ]
    },
    {
        "title": "魔法大逃亡",
        "url": "movie-1209.html",
        "cover": "./9.jpg",
        "year": "2019",
        "region": "英国",
        "genre": "奇幻/冒险",
        "type": "电影",
        "tags": [
            "魔术",
            "监狱",
            "逃脱术"
        ]
    },
    {
        "title": "叵测",
        "url": "movie-1210.html",
        "cover": "./10.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑/剧情",
        "type": "电影",
        "tags": [
            "心理博弈",
            "保险诈骗",
            "双面人生",
            "录音证据",
            "多层反转"
        ]
    },
    {
        "title": "不公正世界",
        "url": "movie-1211.html",
        "cover": "./11.jpg",
        "year": "2023",
        "region": "英国",
        "genre": "剧情、科幻",
        "type": "电影",
        "tags": [
            "反乌托邦",
            "AI法官",
            "道德困境",
            "废除刑罚",
            "英伦阴郁"
        ]
    },
    {
        "title": "油麻菜籽",
        "url": "movie-1212.html",
        "cover": "./12.jpg",
        "year": "1983",
        "region": "台湾",
        "genre": "剧情,家庭,历史",
        "type": "电影",
        "tags": [
            "眷村",
            "女性",
            "台湾经济史",
            "母女",
            "坚韧"
        ]
    },
    {
        "title": "马与人",
        "url": "movie-1213.html",
        "cover": "./13.jpg",
        "year": "2024",
        "region": "蒙古",
        "genre": "剧情,家庭,西部",
        "type": "电影",
        "tags": [
            "草原",
            "牧马人",
            "父子和解",
            "现代文明冲击",
            "套马杆"
        ]
    },
    {
        "title": "天命大主宰",
        "url": "movie-1214.html",
        "cover": "./14.jpg",
        "year": "2027",
        "region": "中国大陆",
        "genre": "玄幻/动作",
        "type": "剧集",
        "tags": [
            "凡人修仙",
            "强者重生",
            "学院争霸"
        ]
    },
    {
        "title": "吉什岛的故事",
        "url": "movie-1215.html",
        "cover": "./15.jpg",
        "year": "2025",
        "region": "爱尔兰",
        "genre": "剧情/悬疑/民俗",
        "type": "电影",
        "tags": [
            "爱尔兰孤岛",
            "消失的灯塔员",
            "神话恐怖",
            "极简主义",
            "口述历史"
        ]
    },
    {
        "title": "生生舞不息",
        "url": "movie-1216.html",
        "cover": "./16.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "纪录,剧情",
        "type": "电影",
        "tags": [
            "舞蹈",
            "阿尔茨海默",
            "母女",
            "传承",
            "非遗"
        ]
    },
    {
        "title": "君子如玉",
        "url": "movie-1217.html",
        "cover": "./17.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装,悬疑,探案",
        "type": "剧集",
        "tags": [
            "玉文化",
            "儒生探案",
            "朝堂暗斗",
            "双男主"
        ]
    },
    {
        "title": "果岭奇迹",
        "url": "movie-1218.html",
        "cover": "./18.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "剧情,运动",
        "type": "电影",
        "tags": [
            "高尔夫",
            "励志",
            "真实事件改编",
            "贫民窟",
            "父子"
        ]
    },
    {
        "title": "胁迫者",
        "url": "movie-1219.html",
        "cover": "./19.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "犯罪/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "高智商犯罪",
            "以恶制恶",
            "完美犯罪",
            "反转王"
        ]
    },
    {
        "title": "异形4:浴火重生",
        "url": "movie-1220.html",
        "cover": "./20.jpg",
        "year": "1997",
        "region": "美国",
        "genre": "科幻、恐怖、动作",
        "type": "电影",
        "tags": [
            "克隆",
            "雷普利",
            "异形基因",
            "太空船"
        ]
    },
    {
        "title": "心之潜蚀",
        "url": "movie-1221.html",
        "cover": "./21.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "剧情/爱情/心理",
        "type": "电影",
        "tags": [
            "婚姻关系",
            "情感暴力",
            "PUA",
            "自我觉醒"
        ]
    },
    {
        "title": "小脚板走天涯",
        "url": "movie-1222.html",
        "cover": "./22.jpg",
        "year": "1988",
        "region": "美国",
        "genre": "动画,冒险,家庭",
        "type": "动画电影",
        "tags": [
            "恐龙",
            "冒险",
            "成长",
            "友情",
            "经典"
        ]
    },
    {
        "title": "山河同在",
        "url": "movie-1223.html",
        "cover": "./23.jpg",
        "year": "2015",
        "region": "中国大陆",
        "genre": "抗日战争/动作/悬疑",
        "type": "剧集",
        "tags": [
            "东北抗联",
            "谍战",
            "雪原狙击手",
            "兄弟反目"
        ]
    },
    {
        "title": "校园时空惊魂记",
        "url": "movie-1224.html",
        "cover": "./24.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "科幻悬疑",
        "type": "电影",
        "tags": [
            "时间循环",
            "校园霸凌",
            "平行宇宙",
            "救赎"
        ]
    },
    {
        "title": "被解救的姜戈",
        "url": "movie-1225.html",
        "cover": "./25.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/西部",
        "type": "电影",
        "tags": [
            "赏金猎人",
            "黑奴",
            "复仇",
            "暴力美学"
        ]
    },
    {
        "title": "剑府群龙",
        "url": "movie-1226.html",
        "cover": "./26.jpg",
        "year": "2027",
        "region": "中国大陆",
        "genre": "武侠,古装",
        "type": "电视剧",
        "tags": [
            "动作",
            "学院",
            "悬疑"
        ]
    },
    {
        "title": "廉政行动1994粤语",
        "url": "movie-1227.html",
        "cover": "./27.jpg",
        "year": "2024",
        "region": "香港",
        "genre": "犯罪,剧情,历史",
        "type": "剧集",
        "tags": [
            "ICAC",
            "1994",
            "真实案件",
            "粤语原声"
        ]
    },
    {
        "title": "炮弹飞车粤语",
        "url": "movie-1228.html",
        "cover": "./28.jpg",
        "year": "2018",
        "region": "中国香港",
        "genre": "动作/喜剧/赛车",
        "type": "电影",
        "tags": [
            "飞车",
            "港产片",
            "粤语原声",
            "兄弟情",
            "爆笑飙车"
        ]
    },
    {
        "title": "希瑞与非凡的公主们第一季",
        "url": "movie-1229.html",
        "cover": "./29.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "奇幻,冒险,动作",
        "type": "动画",
        "tags": [
            "重置版",
            "公主",
            "变身",
            "魔法",
            "女性英雄"
        ]
    },
    {
        "title": "恶毒一族",
        "url": "movie-1230.html",
        "cover": "./30.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "喜剧/剧情",
        "type": "剧集",
        "tags": [
            "黑色幽默",
            "家庭伦理",
            "遗产争夺",
            "荒诞"
        ]
    },
    {
        "title": "江城谜案",
        "url": "movie-1231.html",
        "cover": "./31.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "悬疑/剧情",
        "type": "电影",
        "tags": [
            "长江",
            "小镇",
            "记忆盗窃",
            "文艺"
        ]
    },
    {
        "title": "替死鬼",
        "url": "movie-1232.html",
        "cover": "./32.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "替身",
            "身份盗窃",
            "心理操控",
            "反转再反转",
            "社会讽刺"
        ]
    },
    {
        "title": "时差7小时",
        "url": "movie-1233.html",
        "cover": "./33.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/喜剧",
        "type": "剧集",
        "tags": [
            "异地恋",
            "留学",
            "网恋"
        ]
    },
    {
        "title": "危险游戏2022",
        "url": "movie-1234.html",
        "cover": "./34.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "密室",
            "直播",
            "死亡游戏",
            "反转"
        ]
    },
    {
        "title": "瑞镇食堂",
        "url": "movie-1235.html",
        "cover": "./35.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情/治愈",
        "type": "剧集",
        "tags": [
            "小镇",
            "美食",
            "治愈",
            "家庭",
            "温情"
        ]
    },
    {
        "title": "野蛮游戏:全面晋级",
        "url": "movie-1236.html",
        "cover": "./36.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "动作,奇幻",
        "type": "电影",
        "tags": [
            "游戏穿越",
            "沙盒世界",
            "视觉特效",
            "生存",
            "通关"
        ]
    },
    {
        "title": "太空鸡",
        "url": "movie-1237.html",
        "cover": "./37.jpg",
        "year": "2028",
        "region": "中国大陆",
        "genre": "动画,科幻,喜剧",
        "type": "电影",
        "tags": [
            "基因突变",
            "太空冒险",
            "环保主题"
        ]
    },
    {
        "title": "圣烟烈情",
        "url": "movie-1238.html",
        "cover": "./38.jpg",
        "year": "2023",
        "region": "澳大利亚/美国",
        "genre": "爱情/剧情/西部",
        "type": "电影",
        "tags": [
            "澳大利亚",
            "荒野",
            "禁忌之恋",
            "传教士",
            "异域"
        ]
    },
    {
        "title": "布兰卡龙大军",
        "url": "movie-1239.html",
        "cover": "./39.jpg",
        "year": "2027",
        "region": "西班牙",
        "genre": "奇幻/冒险/战争",
        "type": "电影",
        "tags": [
            "巨龙",
            "女骑士",
            "史诗",
            "军团"
        ]
    },
    {
        "title": "英俊少年",
        "url": "movie-1240.html",
        "cover": "./40.jpg",
        "year": "2025",
        "region": "德国",
        "genre": "剧情/家庭/青春",
        "type": "剧集",
        "tags": [
            "少年犯罪",
            "社会困境",
            "救赎"
        ]
    },
    {
        "title": "摩斯探长第十季",
        "url": "movie-1241.html",
        "cover": "./41.jpg",
        "year": "2020",
        "region": "英国",
        "genre": "悬疑/犯罪",
        "type": "电视剧",
        "tags": [
            "英剧",
            "推理",
            "牛津",
            "古典",
            "探案"
        ]
    },
    {
        "title": "大时代粤语",
        "url": "movie-1242.html",
        "cover": "./42.jpg",
        "year": "1992",
        "region": "香港",
        "genre": "商战/家族",
        "type": "电视剧",
        "tags": [
            "股票",
            "复仇",
            "丁蟹",
            "经典",
            "粤语原声"
        ]
    },
    {
        "title": "年满二十岁的奥雷斯",
        "url": "movie-1243.html",
        "cover": "./43.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情/青春",
        "type": "电影",
        "tags": [
            "成人礼",
            "移民",
            "身份",
            "成长"
        ]
    },
    {
        "title": "无序之主",
        "url": "movie-1244.html",
        "cover": "./44.jpg",
        "year": "2016",
        "region": "英国",
        "genre": "恐怖,悬疑,心理",
        "type": "电影",
        "tags": [
            "邪教",
            "孤岛",
            "集体幻觉",
            "仪式",
            "混乱之神"
        ]
    },
    {
        "title": "津门奇案之开枪",
        "url": "movie-1245.html",
        "cover": "./45.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "悬疑/犯罪/民国",
        "type": "电影",
        "tags": [
            "天津卫",
            "神探",
            "连环案",
            "枪声",
            "推理"
        ]
    },
    {
        "title": "西城故事",
        "url": "movie-1246.html",
        "cover": "./46.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "青春音乐",
        "type": "剧集",
        "tags": [
            "歌舞",
            "街头帮派",
            "现代改编",
            "青少年",
            "种族冲突"
        ]
    },
    {
        "title": "哈卡",
        "url": "movie-1247.html",
        "cover": "./47.jpg",
        "year": "2018",
        "region": "新西兰",
        "genre": "剧情/运动/家庭",
        "type": "电影",
        "tags": [
            "橄榄球",
            "毛利文化",
            "父子关系",
            "战舞",
            "小镇生活"
        ]
    },
    {
        "title": "飞魂谷",
        "url": "movie-1248.html",
        "cover": "./48.jpg",
        "year": "2020",
        "region": "美国/加拿大",
        "genre": "悬疑/惊悚/冒险",
        "type": "电影",
        "tags": [
            "失踪",
            "山谷",
            "超自然",
            "伪纪录片",
            "登山"
        ]
    },
    {
        "title": "瑞灵顿街10号",
        "url": "movie-1249.html",
        "cover": "./49.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "惊悚/犯罪/真实事件改编",
        "type": "电影",
        "tags": [
            "真实案件",
            "连环杀人",
            "房东",
            "密室",
            "心理惊悚"
        ]
    },
    {
        "title": "牛蝇",
        "url": "movie-1250.html",
        "cover": "./50.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情/惊悚/文艺",
        "type": "电影",
        "tags": [
            "心理扭曲",
            "复仇",
            "底层压迫",
            "沉默",
            "女性"
        ]
    },
    {
        "title": "无畏上将高尔察克",
        "url": "movie-1251.html",
        "cover": "./51.jpg",
        "year": "2008",
        "region": "俄罗斯",
        "genre": "历史/战争",
        "type": "电影",
        "tags": [
            "白军领袖",
            "悲剧英雄",
            "西伯利亚",
            "冰雪远征"
        ]
    },
    {
        "title": "梅艳芳菲",
        "url": "movie-1252.html",
        "cover": "./52.jpg",
        "year": "2019",
        "region": "中国香港",
        "genre": "传记、音乐、剧情",
        "type": "剧集",
        "tags": [
            "梅艳芳",
            "致敬",
            "香港娱乐圈"
        ]
    },
    {
        "title": "幻影特攻",
        "url": "movie-1253.html",
        "cover": "./53.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "动作、科幻",
        "type": "电影",
        "tags": [
            "赛博朋克",
            "卧底",
            "量子科技",
            "警匪对峙",
            "反转"
        ]
    },
    {
        "title": "密西西比",
        "url": "movie-1254.html",
        "cover": "./54.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情,冒险,历史",
        "type": "电影",
        "tags": [
            "河流",
            "种族",
            "公路片",
            "成长"
        ]
    },
    {
        "title": "鬼哭神嚎7",
        "url": "movie-1255.html",
        "cover": "./55.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖/超自然",
        "type": "电影",
        "tags": [
            "鬼屋重启",
            "诅咒延续",
            "伪纪录片",
            "灵媒对决",
            "数字幽灵"
        ]
    },
    {
        "title": "游艇藏春",
        "url": "movie-1256.html",
        "cover": "./56.jpg",
        "year": "2022",
        "region": "中国香港",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "密室",
            "富豪",
            "情杀"
        ]
    },
    {
        "title": "哀兵儿童",
        "url": "movie-1257.html",
        "cover": "./57.jpg",
        "year": "2015",
        "region": "中国大陆",
        "genre": "剧情,战争,儿童",
        "type": "电影",
        "tags": [
            "抗日战争",
            "儿童视角",
            "幸存者创伤",
            "人性探讨",
            "黑白摄影"
        ]
    },
    {
        "title": "史前巨鳄2国语",
        "url": "movie-1258.html",
        "cover": "./58.jpg",
        "year": "2018",
        "region": "中国大陆/美国",
        "genre": "动作/惊悚/冒险",
        "type": "电影",
        "tags": [
            "巨鳄",
            "考古",
            "封闭空间",
            "国语配音",
            "血腥"
        ]
    },
    {
        "title": "脱单宝典",
        "url": "movie-1259.html",
        "cover": "./59.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧/爱情/讽刺",
        "type": "电影",
        "tags": [
            "PUA",
            "大数据相亲",
            "黑色幽默",
            "反套路"
        ]
    },
    {
        "title": "社畜向前冲",
        "url": "movie-1260.html",
        "cover": "./60.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "喜剧职场",
        "type": "剧集",
        "tags": [
            "黑心企业",
            "穿越",
            "吐槽",
            "热血",
            "平成vs令和"
        ]
    },
    {
        "title": "千金傲游记",
        "url": "movie-1261.html",
        "cover": "./61.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "喜剧,冒险,公路",
        "type": "电影",
        "tags": [
            "富家女变形记",
            "荒诞",
            "治愈"
        ]
    },
    {
        "title": "神枪女侠",
        "url": "movie-1262.html",
        "cover": "./62.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动作/古装/西部",
        "type": "网络电影",
        "tags": [
            "女枪手",
            "民国",
            "复仇",
            "快枪手"
        ]
    },
    {
        "title": "生命速写",
        "url": "movie-1263.html",
        "cover": "./63.jpg",
        "year": "2027",
        "region": "中国大陆",
        "genre": "剧情,家庭,文艺",
        "type": "电影",
        "tags": [
            "绝症",
            "临终关怀",
            "代际沟通",
            "速写簿"
        ]
    },
    {
        "title": "复仇之溪",
        "url": "movie-1264.html",
        "cover": "./64.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "恐怖,悬疑",
        "type": "电影",
        "tags": [
            "复仇",
            "水怪",
            "小镇秘密"
        ]
    },
    {
        "title": "饥不则食",
        "url": "movie-1265.html",
        "cover": "./65.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "惊悚/灾难",
        "type": "电影",
        "tags": [
            "末世人性",
            "生存游戏",
            "反转结局"
        ]
    },
    {
        "title": "未来天后",
        "url": "movie-1266.html",
        "cover": "./66.jpg",
        "year": "2028",
        "region": "中国香港",
        "genre": "音乐,剧情,歌舞",
        "type": "电影",
        "tags": [
            "选秀",
            "女团",
            "人工智能",
            "梦想",
            "悬疑"
        ]
    },
    {
        "title": "厄夜变奏曲",
        "url": "movie-1267.html",
        "cover": "./67.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "惊悚,悬疑,恐怖",
        "type": "电影",
        "tags": [
            "密室惊悚",
            "暴风雪山庄",
            "连环杀人",
            "变奏音乐",
            "全员恶人"
        ]
    },
    {
        "title": "夫君大人别怕我",
        "url": "movie-1268.html",
        "cover": "./68.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装、喜剧、爱情",
        "type": "剧集",
        "tags": [
            "女尊",
            "社恐",
            "先婚后爱",
            "反差萌"
        ]
    },
    {
        "title": "我的街区",
        "url": "movie-1269.html",
        "cover": "./69.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "喜剧/剧情",
        "type": "剧集",
        "tags": [
            "拉丁裔社区",
            "街头帮派",
            "青春期友情"
        ]
    },
    {
        "title": "淘气大侦探",
        "url": "movie-1270.html",
        "cover": "./70.jpg",
        "year": "2018",
        "region": "美国/英国",
        "genre": "动画,喜剧,悬疑",
        "type": "电影",
        "tags": [
            "花园地精",
            "侦探",
            "伦敦",
            "解谜",
            "搭档"
        ]
    },
    {
        "title": "布朗神父第十一季",
        "url": "movie-1271.html",
        "cover": "./71.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "悬疑,犯罪",
        "type": "剧集",
        "tags": [
            "神父",
            "推理",
            "乡村"
        ]
    },
    {
        "title": "男人嬉春",
        "url": "movie-1272.html",
        "cover": "./72.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "喜剧/情色",
        "type": "电影",
        "tags": [
            "风月片",
            "香港",
            "搞笑",
            "多线叙事",
            "怀旧"
        ]
    },
    {
        "title": "小逃亡者",
        "url": "movie-1273.html",
        "cover": "./73.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "公路儿童",
        "type": "电影",
        "tags": [
            "小孩",
            "暑假",
            "冒险",
            "治愈"
        ]
    },
    {
        "title": "李察三世",
        "url": "movie-1274.html",
        "cover": "./74.jpg",
        "year": "2022",
        "region": "英国",
        "genre": "剧情/历史/犯罪",
        "type": "电影",
        "tags": [
            "莎士比亚改编",
            "权谋",
            "心理惊悚",
            "独角戏变体"
        ]
    },
    {
        "title": "不一样的爱人国语",
        "url": "movie-1275.html",
        "cover": "./75.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/爱情/悬疑",
        "type": "电影",
        "tags": [
            "双重身份",
            "记忆篡改",
            "都市情感"
        ]
    },
    {
        "title": "快乐妓女去好莱坞",
        "url": "movie-1276.html",
        "cover": "./76.jpg",
        "year": "1977",
        "region": "意大利/美国",
        "genre": "喜剧/情色/剧情",
        "type": "电影",
        "tags": [
            "讽刺",
            "性解放",
            "娱乐圈黑幕",
            "公路电影",
            "七十年代"
        ]
    },
    {
        "title": "超体",
        "url": "movie-1277.html",
        "cover": "./77.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "动作,科幻,哲学",
        "type": "电影",
        "tags": [
            "脑域",
            "超能力",
            "进化",
            "时间",
            "存在"
        ]
    },
    {
        "title": "原野独行侠",
        "url": "movie-1278.html",
        "cover": "./78.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "西部/剧情",
        "type": "电影",
        "tags": [
            "女性",
            "拓荒",
            "复仇",
            "荒野求生",
            "极简主义"
        ]
    },
    {
        "title": "乡里彩虹城里雨",
        "url": "movie-1279.html",
        "cover": "./79.jpg",
        "year": "2007",
        "region": "中国大陆",
        "genre": "乡村/家庭",
        "type": "电视剧",
        "tags": [
            "留守儿童",
            "进城",
            "代际"
        ]
    },
    {
        "title": "恶灵古堡:死亡岛",
        "url": "movie-1280.html",
        "cover": "./80.jpg",
        "year": "2023",
        "region": "美国/日本",
        "genre": "动作/恐怖/科幻",
        "type": "动画电影",
        "tags": [
            "丧尸",
            "生化危机",
            "监狱岛",
            "艾达王"
        ]
    },
    {
        "title": "逃出摩加迪休",
        "url": "movie-1281.html",
        "cover": "./81.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "动作,历史,剧情",
        "type": "电影",
        "tags": [
            "真实事件改编",
            "战乱",
            "绝境求生",
            "人性"
        ]
    },
    {
        "title": "许愿人",
        "url": "movie-1282.html",
        "cover": "./82.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "都市传说",
            "代价",
            "许愿规则",
            "生存游戏"
        ]
    },
    {
        "title": "米芽米咕人",
        "url": "movie-1283.html",
        "cover": "./83.jpg",
        "year": "2009",
        "region": "法国",
        "genre": "动画/奇幻",
        "type": "电影",
        "tags": [
            "环保",
            "冒险",
            "治愈",
            "儿童"
        ]
    },
    {
        "title": "大剧院",
        "url": "movie-1284.html",
        "cover": "./84.jpg",
        "year": "2017",
        "region": "俄罗斯",
        "genre": "剧情,艺术",
        "type": "电影",
        "tags": [
            "芭蕾",
            "师徒传承",
            "野心",
            "古典艺术"
        ]
    },
    {
        "title": "圣法兰西斯港记事",
        "url": "movie-1285.html",
        "cover": "./85.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "地中海小岛",
            "作家",
            "失踪案",
            "文学改编"
        ]
    },
    {
        "title": "人鱼童话2",
        "url": "movie-1286.html",
        "cover": "./86.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "奇幻/家庭/冒险",
        "type": "电影",
        "tags": [
            "人鱼",
            "海洋",
            "环保",
            "成长"
        ]
    },
    {
        "title": "金婕的故事",
        "url": "movie-1287.html",
        "cover": "./87.jpg",
        "year": "2015",
        "region": "英国",
        "genre": "剧情/传记/音乐",
        "type": "电影",
        "tags": [
            "动物保护",
            "女性成长",
            "孤独",
            "治愈系",
            "真实改编"
        ]
    },
    {
        "title": "蛇姬谜宫",
        "url": "movie-1288.html",
        "cover": "./88.jpg",
        "year": "2018",
        "region": "泰国",
        "genre": "奇幻惊悚",
        "type": "剧集",
        "tags": [
            "蛇",
            "宫廷",
            "诅咒",
            "古装"
        ]
    },
    {
        "title": "幻想曲",
        "url": "movie-1289.html",
        "cover": "./89.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动画,音乐",
        "type": "电影",
        "tags": [
            "古典乐",
            "无对白",
            "意识流",
            "手绘"
        ]
    },
    {
        "title": "乱发日记",
        "url": "movie-1290.html",
        "cover": "./90.jpg",
        "year": "2022",
        "region": "法国/比利时",
        "genre": "剧情/动画",
        "type": "电影",
        "tags": [
            "手绘动画",
            "女性成长",
            "头发隐喻",
            "自闭症",
            "无声叙事"
        ]
    },
    {
        "title": "情陷美人鱼",
        "url": "movie-1291.html",
        "cover": "./91.jpg",
        "year": "1999",
        "region": "中国香港",
        "genre": "爱情,奇幻,恐怖",
        "type": "电影",
        "tags": [
            "人鱼恋",
            "港式奇情",
            "悲剧",
            "水下摄影"
        ]
    },
    {
        "title": "黄道杀人魔再揭秘",
        "url": "movie-1292.html",
        "cover": "./92.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "犯罪,纪实,悬疑",
        "type": "纪录片",
        "tags": [
            "真实犯罪",
            "未解之谜",
            "FBI档案",
            "连环杀手"
        ]
    },
    {
        "title": "寻爱小说家:海史密斯",
        "url": "movie-1293.html",
        "cover": "./93.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/同性/悬疑",
        "type": "电视剧/传记",
        "tags": [
            "作家传记",
            "冷感爱情",
            "悬疑写作",
            "女性欲望"
        ]
    },
    {
        "title": "纳粹的末日 第一季",
        "url": "movie-1294.html",
        "cover": "./94.jpg",
        "year": "2020",
        "region": "美国",
        "genre": "历史战争",
        "type": "剧集",
        "tags": [
            "二战",
            "纪实",
            "档案",
            "反思",
            "惊悚"
        ]
    },
    {
        "title": "拒绝采访",
        "url": "movie-1295.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/悬疑",
        "type": "电影",
        "tags": [
            "记者",
            "真相",
            "沉默",
            "小镇"
        ]
    },
    {
        "title": "灰姑娘国语",
        "url": "movie-1296.html",
        "cover": "./96.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情,都市,喜剧",
        "type": "电影",
        "tags": [
            "现代",
            "逆袭",
            "霸总",
            "反套路"
        ]
    },
    {
        "title": "王后秘史",
        "url": "movie-1297.html",
        "cover": "./97.jpg",
        "year": "2023",
        "region": "泰国,美国",
        "genre": "历史,动作,剧情",
        "type": "电影",
        "tags": [
            "古装",
            "权谋",
            "女性",
            "王室",
            "史诗"
        ]
    },
    {
        "title": "主教之妻",
        "url": "movie-1298.html",
        "cover": "./98.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "历史,悬疑",
        "type": "剧集",
        "tags": [
            "中世纪",
            "教权斗争",
            "女性复仇"
        ]
    },
    {
        "title": "男气管制",
        "url": "movie-1299.html",
        "cover": "./99.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧/家庭",
        "type": "剧集",
        "tags": [
            "性别反转",
            "父权",
            "荒诞",
            "黑色幽默",
            "家庭"
        ]
    },
    {
        "title": "占的故事",
        "url": "movie-1300.html",
        "cover": "./100.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "剧情/传记",
        "type": "剧集",
        "tags": [
            "非裔美国人",
            "音乐人",
            "灵魂乐",
            "种族平权",
            "单元剧"
        ]
    },
    {
        "title": "四月的雪",
        "url": "movie-1301.html",
        "cover": "./101.jpg",
        "year": "2018",
        "region": "韩国",
        "genre": "爱情,剧情,奇幻",
        "type": "电影",
        "tags": [
            "绝恋",
            "时间循环",
            "唯美悲剧",
            "生死恋",
            "奇幻爱情"
        ]
    },
    {
        "title": "深呼吸的必要",
        "url": "movie-1302.html",
        "cover": "./102.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情/运动",
        "type": "电影",
        "tags": [
            "自由潜水",
            "丧子",
            "治愈",
            "深海",
            "孤独"
        ]
    },
    {
        "title": "王者联盟",
        "url": "movie-1303.html",
        "cover": "./103.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "奇幻,动作",
        "type": "剧集",
        "tags": [
            "超能力高中生",
            "反派父母",
            "二代觉醒"
        ]
    },
    {
        "title": "伐木工人的死亡",
        "url": "movie-1304.html",
        "cover": "./104.jpg",
        "year": "2024",
        "region": "芬兰",
        "genre": "悬疑剧情",
        "type": "电影",
        "tags": [
            "北欧",
            "noir",
            "森林",
            "沉默",
            "真相"
        ]
    },
    {
        "title": "幽冥来电",
        "url": "movie-1305.html",
        "cover": "./105.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "惊悚/悬疑",
        "type": "电影",
        "tags": [
            "灵异事件",
            "反转",
            "心理恐惧"
        ]
    },
    {
        "title": "糟糕的夏天",
        "url": "movie-1306.html",
        "cover": "./106.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "剧情/青春",
        "type": "电影",
        "tags": [
            "青春残酷",
            "乡村封闭",
            "欲望觉醒",
            "意外悲剧"
        ]
    },
    {
        "title": "少奇同志在安源",
        "url": "movie-1307.html",
        "cover": "./107.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史,传记",
        "type": "电影",
        "tags": [
            "革命",
            "工人运动",
            "青年刘少奇"
        ]
    },
    {
        "title": "明天以后",
        "url": "movie-1308.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "亲情催泪",
            "生命倒计时",
            "特殊家庭"
        ]
    },
    {
        "title": "开垦风云",
        "url": "movie-1309.html",
        "cover": "./109.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/历史",
        "type": "电影",
        "tags": [
            "拓荒",
            "东北",
            "父子",
            "土地改革",
            "人性"
        ]
    },
    {
        "title": "冲锋战士剧场版:恐龙世代",
        "url": "movie-1310.html",
        "cover": "./110.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "动画/冒险",
        "type": "电影",
        "tags": [
            "机甲",
            "恐龙",
            "时空穿越",
            "子供向"
        ]
    },
    {
        "title": "猪扒大联盟",
        "url": "movie-1311.html",
        "cover": "./111.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "喜剧/动画/美食",
        "type": "电影",
        "tags": [
            "香港动画",
            "美食竞技",
            "猪扒",
            "搞笑",
            "粤语"
        ]
    },
    {
        "title": "我爱嘉宝",
        "url": "movie-1312.html",
        "cover": "./112.jpg",
        "year": "2005",
        "region": "美国/瑞典",
        "genre": "传记/剧情",
        "type": "电影",
        "tags": [
            "葛丽泰·嘉宝",
            "影迷",
            "孤独"
        ]
    },
    {
        "title": "龙凤呈祥2009",
        "url": "movie-1313.html",
        "cover": "./113.jpg",
        "year": "2009",
        "region": "中国大陆",
        "genre": "剧情,家庭,喜剧",
        "type": "电影",
        "tags": [
            "高考",
            "望子成龙",
            "黑色幽默",
            "社会讽刺"
        ]
    },
    {
        "title": "御前演出",
        "url": "movie-1314.html",
        "cover": "./114.jpg",
        "year": "2023",
        "region": "中国",
        "genre": "古装、喜剧",
        "type": "电影",
        "tags": [
            "戏班",
            "宫廷",
            "乌龙"
        ]
    },
    {
        "title": "训练日",
        "url": "movie-1315.html",
        "cover": "./115.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "犯罪,剧情,惊悚",
        "type": "电影",
        "tags": [
            "缉毒警",
            "腐败",
            "道德困境",
            "师徒",
            "腐败警察"
        ]
    },
    {
        "title": "小妇人(1933年电影)",
        "url": "movie-1316.html",
        "cover": "./116.jpg",
        "year": "1933",
        "region": "美国",
        "genre": "剧情/家庭/爱情",
        "type": "电影",
        "tags": [
            "经典改编",
            "四姐妹",
            "成长",
            "女性"
        ]
    },
    {
        "title": "当我们崛起时",
        "url": "movie-1317.html",
        "cover": "./117.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "历史、剧情、运动",
        "type": "剧集",
        "tags": [
            "LGBT平权",
            "艾滋病危机",
            "石墙运动",
            "群像剧",
            "催泪"
        ]
    },
    {
        "title": "泰版下一站是幸福国语",
        "url": "movie-1318.html",
        "cover": "./118.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "爱情,都市",
        "type": "剧集",
        "tags": [
            "姐弟恋",
            "翻拍",
            "职场",
            "喜剧"
        ]
    },
    {
        "title": "间谍之桥",
        "url": "movie-1319.html",
        "cover": "./119.jpg",
        "year": "2015",
        "region": "美国",
        "genre": "历史、剧情、惊悚",
        "type": "电影",
        "tags": [
            "冷战",
            "真实事件",
            "律师",
            "交换间谍",
            "汤姆·汉克斯"
        ]
    },
    {
        "title": "波波鹿与飞天鼠",
        "url": "movie-1320.html",
        "cover": "./120.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,动画,冒险",
        "type": "动画电影",
        "tags": [
            "经典重启",
            "搞笑搭档",
            "森林",
            "反派卖蠢",
            "合家欢"
        ]
    },
    {
        "title": "微软英雄",
        "url": "movie-1321.html",
        "cover": "./121.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "剧情/传记/喜剧",
        "type": "电影",
        "tags": [
            "科技",
            "创业",
            "对决",
            "天才"
        ]
    },
    {
        "title": "战马",
        "url": "movie-1322.html",
        "cover": "./122.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "剧情/战争",
        "type": "电影",
        "tags": [
            "一战",
            "动物",
            "友情",
            "催泪"
        ]
    },
    {
        "title": "女黑侠木兰花粤语",
        "url": "movie-1323.html",
        "cover": "./123.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "动作/悬疑",
        "type": "电视剧",
        "tags": [
            "民国",
            "侠女",
            "粤语",
            "复仇"
        ]
    },
    {
        "title": "离婚",
        "url": "movie-1324.html",
        "cover": "./124.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "家庭伦理,剧情",
        "type": "剧集",
        "tags": [
            "中年危机",
            "冷静期",
            "财产分割"
        ]
    },
    {
        "title": "只想今生一起走",
        "url": "movie-1325.html",
        "cover": "./125.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "家庭、伦理、年代",
        "type": "电视剧",
        "tags": [
            "催泪",
            "亲情",
            "时代变迁",
            "姐妹情深",
            "生死离别"
        ]
    },
    {
        "title": "这里的黎明静悄悄2005",
        "url": "movie-1326.html",
        "cover": "./126.jpg",
        "year": "2005",
        "region": "俄罗斯",
        "genre": "剧情/历史/战争",
        "type": "剧集",
        "tags": [
            "女兵",
            "卫国战争",
            "森林狙击战"
        ]
    },
    {
        "title": "父女情深",
        "url": "movie-1327.html",
        "cover": "./127.jpg",
        "year": "2021",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "父女",
            "误解",
            "和解",
            "成长",
            "现实主义"
        ]
    },
    {
        "title": "大鸿米店",
        "url": "movie-1328.html",
        "cover": "./128.jpg",
        "year": "1995",
        "region": "中国",
        "genre": "剧情,历史",
        "type": "电影",
        "tags": [
            "乡土",
            "欲望",
            "人性",
            "权力更迭"
        ]
    },
    {
        "title": "生命中最美好的是自由",
        "url": "movie-1329.html",
        "cover": "./129.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "监狱",
            "救赎",
            "亲情",
            "现实主义"
        ]
    },
    {
        "title": "妈妈的天空",
        "url": "movie-1330.html",
        "cover": "./130.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "家庭剧情",
        "type": "电影",
        "tags": [
            "母爱",
            "阿尔茨海默",
            "乡村",
            "救赎"
        ]
    },
    {
        "title": "铁证悬案第五季",
        "url": "movie-1331.html",
        "cover": "./131.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "悬疑,犯罪,剧情",
        "type": "剧集",
        "tags": [
            "凶杀案",
            "陈年旧案",
            "档案室",
            "女性侦探"
        ]
    },
    {
        "title": "危险的她第二季",
        "url": "movie-1332.html",
        "cover": "./132.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,剧情,女性",
        "type": "剧集",
        "tags": [
            "女性群像",
            "反杀",
            "心理博弈",
            "全员恶人"
        ]
    },
    {
        "title": "至暴之年",
        "url": "movie-1333.html",
        "cover": "./133.jpg",
        "year": "2014",
        "region": "美国",
        "genre": "犯罪,剧情,惊悚",
        "type": "电影",
        "tags": [
            "1980年代",
            "纽约",
            "石油商人",
            "道德边界"
        ]
    },
    {
        "title": "维也纳和鬼魂乐队",
        "url": "movie-1334.html",
        "cover": "./134.jpg",
        "year": "2021",
        "region": "奥地利",
        "genre": "音乐,奇幻,剧情",
        "type": "电影",
        "tags": [
            "乐队",
            "鬼魂",
            "音乐厅",
            "未完成交响曲"
        ]
    },
    {
        "title": "香港制造粤语",
        "url": "movie-1335.html",
        "cover": "./135.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "剧情,犯罪",
        "type": "电影",
        "tags": [
            "市井",
            "底层",
            "兄弟",
            "宿命",
            "港味"
        ]
    },
    {
        "title": "翻手为云",
        "url": "movie-1336.html",
        "cover": "./136.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/犯罪",
        "type": "电影",
        "tags": [
            "诈骗",
            "魔术",
            "商战",
            "反转",
            "局中局"
        ]
    },
    {
        "title": "为了一句话",
        "url": "movie-1337.html",
        "cover": "./137.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "悬疑/律政",
        "type": "剧集",
        "tags": [
            "无罪辩护",
            "一句话",
            "真相",
            "人性",
            "法庭"
        ]
    },
    {
        "title": "时间不会停止",
        "url": "movie-1338.html",
        "cover": "./138.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/爱情/剧情",
        "type": "电影",
        "tags": [
            "时间循环",
            "绝症",
            "告别",
            "日式催泪"
        ]
    },
    {
        "title": "修业魔女璐璐萌",
        "url": "movie-1339.html",
        "cover": "./139.jpg",
        "year": "2014",
        "region": "日本",
        "genre": "动画、喜剧、奇幻",
        "type": "TV",
        "tags": [
            "魔女",
            "契约",
            "学园",
            "日常系"
        ]
    },
    {
        "title": "天降财神粤语",
        "url": "movie-1340.html",
        "cover": "./140.jpg",
        "year": "2001",
        "region": "中国香港",
        "genre": "喜剧/奇幻",
        "type": "剧集",
        "tags": [
            "神仙",
            "彩票",
            "试炼"
        ]
    },
    {
        "title": "逃出陷阱",
        "url": "movie-1341.html",
        "cover": "./141.jpg",
        "year": "2015",
        "region": "韩国",
        "genre": "悬疑,惊悚",
        "type": "电影",
        "tags": [
            "密室",
            "职场霸凌",
            "复仇",
            "反转"
        ]
    },
    {
        "title": "午夜冤灵",
        "url": "movie-1342.html",
        "cover": "./142.jpg",
        "year": "2014",
        "region": "泰国",
        "genre": "恐怖/灵异",
        "type": "电影",
        "tags": [
            "降头",
            "酒店怪谈",
            "录像带",
            "轮回怨",
            "真实事件改编"
        ]
    },
    {
        "title": "呷醋大丈夫国语",
        "url": "movie-1343.html",
        "cover": "./143.jpg",
        "year": "1987",
        "region": "中国香港",
        "genre": "喜剧/爱情/家庭",
        "type": "电影",
        "tags": [
            "黄百鸣",
            "吃醋",
            "婚姻喜剧",
            "港式搞笑",
            "误会产生"
        ]
    },
    {
        "title": "你的女人国语",
        "url": "movie-1344.html",
        "cover": "./144.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "爱情、悬疑、剧情",
        "type": "剧集",
        "tags": [
            "替身",
            "双胞胎",
            "豪门",
            "阴谋",
            "身份认同"
        ]
    },
    {
        "title": "最后的约定",
        "url": "movie-1345.html",
        "cover": "./145.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "阿尔茨海默",
            "亲情",
            "催泪"
        ]
    },
    {
        "title": "小老鼠历险记",
        "url": "movie-1346.html",
        "cover": "./146.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "冒险/家庭",
        "type": "动画电影",
        "tags": [
            "成长",
            "友情",
            "勇气"
        ]
    },
    {
        "title": "铁男1:金属兽",
        "url": "movie-1347.html",
        "cover": "./147.jpg",
        "year": "1989",
        "region": "日本",
        "genre": "科幻恐怖",
        "type": "电影",
        "tags": [
            "身体恐怖",
            "赛博朋克",
            "cult",
            "金属"
        ]
    },
    {
        "title": "小芽的奇幻人生",
        "url": "movie-1348.html",
        "cover": "./148.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "奇幻,家庭",
        "type": "电影",
        "tags": [
            "缩小",
            "微观世界",
            "成长",
            "冒险"
        ]
    },
    {
        "title": "魔鬼褓姆",
        "url": "movie-1349.html",
        "cover": "./149.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "悬疑,惊悚",
        "type": "剧集",
        "tags": [
            "保姆",
            "豪宅",
            "秘密",
            "儿童",
            "反转"
        ]
    },
    {
        "title": "魔兽战线",
        "url": "movie-1350.html",
        "cover": "./150.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻、战争、动作",
        "type": "剧集",
        "tags": [
            "怪兽",
            "机甲",
            "末世",
            "硬核"
        ]
    },
    {
        "title": "春之血祭",
        "url": "movie-1351.html",
        "cover": "./1.jpg",
        "year": "2017",
        "region": "俄罗斯",
        "genre": "悬疑惊悚",
        "type": "电影",
        "tags": [
            "芭蕾",
            "献祭",
            "精神病院",
            "俄式美学"
        ]
    },
    {
        "title": "抖包袱大会",
        "url": "movie-1352.html",
        "cover": "./2.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧,剧情",
        "type": "电影",
        "tags": [
            "相声",
            "传承",
            "师徒",
            "北漂"
        ]
    },
    {
        "title": "花之战",
        "url": "movie-1353.html",
        "cover": "./3.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "剧情/家庭/黑色喜剧",
        "type": "电影",
        "tags": [
            "母女关系",
            "传统与反抗",
            "花艺",
            "阶级冲突",
            "婚礼闹剧"
        ]
    },
    {
        "title": "歃血兄弟",
        "url": "movie-1354.html",
        "cover": "./4.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "犯罪,剧情,动作",
        "type": "电影",
        "tags": [
            "卧底",
            "兄弟情",
            "黑帮",
            "背叛"
        ]
    },
    {
        "title": "大鼻子小英雄",
        "url": "movie-1355.html",
        "cover": "./5.jpg",
        "year": "2027",
        "region": "德国",
        "genre": "奇幻/家庭",
        "type": "电影",
        "tags": [
            "童话改编",
            "自卑",
            "友谊",
            "魔法",
            "成长"
        ]
    },
    {
        "title": "月亮上的男人",
        "url": "movie-1356.html",
        "cover": "./6.jpg",
        "year": "2023",
        "region": "美国/英国",
        "genre": "科幻/剧情/冒险",
        "type": "电影",
        "tags": [
            "月球基地",
            "孤独",
            "人工智能",
            "真相",
            "慢科幻"
        ]
    },
    {
        "title": "人体雕塑",
        "url": "movie-1357.html",
        "cover": "./7.jpg",
        "year": "2023",
        "region": "法国/德国",
        "genre": "剧情/艺术/情色",
        "type": "电影",
        "tags": [
            "艺术创作",
            "身体政治",
            "亲密关系"
        ]
    },
    {
        "title": "叠影江湖",
        "url": "movie-1358.html",
        "cover": "./8.jpg",
        "year": "2020",
        "region": "中国香港/中国大陆",
        "genre": "悬疑,动作,武侠",
        "type": "网络剧",
        "tags": [
            "替身",
            "帮派",
            "双胞胎",
            "民国"
        ]
    },
    {
        "title": "荒野大镖客之黄金劫案",
        "url": "movie-1359.html",
        "cover": "./9.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "西部/动作",
        "type": "电影",
        "tags": [
            "公路抢劫",
            "亦正亦邪",
            "黑吃黑"
        ]
    },
    {
        "title": "报纸头版",
        "url": "movie-1360.html",
        "cover": "./10.jpg",
        "year": "2020",
        "region": "美国",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "新闻业",
            "罢工",
            "七零年代",
            "调查记者",
            "真相"
        ]
    },
    {
        "title": "同路孖宝",
        "url": "movie-1361.html",
        "cover": "./11.jpg",
        "year": "1995",
        "region": "中国香港",
        "genre": "喜剧,动作",
        "type": "电影",
        "tags": [
            "双雄",
            "误打误撞",
            "黑帮",
            "兄弟情"
        ]
    },
    {
        "title": "独白",
        "url": "movie-1362.html",
        "cover": "./12.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "心理/实验",
        "type": "短片",
        "tags": [
            "独角戏",
            "AI换脸",
            "人格分裂",
            "镜子",
            "10分钟长镜头"
        ]
    },
    {
        "title": "演员男友",
        "url": "movie-1363.html",
        "cover": "./13.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "爱情/喜剧",
        "type": "电视剧",
        "tags": [
            "娱乐圈",
            "替身",
            "假戏真做",
            "韩剧",
            "高甜"
        ]
    },
    {
        "title": "乌龙绝配",
        "url": "movie-1364.html",
        "cover": "./14.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "爱情,喜剧,运动",
        "type": "电影",
        "tags": [
            "网球",
            "欢喜冤家",
            "双打搭档",
            "假戏真做"
        ]
    },
    {
        "title": "女人心事",
        "url": "movie-1365.html",
        "cover": "./15.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "家庭,剧情",
        "type": "剧集",
        "tags": [
            "三代女性",
            "代际和解",
            "婚姻困境"
        ]
    },
    {
        "title": "双凤奇缘",
        "url": "movie-1366.html",
        "cover": "./16.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "古装/悬疑/宫廷",
        "type": "电视剧",
        "tags": [
            "双女主",
            "替身",
            "权谋",
            "复仇",
            "姐妹情深"
        ]
    },
    {
        "title": "欲中罪",
        "url": "movie-1367.html",
        "cover": "./17.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "犯罪/心理惊悚",
        "type": "剧集/限定剧",
        "tags": [
            "连环杀手",
            "神父",
            "告解室",
            "信仰危机"
        ]
    },
    {
        "title": "画皮",
        "url": "movie-1368.html",
        "cover": "./18.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "恐怖,爱情,奇幻",
        "type": "电影",
        "tags": [
            "翻拍",
            "狐妖",
            "惊悚",
            "人性"
        ]
    },
    {
        "title": "你的幸运日",
        "url": "movie-1369.html",
        "cover": "./19.jpg",
        "year": "2021",
        "region": "韩国",
        "genre": "惊悚,悬疑",
        "type": "电影",
        "tags": [
            "便利店",
            "巧合",
            "反套路",
            "随机杀人",
            "密室"
        ]
    },
    {
        "title": "飞星寻龙粤语",
        "url": "movie-1370.html",
        "cover": "./20.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "奇幻,动作,爱情",
        "type": "剧集",
        "tags": [
            "风水",
            "飞星",
            "寻龙",
            "粤语原声",
            "宿命"
        ]
    },
    {
        "title": "不择手段",
        "url": "movie-1371.html",
        "cover": "./21.jpg",
        "year": "2022",
        "region": "韩国",
        "genre": "动作,犯罪,惊悚",
        "type": "剧集",
        "tags": [
            "韩剧",
            "动作",
            "黑帮",
            "复仇",
            "卧底"
        ]
    },
    {
        "title": "多彩人生",
        "url": "movie-1372.html",
        "cover": "./22.jpg",
        "year": "2025",
        "region": "印度",
        "genre": "剧情/歌舞/家庭",
        "type": "电影",
        "tags": [
            "印度",
            "色彩",
            "家庭矛盾",
            "和解"
        ]
    },
    {
        "title": "越战勋章",
        "url": "movie-1373.html",
        "cover": "./23.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "剧情,战争",
        "type": "电影",
        "tags": [
            "战后创伤",
            "英雄主义",
            "社会批判"
        ]
    },
    {
        "title": "集结风暴",
        "url": "movie-1374.html",
        "cover": "./24.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作、科幻、惊悚",
        "type": "电视剧",
        "tags": [
            "超级英雄",
            "团队",
            "阴谋",
            "异能",
            "末日"
        ]
    },
    {
        "title": "温纳",
        "url": "movie-1375.html",
        "cover": "./25.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "传记/剧情/战争",
        "type": "电影",
        "tags": [
            "反战",
            "女性士兵",
            "真实改编",
            "心理创伤"
        ]
    },
    {
        "title": "生命因你动听",
        "url": "movie-1376.html",
        "cover": "./26.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情,音乐",
        "type": "电影",
        "tags": [
            "亲情",
            "自闭症",
            "治愈",
            "大提琴"
        ]
    },
    {
        "title": "窈窕绅士",
        "url": "movie-1377.html",
        "cover": "./27.jpg",
        "year": "2009",
        "region": "中国大陆",
        "genre": "喜剧,爱情",
        "type": "电影",
        "tags": [
            "麻雀变凤凰",
            "时尚",
            "搞笑",
            "土大款"
        ]
    },
    {
        "title": "夏日重现",
        "url": "movie-1378.html",
        "cover": "./28.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "悬疑,科幻,惊悚",
        "type": "剧集",
        "tags": [
            "时间循环",
            "小岛怪谈",
            "影子怪物",
            "青梅竹马",
            "推理"
        ]
    },
    {
        "title": "爱情大师",
        "url": "movie-1379.html",
        "cover": "./29.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "喜剧,爱情,奇幻",
        "type": "剧集",
        "tags": [
            "恋爱教练",
            "超能力",
            "错位"
        ]
    },
    {
        "title": "美杜莎无心",
        "url": "movie-1380.html",
        "cover": "./30.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑,惊悚,奇幻",
        "type": "剧集",
        "tags": [
            "复仇女神",
            "蛇蝎美人",
            "政治惊悚",
            "财阀"
        ]
    },
    {
        "title": "山花",
        "url": "movie-1381.html",
        "cover": "./31.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "剧情,家庭,乡村",
        "type": "电影",
        "tags": [
            "留守儿童",
            "乡村教师",
            "书信传情",
            "时代变迁"
        ]
    },
    {
        "title": "人渣正传",
        "url": "movie-1382.html",
        "cover": "./32.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "剧情/犯罪/黑色幽默",
        "type": "剧集",
        "tags": [
            "恶人主角",
            "讽刺",
            "律政",
            "社会"
        ]
    },
    {
        "title": "冬天的尾声",
        "url": "movie-1383.html",
        "cover": "./33.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "养老院",
            "黄昏恋",
            "绝症",
            "雪景",
            "告别"
        ]
    },
    {
        "title": "吸血鬼不死",
        "url": "movie-1384.html",
        "cover": "./34.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧,恐怖,奇幻",
        "type": "剧集",
        "tags": [
            "吸血鬼",
            "荒诞",
            "现代生活",
            "合租",
            "黑色幽默"
        ]
    },
    {
        "title": "侠盗义贼",
        "url": "movie-1385.html",
        "cover": "./35.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "动作/犯罪",
        "type": "电影",
        "tags": [
            "高智商犯罪",
            "劫富济贫",
            "双雄对决",
            "飙车",
            "警匪"
        ]
    },
    {
        "title": "希尔玛",
        "url": "movie-1386.html",
        "cover": "./36.jpg",
        "year": "2024",
        "region": "瑞典",
        "genre": "剧情,传记,历史",
        "type": "电影",
        "tags": [
            "女性艺术家",
            "抽象画先驱",
            "压抑与解放",
            "真实历史改编",
            "北欧冷感"
        ]
    },
    {
        "title": "烈血大风暴",
        "url": "movie-1387.html",
        "cover": "./37.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作,灾难,剧情",
        "type": "电影",
        "tags": [
            "龙卷风",
            "种族冲突",
            "气象战",
            "末世"
        ]
    },
    {
        "title": "打铜锣、补锅1965",
        "url": "movie-1388.html",
        "cover": "./38.jpg",
        "year": "1965",
        "region": "中国大陆",
        "genre": "戏曲/喜剧",
        "type": "戏曲电影",
        "tags": [
            "花鼓戏",
            "集体主义",
            "农村",
            "劝诫"
        ]
    },
    {
        "title": "格子间女人",
        "url": "movie-1389.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "职场,都市,女性",
        "type": "剧集",
        "tags": [
            "外企",
            "销售",
            "30+女性",
            "职场丛林"
        ]
    },
    {
        "title": "旧金山风物记",
        "url": "movie-1390.html",
        "cover": "./40.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "犯罪,年代",
        "type": "剧集",
        "tags": [
            "唐人街",
            "探案",
            "排华法案"
        ]
    },
    {
        "title": "真爱的谎言之破冰者",
        "url": "movie-1391.html",
        "cover": "./41.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/悬疑/刑侦",
        "type": "剧集",
        "tags": [
            "卧底",
            "缉毒",
            "假戏真做",
            "双面人生",
            "生死恋"
        ]
    },
    {
        "title": "甜心情缘",
        "url": "movie-1392.html",
        "cover": "./42.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "爱情,喜剧,音乐",
        "type": "剧集",
        "tags": [
            "青梅竹马",
            "甜品店",
            "破镜重圆",
            "泰式小清新"
        ]
    },
    {
        "title": "噢,上帝",
        "url": "movie-1393.html",
        "cover": "./43.jpg",
        "year": "2014",
        "region": "法国",
        "genre": "喜剧/奇幻/剧情",
        "type": "电影",
        "tags": [
            "上帝",
            "凡人",
            "灵魂交换",
            "荒诞"
        ]
    },
    {
        "title": "俗世情真粤语",
        "url": "movie-1394.html",
        "cover": "./44.jpg",
        "year": "2014",
        "region": "中国香港",
        "genre": "剧情/家庭/伦理",
        "type": "电视剧",
        "tags": [
            "市井生活",
            "邻里",
            "温情"
        ]
    },
    {
        "title": "陌生人的事",
        "url": "movie-1395.html",
        "cover": "./45.jpg",
        "year": "2026",
        "region": "法国",
        "genre": "剧情/悬疑",
        "type": "剧集",
        "tags": [
            "邻居",
            "偷窥",
            "秘密",
            "公寓楼"
        ]
    },
    {
        "title": "七大罪 戒律的复活",
        "url": "movie-1396.html",
        "cover": "./46.jpg",
        "year": "2018",
        "region": "日本",
        "genre": "奇幻、冒险、战斗",
        "type": "动漫剧集",
        "tags": [
            "热血",
            "魔神族",
            "骑士",
            "反转",
            "团战"
        ]
    },
    {
        "title": "我本坚强:吉米大战牧师",
        "url": "movie-1397.html",
        "cover": "./47.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧/剧情",
        "type": "电影",
        "tags": [
            "毒舌脱口秀",
            "信仰危机",
            "小镇风波"
        ]
    },
    {
        "title": "我们大家的河合庄 小剧场",
        "url": "movie-1398.html",
        "cover": "./48.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "喜剧,日常",
        "type": "电视剧",
        "tags": [
            "动漫改编",
            "单元剧",
            "搞笑同居"
        ]
    },
    {
        "title": "15年2023",
        "url": "movie-1399.html",
        "cover": "./49.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "科幻/剧情",
        "type": "电影",
        "tags": [
            "近未来",
            "AI伴侣",
            "伦理",
            "沉默叙事"
        ]
    },
    {
        "title": "爱你那天正下雨",
        "url": "movie-1400.html",
        "cover": "./50.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "爱情/文艺",
        "type": "电影",
        "tags": [
            "雨景",
            "摄影师",
            "失忆"
        ]
    },
    {
        "title": "铁齿铜牙纪晓岚4",
        "url": "movie-1401.html",
        "cover": "./51.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "历史,古装,喜剧",
        "type": "剧集",
        "tags": [
            "经典续作",
            "官场斗法",
            "文人风骨",
            "智斗"
        ]
    },
    {
        "title": "走路新郎哥粤语",
        "url": "movie-1402.html",
        "cover": "./52.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "喜剧爱情",
        "type": "剧集",
        "tags": [
            "经典TVB",
            "市井",
            "步行",
            "欢喜冤家",
            "粤语原声"
        ]
    },
    {
        "title": "假如爱有天意",
        "url": "movie-1403.html",
        "cover": "./53.jpg",
        "year": "2003",
        "region": "韩国",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "纯爱",
            "书信",
            "两代人"
        ]
    },
    {
        "title": "反复缺席",
        "url": "movie-1404.html",
        "cover": "./54.jpg",
        "year": "2022",
        "region": "意大利",
        "genre": "悬疑,家庭",
        "type": "剧集",
        "tags": [
            "失踪",
            "家族秘密",
            "非线性叙事",
            "心理",
            "小镇"
        ]
    },
    {
        "title": "被偷走的时光",
        "url": "movie-1405.html",
        "cover": "./55.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "阿尔茨海默",
            "母女",
            "记忆倒带"
        ]
    },
    {
        "title": "逆局",
        "url": "movie-1406.html",
        "cover": "./56.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "犯罪,悬疑,律政",
        "type": "剧集",
        "tags": [
            "监狱推理",
            "连环杀人",
            "法医细节",
            "双雄对峙"
        ]
    },
    {
        "title": "丛林公主",
        "url": "movie-1407.html",
        "cover": "./57.jpg",
        "year": "2024",
        "region": "巴西/美国",
        "genre": "冒险/奇幻/家庭",
        "type": "电影",
        "tags": [
            "亚马逊雨林",
            "女性冒险",
            "生态保护",
            "神秘部落"
        ]
    },
    {
        "title": "等到烟暖雨收第三季",
        "url": "movie-1408.html",
        "cover": "./58.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "古装,爱情,奇幻",
        "type": "剧集",
        "tags": [
            "甜虐",
            "先婚后爱",
            "玄幻",
            "续作"
        ]
    },
    {
        "title": "夏加尔与马列维奇",
        "url": "movie-1409.html",
        "cover": "./59.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "传记/艺术/剧情",
        "type": "电影",
        "tags": [
            "画家",
            "俄国先锋派",
            "爱情",
            "革命",
            "超现实"
        ]
    },
    {
        "title": "死刑台与电梯",
        "url": "movie-1410.html",
        "cover": "./60.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑、犯罪、心理",
        "type": "电影",
        "tags": [
            "密室",
            "倒计时",
            "司法漏洞"
        ]
    },
    {
        "title": "风流怨妇",
        "url": "movie-1411.html",
        "cover": "./61.jpg",
        "year": "1995",
        "region": "中国香港",
        "genre": "情色,剧情,悬疑",
        "type": "电影",
        "tags": [
            "邵氏风",
            "奇情",
            "复古",
            "女性",
            "反转"
        ]
    },
    {
        "title": "你的婚姻不是你的婚姻",
        "url": "movie-1412.html",
        "cover": "./62.jpg",
        "year": "2024",
        "region": "台湾",
        "genre": "剧情、爱情、科幻",
        "type": "剧集",
        "tags": [
            "婚姻制度",
            "亲密关系",
            "科技伦理",
            "单元剧"
        ]
    },
    {
        "title": "生活的城市",
        "url": "movie-1413.html",
        "cover": "./63.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/文艺",
        "type": "电影",
        "tags": [
            "都市",
            "孤独",
            "群像",
            "散文诗"
        ]
    },
    {
        "title": "最后的子弹",
        "url": "movie-1414.html",
        "cover": "./64.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "战争/历史",
        "type": "电影",
        "tags": [
            "抗战",
            "狙击手",
            "赎罪",
            "人性"
        ]
    },
    {
        "title": "战火四千金",
        "url": "movie-1415.html",
        "cover": "./65.jpg",
        "year": "2012",
        "region": "中国大陆",
        "genre": "战争/剧情/家庭",
        "type": "电视剧",
        "tags": [
            "抗战",
            "姐妹情",
            "家国仇恨",
            "谍战",
            "牺牲"
        ]
    },
    {
        "title": "惊魂手",
        "url": "movie-1416.html",
        "cover": "./66.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "鬼手",
            "灵媒",
            "诅咒物品",
            "宗教"
        ]
    },
    {
        "title": "冒险王卫斯理之支离人粤语",
        "url": "movie-1417.html",
        "cover": "./67.jpg",
        "year": "2018",
        "region": "香港",
        "genre": "科幻,悬疑,冒险",
        "type": "剧集",
        "tags": [
            "卫斯理",
            "外星文明",
            "人体改造",
            "粤语原声"
        ]
    },
    {
        "title": "杰逊王子战群妖",
        "url": "movie-1418.html",
        "cover": "./68.jpg",
        "year": "1963",
        "region": "意大利/法国",
        "genre": "奇幻/冒险/动作",
        "type": "电影",
        "tags": [
            "古希腊神话",
            "定格动画",
            "雷·哈里豪森",
            "史诗"
        ]
    },
    {
        "title": "错误的相遇",
        "url": "movie-1419.html",
        "cover": "./69.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "爱情,悬疑,奇幻",
        "type": "剧集",
        "tags": [
            "穿越",
            "替身",
            "车祸"
        ]
    },
    {
        "title": "通过免费公路",
        "url": "movie-1420.html",
        "cover": "./70.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "剧情/冒险",
        "type": "电影",
        "tags": [
            "公路片",
            "父亲",
            "自闭症",
            "旅行",
            "治愈"
        ]
    },
    {
        "title": "普蒂安",
        "url": "movie-1421.html",
        "cover": "./71.jpg",
        "year": "2023",
        "region": "法国/比利时",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "重生",
            "植物",
            "记忆",
            "寓言"
        ]
    },
    {
        "title": "拉普塔",
        "url": "movie-1422.html",
        "cover": "./72.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "科幻/冒险/奇幻",
        "type": "动画电影",
        "tags": [
            "天空之城",
            "机械兽",
            "失落科技"
        ]
    },
    {
        "title": "好女孩的秘密",
        "url": "movie-1423.html",
        "cover": "./73.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情/惊悚",
        "type": "电影",
        "tags": [
            "青春期",
            "社交媒体",
            "双重生活",
            "女性",
            "心理"
        ]
    },
    {
        "title": "杀戮星期天",
        "url": "movie-1424.html",
        "cover": "./74.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "动作,惊悚",
        "type": "电影",
        "tags": [
            "极限复仇",
            "黑色电影",
            "反转"
        ]
    },
    {
        "title": "电梯上",
        "url": "movie-1425.html",
        "cover": "./75.jpg",
        "year": "1991",
        "region": "中国大陆",
        "genre": "剧情,短片",
        "type": "电影",
        "tags": [
            "老上海",
            "邻里",
            "人生百态",
            "温情"
        ]
    },
    {
        "title": "小镇警官",
        "url": "movie-1426.html",
        "cover": "./76.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "刑侦/悬疑",
        "type": "剧集",
        "tags": [
            "小镇",
            "连环案",
            "警察",
            "人情社会",
            "秘密"
        ]
    },
    {
        "title": "人类之巅3",
        "url": "movie-1427.html",
        "cover": "./77.jpg",
        "year": "2024",
        "region": "阿根廷",
        "genre": "剧情/科幻",
        "type": "电影",
        "tags": [
            "末世",
            "意识上传",
            "孤独",
            "社群实验"
        ]
    },
    {
        "title": "无惧的爱",
        "url": "movie-1428.html",
        "cover": "./78.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "动作,爱情",
        "type": "电影",
        "tags": [
            "保镖",
            "政客女儿",
            "救赎"
        ]
    },
    {
        "title": "轰天俏娇娃",
        "url": "movie-1429.html",
        "cover": "./79.jpg",
        "year": "1996",
        "region": "中国香港",
        "genre": "喜剧,动作",
        "type": "电影",
        "tags": [
            "女警",
            "乌龙",
            "港式"
        ]
    },
    {
        "title": "别跟我提钱",
        "url": "movie-1430.html",
        "cover": "./80.jpg",
        "year": "2011",
        "region": "中国大陆",
        "genre": "喜剧/家庭/爱情",
        "type": "剧集",
        "tags": [
            "金钱观",
            "贫富差距",
            "裸婚时代",
            "海清式女主"
        ]
    },
    {
        "title": "月歌",
        "url": "movie-1431.html",
        "cover": "./81.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/奇幻",
        "type": "电影",
        "tags": [
            "民间传说",
            "三世轮回",
            "诗意"
        ]
    },
    {
        "title": "没关系,是青春啊!",
        "url": "movie-1432.html",
        "cover": "./82.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "校园剧情",
        "type": "电视剧",
        "tags": [
            "1990年代",
            "高考",
            "五人组"
        ]
    },
    {
        "title": "暴徒小镇",
        "url": "movie-1433.html",
        "cover": "./83.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "动作、犯罪、西部",
        "type": "电影",
        "tags": [
            "黑帮",
            "小镇",
            "以暴制暴",
            "孤胆英雄"
        ]
    },
    {
        "title": "致命柔情",
        "url": "movie-1434.html",
        "cover": "./84.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "爱情、惊悚、悬疑",
        "type": "电影",
        "tags": [
            "蛇蝎美人",
            "骗局",
            "反转",
            "心理战"
        ]
    },
    {
        "title": "夺命高楼",
        "url": "movie-1435.html",
        "cover": "./85.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "密室",
            "垂直空间",
            "生存游戏",
            "反乌托邦",
            "烧脑"
        ]
    },
    {
        "title": "血染拜占庭",
        "url": "movie-1436.html",
        "cover": "./86.jpg",
        "year": "2024",
        "region": "英国/爱尔兰",
        "genre": "恐怖/奇幻/历史",
        "type": "电影",
        "tags": [
            "吸血鬼",
            "女性",
            "历史",
            "复仇",
            "永生"
        ]
    },
    {
        "title": "乔琪·斯通的梦想人生",
        "url": "movie-1437.html",
        "cover": "./87.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "剧情,喜剧",
        "type": "剧集",
        "tags": [
            "励志",
            "女性成长",
            "脱口秀",
            "纽约",
            "追梦"
        ]
    },
    {
        "title": "荒芜之城",
        "url": "movie-1438.html",
        "cover": "./88.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "科幻/悬疑/灾难",
        "type": "电影",
        "tags": [
            "废土美学",
            "逆向进化",
            "植物失控",
            "人性实验室"
        ]
    },
    {
        "title": "300杀手",
        "url": "movie-1439.html",
        "cover": "./89.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,科幻",
        "type": "电影",
        "tags": [
            "克隆",
            "冷兵器",
            "反乌托邦",
            "暴力美学"
        ]
    },
    {
        "title": "谎言的诱惑",
        "url": "movie-1440.html",
        "cover": "./90.jpg",
        "year": "2017",
        "region": "中国大陆",
        "genre": "都市,情感,悬疑",
        "type": "剧集",
        "tags": [
            "出轨",
            "婚姻危机",
            "谎言堆叠",
            "虐心"
        ]
    },
    {
        "title": "鬼眼开",
        "url": "movie-1441.html",
        "cover": "./91.jpg",
        "year": "2022",
        "region": "中国台湾",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "阴阳眼",
            "冤亲债主",
            "校园怪谈",
            "反转"
        ]
    },
    {
        "title": "荷索的自画像",
        "url": "movie-1442.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "德国",
        "genre": "纪录片",
        "type": "电影",
        "tags": [
            "伪纪录片",
            "自反性",
            "创作困境"
        ]
    },
    {
        "title": "泰山与珍妮",
        "url": "movie-1443.html",
        "cover": "./93.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "丛林,冒险,爱情,家庭",
        "type": "电影 动画,冒险,爱情",
        "tags": [
            "丛林",
            "冒险",
            "爱情",
            "家庭",
            "自然保护"
        ]
    },
    {
        "title": "地堡",
        "url": "movie-1444.html",
        "cover": "./94.jpg",
        "year": "2026",
        "region": "德国",
        "genre": "惊悚,悬疑,科幻",
        "type": "电影",
        "tags": [
            "密室",
            "末日生存",
            "人性实验"
        ]
    },
    {
        "title": "淘金者1937",
        "url": "movie-1445.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/历史/冒险",
        "type": "电影",
        "tags": [
            "民国",
            "淘金",
            "人性",
            "风雪"
        ]
    },
    {
        "title": "美人鱼第三季",
        "url": "movie-1446.html",
        "cover": "./96.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "奇幻,爱情",
        "type": "剧集",
        "tags": [
            "海洋",
            "环保",
            "虐恋",
            "神话"
        ]
    },
    {
        "title": "奇迹少女2023",
        "url": "movie-1447.html",
        "cover": "./97.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "动画,动作,奇幻",
        "type": "电影",
        "tags": [
            "少女英雄",
            "巴黎",
            "变身",
            "守护甜心"
        ]
    },
    {
        "title": "大时代",
        "url": "movie-1448.html",
        "cover": "./98.jpg",
        "year": "1992",
        "region": "中国香港",
        "genre": "剧情/商战",
        "type": "电视剧",
        "tags": [
            "经典",
            "股市",
            "家族",
            "复仇"
        ]
    },
    {
        "title": "失眠症",
        "url": "movie-1449.html",
        "cover": "./99.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑心理",
        "type": "电影",
        "tags": [
            "失眠",
            "平行时空",
            "自我对抗",
            "精神分裂"
        ]
    },
    {
        "title": "艳阳光",
        "url": "movie-1450.html",
        "cover": "./100.jpg",
        "year": "2026",
        "region": "中国台湾",
        "genre": "剧情,历史,女性",
        "type": "剧集",
        "tags": [
            "日据时代",
            "酒家女",
            "地下反抗"
        ]
    },
    {
        "title": "全职高手特别篇",
        "url": "movie-1451.html",
        "cover": "./101.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动作,竞技,热血",
        "type": "动漫",
        "tags": [
            "电竞",
            "网游",
            "战斗",
            "团队",
            "荣耀"
        ]
    },
    {
        "title": "荒凉幻境",
        "url": "movie-1452.html",
        "cover": "./102.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "科幻,剧情",
        "type": "电影",
        "tags": [
            "虚拟现实",
            "存在主义",
            "孤独",
            "AI伦理"
        ]
    },
    {
        "title": "女特警",
        "url": "movie-1453.html",
        "cover": "./103.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "动作/悬疑",
        "type": "剧集",
        "tags": [
            "女性力量",
            "特战队",
            "卧底"
        ]
    },
    {
        "title": "心慌方2:超立方体",
        "url": "movie-1454.html",
        "cover": "./104.jpg",
        "year": "2025",
        "region": "加拿大",
        "genre": "科幻,惊悚,悬疑",
        "type": "电影",
        "tags": [
            "多维空间",
            "密室逃脱",
            "烧脑",
            "生存游戏"
        ]
    },
    {
        "title": "远征远征",
        "url": "movie-1455.html",
        "cover": "./105.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史,战争",
        "type": "剧集",
        "tags": [
            "缅甸战场",
            "远征军",
            "生存",
            "人性"
        ]
    },
    {
        "title": "爷爷的人生滑板",
        "url": "movie-1456.html",
        "cover": "./106.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "家庭喜剧",
        "type": "电影",
        "tags": [
            "代沟",
            "网红",
            "滑板",
            "治愈"
        ]
    },
    {
        "title": "堕落天使的回忆录",
        "url": "movie-1457.html",
        "cover": "./107.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "爱情,文艺",
        "type": "电影",
        "tags": [
            "黑白摄影",
            "存在主义",
            "巴黎",
            "妓女与画家"
        ]
    },
    {
        "title": "精灵宝可梦:大家的故事",
        "url": "movie-1458.html",
        "cover": "./108.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动画,冒险",
        "type": "动画电影",
        "tags": [
            "群像剧",
            "宝可梦",
            "情感羁绊"
        ]
    },
    {
        "title": "聊斋残卷之六道天书",
        "url": "movie-1459.html",
        "cover": "./109.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "奇幻,古装",
        "type": "网络电影",
        "tags": [
            "捉妖",
            "轮回",
            "东方志怪",
            "书生"
        ]
    },
    {
        "title": "双枪假面人",
        "url": "movie-1460.html",
        "cover": "./110.jpg",
        "year": "1993",
        "region": "中国香港",
        "genre": "动作/武侠/悬疑",
        "type": "电影",
        "tags": [
            "西部",
            "枪战",
            "面具",
            "复仇",
            "江湖"
        ]
    },
    {
        "title": "谁的青春不热血之深流不息",
        "url": "movie-1461.html",
        "cover": "./111.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "青春/运动/剧情",
        "type": "电视剧",
        "tags": [
            "游泳",
            "接力",
            "友谊",
            "梦想"
        ]
    },
    {
        "title": "空难生还乐队",
        "url": "movie-1462.html",
        "cover": "./112.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "剧情,音乐,生存",
        "type": "电影",
        "tags": [
            "空难奇迹",
            "乐队",
            "幸存者创伤",
            "重生"
        ]
    },
    {
        "title": "总是搞砸的单身女人迪亚!",
        "url": "movie-1463.html",
        "cover": "./113.jpg",
        "year": "2021",
        "region": "西班牙",
        "genre": "喜剧/爱情",
        "type": "电视剧",
        "tags": [
            "女性",
            "成长",
            "搞笑",
            "社死现场",
            "马德里"
        ]
    },
    {
        "title": "波斯语版",
        "url": "movie-1464.html",
        "cover": "./114.jpg",
        "year": "2020",
        "region": "美国/伊朗",
        "genre": "剧情、战争、历史",
        "type": "电影",
        "tags": [
            "纳粹集中营",
            "语言骗局",
            "求生",
            "虚构波斯语",
            "人性微光"
        ]
    },
    {
        "title": "邯郸起义",
        "url": "movie-1465.html",
        "cover": "./115.jpg",
        "year": "2006",
        "region": "中国",
        "genre": "历史,战争",
        "type": "电影",
        "tags": [
            "内战",
            "起义",
            "牺牲",
            "真实事件",
            "群像"
        ]
    },
    {
        "title": "凉河擒凶",
        "url": "movie-1466.html",
        "cover": "./116.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "犯罪,悬疑,动作",
        "type": "电影",
        "tags": [
            "水上行凶",
            "连环杀手",
            "追凶复仇",
            "民间侦探"
        ]
    },
    {
        "title": "混沌之子",
        "url": "movie-1467.html",
        "cover": "./117.jpg",
        "year": "2017",
        "region": "日本",
        "genre": "科幻",
        "type": "剧集",
        "tags": [
            "妄想",
            "超能力",
            "悬疑",
            "心理学",
            "致郁"
        ]
    },
    {
        "title": "玛姬的计划",
        "url": "movie-1468.html",
        "cover": "./118.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "都市独立女性",
            "生子闹剧",
            "三角错位"
        ]
    },
    {
        "title": "美国大法师",
        "url": "movie-1469.html",
        "cover": "./119.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "恐怖、惊悚、讽刺",
        "type": "电影",
        "tags": [
            "驱魔",
            "网红",
            "消费主义",
            "反讽"
        ]
    },
    {
        "title": "极限关头",
        "url": "movie-1470.html",
        "cover": "./120.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动作,灾难,惊悚",
        "type": "电影",
        "tags": [
            "高空",
            "极限运动",
            "生死时速"
        ]
    },
    {
        "title": "暗夜之女",
        "url": "movie-1471.html",
        "cover": "./121.jpg",
        "year": "1971",
        "region": "法国",
        "genre": "恐怖、情色",
        "type": "电影",
        "tags": [
            "吸血鬼",
            "女同",
            "哥特",
            "文艺",
            "复仇"
        ]
    },
    {
        "title": "撒谎者雅各布",
        "url": "movie-1472.html",
        "cover": "./122.jpg",
        "year": "1975",
        "region": "德国",
        "genre": "剧情,战争,历史",
        "type": "电影",
        "tags": [
            "二战",
            "犹太人",
            "谎言",
            "希望",
            "人性"
        ]
    },
    {
        "title": "巅峰战士",
        "url": "movie-1473.html",
        "cover": "./123.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "动作、冒险、运动",
        "type": "电影",
        "tags": [
            "极限登山",
            "救援",
            "兄弟情",
            "垂直恐惧"
        ]
    },
    {
        "title": "3000万",
        "url": "movie-1474.html",
        "cover": "./124.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "犯罪,动作",
        "type": "电影",
        "tags": [
            "直播",
            "赌博",
            "底层",
            "大逃杀",
            "社会批判"
        ]
    },
    {
        "title": "女佣2009",
        "url": "movie-1475.html",
        "cover": "./125.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情/惊悚/社会",
        "type": "电影",
        "tags": [
            "阶层",
            "复仇",
            "金融危机",
            "豪宅"
        ]
    },
    {
        "title": "绝世情圣",
        "url": "movie-1476.html",
        "cover": "./126.jpg",
        "year": "2017",
        "region": "美国",
        "genre": "喜剧,爱情",
        "type": "剧集",
        "tags": [
            "花花公子",
            "反套路",
            "轻松下饭"
        ]
    },
    {
        "title": "滴水之恩",
        "url": "movie-1477.html",
        "cover": "./127.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "乡村",
            "报恩",
            "秘密",
            "人性"
        ]
    },
    {
        "title": "芝加哥警署第八季",
        "url": "movie-1478.html",
        "cover": "./128.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "犯罪,动作,悬疑",
        "type": "剧集",
        "tags": [
            "警匪",
            "单元剧",
            "情报组",
            "暴力执法"
        ]
    },
    {
        "title": "审死官",
        "url": "movie-1479.html",
        "cover": "./129.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "悬疑律政",
        "type": "电影",
        "tags": [
            "民国奇案",
            "法庭对决",
            "翻案",
            "双雄"
        ]
    },
    {
        "title": "裸命公寓",
        "url": "movie-1480.html",
        "cover": "./130.jpg",
        "year": "2026",
        "region": "中国香港",
        "genre": "剧情,犯罪,社会",
        "type": "电影",
        "tags": [
            "公屋",
            "底层",
            "集体自杀",
            "调查记者"
        ]
    },
    {
        "title": "天才少年之暴风山庄",
        "url": "movie-1481.html",
        "cover": "./131.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "本格推理",
            "少年侦探",
            "暴风雪山庄",
            "密室"
        ]
    },
    {
        "title": "天罗地网",
        "url": "movie-1482.html",
        "cover": "./132.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "刑侦/反诈",
        "type": "电视剧",
        "tags": [
            "网络诈骗",
            "高智商",
            "猫鼠游戏",
            "团队作战"
        ]
    },
    {
        "title": "曾达的囚徒",
        "url": "movie-1483.html",
        "cover": "./133.jpg",
        "year": "2022",
        "region": "英国",
        "genre": "冒险,剧情,动作",
        "type": "电影",
        "tags": [
            "名著改编",
            "宫廷",
            "替身",
            "骑士",
            "复仇"
        ]
    },
    {
        "title": "新闻女王2",
        "url": "movie-1484.html",
        "cover": "./134.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情/职场",
        "type": "剧集",
        "tags": [
            "新闻业",
            "女性斗争",
            "网络舆论",
            "续集"
        ]
    },
    {
        "title": "蜘蛛侠",
        "url": "movie-1485.html",
        "cover": "./135.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,科幻,冒险",
        "type": "电影",
        "tags": [
            "超级英雄",
            "平行宇宙",
            "变异",
            "责任",
            "暗黑"
        ]
    },
    {
        "title": "星游记",
        "url": "movie-1486.html",
        "cover": "./136.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "科幻/冒险/动画",
        "type": "剧集",
        "tags": [
            "星际航行",
            "废土",
            "少年热血"
        ]
    },
    {
        "title": "被迫情死的日本之夏",
        "url": "movie-1487.html",
        "cover": "./137.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "剧情/爱情/战争",
        "type": "电影",
        "tags": [
            "二战反思",
            "禁忌之恋",
            "废墟美学"
        ]
    },
    {
        "title": "搞事乐园",
        "url": "movie-1488.html",
        "cover": "./138.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "悬疑,惊悚,科幻",
        "type": "剧集",
        "tags": [
            "游乐园",
            "阴谋论",
            "觉醒",
            "控制",
            "逃离"
        ]
    },
    {
        "title": "护工故事",
        "url": "movie-1489.html",
        "cover": "./139.jpg",
        "year": "2016",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电视剧",
        "tags": [
            "养老",
            "温情",
            "社会",
            "治愈"
        ]
    },
    {
        "title": "阿茹茉妮",
        "url": "movie-1490.html",
        "cover": "./140.jpg",
        "year": "2023",
        "region": "法国/日本",
        "genre": "奇幻,爱情,音乐",
        "type": "动画短片",
        "tags": [
            "法语香颂",
            "手绘",
            "都市奇谭"
        ]
    },
    {
        "title": "山神异闻录",
        "url": "movie-1491.html",
        "cover": "./141.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑,惊悚,民俗",
        "type": "电影",
        "tags": [
            "山村",
            "祭祀",
            "怪谈",
            "调查记者"
        ]
    },
    {
        "title": "阿娘使道传",
        "url": "movie-1492.html",
        "cover": "./142.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "古装,奇幻,悬疑",
        "type": "剧集",
        "tags": [
            "鬼怪",
            "女鬼",
            "朝鲜王朝"
        ]
    },
    {
        "title": "将夜2",
        "url": "movie-1493.html",
        "cover": "./143.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装,奇幻,动作",
        "type": "剧集",
        "tags": [
            "玄幻",
            "修行",
            "逆天改命",
            "昊天"
        ]
    },
    {
        "title": "小两口",
        "url": "movie-1494.html",
        "cover": "./144.jpg",
        "year": "2013",
        "region": "中国大陆",
        "genre": "喜剧,爱情,家庭",
        "type": "剧集",
        "tags": [
            "婚姻",
            "现实",
            "成长",
            "轻松"
        ]
    },
    {
        "title": "妻子变成小学生",
        "url": "movie-1495.html",
        "cover": "./145.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "奇幻家庭",
        "type": "剧集",
        "tags": [
            "转世重生",
            "催泪治愈",
            "年龄差",
            "夫妻情深"
        ]
    },
    {
        "title": "夏日的星期天",
        "url": "movie-1496.html",
        "cover": "./146.jpg",
        "year": "2022",
        "region": "法国",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "夏日",
            "乡间别墅",
            "三代同堂",
            "秘密"
        ]
    },
    {
        "title": "虎魄惊魂",
        "url": "movie-1497.html",
        "cover": "./147.jpg",
        "year": "1986",
        "region": "中国香港",
        "genre": "恐怖,动作",
        "type": "电影",
        "tags": [
            "僵尸",
            "警匪",
            "邪术"
        ]
    },
    {
        "title": "身处困境",
        "url": "movie-1498.html",
        "cover": "./148.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "悬疑、心理",
        "type": "电视剧",
        "tags": [
            "密室",
            "生存",
            "心理博弈",
            "职场"
        ]
    },
    {
        "title": "疯狂的心",
        "url": "movie-1499.html",
        "cover": "./149.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/音乐/爱情",
        "type": "电影",
        "tags": [
            "乡村音乐",
            "浪子回头",
            "中年危机",
            "治愈",
            "公路"
        ]
    },
    {
        "title": "人海绿皮书粤语",
        "url": "movie-1500.html",
        "cover": "./150.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情喜剧",
        "type": "电影",
        "tags": [
            "移民中介",
            "黑色幽默",
            "粤语原声",
            "身份认同"
        ]
    },
    {
        "title": "去年冬天、与你分手",
        "url": "movie-1501.html",
        "cover": "./1.jpg",
        "year": "2018",
        "region": "日本",
        "genre": "悬疑/爱情/犯罪",
        "type": "电影",
        "tags": [
            "反转复仇",
            "盲女摄影",
            "小说家",
            "火中告白"
        ]
    },
    {
        "title": "轮回2023",
        "url": "movie-1502.html",
        "cover": "./2.jpg",
        "year": "2023",
        "region": "泰国",
        "genre": "惊悚,悬疑,宗教",
        "type": "电影",
        "tags": [
            "因果报应",
            "时间循环",
            "东南亚民俗"
        ]
    },
    {
        "title": "嘻嘻嘻嘻吸血鬼",
        "url": "movie-1503.html",
        "cover": "./3.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "喜剧/恐怖/奇幻",
        "type": "电影",
        "tags": [
            "吸血鬼",
            "搞笑",
            "合租",
            "社畜"
        ]
    },
    {
        "title": "和平卫士",
        "url": "movie-1504.html",
        "cover": "./4.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "剧情,动作,悬疑",
        "type": "剧集",
        "tags": [
            "维和",
            "阴谋",
            "小队作战",
            "境外",
            "使命感"
        ]
    },
    {
        "title": "魔诫奇兵2",
        "url": "movie-1505.html",
        "cover": "./5.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/奇幻",
        "type": "电影",
        "tags": [
            "丛林冒险",
            "远古诅咒",
            "女性主角",
            "冷兵器对战",
            "续作升级"
        ]
    },
    {
        "title": "兔子杀人啊!",
        "url": "movie-1506.html",
        "cover": "./6.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "恐怖,喜剧",
        "type": "剧集",
        "tags": [
            "萌物反派",
            "血浆",
            "黑色幽默",
            "诅咒"
        ]
    },
    {
        "title": "美丽至极",
        "url": "movie-1507.html",
        "cover": "./7.jpg",
        "year": "2025",
        "region": "意大利",
        "genre": "剧情,女性",
        "type": "电影",
        "tags": [
            "模特行业",
            "身体羞辱",
            "母女关系",
            "自我接纳"
        ]
    },
    {
        "title": "小屁孩日记2",
        "url": "movie-1508.html",
        "cover": "./8.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,家庭,动画",
        "type": "电影",
        "tags": [
            "校园",
            "成长烦恼",
            "搞笑"
        ]
    },
    {
        "title": "终极尖兵",
        "url": "movie-1509.html",
        "cover": "./9.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "动作,警匪",
        "type": "电影",
        "tags": [
            "特警",
            "反恐",
            "硬汉",
            "兄弟情",
            "绝境救援"
        ]
    },
    {
        "title": "浮尘下的枪声",
        "url": "movie-1510.html",
        "cover": "./10.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑/犯罪",
        "type": "剧集",
        "tags": [
            "双男主",
            "旧案重查",
            "北疆",
            "层层反转"
        ]
    },
    {
        "title": "主妇狂想曲",
        "url": "movie-1511.html",
        "cover": "./11.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧/奇幻",
        "type": "电影",
        "tags": [
            "家庭主妇",
            "脑内小剧场",
            "解放",
            "幽默",
            "自我成长"
        ]
    },
    {
        "title": "人类本性",
        "url": "movie-1512.html",
        "cover": "./12.jpg",
        "year": "2001",
        "region": "英国,美国",
        "genre": "剧情,喜剧,奇幻",
        "type": "电影",
        "tags": [
            "科学",
            "自然",
            "荒诞",
            "伦理",
            "原始"
        ]
    },
    {
        "title": "警匪较量珠三角",
        "url": "movie-1513.html",
        "cover": "./13.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "刑侦/犯罪",
        "type": "剧集",
        "tags": [
            "真实案件",
            "卧底",
            "枪战",
            "群像"
        ]
    },
    {
        "title": "走夜路的男人",
        "url": "movie-1514.html",
        "cover": "./14.jpg",
        "year": "2017",
        "region": "韩国",
        "genre": "悬疑",
        "type": "电影",
        "tags": [
            "惊悚",
            "犯罪",
            "夜行",
            "连环案",
            "反转"
        ]
    },
    {
        "title": "地狱神警",
        "url": "movie-1515.html",
        "cover": "./15.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "西部奇幻",
        "type": "电影",
        "tags": [
            "恶魔",
            "西部片",
            "契约",
            "超自然"
        ]
    },
    {
        "title": "鞋猫剑客",
        "url": "movie-1516.html",
        "cover": "./16.jpg",
        "year": "2011",
        "region": "美国",
        "genre": "喜剧,动作,冒险,动画",
        "type": "电影/动画",
        "tags": [
            "靴猫外传",
            "卖萌耍酷",
            "拉丁风情",
            "猫狗搭档",
            "西部片致敬"
        ]
    },
    {
        "title": "逆流前进",
        "url": "movie-1517.html",
        "cover": "./17.jpg",
        "year": "2023",
        "region": "中国",
        "genre": "剧情,励志",
        "type": "电影",
        "tags": [
            "江河漂流",
            "断臂",
            "父子",
            "极限运动"
        ]
    },
    {
        "title": "伙伴夫妻",
        "url": "movie-1518.html",
        "cover": "./18.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,家庭,伦理",
        "type": "电视剧",
        "tags": [
            "契约婚姻",
            "丁克",
            "职场",
            "假戏真做",
            "轻喜剧"
        ]
    },
    {
        "title": "推新人的故事",
        "url": "movie-1519.html",
        "cover": "./19.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,剧情",
        "type": "电影",
        "tags": [
            "娱乐圈",
            "经纪人",
            "选秀",
            "反转"
        ]
    },
    {
        "title": "真实身分",
        "url": "movie-1520.html",
        "cover": "./20.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "悬疑/惊悚/剧情",
        "type": "电影",
        "tags": [
            "间谍",
            "失忆",
            "亲情救赎",
            "本土悬疑"
        ]
    },
    {
        "title": "射雕英雄传之东邪西毒",
        "url": "movie-1521.html",
        "cover": "./21.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "武侠,剧情",
        "type": "电影",
        "tags": [
            "金庸",
            "前传",
            "黄药师",
            "欧阳锋"
        ]
    },
    {
        "title": "滞留之死",
        "url": "movie-1522.html",
        "cover": "./22.jpg",
        "year": "2027",
        "region": "日本",
        "genre": "恐怖,科幻,心理",
        "type": "电影",
        "tags": [
            "时空循环",
            "机场",
            "身份认知",
            "封闭空间",
            "存在主义"
        ]
    },
    {
        "title": "大唐歌飞",
        "url": "movie-1523.html",
        "cover": "./23.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "历史,音乐,剧情",
        "type": "电视剧",
        "tags": [
            "唐朝乐籍",
            "女性群像",
            "诗词入曲"
        ]
    },
    {
        "title": "我所看到的都是你",
        "url": "movie-1524.html",
        "cover": "./24.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "悬疑,爱情,科幻",
        "type": "电影",
        "tags": [
            "视觉移植",
            "畸恋",
            "替身虐恋"
        ]
    },
    {
        "title": "拉. 拉",
        "url": "movie-1525.html",
        "cover": "./25.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "音乐/剧情/奇幻",
        "type": "电影",
        "tags": [
            "失语",
            "旋律",
            "城市",
            "治愈"
        ]
    },
    {
        "title": "青蛙的叫声",
        "url": "movie-1526.html",
        "cover": "./26.jpg",
        "year": "2015",
        "region": "法国",
        "genre": "悬疑/剧情",
        "type": "电影",
        "tags": [
            "小镇秘密",
            "童年阴影",
            "人性实验",
            "开放式结局"
        ]
    },
    {
        "title": "幸福还有多远",
        "url": "movie-1527.html",
        "cover": "./27.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情、家庭、伦理",
        "type": "电视剧",
        "tags": [
            "中偶",
            "再婚家庭",
            "遗产纠纷",
            "温情"
        ]
    },
    {
        "title": "超能追缉",
        "url": "movie-1528.html",
        "cover": "./28.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/科幻",
        "type": "电影",
        "tags": [
            "超能力",
            "追逃",
            "阴谋论",
            "反英雄"
        ]
    },
    {
        "title": "黑人商业教父",
        "url": "movie-1529.html",
        "cover": "./29.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "传记,剧情,历史",
        "type": "电影/传记",
        "tags": [
            "种族歧视",
            "企业家",
            "逆袭",
            "华尔街",
            "60年代"
        ]
    },
    {
        "title": "精灵宝可梦:超梦的逆袭",
        "url": "movie-1530.html",
        "cover": "./30.jpg",
        "year": "1998",
        "region": "日本",
        "genre": "动画、奇幻、动作",
        "type": "电影",
        "tags": [
            "宝可梦",
            "克隆主题",
            "哲学思辨"
        ]
    },
    {
        "title": "姐姐死了",
        "url": "movie-1531.html",
        "cover": "./31.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "悬疑/犯罪",
        "type": "剧集",
        "tags": [
            "姐妹",
            "复仇",
            "谎言",
            "双胞胎",
            "烧脑"
        ]
    },
    {
        "title": "撞车国语",
        "url": "movie-1532.html",
        "cover": "./32.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "犯罪/剧情",
        "type": "电影",
        "tags": [
            "配音",
            "替身",
            "谎言",
            "真相"
        ]
    },
    {
        "title": "格林奶奶的睡美人",
        "url": "movie-1533.html",
        "cover": "./33.jpg",
        "year": "2023",
        "region": "法国",
        "genre": "奇幻、童话、温情",
        "type": "动画电影",
        "tags": [
            "改编",
            "倒叙",
            "隔代情",
            "纺锤",
            "百年之约"
        ]
    },
    {
        "title": "灵魂停留",
        "url": "movie-1534.html",
        "cover": "./34.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "奇幻,剧情",
        "type": "剧集",
        "tags": [
            "灵魂",
            "车站",
            "单元剧",
            "治愈"
        ]
    },
    {
        "title": "通识教育",
        "url": "movie-1535.html",
        "cover": "./35.jpg",
        "year": "2026",
        "region": "中国台湾",
        "genre": "校园/喜剧/社会议题",
        "type": "剧集",
        "tags": [
            "大学校园",
            "选修课",
            "师生斗法",
            "思想启蒙"
        ]
    },
    {
        "title": "海洋男孩",
        "url": "movie-1536.html",
        "cover": "./36.jpg",
        "year": "2023",
        "region": "澳大利亚",
        "genre": "家庭/冒险",
        "type": "电影",
        "tags": [
            "环保",
            "少年成长",
            "神秘生物"
        ]
    },
    {
        "title": "春之祭",
        "url": "movie-1537.html",
        "cover": "./37.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "仪式",
            "家族秘密",
            "时空循环"
        ]
    },
    {
        "title": "同心草",
        "url": "movie-1538.html",
        "cover": "./38.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "亲情",
            "农村",
            "寻根"
        ]
    },
    {
        "title": "沙皇的信使",
        "url": "movie-1539.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "历史/动作",
        "type": "电影",
        "tags": [
            "沙俄",
            "复仇",
            "哥萨克",
            "雪原"
        ]
    },
    {
        "title": "法米拉",
        "url": "movie-1540.html",
        "cover": "./40.jpg",
        "year": "2018",
        "region": "中国大陆",
        "genre": "科幻/动作",
        "type": "电影/网络",
        "tags": [
            "机甲格斗",
            "废土风",
            "硬核科幻"
        ]
    },
    {
        "title": "桑多",
        "url": "movie-1541.html",
        "cover": "./41.jpg",
        "year": "2025",
        "region": "意大利",
        "genre": "剧情历史",
        "type": "电影",
        "tags": [
            "文艺复兴",
            "雕塑",
            "替身",
            "艺术犯罪"
        ]
    },
    {
        "title": "浪漫风暴",
        "url": "movie-1542.html",
        "cover": "./42.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "爱情/灾难/动作",
        "type": "电影",
        "tags": [
            "台风",
            "极限求生",
            "浪漫",
            "港片",
            "生死恋"
        ]
    },
    {
        "title": "人间魔",
        "url": "movie-1543.html",
        "cover": "./43.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "恐怖/动作",
        "type": "电影",
        "tags": [
            "捉鬼",
            "道士",
            "都市传说"
        ]
    },
    {
        "title": "我曾上镜",
        "url": "movie-1544.html",
        "cover": "./44.jpg",
        "year": "2018",
        "region": "法国",
        "genre": "剧情/黑色幽默",
        "type": "电影",
        "tags": [
            "媒体伦理",
            "过气网红",
            "身份错位",
            "讽刺"
        ]
    },
    {
        "title": "缘:出云新娘",
        "url": "movie-1545.html",
        "cover": "./45.jpg",
        "year": "2016",
        "region": "日本",
        "genre": "爱情、奇幻",
        "type": "电影",
        "tags": [
            "神社",
            "结缘",
            "穿越",
            "治愈",
            "岛根"
        ]
    },
    {
        "title": "毒品战争:卡马雷纳的故事",
        "url": "movie-1546.html",
        "cover": "./46.jpg",
        "year": "2024",
        "region": "美国/墨西哥",
        "genre": "犯罪/传记/惊悚",
        "type": "剧集",
        "tags": [
            "真实事件改编",
            "DEA探员",
            "墨西哥贩毒集团",
            "酷刑细节",
            "国际政治"
        ]
    },
    {
        "title": "水退之后2:伤痕",
        "url": "movie-1547.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情,灾难,家庭",
        "type": "电影",
        "tags": [
            "续集",
            "创伤",
            "重建",
            "人性",
            "催泪"
        ]
    },
    {
        "title": "烟硝中,我们狂欢",
        "url": "movie-1548.html",
        "cover": "./48.jpg",
        "year": "2024",
        "region": "乌克兰",
        "genre": "剧情,战争",
        "type": "电影",
        "tags": [
            "战争",
            "艺术",
            "生存",
            "黑色幽默"
        ]
    },
    {
        "title": "关于爱",
        "url": "movie-1549.html",
        "cover": "./49.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "三段式",
            "城市爱情",
            "现实主义",
            "文艺"
        ]
    },
    {
        "title": "巴士阿叔事件",
        "url": "movie-1550.html",
        "cover": "./50.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "剧情/社会",
        "type": "电影",
        "tags": [
            "真实事件改编",
            "网络暴力",
            "小人物",
            "港味"
        ]
    },
    {
        "title": "我的第二青春",
        "url": "movie-1551.html",
        "cover": "./51.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情/奇幻/爱情",
        "type": "剧集",
        "tags": [
            "重生",
            "中年危机",
            "校园怀旧"
        ]
    },
    {
        "title": "金属摇篮曲",
        "url": "movie-1552.html",
        "cover": "./52.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "音乐,剧情,家庭",
        "type": "电影",
        "tags": [
            "摇滚",
            "育儿",
            "反差",
            "成长",
            "温情"
        ]
    },
    {
        "title": "黛洛维夫人",
        "url": "movie-1553.html",
        "cover": "./53.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "剧情、文艺、心理",
        "type": "电影",
        "tags": [
            "伍尔夫",
            "意识流",
            "女性中年危机",
            "双时空"
        ]
    },
    {
        "title": "挑战阿拉斯加",
        "url": "movie-1554.html",
        "cover": "./54.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "冒险/剧情",
        "type": "电影",
        "tags": [
            "荒野求生",
            "极地",
            "父女",
            "生存"
        ]
    },
    {
        "title": "勇敢说爱",
        "url": "movie-1555.html",
        "cover": "./55.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "暗恋",
            "双向奔赴",
            "治愈",
            "青春",
            "校园"
        ]
    },
    {
        "title": "桃花映江山",
        "url": "movie-1556.html",
        "cover": "./56.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装/爱情/权谋",
        "type": "剧集",
        "tags": [
            "架空历史",
            "先婚后爱",
            "女强",
            "宫斗",
            "唯美古风"
        ]
    },
    {
        "title": "神奇夺命计",
        "url": "movie-1557.html",
        "cover": "./57.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "喜剧、悬疑、犯罪",
        "type": "电影",
        "tags": [
            "小成本",
            "笨贼",
            "连环计",
            "密室"
        ]
    },
    {
        "title": "迷雾惊魂",
        "url": "movie-1558.html",
        "cover": "./58.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑/惊悚/灾难",
        "type": "电影",
        "tags": [
            "迷雾",
            "孤岛",
            "连环杀人",
            "心理博弈",
            "全女性阵容"
        ]
    },
    {
        "title": "大灌篮",
        "url": "movie-1559.html",
        "cover": "./59.jpg",
        "year": "2008",
        "region": "中国台湾",
        "genre": "喜剧/运动/奇幻",
        "type": "电影",
        "tags": [
            "篮球",
            "功夫",
            "周杰伦",
            "搞笑"
        ]
    },
    {
        "title": "松树谷",
        "url": "movie-1560.html",
        "cover": "./60.jpg",
        "year": "2025",
        "region": "澳大利亚",
        "genre": "间谍,监听站,地缘政治,阴谋",
        "type": "剧集 惊悚,悬疑,谍战",
        "tags": [
            "中美澳角力",
            "信号情报",
            "身份反转",
            "精英对决"
        ]
    },
    {
        "title": "爆谷一周3",
        "url": "movie-1561.html",
        "cover": "./61.jpg",
        "year": "2025",
        "region": "香港",
        "genre": "喜剧,悬疑,都市",
        "type": "剧集",
        "tags": [
            "单元剧",
            "影视圈",
            "黑色幽默",
            "多层嵌套",
            "癫狂"
        ]
    },
    {
        "title": "女兄弟",
        "url": "movie-1562.html",
        "cover": "./62.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "喜剧,爱情",
        "type": "电影",
        "tags": [
            "友情",
            "暧昧",
            "都市"
        ]
    },
    {
        "title": "黄瓜",
        "url": "movie-1563.html",
        "cover": "./63.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情/喜剧/农村",
        "type": "电影",
        "tags": [
            "乡村振兴",
            "黑色幽默",
            "果蔬",
            "种植户"
        ]
    },
    {
        "title": "金三角大营救",
        "url": "movie-1564.html",
        "cover": "./64.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "动作/犯罪",
        "type": "电影",
        "tags": [
            "境外救援",
            "雇佣兵",
            "毒枭对决"
        ]
    },
    {
        "title": "石之岛",
        "url": "movie-1565.html",
        "cover": "./65.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "恐怖,奇幻",
        "type": "电影",
        "tags": [
            "民俗",
            "献祭",
            "时间循环"
        ]
    },
    {
        "title": "白蛇传说",
        "url": "movie-1566.html",
        "cover": "./66.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "爱情,奇幻",
        "type": "电影",
        "tags": [
            "国风美学",
            "人妖殊途",
            "悲情虐恋",
            "宋韵",
            "颠覆"
        ]
    },
    {
        "title": "真命天子",
        "url": "movie-1567.html",
        "cover": "./67.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "爱情,奇幻,悬疑",
        "type": "电视剧",
        "tags": [
            "前世今生",
            "古装",
            "算命"
        ]
    },
    {
        "title": "我们在此消失",
        "url": "movie-1568.html",
        "cover": "./68.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "科幻,悬疑",
        "type": "电影",
        "tags": [
            "时间循环",
            "存在主义",
            "小镇",
            "高概念"
        ]
    },
    {
        "title": "荒漠争霸战",
        "url": "movie-1569.html",
        "cover": "./69.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "科幻动作",
        "type": "电影",
        "tags": [
            "废土",
            "生存",
            "战争",
            "硬核",
            "女权"
        ]
    },
    {
        "title": "鲁邦三世 不死身的血族",
        "url": "movie-1570.html",
        "cover": "./70.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "动作,犯罪,冒险",
        "type": "动画电影",
        "tags": [
            "怪盗",
            "吸血鬼传说",
            "不死之谜",
            "峰不二子"
        ]
    },
    {
        "title": "泡澡少女!",
        "url": "movie-1571.html",
        "cover": "./71.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "喜剧/生活/治愈",
        "type": "剧集",
        "tags": [
            "日常",
            "入浴剂",
            "独居",
            "治愈系",
            "美食"
        ]
    },
    {
        "title": "宽恕与原谅",
        "url": "movie-1572.html",
        "cover": "./72.jpg",
        "year": "2022",
        "region": "法国",
        "genre": "剧情家庭",
        "type": "电影",
        "tags": [
            "原生家庭",
            "和解",
            "二战创伤",
            "父子关系"
        ]
    },
    {
        "title": "悟空之小圣传",
        "url": "movie-1573.html",
        "cover": "./73.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动画/动作",
        "type": "电影",
        "tags": [
            "西游新编",
            "孙悟空后代",
            "热血成长",
            "颠覆设定"
        ]
    },
    {
        "title": "继承厄运",
        "url": "movie-1574.html",
        "cover": "./74.jpg",
        "year": "2024",
        "region": "英国/美国",
        "genre": "悬疑/恐怖",
        "type": "电影",
        "tags": [
            "遗产惊悚",
            "家族诅咒",
            "心理恐怖"
        ]
    },
    {
        "title": "永夜魔女",
        "url": "movie-1575.html",
        "cover": "./75.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "奇幻,爱情,古装",
        "type": "剧集",
        "tags": [
            "魔女",
            "宫廷",
            "诅咒",
            "虐恋"
        ]
    },
    {
        "title": "茶啊二中第四季",
        "url": "movie-1576.html",
        "cover": "./76.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧/校园",
        "type": "剧集",
        "tags": [
            "东北",
            "搞笑",
            "师生",
            "怀旧"
        ]
    },
    {
        "title": "机械师",
        "url": "movie-1577.html",
        "cover": "./77.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/科幻",
        "type": "电影",
        "tags": [
            "义体人",
            "复仇",
            "高科技",
            "近未来",
            "打斗爽片"
        ]
    },
    {
        "title": "我的圣诞老公",
        "url": "movie-1578.html",
        "cover": "./78.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "爱情/喜剧",
        "type": "电影",
        "tags": [
            "圣诞",
            "错位",
            "都市",
            "身份互换",
            "浪漫"
        ]
    },
    {
        "title": "逃离旋转岛",
        "url": "movie-1579.html",
        "cover": "./79.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻冒险",
        "type": "动画电影",
        "tags": [
            "迷宫",
            "循环",
            "青少年科幻",
            "反乌托邦"
        ]
    },
    {
        "title": "极道大战争",
        "url": "movie-1580.html",
        "cover": "./80.jpg",
        "year": "2015",
        "region": "日本",
        "genre": "动作/喜剧/奇幻",
        "type": "电影",
        "tags": [
            "黑帮",
            "吸血鬼",
            "cult",
            "三池崇史"
        ]
    },
    {
        "title": "哥雅名画凶杀案",
        "url": "movie-1581.html",
        "cover": "./81.jpg",
        "year": "2018",
        "region": "西班牙",
        "genre": "悬疑,惊悚,犯罪",
        "type": "电影",
        "tags": [
            "美术馆",
            "艺术犯罪",
            "历史谜题",
            "模仿杀人"
        ]
    },
    {
        "title": "百花缭乱武士新娘",
        "url": "movie-1582.html",
        "cover": "./82.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "喜剧/爱情/古装",
        "type": "剧集",
        "tags": [
            "穿越",
            "武士",
            "政治联姻",
            "沙雕"
        ]
    },
    {
        "title": "青春禁忌游戏",
        "url": "movie-1583.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "剧情,悬疑,惊悚",
        "type": "电影",
        "tags": [
            "密室",
            "心理战",
            "师生",
            "道德困境",
            "反转"
        ]
    },
    {
        "title": "魔毡",
        "url": "movie-1584.html",
        "cover": "./84.jpg",
        "year": "2020",
        "region": "伊朗/法国",
        "genre": "剧情,奇幻",
        "type": "电影",
        "tags": [
            "手工地毯",
            "寓言",
            "三代人",
            "沉默叙事",
            "色彩"
        ]
    },
    {
        "title": "钢铁人2",
        "url": "movie-1585.html",
        "cover": "./85.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/科幻/冒险",
        "type": "电影",
        "tags": [
            "超级英雄",
            "机甲升级",
            "人工智能反叛",
            "父子传承"
        ]
    },
    {
        "title": "当你约会的时候",
        "url": "movie-1586.html",
        "cover": "./86.jpg",
        "year": "2012",
        "region": "美国",
        "genre": "喜剧,爱情",
        "type": "电视剧",
        "tags": [
            "约会指南",
            "尴尬瞬间",
            "都市男女",
            "单元剧"
        ]
    },
    {
        "title": "家族的肖像",
        "url": "movie-1587.html",
        "cover": "./87.jpg",
        "year": "2024",
        "region": "意大利",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "家族秘密",
            "遗产纠纷",
            "复古美学"
        ]
    },
    {
        "title": "心电",
        "url": "movie-1588.html",
        "cover": "./88.jpg",
        "year": "2009",
        "region": "中国香港",
        "genre": "科幻,悬疑",
        "type": "电影",
        "tags": [
            "超能力",
            "读心",
            "警匪"
        ]
    },
    {
        "title": "一代天骄成吉思汗",
        "url": "movie-1589.html",
        "cover": "./89.jpg",
        "year": "2025",
        "region": "蒙古/中国大陆",
        "genre": "史诗传记",
        "type": "电影",
        "tags": [
            "战争",
            "草原",
            "权力",
            "人性",
            "视觉奇观"
        ]
    },
    {
        "title": "医人当自强",
        "url": "movie-1590.html",
        "cover": "./90.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情,医学",
        "type": "剧集",
        "tags": [
            "医疗",
            "职场",
            "实习",
            "人性"
        ]
    },
    {
        "title": "来自美国的莫里斯",
        "url": "movie-1591.html",
        "cover": "./91.jpg",
        "year": "2023",
        "region": "德国/美国",
        "genre": "喜剧/剧情",
        "type": "电影",
        "tags": [
            "文化冲突",
            "黑人主角",
            "德国小镇",
            "身份认同",
            "荒诞"
        ]
    },
    {
        "title": "理想国",
        "url": "movie-1592.html",
        "cover": "./92.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "科幻/悬疑",
        "type": "电视剧",
        "tags": [
            "虚拟现实",
            "乌托邦",
            "意识上传",
            "阶层博弈",
            "反乌托邦"
        ]
    },
    {
        "title": "魔法奇幻秀",
        "url": "movie-1593.html",
        "cover": "./93.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "奇幻/冒险/家庭",
        "type": "电影",
        "tags": [
            "平行宇宙",
            "想象力爆炸",
            "异色童话",
            "视觉系"
        ]
    },
    {
        "title": "魔幻罗盘",
        "url": "movie-1594.html",
        "cover": "./94.jpg",
        "year": "2007",
        "region": "英国/美国",
        "genre": "奇幻,冒险,家庭",
        "type": "电影",
        "tags": [
            "北极",
            "精灵",
            "预言",
            "儿童主角",
            "蒸汽朋克"
        ]
    },
    {
        "title": "作死之旅",
        "url": "movie-1595.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "惊悚,冒险,喜剧",
        "type": "电影",
        "tags": [
            "公路片",
            "黑色幽默",
            "密室逃脱",
            "反转"
        ]
    },
    {
        "title": "戏说台湾之无面妈",
        "url": "movie-1596.html",
        "cover": "./96.jpg",
        "year": "2024",
        "region": "台湾",
        "genre": "恐怖,奇幻,民俗",
        "type": "剧集",
        "tags": [
            "乡野奇谈",
            "鬼母",
            "婴灵"
        ]
    },
    {
        "title": "最佳基友闯死关",
        "url": "movie-1597.html",
        "cover": "./97.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧/动作",
        "type": "电影",
        "tags": [
            "兄弟情",
            "废柴逆袭",
            "密室逃杀",
            "嘴炮双雄"
        ]
    },
    {
        "title": "光荣的追寻第一季",
        "url": "movie-1598.html",
        "cover": "./98.jpg",
        "year": "2025",
        "region": "中国内地",
        "genre": "剧情,悬疑,年代,谍战",
        "type": "剧集",
        "tags": [
            "建国初期",
            "反特",
            "追凶",
            "信仰"
        ]
    },
    {
        "title": "伊波拉病毒",
        "url": "movie-1599.html",
        "cover": "./99.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "灾难",
        "type": "电影",
        "tags": [
            "病毒",
            "惊悚",
            "生存",
            "人性"
        ]
    },
    {
        "title": "蜡像院杀人王",
        "url": "movie-1600.html",
        "cover": "./100.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "蜡像馆",
            "连环杀手",
            "活人蜡像",
            "变态",
            "血腥"
        ]
    },
    {
        "title": "私密背叛",
        "url": "movie-1601.html",
        "cover": "./101.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "惊悚/心理/剧情",
        "type": "电视剧",
        "tags": [
            "心理咨询",
            "婚外情",
            "录音",
            "反转",
            "信任崩塌"
        ]
    },
    {
        "title": "围城13天:阿拉莫战役",
        "url": "movie-1602.html",
        "cover": "./102.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "历史,战争,剧情",
        "type": "电影",
        "tags": [
            "史诗",
            "围城",
            "以少胜多",
            "真实改编"
        ]
    },
    {
        "title": "秘密风暴",
        "url": "movie-1603.html",
        "cover": "./103.jpg",
        "year": "2018",
        "region": "韩国",
        "genre": "剧情/悬疑/犯罪",
        "type": "电影",
        "tags": [
            "记者",
            "政治黑幕",
            "复仇",
            "雨夜",
            "连环谜案"
        ]
    },
    {
        "title": "丧尸潮",
        "url": "movie-1604.html",
        "cover": "./104.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "惊悚,悬疑,灾难",
        "type": "剧集",
        "tags": [
            "病毒爆发",
            "首尔封城",
            "逃生",
            "社会批判"
        ]
    },
    {
        "title": "司法正义",
        "url": "movie-1605.html",
        "cover": "./105.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "律政,惊悚",
        "type": "剧集",
        "tags": [
            "庭审",
            "法理",
            "陪审团",
            "反转"
        ]
    },
    {
        "title": "健康全裸系游泳部",
        "url": "movie-1606.html",
        "cover": "./106.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "喜剧/运动",
        "type": "电影",
        "tags": [
            "青春",
            "校园",
            "社团",
            "热血",
            "沙雕"
        ]
    },
    {
        "title": "蒙面达虎",
        "url": "movie-1607.html",
        "cover": "./107.jpg",
        "year": "2022",
        "region": "韩国",
        "genre": "喜剧/音乐/动作",
        "type": "电影",
        "tags": [
            "摇滚",
            "双重身份",
            "复仇",
            "搞笑"
        ]
    },
    {
        "title": "亚特兰蒂斯",
        "url": "movie-1608.html",
        "cover": "./108.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "奇幻,悬疑",
        "type": "电视剧",
        "tags": [
            "深海",
            "乌托邦",
            "失落文明",
            "身体恐怖"
        ]
    },
    {
        "title": "宝贝老板:重围商界第一季",
        "url": "movie-1609.html",
        "cover": "./109.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "动画/喜剧/家庭",
        "type": "剧集",
        "tags": [
            "婴儿",
            "商业大战",
            "萌系",
            "职场黑帮",
            "恶搞"
        ]
    },
    {
        "title": "欢乐野营两家人",
        "url": "movie-1610.html",
        "cover": "./110.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "喜剧,家庭",
        "type": "电影",
        "tags": [
            "宿敌",
            "露营",
            "爆笑",
            "和解",
            "自然教育"
        ]
    },
    {
        "title": "魔印传说",
        "url": "movie-1611.html",
        "cover": "./111.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "奇幻,冒险,悬疑",
        "type": "剧集",
        "tags": [
            "上古封印",
            "国风怪物",
            "解谜闯关"
        ]
    },
    {
        "title": "花开莱州",
        "url": "movie-1612.html",
        "cover": "./112.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/乡村振兴/家庭",
        "type": "电视剧",
        "tags": [
            "月季花",
            "返乡创业",
            "非遗传承"
        ]
    },
    {
        "title": "魔宫帝国:重生",
        "url": "movie-1613.html",
        "cover": "./113.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,奇幻,冒险",
        "type": "电影",
        "tags": [
            "重启",
            "格斗游戏改编",
            "暴力美学",
            "神秘组织"
        ]
    },
    {
        "title": "超级少女",
        "url": "movie-1614.html",
        "cover": "./114.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作,科幻",
        "type": "电视剧",
        "tags": [
            "女英雄",
            "青春期",
            "外星难民"
        ]
    },
    {
        "title": "白象:无法之城",
        "url": "movie-1615.html",
        "cover": "./115.jpg",
        "year": "2023",
        "region": "泰国",
        "genre": "犯罪,剧情,悬疑",
        "type": "电影",
        "tags": [
            "泰国",
            "灰产",
            "象神",
            "双面人生",
            "高能反转"
        ]
    },
    {
        "title": "鬼勾魂",
        "url": "movie-1616.html",
        "cover": "./116.jpg",
        "year": "2024",
        "region": "泰国",
        "genre": "恐怖,悬疑,灵异",
        "type": "电视剧",
        "tags": [
            "民间邪术",
            "轮回",
            "师徒",
            "单元剧"
        ]
    },
    {
        "title": "毁灭的种子",
        "url": "movie-1617.html",
        "cover": "./117.jpg",
        "year": "2020",
        "region": "英国",
        "genre": "科幻,悬疑",
        "type": "剧集",
        "tags": [
            "基因工程",
            "植物",
            "末日",
            "伦理",
            "病毒"
        ]
    },
    {
        "title": "亲爱的莎拉",
        "url": "movie-1618.html",
        "cover": "./118.jpg",
        "year": "2021",
        "region": "韩国",
        "genre": "悬疑,惊悚,心理",
        "type": "电影",
        "tags": [
            "社交软件",
            "身份互换",
            "网络骗局",
            "女性复仇",
            "反转"
        ]
    },
    {
        "title": "怪诞黑家族",
        "url": "movie-1619.html",
        "cover": "./119.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧/恐怖/家庭",
        "type": "剧集",
        "tags": [
            "黑色幽默",
            "怪胎家庭",
            "超自然"
        ]
    },
    {
        "title": "爱的面包",
        "url": "movie-1620.html",
        "cover": "./120.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "爱情,美食",
        "type": "电影",
        "tags": [
            "烘焙",
            "小清新",
            "暗恋",
            "治愈"
        ]
    },
    {
        "title": "世界边缘",
        "url": "movie-1621.html",
        "cover": "./121.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "科幻、灾难、冒险",
        "type": "电影",
        "tags": [
            "末日",
            "家庭",
            "地心探险",
            "生存"
        ]
    },
    {
        "title": "饿鬼食堂",
        "url": "movie-1622.html",
        "cover": "./122.jpg",
        "year": "2023",
        "region": "马来西亚",
        "genre": "恐怖,喜剧,奇幻",
        "type": "电影",
        "tags": [
            "东南亚",
            "华人",
            "美食",
            "因果"
        ]
    },
    {
        "title": "间谍过家家",
        "url": "movie-1623.html",
        "cover": "./123.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "喜剧/动作/家庭",
        "type": "动画剧集",
        "tags": [
            "伪装家庭",
            "读心术",
            "顶级特工",
            "致命杀手",
            "萌宠"
        ]
    },
    {
        "title": "纳坤蛇龙",
        "url": "movie-1624.html",
        "cover": "./124.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "动作/奇幻/冒险",
        "type": "电影",
        "tags": [
            "东南亚神话",
            "巨兽",
            "丛林探险",
            "守护者传承"
        ]
    },
    {
        "title": "永葆青春",
        "url": "movie-1625.html",
        "cover": "./125.jpg",
        "year": "2012",
        "region": "美国",
        "genre": "科幻惊悚",
        "type": "电影",
        "tags": [
            "衰老",
            "医疗黑市",
            "伦理",
            "反转"
        ]
    },
    {
        "title": "半妖的夜叉姬第一季",
        "url": "movie-1626.html",
        "cover": "./126.jpg",
        "year": "2020",
        "region": "日本",
        "genre": "奇幻,冒险,战斗",
        "type": "动画剧集",
        "tags": [
            "续作",
            "犬夜叉",
            "女儿们",
            "妖怪"
        ]
    },
    {
        "title": "画家与贼",
        "url": "movie-1627.html",
        "cover": "./127.jpg",
        "year": "2020",
        "region": "挪威",
        "genre": "剧情,纪录式虚构,文艺",
        "type": "电影",
        "tags": [
            "艺术",
            "救赎",
            "友谊",
            "真实事件改编"
        ]
    },
    {
        "title": "冷血杀人狂",
        "url": "movie-1628.html",
        "cover": "./128.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "惊悚/犯罪",
        "type": "电影",
        "tags": [
            "连环杀手",
            "心理博弈",
            "反转"
        ]
    },
    {
        "title": "藤田嗣治与乳白色的裸女",
        "url": "movie-1629.html",
        "cover": "./129.jpg",
        "year": "2024",
        "region": "日本/法国",
        "genre": "传记/剧情",
        "type": "电影",
        "tags": [
            "艺术",
            "画家",
            "异乡人",
            "创作"
        ]
    },
    {
        "title": "他来自江湖粤语",
        "url": "movie-1630.html",
        "cover": "./130.jpg",
        "year": "1989",
        "region": "中国香港",
        "genre": "喜剧,剧情,动作",
        "type": "剧集",
        "tags": [
            "黑帮",
            "亲情",
            "周星驰早期"
        ]
    },
    {
        "title": "劈腿女王",
        "url": "movie-1631.html",
        "cover": "./131.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "爱情,喜剧,悬疑",
        "type": "剧集",
        "tags": [
            "修罗场",
            "时间管理",
            "女性视角",
            "反转爽剧",
            "渣女"
        ]
    },
    {
        "title": "球拍少年团",
        "url": "movie-1632.html",
        "cover": "./132.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "青春,运动,喜剧",
        "type": "剧集",
        "tags": [
            "羽毛球",
            "乡村少年",
            "热血",
            "友情"
        ]
    },
    {
        "title": "被爱情遗忘的角落",
        "url": "movie-1633.html",
        "cover": "./133.jpg",
        "year": "1981",
        "region": "中国大陆",
        "genre": "剧情、家庭、伦理",
        "type": "电影",
        "tags": [
            "乡村",
            "代际",
            "女性",
            "反思"
        ]
    },
    {
        "title": "环环相扣",
        "url": "movie-1634.html",
        "cover": "./134.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,犯罪",
        "type": "网络剧",
        "tags": [
            "无限循环",
            "逻辑推理",
            "蝴蝶效应"
        ]
    },
    {
        "title": "女侩子手",
        "url": "movie-1635.html",
        "cover": "./135.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装,悬疑,女性",
        "type": "剧集",
        "tags": [
            "法医",
            "古代刑场",
            "探案",
            "大女主"
        ]
    },
    {
        "title": "律师菲斯克 第一季",
        "url": "movie-1636.html",
        "cover": "./136.jpg",
        "year": "2021",
        "region": "澳大利亚",
        "genre": "喜剧/职场",
        "type": "电视剧",
        "tags": [
            "律政",
            "黑色幽默",
            "女性"
        ]
    },
    {
        "title": "情场绝桥王",
        "url": "movie-1637.html",
        "cover": "./137.jpg",
        "year": "1988",
        "region": "中国香港",
        "genre": "喜剧、爱情",
        "type": "电影",
        "tags": [
            "渣男翻车",
            "追女仔",
            "港式无厘头",
            "王晶风格"
        ]
    },
    {
        "title": "他夏天住在楼下",
        "url": "movie-1638.html",
        "cover": "./138.jpg",
        "year": "2017",
        "region": "法国",
        "genre": "剧情/同性",
        "type": "电影",
        "tags": [
            "夏日恋情",
            "邻居",
            "身份差异",
            "隐秘"
        ]
    },
    {
        "title": "街头小游侠",
        "url": "movie-1639.html",
        "cover": "./139.jpg",
        "year": "1989",
        "region": "中国香港",
        "genre": "动作,犯罪,青春",
        "type": "电影",
        "tags": [
            "港风",
            "街头混混",
            "兄弟情",
            "义气",
            "怀旧"
        ]
    },
    {
        "title": "不法之徒",
        "url": "movie-1640.html",
        "cover": "./140.jpg",
        "year": "2027",
        "region": "韩国",
        "genre": "犯罪,动作,惊悚",
        "type": "电影",
        "tags": [
            "检察官",
            "黑帮",
            "腐败",
            "以暴制暴"
        ]
    },
    {
        "title": "她明天死亡",
        "url": "movie-1641.html",
        "cover": "./141.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "悬疑、科幻、剧情",
        "type": "电影",
        "tags": [
            "死亡预告",
            "治愈系杀手",
            "24小时倒计时",
            "社会派"
        ]
    },
    {
        "title": "英雄机长",
        "url": "movie-1642.html",
        "cover": "./142.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/灾难/传记",
        "type": "电影",
        "tags": [
            "真实事件改编",
            "高空惊魂",
            "专业精神"
        ]
    },
    {
        "title": "龙凤争挂帅",
        "url": "movie-1643.html",
        "cover": "./143.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "动作,喜剧",
        "type": "电影",
        "tags": [
            "警匪",
            "卧底",
            "身份互换",
            "无厘头"
        ]
    },
    {
        "title": "天底良知",
        "url": "movie-1644.html",
        "cover": "./144.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "战争/剧情/历史",
        "type": "电影",
        "tags": [
            "二战",
            "维希法国",
            "犹太人",
            "教会"
        ]
    },
    {
        "title": "触目惊心2",
        "url": "movie-1645.html",
        "cover": "./145.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "惊悚,悬疑,犯罪",
        "type": "电影",
        "tags": [
            "心理惊悚",
            "连环杀手",
            "法医",
            "限制级"
        ]
    },
    {
        "title": "灵犬莱西",
        "url": "movie-1646.html",
        "cover": "./146.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "家庭,冒险",
        "type": "电影",
        "tags": [
            "动物电影",
            "忠犬",
            "长途跋涉",
            "催泪"
        ]
    },
    {
        "title": "噤界",
        "url": "movie-1647.html",
        "cover": "./147.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "恐怖/惊悚",
        "type": "电影",
        "tags": [
            "感官剥夺",
            "密室逃脱",
            "社会隐喻"
        ]
    },
    {
        "title": "灰熊传说",
        "url": "movie-1648.html",
        "cover": "./148.jpg",
        "year": "2026",
        "region": "加拿大",
        "genre": "冒险,家庭",
        "type": "电影",
        "tags": [
            "动物",
            "自然",
            "成长",
            "环保"
        ]
    },
    {
        "title": "风尘女",
        "url": "movie-1649.html",
        "cover": "./149.jpg",
        "year": "1989",
        "region": "中国香港",
        "genre": "剧情、情色、社会",
        "type": "电影",
        "tags": [
            "红灯区",
            "底层女性",
            "姐妹情",
            "写实主义"
        ]
    },
    {
        "title": "伏羲女娲",
        "url": "movie-1650.html",
        "cover": "./150.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "神话/史诗/爱情",
        "type": "动画电影",
        "tags": [
            "创世神",
            "兄妹",
            "人类起源",
            "东方神话"
        ]
    },
    {
        "title": "逆鳞",
        "url": "movie-1651.html",
        "cover": "./1.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,犯罪,悬疑",
        "type": "剧集",
        "tags": [
            "伪钞天才",
            "警匪博弈",
            "高智商对决"
        ]
    },
    {
        "title": "神医大人别撩我",
        "url": "movie-1652.html",
        "cover": "./2.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "古装/爱情/喜剧",
        "type": "剧集 网剧",
        "tags": [
            "穿越",
            "医疗",
            "欢喜冤家",
            "甜宠"
        ]
    },
    {
        "title": "两个人一双手",
        "url": "movie-1653.html",
        "cover": "./3.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/爱情",
        "type": "电影",
        "tags": [
            "残疾",
            "励志",
            "相依为命",
            "真实改编"
        ]
    },
    {
        "title": "恐怖高速",
        "url": "movie-1654.html",
        "cover": "./4.jpg",
        "year": "2006",
        "region": "美国",
        "genre": "恐怖,惊悚",
        "type": "电影",
        "tags": [
            "公路",
            "杀人魔",
            "密闭空间",
            "血腥",
            "午夜档"
        ]
    },
    {
        "title": "女人与英雄",
        "url": "movie-1655.html",
        "cover": "./5.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "传记/历史/爱情",
        "type": "电影",
        "tags": [
            "二战女英雄",
            "地下抵抗",
            "真实改编",
            "谍战",
            "爱情悲剧"
        ]
    },
    {
        "title": "母鹿",
        "url": "movie-1656.html",
        "cover": "./6.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "母女关系",
            "代际创伤",
            "草原",
            "救赎"
        ]
    },
    {
        "title": "追逃",
        "url": "movie-1657.html",
        "cover": "./7.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "犯罪,悬疑,刑侦",
        "type": "剧集",
        "tags": [
            "追逃犯",
            "双男主",
            "猫鼠游戏",
            "智商对决",
            "边境"
        ]
    },
    {
        "title": "民国奇探之奇缘侦探",
        "url": "movie-1658.html",
        "cover": "./8.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑,推理,民国",
        "type": "电视剧",
        "tags": [
            "双男主",
            "科学探案",
            "单元剧",
            "民国风情",
            "节奏快"
        ]
    },
    {
        "title": "寒夜星暖",
        "url": "movie-1659.html",
        "cover": "./9.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情,治愈,都市",
        "type": "剧集",
        "tags": [
            "北漂",
            "孤独",
            "合租",
            "冬日"
        ]
    },
    {
        "title": "七天",
        "url": "movie-1660.html",
        "cover": "./10.jpg",
        "year": "2024",
        "region": "俄罗斯",
        "genre": "科幻、悬疑",
        "type": "剧集",
        "tags": [
            "时间循环",
            "切尔诺贝利",
            "七日审判"
        ]
    },
    {
        "title": "月季花开",
        "url": "movie-1661.html",
        "cover": "./11.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "家庭/年代/剧情",
        "type": "剧集",
        "tags": [
            "女性",
            "成长",
            "知青",
            "花艺"
        ]
    },
    {
        "title": "奥塞罗",
        "url": "movie-1662.html",
        "cover": "./12.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情,惊悚",
        "type": "电影",
        "tags": [
            "莎士比亚改编",
            "嫉妒",
            "科技伦理"
        ]
    },
    {
        "title": "乔·皮克特第二季",
        "url": "movie-1663.html",
        "cover": "./13.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "剧情,犯罪,西部",
        "type": "电视剧",
        "tags": [
            "怀俄明",
            "狩猎",
            "土地争端",
            "硬汉"
        ]
    },
    {
        "title": "第七个被害者",
        "url": "movie-1664.html",
        "cover": "./14.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "悬疑,犯罪,惊悚",
        "type": "电影",
        "tags": [
            "连环杀人",
            "目击者",
            "盲人",
            "感官",
            "反杀"
        ]
    },
    {
        "title": "玉贞姐姐",
        "url": "movie-1665.html",
        "cover": "./15.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "年代",
            "女性",
            "亲情"
        ]
    },
    {
        "title": "白雪公主2025",
        "url": "movie-1666.html",
        "cover": "./16.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻/奇幻",
        "type": "电影",
        "tags": [
            "赛博朋克",
            "暗黑童话",
            "人工智能",
            "自我觉醒"
        ]
    },
    {
        "title": "绝命时刻",
        "url": "movie-1667.html",
        "cover": "./17.jpg",
        "year": "2018",
        "region": "美国",
        "genre": "动作,惊悚,犯罪",
        "type": "电影",
        "tags": [
            "密室",
            "倒计时",
            "拆弹",
            "孤胆英雄",
            "复仇"
        ]
    },
    {
        "title": "美人追",
        "url": "movie-1668.html",
        "cover": "./18.jpg",
        "year": "2024",
        "region": "中国内地",
        "genre": "喜剧,爱情,公路",
        "type": "电影",
        "tags": [
            "反向追逐",
            "女追男",
            "误会连环",
            "川藏线"
        ]
    },
    {
        "title": "单枪匹马独行侠",
        "url": "movie-1669.html",
        "cover": "./19.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/西部/科幻",
        "type": "电影",
        "tags": [
            "孤胆英雄",
            "赛博朋克西部",
            "复仇",
            "硬汉",
            "反英雄"
        ]
    },
    {
        "title": "勇闯天关3",
        "url": "movie-1670.html",
        "cover": "./20.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "动作/冒险/科幻",
        "type": "电影",
        "tags": [
            "硬核老爸",
            "太空电梯",
            "恐怖分子",
            "肉身闯关"
        ]
    },
    {
        "title": "千禧年代大事件:悲剧",
        "url": "movie-1671.html",
        "cover": "./21.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "纪录片/历史",
        "type": "纪录片",
        "tags": [
            "事件复盘",
            "社会反思",
            "世纪之殇"
        ]
    },
    {
        "title": "我是路人甲2015",
        "url": "movie-1672.html",
        "cover": "./22.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情,喜剧",
        "type": "电影",
        "tags": [
            "群演",
            "梦想",
            "现实"
        ]
    },
    {
        "title": "霸海红英",
        "url": "movie-1673.html",
        "cover": "./23.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "动作,犯罪,冒险",
        "type": "电影",
        "tags": [
            "海盗",
            "女枭雄",
            "南海",
            "枪战",
            "港式硬朗"
        ]
    },
    {
        "title": "失控玩家国语",
        "url": "movie-1674.html",
        "cover": "./24.jpg",
        "year": "2021",
        "region": "中国大陆 (配音版)",
        "genre": "喜剧,科幻",
        "type": "电影",
        "tags": [
            "游戏世界",
            "觉醒",
            "国语配音"
        ]
    },
    {
        "title": "小人国",
        "url": "movie-1675.html",
        "cover": "./25.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "奇幻、剧情、社会寓言",
        "type": "电视剧",
        "tags": [
            "缩微人类",
            "阶级隐喻",
            "生存挑战"
        ]
    },
    {
        "title": "风吹吧麦浪",
        "url": "movie-1676.html",
        "cover": "./26.jpg",
        "year": "2022",
        "region": "中国内地",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "麦田",
            "留守儿童",
            "乡村教师",
            "希望",
            "收获"
        ]
    },
    {
        "title": "玉奴娇",
        "url": "movie-1677.html",
        "cover": "./27.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装,爱情,虐恋",
        "type": "网络剧",
        "tags": [
            "重生",
            "宅斗",
            "替身",
            "追妻火葬场"
        ]
    },
    {
        "title": "我的阳台男友",
        "url": "movie-1678.html",
        "cover": "./28.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "都市爱情轻喜剧",
        "type": "剧集",
        "tags": [
            "合租",
            "误会",
            "直播",
            "甜宠",
            "邻居"
        ]
    },
    {
        "title": "塘鹅之血",
        "url": "movie-1679.html",
        "cover": "./29.jpg",
        "year": "2020",
        "region": "美国",
        "genre": "剧情、生态",
        "type": "电影",
        "tags": [
            "污染",
            "诉讼",
            "父女"
        ]
    },
    {
        "title": "刚果",
        "url": "movie-1680.html",
        "cover": "./30.jpg",
        "year": "2024",
        "region": "法国/比利时/刚果(金)",
        "genre": "剧情/冒险/历史",
        "type": "电影",
        "tags": [
            "非洲",
            "殖民史",
            "传教士",
            "丛林",
            "种族和解"
        ]
    },
    {
        "title": "贝尔戈维亚",
        "url": "movie-1681.html",
        "cover": "./31.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "剧情,历史,爱情",
        "type": "剧集",
        "tags": [
            "维多利亚时代",
            "阶级跨越",
            "家族秘史",
            "服道化盛宴"
        ]
    },
    {
        "title": "公路人质事件",
        "url": "movie-1682.html",
        "cover": "./32.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "惊悚,犯罪",
        "type": "电影",
        "tags": [
            "公路片",
            "人质",
            "反转"
        ]
    },
    {
        "title": "对不起,我爱你",
        "url": "movie-1683.html",
        "cover": "./33.jpg",
        "year": "2026",
        "region": "泰国",
        "genre": "爱情,悬疑",
        "type": "剧集",
        "tags": [
            "失忆",
            "替身",
            "豪门",
            "狗血反转"
        ]
    },
    {
        "title": "大男孩第二季",
        "url": "movie-1684.html",
        "cover": "./34.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧,剧情,同性",
        "type": "剧集",
        "tags": [
            "青春成长",
            "友谊",
            "自我接纳"
        ]
    },
    {
        "title": "我的武林男友",
        "url": "movie-1685.html",
        "cover": "./35.jpg",
        "year": "2018",
        "region": "中国大陆",
        "genre": "喜剧/爱情/奇幻",
        "type": "剧集",
        "tags": [
            "穿越",
            "武林高手",
            "现代职场",
            "沙雕甜宠"
        ]
    },
    {
        "title": "通灵王",
        "url": "movie-1686.html",
        "cover": "./36.jpg",
        "year": "2021",
        "region": "泰国",
        "genre": "奇幻/恐怖/悬疑",
        "type": "电视剧",
        "tags": [
            "通灵",
            "复仇",
            "附身",
            "仪式"
        ]
    },
    {
        "title": "龟兔大作战",
        "url": "movie-1687.html",
        "cover": "./37.jpg",
        "year": "2021",
        "region": "美国",
        "genre": "动画/运动",
        "type": "电影",
        "tags": [
            "赛车",
            "友谊",
            "反转童话",
            "热血"
        ]
    },
    {
        "title": "快活林",
        "url": "movie-1688.html",
        "cover": "./38.jpg",
        "year": "2020",
        "region": "中国大陆",
        "genre": "武侠,动作",
        "type": "电影",
        "tags": [
            "水浒",
            "武松",
            "动作",
            "恩仇",
            "古装"
        ]
    },
    {
        "title": "诗吼",
        "url": "movie-1689.html",
        "cover": "./39.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/音乐/青春",
        "type": "电影",
        "tags": [
            "诗歌",
            "摇滚",
            "反叛",
            "90年代"
        ]
    },
    {
        "title": "低智商犯罪",
        "url": "movie-1690.html",
        "cover": "./40.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "喜剧/犯罪",
        "type": "剧集",
        "tags": [
            "笨贼",
            "黑色幽默",
            "多线叙事",
            "巧合",
            "荒诞"
        ]
    },
    {
        "title": "蛛网屋",
        "url": "movie-1691.html",
        "cover": "./41.jpg",
        "year": "2026",
        "region": "德国",
        "genre": "惊悚/悬疑/家庭",
        "type": "剧集",
        "tags": [
            "密室逃脱",
            "家族秘密",
            "继承权",
            "心理虐待"
        ]
    },
    {
        "title": "凯夫科厄",
        "url": "movie-1692.html",
        "cover": "./42.jpg",
        "year": "2026",
        "region": "俄罗斯",
        "genre": "科幻/惊悚/哲学",
        "type": "电影",
        "tags": [
            "架空世界",
            "意识上传",
            "极寒"
        ]
    },
    {
        "title": "冷酷游戏",
        "url": "movie-1693.html",
        "cover": "./43.jpg",
        "year": "2026",
        "region": "英国",
        "genre": "悬疑、犯罪",
        "type": "电影",
        "tags": [
            "高智商犯罪",
            "棋局",
            "猫鼠游戏",
            "反转"
        ]
    },
    {
        "title": "审判长",
        "url": "movie-1694.html",
        "cover": "./44.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,犯罪,法律",
        "type": "剧集",
        "tags": [
            "法庭",
            "反转",
            "死刑犯",
            "司法正义",
            "心理博弈"
        ]
    },
    {
        "title": "换世之恋",
        "url": "movie-1695.html",
        "cover": "./45.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "奇幻/爱情",
        "type": "剧集 奇幻/爱情",
        "tags": [
            "穿越",
            "身份互换",
            "民国",
            "宿命"
        ]
    },
    {
        "title": "依赖药水活下去!",
        "url": "movie-1696.html",
        "cover": "./46.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/黑暗奇幻/生存",
        "type": "动画剧集",
        "tags": [
            "药水",
            "依赖",
            "末日生存",
            "药厂阴谋",
            "异能"
        ]
    },
    {
        "title": "新汉普夏饭店",
        "url": "movie-1697.html",
        "cover": "./47.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "约翰·欧文",
            "怪异家庭",
            "成长",
            "荒诞"
        ]
    },
    {
        "title": "叛逆浮生",
        "url": "movie-1698.html",
        "cover": "./48.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "剧情,音乐",
        "type": "电影",
        "tags": [
            "朋克",
            "养老院",
            "代际冲突",
            "青春"
        ]
    },
    {
        "title": "马失前蹄",
        "url": "movie-1699.html",
        "cover": "./49.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装喜剧",
        "type": "电影",
        "tags": [
            "驿站",
            "江湖",
            "乌龙快递",
            "群像"
        ]
    },
    {
        "title": "留神",
        "url": "movie-1700.html",
        "cover": "./50.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "心理博弈",
            "诈骗",
            "老年诈骗",
            "反杀",
            "高智商"
        ]
    },
    {
        "title": "琴谜变奏曲",
        "url": "movie-1701.html",
        "cover": "./51.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "悬疑/音乐/心理",
        "type": "电影",
        "tags": [
            "钢琴",
            "复仇",
            "暗黑",
            "反转"
        ]
    },
    {
        "title": "儿童碰碰车",
        "url": "movie-1702.html",
        "cover": "./52.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "儿童,喜剧",
        "type": "动画",
        "tags": [
            "幼儿园",
            "友谊",
            "竞技",
            "启蒙"
        ]
    },
    {
        "title": "古宝争夺战",
        "url": "movie-1703.html",
        "cover": "./53.jpg",
        "year": "2025",
        "region": "美国/中国大陆",
        "genre": "动作,冒险",
        "type": "电影",
        "tags": [
            "寻宝",
            "跨国",
            "盗墓",
            "阴谋论"
        ]
    },
    {
        "title": "急冻末日",
        "url": "movie-1704.html",
        "cover": "./54.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "科幻/灾难",
        "type": "电影",
        "tags": [
            "冰封",
            "实验室",
            "冬眠",
            "阴谋"
        ]
    },
    {
        "title": "皇太极",
        "url": "movie-1705.html",
        "cover": "./55.jpg",
        "year": "2012",
        "region": "中国大陆",
        "genre": "历史,传记",
        "type": "电视剧",
        "tags": [
            "清朝",
            "权谋",
            "战争",
            "帝王",
            "满族"
        ]
    },
    {
        "title": "我们害怕",
        "url": "movie-1706.html",
        "cover": "./56.jpg",
        "year": "2021",
        "region": "法国",
        "genre": "剧情,心理",
        "type": "电影",
        "tags": [
            "哲学",
            "群像",
            "当代社会"
        ]
    },
    {
        "title": "斯巴达",
        "url": "movie-1707.html",
        "cover": "./57.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/历史/战争",
        "type": "电影",
        "tags": [
            "温泉关",
            "新诠释",
            "奴隶视角",
            "硬核格斗"
        ]
    },
    {
        "title": "魔鬼骑士",
        "url": "movie-1708.html",
        "cover": "./58.jpg",
        "year": "1995",
        "region": "美国",
        "genre": "恐怖,动作",
        "type": "电影",
        "tags": [
            "邪典",
            "丧尸",
            "骑士",
            "末日"
        ]
    },
    {
        "title": "维斯珀",
        "url": "movie-1709.html",
        "cover": "./59.jpg",
        "year": "2022",
        "region": "英国/法国",
        "genre": "科幻,剧情",
        "type": "电影",
        "tags": [
            "后末日",
            "生物朋克",
            "少女生存",
            "父女关系",
            "反乌托邦"
        ]
    },
    {
        "title": "铁手人",
        "url": "movie-1710.html",
        "cover": "./60.jpg",
        "year": "2028",
        "region": "美国",
        "genre": "动作,奇幻,冒险",
        "type": "电影",
        "tags": [
            "蒸汽朋克",
            "义肢",
            "复仇骑士",
            "中世纪"
        ]
    },
    {
        "title": "石纪元第四季",
        "url": "movie-1711.html",
        "cover": "./61.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻、冒险、少年",
        "type": "动画剧集",
        "tags": [
            "科学王国",
            "石油危机",
            "跨海远征",
            "新角色",
            "资源战争"
        ]
    },
    {
        "title": "爱上查美乐",
        "url": "movie-1712.html",
        "cover": "./62.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "爱情/喜剧",
        "type": "剧集",
        "tags": [
            "欢喜冤家",
            "美食",
            "霸道总裁",
            "治愈"
        ]
    },
    {
        "title": "湄公河大案",
        "url": "movie-1713.html",
        "cover": "./63.jpg",
        "year": "2014",
        "region": "中国大陆",
        "genre": "犯罪,警匪,纪实",
        "type": "剧集",
        "tags": [
            "真实案件改编",
            "跨国追捕",
            "缉毒",
            "硬汉"
        ]
    },
    {
        "title": "人到中年2009",
        "url": "movie-1714.html",
        "cover": "./64.jpg",
        "year": "2009",
        "region": "中国大陆",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "金融危机",
            "裁员",
            "房贷",
            "中年夫妻",
            "现实主义"
        ]
    },
    {
        "title": "齐格菲歌舞团",
        "url": "movie-1715.html",
        "cover": "./65.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "歌舞/传记/历史",
        "type": "电影",
        "tags": [
            "百老汇",
            "齐格菲",
            "富丽秀",
            "大萧条",
            "台前幕后"
        ]
    },
    {
        "title": "草莽神龙战三关",
        "url": "movie-1716.html",
        "cover": "./66.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "古装/动作",
        "type": "电影",
        "tags": [
            "武侠",
            "硬核功夫",
            "过关斩将",
            "复仇"
        ]
    },
    {
        "title": "少数派报告2015",
        "url": "movie-1717.html",
        "cover": "./67.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "科幻/犯罪/动作",
        "type": "电影",
        "tags": [
            "算法预言",
            "犯罪前科",
            "记忆删除",
            "暗网法庭"
        ]
    },
    {
        "title": "曾几何时天魔的黑兔",
        "url": "movie-1718.html",
        "cover": "./68.jpg",
        "year": "2011",
        "region": "日本",
        "genre": "奇幻/校园",
        "type": "剧集",
        "tags": [
            "轻小说改",
            "黑魔法",
            "契约",
            "傲娇"
        ]
    },
    {
        "title": "达菲的旅馆麻烦",
        "url": "movie-1719.html",
        "cover": "./69.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "喜剧,冒险",
        "type": "电影",
        "tags": [
            "动画",
            "旅馆",
            "熊",
            "闹剧"
        ]
    },
    {
        "title": "滑头鬼之孙 零·泪·雪",
        "url": "movie-1720.html",
        "cover": "./70.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "奇幻/战斗/动作",
        "type": "动画剧集",
        "tags": [
            "妖怪",
            "前传",
            "雪女",
            "悲剧",
            "血脉"
        ]
    },
    {
        "title": "机器肉鸡第六季",
        "url": "movie-1721.html",
        "cover": "./71.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "喜剧/定格动画/黑色幽默",
        "type": "剧集",
        "tags": [
            "恶搞",
            "玩偶",
            "流行文化",
            "无厘头"
        ]
    },
    {
        "title": "飞龙引凤",
        "url": "movie-1722.html",
        "cover": "./72.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "古装,武侠,爱情,喜剧",
        "type": "剧集",
        "tags": [
            "女扮男装",
            "江湖恩怨",
            "欢喜冤家",
            "轻喜"
        ]
    },
    {
        "title": "老爹的非“城”勿扰",
        "url": "movie-1723.html",
        "cover": "./73.jpg",
        "year": "2013",
        "region": "中国大陆",
        "genre": "家庭/喜剧/剧情",
        "type": "电视剧",
        "tags": [
            "城乡差异",
            "父女情",
            "相亲"
        ]
    },
    {
        "title": "巴黎式恋爱",
        "url": "movie-1724.html",
        "cover": "./74.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "爱情/剧情/文艺",
        "type": "电影",
        "tags": [
            "开放式关系",
            "塞纳河畔",
            "知识分子恋爱",
            "法式慵懒"
        ]
    },
    {
        "title": "这!就是街舞第六季",
        "url": "movie-1725.html",
        "cover": "./75.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "真人秀",
        "type": "综艺",
        "tags": [
            "街舞",
            "竞技",
            "潮流"
        ]
    },
    {
        "title": "空乘情人",
        "url": "movie-1726.html",
        "cover": "./76.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "喜剧,爱情",
        "type": "电影",
        "tags": [
            "多线叙事",
            "飞机",
            "艳遇",
            "疯狂"
        ]
    },
    {
        "title": "洛迪",
        "url": "movie-1727.html",
        "cover": "./77.jpg",
        "year": "2023",
        "region": "菲律宾",
        "genre": "剧情,体育,传记",
        "type": "电影",
        "tags": [
            "拳击",
            "贫民窟",
            "单亲妈妈",
            "真实改编"
        ]
    },
    {
        "title": "天堂岛之外第三季",
        "url": "movie-1728.html",
        "cover": "./78.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "剧情,悬疑,科幻",
        "type": "剧集",
        "tags": [
            "平行世界",
            "越狱",
            "乌托邦",
            "脑机接口",
            "反抗军"
        ]
    },
    {
        "title": "杀手正在召唤",
        "url": "movie-1729.html",
        "cover": "./79.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "动作、惊悚、犯罪",
        "type": "电影",
        "tags": [
            "电话亭",
            "赏金猎人",
            "复眼杀手"
        ]
    },
    {
        "title": "好人、巴特与洛基",
        "url": "movie-1730.html",
        "cover": "./80.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "西部犯罪",
        "type": "电影",
        "tags": [
            "三人行",
            "赏金猎人",
            "印第安",
            "背叛"
        ]
    },
    {
        "title": "金瓶梅2:爱的奴隶",
        "url": "movie-1731.html",
        "cover": "./81.jpg",
        "year": "2009",
        "region": "中国香港",
        "genre": "情色/剧情/古装",
        "type": "电影",
        "tags": [
            "名著改编",
            "情欲",
            "权谋",
            "悲剧",
            "女性视角"
        ]
    },
    {
        "title": "连环套",
        "url": "movie-1732.html",
        "cover": "./82.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑,刑侦,剧情",
        "type": "电视剧",
        "tags": [
            "案中案",
            "卧底",
            "黑吃黑",
            "反转"
        ]
    },
    {
        "title": "黑暗侵袭",
        "url": "movie-1733.html",
        "cover": "./83.jpg",
        "year": "2025",
        "region": "德国",
        "genre": "恐怖,悬疑",
        "type": "剧集",
        "tags": [
            "洞穴",
            "考古",
            "地心",
            "生存",
            "未知生物"
        ]
    },
    {
        "title": "这些与二战",
        "url": "movie-1734.html",
        "cover": "./84.jpg",
        "year": "2027",
        "region": "德国",
        "genre": "历史,剧情,战争",
        "type": "电影",
        "tags": [
            "反思",
            "物件",
            "群像",
            "人性"
        ]
    },
    {
        "title": "死人不穿格子衣",
        "url": "movie-1735.html",
        "cover": "./85.jpg",
        "year": "2025",
        "region": "西班牙",
        "genre": "恐怖悬疑",
        "type": "电影",
        "tags": [
            "复古",
            "服装店",
            "诅咒",
            "尺码",
            "双重人格"
        ]
    },
    {
        "title": "东方神骏",
        "url": "movie-1736.html",
        "cover": "./86.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/运动/历史",
        "type": "电影",
        "tags": [
            "马术",
            "民族",
            "奥运",
            "热血",
            "逆袭"
        ]
    },
    {
        "title": "七虎断魂枪",
        "url": "movie-1737.html",
        "cover": "./87.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "动作/武侠/剧情",
        "type": "电影",
        "tags": [
            "枪法",
            "复仇",
            "冷兵器",
            "师徒",
            "江湖"
        ]
    },
    {
        "title": "堡垒",
        "url": "movie-1738.html",
        "cover": "./88.jpg",
        "year": "2025",
        "region": "波兰/德国",
        "genre": "战争/历史/剧情",
        "type": "电影",
        "tags": [
            "二战",
            "犹太人",
            "森林游击队",
            "生存",
            "道德困境"
        ]
    },
    {
        "title": "夜幕下的哈尔滨2007",
        "url": "movie-1739.html",
        "cover": "./89.jpg",
        "year": "2007",
        "region": "中国大陆",
        "genre": "谍战/年代",
        "type": "电视剧",
        "tags": [
            "满洲",
            "地下党",
            "伪装",
            "智斗"
        ]
    },
    {
        "title": "洛奇3国语",
        "url": "movie-1740.html",
        "cover": "./90.jpg",
        "year": "1982",
        "region": "美国",
        "genre": "剧情/体育",
        "type": "电影/重映配音版",
        "tags": [
            "经典重配",
            "热血",
            "永不言败"
        ]
    },
    {
        "title": "大圣重生之斗战逆天",
        "url": "movie-1741.html",
        "cover": "./91.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "奇幻/动作/神话",
        "type": "动画电影",
        "tags": [
            "孙悟空",
            "重生",
            "现代都市",
            "系统",
            "逆袭"
        ]
    },
    {
        "title": "白鼬",
        "url": "movie-1742.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "犯罪/黑色幽默",
        "type": "电影",
        "tags": [
            "杀手",
            "宠物",
            "反套路",
            "复仇",
            "冷幽默"
        ]
    },
    {
        "title": "海上火焰",
        "url": "movie-1743.html",
        "cover": "./93.jpg",
        "year": "2016",
        "region": "意大利",
        "genre": "纪录片",
        "type": "电影",
        "tags": [
            "难民",
            "地中海",
            "海岛",
            "日常",
            "政治"
        ]
    },
    {
        "title": "城市生活不是为我",
        "url": "movie-1744.html",
        "cover": "./94.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情,文艺",
        "type": "电影",
        "tags": [
            "返乡",
            "内卷",
            "逃离"
        ]
    },
    {
        "title": "动态漫画·绝世古尊第二季",
        "url": "movie-1745.html",
        "cover": "./95.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动画,玄幻,冒险",
        "type": "剧集",
        "tags": [
            "动态漫画",
            "修仙",
            "古尊归来"
        ]
    },
    {
        "title": "堡垒 2012",
        "url": "movie-1746.html",
        "cover": "./96.jpg",
        "year": "2012",
        "region": "俄罗斯",
        "genre": "动作,战争,历史",
        "type": "电影",
        "tags": [
            "布列斯特要塞",
            "二战",
            "卫国战争",
            "真实事件",
            "惨烈"
        ]
    },
    {
        "title": "上帝不喜欢漫画",
        "url": "movie-1747.html",
        "cover": "./97.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "奇幻喜剧",
        "type": "电影",
        "tags": [
            "黑色幽默",
            "宗教隐喻",
            "二次元破壁"
        ]
    },
    {
        "title": "超级玛利欧兄弟",
        "url": "movie-1748.html",
        "cover": "./98.jpg",
        "year": "2023",
        "region": "美国/日本",
        "genre": "冒险/奇幻/家庭",
        "type": "动画电影",
        "tags": [
            "游戏改编",
            "水管工",
            "蘑菇王国",
            "库巴"
        ]
    },
    {
        "title": "五月碧云天",
        "url": "movie-1749.html",
        "cover": "./99.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "剧情/家庭/文艺",
        "type": "电影",
        "tags": [
            "乡土文学",
            "老兵",
            "食安问题",
            "父子和解"
        ]
    },
    {
        "title": "我要嫁印侨",
        "url": "movie-1750.html",
        "cover": "./100.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "爱情/家庭/喜剧",
        "type": "电视剧",
        "tags": [
            "跨国婚姻",
            "中印文化",
            "婆媳大战",
            "短视频网红"
        ]
    },
    {
        "title": "复仇母亲",
        "url": "movie-1751.html",
        "cover": "./101.jpg",
        "year": "2026",
        "region": "印度",
        "genre": "剧情,犯罪,惊悚",
        "type": "电影",
        "tags": [
            "强奸案",
            "司法腐败",
            "以暴制暴",
            "母亲力量"
        ]
    },
    {
        "title": "婆娑罗",
        "url": "movie-1752.html",
        "cover": "./102.jpg",
        "year": "1998",
        "region": "日本",
        "genre": "冒险/爱情/战争",
        "type": "剧集/动画",
        "tags": [
            "末世",
            "命运之人",
            "史诗"
        ]
    },
    {
        "title": "泪洒相思地",
        "url": "movie-1753.html",
        "cover": "./103.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "爱情/古典",
        "type": "电影",
        "tags": [
            "歌仔戏",
            "宿命",
            "时代悲剧"
        ]
    },
    {
        "title": "恶魔咆哮2",
        "url": "movie-1754.html",
        "cover": "./104.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖、奇幻、动作",
        "type": "电影",
        "tags": [
            "恶魔附身",
            "神器争夺",
            "末日审判",
            "反套路"
        ]
    },
    {
        "title": "爱情的代驾",
        "url": "movie-1755.html",
        "cover": "./105.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "爱情,喜剧",
        "type": "电影",
        "tags": [
            "代驾",
            "错位",
            "浪漫",
            "轻喜"
        ]
    },
    {
        "title": "胜利之光 第四季",
        "url": "movie-1756.html",
        "cover": "./106.jpg",
        "year": "2013",
        "region": "美国",
        "genre": "剧情/运动/家庭",
        "type": "剧集",
        "tags": [
            "橄榄球",
            "小镇",
            "励志",
            "群像",
            "真实"
        ]
    },
    {
        "title": "戏命师之飞天神兽",
        "url": "movie-1757.html",
        "cover": "./107.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "古装/奇幻/动作",
        "type": "网络电影",
        "tags": [
            "傀儡戏",
            "机关兽",
            "夺宝"
        ]
    },
    {
        "title": "长安秘闻录之聂隐娘",
        "url": "movie-1758.html",
        "cover": "./108.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装,动作",
        "type": "网络电影",
        "tags": [
            "刺客",
            "唐代",
            "女侠"
        ]
    },
    {
        "title": "何处是归程",
        "url": "movie-1759.html",
        "cover": "./109.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "剧情/公路/家庭",
        "type": "电影",
        "tags": [
            "寻根",
            "父子",
            "卡车司机",
            "公路片"
        ]
    },
    {
        "title": "那些年,我们一起追的女孩",
        "url": "movie-1760.html",
        "cover": "./110.jpg",
        "year": "2011",
        "region": "中国台湾",
        "genre": "爱情/剧情/喜剧",
        "type": "电影",
        "tags": [
            "青春",
            "校园",
            "初恋",
            "柯景腾",
            "沈佳宜"
        ]
    },
    {
        "title": "寻侠英雄传之阴阳爪",
        "url": "movie-1761.html",
        "cover": "./111.jpg",
        "year": "2024",
        "region": "中国内地",
        "genre": "武侠、悬疑",
        "type": "网络电影",
        "tags": [
            "江湖奇案",
            "阴阳秘术",
            "师徒传承"
        ]
    },
    {
        "title": "人质们",
        "url": "movie-1762.html",
        "cover": "./112.jpg",
        "year": "2022",
        "region": "俄罗斯",
        "genre": "剧情,历史,战争",
        "type": "电影",
        "tags": [
            "真实事件改编",
            "人性考验",
            "封闭空间",
            "政治冲突"
        ]
    },
    {
        "title": "我的情敌女婿",
        "url": "movie-1763.html",
        "cover": "./113.jpg",
        "year": "2018",
        "region": "中国香港",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "贺岁",
            "女婿见家长",
            "阴差阳错",
            "港式笑料"
        ]
    },
    {
        "title": "大侠梅花鹿",
        "url": "movie-1764.html",
        "cover": "./114.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "动画/冒险/喜剧",
        "type": "电影",
        "tags": [
            "动物侠客",
            "环保",
            "闽南语配音"
        ]
    },
    {
        "title": "特别使命",
        "url": "movie-1765.html",
        "cover": "./115.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "刑侦/剧情/反腐",
        "type": "剧集",
        "tags": [
            "缉毒",
            "卧底",
            "跨国犯罪",
            "正邪边缘",
            "兄弟反目"
        ]
    },
    {
        "title": "书爱",
        "url": "movie-1766.html",
        "cover": "./116.jpg",
        "year": "2024",
        "region": "法国/比利时",
        "genre": "文艺/爱情",
        "type": "电影",
        "tags": [
            "旧书店",
            "书信传情",
            "慢节奏",
            "文学梗",
            "灵魂伴侣"
        ]
    },
    {
        "title": "小生梦惊魂国语",
        "url": "movie-1767.html",
        "cover": "./117.jpg",
        "year": "1987",
        "region": "中国香港",
        "genre": "喜剧/奇幻/惊悚",
        "type": "电影",
        "tags": [
            "互换身体",
            "片场闹鬼",
            "香港老片",
            "黑色幽默",
            "戏中戏"
        ]
    },
    {
        "title": "危险年代",
        "url": "movie-1768.html",
        "cover": "./118.jpg",
        "year": "1982",
        "region": "澳大利亚/印度尼西亚",
        "genre": "剧情/爱情/政治",
        "type": "电影",
        "tags": [
            "政变",
            "战地记者",
            "禁忌之恋",
            "历史"
        ]
    },
    {
        "title": "乱世香港",
        "url": "movie-1769.html",
        "cover": "./119.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "剧情、历史、爱情",
        "type": "剧集",
        "tags": [
            "豪门恩怨",
            "时代变迁",
            "商战",
            "家族史诗"
        ]
    },
    {
        "title": "密恋忆情",
        "url": "movie-1770.html",
        "cover": "./120.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "爱情,悬疑,melodrama",
        "type": "剧集",
        "tags": [
            "失忆",
            "豪门",
            "替身",
            "初恋"
        ]
    },
    {
        "title": "人生七年2",
        "url": "movie-1771.html",
        "cover": "./121.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "纪录片式剧情,家庭,社会",
        "type": "电视剧",
        "tags": [
            "成长追踪",
            "阶级",
            "真实时间",
            "原班人马"
        ]
    },
    {
        "title": "鬼卧床",
        "url": "movie-1772.html",
        "cover": "./122.jpg",
        "year": "2021",
        "region": "中国台湾",
        "genre": "恐怖,悬疑",
        "type": "电影",
        "tags": [
            "民俗",
            "附身",
            "怨灵",
            "反转"
        ]
    },
    {
        "title": "极度空灵粤语",
        "url": "movie-1773.html",
        "cover": "./123.jpg",
        "year": "2002",
        "region": "中国香港",
        "genre": "悬疑/灵异/都市传说",
        "type": "剧集",
        "tags": [
            "单元剧",
            "港风",
            "都市传说",
            "心理恐惧"
        ]
    },
    {
        "title": "行李寄存",
        "url": "movie-1774.html",
        "cover": "./124.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "悬疑/惊悚",
        "type": "剧集",
        "tags": [
            "火车站",
            "储物柜",
            "连环失踪",
            "底层"
        ]
    },
    {
        "title": "完美帝国",
        "url": "movie-1775.html",
        "cover": "./125.jpg",
        "year": "2025",
        "region": "美国/英国",
        "genre": "科幻/悬疑/剧情",
        "type": "剧集",
        "tags": [
            "虚拟现实",
            "乌托邦",
            "意识上传",
            "阶层革命",
            "哲学思辨"
        ]
    },
    {
        "title": "偷情大丈夫",
        "url": "movie-1776.html",
        "cover": "./126.jpg",
        "year": "2011",
        "region": "香港",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "都市",
            "出轨",
            "黑色幽默",
            "港式喜剧"
        ]
    },
    {
        "title": "女子十二不设防",
        "url": "movie-1777.html",
        "cover": "./127.jpg",
        "year": "1991",
        "region": "中国香港",
        "genre": "剧情/动作/犯罪",
        "type": "电影",
        "tags": [
            "全女性",
            "警匪",
            "卧底",
            "硬核"
        ]
    },
    {
        "title": "仙球大战",
        "url": "movie-1778.html",
        "cover": "./128.jpg",
        "year": "2017",
        "region": "中国香港/中国大陆",
        "genre": "喜剧/古装/运动",
        "type": "电影",
        "tags": [
            "无厘头",
            "神仙运动会",
            "恶搞竞技",
            "群星贺岁",
            "特摄风"
        ]
    },
    {
        "title": "哈啦大发师",
        "url": "movie-1779.html",
        "cover": "./129.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧,剧情",
        "type": "电影",
        "tags": [
            "社区",
            "碎嘴",
            "非裔文化"
        ]
    },
    {
        "title": "权欲第三章第三季",
        "url": "movie-1780.html",
        "cover": "./130.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情,犯罪,动作",
        "type": "电视剧",
        "tags": [
            "黑帮史诗",
            "家族分裂",
            "毒品战争",
            "权力游戏"
        ]
    },
    {
        "title": "羊狼共和国:猪事大急",
        "url": "movie-1781.html",
        "cover": "./131.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,动画",
        "type": "电影",
        "tags": [
            "动物",
            "政治讽刺",
            "冒险"
        ]
    },
    {
        "title": "传教士",
        "url": "movie-1782.html",
        "cover": "./132.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "恐怖/惊悚/悬疑",
        "type": "电影",
        "tags": [
            "邪教",
            "驱魔",
            "反转",
            "血腥",
            "心理"
        ]
    },
    {
        "title": "梦往澳洲海",
        "url": "movie-1783.html",
        "cover": "./133.jpg",
        "year": "2025",
        "region": "澳大利亚/中国",
        "genre": "冒险/剧情/家庭",
        "type": "电影",
        "tags": [
            "自然风光",
            "亲情和解",
            "公路片",
            "治愈",
            "成长"
        ]
    },
    {
        "title": "精灵梦叶罗丽11",
        "url": "movie-1784.html",
        "cover": "./134.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动画",
        "type": "动画",
        "tags": [
            "魔法少女",
            "环保",
            "奇幻",
            "少儿"
        ]
    },
    {
        "title": "银河系第二好医院",
        "url": "movie-1785.html",
        "cover": "./135.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "喜剧,科幻",
        "type": "动画剧集",
        "tags": [
            "外星人",
            "医疗",
            "无厘头",
            "冒险"
        ]
    },
    {
        "title": "昨天、今天和明天",
        "url": "movie-1786.html",
        "cover": "./136.jpg",
        "year": "1997",
        "region": "中国大陆",
        "genre": "爱情/奇幻",
        "type": "电影",
        "tags": [
            "时间循环",
            "人生选择",
            "哲理"
        ]
    },
    {
        "title": "爱德华·李的乡村料理",
        "url": "movie-1787.html",
        "cover": "./137.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "纪录片/美食",
        "type": "剧集",
        "tags": [
            "料理",
            "主厨",
            "美国南方",
            "文化融合"
        ]
    },
    {
        "title": "情海波澜",
        "url": "movie-1788.html",
        "cover": "./138.jpg",
        "year": "2003",
        "region": "中国大陆",
        "genre": "爱情,家庭",
        "type": "剧集",
        "tags": [
            "民国",
            "豪门",
            "虐恋",
            "年代戏"
        ]
    },
    {
        "title": "不受保护的无辜者",
        "url": "movie-1789.html",
        "cover": "./139.jpg",
        "year": "2024",
        "region": "德国/波兰",
        "genre": "剧情,历史,战争",
        "type": "电影",
        "tags": [
            "二战",
            "纳粹暴行",
            "儿童视角",
            "黑白摄影",
            "人性光辉"
        ]
    },
    {
        "title": "迷粉爱墙",
        "url": "movie-1790.html",
        "cover": "./140.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "青春爱情",
        "type": "电影",
        "tags": [
            "追星",
            "站姐",
            "暗恋"
        ]
    },
    {
        "title": "海盗夺金冠",
        "url": "movie-1791.html",
        "cover": "./141.jpg",
        "year": "2023",
        "region": "英国",
        "genre": "动作、冒险、喜剧",
        "type": "电影",
        "tags": [
            "海盗",
            "宝藏",
            "荒诞",
            "反转",
            "老年热血"
        ]
    },
    {
        "title": "我把你当成兄弟",
        "url": "movie-1792.html",
        "cover": "./142.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "喜剧,剧情,耽美",
        "type": "剧集",
        "tags": [
            "友情以上",
            "同居",
            "乌龙"
        ]
    },
    {
        "title": "克星",
        "url": "movie-1793.html",
        "cover": "./143.jpg",
        "year": "1995",
        "region": "香港",
        "genre": "动作/警匪",
        "type": "剧集",
        "tags": [
            "双雄对决",
            "宿敌",
            "卧底",
            "帮派"
        ]
    },
    {
        "title": "黑道家族 第三季",
        "url": "movie-1794.html",
        "cover": "./144.jpg",
        "year": "2001",
        "region": "美国",
        "genre": "剧情/犯罪/黑色幽默",
        "type": "剧集",
        "tags": [
            "黑帮史诗",
            "心理分析",
            "家庭伦理",
            "权力游戏"
        ]
    },
    {
        "title": "梅格雷的亡者",
        "url": "movie-1795.html",
        "cover": "./145.jpg",
        "year": "2025",
        "region": "法国/英国",
        "genre": "犯罪/悬疑",
        "type": "电影",
        "tags": [
            "复古",
            "警探",
            "连环杀人",
            "巴黎"
        ]
    },
    {
        "title": "爱拼会赢",
        "url": "movie-1796.html",
        "cover": "./146.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "年代,商战,家庭",
        "type": "电视剧",
        "tags": [
            "晋江商人",
            "改革开放",
            "服装行业",
            "草根逆袭"
        ]
    },
    {
        "title": "儿女债粤语",
        "url": "movie-1797.html",
        "cover": "./147.jpg",
        "year": "1997",
        "region": "中国香港",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "香港",
            "移民",
            "代际冲突",
            "回归",
            "市井"
        ]
    },
    {
        "title": "地狱之犬们",
        "url": "movie-1798.html",
        "cover": "./148.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "动作/犯罪",
        "type": "电影",
        "tags": [
            "黑帮",
            "卧底",
            "暴力美学",
            "兄弟反目",
            "以暴制暴"
        ]
    },
    {
        "title": "沙之爪",
        "url": "movie-1799.html",
        "cover": "./149.jpg",
        "year": "2025",
        "region": "埃及/美国",
        "genre": "冒险、奇幻",
        "type": "电影",
        "tags": [
            "考古",
            "古埃及",
            "寻宝"
        ]
    },
    {
        "title": "牧师神探第十季",
        "url": "movie-1800.html",
        "cover": "./150.jpg",
        "year": "2027",
        "region": "英国",
        "genre": "悬疑/犯罪/剧情",
        "type": "剧集",
        "tags": [
            "英剧",
            "推理",
            "宗教",
            "乡村",
            "老牌"
        ]
    },
    {
        "title": "帝国毁灭:关键13分钟",
        "url": "movie-1801.html",
        "cover": "./1.jpg",
        "year": "2015",
        "region": "德国",
        "genre": "剧情/历史/战争",
        "type": "电影",
        "tags": [
            "刺杀希特勒",
            "二战",
            "个人英雄",
            "施陶芬贝格",
            "惊险"
        ]
    },
    {
        "title": "威尼斯王子",
        "url": "movie-1802.html",
        "cover": "./2.jpg",
        "year": "2024",
        "region": "意大利",
        "genre": "剧情,历史,爱情",
        "type": "电影",
        "tags": [
            "贵族",
            "面具",
            "运河",
            "瘟疫",
            "禁忌恋"
        ]
    },
    {
        "title": "长袜子皮皮的新历险",
        "url": "movie-1803.html",
        "cover": "./3.jpg",
        "year": "2020",
        "region": "瑞典/美国",
        "genre": "家庭/奇幻/冒险",
        "type": "电影",
        "tags": [
            "童话",
            "改编",
            "女孩",
            "力量",
            "自由"
        ]
    },
    {
        "title": "贼公阿牛粤语",
        "url": "movie-1804.html",
        "cover": "./4.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "犯罪/动作/剧情",
        "type": "电影",
        "tags": [
            "江湖",
            "义气",
            "宿命",
            "老港味"
        ]
    },
    {
        "title": "海底两百里",
        "url": "movie-1805.html",
        "cover": "./5.jpg",
        "year": "2025",
        "region": "美国/澳大利亚",
        "genre": "科幻/冒险/灾难",
        "type": "电影",
        "tags": [
            "深海探险",
            "未知生物",
            "海底城市",
            "生态惊悚"
        ]
    },
    {
        "title": "世界冠军丹尼",
        "url": "movie-1806.html",
        "cover": "./6.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "家庭/运动",
        "type": "电影",
        "tags": [
            "励志",
            "乒乓球",
            "逆袭",
            "自闭症"
        ]
    },
    {
        "title": "情同陌路",
        "url": "movie-1807.html",
        "cover": "./7.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "爱情剧情",
        "type": "电影",
        "tags": [
            "失忆",
            "婚姻危机",
            "重逢",
            "心理"
        ]
    },
    {
        "title": "伊斯坦布尔红",
        "url": "movie-1808.html",
        "cover": "./8.jpg",
        "year": "2023",
        "region": "土耳其",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "艺术",
            "历史",
            "间谍"
        ]
    },
    {
        "title": "主厨的餐桌:面条",
        "url": "movie-1809.html",
        "cover": "./9.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "纪录片",
        "type": "剧集",
        "tags": [
            "美食",
            "文化",
            "匠人",
            "治愈"
        ]
    },
    {
        "title": "愤怒的公牛",
        "url": "movie-1810.html",
        "cover": "./10.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "传记/运动",
        "type": "电影",
        "tags": [
            "拳击传奇",
            "晚年救赎",
            "暴力美学"
        ]
    },
    {
        "title": "新警事之隐形兄弟",
        "url": "movie-1811.html",
        "cover": "./11.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑犯罪",
        "type": "电视剧",
        "tags": [
            "双胞胎",
            "身份互换",
            "刑侦",
            "反转"
        ]
    },
    {
        "title": "武士的食谱",
        "url": "movie-1812.html",
        "cover": "./12.jpg",
        "year": "2013",
        "region": "日本",
        "genre": "剧情/历史/美食",
        "type": "电影",
        "tags": [
            "武士道",
            "美食",
            "夫妻关系",
            "时代剧"
        ]
    },
    {
        "title": "网红养成记国语",
        "url": "movie-1813.html",
        "cover": "./13.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "剧情,喜剧",
        "type": "电视剧",
        "tags": [
            "直播",
            "算法",
            "虚拟偶像"
        ]
    },
    {
        "title": "忍者大决斗",
        "url": "movie-1814.html",
        "cover": "./14.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "动作、奇幻",
        "type": "电影",
        "tags": [
            "忍者",
            "战国",
            "超能力",
            "血腥",
            "cult"
        ]
    },
    {
        "title": "非正常动物研究中心",
        "url": "movie-1815.html",
        "cover": "./15.jpg",
        "year": "2024",
        "region": "英国",
        "genre": "喜剧/科幻/悬疑",
        "type": "电视剧",
        "tags": [
            "荒诞科学",
            "会说话的动物",
            "黑色幽默",
            "实验室",
            "末日危机"
        ]
    },
    {
        "title": "巴赫曼的沙漠之旅",
        "url": "movie-1816.html",
        "cover": "./16.jpg",
        "year": "2024",
        "region": "德国",
        "genre": "冒险,剧情,传记",
        "type": "电影",
        "tags": [
            "沙漠",
            "地质学家",
            "寻找自我",
            "荒野"
        ]
    },
    {
        "title": "无事生非",
        "url": "movie-1817.html",
        "cover": "./17.jpg",
        "year": "2024",
        "region": "意大利",
        "genre": "喜剧,剧情",
        "type": "电影",
        "tags": [
            "讽刺",
            "小镇",
            "荒诞",
            "黑色幽默",
            "群戏"
        ]
    },
    {
        "title": "超时空武士",
        "url": "movie-1818.html",
        "cover": "./18.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "科幻,动作,历史",
        "type": "剧集",
        "tags": [
            "穿越",
            "武士",
            "平行时空",
            "对决"
        ]
    },
    {
        "title": "钢管舞娘",
        "url": "movie-1819.html",
        "cover": "./19.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情,运动",
        "type": "电影",
        "tags": [
            "女性",
            "逆袭",
            "身体自主",
            "竞技"
        ]
    },
    {
        "title": "天使与我同桌",
        "url": "movie-1820.html",
        "cover": "./20.jpg",
        "year": "2025",
        "region": "新西兰",
        "genre": "传记,剧情",
        "type": "电影",
        "tags": [
            "女诗人",
            "精神病院",
            "创作"
        ]
    },
    {
        "title": "真假王爷",
        "url": "movie-1821.html",
        "cover": "./21.jpg",
        "year": "2022",
        "region": "中国大陆",
        "genre": "喜剧/古装/爱情",
        "type": "剧集",
        "tags": [
            "互换身份",
            "晚清",
            "骗子",
            "爆笑",
            "逆袭"
        ]
    },
    {
        "title": "宝贝星球",
        "url": "movie-1822.html",
        "cover": "./22.jpg",
        "year": "2008",
        "region": "美国",
        "genre": "动画,科幻,家庭",
        "type": "电影",
        "tags": [
            "外星人",
            "萌宠",
            "环保",
            "星际冒险",
            "治愈系"
        ]
    },
    {
        "title": "缱绻仙凡间粤语",
        "url": "movie-1823.html",
        "cover": "./23.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "古装,爱情,神话",
        "type": "剧集",
        "tags": [
            "粤语",
            "神仙",
            "下凡"
        ]
    },
    {
        "title": "步步紧逼",
        "url": "movie-1824.html",
        "cover": "./24.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "惊悚/悬疑/犯罪",
        "type": "电影",
        "tags": [
            "倒计时",
            "猫鼠游戏",
            "智斗",
            "女性视角",
            "高概念"
        ]
    },
    {
        "title": "苏联来的悍将",
        "url": "movie-1825.html",
        "cover": "./25.jpg",
        "year": "2025",
        "region": "俄罗斯,中国大陆",
        "genre": "动作,战争,历史",
        "type": "电影",
        "tags": [
            "雇佣兵",
            "冷战",
            "硬核枪战",
            "兄弟情"
        ]
    },
    {
        "title": "长在屋里的竹笋",
        "url": "movie-1826.html",
        "cover": "./26.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "乡村",
            "成长",
            "隐喻"
        ]
    },
    {
        "title": "女高汉子",
        "url": "movie-1827.html",
        "cover": "./27.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "喜剧,青春,运动",
        "type": "电影",
        "tags": [
            "女篮",
            "校园",
            "性别标签",
            "热血",
            "逆袭"
        ]
    },
    {
        "title": "与神对谈",
        "url": "movie-1828.html",
        "cover": "./28.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情/奇幻/哲学",
        "type": "电影",
        "tags": [
            "宗教",
            "辩论",
            "存在主义",
            "独角戏",
            "思辨"
        ]
    },
    {
        "title": "玉女寻春",
        "url": "movie-1829.html",
        "cover": "./29.jpg",
        "year": "1994",
        "region": "中国香港",
        "genre": "剧情,爱情",
        "type": "电影",
        "tags": [
            "禁忌之恋",
            "女性成长",
            "时代变革"
        ]
    },
    {
        "title": "易普症",
        "url": "movie-1830.html",
        "cover": "./30.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "悬疑,运动",
        "type": "电视剧",
        "tags": [
            "心理疾病",
            "竞技体育",
            "群像"
        ]
    },
    {
        "title": "藏珠",
        "url": "movie-1831.html",
        "cover": "./31.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "犯罪/剧情",
        "type": "电影",
        "tags": [
            "卧底",
            "珠宝",
            "黑帮",
            "身份认同"
        ]
    },
    {
        "title": "今天我休息",
        "url": "movie-1832.html",
        "cover": "./32.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "喜剧/生活/奇幻",
        "type": "电影",
        "tags": [
            "时间循环",
            "社畜",
            "被迫休假"
        ]
    },
    {
        "title": "逆袭",
        "url": "movie-1833.html",
        "cover": "./33.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "剧情,励志,商战",
        "type": "电影",
        "tags": [
            "反转",
            "职场",
            "黑马",
            "逆袭人生"
        ]
    },
    {
        "title": "复身犯",
        "url": "movie-1834.html",
        "cover": "./34.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "科幻,惊悚",
        "type": "电影",
        "tags": [
            "意识上传",
            "悬疑",
            "伦理"
        ]
    },
    {
        "title": "街头之王2:汽车城",
        "url": "movie-1835.html",
        "cover": "./35.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,犯罪",
        "type": "电影",
        "tags": [
            "街头赛车",
            "底特律",
            "复仇",
            "地下世界"
        ]
    },
    {
        "title": "炙热",
        "url": "movie-1836.html",
        "cover": "./36.jpg",
        "year": "2023",
        "region": "印度",
        "genre": "剧情/女性",
        "type": "电影",
        "tags": [
            "女性觉醒",
            "农村",
            "性压抑",
            "反抗"
        ]
    },
    {
        "title": "飙速宅男第一季",
        "url": "movie-1837.html",
        "cover": "./37.jpg",
        "year": "2013",
        "region": "日本",
        "genre": "体育、竞技",
        "type": "动画剧集",
        "tags": [
            "自行车",
            "社团",
            "逆袭",
            "友情"
        ]
    },
    {
        "title": "最后一个婚礼",
        "url": "movie-1838.html",
        "cover": "./38.jpg",
        "year": "2026",
        "region": "意大利",
        "genre": "喜剧、爱情、家庭",
        "type": "电影",
        "tags": [
            "婚礼",
            "闹剧",
            "遗产",
            "家族秘密"
        ]
    },
    {
        "title": "东京二十三区女",
        "url": "movie-1839.html",
        "cover": "./39.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "恐怖/悬疑",
        "type": "电视剧",
        "tags": [
            "都市传说",
            "女性",
            "短篇集",
            "怪谈"
        ]
    },
    {
        "title": "成名之路",
        "url": "movie-1840.html",
        "cover": "./40.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情/音乐",
        "type": "电视剧",
        "tags": [
            "乐队",
            "经纪人",
            "九十年代",
            "摇滚"
        ]
    },
    {
        "title": "回带侦查",
        "url": "movie-1841.html",
        "cover": "./41.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "刑侦科幻",
        "type": "剧集",
        "tags": [
            "倒带",
            "悬疑",
            "时空",
            "破案"
        ]
    },
    {
        "title": "战鼓平息",
        "url": "movie-1842.html",
        "cover": "./42.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "剧情,战争,历史",
        "type": "电影",
        "tags": [
            "一战",
            "圣诞节",
            "休战",
            "足球",
            "人性"
        ]
    },
    {
        "title": "一帮坏家伙",
        "url": "movie-1843.html",
        "cover": "./43.jpg",
        "year": "2020",
        "region": "英国",
        "genre": "喜剧、犯罪、黑色幽默",
        "type": "剧集",
        "tags": [
            "蠢贼",
            "英式幽默",
            "社区服务",
            "改邪归正",
            "乌龙劫案"
        ]
    },
    {
        "title": "治安官",
        "url": "movie-1844.html",
        "cover": "./44.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "西部、剧情、惊悚",
        "type": "电影",
        "tags": [
            "小镇",
            "道德困境",
            "复仇",
            "执法官"
        ]
    },
    {
        "title": "法王艳史",
        "url": "movie-1845.html",
        "cover": "./45.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "古装,宫廷,悬疑,爱情",
        "type": "剧集",
        "tags": [
            "僧王",
            "权力博弈",
            "禁忌之恋",
            "朝堂风云"
        ]
    },
    {
        "title": "步兵唔易做",
        "url": "movie-1846.html",
        "cover": "./46.jpg",
        "year": "2018",
        "region": "中国香港",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "警匪",
            "基层警察",
            "搞笑",
            "卧底",
            "小人物"
        ]
    },
    {
        "title": "仗义执言",
        "url": "movie-1847.html",
        "cover": "./47.jpg",
        "year": "2008",
        "region": "中国大陆",
        "genre": "剧情、律政、社会",
        "type": "剧集",
        "tags": [
            "律师",
            "弱势群体",
            "反腐",
            "理想主义"
        ]
    },
    {
        "title": "穿过你眼神的爱",
        "url": "movie-1848.html",
        "cover": "./48.jpg",
        "year": "2023",
        "region": "中国台湾",
        "genre": "纯爱/文艺",
        "type": "爱情/剧情",
        "tags": [
            "视觉障碍",
            "暗恋",
            "书信",
            "台湾风景"
        ]
    },
    {
        "title": "十字交锋",
        "url": "movie-1849.html",
        "cover": "./49.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作,悬疑,犯罪",
        "type": "电影",
        "tags": [
            "卧底",
            "黑帮",
            "双面间谍",
            "高速追车"
        ]
    },
    {
        "title": "恋爱的母亲们",
        "url": "movie-1850.html",
        "cover": "./50.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "剧情,爱情,家庭",
        "type": "剧集",
        "tags": [
            "成人恋爱",
            "不伦",
            "女性群像",
            "深夜剧"
        ]
    },
    {
        "title": "美女食神",
        "url": "movie-1851.html",
        "cover": "./51.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "喜剧/美食/奇幻",
        "type": "电影",
        "tags": [
            "味觉争霸",
            "阴阳眼",
            "民间传说",
            "励志"
        ]
    },
    {
        "title": "她心底的世界",
        "url": "movie-1852.html",
        "cover": "./52.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "剧情,奇幻",
        "type": "电影",
        "tags": [
            "心理探索",
            "意象流",
            "母女关系",
            "疗愈",
            "视觉美学"
        ]
    },
    {
        "title": "海底3万里",
        "url": "movie-1853.html",
        "cover": "./53.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "科幻/冒险",
        "type": "电影",
        "tags": [
            "深海怪兽",
            "环保主题",
            "视觉奇观"
        ]
    },
    {
        "title": "寻车奇遇",
        "url": "movie-1854.html",
        "cover": "./54.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/公路",
        "type": "电影",
        "tags": [
            "寻找",
            "怀旧",
            "父子"
        ]
    },
    {
        "title": "星光照亮死亡",
        "url": "movie-1855.html",
        "cover": "./55.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "恐怖,奇幻",
        "type": "电影",
        "tags": [
            "民俗恐怖",
            "星辰崇拜",
            "献祭仪式"
        ]
    },
    {
        "title": "阵头",
        "url": "movie-1856.html",
        "cover": "./56.jpg",
        "year": "2012",
        "region": "中国台湾",
        "genre": "剧情/励志",
        "type": "电影",
        "tags": [
            "民俗文化",
            "青年成长",
            "父子关系",
            "传统与现代冲突"
        ]
    },
    {
        "title": "奇幻导航",
        "url": "movie-1857.html",
        "cover": "./57.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "科幻,喜剧",
        "type": "电影",
        "tags": [
            "黑科技",
            "平行世界",
            "网约车",
            "奇遇"
        ]
    },
    {
        "title": "格伦",
        "url": "movie-1858.html",
        "cover": "./58.jpg",
        "year": "2023",
        "region": "澳大利亚",
        "genre": "惊悚,剧情",
        "type": "电影",
        "tags": [
            "荒漠",
            "偷渡客",
            "人贩子",
            "生存"
        ]
    },
    {
        "title": "海蜂突击队",
        "url": "movie-1859.html",
        "cover": "./59.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "军事动作",
        "type": "电影",
        "tags": [
            "海军",
            "特战",
            "反恐",
            "爱国主义"
        ]
    },
    {
        "title": "我们与天空的距离",
        "url": "movie-1860.html",
        "cover": "./60.jpg",
        "year": "2025",
        "region": "中国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "家庭",
            "亲情",
            "治愈",
            "航空",
            "成长"
        ]
    },
    {
        "title": "牧师的终结",
        "url": "movie-1861.html",
        "cover": "./61.jpg",
        "year": "2025",
        "region": "爱尔兰/英国",
        "genre": "剧情/惊悚",
        "type": "电影",
        "tags": [
            "牧师",
            "信仰危机",
            "小镇",
            "谋杀",
            "秘密"
        ]
    },
    {
        "title": "东经北纬",
        "url": "movie-1862.html",
        "cover": "./62.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "爱情/悬疑",
        "type": "电影",
        "tags": [
            "测绘师",
            "异地恋",
            "数字密码"
        ]
    },
    {
        "title": "熔岩毒蛛",
        "url": "movie-1863.html",
        "cover": "./63.jpg",
        "year": "2025",
        "region": "澳大利亚",
        "genre": "动作/科幻/灾难",
        "type": "电影",
        "tags": [
            "怪兽",
            "火山",
            "B级片"
        ]
    },
    {
        "title": "源代码",
        "url": "movie-1864.html",
        "cover": "./64.jpg",
        "year": "2011",
        "region": "美国",
        "genre": "科幻,悬疑,惊悚",
        "type": "电影",
        "tags": [
            "平行世界",
            "时间循环",
            "记忆植入",
            "高概念",
            "反转"
        ]
    },
    {
        "title": "黑岩喋血记",
        "url": "movie-1865.html",
        "cover": "./65.jpg",
        "year": "2022",
        "region": "美国",
        "genre": "犯罪,剧情,悬疑",
        "type": "电影",
        "tags": [
            "西部现代",
            "独行侠",
            "小镇秘密",
            "复仇"
        ]
    },
    {
        "title": "狐之歌",
        "url": "movie-1866.html",
        "cover": "./66.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "奇幻/音乐/剧情",
        "type": "电影",
        "tags": [
            "能剧",
            "狐妖",
            "末世",
            "手嶌葵风",
            "物哀"
        ]
    },
    {
        "title": "福山家",
        "url": "movie-1867.html",
        "cover": "./67.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情/悬疑/家庭",
        "type": "电影",
        "tags": [
            "农村",
            "重男轻女",
            "冥婚",
            "封建迷信",
            "复仇"
        ]
    },
    {
        "title": "巴格达地毯",
        "url": "movie-1868.html",
        "cover": "./68.jpg",
        "year": "2025",
        "region": "伊朗",
        "genre": "剧情,战争",
        "type": "电影",
        "tags": [
            "手工",
            "传承",
            "母女",
            "炮火"
        ]
    },
    {
        "title": "冲绳小芙蓉",
        "url": "movie-1869.html",
        "cover": "./69.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "冲绳",
            "乡土",
            "家族羁绊",
            "温情",
            "战后"
        ]
    },
    {
        "title": "法兰西特派周报",
        "url": "movie-1870.html",
        "cover": "./70.jpg",
        "year": "2021",
        "region": "美国/法国",
        "genre": "剧情,喜剧",
        "type": "电影",
        "tags": [
            "韦斯·安德森",
            "对称构图",
            "报刊",
            "短篇集",
            "复古"
        ]
    },
    {
        "title": "低一点的天空",
        "url": "movie-1871.html",
        "cover": "./71.jpg",
        "year": "2023",
        "region": "中国",
        "genre": "剧情,青春",
        "type": "电影",
        "tags": [
            "矮小症",
            "梦想",
            "友情",
            "励志"
        ]
    },
    {
        "title": "看我今天怎么说",
        "url": "movie-1872.html",
        "cover": "./72.jpg",
        "year": "2024",
        "region": "香港",
        "genre": "剧情/音乐",
        "type": "电影",
        "tags": [
            "聋哑群体",
            "手语",
            "追梦",
            "社会偏见",
            "无声歌舞"
        ]
    },
    {
        "title": "猛虎嗅蔷薇之盗亦有道",
        "url": "movie-1873.html",
        "cover": "./73.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑,动作,古装",
        "type": "剧集",
        "tags": [
            "女侠盗",
            "单元探案",
            "以盗制盗",
            "轻武侠"
        ]
    },
    {
        "title": "空难余波",
        "url": "movie-1874.html",
        "cover": "./74.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "灾难,剧情",
        "type": "电影",
        "tags": [
            "空难",
            "调查",
            "心理创伤"
        ]
    },
    {
        "title": "戈德堡一家第七季",
        "url": "movie-1875.html",
        "cover": "./75.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "喜剧,家庭,年代剧",
        "type": "电视剧集",
        "tags": [
            "80年代",
            "犹太家庭",
            "怀旧",
            "温情搞笑"
        ]
    },
    {
        "title": "玩物们",
        "url": "movie-1876.html",
        "cover": "./76.jpg",
        "year": "2024",
        "region": "中国台湾",
        "genre": "剧情,惊悚,悬疑",
        "type": "电影",
        "tags": [
            "密室",
            "心理操控",
            "阶级隐喻"
        ]
    },
    {
        "title": "越光宝盒",
        "url": "movie-1877.html",
        "cover": "./77.jpg",
        "year": "2010",
        "region": "中国香港",
        "genre": "喜剧,爱情,奇幻",
        "type": "电影",
        "tags": [
            "无厘头",
            "穿越",
            "致敬",
            "恶搞"
        ]
    },
    {
        "title": "猫头鹰之森",
        "url": "movie-1878.html",
        "cover": "./78.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "悬疑/奇幻",
        "type": "电影",
        "tags": [
            "森林",
            "失踪",
            "传说",
            "心理惊悚"
        ]
    },
    {
        "title": "爱情大师",
        "url": "movie-1879.html",
        "cover": "./79.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "情感导师",
            "错位人生",
            "爆笑",
            "都市",
            "打脸"
        ]
    },
    {
        "title": "一家大晒",
        "url": "movie-1880.html",
        "cover": "./80.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "喜剧/家庭",
        "type": "电影",
        "tags": [
            "春节贺岁",
            "三代同堂",
            "遗产纠纷"
        ]
    },
    {
        "title": "校园恰恰恰",
        "url": "movie-1881.html",
        "cover": "./81.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "青春/校园/歌舞",
        "type": "剧集",
        "tags": [
            "舞蹈社",
            "恰恰舞",
            "高考",
            "热血",
            "逆袭"
        ]
    },
    {
        "title": "占领自由邦",
        "url": "movie-1882.html",
        "cover": "./82.jpg",
        "year": "2024",
        "region": "爱尔兰",
        "genre": "历史,剧情,惊悚",
        "type": "剧集",
        "tags": [
            "爱尔兰内战",
            "间谍",
            "兄弟阋墙",
            "共和军"
        ]
    },
    {
        "title": "潜逃",
        "url": "movie-1883.html",
        "cover": "./83.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "犯罪/动作/悬疑",
        "type": "电影",
        "tags": [
            "追逃",
            "黑警",
            "反转",
            "东南亚",
            "暴力美学"
        ]
    },
    {
        "title": "逃离人间",
        "url": "movie-1884.html",
        "cover": "./84.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "悬疑/科幻",
        "type": "电影",
        "tags": [
            "元宇宙",
            "意识上传",
            "身份谜团",
            "社会批判"
        ]
    },
    {
        "title": "人质们",
        "url": "movie-1885.html",
        "cover": "./85.jpg",
        "year": "2017",
        "region": "俄罗斯",
        "genre": "剧情,惊悚",
        "type": "电影",
        "tags": [
            "真实事件",
            "高加索",
            "政治困境"
        ]
    },
    {
        "title": "桃李春风",
        "url": "movie-1886.html",
        "cover": "./86.jpg",
        "year": "1988",
        "region": "中国台湾",
        "genre": "剧情/家庭",
        "type": "电影",
        "tags": [
            "乡村教育",
            "师生情",
            "乡土文学",
            "侯孝贤风格"
        ]
    },
    {
        "title": "妈呀,你醒了",
        "url": "movie-1887.html",
        "cover": "./87.jpg",
        "year": "2024",
        "region": "中国",
        "genre": "喜剧,奇幻,家庭",
        "type": "电影",
        "tags": [
            "植物人",
            "灵魂互换",
            "代际沟通",
            "爆笑"
        ]
    },
    {
        "title": "春梦泪痕",
        "url": "movie-1888.html",
        "cover": "./88.jpg",
        "year": "1995",
        "region": "中国香港",
        "genre": "爱情/剧情",
        "type": "电影",
        "tags": [
            "怀旧",
            "错爱",
            "歌舞厅",
            "悲剧",
            "绝症"
        ]
    },
    {
        "title": "少年可期",
        "url": "movie-1889.html",
        "cover": "./89.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/家庭/音乐",
        "type": "剧集",
        "tags": [
            "留守儿童",
            "乡村教师",
            "合唱团"
        ]
    },
    {
        "title": "亲爱的爱丽丝",
        "url": "movie-1890.html",
        "cover": "./90.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "爱情,奇幻",
        "type": "电影",
        "tags": [
            "书信",
            "时空错位",
            "救赎",
            "文学"
        ]
    },
    {
        "title": "爱情有点蓝之爱的交响乐",
        "url": "movie-1891.html",
        "cover": "./91.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "爱情,都市",
        "type": "剧集",
        "tags": [
            "乐团",
            "指挥家",
            "小提琴手",
            "梦想与爱情",
            "破镜重圆"
        ]
    },
    {
        "title": "乒乓玩到家",
        "url": "movie-1892.html",
        "cover": "./92.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "喜剧,运动,家庭",
        "type": "电影",
        "tags": [
            "乒乓球",
            "亚裔家庭",
            "天才儿童",
            "锦标赛",
            "搞笑"
        ]
    },
    {
        "title": "俘虏国度",
        "url": "movie-1893.html",
        "cover": "./93.jpg",
        "year": "2019",
        "region": "美国",
        "genre": "科幻/惊悚/动作",
        "type": "电影",
        "tags": [
            "外星占领",
            "地下抵抗",
            "反乌托邦",
            "芝加哥",
            "游击战"
        ]
    },
    {
        "title": "华金",
        "url": "movie-1894.html",
        "cover": "./94.jpg",
        "year": "2024",
        "region": "西班牙",
        "genre": "惊悚,悬疑",
        "type": "电影",
        "tags": [
            "密室",
            "心理战",
            "反转"
        ]
    },
    {
        "title": "每个人都有秘密",
        "url": "movie-1895.html",
        "cover": "./95.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "悬疑、家庭、伦理",
        "type": "电视剧",
        "tags": [
            "谎言",
            "真相",
            "人性",
            "反转"
        ]
    },
    {
        "title": "魔卡少女樱",
        "url": "movie-1896.html",
        "cover": "./96.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "奇幻/魔法少女/冒险",
        "type": "动画/剧集",
        "tags": [
            "重启",
            "库洛牌",
            "少女成长",
            "跨时代情怀",
            "全龄向"
        ]
    },
    {
        "title": "爸妈麦来乱",
        "url": "movie-1897.html",
        "cover": "./97.jpg",
        "year": "2025",
        "region": "台湾",
        "genre": "家庭/喜剧",
        "type": "剧集",
        "tags": [
            "爸妈",
            "闹剧",
            "返乡",
            "温情"
        ]
    },
    {
        "title": "卫兵!警戒!",
        "url": "movie-1898.html",
        "cover": "./98.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "剧情/战争",
        "type": "电影",
        "tags": [
            "非军事区",
            "哨所",
            "兄弟情",
            "冷战"
        ]
    },
    {
        "title": "征服者威廉",
        "url": "movie-1899.html",
        "cover": "./99.jpg",
        "year": "2025",
        "region": "英国/法国",
        "genre": "历史/传记/动作",
        "type": "电视剧",
        "tags": [
            "诺曼征服",
            "中世纪",
            "私生子逆袭",
            "权谋",
            "史诗战争"
        ]
    },
    {
        "title": "情惑",
        "url": "movie-1900.html",
        "cover": "./100.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "剧情/爱情/悬疑",
        "type": "电影",
        "tags": [
            "情感纠葛",
            "心理博弈",
            "都市",
            "反转"
        ]
    },
    {
        "title": "高丽葬",
        "url": "movie-1901.html",
        "cover": "./101.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "历史,剧情,悬疑",
        "type": "电影",
        "tags": [
            "高丽",
            "活人殉葬",
            "宫廷",
            "阴谋",
            "考古"
        ]
    },
    {
        "title": "难以抗拒的温柔",
        "url": "movie-1902.html",
        "cover": "./102.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "中年爱情",
            "邂逅",
            "文学性",
            "慢节奏"
        ]
    },
    {
        "title": "通灵:一个新的开始",
        "url": "movie-1903.html",
        "cover": "./103.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "奇幻,悬疑,剧情",
        "type": "剧集",
        "tags": [
            "灵媒",
            "重生",
            "治愈",
            "单元剧"
        ]
    },
    {
        "title": "好汉林松",
        "url": "movie-1904.html",
        "cover": "./104.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "古装/动作/武侠",
        "type": "剧集",
        "tags": [
            "水浒前传",
            "落难英雄",
            "铁血丹心",
            "拳拳到肉",
            "逆袭"
        ]
    },
    {
        "title": "十里洋场争霸战",
        "url": "movie-1905.html",
        "cover": "./105.jpg",
        "year": "2019",
        "region": "中国大陆",
        "genre": "剧情/动作/年代",
        "type": "剧集",
        "tags": [
            "民国",
            "上海滩",
            "黑帮",
            "兄弟反目"
        ]
    },
    {
        "title": "杀人王曼森",
        "url": "movie-1906.html",
        "cover": "./106.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "犯罪,惊悚,传记",
        "type": "剧集",
        "tags": [
            "真实犯罪",
            "邪教",
            "心理操控",
            "60年代",
            "血腥"
        ]
    },
    {
        "title": "第六发现",
        "url": "movie-1907.html",
        "cover": "./107.jpg",
        "year": "2028",
        "region": "英国",
        "genre": "科幻,悬疑,心理",
        "type": "电影",
        "tags": [
            "记忆删除",
            "限时破案",
            "二重身"
        ]
    },
    {
        "title": "新愚公移山",
        "url": "movie-1908.html",
        "cover": "./108.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "奇幻,冒险,寓言",
        "type": "电影/动画",
        "tags": [
            "神话改编",
            "环保",
            "热血"
        ]
    },
    {
        "title": "我们的雨色协议",
        "url": "movie-1909.html",
        "cover": "./109.jpg",
        "year": "2023",
        "region": "日本",
        "genre": "科幻/爱情/悬疑",
        "type": "动画剧集",
        "tags": [
            "记忆植入",
            "雨城",
            "觉醒",
            "虚拟现实"
        ]
    },
    {
        "title": "家务优等生",
        "url": "movie-1910.html",
        "cover": "./110.jpg",
        "year": "2026",
        "region": "韩国",
        "genre": "剧情,黑色喜剧",
        "type": "剧集",
        "tags": [
            "家庭主夫",
            "性别反转",
            "阶级"
        ]
    },
    {
        "title": "芭比之神秘之门",
        "url": "movie-1911.html",
        "cover": "./111.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动画/奇幻",
        "type": "电影",
        "tags": [
            "公主",
            "冒险",
            "友谊",
            "魔法",
            "治愈"
        ]
    },
    {
        "title": "离幸福就差半步",
        "url": "movie-1912.html",
        "cover": "./112.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "家庭/生活",
        "type": "电视剧",
        "tags": [
            "东北",
            "下岗",
            "小成本",
            "邻里",
            "治愈"
        ]
    },
    {
        "title": "夺宝记",
        "url": "movie-1913.html",
        "cover": "./113.jpg",
        "year": "1999",
        "region": "美国",
        "genre": "喜剧,冒险,家庭",
        "type": "电影",
        "tags": [
            "藏宝图",
            "夏令营",
            "对抗",
            "搞笑",
            "恶作剧"
        ]
    },
    {
        "title": "圣诞星",
        "url": "movie-1914.html",
        "cover": "./114.jpg",
        "year": "2017",
        "region": "美国",
        "genre": "喜剧/冒险/宗教",
        "type": "动画电影",
        "tags": [
            "动物",
            "圣经故事",
            "公路片",
            "音乐"
        ]
    },
    {
        "title": "棒球男孩",
        "url": "movie-1915.html",
        "cover": "./115.jpg",
        "year": "2013",
        "region": "中国台湾",
        "genre": "体育励志",
        "type": "电影",
        "tags": [
            "少年",
            "梦想",
            "原住民",
            "逆境",
            "热血"
        ]
    },
    {
        "title": "第七码",
        "url": "movie-1916.html",
        "cover": "./116.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/悬疑/动作",
        "type": "电影",
        "tags": [
            "代码",
            "黑客",
            "虚拟现实",
            "阴谋论",
            "密室"
        ]
    },
    {
        "title": "保真度",
        "url": "movie-1917.html",
        "cover": "./117.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "悬疑、科技、伦理",
        "type": "剧集",
        "tags": [
            "AI伴侣",
            "身份认同",
            "记忆移植"
        ]
    },
    {
        "title": "动态漫画·我有百万技能点",
        "url": "movie-1918.html",
        "cover": "./118.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "玄幻,搞笑",
        "type": "动画",
        "tags": [
            "系统流",
            "扮猪吃老虎",
            "一键学习"
        ]
    },
    {
        "title": "公正裁决",
        "url": "movie-1919.html",
        "cover": "./119.jpg",
        "year": "2017",
        "region": "美国",
        "genre": "剧情,悬疑,法律",
        "type": "电影",
        "tags": [
            "陪审团",
            "密室",
            "种族",
            "偏见",
            "一镜到底"
        ]
    },
    {
        "title": "发狂死亡农场大屠杀",
        "url": "movie-1920.html",
        "cover": "./120.jpg",
        "year": "2010",
        "region": "美国",
        "genre": "恐怖血腥",
        "type": "电影",
        "tags": [
            "砍杀电影",
            "变态家族",
            "血浆片",
            "黑色幽默"
        ]
    },
    {
        "title": "人渣的本愿",
        "url": "movie-1921.html",
        "cover": "./121.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "爱情伦理",
        "type": "电视剧",
        "tags": [
            "扭曲恋爱",
            "伪装情侣",
            "心理",
            "成人",
            "日剧"
        ]
    },
    {
        "title": "名侦探俱乐部 第八季",
        "url": "movie-1922.html",
        "cover": "./122.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑、推理、真人秀",
        "type": "综艺/剧集互动",
        "tags": [
            "剧本杀",
            "实景",
            "高智商",
            "阵营对抗"
        ]
    },
    {
        "title": "古屋怪人",
        "url": "movie-1923.html",
        "cover": "./123.jpg",
        "year": "1963",
        "region": "英国",
        "genre": "恐怖/悬疑/经典",
        "type": "电影",
        "tags": [
            "哥特",
            "汉默电影",
            "古堡",
            "变装",
            "黑白转彩色"
        ]
    },
    {
        "title": "破墓",
        "url": "movie-1924.html",
        "cover": "./124.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "惊悚,悬疑,恐怖,风水",
        "type": "电影",
        "tags": [
            "风水",
            "民俗恐怖",
            "盗墓",
            "凶宅",
            "反转"
        ]
    },
    {
        "title": "语义错误电影版",
        "url": "movie-1925.html",
        "cover": "./125.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "爱情/同性",
        "type": "电影",
        "tags": [
            "校园恋爱",
            "程序猿",
            "设计系",
            "欢喜冤家"
        ]
    },
    {
        "title": "星际大战外传:侠盗一号",
        "url": "movie-1926.html",
        "cover": "./126.jpg",
        "year": "2016",
        "region": "美国",
        "genre": "科幻,动作,冒险",
        "type": "电影",
        "tags": [
            "星战宇宙",
            "敢死队",
            "牺牲"
        ]
    },
    {
        "title": "爷们信条",
        "url": "movie-1927.html",
        "cover": "./127.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "犯罪/动作/剧情",
        "type": "电影",
        "tags": [
            "东北",
            "下岗潮",
            "兄弟情",
            "复仇",
            "硬汉"
        ]
    },
    {
        "title": "唯独我不屈在唱",
        "url": "movie-1928.html",
        "cover": "./128.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "音乐剧情",
        "type": "电影",
        "tags": [
            "校园霸凌",
            "治愈",
            "合唱团",
            "逆袭"
        ]
    },
    {
        "title": "浪荡性世代",
        "url": "movie-1929.html",
        "cover": "./129.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "剧情/情色",
        "type": "电影",
        "tags": [
            "青春",
            "迷惘",
            "群体关系",
            "自我认同"
        ]
    },
    {
        "title": "男人的心思2",
        "url": "movie-1930.html",
        "cover": "./130.jpg",
        "year": "2025",
        "region": "法国",
        "genre": "喜剧/爱情",
        "type": "电影",
        "tags": [
            "中年危机",
            "友情",
            "出轨乌龙",
            "法式幽默",
            "第二春"
        ]
    },
    {
        "title": "复仇者集结第五季",
        "url": "movie-1931.html",
        "cover": "./131.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作/科幻/超级英雄",
        "type": "剧集",
        "tags": [
            "多元宇宙",
            "内战",
            "牺牲",
            "反派洗白"
        ]
    },
    {
        "title": "暗黑复苏",
        "url": "movie-1932.html",
        "cover": "./132.jpg",
        "year": "2026",
        "region": "德国",
        "genre": "悬疑,奇幻",
        "type": "剧集",
        "tags": [
            "瘟疫",
            "重生",
            "中世纪",
            "科学"
        ]
    },
    {
        "title": "拐杖糖巷",
        "url": "movie-1933.html",
        "cover": "./133.jpg",
        "year": "2023",
        "region": "美国",
        "genre": "恐怖/悬疑",
        "type": "电影",
        "tags": [
            "圣诞恐怖",
            "儿童视角",
            "小镇秘密",
            "糖果",
            "仪式感"
        ]
    },
    {
        "title": "色情里的风波",
        "url": "movie-1934.html",
        "cover": "./134.jpg",
        "year": "2006",
        "region": "日本",
        "genre": "剧情/情色",
        "type": "电影",
        "tags": [
            "成人录像",
            "行业揭秘",
            "女性主义",
            "昭和怀旧",
            "人性"
        ]
    },
    {
        "title": "战栗追杀",
        "url": "movie-1935.html",
        "cover": "./135.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/惊悚/悬疑",
        "type": "剧集",
        "tags": [
            "特工",
            "复仇",
            "谍战",
            "高智商对决",
            "暴力美学"
        ]
    },
    {
        "title": "机智的恋爱生活",
        "url": "movie-1936.html",
        "cover": "./136.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "爱情/喜剧",
        "type": "网络剧",
        "tags": [
            "契约恋爱",
            "办公室",
            "欢喜冤家",
            "甜宠",
            "搞笑"
        ]
    },
    {
        "title": "史酷比!格斗狂热迷",
        "url": "movie-1937.html",
        "cover": "./137.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧,悬疑,动作",
        "type": "动画电影",
        "tags": [
            "狗狗",
            "摔角",
            "解谜",
            "合家欢"
        ]
    },
    {
        "title": "拧紧",
        "url": "movie-1938.html",
        "cover": "./138.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "恐怖、悬疑、剧情",
        "type": "电影",
        "tags": [
            "心理恐怖",
            "哥特",
            "古宅",
            "谣言杀人"
        ]
    },
    {
        "title": "风流种子",
        "url": "movie-1939.html",
        "cover": "./139.jpg",
        "year": "1946",
        "region": "美国",
        "genre": "剧情,爱情",
        "type": "电影",
        "tags": [
            "黑色电影",
            "宿命",
            "女性"
        ]
    },
    {
        "title": "无敌镖客之兄弟情深",
        "url": "movie-1940.html",
        "cover": "./140.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "动作/喜剧",
        "type": "电影",
        "tags": [
            "公路",
            "兄弟",
            "冒险",
            "寻宝"
        ]
    },
    {
        "title": "约会规则第六季",
        "url": "movie-1941.html",
        "cover": "./141.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "喜剧/爱情/情景剧",
        "type": "剧集",
        "tags": [
            "算法红娘",
            "离婚复婚",
            "开放式关系",
            "代际约会"
        ]
    },
    {
        "title": "外伤",
        "url": "movie-1942.html",
        "cover": "./142.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "悬疑/惊悚/犯罪",
        "type": "电影",
        "tags": [
            "法医",
            "记忆篡改",
            "PTSD",
            "连环杀手",
            "精神分析"
        ]
    },
    {
        "title": "网美嬉游记",
        "url": "movie-1943.html",
        "cover": "./143.jpg",
        "year": "2028",
        "region": "美国",
        "genre": "喜剧/冒险",
        "type": "电影/纪录片风格",
        "tags": [
            "网红",
            "虚假人设",
            "荒野求生",
            "讽刺"
        ]
    },
    {
        "title": "选举风暴",
        "url": "movie-1944.html",
        "cover": "./144.jpg",
        "year": "2017",
        "region": "中国香港",
        "genre": "动作,犯罪,剧情",
        "type": "电影",
        "tags": [
            "黑帮选举",
            "社团内斗",
            "权力游戏"
        ]
    },
    {
        "title": "卡萨诺瓦",
        "url": "movie-1945.html",
        "cover": "./145.jpg",
        "year": "2025",
        "region": "意大利",
        "genre": "传记/历史",
        "type": "电影",
        "tags": [
            "传奇人物",
            "浪子回头",
            "18世纪",
            "威尼斯",
            "真爱情"
        ]
    },
    {
        "title": "英女皇",
        "url": "movie-1946.html",
        "cover": "./146.jpg",
        "year": "2025",
        "region": "英国",
        "genre": "剧情、历史、传记",
        "type": "剧集",
        "tags": [
            "宫廷",
            "虚构图景",
            "权力",
            "心理惊悚"
        ]
    },
    {
        "title": "天赐的声音第五季",
        "url": "movie-1947.html",
        "cover": "./147.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "音乐真人秀",
        "type": "综艺",
        "tags": [
            "合唱",
            "盲选",
            "乐评人",
            "神仙打架"
        ]
    },
    {
        "title": "嗜血校园",
        "url": "movie-1948.html",
        "cover": "./148.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "恐怖,喜剧",
        "type": "电影",
        "tags": [
            "吸血鬼",
            "校园",
            "讽刺"
        ]
    },
    {
        "title": "比海更深国语",
        "url": "movie-1949.html",
        "cover": "./149.jpg",
        "year": "2016",
        "region": "日本",
        "genre": "家庭剧情",
        "type": "电影",
        "tags": [
            "是枝裕和",
            "废柴人生",
            "亲情和解",
            "台风夜"
        ]
    },
    {
        "title": "离家500里",
        "url": "movie-1950.html",
        "cover": "./150.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "家庭/情感",
        "type": "剧情/公路",
        "tags": [
            "返乡",
            "农民工",
            "春运",
            "乡土中国"
        ]
    },
    {
        "title": "宾夕法尼亚斯德哥尔摩",
        "url": "movie-1951.html",
        "cover": "./1.jpg",
        "year": "2015",
        "region": "美国",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "邪教",
            "心理控制",
            "绑架",
            "家庭",
            "归属感"
        ]
    },
    {
        "title": "消失",
        "url": "movie-1952.html",
        "cover": "./2.jpg",
        "year": "2021",
        "region": "日本",
        "genre": "悬疑/犯罪/心理",
        "type": "电影",
        "tags": [
            "人间蒸发",
            "跟踪狂",
            "双线叙事",
            "反转真相"
        ]
    },
    {
        "title": "无路可走",
        "url": "movie-1953.html",
        "cover": "./3.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "犯罪/悬疑/动作",
        "type": "电影",
        "tags": [
            "追车",
            "复仇",
            "多线叙事",
            "暴风雪",
            "密室"
        ]
    },
    {
        "title": "玩火的女孩",
        "url": "movie-1954.html",
        "cover": "./4.jpg",
        "year": "2026",
        "region": "瑞典",
        "genre": "犯罪,悬疑,惊悚",
        "type": "电影",
        "tags": [
            "女黑客",
            "纵火",
            "复仇",
            "北欧",
            "noir"
        ]
    },
    {
        "title": "黑暗战域",
        "url": "movie-1955.html",
        "cover": "./5.jpg",
        "year": "2025",
        "region": "韩国",
        "genre": "科幻动作",
        "type": "剧集",
        "tags": [
            "末日",
            "机甲",
            "对抗",
            "人性"
        ]
    },
    {
        "title": "非美好情节",
        "url": "movie-1956.html",
        "cover": "./6.jpg",
        "year": "2025",
        "region": "中国台湾",
        "genre": "剧情,家庭",
        "type": "电影",
        "tags": [
            "写实主义",
            "亲情撕裂",
            "女性视角",
            "沉默"
        ]
    },
    {
        "title": "升空号",
        "url": "movie-1957.html",
        "cover": "./7.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "科幻/剧情",
        "type": "电影",
        "tags": [
            "太空移民",
            "家庭羁绊",
            "牺牲"
        ]
    },
    {
        "title": "恶魔玩具大对决",
        "url": "movie-1958.html",
        "cover": "./8.jpg",
        "year": "2026",
        "region": "日本",
        "genre": "恐怖,奇幻,动作",
        "type": "电影",
        "tags": [
            "玩具熊",
            "灵异",
            "大逃杀",
            "童年阴影"
        ]
    },
    {
        "title": "脱缰者也",
        "url": "movie-1959.html",
        "cover": "./9.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "犯罪,悬疑,西部",
        "type": "电影",
        "tags": [
            "公路",
            "绑架",
            "反转",
            "黑色幽默"
        ]
    },
    {
        "title": "当机立断",
        "url": "movie-1960.html",
        "cover": "./10.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "犯罪/悬疑",
        "type": "电影",
        "tags": [
            "烧脑",
            "多线叙事",
            "电梯",
            "金融骗局"
        ]
    },
    {
        "title": "卡萨布兰卡",
        "url": "movie-1961.html",
        "cover": "./11.jpg",
        "year": "2027",
        "region": "美国",
        "genre": "爱情,悬疑,科幻",
        "type": "电影",
        "tags": [
            "平行时空",
            "咖啡馆",
            "记忆",
            "浪漫",
            "高概念"
        ]
    },
    {
        "title": "体坛秘史:凯特琳·詹纳",
        "url": "movie-1962.html",
        "cover": "./12.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "传记/纪录片/运动",
        "type": "纪录片",
        "tags": [
            "奥运冠军",
            "跨性别者",
            "家族秘闻",
            "自我认同"
        ]
    },
    {
        "title": "横行天下",
        "url": "movie-1963.html",
        "cover": "./13.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "武侠/冒险",
        "type": "电影",
        "tags": [
            "女镖师",
            "丝路",
            "冷兵器"
        ]
    },
    {
        "title": "母性",
        "url": "movie-1964.html",
        "cover": "./14.jpg",
        "year": "2022",
        "region": "日本",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "母女",
            "反转",
            "罪案",
            "心理扭曲",
            "社会派"
        ]
    },
    {
        "title": "大魔法书",
        "url": "movie-1965.html",
        "cover": "./15.jpg",
        "year": "1975",
        "region": "西班牙/墨西哥",
        "genre": "奇幻/恐怖",
        "type": "电影",
        "tags": [
            "邪典魔法",
            "羊皮卷诅咒",
            "仪式误读",
            "七十年代迷幻",
            "拉丁美洲神秘主义"
        ]
    },
    {
        "title": "花有重开日",
        "url": "movie-1966.html",
        "cover": "./16.jpg",
        "year": "2024",
        "region": "中国内地",
        "genre": "剧情,年代,家庭",
        "type": "电视剧",
        "tags": [
            "返城知青",
            "时代变迁",
            "亲情救赎"
        ]
    },
    {
        "title": "狼少女",
        "url": "movie-1967.html",
        "cover": "./17.jpg",
        "year": "2018",
        "region": "法国",
        "genre": "剧情,冒险,奇幻",
        "type": "电影",
        "tags": [
            "狼孩",
            "自然主义",
            "女性成长",
            "荒野",
            "救赎"
        ]
    },
    {
        "title": "杰西卡·琼斯第三季",
        "url": "movie-1968.html",
        "cover": "./18.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "动作,剧情,犯罪",
        "type": "剧集",
        "tags": [
            "超级英雄",
            "私家侦探",
            "PTSD"
        ]
    },
    {
        "title": "金色曼陀罗",
        "url": "movie-1969.html",
        "cover": "./19.jpg",
        "year": "2018",
        "region": "印度",
        "genre": "悬疑/惊悚",
        "type": "电影",
        "tags": [
            "宗教符号",
            "连环杀人",
            "考古"
        ]
    },
    {
        "title": "玉熙的电影",
        "url": "movie-1970.html",
        "cover": "./20.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "剧情,悬疑",
        "type": "电影",
        "tags": [
            "元电影",
            "失踪",
            "录像带",
            "校园霸凌",
            "回忆"
        ]
    },
    {
        "title": "心理心里有个谜粤语",
        "url": "movie-1971.html",
        "cover": "./21.jpg",
        "year": "2023",
        "region": "中国香港",
        "genre": "悬疑,心理,犯罪",
        "type": "剧集",
        "tags": [
            "粤语原声",
            "催眠",
            "双重人格",
            "警匪",
            "高智商"
        ]
    },
    {
        "title": "附加物",
        "url": "movie-1972.html",
        "cover": "./22.jpg",
        "year": "2024",
        "region": "日本",
        "genre": "科幻/伦理",
        "type": "电影",
        "tags": [
            "记忆植入",
            "身份认同",
            "近未来",
            "悬疑"
        ]
    },
    {
        "title": "危城谜案",
        "url": "movie-1973.html",
        "cover": "./23.jpg",
        "year": "2024",
        "region": "中国大陆",
        "genre": "刑侦悬疑",
        "type": "剧集",
        "tags": [
            "连环杀人",
            "小城故事",
            "警察",
            "二十年追凶"
        ]
    },
    {
        "title": "敦河别恋",
        "url": "movie-1974.html",
        "cover": "./24.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "爱情/年代/战争",
        "type": "电视剧",
        "tags": [
            "民国",
            "河流",
            "家国",
            "匠人"
        ]
    },
    {
        "title": "伊萨卡",
        "url": "movie-1975.html",
        "cover": "./25.jpg",
        "year": "2024",
        "region": "希腊/美国",
        "genre": "科幻/冒险",
        "type": "电影",
        "tags": [
            "太空歌剧",
            "荷马史诗",
            "AI",
            "寻父"
        ]
    },
    {
        "title": "期限人生",
        "url": "movie-1976.html",
        "cover": "./26.jpg",
        "year": "2023",
        "region": "韩国",
        "genre": "奇幻/爱情/剧情",
        "type": "剧集",
        "tags": [
            "倒计时",
            "寿命",
            "便利店",
            "缘分"
        ]
    },
    {
        "title": "家乡战火缘何爆发",
        "url": "movie-1977.html",
        "cover": "./27.jpg",
        "year": "2024",
        "region": "虚构",
        "genre": "战争/伪纪录",
        "type": "纪录片",
        "tags": [
            "内战",
            "荒诞",
            "新闻",
            "讽刺"
        ]
    },
    {
        "title": "色欲和尚",
        "url": "movie-1978.html",
        "cover": "./28.jpg",
        "year": "2019",
        "region": "日本",
        "genre": "剧情,情色,奇幻",
        "type": "电影",
        "tags": [
            "禁忌",
            "修行",
            "心魔",
            "唯美摄影"
        ]
    },
    {
        "title": "在宇宙中最明亮的屋顶",
        "url": "movie-1979.html",
        "cover": "./29.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "奇幻/剧情",
        "type": "电影",
        "tags": [
            "天台",
            "奇幻老婆婆",
            "夏日",
            "治愈"
        ]
    },
    {
        "title": "富滇风云",
        "url": "movie-1980.html",
        "cover": "./30.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "历史/商战/年代",
        "type": "剧集",
        "tags": [
            "云南",
            "金融抗战",
            "滇系军阀"
        ]
    },
    {
        "title": "黑社会风云",
        "url": "movie-1981.html",
        "cover": "./31.jpg",
        "year": "2024",
        "region": "中国香港",
        "genre": "犯罪,剧情,动作",
        "type": "剧集",
        "tags": [
            "卧底",
            "权力斗争",
            "家族恩怨"
        ]
    },
    {
        "title": "星云结晶",
        "url": "movie-1982.html",
        "cover": "./32.jpg",
        "year": "2028",
        "region": "美国",
        "genre": "科幻/冒险",
        "type": "电影",
        "tags": [
            "太空歌剧",
            "晶体生命",
            "星际旅行",
            "异星生态"
        ]
    },
    {
        "title": "忧郁小女孩",
        "url": "movie-1983.html",
        "cover": "./33.jpg",
        "year": "2024",
        "region": "法国",
        "genre": "剧情/奇幻",
        "type": "电影",
        "tags": [
            "儿童",
            "心理",
            "治愈",
            "意象"
        ]
    },
    {
        "title": "爱玛姑娘",
        "url": "movie-1984.html",
        "cover": "./34.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "爱情,剧情",
        "type": "电影",
        "tags": [
            "风月场",
            "纯情",
            "黑帮",
            "救赎"
        ]
    },
    {
        "title": "幸运的我们",
        "url": "movie-1985.html",
        "cover": "./35.jpg",
        "year": "2024",
        "region": "韩国",
        "genre": "喜剧,奇幻,爱情",
        "type": "剧集",
        "tags": [
            "彩票",
            "穿越",
            "逆袭",
            "邻里",
            "群像"
        ]
    },
    {
        "title": "一乡之长",
        "url": "movie-1986.html",
        "cover": "./36.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "剧情,喜剧",
        "type": "剧集",
        "tags": [
            "基层政治",
            "乡村振兴",
            "黑色幽默",
            "乡土人情"
        ]
    },
    {
        "title": "凶场艳迹",
        "url": "movie-1987.html",
        "cover": "./37.jpg",
        "year": "2025",
        "region": "中国香港",
        "genre": "惊悚/情色",
        "type": "电影",
        "tags": [
            "奇案",
            "邪典",
            "女性复仇",
            "港风"
        ]
    },
    {
        "title": "营盘镇警事",
        "url": "movie-1988.html",
        "cover": "./38.jpg",
        "year": "2012",
        "region": "中国大陆",
        "genre": "剧情,刑侦",
        "type": "电视剧",
        "tags": [
            "基层民警",
            "真实改编",
            "家长里短"
        ]
    },
    {
        "title": "上帝的召唤",
        "url": "movie-1989.html",
        "cover": "./39.jpg",
        "year": "2024",
        "region": "美国/墨西哥",
        "genre": "惊悚/剧情",
        "type": "电影",
        "tags": [
            "宗教",
            "心理",
            "沙漠",
            "信仰危机"
        ]
    },
    {
        "title": "黑暗中的两个人",
        "url": "movie-1990.html",
        "cover": "./40.jpg",
        "year": "2026",
        "region": "波兰",
        "genre": "剧情/同性/惊悚",
        "type": "电影",
        "tags": [
            "盲人",
            "密室",
            "信任游戏",
            "极简场景",
            "声音叙事"
        ]
    },
    {
        "title": "我被沐总宠哭了",
        "url": "movie-1991.html",
        "cover": "./41.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "爱情,喜剧,剧情",
        "type": "剧集",
        "tags": [
            "霸总",
            "反套路",
            "职场",
            "合同恋爱"
        ]
    },
    {
        "title": "女武神驱动",
        "url": "movie-1992.html",
        "cover": "./42.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "动作/科幻/百合",
        "type": "剧集",
        "tags": [
            "美少女战斗",
            "精神力量",
            "机械改造",
            "高浓度友情"
        ]
    },
    {
        "title": "狂覗",
        "url": "movie-1993.html",
        "cover": "./43.jpg",
        "year": "2025",
        "region": "日本",
        "genre": "悬疑,犯罪,剧情",
        "type": "电影",
        "tags": [
            "偷窥",
            "网络犯罪",
            "反社会人格"
        ]
    },
    {
        "title": "示意停车",
        "url": "movie-1994.html",
        "cover": "./44.jpg",
        "year": "2025",
        "region": "中国大陆",
        "genre": "悬疑/犯罪",
        "type": "电影",
        "tags": [
            "公路",
            "测谎",
            "心理战",
            "密室"
        ]
    },
    {
        "title": "月光骑士第一季",
        "url": "movie-1995.html",
        "cover": "./45.jpg",
        "year": "2025",
        "region": "美国",
        "genre": "动作/奇幻/悬疑",
        "type": "剧集",
        "tags": [
            "超级英雄",
            "人格分裂",
            "埃及神话",
            "黑暗"
        ]
    },
    {
        "title": "力与美之路",
        "url": "movie-1996.html",
        "cover": "./46.jpg",
        "year": "2026",
        "region": "美国",
        "genre": "剧情,体育,女性",
        "type": "剧集",
        "tags": [
            "女子摔角",
            "80年代",
            "健身",
            "身体自信",
            "奋斗"
        ]
    },
    {
        "title": "光环:夜幕",
        "url": "movie-1997.html",
        "cover": "./47.jpg",
        "year": "2024",
        "region": "美国",
        "genre": "动作/科幻",
        "type": "剧集",
        "tags": [
            "黑化士官长",
            "星盟内乱",
            "道德困境"
        ]
    },
    {
        "title": "我爱你也爱他",
        "url": "movie-1998.html",
        "cover": "./48.jpg",
        "year": "2025",
        "region": "泰国",
        "genre": "爱情,同性,家庭",
        "type": "电视剧",
        "tags": [
            "三人行",
            "婚后发现性向",
            "泰国伦理剧"
        ]
    },
    {
        "title": "省亲日",
        "url": "movie-1999.html",
        "cover": "./49.jpg",
        "year": "2023",
        "region": "中国大陆",
        "genre": "剧情",
        "type": "电影",
        "tags": [
            "家庭",
            "女性",
            "民俗",
            "压迫",
            "农村"
        ]
    },
    {
        "title": "神农尺",
        "url": "movie-2000.html",
        "cover": "./50.jpg",
        "year": "2026",
        "region": "中国大陆",
        "genre": "奇幻/动作/冒险",
        "type": "电影",
        "tags": [
            "上古神器",
            "中医",
            "寻宝"
        ]
    }
];

    function initMenu() {
        const button = document.querySelector('[data-menu-toggle]');
        const panel = document.querySelector('[data-menu-panel]');
        if (!button || !panel) {
            return;
        }
        button.addEventListener('click', () => {
            panel.classList.toggle('open');
        });
    }

    function initHero() {
        const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));
        const dots = Array.from(document.querySelectorAll('[data-hero-dot]'));
        if (slides.length <= 1) {
            return;
        }
        let current = 0;
        let timer = null;
        const show = (index) => {
            current = index;
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle('active', slideIndex === current);
            });
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === current);
            });
        };
        const next = () => show((current + 1) % slides.length);
        const start = () => {
            timer = window.setInterval(next, 5200);
        };
        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stop();
                show(index);
                start();
            });
        });
        start();
    }

    function buildSearchCard(movie) {
        const meta = [movie.year, movie.region, movie.genre].filter(Boolean).join(' · ');
        return `
            <a class="search-result-card" href="${movie.url}">
                <img src="${movie.cover}" alt="${escapeHtml(movie.title)}" loading="lazy">
                <span>
                    <strong>${escapeHtml(movie.title)}</strong>
                    <span>${escapeHtml(meta)}</span>
                </span>
            </a>
        `;
    }

    function escapeHtml(value) {
        return String(value || '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }

    function initSearch() {
        const input = document.getElementById('siteSearch');
        const results = document.getElementById('searchResults');
        if (!input || !results) {
            return;
        }
        const render = () => {
            const keyword = input.value.trim().toLowerCase();
            if (!keyword) {
                results.innerHTML = '';
                return;
            }
            const matched = MOVIE_INDEX.filter((movie) => {
                const content = [movie.title, movie.year, movie.region, movie.genre, movie.type, movie.tags.join(' ')]
                    .join(' ')
                    .toLowerCase();
                return content.includes(keyword);
            }).slice(0, 24);
            results.innerHTML = matched.map(buildSearchCard).join('');
        };
        input.addEventListener('input', render);
    }

    function initPlayers() {
        const frames = Array.from(document.querySelectorAll('.player-frame'));
        frames.forEach((frame) => {
            const video = frame.querySelector('video[data-play]');
            const button = frame.querySelector('.play-layer');
            if (!video || !button) {
                return;
            }
            let hls = null;
            const attach = () => {
                if (video.dataset.ready === '1') {
                    return Promise.resolve();
                }
                const src = video.getAttribute('data-play');
                if (!src) {
                    return Promise.resolve();
                }
                video.dataset.ready = '1';
                if (window.Hls && window.Hls.isSupported()) {
                    return new Promise((resolve) => {
                        hls = new window.Hls({
                            enableWorker: true,
                            maxBufferLength: 30
                        });
                        hls.on(window.Hls.Events.MEDIA_ATTACHED, () => {
                            hls.loadSource(src);
                        });
                        hls.on(window.Hls.Events.MANIFEST_PARSED, () => resolve());
                        hls.on(window.Hls.Events.ERROR, () => resolve());
                        hls.attachMedia(video);
                        window.setTimeout(resolve, 1200);
                    });
                }
                video.src = src;
                return Promise.resolve();
            };
            const play = () => {
                attach().then(() => {
                    frame.classList.add('playing');
                    const promise = video.play();
                    if (promise && typeof promise.catch === 'function') {
                        promise.catch(() => {
                            frame.classList.remove('playing');
                        });
                    }
                });
            };
            button.addEventListener('click', play);
            video.addEventListener('click', () => {
                if (video.paused) {
                    play();
                }
            });
            video.addEventListener('play', () => frame.classList.add('playing'));
            video.addEventListener('pause', () => {
                if (!video.ended) {
                    frame.classList.add('playing');
                }
            });
            window.addEventListener('pagehide', () => {
                if (hls) {
                    hls.destroy();
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initMenu();
        initHero();
        initSearch();
        initPlayers();
    });
})();
