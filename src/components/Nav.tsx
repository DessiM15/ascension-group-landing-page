"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { CtaLink } from "./CtaLink";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Lock scrolling on the root element, not the body: locking the body resets the scroll position to the top.
  useEffect(() => {
    document.documentElement.style.overflowY = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflowY = "";
    };
  }, [open]);

  // Focus management for the mobile menu: into the first link when it opens, back to the toggle when it closes, Escape closes.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      toggle.current?.focus();
    }
  }, [open]);

  const onHero = pathname === "/" && !scrolled && !open;
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`sticky top-0 z-50 -mb-20 h-20 w-full transition-[transform,opacity,background-color,border-color] duration-500 ${
        solid ? "border-b border-white/10 bg-ink md:bg-ink/85 md:backdrop-blur-md" : "border-b border-transparent bg-transparent"
      } ${onHero ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
      aria-hidden={onHero}
      inert={onHero}
    >
      {/* Solid cover above the bar so nothing shows through while mobile browser chrome collapses */}
      <div aria-hidden="true" className={`absolute inset-x-0 bottom-full h-40 ${solid ? "bg-ink" : "bg-transparent"}`} />
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-3">
          <Image src="/logos/logo-gold-mark.png" alt="" width={34} height={37} priority />
          <span className="font-display hidden whitespace-nowrap text-[10px] uppercase tracking-[0.28em] text-bone sm:inline">
            Ascension <span className="text-silver-2">Athlete Group</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[10px] uppercase tracking-[0.3em] text-silver transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CtaLink className="btn btn-gold btn-sm hidden md:inline-flex">Book Now</CtaLink>
          <button
            ref={toggle}
            type="button"
            className="relative flex h-11 w-11 items-center justify-center xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute h-px w-6 bg-bone transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-6 bg-bone transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-6 bg-bone transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu. Lives inside the header landmark. Positioned absolutely below the bar (not fixed) because the header is transformed while sliding in, and a transformed parent breaks fixed descendants. */}
      <div
        ref={panel}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={`absolute inset-x-0 top-full h-[calc(100svh-5rem)] bg-ink transition-opacity duration-300 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col justify-between py-10">
          <nav aria-label="Mobile" className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-white/10 py-5 transition-colors hover:text-gold"
                >
                  <span className="h-display text-2xl">{item.label}</span>
                  <span className="eyebrow text-silver-2" aria-hidden="true">
                    0{i + 1}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <CtaLink className="btn btn-gold w-full">Book a Consultation</CtaLink>
              <p className="eyebrow text-silver-2">{site.location.label}</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
