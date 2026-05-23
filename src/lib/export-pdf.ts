import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

/** A4 dimensions in mm */
const A4_WIDTH = 210;
const A4_HEIGHT = 297;

/**
 * Export CV element to PDF with selectable text fallback via print.
 * Primary: html2canvas + jsPDF for visual fidelity.
 * ATS tip: use browser Print → Save as PDF for pure text layer.
 */
export async function exportToPDF(
  element: HTMLElement,
  filename = "corporate-operations-cv.pdf"
): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: getComputedStyle(element).backgroundColor || "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const imgWidth = A4_WIDTH;
  const pageHeight = A4_HEIGHT;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
}

export function printCV(): void {
  window.print();
}
