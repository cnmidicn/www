const siteData = {
    // ============================================
    // 用户等级标签
    // ============================================
    userLevels: [
        { id: "beginner", name: "入门", color: "#22c55e", desc: "适合初学者和业余爱好者" },
        { id: "intermediate", name: "进阶", color: "#3b82f6", desc: "适合有一定经验的用户" },
        { id: "advanced", name: "专业", color: "#a855f7", desc: "适合专业音乐人和制作人" },
        { id: "free", name: "免费", color: "#10b981", desc: "完全免费使用" },
        { id: "worth", name: "必装", color: "#f59e0b", desc: "业界公认必备工具" }
    ],

    // ============================================
    // 推荐工具（首页展示）- 用于随机推荐
    // ============================================
    featured: [
        // 制作软件类
        { name: "Ableton Live", url: "https://www.ableton.com/live", category: "🎛️ DAW与制作", reason: "电子音乐制作首选，现场演出强大", level: "worth" },
        { name: "FL Studio", url: "https://www.image-line.com/fl-studio/", category: "🎛️ DAW与制作", reason: "Hip-hop/EDM制作神器", level: "worth" },
        { name: "Logic Pro", url: "https://www.apple.com/logic-pro/", category: "🎛️ DAW与制作", reason: "Mac平台全能DAW", level: "worth" },
        { name: "Pro Tools", url: "https://www.avid.com/pro-tools", category: "🎛️ DAW与制作", reason: "录音棚行业标准", level: "worth" },
        { name: "Studio One", url: "https://www.presonus.com/studioone", category: "🎛️ DAW与制作", reason: "现代一体化工作流", level: "worth" },
        { name: "Cubase", url: "https://www.steinberg.net/cubase/", category: "🎛️ DAW与制作", reason: "MIDI编曲首选", level: "worth" },
        { name: "Reaper", url: "https://www.reaper.fm", category: "🎛️ DAW与制作", reason: "轻量强大的DAW", level: "free" },
        { name: "GarageBand", url: "https://www.apple.com/mac/garageband/", category: "🚀 新手入门", reason: "最易上手的免费DAW", level: "free" },
        
        // AI工具类
        { name: "Suno AI", url: "https://www.suno.ai", category: "🤖 AI音乐工具", reason: "最热门的AI音乐生成工具", level: "beginner" },
        { name: "Udio", url: "https://www.udio.com", category: "🤖 AI音乐工具", reason: "高质量AI音乐创作", level: "beginner" },
        { name: "AIVA", url: "https://www.aiva.ai", category: "🤖 AI音乐工具", reason: "AI作曲助手，支持MIDI导出", level: "beginner" },
        { name: "Ultimate Vocal Remover", url: "https://github.com/Anjok07/ultimatevocalremovergui", category: "🤖 AI音乐工具", reason: "最佳人声分离工具", level: "free" },
        { name: "LANDR", url: "https://www.landr.com", category: "🤖 AI音乐工具", reason: "AI母带开创者", level: "beginner" },
        
        // 音源音色类
        { name: "Spitfire LABS", url: "https://labs.spitfireaudio.com", category: "🎹 虚拟乐器与音色", reason: "免费高品质管弦乐音源", level: "free" },
        { name: "Vital", url: "https://vital.audio", category: "🎹 虚拟乐器与音色", reason: "免费波表合成器，Serum平替", level: "free" },
        { name: "Xfer Serum", url: "https://xferrecords.com/products/serum", category: "🎹 虚拟乐器与音色", reason: "波表合成器标准", level: "worth" },
        { name: "Omnisphere", url: "https://www.spectrasonics.net", category: "🎹 虚拟乐器与音色", reason: "旗舰合成器，音色丰富", level: "worth" },
        { name: "Kontakt", url: "https://www.native-instruments.com/products/komplete/samplers/kontakt-7/", category: "🎹 虚拟乐器与音色", reason: "行业标准采样器", level: "worth" },
        { name: "BBC Symphony Orchestra", url: "https://www.spitfireaudio.com/bbc-symphony-orchestra", category: "🎹 虚拟乐器与音色", reason: "免费BBC管弦乐", level: "free" },
        { name: "Komplete Start", url: "https://www.native-instruments.com/products/komplete/bundles/komplete-start/", category: "🎹 虚拟乐器与音色", reason: "NI免费乐器包", level: "free" },
        
        // 混音母带类
        { name: "FabFilter Pro-Q", url: "https://www.fabfilter.com", category: "🎚️ 混音与母带", reason: "业界标准均衡器", level: "worth" },
        { name: "FabFilter Total Bundle", url: "https://www.fabfilter.com", category: "🎚️ 混音与母带", reason: "全套混音插件", level: "worth" },
        { name: "Waves Complete", url: "https://www.waves.com", category: "🎚️ 混音与母带", reason: "经典插件全套", level: "worth" },
        { name: "iZotope Ozone", url: "https://www.izotope.com/en/products/ozone.html", category: "🎚️ 混音与母带", reason: "AI母带套件", level: "worth" },
        { name: "Valhalla Supermassive", url: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/", category: "🎚️ 混音与母带", reason: "免费高质量混响延迟", level: "free" },
        { name: "TDR Nova", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", category: "🎚️ 混音与母带", reason: "免费动态均衡", level: "free" },
        { name: "Voxengo SPAN", url: "https://www.voxengo.com/product/span/", category: "🎚️ 混音与母带", reason: "免费频谱分析器", level: "free" },
        
        // 学习资源类
        { name: "Ableton Learning Music", url: "https://learningmusic.ableton.com", category: "📚 学习与资源", reason: "互动音乐基础课程", level: "free" },
        { name: "Music Theory.net", url: "https://www.musictheory.net", category: "📚 学习与资源", reason: "免费音乐理论学习", level: "free" },
        { name: "Splice Sounds", url: "https://splice.com/sounds", category: "📚 学习与资源", reason: "最大在线采样库", level: "worth" },
        { name: "Coursera 音乐制作", url: "https://www.coursera.org/browse/arts-and-humanities/music-and-art", category: "📚 学习与资源", reason: "伯克利等名校课程", level: "beginner" },
        
        // 实用工具类
        { name: "Audacity", url: "https://www.audacityteam.org", category: "🔧 工具与实用", reason: "免费开源音频编辑", level: "free" },
        { name: "MuseScore", url: "https://musescore.org", category: "🔧 工具与实用", reason: "免费开源打谱软件", level: "free" },
        { name: "FFmpeg", url: "https://ffmpeg.org", category: "🔧 工具与实用", reason: "命令行多媒体处理", level: "free" },
        
        // 现场演出类
        { name: "Serato DJ", url: "https://serato.com/dj", category: "🎤 现场与演出", reason: "专业DJ软件", level: "worth" },
        { name: "MainStage", url: "https://www.apple.com/mainstage/", category: "🎤 现场与演出", reason: "Apple现场演出软件", level: "worth" },
        
        // 新增推荐
        { name: "Synthesizer V", url: "https://dreamtonics.com/synthesizerv", category: "🤖 AI音乐工具", reason: "专业AI歌声合成软件", level: "worth" },
        { name: "Keyscape", url: "https://www.spectrasonics.net/products/keyscape/", category: "🎹 虚拟乐器与音色", reason: "键盘乐器收藏旗舰", level: "worth" },
        { name: "Addictive Drums", url: "https://www.xlnaudio.com/products/addictive_drums", category: "🎹 虚拟乐器与音色", reason: "流行鼓音源标准", level: "worth" },
        { name: "XLN Audio", url: "https://www.xlnaudio.com", category: "🎹 虚拟乐器与音色", reason: "现代节奏音源套件", level: "worth" },
        { name: "Valhalla VintageVerb", url: "https://valhalladsp.com/shop/reverb/valhalla-vintage-verb/", category: "🎚️ 混音与母带", reason: "经典混响算法合集", level: "worth" },
        { name: "Soundtoys", url: "https://www.soundtoys.com", category: "🎚️ 混音与母带", reason: "创意效果器套装", level: "worth" },
        { name: "Yousician", url: "https://yousician.com", category: "📚 学习与资源", reason: "游戏化乐器学习", level: "beginner" },
        { name: "Splice", url: "https://splice.com", category: "📚 学习与资源", reason: "最大采样库和协作平台", level: "worth" },
        { name: "Bilibili音乐区", url: "https://search.bilibili.com/all?keyword=音乐制作", category: "📚 学习与资源", reason: "中文音乐教程视频", level: "free" },
        { name: "Max/MSP", url: "https://cycling74.com/products/max", category: "🎛️ DAW与制作", reason: "可视化编程音乐环境", level: "advanced" },
        { name: "Reaktor", url: "https://www.native-instruments.com/products/komplete/synths/reaktor-6/", category: "🎛️ DAW与制作", reason: "模块化乐器开发平台", level: "advanced" },
        { name: "Ardour", url: "https://ardour.org", category: "🎛️ DAW与制作", reason: "开源专业DAW", level: "free" },
        { name: "Traktor Pro", url: "https://www.native-instruments.com/en/products/traktor/", category: "🎤 现场与演出", reason: "NI专业DJ软件", level: "worth" }
    ],

    // ============================================
    // 工作流程定义
    // ============================================
    workflows: [
        {
            id: "beginner",
            name: "新手入门路线",
            icon: "🌱",
            desc: "从零开始学习音乐制作",
            steps: [
                { name: "选择DAW", desc: "推荐免费或入门级软件", tools: ["GarageBand", "Cakewalk", "BandLab"], categories: ["入门软件"] },
                { name: "学习基础", desc: "掌握基本操作和音乐理论", tools: ["Ableton Learning Music", "Music Theory.net"], categories: ["学习教程"] },
                { name: "获取音色", desc: "下载免费音源和采样", tools: ["Spitfire LABS", "Komplete Start"], categories: ["免费音色"] },
                { name: "开始创作", desc: "尝试简单的编曲和制作", tools: ["Chrome Music Lab", "Band-in-a-Box"], categories: ["创作辅助"] }
            ]
        },
        {
            id: "electronic",
            name: "电子音乐制作",
            icon: "🎹",
            desc: "EDM、Hip-hop、电子风格",
            steps: [
                { name: "搭建DAW", desc: "选择适合电子音乐的宿主", tools: ["Ableton Live", "FL Studio", "Bitwig"], categories: ["专业DAW"] },
                { name: "合成器设计", desc: "学习音色设计和合成", tools: ["Serum", "Vital", "Massive"], categories: ["合成器"] },
                { name: "节奏制作", desc: "鼓组编程和Loop处理", tools: ["Addictive Drums", "Splice"], categories: ["鼓与打击乐", "采样循环"] },
                { name: "混音母带", desc: "让作品达到发行标准", tools: ["FabFilter", "Ozone", "LANDR"], categories: ["效果器", "母带处理"] }
            ]
        },
        {
            id: "recording",
            name: "录音棚制作",
            icon: "🎙️",
            desc: "原声乐器录音和混音",
            steps: [
                { name: "录音设置", desc: "配置声卡和监听系统", tools: ["Focusrite", "RME", "Sonarworks"], categories: ["音频接口", "监听校准"] },
                { name: "录制音轨", desc: "多轨录音和编辑", tools: ["Pro Tools", "Logic Pro", "Studio One"], categories: ["专业DAW"] },
                { name: "音源补充", desc: "虚拟乐器增强编曲", tools: ["Kontakt", "Spitfire", "EastWest"], categories: ["管弦乐", "综合音源"] },
                { name: "后期混音", desc: "平衡处理和空间效果", tools: ["Waves", "Valhalla", "UAD"], categories: ["混音插件", "混响延迟"] }
            ]
        },
        {
            id: "film",
            name: "影视配乐制作",
            icon: "🎬",
            desc: "电影、游戏、广告音乐",
            steps: [
                { name: "画面同步", desc: "导入视频和时间码", tools: ["Cubase", "Nuendo", "Logic"], categories: ["专业DAW"] },
                { name: "管弦乐编配", desc: "使用高质量管弦乐音源", tools: ["BBC SO", "Spitfire", "VSL"], categories: ["管弦乐"] },
                { name: "音效设计", desc: "氛围和特效音色", tools: ["Kontakt", "Omnisphere", "合成器"], categories: ["综合音源", "合成器"] },
                { name: "交付整合", desc: "Stems导出和中间件", tools: ["Wwise", "FMOD", "Stem Maker"], categories: ["游戏音频"] }
            ]
        },
        {
            id: "live",
            name: "现场演出",
            icon: "🎤",
            desc: "舞台演出和DJ表演",
            steps: [
                { name: "演出编排", desc: "配置现场演出工程", tools: ["Ableton Live", "MainStage", " Gig Performer"], categories: ["现场DAW"] },
                { name: "控制器设置", desc: "MIDI映射和程序切换", tools: ["MIDI控制器", "脚踏开关"], categories: ["MIDI控制器"] },
                { name: "备份方案", desc: "冗余系统和故障保护", tools: ["备份DAW", "独立播放器"], categories: ["现场设备"] },
                { name: "声场调试", desc: "现场音响和监听", tools: ["调音台", "入耳监听"], categories: ["现场音响"] }
            ]
        },
        {
            id: "ai",
            name: "AI辅助创作",
            icon: "🤖",
            desc: "利用AI加速工作流程",
            steps: [
                { name: "灵感生成", desc: "AI生成初始想法", tools: ["Suno", "Udio", "AIVA"], categories: ["AI生成"] },
                { name: "MIDI导出", desc: "转换为可编辑格式", tools: ["DAW导入", "MIDI编辑"], categories: ["MIDI编辑"] },
                { name: "音色替换", desc: "用专业音源替换AI音色", tools: ["Kontakt", "VST乐器"], categories: ["虚拟乐器"] },
                { name: "后期处理", desc: "AI混音和母带", tools: ["LANDR", "iZotope", "Gullfoss"], categories: ["AI处理", "母带"] }
            ]
        }
    ],

    // ============================================
    // 主分类数据
    // ============================================
    categories: [
        {
            name: "🚀 新手入门 | Getting Started",
            icon: "🚀",
            desc: "零基础入门指南、免费工具、基础教程",
            level: "beginner",
            subcategories: [
                {
                    name: "免费入门DAW",
                    desc: "适合初学者的免费数字音频工作站",
                    sites: [
                        { name: "GarageBand", url: "https://www.apple.com/mac/garageband/", desc: "Mac/iOS自带，最易上手的免费DAW", tags: ["免费", "Mac", "iOS", "入门推荐", "Apple"] },
                        { name: "Cakewalk by BandLab", url: "https://www.bandlab.com/products/cakewalk", desc: "Windows平台免费专业DAW", tags: ["免费", "Windows", "专业功能", "原SONAR"] },
                        { name: "BandLab", url: "https://www.bandlab.com", desc: "在线免费制作和协作平台", tags: ["免费", "在线", "协作", "跨平台"] },
                        { name: "Soundtrap", url: "https://www.soundtrap.com", desc: "Spotify旗下在线DAW，适合教育", tags: ["免费版", "在线", "教育", "协作"] },
                        { name: "LMMS", url: "https://lmms.io", desc: "开源免费跨平台DAW，类似FL Studio", tags: ["免费", "开源", "跨平台", "Linux"] },
                        { name: "Tracktion Waveform Free", url: "https://www.tracktion.com/products/waveform", desc: "功能完整的免费DAW", tags: ["免费", "无限轨道", "专业功能"] },
                        { name: "Ardour", url: "https://ardour.org", desc: "开源专业DAW，支持Linux/Mac/Win", tags: ["免费", "开源", "专业", "跨平台"] },
                        { name: "Ohm Studio", url: "https://www.ohmstudio.com", desc: "在线协作DAW", tags: ["免费版", "在线", "协作", "实时"] }
                    ]
                },
                {
                    name: "基础学习资源",
                    desc: "音乐理论和制作基础教程",
                    sites: [
                        { name: "Ableton Learning Music", url: "https://learningmusic.ableton.com", desc: "浏览器互动音乐制作基础课程", tags: ["免费", "互动", "入门", "Ableton"] },
                        { name: "Music Theory.net", url: "https://www.musictheory.net", desc: "互动音乐理论学习，和弦、音阶", tags: ["免费", "乐理", "互动", "教程"] },
                        { name: "Teoria", url: "https://www.teoria.com", desc: "音乐理论教程和练习", tags: ["免费", "乐理", "练习", "教育"] },
                        { name: "Lightnote", url: "https://www.lightnote.co", desc: "可视化音乐理论", tags: ["免费", "可视化", "乐理", "现代"] },
                        { name: "Open Music Theory", url: "https://openmusictheory.com", desc: "开放音乐理论教材", tags: ["免费", "开源", "教材", "学术"] },
                        { name: "Hooktheory", url: "https://www.hooktheory.com", desc: "流行音乐和弦进行分析", tags: ["免费版", "和弦", "流行", "分析"] },
                        { name: "Tone.js Examples", url: "https://tonejs.github.io/examples/", desc: "互动音频编程示例，学习合成器原理", tags: ["免费", "开源", "编程", "合成器"] },
                        { name: "Chrome Music Lab", url: "https://musiclab.chromeexperiments.com", desc: "Google音乐实验项目，可视化学习", tags: ["免费", "互动", "可视化", "Google"] }
                    ]
                },
                {
                    name: "免费 starter 音色包",
                    desc: "初学者免费音源和采样",
                    sites: [
                        { name: "Spitfire LABS", url: "https://labs.spitfireaudio.com", desc: "高品质免费乐器系列，必装", tags: ["免费", "高品质", "管弦乐", "钢琴", "弦乐"] },
                        { name: "Komplete Start", url: "https://www.native-instruments.com/products/komplete/bundles/komplete-start/", desc: "NI免费乐器包，2000+音色", tags: ["免费", "综合", "合成器", "采样"] },
                        { name: "BBC Symphony Orchestra Discover", url: "https://www.spitfireaudio.com/bbc-symphony-orchestra", desc: "免费BBC管弦乐音源", tags: ["免费", "管弦乐", "专业", "Spitfire"] },
                        { name: "Vital", url: "https://vital.audio", desc: "免费波表合成器，Serum替代品", tags: ["免费", "合成器", "波表", "现代"] },
                        { name: "Dexed", url: "https://asb2m10.github.io/dexed/", desc: "免费DX7 FM合成器", tags: ["免费", "开源", "FM合成", "经典"] },
                        { name: "Surge XT", url: "https://surge-synthesizer.github.io", desc: "开源混合合成器", tags: ["免费", "开源", "合成器", "多功能"] },
                        { name: "Piano One", url: "https://www.soundmagic.cn/piano-one", desc: "免费钢琴音源", tags: ["免费", "钢琴", "中国", "采样"] },
                        { name: "Keyzone Classic", url: "https://bitsonic.eu/audio-plugins/keyzone-classic.html", desc: "免费钢琴和键盘音源", tags: ["免费", "钢琴", "键盘", "简单"] },
                        { name: "Mattress Factory", url: "https://bedroomproducersblog.com/mattress-factory/", desc: "免费鼓采样包", tags: ["免费", "采样", "鼓", "Bedroom"] }
                    ]
                },
                {
                    name: "入门教程频道",
                    desc: "推荐YouTube和在线教程",
                    sites: [
                        { name: "YouTube - In The Mix", url: "https://www.youtube.com/@InTheMix", desc: "FL Studio和制作技巧", tags: ["免费", "YouTube", "教程", "FL"] },
                        { name: "YouTube - Andrew Huang", url: "https://www.youtube.com/@AndrewHuang", desc: "创意音乐制作和教程", tags: ["免费", "YouTube", "创意", "多元"] },
                        { name: "YouTube - Production Music Live", url: "https://www.youtube.com/@ProductionMusicLive", desc: "电子音乐制作教程", tags: ["免费", "YouTube", "电子", "Ableton"] },
                        { name: "YouTube - Rick Beato", url: "https://www.youtube.com/@RickBeato", desc: "音乐理论和制作深度解析", tags: ["免费", "YouTube", "理论", "深度"] },
                        { name: "YouTube - Busy Works Beats", url: "https://www.youtube.com/@BusyWorksBeats", desc: "Hip-hop和trap制作教程", tags: ["免费", "YouTube", "教程", "Hip-hop", "Beat"] },
                        { name: "YouTube - ADSR Music Production", url: "https://www.youtube.com/@ADSRMusicProduction", desc: "插件评测和教程", tags: ["免费", "YouTube", "教程", "插件", "评测"] },
                        { name: "YouTube - Hyperbits", url: "https://www.youtube.com/@Hyperbits", desc: "EDM制作和混音教程", tags: ["免费", "YouTube", "教程", "EDM", "混音"] },
                        { name: "Coursera 音乐制作", url: "https://www.coursera.org/browse/arts-and-humanities/music-and-art", desc: "伯克利等名校音乐课程", tags: ["部分免费", "学术", "证书", "系统"] },
                        { name: "Skillshare 音乐课", url: "https://www.skillshare.com/search?query=music+production", desc: "实用音乐制作课程", tags: ["付费", "实用", "项目导向"] },
                        { name: "Point Blank Music School", url: "https://pointblankmusicschool.com", desc: "伦敦电子音乐学院在线课程", tags: ["付费", "电子", "英国", "认证"] },
                        { name: "Udemy 音乐制作", url: "https://www.udemy.com/topic/music-production/", desc: "各类音乐制作课程", tags: ["付费", "课程", "多样", "实用"] },
                        { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/topics/audio-and-music", desc: "专业音频音乐课程", tags: ["付费", "订阅", "专业", "商业"] },
                        { name: "MasterClass 音乐", url: "https://www.masterclass.com/search?query=music", desc: "大师音乐课程", tags: ["付费", "大师", "名人", "精品"] },
                        { name: "CreativeLive 音乐", url: "https://www.creativelive.com/audio-music", desc: "创意音乐课程", tags: ["付费", "创意", "直播", "工作坊"] },
                        { name: "Berklee Online", url: "https://online.berklee.edu", desc: "伯克利音乐学院在线课程", tags: ["付费", "学术", "美国", "名校"] }
                    ]
                },
                {
                    name: "中文教程资源",
                    desc: "中文音乐制作教程和课程",
                    sites: [
                        { name: "Bilibili音乐制作区", url: "https://search.bilibili.com/all?keyword=音乐制作", desc: "B站音乐制作教程合集", tags: ["免费", "中文", "视频", "教程"] },
                        { name: "音频圈", url: "https://www.oscaudio.com", desc: "中文音频技术社区", tags: ["免费", "中文", "社区", "教程"] },
                        { name: "Midifan", url: "https://www.midifan.com", desc: "中文MIDI音乐门户网站", tags: ["免费", "中文", "资讯", "教程"] },
                        { name: "音律屋", url: "https://www.inlvwu.com", desc: "中文乐理和编曲教程", tags: ["免费", "中文", "乐理", "编曲"] },
                        { name: "爱编曲网", url: "https://www.iaibianqu.com", desc: "中文编曲教程和素材", tags: ["免费", "中文", "编曲", "教程"] },
                        { name: "幕后圈", url: "https://www.muhou.net", desc: "中文音乐制作人社群", tags: ["免费", "中文", "社区", "职业"] },
                        { name: "音乐人网", url: "https://www.musicians.com.cn", desc: "中文音乐制作课程", tags: ["付费", "中文", "课程", "系统"] },
                        { name: "牛班", url: "https://www.newband.com", desc: "胡彦斌创办的音乐教育平台", tags: ["付费", "中文", "课程", "流行"] }
                    ]
                },
                {
                    name: "互动学习工具",
                    desc: "游戏化音乐学习平台",
                    sites: [
                        { name: "Yousician", url: "https://yousician.com", desc: "游戏化乐器学习APP", tags: ["免费版", "iOS", "Android", "乐器", "游戏"] },
                        { name: "Simply Piano", url: "https://www.joytunes.com/simply-piano", desc: "AI钢琴学习应用", tags: ["付费", "iOS", "Android", "钢琴", "AI"] },
                        { name: "Melodics", url: "https://melodics.com", desc: "打击垫和键盘练习软件", tags: ["免费版", "Windows", "Mac", "练习", "打击垫"] },
                        { name: "Synthesia", url: "https://synthesiagame.com", desc: "钢琴瀑布流学习软件", tags: ["免费版", "Windows", "Mac", "钢琴", "游戏"] },
                        { name: "Flowkey", url: "https://www.flowkey.com", desc: "在线钢琴学习平台", tags: ["免费版", "在线", "钢琴", "互动"] },
                        { name: "Skoove", url: "https://www.skoove.com", desc: "AI钢琴课程", tags: ["付费", "在线", "钢琴", "AI"] },
                        { name: "EarMaster", url: "https://www.earmaster.com", desc: "视唱练耳训练软件", tags: ["付费", "Windows", "Mac", "练耳", "乐理"] },
                        { name: "Tenuto", url: "https://www.musictheory.net", desc: "音乐理论练习APP", tags: ["付费", "iOS", "乐理", "练习"] },
                        { name: "Perfect Ear", url: "https://www.perfectear.app", desc: "综合音乐理论训练", tags: ["免费版", "iOS", "Android", "练耳", "乐理"] },
                        { name: "Functional Ear Trainer", url: "https://www.miles.be", desc: "功能性耳朵训练", tags: ["免费", "iOS", "Android", "练耳", "专业"] },
                        { name: "Complete Music Reading Trainer", url: "https://play.google.com/store/apps/details?id=com.binaryguilt.completemusicreadingtrainer", desc: "五线谱阅读训练", tags: ["付费", "Android", "iOS", "识谱", "练习"] },
                        { name: "Rhythm Trainer", url: "https://www.rhythmtrainer.com", desc: "在线节奏训练", tags: ["免费", "在线", "节奏", "练习"] },
                        { name: "Piano Marvel", url: "https://pianomarvel.com", desc: "钢琴学习平台", tags: ["付费", "在线", "钢琴", "教育", "评估"] },
                        { name: "Playground Sessions", url: "https://www.playgroundsessions.com", desc: "游戏化钢琴学习", tags: ["付费", "Windows", "Mac", "钢琴", "互动"] }
                    ]
                },
                {
                    name: "音乐制作书籍资源",
                    desc: "电子书和PDF学习资料",
                    sites: [
                        { name: "Ask.Audio Books", url: "https://ask.audio/articles/category/books", desc: "音乐制作书籍推荐", tags: ["免费", "书籍", "推荐", "资源"] },
                        { name: "The Pro Audio Files", url: "https://theproaudiofiles.com", desc: "专业混音教程文章", tags: ["免费", "文章", "混音", "专业"] },
                        { name: "SOS Magazine", url: "https://www.soundonsound.com", desc: "Sound on Sound杂志", tags: ["部分免费", "杂志", "专业", "评测", "资讯"] },
                        { name: "Recording Revolution", url: "https://recordingrevolution.com", desc: "家庭录音教程", tags: ["免费", "博客", "录音", "家庭工作室"] },
                        { name: "Hyperbits Blog", url: "https://www.hyperbits.com/blog", desc: "EDM制作博客", tags: ["免费", "博客", "EDM", "教程"] },
                        { name: "Pensado's Place", url: "https://pensadosplace.tv", desc: "格莱美获奖混音师视频节目", tags: ["免费", "视频", "混音", "大师", "访谈"] },
                        { name: "SonicScoop", url: "https://www.sonicscoop.com", desc: "专业录音室新闻教程", tags: ["免费", "新闻", "教程", "专业", "纽约"] }
                    ]
                }
            ]
        },
        {
            name: "🎛️ DAW与制作 | DAW & Production",
            icon: "🎛️",
            desc: "数字音频工作站、录音编辑、多轨制作",
            level: "intermediate",
            subcategories: [
                {
                    name: "电子音乐首选",
                    desc: "适合EDM、Hip-hop、电子风格的DAW",
                    sites: [
                        { name: "Ableton Live", url: "https://www.ableton.com/live", desc: "电子音乐行业标准，现场演出强大", tags: ["专业", "电子音乐", "现场", "行业标准", "推荐"] },
                        { name: "FL Studio", url: "https://www.image-line.com/fl-studio/", desc: "流行于Hip-hop/EDM，Pattern工作流程", tags: ["专业", "Hip-hop", "EDM", "终身更新"] },
                        { name: "Bitwig Studio", url: "https://www.bitwig.com", desc: "现代模块化DAW，创新工作流", tags: ["专业", "模块化", "创新", "跨平台"] },
                        { name: "Reason", url: "https://www.reasonstudios.com", desc: "虚拟机架式DAW，模块化路由", tags: ["专业", "机架", "模块化", "经典"] },
                        { name: "Renoise", url: "https://www.renoise.com", desc: "音轨式DAW，适合电子", tags: ["专业", "Tracker", "独特", "轻量"] },
                        { name: "Acid Pro", url: "https://www.magix.com/us/music-production/acid-pro/", desc: "经典Loop制作软件", tags: ["专业", "Loop", "经典", "Magix"] },
                        { name: "Stagelight", url: "https://www.stagelightapp.com", desc: "易用电子音乐DAW", tags: ["免费版", "Windows", "Mac", "入门", "电子"] },
                        { name: "DrumGrid", url: "https://drumgrid.com", desc: "在线鼓机制作", tags: ["免费", "在线", "鼓机", "简单"] }
                    ]
                },
                {
                    name: "录音棚标准",
                    desc: "专业录音和混音首选DAW",
                    sites: [
                        { name: "Pro Tools", url: "https://www.avid.com/pro-tools", desc: "录音棚行业标准，后期制作首选", tags: ["专业", "行业标准", "录音棚", "后期"] },
                        { name: "Logic Pro", url: "https://www.apple.com/logic-pro/", desc: "Mac平台全能DAW，自带音源丰富", tags: ["专业", "Mac", "全能", "自带音色"] },
                        { name: "Cubase", url: "https://www.steinberg.net/cubase/", desc: "MIDI功能强大，编曲首选", tags: ["专业", "MIDI", "编曲", "老牌"] },
                        { name: "Studio One", url: "https://www.presonus.com/studioone", desc: "现代一体化工作流，上手快", tags: ["专业", "现代", "高效", "推荐"] },
                        { name: "Nuendo", url: "https://www.steinberg.net/nuendo/", desc: "影视后期和音频制作专用", tags: ["专业", "影视", "后期", "高端"] },
                        { name: "Reaper", url: "https://www.reaper.fm", desc: "轻量但功能强大，高度可定制", tags: ["专业", "轻量", "可定制", "便宜"] },
                        { name: "Digital Performer", url: "https://motu.com/en-us/products/software/dp/", desc: "MOTU专业DAW，影视音乐首选", tags: ["专业", "影视", "MOTU", "经典"] },
                        { name: "Samplitude Pro", url: "https://www.magix.com/us/music-production/samplitude-pro/", desc: "德国专业DAW，母带功能强", tags: ["专业", "母带", "德国", "Magix"] }
                    ]
                },
                {
                    name: "音频编辑与修复",
                    desc: "音频剪辑、修复、格式转换",
                    sites: [
                        { name: "Audacity", url: "https://www.audacityteam.org", desc: "免费开源音频编辑器，录音和基础编辑", tags: ["免费", "开源", "编辑", "录音", "必备"] },
                        { name: "iZotope RX", url: "https://www.izotope.com/en/products/rx.html", desc: "专业音频修复和恢复软件", tags: ["专业", "修复", "降噪", "后期"] },
                        { name: "Adobe Audition", url: "https://www.adobe.com/products/audition.html", desc: "Adobe专业音频工作站", tags: ["专业", "Adobe", "播客", "后期"] },
                        { name: "Wavelab", url: "https://www.steinberg.net/wavelab/", desc: "专业母带编辑和分析", tags: ["专业", "母带", "编辑", "分析"] },
                        { name: "Ocenaudio", url: "https://www.ocenaudio.com", desc: "易用音频编辑器，实时预览", tags: ["免费", "易用", "实时", "轻量"] },
                        { name: "RX Elements", url: "https://www.izotope.com/en/products/rx-elements.html", desc: "iZotope入门级修复工具", tags: ["付费", "修复", "降噪", "入门"] },
                        { name: "Harrison Mixbus", url: "https://harrisonaudio.com/products/mixbus/", desc: "模拟调音台风格DAW", tags: ["专业", "模拟", "调音台", "Harrison"] },
                        { name: "Sound Forge", url: "https://www.magix.com/us/music-production/sound-forge-pro/", desc: "专业音频编辑软件", tags: ["专业", "编辑", "母带", "Magix"] }
                    ]
                },
                {
                    name: "移动制作",
                    desc: "iOS和Android音乐制作应用",
                    sites: [
                        { name: "GarageBand iOS", url: "https://apps.apple.com/us/app/garageband/id408709785", desc: "iOS版GarageBand，移动制作神器", tags: ["免费", "iOS", "移动", "Apple"] },
                        { name: "FL Studio Mobile", url: "https://www.image-line.com/fl-studio-mobile/", desc: "FL Studio移动版", tags: ["付费", "iOS", "Android", "移动"] },
                        { name: "KORG Gadget", url: "https://www.korg.com/us/products/software/korg_gadget/", desc: "移动音乐制作套件", tags: ["付费", "iOS", "Mac", "合成器"] },
                        { name: "AUM", url: "https://kymatica.com/auv3/aum", desc: "iOS音频混音器，AU宿主", tags: ["付费", "iOS", "宿主", "专业"] },
                        { name: "BeatMaker 3", url: "https://intua.net/beatmaker-3/", desc: "iOS专业采样和制作", tags: ["付费", "iOS", "采样", "专业"] },
                        { name: "Cubasis 3", url: "https://www.steinberg.net/cubasis/", desc: "Steinberg移动DAW", tags: ["付费", "iOS", "Android", "专业"] },
                        { name: "Auxy", url: "https://auxy.co", desc: "现代移动节拍制作", tags: ["免费版", "iOS", "电子", "现代"] },
                        { name: "Figure", url: "https://www.figure.app", desc: "Propellerhead移动音乐", tags: ["免费", "iOS", "Android", "简单"] },
                        { name: "Medly", url: "https://medlylabs.com", desc: "iOS音乐制作器", tags: ["免费版", "iOS", "易用", "入门"] },
                        { name: "Caustic 3", url: "https://singlecellsoftware.com/caustic", desc: "Android合成器制作应用", tags: ["免费", "Android", "合成器", "移动"] },
                        { name: "n-Track Studio", url: "https://ntrack.com", desc: "跨平台移动DAW", tags: ["付费", "iOS", "Android", "多轨"] },
                        { name: "Groovebox", url: "https://novationmusic.com/software/groovebox", desc: "Novation移动节拍制作", tags: ["免费", "iOS", "节拍", "Novation"] }
                    ]
                },
                {
                    name: "Linux专业DAW",
                    desc: "Linux平台专业音乐制作软件",
                    sites: [
                        { name: "Ardour", url: "https://ardour.org", desc: "开源专业DAW，Linux首选", tags: ["免费", "开源", "Linux", "专业", "跨平台"] },
                        { name: "Qtractor", url: "https://qtractor.org", desc: "Linux音频/MIDI多轨音序器", tags: ["免费", "开源", "Linux", "MIDI"] },
                        { name: "Rosegarden", url: "https://www.rosegardenmusic.com", desc: "Linux MIDI和乐谱编辑器", tags: ["免费", "开源", "Linux", "MIDI", "打谱"] },
                        { name: "LMMS", url: "https://lmms.io", desc: "Linux多媒体工作室", tags: ["免费", "开源", "Linux", "Windows", "Mac"] },
                        { name: "MusE", url: "https://muse-sequencer.github.io", desc: "Linux MIDI/音频音序器", tags: ["免费", "开源", "Linux", "MIDI"] },
                        { name: "Tracktion Waveform", url: "https://www.tracktion.com/products/waveform", desc: "支持Linux的商业DAW", tags: ["付费", "Linux", "Windows", "Mac", "商业"] },
                        { name: "Zrythm", url: "https://www.zrythm.org", desc: "现代开源DAW", tags: ["免费", "开源", "Linux", "现代", "GTK"] },
                        { name: "Non DAW", url: "http://non.tuxfamily.org", desc: "Linux模块化音频工具套件", tags: ["免费", "开源", "Linux", "模块化"] }
                    ]
                },
                {
                    name: "特殊用途DAW",
                    desc: "针对特定需求的专用DAW",
                    sites: [
                        { name: "Audiomulch", url: "https://www.audiomulch.com", desc: "实时音频处理和互动音乐", tags: ["付费", "Windows", "Mac", "实时", "实验"] },
                        { name: "Usine Hollyhock", url: "https://www.sensomusic.org", desc: "现场演出和互动音频", tags: ["付费", "Windows", "现场", "互动", "可视化"] },
                        { name: "Max/MSP", url: "https://cycling74.com/products/max", desc: "可视化编程音乐环境", tags: ["付费", "Mac", "Windows", "编程", "实验", "教育"] },
                        { name: "Pure Data", url: "https://puredata.info", desc: "开源可视化编程音频工具", tags: ["免费", "开源", "跨平台", "编程", "Max替代"] },
                        { name: "SuperCollider", url: "https://supercollider.github.io", desc: "音频合成和算法作曲编程环境", tags: ["免费", "开源", "跨平台", "编程", "算法", "学术"] },
                        { name: "CSound", url: "https://csound.com", desc: "声音合成和信号处理编程语言", tags: ["免费", "开源", "跨平台", "编程", "合成", "学术"] },
                        { name: "Kyma", url: "https://www.symbolicsound.com", desc: "高端声音设计系统", tags: ["付费", "Mac", "Windows", "专业", "声音设计", "顶级"] }
                    ]
                }
            ]
        },
        {
            name: "🎹 虚拟乐器与音色 | Virtual Instruments",
            icon: "🎹",
            desc: "合成器、采样器、音源库、SoundFont",
            level: "intermediate",
            subcategories: [
                {
                    name: "合成器",
                    desc: "波表、模拟、FM合成器",
                    sites: [
                        { name: "Xfer Serum", url: "https://xferrecords.com/products/serum", desc: "波表合成器标准，电子音乐必备", tags: ["专业", "波表", "行业标准", "推荐"] },
                        { name: "Spectrasonics Omnisphere", url: "https://www.spectrasonics.net", desc: "旗舰合成器，音色极其丰富", tags: ["专业", "旗舰", "丰富", "影视"] },
                        { name: "Arturia V Collection", url: "https://www.arturia.com", desc: "经典合成器模拟合集", tags: ["专业", "模拟", "复古", "合集"] },
                        { name: "u-he Diva/Zebra/Hive", url: "https://u-he.com", desc: "高品质合成器系列", tags: ["专业", "高质量", "模拟", "数字"] },
                        { name: "Native Instruments Massive X", url: "https://www.native-instruments.com/products/komplete/synths/massive-x/", desc: "下一代波表合成器", tags: ["专业", "波表", "现代", "NI"] },
                        { name: "Vital", url: "https://vital.audio", desc: "免费/付费波表合成器", tags: ["免费版", "波表", "现代", "推荐"] },
                        { name: "Pigments", url: "https://www.arturia.com/products/software-instruments/pigments/overview", desc: "Arturia现代合成器", tags: ["专业", "现代", "多彩", "Arturia"] },
                        { name: "Phase Plant", url: "https://kilohearts.com/products/phase_plant", desc: "Kilohearts模块化合成器", tags: ["专业", "模块化", "创新", "Kilohearts"] },
                        { name: "Sylenth1", url: "https://www.lennardigital.com", desc: "经典虚拟模拟合成器", tags: ["专业", "经典", "模拟", "舞曲"] },
                        { name: "Repro-1/5", url: "https://u-he.com/products/repro", desc: "Prophet合成器精准模拟", tags: ["付费", "合成器", "模拟", "复古", "精准"] },
                        { name: "Spire", url: "https://reveal-sound.com/spire.html", desc: "软件多复音合成器", tags: ["付费", "合成器", "舞曲", "Trance", "EDM"] },
                        { name: "Surge XT", url: "https://surge-synthesizer.github.io", desc: "开源免费合成器", tags: ["免费", "开源", "合成器", "跨平台", "现代"] },
                        { name: "Tyrell N6", url: "https://u-he.com/products/tyrelln6", desc: "U-he免费合成器", tags: ["免费", "合成器", "模拟", "U-he", "入门"] },
                        { name: "TAL-Noisemaker", url: "https://tal-software.com/products/tal-noisemaker", desc: "免费虚拟模拟合成器", tags: ["免费", "合成器", "模拟", "TAL", "推荐"] },
                        { name: "Helm", url: "https://tytel.org/helm", desc: "开源免费合成器", tags: ["免费", "开源", "合成器", "跨平台", "Linux"] },
                        { name: "Dexed", url: "https://asb2m10.github.io/dexed", desc: "免费DX7模拟", tags: ["免费", "开源", "合成器", "FM", "复古", "Yamaha"] }
                    ]
                },
                {
                    name: "管弦乐与电影音源",
                    desc: "专业管弦乐和影视配乐采样",
                    sites: [
                        { name: "Spitfire Audio", url: "https://www.spitfireaudio.com", desc: "顶级管弦乐采样，BBC Symphony", tags: ["专业", "顶级", "管弦乐", "BBC"] },
                        { name: "EastWest Hollywood Series", url: "https://www.soundsonline.com", desc: "好莱坞系列，电影配乐标准", tags: ["专业", "电影", "管弦乐", "好莱坞"] },
                        { name: "Vienna Symphonic Library", url: "https://www.vsl.co.at", desc: "维也纳交响乐采样，最精细", tags: ["专业", "顶级", "维也纳", "精细"] },
                        { name: "Orchestral Tools", url: "https://www.orchestraltools.com", desc: "柏林系列，现代管弦乐", tags: ["专业", "柏林", "现代", "管弦乐"] },
                        { name: "8Dio", url: "https://8dio.com", desc: "史诗和氛围采样", tags: ["专业", "史诗", "氛围", "电影"] },
                        { name: "Heavyocity", url: "https://heavyocity.com", desc: "现代电影打击乐", tags: ["专业", "打击乐", "电影", "现代"] },
                        { name: "Cinesamples", url: "https://cinesamples.com", desc: "好莱坞电影工作室采样", tags: ["专业", "电影", "管弦乐", "好莱坞"] },
                        { name: "Audio Imperia", url: "https://www.audioimperia.com", desc: "史诗预告片音源", tags: ["专业", "史诗", "预告片", "电影"] },
                        { name: "Sonokinetic", url: "https://www.sonokinetic.net", desc: "电影配乐音源", tags: ["专业", "电影", "管弦乐", "欧洲"] },
                        { name: "Impact Soundworks", url: "https://impactsoundworks.com", desc: "虚拟乐器和电影音色", tags: ["专业", "电影", "管弦乐", "现代"] },
                        { name: "ProjectSAM", url: "https://projectsam.com", desc: "管弦乐和电影音源", tags: ["专业", "管弦乐", "电影", "荷兰"] },
                        { name: "Virharmonic", url: "https://www.virharmonic.com", desc: "交响和合唱音源", tags: ["专业", "管弦乐", "合唱", "欧洲"] }
                    ]
                },
                {
                    name: "采样平台与综合音源",
                    desc: "采样器平台和大型音源库",
                    sites: [
                        { name: "Native Instruments Kontakt", url: "https://www.native-instruments.com/products/komplete/samplers/kontakt-7/", desc: "行业标准采样器平台", tags: ["专业", "采样器", "行业标准", "必备"] },
                        { name: "Komplete 14", url: "https://www.native-instruments.com/products/komplete/", desc: "NI完整音源和效果器套装", tags: ["专业", "套装", "综合", "NI"] },
                        { name: "UVI Falcon", url: "https://www.uvi.net/falcon.html", desc: "高级混合乐器", tags: ["专业", "混合", "高级", "UVI"] },
                        { name: "IK SampleTank", url: "https://www.ikmultimedia.com/products/sampletank4/", desc: "综合采样器工作站", tags: ["专业", "综合", "工作站", "IK"] },
                        { name: "HALion", url: "https://www.steinberg.net/halion/", desc: "Steinberg综合音源平台", tags: ["专业", "综合", "Steinberg", "采样"] },
                        { name: "MachFive", url: "https://www.motu.com/products/software/machfive", desc: "MOTU专业采样器", tags: ["专业", "采样", "MOTU", "电影"] }
                    ]
                },
                {
                    name: "免费优质音源",
                    desc: "免费但品质优秀的音源",
                    sites: [
                        { name: "Spitfire LABS", url: "https://labs.spitfireaudio.com", desc: "Spitfire免费系列，品质极高", tags: ["免费", "高品质", "必装", "推荐"] },
                        { name: "BBC Symphony Orchestra Discover", url: "https://www.spitfireaudio.com/bbc-symphony-orchestra", desc: "免费BBC管弦乐", tags: ["免费", "管弦乐", "专业", "BBC"] },
                        { name: "Komplete Start", url: "https://www.native-instruments.com/products/komplete/bundles/komplete-start/", desc: "NI免费包", tags: ["免费", "综合", "NI", "2000+音色"] },
                        { name: "Versilian VSCO2", url: "https://vis.versilstudios.net/vsco-2.html", desc: "免费管弦乐", tags: ["免费", "开源", "管弦乐", "社区"] },
                        { name: "DSK Music", url: "https://www.dskmusic.com", desc: "免费VST乐器系列", tags: ["免费", "VST", "多乐器", "老品牌"] },
                        { name: "4Front Piano", url: "https://www.yohng.com/4frontpiano.html", desc: "免费钢琴", tags: ["免费", "钢琴", "轻量", "VST"] },
                        { name: "Ample Sound", url: "https://www.amplesound.net/en/pro-pd.asp?id=8", desc: "免费吉他/贝斯音源", tags: ["免费", "吉他", "贝斯", "中国"] },
                        { name: "LABS", url: "https://labs.spitfireaudio.com", desc: "持续更新的免费乐器", tags: ["免费", "持续更新", "多样", "高品质"] },
                        { name: "BBC SO Discover", url: "https://www.spitfireaudio.com/bbc-symphony-orchestra-discover", desc: "免费BBC管弦乐基础版", tags: ["免费", "管弦乐", "入门", "BBC"] },
                        { name: "Piano in 162", url: "https://www.ivyAudio.com", desc: "免费三角钢琴音源", tags: ["免费", "钢琴", "采样", "Kontakt"] },
                        { name: "Layers", url: "https://www.orchid-studios.com", desc: "免费管弦乐音源", tags: ["免费", "管弦乐", "音层", "电影"] },
                        { name: "Sonatina Symphonic Orchestra", url: "http://sso.mattiaswestlund.net", desc: "免费交响管弦乐", tags: ["免费", "开源", "管弦乐", "SFZ"] },
                        { name: "Keyzone Classic", url: "https://bitsonic.eu/audio-plugins/keyzone-classic.html", desc: "免费钢琴和键盘", tags: ["免费", "钢琴", "键盘", "VST"] },
                        { name: "Tape Piano", url: "https://instruments.ableton.com", desc: "Ableton免费磁带钢琴", tags: ["免费", "钢琴", "磁带", "Ableton"] }
                    ]
                },
                {
                    name: "吉他贝斯音源",
                    desc: "电吉他、木吉他、贝斯虚拟乐器",
                    sites: [
                        { name: "Ample Guitar", url: "https://www.amplesound.net", desc: "中国知名吉他音源系列", tags: ["付费", "吉他", "中国", "推荐", "完整"] },
                        { name: "Orange Tree Samples", url: "https://www.orangetreesamples.com", desc: "高品质吉他采样", tags: ["付费", "吉他", "Kontakt", "真实"] },
                        { name: "Impact Soundworks Shreddage", url: "https://impactsoundworks.com", desc: "摇滚/金属吉他音源", tags: ["付费", "吉他", "摇滚", "Kontakt"] },
                        { name: "Prominy V-Metal", url: "https:// prominy.com", desc: "重金属吉他音源", tags: ["付费", "吉他", "金属", "HPT"] },
                        { name: "MusicLab Real Guitar", url: "https://www.musiclab.com", desc: "真实吉他演奏模拟", tags: ["付费", "吉他", "真实", "指弹"] },
                        { name: "Scarbee Bass", url: "https://www.native-instruments.com/en/products/komplete/guitars/scarbee-bass/", desc: "NI经典贝斯音源", tags: ["付费", "贝斯", " funk", " slap"] },
                        { name: "Spectrasonics Trilian", url: "https://www.spectrasonics.net/products/trilian/", desc: "旗舰贝斯合成器", tags: ["付费", "贝斯", "综合", "旗舰", "大"] }
                    ]
                },
                {
                    name: "钢琴键盘音源",
                    desc: "原声钢琴、电钢琴、键盘乐器",
                    sites: [
                        { name: "Spectrasonics Keyscape", url: "https://www.spectrasonics.net/products/keyscape/", desc: "键盘乐器收藏合集", tags: ["付费", "钢琴", "电钢琴", "键盘", "旗舰", "大"] },
                        { name: "Native Instruments Noire", url: "https://www.native-instruments.com/en/products/komplete/pianos/noire/", desc: "Nils Frahm定制钢琴", tags: ["付费", "钢琴", "现代", "氛围"] },
                        { name: "Garritan CFX", url: "https://www.garritan.com", desc: "雅马哈CFX音乐会钢琴", tags: ["付费", "钢琴", "音乐会", "古典"] },
                        { name: "Modartt Pianoteq", url: "https://www.modartt.com", desc: "物理建模钢琴", tags: ["付费", "钢琴", "建模", "轻量", "可调"] },
                        { name: "XLN Audio Addictive Keys", url: "https://www.xlnaudio.com/products/addictive_keys", desc: "现代钢琴音源套装", tags: ["付费", "钢琴", "电钢琴", "现代"] },
                        { name: "Wavesfactory Mercury", url: "https://www.wavesfactory.com", desc: "亲民价大钢琴", tags: ["付费", "钢琴", "性价比", "Kontakt"] },
                        { name: "e-instruments Session Keys", url: "https://e-instruments.com", desc: "两款独特钢琴", tags: ["付费", "钢琴", "氛围", "Kontakt"] },
                        { name: "UVI Grand Piano", url: "https://www.uvi.net", desc: "UVI原声钢琴模型", tags: ["付费", "钢琴", "模型", "专业"] },
                        { name: "Ravenscroft 275", url: "https://www.visounds.com", desc: "高品质钢琴采样", tags: ["付费", "钢琴", "采样", "Kontakt", "真实"] },
                        { name: "Soniccouture Hammersmith", url: "https://www.soniccouture.com", desc: "影视钢琴音源", tags: ["付费", "钢琴", "电影", "氛围"] },
                        { name: "Una Corda", url: "https://www.native-instruments.com", desc: "预制钢琴音源", tags: ["付费", "钢琴", "预制", "独特", "NI"] },
                        { name: "The Giant", url: "https://www.native-instruments.com", desc: "klavins巨大钢琴", tags: ["付费", "钢琴", "巨大", "低音", "NI"] },
                        { name: "Emotional Piano", url: "https://soundiron.com", desc: "情感钢琴音源", tags: ["付费", "钢琴", "情感", "电影", "Soundiron"] }
                    ]
                },
                {
                    name: "鼓与打击乐",
                    desc: "鼓组、打击乐、节奏音源",
                    sites: [
                        { name: "XLN Audio Addictive Drums", url: "https://www.xlnaudio.com/products/addictive_drums", desc: "流行鼓音源标准", tags: ["付费", "鼓", "流行", "标准", "推荐"] },
                        { name: "Toontrack EZdrummer", url: "https://www.toontrack.com/product/ezdrummer-3/", desc: "易用鼓音源", tags: ["付费", "鼓", "易用", "MIDI库"] },
                        { name: "Toontrack Superior Drummer", url: "https://www.toontrack.com/product/superior-drummer-3/", desc: "专业鼓音源旗舰", tags: ["付费", "鼓", "专业", "全面", "顶级"] },
                        { name: "Steven Slate Drums", url: "https://stevenslatedrums.com", desc: "Slate数字鼓", tags: ["付费", "鼓", "摇滚", "现代"] },
                        { name: "GetGood Drums", url: "https://www.getgooddrums.com", desc: "金属/摇滚鼓音源", tags: ["付费", "鼓", "金属", "现代"] },
                        { name: "Native Instruments Abbey Road Drums", url: "https://www.native-instruments.com/en/products/komplete/drums/abbey-road-drums/", desc: "阿比路录音棚鼓组", tags: ["付费", "鼓", "经典", "复古"] },
                        { name: "Drumforge", url: "https://drumforge.com", desc: "现代金属鼓音源", tags: ["付费", "鼓", "金属", "激进"] },
                        { name: "BFD3", url: "https://www.bfd-drums.com", desc: "BFD鼓音源引擎", tags: ["付费", "鼓", "真实", "可调"] },
                        { name: "Drum Workshop", url: "https://www.dwsound.com", desc: "DW鼓音色库", tags: ["付费", "鼓", "DW", "录音棚"] },
                        { name: "Heavyocity Damage", url: "https://heavyocity.com", desc: "电影打击乐", tags: ["付费", "鼓", "打击乐", "电影", "史诗"] },
                        { name: "Spitfire Drums", url: "https://www.spitfireaudio.com", desc: "Spitfire鼓音源", tags: ["付费", "鼓", "管弦", "电影"] },
                        { name: "Action Strikes", url: "https://www.native-instruments.com", desc: "节奏打击乐", tags: ["付费", "打击乐", "节奏", "预告片", "NI"] },
                        { name: "Stylophone", url: "https://www.dubreq.com", desc: "复古小键盘乐器", tags: ["付费", "复古", "键盘", "玩具", "独特"] }
                    ]
                },
                {
                    name: "世界民族乐器",
                    desc: "各国传统乐器和世界音乐音源",
                    sites: [
                        { name: "Native Instruments Discovery Series", url: "https://www.native-instruments.com/en/products/komplete/cinematic/discovery-series/", desc: "世界乐器系列", tags: ["付费", "民族", "世界", "Kontakt"] },
                        { name: "Best Service Ethno World", url: "https://www.bestservice.com/en/ethno_world.html", desc: "世界民族乐器大全", tags: ["付费", "民族", "世界", "完整"] },
                        { name: "Impact Soundworks World Winds", url: "https://impactsoundworks.com", desc: "世界各地吹管乐器", tags: ["付费", "民族", "吹管", "Kontakt"] },
                        { name: "Soniccouture Balinese Gamelan", url: "https://www.soniccouture.com", desc: "巴厘岛甘美兰", tags: ["付费", "民族", "印尼", "打击"] },
                        { name: "Embertone Guanzi", url: "https://www.embertone.com", desc: "中国管子", tags: ["付费", "民族", "中国", "吹管"] },
                        { name: "Ample China", url: "https://www.amplesound.net", desc: "Ample中国民族乐器", tags: ["付费", "民族", "中国", "系列"] },
                        { name: "Fluffy Audio Rinascimento", url: "https://www.fluffyaudio.com", desc: "中世纪和文艺复兴乐器", tags: ["付费", "民族", "早期", "欧洲"] },
                        { name: "Soundiron Voices of Rapture", url: "https://soundiron.com", desc: "世界人声和吟唱", tags: ["付费", "民族", "人声", "世界"] },
                        { name: "Sonuscore Mongolian Voices", url: "https://www.sonuscore.com", desc: "蒙古人声", tags: ["付费", "民族", "人声", "蒙古", "呼麦"] },
                        { name: "Cinesamples Ancient Voices", url: "https://cinesamples.com", desc: "古代人声效果", tags: ["付费", "民族", "人声", "古代", "电影"] },
                        { name: "Zero-G Spirit of Raga", url: "https://www.zero-g.co.uk", desc: "印度拉格音乐", tags: ["付费", "民族", "印度", "拉格", "传统"] },
                        { name: "Wavesfactory Santoor", url: "https://www.wavesfactory.com", desc: "伊朗桑图尔", tags: ["付费", "民族", "伊朗", "扬琴", "中东"] }
                    ]
                }
            ]
        },
        {
            name: "🎚️ 混音与母带 | Mixing & Mastering",
            icon: "🎚️",
            desc: "效果器插件、混音工具、母带处理",
            level: "advanced",
            subcategories: [
                {
                    name: "必备混音插件",
                    desc: "专业混音师首选工具",
                    sites: [
                        { name: "FabFilter Total Bundle", url: "https://www.fabfilter.com", desc: "Pro-Q, Pro-C, Pro-L等全套，业界标准", tags: ["专业", "全套", "行业标准", "必备"] },
                        { name: "Waves Complete", url: "https://www.waves.com", desc: "经典插件全套，SSL, API, L-series", tags: ["专业", "全套", "经典", "SSL"] },
                        { name: "Plugin Alliance", url: "https://www.plugin-alliance.com", desc: "模拟硬件仿真插件联盟", tags: ["专业", "模拟", "硬件仿真", "多品牌"] },
                        { name: "Universal Audio UAD", url: "https://www.uaudio.com/uad-plugins.html", desc: "最逼真的模拟仿真插件", tags: ["专业", "顶级", "模拟", "DSP"] },
                        { name: "Slate Digital All Access", url: "https://slatedigital.com", desc: "订阅制插件套装", tags: ["专业", "订阅", "现代", "套装"] },
                        { name: "Softube", url: "https://www.softube.com", desc: "Console 1和插件", tags: ["专业", "控制台", "模拟", "高端"] },
                        { name: "Soundtoys", url: "https://www.soundtoys.com", desc: "创意效果器，Decapitator, EchoBoy", tags: ["专业", "创意", "饱和", "延迟"] },
                        { name: "Valhalla DSP", url: "https://valhalladsp.com", desc: "高品质混响和延迟", tags: ["专业", "混响", "延迟", "算法"] }
                    ]
                },
                {
                    name: "AI母带与在线服务",
                    desc: "AI辅助母带和在线母带服务",
                    sites: [
                        { name: "LANDR", url: "https://www.landr.com", desc: "AI母带开创者，在线即时处理", tags: ["AI", "在线", "母带", "即时"] },
                        { name: "iZotope Ozone", url: "https://www.izotope.com/en/products/ozone.html", desc: "AI母带套件，行业标准", tags: ["AI", "专业", "套件", "标准"] },
                        { name: "eMastered", url: "https://emastered.com", desc: "AI在线母带，格莱美获奖工程师", tags: ["AI", "在线", "专业", "获奖"] },
                        { name: "CloudBounce", url: "https://cloudbounce.com", desc: "AI母带，按次付费", tags: ["AI", "在线", "灵活", "经济"] },
                        { name: "BandLab Mastering", url: "https://www.bandlab.com/mastering", desc: "免费在线母带", tags: ["免费", "在线", "基础", "入门"] },
                        { name: "Maastr", url: "https://www.maastr.io", desc: "在线AI母带新选择", tags: ["AI", "在线", "新服务", "母带"] }
                    ]
                },
                {
                    name: "免费精品插件",
                    desc: "免费但专业的插件",
                    sites: [
                        { name: "TDR Nova", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费并行动态均衡", tags: ["免费", "均衡", "动态", "专业"] },
                        { name: "TDR Kotelnikov", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费母带压缩", tags: ["免费", "压缩", "母带", "干净"] },
                        { name: "Voxengo SPAN", url: "https://www.voxengo.com/product/span/", desc: "免费频谱分析器，必备", tags: ["免费", "分析", "频谱", "必备"] },
                        { name: "Youlean Loudness Meter", url: "https://youlean.co/youlean-loudness-meter/", desc: "免费响度表", tags: ["免费", "响度", "标准", "Loudness"] },
                        { name: "MeldaProduction Free", url: "https://www.meldaproduction.com", desc: "免费插件套装", tags: ["免费", "套装", "多样", "质量"] },
                        { name: "Valhalla Supermassive", url: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/", desc: "免费延迟/混响", tags: ["免费", "混响", "延迟", "空间"] },
                        { name: "Analog Obsession", url: "https://www.patreon.com/analogobsession", desc: "免费模拟风格插件", tags: ["免费", "模拟", "均衡", "压缩"] },
                        { name: "Blue Cat Audio", url: "https://www.bluecataudio.com/Products/Bundle_FreewarePack/", desc: "免费分析工具和效果器", tags: ["免费", "分析", "工具", "实用"] }
                    ]
                },
                {
                    name: "监听与声学",
                    desc: "耳机校准和房间声学",
                    sites: [
                        { name: "Sonarworks SoundID", url: "https://www.sonarworks.com", desc: "监听校准软件，耳机和音箱", tags: ["专业", "校准", "监听", "推荐"] },
                        { name: "IK ARC", url: "https://www.ikmultimedia.com/products/arc/", desc: "房间声学校准系统", tags: ["专业", "房间", "声学", "校准"] },
                        { name: "Goodhertz CanOpener", url: "https://goodhertz.com/canopener-studio/", desc: "耳机交叉馈送", tags: ["专业", "耳机", "混音", "立体声"] },
                        { name: "Room EQ Wizard", url: "https://www.roomeqwizard.com", desc: "免费房间声学测量", tags: ["免费", "测量", "声学", "房间"] }
                    ]
                },
                {
                    name: "均衡器EQ",
                    desc: "专业均衡处理插件",
                    sites: [
                        { name: "FabFilter Pro-Q 3", url: "https://www.fabfilter.com/products/pro-q-3-equalizer-plug-in", desc: "业界标准数字均衡", tags: ["付费", "EQ", "标准", "数字", "动态"] },
                        { name: "Waves SSL E-Channel", url: "https://www.waves.com/plugins/ssl-e-channel", desc: "SSL调音台均衡", tags: ["付费", "EQ", "SSL", "模拟", "经典"] },
                        { name: "Universal Audio Pultec", url: "https://www.uaudio.com/uad-plugins.html", desc: "Pultec电子管均衡仿真", tags: ["付费", "EQ", "电子管", "复古", "UAD"] },
                        { name: "Sonnox Oxford EQ", url: "https://www.sonnoxplugins.com/plugin/oxford-eq", desc: "高端数字均衡", tags: ["付费", "EQ", "数字", "精确", "高端"] },
                        { name: "Tokyo Dawn Labs SlickEQ", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费多用途均衡", tags: ["免费", "EQ", "多模式", "母带"] },
                        { name: "MeldaProduction MEqualizer", url: "https://www.meldaproduction.com", desc: "免费六段均衡", tags: ["免费", "EQ", "多段", "可调"] },
                        { name: "Ignite Amps PTEq-X", url: "https://igniteamps.com", desc: "免费Pultec风格均衡", tags: ["免费", "EQ", "电子管", "复古"] }
                    ]
                },
                {
                    name: "压缩器与动态",
                    desc: "压缩、限制、扩展处理",
                    sites: [
                        { name: "Waves CLA-76", url: "https://www.waves.com/plugins/cla-76-compressor-limiter", desc: "1176压缩器仿真", tags: ["付费", "压缩", "1176", "经典", "快速"] },
                        { name: "Universal Audio LA-2A", url: "https://www.uaudio.com/uad-plugins.html", desc: "经典光学压缩", tags: ["付费", "压缩", "LA2A", "光学", "人声"] },
                        { name: "FabFilter Pro-C 2", url: "https://www.fabfilter.com/products/pro-c-2-compressor-plug-in", desc: "多功能压缩器", tags: ["付费", "压缩", "多功能", "侧链", "现代"] },
                        { name: "Klanghelm MJUC", url: "https://klanghelm.com/contents/products/MJUC", desc: "电子管压缩器", tags: ["付费", "压缩", "电子管", "温暖", "德国"] },
                        { name: "Cytomic The Glue", url: "https://cytomic.com", desc: "SSL总线压缩仿真", tags: ["付费", "压缩", "SSL", "总线", "glue"] },
                        { name: "Xfer Records OTT", url: "https://xferrecords.com/freeware", desc: "免费多频段压缩", tags: ["免费", "压缩", "多段", "EDM", "Aggressive"] },
                        { name: "TDR Kotelnikov", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费母带压缩", tags: ["免费", "压缩", "母带", "透明", "干净"] }
                    ]
                },
                {
                    name: "混响与空间",
                    desc: "混响、延迟、空间效果",
                    sites: [
                        { name: "Valhalla VintageVerb", url: "https://valhalladsp.com/shop/reverb/valhalla-vintage-verb/", desc: "经典混响算法合集", tags: ["付费", "混响", "经典", "算法", "性价比"] },
                        { name: "Valhalla Room", url: "https://valhalladsp.com/shop/reverb/valhalla-room/", desc: "真实空间混响", tags: ["付费", "混响", "真实", "立体声", "空间"] },
                        { name: "FabFilter Pro-R", url: "https://www.fabfilter.com/products/pro-r-reverb-plug-in", desc: "自然混响", tags: ["付费", "混响", "自然", "衰减", "EQ"] },
                        { name: "Lexicon PCM Native", url: "https://www.lexiconpro.com", desc: "Lexicon硬件混响软件版", tags: ["付费", "混响", "Lexicon", "专业", "硬件"] },
                        { name: "Soundtoys EchoBoy", url: "https://www.soundtoys.com/product/echoboy/", desc: "创意回声和延迟", tags: ["付费", "延迟", "回声", "创意", "模拟"] },
                        { name: "Eventide H3000", url: "https://www.eventideaudio.com", desc: "传奇效果器硬件仿真", tags: ["付费", "效果器", "H3000", "传奇", "立体声"] },
                        { name: "OrilRiver", url: "https://www.kvraudio.com/product/orilriver-by-denis-tihanov", desc: "免费算法混响", tags: ["免费", "混响", "算法", "质量", "Surround"] },
                        { name: "Valhalla Plate", url: "https://valhalladsp.com/shop/reverb/valhalla-plate/", desc: "板式混响模拟", tags: ["付费", "混响", "板式", "经典"] },
                        { name: "Valhalla Supermassive", url: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/", desc: "免费超级混响延迟", tags: ["免费", "混响", "延迟", "空间", "大型"] },
                        { name: "Altiverb", url: "https://www.audioease.com/altiverb", desc: "卷积混响行业标准", tags: ["付费", "混响", "卷积", "采样", "顶级"] },
                        { name: "Reverberate", url: "https://www.liquidsonics.com/reverberate", desc: "免费卷积混响", tags: ["免费", "混响", "卷积", "IR"] },
                        { name: "Sanford Reverb", url: "https://www.kvraudio.com/product/sanford-reverb-by-sanford-sound-design", desc: "免费高质量混响", tags: ["免费", "混响", "算法", "音色好"] }
                    ]
                },
                {
                    name: "饱和染色效果",
                    desc: "模拟饱和、失真、染色",
                    sites: [
                        { name: "FabFilter Saturn 2", url: "https://www.fabfilter.com/products/saturn-2-multiband-distortion-saturation-plug-in", desc: "多频段饱和失真", tags: ["付费", "饱和", "失真", "多段", "效果"] },
                        { name: "Soundtoys Decapitator", url: "https://www.soundtoys.com/product/decapitator/", desc: "模拟饱和染色", tags: ["付费", "饱和", "染色", "模拟", "Aggressive"] },
                        { name: "iZotope Trash 2", url: "https://www.izotope.com/en/products/trash.html", desc: "多模式失真", tags: ["付费", "失真", "多模式", "效果", "创意"] },
                        { name: "Softube Saturation Knob", url: "https://www.softube.com/saturation-knob", desc: "免费简单饱和", tags: ["免费", "饱和", "简单", "效果", "推荐"] },
                        { name: "Klanghelm IVGI", url: "https://klanghelm.com/contents/products/IVGI", desc: "免费自动饱和", tags: ["免费", "饱和", "自动", "VU表", "德国"] },
                        { name: "SGA1566 Tube Preamp", url: "https://www.shatteredglassaudio.com", desc: "免费电子管前级", tags: ["免费", "电子管", "前级", "温暖"] },
                        { name: "FerricTDS", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费磁带饱和", tags: ["免费", "磁带", "饱和", "染色"] }
                    ]
                },
                {
                    name: "特殊效果器",
                    desc: "创意效果和处理",
                    sites: [
                        { name: "Cableguys ShaperBox", url: "https://www.cableguys.com/shaperbox.html", desc: "多效果调制套件", tags: ["付费", "效果", "调制", "创意", "节奏"] },
                        { name: "Output Portal", url: "https://output.com/products/portal", desc: "粒子延迟效果", tags: ["付费", "效果", "粒子", "延迟", "创意"] },
                        { name: "iZotope Stutter Edit", url: "https://www.izotope.com/en/products/stutter-edit.html", desc: "故障和卡顿效果", tags: ["付费", "效果", "故障", "卡顿", "现场"] },
                        { name: "Glitchmachines", url: "https://glitchmachines.com", desc: "实验性效果插件", tags: ["付费", "效果", "实验", "Glitch", "独特"] },
                        { name: "Granular Synthesis", url: "https://github.com/grame-cncm/faust", desc: "粒子合成工具", tags: ["免费", "开源", "粒子", "合成", "实验"] },
                        { name: "Chow Tape Model", url: "https://github.com/jatinchowdhury18/ChowTapeModel", desc: "免费磁带模拟", tags: ["免费", "开源", "磁带", "模拟", "GitHub"] },
                        { name: "Wider", url: "https://polyversemusic.com/products/wider/", desc: "免费立体声扩展", tags: ["免费", "立体声", "扩展", "声场", "简单"] }
                    ]
                }
            ]
        },
        {
            name: "🤖 AI 音乐工具 | AI Music Tools",
            icon: "🤖",
            desc: "AI生成、音源分离、智能处理",
            level: "all",
            subcategories: [
                {
                    name: "AI音乐生成",
                    desc: "文本或参考生成完整音乐",
                    sites: [
                        { name: "Suno AI", url: "https://www.suno.ai", desc: "最热门AI音乐生成，质量极高", tags: ["AI", "生成", "热门", "高质量", "推荐"] },
                        { name: "Udio", url: "https://www.udio.com", desc: "AI音乐创作，风格多样", tags: ["AI", "生成", "多样", "现代"] },
                        { name: "AIVA", url: "https://www.aiva.ai", desc: "AI作曲助手，支持MIDI导出", tags: ["AI", "作曲", "MIDI", "专业"] },
                        { name: "Soundraw", url: "https://soundraw.io", desc: "免版税AI音乐生成", tags: ["AI", "生成", "免版税", "商用"] },
                        { name: "Mubert", url: "https://mubert.com", desc: "AI免版税音乐和API", tags: ["AI", "生成", "API", "商用"] },
                        { name: "Stable Audio", url: "https://www.stableaudio.com", desc: "Stability AI音频生成", tags: ["AI", "生成", "Stability", "高质量"] },
                        { name: "Boomy", url: "https://boomy.com", desc: "快速生成和发布AI音乐", tags: ["AI", "生成", "发布", "简单"] },
                        { name: "Loudly", url: "https://www.loudly.com", desc: "AI音乐生成和编辑", tags: ["AI", "生成", "编辑", "现代"] }
                    ]
                },
                {
                    name: "音源分离",
                    desc: "提取人声、乐器分离",
                    sites: [
                        { name: "Ultimate Vocal Remover", url: "https://github.com/Anjok07/ultimatevocalremovergui", desc: "免费开源人声分离，效果最好", tags: ["免费", "开源", "人声分离", "最佳", "推荐"] },
                        { name: "LALAL.AI", url: "https://www.lalal.ai", desc: "在线音源分离，质量高", tags: ["在线", "分离", "人声", "乐器"] },
                        { name: "Moises", url: "https://moises.ai", desc: "移动端音源分离应用", tags: ["移动", "分离", "App", "练习"] },
                        { name: "RX Music Rebalance", url: "https://www.izotope.com/en/products/rx/features/music-rebalance.html", desc: "iZotope音源分离", tags: ["专业", "分离", "iZotope", "RX"] },
                        { name: "Spleeter", url: "https://github.com/deezer/spleeter", desc: "Deezer开源分离工具", tags: ["免费", "开源", "命令行", "开发者"] },
                        { name: "Splitter.ai", url: "https://splitter.ai", desc: "在线音轨分离服务", tags: ["在线", "分离", "免费版", "AI"] }
                    ]
                },
                {
                    name: "智能混音母带",
                    desc: "AI辅助混音和母带",
                    sites: [
                        { name: "Gullfoss", url: "https://www.soundtheory.com/gullfoss", desc: "AI智能均衡", tags: ["AI", "均衡", "智能", "自适应"] },
                        { name: "soothe2", url: "https://oeksound.com/plugins/soothe2/", desc: "AI共振抑制", tags: ["AI", "共振", "抑制", "混音"] },
                        { name: "Neutron", url: "https://www.izotope.com/en/products/neutron.html", desc: "AI智能混音套件", tags: ["AI", "混音", "iZotope", "套件"] },
                        { name: "Mastering Assistant", url: "https://www.izotope.com/en/products/ozone/features/mastering-assistant.html", desc: "AI母带助手", tags: ["AI", "母带", "Ozone", "辅助"] }
                    ]
                },
                {
                    name: "AI音频处理",
                    desc: "降噪、增强、修复",
                    sites: [
                        { name: "Adobe Podcast", url: "https://podcast.adobe.com", desc: "AI语音增强，免费", tags: ["免费", "AI", "增强", "语音", "Adobe"] },
                        { name: "Auphonic", url: "https://auphonic.com", desc: "AI音频后期处理", tags: ["AI", "后期", "播客", "自动"] },
                        { name: "Descript", url: "https://www.descript.com", desc: "AI音频/视频编辑", tags: ["AI", "编辑", "转录", "视频"] },
                        { name: "RX", url: "https://www.izotope.com/en/products/rx.html", desc: "专业音频修复AI", tags: ["AI", "修复", "专业", "iZotope"] }
                    ]
                },
                {
                    name: "AI人声工具",
                    desc: "AI歌声合成和人声处理",
                    sites: [
                        { name: "Synthesizer V", url: "https://dreamtonics.com/synthesizerv", desc: "AI歌声合成软件", tags: ["付费", "AI", "歌声", "合成", "Vocaloid"] },
                        { name: "Vocaloid", url: "https://www.vocaloid.com", desc: "雅马哈歌声合成技术", tags: ["付费", "AI", "歌声", "Vocaloid", "日本"] },
                        { name: "ACE Studio", url: "https://acestudio.timedomain.cn", desc: "时域科技AI歌声", tags: ["付费", "AI", "歌声", "中国", "中文"] },
                        { name: "X Studio", url: "https://www.xstudio.tech", desc: "小冰AI歌声合成", tags: ["免费版", "AI", "歌声", "中国", "中文"] },
                        { name: "ACE虚拟歌姬", url: "https://acevers.timedomain.cn", desc: "手机AI歌声APP", tags: ["免费", "AI", "歌声", "iOS", "Android"] },
                        { name: "DiffSinger", url: "https://github.com/MoonInTheRiver/DiffSinger", desc: "开源AI歌声合成", tags: ["免费", "开源", "AI", "歌声", "GitHub"] },
                        { name: "NNSVS", url: "https://github.com/r9y9/nnsvs", desc: "神经网络歌声合成", tags: ["免费", "开源", "AI", "歌声", "日本"] }
                    ]
                },
                {
                    name: "AI作曲助手",
                    desc: "AI辅助作曲和编曲",
                    sites: [
                        { name: "Orb Composer", url: "https://www.orb-composer.com", desc: "AI作曲软件", tags: ["付费", "AI", "作曲", "管弦", "自动"] },
                        { name: "Amper Music", url: "https://www.ampermusic.com", desc: "AI音乐创作平台", tags: ["付费", "AI", "作曲", "商用", "订阅"] },
                        { name: "Ecrett Music", url: "https://ecrettmusic.com", desc: "AI免版税音乐生成", tags: ["付费", "AI", "免版税", "视频", "背景"] },
                        { name: "Humtap", url: "https://www.humtap.com", desc: "哼唱生成伴奏", tags: ["免费版", "AI", "哼唱", "伴奏", "移动"] },
                        { name: "SongStarter", url: "https://www.arcade_SAMPLES.com", desc: "Arcade AI灵感生成", tags: ["付费", "AI", "灵感", "Loop", "创意"] },
                        { name: "Jukebox", url: "https://openai.com/research/jukebox", desc: "OpenAI音乐生成模型", tags: ["免费", "开源", "AI", "OpenAI", "研究"] },
                        { name: "Magenta Studio", url: "https://magenta.tensorflow.org/studio", desc: "Google AI音乐工具", tags: ["免费", "开源", "AI", "Google", "Ableton"] }
                    ]
                },
                {
                    name: "AI混音母带",
                    desc: "AI辅助混音和母带处理",
                    sites: [
                        { name: "iZotope Neutron", url: "https://www.izotope.com/en/products/neutron.html", desc: "AI智能混音套件", tags: ["付费", "AI", "混音", "iZotope", "智能"] },
                        { name: "iZotope Ozone", url: "https://www.izotope.com/en/products/ozone.html", desc: "AI母带处理套件", tags: ["付费", "AI", "母带", "iZotope", "标准"] },
                        { name: "LANDR Studio", url: "https://www.landr.com", desc: "AI母带和分发平台", tags: ["付费", "AI", "母带", "分发", "在线"] },
                        { name: "eMastered", url: "https://emastered.com", desc: "格莱美获奖工程师AI母带", tags: ["付费", "AI", "母带", "专业", "在线"] },
                        { name: "AAMS Auto Audio Mastering", url: "https://www.curioza.com", desc: "自动母带软件", tags: ["付费", "AI", "母带", "自动", "Windows"] },
                        { name: "Major Decibel", url: "https://majordecibel.com", desc: "在线AI母带服务", tags: ["付费", "AI", "母带", "在线", "快速"] },
                        { name: "Dolby.io Media Enhance", url: "https://dolby.io/products/media-enhance/", desc: "杜比AI音频增强", tags: ["付费", "AI", "增强", "杜比", "API"] },
                        { name: "CloudBounce", url: "https://cloudbounce.com", desc: "在线AI母带引擎", tags: ["付费", "AI", "母带", "在线", "快速"] },
                        { name: "BandLab Mastering", url: "https://www.bandlab.com/mastering", desc: "BandLab免费AI母带", tags: ["免费", "AI", "母带", "在线", "入门"] }
                    ]
                },
                {
                    name: "AI音频修复",
                    desc: "降噪、去混响、修复工具",
                    sites: [
                        { name: "iZotope RX 10", url: "https://www.izotope.com/en/products/rx.html", desc: "专业音频修复行业标准", tags: ["付费", "AI", "修复", "专业", "标准"] },
                        { name: "Accentize dxRevive", url: "https://accentize.com", desc: "AI对话修复增强", tags: ["付费", "AI", "修复", "对话", "影视"] },
                        { name: "CrispAudio", url: "https://crispaudio.com", desc: "AI语音增强", tags: ["付费", "AI", "增强", "语音", "播客"] },
                        { name: "Supertone Clear", url: "https://supertone.ai", desc: "AI人声分离和增强", tags: ["付费", "AI", "分离", "增强", "韩国"] },
                        { name: "Clarity Vx", url: "https://www.waves.com/plugins/clarity-vx", desc: "Waves AI降噪插件", tags: ["付费", "AI", "降噪", "Waves", "实时"] },
                        { name: "AudioDenoise", url: "https://www.accusonus.com", desc: "AI降噪工具", tags: ["付费", "AI", "降噪", "修复"] }
                    ]
                }
            ]
        },
        {
            name: "🎤 现场与演出 | Live Performance",
            icon: "🎤",
            desc: "现场演出软件、控制器、DJ工具",
            level: "advanced",
            subcategories: [
                {
                    name: "现场演出软件",
                    desc: "舞台表演专用软件",
                    sites: [
                        { name: "Ableton Live", url: "https://www.ableton.com/live", desc: "现场演出行业标准", tags: ["专业", "现场", "演出", "标准"] },
                        { name: "MainStage", url: "https://www.apple.com/mainstage/", desc: "Apple现场演出软件", tags: ["专业", "Mac", "现场", "Logic"] },
                        { name: "Gig Performer", url: "https://gigperformer.com", desc: "专注现场演出的宿主", tags: ["专业", "现场", "插件宿主", "跨平台"] },
                        { name: "Camelot", url: "https://www.audiomodeling.com/camelot/", desc: "演出管理软件", tags: ["专业", "管理", "设置", "演出"] }
                    ]
                },
                {
                    name: "DJ软件",
                    desc: "DJ表演和混音",
                    sites: [
                        { name: "Serato DJ", url: "https://serato.com/dj", desc: "专业DJ软件", tags: ["专业", "DJ", "搓盘", "演出"] },
                        { name: "Rekordbox", url: "https://rekordbox.com", desc: "Pioneer DJ软件", tags: ["专业", "DJ", "Pioneer", "俱乐部"] },
                        { name: "Traktor Pro", url: "https://www.native-instruments.com/en/products/traktor/", desc: "NI DJ软件", tags: ["专业", "DJ", "NI", "创意"] },
                        { name: "VirtualDJ", url: "https://www.virtualdj.com", desc: "功能丰富的DJ软件", tags: ["专业", "DJ", "功能多", "入门"] },
                        { name: "djay Pro", url: "https://www.algoriddim.com/djay-pro-mac", desc: "Algoriddim DJ软件", tags: ["专业", "DJ", "Mac", "iOS"] },
                        { name: "Mixxx", url: "https://mixxx.org", desc: "免费开源DJ软件", tags: ["免费", "开源", "DJ", "跨平台"] },
                        { name: "Cross DJ", url: "https://www.mixvibes.com/cross-dj", desc: "Mixvibes DJ软件", tags: ["免费版", "DJ", "跨平台", "视频"] },
                        { name: "DEX 3", url: "https://www.pcdj.com/dex-3", desc: "PCDJ专业软件", tags: ["付费", "DJ", "视频", "卡拉OK"] },
                        { name: "DJUCED", url: "https://www.djuced.com", desc: "Hercules DJ软件", tags: ["免费", "DJ", "入门", "控制器"] },
                        { name: "Serato Studio", url: "https://serato.com/studio", desc: "Serato节拍制作", tags: ["付费", "DJ", "制作", "节拍", "Hip-hop"] }
                    ]
                },
                {
                    name: "MIDI控制器",
                    desc: "键盘、打击垫、控制器",
                    sites: [
                        { name: "Ableton Push", url: "https://www.ableton.com/push/", desc: "Ableton专用控制器", tags: ["硬件", "Ableton", "集成", "演出"] },
                        { name: "Novation Launchpad", url: "https://novationmusic.com/launchpad", desc: "Launchpad打击垫系列", tags: ["硬件", "打击垫", "Launchpad", "流行"] },
                        { name: "Akai MPC", url: "https://www.akaipro.com/mpc", desc: "经典MPC采样器", tags: ["硬件", "采样", "MPC", "Hip-hop"] },
                        { name: "Native Instruments Maschine", url: "https://www.native-instruments.com/products/maschine/", desc: "NI采样和制作系统", tags: ["硬件", "采样", "NI", "集成"] },
                        { name: "Roli Seaboard", url: "https://roli.com/products/seaboard", desc: "多维表现键盘", tags: ["硬件", "创新", "表现", "独特"] },
                        { name: "Arturia KeyLab", url: "https://www.arturia.com/products/hybrid-synths/keylab-mkii", desc: "Arturia键盘控制器", tags: ["硬件", "键盘", "控制器", "Arturia"] },
                        { name: "NI Komplete Kontrol", url: "https://www.native-instruments.com/products/komplete/keyboards/", desc: "NI智能键盘", tags: ["硬件", "键盘", "NI", "集成", "智能"] },
                        { name: "Novation SL MkIII", url: "https://novationmusic.com/sl-mkiii", desc: "高端键盘控制器", tags: ["硬件", "键盘", "控制器", "音序器"] },
                        { name: "Akai MPK mini", url: "https://www.akaipro.com/mpk-mini-mk3", desc: "便携MIDI键盘", tags: ["硬件", "键盘", "便携", "入门"] },
                        { name: "Keith McMillen Instruments", url: "https://www.keithmcmillen.com", desc: "创新MIDI控制器", tags: ["硬件", "创新", "控制器", "独特"] },
                        { name: "Sensel Morph", url: "https://morph.sensel.com", desc: "压力感应控制器", tags: ["硬件", "创新", "压力感应", "多功能"] },
                        { name: "DJ TechTools MIDI Fighter", url: "https://djtechtools.com", desc: " arcade按钮控制器", tags: ["硬件", "按钮", "DJ", "打击垫"] }
                    ]
                },
                {
                    name: "现场音频接口",
                    desc: "舞台音频接口和混音台",
                    sites: [
                        { name: "Universal Audio Apollo", url: "https://www.uaudio.com/audio-interfaces.html", desc: "高端音频接口", tags: ["硬件", "音频接口", "UAD", "专业"] },
                        { name: "Focusrite Scarlett", url: "https://focusrite.com/scarlett", desc: "入门专业接口", tags: ["硬件", "音频接口", "Focusrite", "性价比"] },
                        { name: "RME Babyface", url: "https://www.rme-audio.de/babyface.html", desc: "便携高端接口", tags: ["硬件", "音频接口", "RME", "德国", "稳定"] },
                        { name: "Apogee Duet", url: "https://www.apogeedigital.com/products/duet", desc: "Mac高端接口", tags: ["硬件", "音频接口", "Apogee", "Mac", "音质"] },
                        { name: "SSL 2", url: "https://www.solidstatelogic.com/products/ssl-2", desc: "SSL入门接口", tags: ["硬件", "音频接口", "SSL", "品质"] },
                        { name: "Audient iD", url: "https://audient.com/products/audio-interfaces/id14-mkii", desc: "Audient音频接口", tags: ["硬件", "音频接口", "Audient", "话放"] },
                        { name: "MOTU Ultralite", url: "https://motu.com/en-us/products/software/dp/", desc: "MOTU便携接口", tags: ["硬件", "音频接口", "MOTU", "多通道"] },
                        { name: "Behringer X32", url: "https://www.behringer.com/product.html?modelCode=P0ASF", desc: "数字调音台", tags: ["硬件", "调音台", "数字", "现场", "多通道"] }
                    ]
                }
            ]
        },
        {
            name: "📚 学习与资源 | Learning & Resources",
            icon: "📚",
            desc: "教程、音色库、社区论坛",
            level: "all",
            subcategories: [
                {
                    name: "在线课程平台",
                    desc: "系统学习音乐制作",
                    sites: [
                        { name: "Coursera 音乐制作", url: "https://www.coursera.org/browse/arts-and-humanities/music-and-art", desc: "伯克利等名校音乐课程", tags: ["学术", "证书", "系统", "名校"] },
                        { name: "Skillshare", url: "https://www.skillshare.com/search?query=music+production", desc: "实用音乐制作课程", tags: ["实用", "项目", "多样", "订阅"] },
                        { name: "Pro Sound Training", url: "https://www.prosoundtraining.com", desc: "专业音频培训", tags: ["专业", "培训", "认证", "深度"] },
                        { name: "Puremix", url: "https://www.puremix.net", desc: "专业混音教程", tags: ["专业", "混音", "大师课", "深入"] },
                        { name: "Mix With The Masters", url: "https://mixwiththemasters.com", desc: "格莱美获奖工程师教程", tags: ["顶级", "大师", "获奖", "专业"] },
                        { name: "Sonic Academy", url: "https://www.sonicacademy.com", desc: "电子音乐制作教程", tags: ["专业", "电子", "课程", "订阅"] }
                    ]
                },
                {
                    name: "采样与音色库",
                    desc: "购买和下载采样",
                    sites: [
                        { name: "Splice Sounds", url: "https://splice.com/sounds", desc: "最大在线采样库，订阅制", tags: ["订阅", "采样", "最大", "流行"] },
                        { name: "Loopmasters", url: "https://www.loopmasters.com", desc: "专业采样包商店", tags: ["商店", "采样", "专业", "多样"] },
                        { name: "Cymatics", url: "https://cymatics.fm", desc: "现代采样包，免费包多", tags: ["商店", "采样", "现代", "免费包"] },
                        { name: "Noiiz", url: "https://www.noiiz.com", desc: "采样和预设订阅", tags: ["订阅", "采样", "预设", "无限"] },
                        { name: "Freesound", url: "https://freesound.org", desc: "免费音效和采样社区", tags: ["免费", "社区", "音效", "采样"] },
                        { name: "Looperman", url: "https://www.looperman.com", desc: "免费循环社区", tags: ["免费", "社区", "循环", "用户上传"] },
                        { name: "Samplephonics", url: "https://www.samplephonics.com", desc: "高质量采样和预设", tags: ["专业", "采样", "预设", "精品"] },
                        { name: "Pro Sound Effects", url: "https://www.prosoundeffects.com", desc: "专业音效库", tags: ["专业", "音效", "电影", "游戏"] },
                        { name: "Output Arcade", url: "https://output.com/products/arcade", desc: "云端采样和Loop平台", tags: ["订阅", "采样", "云端", "创意", "推荐"] },
                        { name: "Splice Studio", url: "https://splice.com/studio", desc: "在线协作和采样平台", tags: ["免费版", "协作", "采样", "云端"] },
                        { name: "Licklibrary", url: "https://www.licklibrary.com", desc: "吉他课程和采样", tags: ["付费", "吉他", "课程", "采样"] },
                        { name: "Drum Broker", url: "https://www.theunderscores.com", desc: "专业鼓采样商店", tags: ["付费", "采样", "鼓", "专业", "Hip-hop"] }
                    ]
                },
                {
                    name: "社区论坛",
                    desc: "交流学习和求助",
                    sites: [
                        { name: "Gearslutz", url: "https://gearspace.com", desc: "专业音频论坛（现Gearspace）", tags: ["论坛", "专业", "讨论", "设备"] },
                        { name: "VI-Control", url: "https://vi-control.net", desc: "虚拟乐器讨论区", tags: ["论坛", "音源", "专业", "深度"] },
                        { name: "Reddit r/WeAreTheMusicMakers", url: "https://www.reddit.com/r/WeAreTheMusicMakers/", desc: "音乐制作社区", tags: ["社区", "Reddit", "活跃", "多元"] },
                        { name: "Reddit r/edmproduction", url: "https://www.reddit.com/r/edmproduction/", desc: "电子音乐制作", tags: ["社区", "Reddit", "EDM", "电子"] },
                        { name: "OSC Audio", url: "https://www.oscaudio.com", desc: "中文音频社区", tags: ["中文", "社区", "讨论", "国内"] },
                        { name: "KVR Audio", url: "https://www.kvraudio.com", desc: "插件和音源论坛", tags: ["论坛", "插件", "音源", "讨论"] },
                        { name: "GroupDIY", url: "https://groupdiy.com", desc: "DIY音频设备论坛", tags: ["论坛", "DIY", "硬件", "电子"] },
                        { name: "Synthtopia", url: "https://www.synthtopia.com", desc: "合成器新闻和论坛", tags: ["论坛", "合成器", "新闻", "设备"] },
                        { name: "MatrixSynth", url: "http://www.matrixsynth.com", desc: "合成器博客和社区", tags: ["博客", "合成器", "新闻", "设备"] },
                        { name: "ModWiggler", url: "https://modwiggler.com", desc: "模块合成器论坛", tags: ["论坛", "模块", "合成器", "Eurorack"] }
                    ]
                },
                {
                    name: "音色采样商店",
                    desc: "购买高质量采样和音色",
                    sites: [
                        { name: "Splice Sounds", url: "https://splice.com/sounds", desc: "最大在线采样库，订阅制", tags: ["订阅", "采样", "最大", "流行", "推荐"] },
                        { name: "Noiiz", url: "https://www.noiiz.com", desc: "采样和预设订阅平台", tags: ["订阅", "采样", "预设", "无限"] },
                        { name: "Sounds.com", url: "https://sounds.com", desc: "Native Instruments采样平台", tags: ["订阅", "采样", "NI", "整合"] },
                        { name: "Loopmasters", url: "https://www.loopmasters.com", desc: "专业采样包商店", tags: ["商店", "采样", "专业", "多样", "老牌"] },
                        { name: "Cymatics", url: "https://cymatics.fm", desc: "现代采样包，免费包多", tags: ["商店", "采样", "现代", "免费包", "热门"] },
                        { name: "Black Octopus Sound", url: "https://www.blackoctopus-sound.com", desc: "高质量电子音乐采样", tags: ["商店", "采样", "电子", "专业"] },
                        { name: "Samplephonics", url: "https://www.samplephonics.com", desc: "精品采样和预设", tags: ["商店", "采样", "预设", "精品", "独特"] },
                        { name: "Prime Loops", url: "https://www.primeloops.com", desc: "Hip-hop和电子采样", tags: ["商店", "采样", "Hip-hop", "电子"] }
                    ]
                },
                {
                    name: "免费采样资源",
                    desc: "免费高质量的采样和Loop",
                    sites: [
                        { name: "Freesound", url: "https://freesound.org", desc: "免费音效和采样社区", tags: ["免费", "社区", "音效", "采样", "知识共享"] },
                        { name: "Looperman", url: "https://www.looperman.com", desc: "免费循环和采样社区", tags: ["免费", "社区", "循环", "用户上传", "Acapella"] },
                        { name: "BBC Sound Effects", url: "https://sound-effects.bbcrewind.co.uk", desc: "BBC历史音效库", tags: ["免费", "音效", "BBC", "历史", "广播"] },
                        { name: "NASA Audio Collection", url: "https://archive.org/details/nasa", desc: "NASA太空音效", tags: ["免费", "音效", "太空", "NASA", "独特"] },
                        { name: "SampleSwap", url: "https://sampleswap.org", desc: "免费采样和Loop", tags: ["免费", "采样", "Loop", "多样"] },
                        { name: "Bedroom Producers Blog", url: "https://bedroomproducersblog.com/free-samples/", desc: "免费采样包合集", tags: ["免费", "采样", "博客", "合集", "定期更新"] },
                        { name: "Free Music Archive", url: "https://freemusicarchive.org", desc: "免费音乐素材", tags: ["免费", "音乐", "素材", "版权安全"] },
                        { name: "Incompetech", url: "https://incompetech.com/music/royalty-free/music.html", desc: "Kevin MacLeod免版税音乐", tags: ["免费", "免版税", "背景", "视频", "常用"] }
                    ]
                },
                {
                    name: "音效库",
                    desc: "专业音效和拟音资源",
                    sites: [
                        { name: "Pro Sound Effects", url: "https://www.prosoundeffects.com", desc: "专业音效库", tags: ["付费", "音效", "专业", "电影", "游戏", "高端"] },
                        { name: "Boom Library", url: "https://www.boomlibrary.com", desc: "高端影视音效", tags: ["付费", "音效", "电影", "设计", "顶级"] },
                        { name: "Sound Ideas", url: "https://www.sound-ideas.com", desc: "经典音效库系列", tags: ["付费", "音效", "经典", "通用", "系列"] },
                        { name: "Hollyland Sound Effects", url: "https://www.hollywoodedge.com", desc: "好莱坞音效", tags: ["付费", "音效", "好莱坞", "电影", "标准"] },
                        { name: "Epic Stock Media", url: "https://epicstockmedia.com", desc: "史诗游戏音效", tags: ["付费", "音效", "游戏", "史诗", "现代"] },
                        { name: "A Sound Effect", url: "https://www.asoundeffect.com", desc: "独立音效设计师作品", tags: ["付费", "音效", "独立", "独特", "设计师"] },
                        { name: "Soundsnap", url: "https://www.soundsnap.com", desc: "专业音效搜索引擎", tags: ["付费", "音效", "搜索", "多样", "专业"] },
                        { name: "Bluezone Corporation", url: "https://www.bluezone-corporation.com", desc: "科幻和未来音效", tags: ["付费", "音效", "科幻", "未来", "设计"] },
                        { name: "Ghosthack", url: "https://www.ghosthack.de", desc: "免费和付费音效", tags: ["免费版", "音效", "采样", "电子"] },
                        { name: "Zapsplat", url: "https://www.zapsplat.com", desc: "免费音效库", tags: ["免费", "音效", "在线", "大量"] }
                    ]
                },
                {
                    name: "合成器预设商店",
                    desc: "购买和下载合成器预设",
                    sites: [
                        { name: "Splice Sounds", url: "https://splice.com/sounds", desc: "合成器预设和采样", tags: ["订阅", "预设", "采样", "多平台"] },
                        { name: "ADSR Sounds", url: "https://www.adsrsounds.com", desc: "合成器预设商店", tags: ["付费", "预设", "Serum", "Sylenth"] },
                        { name: "PluginBoutique", url: "https://www.pluginboutique.com", desc: "插件和预设商店", tags: ["付费", "预设", "插件", "综合"] },
                        { name: "PresetPatch", url: "https://www.presetpatch.com", desc: "免费合成器预设", tags: ["免费", "预设", "社区", "分享"] },
                        { name: "New Loops", url: "https://newloops.com", desc: "预设和采样商店", tags: ["付费", "预设", "采样", "电子"] },
                        { name: "ModeAudio", url: "https://modeaudio.com", desc: "采样和预设包", tags: ["付费", "预设", "采样", "风格多样"] }
                    ]
                }
            ]
        },
        {
            name: "🔧 工具与实用 | Tools & Utilities",
            icon: "🔧",
            desc: "格式转换、MIDI工具、实用软件",
            level: "all",
            subcategories: [
                {
                    name: "格式转换",
                    desc: "音频格式转换和处理",
                    sites: [
                        { name: "XLD", url: "https://tmkk.undo.jp/xld/index_e.html", desc: "Mac无损音频转换", tags: ["免费", "Mac", "无损", "转换"] },
                        { name: "dBpoweramp", url: "https://www.dbpoweramp.com", desc: "Windows音频转换", tags: ["付费", "Windows", "批量", "准确"] },
                        { name: "FFmpeg", url: "https://ffmpeg.org", desc: "命令行多媒体处理", tags: ["免费", "开源", "命令行", "强大"] },
                        { name: "Audacity", url: "https://www.audacityteam.org", desc: "也可用于格式转换", tags: ["免费", "开源", "编辑", "转换"] },
                        { name: "Online Audio Converter", url: "https://online-audio-converter.com", desc: "在线音频格式转换", tags: ["免费", "在线", "转换", "快速"] },
                        { name: "Switch", url: "https://www.nch.com.au/switch/index.html", desc: "批量音频转换软件", tags: ["免费版", "批量", "转换", "多格式"] }
                    ]
                },
                {
                    name: "MIDI工具",
                    desc: "MIDI编辑和转换",
                    sites: [
                        { name: "MidiEditor", url: "https://www.midieditor.org", desc: "免费MIDI编辑器", tags: ["免费", "开源", "MIDI编辑", "简单"] },
                        { name: "Sekaiju", url: "https://openmidiproject.osdn.jp/Sekaiju.html", desc: "日本MIDI编辑器", tags: ["免费", "日本", "功能多", "开源"] },
                        { name: "Signal", url: "https://signal.vercel.app", desc: "在线MIDI编辑器", tags: ["免费", "在线", "现代", "简单"] },
                        { name: "Hookpad", url: "https://www.hooktheory.com/hookpad", desc: "在线和弦进行创作", tags: ["在线", "和弦", "创作", "直观"] },
                        { name: "MIDI Voyager", url: "https://www.midi-voyager.com", desc: "MIDI可视化和分析", tags: ["免费", "可视化", "分析", "MIDI"] },
                        { name: "Bome MIDI Translator", url: "https://www.bome.com/products/miditranslator", desc: "MIDI映射和转换", tags: ["付费", "MIDI", "映射", "控制器", "专业"] },
                        { name: "MIDI-OX", url: "http://www.midiox.com", desc: "Windows MIDI诊断工具", tags: ["免费", "MIDI", "诊断", "Windows", "实用"] },
                        { name: "QMidi", url: "https://www.mixagesoftware.com/en/qmidi", desc: "Mac MIDI播放器", tags: ["付费", "MIDI", "播放", "Mac", "卡拉OK"] },
                        { name: "Aria Maestosa", url: "https://ariamaestosa.github.io/ariamaestosa/docs/index.html", desc: "开源MIDI编辑器", tags: ["免费", "开源", "MIDI", "编辑器", "跨平台"] }
                    ]
                },
                {
                    name: "乐谱与作曲",
                    desc: "打谱和作曲辅助",
                    sites: [
                        { name: "MuseScore", url: "https://musescore.org", desc: "免费开源打谱软件", tags: ["免费", "开源", "打谱", "推荐"] },
                        { name: "Noteflight", url: "https://www.noteflight.com", desc: "在线打谱", tags: ["在线", "打谱", "协作", "教育"] },
                        { name: "Flat.io", url: "https://flat.io", desc: "协作式在线打谱", tags: ["在线", "打谱", "协作", "现代"] },
                        { name: "LilyPond", url: "https://lilypond.org", desc: "文本化乐谱排版", tags: ["免费", "开源", "排版", "专业"] },
                        { name: "Frescobaldi", url: "https://www.frescobaldi.org", desc: "LilyPond编辑器", tags: ["免费", "开源", "LilyPond", "编辑"] },
                        { name: "Sibelius", url: "https://www.avid.com/sibelius", desc: "专业打谱软件", tags: ["付费", "专业", "打谱", "行业标准", "Avid"] },
                        { name: "Finale", url: "https://www.finalemusic.com", desc: "经典专业打谱", tags: ["付费", "专业", "打谱", "老牌", "美国"] },
                        { name: "Dorico", url: "https://www.steinberg.net/dorico/", desc: "Steinberg现代打谱", tags: ["付费", "专业", "打谱", "现代", "自动排版"] },
                        { name: "Guitar Pro", url: "https://www.guitar-pro.com", desc: "吉他谱和总谱", tags: ["付费", "吉他", "打谱", "乐队", "练习"] },
                        { name: "TuxGuitar", url: "https://www.tuxguitar.app", desc: "免费Guitar Pro替代", tags: ["免费", "开源", "吉他", "打谱", "多平台"] },
                        { name: "StaffPad", url: "https://www.staffpad.net", desc: "手写乐谱iPad应用", tags: ["付费", "iOS", "手写", "专业", "精美"] },
                        { name: "Symphony Pro", url: "https://www.symphonypro.net", desc: "iPad专业打谱", tags: ["付费", "iOS", "打谱", "专业"] },
                        { name: "Musink", url: "https://www.musink.net", desc: "免费音乐写作软件", tags: ["免费", "Windows", "作曲", "简单"] }
                    ]
                },
                {
                    name: "音频分析工具",
                    desc: "频谱分析和音频测量",
                    sites: [
                        { name: "Spek", url: "https://www.spek.cc", desc: "轻量免费频谱分析", tags: ["免费", "Windows", "Mac", "Linux", "频谱", "分析"] },
                        { name: "Audacity Analyze", url: "https://www.audacityteam.org", desc: "音频分析和测量", tags: ["免费", "开源", "分析", "测量"] },
                        { name: "Sonic Visualiser", url: "https://www.sonicvisualiser.org", desc: "深度音频可视化分析", tags: ["免费", "开源", "可视化", "学术", "分析"] },
                        { name: "Friture", url: "https://friture.org", desc: "实时音频可视化", tags: ["免费", "开源", "可视化", "实时", "Python"] },
                        { name: "TrueRTA", url: "https://www.trueaudio.com", desc: "实时音频分析", tags: ["免费版", "Windows", "分析", "测量"] },
                        { name: "REW Room EQ Wizard", url: "https://www.roomeqwizard.com", desc: "房间声学测量", tags: ["免费", "声学", "测量", "专业"] }
                    ]
                },
                {
                    name: "调音节拍工具",
                    desc: "调音器和节拍器",
                    sites: [
                        { name: "GuitarTuna", url: "https://www.guitartuna.com", desc: "流行吉他调音APP", tags: ["免费版", "iOS", "Android", "调音", "吉他"] },
                        { name: "Pro Guitar Tuner", url: "https://www.proguitartuner.com", desc: "专业吉他调音", tags: ["免费", "在线", "调音", "吉他"] },
                        { name: "TonalEnergy Tuner", url: "https://tonalenergy.com", desc: "全能调音节拍器", tags: ["付费", "iOS", "Android", "调音", "节拍器", "专业"] },
                        { name: "Pro Metronome", url: "https://www.pro-metronome.com", desc: "专业节拍器", tags: ["免费版", "iOS", "Android", "节拍器", "练习"] },
                        { name: "Soundcorset", url: "https://soundcorset.com", desc: "调音节拍器组合", tags: ["免费", "iOS", "Android", "调音", "节拍器"] },
                        { name: "Metronome Online", url: "https://www.metronomeonline.com", desc: "在线节拍器", tags: ["免费", "在线", "节拍器", "简单"] },
                        { name: "Best Metronome", url: "https://best-metronome.com", desc: "免费在线节拍器", tags: ["免费", "在线", "节拍器"] },
                        { name: "Pitch", url: "https://pitch.app", desc: "iOS调音器", tags: ["付费", "iOS", "调音", "精致"] }
                    ]
                },
                {
                    name: "实用小工具",
                    desc: "各种音乐制作辅助工具",
                    sites: [
                        { name: "AudioShare", url: "https://kymatica.com/apps/audioshare", desc: "iOS音频文件管理", tags: ["付费", "iOS", "文件管理", "实用"] },
                        { name: "AudioCopy", url: "https://retronyms.com", desc: "iOS音频复制粘贴", tags: ["免费", "iOS", "复制粘贴", "工作流"] },
                        { name: "Tone Generator", url: "https://www.szynalski.com/tone-generator/", desc: "在线音频发生器", tags: ["免费", "在线", "测试", "发生器"] },
                        { name: "Acoustic Ruler", url: "https://www.fonofos.com/acoustic-ruler", desc: "声学测量工具", tags: ["付费", "iOS", "声学", "测量"] },
                        { name: "SPL Meter", url: "https://www.studiosixdigital.com", desc: "专业声压级测量", tags: ["付费", "iOS", "声压", "专业", "测量"] },
                        { name: "Decibel X", url: "https://decibelx.app", desc: "噪声测量APP", tags: ["免费版", "iOS", "Android", "测量", "环境"] },
                        { name: "AudioTools", url: "https://www.studiosixdigital.com/audiotools", desc: "专业音频工具套件", tags: ["付费", "iOS", "套件", "专业", "分析"] },
                        { name: "Drum Tuner", url: "https://drumtune.com", desc: "鼓调音APP", tags: ["付费", "iOS", "Android", "调音", "鼓"] }
                    ]
                },
                {
                    name: "视频配乐工具",
                    desc: "为视频和YouTube创作配乐",
                    sites: [
                        { name: "Epidemic Sound", url: "https://www.epidemicsound.com", desc: "YouTube创作者音乐库", tags: ["付费", "订阅", "YouTube", "免版税", "视频"] },
                        { name: "Artlist", url: "https://artlist.io", desc: "视频创作者音乐授权", tags: ["付费", "订阅", "视频", "电影", "免版税"] },
                        { name: "Musicbed", url: "https://www.musicbed.com", desc: "高品质独立音乐人作品", tags: ["付费", "授权", "独立音乐", "电影", "高品质"] },
                        { name: "PremiumBeat", url: "https://www.premiumbeat.com", desc: "Shutterstock音乐库", tags: ["付费", "授权", "专业", "视频", "广告"] },
                        { name: "AudioJungle", url: "https://audiojungle.net", desc: "Envato市场音乐素材", tags: ["付费", "市场", "多样", "预算", "视频"] },
                        { name: "Filmstro", url: "https://filmstro.com", desc: "动态音乐编辑工具", tags: ["付费", "动态", "视频", "编辑", "情绪"] }
                    ]
                },
                {
                    name: "音乐分发平台",
                    desc: "将音乐发布到流媒体平台",
                    sites: [
                        { name: "DistroKid", url: "https://distrokid.com", desc: "无限分发，保留100%收入", tags: ["付费", "分发", "无限", "独立", "推荐"] },
                        { name: "TuneCore", url: "https://www.tunecore.com", desc: "全球音乐分发服务", tags: ["付费", "分发", "全球", "版税", "老牌"] },
                        { name: "CD Baby", url: "https://cdbaby.com", desc: "独立音乐人分发", tags: ["付费", "分发", "独立", "实体", "老牌"] },
                        { name: "LANDR Distribution", url: "https://www.landr.com", desc: "AI母带+分发一体", tags: ["付费", "分发", "AI", "母带", "一体化"] },
                        { name: "Amuse", url: "https://amuse.io", desc: "免费音乐分发", tags: ["免费", "分发", "移动", "独立", "免费版"] },
                        { name: "UnitedMasters", url: "https://unitedmasters.com", desc: "艺术家服务平台", tags: ["免费版", "分发", "品牌", "合作", "美国"] },
                        { name: "RouteNote", url: "https://www.routenote.com", desc: "免费和付费分发选项", tags: ["免费版", "分发", "选择", "全球", "灵活"] },
                        { name: "Ditto Music", url: "https://dittomusic.com", desc: "独立音乐分发", tags: ["付费", "分发", "独立", "推广", "英国"] }
                    ]
                },
                {
                    name: "音乐版权管理",
                    desc: "版权注册和版税管理",
                    sites: [
                        { name: "Songtrust", url: "https://www.songtrust.com", desc: "全球版权管理", tags: ["付费", "版权", "管理", "全球", "版税"] },
                        { name: "Kobalt Music", url: "https://www.kobaltmusic.com", desc: "现代版权管理", tags: ["付费", "版权", "技术", "数据", "大型"] },
                        { name: "TuneRegistry", url: "https://www.tuneregistry.com", desc: "独立音乐人版权注册", tags: ["付费", "版权", "注册", "独立", "美国"] },
                        { name: "HFA Songfile", url: "https://www.harryfox.com", desc: "美国机械版权许可", tags: ["付费", "版权", "许可", "美国", "机械"] },
                        { name: "Easy Song Licensing", url: "https://www.easysonglicensing.com", desc: "封面歌曲许可服务", tags: ["付费", "许可", "封面", "美国", "便捷"] }
                    ]
                },
                {
                    name: "协作与云存储",
                    desc: "音乐项目协作和云端备份",
                    sites: [
                        { name: "Splice Studio", url: "https://splice.com/studio", desc: "项目备份和协作", tags: ["免费版", "协作", "备份", "云端", "版本控制"] },
                        { name: "LANDR Projects", url: "https://www.landr.com", desc: "在线协作平台", tags: ["付费", "协作", "云端", "分享", "反馈"] },
                        { name: "Avid Cloud Collaboration", url: "https://www.avid.com/pro-tools/cloud-collaboration", desc: "Pro Tools云协作", tags: ["付费", "协作", "Pro Tools", "云端", "专业"] },
                        { name: "Frame.io", url: "https://frame.io", desc: "音视频审阅协作", tags: ["付费", "审阅", "视频", "反馈", "Adobe"] },
                        { name: "Notetracks", url: "https://www.notetracks.com", desc: "音频反馈和注释", tags: ["免费版", "反馈", "注释", "协作", "移动"] },
                        { name: "Soundwhale", url: "https://soundwhale.com", desc: "远程音频协作", tags: ["付费", "远程", "协作", "同步", "专业"] }
                    ]
                }
            ]
        },
        {
            name: "🎸 吉他贝斯 | Guitar & Bass",
            icon: "🎸",
            desc: "吉他效果器、音箱模拟、贝斯工具",
            level: "intermediate",
            subcategories: [
                {
                    name: "吉他音箱模拟",
                    desc: "软件吉他音箱和效果器",
                    sites: [
                        { name: "Neural DSP", url: "https://neuraldsp.com", desc: "高品质吉他音箱模拟", tags: ["付费", "吉他", "音箱模拟", "金属", "现代", "推荐"] },
                        { name: "Positive Grid BIAS FX", url: "https://www.positivegrid.com/bias-fx", desc: "综合吉他效果器平台", tags: ["付费", "吉他", "效果器", "音箱", "iOS"] },
                        { name: "Line 6 Helix Native", url: "https://line6.com/helix/helixnative.html", desc: "Helix软件版", tags: ["付费", "吉他", "Line6", "综合", "专业"] },
                        { name: "Kemper Profiler", url: "https://www.kemper-amps.com", desc: " profiling 音箱模拟器", tags: ["付费", "吉他", "硬件", " profiling ", "专业"] },
                        { name: "AmpliTube", url: "https://www.ikmultimedia.com/products/amplitube5/", desc: "IK吉他音箱模拟", tags: ["付费", "吉他", "IK", "综合", "经典"] },
                        { name: "Guitar Rig", url: "https://www.native-instruments.com/products/komplete/guitar/guitar-rig-6-pro/", desc: "NI吉他效果器", tags: ["付费", "吉他", "NI", "效果器", "经典"] },
                        { name: "Archetype Series", url: "https://neuraldsp.com/archetype", desc: "签名款艺术家音箱", tags: ["付费", "吉他", "艺术家", "金属", "现代"] },
                        { name: "STL Tones", url: "https://stltone.com", desc: "ToneHub和Will Putney套装", tags: ["付费", "吉他", "金属", "现代", "重型"] }
                    ]
                },
                {
                    name: "吉他学习工具",
                    desc: "吉他学习和练习辅助",
                    sites: [
                        { name: "Ultimate Guitar", url: "https://www.ultimate-guitar.com", desc: "最大吉他谱库", tags: ["免费版", "吉他", "谱子", "社区", "最大"] },
                        { name: "Guitar Pro", url: "https://www.guitar-pro.com", desc: "吉他谱编辑和播放", tags: ["付费", "吉他", "打谱", "学习", "标准"] },
                        { name: "Songsterr", url: "https://www.songsterr.com", desc: "在线吉他谱和伴奏", tags: ["免费版", "吉他", "谱子", "在线", "互动"] },
                        { name: "Fender Play", url: "https://www.fender.com/play", desc: "Fender吉他课程", tags: ["付费", "吉他", "课程", "Fender", "入门"] },
                        { name: "Justin Guitar", url: "https://www.justinguitar.com", desc: "免费吉他教程", tags: ["免费", "吉他", "教程", "入门", "推荐"] },
                        { name: "Yousician Guitar", url: "https://yousician.com", desc: "游戏化吉他学习", tags: ["免费版", "吉他", "学习", "游戏", "互动"] }
                    ]
                },
                {
                    name: "贝斯专用工具",
                    desc: "贝斯音箱模拟和效果器",
                    sites: [
                        { name: "Neural DSP Darkglass", url: "https://neuraldsp.com/darkglass", desc: "Darkglass贝斯效果器", tags: ["付费", "贝斯", "Darkglass", "金属", "现代"] },
                        { name: "Parallax", url: "https://neuraldsp.com/parallax", desc: "Neural贝斯效果器", tags: ["付费", "贝斯", "效果器", "现代", "多段"] },
                        { name: "Bassforge", url: "https://joeysturgistones.com", desc: "Joey Sturgis贝斯", tags: ["付费", "贝斯", "金属", "核", "Aggressive"] },
                        { name: "Scarbee Bass", url: "https://www.native-instruments.com/en/products/komplete/guitars/scarbee-bass/", desc: "NI经典贝斯音源", tags: ["付费", "贝斯", "funk", "slap", "经典"] },
                        { name: "Trilian", url: "https://www.spectrasonics.net/products/trilian/", desc: "Spectrasonics贝斯", tags: ["付费", "贝斯", "综合", "原声", "合成"] }
                    ]
                }
            ]
        },
        {
            name: "🎤 人声处理 | Vocal Processing",
            icon: "🎤",
            desc: "人声录音、处理、效果器和调音",
            level: "intermediate",
            subcategories: [
                {
                    name: "人声效果器",
                    desc: "人声处理插件和工具",
                    sites: [
                        { name: "Auto-Tune Pro", url: "https://www.antarestech.com", desc: "行业标准音高校正", tags: ["付费", "人声", "音准", "标准", "Antares"] },
                        { name: "Melodyne", url: "https://www.celemony.com", desc: "高级音高和时间编辑", tags: ["付费", "人声", "音高", "时间", "专业", "推荐"] },
                        { name: "Waves Tune", url: "https://www.waves.com/plugins/waves-tune-real-time", desc: "实时音高校正", tags: ["付费", "人声", "音准", "实时", "Waves"] },
                        { name: "Nectar", url: "https://www.izotope.com/en/products/nectar.html", desc: "AI人声处理套件", tags: ["付费", "人声", "AI", "套件", "iZotope"] },
                        { name: "VocalSynth", url: "https://www.izotope.com/en/products/vocalsynth.html", desc: "人声合成效果器", tags: ["付费", "人声", "合成", "效果", "创意"] },
                        { name: "Little AlterBoy", url: "https://www.soundtoys.com/product/little-alterboy/", desc: "音高和声效果器", tags: ["付费", "人声", "音高", "和声", "Soundtoys"] },
                        { name: "Revoice Pro", url: "https://www.synchroarts.com/products/revoice-pro/", desc: "人声对齐和双轨", tags: ["付费", "人声", "对齐", "双轨", "专业"] },
                        { name: "Crispifier", url: "https://crispifier.com", desc: "人声清晰度增强", tags: ["付费", "人声", "清晰", "增强", "现代"] }
                    ]
                },
                {
                    name: "人声录音设备",
                    desc: "麦克风、话放、录音硬件",
                    sites: [
                        { name: "Shure SM7B", url: "https://www.shure.com/en-US/products/microphones/sm7b", desc: "行业标准广播麦克风", tags: ["硬件", "麦克风", "广播", "标准", "推荐"] },
                        { name: "Neumann U87", url: "https://www.neumann.com/en-us/products/microphones/u-87-ai", desc: "经典录音室电容麦", tags: ["硬件", "麦克风", "录音室", "经典", "高端"] },
                        { name: "Audio-Technica AT2020", url: "https://www.audio-technica.com/en-us/at2020", desc: "入门专业电容麦", tags: ["硬件", "麦克风", "入门", "性价比", "推荐"] },
                        { name: "Rode NT1", url: "https://www.rode.com/microphones/nt1", desc: "安静的大振膜电容麦", tags: ["硬件", "麦克风", "安静", "大振膜", "录音"] },
                        { name: "Warm Audio WA-47", url: "https://warmaudio.com/wa-47jr/", desc: "复古电子管麦克风", tags: ["硬件", "麦克风", "电子管", "复古", "温暖"] },
                        { name: "Focusrite Scarlett Solo", url: "https://focusrite.com/scarlett", desc: "入门音频接口+话放", tags: ["硬件", "音频接口", "入门", "话放", "推荐"] },
                        { name: "Cloudlifter", url: "https://www.cloudmicrophones.com/cloudlifter", desc: "动圈麦克风增益放大器", tags: ["硬件", "话放", "增益", "动圈", "SM7B"] },
                        { name: "sE Electronics Reflection Filter", url: "https://seelectronics.com/reflection-filter", desc: "便携式声学处理", tags: ["硬件", "声学", "便携", "家庭", "录音"] }
                    ]
                },
                {
                    name: "模块合成器",
                    desc: "Eurorack和模块化合成器",
                    sites: [
                        { name: "VCV Rack", url: "https://vcvrack.com", desc: "免费开源Eurorack模拟", tags: ["免费", "开源", "模块", "Eurorack", "跨平台"] },
                        { name: "MiRack", url: "https://mi-rack.app", desc: "iOS模块合成器", tags: ["付费", "iOS", "模块", "Eurorack", "移动"] },
                        { name: "Softube Modular", url: "https://www.softube.com/modular", desc: "软件Eurorack平台", tags: ["付费", "模块", "Softube", "Eurorack", "专业"] },
                        { name: "Reaktor Blocks", url: "https://www.native-instruments.com/products/komplete/synths/reaktor-6/", desc: "NI模块化合成", tags: ["付费", "模块", "NI", "Reaktor", "灵活"] },
                        { name: "Voltage Modular", url: "https://cherryaudio.com/voltage-modular", desc: "Cherry Audio模块平台", tags: ["付费", "模块", "Cherry", "Eurorack", "入门"] },
                        { name: "Bitwig Grid", url: "https://www.bitwig.com/grid", desc: "Bitwig内置模块化", tags: ["付费", "模块", "Bitwig", "集成", "现代"] }
                    ]
                },
                {
                    name: "音乐理论工具",
                    desc: "和弦、音阶、乐理辅助",
                    sites: [
                        { name: "Hooktheory", url: "https://www.hooktheory.com", desc: "和弦进行分析和创作", tags: ["免费版", "在线", "和弦", "理论", "流行"] },
                        { name: "AutoChords", url: "https://autochords.com", desc: "自动和弦生成", tags: ["免费", "在线", "和弦", "生成", "简单"] },
                        { name: "Chordify", url: "https://chordify.net", desc: "从歌曲提取和弦", tags: ["免费版", "在线", "和弦", "提取", "学习"] },
                        { name: "Tone.js", url: "https://tonejs.github.io", desc: "Web音频框架", tags: ["免费", "开源", "Web", "音频", "编程"] },
                        { name: "Scribbletune", url: "https://scribbletune.com", desc: "JavaScript音乐创作", tags: ["免费", "开源", "代码", "生成", "编程"] },
                        { name: "Ableton Learning Music", url: "https://learningmusic.ableton.com", desc: "Ableton免费音乐基础", tags: ["免费", "在线", "基础", "Ableton", "入门"] },
                        { name: "Lightnote", url: "https://www.lightnote.co", desc: "交互式音乐理论", tags: ["免费", "在线", "理论", "交互", "可视化"] },
                        { name: "MusicTheory.net", url: "https://www.musictheory.net", desc: "综合乐理学习", tags: ["免费", "在线", "乐理", "练习", "教育"] }
                    ]
                }
            ]
        },
        {
            name: "🥁 鼓与打击乐 | Drums",
            icon: "🥁",
            desc: "鼓音源、打击乐、节奏工具",
            level: "intermediate",
            subcategories: [
                {
                    name: "鼓音源",
                    desc: "原声和电子鼓采样",
                    sites: [
                        { name: "Addictive Drums 2", url: "https://www.xlnaudio.com/products/addictive_drums", desc: "流行鼓音源标准", tags: ["付费", "鼓", "流行", "标准", "推荐"] },
                        { name: "Superior Drummer 3", url: "https://www.toontrack.com/product/superior-drummer-3/", desc: "专业鼓音源旗舰", tags: ["付费", "鼓", "专业", "全面", "顶级"] },
                        { name: "EZdrummer 3", url: "https://www.toontrack.com/product/ezdrummer-3/", desc: "易用鼓音源", tags: ["付费", "鼓", "易用", "MIDI库", "入门"] },
                        { name: "BFD3", url: "https://www.bfd-drums.com", desc: "BFD鼓音源引擎", tags: ["付费", "鼓", "真实", "可调", "专业"] },
                        { name: "Steven Slate Drums 5", url: "https://stevenslatedrums.com", desc: "Slate数字鼓", tags: ["付费", "鼓", "摇滚", "现代", "SSD5"] },
                        { name: "GetGood Drums", url: "https://www.getgooddrums.com", desc: "现代金属鼓", tags: ["付费", "鼓", "金属", "现代", "Aggressive"] },
                        { name: "Abbey Road Drummer", url: "https://www.native-instruments.com/en/products/komplete/drums/abbey-road-drums/", desc: "阿比路录音棚鼓组", tags: ["付费", "鼓", "经典", "复古", "NI"] },
                        { name: "Drumforge", url: "https://drumforge.com", desc: "现代金属鼓音源", tags: ["付费", "鼓", "金属", "激进", "重型"] }
                    ]
                },
                {
                    name: "鼓机与节奏",
                    desc: "电子鼓机和节奏制作",
                    sites: [
                        { name: "TR-808", url: "https://www.roland.com/us/products/tr-08/", desc: "Roland经典鼓机", tags: ["付费", "硬件", "鼓机", "经典", "808"] },
                        { name: "TR-909", url: "https://www.roland.com/us/products/tr-09/", desc: "Roland传奇鼓机", tags: ["付费", "硬件", "鼓机", "经典", "909"] },
                        { name: "Arturia Spark", url: "https://www.arturia.com/products/software-instruments/spark-2/overview", desc: "软件鼓机", tags: ["付费", "鼓机", "Arturia", "综合", "创意"] },
                        { name: "Geist2", url: "https://www.fxpansion.com/products/geist2", desc: "FXpansion节奏工作站", tags: ["付费", "鼓机", "采样", "节奏", "完整"] },
                        { name: "iMachine", url: "https://www.native-instruments.com/products/traktor/dj-hardware/imachine/", desc: "NI便携鼓机", tags: ["付费", "硬件", "鼓机", "便携", "NI"] },
                        { name: "Impaktor", url: "https://www.beepstreet.com/impaktor", desc: "iOS物理建模鼓", tags: ["付费", "iOS", "鼓", "建模", "创意"] }
                    ]
                },
                {
                    name: "打击乐音源",
                    desc: "世界打击乐和电影打击乐",
                    sites: [
                        { name: "Damage", url: "https://heavyocity.com/product/damage", desc: "Heavyocity电影打击乐", tags: ["付费", "打击乐", "电影", "史诗", "Heavyocity"] },
                        { name: "Evolve", url: "https://heavyocity.com/product/evolve", desc: "现代电影打击乐", tags: ["付费", "打击乐", "电影", "现代", "设计"] },
                        { name: "Stylus RMX", url: "https://www.spectrasonics.net/products/stylus-rmx/", desc: "Spectrasonics节奏音源", tags: ["付费", "节奏", "Loop", "Spectrasonics", "综合"] },
                        { name: "TaalMala", url: "https://taalmala.com", desc: "印度塔布拉鼓", tags: ["付费", "打击乐", "印度", "塔布拉", "传统"] },
                        { name: "CinePerc", url: "https://cinesamples.com", desc: "电影打击乐", tags: ["付费", "打击乐", "电影", "管弦", "史诗"] }
                    ]
                }
            ]
        },
        {
            name: "🎹 键盘与钢琴 | Keys",
            icon: "🎹",
            desc: "钢琴、电钢琴、键盘乐器音源",
            level: "intermediate",
            subcategories: [
                {
                    name: "原声钢琴",
                    desc: "三角钢琴和立式钢琴",
                    sites: [
                        { name: "Keyscape", url: "https://www.spectrasonics.net/products/keyscape/", desc: "键盘收藏合集", tags: ["付费", "钢琴", "键盘", "旗舰", "Spectrasonics"] },
                        { name: "Pianoteq", url: "https://www.modartt.com", desc: "物理建模钢琴", tags: ["付费", "钢琴", "建模", "轻量", "可调"] },
                        { name: "Alicias Keys", url: "https://www.native-instruments.com/en/products/komplete/pianos/alicias-keys/", desc: "Alicia Keys签名钢琴", tags: ["付费", "钢琴", "流行", "签名", "NI"] },
                        { name: "The Gentleman", url: "https://www.native-instruments.com/en/products/komplete/pianos/the-gentleman/", desc: "立式钢琴", tags: ["付费", "钢琴", "立式", "温暖", "NI"] },
                        { name: "Noire", url: "https://www.native-instruments.com/en/products/komplete/pianos/noire/", desc: "Nils Frahm定制钢琴", tags: ["付费", "钢琴", "现代", "氛围", "实验"] },
                        { name: "Una Corda", url: "https://www.native-instruments.com/en/products/komplete/pianos/una-corda/", desc: "预制钢琴", tags: ["付费", "钢琴", "预制", "独特", "实验"] }
                    ]
                },
                {
                    name: "电钢琴与键盘",
                    desc: "电钢琴、风琴、Clavinet",
                    sites: [
                        { name: "Scarbee Mark I", url: "https://www.native-instruments.com/en/products/komplete/synths/scarbee-mark-i/", desc: "Rhodes电钢琴", tags: ["付费", "电钢琴", "Rhodes", "经典", "Funk"] },
                        { name: "Scarbee A-200", url: "https://www.native-instruments.com/en/products/komplete/synths/scarbee-a-200/", desc: "Wurlitzer电钢琴", tags: ["付费", "电钢琴", "Wurlitzer", "经典", "摇滚"] },
                        { name: "Vintage Organs", url: "https://www.native-instruments.com/en/products/komplete/synths/vintage-organs/", desc: "复古风琴", tags: ["付费", "风琴", "Hammond", "爵士", "福音"] },
                        { name: "EVI20", url: "https://www.native-instruments.com/en/products/komplete/synths/evi20/", desc: "Hohner Clavinet", tags: ["付费", "Clavinet", "Funk", "经典", "Stevie"] },
                        { name: "Arturia Piano V", url: "https://www.arturia.com/products/software-instruments/piano-v/overview", desc: "物理建模钢琴套装", tags: ["付费", "钢琴", "建模", "套装", "Arturia"] }
                    ]
                }
            ]
        },
        {
            name: "🎧 监听与声学 | Monitoring",
            icon: "🎧",
            desc: "监听音箱、耳机、声学处理",
            level: "intermediate",
            subcategories: [
                {
                    name: "监听音箱",
                    desc: "录音室监听音箱",
                    sites: [
                        { name: "KRK Rokit", url: "https://krkmusic.com", desc: "入门监听音箱", tags: ["硬件", "监听", "音箱", "入门", "黄色"] },
                        { name: "Yamaha HS", url: "https://usa.yamaha.com/products/proaudio/monitor_speakers/hs_series/index.html", desc: "行业标准监听", tags: ["硬件", "监听", "音箱", "标准", "白色"] },
                        { name: "Genelec", url: "https://www.genelec.com", desc: "芬兰高端监听", tags: ["硬件", "监听", "音箱", "高端", "专业"] },
                        { name: "Adam Audio", url: "https://www.adam-audio.com", desc: "气动高音监听", tags: ["硬件", "监听", "音箱", "气动", "德国"] },
                        { name: "Focal", url: "https://www.focal.com/us/headphones-speakers/pro-audio/", desc: "法国高端监听", tags: ["硬件", "监听", "音箱", "高端", "法国"] },
                        { name: "JBL 3 Series", url: "https://jblpro.com/en/products/3-series-mkii", desc: "性价比监听", tags: ["硬件", "监听", "音箱", "性价比", "美国"] }
                    ]
                },
                {
                    name: "监听耳机",
                    desc: "录音室监听耳机",
                    sites: [
                        { name: "Audio-Technica M50x", url: "https://www.audio-technica.com/en-us/ath-m50x", desc: "入门监听耳机", tags: ["硬件", "监听", "耳机", "入门", "推荐"] },
                        { name: "Beyerdynamic DT 770", url: "https://north-america.beyerdynamic.com/dt-770-pro.html", desc: "封闭式监听耳机", tags: ["硬件", "监听", "耳机", "封闭", "德国"] },
                        { name: "Sennheiser HD 650", url: "https://en-us.sennheiser.com/hd-650", desc: "开放式参考耳机", tags: ["硬件", "监听", "耳机", "开放", "参考"] },
                        { name: "Sony MDR-7506", url: "https://pro.sony/ue_US/products/headphones/mdr-7506", desc: "行业标准监听", tags: ["硬件", "监听", "耳机", "标准", "广播"] },
                        { name: "AKG K712 Pro", url: "https://www.akg.com/headphones/professional-headphones/K712PRO.html", desc: "开放式监听耳机", tags: ["硬件", "监听", "耳机", "开放", "奥地利"] }
                    ]
                },
                {
                    name: "声学处理",
                    desc: "吸音板、扩散体、低音陷阱",
                    sites: [
                        { name: "Auralex", url: "https://www.auralex.com", desc: "声学处理材料", tags: ["硬件", "声学", "吸音", "录音室", "美国"] },
                        { name: "Primacoustic", url: "https://primacoustic.com", desc: "专业声学处理", tags: ["硬件", "声学", "吸音", "扩散", "加拿大"] },
                        { name: "GIK Acoustics", url: "https://www.gikacoustics.com", desc: "定制声学面板", tags: ["硬件", "声学", "定制", "面板", "英国"] },
                        { name: "RealTraps", url: "https://realtraps.com", desc: "低音陷阱和扩散", tags: ["硬件", "声学", "低音陷阱", "扩散", "专业"] }
                    ]
                }
            ]
        },
        {
            name: "🎬 影视配乐 | Film Scoring",
            icon: "🎬",
            desc: "电影、游戏、广告配乐工具和音源",
            level: "advanced",
            subcategories: [
                {
                    name: "影视配乐音源",
                    desc: "电影和游戏配乐专用音源",
                    sites: [
                        { name: "Albion ONE", url: "https://www.spitfireaudio.com/albion-one", desc: "Spitfire旗舰管弦乐", tags: ["付费", "管弦乐", "电影", "旗舰", "Spitfire"] },
                        { name: "Hans Zimmer Strings", url: "https://www.spitfireaudio.com/hans-zimmer-strings", desc: "汉斯季默弦乐", tags: ["付费", "弦乐", "电影", "Hans Zimmer", "史诗"] },
                        { name: "Metropolis Ark", url: "https://www.orchestraltools.com/metropolis-ark", desc: "Orchestral Tools史诗管弦", tags: ["付费", "管弦乐", "史诗", "电影", "德国"] },
                        { name: "Jaeger", url: "https://www.audioimperia.com/jaeger", desc: "Audio Imperia现代管弦", tags: ["付费", "管弦乐", "现代", "电影", "预告片"] },
                        { name: "Symphony Series", url: "https://www.native-instruments.com/en/products/komplete/cinematic/symphony-series/", desc: "NI交响系列", tags: ["付费", "管弦乐", "交响", "NI", "综合"] },
                        { name: "Hollywood Orchestra", url: "https://www.soundsonline.com/hollywood-orchestra-opus-edition", desc: "EastWest好莱坞管弦", tags: ["付费", "管弦乐", "好莱坞", "电影", "经典"] },
                        { name: "LASS", url: "https://www.audiobro.com/lass", desc: "LA Scoring Strings", tags: ["付费", "弦乐", "电影", "好莱坞", "录音棚"] },
                        { name: "CineStrings", url: "https://cinesamples.com/cinestrings", desc: "Cinesamples弦乐系列", tags: ["付费", "弦乐", "电影", "好莱坞", "专业"] },
                        { name: "Berlin Strings", url: "https://www.orchestraltools.com/berlin-strings", desc: "Orchestral Tools柏林弦乐", tags: ["付费", "弦乐", "柏林", "电影", "欧洲"] },
                        { name: "CSS", url: "https://cinesamples.com/cinestrings-core", desc: "CineStrings Core", tags: ["付费", "弦乐", "电影", "核心", "好莱坞"] },
                        { name: "Afflatus", url: "https://www.strezov-sampling.com/afflatus", desc: "Strezov情感弦乐", tags: ["付费", "弦乐", "情感", "电影", "保加利亚"] },
                        { name: "Intimate Studio Strings", url: "https://8dio.com/8dio-instant-studio-series-studio-strings", desc: "8Dio亲密弦乐", tags: ["付费", "弦乐", "亲密", "电影", "小编制"] }
                    ]
                },
                {
                    name: "游戏音频中间件",
                    desc: "游戏音频集成工具",
                    sites: [
                        { name: "Wwise", url: "https://www.audiokinetic.com/products/wwise/", desc: "Audiokinetic游戏音频中间件", tags: ["付费", "游戏", "中间件", "行业标准", "交互"] },
                        { name: "FMOD", url: "https://www.fmod.com", desc: "游戏音频引擎", tags: ["付费", "游戏", "引擎", "音频", "交互"] },
                        { name: "Fabric", url: "https://www.tazman-audio.co.uk", desc: "Unity音频中间件", tags: ["付费", "游戏", "Unity", "中间件", "插件"] },
                        { name: "Elias", url: "https://www.elias.vision", desc: "自适应音乐引擎", tags: ["付费", "游戏", "自适应", "音乐", "交互"] },
                        { name: "ADX2", url: "https://www.criware.com", desc: "CRI Middleware音频工具", tags: ["付费", "游戏", "日本", "音频", "中间件"] },
                        { name: "GameSynth", url: "https://www.tsugipro.com/gamesynth", desc: "游戏音效设计工具", tags: ["付费", "游戏", "音效", "设计", "程序化"] }
                    ]
                },
                {
                    name: "预告片音效",
                    desc: "电影预告片和宣传片音效",
                    sites: [
                        { name: "Trailer Voices", url: "https://www.prosoundeffects.com", desc: "预告片人声", tags: ["付费", "预告片", "人声", "电影", "音效"] },
                        { name: "Designing Trailer", url: "https://www.boomlibrary.com", desc: "Boom Library预告片设计", tags: ["付费", "预告片", "设计", "电影", "Boom"] },
                        { name: "Hybrid Two", url: "https://hybridtwo.com", desc: "预告片音效库", tags: ["付费", "预告片", "音效", "电影", "现代"] },
                        { name: "SFX Cellar", url: "https://sfxcellar.com", desc: "电影音效资源", tags: ["付费", "音效", "电影", "资源", "库"] }
                    ]
                }
            ]
        },
        {
            name: "🎮 游戏音频 | Game Audio",
            icon: "🎮",
            desc: "游戏音效设计和音频实现工具",
            level: "advanced",
            subcategories: [
                {
                    name: "音效设计工具",
                    desc: "游戏音效创作软件",
                    sites: [
                        { name: "Reaper", url: "https://www.reaper.fm", desc: "游戏音效制作常用DAW", tags: ["付费", "游戏", "音效", "DAW", "轻量"] },
                        { name: "Sound Forge", url: "https://www.magix.com/us/music-production/sound-forge-pro/", desc: "音效编辑软件", tags: ["付费", "游戏", "音效", "编辑", "专业"] },
                        { name: "BaseHead", url: "https://baseheadinc.com", desc: "音效库管理工具", tags: ["付费", "游戏", "音效", "管理", "搜索"] },
                        { name: "Soundminer", url: "https://www.soundminer.com", desc: "专业音效库管理", tags: ["付费", "游戏", "音效", "管理", "行业标准"] },
                        { name: "AudioFinder", url: "https://icedaudio.com", desc: "Mac音效管理工具", tags: ["付费", "游戏", "音效", "Mac", "管理"] },
                        { name: "Reformer Pro", url: "https://www.krotosaudio.com/reformer-pro/", desc: "Krotos程序化音效", tags: ["付费", "游戏", "音效", "程序化", "设计"] },
                        { name: "Dehumaniser", url: "https://www.krotosaudio.com/dehumaniser-2/", desc: "怪物和生物音效", tags: ["付费", "游戏", "音效", "怪物", "生物"] },
                        { name: "Weaponiser", url: "https://www.krotosaudio.com/weaponiser/", desc: "武器音效设计", tags: ["付费", "游戏", "音效", "武器", "设计"] }
                    ]
                },
                {
                    name: "游戏音乐资源",
                    desc: "游戏配乐素材和工具",
                    sites: [
                        { name: "FMOD Studio", url: "https://www.fmod.com", desc: "游戏音频中间件", tags: ["付费", "游戏", "音频", "中间件", "FMOD"] },
                        { name: "Wwise", url: "https://www.audiokinetic.com", desc: "游戏音频引擎", tags: ["付费", "游戏", "音频", "引擎", "Audiokinetic"] },
                        { name: "Unity Audio", url: "https://unity.com", desc: "Unity内置音频系统", tags: ["免费", "游戏", "音频", "Unity", "引擎"] },
                        { name: "Unreal Audio", url: "https://www.unrealengine.com", desc: "虚幻引擎音频系统", tags: ["免费", "游戏", "音频", "虚幻", "引擎"] }
                    ]
                }
            ]
        },
        {
            name: "🔌 硬件设备 | Hardware",
            icon: "🔌",
            desc: "音频接口、合成器、录音设备",
            level: "intermediate",
            subcategories: [
                {
                    name: "音频接口",
                    desc: "专业音频接口设备",
                    sites: [
                        { name: "Universal Audio", url: "https://www.uaudio.com", desc: "UAD音频接口和插件", tags: ["硬件", "音频接口", "UAD", "专业", "高端"] },
                        { name: "Focusrite", url: "https://focusrite.com", desc: "Scarlett系列音频接口", tags: ["硬件", "音频接口", "Focusrite", "入门", "专业"] },
                        { name: "RME Audio", url: "https://www.rme-audio.de", desc: "德国高端音频接口", tags: ["硬件", "音频接口", "RME", "德国", "稳定"] },
                        { name: "Apogee", url: "https://www.apogeedigital.com", desc: "Mac高端音频接口", tags: ["硬件", "音频接口", "Apogee", "Mac", "音质"] },
                        { name: "PreSonus", url: "https://www.presonus.com", desc: "Studio系列音频接口", tags: ["硬件", "音频接口", "PreSonus", "性价比", "综合"] },
                        { name: "Steinberg UR", url: "https://www.steinberg.net/audio-interfaces/", desc: "Steinberg音频接口", tags: ["硬件", "音频接口", "Steinberg", "综合", "入门"] },
                        { name: "MOTU", url: "https://motu.com", desc: "MOTU音频接口", tags: ["硬件", "音频接口", "MOTU", "多通道", "专业"] },
                        { name: "Antelope Audio", url: "https://www.antelopeaudio.com", desc: "羚羊音频接口", tags: ["硬件", "音频接口", "Antelope", "时钟", "高端"] },
                        { name: "Lynx Studio", url: "https://lynxstudio.com", desc: "Lynx专业音频接口", tags: ["硬件", "音频接口", "Lynx", "专业", "高端"] },
                        { name: "SSL", url: "https://www.solidstatelogic.com", desc: "SSL音频接口和调音台", tags: ["硬件", "音频接口", "SSL", "调音台", "经典"] }
                    ]
                },
                {
                    name: "硬件合成器",
                    desc: "模拟和数字硬件合成器",
                    sites: [
                        { name: "Moog", url: "https://www.moogmusic.com", desc: "模拟合成器经典", tags: ["硬件", "合成器", "Moog", "模拟", "经典"] },
                        { name: "Sequential", url: "https://sequential.com", desc: "Dave Smith合成器", tags: ["硬件", "合成器", "Sequential", "模拟", "Prophet"] },
                        { name: "Roland", url: "https://www.roland.com", desc: "Roland合成器和鼓机", tags: ["硬件", "合成器", "Roland", "数字", "经典"] },
                        { name: "Korg", url: "https://www.korg.com", desc: "Korg合成器和工作站", tags: ["硬件", "合成器", "Korg", "工作站", "日本"] },
                        { name: "Novation", url: "https://novationmusic.com", desc: "Novation合成器和控制器", tags: ["硬件", "合成器", "Novation", "控制器", "Peak"] },
                        { name: "Arturia", url: "https://www.arturia.com", desc: "Arturia硬件合成器", tags: ["硬件", "合成器", "Arturia", "模拟", "Brute"] },
                        { name: "Behringer", url: "https://www.behringer.com", desc: "平价模拟合成器", tags: ["硬件", "合成器", "Behringer", "平价", "模拟"] },
                        { name: "Waldorf", url: "https://waldorf-music.com", desc: "德国合成器品牌", tags: ["硬件", "合成器", "Waldorf", "德国", "数字"] },
                        { name: "Nord", url: "https://www.nordkeyboards.com", desc: "Nord舞台键盘", tags: ["硬件", "合成器", "Nord", "舞台", "键盘"] },
                        { name: "Yamaha", url: "https://usa.yamaha.com/products/proaudio/index.html", desc: "Yamaha合成器和调音台", tags: ["硬件", "合成器", "Yamaha", "工作站", "Montage"] }
                    ]
                },
                {
                    name: "麦克风",
                    desc: "录音室和现场麦克风",
                    sites: [
                        { name: "Neumann", url: "https://www.neumann.com", desc: "高端录音室麦克风", tags: ["硬件", "麦克风", "Neumann", "录音室", "高端"] },
                        { name: "AKG", url: "https://www.akg.com", desc: "AKG专业麦克风", tags: ["硬件", "麦克风", "AKG", "专业", "奥地利"] },
                        { name: "Shure", url: "https://www.shure.com", desc: "Shure动圈和电容麦", tags: ["硬件", "麦克风", "Shure", "现场", "行业标准"] },
                        { name: "Rode", url: "https://www.rode.com", desc: "Rode电容麦克风", tags: ["硬件", "麦克风", "Rode", "性价比", "录音"] },
                        { name: "Audio-Technica", url: "https://www.audio-technica.com", desc: "铁三角麦克风", tags: ["硬件", "麦克风", "铁三角", "专业", "日本"] },
                        { name: "Sennheiser", url: "https://en-us.sennheiser.com", desc: "森海塞尔麦克风", tags: ["硬件", "麦克风", "Sennheiser", "德国", "专业"] },
                        { name: "Blue Microphones", url: "https://www.bluemic.com", desc: "Blue电容麦克风", tags: ["硬件", "麦克风", "Blue", "USB", "录音"] },
                        { name: "Warm Audio", url: "https://warmaudio.com", desc: "复古风格麦克风", tags: ["硬件", "麦克风", "Warm", "复古", "电子管"] }
                    ]
                },
                {
                    name: "MIDI控制器",
                    desc: "键盘、打击垫、控制器",
                    sites: [
                        { name: "Ableton Push 3", url: "https://www.ableton.com/push/", desc: "Ableton专用控制器", tags: ["硬件", "控制器", "Ableton", "集成", "演出"] },
                        { name: "Novation Launchkey", url: "https://novationmusic.com/launchkey", desc: "Novation键盘控制器", tags: ["硬件", "控制器", "Novation", "键盘", "入门"] },
                        { name: "Akai MPK", url: "https://www.akaipro.com/mpk-mini-mk3", desc: "Akai MIDI键盘", tags: ["硬件", "控制器", "Akai", "键盘", "便携"] },
                        { name: "Arturia KeyLab", url: "https://www.arturia.com/products/hybrid-synths/keylab-mkii", desc: "Arturia键盘控制器", tags: ["硬件", "控制器", "Arturia", "键盘", "综合"] },
                        { name: "NI Komplete Kontrol", url: "https://www.native-instruments.com/products/komplete/keyboards/", desc: "NI智能键盘", tags: ["硬件", "控制器", "NI", "键盘", "智能"] },
                        { name: "Roli Seaboard", url: "https://roli.com/products/seaboard", desc: "多维表现键盘", tags: ["硬件", "控制器", "Roli", "表现", "创新"] },
                        { name: "Expressive E Osmose", url: "https://www.expressivee.com/osmose", desc: "表现性MIDI键盘", tags: ["硬件", "控制器", "Expressive", "表现", "创新"] },
                        { name: "Sensel Morph", url: "https://morph.sensel.com", desc: "压力感应控制器", tags: ["硬件", "控制器", "Sensel", "压力", "多功能"] }
                    ]
                }
            ]
        },
        {
            name: "🆓 免费资源 | Free Resources",
            icon: "🆓",
            desc: "免费插件、音源、采样和工具",
            level: "all",
            subcategories: [
                {
                    name: "免费VST插件",
                    desc: "免费虚拟乐器和效果器",
                    sites: [
                        { name: "Vital", url: "https://vital.audio", desc: "免费波表合成器", tags: ["免费", "VST", "合成器", "波表", "现代"] },
                        { name: "Surge XT", url: "https://surge-synthesizer.github.io", desc: "开源混合合成器", tags: ["免费", "VST", "合成器", "开源", "跨平台"] },
                        { name: "Dexed", url: "https://asb2m10.github.io/dexed/", desc: "免费DX7模拟", tags: ["免费", "VST", "合成器", "FM", "复古"] },
                        { name: "Helm", url: "https://tytel.org/helm", desc: "开源合成器", tags: ["免费", "VST", "合成器", "开源", "跨平台"] },
                        { name: "Tyrell N6", url: "https://u-he.com/products/tyrelln6", desc: "U-he免费合成器", tags: ["免费", "VST", "合成器", "U-he", "入门"] },
                        { name: "TAL-Noisemaker", url: "https://tal-software.com/products/tal-noisemaker", desc: "免费虚拟模拟合成器", tags: ["免费", "VST", "合成器", "模拟", "TAL"] },
                        { name: "VCV Rack", url: "https://vcvrack.com", desc: "免费模块化合成器", tags: ["免费", "VST", "合成器", "模块化", "Eurorack"] },
                        { name: "OB-Xd", url: "https://www.discodsp.com/obxd/", desc: "免费Oberheim模拟", tags: ["免费", "VST", "合成器", "模拟", "Oberheim"] },
                        { name: "Piano One", url: "https://www.soundmagic.cn/piano-one", desc: "免费钢琴音源", tags: ["免费", "VST", "钢琴", "中国", "采样"] },
                        { name: "Keyzone Classic", url: "https://bitsonic.eu/audio-plugins/keyzone-classic.html", desc: "免费钢琴音源", tags: ["免费", "VST", "钢琴", "键盘", "简单"] },
                        { name: "Spitfire LABS", url: "https://labs.spitfireaudio.com", desc: "免费高品质乐器", tags: ["免费", "VST", "乐器", "高品质", "Spitfire"] },
                        { name: "BBC SO Discover", url: "https://www.spitfireaudio.com/bbc-symphony-orchestra-discover", desc: "免费BBC管弦乐", tags: ["免费", "VST", "管弦乐", "BBC", "专业"] },
                        { name: "Komplete Start", url: "https://www.native-instruments.com/products/komplete/bundles/komplete-start/", desc: "NI免费音源包", tags: ["免费", "VST", "音源", "NI", "综合"] },
                        { name: "Ample Guitar M Lite", url: "https://www.amplesound.net/en/pro-pd.asp?id=8", desc: "免费吉他音源", tags: ["免费", "VST", "吉他", "中国", "Ample"] },
                        { name: "MT Power Drum Kit", url: "https://www.powerdrumkit.com", desc: "免费鼓音源", tags: ["免费", "VST", "鼓", "摇滚", "流行"] }
                    ]
                },
                {
                    name: "免费效果器",
                    desc: "免费混音效果器插件",
                    sites: [
                        { name: "Valhalla Supermassive", url: "https://valhalladsp.com/shop/reverb/valhalla-supermassive/", desc: "免费混响延迟", tags: ["免费", "效果器", "混响", "延迟", "Valhalla"] },
                        { name: "TDR Nova", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费动态均衡", tags: ["免费", "效果器", "均衡", "动态", "TDR"] },
                        { name: "TDR Kotelnikov", url: "https://www.tokyodawn.net/tokyo-dawn-labs/", desc: "免费母带压缩", tags: ["免费", "效果器", "压缩", "母带", "TDR"] },
                        { name: "Voxengo SPAN", url: "https://www.voxengo.com/product/span/", desc: "免费频谱分析", tags: ["免费", "效果器", "分析", "频谱", "必备"] },
                        { name: "Youlean Loudness Meter", url: "https://youlean.co/youlean-loudness-meter/", desc: "免费响度表", tags: ["免费", "效果器", "响度", "测量", "标准"] },
                        { name: "MeldaProduction Free", url: "https://www.meldaproduction.com", desc: "免费效果器套装", tags: ["免费", "效果器", "套装", "多样", "质量"] },
                        { name: "Analog Obsession", url: "https://www.patreon.com/analogobsession", desc: "免费模拟风格插件", tags: ["免费", "效果器", "模拟", "均衡", "压缩"] },
                        { name: "Softube Saturation Knob", url: "https://www.softube.com/saturation-knob", desc: "免费饱和效果", tags: ["免费", "效果器", "饱和", "简单", "推荐"] },
                        { name: "OTT", url: "https://xferrecords.com/freeware", desc: "免费多段压缩", tags: ["免费", "效果器", "压缩", "多段", "Xfer"] },
                        { name: "OrilRiver", url: "https://www.kvraudio.com/product/orilriver-by-denis-tihanov", desc: "免费混响", tags: ["免费", "效果器", "混响", "算法", "质量"] },
                        { name: "Sanford Reverb", url: "https://www.kvraudio.com/product/sanford-reverb-by-sanford-sound-design", desc: "免费混响", tags: ["免费", "效果器", "混响", "算法", "音色好"] },
                        { name: "Wider", url: "https://polyversemusic.com/products/wider/", desc: "免费立体声扩展", tags: ["免费", "效果器", "立体声", "扩展", "声场"] },
                        { name: "Chow Tape Model", url: "https://github.com/jatinchowdhury18/ChowTapeModel", desc: "免费磁带模拟", tags: ["免费", "效果器", "磁带", "模拟", "GitHub"] },
                        { name: "Klanghelm IVGI", url: "https://klanghelm.com/contents/products/IVGI", desc: "免费饱和", tags: ["免费", "效果器", "饱和", "自动", "德国"] },
                        { name: "SGA1566", url: "https://www.shatteredglassaudio.com", desc: "免费电子管前级", tags: ["免费", "效果器", "电子管", "前级", "温暖"] }
                    ]
                },
                {
                    name: "免费采样和Loop",
                    desc: "免费采样包和循环素材",
                    sites: [
                        { name: "Freesound", url: "https://freesound.org", desc: "免费音效社区", tags: ["免费", "采样", "音效", "社区", "知识共享"] },
                        { name: "Looperman", url: "https://www.looperman.com", desc: "免费循环社区", tags: ["免费", "采样", "循环", "社区", "用户上传"] },
                        { name: "BBC Sound Effects", url: "https://sound-effects.bbcrewind.co.uk", desc: "BBC音效库", tags: ["免费", "采样", "音效", "BBC", "广播"] },
                        { name: "NASA Audio", url: "https://archive.org/details/nasa", desc: "NASA太空音效", tags: ["免费", "采样", "音效", "NASA", "太空"] },
                        { name: "SampleSwap", url: "https://sampleswap.org", desc: "免费采样和Loop", tags: ["免费", "采样", "Loop", "多样", "免费"] },
                        { name: "Bedroom Producers Blog", url: "https://bedroomproducersblog.com/free-samples/", desc: "免费采样合集", tags: ["免费", "采样", "合集", "博客", "定期更新"] },
                        { name: "Cymatics Free", url: "https://cymatics.fm/collections/free-downloads", desc: "Cymatics免费包", tags: ["免费", "采样", "现代", "热门", "Cymatics"] },
                        { name: "Ghosthack Free", url: "https://www.ghosthack.de/free-samples/", desc: "Ghosthack免费采样", tags: ["免费", "采样", "音效", "电子", "Ghosthack"] },
                        { name: "Zapsplat", url: "https://www.zapsplat.com", desc: "免费音效库", tags: ["免费", "采样", "音效", "在线", "大量"] },
                        { name: "Incompetech", url: "https://incompetech.com/music/royalty-free/music.html", desc: "免版税音乐", tags: ["免费", "采样", "音乐", "免版税", "视频"] }
                    ]
                },
                {
                    name: "免费DAW和工具",
                    desc: "免费音乐制作软件",
                    sites: [
                        { name: "Cakewalk", url: "https://www.bandlab.com/products/cakewalk", desc: "免费专业DAW", tags: ["免费", "DAW", "Windows", "专业", "原SONAR"] },
                        { name: "BandLab", url: "https://www.bandlab.com", desc: "在线免费DAW", tags: ["免费", "DAW", "在线", "协作", "跨平台"] },
                        { name: "LMMS", url: "https://lmms.io", desc: "开源DAW", tags: ["免费", "DAW", "开源", "跨平台", "Linux"] },
                        { name: "Ardour", url: "https://ardour.org", desc: "开源专业DAW", tags: ["免费", "DAW", "开源", "专业", "跨平台"] },
                        { name: "Waveform Free", url: "https://www.tracktion.com/products/waveform", desc: "免费DAW", tags: ["免费", "DAW", "无限轨道", "专业", "功能完整"] },
                        { name: "Audacity", url: "https://www.audacityteam.org", desc: "免费音频编辑器", tags: ["免费", "工具", "音频编辑", "开源", "必备"] },
                        { name: "MuseScore", url: "https://musescore.org", desc: "免费打谱软件", tags: ["免费", "工具", "打谱", "开源", "推荐"] },
                        { name: "Reaper", url: "https://www.reaper.fm", desc: "廉价强大DAW", tags: ["免费版", "DAW", "轻量", "强大", "可定制"] },
                        { name: "Mixxx", url: "https://mixxx.org", desc: "免费DJ软件", tags: ["免费", "工具", "DJ", "开源", "跨平台"] },
                        { name: "Ocenaudio", url: "https://www.ocenaudio.com", desc: "免费音频编辑器", tags: ["免费", "工具", "音频编辑", "易用", "实时"] }
                    ]
                }
            ]
        },
        {
            name: "🎵 音乐理论 | Music Theory",
            icon: "🎵",
            desc: "乐理学习、和弦、音阶工具",
            level: "all",
            subcategories: [
                {
                    name: "乐理学习",
                    desc: "音乐理论和作曲学习资源",
                    sites: [
                        { name: "Music Theory.net", url: "https://www.musictheory.net", desc: "互动乐理学习", tags: ["免费", "乐理", "互动", "练习", "教育"] },
                        { name: "Teoria", url: "https://www.teoria.com", desc: "音乐理论教程", tags: ["免费", "乐理", "教程", "练习", "教育"] },
                        { name: "Lightnote", url: "https://www.lightnote.co", desc: "可视化音乐理论", tags: ["免费", "乐理", "可视化", "现代", "互动"] },
                        { name: "Open Music Theory", url: "https://openmusictheory.com", desc: "开放音乐理论教材", tags: ["免费", "乐理", "开源", "教材", "学术"] },
                        { name: "Hooktheory", url: "https://www.hooktheory.com", desc: "流行音乐和弦分析", tags: ["免费版", "乐理", "和弦", "流行", "分析"] },
                        { name: "Ableton Learning Music", url: "https://learningmusic.ableton.com", desc: "Ableton音乐基础", tags: ["免费", "乐理", "基础", "Ableton", "入门"] },
                        { name: "Tone.js Examples", url: "https://tonejs.github.io/examples/", desc: "Web音频编程示例", tags: ["免费", "乐理", "编程", "合成器", "开源"] },
                        { name: "Chrome Music Lab", url: "https://musiclab.chromeexperiments.com", desc: "Google音乐实验", tags: ["免费", "乐理", "互动", "可视化", "Google"] }
                    ]
                },
                {
                    name: "和弦与音阶工具",
                    desc: "和弦进行和音阶参考工具",
                    sites: [
                        { name: "AutoChords", url: "https://autochords.com", desc: "自动和弦生成", tags: ["免费", "和弦", "生成", "在线", "简单"] },
                        { name: "Chordify", url: "https://chordify.net", desc: "歌曲和弦提取", tags: ["免费版", "和弦", "提取", "在线", "学习"] },
                        { name: "Hookpad", url: "https://www.hooktheory.com/hookpad", desc: "在线和弦创作", tags: ["在线", "和弦", "创作", "直观", "流行"] },
                        { name: "Scaler", url: "https://www.pluginboutique.com/products/2606-Scaler-2", desc: "和弦和音阶插件", tags: ["付费", "和弦", "音阶", "插件", "创作"] },
                        { name: "Captain Chords", url: "https://captainplugins.com", desc: "Mixed In Key和弦插件", tags: ["付费", "和弦", "插件", "创作", "Mixed In Key"] },
                        { name: "Instachord", url: "https://www.waproduction.com", desc: "和弦进行工具", tags: ["付费", "和弦", "进行", "插件", "EDM"] },
                        { name: "Chordz", url: "https://www.codefn42.com/chordz/", desc: "免费和弦插件", tags: ["免费", "和弦", "插件", "VST", "简单"] },
                        { name: "RandArp", url: "https://www.codefn42.com/randarp/", desc: "免费琶音器", tags: ["免费", "琶音", "插件", "VST", "MIDI"] }
                    ]
                },
                {
                    name: "练耳工具",
                    desc: "听力训练和视唱练耳",
                    sites: [
                        { name: "EarMaster", url: "https://www.earmaster.com", desc: "视唱练耳软件", tags: ["付费", "练耳", "视唱", "练习", "专业"] },
                        { name: "Perfect Ear", url: "https://www.perfectear.app", desc: "综合音乐理论训练", tags: ["免费版", "练耳", "乐理", "iOS", "Android"] },
                        { name: "Functional Ear Trainer", url: "https://www.miles.be", desc: "功能性耳朵训练", tags: ["免费", "练耳", "功能", "iOS", "Android"] },
                        { name: "ToneScholar", url: "https://tonescholar.com", desc: "在线练耳训练", tags: ["免费", "练耳", "在线", "练习", "互动"] },
                        { name: "Intervals", url: "https://www.musictheory.net/exercises/intervals", desc: "音程练习", tags: ["免费", "练耳", "音程", "在线", "练习"] },
                        { name: "Chord Ear Training", url: "https://www.musictheory.net/exercises/chords", desc: "和弦听辨", tags: ["免费", "练耳", "和弦", "在线", "练习"] }
                    ]
                }
            ]
        },
        {
            name: "📱 移动应用 | Mobile Apps",
            icon: "📱",
            desc: "iOS和Android音乐制作应用",
            level: "all",
            subcategories: [
                {
                    name: "iOS音乐制作",
                    desc: "iPhone和iPad音乐应用",
                    sites: [
                        { name: "GarageBand iOS", url: "https://apps.apple.com/us/app/garageband/id408709785", desc: "iOS版GarageBand", tags: ["免费", "iOS", "DAW", "Apple", "入门"] },
                        { name: "FL Studio Mobile", url: "https://www.image-line.com/fl-studio-mobile/", desc: "FL Studio移动版", tags: ["付费", "iOS", "Android", "DAW", "FL"] },
                        { name: "KORG Gadget", url: "https://www.korg.com/us/products/software/korg_gadget/", desc: "移动音乐制作套件", tags: ["付费", "iOS", "合成器", "KORG", "综合"] },
                        { name: "AUM", url: "https://kymatica.com/auv3/aum", desc: "iOS音频混音器", tags: ["付费", "iOS", "宿主", "AU", "专业"] },
                        { name: "BeatMaker 3", url: "https://intua.net/beatmaker-3/", desc: "iOS专业采样", tags: ["付费", "iOS", "采样", "专业", "制作"] },
                        { name: "Cubasis 3", url: "https://www.steinberg.net/cubasis/", desc: "Steinberg移动DAW", tags: ["付费", "iOS", "Android", "DAW", "Steinberg"] },
                        { name: "Auxy", url: "https://auxy.co", desc: "现代移动节拍制作", tags: ["免费版", "iOS", "电子", "现代", "简单"] },
                        { name: "Figure", url: "https://www.figure.app", desc: "Propellerhead移动音乐", tags: ["免费", "iOS", "Android", "简单", "快速"] },
                        { name: "Medly", url: "https://medlylabs.com", desc: "iOS音乐制作器", tags: ["免费版", "iOS", "易用", "入门", "现代"] },
                        { name: "Groovebox", url: "https://novationmusic.com/software/groovebox", desc: "Novation移动节拍", tags: ["免费", "iOS", "节拍", "Novation", "电子"] },
                        { name: "iMachine", url: "https://www.native-instruments.com/products/traktor/dj-hardware/imachine/", desc: "NI便携鼓机", tags: ["付费", "iOS", "鼓机", "NI", "便携"] },
                        { name: "Impaktor", url: "https://www.beepstreet.com/impaktor", desc: "iOS物理建模鼓", tags: ["付费", "iOS", "鼓", "建模", "创意"] }
                    ]
                },
                {
                    name: "Android音乐制作",
                    desc: "Android平台音乐应用",
                    sites: [
                        { name: "FL Studio Mobile", url: "https://www.image-line.com/fl-studio-mobile/", desc: "FL Studio安卓版", tags: ["付费", "Android", "DAW", "FL", "制作"] },
                        { name: "Caustic 3", url: "https://singlecellsoftware.com/caustic", desc: "Android合成器", tags: ["免费", "Android", "合成器", "移动", "制作"] },
                        { name: "n-Track Studio", url: "https://ntrack.com", desc: "跨平台移动DAW", tags: ["付费", "Android", "iOS", "DAW", "多轨"] },
                        { name: "BandLab", url: "https://www.bandlab.com", desc: "在线制作和协作", tags: ["免费", "Android", "iOS", "在线", "协作"] },
                        { name: "Walk Band", url: "https://walkband.app", desc: "Android音乐工作室", tags: ["免费", "Android", "工作室", "多乐器", "入门"] },
                        { name: "Groove Mixer", url: "https://groovemixer.com", desc: "Android节拍制作", tags: ["免费", "Android", "节拍", "鼓机", "简单"] }
                    ]
                },
                {
                    name: "移动乐器应用",
                    desc: "手机和平板乐器模拟",
                    sites: [
                        { name: "Simply Piano", url: "https://www.joytunes.com/simply-piano", desc: "AI钢琴学习", tags: ["付费", "iOS", "Android", "钢琴", "AI"] },
                        { name: "Yousician", url: "https://yousician.com", desc: "游戏化乐器学习", tags: ["免费版", "iOS", "Android", "乐器", "学习"] },
                        { name: "Flowkey", url: "https://www.flowkey.com", desc: "在线钢琴学习", tags: ["免费版", "在线", "钢琴", "互动", "学习"] },
                        { name: "Skoove", url: "https://www.skoove.com", desc: "AI钢琴课程", tags: ["付费", "在线", "钢琴", "AI", "课程"] },
                        { name: "Melodics", url: "https://melodics.com", desc: "打击垫和键盘练习", tags: ["免费版", "Windows", "Mac", "练习", "打击垫"] },
                        { name: "GuitarTuna", url: "https://www.guitartuna.com", desc: "吉他调音APP", tags: ["免费版", "iOS", "Android", "调音", "吉他"] },
                        { name: "TonalEnergy Tuner", url: "https://tonalenergy.com", desc: "全能调音节拍器", tags: ["付费", "iOS", "Android", "调音", "节拍器"] }
                    ]
                }
            ]
        },
        {
            name: "🎹 编曲辅助 | Arrangement",
            icon: "🎹",
            desc: "编曲工具、MIDI素材、创作辅助",
            level: "intermediate",
            subcategories: [
                {
                    name: "MIDI素材库",
                    desc: "MIDI循环和编曲素材",
                    sites: [
                        { name: "Unison MIDI Pack", url: "https://unison.audio", desc: "MIDI和弦包", tags: ["付费", "MIDI", "和弦", "进行", "EDM"] },
                        { name: "Cymatics MIDI", url: "https://cymatics.fm", desc: "Cymatics MIDI包", tags: ["付费", "MIDI", "采样", "现代", "热门"] },
                        { name: "W.A. Production MIDI", url: "https://www.waproduction.com", desc: "W.A. Production MIDI", tags: ["付费", "MIDI", "进行", "插件", "EDM"] },
                        { name: "ProducerSpot MIDI", url: "https://producerspot.com", desc: "免费MIDI文件", tags: ["免费", "MIDI", "文件", "下载", "多样"] },
                        { name: "Free MIDI", url: "https://freemidi.org", desc: "免费MIDI下载", tags: ["免费", "MIDI", "下载", "歌曲", "流行"] },
                        { name: "MIDI World", url: "https://www.midiworld.com", desc: "经典MIDI文件", tags: ["免费", "MIDI", "经典", "古典", "下载"] },
                        { name: "BitMidi", url: "https://bitmidi.com", desc: "在线MIDI播放", tags: ["免费", "MIDI", "在线", "播放", "下载"] }
                    ]
                },
                {
                    name: "编曲参考工具",
                    desc: "歌曲结构和编曲分析",
                    sites: [
                        { name: "Hooktheory Trends", url: "https://www.hooktheory.com/trends", desc: "流行歌曲和弦分析", tags: ["免费", "编曲", "和弦", "流行", "分析"] },
                        { name: "Musicstax", url: "https://musicstax.com", desc: "歌曲音乐特征分析", tags: ["免费", "编曲", "分析", "Spotify", "数据"] },
                        { name: "Tunebat", url: "https://tunebat.com", desc: "歌曲调性和BPM查询", tags: ["免费", "编曲", "调性", "BPM", "查询"] },
                        { name: "Song Key BPM", url: "https://songkeybpm.com", desc: "歌曲调性BPM数据库", tags: ["免费", "编曲", "调性", "BPM", "数据库"] },
                        { name: "Get Song Key", url: "https://getsongkey.com", desc: "歌曲调性查询", tags: ["免费", "编曲", "调性", "查询", "简单"] },
                        { name: "AudioKeychain", url: "https://audiokeychain.com", desc: "歌曲调性检测", tags: ["免费", "编曲", "调性", "检测", "上传"] }
                    ]
                },
                {
                    name: "创作灵感工具",
                    desc: "激发创作灵感的工具",
                    sites: [
                        { name: "Splice Sounds", url: "https://splice.com/sounds", desc: "在线采样库", tags: ["订阅", "采样", "灵感", "最大", "流行"] },
                        { name: "Output Arcade", url: "https://output.com/products/arcade", desc: "云端采样平台", tags: ["订阅", "采样", "云端", "创意", "推荐"] },
                        { name: "Captain Plugins", url: "https://captainplugins.com", desc: "Mixed In Key创作套件", tags: ["付费", "创作", "和弦", "旋律", "鼓"] },
                        { name: "Scaler 2", url: "https://www.pluginboutique.com/products/2606-Scaler-2", desc: "和弦创作插件", tags: ["付费", "创作", "和弦", "音阶", "插件"] },
                        { name: "Liquid Music", url: "https://www.wavedna.com/liquid-music", desc: "旋律和和弦工具", tags: ["付费", "创作", "旋律", "和弦", "可视化"] },
                        { name: "Odesi", url: "https://odesi.mixedinkey.com", desc: "Mixed In Key创作软件", tags: ["付费", "创作", "和弦", "旋律", "进行"] },
                        { name: "Humtap", url: "https://www.humtap.com", desc: "哼唱生成伴奏", tags: ["免费版", "创作", "哼唱", "伴奏", "移动"] },
                        { name: "HumBeatz", url: "https://www.uvi.net/hum-beatz/", desc: "哼唱转鼓点", tags: ["付费", "创作", "哼唱", "鼓", "UVI"] }
                    ]
                }
            ]
        }
    ]
};
