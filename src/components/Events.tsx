import Image from "next/image";
import { event } from "@/lib/content";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function Events() {
  return (
    <section id="events" className="scroll-mt-20 border-t border-white/10">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative min-h-[420px] lg:min-h-[720px]" y={0}>
          <Image
            src={event.image}
            alt="A group of athletes training together on the field"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/40" />
          <div className="absolute left-6 top-6 md:left-10 md:top-10">
            <p className="eyebrow">{event.eyebrow}</p>
          </div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-bone">{event.location}</p>
          </div>
        </Reveal>

        <div className="flex items-center bg-ink-2 lg:border-l lg:border-white/10">
          <Reveal className="w-full px-5 py-16 sm:px-10 md:px-14 lg:px-16 lg:py-24" delay={0.1}>
            <p className="eyebrow">Register your spot</p>
            <h2 className="h-display mt-5 text-[clamp(1.6rem,3.6vw,3rem)]">{event.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-silver md:text-lg">{event.description}</p>

            <dl className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {event.details.map((d) => (
                <div key={d.label} className="bg-ink-2 p-5">
                  <dt className="eyebrow text-silver-2">{d.label}</dt>
                  <dd className="font-display mt-3 text-[11px] uppercase leading-relaxed tracking-[0.12em] text-bone">{d.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm text-silver-2">For: {event.audience}.</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaLink interest={`event: ${event.title}`} className="btn btn-gold">
                Register Now
              </CtaLink>
              <CtaLink interest={`question about ${event.title}`} className="btn btn-outline">
                Ask a question
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
