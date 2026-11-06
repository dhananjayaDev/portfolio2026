export type Role = {
  period: string;
  organization: string;
  position: string;
  summary: string;
  contributions: string[];
  projectSlugs: string[];
};

export const roles: Role[] = [
  {
    period: "Aug 2025 – Jun 2026",
    organization: "Bluechip Technologies Asia",
    position: "Associate AI Engineer",
    summary:
      "Associate AI engineering at Bluechip Technologies Asia, including the Dashboard AI platform.",
    contributions: [
      "Led Dashboard AI, an enterprise SaaS platform for spreadsheet ETL, agent-based data cleaning, and visual analytics in Python and Matplotlib.",
      "Built secure local AI systems with local language models and audio transcription for business automation.",
      "Integrated prompt engineering and agentic workflows into application logic.",
    ],
    projectSlugs: ["dashboard-ai"],
  },
  {
    period: "Feb 2025 – Jul 2025",
    organization: "Bluechip Technologies Asia",
    position: "BI Developer (Part-time)",
    summary:
      "Enterprise analytics work connecting ERP data to a Microsoft Fabric lakehouse and Power BI.",
    contributions: [
      "Integrated Business Central ERP data through a REST API into Microsoft Fabric.",
      "Transformed the data with Dataflow Gen2 and stored it in a lakehouse.",
      "Delivered Power BI analytics on the centralized model.",
    ],
    projectSlugs: ["business-central-data-integration"],
  },
  {
    period: "Jan 2025 – Apr 2025",
    organization: "Ravana Industries",
    position: "Full-stack Developer Intern",
    summary:
      "Full-stack internship on an eCommerce platform using Frappe, Python, and TypeScript.",
    contributions: [
      "Improved the front end and the back-end performance of the eCommerce platform.",
      "Integrated payment gateways and intelligent search.",
      "Automated processes, fixed bugs, and shipped feature updates.",
    ],
    projectSlugs: [],
  },
  {
    period: "Aug 2023 – Feb 2024",
    organization: "Bluechip Technologies Asia",
    position: "AI/ML Developer Intern",
    summary:
      "AI and machine-learning internship covering cloud model pipelines and HR workflow automation.",
    contributions: [
      "Deployed and monitored machine-learning models with GCP Vertex AI pipelines on IoT data for monitoring and maintenance.",
      "Built Zapier and Zoom API workflows that sync meeting transcripts with HR performance dashboards.",
    ],
    projectSlugs: [],
  },
];
