import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Programs } from "@/components/Programs";
import { Placements } from "@/components/Placements";
import { Testimonials } from "@/components/Testimonials";
import { Events } from "@/components/Events";
import { Partners } from "@/components/Partners";
import { FoundersPreview } from "@/components/FoundersPreview";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Programs />
      <Placements />
      <Testimonials />
      <Events />
      <FoundersPreview />
      <Partners />
      <Contact />
    </>
  );
}
