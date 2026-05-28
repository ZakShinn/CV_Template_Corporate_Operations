"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Calendar,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { avatar, resolveAvatarSrc } from "@/avatar";
import { t } from "@/config";
import { cn, ensureUrl, accentClasses } from "@/lib/utils";
import type { PersonalInfo, CVSettings } from "@/types/resume";

interface CVHeaderProps {
  personal: PersonalInfo;
  settings: CVSettings;
  contactUrl?: string;
}

export function CVHeader({ personal, settings, contactUrl }: CVHeaderProps) {
  const { theme, accent, variant, showQRCode } = settings;
  const colors = accentClasses(accent, theme);
  const { contact } = personal;
  const avatarSrc = resolveAvatarSrc(personal.avatar);
  const avatarAlt =
    avatar.alt || `${personal.fullName || "CV"} professional photo`;

  const links: { icon: typeof Mail; label: string; href?: string }[] = [];

  if (contact.email?.trim()) {
    links.push({
      icon: Mail,
      label: contact.email.trim(),
      href: `mailto:${contact.email.trim()}`,
    });
  }
  if (contact.phone?.trim()) {
    links.push({
      icon: Phone,
      label: contact.phone.trim(),
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    });
  }
  if (contact.dateOfBirth?.trim()) {
    links.push({
      icon: Calendar,
      label: contact.dateOfBirth.trim(),
    });
  }
  if (contact.location?.trim()) {
    links.push({ icon: MapPin, label: contact.location.trim() });
  }
  if (contact.linkedin?.trim()) {
    links.push({
      icon: Linkedin,
      label: contact.linkedin.replace(/^https?:\/\//, "").trim(),
      href: ensureUrl(contact.linkedin),
    });
  }
  if (contact.github?.trim()) {
    links.push({
      icon: Github,
      label: contact.github.replace(/^https?:\/\//, "").trim(),
      href: ensureUrl(contact.github),
    });
  }
  if (contact.facebook?.trim()) {
    links.push({
      icon: Facebook,
      label: "Facebook",
      href: ensureUrl(contact.facebook),
    });
  }
  if (contact.zalo?.trim()) {
    links.push({
      icon: MessageCircle,
      label: contact.zalo.replace(/^https?:\/\//, "").trim(),
      href: ensureUrl(contact.zalo),
    });
  }
  if (contact.portfolio?.trim()) {
    links.push({
      icon: Globe,
      label: contact.portfolio.replace(/^https?:\/\//, "").trim(),
      href: ensureUrl(contact.portfolio),
    });
  }

  const isExecutive = variant === "executive";
  const isMinimal = variant === "minimal";

  return (
    <header
      className={cn(
        "cv-section relative border-b pb-6 mb-6 overflow-hidden pt-1",
        theme === "dark" ? "border-corporate-border-dark" : "border-corporate-border"
      )}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className={cn("absolute top-0 left-0 right-0 h-1", colors.bar)} aria-hidden />
      <div
        className={cn(
          "flex gap-6 pt-3",
          isExecutive ? "flex-col items-center text-center" : "flex-row items-start"
        )}
      >
        {avatar.enabled && avatarSrc && (
          <div
            className={cn(
              "relative shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800",
              isExecutive ? "h-24 w-24" : "h-20 w-20",
              isMinimal && "rounded-full",
              avatar.hideInPrint && "no-print"
            )}
          >
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              className="object-cover"
              style={{ objectFit: avatar.objectFit }}
              priority
              unoptimized={avatarSrc.endsWith(".svg")}
            />
          </div>
        )}

        <div className={cn("flex-1 min-w-0", isExecutive && "w-full")}>
          {personal.fullName ? (
            <h1
              className={cn(
                "font-semibold tracking-tight text-slate-900 dark:text-slate-50",
                isExecutive ? "text-2xl" : "text-xl sm:text-2xl"
              )}
              itemProp="name"
            >
              {personal.fullName}
            </h1>
          ) : null}
          {personal.jobTitle ? (
            <p
              className={cn(
                "mt-1 font-medium",
                colors.text,
                isExecutive ? "text-base" : "text-sm"
              )}
              itemProp="jobTitle"
            >
              {personal.jobTitle}
            </p>
          ) : null}
          {personal.tagline ? (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{personal.tagline}</p>
          ) : null}

          {links.length > 0 && (
            <ul
              className={cn(
                "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400",
                isExecutive && "justify-center"
              )}
              aria-label={t(settings.locale, "contactInfo")}
            >
              {links.map(({ icon: Icon, label, href }) => (
                <li key={`${Icon.name}-${label}`} className="flex items-center gap-1.5 min-w-0">
                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
                  {href ? (
                    <a
                      href={href}
                      className="truncate hover:underline transition-opacity hover:opacity-80"
                      itemProp={Icon === Mail ? "email" : undefined}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="truncate" itemProp="address">
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {showQRCode && contactUrl && (
          <div className="hidden sm:flex flex-col items-center gap-1 shrink-0 no-print">
            <QRCodeSVG
              value={contactUrl}
              size={64}
              level="M"
              className="rounded border border-slate-200 dark:border-slate-600 p-1 bg-white"
            />
            <span className="text-[10px] text-slate-400 uppercase tracking-wide">
              {t(settings.locale, "scanQr")}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
