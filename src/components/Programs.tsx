"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { programs, showPricing } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { CtaLink, TAB_EVENT, TAB_KEY } from "./CtaLink";
import { Reveal } from "./Reveal";

const keys = programs.map((p) => p.key);

export function Programs() {
  const [active, setActive] = useState(programs[0].key);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const program = programs.find((p) => p.key === active) ?? programs[0];
  const columns = program.packages.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : program.packages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  // Division tiles and other links can preselect a tab (see CtaLink).
  useEffect(() => {
    const pick = (raw: string | null) => {
      if (raw && keys.includes(raw)) setActive(raw);
    };
    try {
      pick(sessionStorage.getItem(TAB_KEY));
      sessionStorage.removeItem(TAB_KEY);
    } catch {}
    const onTab = (e: Event) => pick((e as CustomEvent<string>).detail);
    window.addEventListener(TAB_EVENT, onTab);
    return () => window.removeEventListener(TAB_EVENT, onTab);
  }, []);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const last = programs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(programs[next].key);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="packages" className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Packages"
            title="Choose your level."
            description="Performance training and career advisory for athletes, and partner packages for the professionals who serve them. Every package starts with a consultation."
          />
          <Reveal delay={0.1}>
            <div role="tablist" aria-label="Package type" className="flex flex-col border border-white/15 min-[420px]:flex-row">
              {programs.map((p, i) => {
                const selected = active === p.key;
                return (
                  <button
                    key={p.key}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`packages-tab-${p.key}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`packages-panel-${p.key}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(p.key)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`font-display px-4 py-4 text-[10px] uppercase tracking-[0.3em] transition-colors min-[420px]:px-5 sm:px-6 ${
                      selected ? "bg-gold text-ink" : "text-silver hover:text-bone"
                    }`}
                  >
                    <span className="sm:hidden">{p.short}</span>
                    <span className="hidden sm:inline">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div key={program.key} id={`packages-panel-${program.key}`} role="tabpanel" aria-labelledby={`packages-tab-${program.key}`}>
          <Reveal className="mt-12 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <h3 className="h-display text-[clamp(1.1rem,1.8vw,1.5rem)]">{program.label}</h3>
            <p className="max-w-xl text-sm text-silver">{program.description}</p>
          </Reveal>

          <div className={`mt-8 grid gap-px border border-white/10 bg-white/10 ${columns}`}>
            {program.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.06} className="group flex flex-col bg-ink p-7 transition-colors duration-500 hover:bg-ink-3 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{pkg.tier ?? `${program.short} package`}</p>
                    <h4 className="h-display mt-3 text-xl">{pkg.name}</h4>
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
                      <span className="mt-2 h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.ideal ? (
                  <>
                    <p className="eyebrow mt-8 text-silver-2">Ideal for</p>
                    <ul className="mt-4 space-y-1.5">
                      {pkg.ideal.map((item) => (
                        <li key={item} className="text-sm leading-snug text-bone/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <div className="mt-auto pt-8">
                  <CtaLink className="btn btn-outline w-full">Enquire</CtaLink>
                </div>
              </Reveal>
            ))}
          </div>

          {program.note ? <p className="mt-6 text-sm text-silver-2">{program.note}</p> : null}
        </div>
      </div>
    </section>
  );
}
