import type { Metadata } from "next";
import Image from "next/image";
import { founders } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Meet the Founders",
  description: `Meet the founders of ${site.name}: the performance coach and athlete advisor behind Houston athletes signing professional contracts.`,
  alternates: { canonical: "/founders" },
  openGraph: { title: `Meet the Founders | ${site.name}`, images: ["/images/og-founders.jpg"] },
};

export default function FoundersPage() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden pt-20">
        <Image
          src="/images/founders-hero.jpg"
          alt="The founders of Ascension Athlete Group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-black/30" />
        <div className="container-x relative z-10 pb-16 md:pb-24">
          <Reveal>
            <p className="eyebrow">Meet the founders</p>
            <h1 className="h-display mt-5 max-w-3xl text-[clamp(1.8rem,4.6vw,4rem)]">The coaches in your corner.</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">
              Two founders. One standard. Performance on the field and a pathway off it, built for athletes chasing the professional level.
            </p>
          </Reveal>
        </div>
      </section>

      {founders.map((c, i) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-20 border-t border-white/10">
          <div className={`grid lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal y={0} className="relative min-h-[520px] lg:col-span-5 lg:min-h-[820px]">
              <Image
                src={c.image}
                alt={`${c.name}, ${c.role}`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 lg:hidden">
                <p className="eyebrow">0{i + 1}</p>
              </div>
            </Reveal>

            <div className="flex items-center lg:col-span-7">
              <Reveal className="w-full px-5 py-16 sm:px-10 md:px-14 lg:px-20 lg:py-28" delay={0.1}>
                <p className="eyebrow">0{i + 1} &nbsp;&middot;&nbsp; {c.role}</p>
                <h2 className="h-display mt-5 text-[clamp(1.6rem,3.6vw,3rem)]">{c.name}</h2>
                <p className="mt-4 text-lg text-gold">{c.short}</p>
                <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-silver md:text-lg">
                  {c.bio.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                <div className="mt-10">
                  <p className="eyebrow text-silver-2">Focus</p>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {c.focus.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-bone">
                        <span className="h-px w-5 bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/10 bg-ink-2">
        <div className="container-x flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-28">
          <Reveal>
            <p className="eyebrow">Work with us</p>
            <h2 className="h-display mt-5 text-[clamp(1.5rem,3.4vw,2.75rem)]">Ready for the next level?</h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row">
            <CtaLink interest="consultation" className="btn btn-gold">Book a Consultation</CtaLink>
            <CtaLink href="/#services" className="btn btn-outline">Explore Services</CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
