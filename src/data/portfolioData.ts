import type { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  theme: {
    defaultMode: "dark",
    storageKey: "sheng-portfolio-theme",
    accentColor: "#13c7a4",
  },
  fonts: {
    display: "Sora",
    body: "Manrope",
    mono: "JetBrains Mono",
    importUrl:
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap",
  },
  navbar: {
    brand: "Sheng",
    items: [
      { id: "projects", label: "Projects", targetId: "projects" },
      { id: "about", label: "About", targetId: "about" },
      { id: "skills", label: "Skills", targetId: "skills" },
      { id: "certifications", label: "Certifications", targetId: "certifications" },
      { id: "experience", label: "Experience", targetId: "experience" },
      { id: "contact", label: "Contact", targetId: "contact" },
    ],
    ctaLabel: "Get In Touch",
    ctaTargetId: "contact",
  },
  hero: {
    id: "hero",
    intro: "Software Developer | AWS Cloud + Full-Stack",
    name: "Sheng Chen",
    roles: [
      "AWS Certified Solutions Architect – Associate",
      "Full-Stack Developer",
      "Cloud & AI Engineer",
    ],
    summary:
      "I build scalable, cloud-native products with React, TypeScript, Node.js, and AWS serverless architecture — with a background in government management that keeps me focused on the why, not just the how.",
    actions: [
      { label: "View My Work", targetId: "projects", variant: "primary" },
      { label: "Download CV", href: "/Sheng_Chen_CV.pdf", variant: "secondary" },
    ],
  },
  about: {
    id: "about",
    heading: "About Me",
    bio: "I'm a software developer from China, now based in Auckland, New Zealand, focused on building reliable full-stack applications and cloud-first systems. Outside of coding, I'm a marathon runner — I've completed several full marathons and find long-distance running keeps me grounded and focused.",
    transitionStory: [
      "I spent eight years in government roles — coordinating cross-departmental initiatives and driving outcomes in water resources and HR. That experience built strong systems thinking and a genuine curiosity about why things work the way they do.",
      "I transitioned into software development to combine that analytical foundation with hands-on engineering. I'm currently finishing my Master of Information Technology (First Class Honours) at the University of Auckland.",
      "My edge is the combination: technical depth in AWS serverless architecture and full-stack development, paired with the structured problem-solving that comes from years of working across complex, real-world projects.",
    ],
    highlights: [
      { iconKey: "map-pin", label: "Location", value: "Auckland, New Zealand" },
      { iconKey: "briefcase", label: "Status", value: "Available immediately" },
      { iconKey: "languages", label: "Languages", value: "English, Mandarin" },
    ],
    photoAlt: "Sheng Chen – Software Developer",
    photoSrc: "/Sheng.jpg",
  },
  skills: {
    id: "skills",
    heading: "Skills",
    categories: [
      {
        id: "cloud",
        title: "Cloud",
        tags: [
          { name: "AWS Lambda", iconKey: "cloud" },
          { name: "API Gateway", iconKey: "network" },
          { name: "DynamoDB", iconKey: "database" },
          { name: "S3", iconKey: "storage" },
          { name: "Amplify", iconKey: "bolt" },
          { name: "Cognito", iconKey: "shield" },
          { name: "Bedrock", iconKey: "brain" },
          { name: "CloudFront", iconKey: "globe" },
          { name: "CDK", iconKey: "stack" },
          { name: "EventBridge", iconKey: "workflow" },
          { name: "SSM Parameter Store", iconKey: "key" },
          { name: "Azure App Service", iconKey: "cloud" },
          { name: "Azure Functions", iconKey: "bolt" },
          { name: "Azure Storage", iconKey: "storage" },
          { name: "Azure SQL", iconKey: "database" },
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        tags: [
          { name: "React", iconKey: "react" },
          { name: "TypeScript", iconKey: "code" },
          { name: "Next.js", iconKey: "bolt" },
          { name: "Tailwind CSS", iconKey: "palette" },
          { name: "Vite", iconKey: "bolt" },
          { name: "Framer Motion", iconKey: "spark" },
          { name: "Svelte", iconKey: "code" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        tags: [
          { name: "Node.js", iconKey: "server" },
          { name: "Express", iconKey: "route" },
          { name: "Python", iconKey: "code" },
          { name: "Java", iconKey: "code" },
          { name: "MongoDB", iconKey: "database" },
          { name: "PostgreSQL", iconKey: "database" },
          { name: "SQLite", iconKey: "database" },
          { name: "REST APIs", iconKey: "plug" },
          { name: "JWT / Auth", iconKey: "shield" },
        ],
      },
      {
        id: "ai-ml",
        title: "AI & ML",
        tags: [
          { name: "AWS Bedrock", iconKey: "brain" },
          { name: "Generative AI", iconKey: "spark" },
          { name: "RAG / LLM Integration", iconKey: "search" },
          { name: "Prompt Engineering", iconKey: "code" },
          { name: "Machine Learning (Python)", iconKey: "chart" },
        ],
      },
      {
        id: "tools",
        title: "Tools & Practices",
        tags: [
          { name: "Git / GitHub", iconKey: "workflow" },
          { name: "CI/CD", iconKey: "workflow" },
          { name: "Serverless Architecture", iconKey: "cloud" },
          { name: "Supabase / Firebase", iconKey: "database" },
          { name: "Vercel", iconKey: "bolt" },
          { name: "Postman", iconKey: "api" },
          { name: "Figma", iconKey: "design" },
        ],
      },
    ],
  },
  experience: {
    id: "experience",
    heading: "Experience",
    entries: [
      {
        id: "exp-hr-manager",
        title: "Human Resources Manager",
        organization: "Huzhou Agriculture and Rural Affairs Bureau",
        location: "Zhejiang, China",
        startDate: "Jun 2022",
        endDate: "Feb 2024",
        bulletPoints: [
          "Managed full employee lifecycle including hiring, onboarding, benefits administration, and retirement processes.",
          "Coordinated cross-departmental HR initiatives and compliance reporting.",
        ],
      },
      {
        id: "exp-water-manager",
        title: "Water Resources Manager",
        organization: "Yuyue Town Government",
        location: "Zhejiang, China",
        startDate: "Sep 2016",
        endDate: "Jun 2022",
        bulletPoints: [
          "Oversaw water quality monitoring and environmental protection for 11 villages including monthly water testing.",
          "Led coordination of river dredging and ecological restoration projects across the region.",
        ],
      },
    ],
  },
  education: {
    id: "education",
    heading: "Education",
    entries: [
      {
        id: "edu-uoa-mit",
        title: "Master of Information Technology – First Class Honours",
        organization: "University of Auckland",
        location: "Auckland, New Zealand",
        startDate: "Feb 2024",
        endDate: "May 2026",
        bulletPoints: [
          "Specialized in software engineering, cloud computing, and modern full-stack architecture.",
          "Capstone project: AI-powered predictive maintenance dashboard using AWS Bedrock and serverless architecture.",
        ],
      },
      {
        id: "edu-zju-mpa",
        title: "Master of Public Administration",
        organization: "Zhejiang University",
        location: "Zhejiang, China",
        startDate: "Sep 2018",
        endDate: "Jun 2023",
        bulletPoints: [],
      },
      {
        id: "edu-zju-agronomy",
        title: "Bachelor of Agronomy",
        organization: "Zhejiang University",
        location: "Zhejiang, China",
        startDate: "Sep 2010",
        endDate: "Jun 2015",
        bulletPoints: [],
      },
    ],
  },
  projects: {
    id: "projects",
    heading: "Projects",
    items: [
      {
        id: "project-auckland-weekend-planner",
        name: "Auckland Weekend Planner",
        description:
          "An AI-powered travel assistant that aggregates real-time events from Eventfinda and Auckland Council to generate personalized, weather-aware weekend itineraries using Claude 4.5 Haiku and AWS Serverless.",
        techStack: [
          "Next.js 14+",
          "Tailwind CSS",
          "Framer Motion",
          "AWS CDK",
          "Lambda (Node.js 22.x)",
          "API Gateway",
          "DynamoDB",
          "Bedrock (Claude 4.5 Haiku)",
          "S3 + CloudFront",
          "SSM Parameter Store",
          "OpenWeather API",
          "Jest",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/sheng656/AucklandWeekendPlanner" },
          { label: "Live Demo", href: "https://weekend.sheng.nz/" },
        ],
        screenshots: ["/projects/planner-mobile-1.png", "/projects/planner-mobile-2.png"],
      },
      {
        id: "project-running-planner",
        name: "Auckland Running Route Planner",
        description:
          "A smart route planning tool for runners featuring AI-generated loops, free-hand drawing with road-snapping, live elevation profiles, and GPX exports for Garmin devices.",
        techStack: [
          "React 19",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Mapbox GL JS",
          "Mapbox GL Draw",
          "Recharts",
          "Radix UI",
          "AWS SAM",
          "Lambda (Node.js 22.x)",
          "API Gateway",
          "SSM Parameter Store",
          "OpenRouteService API",
          "Vitest",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/sheng656/running-route-planner" },
          { label: "Live Demo", href: "https://running.sheng.nz/" },
        ],
        screenshots: ["/projects/running-mobile-1.png", "/projects/running-mobile-2.png"],
      },
      {
        id: "project-havenly",
        name: "Havenly – Children's Emotional Support App",
        description:
          "A bilingual emotional support app for children with age-aware AI companionship, mood tracking, and a gamified garden system, focused on mental wellbeing and safety.",
        techStack: [
          "React 19",
          "TypeScript",
          "Vite",
          "CSS Modules",
          "GitHub Models (GPT-4o-mini)",
          "Firebase Firestore (optional)",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/sheng656/HavenlyAPP" },
          { label: "Live Demo", href: "https://havenly.sheng.nz/" },
        ],
        screenshots: ["/projects/havenly-mobile-1.png", "/projects/havenly-mobile-2.png"],
      },
    ],
  },
  certifications: {
    id: "certifications",
    heading: "Certifications",
    items: [
      {
        id: "aws-saa",
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        issueDate: "2026-03",
        badgeImageUrl: "/badges/aws-saa.png",
        verificationUrl: "https://www.credly.com/badges/d4203183-0878-4933-bd6d-631d7a5a74d7/public_url",
      },
    ],
  },
  contact: {
    id: "contact",
    heading: "Contact",
    description:
      "I'm actively looking for full-time or part-time software development opportunities in Auckland. Open to full-stack, cloud, or AI-focused roles — happy to chat.",
    availability: {
      statusText: "Available immediately",
      isOpenToWork: true,
    },
    emailAddress: "chsh48@gmail.com",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sheng-chen-chsh48/",
      },
      {
        label: "GitHub",
        href: "https://github.com/sheng656",
      },
    ],
  },
};