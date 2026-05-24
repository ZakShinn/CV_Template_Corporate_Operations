# Hướng dẫn đổi màu

Bảng màu Corporate tại **[`theme.ts`](./theme.ts)** (hoặc `src/config/colors.ts` cho Tailwind).

## Cách đổi accent trên toolbar

Người dùng chọn **navy / blue / slate / emerald** trực tiếp trên web — không cần sửa code.

## Cách đổi accent mặc định

Sửa `defaultCVSettings.accent` trong `src/config/cv-defaults.ts`.

## `corporateColors`

Màu hex cơ bản: `navy`, `blue`, `slate`, `emerald`, viền, gray scale — dùng cho component và variant.

## `accentColorStyles`

Class Tailwind theo accent và theme sáng/tối: `text`, `bar`, `badge`…

## `cssVariables`

Biến `--cv-bg`, `--cv-fg`, `--cv-muted`, `--cv-border`, `--cv-accent` cho light/dark.

`layout.tsx` inject qua `getThemeCssBlock()` — không cần sửa từng component.

## Tailwind

`tailwind.config.ts` import `tailwindCorporateColors` từ file theme.

## In PDF

Layout sáng — không bắt buộc bật in nền. Ctrl+P → Save as PDF.

## Xem thay đổi

Sửa `theme.ts` hoặc `cv-defaults.ts` → lưu → làm mới trình duyệt.
