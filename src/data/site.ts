export const site = {
  name: "Dhananjaya Dissanayake",
  shortName: "Dhananjaya.",
  tagline: "Engineering Intelligence into Reality.",
  roles: ["Data Engineer", "AI Engineer", "Software Developer"],
  headline: "Building intelligent systems through data, engineering and AI.",
  summary:
    "I build automated ETL and ELT pipelines, Power BI analytics, and intelligent applications, from Microsoft Fabric lakehouses to agent-based data cleaning.",
  positioning:
    "A data and AI engineer, now reading for an MSc in Statistics, who turns operational data into pipelines, dashboards, and practical machine-learning systems.",
  availability: "Available for opportunities",
  location: "Colombo, Sri Lanka",
  region: "Sri Lanka",
  email: "d.dhananjaya@outlook.com",
  discord: "https://discord.gg/9xsctP2GH",
  linkedin: "https://www.linkedin.com/in/dhananjayadissanayake/",
  github: "https://github.com/dhananjayaDev",
  portrait: "/brand/profile3.png",
  portraitAlt: "Dhananjaya Dissanayake",
  years: "4+",
  yearsCaption: "Years across technical work and internships",
  disciplines: "3",
  disciplinesCaption: "Core engineering disciplines",
};

export const nav = [
  { href: "/", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/expertise", label: "Expertise" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
] as const;

export const sections = [
  {
    index: "01",
    href: "/",
    label: "Home",
    description: "Introduction, professional identity and featured work.",
  },
  {
    index: "02",
    href: "/projects",
    label: "Engineering Projects",
    description: "A searchable collection of technical projects.",
  },
  {
    index: "03",
    href: "/experience",
    label: "Experience",
    description: "Bluechip Technologies Asia and Ravana Industries.",
  },
  {
    index: "04",
    href: "/expertise",
    label: "Technical Expertise",
    description: "Programming, data engineering, cloud, AI and software.",
  },
  {
    index: "05",
    href: "/research",
    label: "Research & Publications",
    description: "Academic research and technical contributions.",
  },
  {
    index: "06",
    href: "/contact",
    label: "Contact",
    description: "CV, GitHub, LinkedIn and professional contact details.",
  },
] as const;

export const disciplines = [
  {
    title: "Data & Analytics",
    text: "Pipelines, lakehouses, warehouses and reporting that make business data usable.",
  },
  {
    title: "AI Engineering",
    text: "Applied machine learning, retrieval systems and intelligent applications.",
  },
  {
    title: "Software Development",
    text: "Working applications, integrations and software people can actually use.",
  },
  {
    title: "Automation",
    text: "Workflows that turn repetitive operations into reliable systems.",
  },
] as const;
