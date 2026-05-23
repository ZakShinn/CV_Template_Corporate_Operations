/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH ẢNH ĐẠI DIỆN — chỉnh tại file này
 *  Hướng dẫn: src/avatar/HUONG_DAN_ANH_DAI_DIEN.md
 * ═══════════════════════════════════════════════════════════════
 */

export type AvatarObjectFit = "cover" | "contain";

export interface AvatarConfig {
  enabled: boolean;
  /** Đường dẫn từ `public/` — ưu tiên hơn `personal.avatar` trong resume */
  src: string;
  alt: string;
  objectFit: AvatarObjectFit;
  hideInPrint: boolean;
}

export const avatarConfig: AvatarConfig = {
  enabled: true,
  src: "/avatar-placeholder.svg",
  alt: "Ảnh đại diện chuyên nghiệp",
  objectFit: "cover",
  hideInPrint: false,
};

export function resolveAvatarSrc(resumeAvatar?: string): string {
  if (avatarConfig.enabled && avatarConfig.src) {
    return avatarConfig.src;
  }
  return resumeAvatar?.trim() ?? "";
}
