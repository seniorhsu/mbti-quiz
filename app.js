const optionLabels = [
  { label: "完全不會", value: -2 },
  { label: "不太會", value: -1 },
  { label: "看情況", value: 0 },
  { label: "有時會", value: 1 },
  { label: "很常會", value: 2 },
];

const traitPattern = ["E", "I", "S", "N", "T", "F", "J", "P"];

const identityDrafts = {
  student: {
    label: "學生",
    badge: "學",
    description: "學習、朋友、壓力與未來方向。",
    resultPrefix: "學習人格",
    stages: [
      {
        title: "學習節奏",
        hint: "看你怎麼吸收新東西。",
        insight: "你的學習節奏不是快慢問題，而是適合哪種吸收方式。",
        questions: [
          "上課討論時，你會主動把想法說出來嗎？",
          "讀書時，你需要安靜、不被打擾才比較進得去嗎？",
          "準備考試時，你會先整理重點和範圍嗎？",
          "學新單元時，你會先想它跟其他知識有什麼關係嗎？",
          "遇到不懂的題目，你會先檢查邏輯哪裡卡住嗎？",
          "老師或同學的語氣不好時，你會很影響學習心情嗎？",
          "你會想先排好讀書計畫，再開始讀嗎？",
          "你常常要等到快考試才突然很有讀書動力嗎？",
        ],
      },
      {
        title: "社交能量",
        hint: "看你在同學和朋友中怎麼充電。",
        insight: "你和同學相處的方式，會透露你真正的能量來源。",
        questions: [
          "班上有活動時，你會想一起參與讓氣氛熱起來嗎？",
          "跟同學相處一整天後，你會想自己安靜一下嗎？",
          "分組時，你會先確認大家各自要做什麼嗎？",
          "認識新同學時，你會想像未來可以一起做什麼事嗎？",
          "朋友之間有誤會時，你會先想誰講得比較合理嗎？",
          "朋友心情不好時，你會先陪他感受一下嗎？",
          "你喜歡固定幾個熟朋友一起行動嗎？",
          "你喜歡交朋友自然一點，不想太刻意經營嗎？",
        ],
      },
      {
        title: "面對壓力",
        hint: "看你被考試、作業或比較壓住時的反應。",
        insight: "壓力會放大你的慣性，也會提醒你需要什麼支持。",
        questions: [
          "壓力大時，你會想找朋友講一講嗎？",
          "壓力大時，你會想先一個人躲起來消化嗎？",
          "事情很多時，你會先抓現在最急的一件事做嗎？",
          "事情很多時，你會開始想自己未來到底要去哪裡嗎？",
          "被批評時，你會先想對方說得有沒有道理嗎？",
          "被批評時，你會很在意對方是不是尊重你嗎？",
          "越緊張時，你越想把時間表排清楚嗎？",
          "越緊張時，你越容易不想照原本計畫走嗎？",
        ],
      },
      {
        title: "科系與未來",
        hint: "看你怎麼做長期選擇。",
        insight: "你選未來方向時，通常會在安全感和可能性之間拉扯。",
        questions: [
          "聊到未來時，你會很想和別人交換想法嗎？",
          "做重要選擇前，你會先自己想很久嗎？",
          "選科系或社團時，你會先看實際出路和資源嗎？",
          "選方向時，你會被『以後可以變成什麼』吸引嗎？",
          "做選擇時，你會把利弊列出來看嗎？",
          "做選擇時，你會很在意家人或重要朋友的感受嗎？",
          "你會想早一點把未來方向定下來嗎？",
          "你會想多試幾種可能，再慢慢決定嗎？",
        ],
      },
      {
        title: "團體合作",
        hint: "看你在分組、社團、活動中的角色。",
        insight: "團體裡的你，常常會自然補上大家缺少的那一塊。",
        questions: [
          "分組討論時，你會主動把大家拉回討論嗎？",
          "分組作業時，你比較適合自己負責一塊安靜完成嗎？",
          "你會注意到分組作業哪些地方還沒做完嗎？",
          "你常能想到分組報告可以怎麼做得更有創意嗎？",
          "團隊意見不同時，你會想用標準判斷哪個方案最好嗎？",
          "團隊氣氛怪怪的時候，你會想先安撫大家嗎？",
          "你會希望大家照約定時間交東西嗎？",
          "如果分組方式臨時改掉，你通常也能跟著調整嗎？",
        ],
      },
      {
        title: "情緒與自我要求",
        hint: "看你怎麼看待成績、期待和失落。",
        insight: "你對自己的要求，會影響你是越挫越穩，還是越想逃開。",
        questions: [
          "心情不好時，你會想讓身邊的人知道嗎？",
          "心情不好時，你比較不想被一直追問嗎？",
          "成績不理想時，你會先看是哪個環節沒準備好嗎？",
          "成績不理想時，你會開始懷疑自己是不是不適合這條路嗎？",
          "面對失敗，你會先想下一次怎麼改進嗎？",
          "面對失敗，你會需要先被鼓勵才有力氣繼續嗎？",
          "你會用固定習慣讓自己保持穩定嗎？",
          "你容易因為臨時心情改變而打亂原本安排嗎？",
        ],
      },
      {
        title: "行動力與拖延",
        hint: "看你如何開始、推進和完成事情。",
        insight: "拖延不一定是懶，有時是你的啟動方式和任務形狀不合。",
        questions: [
          "有目標時，你會想找人一起推進嗎？",
          "重要事情開始前，你會想先自己整理清楚嗎？",
          "要開始做事時，你會先找最明確的小步驟嗎？",
          "要開始做事時，你會需要先找到這件事的意義嗎？",
          "你能接受別人直接提醒你哪裡沒做好嗎？",
          "如果別人催得太兇，你反而會更不想做嗎？",
          "你喜歡把事情完成後再放鬆嗎？",
          "你常常邊做邊改，做到後面才找到節奏嗎？",
        ],
      },
    ],
    identityResults: {
      E: "外放型學生：你容易靠討論、互動和現場感進入狀態。",
      I: "內省型學生：你需要安靜空間，把知識消化成自己的理解。",
      S: "穩紮型學生：你適合清楚步驟、具體目標和可檢查的進度。",
      N: "靈感型學生：你適合從概念、可能性和大方向啟動學習。",
      T: "分析型學生：你會用邏輯拆問題，適合需要推理和結構的任務。",
      F: "共感型學生：你受氛圍影響很深，也擅長理解人與關係。",
      J: "規劃型學生：你在有計畫、有期限、有秩序時最穩。",
      P: "彈性型學生：你在保留變化和選擇時，反而更容易動起來。",
    },
    advancedReport: [
      ["讀", "讀書策略", "把難題拆成短任務，再配合最適合你的啟動方式。"],
      ["友", "同學關係", "你需要的不是更多朋友，而是對的互動密度。"],
      ["壓", "壓力雷點", "留意你在焦慮時是過度控制，還是直接逃開。"],
      ["未", "未來方向", "選方向時同時看現實條件和你真正有感的可能性。"],
      ["行", "行動建議", "用 25 分鐘的小段落開始，先讓大腦進入狀態。"],
    ],
  },
  worker: {
    label: "工作",
    badge: "職",
    description: "工作節奏、溝通、成就感與職涯。",
    resultPrefix: "職場人格",
    stages: [
      {
        title: "工作節奏",
        hint: "看你怎麼開始和推進工作。",
        insight: "你不是效率高低而已，而是需要不同的工作啟動環境。",
        questions: [
          "開會討論時，你會主動提出想法嗎？",
          "你在安靜、不被打斷的時間裡效率最好嗎？",
          "接到任務時，你會先確認交付標準嗎？",
          "接到新任務時，你會先想它背後真正要解決什麼嗎？",
          "工作卡住時，你會先找流程或邏輯哪裡出問題嗎？",
          "主管語氣不好時，你會很影響做事心情嗎？",
          "你喜歡先排好工作順序再開始嗎？",
          "你常在期限靠近時突然效率變高嗎？",
        ],
      },
      {
        title: "溝通方式",
        hint: "看你怎麼表達、協調和接收訊息。",
        insight: "你溝通時在意的重點，會決定你適合什麼團隊文化。",
        questions: [
          "有想法時，你會想直接在會議上說出來嗎？",
          "你比較喜歡先寫下想法，再正式溝通嗎？",
          "你喜歡對方把需求、時間和責任講清楚嗎？",
          "你常能聽出別人話裡沒講明的真正意思嗎？",
          "討論時，你會直接指出不合理的地方嗎？",
          "討論時，你會注意對方是不是感覺被尊重嗎？",
          "你希望溝通後要有明確結論嗎？",
          "你能接受邊做邊調整的溝通方式嗎？",
        ],
      },
      {
        title: "團隊合作",
        hint: "看你在團隊中的自然位置。",
        insight: "團隊裡你最有價值的地方，常是你不費力就會做的事。",
        questions: [
          "團隊氣氛低時，你會想把大家拉起來嗎？",
          "團隊太吵時，你會想退回自己的工作區嗎？",
          "你會主動確認誰負責哪一塊嗎？",
          "你常能想到團隊可以換個方式解決問題嗎？",
          "意見衝突時，你會想用數據或標準判斷嗎？",
          "意見衝突時，你會先照顧大家的感受嗎？",
          "你會希望團隊照約定流程走嗎？",
          "團隊臨時改方向時，你通常能快速適應嗎？",
        ],
      },
      {
        title: "壓力反應",
        hint: "看你被 deadline、主管或責任壓住時會怎樣。",
        insight: "壓力下的你會把平常的優勢推到極端，這是很重要的訊號。",
        questions: [
          "壓力大時，你會想找同事或朋友講一講嗎？",
          "壓力大時，你會想先把自己關起來做完嗎？",
          "事情爆量時，你會先抓最急、最明確的一件事嗎？",
          "事情爆量時，你會開始想這份工作長期值不值得嗎？",
          "被質疑時，你會先想對方的論點有沒有道理嗎？",
          "被質疑時，你會很在意對方是不是給你基本尊重嗎？",
          "越忙時，你越想把規則和優先順序講清楚嗎？",
          "越忙時，你越不想被太多規定綁死嗎？",
        ],
      },
      {
        title: "成就感來源",
        hint: "看你因為什麼覺得工作值得。",
        insight: "真正讓你有成就感的，不一定是職稱，而是你被用對的方式。",
        questions: [
          "成果被看見時，你會更有動力嗎？",
          "你不一定需要曝光，但需要知道自己做得有價值嗎？",
          "你完成一個清楚可量化的成果時會很滿足嗎？",
          "你做出新的方向或新方法時會很有成就感嗎？",
          "你喜歡把複雜問題拆到合理又乾淨嗎？",
          "你喜歡自己的工作真的幫到人嗎？",
          "你喜歡完成任務後把清單劃掉的感覺嗎？",
          "你喜歡保留空間，讓工作有新的變化嗎？",
        ],
      },
      {
        title: "決策風格",
        hint: "看你怎麼做職場選擇。",
        insight: "你做決策的方式，會影響你適合快節奏還是穩定型環境。",
        questions: [
          "重要決策前，你會想和人討論一下嗎？",
          "重要決策前，你會想先自己想完整嗎？",
          "你會先看成本、風險和現有資源嗎？",
          "你會先看這件事未來可能帶來什麼機會嗎？",
          "你比較相信清楚的分析和證據嗎？",
          "你會把團隊士氣和人的狀態放進決策裡嗎？",
          "你希望決定後大家就照方向執行嗎？",
          "你喜歡決定保留調整空間嗎？",
        ],
      },
      {
        title: "職涯方向",
        hint: "看你適合什麼樣的長期路線。",
        insight: "適合你的職涯，不只看能力，也看你每天消耗的是什麼。",
        questions: [
          "想職涯時，你會想多聽不同人的經驗嗎？",
          "想職涯時，你會先問自己真正想要什麼生活嗎？",
          "你會偏好穩定累積專業的路線嗎？",
          "你會被跨領域、新機會或未來趨勢吸引嗎？",
          "你想要一份能讓你解決難題的工作嗎？",
          "你想要一份能和人建立連結、創造影響的工作嗎？",
          "你希望職涯路線越清楚越安心嗎？",
          "你希望職涯有彈性，可以邊走邊調整嗎？",
        ],
      },
    ],
    identityResults: {
      E: "外向協作型：你靠互動推進工作，適合需要溝通和整合的角色。",
      I: "深度專注型：你需要完整思考時間，適合需要沉澱和品質的任務。",
      S: "落地執行型：你擅長把模糊需求變成清楚步驟。",
      N: "策略創新型：你擅長看趨勢、找新方向和重組問題。",
      T: "理性決策型：你重視標準、效率和可辯護的判斷。",
      F: "人本協調型：你很會感受團隊狀態，適合需要信任的合作場景。",
      J: "穩定推進型：你在目標、節奏和責任清楚時最能發揮。",
      P: "彈性應變型：你在變動環境中能快速抓機會和調整做法。",
    },
    advancedReport: [
      ["工", "工作節奏", "把任務拆成可見進度，讓能量不被模糊需求吃掉。"],
      ["溝", "溝通提醒", "先確認對方要結論、感受、還是方案，溝通會順很多。"],
      ["隊", "團隊位置", "你最自然的價值，就是團隊混亂時會自動補上的那一塊。"],
      ["壓", "壓力管理", "壓力大時先分清楚：哪些是任務，哪些是情緒。"],
      ["涯", "職涯建議", "找一條能長期使用你優勢、而不是天天消耗你的路線。"],
    ],
  },
  love: {
    label: "戀愛",
    badge: "戀",
    description: "喜歡人的方式、安全感與長期相處。",
    resultPrefix: "戀愛人格",
    stages: [
      {
        title: "喜歡人的方式",
        hint: "看你喜歡一個人時會怎麼靠近。",
        insight: "你靠近愛的方式，常常就是你最需要被理解的地方。",
        questions: [
          "喜歡一個人時，你會主動找話題或約見面嗎？",
          "喜歡一個人時，你會先默默觀察很久嗎？",
          "你會用實際行動表達喜歡嗎？",
          "你會想像你們未來可能變成什麼樣子嗎？",
          "你會先判斷這段關係是否真的適合嗎？",
          "你會很在意對方有沒有感受到你的心意嗎？",
          "你喜歡關係有明確進展嗎？",
          "你喜歡關係自然發展，不想被逼太快嗎？",
        ],
      },
      {
        title: "安全感需求",
        hint: "看你在關係中怎麼確認安心。",
        insight: "安全感不是黏不黏，而是你需要怎樣的穩定訊號。",
        questions: [
          "對方主動分享生活時，你會覺得更安心嗎？",
          "你需要自己的空間，才不會在關係裡太累嗎？",
          "你會透過對方穩不穩定、說到做到來判斷安全感嗎？",
          "你會透過對方有沒有一起想未來來判斷安全感嗎？",
          "關係不安時，你會想把問題講清楚嗎？",
          "關係不安時，你會先想確認對方還在乎你嗎？",
          "你喜歡固定的聯絡頻率嗎？",
          "你不喜歡把每天怎麼互動規定得太死嗎？",
        ],
      },
      {
        title: "衝突處理",
        hint: "看你吵架或冷戰時會怎麼反應。",
        insight: "衝突時的你，不是在找麻煩，而是在保護某個很重要的需求。",
        questions: [
          "吵架時，你會想趕快把話講開嗎？",
          "吵架時，你會想先冷靜，不想立刻回應嗎？",
          "吵架時，你會先回想事情到底怎麼發生的嗎？",
          "吵架時，你會想這件事背後是不是有更深的問題嗎？",
          "你會希望對方講道理，不要只丟情緒嗎？",
          "你會希望對方先理解你的感受嗎？",
          "問題解決前，你會很難放下嗎？",
          "你需要一點時間，才知道自己真正想說什麼嗎？",
        ],
      },
      {
        title: "表達愛的方式",
        hint: "看你怎麼讓對方感覺被愛。",
        insight: "你給愛的方式，通常也是你希望被愛的方式。",
        questions: [
          "你會用分享日常來拉近距離嗎？",
          "你會用安靜陪伴來表達在乎嗎？",
          "你會記得對方說過的小事，並真的做出來嗎？",
          "你會用聊夢想、聊未來來感覺更靠近嗎？",
          "你表達愛時，會偏向解決對方的問題嗎？",
          "你表達愛時，會偏向照顧對方的感受嗎？",
          "你喜歡用固定儀式感維持感情嗎？",
          "你喜歡臨時的小驚喜和自然互動嗎？",
        ],
      },
      {
        title: "關係節奏",
        hint: "看你想快一點確認，還是慢慢靠近。",
        insight: "關係節奏合不合，常常比喜不喜歡更影響長久相處。",
        questions: [
          "曖昧時，你會想知道對方到底怎麼想嗎？",
          "曖昧時，你需要時間慢慢確認自己的感覺嗎？",
          "你會在意對方的行動是否穩定一致嗎？",
          "你會在意這段關係有沒有成長空間嗎？",
          "你會直接討論兩個人的問題和期待嗎？",
          "你會先觀察兩個人相處起來舒不舒服嗎？",
          "你喜歡關係有清楚承諾嗎？",
          "你不喜歡關係太早被貼上固定標籤嗎？",
        ],
      },
      {
        title: "界線與依賴",
        hint: "看你需要多近、多自由。",
        insight: "好的界線不是疏遠，而是讓關係可以呼吸。",
        questions: [
          "你喜歡兩個人常常分享生活細節嗎？",
          "你需要保留一些只屬於自己的時間嗎？",
          "你會用實際界線確認彼此責任嗎？",
          "你會思考兩個人的自由和親密怎麼平衡嗎？",
          "對方太依賴你時，你會想講清楚界線嗎？",
          "對方太疏離時，你會很容易受傷嗎？",
          "你希望彼此對關係有明確規則嗎？",
          "你希望彼此可以保留彈性，不用什麼都報備嗎？",
        ],
      },
      {
        title: "長期相處模式",
        hint: "看你適合怎樣的長期關係。",
        insight: "長期關係不是永遠熱烈，而是兩個人的生活方式能不能磨合。",
        questions: [
          "你希望伴侶像隊友一樣能一起面對生活嗎？",
          "你希望伴侶尊重你的安靜和個人節奏嗎？",
          "你會重視生活習慣是否合得來嗎？",
          "你會重視兩個人是否有共同願景嗎？",
          "你希望長期關係能把問題理性處理掉嗎？",
          "你希望長期關係能一直保有溫柔和體諒嗎？",
          "你喜歡穩定可預期的長期關係嗎？",
          "你喜歡長期關係裡仍保有新鮮感嗎？",
        ],
      },
    ],
    identityResults: {
      E: "主動靠近型：你喜歡讓關係動起來，也需要對方有回應。",
      I: "慢熱確認型：你需要時間確認安全感，越真心越不想太草率。",
      S: "行動照顧型：你會用穩定行動表達愛，也重視對方是否說到做到。",
      N: "想像共鳴型：你需要能聊未來、價值和心裡世界的連結。",
      T: "坦白解題型：你希望關係裡的問題可以被誠實討論。",
      F: "高共感戀人：你很在意語氣、情緒和彼此是否被珍惜。",
      J: "穩定承諾型：你需要明確關係、固定節奏和可靠承諾。",
      P: "自由流動型：你需要自然、彈性，也希望愛不要變成壓力。",
    },
    advancedReport: [
      ["愛", "愛的語言", "你最容易用自己需要的方式去愛人，記得確認對方收不收得到。"],
      ["安", "安全感", "你的不安通常不是小題大作，而是某個訊號不夠清楚。"],
      ["吵", "衝突模式", "吵架時先分清楚：你要的是答案、理解，還是靠近。"],
      ["界", "界線提醒", "界線講得清楚，關係反而比較不會靠猜測消耗。"],
      ["久", "長期建議", "找一個能尊重你節奏，也願意一起修正的人。"],
    ],
  },
  friend: {
    label: "朋友",
    badge: "友",
    description: "交友、陪伴、信任、界線與被需要。",
    resultPrefix: "友情人格",
    stages: [
      {
        title: "交友方式",
        hint: "看你怎麼認識與靠近朋友。",
        insight: "你交朋友的方式，決定你需要熱鬧感還是深度感。",
        questions: [
          "認識新朋友時，你會主動開話題嗎？",
          "認識新朋友時，你會先觀察對方適不適合深交嗎？",
          "你會透過一起做事來變熟嗎？",
          "你會透過聊想法、聊人生來變熟嗎？",
          "交朋友時，你會先看對方是不是可靠嗎？",
          "交朋友時，你會先感受跟對方相處舒不舒服嗎？",
          "你喜歡固定幾個朋友穩定聯絡嗎？",
          "你喜歡朋友關係自然來，不想太有壓力嗎？",
        ],
      },
      {
        title: "陪伴風格",
        hint: "看朋友需要你時，你會怎麼在旁邊。",
        insight: "你陪伴人的方式，就是你友情裡最有辨識度的溫度。",
        questions: [
          "朋友難過時，你會想立刻陪他聊嗎？",
          "朋友難過時，你會安靜陪著，不一定說很多嗎？",
          "你會幫朋友處理實際問題嗎？",
          "你會陪朋友一起想這件事背後的意義嗎？",
          "你給建議時，會直接分析利弊嗎？",
          "你給建議時，會先接住朋友的情緒嗎？",
          "你會固定關心重要朋友的近況嗎？",
          "你比較常在朋友需要時才自然出現嗎？",
        ],
      },
      {
        title: "信任建立",
        hint: "看你怎麼判斷一個人能不能深交。",
        insight: "你信任人的標準，會保護你，也可能讓你錯過一些靠近。",
        questions: [
          "你會透過多互動來慢慢建立信任嗎？",
          "你需要很長時間，才會真的把心事說出來嗎？",
          "你會看對方是否說到做到來判斷信任嗎？",
          "你會看對方能不能理解你的想法來判斷信任嗎？",
          "朋友失約時，你會先評估原因合不合理嗎？",
          "朋友失約時，你會先感覺自己是不是不被重視嗎？",
          "一旦信任了，你會希望關係穩定下來嗎？",
          "你覺得朋友之間不用每天固定聯絡也可以很好嗎？",
        ],
      },
      {
        title: "衝突修復",
        hint: "看朋友吵架或疏遠時你怎麼處理。",
        insight: "你修復關係的方式，會透露你害怕失去什麼。",
        questions: [
          "跟朋友有誤會時，你會想主動講開嗎？",
          "跟朋友有誤會時，你會想先冷靜一陣子嗎？",
          "你會回想事情細節，找出誤會怎麼發生嗎？",
          "你會想這次衝突是不是代表關係變了嗎？",
          "你希望朋友可以把話講清楚、不要逃避嗎？",
          "你希望朋友先理解你的受傷感嗎？",
          "問題沒解決前，你會一直掛在心上嗎？",
          "你需要一點時間才知道要不要修復這段友情嗎？",
        ],
      },
      {
        title: "團體中的角色",
        hint: "看你在朋友圈裡自然扮演什麼位置。",
        insight: "朋友圈裡的你，不一定最大聲，但通常很有功能。",
        questions: [
          "朋友聚會時，你會帶動話題或氣氛嗎？",
          "朋友聚會時，你比較常聽大家說話嗎？",
          "你會注意聚會時間、地點、安排是否實際嗎？",
          "你常會提出一些不一樣的新玩法嗎？",
          "朋友意見不同時，你會想幫大家釐清誰比較有道理嗎？",
          "朋友意見不同時，你會先想讓大家不要受傷嗎？",
          "你會希望朋友圈裡的約定被遵守嗎？",
          "你可以接受朋友臨時改計畫嗎？",
        ],
      },
      {
        title: "界線感",
        hint: "看你怎麼拿捏靠近和距離。",
        insight: "你對界線的需求，會決定什麼友情讓你舒服。",
        questions: [
          "你喜歡跟朋友分享很多生活細節嗎？",
          "就算是好朋友，你也需要自己的私人空間嗎？",
          "你會用具體行動判斷朋友有沒有越界嗎？",
          "你會思考朋友之間怎樣才算健康距離嗎？",
          "朋友太依賴你時，你會想把界線講清楚嗎？",
          "朋友太疏離時，你會覺得有點受傷嗎？",
          "你希望朋友之間有基本規矩和尊重嗎？",
          "你覺得朋友不用什麼都說，也能保有關係嗎？",
        ],
      },
      {
        title: "被需要時的反應",
        hint: "看你在友情裡承擔多少。",
        insight: "被需要會讓你有價值感，也可能讓你不小心過度付出。",
        questions: [
          "朋友需要幫忙時，你會很快出現嗎？",
          "朋友需要幫忙時，你會先確認自己有沒有餘力嗎？",
          "你會先幫朋友找最實際的解法嗎？",
          "你會先陪朋友看懂自己真正卡在哪裡嗎？",
          "如果朋友一直重複同樣問題，你會想直接點醒他嗎？",
          "如果朋友一直重複同樣問題，你會先心疼他怎麼這麼辛苦嗎？",
          "你會把答應朋友的事放進自己的計畫裡嗎？",
          "如果朋友臨時需要你，你通常願意彈性調整嗎？",
        ],
      },
    ],
    identityResults: {
      E: "熱絡連結型：你擅長讓友情有流動感，也容易成為氣氛入口。",
      I: "深度陪伴型：你不是到處都在，但對重要朋友很有份量。",
      S: "實際支持型：你會用行動、可靠和細節讓朋友感覺安心。",
      N: "心靈共鳴型：你重視想法能不能被理解，也喜歡有深度的友情。",
      T: "清醒建議型：你會幫朋友看清問題，不只陪他一起陷下去。",
      F: "溫柔接住型：你很會感受朋友的情緒，也容易被朋友信任。",
      J: "穩定守約型：你重視承諾和秩序，是朋友眼中很可靠的人。",
      P: "彈性陪跑型：你不愛太制式的關係，但朋友需要時很能調整。",
    },
    advancedReport: [
      ["交", "交友模式", "你適合的友情不是數量多，而是互動方式對。"],
      ["陪", "陪伴方式", "先分辨朋友要的是解法、傾聽，還是一起面對。"],
      ["信", "信任線索", "你信任人的標準很重要，但也可以留一點觀察空間。"],
      ["界", "友情界線", "好朋友也需要界線，這不是冷淡，是讓關係長久。"],
      ["需", "被需要時", "幫忙前先確認自己的餘力，才不會把友情變成消耗。"],
    ],
  },
};

const identities = Object.fromEntries(
  Object.entries(identityDrafts).map(([id, identity]) => [
    id,
    {
      ...identity,
      questions: identity.stages.flatMap((stage) =>
        stage.questions.map((text, index) => ({
          dimension: pairForTrait(traitPattern[index]),
          trait: traitPattern[index],
          text,
          weight: 1,
        })),
      ),
    },
  ]),
);

const typeProfiles = {
  ISTJ: ["秩序型實踐者", "你穩定、可靠，擅長把複雜事情整理成可執行的步驟。"],
  ISFJ: ["溫柔型守護者", "你重視承諾與細節，常用實際行動照顧身邊的人。"],
  INFJ: ["洞察型引路人", "你敏銳、深思，擅長看見人與事情背後更深的意義。"],
  INTJ: ["策略型設計者", "你重視長期藍圖，喜歡用清楚邏輯打造更好的系統。"],
  ISTP: ["冷靜型解題者", "你務實、獨立，面對問題時能快速抓到關鍵並動手修正。"],
  ISFP: ["感受型創作者", "你細膩、真誠，重視當下感受與個人價值的自然表達。"],
  INFP: ["靈感型探索者", "你重視內在價值與真實感，會被有意義的可能性吸引。"],
  INTP: ["概念型分析者", "你喜歡拆解規則與概念，享受理解事情真正運作的方式。"],
  ESTP: ["行動型玩家", "你反應快、敢嘗試，擅長在變動現場找到機會。"],
  ESFP: ["熱力型體驗家", "你鮮明、親切，能把場域變得更有生命力。"],
  ENFP: ["火花型啟發者", "你充滿好奇與感染力，擅長把人和可能性連在一起。"],
  ENTP: ["辯證型創新者", "你喜歡挑戰假設，用新角度打開問題的另一種解法。"],
  ESTJ: ["效率型管理者", "你重視結果與責任，擅長讓混亂的事情進入正軌。"],
  ESFJ: ["連結型組織者", "你擅長照顧群體節奏，讓人感到被看見與被支持。"],
  ENFJ: ["鼓舞型領航者", "你能讀懂人的潛力，並把大家帶往共同的方向。"],
  ENTJ: ["遠征型指揮者", "你目標清楚、推進力強，擅長整合資源完成大事。"],
};

const storageKey = "mbti-flow-state-v2";
let state = loadState();

const els = {
  introView: document.querySelector("#introView"),
  quizView: document.querySelector("#quizView"),
  checkpointView: document.querySelector("#checkpointView"),
  resultView: document.querySelector("#resultView"),
  startForm: document.querySelector("#startForm"),
  nickname: document.querySelector("#nickname"),
  identityOptions: document.querySelector("#identityOptions"),
  stageTitle: document.querySelector("#stageTitle"),
  stageHint: document.querySelector("#stageHint"),
  progressText: document.querySelector("#progressText"),
  timeText: document.querySelector("#timeText"),
  progressBar: document.querySelector("#progressBar"),
  stageList: document.querySelector("#stageList"),
  mobileStage: document.querySelector("#mobileStage"),
  mobileProgress: document.querySelector("#mobileProgress"),
  mobileProgressBar: document.querySelector("#mobileProgressBar"),
  questionKicker: document.querySelector("#questionKicker"),
  questionText: document.querySelector("#questionText"),
  options: document.querySelector("#options"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton"),
  checkpointEyebrow: document.querySelector("#checkpointEyebrow"),
  checkpointTitle: document.querySelector("#checkpointTitle"),
  checkpointText: document.querySelector("#checkpointText"),
  continueButton: document.querySelector("#continueButton"),
  resultName: document.querySelector("#resultName"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  typeBadge: document.querySelector("#typeBadge"),
  dimensionBars: document.querySelector("#dimensionBars"),
  identityResultTitle: document.querySelector("#identityResultTitle"),
  identityResultText: document.querySelector("#identityResultText"),
  freeInsights: document.querySelector("#freeInsights"),
  advancedReport: document.querySelector("#advancedReport"),
  advancedInsights: document.querySelector("#advancedInsights"),
  unlockButton: document.querySelector("#unlockButton"),
  downloadShareButton: document.querySelector("#downloadShareButton"),
  retakeButton: document.querySelector("#retakeButton"),
  shareCanvas: document.querySelector("#shareCanvas"),
};

function pairForTrait(trait) {
  if (trait === "E" || trait === "I") return "EI";
  if (trait === "S" || trait === "N") return "SN";
  if (trait === "T" || trait === "F") return "TF";
  return "JP";
}

function initialState() {
  return { nickname: "", selectedIdentity: "student", current: 0, answers: [] };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (
      saved &&
      Array.isArray(saved.answers) &&
      identities[saved.selectedIdentity] &&
      Number.isInteger(saved.current)
    ) {
      return saved;
    }
  } catch {
    localStorage.removeItem(storageKey);
  }

  return initialState();
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function currentIdentity() {
  return identities[state.selectedIdentity] || identities.student;
}

function currentQuestions() {
  return currentIdentity().questions;
}

function stageIndexForQuestion(index) {
  return Math.floor(index / 8);
}

function show(view) {
  [els.introView, els.quizView, els.checkpointView, els.resultView].forEach((node) =>
    node.classList.add("hidden"),
  );
  view.classList.remove("hidden");
}

function renderIdentityOptions() {
  els.identityOptions.innerHTML = Object.entries(identities)
    .map(
      ([id, identity]) => `
        <button class="identity-card${id === state.selectedIdentity ? " selected" : ""}" type="button" data-identity="${id}">
          <strong>${identity.badge} ${identity.label}</strong>
          <span>${identity.description}</span>
        </button>
      `,
    )
    .join("");
}

function selectIdentity(id) {
  if (!identities[id]) return;
  const changed = state.selectedIdentity !== id;
  state.selectedIdentity = id;
  if (changed) {
    state.current = 0;
    state.answers = [];
  }
  saveState();
  renderIdentityOptions();
  buildStageList();
}

function buildStageList() {
  const identity = currentIdentity();
  els.stageList.innerHTML = identity.stages
    .map((stage, index) => `<li><span>${index + 1}</span>${stage.title}</li>`)
    .join("");
}

function renderQuestion() {
  const identity = currentIdentity();
  const questions = currentQuestions();

  if (state.current >= questions.length) {
    renderResult();
    return;
  }

  const stageIndex = stageIndexForQuestion(state.current);
  const stage = identity.stages[stageIndex];
  const question = questions[state.current];
  const percent = ((state.current + 1) / questions.length) * 100;

  show(els.quizView);
  els.stageTitle.textContent = stage.title;
  els.stageHint.textContent = `${identity.label}測驗 · ${stage.hint}`;
  els.progressText.textContent = `${state.current + 1} / ${questions.length}`;
  els.mobileProgress.textContent = `${state.current + 1} / ${questions.length}`;
  els.mobileProgressBar.style.width = `${percent}%`;
  els.mobileStage.textContent = stage.title;
  els.timeText.textContent = `剩約 ${Math.max(1, Math.ceil((questions.length - state.current) * 0.11))} 分鐘`;
  els.progressBar.style.width = `${percent}%`;
  els.questionKicker.textContent = `第 ${state.current + 1} 題 · ${identity.label} · ${stage.title}`;
  els.questionText.textContent = question.text;
  els.backButton.disabled = state.current === 0;

  [...els.stageList.children].forEach((item, index) => {
    item.className = "";
    if (index < stageIndex) item.classList.add("done");
    if (index === stageIndex) item.classList.add("active");
  });

  els.options.innerHTML = optionLabels
    .map((option) => {
      const selected = state.answers[state.current] === option.value ? " selected" : "";
      return `<button class="option-button${selected}" type="button" data-value="${option.value}">${option.label}</button>`;
    })
    .join("");
}

function answerCurrent(value) {
  state.answers[state.current] = value;
  state.current += 1;
  saveState();

  const justFinishedStage = state.current > 0 && state.current % 8 === 0;
  if (justFinishedStage && state.current < currentQuestions().length) {
    renderCheckpoint(stageIndexForQuestion(state.current - 1));
    return;
  }

  renderQuestion();
}

function renderCheckpoint(stageIndex) {
  const identity = currentIdentity();
  const stage = identity.stages[stageIndex];
  show(els.checkpointView);
  els.checkpointEyebrow.textContent = `${identity.label}測驗 · 完成第 ${stageIndex + 1} 關`;
  els.checkpointTitle.textContent = stage.title;
  els.checkpointText.textContent = stage.insight;
  els.continueButton.textContent =
    stageIndex + 1 >= identity.stages.length
      ? "查看結果"
      : `前往「${identity.stages[stageIndex + 1].title}」`;
}

function calculateScores() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  currentQuestions().forEach((question, index) => {
    const answer = state.answers[index] ?? 0;
    scores[question.trait] += (answer + 2) * question.weight;
  });

  const pairs = [
    ["E", "I"],
    ["S", "N"],
    ["T", "F"],
    ["J", "P"],
  ];

  const dimensions = pairs.map(([a, b]) => {
    const total = scores[a] + scores[b] || 1;
    const aPercent = Math.round((scores[a] / total) * 100);
    const bPercent = 100 - aPercent;
    return { a, b, aPercent, bPercent, winner: aPercent >= bPercent ? a : b };
  });

  return {
    scores,
    dimensions,
    type: dimensions.map((dimension) => dimension.winner).join(""),
  };
}

function renderResult() {
  const identity = currentIdentity();
  const result = calculateScores();
  const profile = typeProfiles[result.type] || typeProfiles.INFP;
  const nickname = state.nickname || "你";
  const identitySummary = result.type
    .split("")
    .map((trait) => identity.identityResults[trait])
    .filter(Boolean)
    .slice(0, 2)
    .join(" ");

  show(els.resultView);
  els.resultName.textContent = result.type;
  els.typeBadge.textContent = result.type;
  els.resultTitle.textContent = `${profile[0]} · ${identity.label}`;
  els.resultSummary.textContent = `${nickname}，${profile[1]} 這次你選的是「${identity.label}」身分，所以結果會把 MBTI 放回你的真實情境裡看。`;
  els.identityResultTitle.textContent = identity.resultPrefix;
  els.identityResultText.textContent = identitySummary;

  els.dimensionBars.innerHTML = result.dimensions
    .map(
      (dimension) => `
        <div class="dimension-row">
          <div class="dimension-meta">
            <span>${dimension.a} ${dimension.aPercent}%</span>
            <span>${dimension.b} ${dimension.bPercent}%</span>
          </div>
          <div class="split-bar">
            <span style="width: ${dimension.aPercent}%"></span>
          </div>
        </div>
      `,
    )
    .join("");

  els.freeInsights.innerHTML = [
    `身分入口：這次分析以「${identity.label}」情境為主，不會和其他身分答案混用。`,
    `主要能量：${result.type[0] === "E" ? "你在互動中更容易被點亮。" : "你需要安靜空間把自己整理回來。"}`,
    `判斷方式：${result.type[2] === "T" ? "你會先看事情是否合理、有效。" : "你會把感受、關係和溫度放進判斷。"}`,
    `行動節奏：${result.type[3] === "J" ? "你在有結構和清楚進度時更穩。" : "你在保有彈性時更容易發揮。"}`,
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");

  els.advancedReport.classList.add("hidden");
  els.unlockButton.textContent = `解鎖${identity.label}進階報告`;
  els.unlockButton.disabled = false;

  saveState();
}

function renderAdvancedReport() {
  const identity = currentIdentity();
  els.advancedInsights.innerHTML = identity.advancedReport
    .map(
      ([mark, title, text]) => `
        <article class="advanced-card">
          <span>${mark}</span>
          <h4>${title}</h4>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
  els.advancedReport.classList.remove("hidden");
  els.unlockButton.textContent = "已解鎖";
  els.unlockButton.disabled = true;
  els.advancedReport.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  const selectedIdentity = state.selectedIdentity || "student";
  state = { ...initialState(), selectedIdentity };
  localStorage.removeItem(storageKey);
  els.nickname.value = "";
  renderIdentityOptions();
  buildStageList();
  show(els.introView);
}

function downloadShareImage() {
  const identity = currentIdentity();
  const result = calculateScores();
  const profile = typeProfiles[result.type] || typeProfiles.INFP;
  const canvas = els.shareCanvas;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
  gradient.addColorStop(0, "#ff4d6d");
  gradient.addColorStop(0.38, "#ffd84d");
  gradient.addColorStop(0.68, "#35d6a5");
  gradient.addColorStop(1, "#246bfe");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  roundedRect(ctx, 90, 110, 900, 860, 36);
  ctx.fill();

  ctx.fillStyle = "#17181d";
  ctx.font = "900 140px sans-serif";
  ctx.fillText(result.type, 150, 335);
  ctx.font = "800 48px sans-serif";
  ctx.fillText(`${identity.label} · ${profile[0]}`, 150, 420);
  ctx.font = "500 34px sans-serif";
  wrapText(ctx, profile[1], 150, 510, 760, 56);

  ctx.font = "800 30px sans-serif";
  ctx.fillText("MBTI Flow Test", 150, 850);

  const link = document.createElement("a");
  link.download = `mbti-${identity.label}-${result.type}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  [...text].forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, y);
}

function roundedRect(ctx, x, y, width, height, radius) {
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, width, height, radius);
    return;
  }

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

els.identityOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-identity]");
  if (!button) return;
  selectIdentity(button.dataset.identity);
});

els.startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.nickname = els.nickname.value.trim();
  state.current = Math.min(state.current, state.answers.length);
  saveState();
  buildStageList();
  renderQuestion();
});

els.options.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-value]");
  if (!button) return;
  answerCurrent(Number(button.dataset.value));
});

els.backButton.addEventListener("click", () => {
  if (state.current === 0) return;
  state.current -= 1;
  saveState();
  renderQuestion();
});

els.resetButton.addEventListener("click", resetQuiz);
els.retakeButton.addEventListener("click", resetQuiz);
els.continueButton.addEventListener("click", renderQuestion);
els.downloadShareButton.addEventListener("click", downloadShareImage);
els.unlockButton.addEventListener("click", renderAdvancedReport);

renderIdentityOptions();
buildStageList();
els.nickname.value = state.nickname || "";

if (state.answers.length > 0 && state.current < currentQuestions().length) {
  renderQuestion();
} else if (state.current >= currentQuestions().length) {
  renderResult();
}
