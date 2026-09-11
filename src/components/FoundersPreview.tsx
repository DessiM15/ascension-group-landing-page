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
            <Link href={`/founders#${c.slug}`} className="flex h-full flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-end lg:gap-8 lg:p-8">
              <div className="flex shrink-0 items-end justify-center lg:h-[340px]">
                <Image
                  src={c.image}
                  alt={`${c.name}, ${c.role}`}
                  width={c.width}
                  height={c.height}
                  sizes="(min-width: 1024px) 300px, 45vw"
                  className="h-auto w-full grayscale transition-all duration-700 group-hover:grayscale-0 lg:h-full lg:w-auto"
                />
              </div>
              <div className="pb-1">
                <p className="h-display text-sm sm:text-base lg:text-lg">{c.name}</p>
                <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-gold sm:text-[10px]">{c.role}</p>
                <p className="mt-3 hidden text-sm text-silver lg:block">{c.short}</p>
                <span className="eyebrow mt-4 hidden text-silver-2 transition-colors group-hover:text-gold sm:inline-block">Read bio</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
