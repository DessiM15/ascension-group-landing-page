"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  interest?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

/** Link to the contact form that also records what the visitor is interested in. */
export function CtaLink({ href = "/#contact", interest, className, children, ariaLabel }: Props) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (!interest) return;
        try {
          sessionStorage.setItem("aag:interest", interest);
        } catch {}
        window.dispatchEvent(new CustomEvent("aag:interest", { detail: interest }));
      }}
    >
      {children}
    </Link>
  );
}
