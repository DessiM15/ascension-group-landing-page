import Image from "next/image";
import { services } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="container-x mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Our ecosystem"
          title="Three divisions. One mission."
          description="Elite performance training, career advisory and a talent network. We do not simply train athletes. We help build careers."
        />
        <Reveal delay={0.1}>
          <CtaLink interest="services" className="btn btn-outline">
            Enquire about training
          </CtaLink>
        </Reveal>
      </div>

      <div className="border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((s, i) => (
            <CtaLink
              key={s.index}
              interest={s.title}
              ariaLabel={`${s.title}: enquire`}
              className={`group relative block aspect-[4/5] overflow-hidden border-white/10 md:aspect-auto md:h-[76vh] md:min-h-[560px] ${
                i < services.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                style={{ objectPosition: s.focus ?? "center" }}
                className="object-cover brightness-[0.45] grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-90 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-700 group-hover:opacity-80" />

              <div className="absolute left-0 top-0 p-6 md:p-8">
                <span className="eyebrow">{s.index} &nbsp;&middot;&nbsp; {s.division}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="h-display text-[clamp(1.1rem,1.6vw,1.45rem)]">{s.title}</h3>
                <p className="mt-3 text-sm text-gold">{s.short}</p>
                <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="mt-4 text-sm leading-relaxed text-silver">{s.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-xs text-bone/80">
                          <span className="h-px w-4 bg-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="eyebrow mt-6 inline-flex items-center gap-3 text-bone transition-colors group-hover:text-gold">
                  Enquire <span className="block h-px w-8 bg-current transition-all group-hover:w-12" />
                </span>
              </div>
            </CtaLink>
          ))}
        </div>
      </div>
    </section>
  );
}
