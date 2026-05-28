# Mẫu CV Vận hành Doanh nghiệp

Ngôn ngữ mặc định: **Tiếng Việt**. Hướng dẫn chi tiết: **[src/huongdan.md](src/huongdan.md)**

## Cấu trúc chỉnh sửa (`src/`)

| File | Nội dung |
|------|----------|
| [`resume-basic.ts`](src/resume-basic.ts) | Thông tin CV bắt buộc (cá nhân, kinh nghiệm, kỹ năng…) |
| [`resume-advanced.ts`](src/resume-advanced.ts) | Dự án, đề án, tuỳ chọn hiển thị |
| [`resume.ts`](src/resume.ts) | Gộp 2 file trên (runtime) |
| [`avatar.ts`](src/avatar.ts) | Ảnh đại diện → `public/avatar/avatar.jpg` |
| [`color.ts`](src/color.ts) | Màu sắc & nền trang |
| [`font.ts`](src/font.ts) | Font chữ |
| [`config.ts`](src/config.ts) | Trang web, bật/tắt tính năng, chặn Google |

## Chạy dự án

```bash
npm install
npm run dev
```

## Chặn Google

`src/config.ts` → `configSeo.blockSearchEngines: true` + `public/robots.txt`

## License

GPL-3.0
