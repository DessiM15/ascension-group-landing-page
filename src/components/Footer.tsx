import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logos/logo-gold-full.png" alt={site.name} width={220} height={194} className="h-auto w-44 md:w-52" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-silver-2">{site.description}</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-display text-[10px] uppercase tracking-[0.3em] text-silver transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-silver">
              <li>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-gold">{site.contact.email}</a>
              </li>
              <li>{site.location.label}</li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                  Instagram {site.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-[9px] uppercase tracking-[0.3em] text-silver-2">{site.tagline}</p>
          <p className="text-xs text-silver-2">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
        <p className="mt-6 text-center text-xs text-silver-2 md:text-left">
          This website was built by{" "}
          <a href="https://smartscaleagent.com/" target="_blank" rel="noopener noreferrer" className="text-silver transition-colors hover:text-gold">
            Smart Scale, LLC
          </a>
        </p>
      </div>
    </footer>
  );
}
