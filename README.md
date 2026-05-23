# Mẫu CV Vận hành Doanh nghiệp

Mẫu CV chuyên nghiệp, tối ưu ATS — **ngôn ngữ mặc định: Tiếng Việt**. Toàn bộ dữ liệu và cấu hình nằm trong thư mục `src/`.

## Chạy dự án

```bash
npm install
npm run dev
```

## Hướng dẫn cập nhật (chi tiết)

📄 **[src/Huong_dan_cap_nhat.md](src/Huong_dan_cap_nhat.md)** — mục lục tổng.

| Thư mục | File hướng dẫn |
|---------|----------------|
| `src/data/` | [Huong_dan_cap_nhat.md](src/data/Huong_dan_cap_nhat.md) — nội dung CV |
| `src/config/` | [Huong_dan_cap_nhat.md](src/config/Huong_dan_cap_nhat.md) — màu, UI, layout |
| `src/app/` | [Huong_dan_cap_nhat.md](src/app/Huong_dan_cap_nhat.md) — **font**, CSS in |
| `public/` | [Huong_dan_cap_nhat.md](public/Huong_dan_cap_nhat.md) — **avatar**, file tĩnh |

## Cấu trúc dữ liệu & cấu hình (trong `src/`)

| Đường dẫn | Mục đích |
|-----------|----------|
| `src/data/resume.ts` | **Nội dung CV** — họ tên, kinh nghiệm, kỹ năng, học vấn… |
| `src/data/resume.template.ts` | Khung CV trống (TypeScript) |
| `src/data/resume.schema.ts` | Mô tả cấu trúc dữ liệu |
| `src/config/colors.ts` | **Bảng màu** corporate (navy, blue, slate, emerald…) |
| `src/config/cv-defaults.ts` | Layout mặc định, thứ tự section, theme |
| `src/config/app.ts` | Tên app, locale mặc định `vi`, metadata |
| `src/config/i18n.ts` | Nhãn section CV (VI / EN / JA) |
| `src/config/ui.ts` | **Chữ giao diện** toolbar, sidebar (Tiếng Việt) |

## Chỉnh CV của bạn

1. Mở `src/data/resume.ts` — sửa toàn bộ thông tin cá nhân và nội dung.
2. Màu nhấn / layout mặc định: `src/config/cv-defaults.ts`.
3. Màu hệ thống & Tailwind: `src/config/colors.ts`.

## Xuất file

- **In** (Ctrl+P) — PDF có thể chọn chữ, tốt cho ATS.
- **Xuất PDF** / **Xuất DOCX** — trên thanh công cụ.

## License

GPL-3.0
