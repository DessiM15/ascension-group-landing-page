import Image from "next/image";
import { whyChoose } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="h-display mt-5 text-[clamp(1.5rem,3.4vw,2.75rem)]">
              We do not simply train athletes.
              <br />
              <span className="text-gold">We help build careers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-silver md:text-lg">
            <p>
              Ascension Athlete Group is an athlete development company dedicated to helping athletes maximize their potential throughout
              every stage of their careers. We bridge the gap between athletic performance and career success by combining elite sports
              performance training, professional mentorship, recruiting guidance, strategic partnerships and industry connections.
            </p>
            <p>
              True development goes beyond performance metrics. We believe that building relationships, knowledge and character creates
              lasting success both on and off the field, so our athletes are prepared for every opportunity that comes their way.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 border-l border-gold pl-6">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-bone md:text-xl">
              Developing athletes physically, professionally and personally through elite performance training, career advisory and
              strategic connections that maximize opportunities on and off the field.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/sideline-huddle.jpg"
              alt="Coach K on the sideline reviewing a play with his athletes"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[35%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
              <p className="eyebrow">Sideline. Game day.</p>
              <Image src="/logos/logo-white-mark.png" alt="" width={28} height={30} className="opacity-80" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-gold/40 lg:block" aria-hidden="true" />
        </Reveal>
      </div>

      <div className="container-x mt-24">
        <Reveal>
          <p className="eyebrow">Why athletes choose Ascension</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-silver md:text-lg">
            Athletes and families trust us because we deliver more than training. We provide a complete support system focused on
            elevation, mentorship and real development that prepares athletes for success at every level.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.07} className="group bg-ink p-7 transition-colors duration-500 hover:bg-ink-3">
              <span className="eyebrow text-silver-2 transition-colors group-hover:text-gold">0{i + 1}</span>
              <h3 className="font-display mt-6 text-xs uppercase leading-relaxed tracking-[0.15em] text-bone">{w.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-silver">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
