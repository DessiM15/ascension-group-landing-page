"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

const interests = [
  { value: "consultation", label: "Book a consultation" },
  { value: "performance", label: "Performance training" },
  { value: "advisory", label: "Athlete advisory" },
  { value: "both", label: "Performance and advisory" },
  { value: "agency", label: "Partner as an agency" },
  { value: "professional", label: "Partner as a professional" },
  { value: "event", label: "Upcoming event" },
  { value: "other", label: "Something else" },
];

function mapInterest(raw: string): string {
  const v = raw.toLowerCase();
  if (v.includes("consult")) return "consultation";
  if (v.includes("event")) return "event";
  if (v.includes("agency")) return "agency";
  if (v.includes("professional partnership")) return "professional";
  if (v.includes("advisory")) return "advisory";
  if (v.includes("performance")) return "performance";
  if (v.includes("film") || v.includes("pathway") || v.includes("service")) return "both";
  return "consultation";
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState("consultation");
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("aag:interest");
      if (stored) {
        setInterest(mapInterest(stored));
        setNote(stored);
      }
    } catch {}
    const onInterest = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (!detail) return;
      setInterest(mapInterest(detail));
      setNote(detail);
    };
    window.addEventListener("aag:interest", onInterest);
    return () => window.removeEventListener("aag:interest", onInterest);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    setStatus("sending");

    if (!site.web3formsKey) {
      // Demo mode when no Web3Forms key is configured
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      data.append("access_key", site.web3formsKey);
      data.append("subject", `New lead from ${site.name} website`);
      data.append("from_name", site.name);
      if (note) data.append("context", note);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/10 bg-ink-2 py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h2 className="h-display mt-5 text-[clamp(1.6rem,3.6vw,3rem)]">
            Start your
            <br />
            <span className="text-gold">ascension.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-silver md:text-lg">
            Tell us where you are and where you want to go. We reply to every message and book consultations within a few days.
          </p>

          <dl className="mt-12 space-y-7">
            <div>
              <dt className="eyebrow text-silver-2">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.contact.email}`} className="text-bone transition-colors hover:text-gold">
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-silver-2">Instagram</dt>
              <dd className="mt-2">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-bone transition-colors hover:text-gold">
                  {site.social.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-silver-2">Location</dt>
              <dd className="mt-2 text-bone">{site.location.label}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          {status === "success" ? (
            <div className="flex h-full min-h-[420px] flex-col items-start justify-center border border-gold/40 p-10">
              <p className="eyebrow">Message received</p>
              <p className="h-display mt-5 text-2xl">We will be in touch.</p>
              <p className="mt-5 max-w-md text-silver">Thank you for reaching out. Expect a reply from the Ascension team within a few days.</p>
              <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-10">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2" noValidate={false}>
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="label">Full name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="field" />
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className="field" />
              </div>
              <div>
                <label htmlFor="phone" className="label">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" className="field" />
              </div>
              <div>
                <label htmlFor="sport" className="label">Sport and position</label>
                <input id="sport" name="sport_position" type="text" placeholder="Football, Wide Receiver" className="field" />
              </div>
              <div>
                <label htmlFor="level" className="label">Current level</label>
                <div className="relative">
                  <select id="level" name="level" required defaultValue="" className="field pr-8">
                    <option value="" disabled>Select one</option>
                    <option>High school</option>
                    <option>College</option>
                    <option>Professional</option>
                    <option>Parent or guardian</option>
                    <option>Agency or professional partner</option>
                  </select>
                  <Chevron />
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="label">I want to</label>
                <div className="relative">
                  <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className="field pr-8">
                    {interests.map((i) => (
                      <option key={i.value} value={i.value}>{i.label}</option>
                    ))}
                  </select>
                  <Chevron />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell us about your goals, your timeline, and where you are today." className="field resize-none" />
              </div>

              <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={status === "sending"} className="btn btn-gold disabled:opacity-60">
                  {status === "sending" ? "Sending" : interest === "consultation" ? "Book a Consultation" : "Send Message"}
                </button>
                <p className="text-xs text-silver-2">
                  {status === "error" ? "Something went wrong. Please try again or email us directly." : "No spam. Your information stays with Ascension."}
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Chevron() {
  return (
    <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-silver-2" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
