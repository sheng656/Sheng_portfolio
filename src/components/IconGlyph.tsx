import type { ReactNode } from "react";

interface IconGlyphProps {
  name: string;
  className?: string;
}

const glyphs: Record<string, ReactNode> = {
  "map-pin": (
    <>
      <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M3 12h18" />
    </>
  ),
  languages: (
    <>
      <path d="M4 5h8" />
      <path d="M8 5v14" />
      <path d="M4 11h8" />
      <path d="m14 16 2-5 2 5" />
      <path d="M13 18h6" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 1 1 .7-7.9A5 5 0 0 1 17.5 12H18a3 3 0 1 1 0 6H7Z" />
    </>
  ),
  network: (
    <>
      <rect x="10" y="4" width="4" height="4" rx="1" />
      <rect x="4" y="16" width="4" height="4" rx="1" />
      <rect x="16" y="16" width="4" height="4" rx="1" />
      <path d="M12 8v4M6 16v-2h12v2" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="6" ry="2.5" />
      <path d="M6 6v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6" />
      <path d="M6 12v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-6" />
    </>
  ),
  storage: (
    <>
      <rect x="4" y="5" width="16" height="5" rx="1" />
      <rect x="4" y="14" width="16" height="5" rx="1" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </>
  ),
  react: (
    <>
      <circle cx="12" cy="12" r="1.4" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" />
    </>
  ),
  code: (
    <>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 5-2 14" />
    </>
  ),
  palette: (
    <>
      <path d="M12 4a8 8 0 0 0 0 16h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h2a5 5 0 0 0 0-10h-2Z" />
      <circle cx="8" cy="9" r="1" />
      <circle cx="11" cy="7" r="1" />
      <circle cx="15" cy="8" r="1" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1" />
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <path d="M8 7h.01M8 17h.01M12 7h6M12 17h6" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h4a4 4 0 1 1 0 8h-1" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8Z" />
      <path d="M12 16v5" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.8 4.8L19 9.6l-4.2 2.4L13.2 17 12 12.8 10.8 17 9.2 12l-4.2-2.4 5.2-1.8L12 3Z" />
    </>
  ),
  brain: (
    <>
      <path d="M9 8a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0V8Z" />
      <path d="M9 11H7a2 2 0 1 1 0-4h1M15 11h2a2 2 0 1 0 0-4h-1" />
      <path d="M9 14H7a2 2 0 1 0 0 4h2M15 14h2a2 2 0 1 1 0 4h-2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4-4" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <rect x="15" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <path d="M9 7h6M12 10v4" />
    </>
  ),
  container: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M9 6v12M15 6v12M3 12h18" />
    </>
  ),
  api: (
    <>
      <path d="M7 7h10v10H7z" />
      <path d="M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  design: (
    <>
      <path d="M12 3a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z" />
      <path d="M9 8v4a3 3 0 1 0 6 0V8" />
      <path d="M12 15v6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6 9v9M6 6h.01M10 18v-5a3 3 0 0 1 6 0v5" />
    </>
  ),
  github: (
    <>
      <path d="M9 18c-4 1.2-4-2-6-2m12 4v-3a3.6 3.6 0 0 0-1-2.8c3.3-.4 6.8-1.6 6.8-7.2A5.6 5.6 0 0 0 19.2 3S18 2.6 15 4.6a13.3 13.3 0 0 0-6 0C6 2.6 4.8 3 4.8 3a5.6 5.6 0 0 0-1.6 4c0 5.5 3.5 6.8 6.8 7.2a3.6 3.6 0 0 0-1 2.8v3" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 1 0-7l1.4-1.4a5 5 0 0 1 7.1 7.1L17 13" />
      <path d="M14 11a5 5 0 0 1 0 7l-1.4 1.4a5 5 0 0 1-7.1-7.1L7 11" />
    </>
  ),
};

function IconGlyph({ name, className }: IconGlyphProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {glyphs[name] ?? glyphs.link}
    </svg>
  );
}

export default IconGlyph;
