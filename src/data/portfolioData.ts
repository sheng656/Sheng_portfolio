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
      { id: "about", label: "About", targetId: "about" },
      { id: "skills", label: "Skills", targetId: "skills" },
      { id: "experience", label: "Experience", targetId: "experience" },
      { id: "projects", label: "Projects", targetId: "projects" },
      { id: "certifications", label: "Certifications", targetId: "certifications" },
      { id: "contact", label: "Contact", targetId: "contact" },
    ],
    ctaLabel: "Get In Touch",
    ctaTargetId: "contact",
  },
  hero: {
    id: "hero",
    intro: "Software Developer | AWS Cloud + Full-Stack",
    name: "Sheng",
    roles: [
      "AWS Certified Solutions Architect Associate",
      "Full-Stack Developer",
      "Cloud & AI Engineer",
    ],
    summary:
      "I build scalable, cloud-native products with React, TypeScript, Node.js, and AWS serverless architecture.",
    actions: [
      { label: "View My Work", targetId: "projects", variant: "primary" },
      { label: "Download CV", href: "/cv.pdf", variant: "secondary" },
    ],
  },
  about: {
    id: "about",
    heading: "About Me",
    bio:
      "I am a software developer from China, now based in Auckland, New Zealand, focused on building reliable full-stack applications and cloud-first systems.",
    transitionStory: [
      "I began my career in government management, where I led process and operations initiatives with measurable impact.",
      "That experience sharpened my systems thinking and communication, which now helps me ship software that is both technically strong and aligned to business outcomes.",
      "I transitioned into software development to combine analytical problem-solving with hands-on engineering craftsmanship.",
    ],
    highlights: [
      { iconKey: "map-pin", label: "Location", value: "Auckland, New Zealand" },
      { iconKey: "briefcase", label: "Status", value: "Actively job hunting" },
      { iconKey: "languages", label: "Languages", value: "English, Mandarin" },
    ],
    photoAlt: "Portrait placeholder for Sheng",
  },
  skills: {
    id: "skills",
    heading: "Skills",
    categories: [
      {
        id: "cloud-aws",
        title: "Cloud & AWS",
        tags: [
          { name: "AWS Lambda", iconKey: "cloud" },
          { name: "API Gateway", iconKey: "network" },
          { name: "DynamoDB", iconKey: "database" },
          { name: "S3", iconKey: "storage" },
          { name: "CloudFormation", iconKey: "stack" },
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        tags: [
          { name: "React", iconKey: "react" },
          { name: "TypeScript", iconKey: "code" },
          { name: "Tailwind CSS", iconKey: "palette" },
          { name: "Vite", iconKey: "bolt" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        tags: [
          { name: "Node.js", iconKey: "server" },
          { name: "Express", iconKey: "route" },
          { name: "PostgreSQL", iconKey: "database" },
          { name: "REST APIs", iconKey: "plug" },
        ],
      },
      {
        id: "ai-ml",
        title: "AI & ML",
        tags: [
          { name: "Prompt Engineering", iconKey: "spark" },
          { name: "Model Integration", iconKey: "brain" },
          { name: "Vector Search", iconKey: "search" },
        ],
      },
      {
        id: "tools",
        title: "Tools",
        tags: [
          { name: "GitHub Actions", iconKey: "workflow" },
          { name: "Docker", iconKey: "container" },
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
        id: "exp-placeholder-1",
        title: "Full-Stack Developer",
        organization: "Project / Company Name",
        location: "Auckland, New Zealand",
        startDate: "2024",
        endDate: "Present",
        bulletPoints: [
          "Built and deployed production-ready features across React frontend and Node.js backend services.",
          "Designed API workflows and cloud integrations for scalable serverless delivery.",
          "Collaborated with stakeholders to translate business requirements into technical implementation.",
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
        title: "Master of Information Technology (First Class Honours)",
        organization: "University of Auckland",
        location: "Auckland, New Zealand",
        startDate: "2024",
        endDate: "May 2026",
        bulletPoints: [
          "Specialized in software engineering, cloud computing, and modern full-stack architecture.",
        ],
      },
    ],
  },
  projects: {
    id: "projects",
    heading: "Projects",
    items: [
      {
        id: "project-portfolio",
        name: "Developer Portfolio",
        description:
          "Personal portfolio website showcasing full-stack projects, cloud certifications, and engineering approach.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        links: [
          { label: "GitHub", href: "https://github.com/sheng656" },
          { label: "Live Demo", href: "https://example.com" },
        ],
      },
      {
        id: "project-serverless-api",
        name: "Serverless Task API",
        description:
          "AWS serverless backend for task management with Lambda, API Gateway, and DynamoDB.",
        techStack: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB"],
        links: [
          { label: "GitHub", href: "https://github.com/sheng656" },
          { label: "Live Demo", href: "https://example.com" },
        ],
      },
      {
        id: "project-analytics-dashboard",
        name: "Cloud Analytics Dashboard",
        description:
          "Interactive dashboard with role-based access and data visualization for operational insights.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        links: [
          { label: "GitHub", href: "https://github.com/sheng656" },
          { label: "Live Demo", href: "https://example.com" },
        ],
      },
    ],
  },
  certifications: {
    id: "certifications",
    heading: "Certifications",
    items: [
      {
        id: "aws-saa",
        name: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        issueDate: "2025-01",
        badgeImageUrl: "/badges/aws-saa.png",
        verificationUrl: "https://www.credly.com",
      },
    ],
  },
  contact: {
    id: "contact",
    heading: "Contact",
    description: "I am available for full-time software development opportunities.",
    formLabels: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
    availability: {
      statusText: "Available for work",
      isOpenToWork: true,
    },
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sheng-chen-chsh48/",
      },
      {
        label: "GitHub",
        href: "https://github.com/sheng656",
      },
      {
        label: "Email",
        href: "mailto:chsh48@gmail.com",
      },
    ],
  },
};
