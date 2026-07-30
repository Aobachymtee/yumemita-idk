# YUME∞MITA — Trang fan Mugendai MewType

Trang tĩnh (HTML/CSS/JS thuần), không cần build, đẩy thẳng lên GitHub Pages là chạy.

## CÁC TÍNH NĂNG MỚI ĐÃ ĐƯỢC CHỈNH SỬA:
1. **Giao diện rực rỡ chuẩn chất Yumemita / BanG Dream!**:
   - Tông màu chuyển sắc phát sáng (glow gradient), các thẻ bo tròn mềm mại (`18px`).
   - Hiệu ứng đổ bóng theo màu chủ đạo (accent color) của từng thành viên khi di chuột vào.
2. **Hỗ trợ Ảnh Avatar & Thư viện ảnh (Gallery)**:
   - Thêm ảnh đại diện thật cho các gái qua field `avatar` trong `js/data.js`.
   - Thêm Bộ sưu tập ảnh (Gallery) qua mảng `gallery: [...]` trong `js/data.js`.
   - Tích hợp sẵn tính năng **Lightbox (xem ảnh phóng to full màn hình)** khi bấm vào từng ảnh gallery.
3. **Nút liên kết MXH chính thức (Social Media Buttons)**:
   - Thêm nút liên kết đến X (Twitter), Instagram, YouTube, TikTok, Note với màu sắc chuẩn thương hiệu và icon sinh động.

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
├── css/style.css         toàn bộ style rực rỡ của trang
├── js/data.js            ⭐ TOÀN BỘ DỮ LIỆU — sửa file này để đổi ảnh, link mxh, thông tin!
├── js/main.js            logic hiển thị + Lightbox xem ảnh
└── images/members/       thư mục để cất ảnh của gái (nếu dùng ảnh local)
```

## Cách thêm / sửa Ảnh & Link MXH trong `js/data.js`

Mở file `js/data.js`, mỗi thành viên có cấu trúc dữ liệu cực kỳ dễ hiểu:

```javascript
{
  id: "arale",
  name: "Nakamachi Arale",
  nickname: "Arale-chan",
  ...
  avatar: "https://link-anh-avatar.jpg", // Hoặc "images/members/arale.jpg"
  socialLinks: {
    twitter: "https://x.com/...",
    instagram: "https://instagram.com/...",
    youtube: "https://youtube.com/...",
    tiktok: "https://tiktok.com/@...",
    note: "https://note.com/..."
  },
  gallery: [
    "https://link-anh-1.jpg",
    "https://link-anh-2.jpg",
    "images/members/arale_live.jpg"
  ]
}
```

## Đưa lên GitHub Pages

1. Upload toàn bộ các file/folder bên trong thư mục này lên repository GitHub của bồ.
2. Vào **Settings → Pages** -> Chọn branch `main`, chọn folder `/(root)` -> **Save**.
3. Chờ 1-2 phút là trang web sẽ chạy online!
