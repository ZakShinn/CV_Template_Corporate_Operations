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

## Layout chuẩn ngành vận hành / quản lý

| Variant | Phù hợp | Đặc điểm |
|---------|---------|----------|
| **Default / two-column** | Ops manager, IT operations, PM | Sidebar: skills, certs, languages · Main: summary, experience |
| **Executive** | Director, VP Operations | Header căn giữa, ít chi tiết kỹ thuật |
| **Minimal** | ATS-first, HR screen | Một cột, font gọn, ít trang trí |
| **Tech-operations** | IT Ops / SRE hybrid | Font mono, nhấn infrastructure & tools |

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

- `summary` — ≥ 120 ký tự (điểm hoàn thiện hồ sơ); nêu quy mô team, KPI, domain.
- `experience[]` — `id`, `company`, `position`, `startDate`, `endDate`, `achievements` (bullet có số liệu).
- `skills` — `technical`, `soft`, `tools`, `infrastructure`, `management`.
- `education`, `certifications`, `projects`, `languages`.

## Editor trên web

Toolbar: đổi layout, theme, accent, locale, in PDF, DOCX, tóm tắt AI. Sidebar: chỉnh từng field.

Dữ liệu lưu trong store (session) — để giữ lâu dài, copy sang `resume.ts` và deploy lại.

## In PDF

Ctrl+P → Lưu PDF (văn bản chọn được — tốt cho ATS). Không cần bật in nền (layout sáng).

## Xem thay đổi

Sửa `resume.ts` → lưu → làm mới trình duyệt. Thay đổi qua editor có hiệu lực ngay trên session hiện tại.
