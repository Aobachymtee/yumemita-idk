=== CẬP NHẬT PHIÊN BẢN V3: FULL 5 MEMBERS + LOGO + BACKGROUND INFO & NICKNAME ===

Phiên bản này nâng cấp theo đúng yêu cầu mới của bồ:
1. Đã tạo sẵn khung dữ liệu chuẩn cho CẢ 5 THÀNH VIÊN nhóm Yumemita.
2. Thêm huy hiệu Logo riêng của từng gái (hiển thị góc dưới avatar ở cả trang chủ lẫn trang chi tiết).
3. Thêm trường Nickname (Biệt danh) hiển thị nổi bật.
4. Thêm phần "Background Information & Câu Chuyện" riêng biệt để bồ tha hồ viết tiểu sử/lịch sử sâu hơn về từng gái.

CÁCH ĐỔI DỮ LIỆU CỦA 5 GÁI TRONG `data/data.json`:
Bồ mở file `data/data.json` ra, mỗi thành viên sẽ có cấu trúc như sau:

{
  "id": "yumemi",
  "name": "Hoshino Yumemi",
  "japanese_name": "星野 ゆめみ",
  "nickname": "Yume-chan / Yume-p",
  "role": "Vocal & Guitar",
  "color": "#ff75a0",
  "image": "assets/yumemi_avatar.jpg",
  "logo": "assets/yumemi_logo.png",
  "birthday": "15 tháng 4",
  "height": "158 cm",
  "likes": "Món ngọt, Guitar...",
  "bio": "Mô tả ngắn gọn...",
  "background_info": "Viết toàn bộ tiểu sử, hoàn cảnh xuất thân, lịch sử gia nhập nhóm ở đây...",
  "social_links": { ... },
  "gallery": [ ... ]
}

LƯU Ý VỀ LOGO & CẤU TRÚC FOLDER:
- Bồ có thể gom hết ảnh logo vào thư mục `assets/` (ví dụ: `assets/logo_yumemi.png`).
- Trong file `data.json`, điền đường dẫn ảnh logo là: `"logo": "assets/logo_yumemi.png"`.
