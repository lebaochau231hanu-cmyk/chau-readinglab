/* =========================================================
   CHAU'S READING LAB · NGÂN HÀNG BÀI
   - Thứ tự các bài trong file này = thứ tự hiện trên trang chủ.
   - category: "Money" | "Education" | "Science" | "Others"  → hộp chủ đề trên trang chủ
   - level: "Easy" | "Medium" | "Hard"
   - hidden: true  → ẩn bài khỏi trang chủ (vẫn mở được bằng link #MÃBÀI).
   ========================================================= */
/* =========================================================
   NGÂN HÀNG BÀI ĐỌC
   Muốn thêm bài mới: copy 1 object trong TESTS và sửa nội dung.
   - passage: mảng; chuỗi = chữ thường, {b:"id"} = ô trống
   - words: các từ trong hộp (gồm cả từ gây nhiễu)
   - answers: id ô trống -> đáp án đúng
   ========================================================= */
window.TESTS = [
{
  code: "RFIB0001",
  category: "Money",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Business · Leadership",
  minutes: 5,
  warmup: {
    questions: [
      "Nếu được điều hành một công ty (run a company), điều gì sẽ quan trọng nhất với bạn?",
      "Những điều một nhà lãnh đạo (leader) ưu tiên có làm thay đổi cách mọi người nhìn nhận (view) họ không?"
    ],
    intro: "Đoạn văn dưới đây nói về một nghiên cứu (study) của các trường kinh doanh hàng đầu ở Arizona, Mỹ (Arizona's top business schools), về những ưu tiên (priorities) khác nhau của người đứng đầu doanh nghiệp. Khi đọc, hãy để ý xem hai cách điều hành nào đang được so sánh (compared) với nhau."
  },
  passage: [
    "Based on collaborative research by Arizona's top business schools, this study of leadership and company performance uncovers the effects of leadership driven by", {b:"1"},
    ", cost control, and maintaining market share, versus", {b:"2"},
    "driven more by balancing employee relations and development, customer or client", {b:"3"},
    ", and the welfare of the greater community. Together, Mary Sully de Luque, assistant professor of Management and Research Fellow at Thunderbird School of Global Management and David Waldman, director of the Center for Responsible Leadership at ASU's School of Global Management and Leadership, have found that maintaining a specific focus on earnings in", {b:"4"},
    "making can have negative on how a leader is viewed."
  ],
  words: ["profits","market","needs","pleas","leadership","decision"],
  answers: {"1":"profits","2":"leadership","3":"needs","4":"decision"},
  explain: {
    "1": {
      ctx: "…leadership driven by ___ , cost control, and maintaining market share…",
      grammar: [
        "Sau giới từ <b>by</b> cần một <b>danh từ / cụm danh từ / V-ing</b>.",
        "Ô trống đứng đầu một danh sách 3 thành phần song song: <i>___, cost control, and maintaining market share</i> → cần một danh từ cùng loại.",
        "Danh từ đếm được số ít (<i>market, decision</i>) không thể đứng một mình mà không có mạo từ <i>a/the</i> → loại."
      ],
      keep: ["profits","needs","pleas","leadership"],
      vocab: [
        "Hai thành phần còn lại (<i>cost control, market share</i>) đều thuộc nhóm <b>mục tiêu tài chính / cạnh tranh</b> của doanh nghiệp → <b>profits</b> (lợi nhuận) hợp nhất.",
        "Sắc thái: <i>profit</i> (không đếm được) là khái niệm \"lợi nhuận\" nói chung; <i>profits</i> (số nhiều) là <b>các khoản lãi cụ thể thu về</b>, nghe thực tế và \"tính toán\" hơn, đúng với kiểu lãnh đạo chạy theo con số. Câu cuối bài nhắc lại ý này bằng từ đồng nghĩa <i>earnings</i>.",
        "<i>leadership driven by leadership</i> vô nghĩa; <i>needs/pleas</i> thuộc phía \"con người\", trái với nhóm tài chính."
      ]
    },
    "2": {
      ctx: "…leadership driven by profits… versus ___ driven more by balancing employee relations…",
      grammar: [
        "<b>versus</b> nối hai vế <b>song song</b>: vế 1 là <i>leadership driven by…</i> (danh từ + rút gọn mệnh đề quan hệ bị động). Vế 2 phải cùng cấu trúc: <b>danh từ + driven by…</b>",
        "Ô trống không có mạo từ phía trước → cần danh từ <b>không đếm được</b> hoặc <b>số nhiều</b>. <i>market, decision</i> bị loại."
      ],
      keep: ["leadership","needs","pleas"],
      vocab: [
        "Bài nghiên cứu so sánh <b>hai kiểu lãnh đạo</b> → vế sau cũng phải là <b>leadership</b>. Đây là phép <b>lặp từ để đối chiếu</b> rất hay gặp trong văn học thuật.",
        "Sắc thái: <i>leadership</i> = <b>cách / phong cách lãnh đạo</b> (danh từ trừu tượng, không đếm được), khác với <i>leader</i> = người lãnh đạo. Vì vậy không cần <i>a/the</i>.",
        "<i>needs driven by balancing…</i> hay <i>pleas driven by…</i> không tạo ra phép so sánh có nghĩa."
      ]
    },
    "3": {
      ctx: "…balancing employee relations and development, customer or client ___ , and the welfare…",
      grammar: [
        "<i>customer or client</i> đóng vai trò <b>danh từ bổ nghĩa</b> (noun adjunct) → phía sau cần một <b>danh từ chính</b>.",
        "Không có mạo từ → danh từ số nhiều/không đếm được. Còn lại: <i>needs, pleas</i> (và <i>profits</i> đã dùng)."
      ],
      keep: ["needs","pleas"],
      vocab: [
        "<b>customer needs / client needs</b> = nhu cầu của khách hàng, là <b>collocation</b> rất phổ biến trong kinh doanh. Nhà lãnh đạo \"cân bằng\" (balance) các nhu cầu này.",
        "Sắc thái của bẫy <b>pleas</b>: <i>plea</i> là <b>lời khẩn cầu, van nài</b> mang cảm xúc mạnh, hoặc lời bào chữa trước toà (<i>a plea of guilty</i>). Khách hàng không \"van xin\" doanh nghiệp, họ có nhu cầu → <i>pleas</i> sai ngữ cảnh dù đúng ngữ pháp.",
        "Ô này nằm cùng nhóm với <i>employee relations</i> và <i>the welfare of the community</i>: tất cả đều hướng về <b>con người</b>."
      ]
    },
    "4": {
      ctx: "…maintaining a specific focus on earnings in ___ making can have negative…",
      grammar: [
        "<b>___ making</b> là danh từ ghép <b>N + V-ing</b>. Danh từ đứng đầu danh từ ghép thường để <b>số ít</b> (<i>decision making</i>, không nói <i>decisions making</i>).",
        "→ Loại các từ số nhiều còn lại: <i>pleas</i>, <i>market</i> vẫn còn."
      ],
      keep: ["decision","market"],
      vocab: [
        "<b>decision making</b> = quá trình ra quyết định. Câu muốn nói: khi lãnh đạo <b>chỉ chăm chăm vào lợi nhuận lúc ra quyết định</b> thì bị đánh giá kém hơn.",
        "Bẫy <b>market making</b>: cụm này có tồn tại nhưng là <b>thuật ngữ tài chính</b> (hoạt động \"tạo lập thị trường\" của nhà môi giới chứng khoán), không liên quan đến cách một CEO được nhìn nhận.",
        "Mẹo: <i>focus on earnings in decision making</i> = \"đặt lợi nhuận làm trọng tâm khi ra quyết định\"."
      ]
    }
  },
  /* Bài ôn 1: nối collocation (vế trái + vế phải) */
  collocations: [
    {a:"cost", b:"control"},
    {a:"maintain", b:"market share"},
    {a:"customer", b:"needs"},
    {a:"decision", b:"making"},
    {a:"be driven", b:"by profits"},
    {a:"the welfare of", b:"the community"}
  ],
  /* Bài ôn 2: nối nghĩa = dùng luôn danh sách vocabulary (term ↔ mean) */
  vocabulary: [
    {term:"be driven by sth", type:"phrase · bị động", mean:"bị thúc đẩy / chi phối bởi điều gì", ex:"Her choices are driven by passion, not money."},
    {term:"cost control", type:"noun phrase", mean:"kiểm soát chi phí", ex:"Strict cost control helped the start-up survive."},
    {term:"maintain market share", type:"collocation", mean:"giữ vững thị phần", ex:"The brand cut prices to maintain its market share."},
    {term:"customer needs", type:"collocation", mean:"nhu cầu của khách hàng", ex:"Good products start with understanding customer needs."},
    {term:"decision making", type:"compound noun", mean:"việc / quá trình ra quyết định", ex:"Teenagers should be involved in family decision making."}
  ]
},
{
  code: "RFIB0004",
  category: "Science",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Climate · The Sun",
  minutes: 5,
  warmup: {
    questions: [
      "Theo bạn, Mặt Trời (the Sun) ảnh hưởng thế nào đến khí hậu (climate) của Trái Đất?",
      "Nhiệt độ toàn cầu (global temperature) đang tăng lên vì những nguyên nhân nào?"
    ],
    intro: "Đoạn văn ngắn dưới đây bàn về vai trò của Mặt Trời trong hiện tượng biến đổi khí hậu (climate change) vài chục năm gần đây, dựa trên dữ liệu từ vệ tinh (satellite data). Khi đọc, hãy để ý xem tác giả có cho rằng Mặt Trời là nguyên nhân chính hay không."
  },
  passage: [
    "The Sun provides the primary source of energy driving Earth's climate system, but its", {b:"1"},
    "have played very little role in the climate changes", {b:"2"},
    "in recent decades. Direct satellite", {b:"3"},
    "since the late 1970s show no net increase in the Sun's", {b:"4"},
    ", while at the same time global surface temperatures have increased."
  ],
  words: ["outcome","varieties","inspected","variations","observed","measurements","output"],
  answers: {"1":"variations","2":"observed","3":"measurements","4":"output"},
  explain: {
    "1": {
      ctx: "…but its ___ have played very little role in the climate changes…",
      grammar: [
        "Sau tính từ sở hữu <b>its</b> cần một <b>danh từ</b>.",
        "Động từ theo sau là <b>have played</b> (số nhiều) → danh từ phải ở dạng <b>số nhiều</b>.",
        "Loại <i>inspected, observed</i> (động từ/phân từ) và <i>outcome, output</i> (số ít)."
      ],
      keep: ["varieties","variations","measurements"],
      vocab: [
        "<b>variations</b> = những sự dao động, thay đổi lên xuống (ở đây là mức năng lượng của Mặt Trời thay đổi theo thời gian).",
        "Bẫy <b>varieties</b>: nghĩa là <i>các chủng loại, sự đa dạng</i> (varieties of rice). Mặt Trời không có \"nhiều chủng loại\" → sai nghĩa dù đúng dạng từ.",
        "<i>measurements</i> là các phép đo, không thể tự \"đóng vai trò gây ra\" biến đổi khí hậu. Từ này dành cho ô 3."
      ]
    },
    "2": {
      ctx: "…very little role in the climate changes ___ in recent decades.",
      grammar: [
        "Câu đã có động từ chính (<i>have played</i>). Sau cụm danh từ <i>the climate changes</i> cần một <b>phân từ II (V3/ed)</b> để rút gọn mệnh đề quan hệ bị động: <i>changes (which have been) ___</i>.",
        "Chỉ còn hai phân từ: <i>inspected, observed</i>."
      ],
      keep: ["inspected","observed"],
      vocab: [
        "<b>observed</b> = được quan sát, ghi nhận. Đây là cách nói chuẩn trong văn khoa học: <i>observed changes / observed warming</i>.",
        "Bẫy <b>inspected</b>: nghĩa là <i>được kiểm tra kỹ</i> bởi một người cụ thể (máy móc, nhà cửa, hàng hoá được thanh tra). Không ai \"thanh tra\" biến đổi khí hậu."
      ]
    },
    "3": {
      ctx: "Direct satellite ___ since the late 1970s show no net increase…",
      grammar: [
        "<i>satellite</i> ở đây là danh từ làm bổ nghĩa → phía sau cần <b>danh từ chính</b>.",
        "Động từ <b>show</b> (không có -s) → chủ ngữ <b>số nhiều</b>.",
        "Còn lại: <i>varieties, measurements</i>."
      ],
      keep: ["varieties","measurements"],
      vocab: [
        "<b>satellite measurements</b> = số liệu đo đạc từ vệ tinh. Số liệu thì mới \"cho thấy\" (<i>show</i>) một kết quả.",
        "<i>satellite varieties</i> (các loại vệ tinh) không thể \"cho thấy không có mức tăng\"."
      ]
    },
    "4": {
      ctx: "…show no net increase in the Sun's ___, while at the same time…",
      grammar: [
        "Sau sở hữu cách <b>the Sun's</b> cần một <b>danh từ</b>.",
        "Cụm <i>an increase in + N</i>: danh từ chỉ thứ có thể tăng/giảm. Còn lại: <i>outcome, output, varieties</i>."
      ],
      keep: ["outcome","output","varieties"],
      vocab: [
        "<b>output</b> = sản lượng, lượng phát ra. <i>The Sun's (energy) output</i> là lượng năng lượng Mặt Trời toả ra, thứ có thể đo và tăng giảm.",
        "Bẫy <b>outcome</b>: nghĩa là <i>kết quả, kết cục</i> của một sự việc (the outcome of the match). Hai từ trông giống nhau nhưng <i>out-put</i> là \"đưa ra\" còn <i>out-come</i> là \"cái xảy ra sau cùng\"."
      ]
    }
  },
  collocations: [
    {a:"primary", b:"source of energy"},
    {a:"play a", b:"role"},
    {a:"satellite", b:"measurements"},
    {a:"net", b:"increase"},
    {a:"global surface", b:"temperatures"},
    {a:"the late", b:"1970s"}
  ],
  vocabulary: [
    {term:"primary source", type:"noun phrase", mean:"nguồn chính, nguồn chủ yếu", ex:"Rice is the primary source of energy in many Asian diets."},
    {term:"play a role in", type:"collocation", mean:"đóng vai trò trong", ex:"Sleep plays a big role in how well you learn."},
    {term:"variation", type:"noun", mean:"sự dao động, sự thay đổi (lên xuống)", ex:"There is little variation in temperature here all year."},
    {term:"net increase", type:"noun phrase", mean:"mức tăng ròng (sau khi đã trừ phần giảm)", ex:"The town saw a net increase of 500 residents."},
    {term:"energy output", type:"noun phrase", mean:"lượng năng lượng phát ra", ex:"Solar panels have a lower energy output in winter."}
  ]
},
{
  code: "RFIB0005",
  category: "Science",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Animals · How they move",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn có biết loài vật nào di chuyển theo cách rất đặc biệt, ví dụ đi trên mặt nước (walk on water) hay leo tường (climb walls)?",
      "Con người có thể học được gì từ loài vật (animals) để tạo ra công nghệ mới?"
    ],
    intro: "Đoạn văn giới thiệu một cuốn sách khoa học (science book) của nhà nghiên cứu David Hu về cách loài vật thích nghi (adapt) với môi trường sống. Khi đọc, hãy để ý xem mỗi loài được nhắc đến di chuyển ra sao."
  },
  passage: [
    "Insects walk on water, snakes", {b:"1"},
    ", and fish swim. Animals move with astounding grace, speed, and versatility: how do they do it, and what can we learn from them? How to Walk on Water and Climb up Walls takes readers on a wondrous journey into the world of animal", {b:"2"},
    ". From basement labs at MIT to the rain forests of Panama, David Hu shows how animals have adapted and evolved to", {b:"3"},
    "their environments, taking advantage of physical laws with results that are startling and ingenious."
  ],
  words: ["slither","hobby","traverse","motion","flinch","enhance"],
  answers: {"1":"slither","2":"motion","3":"traverse"},
  explain: {
    "1": {
      ctx: "Insects walk on water, snakes ___, and fish swim.",
      grammar: [
        "Câu gồm 3 vế <b>song song</b>: <i>Insects walk…, snakes ___, and fish swim</i> → cần <b>động từ</b> ở thì hiện tại đơn, chủ ngữ số nhiều → dạng nguyên thể.",
        "Vế này kết thúc ngay sau ô trống (không có tân ngữ) → cần <b>nội động từ</b>. Loại <i>hobby, motion</i> (danh từ) và <i>traverse, enhance</i> (ngoại động từ, cần tân ngữ)."
      ],
      keep: ["slither","flinch"],
      vocab: [
        "<b>slither</b> = trườn, bò uốn lượn. Đây chính là cách di chuyển đặc trưng của rắn, nằm cùng chuỗi <i>walk</i> (côn trùng), <i>swim</i> (cá).",
        "Bẫy <b>flinch</b>: nghĩa là <i>giật mình, co rúm lại</i> vì sợ hay đau. Đó là phản xạ, không phải cách di chuyển."
      ]
    },
    "2": {
      ctx: "…a wondrous journey into the world of animal ___.",
      grammar: [
        "<i>animal</i> làm danh từ bổ nghĩa → cần <b>danh từ chính</b> phía sau.",
        "Còn lại: <i>hobby, motion</i>."
      ],
      keep: ["hobby","motion"],
      vocab: [
        "<b>animal motion</b> = sự chuyển động của động vật. Cả đoạn văn xoay quanh việc di chuyển: <i>walk, swim, move, speed, climb</i>.",
        "<i>hobby</i> (sở thích) là của con người, không liên quan đến chủ đề."
      ]
    },
    "3": {
      ctx: "…animals have adapted and evolved to ___ their environments…",
      grammar: [
        "Sau <b>to</b> (chỉ mục đích) cần <b>động từ nguyên thể</b>.",
        "Phía sau có tân ngữ <i>their environments</i> → cần <b>ngoại động từ</b>. Loại <i>flinch</i> (nội động từ)."
      ],
      keep: ["traverse","enhance"],
      vocab: [
        "<b>traverse</b> = băng qua, di chuyển xuyên qua (một vùng địa hình). Khớp với ý: loài vật tiến hoá để di chuyển được trong môi trường của chúng.",
        "Bẫy <b>enhance</b>: nghĩa là <i>nâng cao, cải thiện</i> (enhance your skills). Loài vật thích nghi <i>với</i> môi trường chứ không \"cải thiện\" môi trường."
      ]
    }
  },
  collocations: [
    {a:"walk on", b:"water"},
    {a:"climb up", b:"walls"},
    {a:"astounding", b:"grace"},
    {a:"take advantage", b:"of physical laws"},
    {a:"rain", b:"forests"},
    {a:"basement", b:"labs"}
  ],
  vocabulary: [
    {term:"slither", type:"verb", mean:"trườn, bò uốn lượn (như rắn)", ex:"A snake slithered across the path."},
    {term:"traverse", type:"verb · formal", mean:"băng qua, đi xuyên qua", ex:"The explorers traversed the desert in ten days."},
    {term:"astounding", type:"adjective", mean:"đáng kinh ngạc", ex:"She learned English at an astounding speed."},
    {term:"versatility", type:"noun", mean:"sự linh hoạt, đa năng", ex:"The versatility of this tool makes it useful at home."},
    {term:"take advantage of", type:"phrase", mean:"tận dụng", ex:"Take advantage of the holiday to rest."}
  ]
},
{
  code: "RFIB0006",
  category: "Science",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Environment · Pollution",
  minutes: 5,
  warmup: {
    questions: [
      "Hằng ngày, những chất gì đang bị thải vào không khí, nước và đất (air, water and soil)?",
      "Ô nhiễm (pollution) ảnh hưởng thế nào đến động vật và cây cối?"
    ],
    intro: "Đoạn văn nói về các chất độc hại và không độc hại (toxic and non-toxic substances) mà nền văn minh hiện đại (modern civilization) đưa vào môi trường. Khi đọc, hãy để ý tác giả mô tả hậu quả của những chất này đối với môi trường và sinh vật."
  },
  passage: [
    "There are a number of substances (toxic as well as non-toxic) which are being added to the environment by pollution-caused", {b:"1"},
    ". These are, in fact, the undesirable consequences of modern civilization. These substances, which are continuously going into air, water and soil, bring about undesirable", {b:"2"},
    "in physical, chemical and biological", {b:"3"},
    "of our environment and the life", {b:"4"},
    "of animals and plants."
  ],
  words: ["possessions","changes","events","aspects","processes","intentions"],
  answers: {"1":"events","2":"changes","3":"aspects","4":"processes"},
  explain: {
    "1": {
      ctx: "…being added to the environment by pollution-caused ___.",
      grammar: [
        "Sau tính từ ghép <b>pollution-caused</b> (do ô nhiễm gây ra) cần một <b>danh từ</b>. Không có mạo từ → danh từ <b>số nhiều</b>.",
        "Cả 6 lựa chọn đều là danh từ số nhiều, nên ở bài này bước ngữ pháp chỉ xác định được loại từ. Phải dựa vào nghĩa ở bước 2."
      ],
      keep: ["possessions","changes","events","aspects","processes","intentions"],
      vocab: [
        "<i>by + N</i> trong câu bị động chỉ <b>tác nhân</b> đưa các chất vào môi trường → cần thứ có thể \"xảy ra\" và gây ô nhiễm.",
        "<b>events</b> = các sự kiện, sự cố (như tràn dầu, cháy rừng, rò rỉ hoá chất). <i>pollution-caused events</i> = các sự cố gây ô nhiễm.",
        "<i>possessions</i> (tài sản) và <i>intentions</i> (ý định) không thể thải chất vào môi trường. <i>changes, aspects, processes</i> cần cho các ô sau."
      ]
    },
    "2": {
      ctx: "These substances… bring about undesirable ___ in physical, chemical…",
      grammar: [
        "<b>bring about</b> (= gây ra) là cụm động từ cần <b>tân ngữ là danh từ</b>; trước đó có tính từ <i>undesirable</i>.",
        "Phía sau là giới từ <b>in</b> → danh từ phải đi được với <i>in</i>: <i>a change in sth</i>."
      ],
      keep: ["changes","aspects","processes"],
      vocab: [
        "<b>bring about changes in</b> = gây ra những thay đổi về… là collocation rất phổ biến.",
        "<i>aspects in</i> không tự nhiên; ta nói <i>aspects <b>of</b></i>. Đó là gợi ý cho ô 3."
      ]
    },
    "3": {
      ctx: "…in physical, chemical and biological ___ of our environment…",
      grammar: [
        "Sau chuỗi tính từ <i>physical, chemical and biological</i> cần <b>danh từ</b>; phía sau là giới từ <b>of</b>."
      ],
      keep: ["aspects","processes"],
      vocab: [
        "<b>aspects of sth</b> = các khía cạnh, các mặt của cái gì. <i>The physical, chemical and biological aspects of our environment</i> = các mặt vật lý, hoá học và sinh học của môi trường.",
        "<i>processes</i> cũng đi được với <i>of</i>, nhưng ô 4 cần đúng từ này trong cụm cố định <i>life processes</i>."
      ]
    },
    "4": {
      ctx: "…and the life ___ of animals and plants.",
      grammar: [
        "<b>life ___</b> là danh từ ghép (N + N). Danh từ chính đứng sau, ở dạng số nhiều."
      ],
      keep: ["processes"],
      vocab: [
        "<b>life processes</b> = các quá trình sống (hô hấp, tiêu hoá, sinh trưởng, sinh sản). Đây là thuật ngữ sinh học quen thuộc.",
        "Sắc thái: <i>process</i> nhấn vào <b>chuỗi hoạt động diễn ra liên tục</b>, khác với <i>event</i> là một sự việc xảy ra tại một thời điểm."
      ]
    }
  },
  collocations: [
    {a:"undesirable", b:"consequences"},
    {a:"bring", b:"about"},
    {a:"modern", b:"civilization"},
    {a:"life", b:"processes"},
    {a:"toxic as well as", b:"non-toxic"},
    {a:"air, water", b:"and soil"}
  ],
  vocabulary: [
    {term:"toxic", type:"adjective", mean:"độc hại", ex:"Some cleaning products contain toxic chemicals."},
    {term:"undesirable consequences", type:"noun phrase", mean:"những hậu quả không mong muốn", ex:"Skipping breakfast can have undesirable consequences."},
    {term:"bring about", type:"phrasal verb", mean:"gây ra, mang lại (một sự thay đổi)", ex:"The internet has brought about huge changes in education."},
    {term:"aspects of", type:"noun + prep", mean:"các khía cạnh, các mặt của", ex:"We discussed all aspects of the problem."},
    {term:"life processes", type:"compound noun", mean:"các quá trình sống", ex:"Breathing is one of the basic life processes."}
  ]
},
{
  code: "RFIB0009",
  category: "Money",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Shopping · Smart spending",
  minutes: 5,
  warmup: {
    questions: [
      "Trước khi mua một món đồ đắt tiền, bạn thường làm gì?",
      "Làm sao để tiết kiệm tiền (save money) khi đi mua sắm (go shopping)?"
    ],
    intro: "Đoạn văn đưa ra một vài lời khuyên để mua sắm thông minh và tiết kiệm về lâu dài (in the long run). Khi đọc, hãy để ý những việc tác giả khuyên nên làm trước khi bỏ tiền ra."
  },
  passage: [
    "So what principles should you", {b:"1"},
    "when you go out shopping? If you keep your home, your car or any valuable", {b:"2"},
    "in excellent condition, you'll be saving money in the long run. Before you buy a new", {b:"3"},
    ", talk to someone who owns one. If you can, use it or borrow it to check it suits your particular purpose. Before you buy an expensive", {b:"4"},
    ", or a service, do check the price and what is on offer. If possible, choose", {b:"5"},
    "three items or three estimates."
  ],
  words: ["from","in","possession","adopt","element","material","item","appliance"],
  answers: {"1":"adopt","2":"possession","3":"appliance","4":"item","5":"from"},
  explain: {
    "1": {
      ctx: "So what principles should you ___ when you go out shopping?",
      grammar: [
        "Sau động từ khuyết thiếu <b>should</b> (câu hỏi đảo ngữ <i>should you</i>) cần <b>động từ nguyên thể</b>.",
        "Trong hộp chỉ có <b>adopt</b> là động từ. Các từ còn lại là danh từ hoặc giới từ."
      ],
      keep: ["adopt"],
      vocab: [
        "<b>adopt principles</b> = áp dụng, theo đuổi các nguyên tắc. <i>adopt</i> còn có nghĩa \"nhận nuôi\", nhưng đi với <i>principles / a method / an approach</i> thì nghĩa là <b>chọn và bắt đầu áp dụng</b>."
      ]
    },
    "2": {
      ctx: "…your home, your car or any valuable ___ in excellent condition…",
      grammar: [
        "Sau tính từ <b>valuable</b> cần <b>danh từ</b>; <i>any</i> + danh từ đếm được số ít ở đây.",
        "Loại <i>from, in</i> (giới từ) và <i>adopt</i> (động từ)."
      ],
      keep: ["possession","element","material","item","appliance"],
      vocab: [
        "<b>a valuable possession</b> = một tài sản quý giá. Đây là cụm rất cố định, và nằm cùng danh sách <i>your home, your car</i>: những thứ <b>bạn sở hữu</b>.",
        "<i>element</i> (yếu tố), <i>material</i> (vật liệu) không phải thứ ta \"giữ trong tình trạng tốt\" như nhà, xe."
      ]
    },
    "3": {
      ctx: "Before you buy a new ___, talk to someone who owns one… use it or borrow it…",
      grammar: [
        "Sau <i>a new</i> cần <b>danh từ đếm được số ít</b>.",
        "Lưu ý: mạo từ <i>a/an</i> phụ thuộc vào từ đứng ngay sau nó (<i>new</i>), nên không giúp loại từ ở đây."
      ],
      keep: ["element","material","item","appliance"],
      vocab: [
        "Các manh mối: <i>owns one, use it, borrow it, suits your purpose</i> → một <b>thiết bị cụ thể</b> có thể dùng thử và mượn.",
        "<b>appliance</b> = thiết bị, đồ gia dụng (máy giặt, tủ lạnh, nồi cơm điện). <i>item</i> quá chung chung và cần cho ô 4."
      ]
    },
    "4": {
      ctx: "Before you buy an expensive ___, or a service…",
      grammar: [
        "Sau <i>an expensive</i> cần <b>danh từ đếm được số ít</b>.",
        "Còn lại: <i>element, material, item</i>."
      ],
      keep: ["element","material","item"],
      vocab: [
        "Cụm <i>___, or a service</i> đối lập <b>hàng hoá</b> với <b>dịch vụ</b> → cần một từ chung chỉ \"món hàng\": <b>item</b>.",
        "Sắc thái: <i>item</i> = một món, một mặt hàng nói chung; <i>appliance</i> = riêng thiết bị dùng điện/máy móc trong nhà."
      ]
    },
    "5": {
      ctx: "If possible, choose ___ three items or three estimates.",
      grammar: [
        "Trước cụm danh từ <i>three items</i> cần một <b>giới từ</b>: <i>from</i> hoặc <i>in</i>."
      ],
      keep: ["from","in"],
      vocab: [
        "<b>choose from</b> = chọn trong số (nhiều lựa chọn). Ý là: nên so sánh ít nhất ba món hàng hoặc ba bảng báo giá rồi mới chọn.",
        "<i>choose in</i> không phải cách kết hợp đúng."
      ]
    }
  },
  collocations: [
    {a:"adopt", b:"principles"},
    {a:"a valuable", b:"possession"},
    {a:"in the long", b:"run"},
    {a:"in excellent", b:"condition"},
    {a:"suit your particular", b:"purpose"},
    {a:"what is on", b:"offer"}
  ],
  vocabulary: [
    {term:"adopt", type:"verb", mean:"áp dụng, chọn theo (cách làm, nguyên tắc)", ex:"Our school adopted a new teaching method."},
    {term:"valuable possession", type:"noun phrase", mean:"tài sản quý giá", ex:"His bike is his most valuable possession."},
    {term:"in the long run", type:"idiom", mean:"về lâu dài", ex:"Studying a little every day pays off in the long run."},
    {term:"appliance", type:"noun", mean:"thiết bị, đồ gia dụng", ex:"Turn off kitchen appliances when you go out."},
    {term:"on offer", type:"phrase", mean:"đang được bán / được cung cấp (thường kèm ưu đãi)", ex:"Check what is on offer before you sign up."}
  ]
},
{
  code: "RFIB0010",
  category: "Others",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Digital media · Copyright",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn có hay tải nhạc, phim hay sách trên mạng không? Việc đó có liên quan gì đến bản quyền (copyright) không?",
      "Theo bạn, kiến thức (knowledge) có nên được chia sẻ miễn phí cho mọi người không?"
    ],
    intro: "Đoạn văn bàn về ảnh hưởng của Internet và phương tiện số (digital media) đối với luật sở hữu trí tuệ (IP law). Khi đọc, hãy để ý hai xu hướng trái ngược nhau mà tác giả nhắc tới."
  },
  passage: [
    "Digital media and the internet have made the sharing of texts, music and images easier than ever, and the", {b:"1"},
    "of copyright restriction harder. This situation has encouraged the growth of IP law, and", {b:"2"},
    "increased industrial concentration on extending and 'policing' IP protection, while also leading to the growth of an 'open access', or 'creative commons' movement which", {b:"3"},
    "such control of knowledge and", {b:"4"},
    "."
  ],
  words: ["prompted","creativity","changed","enforcement","advocates","challenges","enactment","conformity"],
  answers: {"1":"enforcement","2":"prompted","3":"challenges","4":"creativity"},
  explain: {
    "1": {
      ctx: "…made the sharing of texts… easier than ever, and the ___ of copyright restriction harder.",
      grammar: [
        "Sau <b>the</b> và trước <b>of</b> cần một <b>danh từ</b>.",
        "Cấu trúc song song <i>made [the sharing of…] easier and [the ___ of…] harder</i> → cần danh từ chỉ <b>một hành động</b>, giống <i>sharing</i>.",
        "Loại <i>prompted, changed</i> (động từ). Danh từ chỉ hành động còn lại: <i>enforcement, enactment</i>."
      ],
      keep: ["enforcement","enactment","challenges","creativity","conformity","advocates"],
      vocab: [
        "<b>enforcement</b> = việc thực thi, bắt buộc tuân theo (luật, quy định). Internet làm cho việc <b>thực thi</b> giới hạn bản quyền khó hơn, vì ai cũng chia sẻ được.",
        "Bẫy <b>enactment</b>: nghĩa là <i>việc ban hành</i> một đạo luật (quốc hội thông qua luật). Internet không làm việc ban hành luật khó hơn.",
        "Mẹo phân biệt: <i>enact a law</i> (làm ra luật) → <i>enforce a law</i> (bắt mọi người tuân theo luật)."
      ]
    },
    "2": {
      ctx: "This situation has encouraged the growth of IP law, and ___ increased industrial concentration…",
      grammar: [
        "<b>and</b> nối hai động từ cùng chủ ngữ <i>This situation has…</i>: <i>has encouraged … and (has) ___</i> → cần <b>phân từ II (V3/ed)</b>.",
        "Còn lại: <i>prompted, changed</i>."
      ],
      keep: ["prompted","changed"],
      vocab: [
        "<b>prompt sth</b> = thúc đẩy, khiến điều gì xảy ra. <i>prompted increased concentration</i> = khiến các ngành công nghiệp tập trung nhiều hơn vào việc bảo vệ bản quyền.",
        "<i>changed increased concentration</i> vô nghĩa. Ngoài ra <i>prompted</i> đi cùng ý với <i>encouraged</i> phía trước (cùng chỉ nguyên nhân dẫn tới)."
      ]
    },
    "3": {
      ctx: "…an 'open access', or 'creative commons' movement which ___ such control…",
      grammar: [
        "Đây là động từ của mệnh đề quan hệ <i>which ___</i>; chủ ngữ là <i>movement</i> (số ít) → động từ có <b>-s</b> ở thì hiện tại.",
        "Còn lại: <i>advocates, challenges</i>."
      ],
      keep: ["advocates","challenges"],
      vocab: [
        "Phong trào <i>open access</i> (truy cập mở) muốn chia sẻ kiến thức tự do, tức là <b>chống lại</b> việc kiểm soát → <b>challenges</b> (thách thức, phản đối).",
        "Bẫy <b>advocates</b>: nghĩa là <i>ủng hộ, cổ vũ</i>, ngược hẳn ý. Từ <i>while also</i> báo hiệu một xu hướng <b>trái chiều</b> với việc \"policing\" bản quyền."
      ]
    },
    "4": {
      ctx: "…which challenges such control of knowledge and ___.",
      grammar: [
        "<b>and</b> nối với <i>knowledge</i> → cần một <b>danh từ</b> cùng loại (không đếm được, trừu tượng).",
        "Còn lại: <i>creativity, conformity</i>."
      ],
      keep: ["creativity","conformity"],
      vocab: [
        "<b>creativity</b> = sự sáng tạo. Gợi ý ngay trong bài: tên phong trào <i>creative commons</i>. Luật bản quyền kiểm soát <b>tri thức và sản phẩm sáng tạo</b>.",
        "<i>conformity</i> = sự tuân thủ, làm theo số đông. Không ai \"kiểm soát sự tuân thủ\" bằng luật bản quyền."
      ]
    }
  },
  collocations: [
    {a:"copyright", b:"restriction"},
    {a:"IP", b:"law"},
    {a:"industrial", b:"concentration"},
    {a:"open", b:"access"},
    {a:"creative", b:"commons"},
    {a:"easier than", b:"ever"}
  ],
  vocabulary: [
    {term:"copyright", type:"noun", mean:"bản quyền", ex:"You can't use this song without copyright permission."},
    {term:"enforcement", type:"noun", mean:"sự thực thi (luật, quy định)", ex:"Law enforcement is weak in this area."},
    {term:"prompt (v)", type:"verb", mean:"thúc đẩy, khiến (điều gì) xảy ra", ex:"The news prompted many people to donate."},
    {term:"challenge (v)", type:"verb", mean:"thách thức, phản đối, đặt nghi vấn", ex:"Students are encouraged to challenge old ideas."},
    {term:"open access", type:"noun phrase", mean:"truy cập mở (tài liệu miễn phí cho mọi người)", ex:"Many research papers are now open access."}
  ]
},
{
  code: "RFIB0018",
  category: "Others",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "History · Music in ancient Egypt",
  minutes: 5,
  warmup: {
    questions: [
      "Âm nhạc (music) quan trọng thế nào trong cuộc sống của bạn?",
      "Bạn biết gì về Ai Cập cổ đại (ancient Egypt) và các vị vua pharaoh?"
    ],
    intro: "Đoạn văn nói về vị trí của âm nhạc trong đời sống người Ai Cập cổ đại, dựa trên những gì các nhà nghiên cứu tìm thấy trong văn tự cổ (ancient writings). Khi đọc, hãy để ý xem âm nhạc trở nên quan trọng hơn từ khi nào."
  },
  passage: [
    "Music was as important to the ancient Egyptians as it is in our modern society. Although it is thought that music played a", {b:"1"},
    "throughout the history of Egypt, those that", {b:"2"},
    "the Egyptian writings have discovered that music", {b:"3"},
    "to become more important in what is called the 'pharaonic'", {b:"4"},
    "of their history. This was the", {b:"5"},
    "when the Egyptian dynasties of the pharaohs were", {b:"6"},
    "(around 3100 BCE) and music was found in many parts of every day Egyptian life."
  ],
  words: ["time","period","showed","established","study","seemed","history","role"],
  answers: {"1":"role","2":"study","3":"seemed","4":"period","5":"time","6":"established"},
  explain: {
    "1": {
      ctx: "…it is thought that music played a ___ throughout the history of Egypt…",
      grammar: [
        "Sau mạo từ <b>a</b> cần <b>danh từ đếm được số ít</b>.",
        "Loại các động từ <i>showed, established, seemed</i>. Còn lại: <i>time, period, study, history, role</i>."
      ],
      keep: ["time","period","study","history","role"],
      vocab: [
        "<b>play a role</b> = đóng một vai trò. Đây là collocation cố định: động từ <i>play</i> gần như luôn đi với <i>role/part</i>.",
        "<i>play a time / play a period</i> không có nghĩa."
      ]
    },
    "2": {
      ctx: "…those that ___ the Egyptian writings have discovered that…",
      grammar: [
        "<i>those that ___</i> là mệnh đề quan hệ, <i>those</i> (những người) số nhiều. Sau ô trống có tân ngữ <i>the Egyptian writings</i> → cần <b>ngoại động từ</b>.",
        "<i>seemed</i> không có tân ngữ → loại. Còn lại: <i>study, showed, established</i>."
      ],
      keep: ["study","showed","established"],
      vocab: [
        "<b>those that study the Egyptian writings</b> = những người nghiên cứu văn tự Ai Cập, tức các nhà Ai Cập học. Họ mới là người <i>have discovered</i> (đã phát hiện ra).",
        "<i>showed the writings</i> (cho xem văn tự) hay <i>established the writings</i> (thành lập văn tự) không hợp nghĩa.",
        "Lưu ý: <i>study</i> ở đây là <b>động từ</b> (nghiên cứu), không phải danh từ."
      ]
    },
    "3": {
      ctx: "…have discovered that music ___ to become more important…",
      grammar: [
        "Mệnh đề <i>that music ___</i> cần <b>động từ chia</b> (chủ ngữ <i>music</i>). Phía sau là <b>to + V</b>.",
        "<b>seem to + V</b> là cấu trúc đúng. <i>show</i> không đi với <i>to + V</i> theo cách này."
      ],
      keep: ["seemed"],
      vocab: [
        "<b>seemed to become</b> = có vẻ như đã trở nên. Tác giả dùng <i>seemed</i> để nói một cách <b>thận trọng</b>, đúng kiểu viết học thuật khi nói về những điều suy ra từ tài liệu cổ."
      ]
    },
    "4": {
      ctx: "…in what is called the 'pharaonic' ___ of their history.",
      grammar: [
        "Sau tính từ <i>'pharaonic'</i> cần <b>danh từ</b>, phía sau là <b>of</b>.",
        "Còn lại: <i>time, period, history</i>."
      ],
      keep: ["time","period","history"],
      vocab: [
        "<b>period</b> = thời kỳ, giai đoạn: một khoảng thời gian <b>có tên gọi riêng</b> trong lịch sử (the Victorian period, the pharaonic period).",
        "<i>the pharaonic history of their history</i> bị lặp từ, vô nghĩa. <i>time</i> nhấn vào một thời điểm, ít dùng để đặt tên giai đoạn."
      ]
    },
    "5": {
      ctx: "This was the ___ when the Egyptian dynasties… were ___ (around 3100 BCE)",
      grammar: [
        "Sau <b>the</b> cần danh từ; phía sau là <b>when</b> → danh từ chỉ thời gian: <i>the time when…</i>"
      ],
      keep: ["time","history"],
      vocab: [
        "<b>the time when</b> = thời điểm mà… Câu nói về một <b>mốc</b> cụ thể (khoảng năm 3100 TCN), nên dùng <i>time</i>.",
        "<i>period</i> cũng đi được với <i>when</i>, nhưng đã dùng ở ô 4."
      ]
    },
    "6": {
      ctx: "…when the Egyptian dynasties of the pharaohs were ___ (around 3100 BCE)…",
      grammar: [
        "<b>were + V3</b> → câu bị động, cần <b>phân từ II</b>.",
        "<i>showed</i> là quá khứ đơn (V3 đúng là <i>shown</i>) → loại. Còn lại: <i>established</i>."
      ],
      keep: ["established"],
      vocab: [
        "<b>establish a dynasty</b> = thiết lập, khởi lập một triều đại. <i>establish</i> dùng cho những thứ <b>được dựng lên và tồn tại lâu dài</b>: a company, a rule, a dynasty."
      ]
    }
  },
  collocations: [
    {a:"play a", b:"role"},
    {a:"ancient", b:"Egyptians"},
    {a:"modern", b:"society"},
    {a:"the pharaonic", b:"period"},
    {a:"establish a", b:"dynasty"},
    {a:"everyday", b:"life"}
  ],
  vocabulary: [
    {term:"play a role", type:"collocation", mean:"đóng vai trò", ex:"Parents play a key role in a child's education."},
    {term:"seem to + V", type:"structure", mean:"có vẻ như", ex:"She seems to enjoy her new job."},
    {term:"period", type:"noun", mean:"thời kỳ, giai đoạn (lịch sử)", ex:"The Ly dynasty was a peaceful period in Vietnam's history."},
    {term:"establish", type:"verb", mean:"thiết lập, thành lập", ex:"The school was established in 1990."},
    {term:"everyday life", type:"noun phrase", mean:"cuộc sống hằng ngày (everyday là tính từ viết liền; every day là trạng từ viết rời)", ex:"Phones are part of everyday life. I use mine every day."}
  ]
},
{
  code: "RFIB0019",
  category: "Money",
  level: "Hard",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Economy · Development",
  minutes: 5,
  warmup: {
    questions: [
      "Theo bạn, điều gì giúp một nền kinh tế (economy) phát triển mạnh và bền vững?",
      "Tham nhũng (corruption) và bất bình đẳng (inequality) ảnh hưởng thế nào đến một đất nước?"
    ],
    intro: "Đoạn văn là một nhận định mang tính phê phán của tác giả về mô hình phát triển kinh tế của Trung Quốc. Khi đọc, hãy để ý các hệ quả mà tác giả liệt kê và lý do tác giả đưa ra cho nhận định đó."
  },
  passage: [
    "The inevitable consequences", {b:"1"},
    "rampant corruption, an absence of globally competitive Chinese companies,", {b:"2"},
    "waste of resources, rampant environmental", {b:"3"},
    "and soaring inequality. Above all, the monopoly over power of an ideologically bankrupt communist party is", {b:"4"},
    "with the pluralism of opinion, security of property and vibrant competition on which a", {b:"5"},
    "economy depends. As a result, Chinese development remains parasitic on know-how and institutions developed elsewhere."
  ],
  words: ["dynamic","include","decomposition","chronic","comprise","uncertain","inconsistent","degradation"],
  answers: {"1":"include","2":"chronic","3":"degradation","4":"inconsistent","5":"dynamic"},
  explain: {
    "1": {
      ctx: "The inevitable consequences ___ rampant corruption, an absence of…",
      grammar: [
        "Câu đầu chưa có <b>động từ chính</b>. Chủ ngữ <i>consequences</i> số nhiều → động từ nguyên thể (không -s).",
        "Phía sau là một danh sách các danh từ (tân ngữ) → cần <b>ngoại động từ</b>: <i>include, comprise</i>."
      ],
      keep: ["include","comprise"],
      vocab: [
        "<b>include</b> = bao gồm, trong đó có. Dùng khi liệt kê <b>một số ví dụ tiêu biểu</b>, không nhất thiết là tất cả.",
        "<b>comprise</b> = gồm có, được cấu thành từ. Dùng khi liệt kê <b>toàn bộ các phần tạo nên</b> một tổng thể (The team comprises five members). Ở đây tác giả chỉ nêu những hệ quả nổi bật → <i>include</i> tự nhiên hơn."
      ]
    },
    "2": {
      ctx: "…an absence of globally competitive Chinese companies, ___ waste of resources…",
      grammar: [
        "Trước danh từ <i>waste (of resources)</i> cần <b>tính từ</b>. <i>waste</i> không đếm được nên không cần mạo từ.",
        "Tính từ trong hộp: <i>dynamic, chronic, uncertain, inconsistent</i>."
      ],
      keep: ["dynamic","chronic","uncertain","inconsistent"],
      vocab: [
        "<b>chronic</b> = kinh niên, dai dẳng, kéo dài lâu (chronic disease = bệnh mãn tính). <i>chronic waste</i> = sự lãng phí kéo dài, không được khắc phục.",
        "Sắc thái: <i>chronic</i> luôn mang nghĩa <b>tiêu cực</b>, hợp với giọng phê phán của cả danh sách (<i>rampant, soaring</i>)."
      ]
    },
    "3": {
      ctx: "…rampant environmental ___ and soaring inequality.",
      grammar: [
        "Sau tính từ <i>environmental</i> cần <b>danh từ</b>: <i>decomposition, degradation</i>."
      ],
      keep: ["decomposition","degradation"],
      vocab: [
        "<b>environmental degradation</b> = sự suy thoái môi trường (ô nhiễm, mất rừng, cạn kiệt tài nguyên). Đây là collocation rất hay gặp trong PTE.",
        "Bẫy <b>decomposition</b>: nghĩa là <i>sự phân huỷ</i> (lá cây, xác sinh vật phân huỷ). Đây là quá trình tự nhiên, không phải hậu quả xấu của kinh tế."
      ]
    },
    "4": {
      ctx: "…the monopoly over power of an… communist party is ___ with the pluralism of opinion…",
      grammar: [
        "Sau <b>is</b> cần <b>tính từ</b>; phía sau là giới từ <b>with</b>.",
        "Chỉ <b>inconsistent with</b> là cụm tính từ + giới từ đúng (<i>uncertain about/of</i>, không dùng <i>with</i>)."
      ],
      keep: ["inconsistent"],
      vocab: [
        "<b>be inconsistent with sth</b> = mâu thuẫn, không phù hợp với điều gì. Ý câu: độc quyền quyền lực <b>không thể đi cùng</b> với sự đa dạng ý kiến và cạnh tranh tự do."
      ]
    },
    "5": {
      ctx: "…vibrant competition on which a ___ economy depends.",
      grammar: [
        "Giữa mạo từ <b>a</b> và danh từ <i>economy</i> cần <b>tính từ</b>: <i>dynamic, uncertain</i>."
      ],
      keep: ["dynamic","uncertain"],
      vocab: [
        "<b>a dynamic economy</b> = một nền kinh tế năng động. Nó <b>dựa vào</b> (<i>depends on</i>) cạnh tranh sôi nổi (<i>vibrant competition</i>), hai ý cùng chiều.",
        "<i>an uncertain economy</i> (nền kinh tế bất ổn) không phải thứ cần đa dạng ý kiến và cạnh tranh để tồn tại. Lưu ý thêm: <i>a uncertain</i> sai mạo từ."
      ]
    }
  },
  collocations: [
    {a:"inevitable", b:"consequences"},
    {a:"rampant", b:"corruption"},
    {a:"environmental", b:"degradation"},
    {a:"soaring", b:"inequality"},
    {a:"vibrant", b:"competition"},
    {a:"monopoly", b:"over power"}
  ],
  vocabulary: [
    {term:"inevitable", type:"adjective", mean:"không thể tránh khỏi", ex:"Mistakes are inevitable when you learn a new skill."},
    {term:"rampant", type:"adjective", mean:"tràn lan, không kiểm soát được (nghĩa xấu)", ex:"Fake news is rampant on social media."},
    {term:"environmental degradation", type:"noun phrase", mean:"sự suy thoái môi trường", ex:"Plastic waste causes serious environmental degradation."},
    {term:"be inconsistent with", type:"adj + prep", mean:"mâu thuẫn, không phù hợp với", ex:"His actions are inconsistent with his words."},
    {term:"dynamic economy", type:"noun phrase", mean:"nền kinh tế năng động", ex:"Vietnam is often described as a dynamic economy."}
  ]
},
{
  code: "RFIB0021",
  category: "Others",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Art · Paris and tradition",
  minutes: 5,
  warmup: {
    questions: [
      "Ngoài tháp Eiffel, bạn còn biết gì về Paris (Pháp)?",
      "Theo bạn, những biến động chính trị và xã hội (political and social changes) ảnh hưởng thế nào đến nghệ thuật (art)?"
    ],
    intro: "Đoạn văn ngắn nói về bối cảnh của Paris trong khoảng một trăm năm trước khi nghệ thuật có bước ngoặt lớn, tách khỏi truyền thống (tradition). Khi đọc, hãy để ý xem vì sao giới nghệ sĩ có thể thay đổi dễ dàng hơn."
  },
  passage: [
    "In the preceding hundred years, Paris had been", {b:"1"},
    "stage for political and social", {b:"2"},
    "that had deeply affected all of Europe. The many ways in which tradition had already been challenged and", {b:"3"},
    "during those years helped make it easier for those to achieve a break with tradition art."
  ],
  words: ["movements","rehearsals","concocted","shaken","overhead","center"],
  answers: {"1":"center","2":"movements","3":"shaken"},
  explain: {
    "1": {
      ctx: "…Paris had been ___ stage for political and social…",
      grammar: [
        "Trước <i>stage</i> không có mạo từ. Ô trống cần một từ <b>kết hợp với stage</b> thành một cụm cố định không cần mạo từ.",
        "Loại các động từ/phân từ <i>concocted, shaken</i> và danh từ số nhiều <i>movements, rehearsals</i>."
      ],
      keep: ["center","overhead"],
      vocab: [
        "<b>(be) center stage</b> = ở vị trí trung tâm, là tâm điểm chú ý (thành ngữ, không dùng mạo từ). Paris là tâm điểm của các biến động ở châu Âu.",
        "<i>overhead stage</i> (sân khấu trên cao) không có nghĩa trong ngữ cảnh này."
      ]
    },
    "2": {
      ctx: "…stage for political and social ___ that had deeply affected all of Europe.",
      grammar: [
        "Sau các tính từ <i>political and social</i> cần <b>danh từ</b>.",
        "Còn lại: <i>movements, rehearsals</i>."
      ],
      keep: ["movements","rehearsals"],
      vocab: [
        "<b>political and social movements</b> = các phong trào chính trị và xã hội (như cách mạng, phong trào công nhân). Chúng mới có thể <i>deeply affect all of Europe</i>.",
        "Bẫy <b>rehearsals</b> (các buổi diễn tập): người đọc dễ bị từ <i>stage</i> (sân khấu) dẫn dắt. Nhưng <i>center stage</i> ở đây là nghĩa bóng, không phải sân khấu thật."
      ]
    },
    "3": {
      ctx: "…tradition had already been challenged and ___ during those years…",
      grammar: [
        "<b>and</b> nối với <i>challenged</i> trong cấu trúc bị động <i>had been challenged and ___</i> → cần <b>phân từ II</b>: <i>concocted, shaken</i>."
      ],
      keep: ["concocted","shaken"],
      vocab: [
        "<b>shaken</b> (V3 của <i>shake</i>) = bị làm lung lay. <i>Tradition was challenged and shaken</i> = truyền thống bị thách thức và lung lay. Hai từ cùng chiều nghĩa.",
        "Bẫy <b>concocted</b>: nghĩa là <i>bịa ra</i> (một câu chuyện) hoặc <i>pha chế</i> (một món đồ uống). Không ai \"bịa ra\" truyền thống trong ngữ cảnh này."
      ]
    }
  },
  collocations: [
    {a:"center", b:"stage"},
    {a:"social", b:"movements"},
    {a:"a break with", b:"tradition"},
    {a:"deeply", b:"affected"},
    {a:"the preceding", b:"hundred years"},
    {a:"make it", b:"easier"}
  ],
  vocabulary: [
    {term:"center stage", type:"idiom", mean:"vị trí trung tâm, tâm điểm chú ý", ex:"Climate change has taken center stage at the meeting."},
    {term:"social movement", type:"noun phrase", mean:"phong trào xã hội", ex:"The social movement fought for equal rights."},
    {term:"preceding", type:"adjective", mean:"trước đó, đi trước", ex:"Prices rose sharply in the preceding year."},
    {term:"shake (shook, shaken)", type:"verb", mean:"làm lung lay, làm dao động (nghĩa bóng)", ex:"The scandal shook public trust."},
    {term:"a break with tradition", type:"noun phrase", mean:"sự đoạn tuyệt với truyền thống", ex:"Wearing jeans to the wedding was a break with tradition."}
  ]
},
{
  code: "RFIB0038",
  category: "Others",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Society · Gender roles",
  minutes: 5,
  warmup: {
    questions: [
      "Trong gia đình bạn, việc nhà và công việc bên ngoài được phân chia thế nào?",
      "Bình đẳng giới (gender equality) đã làm xã hội ngày nay thay đổi ra sao?"
    ],
    intro: "Câu văn ngắn dưới đây nói về sự thay đổi trong cách xã hội nhìn nhận vai trò (roles) của đàn ông và phụ nữ. Khi đọc, hãy để ý xem tác giả cho rằng những vai trò cũ hiện nay đang ra sao."
  },
  passage: [
    "With the popularity of the gender equality campaign and the cultural change, the", {b:"1"},
    "roles of men as the", {b:"2"},
    ", and of women in which they stay at home, are", {b:"3"},
    "today."
  ],
  words: ["authority","traditional","earner","appreciated","protested","challenged"],
  answers: {"1":"traditional","2":"earner","3":"challenged"},
  explain: {
    "1": {
      ctx: "…the ___ roles of men as the…",
      grammar: [
        "Giữa <b>the</b> và danh từ <i>roles</i> cần <b>tính từ</b> (hoặc phân từ dùng như tính từ).",
        "Loại <i>authority, earner</i> (danh từ). Còn lại: <i>traditional, appreciated, protested, challenged</i>."
      ],
      keep: ["traditional","appreciated","protested","challenged"],
      vocab: [
        "<b>traditional roles</b> = vai trò truyền thống. Collocation rất phổ biến: <i>traditional gender roles</i>.",
        "Cả câu nói về vai trò <b>cũ</b> đang bị thay đổi bởi <i>cultural change</i> → cần một tính từ chỉ \"cũ, lâu đời\"."
      ]
    },
    "2": {
      ctx: "…the traditional roles of men as the ___, and of women in which they stay at home…",
      grammar: [
        "Sau <b>as the</b> cần <b>danh từ</b> chỉ một vai trò.",
        "Còn lại: <i>authority, earner</i>."
      ],
      keep: ["authority","earner"],
      vocab: [
        "<b>earner</b> = người kiếm tiền, trụ cột kinh tế (còn gọi là <i>breadwinner</i>). Vai trò này <b>đối lập trực tiếp</b> với phụ nữ <i>stay at home</i>.",
        "Bẫy <b>authority</b>: nghĩa là <i>quyền lực, người có thẩm quyền, cơ quan chức năng</i>. Không tạo được cặp đối lập với việc \"ở nhà\"."
      ]
    },
    "3": {
      ctx: "…are ___ today.",
      grammar: [
        "<b>are + V3</b> → câu bị động, chủ ngữ là <i>the traditional roles</i>.",
        "Còn lại: <i>appreciated, protested, challenged</i>."
      ],
      keep: ["appreciated","protested","challenged"],
      vocab: [
        "<b>be challenged</b> = bị thách thức, bị đặt câu hỏi. Nhờ chiến dịch bình đẳng giới, người ta không còn mặc nhiên chấp nhận các vai trò cũ.",
        "<i>appreciated</i> (được trân trọng) ngược ý. <i>protested</i> thường đi với <i>against</i> (protest against a law) và chủ thể là một sự việc hay chính sách, không dùng tự nhiên với <i>roles</i>."
      ]
    }
  },
  collocations: [
    {a:"gender", b:"equality"},
    {a:"cultural", b:"change"},
    {a:"traditional", b:"roles"},
    {a:"stay at", b:"home"},
    {a:"the main", b:"earner"}
  ],
  vocabulary: [
    {term:"gender equality", type:"noun phrase", mean:"bình đẳng giới", ex:"The school runs a gender equality campaign every year."},
    {term:"traditional roles", type:"noun phrase", mean:"các vai trò truyền thống", ex:"Many couples no longer follow traditional roles."},
    {term:"earner / breadwinner", type:"noun", mean:"người kiếm tiền, trụ cột kinh tế", ex:"She is the main earner in her family."},
    {term:"stay at home", type:"phrase", mean:"ở nhà (lo việc nhà, không đi làm)", ex:"He decided to stay at home with the kids."},
    {term:"be challenged", type:"passive", mean:"bị thách thức, bị đặt nghi vấn", ex:"Old beliefs are often challenged by new research."}
  ]
},
{
  code: "RFIB0039",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Study skills · Managing stress",
  minutes: 5,
  warmup: {
    questions: [
      "Khi ôn thi căng thẳng (stressed), bạn thường làm gì để thư giãn (relax)?",
      "Bạn có hay trì hoãn việc học (procrastinate) không? Vì sao?"
    ],
    intro: "Đoạn văn là lời khuyên từ bộ phận tư vấn (counsellors) của Đại học Macquarie, giúp sinh viên học hiệu quả và bớt căng thẳng. Khi đọc, hãy để ý từng lời khuyên cụ thể tác giả đưa ra."
  },
  passage: [
    "Don't allow yourself to slip into self-defeating habits, such as procrastinating. Try to keep a", {b:"1"},
    "going in your study. Scatter blocks of study with short breaks to limit fatigue. If you study solidly for a couple of hours, make sure you give yourself fifteen minutes or so before you start up again. Think positively about yourself and your situation. Challenge the negative thoughts that", {b:"2"},
    "into your mind and cause you unnecessary stress at times, such as 'I'm going to fail', 'I'll end up blowing my future, my change of getting a career'. You don't have any need to think catastrophically, it's not achieving anything. In fact, it's doing you a lot more harm than good, because it's distracting you away from what you need to do. Learn to become more relaxed in your daily life. There are simple techniques, such as breathing exercises and", {b:"3"},
    "muscular relaxation exercises, as well as guided imagery, which can help you to feel calmer, and more focused. The Macquarie University Counsellors can help you with these techniques. Some do relaxation tapes for students."
  ],
  words: ["creep","moment","momentum","processive","progressive","walk"],
  answers: {"1":"momentum","2":"creep","3":"progressive"},
  explain: {
    "1": {
      ctx: "Try to keep a ___ going in your study.",
      grammar: [
        "Sau mạo từ <b>a</b> cần <b>danh từ đếm được số ít</b>. Cấu trúc <b>keep + N + V-ing</b>: giữ cho cái gì tiếp tục diễn ra.",
        "Loại <i>creep</i> (động từ trong ngữ cảnh này) và các tính từ <i>processive, progressive</i>. Còn lại: <i>moment, momentum, walk</i>."
      ],
      keep: ["moment","momentum","walk"],
      vocab: [
        "<b>momentum</b> = đà, quán tính. <i>Keep the momentum going</i> = giữ vững đà tiến, duy trì nhịp học đều đặn. Đây là cách chống lại thói trì hoãn mà câu trước vừa nhắc.",
        "Bẫy <b>moment</b>: nghĩa là <i>khoảnh khắc</i>. Hai từ chỉ khác nhau đúng 2 chữ cái nhưng nghĩa hoàn toàn khác. <i>keep a moment going</i> vô nghĩa."
      ]
    },
    "2": {
      ctx: "Challenge the negative thoughts that ___ into your mind and cause you unnecessary stress…",
      grammar: [
        "Đây là động từ của mệnh đề quan hệ <i>that ___</i>; chủ ngữ <i>thoughts</i> số nhiều, song song với <b>cause</b> phía sau → <b>động từ nguyên thể</b> thì hiện tại.",
        "Còn lại: <i>creep, walk</i>."
      ],
      keep: ["creep","walk"],
      vocab: [
        "<b>creep into</b> = len lỏi, lẻn vào một cách từ từ, không ai để ý. Rất hay dùng với suy nghĩ, cảm xúc: <i>doubts creep in, fear creeps into your mind</i>.",
        "<i>walk into</i> dùng cho người bước vào một nơi; dùng cho suy nghĩ thì không tự nhiên."
      ]
    },
    "3": {
      ctx: "…such as breathing exercises and ___ muscular relaxation exercises…",
      grammar: [
        "Trước cụm danh từ <i>muscular relaxation exercises</i> cần <b>tính từ</b>: <i>processive, progressive</i>."
      ],
      keep: ["processive","progressive"],
      vocab: [
        "<b>progressive muscle relaxation</b> = thư giãn cơ tăng tiến (căng rồi thả lỏng lần lượt từng nhóm cơ). Đây là tên một kỹ thuật giảm căng thẳng có thật.",
        "Bẫy <b>processive</b>: từ hiếm, chỉ gặp trong thuật ngữ sinh hoá, và được đặt vào để \"đánh lừa mắt\" vì trông gần giống <i>progressive</i>. Gặp hai từ na ná nhau, hãy chọn từ bạn từng thấy trong collocation."
      ]
    }
  },
  collocations: [
    {a:"self-defeating", b:"habits"},
    {a:"keep the momentum", b:"going"},
    {a:"creep", b:"into your mind"},
    {a:"more harm", b:"than good"},
    {a:"breathing", b:"exercises"},
    {a:"guided", b:"imagery"}
  ],
  vocabulary: [
    {term:"self-defeating", type:"adjective", mean:"tự làm hại mình, phản tác dụng", ex:"Staying up all night before an exam is self-defeating."},
    {term:"keep the momentum going", type:"idiom", mean:"giữ vững đà, duy trì nhịp độ", ex:"We started well; now let's keep the momentum going."},
    {term:"creep into", type:"phrasal verb", mean:"len lỏi vào, lẻn vào dần dần", ex:"Doubt began to creep into her mind."},
    {term:"do more harm than good", type:"idiom", mean:"hại nhiều hơn lợi", ex:"Too much coffee can do more harm than good."},
    {term:"progressive", type:"adjective", mean:"tăng dần, từng bước", ex:"The course has a progressive increase in difficulty."}
  ]
},
{
  code: "RFIB0041",
  category: "Money",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Marriage · The cost of getting married",
  minutes: 5,
  warmup: {
    questions: [
      "Theo bạn, bao nhiêu tuổi là phù hợp để kết hôn (get married)?",
      "Một đám cưới và cuộc sống sau hôn nhân có những khoản chi phí (costs) nào?"
    ],
    intro: "Đoạn văn đưa ra lý lẽ về chuyện kết hôn quá sớm, chủ yếu nhìn từ góc độ áp lực tài chính (financial pressure). Khi đọc, hãy để ý các khoản chi phí mà tác giả liệt kê."
  },
  passage: [
    "Marriage is a big step", {b:"1"},
    "anyone's life and there is an argument to be made", {b:"2"},
    "getting married too early. As any newlywed couple knows, there is a huge amount of financial pressure associated", {b:"3"},
    "marriage. Firstly, the wedding reception and honeymoon cost you an arm and a leg. Then there's the matter of home loans, rent and energy bills. If you're looking to start a family, your child's education is another thing you need to save up", {b:"4"},
    ". Teenagers should probably find a proper job before deciding to tie the", {b:"5"},
    "."
  ],
  words: ["against","bow","for","in","knot","on","to","with"],
  answers: {"1":"in","2":"against","3":"with","4":"for","5":"knot"},
  explain: {
    "1": {
      ctx: "Marriage is a big step ___ anyone's life…",
      grammar: [
        "Ô trống nối hai cụm danh từ <i>a big step</i> và <i>anyone's life</i> → cần <b>giới từ</b>.",
        "Loại <i>bow, knot</i> (danh từ)."
      ],
      keep: ["against","for","in","on","to","with"],
      vocab: [
        "<b>a big step in sb's life</b> = một bước ngoặt lớn trong cuộc đời ai đó. <i>in</i> chỉ một sự kiện nằm <b>bên trong</b> quãng đời.",
        "<i>a step to/for</i> chỉ hướng tới mục tiêu (a step towards success), không hợp ở đây."
      ]
    },
    "2": {
      ctx: "…there is an argument to be made ___ getting married too early.",
      grammar: [
        "Sau ô trống là <b>V-ing</b> (<i>getting married</i>) → cần giới từ đứng trước danh động từ.",
        "<i>an argument</i> đi được với hai giới từ: <b>for</b> và <b>against</b>."
      ],
      keep: ["against","for"],
      vocab: [
        "<b>an argument against sth</b> = lý lẽ <b>phản đối</b>; <i>an argument for sth</i> = lý lẽ <b>ủng hộ</b>.",
        "Phần sau liệt kê toàn chi phí và áp lực, và kết luận thanh thiếu niên nên đi làm trước → tác giả <b>phản đối</b> việc cưới sớm → <b>against</b>.",
        "<i>for</i> sẽ được dùng ở ô 4."
      ]
    },
    "3": {
      ctx: "…a huge amount of financial pressure associated ___ marriage.",
      grammar: [
        "<b>associated</b> luôn đi với một giới từ cố định → cần giới từ."
      ],
      keep: ["with"],
      vocab: [
        "<b>(be) associated with sth</b> = gắn liền với, liên quan đến. Đây là cụm cố định, chỉ dùng <i>with</i>.",
        "Cụm <i>financial pressure associated with marriage</i> = áp lực tài chính đi kèm hôn nhân."
      ]
    },
    "4": {
      ctx: "…your child's education is another thing you need to save up ___.",
      grammar: [
        "Mệnh đề quan hệ rút gọn: <i>another thing (that) you need to save up ___</i> → giới từ bị đẩy ra <b>cuối câu</b>. Nghĩ ngược lại: <i>save up ___ another thing</i>.",
        "Cần giới từ đi với <b>save up</b>."
      ],
      keep: ["for","on","to"],
      vocab: [
        "<b>save up for sth</b> = để dành tiền cho việc gì (save up for a new phone).",
        "<i>save up on</i> không phải cụm đúng; <i>save on sth</i> lại có nghĩa khác là <b>tiết kiệm bớt</b> (save on energy bills)."
      ]
    },
    "5": {
      ctx: "…before deciding to tie the ___.",
      grammar: [
        "Sau <b>the</b> cần <b>danh từ</b>: <i>bow, knot</i>."
      ],
      keep: ["bow","knot"],
      vocab: [
        "<b>tie the knot</b> = kết hôn (thành ngữ, nghĩa đen là \"thắt nút\").",
        "Bẫy <b>bow</b>: <i>tie a bow</i> = thắt nơ. Cũng là \"tie\" nhưng không mang nghĩa kết hôn. Toàn bài nói về <i>marriage</i> → <b>knot</b>."
      ]
    }
  },
  collocations: [
    {a:"a big", b:"step"},
    {a:"tie the", b:"knot"},
    {a:"cost an arm", b:"and a leg"},
    {a:"newlywed", b:"couple"},
    {a:"home", b:"loans"},
    {a:"energy", b:"bills"}
  ],
  vocabulary: [
    {term:"tie the knot", type:"idiom", mean:"kết hôn", ex:"They finally tied the knot after ten years together."},
    {term:"cost an arm and a leg", type:"idiom", mean:"đắt cắt cổ", ex:"Concert tickets cost an arm and a leg these days."},
    {term:"be associated with", type:"phrase", mean:"gắn liền với, liên quan đến", ex:"Stress is often associated with poor sleep."},
    {term:"save up for", type:"phrasal verb", mean:"để dành tiền cho", ex:"I'm saving up for a laptop."},
    {term:"newlywed", type:"noun / adj", mean:"(cặp) vợ chồng mới cưới", ex:"The newlyweds moved into a small flat."}
  ]
},
{
  code: "RFIB0050",
  category: "Money",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Finance · The Ponzi scheme",
  minutes: 5,
  warmup: {
    questions: [
      "Nếu có người hứa giúp bạn nhân đôi số tiền (double your money) chỉ trong vài tháng, bạn có tin không?",
      "Bạn đã từng nghe về các vụ lừa đảo đầu tư (investment scam) chưa?"
    ],
    intro: "Đoạn văn ngắn nói về Charles Ponzi, người có tên gắn với một hình thức lừa đảo đầu tư (Ponzi scheme). Khi đọc, hãy để ý xem kế hoạch ban đầu của ông khác gì so với những việc ông làm về sau."
  },
  passage: [
    "Ponzi is", {b:"1"},
    "as an illegal business", {b:"2"},
    ". His original scheme was based on the legitimate arbitrage of international reply coupons for", {b:"3"},
    "stamps, but he soon began diverting new investors' money to make", {b:"4"},
    "to earlier investors as", {b:"5"},
    "."
  ],
  words: ["interest","practice","fiasco","rate","infamous","payments","postage","monthly"],
  answers: {"1":"infamous","2":"practice","3":"postage","4":"payments","5":"interest"},
  explain: {
    "1": {
      ctx: "Ponzi is ___ as an illegal business practice.",
      grammar: [
        "Sau <b>is</b> và trước <b>as</b> cần <b>tính từ</b> (cấu trúc <i>be + adj + as</i>, giống <i>be known as</i>).",
        "Tính từ trong hộp: <i>infamous, monthly</i>."
      ],
      keep: ["infamous","monthly"],
      vocab: [
        "<b>infamous</b> = khét tiếng, nổi tiếng vì điều <b>xấu</b>. Phát âm /ˈɪnfəməs/, trọng âm ở đầu.",
        "Đây không phải nghĩa \"không nổi tiếng\" như nhiều bạn nghĩ. <i>famous</i> = nổi tiếng (trung tính hoặc tốt), <i>infamous</i> = khét tiếng (tiêu cực). Đi với <i>illegal</i> nên chắc chắn là <i>infamous</i>.",
        "<i>monthly</i> (hằng tháng) không hợp nghĩa."
      ]
    },
    "2": {
      ctx: "…as an illegal business ___.",
      grammar: [
        "Sau <i>an illegal business</i> cần <b>danh từ số ít</b> để tạo danh từ ghép <i>business + N</i>.",
        "Còn lại: <i>practice, fiasco, rate, interest, postage</i>."
      ],
      keep: ["practice","fiasco","rate","interest","postage"],
      vocab: [
        "<b>business practice</b> = cách thức, hoạt động kinh doanh. <i>An illegal business practice</i> = một hình thức kinh doanh bất hợp pháp.",
        "Bẫy <b>fiasco</b>: nghĩa là <i>thất bại thảm hại, đáng xấu hổ</i>. Không phải \"hình thức\" kinh doanh."
      ]
    },
    "3": {
      ctx: "…international reply coupons for ___ stamps…",
      grammar: [
        "Trước danh từ <i>stamps</i> cần một từ bổ nghĩa: <b>danh từ hoặc tính từ</b>.",
        "Còn lại: <i>postage, rate, interest, monthly</i>."
      ],
      keep: ["postage","rate","interest","monthly"],
      vocab: [
        "<b>postage stamps</b> = tem bưu chính. <i>international reply coupons</i> (phiếu trả lời quốc tế) dùng để đổi lấy tem.",
        "Các từ còn lại là thuật ngữ tài chính, không đi với <i>stamps</i>."
      ]
    },
    "4": {
      ctx: "…diverting new investors' money to make ___ to earlier investors…",
      grammar: [
        "Sau <b>make</b> cần <b>danh từ</b> làm tân ngữ; không có mạo từ → số nhiều hoặc không đếm được.",
        "Còn lại: <i>payments, interest, rate</i>."
      ],
      keep: ["payments","interest","rate"],
      vocab: [
        "<b>make payments to sb</b> = trả tiền cho ai. Đây là collocation cố định với <i>make</i>.",
        "Đây chính là bản chất của lừa đảo Ponzi: lấy tiền của người đến sau để trả cho người đến trước."
      ]
    },
    "5": {
      ctx: "…to make payments to earlier investors as ___.",
      grammar: [
        "Sau <b>as</b> (với vai trò là) cần <b>danh từ</b>. Không có mạo từ → danh từ không đếm được.",
        "Còn lại: <i>interest, rate</i>."
      ],
      keep: ["interest","rate"],
      vocab: [
        "<b>as interest</b> = dưới dạng tiền lãi. Ponzi giả vờ rằng số tiền đó là <b>lãi</b> từ khoản đầu tư.",
        "<i>rate</i> là danh từ đếm được, cần mạo từ (<i>a rate</i>); và \"tỷ lệ\" không phải thứ để trả cho ai."
      ]
    }
  },
  collocations: [
    {a:"illegal business", b:"practice"},
    {a:"postage", b:"stamps"},
    {a:"international reply", b:"coupons"},
    {a:"make", b:"payments"},
    {a:"earlier", b:"investors"},
    {a:"legitimate", b:"arbitrage"}
  ],
  vocabulary: [
    {term:"infamous", type:"adjective", mean:"khét tiếng (vì điều xấu)", ex:"The prison is infamous for its harsh conditions."},
    {term:"business practice", type:"noun phrase", mean:"cách thức kinh doanh", ex:"Paying staff late is a bad business practice."},
    {term:"legitimate", type:"adjective", mean:"hợp pháp, chính đáng", ex:"Make sure the website is legitimate before you pay."},
    {term:"divert", type:"verb", mean:"chuyển hướng, chuyển (tiền) sang mục đích khác", ex:"He diverted company money into his own account."},
    {term:"make payments", type:"collocation", mean:"thanh toán, trả tiền", ex:"You can make payments online."}
  ]
},
{
  code: "RFIB0051",
  category: "Money",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Economics · Saving and spending",
  minutes: 5,
  warmup: {
    questions: [
      "Khi kiếm được nhiều tiền hơn, bạn sẽ tiết kiệm (save) nhiều hơn hay tiêu (spend) nhiều hơn?",
      "Người ta thường để dành tiền cho những lúc khó khăn nào trong cuộc sống?"
    ],
    intro: "Đoạn văn tóm tắt một phát hiện của nhà kinh tế học Milton Friedman về mối liên hệ giữa việc kiếm tiền và tiết kiệm. Khi đọc, hãy để ý lý do tác giả đưa ra ở câu cuối."
  },
  passage: [
    "Friedman showed that, while people do save more when they earn more, it is", {b:"1"},
    "to spend later. Those in work save", {b:"2"},
    "a time of sickness, unemployment or old age - but because the sick, unemployed and elderly spend their savings, overall", {b:"3"},
    "does not fall as people get richer."
  ],
  words: ["consumption","among","only","against","income","merely"],
  answers: {"1":"only","2":"against","3":"consumption"},
  explain: {
    "1": {
      ctx: "…while people do save more when they earn more, it is ___ to spend later.",
      grammar: [
        "Giữa <b>is</b> và <b>to + V</b> cần một <b>trạng từ</b> bổ nghĩa cho cả cụm <i>to spend later</i>.",
        "Trạng từ trong hộp: <i>only, merely</i>."
      ],
      keep: ["only","merely"],
      vocab: [
        "<b>only</b> = chỉ (là). <i>It is only to spend later</i> = người ta tiết kiệm <b>chỉ để</b> tiêu sau này. Từ này nhấn vào mục đích duy nhất của việc tiết kiệm.",
        "<b>merely</b> cũng nghĩa là \"chỉ\", nhưng mang sắc thái <b>coi nhẹ, chẳng đáng kể</b> (it's merely a scratch = chỉ là vết xước thôi). Câu này trình bày một phát hiện khoa học trung tính, nên <i>only</i> tự nhiên hơn. Đây là đáp án chuẩn của đề."
      ]
    },
    "2": {
      ctx: "Those in work save ___ a time of sickness, unemployment or old age…",
      grammar: [
        "Sau động từ <b>save</b>, trước cụm danh từ <i>a time of sickness</i> → cần <b>giới từ</b>: <i>among, against</i>."
      ],
      keep: ["among","against"],
      vocab: [
        "<b>save against sth</b> = để dành tiền <b>phòng khi</b> gặp điều xấu. <i>against</i> mang nghĩa \"chống lại, phòng ngừa\" rủi ro (giống <i>insure against</i>).",
        "<i>among</i> = giữa, trong số (nhiều người/vật). <i>save among a time</i> vô nghĩa."
      ]
    },
    "3": {
      ctx: "…but because the sick… spend their savings, overall ___ does not fall as people get richer.",
      grammar: [
        "Sau tính từ <i>overall</i> cần <b>danh từ</b> làm chủ ngữ; động từ <i>does</i> → danh từ số ít/không đếm được.",
        "Còn lại: <i>consumption, income</i>."
      ],
      keep: ["consumption","income"],
      vocab: [
        "<b>consumption</b> = sự tiêu dùng, tổng chi tiêu. Logic: người ốm, thất nghiệp, người già <b>tiêu</b> tiền tiết kiệm → tổng tiêu dùng không giảm.",
        "<i>income</i> (thu nhập) mâu thuẫn với <i>as people get richer</i>: giàu lên thì thu nhập tăng, không cần nói \"không giảm\"."
      ]
    }
  },
  collocations: [
    {a:"those in", b:"work"},
    {a:"old", b:"age"},
    {a:"spend their", b:"savings"},
    {a:"overall", b:"consumption"},
    {a:"get", b:"richer"},
    {a:"a time of", b:"sickness"}
  ],
  vocabulary: [
    {term:"consumption", type:"noun", mean:"sự tiêu dùng, lượng tiêu thụ", ex:"Energy consumption rises in summer."},
    {term:"save against", type:"verb + prep", mean:"để dành phòng khi (gặp khó khăn)", ex:"It's wise to save against a rainy day."},
    {term:"unemployment", type:"noun", mean:"tình trạng thất nghiệp", ex:"Youth unemployment is a big problem in many countries."},
    {term:"the elderly", type:"noun (the + adj)", mean:"người cao tuổi (nói chung)", ex:"The city offers free buses for the elderly."},
    {term:"overall", type:"adjective / adverb", mean:"tổng thể, nói chung", ex:"Overall, the project was a success."}
  ]
},
{
  code: "RFIB0053",
  category: "Others",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Society · The welfare state",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn đã nghe về nhà nước phúc lợi (welfare state) chưa? Ví dụ: trợ cấp thất nghiệp, khám chữa bệnh miễn phí…",
      "Có công bằng không nếu một số người được hưởng phúc lợi mà không đóng góp (contribute) gì?"
    ],
    intro: "Đoạn văn ngắn bàn về khía cạnh đạo đức (morality) của nhà nước phúc lợi và những lựa chọn khó khăn của người sống có trách nhiệm. Khi đọc, hãy để ý ba lựa chọn mà tác giả đưa ra."
  },
  passage: [
    "The morality of the welfare state depends on contribution and responsibility. Since some people don't contribute and many are irresponsible, the choice of those who do contribute and are responsible is either to", {b:"1"},
    "the free riders, refuse to pay for the", {b:"2"},
    "of their irresponsibility or trust the state to", {b:"3"},
    "them."
  ],
  words: ["forge","lack","tolerate","affects","encroach","effects","educate"],
  answers: {"1":"tolerate","2":"effects","3":"educate"},
  explain: {
    "1": {
      ctx: "…the choice… is either to ___ the free riders, refuse to pay for…",
      grammar: [
        "Sau <b>to</b> cần <b>động từ nguyên thể</b>; phía sau có tân ngữ <i>the free riders</i> → cần <b>ngoại động từ</b>.",
        "Loại <i>affects, effects</i> (có -s, không phải nguyên thể) và <i>encroach</i> (nội động từ, phải đi với <i>on</i>)."
      ],
      keep: ["forge","lack","tolerate","educate"],
      vocab: [
        "<b>tolerate</b> = chịu đựng, dung thứ (dù không thích). Ba lựa chọn song song: <b>chịu đựng</b> kẻ ăn bám / <b>từ chối trả tiền</b> / <b>nhờ nhà nước giáo dục</b> họ.",
        "<i>forge</i> = rèn, giả mạo (forge a signature); <i>lack</i> = thiếu. Không hợp nghĩa với <i>free riders</i>.",
        "<i>educate</i> đúng ngữ pháp nhưng hợp với ô 3 hơn (<i>trust the state to educate them</i>)."
      ]
    },
    "2": {
      ctx: "…refuse to pay for the ___ of their irresponsibility…",
      grammar: [
        "Giữa <b>the</b> và <b>of</b> cần <b>danh từ</b>.",
        "<i>affects</i> là <b>động từ</b> (affect + s); <b>effects</b> là <b>danh từ</b> số nhiều."
      ],
      keep: ["effects"],
      vocab: [
        "<b>the effects of sth</b> = hậu quả, tác động của điều gì. <i>Pay for the effects of their irresponsibility</i> = trả giá cho hậu quả của sự vô trách nhiệm.",
        "Mẹo nhớ kinh điển: <b>A</b>ffect = <b>A</b>ction (động từ), <b>E</b>ffect = <b>E</b>nd result (danh từ, kết quả)."
      ]
    },
    "3": {
      ctx: "…or trust the state to ___ them.",
      grammar: [
        "Cấu trúc <b>trust sb to do sth</b> → sau <i>to</i> cần <b>động từ nguyên thể</b>, có tân ngữ <i>them</i>."
      ],
      keep: ["forge","lack","educate"],
      vocab: [
        "<b>educate them</b> = giáo dục họ (để họ trở nên có trách nhiệm hơn). Đây là giải pháp tích cực, hợp logic sau hai lựa chọn tiêu cực.",
        "<i>trust the state to forge/lack them</i> vô nghĩa."
      ]
    }
  },
  collocations: [
    {a:"welfare", b:"state"},
    {a:"free", b:"riders"},
    {a:"pay for", b:"the effects"},
    {a:"depend", b:"on"},
    {a:"trust the state", b:"to educate"},
    {a:"refuse", b:"to pay"}
  ],
  vocabulary: [
    {term:"welfare state", type:"noun phrase", mean:"nhà nước phúc lợi", ex:"Sweden is famous for its strong welfare state."},
    {term:"free rider", type:"noun", mean:"kẻ ăn bám, người hưởng lợi mà không đóng góp", ex:"In group projects, there is often one free rider."},
    {term:"tolerate", type:"verb", mean:"chịu đựng, dung thứ", ex:"The teacher won't tolerate cheating."},
    {term:"effect (n) / affect (v)", type:"noun / verb", mean:"tác động, hậu quả / ảnh hưởng đến", ex:"Noise affects sleep. It has a bad effect on sleep."},
    {term:"contribute", type:"verb", mean:"đóng góp", ex:"Everyone contributed to the class party."}
  ]
},
{
  code: "RFIB0060",
  category: "Science",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Health · Plain English in medicine",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn đã bao giờ đọc đơn thuốc hay giấy khám bệnh mà không hiểu các thuật ngữ y khoa (medical terms) chưa?",
      "Theo bạn, bác sĩ nên viết cho người bệnh theo cách như thế nào?"
    ],
    intro: "Bản tin ngắn của BBC nói về một sáng kiến (initiative) tại Anh liên quan đến cách bác sĩ viết thư cho người bệnh. Khi đọc, hãy để ý ví dụ cụ thể mà bài đưa ra."
  },
  passage: [
    "British doctors have been", {b:"1"},
    "to use simple language when communicating with their patients, says the BBC. The Academy of Medical Royal Colleges says very often correspondence contains complex medical jargon rather than plain and simple English. Using of phrase \"twice daily\" to explain the", {b:"2"},
    "of a medicine is better than Latin abbreviation \"bd\". The Please Write to Me initiative is aimed basically at doctors working in", {b:"3"},
    "clinics, although it is the best practice for all clinicians who need to write clinical letters and they are being asked to write directly to patients, rather than sending them a copy of a letter", {b:"4"},
    "to their GP. The Academy suggests any medical words should be", {b:"5"},
    "in plain English."
  ],
  words: ["instructed","urged","indication","translated","dosing","outpatient","penned","patient"],
  answers: {"1":"urged","2":"dosing","3":"outpatient","4":"penned","5":"translated"},
  explain: {
    "1": {
      ctx: "British doctors have been ___ to use simple language…",
      grammar: [
        "<b>have been + V3</b> → câu bị động; phía sau là <b>to + V</b> → cấu trúc <i>be + V3 + to do sth</i>.",
        "Phân từ trong hộp: <i>instructed, urged, translated, penned</i>. Chỉ <i>instructed</i> và <i>urged</i> đi được với <i>to + V</i>."
      ],
      keep: ["instructed","urged"],
      vocab: [
        "<b>be urged to do sth</b> = được khuyến khích mạnh mẽ, được kêu gọi làm gì (không bắt buộc).",
        "Bẫy <b>instructed</b>: <i>be instructed to</i> = được <b>chỉ thị, yêu cầu</b> làm gì (mang tính mệnh lệnh).",
        "Manh mối: cuối bài viết <i>The Academy <b>suggests</b></i> → đây là <b>lời khuyên</b>, không phải mệnh lệnh → <b>urged</b>."
      ]
    },
    "2": {
      ctx: "Using of phrase \"twice daily\" to explain the ___ of a medicine…",
      grammar: [
        "Giữa <b>the</b> và <b>of</b> cần <b>danh từ</b>: <i>indication, dosing, outpatient, patient</i>."
      ],
      keep: ["indication","dosing","outpatient","patient"],
      vocab: [
        "<i>twice daily</i> (ngày hai lần) nói về <b>tần suất, liều lượng dùng thuốc</b> → <b>dosing</b>.",
        "Bẫy <b>indication</b>: trong y khoa nghĩa là <i>chỉ định</i>, tức thuốc được dùng để chữa bệnh gì. \"Ngày hai lần\" không nói thuốc chữa bệnh gì."
      ]
    },
    "3": {
      ctx: "…aimed basically at doctors working in ___ clinics…",
      grammar: [
        "Trước danh từ <i>clinics</i> cần từ bổ nghĩa (danh từ/tính từ): <i>outpatient, patient</i>."
      ],
      keep: ["outpatient","patient"],
      vocab: [
        "<b>outpatient clinic</b> = phòng khám <b>ngoại trú</b> (khám xong về nhà, không nằm viện). Đối lập: <i>inpatient</i> = nội trú.",
        "<i>patient clinics</i> không phải cụm từ có nghĩa."
      ]
    },
    "4": {
      ctx: "…rather than sending them a copy of a letter ___ to their GP.",
      grammar: [
        "Sau danh từ <i>a letter</i> cần <b>phân từ II</b> để rút gọn mệnh đề quan hệ bị động: <i>a letter (which was) ___ to their GP</i>.",
        "Còn lại: <i>instructed, penned, translated</i>."
      ],
      keep: ["instructed","penned","translated"],
      vocab: [
        "<b>pen</b> (v) = viết (thư, bài báo). Văn phong báo chí. <i>A letter penned to their GP</i> = lá thư viết gửi bác sĩ gia đình.",
        "<i>translated</i> hợp hơn với ô 5 (<i>translated in plain English</i>)."
      ]
    },
    "5": {
      ctx: "…any medical words should be ___ in plain English.",
      grammar: [
        "<b>should be + V3</b> → bị động: <i>instructed, translated</i>."
      ],
      keep: ["instructed","translated"],
      vocab: [
        "<b>translated in/into plain English</b> = được \"dịch\" sang tiếng Anh dễ hiểu. Ở đây <i>translate</i> mang nghĩa diễn đạt lại cho đơn giản, không phải đổi sang ngôn ngữ khác."
      ]
    }
  },
  collocations: [
    {a:"medical", b:"jargon"},
    {a:"plain", b:"English"},
    {a:"outpatient", b:"clinics"},
    {a:"clinical", b:"letters"},
    {a:"Latin", b:"abbreviation"},
    {a:"best", b:"practice"}
  ],
  vocabulary: [
    {term:"be urged to", type:"passive", mean:"được khuyến khích mạnh mẽ, được kêu gọi", ex:"Students are urged to submit work on time."},
    {term:"jargon", type:"noun", mean:"thuật ngữ chuyên môn khó hiểu", ex:"Avoid legal jargon when you talk to clients."},
    {term:"dosing / dosage", type:"noun", mean:"liều lượng, cách dùng thuốc", ex:"Check the dosing instructions on the box."},
    {term:"outpatient", type:"noun / adj", mean:"(bệnh nhân) ngoại trú", ex:"She was treated as an outpatient."},
    {term:"plain English", type:"noun phrase", mean:"tiếng Anh đơn giản, dễ hiểu", ex:"Please explain the rules in plain English."}
  ]
},
{
  code: "RFIB0069",
  category: "Science",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Health · How much sleep you need",
  minutes: 5,
  warmup: {
    questions: [
      "Mỗi đêm bạn ngủ (sleep) bao nhiêu tiếng? Như vậy đã đủ chưa?",
      "Thiếu ngủ ảnh hưởng thế nào đến việc học của bạn?"
    ],
    intro: "Đoạn văn cung cấp thông tin về nhu cầu ngủ ở từng độ tuổi và vì sao giấc ngủ quan trọng với cơ thể. Khi đọc, hãy để ý các con số và lời khuyên cuối bài."
  },
  passage: [
    "The amount of sleep you need depends on many", {b:"1"},
    ", especially your age. Newborns sleep between 16 and 18 hours a day and preschool children should sleep between 10 and 12 hours. Older children and teens need at least nine hours to be well rested. For most adults, seven to eight hours a night appears to the best amount of sleep. However, for some people \"enough sleep\" may be as few as five hours or as many as 10 hours of sleep. As you get older, your sleeping", {b:"2"},
    "change. Older adults tend to sleep more lightly and awaken more frequently in the night than younger adults. This can have many causes including medical conditions and medications used to treat them. But there's no evidence that older adults need less sleep than younger adults. Getting enough sleep is", {b:"3"},
    "to your health because it boosts your", {b:"4"},
    "system, which makes your body better able to fight disease. Sleep is necessary for your nervous system to work properly. Too little sleep makes you drowsy and unable to concentrate. It also impairs memory and physical performance. So how many hours of sleep are enough for You? Experts say that if you feel drowsy during the day — even during boring activities - you are not getting enough sleep. Also, quality of sleep is just as important as quantity. People whose sleep is frequently interrupted or cut short are not getting quality sleep. If you experience frequent daytime sleepiness, even after increasing the amount of quality sleep you get, talk to your doctor. He or she may be able to", {b:"5"},
    "the cause of sleep problems and offer advice on how to get a better night's sleep."
  ],
  words: ["factors","elements","contort","immune","reproductive","important","benevolent","patterns","identify"],
  answers: {"1":"factors","2":"patterns","3":"important","4":"immune","5":"identify"},
  explain: {
    "1": {
      ctx: "The amount of sleep you need depends on many ___, especially your age.",
      grammar: [
        "Sau <b>many</b> cần <b>danh từ đếm được số nhiều</b>: <i>factors, elements, patterns</i>."
      ],
      keep: ["factors","elements","patterns"],
      vocab: [
        "<b>factors</b> = các <b>yếu tố ảnh hưởng</b> đến kết quả. <i>depend on many factors</i> là collocation rất hay gặp; <i>age</i> chính là một yếu tố như vậy.",
        "Bẫy <b>elements</b>: = các <b>thành phần cấu tạo</b> nên một tổng thể (the elements of a story). Tuổi không phải \"thành phần\" của giấc ngủ, mà là thứ <b>tác động</b> lên nó."
      ]
    },
    "2": {
      ctx: "As you get older, your sleeping ___ change.",
      grammar: [
        "Sau <i>your sleeping</i> cần <b>danh từ</b>; động từ <i>change</i> không có -s → danh từ <b>số nhiều</b>.",
        "Còn lại: <i>patterns, elements</i>."
      ],
      keep: ["patterns","elements"],
      vocab: [
        "<b>sleeping patterns</b> = thói quen, nếp ngủ (ngủ lúc nào, bao lâu, sâu hay nông). Câu sau giải thích ngay: người già ngủ nông hơn, hay thức giấc hơn."
      ]
    },
    "3": {
      ctx: "Getting enough sleep is ___ to your health…",
      grammar: [
        "Sau <b>is</b> cần <b>tính từ</b>; phía sau là <b>to</b>.",
        "Tính từ trong hộp: <i>important, immune, reproductive, benevolent</i>."
      ],
      keep: ["important","immune","reproductive","benevolent"],
      vocab: [
        "<b>important to sth/sb</b> = quan trọng đối với.",
        "Bẫy hay: <b>immune to</b> cũng là cụm đúng ngữ pháp, nhưng nghĩa là <i>miễn nhiễm với</i>. \"Ngủ đủ miễn nhiễm với sức khoẻ\" vô nghĩa. <i>immune</i> dành cho ô 4.",
        "<i>benevolent</i> = nhân từ, tốt bụng (dùng cho người)."
      ]
    },
    "4": {
      ctx: "…it boosts your ___ system, which makes your body better able to fight disease.",
      grammar: [
        "Trước danh từ <i>system</i> cần <b>tính từ</b>: <i>immune, reproductive</i>."
      ],
      keep: ["immune","reproductive"],
      vocab: [
        "<b>immune system</b> = hệ miễn dịch. Manh mối ngay sau: <i>fight disease</i> (chống lại bệnh tật).",
        "<i>reproductive system</i> = hệ sinh sản, không liên quan đến chống bệnh."
      ]
    },
    "5": {
      ctx: "He or she may be able to ___ the cause of sleep problems…",
      grammar: [
        "Sau <b>be able to</b> cần <b>động từ nguyên thể</b>: <i>identify, contort</i>."
      ],
      keep: ["identify","contort"],
      vocab: [
        "<b>identify the cause</b> = xác định nguyên nhân. Collocation rất phổ biến.",
        "<i>contort</i> = vặn vẹo, làm méo mó (contort your face)."
      ]
    }
  },
  collocations: [
    {a:"depend on many", b:"factors"},
    {a:"sleeping", b:"patterns"},
    {a:"immune", b:"system"},
    {a:"well", b:"rested"},
    {a:"identify the", b:"cause"},
    {a:"physical", b:"performance"}
  ],
  vocabulary: [
    {term:"factor", type:"noun", mean:"yếu tố (ảnh hưởng)", ex:"Price is an important factor when choosing a phone."},
    {term:"sleeping patterns", type:"noun phrase", mean:"nếp ngủ, thói quen ngủ", ex:"Exams can change students' sleeping patterns."},
    {term:"immune system", type:"noun phrase", mean:"hệ miễn dịch", ex:"Vitamin C helps your immune system."},
    {term:"drowsy", type:"adjective", mean:"buồn ngủ, lơ mơ", ex:"This medicine may make you drowsy."},
    {term:"identify the cause", type:"collocation", mean:"xác định nguyên nhân", ex:"Engineers are trying to identify the cause of the fire."}
  ]
},
{
  code: "RFIB0068",
  category: "Science",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Climate · Cooling in the North Atlantic",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn biết gì về kỷ băng hà (ice age)?",
      "Nếu các dòng hải lưu (ocean currents) thay đổi, khí hậu sẽ bị ảnh hưởng ra sao?"
    ],
    intro: "Đoạn văn nói về những lần vùng Bắc Đại Tây Dương (North Atlantic) bị lạnh đi trong quá khứ. Khi đọc, hãy để ý xem tác giả nói gì về hiện tại và tương lai."
  },
  passage: [
    "At the end of the last ice age, the melting ice disrupted the ocean currents in the North Atlantic and", {b:"1"},
    "a drop in temperature of almost 5 degrees. Even though the rest of the planet was warming", {b:"2"},
    ", the North Atlantic region remained in a cold period for 1300 years. The same thing happened", {b:"3"},
    "8000 years ago, when the cooling lasted about a hundred years, and it", {b:"4"},
    "happen again today. Even a short period of cooling in the North Atlantic could have a dramatic effect on the wildlife, and the human populations, living there."
  ],
  words: ["forwent","up","never","caused","could","around","will"],
  answers: {"1":"caused","2":"up","3":"around","4":"could"},
  explain: {
    "1": {
      ctx: "…the melting ice disrupted the ocean currents… and ___ a drop in temperature…",
      grammar: [
        "<b>and</b> nối với động từ <i>disrupted</i> (quá khứ đơn), cùng chủ ngữ <i>the melting ice</i> → cần <b>động từ quá khứ</b>.",
        "Còn lại: <i>caused, forwent</i>."
      ],
      keep: ["caused","forwent"],
      vocab: [
        "<b>cause a drop in temperature</b> = gây ra sự sụt giảm nhiệt độ.",
        "Bẫy <b>forwent</b>: quá khứ của <i>forgo</i> = <i>từ bỏ</i> (một thứ mình muốn). Từ hiếm, được đặt vào để \"trông có vẻ học thuật\"."
      ]
    },
    "2": {
      ctx: "Even though the rest of the planet was warming ___, the North Atlantic…",
      grammar: [
        "Sau động từ <i>warming</i> và trước dấu phẩy cần một <b>tiểu từ</b> (particle) để tạo cụm động từ."
      ],
      keep: ["up","around","never"],
      vocab: [
        "<b>warm up</b> = ấm lên. Đối lập với <i>a cold period</i> ở vế sau.",
        "<i>warming around</i> và <i>warming never</i> không phải cách nói đúng."
      ]
    },
    "3": {
      ctx: "The same thing happened ___ 8000 years ago…",
      grammar: [
        "Trước một con số (<i>8000 years ago</i>) cần <b>trạng từ chỉ mức độ ước lượng</b>."
      ],
      keep: ["around","never"],
      vocab: [
        "<b>around</b> + số = khoảng, xấp xỉ (= about, approximately). Rất hay dùng với mốc thời gian lịch sử.",
        "<i>happened never 8000 years ago</i> sai vị trí trạng từ và mâu thuẫn với <i>The same thing happened</i>."
      ]
    },
    "4": {
      ctx: "…and it ___ happen again today.",
      grammar: [
        "Trước động từ nguyên thể <i>happen</i> cần <b>động từ khuyết thiếu</b>: <i>could, will</i>."
      ],
      keep: ["could","will"],
      vocab: [
        "<b>could</b> = có thể (diễn tả <b>khả năng</b>, không chắc chắn). Nhà khoa học đưa ra cảnh báo, không khẳng định.",
        "<i>will</i> = chắc chắn sẽ. Quá mạnh cho một dự đoán khoa học. Câu ngay sau cũng dùng <i>could have a dramatic effect</i>, giữ cùng giọng điệu thận trọng."
      ]
    }
  },
  collocations: [
    {a:"ice", b:"age"},
    {a:"ocean", b:"currents"},
    {a:"a drop in", b:"temperature"},
    {a:"warm", b:"up"},
    {a:"a dramatic", b:"effect"},
    {a:"human", b:"populations"}
  ],
  vocabulary: [
    {term:"ice age", type:"noun", mean:"kỷ băng hà", ex:"Mammoths lived during the last ice age."},
    {term:"disrupt", type:"verb", mean:"làm gián đoạn, làm rối loạn", ex:"The storm disrupted train services."},
    {term:"a drop in", type:"noun phrase", mean:"sự sụt giảm (về)", ex:"There was a sharp drop in sales."},
    {term:"warm up", type:"phrasal verb", mean:"ấm lên", ex:"The weather is starting to warm up."},
    {term:"could (possibility)", type:"modal", mean:"có thể (khả năng, không chắc chắn)", ex:"It could rain later, so take an umbrella."}
  ]
},
{
  code: "RFIB0072",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Peace education · Children",
  minutes: 5,
  warmup: {
    questions: [
      "Chiến tranh (war) ảnh hưởng thế nào đến trẻ em?",
      "Theo bạn, trẻ em có thể góp phần xây dựng hoà bình (peace) không?"
    ],
    intro: "Đoạn văn kể về trẻ em ở Afghanistan, Bosnia và Colombia tham gia giáo dục hoà bình (peace education). Khi đọc, hãy để ý những việc các em đã làm."
  },
  passage: [
    "As war spreads to many corners of the globe, children sadly have been drawn into the center of conflicts. In Afghanistan, Bosnia, and Colombia, however, groups of children have been taking part in peace education", {b:"1"},
    ". The children, after learning to resolve conflicts, took on the", {b:"2"},
    "of peacemakers. The Children's Movement for Peace in Colombia was even nominated for the Nobel Peace Prize in 1998. Groups of children", {b:"3"},
    "as peacemakers studied human rights and poverty issues."
  ],
  words: ["assuming","images","role","projects","comprehensive","acting"],
  answers: {"1":"projects","2":"role","3":"acting"},
  explain: {
    "1": {
      ctx: "…groups of children have been taking part in peace education ___.",
      grammar: [
        "<i>peace education</i> làm danh từ bổ nghĩa → cần <b>danh từ chính</b>. Không có mạo từ → <b>số nhiều</b>.",
        "Còn lại: <i>images, projects</i>."
      ],
      keep: ["images","projects"],
      vocab: [
        "<b>take part in projects</b> = tham gia các dự án. <i>Peace education projects</i> = các dự án giáo dục hoà bình.",
        "<i>take part in images</i> (tham gia hình ảnh) vô nghĩa."
      ]
    },
    "2": {
      ctx: "The children… took on the ___ of peacemakers.",
      grammar: [
        "Giữa <b>the</b> và <b>of</b> cần <b>danh từ</b>: <i>role, images</i>."
      ],
      keep: ["role","images"],
      vocab: [
        "<b>take on the role of</b> = đảm nhận vai trò. Cụm cố định: sau khi học cách giải quyết xung đột, các em <b>trở thành</b> người hoà giải.",
        "<i>took on the images of</i> sai nghĩa. Ta chỉ <i>take on</i> trách nhiệm, vai trò, công việc."
      ]
    },
    "3": {
      ctx: "Groups of children ___ as peacemakers studied human rights…",
      grammar: [
        "Động từ chính của câu là <i>studied</i>. Ô trống rút gọn mệnh đề quan hệ chủ động: <i>children (who were) ___ as peacemakers</i> → <b>V-ing</b>.",
        "Còn lại: <i>assuming, acting</i>."
      ],
      keep: ["assuming","acting"],
      vocab: [
        "<b>act as sth</b> = hoạt động với tư cách là, đóng vai trò là. Cụm cố định với <i>as</i>.",
        "Bẫy <b>assuming</b>: <i>assume</i> nghĩa là \"đảm nhận\" nhưng đi trực tiếp với tân ngữ (<i>assume the role of</i>), không đi với <i>as</i>. Ngoài ra <i>assume</i> còn nghĩa \"giả định\"."
      ]
    }
  },
  collocations: [
    {a:"take part", b:"in"},
    {a:"resolve", b:"conflicts"},
    {a:"take on the", b:"role"},
    {a:"act", b:"as"},
    {a:"human", b:"rights"},
    {a:"poverty", b:"issues"}
  ],
  vocabulary: [
    {term:"be drawn into", type:"passive", mean:"bị lôi kéo vào", ex:"He didn't want to be drawn into the argument."},
    {term:"take part in", type:"phrase", mean:"tham gia", ex:"All students take part in the sports day."},
    {term:"resolve conflicts", type:"collocation", mean:"giải quyết xung đột", ex:"Good leaders know how to resolve conflicts."},
    {term:"take on the role of", type:"phrase", mean:"đảm nhận vai trò", ex:"She took on the role of team leader."},
    {term:"act as", type:"phrase", mean:"đóng vai trò là, làm (nhiệm vụ)", ex:"Older students act as mentors for new students."}
  ]
},
{
  code: "RFIB0074",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "International students · Work-ready",
  minutes: 5,
  warmup: {
    questions: [
      "Du học sinh (international students) có thể đóng góp gì cho nước mà họ đến học?",
      "Theo bạn, sinh viên có nên đi làm thực tế (practical work) trước khi ra trường không?"
    ],
    intro: "Đoạn văn nói về một chương trình giúp du học sinh ngành kế toán và công nghệ thông tin ở Úc sẵn sàng đi làm (work-ready). Khi đọc, hãy để ý chương trình giúp ích gì cho cả sinh viên và nhà tuyển dụng."
  },
  passage: [
    "Work-ready international students are providing greater options for local employers who are having difficulties", {b:"1"},
    "local staff due to", {b:"2"},
    "employment rates and ongoing labour shortages. International students in accounting and information technology take part in a year-long program", {b:"3"},
    "of classroom work and practical experience, which provides them with", {b:"4"},
    "skills, industry contacts and a working", {b:"5"},
    "of Australian."
  ],
  words: ["finding","founding","managing","high","low","consisting","knowledge","valuable","experience","consists"],
  answers: {"1":"finding","2":"high","3":"consisting","4":"valuable","5":"knowledge"},
  explain: {
    "1": {
      ctx: "…local employers who are having difficulties ___ local staff…",
      grammar: [
        "Cấu trúc <b>have difficulty/difficulties (in) + V-ing</b> → cần <b>V-ing</b>.",
        "V-ing trong hộp: <i>finding, founding, managing, consisting</i>."
      ],
      keep: ["finding","founding","managing","consisting"],
      vocab: [
        "<b>find staff</b> = tìm được, tuyển được nhân viên. Manh mối: <i>labour shortages</i> (thiếu lao động).",
        "<i>founding</i> (thành lập) dùng cho công ty, tổ chức. <i>managing staff</i> (quản lý nhân viên) không liên quan đến thiếu người."
      ]
    },
    "2": {
      ctx: "…due to ___ employment rates and ongoing labour shortages.",
      grammar: [
        "Trước cụm danh từ <i>employment rates</i> cần <b>tính từ</b>: <i>high, low, valuable</i>."
      ],
      keep: ["high","low","valuable"],
      vocab: [
        "Logic: khó tuyển người vì <b>tỷ lệ có việc làm cao</b>, ai cũng đã có việc → <b>high</b>.",
        "Bẫy <b>low</b>: nếu tỷ lệ có việc làm thấp thì có nhiều người đang tìm việc, nhà tuyển dụng sẽ <b>dễ</b> tìm người. Cẩn thận: <i>employment</i> (có việc) khác <i>unemployment</i> (thất nghiệp)."
      ]
    },
    "3": {
      ctx: "…take part in a year-long program ___ of classroom work and practical experience…",
      grammar: [
        "Sau danh từ <i>program</i>, câu đã có động từ chính (<i>take part</i>) → ô trống rút gọn mệnh đề quan hệ chủ động: <i>a program (which consists) of…</i> → <b>V-ing</b>.",
        "<i>consists</i> cần chủ ngữ hoặc <i>which</i> đứng trước → loại. Còn lại: <i>consisting</i>."
      ],
      keep: ["consisting"],
      vocab: [
        "<b>consist of</b> = gồm có. <i>A program consisting of classroom work and practical experience</i> = chương trình gồm học trên lớp và thực hành."
      ]
    },
    "4": {
      ctx: "…which provides them with ___ skills, industry contacts…",
      grammar: [
        "Sau <b>provide sb with</b> và trước danh từ <i>skills</i> cần <b>tính từ</b>: <i>valuable, low</i> (<i>high</i> đã dùng)."
      ],
      keep: ["valuable","low"],
      vocab: [
        "<b>valuable skills</b> = những kỹ năng quý giá, hữu ích.",
        "<i>low skills</i> mâu thuẫn với ý tích cực của cả câu."
      ]
    },
    "5": {
      ctx: "…and a working ___ of Australian.",
      grammar: [
        "Sau <i>a working</i> và trước <b>of</b> cần <b>danh từ</b>: <i>knowledge, experience</i>."
      ],
      keep: ["knowledge","experience"],
      vocab: [
        "<b>a working knowledge of sth</b> = vốn hiểu biết <b>đủ để dùng</b> trong công việc (thành ngữ cố định). Ở đây là vốn tiếng Anh kiểu Úc.",
        "Bẫy <b>experience</b>: <i>work experience</i> (kinh nghiệm làm việc) là cụm khác. Ta không nói <i>a working experience of Australian</i>."
      ]
    }
  },
  collocations: [
    {a:"labour", b:"shortages"},
    {a:"employment", b:"rates"},
    {a:"practical", b:"experience"},
    {a:"industry", b:"contacts"},
    {a:"a working", b:"knowledge"},
    {a:"year-long", b:"program"}
  ],
  vocabulary: [
    {term:"work-ready", type:"adjective", mean:"sẵn sàng đi làm", ex:"The course makes graduates work-ready."},
    {term:"labour shortage", type:"noun phrase", mean:"sự thiếu hụt lao động", ex:"Farms face a labour shortage at harvest time."},
    {term:"consist of", type:"phrasal verb", mean:"bao gồm", ex:"The test consists of four parts."},
    {term:"provide sb with sth", type:"structure", mean:"cung cấp cho ai cái gì", ex:"The school provides students with free laptops."},
    {term:"a working knowledge of", type:"idiom", mean:"vốn hiểu biết đủ dùng về", ex:"You need a working knowledge of Excel for this job."}
  ]
},
{
  code: "RFIB0077",
  category: "Science",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Weather · What is climate?",
  minutes: 5,
  warmup: {
    questions: [
      "Khí hậu (climate) ở nơi bạn sống như thế nào?",
      "Thời tiết (weather) và khí hậu khác nhau ra sao?"
    ],
    intro: "Đoạn văn ngắn giải thích khái niệm khí hậu và so sánh khí hậu ở sa mạc (the desert) với nước Anh (the UK). Khi đọc, hãy để ý các từ mô tả từng kiểu khí hậu."
  },
  passage: [
    "Climate is the word we", {b:"1"},
    "for weather over a long period of time. The desert has a", {b:"2"},
    "climate, because there", {b:"3"},
    "very little rain, The UK", {b:"4"},
    "a temperate climate, which means winters are, overall, mild", {b:"5"},
    "summers, generally don't get too hot."
  ],
  words: ["is","are","describe","use","dry","wet","forecast","has","or","summers","and"],
  answers: {"1":"use","2":"dry","3":"is","4":"has","5":"and"},
  explain: {
    "1": {
      ctx: "Climate is the word we ___ for weather over a long period of time.",
      grammar: [
        "Mệnh đề quan hệ rút gọn <i>the word (that) we ___</i> → cần <b>động từ</b> chia với <i>we</i> (nguyên thể). Loại <i>is, has</i>.",
        "Phía sau là <b>for</b> → động từ phải đi được với <i>for</i>."
      ],
      keep: ["are","describe","use","forecast"],
      vocab: [
        "<b>use a word for sth</b> = dùng một từ để chỉ cái gì. <i>Climate is the word we use for…</i> = \"khí hậu\" là từ ta dùng để chỉ…",
        "<i>describe</i> đi trực tiếp với tân ngữ (describe the weather), không đi với <i>for</i>. <i>forecast</i> = dự báo, sai nghĩa."
      ]
    },
    "2": {
      ctx: "The desert has a ___ climate, because there ___ very little rain…",
      grammar: [
        "Giữa <b>a</b> và danh từ <i>climate</i> cần <b>tính từ</b>: <i>dry, wet</i>."
      ],
      keep: ["dry","wet"],
      vocab: [
        "<b>a dry climate</b> = khí hậu khô hạn. Manh mối ngay sau: <i>because there is very little rain</i>."
      ]
    },
    "3": {
      ctx: "…because there ___ very little rain…",
      grammar: [
        "Cấu trúc <b>there is / there are</b>. <i>rain</i> là danh từ <b>không đếm được</b> (đi với <i>little</i>) → <b>is</b>."
      ],
      keep: ["is","are"],
      vocab: [
        "Mẹo: <i>little</i> đi với danh từ không đếm được → động từ số ít; <i>few</i> đi với danh từ đếm được số nhiều → động từ số nhiều (<i>there are very few trees</i>)."
      ]
    },
    "4": {
      ctx: "…The UK ___ a temperate climate…",
      grammar: [
        "Mệnh đề <i>The UK ___ a temperate climate</i> cần <b>động từ chính</b>; chủ ngữ số ít.",
        "Còn lại: <i>has, is</i>."
      ],
      keep: ["has","is"],
      vocab: [
        "Nói về khí hậu của một nơi, ta dùng <b>have</b>: <i>The desert <b>has</b> a dry climate</i> (ngay câu trước) → <i>The UK <b>has</b> a temperate climate</i>.",
        "<i>The UK is a temperate climate</i> sai nghĩa: nước Anh không \"là\" một kiểu khí hậu."
      ]
    },
    "5": {
      ctx: "…winters are, overall, mild ___ summers, generally don't get too hot.",
      grammar: [
        "Ô trống nối hai mệnh đề <i>winters are mild</i> và <i>summers don't get too hot</i> → cần <b>liên từ</b>: <i>and, or</i>."
      ],
      keep: ["and","or"],
      vocab: [
        "<b>and</b> nối hai thông tin <b>cùng đúng</b>: mùa đông ôn hoà <b>và</b> mùa hè không quá nóng. Đó chính là định nghĩa <i>temperate climate</i>.",
        "<i>or</i> diễn tả lựa chọn \"hoặc… hoặc\", không hợp khi mô tả cả hai mùa."
      ]
    }
  },
  collocations: [
    {a:"temperate", b:"climate"},
    {a:"mild", b:"winters"},
    {a:"very little", b:"rain"},
    {a:"a long period", b:"of time"},
    {a:"weather", b:"forecast"},
    {a:"get too", b:"hot"}
  ],
  vocabulary: [
    {term:"climate vs weather", type:"nouns", mean:"khí hậu (dài hạn) vs thời tiết (ngắn hạn, hằng ngày)", ex:"Vietnam has a tropical climate, but the weather today is cool."},
    {term:"temperate", type:"adjective", mean:"ôn hoà (khí hậu không quá nóng, không quá lạnh)", ex:"Most of Europe has a temperate climate."},
    {term:"mild", type:"adjective", mean:"dịu, ôn hoà", ex:"We had a mild winter this year."},
    {term:"have a … climate", type:"structure", mean:"có khí hậu…", ex:"Da Lat has a cool climate all year round."},
    {term:"there is little / there are few", type:"structure", mean:"có rất ít (không đếm được / đếm được)", ex:"There is little water and there are few trees."}
  ]
},
{
  code: "RFIB0024",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Study skills · Reading research critically",
  minutes: 5,
  warmup: {
    questions: [
      "Khi tìm tài liệu cho bài luận, bạn chọn nguồn (sources) như thế nào?",
      "Làm sao để biết một nghiên cứu (research) có đáng tin cậy (credible) hay không?"
    ],
    intro: "Đoạn văn là phần mở đầu của một hướng dẫn học thuật, giải thích bước tiếp theo sau khi đã tìm được tài liệu nghiên cứu. Khi đọc, hãy để ý những việc người học cần làm với tài liệu đó."
  },
  passage: [
    "Having tracked down research that is", {b:"1"},
    "to your area of interest, the next task is to actually", {b:"2"},
    "of that research. This section is intended to show you how to be critical of the research you", {b:"3"},
    "and how to check that the", {b:"4"},
    "is credible and represented appropriately. Unfortunately this means discussing the ways in which research findings may be misrepresented."
  ],
  words: ["make sense","have fun","statement","are reviewing","acceptable","relevant","evidence"],
  answers: {"1":"relevant","2":"make sense","3":"are reviewing","4":"evidence"},
  explain: {
    "1": {
      ctx: "…research that is ___ to your area of interest…",
      grammar: [
        "Sau <b>is</b> cần <b>tính từ</b>; phía sau là giới từ <b>to</b>.",
        "Tính từ trong hộp: <i>relevant, acceptable</i>."
      ],
      keep: ["relevant","acceptable"],
      vocab: [
        "<b>relevant to sth</b> = liên quan, phù hợp với. <i>Research relevant to your area of interest</i> = tài liệu liên quan đến lĩnh vực bạn quan tâm.",
        "<i>acceptable to sb</i> = chấp nhận được đối với ai. Không đi với \"lĩnh vực quan tâm\"."
      ]
    },
    "2": {
      ctx: "…the next task is to actually ___ of that research.",
      grammar: [
        "Sau <b>to (actually)</b> cần <b>động từ nguyên thể</b>; phía sau là <b>of</b>.",
        "Cụm động từ nguyên thể: <i>make sense, have fun</i>. Chỉ <i>make sense <b>of</b></i> đi với <i>of</i>."
      ],
      keep: ["make sense"],
      vocab: [
        "<b>make sense of sth</b> = hiểu được, nắm được ý nghĩa của điều gì (thường là thứ phức tạp).",
        "Phân biệt: <i>sth makes sense</i> = điều gì hợp lý; <i>make sense <b>of</b> sth</i> = (người) hiểu được điều gì."
      ]
    },
    "3": {
      ctx: "…how to be critical of the research you ___ and how to check…",
      grammar: [
        "Mệnh đề quan hệ rút gọn <i>the research (that) you ___</i> → cần <b>động từ chia</b> với <i>you</i>, có tân ngữ là <i>the research</i>.",
        "Còn lại: <i>are reviewing</i>."
      ],
      keep: ["are reviewing"],
      vocab: [
        "<b>review research</b> = xem xét, đánh giá tài liệu nghiên cứu. Thì hiện tại tiếp diễn nhấn vào việc <b>đang làm</b> ở giai đoạn này."
      ]
    },
    "4": {
      ctx: "…how to check that the ___ is credible and represented appropriately.",
      grammar: [
        "Sau <b>the</b> cần <b>danh từ</b>; động từ <i>is</i> → số ít hoặc không đếm được.",
        "Còn lại: <i>evidence, statement</i>."
      ],
      keep: ["evidence","statement"],
      vocab: [
        "<b>credible evidence</b> = bằng chứng đáng tin cậy. Trong nghiên cứu, thứ cần kiểm tra độ tin cậy là <b>bằng chứng</b>.",
        "<i>statement</i> (lời tuyên bố) là đếm được, và câu cuối nói về <i>research findings</i> (kết quả nghiên cứu), tức là bằng chứng."
      ]
    }
  },
  collocations: [
    {a:"track", b:"down"},
    {a:"area of", b:"interest"},
    {a:"make sense", b:"of"},
    {a:"be critical", b:"of"},
    {a:"credible", b:"evidence"},
    {a:"research", b:"findings"}
  ],
  vocabulary: [
    {term:"track down", type:"phrasal verb", mean:"tìm ra, lần ra (sau khi tìm kiếm)", ex:"I finally tracked down the book in an old library."},
    {term:"relevant to", type:"adj + prep", mean:"liên quan, phù hợp với", ex:"Only include examples relevant to the topic."},
    {term:"make sense of", type:"phrase", mean:"hiểu được, nắm được ý nghĩa", ex:"I can't make sense of these instructions."},
    {term:"be critical of", type:"phrase", mean:"có cái nhìn phản biện về, phê phán", ex:"Good students are critical of what they read online."},
    {term:"credible", type:"adjective", mean:"đáng tin cậy", ex:"Use credible sources in your essay."}
  ]
},
{
  code: "RFIB0029",
  category: "Education",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Language learning · Steps to fluency",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn đặt ra mục tiêu (goals) như thế nào khi học tiếng Anh?",
      "Theo bạn, điều gì quan trọng nhất để học giỏi một ngoại ngữ (a new language)?"
    ],
    intro: "Đoạn văn đưa ra các giai đoạn để học một ngôn ngữ mới cho đến khi thành thạo (proficiency). Khi đọc, hãy để ý thứ tự các bước tác giả gợi ý."
  },
  passage: [
    "Many people like to learn a new language. As", {b:"1"},
    "it sounds, to achieve the proficiency it can take a lot of efforts. There are multiple stages before a person can be said to be a language expert. First of all, the person should set a few", {b:"2"},
    "goals and narrow the focus on the most basic part. Every language uses grammar, which creates its skeleton. If a person learns the grammar, it's half job done. After that, learning to use the right words is very", {b:"3"},
    ", because a word can be used in a variety of connotations at different places. Having a pal or a friend who speaks that language makes the task easier, so that errors could be", {b:"4"},
    "instantly. When you understand at least 40% of the words and sentences, listening to the programs and news in that language can also help immensely. All in all, it's about the", {b:"5"},
    "and efforts taken with the right techniques."
  ],
  words: ["enhanced","exciting","important","long-term","short-term","rectified","devotion","dedication"],
  answers: {"1":"exciting","2":"short-term","3":"important","4":"rectified","5":"dedication"},
  explain: {
    "1": {
      ctx: "As ___ it sounds, to achieve the proficiency it can take a lot of efforts.",
      grammar: [
        "Cấu trúc nhượng bộ đảo ngữ <b>As + adj + S + V</b> (= Although it sounds + adj) → cần <b>tính từ</b>.",
        "Tính từ trong hộp: <i>exciting, important, long-term, short-term</i>."
      ],
      keep: ["exciting","important","long-term","short-term"],
      vocab: [
        "<i>As exciting as it sounds</i> = dù nghe có vẻ thú vị đến đâu. Vế sau đối lập: <b>cần rất nhiều nỗ lực</b>.",
        "Câu trước nói nhiều người <b>thích</b> học ngoại ngữ → <b>exciting</b> nối tiếp tự nhiên. <i>long-term/short-term</i> không dùng để tả cảm giác \"nghe có vẻ\"."
      ]
    },
    "2": {
      ctx: "…should set a few ___ goals and narrow the focus on the most basic part.",
      grammar: [
        "Giữa <i>a few</i> và danh từ <i>goals</i> cần <b>tính từ</b>."
      ],
      keep: ["short-term","long-term","exciting","important"],
      vocab: [
        "<b>short-term goals</b> = mục tiêu ngắn hạn. Manh mối: <i>First of all</i> (bước đầu tiên) và <i>narrow the focus on the most basic part</i> (tập trung vào phần cơ bản nhất).",
        "Bẫy <b>long-term</b>: mục tiêu dài hạn không đi với ý \"thu hẹp, bắt đầu từ phần cơ bản\"."
      ]
    },
    "3": {
      ctx: "…learning to use the right words is very ___, because a word can be used in a variety of connotations…",
      grammar: [
        "Sau <b>is very</b> cần <b>tính từ</b>: <i>important, exciting</i> (<i>short-term</i> đã dùng)."
      ],
      keep: ["important","exciting"],
      vocab: [
        "<b>very important</b>: vế sau <i>because…</i> đưa ra <b>lý do</b> vì sao việc dùng đúng từ là cần thiết: một từ có nhiều sắc thái nghĩa.",
        "<i>exciting</i> đã dùng ở ô 1, và lý do phía sau không nói về sự thú vị."
      ]
    },
    "4": {
      ctx: "…so that errors could be ___ instantly.",
      grammar: [
        "<b>could be + V3</b> → câu bị động, cần <b>phân từ II</b>: <i>rectified, enhanced</i>."
      ],
      keep: ["rectified","enhanced"],
      vocab: [
        "<b>rectify errors</b> = sửa lỗi (trang trọng hơn <i>correct</i>). Có bạn nói ngôn ngữ đó thì lỗi được <b>sửa ngay</b>.",
        "<i>enhanced</i> = được nâng cao, cải thiện. Không ai muốn \"nâng cao lỗi sai\"."
      ]
    },
    "5": {
      ctx: "All in all, it's about the ___ and efforts taken with the right techniques.",
      grammar: [
        "Sau <b>the</b> cần <b>danh từ</b>, nối với <i>efforts</i> bằng <i>and</i>: <i>dedication, devotion</i>."
      ],
      keep: ["dedication","devotion"],
      vocab: [
        "<b>dedication</b> = sự tận tâm, kiên trì <b>theo đuổi một mục tiêu</b> (dedication to your studies). Hay đi cùng <i>effort, hard work</i>.",
        "Bẫy <b>devotion</b>: = sự tận tuỵ, <b>yêu thương hết lòng</b>, thường dành cho người, tôn giáo (devotion to her family). Mang sắc thái tình cảm hơn, ít dùng cho việc học."
      ]
    }
  },
  collocations: [
    {a:"achieve", b:"proficiency"},
    {a:"short-term", b:"goals"},
    {a:"narrow the", b:"focus"},
    {a:"rectify", b:"errors"},
    {a:"dedication", b:"and effort"},
    {a:"help", b:"immensely"}
  ],
  vocabulary: [
    {term:"proficiency", type:"noun", mean:"sự thành thạo", ex:"You need a certificate of English proficiency."},
    {term:"short-term goal", type:"noun phrase", mean:"mục tiêu ngắn hạn", ex:"My short-term goal is to learn 10 new words a day."},
    {term:"connotation", type:"noun", mean:"sắc thái nghĩa, nghĩa hàm ẩn", ex:"'Cheap' has a negative connotation; 'affordable' does not."},
    {term:"rectify", type:"verb · formal", mean:"sửa chữa (lỗi, sai sót)", ex:"The company quickly rectified the mistake."},
    {term:"dedication", type:"noun", mean:"sự tận tâm, kiên trì", ex:"Her dedication to practice made her a great pianist."}
  ]
},
{
  code: "RFIB0044",
  category: "Others",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Psychology · Fear of conflict",
  minutes: 5,
  warmup: {
    questions: [
      "Khi bất đồng ý kiến với bạn bè, bạn thường nói thẳng hay tránh né (avoid)?",
      "Vì sao nhiều người sợ xung đột (conflict)?"
    ],
    intro: "Đoạn văn bàn về lý do nhiều người, đặc biệt trong một nhóm làm việc, sợ những cuộc xung đột công khai (open conflict). Khi đọc, hãy để ý những nỗi sợ cụ thể mà tác giả nhắc tới."
  },
  passage: [
    "Most of us are", {b:"1"},
    "of open conflict and avoid it if we can. And there is a", {b:"2"},
    "to expressing and working through conflict. If the working involves harsh words and name-calling people fell deeply hurt and relationships can be", {b:"3"},
    ". Some group members may be afraid that if they really", {b:"4"},
    "their anger, they may go out of control and become violent, or they may do this. These fears can be very", {b:"5"},
    "and based on experience."
  ],
  words: ["routine","rein","damaged","culminated","scared","real","reminiscent","express","risk","opaque"],
  answers: {"1":"scared","2":"risk","3":"damaged","4":"express","5":"real"},
  explain: {
    "1": {
      ctx: "Most of us are ___ of open conflict and avoid it if we can.",
      grammar: [
        "Sau <b>are</b> cần <b>tính từ</b>; phía sau là giới từ <b>of</b>.",
        "<i>scared of</i> và <i>reminiscent of</i> là hai cụm tính từ + <i>of</i> trong hộp."
      ],
      keep: ["scared","reminiscent"],
      vocab: [
        "<b>be scared of</b> = sợ. Manh mối: <i>avoid it if we can</i> (tránh nếu có thể).",
        "Bẫy <b>reminiscent of</b>: = gợi nhớ đến (This song is reminiscent of my childhood). Đúng ngữ pháp nhưng sai nghĩa."
      ]
    },
    "2": {
      ctx: "And there is a ___ to expressing and working through conflict.",
      grammar: [
        "Sau <b>there is a</b> cần <b>danh từ đếm được số ít</b>; phía sau là <i>to + V-ing</i>.",
        "Danh từ: <i>risk, rein, routine</i>."
      ],
      keep: ["risk","rein","routine"],
      vocab: [
        "<b>a risk to (doing) sth</b> = rủi ro khi làm gì. Câu sau giải thích ngay rủi ro: lời lẽ nặng nề làm tổn thương, phá vỡ mối quan hệ.",
        "<i>rein</i> = dây cương (give free rein to = buông lỏng). <i>routine</i> = thói quen thường ngày. Không hợp nghĩa."
      ]
    },
    "3": {
      ctx: "…people fell deeply hurt and relationships can be ___.",
      grammar: [
        "<b>can be + V3</b> → bị động: <i>damaged, culminated</i>."
      ],
      keep: ["damaged","culminated"],
      vocab: [
        "<b>relationships can be damaged</b> = các mối quan hệ có thể bị tổn hại. Cùng chiều với <i>deeply hurt</i>.",
        "Bẫy <b>culminated</b>: <i>culminate in sth</i> = lên đến đỉnh điểm, kết thúc bằng. Là nội động từ, không dùng ở bị động."
      ]
    },
    "4": {
      ctx: "…afraid that if they really ___ their anger, they may go out of control…",
      grammar: [
        "Mệnh đề <i>if they (really) ___</i> cần <b>động từ</b> chia với <i>they</i>; có tân ngữ <i>their anger</i>.",
        "Động từ nguyên thể: <i>express, rein</i>."
      ],
      keep: ["express","rein"],
      vocab: [
        "<b>express anger</b> = bộc lộ sự tức giận. Sợ rằng bộc lộ thật sự thì sẽ mất kiểm soát.",
        "Bẫy <b>rein</b>: <i>rein in your anger</i> = <b>kìm nén</b> cơn giận, ngược nghĩa, và cần thêm <i>in</i>."
      ]
    },
    "5": {
      ctx: "These fears can be very ___ and based on experience.",
      grammar: [
        "Sau <b>can be very</b> cần <b>tính từ</b>: <i>real, opaque</i>."
      ],
      keep: ["real","opaque"],
      vocab: [
        "<b>very real</b> = rất thật, có cơ sở. Đi cùng <i>based on experience</i> (dựa trên trải nghiệm thực tế).",
        "<i>opaque</i> = mờ đục, khó hiểu. Không đi với <i>based on experience</i>."
      ]
    }
  },
  collocations: [
    {a:"open", b:"conflict"},
    {a:"work through", b:"conflict"},
    {a:"harsh", b:"words"},
    {a:"deeply", b:"hurt"},
    {a:"express", b:"anger"},
    {a:"go out", b:"of control"}
  ],
  vocabulary: [
    {term:"be scared of", type:"phrase", mean:"sợ", ex:"Many children are scared of the dark."},
    {term:"work through", type:"phrasal verb", mean:"giải quyết dần, vượt qua (vấn đề)", ex:"They worked through their problems together."},
    {term:"name-calling", type:"noun", mean:"việc chửi rủa, gọi tên miệt thị", ex:"Name-calling is not allowed in class."},
    {term:"express anger", type:"collocation", mean:"bộc lộ sự tức giận", ex:"It's healthy to express anger calmly."},
    {term:"go out of control", type:"phrase", mean:"mất kiểm soát", ex:"The fire went out of control very quickly."}
  ]
},
{
  code: "RFIB0059",
  category: "Science",
  level: "Hard",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Technology · The myth of multitasking",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn có hay vừa học vừa lướt mạng hay nhắn tin (multitasking) không?",
      "Theo bạn, làm nhiều việc cùng lúc giúp tiết kiệm thời gian hay làm giảm hiệu quả?"
    ],
    intro: "Đoạn văn tóm tắt một nghiên cứu của Đại học Stanford về việc làm nhiều việc cùng lúc trên Internet. Khi đọc, hãy để ý kết luận bất ngờ của các nhà nghiên cứu."
  },
  passage: [
    "Training does not improve the ability to", {b:"1"},
    ". In 2009 Eyal Ophir, and then at Stanford University, and his colleagues discovered that multitasking on the Internet paradoxically makes users less effective at", {b:"2"},
    "from one task to another. They are less able to", {b:"3"},
    "their attention and are too vulnerable to distractions. Consequently, even members of the \"digital native\" generation are unlikely to develop the cognitive", {b:"4"},
    "needed to divide their time between various tasks or to instantly jump from one activity to another. In other words, digital multitasking does little more than produce a dangerous illusion of", {b:"5"},
    "."
  ],
  words: ["multitask","alternating","competence","switching","allocate","converge","control"],
  answers: {"1":"multitask","2":"switching","3":"allocate","4":"control","5":"competence"},
  explain: {
    "1": {
      ctx: "Training does not improve the ability to ___.",
      grammar: [
        "Sau <b>the ability to</b> cần <b>động từ nguyên thể</b>. Câu kết thúc ngay sau ô trống → cần <b>nội động từ</b> (không có tân ngữ).",
        "<i>allocate</i> là ngoại động từ (cần tân ngữ) → loại. Còn lại: <i>multitask, converge</i>."
      ],
      keep: ["multitask","converge"],
      vocab: [
        "<b>multitask</b> (v) = làm nhiều việc cùng lúc. Cả đoạn văn nói về <i>multitasking</i>.",
        "<i>converge</i> = hội tụ, gặp nhau tại một điểm. Không hợp chủ đề."
      ]
    },
    "2": {
      ctx: "…makes users less effective at ___ from one task to another.",
      grammar: [
        "Sau giới từ <b>at</b> cần <b>V-ing</b>: <i>switching, alternating</i>."
      ],
      keep: ["switching","alternating"],
      vocab: [
        "<b>switch from A to B</b> = chuyển (nhanh) từ việc này sang việc khác. Cụm <i>task switching</i> là thuật ngữ trong tâm lý học.",
        "Bẫy <b>alternating</b>: <i>alternate between A and B</i> = luân phiên giữa A và B. Đi với <i>between… and</i>, không đi với <i>from… to</i>."
      ]
    },
    "3": {
      ctx: "They are less able to ___ their attention…",
      grammar: [
        "Sau <b>be able to</b> cần <b>động từ nguyên thể</b>; có tân ngữ <i>their attention</i> → ngoại động từ: <i>allocate, control</i>."
      ],
      keep: ["allocate","control"],
      vocab: [
        "<b>allocate attention</b> = phân bổ sự chú ý (cho từng việc). Đây là kỹ năng cốt lõi khi chia thời gian giữa nhiều nhiệm vụ.",
        "<i>control their attention</i> cũng đúng ngữ pháp và nghĩa, nhưng ô 4 chỉ có thể là <i>control</i> (danh từ trong <i>cognitive control</i>). Vì vậy dành <i>allocate</i> cho ô này."
      ]
    },
    "4": {
      ctx: "…unlikely to develop the cognitive ___ needed to divide their time…",
      grammar: [
        "Sau tính từ <i>cognitive</i> cần <b>danh từ</b>: <i>control, competence</i>."
      ],
      keep: ["control","competence"],
      vocab: [
        "<b>cognitive control</b> = khả năng kiểm soát nhận thức (điều khiển sự chú ý, chuyển đổi giữa các việc). Đây là thuật ngữ khoa học cố định.",
        "<i>competence</i> được dành cho thành ngữ ở ô 5."
      ]
    },
    "5": {
      ctx: "…digital multitasking does little more than produce a dangerous illusion of ___.",
      grammar: [
        "Sau <b>of</b> cần <b>danh từ</b>: <i>competence</i>."
      ],
      keep: ["competence"],
      vocab: [
        "<b>an illusion of competence</b> = ảo tưởng rằng mình giỏi, có năng lực. Người làm nhiều việc cùng lúc <b>tưởng</b> mình hiệu quả, nhưng thực ra không.",
        "Từ <i>paradoxically</i> (một cách nghịch lý) ở đầu bài chuẩn bị cho kết luận này."
      ]
    }
  },
  collocations: [
    {a:"switch from one task", b:"to another"},
    {a:"allocate", b:"attention"},
    {a:"cognitive", b:"control"},
    {a:"an illusion", b:"of competence"},
    {a:"digital", b:"native"},
    {a:"vulnerable", b:"to distractions"}
  ],
  vocabulary: [
    {term:"multitask", type:"verb", mean:"làm nhiều việc cùng lúc", ex:"I can't multitask while I'm studying."},
    {term:"paradoxically", type:"adverb", mean:"một cách nghịch lý", ex:"Paradoxically, the more choices we have, the less happy we feel."},
    {term:"allocate", type:"verb", mean:"phân bổ, phân chia", ex:"Allocate more time to the hardest questions."},
    {term:"be vulnerable to", type:"phrase", mean:"dễ bị tổn thương bởi, dễ bị ảnh hưởng bởi", ex:"Children are vulnerable to online advertising."},
    {term:"illusion", type:"noun", mean:"ảo tưởng, ảo giác", ex:"Social media gives an illusion of a perfect life."}
  ]
},
{
  code: "RFIB0066",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "History · The school curriculum",
  minutes: 5,
  warmup: {
    questions: [
      "Sách lịch sử (history books) có kể lại tất cả mọi sự kiện đã xảy ra không?",
      "Theo bạn, ai nên quyết định học sinh được học những gì trong môn Lịch sử?"
    ],
    intro: "Đoạn văn nói về tính chọn lọc của lịch sử và một cuộc tranh luận lớn ở Anh cuối thập niên 1980 về chương trình học môn Lịch sử (history curriculum). Khi đọc, hãy để ý những ai đã tham gia cuộc tranh luận này."
  },
  passage: [
    "History is selective. What history books tell us about the past is not everything that happened, but what historians have", {b:"1"},
    ". They cannot put in everything: choices have to be made. Choices must similarly be made about which aspects of the past should be formally taught to the next generation in the shape of school history lessons. So, for example, when a national school curriculum for England and Wales was first discussed at the end of the 1980s, the history curriculum was the subject of considerable public and media", {b:"2"},
    ". Politicians argued about it; people wrote letters to the press about it; the Prime Minister of the time, Margaret Thatcher,", {b:"3"},
    "in the debate."
  ],
  words: ["passion","interest","screened","paused","selected","intervened"],
  answers: {"1":"selected","2":"interest","3":"intervened"},
  explain: {
    "1": {
      ctx: "…but what historians have ___.",
      grammar: [
        "<b>have + V3</b> → thì hiện tại hoàn thành, cần <b>phân từ II</b>.",
        "Phân từ trong hộp: <i>screened, paused, selected, intervened</i>."
      ],
      keep: ["screened","paused","selected","intervened"],
      vocab: [
        "<b>selected</b> = đã chọn lọc. Manh mối ngay câu đầu: <i>History is <b>selective</b></i> và câu sau: <i>choices have to be made</i>.",
        "Bẫy <b>screened</b>: <i>screen</i> = sàng lọc, kiểm tra (screen patients, screen job applicants) hoặc chiếu phim. Không khớp với từ <i>selective</i> ở đầu bài như <i>selected</i>."
      ]
    },
    "2": {
      ctx: "…the subject of considerable public and media ___.",
      grammar: [
        "Sau các từ bổ nghĩa <i>public and media</i> cần <b>danh từ</b>: <i>interest, passion</i>."
      ],
      keep: ["interest","passion"],
      vocab: [
        "<b>public interest / media interest</b> = sự quan tâm của công chúng / truyền thông. <i>the subject of considerable interest</i> là cụm rất hay gặp.",
        "<i>passion</i> = niềm đam mê. Không đi tự nhiên với <i>public and media</i>."
      ]
    },
    "3": {
      ctx: "…the Prime Minister of the time, Margaret Thatcher, ___ in the debate.",
      grammar: [
        "Câu cần <b>động từ chính</b> ở quá khứ đơn (cùng thì với <i>argued, wrote</i>). Phía sau là <b>in</b> → nội động từ: <i>intervened, paused</i>."
      ],
      keep: ["intervened","paused"],
      vocab: [
        "<b>intervene in sth</b> = can thiệp vào. Ngay cả Thủ tướng cũng can thiệp vào cuộc tranh luận, cho thấy vấn đề quan trọng đến mức nào.",
        "<i>paused in the debate</i> (tạm dừng trong cuộc tranh luận) không phù hợp với chuỗi các hành động tham gia tích cực phía trước."
      ]
    }
  },
  collocations: [
    {a:"national school", b:"curriculum"},
    {a:"public", b:"interest"},
    {a:"intervene", b:"in the debate"},
    {a:"the next", b:"generation"},
    {a:"write letters", b:"to the press"},
    {a:"choices have", b:"to be made"}
  ],
  vocabulary: [
    {term:"selective", type:"adjective", mean:"có chọn lọc", ex:"This university is very selective about its students."},
    {term:"curriculum", type:"noun", mean:"chương trình học", ex:"Coding is now part of the school curriculum."},
    {term:"considerable", type:"adjective", mean:"đáng kể, khá lớn", ex:"The project cost a considerable amount of money."},
    {term:"intervene in", type:"verb + prep", mean:"can thiệp vào", ex:"The teacher intervened in the fight."},
    {term:"of the time", type:"phrase", mean:"thời đó, đương thời", ex:"The president of the time supported the plan."}
  ]
},
{
  code: "RFIB0078",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Exam skills · Managing your time",
  minutes: 5,
  warmup: {
    questions: [
      "Khi đi thi, bạn có hay bị thiếu thời gian (run out of time) không?",
      "Bạn làm gì khi gặp một câu hỏi không biết trả lời?"
    ],
    intro: "Đoạn văn đưa ra lời khuyên để phân bổ thời gian hợp lý trong phòng thi. Khi đọc, hãy để ý những điều tác giả khuyên nên làm và không nên làm."
  },
  passage: [
    "You have about 30 minutes to answer each question. You must take account of how many marks are", {b:"1"},
    "for each part when you answer it. Even if you think you can write more, don't spend 15 minutes", {b:"2"},
    "a part worth only 5 marks. Leave space at the end of your answer and come back to it if you have", {b:"3"},
    "to spare later. And if you can't think of an answer to some part, leave a space and move on to the next part. Don't write about something else if you don't know the correct answer — this is just a waste of your", {b:"4"},
    "time (and the examiner's)."
  ],
  words: ["time","accelerated","routine","valuable","answering","available"],
  answers: {"1":"available","2":"answering","3":"time","4":"valuable"},
  explain: {
    "1": {
      ctx: "…take account of how many marks are ___ for each part…",
      grammar: [
        "Sau <b>are</b> cần <b>tính từ</b> (hoặc phân từ): <i>available, valuable, accelerated, routine</i>."
      ],
      keep: ["available","valuable","accelerated","routine"],
      vocab: [
        "<b>marks are available</b> = số điểm có thể đạt được cho mỗi phần. Cách nói chuẩn trong đề thi tiếng Anh.",
        "<i>valuable</i> dành cho ô 4 (<i>valuable time</i>)."
      ]
    },
    "2": {
      ctx: "…don't spend 15 minutes ___ a part worth only 5 marks.",
      grammar: [
        "Cấu trúc <b>spend + thời gian + V-ing</b> → cần <b>V-ing</b>: <i>answering</i>."
      ],
      keep: ["answering"],
      vocab: [
        "<b>spend time doing sth</b> = dành thời gian làm gì. <i>Don't spend 15 minutes answering a part worth only 5 marks</i> = đừng mất 15 phút cho phần chỉ đáng 5 điểm."
      ]
    },
    "3": {
      ctx: "…come back to it if you have ___ to spare later.",
      grammar: [
        "Sau <b>have</b> cần <b>danh từ</b> làm tân ngữ; không có mạo từ → danh từ không đếm được: <i>time</i>."
      ],
      keep: ["time","routine"],
      vocab: [
        "<b>have time to spare</b> = còn dư thời gian. Cụm cố định.",
        "<i>routine</i> (thói quen) không \"dư ra\" được."
      ]
    },
    "4": {
      ctx: "…this is just a waste of your ___ time (and the examiner's).",
      grammar: [
        "Giữa <i>your</i> và danh từ <i>time</i> cần <b>tính từ</b>: <i>valuable, routine, accelerated</i>."
      ],
      keep: ["valuable","routine","accelerated"],
      vocab: [
        "<b>a waste of your valuable time</b> = lãng phí thời gian quý báu của bạn. Collocation rất phổ biến.",
        "<i>accelerated time</i> (thời gian bị tăng tốc) và <i>routine time</i> không có nghĩa trong ngữ cảnh này."
      ]
    }
  },
  collocations: [
    {a:"take account", b:"of"},
    {a:"marks are", b:"available"},
    {a:"have time", b:"to spare"},
    {a:"move on", b:"to the next part"},
    {a:"a waste of", b:"time"},
    {a:"valuable", b:"time"}
  ],
  vocabulary: [
    {term:"take account of", type:"phrase", mean:"tính đến, xem xét đến", ex:"Take account of the weather when you plan the trip."},
    {term:"spend time doing", type:"structure", mean:"dành thời gian làm gì", ex:"I spend an hour reading every night."},
    {term:"have time to spare", type:"phrase", mean:"còn dư thời gian", ex:"We arrived early and had time to spare."},
    {term:"move on to", type:"phrasal verb", mean:"chuyển sang (việc tiếp theo)", ex:"Let's move on to the next question."},
    {term:"valuable", type:"adjective", mean:"quý giá", ex:"Thank you for your valuable advice."}
  ]
},
{
  code: "RFIB0087",
  category: "Education",
  level: "Easy",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Study habits · Arts and science students",
  minutes: 5,
  warmup: {
    questions: [
      "Theo bạn, sinh viên khối xã hội (arts) và khối tự nhiên (science) có thói quen học khác nhau không?",
      "Bạn thích đọc nhiều loại sách khác nhau hay đọc kỹ một vài cuốn?"
    ],
    intro: "Đoạn văn ngắn tóm tắt kết quả một cuộc khảo sát về thói quen học tập (study habits) của sinh viên đại học. Khi đọc, hãy để ý sự khác biệt giữa hai nhóm sinh viên."
  },
  passage: [
    "An investigation into the study habits of undergraduates was carried out by a", {b:"1"},
    "of researchers at a number of different universities. In all the universities", {b:"2"},
    "in the study, it was found that there were the", {b:"3"},
    "significant differences between the habits of arts and science students. Not surprisingly perhaps, arts students read more", {b:"4"},
    ", while science students tended to concentrate on a few", {b:"5"},
    "texts."
  ],
  words: ["core","deeply","only","participating","same","team","widely","working"],
  answers: {"1":"team","2":"participating","3":"same","4":"widely","5":"core"},
  explain: {
    "1": {
      ctx: "…was carried out by a ___ of researchers…",
      grammar: [
        "Sau <b>a</b> và trước <b>of</b> cần <b>danh từ đếm được số ít</b>: <i>team</i>."
      ],
      keep: ["team"],
      vocab: [
        "<b>a team of researchers</b> = một nhóm nhà nghiên cứu. Collocation rất phổ biến."
      ]
    },
    "2": {
      ctx: "In all the universities ___ in the study…",
      grammar: [
        "Sau danh từ <i>universities</i> cần <b>V-ing</b> để rút gọn mệnh đề quan hệ chủ động: <i>universities (which were) ___ in the study</i>.",
        "V-ing trong hộp: <i>participating, working</i>."
      ],
      keep: ["participating","working"],
      vocab: [
        "<b>participate in sth</b> = tham gia vào. <i>The universities participating in the study</i> = các trường tham gia cuộc nghiên cứu.",
        "<i>working in the study</i> nghĩa là \"làm việc trong phòng làm việc\" (study = phòng học), sai nghĩa."
      ]
    },
    "3": {
      ctx: "…there were the ___ significant differences between the habits of arts and science students.",
      grammar: [
        "Giữa <b>the</b> và cụm <i>significant differences</i> cần <b>tính từ</b>: <i>same, only, core</i>."
      ],
      keep: ["same","only","core"],
      vocab: [
        "<b>the same</b> = giống nhau. Ý câu: ở <b>tất cả</b> các trường (<i>In all the universities</i>), người ta đều thấy <b>cùng</b> những khác biệt.",
        "Bẫy <b>only</b>: <i>the only differences</i> nghe cũng hợp lý, nhưng cụm <i>In all the universities…</i> nhấn vào sự <b>nhất quán</b> giữa các trường → <i>same</i> là đáp án chuẩn."
      ]
    },
    "4": {
      ctx: "Not surprisingly perhaps, arts students read more ___, while science students…",
      grammar: [
        "Sau động từ <i>read (more)</i> cần <b>trạng từ</b>: <i>widely, deeply</i>."
      ],
      keep: ["widely","deeply"],
      vocab: [
        "<b>read widely</b> = đọc rộng, đọc nhiều loại tài liệu. Đối lập với vế sau: sinh viên khối tự nhiên tập trung vào <b>một vài</b> tài liệu (<i>a few</i>).",
        "Bẫy <b>deeply</b>: <i>read deeply</i> (đọc sâu) lại gần nghĩa với cách học của sinh viên khối tự nhiên, nên phá vỡ phép đối lập <i>while</i>."
      ]
    },
    "5": {
      ctx: "…science students tended to concentrate on a few ___ texts.",
      grammar: [
        "Giữa <i>a few</i> và danh từ <i>texts</i> cần <b>tính từ</b>: <i>core</i>."
      ],
      keep: ["core"],
      vocab: [
        "<b>core texts</b> = các tài liệu cốt lõi, giáo trình chính. <i>core</i> = cốt lõi, trọng tâm (core subjects = các môn chính)."
      ]
    }
  },
  collocations: [
    {a:"study", b:"habits"},
    {a:"carry", b:"out"},
    {a:"a team of", b:"researchers"},
    {a:"significant", b:"differences"},
    {a:"read", b:"widely"},
    {a:"core", b:"texts"}
  ],
  vocabulary: [
    {term:"carry out", type:"phrasal verb", mean:"tiến hành, thực hiện", ex:"The school carried out a survey on student stress."},
    {term:"undergraduate", type:"noun", mean:"sinh viên đại học (chưa tốt nghiệp)", ex:"She is an undergraduate at Hanoi University."},
    {term:"participate in", type:"verb + prep", mean:"tham gia vào", ex:"Over 500 students participated in the study."},
    {term:"read widely", type:"collocation", mean:"đọc rộng, đọc nhiều loại tài liệu", ex:"Good writers read widely."},
    {term:"core", type:"adjective", mean:"cốt lõi, chính", ex:"Maths and English are core subjects."}
  ]
},
{
  code: "RFIB0108",
  category: "Education",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Higher education · Benefits of a degree",
  minutes: 5,
  warmup: {
    questions: [
      "Theo bạn, có bằng đại học (a university degree) giúp ích gì khi đi xin việc?",
      "Một đất nước có nhiều người học cao thì được lợi gì?"
    ],
    intro: "Đoạn văn nói về lợi ích của bằng cấp đại học (higher education qualifications) đối với từng cá nhân và đối với cả nước Úc. Khi đọc, hãy để ý hai nhóm lợi ích mà tác giả đưa ra."
  },
  passage: [
    "Higher education qualifications provide a substantial", {b:"1"},
    "in the labour market. Higher education", {b:"2"},
    "are less likely to be", {b:"3"},
    "and", {b:"4"},
    "to have", {b:"5"},
    "incomes than those without such qualifications. Having a highly educated", {b:"6"},
    "can also lead to increased productivity and innovation and make Australia more", {b:"7"},
    "in the global market."
  ],
  words: ["aggressive","workforce","weakness","grudge","competitive","tend","graduates","advantage","unemployed","higher"],
  answers: {"1":"advantage","2":"graduates","3":"unemployed","4":"tend","5":"higher","6":"workforce","7":"competitive"},
  explain: {
    "1": {
      ctx: "Higher education qualifications provide a substantial ___ in the labour market.",
      grammar: [
        "Sau <i>a substantial</i> (tính từ) cần <b>danh từ đếm được số ít</b>: <i>advantage, weakness, grudge, workforce</i>."
      ],
      keep: ["advantage","weakness","grudge","workforce"],
      vocab: [
        "<b>provide an advantage</b> = mang lại lợi thế. Câu sau liệt kê toàn điều tốt: ít thất nghiệp, thu nhập cao hơn.",
        "<i>weakness</i> (điểm yếu) ngược nghĩa; <i>grudge</i> = mối hận thù."
      ]
    },
    "2": {
      ctx: "Higher education ___ are less likely to be…",
      grammar: [
        "<i>Higher education</i> làm danh từ bổ nghĩa → cần <b>danh từ chính</b>. Động từ <i>are</i> → <b>số nhiều</b>: <i>graduates</i>."
      ],
      keep: ["graduates"],
      vocab: [
        "<b>higher education graduates</b> = những người tốt nghiệp đại học, cao đẳng. Đối lập với <i>those without such qualifications</i> ở cuối câu."
      ]
    },
    "3": {
      ctx: "…are less likely to be ___ and…",
      grammar: [
        "Sau <b>be</b> cần <b>tính từ</b>: <i>unemployed, competitive, aggressive, higher</i>."
      ],
      keep: ["unemployed","competitive","aggressive","higher"],
      vocab: [
        "<b>less likely to be unemployed</b> = ít có khả năng bị thất nghiệp. Manh mối: <i>in the labour market</i> (thị trường lao động).",
        "<i>competitive</i> dành cho ô 7; <i>aggressive</i> (hung hăng) không hợp."
      ]
    },
    "4": {
      ctx: "…less likely to be unemployed and ___ to have…",
      grammar: [
        "<b>and</b> nối hai cụm động từ cùng chủ ngữ <i>graduates</i>: <i>are less likely… and ___ to have</i> → cần <b>động từ</b> chia số nhiều, đi với <i>to + V</i>: <i>tend</i>."
      ],
      keep: ["tend"],
      vocab: [
        "<b>tend to do sth</b> = có xu hướng làm gì. Cách nói thận trọng khi đưa ra một nhận định chung từ số liệu."
      ]
    },
    "5": {
      ctx: "…tend to have ___ incomes than those without such qualifications.",
      grammar: [
        "Trước danh từ <i>incomes</i>, phía sau có <b>than</b> → cần <b>tính từ so sánh hơn</b>: <i>higher</i>."
      ],
      keep: ["higher"],
      vocab: [
        "<b>higher incomes</b> = thu nhập cao hơn. Dấu hiệu so sánh <i>than</i> chỉ ra ngay đáp án."
      ]
    },
    "6": {
      ctx: "Having a highly educated ___ can also lead to increased productivity…",
      grammar: [
        "Sau <i>a highly educated</i> cần <b>danh từ đếm được số ít</b>: <i>workforce, weakness, grudge</i>."
      ],
      keep: ["workforce","weakness","grudge"],
      vocab: [
        "<b>a highly educated workforce</b> = lực lượng lao động có trình độ cao. Đây là thứ làm tăng năng suất và đổi mới cho cả đất nước."
      ]
    },
    "7": {
      ctx: "…make Australia more ___ in the global market.",
      grammar: [
        "Cấu trúc <b>make + O + (more) adj</b> → cần <b>tính từ</b>: <i>competitive, aggressive</i>."
      ],
      keep: ["competitive","aggressive"],
      vocab: [
        "<b>competitive in the global market</b> = có sức cạnh tranh trên thị trường toàn cầu.",
        "Bẫy <b>aggressive</b>: = hung hăng, quyết liệt (đôi khi tích cực trong <i>aggressive marketing</i>), nhưng không phải kết quả tự nhiên của năng suất và đổi mới."
      ]
    }
  },
  collocations: [
    {a:"a substantial", b:"advantage"},
    {a:"labour", b:"market"},
    {a:"higher education", b:"graduates"},
    {a:"a highly educated", b:"workforce"},
    {a:"increased", b:"productivity"},
    {a:"the global", b:"market"}
  ],
  vocabulary: [
    {term:"qualification", type:"noun", mean:"bằng cấp, chứng chỉ", ex:"You need a teaching qualification to work here."},
    {term:"labour market", type:"noun phrase", mean:"thị trường lao động", ex:"The labour market is tough for young people."},
    {term:"be less likely to", type:"phrase", mean:"ít có khả năng", ex:"People who exercise are less likely to get sick."},
    {term:"tend to", type:"verb", mean:"có xu hướng", ex:"Students tend to study harder before exams."},
    {term:"workforce", type:"noun", mean:"lực lượng lao động", ex:"Women make up half of the workforce."}
  ]
},
{
  code: "RFIB0112",
  category: "Education",
  level: "Medium",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Thinking skills · Critical thinking",
  minutes: 5,
  warmup: {
    questions: [
      "Theo bạn, tư duy phản biện (critical thinking) là gì?",
      "Khi đọc một tin tức trên mạng, bạn có thường đặt câu hỏi về nó không?"
    ],
    intro: "Đoạn văn giải thích tư duy phản biện là gì qua một loạt hình ảnh so sánh. Khi đọc, hãy để ý các cặp từ đối lập mà tác giả dùng."
  },
  passage: [
    "Critical thinking involves looking at something you may have seen many times and examining it from many different", {b:"1"},
    "and perspectives. It involves going beyond the", {b:"2"},
    "or beyond \"easy\" to seek new understanding and rare", {b:"3"},
    ". It involves looking at common issues with uncommon eyes, known problems with new skepticism, everyday conflicts with probing", {b:"4"},
    ", and daily challenges with greater attention to detail."
  ],
  words: ["curiosity","solutions","oblivious","caution","functions","angles","consequences","obvious"],
  answers: {"1":"angles","2":"obvious","3":"solutions","4":"curiosity"},
  explain: {
    "1": {
      ctx: "…examining it from many different ___ and perspectives.",
      grammar: [
        "Sau <i>many different</i> cần <b>danh từ số nhiều</b>, cùng loại với <i>perspectives</i>: <i>angles, solutions, functions, consequences</i>."
      ],
      keep: ["angles","solutions","functions","consequences"],
      vocab: [
        "<b>from many different angles</b> = từ nhiều góc độ khác nhau. Đi đôi với <i>perspectives</i> (quan điểm) như hai từ gần nghĩa.",
        "<i>from different functions/consequences</i> không phải cách nói tự nhiên."
      ]
    },
    "2": {
      ctx: "It involves going beyond the ___ or beyond \"easy\"…",
      grammar: [
        "Sau <b>the</b> cần <b>danh từ</b>. Tính từ đứng sau <i>the</i> có thể làm danh từ (<i>the obvious</i> = những điều hiển nhiên)."
      ],
      keep: ["obvious","oblivious"],
      vocab: [
        "<b>go beyond the obvious</b> = vượt ra ngoài những điều hiển nhiên. Song song với <i>beyond \"easy\"</i>.",
        "Bẫy <b>oblivious</b>: = không hay biết, không để ý (oblivious to the danger). Trông giống <i>obvious</i> nhưng nghĩa hoàn toàn khác."
      ]
    },
    "3": {
      ctx: "…to seek new understanding and rare ___.",
      grammar: [
        "Sau tính từ <i>rare</i> cần <b>danh từ</b>, nối với <i>understanding</i> bằng <i>and</i>."
      ],
      keep: ["solutions","consequences","functions","caution","curiosity"],
      vocab: [
        "<b>seek solutions</b> = tìm kiếm giải pháp. <i>Rare solutions</i> = những giải pháp hiếm có, độc đáo, kết quả của tư duy phản biện.",
        "Người ta không \"tìm kiếm\" <i>consequences</i> (hậu quả)."
      ]
    },
    "4": {
      ctx: "…everyday conflicts with probing ___, and daily challenges with greater attention to detail.",
      grammar: [
        "Sau tính từ <i>probing</i> cần <b>danh từ</b>: <i>curiosity, caution</i>."
      ],
      keep: ["curiosity","caution"],
      vocab: [
        "<b>probing curiosity</b> = sự tò mò muốn tìm hiểu sâu. <i>probing</i> = dò hỏi, đi sâu vào. Hợp với tinh thần chung: <i>uncommon eyes, new skepticism</i>.",
        "<i>caution</i> (sự thận trọng) không đi với <i>probing</i>."
      ]
    }
  },
  collocations: [
    {a:"critical", b:"thinking"},
    {a:"from different", b:"angles"},
    {a:"go beyond", b:"the obvious"},
    {a:"probing", b:"curiosity"},
    {a:"attention", b:"to detail"},
    {a:"new", b:"skepticism"}
  ],
  vocabulary: [
    {term:"critical thinking", type:"noun phrase", mean:"tư duy phản biện", ex:"Critical thinking is important in the age of fake news."},
    {term:"angle", type:"noun", mean:"góc độ, góc nhìn", ex:"Let's look at the problem from a different angle."},
    {term:"the obvious", type:"noun (the + adj)", mean:"điều hiển nhiên", ex:"Don't just state the obvious in your essay."},
    {term:"skepticism", type:"noun", mean:"sự hoài nghi", ex:"Treat online health advice with skepticism."},
    {term:"attention to detail", type:"phrase", mean:"sự chú ý đến chi tiết", ex:"This job needs great attention to detail."}
  ]
},
{
  code: "RFIB0132",
  category: "Education",
  level: "Hard",
  hidden: false,
  type: "Drag and Drop – Fill in the Blanks",
  topic: "Reading · Writing vs conversation",
  minutes: 5,
  warmup: {
    questions: [
      "Bạn thấy hiểu ý người khác qua nói chuyện trực tiếp dễ hơn hay qua đọc tin nhắn, bài viết dễ hơn?",
      "Khi đọc, bạn bỏ lỡ những gì mà khi nghe người khác nói trực tiếp bạn sẽ nhận được?"
    ],
    intro: "Đoạn văn so sánh việc tiếp nhận ý tưởng qua đọc với qua hội thoại và thảo luận nhóm. Khi đọc, hãy để ý vì sao tác giả cho rằng người đọc gặp khó khăn hơn người nghe."
  },
  passage: [
    "The writer-or, for that matter, the speaker conceives his thought whole, as a unity, but must express it in a line of words; the reader — or listener — must take this line of symbols and from it", {b:"1"},
    "the original wholeness of thought. There is", {b:"2"},
    "difficulty in conversation, because the listener receives innumerable cues from the physical expressions of the speaker; there is a dialogue, and the listener can", {b:"3"},
    "in at any time. The advantage of group discussion is that people can overcome linear sequence of words by", {b:"4"},
    "on ideas from different directions; which makes for wholeness of thought. But the reader is confronted by line upon line of printed symbols, without benefits of physical", {b:"5"},
    "and emphasis or the possibility of dialogue or discussion."
  ],
  words: ["much","tone","converging","little","concentrating","reconstruct","reshape","cut","get","installation"],
  answers: {"1":"reconstruct","2":"little","3":"cut","4":"converging","5":"tone"},
  explain: {
    "1": {
      ctx: "…must take this line of symbols and from it ___ the original wholeness of thought.",
      grammar: [
        "<b>and</b> nối với <i>take</i> sau <i>must</i>: <i>must take… and (must) ___</i> → cần <b>động từ nguyên thể</b>, có tân ngữ <i>the original wholeness</i>.",
        "Còn lại: <i>reconstruct, reshape, cut, get</i>."
      ],
      keep: ["reconstruct","reshape","cut","get"],
      vocab: [
        "<b>reconstruct</b> = dựng lại, tái tạo lại (như ban đầu). Người viết <b>tách</b> ý thành chuỗi từ, người đọc phải <b>ghép lại</b> thành ý trọn vẹn (<i>original</i>).",
        "Bẫy <b>reshape</b>: = định hình lại, làm cho <b>khác đi</b>. Mâu thuẫn với <i>original</i> (nguyên bản)."
      ]
    },
    "2": {
      ctx: "There is ___ difficulty in conversation, because the listener receives innumerable cues…",
      grammar: [
        "Trước danh từ không đếm được <i>difficulty</i> cần từ chỉ lượng: <i>much, little</i>."
      ],
      keep: ["much","little"],
      vocab: [
        "<b>little difficulty</b> = ít khó khăn. Lý do phía sau là điều <b>có lợi</b>: người nghe nhận được vô số tín hiệu từ cử chỉ, nét mặt.",
        "<i>much</i> ngược logic; và trong câu khẳng định, <i>much</i> ít dùng một mình như vậy."
      ]
    },
    "3": {
      ctx: "…and the listener can ___ in at any time.",
      grammar: [
        "Sau <b>can</b> cần <b>động từ nguyên thể</b>; theo sau là tiểu từ <b>in</b> → cụm động từ: <i>cut in, get in</i>."
      ],
      keep: ["cut","get"],
      vocab: [
        "<b>cut in</b> = chen ngang, ngắt lời để nói. Trong hội thoại (<i>there is a dialogue</i>), người nghe có thể chen vào hỏi bất cứ lúc nào.",
        "<i>get in</i> = vào trong (xe, nhà), không dùng cho việc tham gia cuộc nói chuyện."
      ]
    },
    "4": {
      ctx: "…overcome linear sequence of words by ___ on ideas from different directions…",
      grammar: [
        "Sau giới từ <b>by</b> cần <b>V-ing</b>; phía sau là <b>on</b>: <i>converging, concentrating</i>."
      ],
      keep: ["converging","concentrating"],
      vocab: [
        "<b>converge on sth</b> = hội tụ về một điểm. Manh mối: <i>from different directions</i>. Nhiều người tiếp cận ý tưởng từ nhiều hướng rồi cùng hội tụ.",
        "Bẫy <b>concentrating on</b>: = tập trung vào. Đúng ngữ pháp nhưng không đi với ý \"từ nhiều hướng khác nhau\"."
      ]
    },
    "5": {
      ctx: "…without benefits of physical ___ and emphasis…",
      grammar: [
        "Sau tính từ <i>physical</i> cần <b>danh từ</b>, nối với <i>emphasis</i> bằng <i>and</i>: <i>tone, installation</i>."
      ],
      keep: ["tone","installation"],
      vocab: [
        "<b>tone</b> = giọng điệu. <i>Tone and emphasis</i> (giọng điệu và sự nhấn mạnh) là những thứ người nghe có mà người đọc không có.",
        "<i>installation</i> = sự lắp đặt. Không liên quan."
      ]
    }
  },
  collocations: [
    {a:"conceive", b:"a thought"},
    {a:"innumerable", b:"cues"},
    {a:"cut", b:"in"},
    {a:"converge", b:"on ideas"},
    {a:"tone", b:"and emphasis"},
    {a:"group", b:"discussion"}
  ],
  vocabulary: [
    {term:"conceive", type:"verb", mean:"hình thành (ý tưởng) trong đầu", ex:"He conceived the idea for the app in a coffee shop."},
    {term:"reconstruct", type:"verb", mean:"dựng lại, tái tạo lại", ex:"Police tried to reconstruct the events of that night."},
    {term:"cut in", type:"phrasal verb", mean:"chen ngang, ngắt lời", ex:"Sorry to cut in, but I have a question."},
    {term:"converge on", type:"verb + prep", mean:"hội tụ về", ex:"Fans converged on the stadium."},
    {term:"tone", type:"noun", mean:"giọng điệu", ex:"I didn't like the tone of his email."}
  ]
}
];
