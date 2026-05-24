# Hướng dẫn cập nhật — `public/`

Thư mục này chứa **file tĩnh** phục vụ trực tiếp qua URL (ảnh, font, favicon…). Trình duyệt truy cập bằng đường dẫn bắt đầu bằng `/`.

## File hiện có

| File | Mục đích |
|------|----------|
| `avatar-placeholder.svg` | Ảnh mặc định khi chưa có ảnh thật |

---

## 1. Thay ảnh đại diện (avatar)

### Bước 1 — Đặt file ảnh vào `public/`

Ví dụ:

```
public/
  avatar.jpg          ← ảnh của bạn
  avatar-placeholder.svg
```

**Khuyến nghị:**

| Thuộc tính | Gợi ý |
|------------|--------|
| Định dạng | JPG hoặc PNG (nền trung tính); SVG nếu logo/placeholder |
| Kích thước | 400×400 px trở lên (vuông hoặc gần vuông) |
| Dung lượng | &lt; 500 KB để tải nhanh |
| Nội dung | Ảnh chân dung chuyên nghiệp, nền sáng/neutral |

### Bước 2 — Trỏ đường dẫn trong dữ liệu CV

Mở [`src/data/resume.ts`](../src/data/resume.ts):

```ts
personal: {
  avatar: "/avatar.jpg",   // tên file phải khớp file trong public/
}
```

### Bước 3 (tùy chọn) — Avatar mặc định toàn app

Mở [`src/config/app.ts`](../src/config/app.ts):

```ts
avatarDefault: "/avatar.jpg",
```

Nếu `resume.ts` dùng `avatar: appConfig.avatarDefault` thì chỉ cần sửa một chỗ trong `app.ts`.

### Bước 4 — Kiểm tra

1. Lưu file và làm mới trình duyệt trên trang xem CV.
2. Xem góc header CV — ảnh phải hiện đúng vị trí.
3. Nếu ảnh không hiện: kiểm tra tên file, viết hoa/thường, và dấu `/` đầu đường dẫn (`"/avatar.jpg"`).

Chi tiết thêm: [`src/avatar/HUONG_DAN_ANH_DAI_DIEN.md`](../src/avatar/HUONG_DAN_ANH_DAI_DIEN.md)

---

## 2. Đường dẫn URL

| File trong `public/` | URL trên trình duyệt |
|----------------------|----------------------|
| `avatar.jpg` | `/avatar.jpg` |
| `fonts/MyFont.woff2` | `/fonts/MyFont.woff2` |

Trong code luôn dùng dạng **`/ten-file.ext`** (không ghi `public/` trong đường dẫn).

---

## 3. Thêm font local (tùy chọn)

```
public/fonts/
  MyCorporateFont-Regular.woff2
  MyCorporateFont-Bold.woff2
```

Cấu hình trong `src/app/layout.tsx` với `next/font/local` — xem [`src/font/HUONG_DAN_DOI_FONT.md`](../src/font/HUONG_DAN_DOI_FONT.md).

---

## 4. Favicon (icon tab trình duyệt)

Đặt một trong các file sau vào `public/`:

- `favicon.ico`
- hoặc `icon.png` (theo quy ước Next.js App Router)

Next.js tự nhận `app/icon.png` nếu bạn tạo thêm trong `src/app/`.

---

## 5. Không đặt gì vào `public/`

- File chứa mật khẩu, API key
- Dữ liệu CV dạng JSON nhạy cảm (nên để trong `src/data/`)

Mọi file trong `public/` đều **công khai** khi deploy.

---

## Liên kết nhanh

- Nội dung CV: [`src/data/HUONG_DAN_NHAP_LIEU.md`](../src/data/HUONG_DAN_NHAP_LIEU.md)
- Màu accent: [`src/color/HUONG_DAN_DOI_MAU.md`](../src/color/HUONG_DAN_DOI_MAU.md)
