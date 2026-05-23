# Hướng dẫn đổi màu

Bảng màu Corporate tại **[`theme.ts`](./theme.ts)**.

## `corporateColors`

Màu hex cơ bản: `navy`, `blue`, `slate`, `emerald`, viền, gray scale.

## `accentColorStyles`

Class Tailwind theo accent người dùng chọn trên toolbar (`navy` | `blue` | `slate` | `emerald`) và theme sáng/tối.

## `cssVariables`

Biến `--cv-bg`, `--cv-fg`, `--cv-muted`, `--cv-border`, `--cv-accent` cho light/dark.

`layout.tsx` inject qua `getThemeCssBlock()`.

## Tailwind

`tailwind.config.ts` import `tailwindCorporateColors` từ file này.

## Đổi accent mặc định

Sửa `defaultCVSettings.accent` trong `src/config/cv-defaults.ts`.
