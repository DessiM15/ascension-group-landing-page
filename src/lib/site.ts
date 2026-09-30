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
    // Leave empty to hide the email everywhere on the site (contact section, footer, accessibility page).
    // Fill it in once Jeff sends the professional address.
    email: "",
  },
  social: {
    instagram: "https://www.instagram.com/ascensionathletegroup/",
    instagramHandle: "@ascensionathletegroup",
  },
  // The client's Google Form. Responses land in Jeff's Google account, not on this site.
  intakeForm: {
    title: "Ascension Athlete Group Assessment and Intake Form",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd74Z_Az1un7-CKPiRbC3t_6UCV6ZG682cxfBLcFi1DGUrkrg/viewform",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd74Z_Az1un7-CKPiRbC3t_6UCV6ZG682cxfBLcFi1DGUrkrg/viewform?embedded=true",
  },
};

export const nav = [
  { label: "Divisions", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "Founders", href: "/founders" },
  { label: "Contact", href: "/#contact" },
];
