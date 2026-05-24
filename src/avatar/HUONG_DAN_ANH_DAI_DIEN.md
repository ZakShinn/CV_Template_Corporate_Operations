# Hướng dẫn ảnh đại diện

Cấu hình tại **[`config.ts`](./config.ts)**. File ảnh đặt trong **`public/`**.

## Thêm ảnh

1. Copy ảnh vào `public/` (vd: `anh-cua-toi.jpg`).
2. Mở `src/avatar/config.ts`:

```ts
enabled: true,
src: "/anh-cua-toi.jpg",
alt: "Họ và Tên — Operations Manager",
```

3. Lưu file và làm mới trình duyệt.

Hoặc trỏ trong `src/data/resume.ts`:

```ts
personal: {
  avatar: "/anh-cua-toi.jpg",
}
```

## Editor web

Sidebar editor cho phép đổi `personal.avatar` trực tiếp — **trống** thì dùng `config.ts`.

Dữ liệu session không lưu vĩnh viễn — copy sang `resume.ts` khi hài lòng.

## Không dùng ảnh

```ts
enabled: true,
src: "",
```

CV hiển thị header không ảnh (variant executive vẫn có thể dùng layout căn giữa).

## Placeholder

`public/avatar/anh_dai_dien.png` — thay file hoặc đổi `src` trong `config.ts`.

## Tuỳ chọn `config.ts`

| Trường | Ý nghĩa |
|--------|---------|
| `enabled` | `false` = tắt ảnh |
| `objectFit` | `cover` hoặc `contain` |
| `hideInPrint` | `true` = không in ảnh ra PDF |

## Khuyến nghị

- JPG/PNG, ≥ 400×400 px, nền trung tính, &lt; 500 KB.
- Variant **executive**: khung lớn hơn, căn giữa.
- Variant **minimal**: khung bo tròn (`rounded-full`).

## Vị trí trên CV

Header, bên trái họ tên (layout mặc định). Layout executive: căn giữa phía trên tên.
