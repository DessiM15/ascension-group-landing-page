export const site = {
  name: "Ascension Athlete Group",
  shortName: "Ascension",
  tagline: "Developing Athletes Beyond The Game.",
  description:
    "Ascension Athlete Group is a Houston based athlete development company. Elite performance training, career advisory and a talent network that connects athletes with opportunity on and off the field.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "").trim() || "https://ascensionathletegroup.com",
  location: {
    city: "Houston",
    region: "TX",
    label: "Houston, Texas",
  },
  contact: {
    email: "info@ascensionathletegroup.com",
    phone: "(000) 000-0000",
  },
  social: {
    instagram: "https://www.instagram.com/ascensionathletegroup/",
    instagramHandle: "@ascensionathletegroup",
  },
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
};

export const nav = [
  { label: "Divisions", href: "/#services" },
  { label: "Programs", href: "/#programs" },
  { label: "Results", href: "/#results" },
  { label: "Events", href: "/#events" },
  { label: "Founders", href: "/founders" },
  { label: "Contact", href: "/#contact" },
];
