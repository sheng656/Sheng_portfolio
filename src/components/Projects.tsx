import { motion } from "framer-motion";
import type { ProjectsData, ProjectItem } from "../types";
import IconGlyph from "./IconGlyph";
import { trackProjectOpen, trackGithubClick } from "../lib/gtag";

interface ProjectsProps {
  data: ProjectsData;
}

function ProjectCard({ item, index }: { item: ProjectItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group flex flex-col gap-10 py-16 lg:py-24 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Text Content */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium text-accent-400">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px w-12 bg-base-border" />
        </div>
        
        <h3 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          {item.name}
        </h3>
        
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {item.description}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {item.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-base-border bg-base-elevated/50 px-3 py-1.5 text-xs font-medium text-muted shadow-sm transition-colors hover:border-accent-500/30 hover:bg-accent-500/5"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-6">
          {item.links.map((link) => (
            <a
              key={`${item.id}-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-base font-semibold text-accent-300 transition-all hover:text-accent-100"
              aria-label={`${item.name} ${link.label}`}
              onClick={() => {
                if (link.label.toLowerCase().includes("demo") || link.label.toLowerCase().includes("live")) {
                  trackProjectOpen(item.name);
                } else if (link.label.toLowerCase().includes("github") || link.label.toLowerCase().includes("code")) {
                  trackGithubClick(item.name);
                }
              }}
            >
              <IconGlyph name={link.label.toLowerCase().includes("github") ? "github" : "link"} className="h-4 w-4" />
              {link.label}
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
            </a>
          ))}
        </div>
      </div>

      {/* Visual Content (Layered Mockups) */}
      <div className="flex flex-1 items-center justify-center lg:justify-end">
        <div className="relative h-[400px] w-full max-w-[320px] sm:h-[500px] sm:max-w-[400px]">
          {/* Background Mockup */}
          {item.screenshots && item.screenshots[1] && (
            <motion.div
              className="absolute -right-4 top-12 z-0 w-[75%] overflow-hidden rounded-[2rem] border border-base-border/50 bg-base-surface shadow-xl sm:-right-8"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src={item.screenshots[1]}
                alt={`${item.name} screenshot 2`}
                className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* Foreground Mockup */}
          {item.screenshots && item.screenshots[0] && (
            <motion.div
              className="absolute left-0 top-0 z-10 w-[80%] overflow-hidden rounded-[2.5rem] border-4 border-base-border/30 bg-base-elevated shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[9/19.5] overflow-hidden">
                <img
                  src={item.screenshots[0]}
                  alt={`${item.name} screenshot 1`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}

          {/* Decorative Gradient Blob */}
          <div className={`absolute -inset-10 -z-10 bg-accent-500/10 blur-[80px] rounded-full transition-opacity duration-500 group-hover:opacity-20 ${isEven ? 'right-0' : 'left-0'}`} />
        </div>
      </div>
    </motion.article>
  );
}

function Projects({ data }: ProjectsProps) {
  const headingId = `${data.id}-heading`;

  return (
    <section id={data.id} aria-labelledby={headingId} className="section-anchor">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 id={headingId} className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {data.heading}
        </h2>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-accent-500" />
        <p className="mt-6 max-w-2xl text-muted">
          A selection of my recent work, blending cloud-native architecture with premium frontend experiences.
        </p>
      </div>

      <div className="space-y-4">
        {data.items.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
