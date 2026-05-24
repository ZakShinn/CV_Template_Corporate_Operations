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

export const DEFAULT_AVATAR_SRC = "/avatar-placeholder.svg";

export const avatarConfig: AvatarConfig = {
  enabled: true,
  src: DEFAULT_AVATAR_SRC,
  alt: "Ảnh đại diện chuyên nghiệp — thay bằng ảnh của bạn",
  objectFit: "cover",
  hideInPrint: false,
};

export function resolveAvatarSrc(resumeAvatar?: string): string {
  if (!avatarConfig.enabled) return "";
  if (avatarConfig.src.trim()) return avatarConfig.src;
  if (resumeAvatar?.trim()) return resumeAvatar.trim();
  return DEFAULT_AVATAR_SRC;
}
