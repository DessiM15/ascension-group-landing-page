"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CtaLink } from "./CtaLink";
import { site } from "@/lib/site";

const clips = [
  { src: "/video/hero-1.mp4", portrait: "/video/hero-1-portrait.mp4", word: "Game" },
  { src: "/video/hero-2.mp4", portrait: "/video/hero-2-portrait.mp4", word: "Field" },
  { src: "/video/hero-3.mp4", portrait: "/video/hero-3-portrait.mp4", word: "Contract" },
  { src: "/video/hero-4.mp4", portrait: "/video/hero-4-portrait.mp4", word: "Limit" },
];

const CLIP_MS = 6500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [portrait, setPortrait] = useState(false);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const reduce = useReducedMotion();

  // Phone footage is vertical, so phones get the portrait cut and wider screens get the landscape crop.
  useEffect(() => {
    const mq = window.matchMedia("(max-aspect-ratio: 4/5)");
    const update = () => setPortrait(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % clips.length), CLIP_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    const v = refs.current[active];
    if (!v) return;
    try {
      v.currentTime = 0;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {}
  }, [active]);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-ink" aria-label="Introduction">
      {/* Video montage */}
      <div className="absolute inset-0" aria-hidden="true">
        {clips.map((clip, i) => (
          <video
            key={`${clip.src}-${portrait ? "p" : "l"}`}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            poster="/images/sideline-playsheet.jpg"
          >
            <source src={portrait ? clip.portrait : clip.src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/logos/logo-gold-mark.png"
            alt="Ascension Athlete Group emblem"
            width={132}
            height={144}
            priority
            className="h-24 w-auto md:h-32 lg:h-36"
          />
        </motion.div>

        <motion.p
          className="eyebrow mt-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <span className="hidden sm:inline">Elite Performance &nbsp;&middot;&nbsp; Career Advisory &nbsp;&middot;&nbsp; Talent Network</span>
          <span className="text-[9px] tracking-[0.22em] sm:hidden">Performance &nbsp;&middot;&nbsp; Advisory &nbsp;&middot;&nbsp; Network</span>
        </motion.p>

        <motion.h1
          className="h-display mt-6 text-[clamp(1.55rem,4.6vw,4rem)]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <span className="block">Developing athletes</span>
          <span className="block">
            beyond the{" "}
            <span className="relative inline-block overflow-hidden align-bottom text-gold">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={clips[active].word}
                  className="inline-block"
                  initial={reduce ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  {clips[active].word}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-silver md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          On the field, we develop your performance. Off the field, we develop your pathway. Preparation for the opportunity, and the
          position to receive it.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <CtaLink interest="consultation" className="btn btn-gold">
            Book a Consultation
          </CtaLink>
          <CtaLink href="/#services" className="btn btn-outline">
            Explore Services
          </CtaLink>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="container-x absolute inset-x-0 bottom-8 z-10 flex items-end justify-between">
        <div className="flex items-center gap-3" aria-hidden="true">
          {clips.map((c, i) => (
            <button
              key={c.src}
              type="button"
              tabIndex={-1}
              onClick={() => setActive(i)}
              className="group relative h-6 w-8 sm:w-12"
            >
              <span className="absolute inset-x-0 top-1/2 h-px bg-white/25" />
              <span
                className={`absolute inset-x-0 top-1/2 h-px origin-left bg-gold transition-transform ease-linear ${
                  i === active ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transitionDuration: i === active && !reduce ? `${CLIP_MS}ms` : "0ms" }}
              />
            </button>
          ))}
          <span className="eyebrow ml-2 text-silver-2">0{active + 1} / 0{clips.length}</span>
        </div>
        <a href="#about" className="eyebrow hidden items-center gap-3 text-silver-2 transition-colors hover:text-gold sm:flex">
          Scroll
          <span className="block h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </a>
      </div>
    </section>
  );
}
