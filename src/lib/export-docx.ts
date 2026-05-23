import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from "docx";
import { saveAs } from "file-saver";
import { ui } from "@/config/ui";
import type { ResumeData } from "@/types/resume";
import { formatDateRange } from "./utils";

export async function exportToDOCX(
  data: ResumeData,
  filename = "cv-van-hanh-doanh-nghiep.docx"
): Promise<void> {
  const s = ui.export.docxSections;
  const children: Paragraph[] = [];

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({ text: data.personal.fullName, bold: true, size: 32 }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({ text: data.personal.jobTitle, size: 24, color: "475569" }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: [
            data.personal.contact.email,
            data.personal.contact.phone,
            data.personal.contact.location,
          ].join(" | "),
          size: 20,
        }),
      ],
    }),
    new Paragraph({ text: "" })
  );

  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: s.summary, bold: true })],
    }),
    new Paragraph({ children: [new TextRun({ text: data.summary })] }),
    new Paragraph({ text: "" })
  );

  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: s.experience, bold: true })],
    })
  );

  for (const exp of data.experience) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: exp.position, bold: true }),
          new TextRun({ text: ` — ${exp.company}` }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: formatDateRange(exp.startDate, exp.endDate, data.locale),
            italics: true,
            color: "64748B",
          }),
        ],
      })
    );
    for (const item of [...exp.responsibilities, ...exp.achievements]) {
      children.push(
        new Paragraph({
          bullet: { level: 0 },
          children: [new TextRun({ text: item })],
        })
      );
    }
    children.push(new Paragraph({ text: "" }));
  }

  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: s.skills, bold: true })],
    })
  );

  const skillGroups = [
    [s.technical, data.skills.technical],
    [s.soft, data.skills.soft],
    [s.tools, data.skills.tools],
    [s.infrastructure, data.skills.infrastructure],
    [s.management, data.skills.management],
  ] as const;

  for (const [label, items] of skillGroups) {
    if (!items.length) continue;
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${label}: `, bold: true }),
          new TextRun({ text: items.map((sk) => sk.name).join(", ") }),
        ],
      })
    );
  }

  children.push(new Paragraph({ text: "" }));

  children.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: s.education, bold: true })],
    })
  );

  for (const edu of data.education) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: edu.degree, bold: true }),
          new TextRun({ text: ` — ${edu.university}` }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `${edu.major}${edu.gpa ? ` | Điểm TB: ${edu.gpa}` : ""} | ${edu.graduationYear}`,
          }),
        ],
      })
    );
  }

  const doc = new Document({
    sections: [{ properties: {}, children }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, filename);
}
