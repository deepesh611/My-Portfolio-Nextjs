import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Deepesh",
  lastName: "Patil",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "deepeshvcd6273@gmail.com",
  location: "Asia/Kolkata",                      // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"],   
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/deepesh611",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/deepesh-patil-103a87258/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_deepesh_v.p/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Tool Stash</strong></>,
    href: "/work/tool-stash",
  },

  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing intelligent systems — from GenAI apps to production data pipelines</>,
  subline: (
    <>
      I'm {person.firstName}, an {person.role} focused on GenAI applications, Databricks/PySpark pipelines, and reliable full-stack delivery — with a practical eye for evaluation, observability, and deployment.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  resume: {
    display: true,
    link: "/resume.pdf", // Place your resume PDF in /public folder
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Deepesh is an AI/Data Engineer building GenAI applications and data pipelines with Databricks and PySpark. His work spans LLM evaluation, MLflow-based observability, synthetic healthcare data generation, and full-stack Python apps focused on validation, security, and reliable delivery.
      </>
    ),
  },
  
  work: {
    display: true,             
    title: "Experience",
    experiences: [
      {
        company: "Abacus Insights",
        timeframe: "Jun 2026 – Oct 2026",
        role: "AI Engineer",
        achievements: [
          <>
            Built and deployed a Databricks App for Genie NL2SQL evaluation, capturing MLflow traces in Unity Catalog and scoring outputs with schema-grounding checks and MLflow judges.
          </>,
          <>
            Developed a deterministic PySpark synthetic eligibility-data generator (8 scenario types, 25 quality gates, idempotent Delta writes), producing 752K eligibility spans for 422K synthetic members.
          </>,
          <>
            Built a synthetic Payment Integrity case pipeline with deterministic IDs and nine validation gates; delivered 17 approved cases.
          </>,
          <>
            Set up Databricks Asset Bundle deployment for multi-workspace delivery with CI packaging checks, and compared MLflow vs Langfuse observability on 1,145 benchmark traces.
          </>,
        ],
      },
      {
        company: "Abacus Insights",
        timeframe: "Apr 2026 – May 2026",
        role: "Supervised Project — Claim Denial Prevention",
        achievements: [
          <>
            Built a claim-denial prevention prototype on synthetic data using XGBoost, SHAP, FastAPI, Next.js, and a Databricks medallion pipeline — predicting denial risk and generating remediation guidance before payer submission.
          </>,
        ],
      },
      {
        company: "Saints Peter & Paul Roman Catholic Church",
        timeframe: "Jul 2025 - Aug 2025",
        role: "Full-Stack Developer (Volunteer)",
        achievements: [
          <>
            Designed and implemented a self-hosted data management system to centralize member records and family relationships, replacing manual and fragmented workflows with a structured, queryable platform.
          </>,
          <>
            Architected an automation-first backend using containerized n8n workflows, enabling API-driven CRUD operations, media processing, and ETL pipelines without maintaining a traditional server codebase.
          </>,
          <>
            Developed an analytics interface to surface demographic and employment insights in real time, helping administrators make data-informed planning decisions.
          </>,    
        ],
      },
    ],
  },

  achievements: {
    display: true,
    title: "Achievements",
    items: [
      {
        title: "Co-Head, R.O.F.I.E.S Robotics Club, IIIT Pune",
        description:
          <>
            Led and mentored a 20-member robotics team across Arduino programming, sensor integration, and end-to-end system design, delivering 7 projects. Conducted 10+ workshops for 100+ students and organized competitions and community events to grow practical learning on campus.
          </>,
        date: "2023 – 2025",
      },
      {
        title: "Hackathon Finalist",
        description:
          <>
            Advanced to final rounds in multiple college-level and national hackathons, gaining hands-on experience in rapid problem-solving, teamwork, and technical execution under time constraints.
          </>,
        date: "2022-2025",
      },
      {
        title: "Open Source Contributions",
        description:
          <>
            Ranked 9th among 230+ contributors in VSoC, demonstrating consistent contributions and collaboration across multiple open-source projects.
          </>,
        date: "July 2024",
      }
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Indian Institute of Information Technology, Pune",
        description: <>B.Tech. in Computer Science and Engineering</>,
        timeframe: "2022 - 26",
      },
    ],
  },

  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        title: "AWS Cloud Quest: Cloud Practitioner",
        issuer: "AWS",
        date: "Aug 2025",
        link: "https://www.credly.com/badges/d78639d5-3eeb-4732-9ee0-a79bd0c98cdb/public_url",
      },
      {
        title: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
        date: "Jul 2025",
        link: "https://badges.parchment.com/public/assertions/vyZsFWkgRCWUryUaSLe64w?identity__email=deepeshvcd6273%40gmail.com",
      },
      {
        title: "Artificial Intelligence with Python",
        issuer: "Coincent",
        date: "Jul 2023",
        image: {
          src: "/certs/Artificial Intelligence with Python-Training-1.png",
          alt: "Artificial Intelligence with Python Certificate",
          width: 16,
          height: 11,
        },
      },
    ],
  },

  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Programming Languages",
      description: <>Python · SQL · Bash · Go · TypeScript · C/C++</>,
      images: [],
    },
    {
      title: "AI & Data Engineering",
      description: <>PySpark · Databricks · Delta Lake · Unity Catalog · MLflow · Langfuse · LLM evaluation · RAG · FAISS</>,
      images: [],
    },
    {
      title: "Backend & Web",
      description: <>FastAPI · Flask · React · TypeScript · REST APIs</>,
      images: [],
    },
    {
      title: "Cloud & Delivery",
      description: <>Docker · Kubernetes · AWS · Git · GitHub Actions · Databricks Asset Bundles · Linux</>,
      images: [],
    },
  ],
},

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
