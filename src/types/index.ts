export type ThemeMode = "dark" | "light";

export interface FontRecommendation {
  display: string;
  body: string;
  mono: string;
  importUrl: string;
}

export interface ThemeConfig {
  defaultMode: ThemeMode;
  storageKey: string;
  accentColor: string;
}

export interface NavItem {
  id: string;
  label: string;
  targetId: string;
}

export interface NavbarData {
  brand: string;
  items: NavItem[];
  ctaLabel: string;
  ctaTargetId: string;
}

export interface HeroAction {
  label: string;
  targetId?: string;
  href?: string;
  variant: "primary" | "secondary";
}

export interface HeroData {
  id: string;
  intro: string;
  name: string;
  roles: string[];
  summary: string;
  actions: HeroAction[];
}

export interface HighlightItem {
  iconKey: string;
  label: string;
  value: string;
}

export interface AboutData {
  id: string;
  heading: string;
  bio: string;
  transitionStory: string[];
  highlights: HighlightItem[];
  photoAlt: string;
  photoSrc: string;
}

export interface SkillTag {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  tags: SkillTag[];
}

export interface SkillsData {
  id: string;
  heading: string;
  categories: SkillCategory[];
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}

export interface ExperienceData {
  id: string;
  heading: string;
  entries: TimelineEntry[];
}

export interface EducationData {
  id: string;
  heading: string;
  entries: TimelineEntry[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
}

export interface ProjectsData {
  id: string;
  heading: string;
  items: ProjectItem[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  badgeImageUrl: string;
  verificationUrl: string;
}

export interface CertificationsData {
  id: string;
  heading: string;
  items: CertificationItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactData {
  id: string;
  heading: string;
  description: string;
  availability: {
    statusText: string;
    isOpenToWork: boolean;
  };
  emailAddress: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  theme: ThemeConfig;
  fonts: FontRecommendation;
  navbar: NavbarData;
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  experience: ExperienceData;
  education: EducationData;
  projects: ProjectsData;
  certifications: CertificationsData;
  contact: ContactData;
}
