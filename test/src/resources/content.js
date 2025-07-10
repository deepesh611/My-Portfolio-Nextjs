import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Deepesh",
  lastName: "Patil",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cloud & Automation Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "deepeshvcd6273@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
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
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
    title: <>Recent project: <strong className="ml-4">AI Automation</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },

  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building reliable, automated networks</>,
  subline: (
    <>
      I'm {person.firstName}, a {person.role} and I engineer reliable infrastructure and automate complex systems. After hours, I experiment with new tools and build side projects.
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Deepesh is a DevOps-focused engineer passionate about transforming complex infrastructure challenges into simple, scalable, and reliable solutions. His work spans automation, cloud architecture, and the intersection of DevOps, systems engineering, and innovation.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indian Institute of Information Technology, Pune",
        description: <>Studied B.Tech. in Computer Science and Engineering.</>,
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Terraform",
        description: <>Infrastructure as Code for automating cloud provisioning and management.</>,
        images: [
          {
            src: "/images/skills/terraform-01.png",
            alt: "Terraform infrastructure code",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/terraform-02.png",
            alt: "Terraform automation example",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Docker",
        description: <>Containerizing applications to create consistent, portable environments.</>,
        images: [
          {
            src: "/images/skills/docker-01.png",
            alt: "Docker containers",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Kubernetes",
        description: <>Orchestrating containerized applications for scalable deployments.</>,
        images: [
          {
            src: "/images/skills/k8s-01.png",
            alt: "Kubernetes dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Ansible",
        description: <>Automation of server configuration and application deployment.</>,
        images: [],
      },
      {
        title: "Linux Server Administration",
        description: <>Managing and securing Linux servers with shell scripting and system tools.</>,
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
