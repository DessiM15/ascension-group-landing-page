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
      <section className="relative flex min-h-[48svh] items-end overflow-hidden pt-20">
        <Image
          src="/images/founders-hero.jpg"
          alt="The founders of Ascension Athlete Group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-black/30" />
        <div className="container-x relative z-10 pb-10 md:pb-14">
          <Reveal>
            <p className="eyebrow">Meet the founders</p>
            <h1 className="h-display mt-4 max-w-3xl text-[clamp(1.6rem,4vw,3.4rem)]">The coaches in your corner.</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-silver md:text-base">
              Two founders. One standard. Performance on the field and a pathway off it, built for athletes chasing the professional level.
            </p>
          </Reveal>
        </div>
      </section>

      {founders.map((c, i) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-20 border-t border-white/10">
          <div className="container-x py-10 md:py-14">
            <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal y={0} className="flex justify-center lg:col-span-4 lg:justify-start">
                <Image
                  src={c.image}
                  alt={`${c.name}, ${c.role}`}
                  width={c.width}
                  height={c.height}
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="h-auto w-full max-w-[360px] lg:h-[58vh] lg:w-auto lg:max-w-none"
                />
              </Reveal>

              <Reveal className="lg:col-span-8" delay={0.1}>
                <p className="eyebrow">0{i + 1} &nbsp;&middot;&nbsp; {c.role}</p>
                <h2 className="h-display mt-4 text-[clamp(1.5rem,3vw,2.6rem)]">{c.name}</h2>
                <p className="mt-3 text-base text-gold">{c.short}</p>
                <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-silver md:text-base">
                  {c.bio.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                <div className="mt-7">
                  <p className="eyebrow text-silver-2">Focus</p>
                  <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
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
        <div className="container-x flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
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
