/* ============================================================
   data.js — DỮ LIỆU của trang.
   Muốn thêm/sửa thông tin thành viên hoặc bài hát: CHỈ sửa 2 mảng
   bên dưới. Không cần đụng vào HTML/CSS/main.js — mọi trang tự
   động render lại theo dữ liệu mới.

   Ghi chú: phần "lyricsOriginal" / "lyricsTranslation" mình để
   placeholder (chưa điền lời thật) vì lời bài hát có bản quyền —
   bồ tự dán lời gốc + bản dịch của mình vào 2 chỗ đó nha.
   ============================================================ */

const membersData = [
  {
    id: "arale",
    name: "Nakamachi Arale",
    shortName: "Arale",
    nameJp: "仲町あられ",
    roleTag: "VOCAL",
    role: "Vocal / Trưởng nhóm",
    color: "var(--arale)",
    colorHex: "#4477CC",
    birthday: "16/08",
    zodiac: "Sư Tử",
    height: "154cm",
    school: "Chưa rõ",
    likes: "Ca hát, trò chuyện",
    tagline: "Giọng ca nội lực dẫn dắt cả nhóm tiến về phía trước.",
    bio: "Một cô gái yêu ca hát và trò chuyện, tính tình vui vẻ, tràn đầy năng lượng. Thỉnh thoảng công sức bỏ ra không như ý khiến bạn ấy hơi bồn chồn, dễ chạnh lòng — nhưng trên sân khấu, bạn ấy luôn là \"cô gái quyền lực\" dẫn dắt Mugendai MewType tiến lên bằng chất giọng của mình.",
    credits: ["Đồng viết lời — Kohaku", "Sáng tác & viết lời chính — Gradient", "Đồng viết lời — Tuning"]
  },
  {
    id: "nonoka",
    name: "Miyanaga Nonoka",
    shortName: "Nonoka",
    nameJp: "宮永ののか",
    roleTag: "GUITAR (LEAD)",
    role: "Guitar chính",
    color: "var(--nonoka)",
    colorHex: "#FFAACC",
    birthday: "17/04",
    zodiac: "Bạch Dương",
    height: "161cm",
    school: "Kanda Shiroyama — năm 2, lớp 2-A",
    likes: "Cơm trắng, món hầm, board game, vẽ/đọc tranh truyện",
    tagline: "Cô nhóc nghịch ngợm hết mình vì mọi người, kể cả khi mọi thứ không như dự tính.",
    bio: "Một học sinh cấp 3 hồn nhiên, thích giúp đỡ người khác dù kết quả không phải lúc nào cũng suôn sẻ. Trước khi debut, Nonoka chưa từng chơi guitar — nhưng mỗi lần lên sân khấu, bạn ấy vẫn cuốn hút khán giả bằng tình yêu âm nhạc rõ ràng trong từng màn trình diễn.",
    credits: []
  },
  {
    id: "ritsu",
    name: "Minetsuki Ritsu",
    shortName: "Ritsu",
    nameJp: "峰月りつ",
    roleTag: "GUITAR (RHYTHM)",
    role: "Guitar đệm",
    color: "var(--ritsu)",
    colorHex: "#5588DD",
    birthday: "07/02",
    zodiac: "Bảo Bình",
    height: "157cm",
    school: "Akiha Girls' High School — năm 1",
    likes: "Sukiyaki, ramen, xem phim",
    tagline: "Học sinh gương mẫu, nghiêm túc — nhưng tự nhận mình hơi \"lơ ngơ\".",
    bio: "Chăm chỉ, trong sáng, hơi lạc nhịp với trào lưu của thế giới xung quanh. Ritsu tự mô tả mình là kiểu người \"ponkotsu\" (hơi vụng về) và thừa nhận một điểm đáng yêu của bản thân là... ăn rất khỏe.",
    credits: []
  },
  {
    id: "miyako",
    name: "Fuji Miyako",
    shortName: "Miyako",
    nameJp: "富士みやこ",
    roleTag: "KEYBOARD",
    role: "Keyboard",
    color: "var(--miyako)",
    colorHex: "#9977DD",
    birthday: "19/09",
    zodiac: "Xử Nữ",
    height: "155cm",
    school: "Kanda Shiroyama — năm 2",
    likes: "Donut, sushi, cắm hoa (ikebana)",
    tagline: "Nhút nhát, dịu dàng — và luôn ôm theo một con rối bên mình.",
    bio: "Miyako là một cô gái rụt rè, dịu dàng, sở trường là vẽ — bạn ấy còn là một họa sĩ manga đang hoạt động song song, tự vẽ MV và cover art cho nhóm. Trông có vẻ mong manh, nhưng niềm đam mê âm nhạc của Miyako chưa bao giờ lay chuyển.",
    credits: ["Viết lời — LET'S Achiachi Training!"]
  },
  {
    id: "yuno",
    name: "Sengoku Yuno",
    shortName: "Yuno",
    nameJp: "千石ユノ",
    roleTag: "DJ / MANIPULATOR",
    role: "DJ / Manipulator",
    color: "var(--yuno)",
    colorHex: "#FF6688",
    birthday: "04/11",
    zodiac: "Bọ Cạp",
    height: "151cm",
    school: "Chưa rõ",
    likes: "Socola trắng, nước tăng lực, chơi game",
    tagline: "Trái tim âm nhạc của cả nhóm — dù ngoài đời chỉ muốn nằm dài chơi game.",
    bio: "Một học sinh cấp 3 ít năng lượng, chỉ muốn được thảnh thơi làm điều mình thích — sở trường là chơi game (đủ thể loại). Nghe có vẻ \"lười\", nhưng Yuno chính là người giữ nhịp cho toàn bộ phần trình diễn của Mugendai MewType.",
    credits: ["Sáng tác/viết lời/phối khí chính — YoU kNOw the overture", "Sáng tác/viết lời/phối khí chính — Tuning"]
  }
];

const songsData = [
  {
    id: "mugen-my-world",
    title: "Mugen My World",
    type: "Bài hát ra mắt (debut single)",
    credits: [],
    note: "Bài hát debut chính thức đầu tiên của Mugendai MewType."
  },
  {
    id: "kohaku",
    title: "Kohaku",
    type: "Bài hát gốc",
    credits: ["arale"],
    note: "Arale tham gia đồng viết lời."
  },
  {
    id: "gradient",
    title: "Gradient",
    type: "Bài hát gốc",
    credits: ["arale"],
    note: "Arale sáng tác nhạc & viết lời chính."
  },
  {
    id: "tuning",
    title: "Tuning",
    type: "Bài hát gốc",
    credits: ["arale", "yuno"],
    note: "Arale & Yuno cùng viết lời; Yuno phụ trách sáng tác & phối khí chính."
  },
  {
    id: "achiachi-training",
    title: "LET'S Achiachi Training!",
    type: "Bài hát gốc",
    credits: ["miyako"],
    note: "Miyako tham gia viết lời."
  },
  {
    id: "overture",
    title: "YoU kNOw the overture",
    type: "Bài hát gốc",
    credits: ["yuno"],
    note: "Yuno sáng tác, viết lời & phối khí chính."
  }
];

/* Placeholder mặc định hiển thị ở trang chi tiết bài hát khi bồ
   chưa điền lời — thay 2 dòng này bằng lời thật trong data.js
   (thêm field lyricsOriginal / lyricsTranslation vào từng bài hát ở trên). */
const LYRICS_PLACEHOLDER_ORIGINAL = "[Dán lời gốc (tiếng Nhật/romaji) của bài hát vào đây]";
const LYRICS_PLACEHOLDER_TRANSLATION = "[Dán bản dịch tiếng Việt của bồ vào đây]";
