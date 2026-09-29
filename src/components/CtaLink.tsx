"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  /** Preselects a tab in the Packages section when the link lands on /#packages. */
  tab?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export const TAB_EVENT = "aag:tab";
export const TAB_KEY = "aag:tab";

export function CtaLink({ href = "/#contact", tab, className, children, ariaLabel }: Props) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (!tab) return;
        try {
          sessionStorage.setItem(TAB_KEY, tab);
        } catch {}
        window.dispatchEvent(new CustomEvent(TAB_EVENT, { detail: tab }));
      }}
    >
      {children}
    </Link>
  );
}
