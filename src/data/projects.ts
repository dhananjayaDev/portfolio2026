export const projectCategories = [
  "Data Engineering & Business Intelligence",
  "Artificial Intelligence & Machine Learning",
  "Software & Application Engineering",
  "Automation & Intelligent Systems",
  "IoT & Other Projects",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const categoryShort: Record<ProjectCategory, string> = {
  "Data Engineering & Business Intelligence": "Data & BI",
  "Artificial Intelligence & Machine Learning": "AI & ML",
  "Software & Application Engineering": "Software",
  "Automation & Intelligent Systems": "Automation",
  "IoT & Other Projects": "IoT & Other",
};

export const categoryColor: Record<ProjectCategory, string> = {
  "Data Engineering & Business Intelligence": "#74aaff",
  "Artificial Intelligence & Machine Learning": "#ff7a90",
  "Software & Application Engineering": "#5ddeaf",
  "Automation & Intelligent Systems": "#ffc14d",
  "IoT & Other Projects": "#c9a0ff",
};

/** ArtCraft lineup tones. `app` is the chip, `ink` the title on a light page, `inkDark` the title on a dark page. */
export const cardTones = [
  { app: "#2f7bf5", ink: "#1a5bc4", inkDark: "#7fb0ff" },
  { app: "#e8573f", ink: "#b83a24", inkDark: "#ff8a70" },
  { app: "#8b5cf6", ink: "#6a3fd6", inkDark: "#b69cff" },
  { app: "#f2a516", ink: "#8a5800", inkDark: "#ffc14d" },
  { app: "#02da96", ink: "#017a54", inkDark: "#3fe6ae" },
  { app: "#4c6ef5", ink: "#253e99", inkDark: "#8da2fb" },
  { app: "#c2672b", ink: "#9c4a15", inkDark: "#e58a4e" },
  { app: "#e8204f", ink: "#b70228", inkDark: "#f23a62" },
  { app: "#e0368f", ink: "#b0206c", inkDark: "#ff7ab8" },
  { app: "#14a9c4", ink: "#0b6f82", inkDark: "#52d1ea" },
  { app: "#1f9d55", ink: "#136938", inkDark: "#5ee089" },
  { app: "#f26b1d", ink: "#ad4306", inkDark: "#ff9657" },
  { app: "#178a9c", ink: "#0e6674", inkDark: "#4fc4d6" },
  { app: "#7bb51c", ink: "#457008", inkDark: "#a6e04a" },
] as const;

export type CardTone = (typeof cardTones)[number];

export function cardTone(project: Project): CardTone {
  return cardTones[(Number(project.number) - 1) % cardTones.length] ?? cardTones[0];
}

export type ProjectKind = "Professional" | "Academic" | "Experimental" | "Personal";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  kind: ProjectKind;
  featured: boolean;
  context: string;
  summary: string;
  overview: string;
  problem: string;
  contribution: string[];
  architecture: string[];
  stack: string[];
  outcome: string;
  image: { src: string; alt: string };
  organization?: string;
  links?: { label: string; href: string }[];
};

function photo(number: string, alt: string) {
  return {
    src: `/cards/art/${number}.svg`,
    alt,
  };
}

export const projects: Project[] = [
  {
    slug: "business-central-data-integration",
    number: "01",
    title: "Business Central Data Integration",
    category: "Data Engineering & Business Intelligence",
    kind: "Professional",
    featured: true,
    context: "Professional experience",
    summary:
      "ERP API data integrated into a Microsoft Fabric lakehouse, transformed, and delivered through Power BI.",
    overview:
      "A cloud-based data integration solution connecting ERP data with centralized analytical storage and reporting.",
    problem:
      "Disparate business data sources make centralized reporting and analysis difficult.",
    contribution: [
      "API-based data integration.",
      "Data transformation using Fabric Dataflow Gen2.",
      "Lakehouse storage implementation.",
      "Power BI dashboard development.",
    ],
    architecture: ["ERP API", "Dataflow Gen2", "Lakehouse", "Power BI"],
    stack: ["Microsoft Fabric", "Dataflow Gen2", "REST API", "Power BI", "DAX", "Azure"],
    outcome: "Centralized analytical data and reduced manual reporting effort.",
    image: photo(
      "01",
      "Geometric study 01",
    ),
  },
  {
    slug: "enterprise-data-warehouse",
    number: "02",
    title: "Enterprise Data Warehouse",
    category: "Data Engineering & Business Intelligence",
    kind: "Academic",
    featured: true,
    context: "Academic / engineering project",
    summary:
      "AdventureWorks warehouse with star and snowflake schemas, SSIS pipelines and Power BI dashboards.",
    overview:
      "An enterprise-style warehouse that models AdventureWorks data for analytical reporting.",
    problem:
      "Operational tables are a poor shape for consistent business reporting and dashboard performance.",
    contribution: [
      "Modelled the warehouse with star and snowflake schemas.",
      "Built SSIS ETL pipelines into the warehouse.",
      "Delivered Power BI dashboards on the modelled data.",
    ],
    architecture: ["AdventureWorks", "SSIS ETL", "Star and snowflake schemas", "Power BI"],
    stack: ["SQL Server", "SSIS", "ETL", "Star Schema", "DAX"],
    outcome: "A modelled warehouse with dashboards built for analytical queries.",
    image: photo(
      "02",
      "Geometric study 02",
    ),
  },
  {
    slug: "hr-analytics-prediction-platform",
    number: "03",
    title: "HR Analytics Prediction Platform",
    category: "Data Engineering & Business Intelligence",
    kind: "Academic",
    featured: true,
    context: "Kaggle dataset and Google Colab",
    summary:
      "A Kaggle HR model that predicts job-change intention, with the best model served through Flask.",
    overview:
      "A prediction platform trained on Kaggle HR data in Google Colab and served as a Flask application.",
    problem:
      "Job-change risk is hard to see when HR data stays in spreadsheets and static reports.",
    contribution: [
      "Preprocessed the Kaggle HR dataset in Google Colab.",
      "Compared models and deployed the strongest, a Random Forest, with Scikit-learn.",
      "Served that model through a Flask application.",
    ],
    architecture: ["Kaggle HR data", "Google Colab", "Random Forest", "Flask application"],
    stack: ["Python", "Pandas", "Google Colab", "Scikit-learn", "Random Forest", "Flask"],
    outcome: "A working application for predicting employee job-change intention.",
    image: photo(
      "03",
      "Geometric study 03",
    ),
  },
  {
    slug: "dashboard-ai",
    number: "04",
    title: "Dashboard AI",
    category: "Data Engineering & Business Intelligence",
    kind: "Professional",
    featured: true,
    context: "Associate AI Engineer, Bluechip Technologies Asia",
    organization: "Bluechip Technologies Asia",
    summary:
      "Enterprise SaaS for spreadsheet ETL, agent-based cleaning, and visual analytics.",
    overview:
      "Dashboard AI, led at Bluechip Technologies Asia, cleans spreadsheet inputs and turns them into visual analytics.",
    problem:
      "Spreadsheet reporting depends on manual cleaning before anyone can trust a chart.",
    contribution: [
      "Led the end-to-end build of the platform.",
      "Automated spreadsheet ETL and agent-based data cleaning.",
      "Delivered visual analytics with Python and Matplotlib.",
    ],
    architecture: ["Spreadsheets", "Automated ETL", "AI cleaning agents", "Matplotlib analytics"],
    stack: ["Python", "Matplotlib", "AI Agents", "ETL"],
    outcome: "Cleaned spreadsheet data with automated visualization.",
    image: photo(
      "04",
      "Geometric study 04",
    ),
  },
  {
    slug: "sri-lankan-constitution-legal-support",
    number: "05",
    title: "Sri Lankan Constitution – Legal Decision Support System",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Academic",
    featured: true,
    context: "Retrieval-augmented generation",
    summary:
      "A RAG application for answering questions about the Sri Lankan Constitution.",
    overview:
      "A legal decision-support interface that retrieves relevant constitutional text before answering.",
    problem:
      "Questions about the constitution are slow to answer when the source text is long and unstructured.",
    contribution: [
      "Built retrieval over constitutional source material with FAISS.",
      "Connected retrieval to an OpenAI model through LangChain.",
      "Exposed the question-answering flow in Streamlit.",
    ],
    architecture: ["Constitution text", "FAISS retrieval", "LangChain and OpenAI", "Streamlit"],
    stack: ["LangChain", "OpenAI API", "FAISS", "Streamlit"],
    outcome: "A question-answering application grounded in the Sri Lankan Constitution.",
    image: photo(
      "05",
      "Geometric study 05",
    ),
  },
  {
    slug: "ai-resume-job-matcher",
    number: "06",
    title: "AI Resume & Job Description Matcher",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Academic",
    featured: true,
    context: "Semantic matching",
    summary: "Semantic matching and explainable scoring between resumes and job descriptions.",
    overview:
      "A matching system that scores how a resume relates to a job description and explains the score.",
    problem:
      "Keyword overlap misses whether a resume actually fits a role, and a bare score is hard to trust.",
    contribution: [
      "Encoded resumes and job descriptions with Sentence-BERT.",
      "Produced a semantic match score.",
      "Explained the score with SHAP and LIME.",
    ],
    architecture: ["Resume and job text", "Sentence-BERT", "Match score", "SHAP and LIME"],
    stack: ["Sentence-BERT", "SHAP", "LIME", "NLP"],
    outcome: "Explainable semantic scores for resume and job-description pairs.",
    image: photo(
      "06",
      "Geometric study 06",
    ),
  },
  {
    slug: "autonomous-vehicle-lane-detection",
    number: "07",
    title: "Autonomous Vehicle Lane Detection",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Academic",
    featured: true,
    context: "Computer vision",
    summary:
      "Computer vision and deep learning for lane detection and driving anomaly identification.",
    overview:
      "A perception project that detects lanes and flags driving anomalies from road imagery.",
    problem:
      "Lane position and sudden driving anomalies are difficult to read from raw camera input.",
    contribution: [
      "Processed road imagery with OpenCV.",
      "Applied SegNet and U-Net for lane segmentation.",
      "Used the perception output to identify driving anomalies.",
    ],
    architecture: ["Road imagery", "OpenCV", "SegNet and U-Net", "Lane and anomaly output"],
    stack: ["OpenCV", "SegNet", "U-Net", "Deep Learning"],
    outcome: "Lane detection and driving-anomaly identification from visual input.",
    image: photo(
      "07",
      "Geometric study 07",
    ),
  },
  {
    slug: "insurance-fraud-detection",
    number: "08",
    title: "Insurance Fraud Detection",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Professional",
    featured: true,
    context: "Bluechip Technologies Asia",
    organization: "Bluechip Technologies Asia",
    summary: "AI-based fraud detection capabilities for insurance claims.",
    overview:
      "Applied detection work that helps surface potentially fraudulent insurance claims.",
    problem: "Manual review struggles to spot suspicious claims inside a large claims workload.",
    contribution: [
      "Contributed AI and machine learning detection capabilities for insurance claims.",
      "Worked on the data processing behind those capabilities.",
      "Delivered the work during the AI/ML Developer Internship at Bluechip Technologies Asia.",
    ],
    architecture: ["Claims data", "Data processing", "AI / ML detection"],
    stack: ["AI/ML", "Data Processing"],
    outcome: "Fraud detection capabilities applied to insurance claims.",
    image: photo(
      "08",
      "Geometric study 08",
    ),
  },
  {
    slug: "thrift-management-ecommerce",
    number: "09",
    title: "Thrift Management E-Commerce Platform",
    category: "Software & Application Engineering",
    kind: "Personal",
    featured: true,
    context: "MERN product",
    summary:
      "A MERN commerce application with authentication, cart, ordering and payment integration.",
    overview:
      "An e-commerce platform for browsing products, managing a cart, and completing an order.",
    problem:
      "A thrift catalogue needs accounts, a cart and checkout before it can operate as a store.",
    contribution: [
      "Built the React storefront.",
      "Implemented authentication, cart and ordering on the Express and Node API.",
      "Connected ordering to payment integration and MongoDB.",
    ],
    architecture: ["React storefront", "Express and Node API", "MongoDB", "Payment integration"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    outcome: "A working commerce flow from account and cart through order and payment.",
    image: photo(
      "09",
      "Geometric study 09",
    ),
  },
  {
    slug: "wedding-planning-ai-chatbot",
    number: "10",
    title: "Wedding Planning AI Chatbot",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Experimental",
    featured: false,
    context: "Conversational assistant",
    summary: "A conversational assistant for wedding planning and information retrieval.",
    overview:
      "A chatbot that answers wedding-planning questions through a Flask application.",
    problem: "Planning questions are scattered, and a static page is a poor way to retrieve them.",
    contribution: [
      "Built the conversational interface in Flask.",
      "Connected answers to Mistral through Hugging Face.",
    ],
    architecture: ["Planning questions", "Flask", "Mistral on Hugging Face"],
    stack: ["Flask", "Mistral AI", "Hugging Face"],
    outcome: "A chatbot for wedding planning questions and information retrieval.",
    image: photo(
      "10",
      "Geometric study 10",
    ),
  },
  {
    slug: "postgresql-yugabytedb-migration",
    number: "11",
    title: "PostgreSQL to YugabyteDB Migration",
    category: "Software & Application Engineering",
    kind: "Academic",
    featured: false,
    context: "Database migration",
    summary:
      "A migration between a relational database and a distributed SQL database.",
    overview:
      "Database migration work spanning PostgreSQL and YugabyteDB.",
    problem:
      "An application tied to a single-node relational database needs a path onto distributed SQL.",
    contribution: [
      "Worked through migration from PostgreSQL to YugabyteDB.",
      "Handled the move across relational and distributed SQL.",
    ],
    architecture: ["PostgreSQL", "Migration", "YugabyteDB"],
    stack: ["PostgreSQL", "YugabyteDB", "SQL"],
    outcome: "A migration path from PostgreSQL onto YugabyteDB.",
    image: photo(
      "11",
      "Geometric study 11",
    ),
  },
  {
    slug: "hr-automation",
    number: "12",
    title: "HR Automation",
    category: "Automation & Intelligent Systems",
    kind: "Professional",
    featured: false,
    context: "Workflow automation",
    summary: "Zoom meetings, transcript storage and performance dashboards.",
    overview:
      "An HR workflow that captures meeting transcripts and feeds performance dashboards.",
    problem:
      "Meeting outcomes and performance signals stay trapped in calls unless someone copies them out.",
    contribution: [
      "Connected Zoom meetings into the workflow.",
      "Stored transcripts from those meetings.",
      "Fed the stored material into performance dashboards.",
    ],
    architecture: ["Zoom meetings", "Transcript storage", "Performance dashboards"],
    stack: ["Zoom API", "Zapier"],
    outcome: "Meeting transcripts stored and available to performance dashboards.",
    image: photo(
      "12",
      "Geometric study 12",
    ),
  },
  {
    slug: "business-workflow-automation",
    number: "13",
    title: "Business Workflow Automation",
    category: "Automation & Intelligent Systems",
    kind: "Professional",
    featured: false,
    context: "Operations automation",
    summary: "Email, Trello, notifications and purchase-order conversion.",
    overview:
      "An operations workflow that moves email and board activity into notifications and purchase orders.",
    problem:
      "Purchase-order work stalls when email, tasks and notifications are handled by hand.",
    contribution: [
      "Automated handoff between email and Trello.",
      "Added notifications on the workflow.",
      "Converted the flow into purchase orders.",
    ],
    architecture: ["Email and Trello", "Zapier", "Notifications", "Purchase orders"],
    stack: ["Zapier", "Outlook"],
    outcome: "A workflow from email and Trello through to purchase-order conversion.",
    image: photo(
      "13",
      "Geometric study 13",
    ),
  },
  {
    slug: "smart-factory-ai",
    number: "14",
    title: "Smart Factory AI",
    category: "Automation & Intelligent Systems",
    kind: "Experimental",
    featured: false,
    context: "Intelligent analytics",
    summary: "Employee internet monitoring and intelligent analytics.",
    overview:
      "An analytics system for monitoring employee internet activity in a factory setting.",
    problem:
      "Internet usage on a factory floor is invisible without a monitoring and analytics layer.",
    contribution: [
      "Monitored employee internet activity.",
      "Applied intelligent analytics to that activity.",
    ],
    architecture: ["Internet activity", "Monitoring", "Intelligent analytics"],
    stack: ["AI", "Data Analytics"],
    outcome: "Analytics over employee internet activity in a smart-factory context.",
    image: photo(
      "14",
      "Geometric study 14",
    ),
  },
  {
    slug: "smart-elephant-fence",
    number: "15",
    title: "Smart Elephant Fence",
    category: "IoT & Other Projects",
    kind: "Personal",
    featured: false,
    context: "IoT system",
    summary: "SMS alerts, telephone notifications and remote fence control.",
    overview:
      "A connected fence that notifies people and can be controlled remotely.",
    problem:
      "A fence breach is useless information if the alert and the control both require someone on site.",
    contribution: [
      "Sent SMS alerts from fence events.",
      "Added telephone notifications.",
      "Enabled remote control of the fence.",
    ],
    architecture: ["Fence event", "SMS and telephone alerts", "Remote control"],
    stack: ["IoT", "SMS", "Remote control"],
    outcome: "Alerts and remote control for an elephant fence.",
    image: photo(
      "15",
      "Geometric study 15",
    ),
  },
  {
    slug: "smart-pet-feeder",
    number: "16",
    title: "Smart Pet Feeder",
    category: "IoT & Other Projects",
    kind: "Academic",
    featured: false,
    context: "University project, with Mohammed Rizmaan",
    summary:
      "An ESP32 feeder that dispenses food from a servo, watches the bowl with sensors, and reports over Wi-Fi, GSM, and MQTT.",
    overview:
      "A university pet feeder built with Mohammed Rizmaan. The ESP32 DevKit V1 dispenses food, checks whether the pet and the food are present, and sends status to a mobile app.",
    problem: "Feeding depends on someone being present, and there is no remote view of whether the bowl is empty.",
    contribution: [
      "Dispensed food with a servo and announced it through a speaker module.",
      "Detected the pet and the food level with infrared and ultrasonic sensors.",
      "Powered the board from a Li-ion pack and USB, with voltage regulation and a real-time clock.",
      "Logged readings over Wi-Fi and GSM with HTTP and MQTT, and showed live status on an LED display and a mobile UI.",
    ],
    architecture: ["ESP32 DevKit V1", "Sensors and servo", "Wi-Fi and GSM", "MQTT and mobile UI"],
    stack: ["ESP32", "MQTT", "GSM", "Servo", "Sensors"],
    outcome: "A feeder that can be checked and triggered remotely, with readings logged for later review.",
    image: photo(
      "16",
      "Geometric study 16",
    ),
  },
  {
    slug: "tuktuk-arcade-game",
    number: "17",
    title: "TukTuk Arcade Game",
    category: "IoT & Other Projects",
    kind: "Personal",
    featured: false,
    context: "Game",
    summary: "A multi-level arcade game built with Pygame.",
    overview: "An arcade-style game with more than one level.",
    problem: "A single-scene prototype is not yet a game someone can play through.",
    contribution: ["Built a multi-level arcade game in Pygame."],
    architecture: ["Pygame loop", "Multiple levels"],
    stack: ["Python", "Pygame"],
    outcome: "A playable multi-level arcade game.",
    image: photo(
      "17",
      "Geometric study 17",
    ),
  },
  {
    slug: "dynamic-pricing-engine",
    number: "18",
    title: "Dynamic Pricing Engine",
    category: "IoT & Other Projects",
    kind: "Academic",
    featured: false,
    context: "Pricing system",
    summary: "Demand-based pricing using competitor data and web scraping.",
    overview:
      "A pricing engine that adjusts from demand and from competitor prices collected by scraping.",
    problem:
      "A fixed price ignores both demand and what competitors are currently charging.",
    contribution: [
      "Collected competitor prices with Selenium and BeautifulSoup.",
      "Calculated demand-based prices from that data.",
    ],
    architecture: ["Competitor pages", "Web scraping", "Demand-based price"],
    stack: ["Python", "Selenium", "BeautifulSoup"],
    outcome: "Prices that respond to demand and competitor data.",
    image: photo(
      "18",
      "Geometric study 18",
    ),
  },
  {
    slug: "fake-news-detection",
    number: "19",
    title: "Fake News Detection",
    category: "IoT & Other Projects",
    kind: "Academic",
    featured: false,
    context: "Graph learning",
    summary: "Graph neural networks for misinformation detection.",
    overview: "A detection model that treats misinformation as a graph problem.",
    problem: "Misinformation is poorly captured by text features alone when spread depends on relationships.",
    contribution: [
      "Modelled the detection task with graph neural networks.",
      "Classified content for misinformation.",
    ],
    architecture: ["Content graph", "Graph neural network", "Misinformation label"],
    stack: ["Graph Neural Networks", "NLP"],
    outcome: "Graph-based detection of misinformation.",
    image: photo(
      "19",
      "Geometric study 19",
    ),
  },
  {
    slug: "toxic-comment-classifier",
    number: "20",
    title: "Toxic Comment Classifier",
    category: "IoT & Other Projects",
    kind: "Academic",
    featured: false,
    context: "Text classification",
    summary: "BERT multi-label classification of toxic comments, trained on the Jigsaw dataset.",
    overview: "A classifier that can assign more than one toxicity label to a comment.",
    problem: "A single toxic-or-not label hides the different ways a comment can be harmful.",
    contribution: [
      "Trained on the Kaggle Jigsaw dataset.",
      "Used BERT for multi-label toxicity labels and deployed a web UI.",
    ],
    architecture: ["Jigsaw comments", "BERT", "Multi-label web UI"],
    stack: ["BERT", "Kaggle Jigsaw", "NLP"],
    outcome: "Multi-label toxicity classification for comments.",
    image: photo(
      "20",
      "Geometric study 20",
    ),
  },
  {
    slug: "housing-price-prediction",
    number: "21",
    title: "Housing Price Prediction",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Academic",
    featured: false,
    context: "UCSC course, with Sanduni Sathsarani",
    summary:
      "California census housing prices, cleaned and modelled in Python, with a hosted prediction app.",
    overview:
      "A course project that predicts house prices from California census data and serves the trained model in a web app.",
    problem:
      "Raw census tables need cleaning and a fitted model before a price can be estimated for a new home.",
    contribution: [
      "Cleaned and visualised the California census housing data with Sanduni Sathsarani.",
      "Trained a price model and published the notebook, model file, and web app.",
    ],
    architecture: ["California census data", "Cleaning and visualisation", "Trained model", "Hosted web app"],
    stack: ["Python", "Jupyter", "Machine Learning"],
    outcome: "A hosted app that estimates house prices from the course model.",
    links: [
      { label: "Web app", href: "https://sweethome-kvq8.onrender.com/" },
      { label: "GitHub", href: "https://github.com/IT21313370/sweethome" },
    ],
    image: photo(
      "21",
      "Geometric study 21",
    ),
  },
  {
    slug: "human-detection-dvr",
    number: "22",
    title: "Human Detection DVR",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Personal",
    featured: false,
    context: "Open source, July 2025",
    summary:
      "Real-time human detection that splits C++ video capture from a YOLOv5 detector and sends Telegram snapshots.",
    overview:
      "A modular recorder for live video. Capture stays in C++, detection runs in Python, and alerts go out with a snapshot.",
    problem:
      "A single process that captures, detects, and alerts is hard to tune, and repeated alerts from the same person become noise.",
    contribution: [
      "Captured video in C++ with OpenCV and detected people with YOLOv5 in Python.",
      "Connected the two processes with ZeroMQ and sent Telegram snapshots with a cooldown.",
      "Kept camera, detection, and alert settings in JSON, including a Jetson Nano target.",
    ],
    architecture: ["C++ OpenCV capture", "ZeroMQ", "YOLOv5 detection", "Telegram alert"],
    stack: ["C++", "Python", "OpenCV", "YOLOv5", "PyTorch", "ZeroMQ", "Telegram Bot API"],
    outcome: "An open-source recorder that detects a person and sends one snapshot, then waits out the cooldown.",
    links: [{ label: "GitHub", href: "https://github.com/dhananjayaDev/human-detection-dvr" }],
    image: photo(
      "22",
      "Geometric study 22",
    ),
  },
  {
    slug: "kegel-health",
    number: "23",
    title: "Kegel Health",
    category: "Software & Application Engineering",
    kind: "Personal",
    featured: false,
    context: "Personal product, 2026",
    summary:
      "An anonymous Flask assessment that scores the IIEF scale and routes the result to a pelvic-floor or specialist pathway.",
    overview:
      "A no-account health assessment. Answers stay in the session. Scoring and pathway rules sit in the app, and a plan can come from Gemini, a local model, or a template.",
    problem:
      "A short, private assessment is hard to find when public material is mostly product advertising.",
    contribution: [
      "Built a 32-question assessment with IIEF scoring and pathway routing.",
      "Turned published literature, synthesised with Gemini Deep Research, into scoring rules and plan templates.",
      "Shipped the same app as a Render web service, a Windows desktop build, and an Android package.",
    ],
    architecture: ["Anonymous questionnaire", "IIEF scoring", "Pathway routing", "Plan from Gemini, Ollama, or a template"],
    stack: ["Python", "Flask", "Gemini", "Ollama"],
    outcome:
      "A free assessment with no account and no stored personal data. It is informational only, and it is not medical advice, diagnosis, or treatment.",
    links: [
      { label: "Live app", href: "https://kegel-app.onrender.com" },
      { label: "GitHub", href: "https://github.com/dhananjayaDev/Kegel-app" },
    ],
    image: photo(
      "23",
      "Geometric study 23",
    ),
  },
  {
    slug: "predictive-healthcare-operations",
    number: "24",
    title: "Predictive Healthcare Operations",
    category: "Artificial Intelligence & Machine Learning",
    kind: "Personal",
    featured: false,
    context: "Hospital admissions forecast in R",
    summary:
      "A daily admissions forecast in R. ARIMA(1,0,0) beat Holt-Winters on a 58-day holdout, with MAPE 20.2% and RMSE 3.38.",
    overview:
      "A forecasting pipeline for hospital patient flow. It turns 9,216 patient records into a daily admissions series and a model hospitals can use for beds, rosters, and supply buffers.",
    problem:
      "Bed capacity, staffing, and supply buffers depend on how many patients arrive, and that volume is not steady across the week.",
    contribution: [
      "Cleaned 9,216 records in R with dplyr, tidyr, and lubridate, parsed DMY dates, and filled missing departments.",
      "Aggregated admissions to a daily series with weekly frequency and charted age, wait time, and day-of-week patterns.",
      "Tested stationarity with ADF, Phillips-Perron, and KPSS, confirming the series was stationary at level, I(0).",
      "Compared AR(1), AR(2), MA(1), ARMA(1,1), and SARIMA with a Holt-Winters benchmark, and selected ARIMA(1,0,0) with a non-zero mean on AIC and BIC.",
      "Checked the fit with Ljung-Box, Jarque-Bera, and ARCH LM tests.",
    ],
    architecture: [
      "9,216 patient records",
      "Daily admissions series",
      "Stationarity tests",
      "ARIMA(1,0,0)",
    ],
    stack: ["R", "dplyr", "tidyr", "lubridate", "ARIMA", "Holt-Winters"],
    outcome:
      "Out of sample over 58 days, MAPE was 20.2% and RMSE was 3.38, ahead of Holt-Winters. The next-day forecast was 15.9 patients, against a steady mean of about 16 a day. General Practice referrals and walk-ins drove volume. The write-up proposed a fast-track triage corridor, rosters fixed at that mean, and safety stock at the 95% prediction interval of 23 patients.",
    image: photo(
      "24",
      "Geometric study 24",
    ),
  },
  {
    slug: "weather-bi-dashboard",
    number: "25",
    title: "Weather BI Dashboard",
    category: "Data Engineering & Business Intelligence",
    kind: "Personal",
    featured: false,
    context: "Personal open-source dashboard",
    summary:
      "A Streamlit dashboard for live weather by city, a 7-day forecast, and charts of humidity, UV, and wind.",
    overview:
      "An interactive weather dashboard in Python. It reads WeatherAPI for a chosen country and city, then presents the current conditions and the next seven days the way a BI report would.",
    problem:
      "A forecast is hard to scan when the numbers for temperature, humidity, UV, and wind sit in separate responses.",
    contribution: [
      "Loaded live weather and a 7-day forecast from WeatherAPI for a selected country and city.",
      "Charted temperature and the other metrics with Plotly.",
      "Added a location map and animated icons that follow the conditions.",
    ],
    architecture: ["WeatherAPI", "Country and city selection", "Plotly charts", "Streamlit dashboard"],
    stack: ["Python", "Streamlit", "WeatherAPI", "Plotly", "pandas"],
    outcome: "An open-source dashboard for current conditions and a seven-day forecast, built to be read like a BI report.",
    links: [{ label: "GitHub", href: "https://github.com/dhananjayaDev/streamlit-weather-dashboard" }],
    image: {
      src: "/cards/art/25.svg",
      alt: "Geometric study 25",
    },
  },
  {
    slug: "live-gps-tracking",
    number: "26",
    title: "Live GPS Tracking",
    category: "IoT & Other Projects",
    kind: "Personal",
    featured: false,
    context: "ESP32 and Flask",
    summary:
      "An ESP32 tracker that reads a NEO-6M GPS module and plots the live position on a Leaflet map through Flask.",
    overview:
      "A GPS tracker for a moving device. The ESP32 reads coordinates from a GY-GPS6MV2 module and posts them over Wi-Fi. A Flask app keeps the latest fix and draws it on a map.",
    problem: "A coordinate stream on a serial port is not a location someone can follow.",
    contribution: [
      "Read latitude and longitude from a GY-GPS6MV2 module on an ESP32 DevKit V1.",
      "Parsed the GPS serial data and posted each fix to Flask over Wi-Fi.",
      "Drew the live position on a Leaflet.js map, with device status and the time of the last update.",
    ],
    architecture: ["GY-GPS6MV2", "ESP32 over Wi-Fi", "Flask API", "Leaflet.js map"],
    stack: ["ESP32", "GY-GPS6MV2", "Flask", "Leaflet.js", "JavaScript"],
    outcome: "A live map of the device, with its status and the timestamp of the latest fix.",
    image: photo(
      "26",
      "Geometric study 26",
    ),
  },
  {
    slug: "superstore-sales-dashboard",
    number: "27",
    title: "Superstore Sales Dashboard",
    category: "Data Engineering & Business Intelligence",
    kind: "Personal",
    featured: false,
    context: "Power BI Desktop, Sample Superstore",
    summary:
      "A Power BI sales dashboard on the Sample Superstore dataset, with automated insights for outliers, trends, and seasonality.",
    overview:
      "A sales report built in Power BI Desktop from the Sample Superstore CSV. The pages cover the store's sales, and Power BI Insights flags patterns in those visuals.",
    problem: "A sales table hides which category, date, or segment is actually moving the total.",
    contribution: [
      "Modelled the Sample Superstore CSV in Power BI Desktop.",
      "Built report pages and used Insights to surface category outliers, change points, correlations, and major contributors.",
      "Reviewed time-series outliers, overall trends, seasonality, low variance, and steady share on the same report.",
    ],
    architecture: ["Sample Superstore CSV", "Power BI model", "Report visuals", "Automated insights"],
    stack: ["Power BI", "Power BI Insights", "CSV"],
    outcome:
      "A Superstore sales report whose visuals also carry Power BI's automatic reads of outliers, trends, and seasonality.",
    image: photo(
      "27",
      "Geometric study 27",
    ),
  },
  {
    slug: "repair-retail-pos",
    number: "28",
    title: "Repair & Retail POS System",
    category: "Software & Application Engineering",
    kind: "Professional",
    featured: false,
    context: "Repair and retail shop operations",
    summary:
      "A Flask and SQLite point of sale for a repair and retail shop, covering billing, repair tickets, stock barcodes, and a Windows desktop app.",
    overview:
      "Day-to-day software for the shop. Cashiers bill, scan stock, and track repairs. Admins also get the sales log, forecasts, user accounts, and backups.",
    problem:
      "Billing, repair tickets, and stock were separate, so a sale, a barcode, and a part used on a repair were easy to lose track of.",
    contribution: [
      "Built multi-item billing with USB barcode scanning, PDF invoices, and thermal receipts.",
      "Tracked repair tickets from pending to delivered, with parts, labor, and a service fee on the bill.",
      "Managed appliance and parts stock with automatic item codes and Code128 labels.",
      "Added an admin sales log and reports, including a short forecast, plus login, backups, and a Windows installer.",
    ],
    architecture: ["Flask and SQLite", "POS, inventory, and repairs", "Code128 labels and thermal receipts", "Windows desktop app"],
    stack: ["Python", "Flask", "SQLite", "Code128", "Plotly", "ReportLab"],
    outcome:
      "Shop staff run billing, stock, and repairs from one local app, with a Windows installer for the counter.",
    image: photo(
      "28",
      "Geometric study 28",
    ),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getLineup() {
  return [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured) || a.number.localeCompare(b.number),
  );
}

export function getRelatedProjects(project: Project) {
  const others = projects.filter((item) => item.slug !== project.slug);
  const same = others.filter((item) => item.category === project.category);
  const rest = others.filter((item) => item.category !== project.category);
  return [...same, ...rest].slice(0, 4);
}
