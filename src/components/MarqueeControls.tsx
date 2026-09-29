"use client";

import { useState } from "react";

type Props = { label: string; className?: string };

/**
 * Pause and play button for a marquee. Toggles data-paused on the nearest .marquee ancestor,
 * which globals.css turns into animation-play-state: paused. Works with server-rendered marquees.
 */
export function MarqueeControls({ label, className = "" }: Props) {
  const [paused, setPaused] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={paused}
      aria-label={paused ? `Play ${label}` : `Pause ${label}`}
      onClick={(e) => {
        const next = !paused;
        setPaused(next);
        const marquee = e.currentTarget.closest<HTMLElement>("[data-marquee]") ?? e.currentTarget.parentElement?.querySelector<HTMLElement>(".marquee");
        marquee?.setAttribute("data-paused", String(next));
      }}
      className={`icon-btn h-10 w-10 ${className}`}
    >
      {paused ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M3 1l8 5-8 5z" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <rect x="2" y="1" width="3" height="10" />
          <rect x="7" y="1" width="3" height="10" />
        </svg>
      )}
    </button>
  );
}
