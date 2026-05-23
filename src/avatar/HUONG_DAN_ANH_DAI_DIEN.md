# Hướng dẫn ảnh đại diện

Cấu hình tại **[`config.ts`](./config.ts)**. File ảnh đặt trong **`public/`**.

## Thêm ảnh

1. Copy ảnh vào `public/` (vd: `anh-cua-toi.jpg`).
2. `src/avatar/config.ts`:

```ts
enabled: true,
src: "/anh-cua-toi.jpg",
alt: "Họ và Tên — Operations Manager",
```

## Editor web

Có thể đổi `personal.avatar` trên sidebar — **trống** thì dùng `config.ts`.

## Placeholder

`public/avatar-placeholder.svg` — đổi `src` khi có ảnh thật.

## Khuyến nghị

- JPG/PNG, ≥ 400×400 px, nền trung tính, &lt; 500 KB.
- Variant `executive` / `minimal` tự điều chỉnh khung (vuông / bo tròn).
