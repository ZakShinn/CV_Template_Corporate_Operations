"use client";

import type { ReactNode } from "react";

interface OneColumnLayoutProps {
  children: ReactNode;
}

export function OneColumnLayout({ children }: OneColumnLayoutProps) {
  return <div className="flex flex-col gap-0">{children}</div>;
}
