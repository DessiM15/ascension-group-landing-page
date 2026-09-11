import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: string; description?: string; align?: "left" | "center"; className?: string };

export function SectionHeader({ eyebrow, title, description, align = "left", className = "" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-display mt-5 text-[clamp(1.5rem,3.4vw,2.75rem)]">{title}</h2>
      {description ? <p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">{description}</p> : null}
    </Reveal>
  );
}
