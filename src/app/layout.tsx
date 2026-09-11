import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const michroma = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-michroma", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Athlete Development in Houston, TX`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "athlete development Houston",
    "football performance training Houston",
    "athlete advisory",
    "pro day preparation",
    "college to pro football",
    "scouting profile",
    "Ascension Athlete Group",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Developing Athletes Beyond The Game`,
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Developing Athletes Beyond The Game`,
    description: site.description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SportsActivityLocation"],
  name: site.name,
  url: site.url,
  logo: `${site.url}/logos/logo-gold-full.png`,
  description: site.description,
  slogan: site.tagline,
  address: { "@type": "PostalAddress", addressLocality: site.location.city, addressRegion: site.location.region, addressCountry: "US" },
  areaServed: "Houston, Texas",
  sameAs: [site.social.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${michroma.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
