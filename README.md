# YUME∞MITA — Trang fan Mugendai MewType

Trang tĩnh (HTML/CSS/JS thuần), không cần build, đẩy thẳng lên GitHub Pages là chạy.

## Cấu trúc thư mục

```
yumemita-site/
├── index.html            trang chủ
├── members/
│   ├── index.html        danh sách 5 thành viên
│   └── detail.html       trang chi tiết — DÙNG CHUNG cho cả 5 người qua ?id=arale, ?id=nonoka...
├── songs/
│   ├── index.html        danh sách bài hát
│   └── detail.html       trang lời + bản dịch — DÙNG CHUNG qua ?id=...
├── css/style.css         toàn bộ style của trang
├── js/data.js            ⭐ TOÀN BỘ DỮ LIỆU — sửa file này là đủ, khỏi đụng HTML
├── js/main.js            logic hiển thị (đọc data.js rồi vẽ ra HTML), thường không cần sửa
└── images/members/       chỗ để ảnh thật khi bồ có (hiện đang dùng avatar chữ cái tạm)
```

## Thêm / sửa nội dung — chỉ cần sửa `js/data.js`

**Dán lời bài hát:** mở `js/data.js`, tìm bài hát trong mảng `songsData`, thêm 2 field:
```js
{
  id: "mugen-my-world",
  title: "Mugen My World",
  ...
  lyricsOriginal: "(dán lời gốc tiếng Nhật/romaji ở đây)",
  lyricsTranslation: "(dán bản dịch tiếng Việt của bồ ở đây)"
}
```
Chưa điền thì trang sẽ tự hiện dòng nhắc placeholder, không bị lỗi.

**Thêm ảnh thật cho thành viên:** bỏ ảnh vào `images/members/` (vd `arale.jpg`), rồi trong `js/main.js`
đổi dòng render avatar (`<div class="member-card__avatar">...</div>` và tương tự ở `member-hero__avatar`)
thành thẻ `<img src="...">` trỏ tới ảnh đó.

**Thêm thành viên/bài hát mới:** copy 1 object trong `membersData`/`songsData`, sửa lại thông tin — trang tự render thêm thẻ mới, không cần tạo file HTML mới.

## Đưa lên GitHub Pages — từng bước

1. Tạo repo mới trên GitHub (để **Public**), ví dụ đặt tên `yumemita-fansite`.
2. Upload **toàn bộ nội dung bên trong** thư mục `yumemita-site/` lên repo đó (kéo-thả trên GitHub web,
   hoặc dùng Git: `git init` → `git add .` → `git commit -m "init"` → `git push`).
3. Vào **Settings → Pages** của repo → mục "Branch" chọn `main`, thư mục chọn **/(root)** → **Save**.
4. Đợi khoảng 1-2 phút, GitHub sẽ cho link dạng `https://<username>.github.io/yumemita-fansite/`.

⚠️ **Rủi ro hay gặp nhất:** đường link trong trang đều là *đường dẫn tương đối* (`css/style.css`,
`../css/style.css`...), nên khi upload, `css/`, `js/`, `members/`, `songs/` phải nằm **cùng cấp** với
`index.html` — đừng để cả thư mục `yumemita-site` lồng thêm 1 lớp bên trong repo, nếu không CSS/JS
sẽ không load được (trang lên nhưng không có style).

Muốn xem thử trước khi đẩy lên GitHub: chỉ cần bấm đúp mở thẳng `index.html` bằng trình duyệt —
vì dữ liệu nằm trong file `.js` (không phải `.json` fetch riêng) nên mở trực tiếp từ máy vẫn chạy
được, khỏi cần dựng local server.

## Bản quyền

Nhân vật, tên bài hát, hình ảnh gốc thuộc về BanG Dream! Project / Bushiroad / Craft Egg — trang này
là fan làm phi lợi nhuận. Lời bài hát gốc và bản dịch **không có sẵn** trong bộ file này (mình để
placeholder), bồ tự thêm phần mình dịch vào `js/data.js` nha.
