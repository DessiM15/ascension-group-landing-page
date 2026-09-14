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
  // Web3Forms access keys are public client-side keys, so a committed fallback is safe. An env var still overrides it.
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "59f9f9a8-2ed4-4606-8d3d-b55d02a82f65",
};

export const nav = [
  { label: "Divisions", href: "/#services" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "Events", href: "/#events" },
  { label: "Founders", href: "/founders" },
  { label: "Contact", href: "/#contact" },
];
