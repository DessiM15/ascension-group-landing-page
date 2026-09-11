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
    image: "/images/division-advisory.jpg",
    focus: "50% 42%",
    points: ["Career development", "Scouting strategy", "Recruiting assistance", "NIL and branding"],
  },
  {
    index: "03",
    title: "Talent Network",
    division: "Ascension Network",
    short: "Connecting athletes with opportunity.",
    description:
      "Our Network Division creates meaningful relationships between athletes, agencies, coaches, scouts and organizations. We serve as strategic connectors, not agents.",
    image: "/images/division-network.jpg",
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

export type Package = { name: string; price: string; level: string; includes: string[]; idealFor: string[] };
export type Program = { key: string; label: string; note?: string; packages: Package[] };

export const showPricing = false;

export const programs: Program[] = [
  {
    key: "performance",
    label: "Performance",
    note: "Private sessions available. Inquire for pricing.",
    packages: [
      {
        name: "Ascend",
        price: "$500",
        level: "Foundation",
        includes: ["2x per week performance training", "Speed and movement development", "Strength training", "Accountability mentorship"],
        idealFor: ["High school athletes", "Developing athletes", "Athletes seeking structure"],
      },
      {
        name: "Elevate",
        price: "$1,200",
        level: "Mid tier development",
        includes: [
          "3x per week performance training",
          "Speed and movement development",
          "Strength training",
          "1x per week positional coaching",
          "Accountability mentorship",
          "Recruiting support",
        ],
        idealFor: ["Varsity athletes", "Serious recruits", "Collegiate athletes"],
      },
      {
        name: "Legacy",
        price: "$1,800",
        level: "Premium development",
        includes: [
          "3x per week performance training",
          "Speed and movement development",
          "Strength training",
          "1x per week positional coaching",
          "1x per week recovery session",
          "Accountability mentorship",
          "Recruiting support",
        ],
        idealFor: ["College athletes", "Professional prospects", "Transfer portal athletes"],
      },
      {
        name: "Next Level",
        price: "$3,000",
        level: "Pro day prep",
        includes: [
          "5x per week performance training",
          "1x per week positional work",
          "1x per week recovery",
          "Combine and pro day prep",
          "Interview prep",
          "Nutrition guidance",
          "Accountability mentorship",
          "Recruiting support",
        ],
        idealFor: ["NFL hopefuls", "CFL and UFL athletes", "Professional free agents"],
      },
    ],
  },
  {
    key: "advisory",
    label: "Advisory",
    packages: [
      {
        name: "Foundation",
        price: "$250",
        level: "Beginner advisory",
        includes: ["Monthly career strategy session", "Recruiting roadmap", "Film review", "Goal planning", "Email support", "Quarterly recruiting review"],
        idealFor: ["High school athletes", "Developing athletes", "Athletes seeking structure"],
      },
      {
        name: "Deluxe",
        price: "$600",
        level: "Mid tier advisory",
        includes: [
          "Everything in Foundation",
          "Bi weekly meetings",
          "School targeting strategy",
          "Coach introductions",
          "Recruiting communication guidance",
          "Position coach and recovery referrals",
          "NIL education",
          "Parent consultation",
        ],
        idealFor: ["Varsity athletes", "Serious recruits", "Collegiate athletes"],
      },
      {
        name: "Executive",
        price: "$1,200",
        level: "Premium advisory",
        includes: [
          "Everything in Deluxe",
          "Weekly strategy sessions",
          "Agency introductions and professional networking",
          "Team placement assistance",
          "Scouting strategy",
          "Attorney and mental performance referrals",
          "Financial literacy and investment education",
          "Career branding and NIL advisory",
        ],
        idealFor: ["College athletes", "Professional prospects", "Transfer portal athletes"],
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

export type Coach = {
  slug: string;
  name: string;
  role: string;
  image: string;
  short: string;
  bio: string[];
  focus: string[];
};

export const founders: Coach[] = [
  {
    slug: "coach-jeff",
    name: "Coach Jeff",
    role: "Founder and Athlete Advisor",
    image: "/images/coach-jeff-portrait.jpg",
    short: "Builds the pathway. Opens the doors.",
    bio: [
      "Jeff founded Ascension Athlete Group on a simple belief: talent gets you the opportunity, and the right team helps you maximize it. He leads the Advisory division, working directly with athletes to evaluate film, sharpen their scouting profile and connect them with the agents, coaches and organizations that can move their career forward.",
      "Jeff spent years around the game at the college and professional levels and saw too many capable athletes fall through the cracks between college and a professional career. Closing that gap is the work he cares most about.",
    ],
    focus: ["Athlete advisory", "Film evaluation", "Professional placement", "NIL and brand strategy"],
  },
  {
    slug: "coach-k",
    name: "Coach K",
    role: "Co-Founder and Head Performance Coach",
    image: "/images/coach-k-portrait.jpg",
    short: "Builds the athlete. Moves the numbers.",
    bio: [
      "Coach K runs the Performance division. His programs are built around the numbers that matter on pro day and the movement that shows up on film: acceleration, change of direction, strength and durability through a full season.",
      "His athletes know him for meeting them where they are and refusing to let them stay there. Athletes who walked in halfway through camp have left with their best testing numbers and a professional contract.",
    ],
    focus: ["Speed and acceleration", "Strength and power", "Pro day preparation", "Position specific movement"],
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

// Placeholder partners. Replace with the real professional network once Jeff confirms names and logos.
export const partners: Partner[] = [
  { name: "Meridian Sports Law", category: "Attorneys" },
  { name: "Northstar Wealth", category: "Financial Advisors" },
  { name: "Apex Sports Medicine", category: "Sports Medicine" },
  { name: "Vantage Media House", category: "Branding and Marketing" },
  { name: "Iron House Performance", category: "Training Facility" },
  { name: "Elevate Nutrition", category: "Nutrition" },
];
