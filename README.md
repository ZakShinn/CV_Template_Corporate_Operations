# Mẫu CV Vận hành Doanh nghiệp

Mẫu CV chuyên nghiệp, tối ưu ATS — **ngôn ngữ mặc định: Tiếng Việt**. Dữ liệu và cấu hình trong `src/`.

## Layout chuẩn ngành

- **Hai cột:** sidebar **trái** (skills, certs, languages) · cột phải (summary, experience)
- **Executive:** header căn giữa, một cột
- **Minimal / ATS:** một cột, font gọn
- **Tech-operations:** font mono, nhấn infrastructure

## Hướng dẫn chi tiết

| File | Nội dung |
|------|----------|
| [`src/data/HUONG_DAN_NHAP_LIEU.md`](src/data/HUONG_DAN_NHAP_LIEU.md) | Nội dung CV, editor web |
| [`src/color/HUONG_DAN_DOI_MAU.md`](src/color/HUONG_DAN_DOI_MAU.md) | Bảng màu, accent |
| [`src/font/HUONG_DAN_DOI_FONT.md`](src/font/HUONG_DAN_DOI_FONT.md) | Font chữ |
| [`src/avatar/HUONG_DAN_ANH_DAI_DIEN.md`](src/avatar/HUONG_DAN_ANH_DAI_DIEN.md) | Ảnh đại diện |
| [`public/Huong_dan_cap_nhat.md`](public/Huong_dan_cap_nhat.md) | File tĩnh trong `public/` |

## Cấu trúc dữ liệu (trong `src/`)

| Đường dẫn | Mục đích |
|-----------|----------|
| `src/data/resume.ts` | **Nội dung CV** mặc định |
| `src/data/resume.template.ts` | Khung CV trống |
| `src/config/cv-defaults.ts` | Layout, theme, thứ tự section |
| `src/config/app.ts` | Tên app, locale, metadata |
| `src/config/ui.ts` | Chữ giao diện toolbar |

## Chỉnh CV

1. Mở `src/data/resume.ts` — sửa thông tin cá nhân và nội dung.
2. Hoặc dùng **editor trên web** (toolbar + sidebar) — copy sang `resume.ts` để lưu lâu dài.
3. Lưu file và làm mới trình duyệt.

## Xuất file

- **In** (Ctrl+P) — PDF văn bản chọn được, tốt ATS
- **Xuất PDF / DOCX** — trên toolbar

## License

GPL-3.0
