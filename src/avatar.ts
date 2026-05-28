/**
 * Ảnh đại diện CV — hướng dẫn: public/avatar/huongdan.md
 */
export type AvatarObjectFit = "cover" | "contain";

export interface AvatarSettings {
  /** Bật/tắt hiển thị ảnh trên CV */
  enabled: boolean;
  /** Đường dẫn từ thư mục public/ (file: public/avatar/avatar.jpg) */
  src: string;
  alt: string;
  objectFit: AvatarObjectFit;
  /** Không in ảnh khi xuất PDF/In */
  hideInPrint: boolean;
}

export const AVATAR_PATH = "/avatar/avatar.jpg";

export const avatar: AvatarSettings = {
  enabled: true,
  src: AVATAR_PATH,
  alt: "Ảnh đại diện chuyên nghiệp",
  objectFit: "cover",
  hideInPrint: false,
};

export function resolveAvatarSrc(resumeAvatar?: string): string {
  if (!avatar.enabled) return "";
  if (avatar.src.trim()) return avatar.src;
  if (resumeAvatar?.trim()) return resumeAvatar.trim();
  return AVATAR_PATH;
}
