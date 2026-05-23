# Mẫu CV Vận hành Doanh nghiệp

Mẫu CV chuyên nghiệp, tối ưu ATS — **ngôn ngữ mặc định: Tiếng Việt**. Toàn bộ dữ liệu và cấu hình nằm trong thư mục `src/`.

## Chạy dự án

```bash
npm install
npm run dev
```

## Cấu trúc dữ liệu & cấu hình (trong `src/`)

| Đường dẫn | Mục đích |
|-----------|----------|
| `src/data/resume.ts` | **Nội dung CV** — họ tên, kinh nghiệm, kỹ năng, học vấn… |
| `src/data/resume.template.json` | Template JSON trống |
| `src/data/resume.schema.json` | JSON Schema |
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
