# Thư Viện Y Khoa

Danh mục các bài dịch tiếng Việt từ tài liệu y khoa quốc tế (PDF gốc → trang đọc HTML), phục vụ tra cứu và ôn tập.

## Cấu trúc

- `index.html`: trang danh mục (tìm kiếm, lọc theo chuyên khoa/trạng thái).
- `library-data.js`: dữ liệu danh mục — Claude cập nhật file này mỗi khi có bài mới.
- `docs/`: các trang bài dịch (mỗi bài một file HTML độc lập).

## Cách hoạt động

Gửi một file PDF cho Claude. Claude sẽ:
1. Dịch đầy đủ sang tiếng Việt, giữ nguyên các hình/sơ đồ quan trọng từ bản gốc, dựng thành một trang đọc HTML.
2. Đẩy file vào `docs/`, thêm dòng mới vào `library-data.js`.
3. Tự nhận biết chuyên khoa phù hợp (ví dụ bài về tuyến giáp → Nội tiết).
4. Thêm một dòng tương ứng vào Notion (Kho Tri Thức Nội Khoa, tầng "Khuyến cáo mới nhất") — chỉ điền tên bài, link bản dịch, hệ cơ quan, nguồn, năm, DOI — không soạn nội dung bài.
5. Gửi link bản dịch.

## Bật GitHub Pages (làm một lần)

Settings → Pages → Source: Deploy from a branch → Branch `main`, thư mục `/ (root)` → Save. Sau vài phút, trang chạy tại `https://<tài-khoản>.github.io/thu-vien-y-khoa/`.
