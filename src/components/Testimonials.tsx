"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

const AUTO_MS = 10000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = testimonials[index];

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section
      className="container-x py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Client testimonials"
    >
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Client testimonials</p>
          <h2 className="h-display mt-5 text-[clamp(1.5rem,3vw,2.4rem)]">In their words.</h2>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-display text-[11px] tracking-[0.3em] text-silver-2">
            0{index + 1} <span className="mx-1 text-white/30">/</span> 0{testimonials.length}
          </span>
          <div className="flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center border border-white/20 text-bone transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="-ml-px flex h-12 w-12 items-center justify-center border border-white/20 text-bone transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>

      <div className="relative mt-12 min-h-[420px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={t.name}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 border border-white/10 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
          >
            <div className="relative aspect-square w-full lg:col-span-5">
              <Image
                src={t.image}
                alt={`${t.name} testimonial graphic`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center lg:col-span-7">
              <span className="font-display block select-none text-6xl leading-[0.55] text-gold/40" aria-hidden="true">&ldquo;</span>
              <blockquote className="mt-2 text-base font-light leading-relaxed text-bone md:text-lg md:leading-relaxed xl:text-xl xl:leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-5">
                <span className="block h-px w-10 bg-gold" />
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-bone">{t.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-silver-2">Signed, {t.team}</p>
                </div>
              </figcaption>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>
    </section>
  );
}
