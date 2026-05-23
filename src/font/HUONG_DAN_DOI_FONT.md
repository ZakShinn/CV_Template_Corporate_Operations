# Hướng dẫn đổi font

Font sans mặc định: **Inter** — [`config.ts`](./config.ts).

## Đổi font

1. Sửa `family` trong `src/font/config.ts`.
2. Đổi import `next/font/google` trong `src/app/layout.tsx`.
3. Cập nhật `tailwind.config.ts` → `fontFamily.sans` nếu cần fallback.

## Tiếng Việt

Dùng font có subset **vietnamese** (Inter đã bật trong layout).
