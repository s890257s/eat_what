const ZH_TW = { title: "吃啥", eat: "吃", ok: "好嗎？", no: "不要！" };
const ZH_CN = { title: "吃啥", eat: "吃", ok: "好嗎？", no: "不要！" };
const EN = { eat: "Eat", ok: "ok?", no: "NO!", title: "Eat what?" };
const i18n = { "ZH-TW": ZH_TW, "ZH-CN": ZH_CN, EN };

const ORIGINAL_DISH = [
    {id:1, selected: false, "EN": "Braised Beef", "ZH-TW": "紅燒牛肉", "ZH-CN": "红烧牛肉", "category": "Chinese", "img": "https://i.meee.com.tw/bDO7Hqx.jpg" },
    {id:2, selected: false, "EN": "Beef Noodle Soup", "ZH-TW": "牛肉麵", "ZH-CN": "牛肉面", "category": "Taiwanese", "img": "https://i.meee.com.tw/QPTCVtq.jpg" },
    {id:3, selected: false, "EN": "Kung Pao Chicken", "ZH-TW": "宮保雞丁", "ZH-CN": "宫保鸡丁", "category": "Chinese", "img": "https://i.meee.com.tw/RGBHGYF.jpg" },
    {id:4, selected: false, "EN": "Mapo Tofu", "ZH-TW": "麻婆豆腐", "ZH-CN": "麻婆豆腐", "category": "Chinese", "img": "https://i.meee.com.tw/2ru0Tt7.jpg" },
    {id:5, selected: false, "EN": "Sweet and Sour Pork", "ZH-TW": "糖醋里脊", "ZH-CN": "糖醋里脊", "category": "Chinese", "img": "" },
    {id:6, selected: false, "EN": "General Tso's Chicken", "ZH-TW": "左宗棠雞", "ZH-CN": "左宗棠鸡", "category": "Chinese American", "img": "" },
    {id:7, selected: false, "EN": "Fried Rice", "ZH-TW": "炒飯", "ZH-CN": "炒饭", "category": "Chinese", "img": "" },
    {id:8, selected: false, "EN": "Stir-Fried Noodles", "ZH-TW": "炒麵", "ZH-CN": "炒面", "category": "Chinese", "img": "" },
    {id:9, selected: false, "EN": "Steamed Dumplings", "ZH-TW": "蒸餃", "ZH-CN": "蒸饺", "category": "Chinese", "img": "" },
    {id:10, selected: false, "EN": "Peking Duck", "ZH-TW": "北京烤鴨", "ZH-CN": "北京烤鸭", "category": "Chinese", "img": "" },
    {id:11, selected: false, "EN": "Sichuan Hot Pot", "ZH-TW": "四川火鍋", "ZH-CN": "四川火锅", "category": "Chinese", "img": "" },
    {id:12, selected: false, "EN": "Spaghetti Bolognese", "ZH-TW": "肉醬義大利麵", "ZH-CN": "肉酱意大利面", "category": "Italian", "img": "" },
    {id:13, selected: false, "EN": "Lasagna", "ZH-TW": "千層麵", "ZH-CN": "千层面", "category": "Italian", "img": "" },
    {id:14, selected: false, "EN": "Margherita Pizza", "ZH-TW": "瑪格麗特披薩", "ZH-CN": "玛格丽特披萨", "category": "Italian", "img": "" },
    {id:15, selected: false, "EN": "Risotto", "ZH-TW": "燉飯", "ZH-CN": "炖饭", "category": "Italian", "img": "" },
    {id:16, selected: false, "EN": "Chicken Parmesan", "ZH-TW": "帕爾瑪雞排", "ZH-CN": "帕尔玛鸡排", "category": "Italian", "img": "" },
    {id:17, selected: false, "EN": "Beef Stroganoff", "ZH-TW": "俄式牛肉燴飯", "ZH-CN": "俄式牛肉炖饭", "category": "Russian", "img": "" },
    {id:18, selected: false, "EN": "Fish and Chips", "ZH-TW": "炸魚薯條", "ZH-CN": "炸鱼薯条", "category": "British", "img": "" },
    {id:19, selected: false, "EN": "Shepherd's Pie", "ZH-TW": "牧羊人派", "ZH-CN": "牧羊人派", "category": "British", "img": "" },
    {id:20, selected: false, "EN": "Roast Beef", "ZH-TW": "烤牛肉", "ZH-CN": "烤牛肉", "category": "British", "img": "" },
    {id:21, selected: false, "EN": "Turkey Roast", "ZH-TW": "烤火雞", "ZH-CN": "烤火鸡", "category": "American", "img": "" },
    {id:22, selected: false, "EN": "Grilled Salmon", "ZH-TW": "烤鮭魚", "ZH-CN": "烤鲑鱼", "category": "American", "img": "" },
    {id:23, selected: false, "EN": "Chicken Caesar Salad", "ZH-TW": "凱薩雞肉沙拉", "ZH-CN": "凯撒鸡肉沙拉", "category": "Italian/American", "img": "" },
    {id:24, selected: false, "EN": "Steak Frites", "ZH-TW": "牛排薯條", "ZH-CN": "牛排薯条", "category": "French", "img": "" },
    {id:25, selected: false, "EN": "Coq au Vin", "ZH-TW": "紅酒燉雞", "ZH-CN": "红酒炖鸡", "category": "French", "img": "" },
    {id:26, selected: false, "EN": "Bouillabaisse", "ZH-TW": "法式海鮮濃湯", "ZH-CN": "法式海鲜浓汤", "category": "French", "img": "" },
    {id:27, selected: false, "EN": "Ratatouille", "ZH-TW": "普羅旺斯燉菜", "ZH-CN": "普罗旺斯炖菜", "category": "French", "img": "" },
    {id:28, selected: false, "EN": "Beef Bourguignon", "ZH-TW": "勃艮第紅燒牛肉", "ZH-CN": "勃艮第红烧牛肉", "category": "French", "img": "" },
    {id:29, selected: false, "EN": "Quiche Lorraine", "ZH-TW": "洛林鹹派", "ZH-CN": "洛林咸派", "category": "French", "img": "" },
    {id:30, selected: false, "EN": "Moussaka", "ZH-TW": "希臘茄子肉餅", "ZH-CN": "希腊茄子肉饼", "category": "Greek", "img": "" },
    {id:31, selected: false, "EN": "Souvlaki", "ZH-TW": "希臘烤肉串", "ZH-CN": "希腊烤肉串", "category": "Greek", "img": "" },
    {id:32, selected: false, "EN": "Gyro", "ZH-TW": "希臘肉捲", "ZH-CN": "希腊肉卷", "category": "Greek", "img": "" },
    {id:33, selected: false, "EN": "Paella", "ZH-TW": "西班牙海鮮飯", "ZH-CN": "西班牙海鲜饭", "category": "Spanish", "img": "" },
    {id:34, selected: false, "EN": "Gazpacho", "ZH-TW": "西班牙冷湯", "ZH-CN": "西班牙冷汤", "category": "Spanish", "img": "" },
    {id:35, selected: false, "EN": "Tortilla Española", "ZH-TW": "西班牙蛋餅", "ZH-CN": "西班牙蛋饼", "category": "Spanish", "img": "" },
    {id:36, selected: false, "EN": "Empanadas", "ZH-TW": "肉餡餅", "ZH-CN": "肉馅饼", "category": "Latin American", "img": "" },
    {id:37, selected: false, "EN": "Tacos al Pastor", "ZH-TW": "牧人塔可", "ZH-CN": "牧人塔可", "category": "Mexican", "img": "" },
    {id:38, selected: false, "EN": "Enchiladas", "ZH-TW": "墨西哥捲餅", "ZH-CN": "墨西哥卷饼", "category": "Mexican", "img": "" },
    {id:39, selected: false, "EN": "Mole Poblano", "ZH-TW": "普布拉諾摩勒醬雞", "ZH-CN": "普布拉诺摩勒酱鸡", "category": "Mexican", "img": "" },
    {id:40, selected: false, "EN": "Chiles EN Nogada", "ZH-TW": "核果辣椒", "ZH-CN": "核果辣椒", "category": "Mexican", "img": "" },
    {id:41, selected: false, "EN": "Ceviche", "ZH-TW": "酸橘汁醃魚", "ZH-CN": "酸橘汁腌鱼", "category": "Peruvian", "img": "" },
    {id:42, selected: false, "EN": "Lomo Saltado", "ZH-TW": "鹽炒牛肉", "ZH-CN": "盐炒牛肉", "category": "Peruvian", "img": "" },
    {id:43, selected: false, "EN": "Arroz con Pollo", "ZH-TW": "雞肉燴飯", "ZH-CN": "鸡肉炖饭", "category": "Latin American", "img": "" },
    {id:44, selected: false, "EN": "Feijoada", "ZH-TW": "巴西黑豆燉肉", "ZH-CN": "巴西黑豆炖肉", "category": "Brazilian", "img": "" },
    {id:45, selected: false, "EN": "Moqueca", "ZH-TW": "巴西海鮮燉湯", "ZH-CN": "巴西海鲜炖汤", "category": "Brazilian", "img": "" },
    {id:46, selected: false, "EN": "Sushi Platter", "ZH-TW": "壽司拼盤", "ZH-CN": "寿司拼盘", "category": "Japanese", "img": "" },
    {id:47, selected: false, "EN": "Ramen", "ZH-TW": "拉麵", "ZH-CN": "拉面", "category": "Japanese", "img": "" },
    {id:48, selected: false, "EN": "Tempura", "ZH-TW": "天婦羅", "ZH-CN": "天妇罗", "category": "Japanese", "img": "" },
    {id:49, selected: false, "EN": "Tonkatsu", "ZH-TW": "炸豬排", "ZH-CN": "炸猪排", "category": "Japanese", "img": "" },
    {id:50, selected: false, "EN": "Yakitori", "ZH-TW": "串燒雞肉", "ZH-CN": "串烧鸡肉", "category": "Japanese", "img": "" },
    {id:51, selected: false, "EN": "Okonomiyaki", "ZH-TW": "大阪燒", "ZH-CN": "大阪烧", "category": "Japanese", "img": "" },
    {id:52, selected: false, "EN": "Udon Noodle Soup", "ZH-TW": "烏龍麵湯", "ZH-CN": "乌冬面汤", "category": "Japanese", "img": "" },
    {id:53, selected: false, "EN": "Curry Rice", "ZH-TW": "咖哩飯", "ZH-CN": "咖喱饭", "category": "Japanese", "img": "" },
    {id:54, selected: false, "EN": "Bulgogi", "ZH-TW": "韓式烤牛肉", "ZH-CN": "韩式烤牛肉", "category": "Korean", "img": "" },
    {id:55, selected: false, "EN": "Bibimbap", "ZH-TW": "拌飯", "ZH-CN": "拌饭", "category": "Korean", "img": "" },
    {id:56, selected: false, "EN": "Kimchi Stew", "ZH-TW": "泡菜鍋", "ZH-CN": "泡菜锅", "category": "Korean", "img": "" },
    {id:57, selected: false, "EN": "Japchae", "ZH-TW": "韓式炒粉絲", "ZH-CN": "韩式炒粉丝", "category": "Korean", "img": "" },
    {id:58, selected: false, "EN": "Tteokbokki", "ZH-TW": "炒年糕", "ZH-CN": "炒年糕", "category": "Korean", "img": "" },
    {id:59, selected: false, "EN": "Pad Thai", "ZH-TW": "泰式炒河粉", "ZH-CN": "泰式炒河粉", "category": "Thai", "img": "" },
    {id:60, selected: false, "EN": "Green Curry", "ZH-TW": "綠咖哩", "ZH-CN": "绿咖喱", "category": "Thai", "img": "" },
    {id:61, selected: false, "EN": "Red Curry", "ZH-TW": "紅咖哩", "ZH-CN": "红咖喱", "category": "Thai", "img": "" },
    {id:62, selected: false, "EN": "Tom Yum Goong", "ZH-TW": "冬蔭功湯", "ZH-CN": "冬阴功汤", "category": "Thai", "img": "" },
    {id:63, selected: false, "EN": "Massaman Curry", "ZH-TW": "馬沙文咖哩", "ZH-CN": "马沙文咖喱", "category": "Thai", "img": "" },
    {id:64, selected: false, "EN": "Butter Chicken", "ZH-TW": "奶油雞", "ZH-CN": "奶油鸡", "category": "Indian", "img": "" },
    {id:65, selected: false, "EN": "Tandoori Chicken", "ZH-TW": "坦都里烤雞", "ZH-CN": "坦都里烤鸡", "category": "Indian", "img": "" },
    {id:66, selected: false, "EN": "Palak Paneer", "ZH-TW": "菠菜起司豆腐", "ZH-CN": "菠菜奶酪豆腐", "category": "Indian", "img": "" },
    {id:67, selected: false, "EN": "Biryani", "ZH-TW": "印度香飯", "ZH-CN": "印度香饭", "category": "Indian", "img": "" },
    {id:68, selected: false, "EN": "Rogan Josh", "ZH-TW": "羊肉咖哩", "ZH-CN": "羊肉咖喱", "category": "Indian", "img": "" },
    {id:69, selected: false, "EN": "Dal Makhani", "ZH-TW": "奶油扁豆", "ZH-CN": "奶油扁豆", "category": "Indian", "img": "" },
    {id:70, selected: false, "EN": "Butter Naan", "ZH-TW": "奶油餅", "ZH-CN": "奶油饼", "category": "Indian", "img": "" },
    {id:71, selected: false, "EN": "Falafel Wrap", "ZH-TW": "鷹嘴豆餅捲", "ZH-CN": "鹰嘴豆饼卷", "category": "Middle Eastern", "img": "" },
    {id:72, selected: false, "EN": "Shawarma", "ZH-TW": "沙威瑪", "ZH-CN": "沙威玛", "category": "Middle Eastern", "img": "" },
    {id:73, selected: false, "EN": "Hummus with Lamb", "ZH-TW": "羊肉鷹嘴豆泥", "ZH-CN": "羊肉鹰嘴豆泥", "category": "Middle Eastern", "img": "" },
    {id:74, selected: false, "EN": "Couscous with Vegetables", "ZH-TW": "蔬菜庫斯庫斯", "ZH-CN": "蔬菜库斯库斯", "category": "North African", "img": "" },
    {id:75, selected: false, "EN": "Chicken Tagine", "ZH-TW": "燉雞塔吉鍋", "ZH-CN": "炖鸡塔吉锅", "category": "North African", "img": "" },
    {id:76, selected: false, "EN": "Grilled Lamb Chops", "ZH-TW": "烤羊排", "ZH-CN": "烤羊排", "category": "Mediterranean", "img": "" },
    {id:77, selected: false, "EN": "Grilled Sea Bass", "ZH-TW": "烤海鱸魚", "ZH-CN": "烤海鲈鱼", "category": "Mediterranean", "img": "" },
    {id:78, selected: false, "EN": "Osso Buco", "ZH-TW": "意式燉牛膝", "ZH-CN": "意式炖牛膝", "category": "Italian", "img": "" },
    {id:79, selected: false, "EN": "Beef Wellington", "ZH-TW": "威靈頓牛排", "ZH-CN": "威灵顿牛排", "category": "British", "img": "" },
    {id:80, selected: false, "EN": "Rack of Lamb", "ZH-TW": "烤羊架", "ZH-CN": "烤羊架", "category": "Western", "img": "" },
    {id:81, selected: false, "EN": "Roast Chicken", "ZH-TW": "烤雞", "ZH-CN": "烤鸡", "category": "Universal", "img": "" },
    {id:82, selected: false, "EN": "Stuffed Bell Peppers", "ZH-TW": "釀彩椒", "ZH-CN": "酿彩椒", "category": "International", "img": "" },
    {id:83, selected: false, "EN": "Eggplant Parmesan", "ZH-TW": "茄子帕爾瑪", "ZH-CN": "茄子帕尔玛", "category": "Italian", "img": "" },
    {id:84, selected: false, "EN": "Gnocchi with Pesto", "ZH-TW": "青醬義大利麵疙瘩", "ZH-CN": "青酱意大利面疙瘩", "category": "Italian", "img": "" },
    {id:85, selected: false, "EN": "Fettuccine Alfredo", "ZH-TW": "奶油寬麵", "ZH-CN": "奶油宽面", "category": "Italian", "img": "" },
    {id:86, selected: false, "EN": "Penne Arrabbiata", "ZH-TW": "辣味義大利麵", "ZH-CN": "辣味意大利面", "category": "Italian", "img": "" },
    {id:87, selected: false, "EN": "Chicken Marsala", "ZH-TW": "雞肉馬薩拉", "ZH-CN": "鸡肉马萨拉", "category": "Italian/American", "img": "" },
    {id:88, selected: false, "EN": "Shrimp Scampi", "ZH-TW": "大蒜蝦仁義大利麵", "ZH-CN": "大蒜虾仁意大利面", "category": "Italian/American", "img": "" },
    {id:89, selected: false, "EN": "Lamb Curry", "ZH-TW": "羊肉咖哩", "ZH-CN": "羊肉咖喱", "category": "Indian", "img": "" },
    {id:90, selected: false, "EN": "Steamed Fish with Ginger and Scallions", "ZH-TW": "薑蔥蒸魚", "ZH-CN": "姜葱蒸鱼", "category": "Chinese", "img": "" },
    {id:91, selected: false, "EN": "Orange Chicken", "ZH-TW": "香橙雞", "ZH-CN": "香橙鸡", "category": "American Chinese", "img": "" },
    {id:92, selected: false, "EN": "Cashew Chicken", "ZH-TW": "腰果雞丁", "ZH-CN": "腰果鸡丁", "category": "Chinese", "img": "" },
    {id:93, selected: false, "EN": "Lemon Chicken", "ZH-TW": "檸檬雞", "ZH-CN": "柠檬鸡", "category": "Chinese", "img": "" },
    {id:94, selected: false, "EN": "Char Siu", "ZH-TW": "叉燒", "ZH-CN": "叉烧", "category": "Chinese", "img": "" },
    {id:95, selected: false, "EN": "Cantonese Steamed Fish", "ZH-TW": "粵式清蒸魚", "ZH-CN": "粤式清蒸鱼", "category": "Chinese", "img": "" },
    {id:96, selected: false, "EN": "Stir-Fried Beef with Broccoli", "ZH-TW": "西蘭花牛肉", "ZH-CN": "西兰花牛肉", "category": "Chinese", "img": "" },
    {id:97, selected: false, "EN": "Hainanese Chicken Rice", "ZH-TW": "海南雞飯", "ZH-CN": "海南鸡饭", "category": "Singaporean", "img": "" },
    {id:98, selected: false, "EN": "Nasi Goreng", "ZH-TW": "炒飯 (印尼式)", "ZH-CN": "炒饭 (印尼式)", "category": "Indonesian", "img": "" },
    {id:99, selected: false, "EN": "Beef Rendang", "ZH-TW": "仁當牛肉", "ZH-CN": "仁当牛肉", "category": "Indonesian", "img": "" },
    {id:100, selected: false, "EN": "Laksa", "ZH-TW": "叻沙", "ZH-CN": "叻沙", "category": "Malaysian", "img": "" },
    {id:101, selected: false, "EN": "Pork Schnitzel", "ZH-TW": "豬肉炸肉排", "ZH-CN": "猪肉炸肉排", "category": "German", "img": "" },
    {id:102, selected: false, "EN": "Sauerbraten", "ZH-TW": "酸燉牛肉", "ZH-CN": "酸炖牛肉", "category": "German", "img": "" },
    {id:103, selected: false, "EN": "Wiener Schnitzel", "ZH-TW": "維也納炸小牛排", "ZH-CN": "维也纳炸小牛排", "category": "Austrian", "img": "" },
    {id:104, selected: false, "EN": "Hungarian Goulash", "ZH-TW": "匈牙利燉牛肉", "ZH-CN": "匈牙利炖牛肉", "category": "Hungarian", "img": "" },
    {id:105, selected: false, "EN": "Chicken Kiev", "ZH-TW": "基輔雞", "ZH-CN": "基辅鸡", "category": "Ukrainian", "img": "" },
    {id:106, selected: false, "EN": "Baked Ziti", "ZH-TW": "焗通心麵", "ZH-CN": "焗通心面", "category": "Italian American", "img": "" },
    {id:107, selected: false, "EN": "Clam Chowder", "ZH-TW": "蛤蜊濃湯", "ZH-CN": "蛤蜊浓汤", "category": "American", "img": "" },
    {id:108, selected: false, "EN": "Jambalaya", "ZH-TW": "美式什錦飯", "ZH-CN": "美式什锦饭", "category": "Cajun/Creole", "img": "" },
    {id:109, selected: false, "EN": "Shrimp Gumbo", "ZH-TW": "蝦仁燴湯", "ZH-CN": "虾仁炖汤", "category": "Creole", "img": "" },
    {id:110, selected: false, "EN": "Currywurst", "ZH-TW": "咖哩香腸", "ZH-CN": "咖喱香肠", "category": "German", "img": "" },
    {id:111, selected: false, "EN": "Käsespätzle", "ZH-TW": "起司麵疙瘩", "ZH-CN": "起司面疙瘩", "category": "German/Austrian", "img": "" },
    {id:112, selected: false, "EN": "Bangers and Mash", "ZH-TW": "香腸馬鈴薯泥", "ZH-CN": "香肠土豆泥", "category": "British", "img": "" },
    {id:113, selected: false, "EN": "Cornish Pasty", "ZH-TW": "康沃爾肉餡餅", "ZH-CN": "康沃尔肉馅饼", "category": "British", "img": "" },
    {id:114, selected: false, "EN": "Siu Yuk", "ZH-TW": "脆皮燒肉", "ZH-CN": "脆皮烧肉", "category": "Chinese", "img": "" },
    {id:115, selected: false, "EN": "Pasta Primavera", "ZH-TW": "時蔬義大利麵", "ZH-CN": "时蔬意大利面", "category": "Italian", "img": "" },
    {id:116, selected: false, "EN": "Cacio e Pepe", "ZH-TW": "芝士胡椒義大利麵", "ZH-CN": "芝士胡椒意大利面", "category": "Italian", "img": "" },
    {id:117, selected: false, "EN": "Spinach Ravioli", "ZH-TW": "菠菜義大利餃", "ZH-CN": "菠菜意大利饺", "category": "Italian", "img": "" },
    {id:118, selected: false, "EN": "Chicken Fricassee", "ZH-TW": "奶油燴雞", "ZH-CN": "奶油炖鸡", "category": "French", "img": "" },
    {id:119, selected: false, "EN": "Cassoulet", "ZH-TW": "法式燉豆肉", "ZH-CN": "法式炖豆肉", "category": "French", "img": "" },
    {id:120, selected: false, "EN": "Confit de Canard", "ZH-TW": "鴨肉油封", "ZH-CN": "鸭肉油封", "category": "French", "img": "" },
    {id:121, selected: false, "EN": "Beef Carpaccio", "ZH-TW": "生牛肉薄片", "ZH-CN": "生牛肉薄片", "category": "Italian", "img": "" },
    {id:122, selected: false, "EN": "Lamb Tagine", "ZH-TW": "羊肉塔吉鍋", "ZH-CN": "羊肉塔吉锅", "category": "Moroccan", "img": "" },
    {id:123, selected: false, "EN": "Shakshuka", "ZH-TW": "番茄炖蛋", "ZH-CN": "番茄炖蛋", "category": "Middle Eastern", "img": "" },
    {id:124, selected: false, "EN": "Kofta Kebabs", "ZH-TW": "肉丸烤肉串", "ZH-CN": "肉丸烤肉串", "category": "Middle Eastern", "img": "" },
    {id:125, selected: false, "EN": "Fesenjan", "ZH-TW": "費森詹燉雞", "ZH-CN": "费森詹炖鸡", "category": "Persian", "img": "" },
    {id:126, selected: false, "EN": "Chateaubriand", "ZH-TW": "夏多布里昂牛排", "ZH-CN": "夏多布里昂牛排", "category": "French", "img": "" },
    {id:127, selected: false, "EN": "Steak Tartare", "ZH-TW": "生牛肉塔塔", "ZH-CN": "生牛肉塔塔", "category": "French", "img": "" },
    {id:128, selected: false, "EN": "Bife de Chorizo", "ZH-TW": "阿根廷牛排", "ZH-CN": "阿根廷牛排", "category": "Argentinian", "img": "" },
    {id:129, selected: false, "EN": "Argentine Asado", "ZH-TW": "阿根廷燒烤", "ZH-CN": "阿根廷烧烤", "category": "Argentinian", "img": "" },
    {id:130, selected: false, "EN": "Arancini", "ZH-TW": "炸飯團", "ZH-CN": "炸饭团", "category": "Italian", "img": "" },
    {id:131, selected: false, "EN": "Sausage and Peppers", "ZH-TW": "香腸炒彩椒", "ZH-CN": "香肠炒彩椒", "category": "Italian American", "img": "" },
    {id:132, selected: false, "EN": "Polenta with Sausage", "ZH-TW": "香腸玉米糊", "ZH-CN": "香肠玉米糊", "category": "Italian", "img": "" },
    {id:133, selected: false, "EN": "Ribollita", "ZH-TW": "托斯卡納濃湯", "ZH-CN": "托斯卡纳浓汤", "category": "Italian", "img": "" },
    {id:134, selected: false, "EN": "Pasta Puttanesca", "ZH-TW": "放蕩義大利麵", "ZH-CN": "放荡意大利面", "category": "Italian", "img": "" },
    {id:135, selected: false, "EN": "Hunan Spicy Chicken", "ZH-TW": "湘味香辣雞", "ZH-CN": "湘味香辣鸡", "category": "Chinese", "img": "" },
    {id:136, selected: false, "EN": "Szechuan Spicy Fish", "ZH-TW": "川味麻辣魚", "ZH-CN": "川味麻辣鱼", "category": "Chinese", "img": "" },
    {id:137, selected: false, "EN": "Steamed Spare Ribs", "ZH-TW": "清蒸排骨", "ZH-CN": "清蒸排骨", "category": "Chinese", "img": "" },
    {id:138, selected: false, "EN": "Vietnamese Pho", "ZH-TW": "越南河粉", "ZH-CN": "越南河粉", "category": "Vietnamese", "img": "" },
    {id:139, selected: false, "EN": "Banh Mi Sandwich", "ZH-TW": "越南法棍夾肉", "ZH-CN": "越南法棍夹肉", "category": "Vietnamese", "img": "" },
    {id:140, selected: false, "EN": "Hokkien Mee", "ZH-TW": "福建炒麵", "ZH-CN": "福建炒面", "category": "Malaysian/Singaporean", "img": "" },
    {id:141, selected: false, "EN": "Char Kway Teow", "ZH-TW": "炒粿條", "ZH-CN": "炒粿条", "category": "Malaysian/Singaporean", "img": "" },
    {id:142, selected: false, "EN": "Ikan Bakar", "ZH-TW": "香烤魚", "ZH-CN": "香烤鱼", "category": "Malaysian/Indonesian", "img": "" },
    {id:143, selected: false, "EN": "Sambal Stingray", "ZH-TW": "沙嗲魟魚", "ZH-CN": "沙嗲魟鱼", "category": "Southeast Asian", "img": "" },
    {id:144, selected: false, "EN": "Chicken Adobo", "ZH-TW": "雞肉阿多波", "ZH-CN": "鸡肉阿多波", "category": "Filipino", "img": "" },
    {id:145, selected: false, "EN": "Sinigang na Baboy", "ZH-TW": "酸辣豬肉湯", "ZH-CN": "酸辣猪肉汤", "category": "Filipino", "img": "" },
    {id:146, selected: false, "EN": "Lechon Kawali", "ZH-TW": "炸脆皮豬肉", "ZH-CN": "炸脆皮猪肉", "category": "Filipino", "img": "" },
    {id:147, selected: false, "EN": "Bistek Tagalog", "ZH-TW": "菲律賓牛肉炒洋蔥", "ZH-CN": "菲律宾牛肉炒洋葱", "category": "Filipino", "img": "" },
    {id:148, selected: false, "EN": "Pancit Canton", "ZH-TW": "菲式炒麵", "ZH-CN": "菲式炒面", "category": "Filipino", "img": "" },
    {id:149, selected: false, "EN": "Kare-Kare", "ZH-TW": "菲律賓花生燉牛尾", "ZH-CN": "菲律宾花生炖牛尾", "category": "Filipino", "img": "" },
    {id:150, selected: false, "EN": "Pork Menudo", "ZH-TW": "豬肉雜燴", "ZH-CN": "猪肉杂炖", "category": "Filipino", "img": "" },
    {id:151, selected: false, "EN": "Pork Sisig", "ZH-TW": "菲律賓西西格", "ZH-CN": "菲律宾西西格", "category": "Filipino", "img": "" },
    {id:152, selected: false, "EN": "Jerk Chicken", "ZH-TW": "牙買加香辣雞", "ZH-CN": "牙买加香辣鸡", "category": "Jamaican", "img": "" },
    {id:153, selected: false, "EN": "Curried Goat", "ZH-TW": "咖哩山羊肉", "ZH-CN": "咖喱山羊肉", "category": "Caribbean", "img": "" },
    {id:154, selected: false, "EN": "Ackee and Saltfish", "ZH-TW": "阿奇與鹹魚", "ZH-CN": "阿奇与咸鱼", "category": "Jamaican", "img": "" },
    {id:155, selected: false, "EN": "Oxtail Stew", "ZH-TW": "牛尾燉湯", "ZH-CN": "牛尾炖汤", "category": "Caribbean", "img": "" },
    {id:156, selected: false, "EN": "Chili Crab", "ZH-TW": "辣椒蟹", "ZH-CN": "辣椒蟹", "category": "Singaporean", "img": "" },
    {id:157, selected: false, "EN": "Black Pepper Crab", "ZH-TW": "黑胡椒蟹", "ZH-CN": "黑胡椒蟹", "category": "Singaporean", "img": "" },
    {id:158, selected: false, "EN": "Fish Head Curry", "ZH-TW": "魚頭咖哩", "ZH-CN": "鱼头咖喱", "category": "Singaporean", "img": "" },
    {id:159, selected: false, "EN": "Mee Goreng", "ZH-TW": "馬來炒麵", "ZH-CN": "马来炒面", "category": "Malaysian", "img": "" },
    {id:160, selected: false, "EN": "Satay Skewers", "ZH-TW": "沙嗲串燒", "ZH-CN": "沙嗲串烧", "category": "Southeast Asian", "img": "" },
    {id:161, selected: false, "EN": "Sambal Prawns", "ZH-TW": "三巴辣蝦", "ZH-CN": "三巴辣虾", "category": "Southeast Asian", "img": "" },
    {id:162, selected: false, "EN": "Nasi Lemak", "ZH-TW": "椰漿飯", "ZH-CN": "椰浆饭", "category": "Malaysian", "img": "" },
    {id:163, selected: false, "EN": "Galbi", "ZH-TW": "韓式烤排", "ZH-CN": "韩式烤排", "category": "Korean", "img": "" },
    {id:164, selected: false, "EN": "Samgyeopsal", "ZH-TW": "韓式五花肉", "ZH-CN": "韩式五花肉", "category": "Korean", "img": "" },
    {id:165, selected: false, "EN": "Jajangmyeon", "ZH-TW": "韓式黑醬麵", "ZH-CN": "韩式黑酱面", "category": "Korean-Chinese", "img": "" },
    {id:166, selected: false, "EN": "Pizza Quattro Formaggi", "ZH-TW": "四種起司披薩", "ZH-CN": "四种起司披萨", "category": "Italian", "img": "" },
    {id:167, selected: false, "EN": "Spaghetti Carbonara", "ZH-TW": "卡邦那義大利麵", "ZH-CN": "卡邦那意大利面", "category": "Italian", "img": "" },
    {id:168, selected: false, "EN": "Farfalle al Pesto", "ZH-TW": "蝴蝶麵青醬", "ZH-CN": "蝴蝶面青酱", "category": "Italian", "img": "" },
    {id:169, selected: false, "EN": "Southern Fried Chicken", "ZH-TW": "南部炸雞", "ZH-CN": "南部炸鸡", "category": "American", "img": "" },
    {id:170, selected: false, "EN": "BBQ Pork Ribs", "ZH-TW": "烤豬排骨", "ZH-CN": "烤猪排骨", "category": "American", "img": "" },
    {id:171, selected: false, "EN": "Cuban Ropa Vieja", "ZH-TW": "古巴燉牛肉", "ZH-CN": "古巴炖牛肉", "category": "Cuban", "img": "" },
    {id:172, selected: false, "EN": "Mojo Pork", "ZH-TW": "摩荷豬肉", "ZH-CN": "摩荷猪肉", "category": "Cuban", "img": "" },
    {id:173, selected: false, "EN": "Arroz Negro", "ZH-TW": "黑墨海鮮飯", "ZH-CN": "黑墨海鲜饭", "category": "Spanish", "img": "" },
    {id:174, selected: false, "EN": "Steak Au Poivre", "ZH-TW": "胡椒牛排", "ZH-CN": "胡椒牛排", "category": "French", "img": "" },
    {id:175, selected: false, "EN": "Katsu Curry", "ZH-TW": "日式炸豬排咖哩", "ZH-CN": "日式炸猪排咖喱", "category": "Japanese", "img": "" },
    {id:176, selected: false, "EN": "Oyakodon", "ZH-TW": "親子丼", "ZH-CN": "亲子丼", "category": "Japanese", "img": "" },
    {id:177, selected: false, "EN": "Sukiyaki", "ZH-TW": "壽喜燒", "ZH-CN": "寿喜烧", "category": "Japanese", "img": "" },
    {id:178, selected: false, "EN": "Chirashi Don", "ZH-TW": "散壽司丼", "ZH-CN": "散寿司丼", "category": "Japanese", "img": "" },
    {id:179, selected: false, "EN": "Gyudon", "ZH-TW": "牛丼", "ZH-CN": "牛丼", "category": "Japanese", "img": "" },
    {id:180, selected: false, "EN": "Seolleongtang", "ZH-TW": "韓式牛骨湯", "ZH-CN": "韩式牛骨汤", "category": "Korean", "img": "" },
    {id:181, selected: false, "EN": "Piri Piri Chicken", "ZH-TW": "辣味葡式烤雞", "ZH-CN": "辣味葡式烤鸡", "category": "Portuguese", "img": "" },
    {id:182, selected: false, "EN": "Bacalhau à Brás", "ZH-TW": "葡式鹹鱈魚", "ZH-CN": "葡式咸鳕鱼", "category": "Portuguese", "img": "" },
    {id:183, selected: false, "EN": "Polvo à Lagareiro", "ZH-TW": "葡式烤章魚", "ZH-CN": "葡式烤章鱼", "category": "Portuguese", "img": "" },
    {id:184, selected: false, "EN": "Pollo a la Brasa", "ZH-TW": "秘魯烤雞", "ZH-CN": "秘鲁烤鸡", "category": "Peruvian", "img": "" },
    {id:185, selected: false, "EN": "Anticuchos", "ZH-TW": "秘魯牛心串", "ZH-CN": "秘鲁牛心串", "category": "Peruvian", "img": "" },
    {id:186, selected: false, "EN": "Mofongo", "ZH-TW": "炸蕉薯泥", "ZH-CN": "炸蕉薯泥", "category": "Puerto Rican", "img": "" },
    {id:187, selected: false, "EN": "Arroz con Gandules", "ZH-TW": "豬肉豆飯", "ZH-CN": "猪肉豆饭", "category": "Puerto Rican", "img": "" },
    {id:188, selected: false, "EN": "Pernil", "ZH-TW": "烤豬肩", "ZH-CN": "烤猪肩", "category": "Puerto Rican", "img": "" },
    {id:189, selected: false, "EN": "Chiles Rellenos", "ZH-TW": "釀辣椒", "ZH-CN": "酿辣椒", "category": "Mexican", "img": "" },
    {id:190, selected: false, "EN": "Pozole", "ZH-TW": "墨西哥玉米燉湯", "ZH-CN": "墨西哥玉米炖汤", "category": "Mexican", "img": "" },
    {id:191, selected: false, "EN": "Menudo", "ZH-TW": "牛肚湯", "ZH-CN": "牛肚汤", "category": "Mexican", "img": "" },
    {id:192, selected: false, "EN": "Barbacoa", "ZH-TW": "墨西哥燒肉", "ZH-CN": "墨西哥烧肉", "category": "Mexican", "img": "" },
    {id:193, selected: false, "EN": "Gallo Pinto", "ZH-TW": "黑豆拌飯", "ZH-CN": "黑豆拌饭", "category": "Costa Rican", "img": "" },
    {id:194, selected: false, "EN": "Casado", "ZH-TW": "綜合套餐", "ZH-CN": "综合套餐", "category": "Costa Rican", "img": "" },
    {id:195, selected: false, "EN": "Sopa Negra", "ZH-TW": "黑豆湯", "ZH-CN": "黑豆汤", "category": "Costa Rican", "img": "" },
    {id:196, selected: false, "EN": "Carne Asada", "ZH-TW": "烤牛肉片", "ZH-CN": "烤牛肉片", "category": "Latin American", "img": "" },
    {id:197, selected: false, "EN": "Chicken Tikka Masala", "ZH-TW": "印度咖哩雞", "ZH-CN": "印度咖喱鸡", "category": "Indian", "img": "" },
    {id:198, selected: false, "EN": "Malai Kofta", "ZH-TW": "奶油蔬菜丸", "ZH-CN": "奶油蔬菜丸", "category": "Indian", "img": "" },
    {id:199, selected: false, "EN": "Dal Tadka", "ZH-TW": "香料黃豆湯", "ZH-CN": "香料黄豆汤", "category": "Indian", "img": "" },
    {id:200, selected: false, "EN": "Paneer Butter Masala", "ZH-TW": "奶油起司咖哩", "ZH-CN": "奶油起司咖喱", "category": "Indian", "img": "" }
]