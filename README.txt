=== HƯỚNG DẪN ĐĂNG LÊN GITHUB PAGES ===

Bộ khung website này đã được thiết kế sẵn theo cấu trúc ĐA TRANG ĐỘNG (Multi-page Dynamic):
- index.html: Trang chủ danh sách nhân vật & bài hát.
- character.html: Trang hiển thị thông tin chi tiết từng gái (Tự đổi nội dung theo link ?id=...).
- song.html: Trang xem lời dịch nhạc 3 cột (Tiếng Nhật, Romaji, Tiếng Việt).
- data/data.json: File chứa toàn bộ thông tin nhân vật và lời dịch nhạc!

CÁCH THÊM BÀI HÁT / NHÂN VẬT MỚI:
Bồ chỉ cần mở file `data/data.json` ra, copy thêm 1 đoạn thông tin nhân vật hoặc bài hát tương tự là xong!
Không cần phải tự viết thêm file HTML mới!

CÁCH ĐƯA LÊN GITHUB:
1. Giải nén file ZIP này.
2. Push toàn bộ các file (index.html, character.html, song.html, folder data/...) lên branch main trên Repository GitHub của bồ.
3. Vào Repo -> Settings -> Pages -> Chọn branch `main` -> Save.
4. Chờ 1-2 phút là trang web sẽ chạy online!
