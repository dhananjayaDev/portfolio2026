export type SkillGroup = {
  title: string;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Backend",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "Bash", "Flask", "FastAPI", "Frappe"],
  },
  {
    title: "Data Engineering & Analytics",
    items: [
      "Microsoft Fabric",
      "Lakehouse",
      "ETL / ELT",
      "SSIS",
      "Pandas",
      "NumPy",
      "Power BI",
      "DAX",
      "Excel",
      "Azure Data Studio",
    ],
  },
  {
    title: "Cloud & Databases",
    items: [
      "GCP",
      "Vertex AI",
      "BigQuery",
      "Azure",
      "PostgreSQL",
      "YugabyteDB",
      "SQL Server",
      "AWS (basics)",
    ],
  },
  {
    title: "AI & Machine Learning",
    note: "Deep learning frameworks are named on a project page only when that project names them.",
    items: [
      "Scikit-learn",
      "Random Forest",
      "SVM",
      "Clustering",
      "Time Series Forecasting",
      "SHAP",
      "LIME",
      "Hugging Face",
      "BERT",
      "Transformers",
      "YOLOv5 / v8",
      "CNNs",
      "U-Net",
      "DeepSORT",
      "DQN",
      "OpenCV",
    ],
  },
  {
    title: "Generative AI",
    items: [
      "LangChain",
      "RAG",
      "FAISS",
      "Sentence-BERT",
      "OpenAI API",
      "Gemini API",
      "Mistral AI",
      "Prompt Engineering",
      "Agentic Workflows",
      "Local LLMs",
    ],
  },
  {
    title: "Development & Operations",
    items: ["Git", "Docker", "MLflow", "DVC", "Streamlit", "CI/CD", "Kubernetes (basic)"],
  },
];
