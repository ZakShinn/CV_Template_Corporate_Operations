# Hướng dẫn nhập liệu — Corporate Operations

Mẫu CV **vận hành doanh nghiệp**, tối ưu ATS, có editor trên web.

| Tuỳ chỉnh | File | Hướng dẫn |
|-----------|------|-----------|
| Nội dung CV | `src/data/resume.ts` | File này |
| Khung trống | `src/data/resume.template.ts` | Copy sang `resume.ts` |
| Ảnh đại diện | `src/avatar/config.ts` | `src/avatar/HUONG_DAN_ANH_DAI_DIEN.md` |
| Màu / accent | `src/color/theme.ts` | `src/color/HUONG_DAN_DOI_MAU.md` |
| Font | `src/font/config.ts` | `src/font/HUONG_DAN_DOI_FONT.md` |
| App (locale, export) | `src/config/app.ts` | Toolbar trên web |

## File trong `src/data/`

| File | Mục đích |
|------|----------|
| **`resume.ts`** | Dữ liệu CV mặc định khi load trang |
| `resume.template.ts` | Khung trống |
| `resume.schema.ts` | Tham chiếu cấu trúc |
| `index.ts` | Export gộp |

## `personal` (resume.ts)

```ts
personal: {
  fullName: "Họ và Tên",
  jobTitle: "Quản lý Vận hành | IT Operations",
  avatar: "",  // hoặc để editor đổi; mặc định: src/avatar/config.ts
  contact: { email, phone, linkedin, github, portfolio, location },
},
```

## Các khối chính

- `summary` — ≥ 120 ký tự (điểm hoàn thiện hồ sơ)
- `experience[]` — `id`, `company`, `position`, `startDate`, `endDate`, `achievements`
- `skills` — `technical`, `soft`, `tools`, `infrastructure`, `management`
- `education`, `certifications`, `projects`, `languages`

## Editor trên web

Toolbar: đổi layout, theme, accent, locale, in PDF, DOCX, tóm tắt AI. Sidebar: chỉnh từng field.

Dữ liệu lưu trong store (session) — để giữ lâu dài, copy sang `resume.ts` và deploy lại.

## In PDF

Ctrl+P → Lưu PDF (văn bản chọn được — tốt cho ATS).
