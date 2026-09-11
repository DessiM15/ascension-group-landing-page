"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { CtaLink } from "./CtaLink";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = pathname === "/" && !scrolled && !open;
  const solid = scrolled || open || pathname !== "/";

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-white/10 bg-ink/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      } ${onHero ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
      aria-hidden={onHero}
    >
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
          <CtaLink interest="consultation" className="btn btn-gold btn-sm hidden md:inline-flex">
            Book Now
          </CtaLink>
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute h-px w-6 bg-bone transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-6 bg-bone transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-6 bg-bone transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

    </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-20 z-[45] bg-ink transition-opacity duration-300 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col justify-between py-10">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-white/10 py-5 transition-colors hover:text-gold"
              >
                <span className="h-display text-2xl">{item.label}</span>
                <span className="eyebrow text-silver-2">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-6">
            <CtaLink interest="consultation" className="btn btn-gold w-full">
              Book a Consultation
            </CtaLink>
            <p className="eyebrow text-silver-2">{site.location.label}</p>
          </div>
        </div>
      </div>
    </>
  );
}
