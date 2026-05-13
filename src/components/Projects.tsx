import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectsData, ProjectItem } from "../types";
import IconGlyph from "./IconGlyph";
import { trackProjectOpen, trackGithubClick } from "../lib/gtag";

interface ProjectsProps {
  data: ProjectsData;
}

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
  total: number;
  prevId?: string;
  nextId?: string;
}

function ProjectCard({ item, index, total, prevId, nextId }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const [frontIdx, setFrontIdx] = useState(0);
  const lastSwapTime = useRef(0);

  const handleSwap = (idx: number, isClick = false) => {
    const now = Date.now();
    if (frontIdx !== idx && (isClick || now - lastSwapTime.current > 3000)) {
      setFrontIdx(idx);
      lastSwapTime.current = now;
    }
  };

  return (
    <motion.article
      id={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`group flex min-h-[80vh] flex-col gap-8 py-12 lg:min-h-0 lg:gap-16 lg:py-20 ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Visual Content (Interactive Layered Mockups) */}
      {/* pb accounts for the back image's y-offset so it doesn't bleed into the text section */}
      <div className={`flex flex-1 items-center justify-center ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
        <div className="relative h-[420px] w-full max-w-[260px] pb-5 sm:h-[500px] sm:max-w-[340px] sm:pb-6">
          <AnimatePresence mode="popLayout">
            {[0, 1].map((idx) => {
              const isFront = frontIdx === idx;
              const screenshot = item.screenshots?.[idx];
              if (!screenshot) return null;

              return (
                <motion.div
                  key={`${item.id}-shot-${idx}`}
                  layout
                  onClick={() => handleSwap(idx, true)}
                  onMouseEnter={() => handleSwap(idx)}
                  initial={false}
                  animate={{
                    zIndex: isFront ? 20 : 10,
                    // More x-offset, less y — back image shows its own content visibly
                    x: isFront ? 0 : 56,
                    y: isFront ? 0 : 20,
                    scale: isFront ? 1 : 0.88,
                    opacity: isFront ? 1 : 0.55,
                    rotate: isFront ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 28,
                  }}
                  className={`absolute left-0 top-0 w-[80%] cursor-pointer overflow-hidden rounded-[2rem] border-2 shadow-xl transition-colors duration-500 sm:rounded-[2.5rem] sm:border-4 ${
                    isFront 
                      ? "border-base-border/40 bg-base-elevated" 
                      : "border-base-border/10 bg-base-surface"
                  }`}
                >
                  <div className="relative aspect-[9/19.5] overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`${item.name} screenshot ${idx + 1}`}
                      className={`h-full w-full object-cover transition-all duration-700 ${
                        !isFront ? "grayscale blur-[0.3px]" : "grayscale-0 blur-0"
                      }`}
                      loading="lazy"
                    />
                    {!isFront && (
                      <div className="absolute inset-0 bg-accent-500/5 transition-opacity" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <motion.div 
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 6, repeat: Infinity }}
            className={`absolute -inset-8 -z-10 bg-accent-500/10 blur-[80px] rounded-full ${isEven ? 'right-0' : 'left-0'}`} 
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-widest text-accent-400">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="h-[1px] w-8 bg-base-border" />
        </div>
        
        <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
          {item.name}
        </h3>
        
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
          {item.description}
        </p>

        {/* Optimized Tech Tags */}
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {item.techStack.map((tech) => (
            <li
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-md border border-base-border/40 bg-base-elevated/30 px-2 py-0.5 text-[11px] font-medium text-muted transition-colors hover:border-accent-500/20 hover:text-accent-300"
            >
              <span className="h-1 w-1 rounded-full bg-accent-500/60" />
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-5">
          {item.links.map((link) => (
            <a
              key={`${item.id}-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-accent-300 transition-all hover:text-accent-100"
              onClick={() => {
                if (link.label.toLowerCase().includes("demo") || link.label.toLowerCase().includes("live")) {
                  trackProjectOpen(item.name);
                } else if (link.label.toLowerCase().includes("github") || link.label.toLowerCase().includes("code")) {
                  trackGithubClick(item.name);
                }
              }}
            >
              <IconGlyph name={link.label.toLowerCase().includes("github") ? "github" : "link"} className="h-3.5 w-3.5" />
              {link.label}
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </a>
          ))}
        </div>

        {/* Mobile Navigation Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-base-border/30 pt-6 lg:hidden">
          {prevId ? (
            <a href={`#${prevId}`} className="text-xs font-bold uppercase tracking-tighter text-muted transition-colors hover:text-accent-400">
              ← Prev
            </a>
          ) : <div />}
          
          <div className="text-[10px] font-bold text-base-border">PROJECT NAV</div>

          {nextId ? (
            <a href={`#${nextId}`} className="text-xs font-bold uppercase tracking-tighter text-muted transition-colors hover:text-accent-400">
              Next →
            </a>
          ) : <div />}
        </div>
      </div>
    </motion.article>
  );
}

function Projects({ data }: ProjectsProps) {
  const headingId = `${data.id}-heading`;

  return (
    <section id={data.id} aria-labelledby={headingId} className="section-anchor">
      <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
        <h2 id={headingId} className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {data.heading}
        </h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-accent-500" />
        <p className="mt-6 max-w-xl text-base text-muted lg:text-lg">
          Cloud-native architecture blended with premium frontend experiences.
        </p>
      </div>

      <div className="divide-y divide-base-border/20 space-y-8">
        {data.items.map((item, index) => (
          <ProjectCard 
            key={item.id} 
            item={item} 
            index={index} 
            total={data.items.length}
            prevId={index > 0 ? data.items[index - 1].id : undefined}
            nextId={index < data.items.length - 1 ? data.items[index + 1].id : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
