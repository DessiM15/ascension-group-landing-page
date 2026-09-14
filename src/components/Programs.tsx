"use client";

import { useState } from "react";
import { programs, showPricing } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function Programs() {
  const [active, setActive] = useState(programs[0].key);
  const program = programs.find((p) => p.key === active) ?? programs[0];
  const columns = program.packages.length >= 3 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2";

  return (
    <section id="partnerships" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Partnerships"
            title="Partner with Ascension."
            description="Partnership packages for agencies and for the professionals who serve athletes. Choose the level that fits how you want to work with us."
          />
          <Reveal delay={0.1}>
            <div role="tablist" aria-label="Partnership type" className="flex border border-white/15">
              {programs.map((p) => (
                <button
                  key={p.key}
                  role="tab"
                  type="button"
                  aria-selected={active === p.key}
                  onClick={() => setActive(p.key)}
                  className={`font-display px-5 py-4 text-[10px] uppercase tracking-[0.3em] transition-colors sm:px-6 ${
                    active === p.key ? "bg-gold text-ink" : "text-silver hover:text-bone"
                  }`}
                >
                  <span className="sm:hidden">{p.short}</span>
                  <span className="hidden sm:inline">{p.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal key={`${program.key}-intro`} className="mt-12 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h3 className="h-display text-[clamp(1.1rem,1.8vw,1.5rem)]">{program.label}</h3>
          <p className="max-w-xl text-sm text-silver">{program.description}</p>
        </Reveal>

        <div key={program.key} className={`mt-8 grid gap-px border border-white/10 bg-white/10 ${columns}`}>
          {program.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.06} className="group flex flex-col bg-ink p-7 transition-colors duration-500 hover:bg-ink-3 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow">{program.short} partnership</p>
                  <h3 className="h-display mt-3 text-xl">{pkg.name}</h3>
                </div>
                <span className="eyebrow text-silver-2">0{i + 1}</span>
              </div>
              {showPricing ? (
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl text-bone">{pkg.price}</span>
                  {pkg.cadence ? <span className="text-xs uppercase tracking-[0.2em] text-silver-2">{pkg.cadence}</span> : null}
                </p>
              ) : (
                <p className="mt-6 font-display text-[10px] uppercase tracking-[0.3em] text-silver-2">Inquire for pricing</p>
              )}
              <div className="rule-gold my-7" />
              <p className="eyebrow text-silver-2">Includes</p>
              <ul className="mt-4 space-y-2.5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-snug text-silver">
                    <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <CtaLink interest={`${program.label}: ${pkg.name}`} className="btn btn-outline w-full">
                  Enquire
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
