# Hướng dẫn — Ảnh đại diện

## Vị trí file

Đặt ảnh của bạn tại:

```
public/avatar/avatar.jpg
```

URL trên web: `/avatar/avatar.jpg`

## Cấu hình trong code

Mở **`src/avatar.ts`**:

| Trường | Ý nghĩa |
|--------|---------|
| `enabled` | `true` = hiện ảnh trên CV |
| `src` | Đường dẫn (mặc định `/avatar/avatar.jpg`) |
| `alt` | Mô tả cho trình đọc màn hình |
| `objectFit` | `cover` hoặc `contain` |
| `hideInPrint` | `true` = không in ảnh khi In/PDF |

## Khuyến nghị ảnh

- Định dạng: **JPG** hoặc PNG
- Kích thước: tối thiểu **400×400 px**, tỉ lệ vuông hoặc gần vuông
- Nền trung tính, trang phục công sở

## Kiểm tra

1. Thay file `avatar.jpg`
2. `npm run dev`
3. Xem phần header CV trên trang chủ
