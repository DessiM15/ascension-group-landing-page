export type Service = {
  index: string;
  title: string;
  division: string;
  short: string;
  description: string;
  image: string;
  focus?: string;
  points: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Performance",
    division: "Ascension Performance",
    short: "Elite physical development.",
    description:
      "Our Performance Division prepares athletes to compete at the highest level through science based training and sport specific development.",
    image: "/images/division-performance.jpg",
    points: ["Strength training", "Speed and agility", "Position development", "Mobility and recovery", "Character development"],
  },
  {
    index: "02",
    title: "Advisory",
    division: "Ascension Advisory",
    short: "Career development beyond sports.",
    description:
      "Our Advisory Division equips athletes with the resources, relationships and knowledge needed to build successful careers during and after athletics.",
    image: "/images/division-network.jpg",
    points: ["Career development", "Scouting strategy", "Recruiting assistance", "NIL and branding"],
  },
  {
    index: "03",
    title: "Talent Network",
    division: "Ascension Network",
    short: "Connecting athletes with opportunity.",
    description:
      "Our Network Division creates meaningful relationships between athletes, agencies, coaches, scouts and organizations. We serve as strategic connectors, not agents.",
    image: "/images/division-advisory.jpg",
    focus: "50% 42%",
    points: ["Recruiting", "Scouting", "Team placement", "Player personnel", "Referrals"],
  },
];

export const whyChoose = [
  {
    title: "Elite Coaching and Mentorship",
    text: "Learn from coaches with professional sports experience who invest in your growth both on and off the field.",
  },
  {
    title: "Real Player Development",
    text: "Comprehensive skill development that goes beyond drills to build complete, well rounded athletes.",
  },
  {
    title: "Individualized Attention",
    text: "Personalized training plans and one on one guidance tailored to your unique goals and potential.",
  },
  {
    title: "Performance plus Life",
    text: "Development that prepares you for athletic excellence and success in every area of life.",
  },
];

export type Package = { name: string; price: string; cadence?: string; includes: string[] };
export type Program = { key: string; label: string; short: string; description: string; packages: Package[] };

export const showPricing = false;

export const programs: Program[] = [
  {
    key: "agency",
    label: "Agency Partnership Packages",
    short: "Agency",
    description: "Built for agencies that want a development partner behind their roster, from scouting and evaluation to training and placement.",
    packages: [
      {
        name: "Partner",
        price: "$2,500",
        cadence: "per month",
        includes: [
          "Player development",
          "Scouting",
          "Player evaluation",
          "Recruiting support",
          "Position coach network",
          "Recovery network",
          "Career development resources",
          "Team/league connections",
          "Financial/NIL education resources",
        ],
      },
      {
        name: "Elite Partner",
        price: "$5,000",
        cadence: "per month",
        includes: [
          "Everything in Partner Plus:",
          "Performance Training (Next Level Package - 5 player limit)",
          "Dedicated athlete development planning",
          "Scouting/player identification",
          "Pipeline development",
          "Team/league outreach",
          "Player evaluation",
          "Priority training access",
          "Network introductions",
          "Regular agency strategy meetings",
          "Reporting on athlete development",
        ],
      },
    ],
  },
  {
    key: "professional",
    label: "Professional Partnership Packages",
    short: "Professional",
    description: "For attorneys, advisors, trainers and other professionals who want to serve athletes as part of the Ascension network.",
    packages: [
      {
        name: "Network",
        price: "Free",
        includes: [
          "Can receive referrals when appropriate",
          "Gets access to networking opportunities",
          "Can participate in select Ascension events",
          "Is listed as part of your professional network",
        ],
      },
      {
        name: "Strategic",
        price: "$1,000",
        cadence: "per year",
        includes: [
          "Preferred partner status",
          "Professional profile on Ascension's network",
          "Networking opportunities",
          "Athlete education sessions",
          "Workshops/seminars",
          "Access to select Ascension events",
          "Co-branded educational content",
          "Opportunities to educate athletes",
          "Priority consideration for referrals",
        ],
      },
      {
        name: "Premier",
        price: "$2,500",
        cadence: "per year",
        includes: [
          "Featured professional partner",
          "Speaking opportunities",
          "Athlete workshops",
          "Co-branded educational events",
          "Content collaborations",
          "Networking events",
          "Priority partnership opportunities",
          "Access to agency/network events",
          "Featured placement on Ascension platforms",
          "Strategic planning meetings with Ascension Athlete Group",
        ],
      },
    ],
  },
];

export type Placement = { team: string; logo: string; athlete: string; width: number; height: number };

export const placements: Placement[] = [
  { team: "Iowa Barnstormers", logo: "/logos/team-barnstormers.png", athlete: "Byron Mathis", width: 578, height: 346 },
  { team: "San Antonio Gunslingers", logo: "/logos/team-gunslingers.png", athlete: "Xavier Toliver", width: 224, height: 225 },
  { team: "San Antonio Toros", logo: "/logos/team-toros.png", athlete: "Eddy Toussum", width: 225, height: 205 },
];

export type Testimonial = { name: string; team: string; quote: string; image: string };

export const testimonials: Testimonial[] = [
  {
    name: "Eddy Toussom",
    team: "San Antonio Toros",
    image: "/images/testimonial-eddy.jpg",
    quote:
      "Coach K and Coach Jeff have been huge in helping jump start my professional career. From pre-draft training to connecting us with agents and professional teams, they've done everything they can to make sure we get the exposure we've worked so hard for. They've also helped us navigate life outside of sports, whether it's through fellowship, financial advice, or simply being great mentors. These guys truly do it all, and I'm incredibly grateful to have them by my side as I continue chasing my dreams. Thank you both for believing in me and investing in my future!",
  },
  {
    name: "Byron Mathis",
    team: "Iowa Barnstormers",
    image: "/images/testimonial-byron.jpg",
    quote:
      "Training with Coach Jeff and Coach K completely changed my football journey. They helped me develop not only on the field but also off the field by building my confidence, discipline, and work ethic. Their training improved my speed, mobility, athleticism, and overall performance, preparing me to compete at the professional level. Most importantly they opened doors by connecting me with valuable opportunities to play professional football. Thanks to their guidance and support, I earned the opportunity to be recruited by the Iowa Barnstormers in the IFL. I highly recommend Ascension Athlete Group to any athlete chasing their dreams.",
  },
  {
    name: "Xavier Toliver",
    team: "San Antonio Gunslingers",
    image: "/images/testimonial-xavier.jpg",
    quote:
      "Coach Jeff and Coach K have been a huge part of my journey. They welcomed me in halfway through camp, believed in me, helped me put up great numbers at pro day, and ultimately helped me earn an opportunity to play professional football. Their impact goes far beyond just training. They've supported me physically, mentally, and spiritually, always pushing me to be the best version of myself on and off the field. I'm grateful for everything they've poured into me and for believing in my potential. If you're serious about reaching the next level, these are the coaches you want in your corner.",
  },
];

export type Fact = { label: string; value: string };

export type Coach = {
  slug: string;
  name: string;
  role: string;
  image: string;
  width: number;
  height: number;
  short: string;
  bio: string[];
  facts: Fact[];
};

export const founders: Coach[] = [
  {
    slug: "jeff-ejekam",
    name: "Jeff Ejekam",
    role: "Co-Founder and CEO",
    image: "/images/coach-jeff-portrait.jpg",
    width: 1400,
    height: 2100,
    short: "Builds the pathway. Opens the doors.",
    bio: [
      "Jeff Ejekam is the Co-Founder & CEO of Ascension Athlete Group, leading the Advisory division. With 23 years of football experience spanning Division I and professional football in the IFL, UFL, and NFL, along with 4 years of sports performance and coaching experience working with multiple NFL Draft prospects, Jeff brings a unique perspective to athlete development. As a West Point graduate and former U.S. Army Captain, he combines his experience in sports, coaching, and military leadership to help athletes maximize their careers and achieve long-term success both on and off the field.",
    ],
    facts: [
      { label: "College", value: "Army West Point" },
      { label: "Pro experience", value: "Vegas Knight Hawks (2022-2023), Memphis Showboats (2023), San Antonio Gunslingers (2024), Frisco Fighters (2024)" },
      { label: "NFL workouts", value: "New York Giants, Seattle Seahawks, Buffalo Bills" },
      { label: "Experience", value: "23 years football experience" },
    ],
  },
  {
    slug: "kiante-northington",
    name: "Kiante Northington",
    role: "Co-Founder and COO",
    image: "/images/coach-k-portrait.jpg",
    width: 1130,
    height: 1400,
    short: "Builds the athlete. Moves the numbers.",
    bio: [
      "Kiante Northington is the Co-Founder & COO of Ascension Athlete Group, leading the Sports Performance division. With 25 years of football experience spanning Division I and professional football in the AFL, IFL, and NFL, along with 5 years of coaching experience at the professional and performance levels, Kiante brings a wealth of knowledge to athlete development. He has served as the lead sports performance coach for multiple NFL Draft Class athletes, combining firsthand playing experience with proven coaching expertise to help athletes maximize their physical performance and reach their full potential.",
    ],
    facts: [
      { label: "College", value: "Eastern Kentucky University" },
      { label: "Pro experience", value: "Massachusetts Pirates (2018, 2023), Atlantic City Blackjacks (2019), Jacksonville Sharks (2021), Northern Arizona Wranglers (2022), Bay Area Panthers (2024)" },
      { label: "NFL workouts", value: "Indianapolis Colts and Cleveland Browns" },
      { label: "Experience", value: "25 years football experience" },
    ],
  },
];

export const event = {
  eyebrow: "Upcoming Event",
  title: "Pro Day Prep Camp",
  date: "Saturday, January 17, 2027",
  time: "8:00 AM to 1:00 PM",
  location: "Houston, Texas",
  spots: "Limited to 24 athletes",
  audience: "College athletes preparing for pro day and professional tryouts",
  description:
    "A one day intensive built around the tests that decide your pro day: 40 yard dash mechanics, shuttle and three cone, broad and vertical jump, and position drills on film. Athletes leave with a testing baseline, a plan, and their film reviewed by our staff.",
  details: [
    { label: "Date", value: "Saturday, January 17, 2027" },
    { label: "Time", value: "8:00 AM to 1:00 PM" },
    { label: "Location", value: "Houston, Texas" },
    { label: "Spots", value: "Limited to 24 athletes" },
  ],
  image: "/images/event-turf.jpg",
};

export type Partner = { name: string; category: string };

// Hidden until Jeff confirms official partners. Flip showPartners to true and replace the placeholders below.
export const showPartners = false;

export const partners: Partner[] = [
  { name: "Meridian Sports Law", category: "Attorneys" },
  { name: "Northstar Wealth", category: "Financial Advisors" },
  { name: "Apex Sports Medicine", category: "Sports Medicine" },
  { name: "Vantage Media House", category: "Branding and Marketing" },
  { name: "Iron House Performance", category: "Training Facility" },
  { name: "Elevate Nutrition", category: "Nutrition" },
];
