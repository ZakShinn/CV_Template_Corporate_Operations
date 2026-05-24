# Hướng dẫn đổi font

Font sans mặc định: **Inter** — [`config.ts`](./config.ts).

## Cách đổi

1. Chọn font trên [Google Fonts](https://fonts.google.com/) — ưu tiên có **Vietnamese**.
2. Sửa `family` trong `src/font/config.ts`.
3. Đổi import `next/font/google` trong `src/app/layout.tsx` cho khớp tên font.
4. Cập nhật `tailwind.config.ts` → `fontFamily.sans` nếu cần fallback.
5. Lưu file và làm mới trình duyệt.

## Dùng ở đâu

| Vai trò | Vị trí |
|---------|--------|
| Sans | Body CV, toolbar, sidebar editor |
| Semibold | Tiêu đề section, họ tên |

## Variant `tech-operations`

Dùng `font-mono` trên toàn CV — đổi font mono trong `config.ts` nếu cần (Fira Code, JetBrains Mono…).

## Tiếng Việt

Inter đã bật subset **vietnamese** trong layout. Font mới phải hỗ trợ tiếng Việt trên Google Fonts.

## Không cần sửa

Component React — font áp dụng qua CSS variable từ `layout.tsx`.
