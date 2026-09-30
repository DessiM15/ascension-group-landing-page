import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contact() {
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
            Complete the assessment and intake form and tell us where you are and where you want to go. We reply to every submission and
            book consultations within a few days.
          </p>

          <dl className="mt-12 space-y-7">
            {site.contact.email ? (
              <div>
                <dt className="eyebrow text-silver-2">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.contact.email}`} className="text-bone transition-colors hover:text-gold">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="eyebrow text-silver-2">Instagram</dt>
              <dd className="mt-2">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-bone transition-colors hover:text-gold">
                  {site.social.instagramHandle}
                  <span className="sr-only"> (opens in new tab)</span>
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
          <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-[10px] uppercase tracking-[0.3em] text-bone">Assessment and intake form</h3>
            <a
              href={site.intakeForm.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-silver underline decoration-gold/70 decoration-1 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
            >
              Open the form in a new tab
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
          <div className="mt-6 border border-white/10 bg-white">
            <iframe
              src={site.intakeForm.embedUrl}
              title={site.intakeForm.title}
              loading="lazy"
              className="block h-[900px] w-full md:h-[1100px]"
            >
              Loading the form
            </iframe>
          </div>
          <p className="mt-5 text-xs text-silver-2">
            The form is hosted by Google Forms. Your answers go straight to the Ascension team and stay with Ascension.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
