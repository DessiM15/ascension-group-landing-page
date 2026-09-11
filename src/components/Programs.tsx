"use client";

import { useState } from "react";
import { programs, showPricing } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function Programs() {
  const [active, setActive] = useState(programs[0].key);
  const program = programs.find((p) => p.key === active) ?? programs[0];

  return (
    <section id="programs" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Programs"
            title="Choose your level."
            description="Monthly packages across our Performance and Advisory divisions, from foundation to pro day prep."
          />
          <Reveal delay={0.1}>
            <div role="tablist" aria-label="Program division" className="flex border border-white/15">
              {programs.map((p) => (
                <button
                  key={p.key}
                  role="tab"
                  type="button"
                  aria-selected={active === p.key}
                  onClick={() => setActive(p.key)}
                  className={`font-display px-6 py-4 text-[10px] uppercase tracking-[0.3em] transition-colors ${
                    active === p.key ? "bg-gold text-ink" : "text-silver hover:text-bone"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div key={program.key} className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {program.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.06} className="group flex flex-col bg-ink p-7 transition-colors duration-500 hover:bg-ink-3 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow">{pkg.level}</p>
                  <h3 className="h-display mt-3 text-xl">{pkg.name}</h3>
                </div>
                <span className="eyebrow text-silver-2">0{i + 1}</span>
              </div>
              {showPricing ? (
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl text-bone">{pkg.price}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-silver-2">per month</span>
                </p>
              ) : null}
              <div className="rule-gold my-7" />
              <ul className="space-y-2.5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-snug text-silver">
                    <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <p className="eyebrow text-silver-2">Ideal for</p>
                <p className="mt-2 text-sm text-bone/80">{pkg.idealFor.join(", ")}</p>
                <CtaLink interest={`${program.label} package: ${pkg.name}`} className="btn btn-outline mt-7 w-full">
                  Enquire
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>
        {program.note ? <p className="mt-6 text-xs uppercase tracking-[0.2em] text-silver-2">{program.note}</p> : null}
      </div>
    </section>
  );
}
