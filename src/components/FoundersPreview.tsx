import Image from "next/image";
import Link from "next/link";
import { founders } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function FoundersPreview() {
  return (
    <section className="container-x border-t border-white/10 py-24 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow="The founders" title="The coaches in your corner." />
        <Reveal delay={0.1}>
          <Link href="/founders" className="btn btn-outline">
            Meet the founders
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
        {founders.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1} className="group bg-ink">
            <Link href={`/founders#${c.slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.name}, ${c.role}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              </div>
              <div className="flex items-end justify-between p-6 md:p-8">
                <div>
                  <p className="h-display text-lg">{c.name}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold">{c.role}</p>
                </div>
                <span className="eyebrow text-silver-2 transition-colors group-hover:text-gold">Read bio</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
