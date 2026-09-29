import { MarqueeControls } from "./MarqueeControls";

const items = ["Performance Training", "Athlete Advisory", "Film and Scouting Profile", "Pro Pathway", "Houston, Texas", "Developing Athletes Beyond The Game"];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div data-marquee className="marquee relative border-y border-white/10 bg-ink">
      <div className="overflow-hidden py-4" aria-hidden="true">
        <div className="marquee-track slow">
          {row.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display px-8 text-[10px] uppercase tracking-[0.35em] text-silver-2">{item}</span>
              <span className="block h-1.5 w-1.5 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-ink via-ink to-transparent pl-10 pr-3 sm:pr-6">
        <MarqueeControls label="ticker" />
      </div>
    </div>
  );
}
