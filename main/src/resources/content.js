import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Deepesh",
  lastName: "Patil",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
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
    title: <>Recent project: <strong className="ml-4">AetherStore</strong></>,
    href: "/work/aetherstore",
  },

  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing intelligent systems — from AI agents to production infrastructure</>,
  subline: (
    <>
      I'm {person.firstName}, a {person.role} focused on building distributed systems, AI-driven architectures, and self-hosted infrastructure with an emphasis on reliability, scalability, and low-level understanding.
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
        Deepesh is a software engineer focused on designing and building distributed systems, production infrastructure, and AI-driven architectures. His work spans systems engineering, self-hosted infrastructure, and automation, with an emphasis on reliability, scalability, and understanding how systems behave at a low level.
      </>
    ),
  },
  
  work: {
    display: true,             
    title: "Work Experience",
    experiences: [
      // {
      //   company: "Abacus Insights",
      //   timeframe: "2026 - Present",
      //   role: "AI Engineer",
      //   achievements: [
      //     <>
      //     Developed a multimodal AI system that generates concise summaries from videos by running parallel pipelines for visual frame analysis and audio-based transcription and understanding.
      //     </>,
      //     <>
      //     Developed a self-hosted home server setup designed to run containerized services, manage personal infrastructure, and explore real-world DevOps, networking, and system administration practices.
      //     </>,
      //   ],
      //   images: [
      //     // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      {
        company: "Saints Peter & Paul Roman Catholic Church",
        timeframe: "Jul 2025 - Aug 2025",
        role: "Freelance Full Stack Developer",
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
        images: [
          {
            src: "/images/about/freelance/01.png",
            alt: "landing page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/about/freelance/03.png",
            alt: "stats page",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  achievements: {
    display: true,
    title: "Achievements",
    items: [
      {
        title: "Co-Head of Robotics Community",
        description: <>
        Led and scaled the college robotics community for over a year by organizing 10+ hands-on workshops, technical sessions, and competitions, fostering peer learning and practical exposure to robotics, automation, and problem-solving among students.
      </>,
        date: "Aug 2025",
      },
      {
        title: "Open Source Contributions",
        description:
          <>
            Actively contributed to multiple open-source projects and ranked 9th among 230+ contributors in VSoC, demonstrating consistent code contributions, collaboration within distributed teams, and a strong commitment to open-source engineering.
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
        title: "Top Contributor in Open Source (VSoC)",
        issuer: "Vinyasa Club / Devfolio",
        date: "Oct 2024",
      },
      {
        title: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
        date: "Jul 2025",
        link: "https://badges.parchment.com/public/assertions/vyZsFWkgRCWUryUaSLe64w?identity__email=deepeshvcd6273%40gmail.com",
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python . Go . JavaScript . SQL</>,
        images: [],
      },
      {
        title: "Systems & Infrastructure",
        description: <>Linux · Docker · Networking · Self-Hosting</>,
        images: [],
      },
      {
        title: "Backend & Data",
        description: <>REST APIs · MySQL · SQLite · ETL Pipelines · Event-Driven Systems</>,
        images: [],
      },
      {
        title: "AI & Intelligent Systems",
        description: <>LLMs · Multi-Agent Systems · Multimodal Pipelines</>,
        images: [],
      },
      {
        title: "Engineering Tooling",
        description: <>Git · GitHub · n8n (Automation)</>,
        images: [],
      },
    ]
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

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
