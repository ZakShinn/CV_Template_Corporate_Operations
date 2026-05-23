# Hướng dẫn cập nhật dữ liệu dự án

Tài liệu này là **mục lục**. Mỗi thư mục có file `Huong_dan_cap_nhat.md` riêng — mở đúng thư mục khi cần chỉnh nội dung đó.

**Quy ước:** file cập nhật **dữ liệu / cấu hình** dùng đuôi **`.ts`** (không dùng `.json` cho CV).

| Thư mục | Bạn muốn chỉnh… | Mở file |
|--------|------------------|---------|
| [`data/`](./data/Huong_dan_cap_nhat.md) | Họ tên, kinh nghiệm, kỹ năng, học vấn, dự án trên CV | `data/Huong_dan_cap_nhat.md` |
| [`config/`](./config/Huong_dan_cap_nhat.md) | Màu sắc, **nền trang**, chữ toolbar, layout mặc định | `config/Huong_dan_cap_nhat.md` |
| [`app/`](./app/Huong_dan_cap_nhat.md) | **Font chữ**, CSS in ấn, biến màu toàn trang | `app/Huong_dan_cap_nhat.md` |
| [`public/`](../public/Huong_dan_cap_nhat.md) | **Ảnh đại diện (avatar)** file JPG/PNG/SVG | `public/Huong_dan_cap_nhat.md` |

## Quy trình nhanh — lần đầu tùy biến CV

1. **`public/`** — đặt ảnh của bạn (ví dụ `avatar.jpg`).
2. **`config/app.ts`** — trỏ `avatarDefault` tới đy danh file ảnh (nếu đổi tên file).
3. **`data/resume.ts`** — điền toàn bộ nội dung CV; trường `personal.avatar` trỏ cùng đường dẫn ảnh.
4. **`config/`** — chỉnh màu nhấn, ngôn ngữ mặc định (nếu cần).
5. **`app/layout.tsx`** — đổi font (nếu cần).
6. Chạy `npm run dev` và kiểm tra trên trình duyệt.

## Nội dung hiển thị trên trang web — map nhanh

| Vùng trên màn hình | File cấu hình / dữ liệu |
|--------------------|-------------------------|
| Tiêu đề tab trình duyệt | `config/app.ts` → `name`, `description` |
| Thanh công cụ (Bố cục, Xuất PDF…) | `config/ui.ts` |
| CV: Header, tên, liên hệ | `data/resume.ts` → `personal` |
| CV: Các mục (Kinh nghiệm, Kỹ năng…) | `data/resume.ts` + nhãn trong `config/i18n.ts` |
| Chân trang web | `config/app.ts` → `footer` |
| Màu nút / accent CV | `config/colors.ts` + `config/cv-defaults.ts` → `accent` |
| Font toàn site | `app/layout.tsx` |

## Sau khi sửa file

```bash
npm run dev
```

Nếu đã chạy sẵn, lưu file — trang tự tải lại (hot reload). Đổi font hoặc `tailwind.config.ts` đôi khi cần **dừng và chạy lại** `npm run dev`.

## Không cần sửa (trừ khi lập trình thêm tính năng)

- `components/` — giao diện; chữ lấy từ `config/` và dữ liệu từ `data/`.
- `store/` — trạng thái tạm; reset về `data/resume.ts` khi tải lại trang.
- `lib/` — logic xuất PDF/DOCX; chỉ sửa khi đổi quy tắc xuất file.
