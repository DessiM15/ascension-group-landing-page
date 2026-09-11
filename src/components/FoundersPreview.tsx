import Image from "next/image";
import Link from "next/link";
import { founders } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FoundersPreview() {
  return (
    <section className="container-x border-t border-white/10 py-16 md:py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">The founders</p>
          <h2 className="h-display mt-4 text-[clamp(1.4rem,3vw,2.4rem)]">The coaches in your corner.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href="/founders" className="btn btn-outline">
            Meet the founders
          </Link>
        </Reveal>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
        {founders.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1} className="group bg-ink">
            <Link href={`/founders#${c.slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/2] lg:aspect-[2/1]">
                <Image
                  src={c.image}
                  alt={`${c.name}, ${c.role}`}
                  fill
                  sizes="50vw"
                  className="object-cover object-[center_20%] grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-6">
                <div>
                  <p className="h-display text-sm sm:text-base">{c.name}</p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-gold sm:text-[10px]">{c.role}</p>
                </div>
                <span className="eyebrow hidden text-silver-2 transition-colors group-hover:text-gold sm:inline">Read bio</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
