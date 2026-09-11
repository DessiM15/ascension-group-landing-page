import Image from "next/image";
import { placements } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Placements() {
  const row = [...placements, ...placements, ...placements, ...placements];
  return (
    <section id="results" className="scroll-mt-20 py-20 md:py-24">
      <Reveal className="container-x flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Results</p>
          <h2 className="h-display mt-5 text-[clamp(1.5rem,3.4vw,2.75rem)]">Our athletes are signing.</h2>
        </div>
        <p className="eyebrow text-silver-2">Athletes placed with</p>
      </Reveal>

      <div className="marquee mt-12 overflow-hidden border-y border-white/10 py-10" role="list" aria-label="Teams our athletes have signed with">
        <div className="marquee-track items-center">
          {row.map((p, i) => (
            <div key={`${p.team}-${i}`} role={i < placements.length ? "listitem" : undefined} className="group flex w-[260px] flex-col items-center gap-5 px-8 sm:w-[320px]">
              <div className="flex h-20 items-center justify-center">
                <Image
                  src={p.logo}
                  alt={`${p.team} logo`}
                  width={p.width}
                  height={p.height}
                  className="max-h-20 w-auto opacity-80 brightness-125 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100 group-hover:grayscale-0"
                />
              </div>
              <div className="text-center">
                <p className="font-display text-[10px] uppercase tracking-[0.3em] text-silver transition-colors group-hover:text-bone">{p.team}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-silver-2">{p.athlete}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
