=== CẬP NHẬT PHIÊN BẢN V2: GALLERY & SOCIAL LINKS ===

Phiên bản này bổ sung 2 tính năng bồ yêu cầu:
1. Thư viện ảnh (Gallery) cho từng gái (có tính năng click vào xem ảnh phóng to full màn hình).
2. Nút liên kết MXH chính thức (Twitter/X, Instagram, YouTube, Note) sinh động.

CÁCH ĐỔI/THÊM LINK MXH VÀ ẢNH CHO GÁI TRONG `data/data.json`:
Mở file `data/data.json`, trong phần thông tin nhân vật bồ sẽ thấy:

"social_links": {
  "twitter": "https://x.com/...",
  "instagram": "https://instagram.com/...",
  "youtube": "https://youtube.com/...",
  "note": "https://note.com/..."
},
"gallery": [
  "link_anh_1.jpg",
  "link_anh_2.jpg",
  "link_anh_3.jpg"
]

Bồ chỉ cần dán link ảnh/link MXH tương ứng vào là xong!

CÁCH UP CẢ ẢNH CỤ THỂ VÀO REPO GITHUB (NẾU KHÔNG DÙNG LINK ẢNH ONLINE):
- Bồ có thể tạo 1 folder tên `assets/` trong repo.
- Bỏ các file ảnh vào folder đó (vd: `assets/yumemi_1.jpg`).
- Trong file `data.json`, điền đường dẫn ảnh là: `"gallery": ["assets/yumemi_1.jpg"]`.
