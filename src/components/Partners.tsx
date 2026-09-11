import { partners } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Partners"
          title="The right team around the athlete."
          description="Attorneys, financial advisors, business professionals, performance trainers, agents and branding partners. We help athletes build the professional team that turns opportunity into a career."
        />

        <Reveal delay={0.1} className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div key={p.name} className="group flex min-h-[150px] flex-col justify-between gap-8 bg-ink p-7 transition-colors duration-500 hover:bg-ink-3">
              <span className="eyebrow text-silver-2 transition-colors group-hover:text-gold">{p.category}</span>
              <span className="font-display text-base uppercase leading-relaxed tracking-[0.18em] text-silver transition-colors group-hover:text-bone md:text-lg">
                {p.name}
              </span>
            </div>
          ))}
        </Reveal>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-silver-2">Partner network shown as placeholders pending confirmation.</p>
      </div>
    </section>
  );
}
