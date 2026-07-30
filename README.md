=== YUME∞MITA FANMADE WEBSITE (VERSION 4) ===

ĐÃ CẬP NHẬT CÁC THAY ĐỔI THEO YÊU CẦU CỦA BỒ:
1. Nền Website Hình Ảnh dìm tối: Thay vì đen thui, nền nay sử dụng hình ảnh được phủ lớp màu tối mờ mộng mơ. Bồ có thể đổi ảnh nền bằng cách sửa link `siteInfo.bgImage` trong `js/data.js` hoặc thay file `images/bg.jpg`.
2. Thay Logo/Ảnh ở Hero & Xóa năm: Đã xóa 2 con số năm (2023, 2026). Đã thêm ô hiển thị Logo/Banner ở Hero section.
3. Chỉnh Description theo ý thích: Bồ sửa biến `siteInfo.heroTagline` trong `js/data.js` là dòng chữ giới thiệu trang chủ tự động đổi theo!
4. Logo riêng cho từng gái: Thêm logo badge ở cả thẻ nhân vật ngoài trang chủ và trên trang chi tiết nhân vật.
5. Bảng thông tin chi tiết (Wiki Information Table): Đã dựng đúng chuẩn thiết kế bảng thông tin 2 cột giống hệt ảnh bồ gửi (có Kanji, Romaji, Pronoun, Appellation, Image Color, Animal, Fan Name, Fan Mark, Position, Instrument, Age, Birthday, Height, Likes, Dislikes, Socials, Tags, Stream Hours...).

CÁCH THÊM/SỬA THÔNG TIN TRONG `js/data.js`:
Mở duy nhất file `js/data.js` ra:
- Muốn chỉnh Tagline/Description trang chủ: Sửa `siteInfo.heroTagline`.
- Muốn đổi Logo Hero: Sửa `siteInfo.heroLogoImage`.
- Muốn sửa Bảng thông tin gái: Sửa trong mảng `infoTable` của từng gái.
- Muốn đổi Logo của gái: Sửa `logo` ("https://..." hoặc "images/logo_x.png").
