# Hướng dẫn cập nhật — `src/app/`

Thư mục này điều khiển **font chữ toàn trang**, **CSS in ấn (A4)** và **layout gốc** của ứng dụng Next.js.

## File trong thư mục

| File | Mục đích |
|------|----------|
| **`layout.tsx`** | ⭐ Cấu hình **font** (Google Fonts), metadata, biến CSS trên `<body>` |
| **`globals.css`** | CSS toàn cục, class CV, quy tắc **@media print** (in / PDF) |
| `page.tsx` | Ghép toolbar + CV + sidebar; thường **không** cần sửa nội dung CV |

---

## 1. Đổi font chữ — `layout.tsx`

Hiện tại dùng **Inter** (hỗ trợ tiếng Việt):

```ts
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});
```

### Đổi sang font khác (Google Fonts)

Ví dụ **IBM Plex Sans**:

```ts
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-ibm",
  display: "swap",
});

// Trong <body>:
className={`${ibm.variable} font-sans ...`}
```

Cập nhật `tailwind.config.ts` → `fontFamily.sans`:

```ts
fontFamily: {
  sans: ["var(--font-ibm)", "system-ui", "sans-serif"],
},
```

### Font có sẵn trên Google Fonts (gợi ý corporate)

- Inter (mặc định)
- IBM Plex Sans
- Source Sans 3
- Noto Sans (tiếng Việt tốt)

Danh sách: [https://fonts.google.com](https://fonts.google.com)

### Font local (file .woff2 trong `public/fonts/`)

Dùng `next/font/local` — cần thêm file font vào `public/fonts/` (xem [`public/Huong_dan_cap_nhat.md`](../../public/Huong_dan_cap_nhat.md)).

**Sau khi đổi font:** dừng `npm run dev` và chạy lại.

---

## 2. Metadata trang (tiêu đề tab)

Trong `layout.tsx`:

```ts
export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};
```

→ Sửa trực tiếp tại [`../config/app.ts`](../config/app.ts) (`name`, `description`) thay vì sửa `layout.tsx`.

---

## 3. Biến màu trên `<body>`

`layout.tsx` gán `--cv-bg`, `--cv-fg`, … từ `config/colors.ts` → `cssVariables`.

Đổi màu nền/chữ toàn site: sửa `cssVariables` trong [`../config/colors.ts`](../config/colors.ts).

---

## 4. `globals.css` — In ấn & style CV

| Phần | Tác dụng |
|------|----------|
| `:root` / `.dark` | Biến CSS (đồng bộ với `colors.ts`) |
| `.cv-section-title`, `.cv-badge`, `.cv-skill-bar` | Kiểu chữ / badge / thanh kỹ năng |
| `@media print` | Ẩn toolbar (`no-print`), khổ A4, bỏ shadow khi in |

### Chỉnh lề khi in A4

```css
@page {
  size: A4 portrait;
  margin: 12mm 14mm;   /* tăng/giảm lề tại đây */
}
```

### Ẩn thêm phần khi in

Thêm class `no-print` vào phần tử HTML (sidebar editor đã có sẵn).

---

## 5. `page.tsx` — Cấu trúc trang

```
[ Toolbar ]     ← config/ui.ts
[ CV ] [ Sidebar ]   ← data/resume.ts + config
[ Footer ]      ← config/app.ts → footer
```

Không chứa text CV — không cần sửa khi chỉ đổi nội dung hồ sơ.

---

## Nội dung trang web — map file

| Hiển thị | File |
|----------|------|
| Font chữ CV + editor | `layout.tsx` + `tailwind.config.ts` |
| Nền xám ngoài CV | `layout.tsx` (`bg-slate-50`) — class Tailwind |
| Khổ CV trên màn hình | `components/cv/CVDocument.tsx` (padding, shadow) |
| Khi in ra giấy | `globals.css` → `@media print` |

**Liên quan:** nội dung CV → [`../data/Huong_dan_cap_nhat.md`](../data/Huong_dan_cap_nhat.md) · màu → [`../config/Huong_dan_cap_nhat.md`](../config/Huong_dan_cap_nhat.md) · avatar → [`../../public/Huong_dan_cap_nhat.md`](../../public/Huong_dan_cap_nhat.md)
