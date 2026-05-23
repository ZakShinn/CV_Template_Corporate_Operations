# Hướng dẫn cập nhật — `src/data/`

Thư mục này chứa **toàn bộ nội dung hiển thị trên CV** (phần giấy A4 trên trang web).

## File trong thư mục (toàn bộ là `.ts`)

| File | Mục đích |
|------|----------|
| **`resume.ts`** | ⭐ File chính — chỉnh CV tại đây (có gợi ý kiểu TypeScript). |
| **`resume.template.ts`** | Khung CV trống; copy sang `resume.ts` hoặc `useCVStore.getState().setResume(resumeTemplate)`. |
| `resume.schema.ts` | Mô tả cấu trúc / JSON Schema (tham chiếu); thường không cần sửa. |
| `index.ts` | Xuất gộp các module; không cần sửa. |

> Dự án **không dùng file `.json`** cho dữ liệu CV — mọi chỉnh sửa nội dung đều qua file `.ts` trong thư mục này.

---

## 1. Thông tin cá nhân & avatar

Mở **`resume.ts`** → khối `personal`:

```ts
personal: {
  fullName: "Họ và Tên",
  jobTitle: "Chức danh | Lĩnh vực",
  avatar: "/ten-anh.jpg",   // đường dẫn từ thư mục public/
  contact: {
    email: "...",
    phone: "...",
    linkedin: "linkedin.com/in/...",   // có thể bỏ trống bằng cách xóa dòng
    github: "...",
    portfolio: "...",
    location: "Thành phố, Việt Nam",
  },
},
```

**Avatar:** đặt file ảnh trong [`public/`](../public/Huong_dan_cap_nhat.md), rồi ghi đúng tên ở `avatar` (ví dụ `"/avatar.jpg"`). Xem hướng dẫn chi tiết tại `public/Huong_dan_cap_nhat.md`.

---

## 2. Tóm tắt chuyên môn

```ts
summary: "Đoạn văn ngắn, phong cách corporate, 2–4 câu...",
```

- Nên **≥ 120 ký tự** để đạt điểm “hoàn thiện hồ sơ” cao hơn.
- Nút **「Tóm tắt AI」** trên toolbar tạo lại đoạn này từ dữ liệu CV (tiếng Việt nếu `locale: "vi"`).

---

## 3. Kinh nghiệm làm việc

```ts
experience: [
  {
    id: "exp-1",                    // id duy nhất, không trùng
    company: "Tên công ty",
    position: "Chức danh",
    location: "Địa điểm",           // tùy chọn
    startDate: "2021-03",           // định dạng YYYY-MM
    endDate: "Present",             // hoặc "2024-12"
    responsibilities: ["...", "..."],
    achievements: ["Giảm downtime 35%", "..."],  // nên có số liệu
  },
],
```

Thêm công việc: copy một object `{ ... }` và đổi `id`.

---

## 4. Kỹ năng

```ts
skills: {
  technical: [{ name: "Tên kỹ năng", level: 85 }],  // level 0–100, có thể bỏ level
  soft: [...],
  tools: [...],
  infrastructure: [...],
  management: [...],
},
```

- `level` điều khiển thanh % (ẩn ở phiên bản Minimal).

---

## 5. Học vấn

```ts
education: [
  {
    id: "edu-1",
    university: "Tên trường",
    degree: "Bằng cấp",
    major: "Chuyên ngành",
    gpa: "3.5/4.0",              // tùy chọn — xóa dòng nếu không dùng
    graduationYear: "2020",
  },
],
```

---

## 6. Chứng chỉ

```ts
certifications: [
  { id: "cert-1", name: "AWS...", issuer: "Amazon", year: "2023" },
],
```

---

## 7. Dự án

```ts
projects: [
  {
    id: "proj-1",
    name: "Tên dự án",
    description: "Mô tả ngắn",
    technologies: ["Python", "AWS"],
    achievements: ["Kết quả đo lường được"],
    githubUrl: "github.com/...",   // tùy chọn
  },
],
```

---

## 8. Ngôn ngữ

```ts
languages: [
  { id: "lang-1", name: "Tiếng Việt", level: "Bản ngữ", proficiency: 100 },
],
```

---

## 9. Ngôn ngữ CV (`locale`)

```ts
locale: "vi",   // "vi" | "en" | "ja" — ảnh hưởng nhãn mục và định dạng ngày
```

Có thể đổi tạm trên toolbar; giá trị trong `resume.ts` là mặc định khi tải lại trang.

---

## Bắt đầu từ khung trống

1. Mở **`resume.template.ts`**.
2. Copy toàn bộ object `resumeTemplate` sang **`resume.ts`** (hoặc import và gán):

```ts
import { resumeTemplate } from "@/data/resume.template";
// useCVStore.getState().setResume({ ...resumeTemplate, personal: { ... } });
```

3. Điền từng mục trong `resume.ts`.

---

## Kiểm tra sau khi sửa

1. `npm run dev`
2. Xem CV trên trang — scroll từng mục.
3. Thử **In** / **Xuất PDF** / **Xuất DOCX**.

**Liên quan:** màu & layout → [`../config/Huong_dan_cap_nhat.md`](../config/Huong_dan_cap_nhat.md) · font → [`../app/Huong_dan_cap_nhat.md`](../app/Huong_dan_cap_nhat.md)
