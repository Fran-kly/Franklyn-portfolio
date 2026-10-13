export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  status: string;
  artwork: "weather" | "ai" | "dice" | "todo";
  href?: string;
  linkText?: string;
};

export const profile = {
  name: "Franklyn Ngurukwem",
  role: "Data Analyst & Python Developer",
  location: "Lagos, Nigeria",
  github: "https://github.com/Fran-kly",
  intro:
    "I turn raw data into useful insights and build practical software solutions. My work spans data cleaning, Power BI reporting, Python applications, and web development.",
  about:
    "I'm a Computer Science graduate from Michael Okpara University of Agriculture, Umudike, with internship experience in data analytics and Python development. I enjoy solving real problems, communicating findings clearly, and learning by building.",
};

export const projects: Project[] = [
  {
    title: "AI Invasion for Kids — Website Prototype",
    eyebrow: "WEB DEVELOPMENT · OCTAVE ANALYTICS & INSIGHTS",
    description:
      "Built a multi-page website concept for Octave's AI learning initiative for young people. The prototype was not adopted as the programme's official website; I plan to refine it further.",
    tags: ["HTML", "CSS", "Web Design"],
    status: "Prototype · not launched as official site",
    artwork: "ai",
    href: "https://ai-invasion-site.vercel.app/",
    linkText: "View prototype",
  },
  {
    title: "Python Weather Application",
    eyebrow: "PYTHON · API INTEGRATION",
    description:
      "A Python application that requests real-time weather information from the OpenWeather API and presents useful conditions for a selected city.",
    tags: ["Python", "Requests", "REST API"],
    status: "Built · repository security cleanup pending",
    artwork: "weather",
  },

  {
    title: "Roll-a-Dice Project Generator",
    eyebrow: "INTERACTIVE APP · COMMUNITY CHALLENGE",
    description:
      "Originally developed in Python for the Data Geeks Community challenge. This interactive web version randomly generates a member, project topic, visualization tool, tool stack, and project type.",
    tags: ["Python", "React", "TypeScript", "Randomization"],
    status: "Interactive demo available",
    artwork: "dice",
    href: "/roll-a-dice",
    linkText: "Try live demo",
  },
  {
    title: "Command-Line To-Do App",
    eyebrow: "PYTHON · TASK MANAGEMENT",
    description:
      "A command-line task manager supporting adding, completing, deleting and saving tasks. Built during my Python development internship.",
    tags: ["Python", "CLI", "File Handling"],
    status: "Completed",
    artwork: "todo",
    href: "https://github.com/Fran-kly/synent-task3-todo-cli-franklyn-chigozirim-ngurukwem",
    linkText: "View code",
  },
];

export const experiences = [
  {
    role: "Data Analysis Intern",
    company: "Octave Analytics & Insights",
    period: "Mar – Aug 2025",
    description:
      "Prepared and analyzed data using Excel, Power Query, Power BI, SQL and Python. Contributed to Nigerian budget dashboards and EFInA A2F data preparation, supported an AI programme website, and carried out functional testing of Bank360.ng.",
    points: [
      "Developed interactive Power BI reports using Nigerian federal budget data",
      "Cleaned missing values and checked consistency in EFInA A2F datasets",
      "Supported an AI education website and registration initiative",
      "Conducted manual functional testing of Bank360.ng, identifying and documenting issues involving navigation, registration, form validation, authentication workflows, and user experience",
    ],
  },
  {
    role: "Python Development Intern",
    company: "Synent Technologies · Remote",
    period: "Apr – Jun 2026",
    description:
      "Completed hands-on Python development tasks involving command-line programs, API integration and Flask web applications.",
    points: [
      "Created a command-line To-Do application",
      "Integrated the OpenWeather API into a Python weather application",
      "Developed a Flask application with Jinja2 templates",
    ],
  },
];

export const skillGroups = [
  {
    title: "Data & Analytics",
    skills: [
      "Excel",
      "Google Sheets",
      "Power BI",
      "Power Query",
      "SQL",
      "pandas",
      "Data Visualization",
    ],
  },
  {
    title: "Programming & Web",
    skills: ["Python", "Flask", "REST APIs", "HTML", "CSS", "Git", "GitHub"],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "VS Code",
      "Jupyter Notebook",
      "Oracle SQL",
      "TOAD",
      "Vercel",
      "Problem Solving",
    ],
  },
];

export const certifications = [
  {
    title: "Soft Skills & Workplace Competency Certification",
    issuer: "Jobberman Nigeria",
    year: "2026",
  },
  {
    title: "Python Development Certification",
    issuer: "Synent Technologies",
    year: "2026",
  },
  {
    title: "NSQ Level 3 – Frontend Web Development",
    issuer: "CPN",
    year: "2025",
  },
  {
    title: "Certificate of Completion – Industrial Training (Data Analysis)",
    issuer: "Octave Analytics & Insights",
    year: "2025",
  },
];
