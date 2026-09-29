import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Accessibility",
  description: `How ${site.name} works to keep this website usable for everyone, and how to tell us when something is not.`,
  alternates: { canonical: "/accessibility" },
};

const updated = "September 28, 2026";

const done = [
  "A skip link that jumps straight to the main content on every page.",
  "A visible gold focus outline on every link, button, tab and form control.",
  "The hidden header and the closed mobile menu are removed from the keyboard order, and the menu opens as a dialog that returns focus when it closes.",
  "Pause controls for the background video in the introduction, the scrolling text strip and the scrolling team logos.",
  "The background video does not play, and nothing scrolls on its own, when your device asks for reduced motion.",
  "Every image has a text alternative, and images that repeat text already on the page are marked decorative.",
  "Links that open a new tab say so to screen readers.",
  "Headings, lists and landmarks are marked up so screen readers can move through the page by structure.",
  "The pages reflow to a single column at 400 percent zoom without sideways scrolling.",
];

const limits = [
  "The assessment and intake form is hosted by Google Forms and embedded on the contact section. Its accessibility is controlled by Google. If the embedded form is hard to use, the link above it opens the same form as a full page, and you can also email us your details instead.",
  "The introduction uses video footage with no dialogue, so no captions are provided. The words on screen are real text, not part of the video.",
  "Testimonial graphics are supplied by the athletes. Their quote is repeated as real text beside each graphic.",
];

export default function AccessibilityPage() {
  return (
    <section className="border-t border-white/10 pt-28 md:pt-36">
      <div className="container-x pb-24 md:pb-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Accessibility</p>
          <h1 className="h-display mt-5 text-[clamp(1.6rem,4vw,3.2rem)]">Built for every athlete.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">
            {site.name} wants everyone to be able to use this website, whatever device, browser or assistive technology they use. This
            page describes the standard we work to, what has been done, and how to reach us when something gets in your way.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-silver-2">Last updated {updated}</p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <h2 className="h-display text-lg">Our standard</h2>
            <p className="mt-5 text-sm leading-relaxed text-silver">
              This site is built to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. We do not describe the site as
              certified or fully compliant. Accessibility is ongoing work, and we review the site whenever content or code changes.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={0.05}>
            <h2 className="h-display text-lg">What we have done</h2>
            <ul className="mt-5 space-y-3">
              {done.map((item) => (
                <li key={item} className="relative pl-8 text-sm leading-relaxed text-silver before:absolute before:left-0 before:top-2.5 before:h-px before:w-5 before:bg-gold">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.05}>
            <h2 className="h-display text-lg">Known limitations</h2>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <ul className="space-y-3">
              {limits.map((item) => (
                <li key={item} className="relative pl-8 text-sm leading-relaxed text-silver before:absolute before:left-0 before:top-2.5 before:h-px before:w-5 before:bg-gold">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.05}>
            <h2 className="h-display text-lg">Tell us</h2>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <p className="text-sm leading-relaxed text-silver">
              If any part of this site is difficult to use, or you need information in another format, email{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-bone underline decoration-gold/70 decoration-1 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
              >
                {site.contact.email}
              </a>
              . Tell us the page, what you were trying to do, and the browser or assistive technology you were using. We respond within
              five business days and fix confirmed problems as quickly as we can.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
