/* =========================================================
   CHAU'S READING LAB · NGÂN HÀNG BÀI
   - Thứ tự các bài trong file này = thứ tự hiện trên trang chủ.
   - group: tên nhóm hiện trên trang chủ (bài cùng group nằm chung 1 khu).
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
  group: "Business",
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
}
];
