// 六张网项目追踪数据（初始数据：2026-10-23 采集自公开招标/公告/新闻，来源均已标注）
// 更新方式：新增对象到对应 networks[].projects
var LIUZHANGWANG_DATA = {
  "updated": "2026-10-25",
  "note": "数据为公开渠道采集的代表性项目，非完整清单；状态与金额以公告为准",
  "networks": [
    {
      "id": "水网",
      "name": "水网",
      "desc": "国家水网重大工程（‘十五五’加快建设现代化水网）",
      "projects": [
        {
          "name": "青海柴达木盆地水资源配置一期工程",
          "province": "青海省", "city": "海西",
          "status": "在建（预计12月通水）",
          "companyRole": "建设单位", "company": "青海海西水网建设开发有限公司",
          "amount": "", "date": "2026-05",
          "detail": "直径2.2米输水管道，焊接/防腐机器人施工，支撑盐湖产业与能源用水。",
          "source": "人民日报/水利部", "url": "http://www.mwr.gov.cn/xw/mtzs/rmrb/202605/t20260527_2112321.html"
        },
        {
          "name": "太浦河后续一期工程",
          "province": "长三角（苏浙沪）", "city": "太浦河流域",
          "status": "施工准备启动",
          "companyRole": "建设主管", "company": "水利部太湖流域管理局",
          "amount": "", "date": "2026-03",
          "detail": "提高河道行洪能力、改善滨河岸线生态环境。",
          "source": "水利部", "url": "http://www.mwr.gov.cn/xw/mtzs/rmrb/202605/t20260527_2112321.html"
        },
        {
          "name": "镜岭水库",
          "province": "浙江省", "city": "浙东",
          "status": "在建",
          "companyRole": "建设单位", "company": "",
          "amount": "累计投资66.11亿元", "date": "2026-03",
          "detail": "大坝主体混凝土浇筑攻坚，属国家水网重大工程。",
          "source": "水利部", "url": "http://www.mwr.gov.cn/xw/mtzs/rmrb/202605/t20260527_2112321.html"
        },
        {
          "name": "准东将军庙兵准供水项目工程总承包",
          "province": "新疆维吾尔自治区", "city": "准东（昌吉州）",
          "status": "中标候选人公示",
          "companyRole": "中标候选人（施工+设计联合体）", "company": "福建省水利水电工程局有限公司（施工）+ 新疆兵团勘测设计院集团股份有限公司（设计）",
          "amount": "约1.099亿元", "date": "2026-10",
          "detail": "准东将军庙兵准供水工程总承包，总工期233日历天，计划2026-10-10开工、2027-05-30完工，保障兵团与准东区域供水。",
          "source": "新疆维吾尔自治区水利厅", "url": "https://slt.xinjiang.gov.cn/xjslt/c114436/202609/fe42d26d58094f10893e0fbbe875bf52.shtml"
        }
      ]
    },
    {
      "id": "新型电网",
      "name": "新型电网",
      "desc": "特高压/输变电等电网重大工程",
      "projects": [
        {
          "name": "陕西～河南±800kV特高压直流输电工程",
          "province": "陕西/河南", "city": "",
          "status": "设备中标",
          "companyRole": "中标供应商", "company": "金冠电气（含南阳金冠智能开关）",
          "amount": "7481.51万元", "date": "2026-07",
          "detail": "避雷器产品一个标包3392万元；输变电避雷器及开关柜2个标包4089.51万元。",
          "source": "凤凰网/每经", "url": "https://news.ifeng.com/c/8ut88J4Q5nP"
        },
        {
          "name": "国家电网2026年特高压项目（换流阀等设备）",
          "province": "全国（跨区）", "city": "",
          "status": "设备中标",
          "companyRole": "中标供应商", "company": "许继电气",
          "amount": "约12.45亿元", "date": "2026-07",
          "detail": "含换流阀11.28亿元、测量装置9613.71万元、开关柜1881万元、二次设备247.14万元。",
          "source": "腾讯新闻", "url": "https://news.qq.com/rain/a/20260722A0CTX2"
        },
        {
          "name": "藏东南至粤港澳大湾区±800kV特高压直流输电工程",
          "province": "西藏→粤港澳大湾区", "city": "",
          "status": "设备中标",
          "companyRole": "中标供应商", "company": "神马电力",
          "amount": "3750.38万元", "date": "2026-06",
          "detail": "支柱绝缘子分标中最大标包。",
          "source": "人民财讯", "url": "https://egs.stcn.com/news/detail/2301787.html"
        },
        {
          "name": "国网2026年输变电/特高压设备采购",
          "province": "全国", "city": "",
          "status": "设备中标",
          "companyRole": "中标供应商", "company": "平高电气",
          "amount": "约18.18亿元", "date": "2026-07",
          "detail": "含子公司、合营公司，约占2025年营收14.53%。",
          "source": "腾讯新闻", "url": "https://news.qq.com/rain/a/20260721A09KYP"
        },
        {
          "name": "国家电网2026年输变电项目第四次招标（电缆/导地线）",
          "province": "全国", "city": "",
          "status": "中标公示",
          "companyRole": "中标供应商", "company": "汉缆股份（青岛汉缆及子公司焦作汉河电缆）",
          "amount": "约6.34亿元", "date": "2026-09",
          "detail": "变电设备（含电缆）电缆及附件5个包+导地线4个包；子公司焦作汉河电缆另中标2个包，约占2025年营收6.09%。",
          "source": "新浪财经", "url": "https://finance.sina.com.cn/stock/aigc/zdht/2026-09-08/doc-inircews9272508.shtml"
        }
      ]
    },
    {
      "id": "算力网",
      "name": "算力网",
      "desc": "全国一体化算力网 / 东数西算数据基础设施建设",
      "projects": [
        {
          "name": "河北一体化算力网·廊坊两大数据中心",
          "province": "河北省", "city": "廊坊",
          "status": "启动实施",
          "companyRole": "运营方", "company": "万国数据",
          "amount": "", "date": "2026-09",
          "detail": "提升京津冀算力供给，年均PUE降至1.21，国家级绿色数据中心。",
          "source": "中国财经网/算力大会", "url": "https://www.cfen.com.cn/cy/cyqygc/202609/t20260916_914394.html"
        },
        {
          "name": "京东云河南鹤壁数据中心（一期）",
          "province": "河南省", "city": "鹤壁",
          "status": "2026年正式投运",
          "companyRole": "运营方", "company": "京东云",
          "amount": "", "date": "2026",
          "detail": "50P通用算力，服务华中智能供应链与物流调度。",
          "source": "知乎专栏盘点", "url": "https://zhuanlan.zhihu.com/p/1996896252198155236"
        },
        {
          "name": "百度智能云山西阳泉飞桨智算中心（二期扩容）",
          "province": "山西省", "city": "阳泉",
          "status": "扩容投产",
          "companyRole": "运营方", "company": "百度智能云",
          "amount": "", "date": "2026",
          "detail": "新增80P算力，聚焦自动驾驶仿真与工业视觉质检。",
          "source": "知乎专栏盘点", "url": "https://zhuanlan.zhihu.com/p/1996896252198155236"
        },
        {
          "name": "中国算力平台（贵州）",
          "province": "贵州省", "city": "",
          "status": "建成上线",
          "companyRole": "平台接入方", "company": "贵州省通信管理局牵头（华为云等参与直连）",
          "amount": "", "date": "2026-06",
          "detail": "2026年全国首批接入省份，实现算力数据自动化采集上报。",
          "source": "贵州发改委", "url": "https://drc.guizhou.gov.cn/xwzx/zwyw/202606/t20260624_90549693.html"
        },
        {
          "name": "粤港澳大湾区电算协同一体化智算中心算力基础设施项目（一期）",
          "province": "广东省", "city": "粤港澳大湾区",
          "status": "获项目备案（2026-10-15）",
          "companyRole": "建设单位", "company": "广东舜通大数据产业有限公司",
          "amount": "总投资24.75亿元", "date": "2026-10",
          "detail": "建设算力中心、动力中心、运维楼及配套设施，IT负荷82.5MW（3.3万标准机架），起止年限2026-10至2028-06。",
          "source": "网易（云头条）", "url": "https://www.163.com/dy/article/L9A4R0QE0511D6RL.html"
        }
      ]
    },
    {
      "id": "新一代通信网",
      "name": "新一代通信网",
      "desc": "5G/5G-A及新一代通信基础设施建设",
      "projects": [
        {
          "name": "中国电信海南公司5G机卡绑定功能建设工程（软件采购）",
          "province": "海南省", "city": "",
          "status": "直接采购成交",
          "companyRole": "中标供应商", "company": "中兴通讯",
          "amount": "", "date": "2026-08",
          "detail": "采购方：中国电信海南分公司，直接采购公示。",
          "source": "证券之星/天眼查", "url": "https://stock.stockstar.com/RB2026080600018372.shtml"
        },
        {
          "name": "2026年度第十二批电信普遍服务项目",
          "province": "全国（多省）", "city": "",
          "status": "中标结果公告",
          "companyRole": "采购方", "company": "（详见公告）",
          "amount": "", "date": "2026-07",
          "detail": "电信普遍服务，覆盖农村及偏远地区通信建设。",
          "source": "中国政府采购网", "url": "http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202607/t20260703_26868284.htm"
        },
        {
          "name": "中国移动黑龙江2026-2027年无线网多载频功放基站放大拉远系统采购",
          "province": "黑龙江省", "city": "",
          "status": "中标候选人公示（2026-09-24）",
          "companyRole": "中标供应商", "company": "京信网络（70%份额）、中信科移动（20%）、中国移动紫金（江苏）创新研究院（10%）",
          "amount": "京信网络约2775.34万元（含税预算3405.75万元）", "date": "2026-09",
          "detail": "采购1260套（5G一体化822套、分布式438套）多载频功放基站放大拉远系统，京信网络连续两年居首。",
          "source": "新浪财经", "url": "https://finance.sina.com.cn/wm/2026-10-13/doc-inivasea0537256.shtml"
        }
      ]
    },
    {
      "id": "城市地下管网",
      "name": "城市地下管网",
      "desc": "地下管网管廊及市政基础设施设备更新",
      "projects": [
        {
          "name": "城市地下管网管廊及市政基础设施设备更新（2026实施情况评估）",
          "province": "全国", "city": "",
          "status": "中标",
          "companyRole": "中标供应商", "company": "北京城建设计发展集团等联合体",
          "amount": "220万元", "date": "2026-04",
          "detail": "住建部牵头项目，联合体含中国城市建设研究院、北京建筑大学。",
          "source": "中国政府采购网", "url": "http://www.ccgp.gov.cn/cggg/zygg/zbgg/202604/t20260420_26428587.htm"
        },
        {
          "name": "淮北市城市地下管网和综合管廊建设改造实施方案修编",
          "province": "安徽省", "city": "淮北",
          "status": "成交",
          "companyRole": "采购方", "company": "（方案修编服务项目）",
          "amount": "", "date": "2026",
          "detail": "城市地下管网管廊“两重”建设项目支撑。",
          "source": "淮北住建局", "url": "https://hbzjj.huaibei.gov.cn/xwzx/tzgg/58053777.html"
        },
        {
          "name": "江山经开区江东新区地下管网及综合管廊工程（聚兴侧挡土墙及便道）",
          "province": "浙江省", "city": "衢州·江山",
          "status": "中标结果公告",
          "companyRole": "招标人", "company": "江山市联兴发展有限公司",
          "amount": "", "date": "2026-06",
          "detail": "基础设施配套及有机更新项目子项。",
          "source": "衢州市公共资源交易系统", "url": "https://ggzy.qz.gov.cn/col/col1229683630/art/2026/art_9caec4146c344c5e84b3ef397a65ea64.html"
        },
        {
          "name": "2026年西渡街道雨污水管网改造工程（建设管理费）",
          "province": "上海市", "city": "奉贤区·西渡",
          "status": "中标（成交）公告",
          "companyRole": "采购单位", "company": "上海市奉贤区西渡街道城市建设管理事务中心",
          "amount": "总中标金额126.56万元", "date": "2026-10",
          "detail": "雨污水管网改造工程建设管理费服务项目中标（成交）。",
          "source": "中国政府采购网", "url": "http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202610/t20261009_27450036.htm"
        }
      ]
    },
    {
      "id": "物流网",
      "name": "物流网",
      "desc": "国家物流枢纽建设",
      "projects": [
        {
          "name": "重庆长寿生产服务型国家物流枢纽·液体货物铁路分拨中心",
          "province": "重庆市", "city": "长寿",
          "status": "监理中标公示",
          "companyRole": "项目主体", "company": "",
          "amount": "", "date": "2026-06",
          "detail": "生产服务型国家物流枢纽配套工程。",
          "source": "重庆市公共资源交易监督网", "url": "https://ggzyjyjgj.cq.gov.cn/xmxx/002009/20260629/d3b9b3e5-183f-4a9e-8d93-68ec4f6e4535.html"
        },
        {
          "name": "成都国际铁路港国家物流枢纽项目（一期）二标段",
          "province": "四川省", "city": "成都·青白江",
          "status": "中标候选人公示",
          "companyRole": "招标人", "company": "成都陆港大仓贸易有限公司",
          "amount": "", "date": "2026-08",
          "detail": "国际铁路港国家物流枢纽工程。",
          "source": "四川公共资源交易网", "url": "https://ggzyjy.sc.gov.cn/jyxx/002001/002001006/20260807/ba7a3dfc-45f6-4fe8-846a-3c776e1808de.html"
        },
        {
          "name": "天津空港型国家物流枢纽·航空物流区职工配套服务中心（EPC弱电智能化分包）",
          "province": "天津市", "city": "",
          "status": "EPC中标",
          "companyRole": "中标分包方", "company": "中建一局华北公司",
          "amount": "", "date": "2026-10",
          "detail": "弱电智能化专业分包工程中标。",
          "source": "招标网", "url": "https://zb.zhaobiao.cn/succeed_v_29db0a5120bec1a8612fd3610b742121.html"
        },
        {
          "name": "甘肃国际物流国家物流枢纽皋兰公铁物流园提升改造项目（4#5#铁路专用线货场及配套设施）",
          "province": "甘肃省", "city": "兰州·皋兰",
          "status": "中标公示（2026-10-10）",
          "companyRole": "招标人", "company": "甘肃省物产集团皋兰物流园有限公司",
          "amount": "", "date": "2026-10",
          "detail": "甘肃国际物流国家物流枢纽皋兰公铁物流园提升改造，含4#5#铁路专用线货场及园区配套设施维修提升。",
          "source": "甘肃经济信息网", "url": "https://www.gsei.com.cn/html/1337/2026-10-10/content-707191.html"
        }
      ]
    }
  ]
};
