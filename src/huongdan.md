# Hướng dẫn nhập liệu & cấu hình

| File | Nội dung |
|------|----------|
| **[`resume-basic.ts`](./resume-basic.ts)** | **Bắt buộc:** cá nhân, liên hệ, tóm tắt, kinh nghiệm, kỹ năng, học vấn, chứng chỉ, ngôn ngữ |
| **[`resume-advanced.ts`](./resume-advanced.ts)** | **Nâng cao:** dự án, đề án/chương trình, bật/tắt mục & thanh % |
| [`resume.ts`](./resume.ts) | Gộp 2 file trên — **không chỉnh trực tiếp** (trừ khi biết TypeScript) |
| [`avatar.ts`](./avatar.ts) | Ảnh → `public/avatar/avatar.jpg` |
| [`color.ts`](./color.ts) | Màu & nền trang |
| [`font.ts`](./font.ts) | Font |
| [`config.ts`](./config.ts) | Trang web, toolbar, chặn Google |

## `resume-basic.ts` — Phần cơ bản

| Khối | Mô tả |
|------|--------|
| `personal` | Họ tên, chức danh |
| `personal.contact` | Email, phone, LinkedIn, GitHub, portfolio, địa điểm |
| `summary` | Tóm tắt chuyên môn |
| `experience` | Công ty, vị trí, thời gian, trách nhiệm, thành tựu |
| `skills` | Kỹ năng theo nhóm (technical, soft, tools…) |
| `education` | Trường, bằng, chuyên ngành |
| `certifications` | Chứng chỉ |
| `languages` | Ngôn ngữ |

## `resume-advanced.ts` — Phần nâng cao

| Khối | Mô tả |
|------|--------|
| `projects` | Dự án kỹ thuật (công nghệ, GitHub…) |
| `initiatives` | Đề án / chương trình doanh nghiệp |
| `display.visibleSections` | `false` để ẩn mục (vd. `projects: false`) |
| `display.showSkillProgressBars` | Thanh % kỹ năng |
| `display.showLanguageProgressBars` | Thanh % ngôn ngữ |

### Thêm đề án mới

```ts
initiatives: [
  {
    id: "init-3",
    name: "Tên đề án",
    organization: "Tên tổ chức",
    period: "2024 – 2025",
    description: "Mô tả ngắn",
    achievements: ["Kết quả đo lường được"],
    link: "https://...",  // tùy chọn
  },
],
```

## Xóa dòng / trường không cần

- **Liên hệ:** xóa `linkedin`, `github`, `portfolio`… — chỉ giữ email/phone nếu muốn.
- **Kinh nghiệm:** xóa cả mảng `responsibilities` hoặc `achievements` → coi như không có bullet.
- **Kỹ năng:** xóa cả nhóm `soft: [...]` hoặc để `[]`.
- **Dự án / đề án:** xóa hết phần tử trong `projects: []` hoặc xóa cả mảng → mục tự ẩn.
- **Tóm tắt:** xóa nội dung `summary` hoặc để `""` → mục tự ẩn.

Không cần sửa file khác — `normalize-resume.ts` xử lý khi build CV.

- Có thể **xóa cả mục** trong mảng (một trường `experience`, `education`…) — không bắt buộc giữ `id`.
- Có thể **xóa cả khối** `certifications`, `projects`, `languages` — app vẫn chạy, mục trống tự ẩn.

## Chặn Google / tìm kiếm

Trong **`config.ts`**:

```ts
export const configSeo = {
  blockSearchEngines: true,  // true = chặn Google, Bing…
};
```

Khi `true`, hệ thống bật đồng thời:

| Lớp bảo vệ | File |
|------------|------|
| Cấu hình bật/tắt | `src/config.ts` → `configSeo.blockSearchEngines` |
| Meta `noindex` | `src/app/layout.tsx` + `src/lib/search-block.ts` |
| `robots.txt` | `src/app/robots.ts` (ưu tiên khi deploy Next.js) |
| Header HTTP | `next.config.ts` → `X-Robots-Tag` |
| Dự phòng tĩnh | `public/robots.txt` |

**Lưu ý:** Trang đã bị Google index trước đó cần gỡ trong [Google Search Console](https://search.google.com/search-console). `noindex` chỉ ngăn index mới.

## Quy trình nhanh

1. `public/avatar/avatar.jpg` — ảnh của bạn  
2. `resume-basic.ts` — nội dung cốt lõi  
3. `resume-advanced.ts` — dự án & đề án  
4. `config.ts` — giao diện web  
5. `npm run dev`
