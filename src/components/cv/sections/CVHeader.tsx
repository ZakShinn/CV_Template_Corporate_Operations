"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { avatarConfig, resolveAvatarSrc } from "@/avatar/config";
import { t } from "@/config/i18n";
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
  const avatarAlt = avatarConfig.alt || `${personal.fullName} professional photo`;

  const links = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: contact.location, href: undefined },
    contact.linkedin && {
      icon: Linkedin,
      label: contact.linkedin.replace(/^https?:\/\//, ""),
      href: ensureUrl(contact.linkedin),
    },
    contact.github && {
      icon: Github,
      label: contact.github.replace(/^https?:\/\//, ""),
      href: ensureUrl(contact.github),
    },
    contact.portfolio && {
      icon: Globe,
      label: contact.portfolio.replace(/^https?:\/\//, ""),
      href: ensureUrl(contact.portfolio),
    },
  ].filter(Boolean) as { icon: typeof Mail; label: string; href?: string }[];

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
      <div
        className={cn("absolute top-0 left-0 right-0 h-1", colors.bar)}
        aria-hidden
      />
      <div
        className={cn(
          "flex gap-6 pt-3",
          isExecutive ? "flex-col items-center text-center" : "flex-row items-start"
        )}
      >
        {avatarSrc && (
          <div
            className={cn(
              "relative shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800",
              isExecutive ? "h-24 w-24" : "h-20 w-20",
              isMinimal && "rounded-full",
              avatarConfig.hideInPrint && "no-print"
            )}
          >
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              className="object-cover"
              style={{ objectFit: avatarConfig.objectFit }}
              priority
              unoptimized={avatarSrc.endsWith(".svg")}
            />
          </div>
        )}

        <div className={cn("flex-1 min-w-0", isExecutive && "w-full")}>
          <h1
            className={cn(
              "font-semibold tracking-tight text-slate-900 dark:text-slate-50",
              isExecutive ? "text-2xl" : "text-xl sm:text-2xl"
            )}
            itemProp="name"
          >
            {personal.fullName}
          </h1>
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

          <ul
            className={cn(
              "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400",
              isExecutive && "justify-center"
            )}
            aria-label={t(settings.locale, "contactInfo")}
          >
            {links.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-1.5 min-w-0">
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
