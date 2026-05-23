# Hướng dẫn cập nhật — `src/config/`

Thư mục này điều khiển **màu sắc, chữ giao diện web, nhãn section CV, cài đặt mặc định** — không chứa kinh nghiệm / học vấn chi tiết (nằm ở `data/resume.ts`).

## File trong thư mục

| File | Chỉnh khi bạn muốn… |
|------|---------------------|
| **`app.ts`** | Tên app, mô tả tab trình duyệt, chân trang, đường dẫn avatar mặc định, tiền tố tên file xuất |
| **`colors.ts`** | Mã màu hex, màu accent (navy/blue/slate/emerald), biến CSS |
| **`background.ts`** | **Nền trang web** (gradient, lưới, độ sáng) — vùng ngoài khung CV |
| **`cv-defaults.ts`** | Layout 1/2 cột mặc định, theme sáng/tối, màu nhấn, thứ tự section, bật QR/điểm hồ sơ |
| **`ui.ts`** | Chữ tiếng Việt trên **thanh công cụ** và **sidebar** (nút, nhãn dropdown) |
| **`i18n.ts`** | Tiêu đề mục trên **CV** (Tóm tắt, Kinh nghiệm, Kỹ năng…) — VI / EN / JA |
| `index.ts` | Xuất gộp; không cần sửa |

---

## 1. `app.ts` — Thông tin trang web

```ts
export const appConfig = {
  name: "Mẫu CV Vận hành Doanh nghiệp",     // Tiêu đề tab trình duyệt
  description: "...",                        // Meta description (SEO)
  defaultLocale: "vi",                       // Ngôn ngữ mặc định
  htmlLang: "vi",                            // Thuộc tính <html lang="">
  avatarDefault: "/avatar-placeholder.svg",  // Avatar khi resume.ts dùng giá trị này
  footer: "Dòng chữ chân trang web...",      // Hiển thị dưới cùng trang
  export: {
    pdfPrefix: "cv-",
    docxPrefix: "cv-",
    printHint: "Gợi ý khi rê chuột nút In",
  },
};
```

**Hiển thị trên web:** tiêu đề tab, footer, tooltip nút In.

---

## 2. `background.ts` — Nền trang (ngoài CV)

Chỉnh gradient và lưới nền editor (không ảnh hưởng khổ giấy CV khi in):

```ts
export const pageBackground = {
  light: {
    baseFrom: "#f8fafc",   // màu gradient trên
    baseVia: "#f1f5f9",
    baseTo: "#e2e8f0",     // màu gradient dưới
    glowTop: "30, 64, 175", // RGB — ánh sáng nhẹ phía trên
    glowTopOpacity: 0.07,
    gridSize: 32,           // ô lưới (px)
    gridOpacity: 0.35,
  },
  dark: { /* tương tự */ },
};
```

**Hiển thị:** nền sau toolbar, quanh khung CV trắng. Component: `components/layout/PageBackground.tsx`.

---

## 3. `colors.ts` — Màu sắc

### Màu nền corporate (hex)

```ts
export const corporateColors = {
  navy: "#0f172a",
  blue: "#1e40af",
  // ...
};
```

Sửa hex tại đây, sau đó đồng bộ `tailwind.config.ts` (đang import `tailwindCorporateColors` từ file này).

### Màu nhấn từng chế độ (class Tailwind)

Trong `accentColorStyles` → chỉnh `text`, `bg`, `border`, `bar` cho từng accent (`navy`, `blue`, `slate`, `emerald`) và `light` / `dark`.

**Hiển thị trên web:** gạch section, badge kỹ năng, thanh %, nút PDF active.

---

## 4. `cv-defaults.ts` — Layout & theme mặc định

```ts
export const defaultCVSettings = {
  layout: "two-column",      // "one-column" | "two-column"
  variant: "default",        // "default" | "executive" | "minimal" | "tech-operations"
  theme: "light",            // "light" | "dark"
  accent: "navy",            // "navy" | "blue" | "slate" | "emerald"
  locale: appConfig.defaultLocale,
  showQRCode: false,
  showProfileScore: true,
};
```

**Thứ tự mục CV mặc định:** sửa mảng `defaultSectionOrder`.

**Cột phụ (layout 2 cột):** `sidebarSectionIds` — các mục hiển thị bên phải.

Người dùng vẫn đổi tạm trên toolbar; giá trị ở đây áp dụng khi **tải lại trang**.

---

## 5. `ui.ts` — Chữ giao diện editor (Tiếng Việt)

```ts
export const ui = {
  toolbar: {
    appTitle: "CV Vận hành Doanh nghiệp",
    layoutOneCol: "1 cột",
    aiSummary: "Tóm tắt AI",
  },
  variants: { default: "Mặc định", executive: "Điều hành (Executive)", ... },
  accents: { navy: "Xanh navy", ... },
  sidebar: { sectionOrder: "Thứ tự mục", ... },
  profileScore: { tips: { fullName: "Thêm họ tên...", ... } },
};
```

**Hiển thị trên web:** toàn bộ thanh công cụ trên, sidebar phải, gợi ý điểm hoàn thiện hồ sơ.

Dropdown layout/variant/accent: sửa thêm trong `toolbarOptions` (cuối file `ui.ts`).

---

## 6. `i18n.ts` — Nhãn trên bản CV

```ts
sectionLabels: {
  vi: {
    professionalSummary: "Tóm tắt chuyên môn",
    workExperience: "Kinh nghiệm làm việc",
    // ...
  },
}
```

**Hiển thị trên web:** tiêu đề từng section **trong khung CV**, không phải toolbar.

Khi chọn ngôn ngữ CV là EN/JA trên toolbar, hệ thống dùng block `en` / `ja` tương ứng.

---

## 7. Xuất DOCX — tiêu đề mục

Trong `ui.ts` → `export.docxSections` (Tóm tắt, Kinh nghiệm, Kỹ năng…).

---

## Thứ tự ưu tiên khi đổi “giao diện”

1. Màu hex → `colors.ts`
2. Accent/layout mặc định → `cv-defaults.ts`
3. Chữ nút / sidebar → `ui.ts`
4. Chữ trên CV → `i18n.ts` hoặc `data/resume.ts` (nội dung)

**Liên quan:** nội dung CV → [`../data/Huong_dan_cap_nhat.md`](../data/Huong_dan_cap_nhat.md) · font → [`../app/Huong_dan_cap_nhat.md`](../app/Huong_dan_cap_nhat.md)
